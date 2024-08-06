'use strict';

const index = require('./index-c157949f.js');
const codeUtils = require('./codeUtils-9e5f6d23.js');

const CodeExecuteStatus = (props) => {
  var _a;
  if (props.nodeKind === 'Parameter') {
    return (index.h("stencila-icon", { icon: "asterisk", color: "neutral-500, #6e7591", class: "executeStatus" }));
  }
  else if (props.nodeKind === 'File') {
    return (index.h("stencila-icon", { icon: "file", color: "neutral-500, #6e7591", class: "executeStatus" }));
  }
  const status = codeUtils.executionIconByStatus(props.executeStatus, props.executeRequired);
  return (index.h("stencila-tooltip", { text: status.title, slot: props.slot, position: "right-end" },
    index.h("stencila-icon", { icon: status.icon, color: status.color, class: `executeStatus executeRequired-${props.executeRequired} ${(_a = props.executeStatus) === null || _a === void 0 ? void 0 : _a.toLowerCase()}` })));
};

exports.CodeExecuteStatus = CodeExecuteStatus;

//# sourceMappingURL=codeExecuteStatus-66a7ce5a.js.map