import { autocompletion, completeAnyWord, startCompletion, } from '@codemirror/autocomplete';
import { closeBrackets, closeBracketsKeymap } from '@codemirror/closebrackets';
import { defaultKeymap } from '@codemirror/commands';
import { commentKeymap } from '@codemirror/comment';
import { foldGutter, foldKeymap } from '@codemirror/fold';
import { lineNumbers } from '@codemirror/gutter';
import { defaultHighlightStyle } from '@codemirror/highlight';
import { history, historyField, historyKeymap } from '@codemirror/history';
import { bracketMatching } from '@codemirror/matchbrackets';
import { searchKeymap, search } from '@codemirror/search';
import { Compartment, EditorState, Prec, } from '@codemirror/state';
import { drawSelection, EditorView, highlightSpecialChars, keymap, } from '@codemirror/view';
import { Component, Element, Event, h, Host, Listen, Method, Prop, Watch, } from '@stencil/core';
import { getSlotByName } from '../utils/slotSelectors';
import { LanguagePicker } from './components/languageSelect';
import { codeErrors, updateErrors } from './customizations/errorPanel';
import { updateListenerExtension, } from './customizations/onUpdateHandlerExtension';
import { fileFormatMap, lookupFormat, } from './languageUtils';
const slots = {
  text: 'text',
  errors: 'errors',
};
const cssClasses = {
  container: 'editorContainer',
  editor: 'editor',
};
const cssIds = {
  editorTarget: 'editorTarget',
};
/**
 * @slot text - The contents of the editor.
 * @slot errors - List of any `stencila-code-error` elements to render in the Errors panel.
 */
