'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c157949f.js');
const slotSelectors = require('./slotSelectors-a6d0c34c.js');

const defaultNodeListCss = "*.sc-stencila-node-list-default,.sc-stencila-node-list-default:after,.sc-stencila-node-list-default:before{border:0 solid;-webkit-box-sizing:border-box;box-sizing:border-box}html.sc-stencila-node-list-default{font-size:16px}.hidden.sc-stencila-node-list-default{display:none}code.sc-stencila-node-list-default,code[class*=language-].sc-stencila-node-list-default,output.sc-stencila-node-list-default{font-family:monospace;font-family:var(--font-family-mono,monospace);font-size:75%}pre.sc-stencila-node-list-default{border:1px solid #cfd2e1;border-color:var(--color-neutral-100,#cfd2e1);border-radius:.25rem;margin:.5rem;overflow:auto;padding:.5rem}.sc-stencila-node-list-default-h,stencila-node-list.sc-stencila-node-list-default{display:block}.sc-stencila-node-list-default-h .hidden.sc-stencila-node-list-default+.sc-stencila-node-list-default:nth-child(2),.sc-stencila-node-list-default-h>.sc-stencila-node-list-default:first-child,stencila-node-list.sc-stencila-node-list-default .hidden.sc-stencila-node-list-default+.sc-stencila-node-list-default:nth-child(2),stencila-node-list.sc-stencila-node-list-default>.sc-stencila-node-list-default:first-child{border-top-width:0;margin-top:0;padding-top:0}.sc-stencila-node-list-default-h>.sc-stencila-node-list-default:last-child,stencila-node-list.sc-stencila-node-list-default>.sc-stencila-node-list-default:last-child{margin-bottom:0}.sc-stencila-node-list-default-h .hidden.sc-stencila-node-list-default,stencila-node-list.sc-stencila-node-list-default .hidden.sc-stencila-node-list-default{display:none}.sc-stencila-node-list-default-h .emptyContentMessage.sc-stencila-node-list-default,stencila-node-list.sc-stencila-node-list-default .emptyContentMessage.sc-stencila-node-list-default{color:#6e7591;color:var(--color-neutral-500,#6e7591);font-family:monospace;font-family:var(--font-family-mono,monospace);font-size:1rem;line-height:1.5rem}.sc-stencila-node-list-default-h stencila-code-error.sc-stencila-node-list-default,stencila-node-list.sc-stencila-node-list-default stencila-code-error.sc-stencila-node-list-default{border-width:0}.sc-stencila-node-list-default-h stencila-image-object.sc-stencila-node-list-default,stencila-node-list.sc-stencila-node-list-default stencila-image-object.sc-stencila-node-list-default{display:block;height:auto;max-width:100%}.sc-stencila-node-list-default-h .sc-stencila-node-list-default-s>*,stencila-node-list.sc-stencila-node-list-default-s>*,stencila-node-list .sc-stencila-node-list-default-s>*{margin:0;overflow:auto;padding:0}.sc-stencila-node-list-default-h .sc-stencila-node-list-default-s>*:first-child,stencila-node-list.sc-stencila-node-list-default-s>*:first-child,stencila-node-list .sc-stencila-node-list-default-s>*:first-child{margin-top:0}.sc-stencila-node-list-default-h .sc-stencila-node-list-default-s pre,stencila-node-list .sc-stencila-node-list-default-s pre{border-width:0;margin:0;padding:0}.sc-stencila-node-list-default-h .sc-stencila-node-list-default-s>*>:not(figcaption),stencila-node-list.sc-stencila-node-list-default-s>*>:not(figcaption),stencila-node-list .sc-stencila-node-list-default-s>*>:not(figcaption){margin-bottom:.75rem;margin-top:.75rem;padding-top:.75rem}.sc-stencila-node-list-default-h .sc-stencila-node-list-default-s>*>:not(figcaption):first-child,stencila-node-list.sc-stencila-node-list-default-s>*>:not(figcaption):first-child,stencila-node-list .sc-stencila-node-list-default-s>*>:not(figcaption):first-child{margin-top:0;padding-top:0}.sc-stencila-node-list-default-h .sc-stencila-node-list-default-s>*>:not(figcaption):last-child,stencila-node-list.sc-stencila-node-list-default-s>*>:not(figcaption):last-child,stencila-node-list .sc-stencila-node-list-default-s>*>:not(figcaption):last-child{margin-bottom:0}";

