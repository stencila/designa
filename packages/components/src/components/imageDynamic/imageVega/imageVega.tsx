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
import embed, { Result, VisualizationSpec } from 'vega-embed'
import { injectScriptSrc } from '../../utls/jsDeps'
import { createPlotContainer } from '../imageDynamicUtils'
import {
  getVegaLibSrc,
  getVegaVersion,
  VegaDependency,
  VegaLibType,
  VegaLoadEvent,
  vegaMediaType,
} from './imageVegaUtils'

const isLoaded: Record<VegaLibType, boolean | undefined> = {
  vega: undefined,
  'vega-lite': undefined,
}

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

  private vegaDependency: VegaDependency

  private detectVegaDependency = (
    spec: VisualizationSpec | string | undefined
  ): VegaDependency => {
    const dependency = getVegaVersion(
      typeof spec === 'object' ? spec.$schema : spec
    )
    this.vegaDependency = dependency

    return dependency
  }

  /**
   * The Vega or Vega-Lite spec
   * @see https://vega.github.io/vega/docs/specification/
   */
  @Prop() spec?: VisualizationSpec | string

  /**
   * A JavaScript object containing options for embedding
   * @see https://github.com/vega/vega-embed#options
   */
  @Prop() options?: Record<string, unknown> = {}
  // TODO: Fix type definition. Currently StencilJS writes user computer specific
  // file path in the auto-generated component README.md, which causes
  // package release failures on CI.

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

  /** Custom event emitter to indicate that the loading of the Vega JS script has finished */
  @Event() public vegaLoaded: EventEmitter<VegaLoadEvent>

  /** When detecting that the Vega JS has loaded, render the data if it hasn’t been rendered already */
  @Listen('vegaLoaded', { target: 'window' })
  public onVegaLoaded(e: CustomEvent<VegaLoadEvent>): void {
    if (
      !this.plotIsRendered &&
      e.detail.library === this.vegaDependency.library
    ) {
      this.renderPlot().catch((err: unknown) => {
        console.log(err)
      })
    }
  }

  private renderPlot = (): Promise<Result | void> => {
    const spec = this.getPlotContent()

    this.plotContainer = this.plotContainer ?? createPlotContainer(this.el)
    if (spec !== undefined) {
      return embed(this.plotContainer, spec, {
        actions: {
          compiled: false,
          editor: false,
        },
        ...this.options,
      }).then((res) => {
        this.plotIsRendered = true
        return res
      })
    }

    return Promise.resolve()
  }

  componentWillLoad(): Promise<unknown> | void {
    // Make sure we have the correct Vega dependency loaded
    this.detectVegaDependency(this.getPlotContent())

    if (!this.plotIsRendered && isLoaded[this.vegaDependency.library]) {
      return this.renderPlot()
    } else {
      injectScriptSrc({
        src: getVegaLibSrc(this.vegaDependency),
        onLoad: () => {
          isLoaded[this.vegaDependency.library] = true
          this.vegaLoaded.emit({ library: this.vegaDependency.library })
        },
      })
    }
  }

  componentShouldUpdate(
    nexValue: unknown,
    oldValue: unknown,
    varName: string
  ): boolean {
    if (varName === 'plotIsRendered' && oldValue === nexValue) {
      return false
    }
    return true
  }

  componentWillUpdate(): void {
    this.renderPlot().catch((err: unknown) => {
      console.log(err)
    })
  }

  render(): HTMLStencilaImageVegaElement {
    return <Host class={{ imgHidden: this.plotIsRendered }}></Host>
  }
}
