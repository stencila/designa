import { r as registerInstance, h } from './index-2305c23c.js';

const defaultImageObjectCss = ".sc-stencila-image-object-default-h img.sc-stencila-image-object-default,stencila-image-object.sc-stencila-image-object-default img.sc-stencila-image-object-default{height:auto;max-width:100%}";

const materialImageObjectCss = ".sc-stencila-image-object-material-h img.sc-stencila-image-object-material,stencila-image-object.sc-stencila-image-object-material img.sc-stencila-image-object-material{height:auto;max-width:100%}";

const ImageObjectComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("img", { alt: this.image.text, itemscope: true, itemtype: "http://schema.org/ImageObject", src: this.image.contentUrl }));
  }
};
ImageObjectComponent.style = {
  default: defaultImageObjectCss,
  material: materialImageObjectCss
};

export { ImageObjectComponent as stencila_image_object };

//# sourceMappingURL=stencila-image-object.entry.js.map