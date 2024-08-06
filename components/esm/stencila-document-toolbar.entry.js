import { r as registerInstance, f as createEvent, h, e as Host } from './index-2305c23c.js';
import { i as isPending } from './codeUtils-6d110640.js';

const defaultDocumentToolbarCss = ":host,stencila-document-toolbar{--background:var(--color-neutral-100);display:block}:host([position=fixed]),stencila-document-toolbar[position=fixed]{left:0;max-width:none!important;position:fixed;top:0;width:100%;z-index:30}:host([position=fixed])+*,stencila-document-toolbar[position=fixed]+*{margin-top:3rem}:host .hidden-sm,stencila-document-toolbar .hidden-sm{display:none}@media (min-width:640px){:host .hidden-sm,stencila-document-toolbar .hidden-sm{display:inline}}:host .documentStatus,stencila-document-toolbar .documentStatus{color:#4a4a4a;color:var(--color-key,#4a4a4a);font-size:.875rem;line-height:1.25rem;line-height:1}:host .documentStatus.success,stencila-document-toolbar .documentStatus.success{color:#1b5430;color:var(--color-success-700,#1b5430)}:host .documentStatus.danger,stencila-document-toolbar .documentStatus.danger{color:#cf445e;color:var(--color-danger-500,#cf445e)}:host .documentStatus stencila-icon,stencila-document-toolbar .documentStatus stencila-icon{margin-right:.25rem}:host .documentStatus stencila-tooltip,stencila-document-toolbar .documentStatus stencila-tooltip{cursor:help}:host .documentStatus span,stencila-document-toolbar .documentStatus span{vertical-align:middle}";

const materialDocumentToolbarCss = ":host,stencila-document-toolbar{--background:var(--color-neutral-100);display:block}:host([position=fixed]),stencila-document-toolbar[position=fixed]{left:0;max-width:none!important;position:fixed;top:0;width:100%;z-index:30}:host([position=fixed])+*,stencila-document-toolbar[position=fixed]+*{margin-top:3rem}:host .hidden-sm,stencila-document-toolbar .hidden-sm{display:none}@media (min-width:640px){:host .hidden-sm,stencila-document-toolbar .hidden-sm{display:inline}}:host .documentStatus,stencila-document-toolbar .documentStatus{color:#4a4a4a;color:var(--color-key,#4a4a4a);font-size:.875rem;line-height:1.25rem;line-height:1}:host .documentStatus.success,stencila-document-toolbar .documentStatus.success{color:#1b5430;color:var(--color-success-700,#1b5430)}:host .documentStatus.danger,stencila-document-toolbar .documentStatus.danger{color:#cf445e;color:var(--color-danger-500,#cf445e)}:host .documentStatus stencila-icon,stencila-document-toolbar .documentStatus stencila-icon{margin-right:.25rem}:host .documentStatus stencila-tooltip,stencila-document-toolbar .documentStatus stencila-tooltip{cursor:help}:host .documentStatus span,stencila-document-toolbar .documentStatus span{vertical-align:middle}";

const StencilaDocumentToolbar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.codeExecuteEvent = createEvent(this, "stencila-code-execute", 7);
    this.kernelRestart = createEvent(this, "stencila-kernel-restart", 7);
    this.codeExecuteCancelEvent = createEvent(this, "stencila-code-execute-cancel", 7);
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
    return (h(Host, { position: this.position }, h("stencila-toolbar", null, h("span", { slot: "start" }, h("stencila-button", { onKeyDown: this.onKeyPress, color: "stock", icon: this.altIsPressed
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
        : 'Run all')), this.sourceUrl !== undefined && (h("span", { slot: "end" }, h("stencila-button", { color: "stock", href: this.sourceUrl, target: "_blank", rel: "nofollow noopener", icon: "external-link", size: "small", dataEl: "Toolbar/Project Source" }, "Source"))))));
  }
};
StencilaDocumentToolbar.style = {
  default: defaultDocumentToolbarCss,
  material: materialDocumentToolbarCss
};

export { StencilaDocumentToolbar as stencila_document_toolbar };

//# sourceMappingURL=stencila-document-toolbar.entry.js.map