'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-77e1ad50.js');
const index$1 = require('./index-80393b6d.js');

const defaultIconCss = "@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.sc-stencila-icon-default-h{--height:1.25em;--width:1.25em;color:currentColor;display:inline-block;line-height:1;vertical-align:middle}.sc-stencila-icon-default-h svg.sc-stencila-icon-default{fill:currentColor;display:block;height:auto;height:var(--height);max-height:100%;position:relative;width:100%;width:var(--width)}[icon^=loader].sc-stencila-icon-default-h svg.sc-stencila-icon-default{-webkit-animation:spin 3s linear infinite;animation:spin 3s linear infinite}";

const iconMaterialCss = "@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.sc-stencila-icon-material-h{--height:1.25em;--width:1.25em;color:currentColor;display:inline-block;line-height:1;vertical-align:middle}.sc-stencila-icon-material-h svg.sc-stencila-icon-material{fill:currentColor;stroke-linecap:butt;display:block;height:auto;height:var(--height);max-height:100%;position:relative;width:100%;width:var(--width)}[icon^=loader].sc-stencila-icon-material-h svg.sc-stencila-icon-material{-webkit-animation:spin 3s linear infinite;animation:spin 3s linear infinite}";

let isFetchingIcons = false;
const getGlobalIconStyle = () => document.getElementsByTagName('html')[0].getAttribute('data-icon-style') ===
  'fill'
  ? 'fill'
  : 'line';
const Icon = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * Style with which to render the icon
     */
    this.iconStyle = getGlobalIconStyle();
    this.fetchIcons = async () => {
      const response = await index$1.factory()
        .url(index.getAssetPath(`./assets/remixicon.symbol.svg`))
        .options({ credentials: 'omit', mode: 'cors' })
        .get()
        .text();
      const div = document.createElement('div');
      div.innerHTML = response;
      document.body.append(div);
    };
  }
  componentWillLoad() {
    if (!isFetchingIcons) {
      isFetchingIcons = true;
      this.fetchIcons().catch((err) => {
        console.log('Failed to load icons', err);
      });
    }
  }
  render() {
    return (index.h(index.Host, { icon: this.icon, "aria-hidden": "true" }, index.h("svg", null, index.h("use", { href: `#ri-${this.icon}${this.iconStyle !== undefined ? '-' + this.iconStyle : ''}` }))));
  }
  static get assetsDirs() { return ["assets"]; }
};
Icon.style = {
  default: defaultIconCss,
  material: iconMaterialCss
};

exports.stencila_icon = Icon;
