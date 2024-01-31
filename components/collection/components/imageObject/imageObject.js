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
        "resolved": "Entity & { type: \"Article\" | \"AudioObject\" | \"Brand\" | \"CitationIntentEnumeration\" | \"Claim\" | \"Collection\" | \"Comment\" | \"ContactPoint\" | \"CreativeWork\" | \"Datatable\" | \"DatatableColumn\" | \"DefinedTerm\" | \"Enumeration\" | \"Figure\" | \"Grant\" | \"ImageObject\" | \"ListItem\" | \"MediaObject\" | \"MonetaryGrant\" | \"Organization\" | \"Periodical\" | \"Person\" | \"PostalAddress\" | \"Product\" | \"PropertyValue\" | \"PublicationIssue\" | \"PublicationVolume\" | \"Review\" | \"SoftwareApplication\" | \"SoftwareEnvironment\" | \"SoftwareSession\" | \"SoftwareSourceCode\" | \"Table\" | \"Thing\" | \"VideoObject\" | \"VolumeMount\"; alternateNames?: string[] | undefined; description?: string | BlockContent[] | InlineContent[] | undefined; identifiers?: (string | PropertyValue)[] | undefined; images?: (string | ImageObject)[] | undefined; name?: string | undefined; url?: string | undefined; } & { type: \"Article\" | \"AudioObject\" | \"Claim\" | \"Collection\" | \"Comment\" | \"CreativeWork\" | \"Datatable\" | \"Figure\" | \"ImageObject\" | \"MediaObject\" | \"Periodical\" | \"PublicationIssue\" | \"PublicationVolume\" | \"Review\" | \"SoftwareApplication\" | \"SoftwareSourceCode\" | \"Table\" | \"VideoObject\"; about?: ThingTypes[] | undefined; authors?: (Organization | Person)[] | undefined; comments?: Comment[] | undefined; content?: string | Node[] | undefined; dateAccepted?: Date | undefined; dateCreated?: Date | undefined; dateModified?: Date | undefined; datePublished?: Date | undefined; dateReceived?: Date | undefined; editors?: Person[] | undefined; fundedBy?: (Grant | MonetaryGrant)[] | undefined; funders?: (Organization | Person)[] | undefined; genre?: string[] | undefined; isPartOf?: CreativeWorkTypes | undefined; keywords?: string[] | undefined; licenses?: (string | CreativeWorkTypes)[] | undefined; maintainers?: (Organization | Person)[] | undefined; parts?: CreativeWorkTypes[] | undefined; publisher?: Organization | Person | undefined; references?: (string | CreativeWorkTypes)[] | undefined; text?: string | undefined; title?: string | InlineContent[] | undefined; version?: string | number | undefined; } & { type: \"AudioObject\" | \"ImageObject\" | \"MediaObject\" | \"VideoObject\"; contentUrl: string; bitrate?: number | undefined; contentSize?: number | undefined; embedUrl?: string | undefined; mediaType?: string | undefined; } & { type: \"ImageObject\"; caption?: string | undefined; thumbnail?: ImageObject | undefined; }",
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
//# sourceMappingURL=imageObject.js.map