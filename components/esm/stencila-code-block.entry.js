import { r as registerInstance, h, e as Host } from './index-2305c23c.js';
import { u } from './schema-3c9b003e.js';
import { a as lookupFormat } from './languageUtils-2c49a4c4.js';

const defaultCodeBlockCss = "*.sc-stencila-code-block-default,.sc-stencila-code-block-default:after,.sc-stencila-code-block-default:before{border:0 solid;-webkit-box-sizing:border-box;box-sizing:border-box}html.sc-stencila-code-block-default{font-size:16px}.hidden.sc-stencila-code-block-default{display:none}code.sc-stencila-code-block-default,code[class*=language-].sc-stencila-code-block-default,output.sc-stencila-code-block-default{font-family:monospace;font-family:var(--font-family-mono,monospace);font-size:75%}pre.sc-stencila-code-block-default{border:1px solid #cfd2e1;border-color:var(--color-neutral-100,#cfd2e1);border-radius:.25rem;margin:.5rem;overflow:auto;padding:.5rem}.preReset.sc-stencila-code-block-default{border-width:0;margin:0;padding:0}.sc-stencila-code-block-default-h,stencila-code-block.sc-stencila-code-block-default{--background-editor:var(--color-neutral-50,#edf2f7);--border:var(--color-neutral-100,#e2e8f0);border-color:var(--border);border-radius:.25rem;border-style:solid;border-width:1px;display:block;margin-bottom:1rem;margin-top:1rem;overflow:hidden;position:relative;width:100%}.sc-stencila-code-block-default-h>figure.sc-stencila-code-block-default,stencila-code-block.sc-stencila-code-block-default>figure.sc-stencila-code-block-default{margin:0;padding:0}.sc-stencila-code-block-default-h stencila-editor.sc-stencila-code-block-default,stencila-code-block.sc-stencila-code-block-default stencila-editor.sc-stencila-code-block-default{--border-width:0;-ms-flex-positive:1;flex-grow:1}.editorContainer.sc-stencila-code-block-default{background:var(--background-editor);border-color:var(--border);border-radius:0;border-width:0 0 1px;display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-direction:column;flex-direction:column;height:intrinsic;margin:0;position:relative}.editorContainer.sc-stencila-code-block-default pre.sc-stencila-code-block-default,.editorContainer.sc-stencila-code-block-default pre[class*=language-].sc-stencila-code-block-default{background-color:transparent}";

const codeBlockMaterialCss = "*.sc-stencila-code-block-material,.sc-stencila-code-block-material:after,.sc-stencila-code-block-material:before{border:0 solid;-webkit-box-sizing:border-box;box-sizing:border-box}html.sc-stencila-code-block-material{font-size:16px}.hidden.sc-stencila-code-block-material{display:none}code.sc-stencila-code-block-material,code[class*=language-].sc-stencila-code-block-material,output.sc-stencila-code-block-material{font-family:monospace;font-family:var(--font-family-mono,monospace);font-size:75%}pre.sc-stencila-code-block-material{border:1px solid #cfd2e1;border-color:var(--color-neutral-100,#cfd2e1);border-radius:.25rem;margin:.5rem;overflow:auto;padding:.5rem}.preReset.sc-stencila-code-block-material{border-width:0;margin:0;padding:0}.sc-stencila-code-block-material-h,stencila-code-block.sc-stencila-code-block-material{--background-editor:var(--color-neutral-50,#edf2f7);--border:var(--color-neutral-100,#e2e8f0);border-color:var(--border);border-radius:.25rem;border-style:solid;border-width:1px;display:block;margin-bottom:1rem;margin-top:1rem;overflow:hidden;position:relative;width:100%}.sc-stencila-code-block-material-h>figure.sc-stencila-code-block-material,stencila-code-block.sc-stencila-code-block-material>figure.sc-stencila-code-block-material{margin:0;padding:0}.sc-stencila-code-block-material-h stencila-editor.sc-stencila-code-block-material,stencila-code-block.sc-stencila-code-block-material stencila-editor.sc-stencila-code-block-material{--border-width:0;-ms-flex-positive:1;flex-grow:1}.editorContainer.sc-stencila-code-block-material{background:var(--background-editor);border-color:var(--border);border-radius:0;border-width:0 0 1px;display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-direction:column;flex-direction:column;height:intrinsic;margin:0;position:relative}.editorContainer.sc-stencila-code-block-material pre.sc-stencila-code-block-material,.editorContainer.sc-stencila-code-block-material pre[class*=language-].sc-stencila-code-block-material{background-color:transparent}";

const CodeBlockComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * Autofocus the editor on page load
     */
    this.autofocus = false;
    /**
     * Control line wrapping of text inside the editor
     */
    this.lineWrapping = false;
    /**
     * Determines the visibility of line numbers
     */
    this.lineNumbers = true;
    /**
     * Enables ability to fold sections of code if the syntax package supports it
     */
    this.foldGutter = true;
    /**
     * Disallow editing of the editor contents when set to `true`
     */
    this.readOnly = false;
    /**
     * Custom keyboard shortcuts to pass along to CodeMirror
     * @see https://codemirror.net/6/docs/ref/#keymap
     */
    this.keymap = [];
    /**
     * Listen for the `stencila-language-change` event emitted by the language dropdown
     * provided by the child Editor component, and update the active language if necessary.
     */
    this.handleLanguageChange = (e) => {
      if (this.programmingLanguage === undefined ||
        lookupFormat(this.programmingLanguage).name !== e.detail.name) {
        this.programmingLanguage = e.detail.name;
      }
    };
  }
  onDiscoverExecutableLanguages({ detail, }) {
    this.executableLanguages = detail.languages;
  }
  /**
   * Returns the `CodeChunk` node with the updated `text` content from the editor.
   */
  async getContents() {
    var _a;
    if (this.editorRef) {
      const { text, language } = await ((_a = this.editorRef) === null || _a === void 0 ? void 0 : _a.getContents());
      return u({ text, programmingLanguage: language });
    }
    throw new Error('Could not get CodeChunk contents');
  }
  /**
   * Returns the text contents from the editor
   */
  async getTextContents() {
    var _a;
    if (this.editorRef) {
      const { text } = await ((_a = this.editorRef) === null || _a === void 0 ? void 0 : _a.getContents());
      return text;
    }
    throw new Error('Could not get CodeBlock contents');
  }
  /**
   * Retrieve a reference to the internal CodeMirror editor.
   * Allows for maintaining state from applications making use of this component.
   */
  async getRef() {
    var _a;
    return (_a = this.editorRef) === null || _a === void 0 ? void 0 : _a.getRef();
  }
  render() {
    return (h(Host, null, h("figure", null, h("div", null, h("div", { class: {
        editorContainer: true,
      } }, h("stencila-editor", { activeLanguage: this.programmingLanguage, executableLanguages: this.executableLanguages, autofocus: this.autofocus, keymap: this.keymap, readOnly: this.readOnly, "onStencila-language-change": this.handleLanguageChange, foldGutter: this.foldGutter, lineNumbers: this.lineNumbers, lineWrapping: this.lineWrapping, ref: (el) => {
        this.editorRef = el;
      } }, h("slot", { name: CodeBlockComponent.slots.text }), h("slot", { name: CodeBlockComponent.slots.errors })))), h("slot", { name: CodeBlockComponent.slots.label }), h("slot", { name: CodeBlockComponent.slots.caption }))));
  }
};
CodeBlockComponent.slots = {
  text: 'text',
  outputs: 'outputs',
  errors: 'errors',
  caption: 'caption',
  label: 'label',
};
CodeBlockComponent.style = {
  default: defaultCodeBlockCss,
  material: codeBlockMaterialCss
};

export { CodeBlockComponent as stencila_code_block };

//# sourceMappingURL=stencila-code-block.entry.js.map