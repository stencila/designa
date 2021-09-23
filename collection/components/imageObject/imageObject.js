import { Component, h, Prop } from '@stencil/core';
export class ImageObjectComponent {
  render() {
    return (h("img", { alt: this.image.text, itemscope: true, itemtype: "http://schema.org/ImageObject", src: this.image.contentUrl }));
  }
  static get is() { return "stencila-image-object"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "default": ["imageObject.css"],
    "material": ["imageObject.css"]
  }; }
  static get styleUrls() { return {
    "default": ["imageObject.css"],
    "material": ["imageObject.css"]
  }; }
  static get properties() { return {
    "image": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "ImageObject",
        "resolved": "ImageObject",
        "references": {
          "ImageObject": {
            "location": "import",
            "path": "@stencila/schema"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The `ImageObject` node to render"
      }
    }
  }; }
}
