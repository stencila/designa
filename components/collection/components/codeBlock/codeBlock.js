import { Component, h, Host, Listen, Method, Prop } from '@stencil/core';
import { codeBlock } from '@stencila/schema';
import { lookupFormat, } from '../editor/languageUtils';
/**
 * @slot text - The source code of the `CodeChunk`. Corresponds to the `text` field in the Stencila `CodeChunk` Schema.
 * @slot label - `label` element label of the `CodeChunk`. Corresponds to the `label` field in the Stencila `CodeChunk` Schema.
 * @slot caption - `figcaption` content of the `CodeChunk`. Corresponds to the `caption` field in the Stencila `CodeChunk` Schema.
 */
export class CodeBlockComponent {
  constructor() {
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
      return codeBlock({ text, programmingLanguage: language });
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
    return (h(Host, null,
      h("figure", null,
        h("div", null,
          h("div", { class: {
              editorContainer: true,
            } },
            h("stencila-editor", { activeLanguage: this.programmingLanguage, executableLanguages: this.executableLanguages, autofocus: this.autofocus, keymap: this.keymap, readOnly: this.readOnly, "onStencila-language-change": this.handleLanguageChange, foldGutter: this.foldGutter, lineNumbers: this.lineNumbers, lineWrapping: this.lineWrapping, ref: (el) => {
                this.editorRef = el;
              } },
              h("slot", { name: CodeBlockComponent.slots.text }),
              h("slot", { name: CodeBlockComponent.slots.errors })))),
        h("slot", { name: CodeBlockComponent.slots.label }),
        h("slot", { name: CodeBlockComponent.slots.caption }))));
  }
  static get is() { return "stencila-code-block"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "default": ["codeBlock.css"],
    "material": ["codeBlock.material.css"]
  }; }
  static get styleUrls() { return {
    "default": ["codeBlock.css"],
    "material": ["codeBlock.material.css"]
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
        "text": "Source code contents of the CodeChunk.\nCorresponds to the `text` property of the CodeBlock schema."
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
    "lineWrapping": {
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
        "text": "Control line wrapping of text inside the editor"
      },
      "attribute": "line-wrapping",
      "reflect": false,
      "defaultValue": "false"
    },
    "lineNumbers": {
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
        "text": "Determines the visibility of line numbers"
      },
      "attribute": "line-numbers",
      "reflect": false,
      "defaultValue": "true"
    },
    "foldGutter": {
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
        "text": "Enables ability to fold sections of code if the syntax package supports it"
      },
      "attribute": "fold-gutter",
      "reflect": false,
      "defaultValue": "true"
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
    "readOnly": {
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
        "text": "Disallow editing of the editor contents when set to `true`"
      },
      "attribute": "read-only",
      "reflect": false,
      "defaultValue": "false"
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
    }
  }; }
  static get methods() { return {
    "getContents": {
      "complexType": {
        "signature": "() => Promise<CodeBlock>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          },
          "CodeBlock": {
            "location": "import",
            "path": "@stencila/schema"
          }
        },
        "return": "Promise<CodeBlock>"
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
  static get listeners() { return [{
      "name": "stencila-discover-executable-languages",
      "method": "onDiscoverExecutableLanguages",
      "target": "window",
      "capture": false,
      "passive": false
    }]; }
}
CodeBlockComponent.slots = {
  text: 'text',
  outputs: 'outputs',
  errors: 'errors',
  caption: 'caption',
  label: 'label',
};
//# sourceMappingURL=codeBlock.js.map