import { Component, Element, h, Host, Listen, Method, Prop, State, } from '@stencil/core';
import { codeExpression, isA } from '@stencila/schema';
import { NodeRenderer } from '../nodeList/nodeRenderer';
const slots = {
  text: 'text',
  output: 'output',
};
export class CodeExpressionComponent {
  constructor() {
    this.emptyOutputMessage = 'No output to show';
    this.hoverTimeOut = undefined;
    this.hoverStartedAt = Date.now();
    this.hover = false;
    this.isCodeVisible = false;
    this.isOutputEmpty = false;
    this.executeCodeState = 'INITIAL';
    this.getOutputSlotContents = () => {
      var _a, _b;
      // Checking output list to account for non-text nodes such as images.
      const output = ((_b = (_a = this.outputSlot) === null || _a === void 0 ? void 0 : _a.childNodes) !== null && _b !== void 0 ? _b : [])[0];
      return output instanceof Text
        ? output.textContent
        : output instanceof HTMLElement
          ? output
          : output === undefined
            ? output
            : 'Could not display the output';
    };
    this.checkIfEmpty = () => {
      this.isOutputEmpty = this.getOutputSlotContents() === undefined;
    };
    this.collapseAllListenHandler = (e) => {
      this.isCodeVisible = e.detail.isVisible;
    };
    this.toggleCodeVisibility = () => (this.isCodeVisible = !this.isCodeVisible);
    this.selectTextSlot = () => this.el.querySelector(`.${slots.text}`);
    this.getTextSlotContents = () => {
      var _a;
      const slot = this.selectTextSlot();
      return (_a = slot === null || slot === void 0 ? void 0 : slot.textContent) !== null && _a !== void 0 ? _a : '';
    };
    this.handleKeyDown = (event) => {
      if (event.key === 'Enter' && event.shiftKey) {
        event.preventDefault();
        this.execute().catch((err) => {
          console.error(err);
        });
      }
    };
    this.onExecuteHandler = async () => {
      this.executeCodeState = 'PENDING';
      const node = await this.getContents();
      window.dispatchEvent(new CustomEvent('document:node:execute', {
        detail: {
          nodeId: this.el.id,
          value: node,
        },
      }));
      if (this.executeHandler !== undefined) {
        const computed = await this.executeHandler(node);
        this.executeCodeState = 'RESOLVED';
        this.isOutputEmpty =
          computed.output === undefined || computed.output === null;
        this.codeExpression = computed;
        return computed;
      }
      this.executeCodeState = 'RESOLVED';
      return node;
    };
    // Create an execute handler bound to this instance
    // @see https://github.com/typescript-eslint/typescript-eslint/blob/v3.7.0/packages/eslint-plugin/docs/rules/unbound-method.md
    this.executeRef = () => this.execute();
    this.dividerArrow = () => (h("svg", { class: "divider", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 8 24", preserveAspectRatio: "xMinYMin" },
      h("path", { d: "M8 12L1 0H0v24h1l7-12z" })));
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
    this.generateContent = () => {
      return [
        h("span", { class: "actions" },
          h("stencila-button", { "aria-label": "Run Code", class: "run", onClick: this.executeRef, color: "key", disabled: !this.executeHandler, isLoading: this.executeCodeState === 'PENDING', icon: "play", iconOnly: true, minimal: true, size: "xsmall", tooltip: "Run" }),
          h("stencila-button", { "aria-label": "Run Code", class: "sourceToggle", onClick: this.toggleCodeVisibility, color: "key", icon: this.isCodeVisible ? 'eye-off' : 'eye', iconOnly: true, minimal: true, size: "xsmall", tooltip: `${this.isCodeVisible ? 'Hide' : 'Show'} Code` }),
          h("span", { class: "text", contentEditable: true, onBlur: this.removeHoverState, tabIndex: this.isCodeVisible ? 0 : -1 },
            h("slot", { name: slots.text }))),
        this.dividerArrow(),
        h("span", { class: { hidden: true, slot: true } },
          h("slot", { name: "output" })),
        this.isOutputEmpty ? (h("stencila-tooltip", { text: this.emptyOutputMessage, class: "output" }, "\u2026")) : (h(NodeRenderer, { node: this.codeExpression !== undefined
            ? this.codeExpression.output
            : this.getOutputSlotContents() })),
      ];
    };
  }
  componentWillLoad() {
    this.outputSlot = Array.from(this.el.children).filter((el) => el.slot === slots.output)[0];
    this.checkIfEmpty();
  }
  onSetAllCodeVisibility(event) {
    this.collapseAllListenHandler(event);
  }
  onUpdateCodeChunk({ detail }) {
    if (detail.nodeId === this.el.id && isA('CodeExpression', detail.value)) {
      this.codeExpression = detail.value;
    }
  }
  /**
   * Returns the `CodeExpression` node with the updated `text` contents from the editor.
   */
  async getContents() {
    return Promise.resolve(codeExpression({
      text: this.getTextSlotContents(),
      programmingLanguage: this.programmingLanguage,
    }));
  }
  /**
   * Run the `CodeExpression`
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
  render() {
    return (h(Host, { class: {
        hover: this.hover,
        isCodeVisible: this.isCodeVisible,
        isOutputEmpty: this.isOutputEmpty,
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
        "text": "A callback function to be called with the value of the `CodeExpression` node when executing the `CodeExpression`."
      }
    },
    "programmingLanguage": {
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
        "text": "Programming language of the CodeExpression"
      },
      "attribute": "programming-language",
      "reflect": false
    },
    "codeExpression": {
      "type": "unknown",
      "mutable": true,
      "complexType": {
        "original": "CodeExpression",
        "resolved": "CodeExpression | undefined",
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
    }
  }; }
  static get states() { return {
    "hover": {},
    "isCodeVisible": {},
    "isOutputEmpty": {},
    "executeCodeState": {}
  }; }
  static get methods() { return {
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
        "text": "Returns the `CodeExpression` node with the updated `text` contents from the editor.",
        "tags": []
      }
    },
    "execute": {
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
        "text": "Run the `CodeExpression`",
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
      "name": "document:node:changed",
      "method": "onUpdateCodeChunk",
      "target": "window",
      "capture": false,
      "passive": false
    }]; }
}
