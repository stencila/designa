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

  return {
    height,
    width,
    svg: svgContent,
  }
}
