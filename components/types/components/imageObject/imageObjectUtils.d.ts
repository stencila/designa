import { ImageObject } from '@stencila/schema';
/**
 * Return the preferred component for an `ImageObject`.
 *
 * Looks in the `content` property of the image (if any) and returns
 * a component for the first recognized node in that array. Similar
 * in behaviour to the HTML `<picture>` element.
 *
 * @param image The image to return a component for
 */
export declare const preferredImageObjectComponent: (image: ImageObject) => HTMLStencilaImageObjectElement | HTMLStencilaImagePlotlyElement;
