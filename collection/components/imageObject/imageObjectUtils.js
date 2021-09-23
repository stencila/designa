import { h } from '@stencil/core';
import { isVegaObject } from '../imageDynamic/imageVega/imageVegaUtils';
import { isPlotlyObject } from '../imageDynamic/imagePlotly/imagePlotlyUtils';
/**
 * Return the preferred component for an `ImageObject`.
 *
 * Looks in the `content` property of the image (if any) and returns
 * a component for the first recognized node in that array. Similar
 * in behaviour to the HTML `<picture>` element.
 *
 * @param image The image to return a component for
 */
export const preferredImageObjectComponent = (image) => {
  const { content } = image;
  if (content && content.length > 0) {
    for (const node of content) {
      if (isPlotlyObject(node))
        return (h("stencila-image-plotly", { config: node.config, data: node.data, layout: node.layout },
          h("picture", null,
            h("stencila-image-object", { image: image }))));
      if (isVegaObject(node)) {
        return (h("stencila-image-vega", { spec: node.spec, options: node.options },
          h("picture", null,
            h("stencila-image-object", { image: image }))));
      }
    }
  }
  return h("stencila-image-object", { image: image });
};
