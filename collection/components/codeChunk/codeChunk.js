import { Component, Element, Event, h, Host, Listen, Method, Prop, State, } from '@stencil/core';
import { codeChunk as makeCodeChunk, isA } from '@stencila/schema';
export class CodeChunkComponent {
  constructor() {
    /**
     * Autofocus the editor on page load
     */
    this.autofocus = false;
    /**
     * @deprecated
     * Legacy method for defining the programming language of the CodeChunk
     * Use `programmingLanguage` prop, or `programming-language` HTML attribute instead.
     */
    this.programmingLanguageDataAttribute = undefined;
    /**
     * Programming language of the CodeChunk
     */
    this.programmingLanguage = this.programmingLanguageDataAttribute;
    /**
     * Whether the code section is visible or not
     */
    this.isCodeVisible = false;
    /**
     * Custom keyboard shortcuts to pass along to CodeMirror
     * @see https://codemirror.net/6/docs/ref/#keymap
     */
    this.keymap = [];
    this.executeCodeState = 'INITIAL';
    this.isStacked = true;
    this.isCodeVisibleState = this.isCodeVisible;
    this.toggleCodeVisibility = (e) => {
      e.preventDefault();
      if (e.shiftKey) {
        this.toggleAllCodeVisibility();
      }
      else {
        this.isCodeVisibleState = !this.isCodeVisibleState;
      }
    };
    this.toggleAllCodeVisibility = () => this.setAllCodeVisibilityHandler(!this.isCodeVisibleState);
    this.onExecuteHandler = async () => {
      this.executeCodeState = 'PENDING';
      const node = await this.getContents();
      window.dispatchEvent(new CustomEvent('document:execute', {
        detail: {
          nodeId: this.el.id,
          value: node,
        },
      }));
      if (this.executeHandler !== undefined) {
        const computed = await this.executeHandler(node);
        this.executeCodeState = 'RESOLVED';
        this.codeChunk = computed;
        return computed;
      }
      this.executeCodeState = 'RESOLVED';
      return node;
    };
    this.setEditorLayoutHandler = (isStacked) => {
      this.isStacked = isStacked;
    };
    this.toggleEditorLayout = (e) => {
      e.preventDefault();
      if (e.shiftKey) {
        this.setEditorLayout.emit({ isStacked: !this.isStacked });
      }
      else {
        this.setEditorLayoutHandler(!this.isStacked);
      }
    };
    // Create an execute handler bound to this instance
    // @see https://github.com/typescript-eslint/typescript-eslint/blob/v3.7.0/packages/eslint-plugin/docs/rules/unbound-method.md
    this.executeRef = () => this.execute();
    this.setCodeVisibility = (e) => {
      this.isCodeVisibleState = e.detail.isVisible;
    };
  }
  onSetAllCodeVisibility(event) {
    this.setCodeVisibility(event);
  }
  onUpdateCodeChunk({ detail }) {
    if (detail.nodeId === this.el.id && isA('CodeChunk', detail.value)) {
      this.codeChunk = detail.value;
    }
  }
  onSetEditorLayout(event) {
    this.setEditorLayoutHandler(event.detail.isStacked);
  }
  componentWillLoad() {
    /** Get rendered width of component to decide whether to stack the editor and outputs or not.
     * We can’t use media queries as the component is not always full width of the viewport, and depends on the parent element width.
     */
    const minWidth = 1200; // A non-scientific value below which the side-by-side layout looks too narrow.
    this.isStacked = this.el.getBoundingClientRect().width < minWidth;
  }
  componentDidLoad() {
    this.editorRef = this.el.querySelector('stencila-editor');
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
   * Run the `CodeChunk`
   */
  async execute() {
    this.executeCodeState = 'PENDING';
    try {
      const res = await this.onExecuteHandler();
      // Add artificial delay to allow user to register the spinner
      window.setTimeout(() => (this.executeCodeState = 'RESOLVED'), 250);
      return res;
    }
    catch (err) {
      console.error(err);
      this.executeCodeState = 'RESOLVED';
      return err;
    }
  }
  setAllCodeVisibilityHandler(isVisible) {
    this.setAllCodeVisibility.emit({ isVisible });
  }
  render() {
    var _a, _b;
    return (h(Host, { class: {
        isCodeVisible: this.isCodeVisibleState,
        isStacked: this.isStacked,
      } },
      h("figure", null,
        h("stencila-action-menu", null,
          this.executeHandler !== undefined && (h("stencila-button", { icon: "play", minimal: true, color: "key", class: "run", size: "xsmall", tooltip: "Run", iconOnly: true, slot: "persistentActions", onClick: this.executeRef, isLoading: this.executeCodeState === 'PENDING' })),
          h("stencila-button", { minimal: true, color: "key", class: "sourceToggle", onClick: this.toggleCodeVisibility, icon: this.isCodeVisibleState ? 'eye-off' : 'eye', iconOnly: true, size: "xsmall", slot: "persistentActions", tooltip: `${this.isCodeVisibleState ? 'Hide' : 'Show'} Code\nShift click to set for all code blocks` }),
          this.isCodeVisibleState && (h("stencila-button", { minimal: true, color: "key", class: "layoutToggle", onClick: this.toggleEditorLayout, icon: this.isStacked ? 'layout-column' : 'layout-row', iconOnly: true, size: "xsmall", slot: "persistentActions", tooltip: `${this.isStacked ? 'Side by side' : 'Stacked'} view\nShift click to set for all code blocks` }))),
        h("div", null,
          h("div", { class: {
              editorContainer: true,
              hidden: !this.isCodeVisibleState,
            } },
            h("stencila-editor", { activeLanguage: this.programmingLanguage, autofocus: this.autofocus, executeHandler: this.onExecuteHandler, keymap: this.keymap, readOnly: this.executeHandler === undefined, errors: (_a = this.codeChunk) === null || _a === void 0 ? void 0 : _a.errors },
              h("slot", { name: CodeChunkComponent.slots.text }))),
          h("stencila-node-list", { nodes: (_b = this.codeChunk) === null || _b === void 0 ? void 0 : _b.outputs },
            h("slot", { name: CodeChunkComponent.slots.outputs }))),
        h("figcaption", null,
          h("slot", { name: CodeChunkComponent.slots.label }),
          h("slot", { name: CodeChunkComponent.slots.caption })))));
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
    "codeChunk": {
      "type": "unknown",
      "mutable": true,
      "complexType": {
        "original": "CodeChunk",
        "resolved": "CodeChunk | undefined",
        "references": {
          "CodeChunk": {
            "location": "import",
            "path": "@stencila/schema"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Stencila CodeChunk node to render"
      }
    },
    "programmingLanguageDataAttribute": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string | undefined",
        "resolved": "string | undefined",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [{
            "text": "Legacy method for defining the programming language of the CodeChunk\nUse `programmingLanguage` prop, or `programming-language` HTML attribute instead.",
            "name": "deprecated"
          }],
        "text": ""
      },
      "attribute": "data-programminglanguage",
      "reflect": false,
      "defaultValue": "undefined"
    },
    "programmingLanguage": {
      "type": "string",
      "mutable": false,
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
      "reflect": false,
      "defaultValue": "this.programmingLanguageDataAttribute"
    },
    "isCodeVisible": {
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
            "text": "https ://codemirror.net/6/docs/ref/#keymap",
            "name": "see"
          }],
        "text": "Custom keyboard shortcuts to pass along to CodeMirror"
      },
      "defaultValue": "[]"
    }
  }; }
  static get states() { return {
    "executeCodeState": {},
    "isStacked": {},
    "isCodeVisibleState": {}
  }; }
  static get events() { return [{
      "method": "setAllCodeVisibility",
      "name": "setAllCodeVisibility",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Trigger a global DOM event to hide or show all `CodeChunk` and `CodeExpress` component source code,\nleaving only the results visible."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "setEditorLayout",
      "name": "setEditorLayout",
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
    "execute": {
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
        "text": "Run the `CodeChunk`",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "el"; }
  static get listeners() { return [{
      "name": "collapseAllCode",
      "method": "onSetAllCodeVisibility",
      "target": "window",
      "capture": false,
      "passive": false
    }, {
      "name": "setAllCodeVisibility",
      "method": "onSetAllCodeVisibility",
      "target": "window",
      "capture": false,
      "passive": false
    }, {
      "name": "document:patched",
      "method": "onUpdateCodeChunk",
      "target": "window",
      "capture": false,
      "passive": false
    }, {
      "name": "setEditorLayout",
      "method": "onSetEditorLayout",
      "target": "window",
      "capture": false,
      "passive": false
    }]; }
}
CodeChunkComponent.slots = {
  text: 'text',
  outputs: 'outputs',
  caption: 'caption',
  label: 'label',
};
