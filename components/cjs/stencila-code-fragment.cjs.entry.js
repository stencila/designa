'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c157949f.js');
const languageSelect = require('./languageSelect-0197201f.js');
const languageUtils = require('./languageUtils-85e2591f.js');

const defaultCodeFragmentCss = ".sc-stencila-code-fragment-default-h,stencila-code-fragment.sc-stencila-code-fragment-default{--background:var(--color-stock,#fff);--background-buttons:var(--color-neutral-50,#edf2f7);--border:var(--color-neutral-100,#e2e8f0);background-color:var(--background);border-color:var(--border);border-radius:.25rem;border-style:solid;border-width:1px;color:#4a4a4a;color:var(--color-key,#4a4a4a);display:-ms-inline-flexbox;display:inline-flex;font-size:.875rem;line-height:1.25rem;line-height:1;padding:0;vertical-align:text-bottom;white-space:nowrap}.sc-stencila-code-fragment-default-h .actionsSecondary.sc-stencila-code-fragment-default,stencila-code-fragment.sc-stencila-code-fragment-default .actionsSecondary.sc-stencila-code-fragment-default{background-color:var(--background-buttons);cursor:default;display:inline-block;overflow:hidden;-webkit-transition-duration:.15s;transition-duration:.15s;-webkit-transition-property:color,background-color,border-color,fill,stroke,opacity,-webkit-text-decoration-color,-webkit-box-shadow,-webkit-transform,-webkit-filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,fill,stroke,opacity,-webkit-text-decoration-color,-webkit-box-shadow,-webkit-transform,-webkit-filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-text-decoration-color,-webkit-box-shadow,-webkit-transform,-webkit-filter,-webkit-backdrop-filter;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-timing-function:cubic-bezier(0,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1);width:0}.hover.sc-stencila-code-fragment-default-h .actionsSecondary.sc-stencila-code-fragment-default,.sc-stencila-code-fragment-default-h:focus .actionsSecondary.sc-stencila-code-fragment-default,.sc-stencila-code-fragment-default-h:focus-within .actionsSecondary.sc-stencila-code-fragment-default,.sc-stencila-code-fragment-default-h:hover .actionsSecondary.sc-stencila-code-fragment-default,stencila-code-fragment.hover.sc-stencila-code-fragment-default .actionsSecondary.sc-stencila-code-fragment-default,stencila-code-fragment.sc-stencila-code-fragment-default:focus .actionsSecondary.sc-stencila-code-fragment-default,stencila-code-fragment.sc-stencila-code-fragment-default:focus-within .actionsSecondary.sc-stencila-code-fragment-default,stencila-code-fragment.sc-stencila-code-fragment-default:hover .actionsSecondary.sc-stencila-code-fragment-default{display:-ms-inline-flexbox;display:inline-flex;max-width:100%;width:1.25rem}.sc-stencila-code-fragment-default-h .text.sc-stencila-code-fragment-default,stencila-code-fragment.sc-stencila-code-fragment-default .text.sc-stencila-code-fragment-default{background-color:var(--background-editor);padding:.25rem}";