export class Editor {
  constructor() {
    var _a, _b, _c, _d;
    this.isReady = false;
    this.isUpdatingContent = false;
    /**
     * List of all supported programming languages
     */
    this.languageCapabilities = fileFormatMap;
    /**
     * List of programming languages that can be executed in the current context
     */
    this.executableLanguages = (_b = (_a = window.stencilaWebClient) === null || _a === void 0 ? void 0 : _a.executableLanguages) !== null && _b !== void 0 ? _b : {};
    /**
     * Disallow editing of the editor contents when set to `true`
     */
    this.readOnly = false;
    // Dynamic CodeMirror states need to be "compartmentalized". @see https://codemirror.net/6/docs/ref/#state.Compartment
    this.readOnlyConf = new Compartment();
    /**
     * Programming language of the Editor
     */
    this.activeLanguage = (_d = (_c = this.languageCapabilities.R) === null || _c === void 0 ? void 0 : _c.name) !== null && _d !== void 0 ? _d : '';
    this.dispatchEffect = (effect) => {
      var _a, _b, _c;
      const docState = (_a = this.editorRef) === null || _a === void 0 ? void 0 : _a.state;
      const transaction = (_b = docState === null || docState === void 0 ? void 0 : docState.update({
        effects: [effect],
      })) !== null && _b !== void 0 ? _b : {};
      (_c = this.editorRef) === null || _c === void 0 ? void 0 : _c.dispatch(transaction);
    };
    this.getLang = async (language) => {
      switch (lookupFormat(language).name.toLowerCase()) {
        case 'bash':
        case 'zsh': {
          const { StreamLanguage } = await import('@codemirror/stream-parser');
          const { shell } = await import('@codemirror/legacy-modes/mode/shell');
          return StreamLanguage.define(shell);
        }
        case 'latex': {
          const { StreamLanguage } = await import('@codemirror/stream-parser');
          const { stexMath } = await import('@codemirror/legacy-modes/mode/stex');
          return StreamLanguage.define(stexMath);
        }
        case 'toml': {
          const { StreamLanguage } = await import('@codemirror/stream-parser');
          const { toml } = await import('@codemirror/legacy-modes/mode/toml');
          return StreamLanguage.define(toml);
        }
        case 'yaml': {
          const { StreamLanguage } = await import('@codemirror/stream-parser');
          const { yaml } = await import('@codemirror/legacy-modes/mode/yaml');
          return StreamLanguage.define(yaml);
        }
        case 'dockerfile': {
          const { StreamLanguage } = await import('@codemirror/stream-parser');
          const { dockerFile } = await import('@codemirror/legacy-modes/mode/dockerfile');
          return StreamLanguage.define(dockerFile);
        }
        case 'html': {
          const { html } = await import('@codemirror/lang-html');
          return html();
        }
        case 'javascript': {
          const { javascript } = await import('@codemirror/lang-javascript');
          return javascript();
        }
        case 'typescript': {
          const { javascript } = await import('@codemirror/lang-javascript');
          return javascript({ typescript: true });
        }
        case 'json': {
          const { json } = await import('@codemirror/lang-json');
          return json();
        }
        case 'xml': {
          const { xml } = await import('@codemirror/lang-xml');
          return xml();
        }
        case 'calc':
        case 'python': {
          const { python } = await import('@codemirror/lang-python');
          return python();
        }
        case 'r': {
          const { StreamLanguage } = await import('@codemirror/stream-parser');
          const { r } = await import('@codemirror/legacy-modes/mode/r');
          return StreamLanguage.define(r);
        }
        case 'rmd': {
          const { markdown } = await import('@codemirror/lang-markdown');
          const { StreamLanguage } = await import('@codemirror/stream-parser');
          const { r } = await import('@codemirror/legacy-modes/mode/r');
          return markdown({ defaultCodeLanguage: StreamLanguage.define(r) });
        }
        case 'md':
        case 'markdown':
        default: {
          const { markdown } = await import('@codemirror/lang-markdown');
          return markdown();
        }
        case 'sql': {
          const { sql } = await import('@codemirror/lang-sql');
          return sql();
        }
      }
    };
    // Dynamic CodeMirror states need to be "compartmentalized". @see https://codemirror.net/6/docs/ref/#state.Compartment
    this.languageConf = new Compartment();
    /**
     * Resolve and set a new active CodeMirror syntax
     */
    this.setEditorSyntax = async (language) => {
      const lang = await this.getLang(language);
      this.dispatchEffect(this.languageConf.reconfigure(lang));
    };
    this.setLanguagePickerRef = (el) => (this.languagePickerRef = el);
    /**
     * Function to call when the user selects a new language from the language picker dropdown.
     */
    this.onSelectLanguage = async (e) => {
      const target = e.currentTarget;
      const language = lookupFormat(target.value);
      this.languageChange.emit(language);
      return this.setEditorSyntax(language.name);
    };
    /**
     * Wrapper around the `executeHandler` function, needed to run using CodeMirror keyboard shortcuts.
     */
    this.execute = () => {
      this.getContents()
        .then((contents) => {
        return this.executeHandler ? this.executeHandler(contents) : contents;
      })
        .catch((err) => {
        console.error(err);
        return false;
      });
      return true;
    };
    /**
     * Autofocus the editor on page load
     */
    this.autofocus = false;
    // Dynamic CodeMirror states need to be "compartmentalized". @see https://codemirror.net/6/docs/ref/#state.Compartment
    this.lineNumbersConf = new Compartment();
    /**
     * Determines the visibility of line numbers
     */
    this.lineNumbers = true;
    // Dynamic CodeMirror states need to be "compartmentalized". @see https://codemirror.net/6/docs/ref/#state.Compartment
    this.lineWrappingConf = new Compartment();
    /**
     * Control line wrapping of text inside the editor
     */
    this.lineWrapping = false;
    // Dynamic CodeMirror states need to be "compartmentalized". @see https://codemirror.net/6/docs/ref/#state.Compartment
    this.foldGutterConf = new Compartment();
    /**
     * Enables ability to fold sections of code if the syntax package supports it
     */
    this.foldGutter = true;
    /**
     * Custom keyboard shortcuts to pass along to CodeMirror
     * @see https://codemirror.net/6/docs/ref/#keymap
     */
    this.keymap = [];
    this.setErrors = () => {
      var _a;
      (_a = this.editorRef) === null || _a === void 0 ? void 0 : _a.dispatch({
        effects: updateErrors.of({
          slotRef: this.errorsSlot,
        }),
      });
    };
    this.getCodeMirrorConfig = async (config = {}) => {
      const { language, foldGutterEnabled, lineNumbersEnabled, lineWrappingEnabled, } = Object.assign({ language: this.activeLanguage, foldGutterEnabled: this.foldGutter, lineNumbersEnabled: this.lineNumbers, lineWrappingEnabled: this.lineWrapping }, config);
      const languageSyntax = await this.getLang(language);
      const extensions = [
        history(),
        autocompletion(),
        EditorState.languageData.of(() => [{ autocomplete: completeAnyWord }]),
        bracketMatching(),
        closeBrackets(),
        Prec.fallback(defaultHighlightStyle),
        this.languageConf.of(languageSyntax),
        this.lineWrappingConf.of(lineWrappingEnabled ? EditorView.lineWrapping : []),
        this.lineNumbersConf.of(lineNumbersEnabled ? lineNumbers() : []),
        this.foldGutterConf.of(foldGutterEnabled ? foldGutter() : []),
        drawSelection(),
        EditorState.allowMultipleSelections.of(true),
        search({ top: true }),
        highlightSpecialChars(),
        keymap.of([
          ...this.keymap,
          ...commentKeymap,
          ...closeBracketsKeymap,
          ...historyKeymap,
          ...foldKeymap,
          ...searchKeymap,
          {
            key: 'Ctrl-Space',
            run: startCompletion,
          },
          {
            key: 'Ctrl-Enter',
            run: this.execute,
          },
          ...defaultKeymap,
        ]),
        this.readOnlyConf.of(EditorView.editable.of(!this.readOnly)),
        codeErrors(),
        updateListenerExtension((e) => {
          var _a;
          (_a = this.contentChangeHandler) === null || _a === void 0 ? void 0 : _a.call(this, e);
          if (!this.isUpdatingContent) {
            this.contentChange.emit(e);
          }
        }),
      ];
      return extensions;
    };
    this.initCodeMirror = async () => {
      var _a, _b;
      const root = this.el;
      const slotEl = getSlotByName(root)(slots.text)[0];
      const textContent = (_b = (_a = this.contents) !== null && _a !== void 0 ? _a : slotEl === null || slotEl === void 0 ? void 0 : slotEl.textContent) !== null && _b !== void 0 ? _b : '';
      this.editorRef = new EditorView({
        state: EditorState.create({
          doc: textContent,
          extensions: await this.getCodeMirrorConfig(),
        }),
      });
      this.isReady = true;
    };
    this.attachEditorToDom = () => {
      var _a, _b, _c;
      const editorDom = (_a = this.editorRef) === null || _a === void 0 ? void 0 : _a.dom;
      if (editorDom) {
        (_c = (_b = this.el) === null || _b === void 0 ? void 0 : _b.querySelector(`#${cssIds.editorTarget}`)) === null || _c === void 0 ? void 0 : _c.replaceWith(editorDom);
      }
    };
    this.setContentsHandler = (contents) => {
      var _a, _b, _c, _d;
      this.isUpdatingContent = true;
      const docState = (_a = this.editorRef) === null || _a === void 0 ? void 0 : _a.state;
      const transaction = (_c = docState === null || docState === void 0 ? void 0 : docState.update({
        changes: {
          from: 0,
          to: docState.doc.length,
          insert: contents,
        },
        selection: (_b = this.editorRef) === null || _b === void 0 ? void 0 : _b.state.selection,
      })) !== null && _c !== void 0 ? _c : {};
      (_d = this.editorRef) === null || _d === void 0 ? void 0 : _d.dispatch(transaction);
      this.isUpdatingContent = false;
    };
    this.textSlotObserver = new MutationObserver(() => {
      var _a, _b;
      const updatedText = (_b = (_a = this.textSlot) === null || _a === void 0 ? void 0 : _a.textContent) !== null && _b !== void 0 ? _b : '';
      this.setContentsHandler(updatedText);
    });
    /**
     * Prevents keyboard event listeners attached to parent DOM elements from firing.
     * This is to avoid conflicts when user has focused on the editor.
     */
    this.stopEventPropagation = (e) => {
      e.stopPropagation();
    };
    /**
     * Brings DOM focus to the editor
     */
    this.focus = () => {
      var _a;
      (_a = this.editorRef) === null || _a === void 0 ? void 0 : _a.focus();
    };
  }
  contentsChanged(nextValue, prevValue) {
    if (nextValue !== prevValue) {
      this.setContentsHandler(nextValue);
    }
  }
  onDiscoverExecutableLanguages({ detail, }) {
    this.executableLanguages = detail.languages;
  }
  /**
   * Update the CodeMirror internal state when the `readOnly` prop changes
   */
  readOnlyChanged(nextReadOnly, prevReadOnly) {
    if (nextReadOnly !== prevReadOnly) {
      this.dispatchEffect(this.readOnlyConf.reconfigure(EditorView.editable.of(!this.readOnly)));
    }
  }
  /**
   * Update the internal state, for both the component and CodeMirror, when the
   * `activeLanguage` prop changes
   */
  activeLanguageChanged(nextLanguage, prevLanguage) {
    if (nextLanguage !== prevLanguage) {
      this.setEditorSyntax(nextLanguage).catch((err) => {
        console.log(err);
      });
    }
  }
  onSetLineNumbers(nextValue, prevValue) {
    if (nextValue !== prevValue) {
      this.dispatchEffect(this.lineNumbersConf.reconfigure(nextValue ? lineNumbers() : []));
    }
  }
  onSetLineWrapping(nextValue, prevValue) {
    if (nextValue !== prevValue) {
      this.dispatchEffect(this.lineWrappingConf.reconfigure(nextValue ? EditorView.lineWrapping : []));
    }
  }
  onSetfoldGutter(nextValue, prevValue) {
    if (nextValue !== prevValue) {
      this.dispatchEffect(this.foldGutterConf.reconfigure(nextValue ? foldGutter() : []));
    }
  }
  /**
   * Retrieve the Editor contents and active language.
   */
  getContents() {
    var _a, _b, _c, _d;
    return Promise.resolve({
      text: (_b = (_a = this.editorRef) === null || _a === void 0 ? void 0 : _a.state.doc.toString()) !== null && _b !== void 0 ? _b : '',
      language: lookupFormat((_d = (_c = this.languagePickerRef) === null || _c === void 0 ? void 0 : _c.value) !== null && _d !== void 0 ? _d : this.activeLanguage).name.toLowerCase(),
    });
  }
  /**
   * Replace the contents of the Editor with a supplied string.
   */
  setContents(contents) {
    this.setContentsHandler(contents);
    return Promise.resolve(contents);
  }
  /**
   * Retrieve a JSON representation of the the internal editor state.
   */
  getState() {
    var _a;
    return Promise.resolve((_a = this.editorRef) === null || _a === void 0 ? void 0 : _a.state.toJSON({
      history: historyField,
    }));
  }
  /**
   * Update the internal editor state with the given JSON object.
   */
  async setState(state) {
    var _a;
    (_a = this.editorRef) === null || _a === void 0 ? void 0 : _a.setState(EditorState.fromJSON(state, { extensions: await this.getCodeMirrorConfig() }, {
      history: historyField,
    }));
  }
  /**
   * Create a new editor state from a given string.
   * The string will be used as the initial contents of the editor.
   */
  async setStateFromString(content) {
    var _a;
    (_a = this.editorRef) === null || _a === void 0 ? void 0 : _a.setState(EditorState.create({
      doc: content,
      extensions: await this.getCodeMirrorConfig(),
    }));
  }
  /**
   * Retrieve a reference to the internal CodeMirror editor.
   * Allows for maintaining state from applications making use of this component.
   */
  async getRef() {
    if (this.editorRef) {
      return this.editorRef;
    }
    return new Promise((resolve, reject) => {
      let isChecking = true;
      const timeout = 3000;
      const wait = setTimeout(() => {
        isChecking = false;
      }, timeout);
      const check = () => {
        setInterval(() => {
          if (this.editorRef && this.isReady) {
            clearTimeout(wait);
            resolve(this.editorRef);
          }
          else if (!isChecking) {
            reject(new Error(`Editor wasn’t instantiated in time (${timeout}ms), please try again.`));
          }
          else {
            check();
          }
        }, 100);
      };
      check();
    });
  }
  async componentWillLoad() {
    try {
      return this.initCodeMirror();
    }
    catch (err) {
      console.log('Encountered error while initializing code editor\n', err);
    }
  }
  componentDidLoad() {
    this.attachEditorToDom();
    if (this.autofocus) {
      this.focus();
    }
    if (this.textSlot) {
      this.textSlotObserver.observe(this.textSlot, {
        childList: true,
        characterData: true,
        subtree: true,
      });
    }
    if (this.errorsSlot) {
      this.setErrors();
    }
  }
  disconnectedCallback() {
    var _a;
    this.textSlotObserver.disconnect();
    (_a = this.editorRef) === null || _a === void 0 ? void 0 : _a.destroy();
  }
  render() {
    return (h(Host, null,
      h("div", { class: cssClasses.container },
        h("div", { 
          // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
          class: cssClasses.editor, onKeyDown: this.stopEventPropagation, onClick: this.focus },
          h("div", { class: "hidden", ref: (el) => (this.textSlot = el) },
            h("slot", { name: slots.text })),
          h("div", { ref: (el) => (this.errorsSlot = el) },
            h("slot", { name: slots.errors })),
          h("div", { id: cssIds.editorTarget })),
        h("menu", null,
          h(LanguagePicker, { activeLanguage: this.activeLanguage, disabled: this.readOnly, onSetLanguage: this.onSelectLanguage, languageCapabilities: this.languageCapabilities, executableLanguages: this.executableLanguages, setRef: this.setLanguagePickerRef })))));
  }
  static get is() { return "stencila-editor"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "default": ["editor.css"],
    "material": ["editor.material.css"]
  }; }
  static get styleUrls() { return {
    "default": ["editor.css"],
    "material": ["editor.material.css"]
  }; }
  static get properties() { return {
    "contents": {
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
        "text": "Text contents of the editor"
      },
      "attribute": "contents",
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
            "path": "./languageUtils"
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
        "resolved": "{ [x: string]: FileFormat; }",
        "references": {
          "FileFormatMap": {
            "location": "import",
            "path": "./languageUtils"
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
    "activeLanguage": {
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
        "text": "Programming language of the Editor"
      },
      "attribute": "active-language",
      "reflect": false,
      "defaultValue": "this.languageCapabilities.R?.name ?? ''"
    },
    "executeHandler": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "(contents: EditorContents) => Promise<unknown>",
        "resolved": "((contents: EditorContents) => Promise<unknown>) | undefined",
        "references": {
          "EditorContents": {
            "location": "local"
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
        "text": "Function to be evaluated over the contents of the editor."
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
            "path": "./customizations/onUpdateHandlerExtension"
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
    "keymap": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Keymap[]",
        "resolved": "KeyBinding[]",
        "references": {
          "Keymap": {
            "location": "local"
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
            "path": "./languageUtils"
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
        "text": "Event emitted when the content of the editor is changed."
      },
      "complexType": {
        "original": "ViewUpdate",
        "resolved": "ViewUpdate",
        "references": {
          "ViewUpdate": {
            "location": "import",
            "path": "@codemirror/view"
          }
        }
      }
    }]; }
  static get methods() { return {
    "getContents": {
      "complexType": {
        "signature": "() => Promise<EditorContents>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          },
          "EditorContents": {
            "location": "local"
          }
        },
        "return": "Promise<EditorContents>"
      },
      "docs": {
        "text": "Retrieve the Editor contents and active language.",
        "tags": []
      }
    },
    "setContents": {
      "complexType": {
        "signature": "(contents: string) => Promise<string>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<string>"
      },
      "docs": {
        "text": "Replace the contents of the Editor with a supplied string.",
        "tags": []
      }
    },
    "getState": {
      "complexType": {
        "signature": "() => Promise<EditorStateJSON>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          },
          "EditorStateJSON": {
            "location": "local"
          }
        },
        "return": "Promise<EditorStateJSON>"
      },
      "docs": {
        "text": "Retrieve a JSON representation of the the internal editor state.",
        "tags": []
      }
    },
    "setState": {
      "complexType": {
        "signature": "(state: EditorStateJSON) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          },
          "EditorStateJSON": {
            "location": "local"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "Update the internal editor state with the given JSON object.",
        "tags": []
      }
    },
    "setStateFromString": {
      "complexType": {
        "signature": "(content: string) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "Create a new editor state from a given string.\nThe string will be used as the initial contents of the editor.",
        "tags": []
      }
    },
    "getRef": {
      "complexType": {
        "signature": "() => Promise<EditorView>",
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
        "return": "Promise<EditorView>"
      },
      "docs": {
        "text": "Retrieve a reference to the internal CodeMirror editor.\nAllows for maintaining state from applications making use of this component.",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "contents",
      "methodName": "contentsChanged"
    }, {
      "propName": "readOnly",
      "methodName": "readOnlyChanged"
    }, {
      "propName": "activeLanguage",
      "methodName": "activeLanguageChanged"
    }, {
      "propName": "lineNumbers",
      "methodName": "onSetLineNumbers"
    }, {
      "propName": "lineWrapping",
      "methodName": "onSetLineWrapping"
    }, {
      "propName": "foldGutter",
      "methodName": "onSetfoldGutter"
    }]; }
  static get listeners() { return [{
      "name": "stencila-discover-executable-languages",
      "method": "onDiscoverExecutableLanguages",
      "target": "window",
      "capture": false,
      "passive": false
    }]; }
}
//# sourceMappingURL=editor.js.map