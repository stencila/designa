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
import { Selection } from 'd3-selection'
import { graphEdgeToLinks } from './graphs'
import { Graph } from './types'
import { GraphDatum, initGraph } from './utils'
import { getResourceLabel } from './utils/resource'
import { getResourceSymbol } from './utils/symbols'

type NodeDragEvent = D3DragEvent<SVGGElement, GraphDatum, GraphDatum>

@Component({
  tag: 'stencila-project-graph',
  styleUrls: {
    default: 'projectGraph.css',
    material: 'projectGraph.material.css',
  },
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

  private drawGraph = (graph: Graph) => {
    // const { width, svg } = this.graphRef
    const { svg } = this.graphRef

    const nodes = graph.nodes
    const edges = graphEdgeToLinks(graph.edges)

    const simulation = forceSimulation(nodes)
      .force(
        'link',
        forceLink(edges)
          .id(({ index }) => index ?? 0)
          .distance(100)
          .strength(1)
      )
      .force('charge', forceManyBody().strength(-400))
      // .force('layout', forceRadial(width / 4).strength(0.1))
      .force('collision', forceCollide())
      .force('x', forceX())
      .force('y', forceY())

    const click = (_event: Event, d: GraphDatum) => {
      delete d.fx
      delete d.fy
      simulation.alpha(1).restart()
    }

    const dragFn = drag<SVGGElement, GraphDatum, GraphDatum>().on(
      'drag',
      (event: NodeDragEvent, d: GraphDatum) => {
        // d.fx = clamp(event.x, 0, width)
        // d.fy = clamp(event.y, 0, height)
        d.fx = event.x
        d.fy = event.y

        simulation.alpha(1).restart()
      }
    )

    const linkContainer =
      this.linkContainer ?? svg.append('g').attr('class', 'linkContainer')

    if (!this.linkContainer) {
      this.linkContainer = linkContainer
    }

    const links = linkContainer.selectAll('line').data(edges).join('g')

    const link = links.append('line')

    const linkLabels = links.append('text').text((d) => {
      return `${d.relation.type}`
    })

    const nodeContainer =
      this.nodeContainer ?? svg.append('g').attr('fill', '#fff')

    if (!this.nodeContainer) {
      this.nodeContainer = nodeContainer
    }

    const node = nodeContainer
      .selectAll<SVGGElement, GraphDatum>('g')
      .data<GraphDatum>(nodes)
      .join('g')
      .attr('class', (d) => d.type)
      .on('click', click)
      .call(dragFn)

    node
      .append('path')
      .attr('d', (d) => getResourceSymbol(d)())
      .attr('class', (d) => {
        // console.log(d)
        return d.type
      })

    node.append('text').attr('dy', '.35em').text(getResourceLabel).exit()

    node.append('title').text((d) => d.type)

    simulation.on('tick', () => {
      // Position link line labels
      linkLabels.attr('transform', (d) => {
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

      // Position link lines
      link
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

      node.attr('transform', ({ x, y }) => `translate(${x ?? 0}, ${y ?? 0})`)
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
