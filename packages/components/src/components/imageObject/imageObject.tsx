import { Component, h, Prop } from '@stencil/core'
import { ImageObject } from '@stencila/schema'

@Component({
  tag: 'stencila-image-object',
  scoped: true
})
export class ImageObjectComponent {
  /**
   * The `ImageObject` node to render
   */
  @Prop() image: ImageObject

  public render() {
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