const materialCodeFragmentCss = ".sc-stencila-code-fragment-material-h,stencila-code-fragment.sc-stencila-code-fragment-material{--background:var(--color-stock,#fff);--background-buttons:var(--color-neutral-50,#edf2f7);--border:var(--color-neutral-100,#e2e8f0);background-color:var(--background);border-color:var(--border);border-radius:.25rem;border-style:solid;border-width:1px;color:#4a4a4a;color:var(--color-key,#4a4a4a);display:-ms-inline-flexbox;display:inline-flex;font-size:.875rem;line-height:1.25rem;line-height:1;padding:0;vertical-align:text-bottom;white-space:nowrap}.sc-stencila-code-fragment-material-h .actionsSecondary.sc-stencila-code-fragment-material,stencila-code-fragment.sc-stencila-code-fragment-material .actionsSecondary.sc-stencila-code-fragment-material{background-color:var(--background-buttons);cursor:default;display:inline-block;overflow:hidden;-webkit-transition-duration:.15s;transition-duration:.15s;-webkit-transition-property:color,background-color,border-color,fill,stroke,opacity,-webkit-text-decoration-color,-webkit-box-shadow,-webkit-transform,-webkit-filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,fill,stroke,opacity,-webkit-text-decoration-color,-webkit-box-shadow,-webkit-transform,-webkit-filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-text-decoration-color,-webkit-box-shadow,-webkit-transform,-webkit-filter,-webkit-backdrop-filter;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-timing-function:cubic-bezier(0,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1);width:0}.hover.sc-stencila-code-fragment-material-h .actionsSecondary.sc-stencila-code-fragment-material,.sc-stencila-code-fragment-material-h:focus .actionsSecondary.sc-stencila-code-fragment-material,.sc-stencila-code-fragment-material-h:focus-within .actionsSecondary.sc-stencila-code-fragment-material,.sc-stencila-code-fragment-material-h:hover .actionsSecondary.sc-stencila-code-fragment-material,stencila-code-fragment.hover.sc-stencila-code-fragment-material .actionsSecondary.sc-stencila-code-fragment-material,stencila-code-fragment.sc-stencila-code-fragment-material:focus .actionsSecondary.sc-stencila-code-fragment-material,stencila-code-fragment.sc-stencila-code-fragment-material:focus-within .actionsSecondary.sc-stencila-code-fragment-material,stencila-code-fragment.sc-stencila-code-fragment-material:hover .actionsSecondary.sc-stencila-code-fragment-material{display:-ms-inline-flexbox;display:inline-flex;max-width:100%;width:1.25rem}.sc-stencila-code-fragment-material-h .text.sc-stencila-code-fragment-material,stencila-code-fragment.sc-stencila-code-fragment-material .text.sc-stencila-code-fragment-material{background-color:var(--background-editor);padding:.25rem}";

const CodeFragmentComponent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.languageChange = index.createEvent(this, "stencila-language-change", 7);
    this.contentChange = index.createEvent(this, "stencila-content-change", 7);
    var _a, _b;
    /**
     * The context of the component. In `read` mode the code content and its
     * language cannot be edited.
     */
    this.mode = 'read';
    /**
     * List of all supported programming languages
     */
    this.languageCapabilities = languageUtils.fileFormatMap;
    /**
     * List of programming languages that can be executed in the current context
     */
    this.executableLanguages = (_b = (_a = window.stencilaWebClient) === null || _a === void 0 ? void 0 : _a.executableLanguages) !== null && _b !== void 0 ? _b : {};
    /**
     * Function to call when the user selects a new language from the language picker dropdown.
     */
    this.onSelectLanguage = (language) => {
      this.languageChange.emit(languageUtils.lookupFormat(language));
      this.programmingLanguage = language;
    };
    this.contentChangeHandler = (e) => {
      var _a;
      const target = e.currentTarget;
      this.contentChange.emit((_a = target.textContent) !== null && _a !== void 0 ? _a : '');
    };
    this.selectTextSlot = () => this.el.querySelector(`.text`);
  }
  onDiscoverExecutableLanguages({ detail, }) {
    this.executableLanguages = detail.languages;
  }
  /**
   * Returns the text contents from the inline code editor
   */
  async getTextContents() {
    var _a;
    const slot = this.selectTextSlot();
    return Promise.resolve((_a = slot === null || slot === void 0 ? void 0 : slot.textContent) !== null && _a !== void 0 ? _a : '');
  }
  render() {
    var _a;
    return (index.h(index.Host, { class: "text" }, index.h("span", { class: "actionsSecondary" }, index.h(languageSelect.LanguagePickerInline, { activeLanguage: (_a = this.programmingLanguage) !== null && _a !== void 0 ? _a : '', executableLanguages: this.executableLanguages, onSetLanguage: this.onSelectLanguage, languageCapabilities: this.languageCapabilities, disabled: this.mode === 'read' })), index.h("span", { class: "text", contentEditable: this.mode === 'edit', onInput: this.contentChangeHandler, role: "textbox" }, index.h("slot", { name: "text" }))));
  }
  get el() { return index.getElement(this); }
};
CodeFragmentComponent.style = {
  default: defaultCodeFragmentCss,
  material: materialCodeFragmentCss
};

exports.stencila_code_fragment = CodeFragmentComponent;

//# sourceMappingURL=stencila-code-fragment.cjs.entry.js.map