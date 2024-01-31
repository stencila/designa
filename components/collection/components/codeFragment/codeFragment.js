import { Component, Element, Event, h, Host, Listen, Method, Prop, } from '@stencil/core';
import { LanguagePickerInline } from '../codeExpression/languageSelect';
import { fileFormatMap, lookupFormat, } from '../editor/languageUtils';
/**
 * @slot text - The contents of the code fragment
 */
export class CodeFragmentComponent {
  constructor() {
    var _a, _b;
    /**
     * The context of the component. In `read` mode the code content and its
     * language cannot be edited.
     */
    this.mode = 'read';
    /**
     * List of all supported programming languages
     */
    this.languageCapabilities = fileFormatMap;
    /**
     * List of programming languages that can be executed in the current context
     */
    this.executableLanguages = (_b = (_a = window.stencilaWebClient) === null || _a === void 0 ? void 0 : _a.executableLanguages) !== null && _b !== void 0 ? _b : {};
    /**
     * Function to call when the user selects a new language from the language picker dropdown.
     */
    this.onSelectLanguage = (language) => {
      this.languageChange.emit(lookupFormat(language));
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
    return (h(Host, { class: "text" },
      h("span", { class: "actionsSecondary" },
        h(LanguagePickerInline, { activeLanguage: (_a = this.programmingLanguage) !== null && _a !== void 0 ? _a : '', executableLanguages: this.executableLanguages, onSetLanguage: this.onSelectLanguage, languageCapabilities: this.languageCapabilities, disabled: this.mode === 'read' })),
      h("span", { class: "text", contentEditable: this.mode === 'edit', onInput: this.contentChangeHandler, role: "textbox" },
        h("slot", { name: "text" }))));
  }
  static get is() { return "stencila-code-fragment"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "default": ["codeFragment.css"],
    "material": ["codeFragment.css"]
  }; }
  static get styleUrls() { return {
    "default": ["codeFragment.css"],
    "material": ["codeFragment.css"]
  }; }
  static get properties() { return {
    "mode": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'read' | 'edit'",
        "resolved": "\"edit\" | \"read\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The context of the component. In `read` mode the code content and its\nlanguage cannot be edited."
      },
      "attribute": "mode",
      "reflect": true,
      "defaultValue": "'read'"
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
        "text": "Programming language of the CodeFragment"
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
    }
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
    }
  }; }
  static get elementRef() { return "el"; }
  static get listeners() { return [{
      "name": "stencila-discover-executable-languages",
      "method": "onDiscoverExecutableLanguages",
      "target": "window",
      "capture": false,
      "passive": false
    }]; }
}
//# sourceMappingURL=codeFragment.js.map