const materialNodeListCss = "*.sc-stencila-node-list-material,.sc-stencila-node-list-material:after,.sc-stencila-node-list-material:before{border:0 solid;-webkit-box-sizing:border-box;box-sizing:border-box}html.sc-stencila-node-list-material{font-size:16px}.hidden.sc-stencila-node-list-material{display:none}code.sc-stencila-node-list-material,code[class*=language-].sc-stencila-node-list-material,output.sc-stencila-node-list-material{font-family:monospace;font-family:var(--font-family-mono,monospace);font-size:75%}pre.sc-stencila-node-list-material{border:1px solid #cfd2e1;border-color:var(--color-neutral-100,#cfd2e1);border-radius:.25rem;margin:.5rem;overflow:auto;padding:.5rem}.sc-stencila-node-list-material-h,stencila-node-list.sc-stencila-node-list-material{display:block}.sc-stencila-node-list-material-h .hidden.sc-stencila-node-list-material+.sc-stencila-node-list-material:nth-child(2),.sc-stencila-node-list-material-h>.sc-stencila-node-list-material:first-child,stencila-node-list.sc-stencila-node-list-material .hidden.sc-stencila-node-list-material+.sc-stencila-node-list-material:nth-child(2),stencila-node-list.sc-stencila-node-list-material>.sc-stencila-node-list-material:first-child{border-top-width:0;margin-top:0;padding-top:0}.sc-stencila-node-list-material-h>.sc-stencila-node-list-material:last-child,stencila-node-list.sc-stencila-node-list-material>.sc-stencila-node-list-material:last-child{margin-bottom:0}.sc-stencila-node-list-material-h .hidden.sc-stencila-node-list-material,stencila-node-list.sc-stencila-node-list-material .hidden.sc-stencila-node-list-material{display:none}.sc-stencila-node-list-material-h .emptyContentMessage.sc-stencila-node-list-material,stencila-node-list.sc-stencila-node-list-material .emptyContentMessage.sc-stencila-node-list-material{color:#6e7591;color:var(--color-neutral-500,#6e7591);font-family:monospace;font-family:var(--font-family-mono,monospace);font-size:1rem;line-height:1.5rem}.sc-stencila-node-list-material-h stencila-code-error.sc-stencila-node-list-material,stencila-node-list.sc-stencila-node-list-material stencila-code-error.sc-stencila-node-list-material{border-width:0}.sc-stencila-node-list-material-h stencila-image-object.sc-stencila-node-list-material,stencila-node-list.sc-stencila-node-list-material stencila-image-object.sc-stencila-node-list-material{display:block;height:auto;max-width:100%}.sc-stencila-node-list-material-h .sc-stencila-node-list-material-s>*,stencila-node-list.sc-stencila-node-list-material-s>*,stencila-node-list .sc-stencila-node-list-material-s>*{margin:0;overflow:auto;padding:0}.sc-stencila-node-list-material-h .sc-stencila-node-list-material-s>*:first-child,stencila-node-list.sc-stencila-node-list-material-s>*:first-child,stencila-node-list .sc-stencila-node-list-material-s>*:first-child{margin-top:0}.sc-stencila-node-list-material-h .sc-stencila-node-list-material-s pre,stencila-node-list .sc-stencila-node-list-material-s pre{border-width:0;margin:0;padding:0}.sc-stencila-node-list-material-h .sc-stencila-node-list-material-s>*>:not(figcaption),stencila-node-list.sc-stencila-node-list-material-s>*>:not(figcaption),stencila-node-list .sc-stencila-node-list-material-s>*>:not(figcaption){margin-bottom:.75rem;margin-top:.75rem;padding-top:.75rem}.sc-stencila-node-list-material-h .sc-stencila-node-list-material-s>*>:not(figcaption):first-child,stencila-node-list.sc-stencila-node-list-material-s>*>:not(figcaption):first-child,stencila-node-list .sc-stencila-node-list-material-s>*>:not(figcaption):first-child{margin-top:0;padding-top:0}.sc-stencila-node-list-material-h .sc-stencila-node-list-material-s>*>:not(figcaption):last-child,stencila-node-list.sc-stencila-node-list-material-s>*>:not(figcaption):last-child,stencila-node-list .sc-stencila-node-list-material-s>*>:not(figcaption):last-child{margin-bottom:0}";

const OutputsList = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.emptyOutputMessage = 'No output to show';
    this.isEmpty = true;
    this.checkIfEmpty = () => {
      const slotted = slotSelectors.getSlotByName(this.el)(['default', 'outputs']);
      if (slotted.length === 0) {
        this.isEmpty = true;
      }
      else {
        this.isEmpty = slotted.every((el) => {
          var _a;
          const content = (_a = el.innerHTML) === null || _a === void 0 ? void 0 : _a.trim();
          return content === '' || content === this.emptyOutputMessage;
        });
      }
    };
    this.childObserver = new MutationObserver(this.checkIfEmpty);
  }
  componentWillLoad() {
    this.checkIfEmpty();
    this.childObserver.observe(this.el, {
      childList: true,
      subtree: true,
    });
  }
  disconnectedCallback() {
    var _a;
    (_a = this.childObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null), index.h("em", { class: { hidden: !this.isEmpty, emptyContentMessage: true } }, this.emptyOutputMessage)));
  }
  get el() { return index.getElement(this); }
};
OutputsList.style = {
  default: defaultNodeListCss,
  material: materialNodeListCss
};

exports.stencila_node_list = OutputsList;

//# sourceMappingURL=stencila-node-list.cjs.entry.js.map