import { Component, Event, h, Host, Listen, Prop, State, } from '@stencil/core';
import { isPending } from '../code/codeUtils';
// =============================================================================
export class StencilaDocumentToolbar {
  constructor() {
    var _a, _b;
    /**
     * When `fixed` the Navbar will remain pinned to the top of the screen.
     * Note that if the Navbar component is not followed by a sibling element,
     * you will have to set `margin-top: 3rem` on the following element yourself.
     */
    this.position = 'fixed';
    this.isExecutable = Object.keys((_b = (_a = window.stencilaWebClient) === null || _a === void 0 ? void 0 : _a.executableLanguages) !== null && _b !== void 0 ? _b : {}).length > 0;
    this.shiftIsPressed = false;
    this.altIsPressed = false;
    this.onKeyPress = (e) => {
      this.shiftIsPressed = e.shiftKey;
      this.altIsPressed = e.altKey;
    };
    this.addKeyListeners = () => {
      window.addEventListener('keydown', this.onKeyPress);
      window.addEventListener('keyup', this.onKeyPress);
    };
    this.removeKeyListeners = () => {
      window.removeEventListener('keydown', this.onKeyPress);
      window.removeEventListener('keyup', this.onKeyPress);
      this.shiftIsPressed = false;
      this.altIsPressed = false;
    };
    this.runDocument = (e) => {
      if (isPending(this.executeStatus)) {
        this.codeExecuteCancelEvent.emit({
          nodeId: null,
          scope: 'All',
        });
      }
      else {
        if (this.altIsPressed) {
          // Restart kernel
          this.kernelRestart.emit();
        }
        else {
          // Execute document
          this.codeExecuteEvent.emit({
            nodeId: null,
            ordering: e.shiftKey ? 'Appearance' : 'Topological',
          });
        }
      }
    };
  }
  onDiscoverExecutableLanguages({ detail, }) {
    this.isExecutable = Object.keys(detail.languages).length > 0;
  }
  render() {
    return (h(Host, { position: this.position },
      h("stencila-toolbar", null,
        h("span", { slot: "start" },
          h("stencila-button", { onKeyDown: this.onKeyPress, color: "stock", icon: this.altIsPressed
              ? 'restart'
              : isPending(this.executeStatus)
                ? 'stop'
                : 'play', size: "small", onClick: this.runDocument, disabled: !this.isExecutable, dataEl: "Toolbar/Run Document", onMouseEnter: this.addKeyListeners, onMouseLeave: this.removeKeyListeners, tooltip: this.altIsPressed
              ? undefined
              : this.shiftIsPressed
                ? 'Run in sequentially, in order of appearance'
                : 'Run in topological order' }, this.altIsPressed
            ? 'Restart kernels'
            : isPending(this.executeStatus)
              ? 'Cancel all'
              : 'Run all')),
        this.sourceUrl !== undefined && (h("span", { slot: "end" },
          h("stencila-button", { color: "stock", href: this.sourceUrl, target: "_blank", rel: "nofollow noopener", icon: "external-link", size: "small", dataEl: "Toolbar/Project Source" }, "Source"))))));
  }
  static get is() { return "stencila-document-toolbar"; }
  static get originalStyleUrls() { return {
    "default": ["documentToolbar.css"],
    "material": ["documentToolbar.css"]
  }; }
  static get styleUrls() { return {
    "default": ["documentToolbar.css"],
    "material": ["documentToolbar.css"]
  }; }
  static get properties() { return {
    "sourceUrl": {
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
        "text": "The URL of the document being decorated. Could be a Snapshot from Stencila Hub, a Project URL, or something else."
      },
      "attribute": "source-url",
      "reflect": false
    },
    "position": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'fixed' | 'static'",
        "resolved": "\"fixed\" | \"static\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "When `fixed` the Navbar will remain pinned to the top of the screen.\nNote that if the Navbar component is not followed by a sibling element,\nyou will have to set `margin-top: 3rem` on the following element yourself."
      },
      "attribute": "position",
      "reflect": false,
      "defaultValue": "'fixed'"
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
        "text": "The execution status of the document"
      },
      "attribute": "execute-status",
      "reflect": false
    }
  }; }
  static get states() { return {
    "isExecutable": {},
    "shiftIsPressed": {},
    "altIsPressed": {}
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
      "method": "kernelRestart",
      "name": "stencila-kernel-restart",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emitted to indicate that language kernels should be restarted"
      },
      "complexType": {
        "original": "Record<string, never>",
        "resolved": "{ [x: string]: never; }",
        "references": {
          "Record": {
            "location": "global"
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
  static get listeners() { return [{
      "name": "stencila-discover-executable-languages",
      "method": "onDiscoverExecutableLanguages",
      "target": "window",
      "capture": false,
      "passive": false
    }]; }
}
//# sourceMappingURL=documentToolbar.js.map