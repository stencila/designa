import { Component, h, Host, Prop, Watch } from '@stencil/core'
import { D3DragEvent, drag } from 'd3-drag'
import {
  forceCollide,
  forceLink,
  forceManyBody,
  forceRadial,
  forceSimulation,
  forceX,
  forceY,
  SimulationLinkDatum,
  SimulationNodeDatum,
} from 'd3-force'
import { Selection } from 'd3-selection'
import { graphEdgeToLinks } from './graphs'
import { Graph, GraphNode } from './types'
import { GraphDatum, initGraph } from './utils'
import { getResourceLabel } from './utils/resource'

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
    this.nodes = nextGraph.nodes
    this.links ?? graphEdgeToLinks(nextGraph.edges)
    this.drawGraph(nextGraph)
  }

  private graphRef: {
    height: number
    width: number
    svg: Selection<SVGGElement, unknown, null, undefined>
  }

  private nodes: GraphNode[]
  private links: SimulationLinkDatum<SimulationNodeDatum>[]

  private drawGraph = (graph: Graph) => {
    // const { width, svg } = this.graphRef
    const { svg } = this.graphRef

    const nodes = this.nodes ?? graph.nodes
    const links = this.links ?? graphEdgeToLinks(graph.edges)

    const simulation = forceSimulation(nodes)
      .force(
        'link',
        forceLink(links)
          .id(({ index }) => index ?? 0)
          .distance(20)
          .strength(1)
      )
      .force('charge', forceManyBody().strength(-25))
      // .force('layout', forceRadial(width / 4).strength(0.1))
      .force('collision', forceCollide())
      .force('x', forceX())
      .force('y', forceY())

    const click = (_event: Event, d: GraphDatum) => {
      delete d.fx
      delete d.fy
      simulation.alpha(1).restart()
    }

    type NodeDragEvent = D3DragEvent<SVGGElement, GraphDatum, GraphDatum>

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

    const link = svg
      .append('g')
      .attr('stroke', 'var(--color-neutral-100)')
      .selectAll('line')
      .data(links)
      .join('line')

    const node = svg
      .append('g')
      .attr('fill', '#fff')
      .selectAll<SVGGElement, GraphDatum>('g')
      .data<GraphDatum>(nodes)
      .join('g')
      .attr('class', (d) => {
        return d.type
      })
      .attr('r', 8)
      .on('click', click)
      .call(dragFn)

    node
      .append('circle')
      .attr('class', (d) => {
        // console.log(d)
        return d.type
      })
      .attr('r', 8)

    node
      .append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', '.35em')
      .text(getResourceLabel)
      .exit()

    node.append('title').text((d) => d.type)

    simulation.on('tick', () => {
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
