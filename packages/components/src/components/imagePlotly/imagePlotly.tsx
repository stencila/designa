import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Listen,
  Prop,
  State,
} from '@stencil/core'
import { Data } from 'plotly.js'
import { plotlyMediaType } from './imagePlotlyUtils'

const plotlySrc = 'https://cdn.plot.ly/plotly-latest.min.js'

let plotlyIsPresent: boolean
let plotlyIsLoaded: boolean

@Component({
  tag: 'stencila-image-plotly',
  styleUrls: {
    default: 'imagePlotly.css',
    material: 'imagePlotly.css',
  },
  scoped: true,
})
export class ImagePlotlyComponent {
  @Element() private el: HTMLStencilaImagePlotlyElement

  /**
   * The Plotly data to render as an interactive visualization.
   */
  @Prop() data?: Data[]

  @State() private plotIsRendered = false

  /** Custom event emitter to indicate that the loading of the Plotly.js script has finished */
  @Event() public plotlyLoaded: EventEmitter

  /** Render the Plotly data, if it hasn’t been rendered already */
  @Listen('plotlyLoaded', { target: 'window' })
  public onPlotlyLoaded(): void {
    if (!this.plotIsRendered) {
      this.renderPlot()
    }
  }

  private renderPlot = () => {
    const data = this.getPlotData()

    if (!data) return

    const root = document.createElement('div')
    const pic = this.el.querySelector<HTMLPictureElement>('picture')

    pic?.appendChild(root)

    window.Plotly?.plot(root, data)
      .then(() => {
        this.plotIsRendered = true
      })
      .catch((err) => {
        console.error('Failed to render plot', err)
      })
  }

  private loadPlotly = () => {
    if (this.isPlotlyPresent()) return

    const script = document.createElement('script')
    script.setAttribute('src', plotlySrc)
    plotlyIsPresent = true

    script.addEventListener('load', () => {
      plotlyIsLoaded = true
      this.plotlyLoaded.emit()
    })

    document.querySelector<HTMLHeadElement>('head')?.appendChild(script)
  }

  private isPlotlyPresent = (): boolean => {
    plotlyIsPresent =
      plotlyIsPresent === undefined
        ? document.querySelector(`head script[src="${plotlySrc}"]`) !== null
        : plotlyIsPresent

    return plotlyIsPresent
  }

  private getPlotData = (): Data[] | undefined => {
    if (this.data) return this.data

    const plotEl = this.el.querySelector<HTMLScriptElement>(
      `[type="${plotlyMediaType}"]`
    )

    if (plotEl) {
      try {
        const data = plotEl.textContent
        return JSON.parse(data ?? '')
      } catch (err) {
        console.error('Could not parse plot data')
      }
    }

    return undefined
  }

  componentWillLoad(): Promise<unknown> | void {
    if (!this.plotIsRendered && plotlyIsLoaded) {
      this.renderPlot()
    } else {
      this.loadPlotly()
    }
  }

  render(): HTMLStencilaImagePlotlyElement {
    return <Host class={{ imgHidden: this.plotIsRendered }}></Host>
  }
}
