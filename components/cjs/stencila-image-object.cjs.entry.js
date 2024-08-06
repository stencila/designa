'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c157949f.js');

const defaultImageObjectCss = ".sc-stencila-image-object-default-h img.sc-stencila-image-object-default,stencila-image-object.sc-stencila-image-object-default img.sc-stencila-image-object-default{height:auto;max-width:100%}";

const materialImageObjectCss = ".sc-stencila-image-object-material-h img.sc-stencila-image-object-material,stencila-image-object.sc-stencila-image-object-material img.sc-stencila-image-object-material{height:auto;max-width:100%}";

const ImageObjectComponent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("img", { alt: this.image.text, itemscope: true, itemtype: "http://schema.org/ImageObject", src: this.image.contentUrl }));
  }
};
ImageObjectComponent.style = {
  default: defaultImageObjectCss,
  material: materialImageObjectCss
};

exports.stencila_image_object = ImageObjectComponent;

//# sourceMappingURL=stencila-image-object.cjs.entry.js.map