import { h } from './index-2305c23c.js';
import { e as executionIconByStatus } from './codeUtils-6d110640.js';

const CodeExecuteStatus = (props) => {
  var _a;
  if (props.nodeKind === 'Parameter') {
    return (h("stencila-icon", { icon: "asterisk", color: "neutral-500, #6e7591", class: "executeStatus" }));
  }
  else if (props.nodeKind === 'File') {
    return (h("stencila-icon", { icon: "file", color: "neutral-500, #6e7591", class: "executeStatus" }));
  }
  const status = executionIconByStatus(props.executeStatus, props.executeRequired);
  return (h("stencila-tooltip", { text: status.title, slot: props.slot, position: "right-end" },
    h("stencila-icon", { icon: status.icon, color: status.color, class: `executeStatus executeRequired-${props.executeRequired} ${(_a = props.executeStatus) === null || _a === void 0 ? void 0 : _a.toLowerCase()}` })));
};

export { CodeExecuteStatus as C };

//# sourceMappingURL=codeExecuteStatus-b83cc6dd.js.map