import { Component, h, Host, Prop, Watch } from '@stencil/core'
import { D3DragEvent, drag } from 'd3-drag'
import {
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
import { FileResource, Graph } from './types'
import { GraphDatum, initGraph } from './utils'
import { hasKind } from './utils/guards'
import { getResourceLabel } from './utils/resource'
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
          // .distance(150)
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
        // .distance((d) => (isInterGroupLink(d.source, d.target) ? 250 : 500))
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
          // .distance(60)
          .iterations(3)
      )
      .force(
        'charge',
        // @ts-ignore
        forceManyBody()
          .strength((d) => {
            // @ts-ignore
            return d.type === 'File' ? -100 : -1500
          })
          .distanceMin(10)
          .distanceMax(1500)
      )
      // .force('layout', forceRadial(width / 4).strength(0.1))
      .force('collision', forceCollide(64).strength(1).iterations(4))
      .force('x', forceX().strength(0.02))
      .force('y', forceY().strength(0.02))
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
          return `${d.relation.type}`
        })

        return linkGroup
      })

    const groupLinksContainer = svg
      .append('g')
      .attr('class', 'groupLinkContainer')

    const groupLinks = groupLinksContainer
      .selectAll('g')
      .data(groupedGraph.groupLinks)
      .join((enter) => {
        const linkGroup = enter.append('g')

        linkGroup.append('line').attr('marker-end', 'url(#end)')

        linkGroup.append('text').text((d) => {
          return `${d.relation.type}`
        })

        return linkGroup
      })

    const nodeContainer = this.nodeContainer ?? svg.append('g')

    if (!this.nodeContainer) {
      this.nodeContainer = nodeContainer
    }

    const drawHull = (
      d: string | number | undefined | FileResource
    ): string => {
      if (d === undefined || typeof d === 'string' || typeof d === 'number') {
        return ''
      }

      const hullFileNodes = groupedGraph.groupLinks.filter(
        (node) => node.group === d.path
      )

      const rootCoords: [number, number][] =
        hullFileNodes.length === 0
          ? []
          : [
              [-32, -32],
              [32, -32],
              [32, 32],
              [0, 32],
            ]

      const hull = polygonHull(
        // @ts-ignore
        hullFileNodes.reduce(
          // @ts-ignore
          (nodes: [number, number], node) => [
            ...nodes,
            [
              // @ts-ignore
              node.source.x - node.target.x - 32,
              // @ts-ignore
              node.source.y - node.target.y - 32,
            ],
            [
              // @ts-ignore
              node.source.x - node.target.x - 32,
              // @ts-ignore
              node.source.y - node.target.y + 32,
            ],
            [
              // @ts-ignore
              node.source.x - node.target.x + 32,
              // @ts-ignore
              node.source.y - node.target.y - 32,
            ],
            [
              // @ts-ignore
              node.source.x - node.target.x + 32,
              // @ts-ignore
              node.source.y - node.target.y + 32,
            ],
          ],
          rootCoords
        )
      )

      // @ts-ignore
      return hull ? line().curve(curveBasisClosed)(hull) : ''
    }

    // @ts-ignore
    const hull = hullContainer
      .selectAll('g')
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
      .attr('class', (d) => {
        // console.log(d)
        return hasKind(d) ? `${d.type} ${d.kind}` : d.type
      })
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

      groupLinks
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
      groupLinks.select('text').attr('transform', (d) => {
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

      hull
        .attr(
          'transform',
          // @ts-ignore
          (d) => `translate(${d.x ?? 0}, ${d.y ?? 0})`
        )
        .attr('d', (d) => drawHull(d) ?? '')
    })

    // invalidation.then(() => simulation.stop()) */
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
