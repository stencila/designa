import { Component, h, Prop } from '@stencil/core'
import { ImageObject } from '@stencila/schema'
import { isPlotly } from '../imagePlotly/imagePlotlyUtils'

@Component({
  tag: 'stencila-image-object',
  styleUrls: {
    default: 'imageObject.css',
    material: 'imageObject.css',
  },
  scoped: true,
})
export class ImageObjectComponent {
  /**
   * The `ImageObject` node to render
   */
  @Prop() image: ImageObject

  public render(): HTMLImageElement {
    if (
      this.image.content &&
      this.image.content.length === 1 &&
      this.image.content.some(isPlotly)
    ) {
      return (
        <stencila-image-plotly
          // @ts-ignore
          data={this.image.content[0].data}
        ></stencila-image-plotly>
      )
    }

    return (
      <img
        alt={this.image.text}
        itemscope={true}
        itemtype="http://schema.org/ImageObject"
        src={this.image.contentUrl}
      />
    )
  }
}
