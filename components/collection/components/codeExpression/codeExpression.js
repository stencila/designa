import { Component, Element, Event, h, Host, Listen, Method, Prop, State, } from '@stencil/core';
import { codeExpression } from '@stencila/schema';
import { CodeExecuteStatus } from '../code/codeExecuteStatus';
import { isPending } from '../code/codeUtils';
import { fileFormatMap, lookupFormat, } from '../editor/languageUtils';
import { LanguagePickerInline } from './languageSelect';
const slots = {
  text: 'text',
  output: 'output',
  errors: 'errors',
};
/**
 * @slot text - The source code of the `CodeChunk`. Corresponds to the `text`
 *              field in the Stencila `CodeExpression` Schema.
 * @slot output - A single output element. Corresponds to the `output` field in
 *                the Stencila `CodeExpression` Schema.
 */
export class CodeExpressionComponent {
  constructor() {
    var _a, _b;
    this.hoverTimeOut = undefined;
    this.hoverStartedAt = Date.now();
    /**
     * Disallow editing of the editor contents when set to `true`
     */
    this.readOnly = false;
    /**
     * List of all supported programming languages
     */
    this.languageCapabilities = fileFormatMap;
    /**
     * List of programming languages that can be executed in the current context
     */
    this.executableLanguages = (_b = (_a = window.stencilaWebClient) === null || _a === void 0 ? void 0 : _a.executableLanguages) !== null && _b !== void 0 ? _b : {};
    this.isExecutable = false;
    this.shiftIsPressed = false;
    /**
     * Function to call when the user selects a new language from the language
     * picker dropdown.
     */
    this.onSelectLanguage = (language) => {
      this.languageChange.emit(lookupFormat(language));
      this.programmingLanguage = language;
    };
    this.hover = false;
    /**
     * Whether the code section starts out visible or not
     */
    this.isCodeVisible = false;
    /**
     * Toggle code visibility, either locally, or globally
     */
    this.toggleCodeVisibility = (event) => {
      event.preventDefault();
      if (event.shiftKey) {
        this.allCodeVisibilityChange.emit({ isVisible: !this.isCodeVisible });
      }
      else {
        this.isCodeVisible = !this.isCodeVisible;
      }
    };
    this.selectTextSlot = () => this.el.querySelector(`.${slots.text}`);
    this.contentChangeHandler = (e) => {
      var _a;
      const target = e.currentTarget;
      this.contentChange.emit((_a = target.textContent) !== null && _a !== void 0 ? _a : '');
    };
    this.handleKeyDown = (event) => {
      if (event.key === 'Enter' && event.ctrlKey) {
        event.preventDefault();
        this.execute().catch((err) => {
          console.error(err);
        });
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
        !this.executeHandler ||
        Object.keys((_a = this.executableLanguages) !== null && _a !== void 0 ? _a : {}).length <= 0) {
        this.isExecutable = false;
        return;
      }
      const activeLanguageFormat = lookupFormat(this.programmingLanguage).name;
      this.isExecutable =
        this.executeHandler !== undefined &&
          Object.values((_b = this.executableLanguages) !== null && _b !== void 0 ? _b : {}).some((format) => format.name === activeLanguageFormat);
    };
    this.onExecuteHandler = async (ordering = 'Topological') => {
      const node = await this.getContents();
      // If node is running, emit cancel event and terminate early
      if (isPending(this.executeStatus)) {
        this.codeExecuteCancelEvent.emit({ nodeId: this.el.id, scope: 'All' });
        return node;
      }
      this.codeExecuteEvent.emit({ nodeId: this.el.id, ordering });
      if (this.isExecutable && this.executeHandler) {
        const computed = await this.executeHandler(node);
        this.codeExpression = computed;
        return computed;
      }
      return node;
    };
    // Create an execute handler bound to this instance
    // @see https://github.com/typescript-eslint/typescript-eslint/blob/v3.7.0/packages/eslint-plugin/docs/rules/unbound-method.md
    this.executeRef = (ordering) => this.execute(ordering);
    this.onMouseOutHandler = (e) => {
      const target = e.target;
      const relatedTarget = e.relatedTarget;
      if (!(target === null || target === void 0 ? void 0 : target.contains(relatedTarget))) {
        this.removeHoverState();
      }
    };
    this.addHoverState = () => {
      window.clearTimeout(this.hoverTimeOut);
      if (!this.hover) {
        this.hover = true;
        this.hoverStartedAt = Date.now();
      }
    };
    this.removeHoverState = () => {
      const diff = Date.now() - this.hoverStartedAt;
      if (this.hover && diff < 60) {
        this.hoverTimeOut = window.setTimeout(() => {
          this.hover = false;
        }, 3000);
      }
      else if (this.hover) {
        this.hover = false;
      }
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
    this.generateContent = () => {
      var _a;
      return [
        h("span", { class: "actions" },
          h("stencila-menu", { menuPosition: "bottom-start" },
            h(CodeExecuteStatus, { executeStatus: this.executeStatus, executeRequired: this.executeRequired, slot: "toggle" }),
            h("slot", { name: "code-dependencies" }),
            h("slot", { name: "code-dependents" })),
          h("stencila-button", { "aria-label": "Run Code", class: "run", onClick: (e) => this.executeRef(e.shiftKey ? 'Single' : 'Topological'), color: "key", icon: isPending(this.executeStatus) ? 'stop' : 'play', iconOnly: true, minimal: true, size: "xsmall", tooltip: isPending(this.executeStatus)
              ? 'Cancel'
              : this.shiftIsPressed
                ? 'Run only this code'
                : 'Run', onMouseEnter: this.addKeyListeners, onMouseLeave: this.removeKeyListeners }),
          h("stencila-button", { "aria-label": `${this.isCodeVisible ? 'Hide' : 'Show'} Code`, class: "secondaryAction sourceToggle", onClick: this.toggleCodeVisibility, color: "key", icon: this.isCodeVisible ? 'eye-off' : 'eye', iconOnly: true, minimal: true, size: "xsmall", tooltip: `${this.isCodeVisible ? 'Hide' : 'Show'} Code\nShift click to set for all code` }),
          h("span", { class: "secondaryAction" },
            h(LanguagePickerInline, { activeLanguage: (_a = this.programmingLanguage) !== null && _a !== void 0 ? _a : '', languageCapabilities: this.languageCapabilities, executableLanguages: this.executableLanguages, onSetLanguage: this.onSelectLanguage, disabled: this.readOnly })),
          h("span", { class: "text", contentEditable: !this.readOnly, spellcheck: "false", onBlur: this.removeHoverState, onInput: this.contentChangeHandler, tabIndex: this.isCodeVisible ? 0 : -1, role: "textbox" },
            h("slot", { name: slots.text })),
          h("slot", { name: slots.errors })),
        h("svg", { class: "divider", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 8 24", preserveAspectRatio: "xMinYMin" },
          h("path", { d: "M8 12L1 0H0v24h1l7-12z" })),
        h("slot", { name: slots.output }),
      ];
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
  componentWillLoad() {
    this.checkIfExecutable();
  }
  /**
   * Returns the text contents from the inline code editor
   */
  async getTextContents() {
    var _a;
    const slot = this.selectTextSlot();
    return Promise.resolve((_a = slot === null || slot === void 0 ? void 0 : slot.textContent) !== null && _a !== void 0 ? _a : '');
  }
  /**
   * Returns the `CodeExpression` node with the updated `text` contents from the
   * editor.
   */
  async getContents() {
    return Promise.resolve(codeExpression({
      text: await this.getTextContents(),
      programmingLanguage: this.programmingLanguage,
    }));
  }
  /**
   * Run the `CodeExpression`
   */
  async execute(ordering = 'Topological') {
    try {
      const res = await this.onExecuteHandler(ordering);
      // Add artificial delay to allow user to register the spinner
      return res;
    }
    catch (err) {
      console.error(err);
      return new Error('Could not execute CodeExpression');
    }
  }
  render() {
    return (h(Host, { class: {
        hover: this.hover,
        isCodeVisible: this.isCodeVisible,
      }, onMouseEnter: this.addHoverState, onMouseOut: this.onMouseOutHandler, onKeyDown: this.handleKeyDown }, this.generateContent()));
  }
  static get is() { return "stencila-code-expression"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "default": ["codeExpression.css"],
    "material": ["codeExpression.css"]
  }; }
  static get styleUrls() { return {
    "default": ["codeExpression.css"],
    "material": ["codeExpression.css"]
  }; }
  static get properties() { return {
    "executeHandler": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "(\n    codeExpression: CodeExpression\n  ) => Promise<CodeExpression>",
        "resolved": "((codeExpression: CodeExpression) => Promise<CodeExpression>) | undefined",
        "references": {
          "CodeExpression": {
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
        "text": "A callback function to be called with the value of the `CodeExpression`\nnode when executing the `CodeExpression`."
      }
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
    "programmingLanguage": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Programming language of the CodeExpression"
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
      "mutable": true,
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
        "text": "List of programming languages that can be executed in the current context"
      },
      "defaultValue": "window.stencilaWebClient?.executableLanguages ?? {}"
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
    "codeExpression": {
      "type": "unknown",
      "mutable": true,
      "complexType": {
        "original": "CodeExpression",
        "resolved": "Entity & { type: \"Code\" | \"CodeBlock\" | \"CodeChunk\" | \"CodeExecutable\" | \"CodeExpression\" | \"CodeFragment\"; text: string; mediaType?: string | undefined; programmingLanguage?: string | undefined; } & { type: \"CodeChunk\" | \"CodeExecutable\" | \"CodeExpression\"; programmingLanguage: string; codeDependencies?: (CodeChunk | Parameter)[] | undefined; codeDependents?: (CodeChunk | CodeExpression)[] | undefined; compileDigest?: string | undefined; errors?: CodeError[] | undefined; executeCount?: number | undefined; executeDigest?: string | undefined; executeDuration?: number | undefined; executeEnded?: Date | undefined; executeRequired?: \"NeverExecuted\" | \"SemanticsChanged\" | \"DependenciesChanged\" | \"DependenciesFailed\" | \"No\" | undefined; executeStatus?: \"Scheduled\" | \"ScheduledPreviouslyFailed\" | \"Running\" | \"RunningPreviouslyFailed\" | \"Succeeded\" | \"Failed\" | \"Cancelled\" | undefined; } & { type: \"CodeExpression\"; programmingLanguage: string; output?: Node | undefined; } | undefined",
        "references": {
          "CodeExpression": {
            "location": "import",
            "path": "@stencila/schema"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Stencila CodeExpression node to render"
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
        "text": "Whether the code section starts out visible or not"
      },
      "attribute": "is-code-visible",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get states() { return {
    "isExecutable": {},
    "shiftIsPressed": {},
    "hover": {}
  }; }
  static get events() { return [{
      "method": "languageChange",
      "name": "stencila-language-change",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Event emitted when the language of the editor is changed."
      },
      "complexType": {
        "original": "FileFormat",
        "resolved": "{ name: string; ext: string | null; aliases: string[]; }",
        "references": {
          "FileFormat": {
            "location": "import",
            "path": "../editor/languageUtils"
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
      "method": "contentChange",
      "name": "stencila-content-change",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Event emitted when the source code of the `CodeExpression` node is changed."
      },
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      }
    }, {
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
    }]; }
  static get methods() { return {
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
        "text": "Returns the text contents from the inline code editor",
        "tags": []
      }
    },
    "getContents": {
      "complexType": {
        "signature": "() => Promise<CodeExpression>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          },
          "CodeExpression": {
            "location": "import",
            "path": "@stencila/schema"
          }
        },
        "return": "Promise<CodeExpression>"
      },
      "docs": {
        "text": "Returns the `CodeExpression` node with the updated `text` contents from the\neditor.",
        "tags": []
      }
    },
    "execute": {
      "complexType": {
        "signature": "(ordering?: CodeExecuteOrdering) => Promise<CodeExpression | Error>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          },
          "CodeExpression": {
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
        "return": "Promise<CodeExpression | Error>"
      },
      "docs": {
        "text": "Run the `CodeExpression`",
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
    }]; }
}
//# sourceMappingURL=codeExpression.js.map