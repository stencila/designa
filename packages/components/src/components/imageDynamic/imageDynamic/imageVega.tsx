import { Component, Element, h, Host, Prop, State } from '@stencil/core'
import embed, { EmbedOptions, Result, VisualizationSpec } from 'vega-embed'
import { createPlotContainer } from '../imageDynamicUtils'
import { vegaMediaType } from './imageVegaUtils'

@Component({
  tag: 'stencila-image-vega',
  styleUrls: {
    default: 'imageVega.css',
    material: 'imageVega.css',
  },
  scoped: true,
})
export class ImageVegaComponent {
  @Element() private el: HTMLStencilaImageVegaElement

  private plotContainer: HTMLDivElement | null

  /**
   * The Vega or Vega-Lite spec @see
   * @see https://vega.github.io/vega/docs/specification/
   */
  @Prop() spec?: VisualizationSpec | string

  /**
   * A JavaScript object containing options for embedding
   * @see https://github.com/vega/vega-embed#options
   */
  @Prop() options?: Partial<EmbedOptions>

  @State() private plotIsRendered = false

  private getPlotContent = (): VisualizationSpec | string | undefined => {
    if (this.spec !== undefined && this.spec !== '') {
      return this.spec
    }

    const plotEl = this.el.querySelector<HTMLScriptElement>(
      `[type^="${vegaMediaType}"]`
    )

    if (plotEl) {
      try {
        const content = plotEl.textContent
        const contentParsed = JSON.parse(content ?? '')

        return contentParsed
      } catch (err) {
        console.error('Could not parse plot data')
      }
    }

    return undefined
  }

  private renderPlot = (): Promise<Result | void> => {
    const spec = this.getPlotContent()
    if (spec !== undefined && this.plotContainer) {
      const root = this.plotContainer ?? createPlotContainer(this.el)

      this.plotIsRendered = true

      return embed(root, spec, {
        actions: {
          editor: false,
        },
      })
    }

    return Promise.resolve()
  }

  componentDidLoad(): Promise<unknown> | void {
    return this.renderPlot()
  }

  componentWillUpdate(): void {
    this.renderPlot().catch((err: unknown) => {
      console.log(err)
    })
  }

  render(): HTMLStencilaImagePlotlyElement {
    return <Host class={{ imgHidden: this.plotIsRendered }}></Host>
  }
}
