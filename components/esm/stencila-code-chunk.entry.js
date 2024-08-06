import { r as registerInstance, f as createEvent, h, e as Host, c as getElement } from './index-2305c23c.js';
import { d } from './schema-3c9b003e.js';
import { C as CodeExecuteStatus } from './codeExecuteStatus-b83cc6dd.js';
import { i as isPending } from './codeUtils-6d110640.js';
import { f as fileFormatMap, a as lookupFormat } from './languageUtils-2c49a4c4.js';

const defaultCodeChunkCss = "*.sc-stencila-code-chunk-default,.sc-stencila-code-chunk-default:after,.sc-stencila-code-chunk-default:before{border:0 solid;-webkit-box-sizing:border-box;box-sizing:border-box}html.sc-stencila-code-chunk-default{font-size:16px}.hidden.sc-stencila-code-chunk-default{display:none}code.sc-stencila-code-chunk-default,code[class*=language-].sc-stencila-code-chunk-default,output.sc-stencila-code-chunk-default{font-family:monospace;font-family:var(--font-family-mono,monospace);font-size:75%}pre.sc-stencila-code-chunk-default{border:1px solid #cfd2e1;border-color:var(--color-neutral-100,#cfd2e1);border-radius:.25rem;margin:.5rem;overflow:auto;padding:.5rem}.preReset.sc-stencila-code-chunk-default{border-width:0;margin:0;padding:0}.sc-stencila-code-chunk-default-h,stencila-code-chunk.sc-stencila-code-chunk-default{--background:var(--color-stock,#fff);--background-editor:var(--color-neutral-50,#edf2f7);--border:var(--color-neutral-100,#e2e8f0);border-color:var(--border);border-radius:.25rem;border-style:solid;border-width:1px;display:block;margin-bottom:1rem;margin-top:1rem;overflow:hidden;position:relative;width:100%}.sc-stencila-code-chunk-default-h>figure.sc-stencila-code-chunk-default,stencila-code-chunk.sc-stencila-code-chunk-default>figure.sc-stencila-code-chunk-default{margin:0;padding:0}.sc-stencila-code-chunk-default-h stencila-action-menu.sc-stencila-code-chunk-default,stencila-code-chunk.sc-stencila-code-chunk-default stencila-action-menu.sc-stencila-code-chunk-default{border-left-width:0;border-radius:0;border-right-width:0;display:block;padding:0;position:relative;width:100%}.sc-stencila-code-chunk-default-h stencila-action-menu.sc-stencila-code-chunk-default .executeStatus.sc-stencila-code-chunk-default,stencila-code-chunk.sc-stencila-code-chunk-default stencila-action-menu.sc-stencila-code-chunk-default .executeStatus.sc-stencila-code-chunk-default{--height:0.875rem;--width:0.875rem;cursor:pointer;padding:.25rem}.sc-stencila-code-chunk-default-h stencila-action-menu.sc-stencila-code-chunk-default .executeStatus.scheduled.sc-stencila-code-chunk-default,stencila-code-chunk.sc-stencila-code-chunk-default stencila-action-menu.sc-stencila-code-chunk-default .executeStatus.scheduled.sc-stencila-code-chunk-default{cursor:wait}.sc-stencila-code-chunk-default-h stencila-action-menu.sc-stencila-code-chunk-default .layoutToggle.sc-stencila-code-chunk-default,stencila-code-chunk.sc-stencila-code-chunk-default stencila-action-menu.sc-stencila-code-chunk-default .layoutToggle.sc-stencila-code-chunk-default{display:none}@media (min-width:1024px){.sc-stencila-code-chunk-default-h stencila-action-menu.sc-stencila-code-chunk-default .layoutToggle.sc-stencila-code-chunk-default,stencila-code-chunk.sc-stencila-code-chunk-default stencila-action-menu.sc-stencila-code-chunk-default .layoutToggle.sc-stencila-code-chunk-default{display:inline-block}}.sc-stencila-code-chunk-default-h stencila-editor.sc-stencila-code-chunk-default,stencila-code-chunk.sc-stencila-code-chunk-default stencila-editor.sc-stencila-code-chunk-default{--border-width:0;background-color:var(--background-editor);-ms-flex-positive:1;flex-grow:1}.sc-stencila-code-chunk-default-h .sc-stencila-code-chunk-default-s>[slot=outputs],.sc-stencila-code-chunk-default-h [slot=outputs].sc-stencila-code-chunk-default,stencila-code-chunk.sc-stencila-code-chunk-default-s>[slot=outputs],stencila-code-chunk .sc-stencila-code-chunk-default-s>[slot=outputs],stencila-code-chunk.sc-stencila-code-chunk-default [slot=outputs].sc-stencila-code-chunk-default{background-color:var(--background);margin:0;padding:.5rem}.sc-stencila-code-chunk-default-h .sc-stencila-code-chunk-default-s>[slot=outputs]:empty,.sc-stencila-code-chunk-default-h [slot=outputs].sc-stencila-code-chunk-default:empty,stencila-code-chunk.sc-stencila-code-chunk-default-s>[slot=outputs]:empty,stencila-code-chunk .sc-stencila-code-chunk-default-s>[slot=outputs]:empty,stencila-code-chunk.sc-stencila-code-chunk-default [slot=outputs].sc-stencila-code-chunk-default:empty{display:none}.editorContainer.sc-stencila-code-chunk-default{background:var(--background-editor);border-color:var(--border);border-radius:0;border-width:0 0 1px;display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-direction:column;flex-direction:column;height:intrinsic;margin:0;position:relative}.editorContainer.sc-stencila-code-chunk-default pre.sc-stencila-code-chunk-default,.editorContainer.sc-stencila-code-chunk-default pre[class*=language-].sc-stencila-code-chunk-default{background-color:transparent}.editorContainer.hidden.sc-stencila-code-chunk-default{display:none}@media (min-width:1024px){.sc-stencila-code-chunk-default-h:not(.isStacked)>figure.sc-stencila-code-chunk-default>div.sc-stencila-code-chunk-default,stencila-code-chunk.sc-stencila-code-chunk-default:not(.isStacked)>figure.sc-stencila-code-chunk-default>div.sc-stencila-code-chunk-default{display:-ms-flexbox;display:flex}.sc-stencila-code-chunk-default-h:not(.isStacked)>figure.sc-stencila-code-chunk-default>div.sc-stencila-code-chunk-default,stencila-code-chunk.sc-stencila-code-chunk-default:not(.isStacked)>figure.sc-stencila-code-chunk-default>div.sc-stencila-code-chunk-default{width:100%}.sc-stencila-code-chunk-default-h:not(.isStacked)>figure.sc-stencila-code-chunk-default>div.sc-stencila-code-chunk-default,stencila-code-chunk.sc-stencila-code-chunk-default:not(.isStacked)>figure.sc-stencila-code-chunk-default>div.sc-stencila-code-chunk-default{-ms-flex-direction:row;flex-direction:row}.sc-stencila-code-chunk-default-h:not(.isStacked)>figure.sc-stencila-code-chunk-default>div.sc-stencila-code-chunk-default,stencila-code-chunk.sc-stencila-code-chunk-default:not(.isStacked)>figure.sc-stencila-code-chunk-default>div.sc-stencila-code-chunk-default{-ms-flex-align:stretch;align-items:stretch}.sc-stencila-code-chunk-default-h:not(.isStacked)>figure.sc-stencila-code-chunk-default>div.sc-stencila-code-chunk-default .editorContainer.sc-stencila-code-chunk-default,stencila-code-chunk.sc-stencila-code-chunk-default:not(.isStacked)>figure.sc-stencila-code-chunk-default>div.sc-stencila-code-chunk-default .editorContainer.sc-stencila-code-chunk-default{width:50%}.sc-stencila-code-chunk-default-h:not(.isStacked)>figure.sc-stencila-code-chunk-default>div.sc-stencila-code-chunk-default .editorContainer.sc-stencila-code-chunk-default,stencila-code-chunk.sc-stencila-code-chunk-default:not(.isStacked)>figure.sc-stencila-code-chunk-default>div.sc-stencila-code-chunk-default .editorContainer.sc-stencila-code-chunk-default{border-bottom-width:0}.sc-stencila-code-chunk-default-h:not(.isStacked)>figure.sc-stencila-code-chunk-default>div.sc-stencila-code-chunk-default .editorContainer.sc-stencila-code-chunk-default,stencila-code-chunk.sc-stencila-code-chunk-default:not(.isStacked)>figure.sc-stencila-code-chunk-default>div.sc-stencila-code-chunk-default .editorContainer.sc-stencila-code-chunk-default{border-right-width:1px}.sc-stencila-code-chunk-default-h:not(.isStacked)>figure.sc-stencila-code-chunk-default>div.sc-stencila-code-chunk-default stencila-node-list.sc-stencila-code-chunk-default,stencila-code-chunk.sc-stencila-code-chunk-default:not(.isStacked)>figure.sc-stencila-code-chunk-default>div.sc-stencila-code-chunk-default stencila-node-list.sc-stencila-code-chunk-default{width:50%}.sc-stencila-code-chunk-default-h:not(.isStacked)>figure.sc-stencila-code-chunk-default>div.sc-stencila-code-chunk-default stencila-node-list.sc-stencila-code-chunk-default,stencila-code-chunk.sc-stencila-code-chunk-default:not(.isStacked)>figure.sc-stencila-code-chunk-default>div.sc-stencila-code-chunk-default stencila-node-list.sc-stencila-code-chunk-default{-ms-flex-positive:1;flex-grow:1}}";

