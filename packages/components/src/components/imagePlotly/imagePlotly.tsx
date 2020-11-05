import { Component, Host, h, Prop, Element } from '@stencil/core'
import { PlotData } from 'plotly.js'

@Component({
  tag: 'stencila-image-plotly',
  styleUrl: 'imagePlotly.css',
  scoped: true,
})
export class StencilaImagePlotly {
  @Element() el: HTMLStencilaImagePlotlyElement

  /** Plotly data to render */
  @Prop() data!: PlotData[]

  private generateViz = () => {
    console.log('generating plot', this.el, this.data)
    {
      /* Plotly.plot(this.el, this.data).catch((err) =>
      console.log('could not render plot', err)
    ) */
    }
  }

  componentWillLoad(): Promise<unknown> | void {
    // TODO: Check for presence of Plotly.js
    // Ensure script is only requested only once even if multiple instances of plotly images are in place
  }

  componentDidRender(): void {
    this.generateViz()
  }

  render() {
    return (
      <Host>
        <div>Hello</div>
      </Host>
    )
  }
}
