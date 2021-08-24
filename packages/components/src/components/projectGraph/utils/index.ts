import { SimulationNodeDatum } from 'd3-force'
import { select } from 'd3-selection'
import { zoom } from 'd3-zoom'
import { Resource } from '../types'

export type GraphDatum = SimulationNodeDatum & Resource

export const initGraph = (el: HTMLDivElement) => {
  const elSize = el.getBoundingClientRect()
  const height = elSize.height >= 100 ? elSize.height : 600
  const width = elSize.width >= 100 ? elSize.width : 600

  const svg = select(el)
    .append('svg')
    .attr('viewBox', [-width / 2, -height / 2, width, height].join(' '))

  const svgContent = svg.append('g')

  const zoomFn = zoom<SVGSVGElement, unknown>().on('zoom', ({ transform }) => {
    svgContent.attr('transform', transform)
  })

  svg.call(zoomFn)

  svg
    .append('svg:defs')
    .selectAll('marker')
    .data(['end'])
    .enter()
    .append('svg:marker')
    .attr('id', String)
    .attr('viewBox', '0 -4 10 10')
    .attr('refX', 24)
    .attr('refY', 0)
    .attr('markerWidth', 4)
    .attr('markerHeight', 4)
    .attr('orient', 'auto')
    .append('svg:path')
    .attr('d', 'M0,-4L10,0L0,4')

  return {
    height,
    width,
    svg: svgContent,
  }
}
