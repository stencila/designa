import { Component, h, Host, Prop, Watch } from '@stencil/core'
import { D3DragEvent, drag } from 'd3-drag'
import {
  forceCenter,
  forceCollide,
  forceLink,
  forceManyBody,
  forceSimulation,
  forceX,
  forceY,
} from 'd3-force'
import { polygonHull } from 'd3-polygon'
import { Selection } from 'd3-selection'
import { curveBasisClosed, line } from 'd3-shape'
import { graphToGroupedGraph, isInterGroupLink } from './graphs'
import { FileResource, Graph, SimulationGraphNode } from './types'
import { GraphDatum, initGraph } from './utils'
import { hasKind } from './utils/guards'
import { getNodeX, getNodeY } from './utils/nodes'
import { getRelationLabel, getResourceLabel } from './utils/resource'
import { getResourceSymbol } from './utils/symbols'

type NodeDragEvent = D3DragEvent<SVGGElement, GraphDatum, GraphDatum>

@Component({
  tag: 'stencila-project-graph',
  styleUrls: {
    default: 'projectGraph.css',
    material: 'projectGraph.material.css',
  },
  shadow: true,
})
export class ProjectGraph {
  private el?: HTMLDivElement

  /**
   * The project graph data to render
   */
  @Prop() graph: Graph

  @Watch('graph')
  updateGraph(nextGraph: Graph): void {
    this.drawGraph(nextGraph)
  }

  private graphRef: {
    height: number
    width: number
    svg: Selection<SVGGElement, unknown, null, undefined>
  }

  private nodeContainer:
    | Selection<SVGGElement, unknown, null, unknown>
    | undefined

  private linkContainer:
    | Selection<SVGGElement, unknown, null, unknown>
    | undefined

  private hullContainer:
    | Selection<SVGGElement, unknown, null, unknown>
    | undefined

