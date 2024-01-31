import { Component, h, Host, Prop } from '@stencil/core';
import { CodeExecuteStatus } from '../code/codeExecuteStatus';
export class CodeDependency {
  render() {
    var _a;
    const [href, target] = this.nodeKind === 'File' && this.label
      ? [this.label, 'blank']
      : [`#${this.nodeId}`, ''];
    return (h(Host, null,
      h("a", { href: href, target: target },
        h(CodeExecuteStatus, { executeStatus: this.executeStatus, executeRequired: this.executeRequired, nodeKind: this.nodeKind }),
        h("div", { class: "content" },
          h("div", { class: "label" }, (_a = this.label) !== null && _a !== void 0 ? _a : this.nodeId,
            this.programmingLanguage !== undefined && (h("code", null, this.programmingLanguage))),
          h("div", null,
            h("span", { class: "status" }, this.nodeKind))))));
  }
  static get is() { return "stencila-code-dependency"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "default": ["codeDependency.css"],
    "material": ["codeDependency.material.css"]
  }; }
  static get styleUrls() { return {
    "default": ["codeDependency.css"],
    "material": ["codeDependency.material.css"]
  }; }
  static get properties() { return {
    "nodeId": {
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
        "text": "The Node ID, should match the HTML `id` attribute."
      },
      "attribute": "node-id",
      "reflect": false
    },
    "label": {
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
        "text": "User assigned label for the node"
      },
      "attribute": "label",
      "reflect": false
    },
    "nodeKind": {
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
        "text": "Node kind, such as `CodeChunk`, `CodeExpression`, `Parameter`, etc.\nAligns with the Stencila Schema node types."
      },
      "attribute": "node-kind",
      "reflect": false
    },
    "executeAuto": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'Always' | 'Auto' | 'Never'",
        "resolved": "\"Always\" | \"Auto\" | \"Never\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Whether the dependency should be automatically re-executed based on semantic\nanalysis of the code."
      },
      "attribute": "execute-auto",
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
      "optional": true,
      "docs": {
        "tags": [],
        "text": "The execution status of the code node"
      },
      "attribute": "execute-status",
      "reflect": false
    },
    "programmingLanguage": {
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
        "text": "Programming language of the CodeExpression, note that not all nodes have this\nproperty (`Parameter` for example)."
      },
      "attribute": "programming-language",
      "reflect": false
    }
  }; }
}
//# sourceMappingURL=codeDependency.js.map