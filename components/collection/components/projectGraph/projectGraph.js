import { Component, h, Host, Prop, Watch } from '@stencil/core';
import { drag } from 'd3-drag';
import { forceCenter, forceCollide, forceLink, forceManyBody, forceSimulation, forceX, forceY, } from 'd3-force';
import { polygonHull } from 'd3-polygon';
import { curveBasisClosed, line } from 'd3-shape';
import { graphToGroupedGraph, isInterGroupLink } from './graphs';
import { initGraph } from './utils';
import { hasKind } from './utils/guards';
import { getNodeX, getNodeY } from './utils/nodes';
import { getRelationLabel, getResourceLabel } from './utils/resource';
import { getResourceSymbol } from './utils/symbols';
export class ProjectGraph {
  constructor() {
    this.drawGraph = (graph) => {
      var _a, _b, _c;
      const { svg } = this.graphRef;
      const groupedGraph = graphToGroupedGraph(graph);
      const simulation = forceSimulation(groupedGraph.nodes)
        .force('link', forceLink(groupedGraph.links)
        .strength((d) => isInterGroupLink(d.source, d.target) ||
        (hasKind(d.source) && d.source.kind === 'Link') ||
        (hasKind(d.target) && d.target.kind === 'Link')
        ? 1
        : 0.375)
        .iterations(2)
        .distance((d) => (hasKind(d.source) && d.source.kind === 'Link') ||
        (hasKind(d.target) && d.target.kind === 'Link')
        ? 0
        : 30)
        .iterations(2))
        .force('link:groups', forceLink(groupedGraph.groupLinks)
        .strength((d) => (hasKind(d.source) && d.source.kind === 'Link') ||
        (hasKind(d.target) && d.target.kind === 'Link')
        ? 1
        : 0.375)
        .iterations(3))
        .force('charge', forceManyBody()
        .strength((d) => {
        return d.type === 'File' ? -100 : -1500;
      })
        .distanceMin(10)
        .distanceMax(1500))
        .force('collision', forceCollide(64).strength(1).iterations(4))
        .force('x', forceX().strength(0.02))
        .force('y', forceY().strength(0.02))
        .force('center', forceCenter())
        .velocityDecay(0.4)
        .alphaDecay(0.05);
      const click = (_event, d) => {
        delete d.fx;
        delete d.fy;
        simulation.alpha(0.5).restart();
      };
      const dragFn = drag().on('drag', (event, d) => {
        // d.fx = clamp(event.x, 0, width)
        // d.fy = clamp(event.y, 0, height)
        d.fx = event.x;
        d.fy = event.y;
        simulation.alpha(0.05).restart();
      });
      const hullContainer = (_a = this.hullContainer) !== null && _a !== void 0 ? _a : svg.append('g').attr('class', 'hullContainer');
      if (!this.hullContainer) {
        this.hullContainer = hullContainer;
      }
      const linkContainer = (_b = this.linkContainer) !== null && _b !== void 0 ? _b : svg.append('g').attr('class', 'linkContainer');
      if (!this.linkContainer) {
        this.linkContainer = linkContainer;
      }
      const links = linkContainer
        .selectAll('g')
        .data(groupedGraph.links)
        .join((enter) => {
        const linkGroup = enter.append('g');
        linkGroup.append('line').attr('marker-end', 'url(#end)');
        linkGroup.append('text').text((d) => {
          return getRelationLabel(d.relation);
        });
        return linkGroup;
      });
      const nodeContainer = (_c = this.nodeContainer) !== null && _c !== void 0 ? _c : svg.append('g');
      if (!this.nodeContainer) {
        this.nodeContainer = nodeContainer;
      }
      // Hulls are the container shapes surrounding clusters of nodes
      // @see https://github.com/d3/d3-polygon/blob/main/README.md#polygonhull
      const drawHull = (fileNode) => {
        var _a;
        if (fileNode === undefined ||
          typeof fileNode === 'string' ||
          typeof fileNode === 'number') {
          return '';
        }
        // Padding amount to use when drawing shape around symbols
        const pad = 32;
        const hullFileNodes = groupedGraph.groupLinks.filter((node) => node.group === fileNode.path);
        const rootCoords = hullFileNodes.length === 0
          ? []
          : [
            [-pad, -pad],
            [pad, -pad],
            [pad, pad],
            [0, pad],
          ];
        // The target is always the File node being linked to
        const targetX = getNodeX(fileNode);
        const targetY = getNodeY(fileNode);
        const hull = polygonHull(hullFileNodes.reduce((nodes, node) => {
          const sourceX = getNodeX(node.source);
          const sourceY = getNodeY(node.source);
          return [
            ...nodes,
            [sourceX - targetX - pad, sourceY - targetY - pad],
            [sourceX - targetX - pad, sourceY - targetY + pad],
            [sourceX - targetX + pad, sourceY - targetY - pad],
            [sourceX - targetX + pad, sourceY - targetY + pad],
          ];
        }, rootCoords));
        return hull ? (_a = line().curve(curveBasisClosed)(hull)) !== null && _a !== void 0 ? _a : '' : '';
      };
      const hull = hullContainer
        .selectAll('path')
        .data(groupedGraph.groups)
        .join('path')
        .attr('d', (d) => { var _a; return (_a = drawHull(d)) !== null && _a !== void 0 ? _a : ''; });
      const node = nodeContainer
        .selectAll('g')
        .data(groupedGraph.nodes)
        .join((enter) => {
        const nodeGroup = enter.append('g');
        nodeGroup
          .append('path')
          .attr('d', (d) => getResourceSymbol(d)(d.type === 'File' ? 1024 : 512))
          .attr('class', (d) => {
          return hasKind(d) ? `${d.type} ${d.kind}` : d.type;
        });
        nodeGroup
          .append('text')
          .attr('class', 'textBackdrop')
          .attr('dy', '.35em')
          .text(getResourceLabel)
          .append('text')
          .exit();
        nodeGroup
          .append('text')
          .attr('dy', '.35em')
          .text(getResourceLabel)
          .exit();
        nodeGroup.append('title').text((d) => d.type);
        return nodeGroup;
      })
        .attr('class', (d) => (hasKind(d) ? `${d.type} ${d.kind}` : d.type))
        .on('click', click)
        .call(dragFn);
      simulation.on('tick', () => {
        // Position link lines
        links
          .select('line')
          .attr('x1', ({ source }) => { var _a; return typeof source === 'object' ? (_a = source.x) !== null && _a !== void 0 ? _a : 0 : source; })
          .attr('y1', ({ source }) => { var _a; return typeof source === 'object' ? (_a = source.y) !== null && _a !== void 0 ? _a : 0 : source; })
          .attr('x2', ({ target }) => { var _a; return typeof target === 'object' ? (_a = target.x) !== null && _a !== void 0 ? _a : 0 : target; })
          .attr('y2', ({ target }) => { var _a; return typeof target === 'object' ? (_a = target.y) !== null && _a !== void 0 ? _a : 0 : target; });
        // Position link line labels
        links.select('text').attr('transform', (d) => {
          if (typeof d.source === 'object' &&
            typeof d.source.y === 'number' &&
            typeof d.source.x === 'number' &&
            typeof d.target === 'object' &&
            typeof d.target.y === 'number' &&
            typeof d.target.x === 'number') {
            return `translate(${d.source.x - (d.source.x - d.target.x) / 2}, ${d.source.y - (d.source.y - d.target.y) / 2})`;
          }
          return '';
        });
        node.attr('transform', ({ x, y }) => `translate(${x !== null && x !== void 0 ? x : 0}, ${y !== null && y !== void 0 ? y : 0})`);
        // Update File node grouping container shape
        hull
          .attr('transform', (d) => { var _a, _b; return `translate(${(_a = d.x) !== null && _a !== void 0 ? _a : 0}, ${(_b = d.y) !== null && _b !== void 0 ? _b : 0})`; })
          .attr('d', (d) => { var _a; return (_a = drawHull(d)) !== null && _a !== void 0 ? _a : ''; });
      });
    };
  }
  updateGraph(nextGraph) {
    this.drawGraph(nextGraph);
  }
  componentDidLoad() {
    if (this.el) {
      this.graphRef = initGraph(this.el);
      this.drawGraph(this.graph);
    }
  }
  render() {
    return (h(Host, null,
      h("div", { ref: (el) => (this.el = el), class: "projectGraph" })));
  }
  static get is() { return "stencila-project-graph"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "default": ["projectGraph.css"],
    "material": ["projectGraph.material.css"]
  }; }
  static get styleUrls() { return {
    "default": ["projectGraph.css"],
    "material": ["projectGraph.material.css"]
  }; }
  static get properties() { return {
    "graph": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Graph",
        "resolved": "Graph",
        "references": {
          "Graph": {
            "location": "import",
            "path": "./types"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The project graph data to render"
      }
    }
  }; }
  static get watchers() { return [{
      "propName": "graph",
      "methodName": "updateGraph"
    }]; }
}
//# sourceMappingURL=projectGraph.js.map