const codeChunkMaterialCss = "*.sc-stencila-code-chunk-material,.sc-stencila-code-chunk-material:after,.sc-stencila-code-chunk-material:before{border:0 solid;-webkit-box-sizing:border-box;box-sizing:border-box}html.sc-stencila-code-chunk-material{font-size:16px}.hidden.sc-stencila-code-chunk-material{display:none}code.sc-stencila-code-chunk-material,code[class*=language-].sc-stencila-code-chunk-material,output.sc-stencila-code-chunk-material{font-family:monospace;font-family:var(--font-family-mono,monospace);font-size:75%}pre.sc-stencila-code-chunk-material{border:1px solid #cfd2e1;border-color:var(--color-neutral-100,#cfd2e1);border-radius:.25rem;margin:.5rem;overflow:auto;padding:.5rem}.preReset.sc-stencila-code-chunk-material{border-width:0;margin:0;padding:0}.sc-stencila-code-chunk-material-h,stencila-code-chunk.sc-stencila-code-chunk-material{--background:var(--color-stock,#fff);--background-editor:var(--color-neutral-50,#edf2f7);--border:var(--color-neutral-100,#e2e8f0);border-color:var(--border);border-radius:.25rem;border-style:solid;border-width:1px;display:block;margin-bottom:1rem;margin-top:1rem;overflow:hidden;position:relative;width:100%}.sc-stencila-code-chunk-material-h>figure.sc-stencila-code-chunk-material,stencila-code-chunk.sc-stencila-code-chunk-material>figure.sc-stencila-code-chunk-material{margin:0;padding:0}.sc-stencila-code-chunk-material-h stencila-action-menu.sc-stencila-code-chunk-material,stencila-code-chunk.sc-stencila-code-chunk-material stencila-action-menu.sc-stencila-code-chunk-material{border-left-width:0;border-radius:0;border-right-width:0;display:block;padding:0;position:relative;width:100%}.sc-stencila-code-chunk-material-h stencila-action-menu.sc-stencila-code-chunk-material .executeStatus.sc-stencila-code-chunk-material,stencila-code-chunk.sc-stencila-code-chunk-material stencila-action-menu.sc-stencila-code-chunk-material .executeStatus.sc-stencila-code-chunk-material{--height:0.875rem;--width:0.875rem;cursor:pointer;padding:.25rem}.sc-stencila-code-chunk-material-h stencila-action-menu.sc-stencila-code-chunk-material .executeStatus.scheduled.sc-stencila-code-chunk-material,stencila-code-chunk.sc-stencila-code-chunk-material stencila-action-menu.sc-stencila-code-chunk-material .executeStatus.scheduled.sc-stencila-code-chunk-material{cursor:wait}.sc-stencila-code-chunk-material-h stencila-action-menu.sc-stencila-code-chunk-material .layoutToggle.sc-stencila-code-chunk-material,stencila-code-chunk.sc-stencila-code-chunk-material stencila-action-menu.sc-stencila-code-chunk-material .layoutToggle.sc-stencila-code-chunk-material{display:none}@media (min-width:1024px){.sc-stencila-code-chunk-material-h stencila-action-menu.sc-stencila-code-chunk-material .layoutToggle.sc-stencila-code-chunk-material,stencila-code-chunk.sc-stencila-code-chunk-material stencila-action-menu.sc-stencila-code-chunk-material .layoutToggle.sc-stencila-code-chunk-material{display:inline-block}}.sc-stencila-code-chunk-material-h stencila-editor.sc-stencila-code-chunk-material,stencila-code-chunk.sc-stencila-code-chunk-material stencila-editor.sc-stencila-code-chunk-material{--border-width:0;background-color:var(--background-editor);-ms-flex-positive:1;flex-grow:1}.sc-stencila-code-chunk-material-h .sc-stencila-code-chunk-material-s>[slot=outputs],.sc-stencila-code-chunk-material-h [slot=outputs].sc-stencila-code-chunk-material,stencila-code-chunk.sc-stencila-code-chunk-material-s>[slot=outputs],stencila-code-chunk .sc-stencila-code-chunk-material-s>[slot=outputs],stencila-code-chunk.sc-stencila-code-chunk-material [slot=outputs].sc-stencila-code-chunk-material{background-color:var(--background);margin:0;padding:.5rem}.sc-stencila-code-chunk-material-h .sc-stencila-code-chunk-material-s>[slot=outputs]:empty,.sc-stencila-code-chunk-material-h [slot=outputs].sc-stencila-code-chunk-material:empty,stencila-code-chunk.sc-stencila-code-chunk-material-s>[slot=outputs]:empty,stencila-code-chunk .sc-stencila-code-chunk-material-s>[slot=outputs]:empty,stencila-code-chunk.sc-stencila-code-chunk-material [slot=outputs].sc-stencila-code-chunk-material:empty{display:none}.editorContainer.sc-stencila-code-chunk-material{background:var(--background-editor);border-color:var(--border);border-radius:0;border-width:0 0 1px;display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-direction:column;flex-direction:column;height:intrinsic;margin:0;position:relative}.editorContainer.sc-stencila-code-chunk-material pre.sc-stencila-code-chunk-material,.editorContainer.sc-stencila-code-chunk-material pre[class*=language-].sc-stencila-code-chunk-material{background-color:transparent}.editorContainer.hidden.sc-stencila-code-chunk-material{display:none}@media (min-width:1024px){.sc-stencila-code-chunk-material-h:not(.isStacked)>figure.sc-stencila-code-chunk-material>div.sc-stencila-code-chunk-material,stencila-code-chunk.sc-stencila-code-chunk-material:not(.isStacked)>figure.sc-stencila-code-chunk-material>div.sc-stencila-code-chunk-material{display:-ms-flexbox;display:flex}.sc-stencila-code-chunk-material-h:not(.isStacked)>figure.sc-stencila-code-chunk-material>div.sc-stencila-code-chunk-material,stencila-code-chunk.sc-stencila-code-chunk-material:not(.isStacked)>figure.sc-stencila-code-chunk-material>div.sc-stencila-code-chunk-material{width:100%}.sc-stencila-code-chunk-material-h:not(.isStacked)>figure.sc-stencila-code-chunk-material>div.sc-stencila-code-chunk-material,stencila-code-chunk.sc-stencila-code-chunk-material:not(.isStacked)>figure.sc-stencila-code-chunk-material>div.sc-stencila-code-chunk-material{-ms-flex-direction:row;flex-direction:row}.sc-stencila-code-chunk-material-h:not(.isStacked)>figure.sc-stencila-code-chunk-material>div.sc-stencila-code-chunk-material,stencila-code-chunk.sc-stencila-code-chunk-material:not(.isStacked)>figure.sc-stencila-code-chunk-material>div.sc-stencila-code-chunk-material{-ms-flex-align:stretch;align-items:stretch}.sc-stencila-code-chunk-material-h:not(.isStacked)>figure.sc-stencila-code-chunk-material>div.sc-stencila-code-chunk-material .editorContainer.sc-stencila-code-chunk-material,stencila-code-chunk.sc-stencila-code-chunk-material:not(.isStacked)>figure.sc-stencila-code-chunk-material>div.sc-stencila-code-chunk-material .editorContainer.sc-stencila-code-chunk-material{width:50%}.sc-stencila-code-chunk-material-h:not(.isStacked)>figure.sc-stencila-code-chunk-material>div.sc-stencila-code-chunk-material .editorContainer.sc-stencila-code-chunk-material,stencila-code-chunk.sc-stencila-code-chunk-material:not(.isStacked)>figure.sc-stencila-code-chunk-material>div.sc-stencila-code-chunk-material .editorContainer.sc-stencila-code-chunk-material{border-bottom-width:0}.sc-stencila-code-chunk-material-h:not(.isStacked)>figure.sc-stencila-code-chunk-material>div.sc-stencila-code-chunk-material .editorContainer.sc-stencila-code-chunk-material,stencila-code-chunk.sc-stencila-code-chunk-material:not(.isStacked)>figure.sc-stencila-code-chunk-material>div.sc-stencila-code-chunk-material .editorContainer.sc-stencila-code-chunk-material{border-right-width:1px}.sc-stencila-code-chunk-material-h:not(.isStacked)>figure.sc-stencila-code-chunk-material>div.sc-stencila-code-chunk-material stencila-node-list.sc-stencila-code-chunk-material,stencila-code-chunk.sc-stencila-code-chunk-material:not(.isStacked)>figure.sc-stencila-code-chunk-material>div.sc-stencila-code-chunk-material stencila-node-list.sc-stencila-code-chunk-material{width:50%}.sc-stencila-code-chunk-material-h:not(.isStacked)>figure.sc-stencila-code-chunk-material>div.sc-stencila-code-chunk-material stencila-node-list.sc-stencila-code-chunk-material,stencila-code-chunk.sc-stencila-code-chunk-material:not(.isStacked)>figure.sc-stencila-code-chunk-material>div.sc-stencila-code-chunk-material stencila-node-list.sc-stencila-code-chunk-material{-ms-flex-positive:1;flex-grow:1}}";

const CodeChunkComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.codeExecuteEvent = createEvent(this, "stencila-code-execute", 7);
    this.codeExecuteCancelEvent = createEvent(this, "stencila-code-execute-cancel", 7);
    this.allCodeVisibilityChange = createEvent(this, "stencila-code-visibility-change", 7);
    this.editorLayoutChange = createEvent(this, "stencila-editor-layout-change", 7);
    /**
     * Autofocus the editor on page load
     */
    this.autofocus = false;
    /**
     * List of all supported programming languages
     */
    this.languageCapabilities = fileFormatMap;
    this.isExecutable = false;
    /**
     * Whether the code section is visible or not
     */
    this.isCodeVisible = false;
    this.shiftIsPressed = false;
    /**
     * Custom keyboard shortcuts to pass along to CodeMirror
     * @see https://codemirror.net/6/docs/ref/#keymap
     */
    this.keymap = [];
    this.isStacked = true;
    /**
     * Toggle code visibility, either locally, or globally
     */
    this.toggleCodeVisibility = (e) => {
      e.preventDefault();
      if (e.shiftKey) {
        this.allCodeVisibilityChange.emit({ isVisible: !this.isCodeVisible });
      }
      else {
        this.isCodeVisible = !this.isCodeVisible;
      }
    };
    /**
     * Determine if the CodeChunk can be executed or not.
     * For a CodeChunk to be considered executable it must have a `executeHandler` function attached
     * and the current `programmingLanguage` must be in the list of `executableLanguages`.
     */
    this.checkIfExecutable = () => {
      var _a, _b;
      if (this.programmingLanguage === undefined ||
        Object.keys((_a = this.executableLanguages) !== null && _a !== void 0 ? _a : {}).length <= 0) {
        this.isExecutable = false;
        return;
      }
      const activeLanguageFormat = lookupFormat(this.programmingLanguage).name;
      this.isExecutable = Object.values((_b = this.executableLanguages) !== null && _b !== void 0 ? _b : {}).some((format) => format.name === activeLanguageFormat);
    };
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
    this.editorLayoutChangeHandler = (isStacked) => {
      this.isStacked = isStacked;
    };
    this.toggleEditorLayout = (e) => {
      e.preventDefault();
      if (e.shiftKey) {
        this.editorLayoutChange.emit({ isStacked: !this.isStacked });
      }
      else {
        this.editorLayoutChangeHandler(!this.isStacked);
      }
    };
    this.onExecuteHandler = async (ordering = 'Topological') => {
      const node = await this.getContents();
      // If node is running, emit cancel event and terminate early
      if (isPending(this.executeStatus)) {
        this.codeExecuteCancelEvent.emit({
          nodeId: this.el.id,
          scope: 'All',
        });
        return node;
      }
      this.codeExecuteEvent.emit({
        nodeId: this.el.id,
        ordering,
      });
      if (this.isExecutable && this.executeHandler) {
        const computed = await this.executeHandler(node);
        return computed;
      }
      return node;
    };
    this.onKeyPress = (e) => {
      this.shiftIsPressed = e.shiftKey;
    };
    this.addKeyListeners = () => {
      window.addEventListener('keydown', this.onKeyPress);
      window.addEventListener('keyup', this.onKeyPress);
    };
    this.removeKeyListeners = () => {
      window.removeEventListener('keydown', this.onKeyPress);
      window.removeEventListener('keyup', this.onKeyPress);
      this.shiftIsPressed = false;
    };
  }
  onDiscoverExecutableLanguages({ detail, }) {
    this.executableLanguages = detail.languages;
    this.checkIfExecutable();
  }
  /**
   * A global event listener to show/hide code in this component
   */
  onAllCodeVisibilityChange(event) {
    this.isCodeVisible = event.detail.isVisible;
  }
  onSetEditorLayout(event) {
    this.editorLayoutChangeHandler(event.detail.isStacked);
  }
  /**
   * Returns the `CodeChunk` node with the updated `text` content from the editor.
   */
  async getContents() {
    var _a;
    if (this.editorRef) {
      const { text, language } = await ((_a = this.editorRef) === null || _a === void 0 ? void 0 : _a.getContents());
      return d({ text, programmingLanguage: language });
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
    throw new Error('Could not get CodeChunk contents');
  }
  /**
   * Run the `CodeChunk`
   */
  async execute(ordering = 'Topological') {
    try {
      const res = await this.onExecuteHandler(ordering);
      // Add artificial delay to allow user to register the spinner
      return res;
    }
    catch (err) {
      console.error(err);
      return new Error('Could not execute CodeChunk');
    }
  }
  /**
   * Retrieve a reference to the internal CodeMirror editor.
   * Allows for maintaining state from applications making use of this component.
   */
  async getRef() {
    var _a;
    return (_a = this.editorRef) === null || _a === void 0 ? void 0 : _a.getRef();
  }
  componentWillLoad() {
    /** Get rendered width of component to decide whether to stack the editor and outputs or not.
     * We can’t use media queries as the component is not always full width of the viewport, and depends on the parent element width.
     */
    const minWidth = 1200; // A non-scientific value below which the side-by-side layout looks too narrow.
    this.isStacked = this.el.getBoundingClientRect().width < minWidth;
    this.checkIfExecutable();
  }
  render() {
    return (h(Host, { class: {
        isCodeVisible: this.isCodeVisible,
        isStacked: this.isStacked,
      } }, h("figure", null, h("stencila-action-menu", null, h("stencila-menu", { menuPosition: "bottom-start", slot: "persistentActions" }, h(CodeExecuteStatus, { executeStatus: this.executeStatus, executeRequired: this.executeRequired, slot: "toggle" }), h("slot", { name: "code-dependencies" }), h("slot", { name: "code-dependents" })), this.isExecutable && (h("stencila-button", { icon: isPending(this.executeStatus) ? 'stop' : 'play', minimal: true, color: "key", class: "run", size: "xsmall", tooltip: isPending(this.executeStatus)
        ? 'Cancel'
        : this.shiftIsPressed
          ? 'Run only this code'
          : 'Run', iconOnly: true, slot: "persistentActions", onClick: (e) => this.execute(e.shiftKey ? 'Single' : 'Topological'), onMouseEnter: this.addKeyListeners, onMouseLeave: this.removeKeyListeners })), h("stencila-button", { minimal: true, color: "key", class: "sourceToggle", onClick: this.toggleCodeVisibility, icon: this.isCodeVisible ? 'eye-off' : 'eye', iconOnly: true, size: "xsmall", slot: "persistentActions", tooltip: `${this.isCodeVisible ? 'Hide' : 'Show'} Code\nShift click to set for all code` }), ")", this.isCodeVisible && (h("stencila-button", { minimal: true, color: "key", class: "layoutToggle", onClick: this.toggleEditorLayout, icon: this.isStacked ? 'layout-column' : 'layout-row', iconOnly: true, size: "xsmall", slot: "persistentActions", tooltip: `${this.isStacked ? 'Side by side' : 'Stacked'} view\nShift click to set for all code` }))), h("div", null, h("div", { class: {
        editorContainer: true,
        hidden: !this.isCodeVisible,
      } }, h("stencila-editor", { activeLanguage: this.programmingLanguage, executableLanguages: this.executableLanguages, autofocus: this.autofocus, executeHandler: () => this.onExecuteHandler(), keymap: this.keymap, readOnly: !this.isExecutable, "onStencila-language-change": this.handleLanguageChange, ref: (el) => {
        this.editorRef = el;
      } }, h("slot", { name: CodeChunkComponent.slots.text }), h("slot", { name: CodeChunkComponent.slots.errors }))), h("slot", { name: CodeChunkComponent.slots.outputs })), h("slot", { name: CodeChunkComponent.slots.label }), h("slot", { name: CodeChunkComponent.slots.caption }))));
  }
  get el() { return getElement(this); }
};
CodeChunkComponent.slots = {
  text: 'text',
  outputs: 'outputs',
  errors: 'errors',
  caption: 'caption',
  label: 'label',
};
CodeChunkComponent.style = {
  default: defaultCodeChunkCss,
  material: codeChunkMaterialCss
};

export { CodeChunkComponent as stencila_code_chunk };

//# sourceMappingURL=stencila-code-chunk.entry.js.map