import { h } from '@stencil/core';
import { ImageObject } from '@stencila/schema';
import { isPlotlyObject } from '../imagePlotly/imagePlotlyUtils';

/**
 * Return the preferred component for an `ImageObject`.
 *
 * Looks in the `content` property of the image (if any) and returns
 * a component for the first recognized node in that array. Similar
 * in behavior to the HTML `<picture>` element.
 *
 * @param image The image to return a component for
 */
export const preferredImageObjectComponent = (image: ImageObject) => {
    const { content } = image
    if (content && content.length > 0) {
      for (const node of content) {
        if (isPlotlyObject(node))
          return (
            <stencila-image-plotly image={image} data={node.data}></stencila-image-plotly>
          )
      }
    }
    return <stencila-image-object image={image}></stencila-image-object>
}
