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
import { Config, Data, Layout } from 'plotly.js'
import { plotlyMediaType, PlotlyObject } from './imagePlotlyUtils'

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

  /**
   * The Plotly layout settings object
   */
  @Prop() layout?: Partial<Layout>

  /**
   * The Plotly configuration object
   */
  @Prop() config?: Partial<Config>

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
    const { data, layout = this.layout, config = this.config } =
      this.getPlotContent() ?? {}

    if (!data) return

    const root = document.createElement('div')
    const pic = this.el.querySelector<HTMLPictureElement>('picture')

    pic?.appendChild(root)

    window.Plotly?.plot(root, data, layout, config)
      .then(() => {
        this.plotIsRendered = true
      })
      .catch((err) => {
        console.error('Failed to render plot', err)
      })
  }

  /** Inject the Plotly.js script tag if it hasn't been requested yet */
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

  /** Check if the Plotly.js script tag is present in the document */
  private isPlotlyPresent = (): boolean => {
    plotlyIsPresent =
      plotlyIsPresent === undefined
        ? document.querySelector(`head script[src="${plotlySrc}"]`) !== null
        : plotlyIsPresent

    return plotlyIsPresent
  }

  private getPlotContent = (): PlotlyObject | undefined => {
    if (this.data) {
      return { data: this.data, layout: this.layout, config: this.config }
    }

    const plotEl = this.el.querySelector<HTMLScriptElement>(
      `[type="${plotlyMediaType}"]`
    )

    if (plotEl) {
      try {
        const content = plotEl.textContent
        const contentParsed: Data[] | PlotlyObject = JSON.parse(content ?? '')
        return Array.isArray(contentParsed)
          ? { data: contentParsed }
          : contentParsed
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