  private drawGraph = (graph: Graph) => {
    const { svg } = this.graphRef

    const groupedGraph = graphToGroupedGraph(graph)

    const simulation = forceSimulation(groupedGraph.nodes)
      .force(
        'link',
        forceLink(groupedGraph.links)
          .strength((d) =>
            isInterGroupLink(d.source, d.target) ||
            (hasKind(d.source) && d.source.kind === 'Link') ||
            (hasKind(d.target) && d.target.kind === 'Link')
              ? 1
              : 0.375
          )
          .iterations(2)
          .distance((d) =>
            (hasKind(d.source) && d.source.kind === 'Link') ||
            (hasKind(d.target) && d.target.kind === 'Link')
              ? 0
              : 30
          )
          .iterations(2)
      )
      .force(
        'link:groups',
        forceLink(groupedGraph.groupLinks)
          .strength((d) =>
            (hasKind(d.source) && d.source.kind === 'Link') ||
            (hasKind(d.target) && d.target.kind === 'Link')
              ? 1
              : 0.375
          )
          .iterations(3)
      )
      .force(
        'charge',
        forceManyBody<SimulationGraphNode>()
          .strength((d) => {
            return d.type === 'File' ? -100 : -1500
          })
          .distanceMin(10)
          .distanceMax(1500)
      )
      .force('collision', forceCollide(64).strength(1).iterations(4))
      .force('x', forceX().strength(0.02))
      .force('y', forceY().strength(0.02))
      .force('center', forceCenter())
      .velocityDecay(0.4)
      .alphaDecay(0.05)

    const click = (_event: Event, d: GraphDatum) => {
      delete d.fx
      delete d.fy
      simulation.alpha(0.5).restart()
    }

    const dragFn = drag<SVGGElement, GraphDatum, GraphDatum>().on(
      'drag',
      (event: NodeDragEvent, d: GraphDatum) => {
        // d.fx = clamp(event.x, 0, width)
        // d.fy = clamp(event.y, 0, height)
        d.fx = event.x
        d.fy = event.y

        simulation.alpha(0.05).restart()
      }
    )

    const hullContainer =
      this.hullContainer ?? svg.append('g').attr('class', 'hullContainer')

    if (!this.hullContainer) {
      this.hullContainer = hullContainer
    }

    const linkContainer =
      this.linkContainer ?? svg.append('g').attr('class', 'linkContainer')

    if (!this.linkContainer) {
      this.linkContainer = linkContainer
    }

    const links = linkContainer
      .selectAll('g')
      .data(groupedGraph.links)
      .join((enter) => {
        const linkGroup = enter.append('g')

        linkGroup.append('line').attr('marker-end', 'url(#end)')

        linkGroup.append('text').text((d) => {
          return getRelationLabel(d.relation)
        })

        return linkGroup
      })

    const nodeContainer = this.nodeContainer ?? svg.append('g')

    if (!this.nodeContainer) {
      this.nodeContainer = nodeContainer
    }

    // Hulls are the container shapes surrounding clusters of nodes
    // @see https://github.com/d3/d3-polygon/blob/main/README.md#polygonhull
    const drawHull = (
      fileNode: string | number | undefined | FileResource
    ): string => {
      if (
        fileNode === undefined ||
        typeof fileNode === 'string' ||
        typeof fileNode === 'number'
      ) {
        return ''
      }

      // Padding amount to use when drawing shape around symbols
      const pad = 32

      const hullFileNodes = groupedGraph.groupLinks.filter(
        (node) => node.group === fileNode.path
      )

      const rootCoords: [number, number][] =
        hullFileNodes.length === 0
          ? []
          : [
              [-pad, -pad],
              [pad, -pad],
              [pad, pad],
              [0, pad],
            ]

      // The target is always the File node being linked to
      const targetX = getNodeX(fileNode)
      const targetY = getNodeY(fileNode)

      const hull = polygonHull(
        hullFileNodes.reduce((nodes: [number, number][], node) => {
          const sourceX = getNodeX(node.source)
          const sourceY = getNodeY(node.source)

          return [
            ...nodes,
            [sourceX - targetX - pad, sourceY - targetY - pad],
            [sourceX - targetX - pad, sourceY - targetY + pad],
            [sourceX - targetX + pad, sourceY - targetY - pad],
            [sourceX - targetX + pad, sourceY - targetY + pad],
          ]
        }, rootCoords)
      )

      return hull ? line().curve(curveBasisClosed)(hull) ?? '' : ''
    }

    const hull = hullContainer
      .selectAll('path')
      .data(groupedGraph.groups)
      .join('path')
      .attr('d', (d) => drawHull(d) ?? '')

    const node = nodeContainer
      .selectAll<SVGGElement, GraphDatum>('g')
      .data<GraphDatum>(groupedGraph.nodes)
      .join((enter) => {
        const nodeGroup = enter.append('g')

        nodeGroup
          .append('path')
          .attr('d', (d) =>
            getResourceSymbol(d)(d.type === 'File' ? 1024 : 512)
          )
          .attr('class', (d) => {
            return hasKind(d) ? `${d.type} ${d.kind}` : d.type
          })

        nodeGroup
          .append('text')
          .attr('class', 'textBackdrop')
          .attr('dy', '.35em')
          .text(getResourceLabel)
          .append('text')
          .exit()

        nodeGroup
          .append('text')
          .attr('dy', '.35em')
          .text(getResourceLabel)
          .exit()

        nodeGroup.append('title').text((d) => d.type)

        return nodeGroup
      })
      .attr('class', (d) => (hasKind(d) ? `${d.type} ${d.kind}` : d.type))
      .on('click', click)
      .call(dragFn)

    simulation.on('tick', () => {
      // Position link lines
      links
        .select('line')
        .attr('x1', ({ source }) =>
          typeof source === 'object' ? source.x ?? 0 : source
        )
        .attr('y1', ({ source }) =>
          typeof source === 'object' ? source.y ?? 0 : source
        )
        .attr('x2', ({ target }) =>
          typeof target === 'object' ? target.x ?? 0 : target
        )
        .attr('y2', ({ target }) =>
          typeof target === 'object' ? target.y ?? 0 : target
        )

      // Position link line labels
      links.select('text').attr('transform', (d) => {
        if (
          typeof d.source === 'object' &&
          typeof d.source.y === 'number' &&
          typeof d.source.x === 'number' &&
          typeof d.target === 'object' &&
          typeof d.target.y === 'number' &&
          typeof d.target.x === 'number'
        ) {
          return `translate(${d.source.x - (d.source.x - d.target.x) / 2}, ${
            d.source.y - (d.source.y - d.target.y) / 2
          })`
        }

        return ''
      })

      node.attr('transform', ({ x, y }) => `translate(${x ?? 0}, ${y ?? 0})`)

      // Update File node grouping container shape
      hull
        .attr('transform', (d) => `translate(${d.x ?? 0}, ${d.y ?? 0})`)
        .attr('d', (d) => drawHull(d) ?? '')
    })
  }

  componentDidLoad() {
    if (this.el) {
      this.graphRef = initGraph(this.el)
      this.drawGraph(this.graph)
    }
  }

  public render() {
    return (
      <Host>
        <div ref={(el) => (this.el = el)} class="projectGraph"></div>
      </Host>
    )
  }
}
