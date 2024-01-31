import { Component, Element, Event, h, Host, Listen, Method, Prop, State, } from '@stencil/core';
import { codeChunk as makeCodeChunk } from '@stencila/schema';
import { CodeExecuteStatus } from '../code/codeExecuteStatus';
import { isPending } from '../code/codeUtils';
import { fileFormatMap, lookupFormat, } from '../editor/languageUtils';
/**
 * @slot text - The source code of the `CodeChunk`. Corresponds to the `text` field in the Stencila `CodeChunk` Schema.
 * @slot outputs - The resulting output when evaluating the CodeChunk. Corresponds to the `outputs` field in the Stencila `CodeChunk` Schema.
 * @slot errors - List of any errors encountered when compiling (e.g. syntax errors) or executing the CodeChunk.
 * @slot label - `label` element label of the `CodeChunk`. Corresponds to the `label` field in the Stencila `CodeChunk` Schema.
 * @slot caption - `figcaption` content of the `CodeChunk`. Corresponds to the `caption` field in the Stencila `CodeChunk` Schema.
 */
export class CodeChunkComponent {
  constructor() {
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
      return makeCodeChunk({ text, programmingLanguage: language });
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
      } },
      h("figure", null,
        h("stencila-action-menu", null,
          h("stencila-menu", { menuPosition: "bottom-start", slot: "persistentActions" },
            h(CodeExecuteStatus, { executeStatus: this.executeStatus, executeRequired: this.executeRequired, slot: "toggle" }),
            h("slot", { name: "code-dependencies" }),
            h("slot", { name: "code-dependents" })),
          this.isExecutable && (h("stencila-button", { icon: isPending(this.executeStatus) ? 'stop' : 'play', minimal: true, color: "key", class: "run", size: "xsmall", tooltip: isPending(this.executeStatus)
              ? 'Cancel'
              : this.shiftIsPressed
                ? 'Run only this code'
                : 'Run', iconOnly: true, slot: "persistentActions", onClick: (e) => this.execute(e.shiftKey ? 'Single' : 'Topological'), onMouseEnter: this.addKeyListeners, onMouseLeave: this.removeKeyListeners })),
          h("stencila-button", { minimal: true, color: "key", class: "sourceToggle", onClick: this.toggleCodeVisibility, icon: this.isCodeVisible ? 'eye-off' : 'eye', iconOnly: true, size: "xsmall", slot: "persistentActions", tooltip: `${this.isCodeVisible ? 'Hide' : 'Show'} Code\nShift click to set for all code` }),
          ")",
          this.isCodeVisible && (h("stencila-button", { minimal: true, color: "key", class: "layoutToggle", onClick: this.toggleEditorLayout, icon: this.isStacked ? 'layout-column' : 'layout-row', iconOnly: true, size: "xsmall", slot: "persistentActions", tooltip: `${this.isStacked ? 'Side by side' : 'Stacked'} view\nShift click to set for all code` }))),
        h("div", null,
          h("div", { class: {
              editorContainer: true,
              hidden: !this.isCodeVisible,
            } },
            h("stencila-editor", { activeLanguage: this.programmingLanguage, executableLanguages: this.executableLanguages, autofocus: this.autofocus, executeHandler: () => this.onExecuteHandler(), keymap: this.keymap, readOnly: !this.isExecutable, "onStencila-language-change": this.handleLanguageChange, ref: (el) => {
                this.editorRef = el;
              } },
              h("slot", { name: CodeChunkComponent.slots.text }),
              h("slot", { name: CodeChunkComponent.slots.errors }))),
          h("slot", { name: CodeChunkComponent.slots.outputs })),
        h("slot", { name: CodeChunkComponent.slots.label }),
        h("slot", { name: CodeChunkComponent.slots.caption }))));
  }
  static get is() { return "stencila-code-chunk"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "default": ["codeChunk.css"],
    "material": ["codeChunk.material.css"]
  }; }
  static get styleUrls() { return {
    "default": ["codeChunk.css"],
    "material": ["codeChunk.material.css"]
  }; }
  static get properties() { return {
    "text": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Source code contents of the CodeChunk.\nCorresponds to the `text` property of the CodeChunk schema."
      },
      "attribute": "text",
      "reflect": false
    },
    "autofocus": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Autofocus the editor on page load"
      },
      "attribute": "autofocus",
      "reflect": false,
      "defaultValue": "false"
    },
    "programmingLanguage": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string | undefined",
        "resolved": "string | undefined",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Programming language of the CodeChunk"
      },
      "attribute": "programming-language",
      "reflect": false
    },
    "languageCapabilities": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "FileFormatMap",
        "resolved": "{ [x: string]: FileFormat; }",
        "references": {
          "FileFormatMap": {
            "location": "import",
            "path": "../editor/languageUtils"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "List of all supported programming languages"
      },
      "defaultValue": "fileFormatMap"
    },
    "executableLanguages": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "FileFormatMap",
        "resolved": "undefined | { [x: string]: FileFormat; }",
        "references": {
          "FileFormatMap": {
            "location": "import",
            "path": "../editor/languageUtils"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "List of programming languages that can be executed in the current context"
      }
    },
    "isCodeVisible": {
      "type": "boolean",
      "mutable": true,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Whether the code section is visible or not"
      },
      "attribute": "is-code-visible",
      "reflect": false,
      "defaultValue": "false"
    },
    "executeHandler": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "(codeChunk: CodeChunk) => Promise<CodeChunk>",
        "resolved": "((codeChunk: CodeChunk) => Promise<CodeChunk>) | undefined",
        "references": {
          "CodeChunk": {
            "location": "import",
            "path": "@stencila/schema"
          },
          "Promise": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "A callback function to be called with the value of the `CodeChunk` node when executing the `CodeChunk`."
      }
    },
    "contentChangeHandler": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "EditorUpdateHandlerCb",
        "resolved": "((updateEvent?: ViewUpdate | undefined) => void) | undefined",
        "references": {
          "EditorUpdateHandlerCb": {
            "location": "import",
            "path": "../editor/customizations/onUpdateHandlerExtension"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Callback function to invoke whenever the editor contents are updated."
      }
    },
    "executeStatus": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "ExecuteStatus",
        "resolved": "\"Cancelled\" | \"Failed\" | \"Running\" | \"RunningPreviouslyFailed\" | \"Scheduled\" | \"ScheduledPreviouslyFailed\" | \"Succeeded\" | undefined",
        "references": {
          "ExecuteStatus": {
            "location": "import",
            "path": "../code/codeTypes"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The execution status of the code node"
      },
      "attribute": "execute-status",
      "reflect": false
    },
    "compileDigest": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "A digest representing the state of a [`Resource`] and its dependencies at\ncompile time."
      },
      "attribute": "compile-digest",
      "reflect": false
    },
    "executeRequired": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "ExecuteRequired",
        "resolved": "\"DependenciesChanged\" | \"DependenciesFailed\" | \"Failed\" | \"NeverExecuted\" | \"No\" | \"SemanticsChanged\" | undefined",
        "references": {
          "ExecuteRequired": {
            "location": "import",
            "path": "../code/codeTypes"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Status of upstream dependencies, and whether the node needs to be\nre-executed"
      },
      "attribute": "execute-required",
      "reflect": false
    },
    "executeDigest": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "A digest representing the state of a [`Resource`] and its dependencies from\nthe latest execution."
      },
      "attribute": "execute-digest",
      "reflect": false
    },
    "executeEnded": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Time when the latest code execution ended"
      },
      "attribute": "execute-ended",
      "reflect": false
    },
    "executeDuration": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Duration of the latest code execition"
      },
      "attribute": "execute-duration",
      "reflect": false
    },
    "keymap": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Keymap[]",
        "resolved": "KeyBinding[]",
        "references": {
          "Keymap": {
            "location": "import",
            "path": "../editor/editor"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [{
            "name": "see",
            "text": "https://codemirror.net/6/docs/ref/#keymap"
          }],
        "text": "Custom keyboard shortcuts to pass along to CodeMirror"
      },
      "defaultValue": "[]"
    }
  }; }
  static get states() { return {
    "isExecutable": {},
    "shiftIsPressed": {},
    "isStacked": {}
  }; }
  static get events() { return [{
      "method": "codeExecuteEvent",
      "name": "stencila-code-execute",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emitted to indicate that code node should be executed"
      },
      "complexType": {
        "original": "CodeExecuteEvent['detail']",
        "resolved": "{ nodeId: string | null; ordering: CodeExecuteOrdering; }",
        "references": {
          "CodeExecuteEvent": {
            "location": "import",
            "path": "../code/codeTypes"
          }
        }
      }
    }, {
      "method": "codeExecuteCancelEvent",
      "name": "stencila-code-execute-cancel",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emitted to indicate that the execution of the code node should be cancelled/interrupted."
      },
      "complexType": {
        "original": "CodeExecuteCancelEvent['detail']",
        "resolved": "{ nodeId: string | null; scope: \"Single\" | \"All\"; }",
        "references": {
          "CodeExecuteCancelEvent": {
            "location": "import",
            "path": "../code/codeTypes"
          }
        }
      }
    }, {
      "method": "allCodeVisibilityChange",
      "name": "stencila-code-visibility-change",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "A global event emitter to show/hide code in all `CodeChunk` or `CodeExpression` components"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "editorLayoutChange",
      "name": "stencila-editor-layout-change",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Trigger a global DOM event to set the layout of all `CodeChunk` component.\nCan be set to either show the editor and outputs side by side or stacked vertically."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "getContents": {
      "complexType": {
        "signature": "() => Promise<CodeChunk>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          },
          "CodeChunk": {
            "location": "import",
            "path": "@stencila/schema"
          }
        },
        "return": "Promise<CodeChunk>"
      },
      "docs": {
        "text": "Returns the `CodeChunk` node with the updated `text` content from the editor.",
        "tags": []
      }
    },
    "getTextContents": {
      "complexType": {
        "signature": "() => Promise<string>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<string>"
      },
      "docs": {
        "text": "Returns the text contents from the editor",
        "tags": []
      }
    },
    "execute": {
      "complexType": {
        "signature": "(ordering?: CodeExecuteOrdering) => Promise<CodeChunk | Error>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          },
          "CodeChunk": {
            "location": "import",
            "path": "@stencila/schema"
          },
          "Error": {
            "location": "global"
          },
          "CodeExecuteOrdering": {
            "location": "import",
            "path": "../code/codeTypes"
          }
        },
        "return": "Promise<CodeChunk | Error>"
      },
      "docs": {
        "text": "Run the `CodeChunk`",
        "tags": []
      }
    },
    "getRef": {
      "complexType": {
        "signature": "() => Promise<EditorView | undefined>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          },
          "EditorView": {
            "location": "import",
            "path": "@codemirror/view"
          }
        },
        "return": "Promise<EditorView | undefined>"
      },
      "docs": {
        "text": "Retrieve a reference to the internal CodeMirror editor.\nAllows for maintaining state from applications making use of this component.",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "el"; }
  static get listeners() { return [{
      "name": "stencila-discover-executable-languages",
      "method": "onDiscoverExecutableLanguages",
      "target": "window",
      "capture": false,
      "passive": false
    }, {
      "name": "stencila-code-visibility-change",
      "method": "onAllCodeVisibilityChange",
      "target": "window",
      "capture": false,
      "passive": false
    }, {
      "name": "stencila-editor-layout-change",
      "method": "onSetEditorLayout",
      "target": "window",
      "capture": false,
      "passive": false
    }]; }
}
CodeChunkComponent.slots = {
  text: 'text',
  outputs: 'outputs',
  errors: 'errors',
  caption: 'caption',
  label: 'label',
};
//# sourceMappingURL=codeChunk.js.map