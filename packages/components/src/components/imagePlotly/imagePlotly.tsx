import { Component, Element, h, Host, Prop, State } from '@stencil/core';
import { ImageObject } from '@stencila/schema';
import { Data } from 'plotly.js';

@Component({
  tag: 'stencila-image-plotly',
  styleUrl: 'imagePlotly.css',
  scoped: true,
})
export class ImagePlotlyComponent {
  /**
   * The Plotly data to render as an interactive visualization.
   */
  @Prop() data!: Data[]

  /**
   * The `ImageObject` node to render as a fallback.
   */
  @Prop() image!: ImageObject

  @Element() private el: HTMLStencilaImagePlotlyElement

  @State() private plotlyIsLoaded: boolean = false

  componentWillLoad(): Promise<unknown> | void {
    // TODO: Remove this when hydrating from HTML properly
    this.data = this.data || [{x:[1,2], y:[3,4]}]
    this.image = this.image || {contentUrl: '', text: 'Plotly placeholder'}

    const src = 'https://cdn.plot.ly/plotly-latest.min.js'
    if (document.querySelector(`head script[src="${src}"]`) === null) {
      const script = document.createElement('script')
      script.setAttribute('src', src)
      script.onload = () => this.plotlyIsLoaded = true
      document.getElementsByTagName('head')[0].appendChild(script)
    }
  }

  render() {
    return (
      <Host>
        <img
          alt={this.image.text}
          class={this.plotlyIsLoaded ? 'hide' : 'show'}
          itemscope={true}
          itemtype="http://schema.org/ImageObject"
          src={this.image.contentUrl}
        />
      </Host>
    )
  }

  componentDidRender(): void {
    if (this.plotlyIsLoaded) {
      const root = document.createElement('div')
      this.el.appendChild(root)
      // @ts-ignore
      Plotly.plot(root, this.data)
    }
  }
}
