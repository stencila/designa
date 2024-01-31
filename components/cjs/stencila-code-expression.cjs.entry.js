'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c157949f.js');
const schema = require('./schema-3e1825a3.js');
const codeExecuteStatus = require('./codeExecuteStatus-66a7ce5a.js');
const codeUtils = require('./codeUtils-9e5f6d23.js');
const languageUtils = require('./languageUtils-85e2591f.js');
const languageSelect = require('./languageSelect-0197201f.js');

const defaultCodeExpressionCss = ".sc-stencila-code-expression-default-h,stencila-code-expression.sc-stencila-code-expression-default{--background:var(--color-neutral-50,#edf2f7);--background-editor:var(--color-stock,#fff);--background-output:var(--color-stock,#fff);--border:var(--color-neutral-100,#e2e8f0);-ms-flex-align:center;align-items:center;background-color:var(--background);border-color:var(--border);border-radius:.25rem;border-style:solid;border-width:1px;display:-ms-inline-flexbox;display:inline-flex;font-size:.875rem;line-height:1.25rem;line-height:1;padding:0;position:relative;vertical-align:text-bottom}.sc-stencila-code-expression-default-h stencila-tooltip.sc-stencila-code-expression-default,stencila-code-expression.sc-stencila-code-expression-default stencila-tooltip.sc-stencila-code-expression-default{-ms-flex-align:stretch;align-items:stretch;display:-ms-inline-flexbox;display:inline-flex;line-height:1;overflow:hidden;padding:0;vertical-align:bottom}.sc-stencila-code-expression-default-h .actions.sc-stencila-code-expression-default,stencila-code-expression.sc-stencila-code-expression-default .actions.sc-stencila-code-expression-default{border-bottom-left-radius:.25rem;border-top-left-radius:.25rem;display:-ms-inline-flexbox;display:inline-flex;-ms-flex:0 1 auto;flex:0 1 auto;position:relative;white-space:nowrap}.sc-stencila-code-expression-default-h .actions.sc-stencila-code-expression-default stencila-button.sc-stencila-code-expression-default,stencila-code-expression.sc-stencila-code-expression-default .actions.sc-stencila-code-expression-default stencila-button.sc-stencila-code-expression-default{-ms-flex-align:stretch;align-items:stretch;-ms-flex-item-align:start;align-self:flex-start;cursor:default;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-negative:0;flex-shrink:0;overflow:hidden;-webkit-transition-duration:.15s;transition-duration:.15s;-webkit-transition-property:color,background-color,border-color,fill,stroke,opacity,-webkit-text-decoration-color,-webkit-box-shadow,-webkit-transform,-webkit-filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,fill,stroke,opacity,-webkit-text-decoration-color,-webkit-box-shadow,-webkit-transform,-webkit-filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-text-decoration-color,-webkit-box-shadow,-webkit-transform,-webkit-filter,-webkit-backdrop-filter;-webkit-transition-property:padding,width,max-width;transition-property:padding,width,max-width;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-timing-function:cubic-bezier(0,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1)}.sc-stencila-code-expression-default-h .actions.sc-stencila-code-expression-default .secondaryAction.sc-stencila-code-expression-default,stencila-code-expression.sc-stencila-code-expression-default .actions.sc-stencila-code-expression-default .secondaryAction.sc-stencila-code-expression-default{cursor:default;display:inline-block;overflow:hidden;-webkit-transition-duration:.15s;transition-duration:.15s;-webkit-transition-property:color,background-color,border-color,fill,stroke,opacity,-webkit-text-decoration-color,-webkit-box-shadow,-webkit-transform,-webkit-filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,fill,stroke,opacity,-webkit-text-decoration-color,-webkit-box-shadow,-webkit-transform,-webkit-filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-text-decoration-color,-webkit-box-shadow,-webkit-transform,-webkit-filter,-webkit-backdrop-filter;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-timing-function:cubic-bezier(0,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1);width:0}.hover.sc-stencila-code-expression-default-h .actions.sc-stencila-code-expression-default .secondaryAction.sc-stencila-code-expression-default,.isCodeVisible.sc-stencila-code-expression-default-h .actions.sc-stencila-code-expression-default .secondaryAction.sc-stencila-code-expression-default,.sc-stencila-code-expression-default-h:focus .actions.sc-stencila-code-expression-default .secondaryAction.sc-stencila-code-expression-default,.sc-stencila-code-expression-default-h:focus-within .actions.sc-stencila-code-expression-default .secondaryAction.sc-stencila-code-expression-default,.sc-stencila-code-expression-default-h:hover .actions.sc-stencila-code-expression-default .secondaryAction.sc-stencila-code-expression-default,stencila-code-expression.hover.sc-stencila-code-expression-default .actions.sc-stencila-code-expression-default .secondaryAction.sc-stencila-code-expression-default,stencila-code-expression.isCodeVisible.sc-stencila-code-expression-default .actions.sc-stencila-code-expression-default .secondaryAction.sc-stencila-code-expression-default,stencila-code-expression.sc-stencila-code-expression-default:focus .actions.sc-stencila-code-expression-default .secondaryAction.sc-stencila-code-expression-default,stencila-code-expression.sc-stencila-code-expression-default:focus-within .actions.sc-stencila-code-expression-default .secondaryAction.sc-stencila-code-expression-default,stencila-code-expression.sc-stencila-code-expression-default:hover .actions.sc-stencila-code-expression-default .secondaryAction.sc-stencila-code-expression-default{display:-ms-inline-flexbox;display:inline-flex;max-width:100%;width:1.25rem}.sc-stencila-code-expression-default-h .executeStatus.sc-stencila-code-expression-default,stencila-code-expression.sc-stencila-code-expression-default .executeStatus.sc-stencila-code-expression-default{--height:0.875rem;--width:0.875rem;cursor:pointer;padding:.25rem}.sc-stencila-code-expression-default-h .executeStatus.scheduled.sc-stencila-code-expression-default,stencila-code-expression.sc-stencila-code-expression-default .executeStatus.scheduled.sc-stencila-code-expression-default{cursor:wait}.sc-stencila-code-expression-default-h .text.sc-stencila-code-expression-default,stencila-code-expression.sc-stencila-code-expression-default .text.sc-stencila-code-expression-default{background-color:var(--background-editor);border-color:var(--border);color:#4a4a4a;color:var(--color-key,#4a4a4a);display:inline-block;font-family:monospace;font-family:var(--font-family-mono,monospace);font-size:.875rem;line-height:1.25rem;line-height:1;min-width:0;overflow:hidden;padding:0;-webkit-transition-duration:.15s;transition-duration:.15s;-webkit-transition-property:width;transition-property:width;-webkit-transition-timing-function:cubic-bezier(0,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1);white-space:nowrap;width:0}.isCodeVisible.sc-stencila-code-expression-default-h .text.sc-stencila-code-expression-default,stencila-code-expression.isCodeVisible.sc-stencila-code-expression-default .text.sc-stencila-code-expression-default{border-radius:.25rem;border-width:1px;display:inline-block;margin-right:.25rem;min-width:1em;padding:.25rem .5rem;white-space:pre-line;width:auto}.sc-stencila-code-expression-default-h .sc-stencila-code-expression-default-s>[slot=errors],.sc-stencila-code-expression-default-h [slot=errors].sc-stencila-code-expression-default,stencila-code-expression.sc-stencila-code-expression-default-s>[slot=errors],stencila-code-expression .sc-stencila-code-expression-default-s>[slot=errors],stencila-code-expression.sc-stencila-code-expression-default [slot=errors].sc-stencila-code-expression-default{display:none}.sc-stencila-code-expression-default-h .sc-stencila-code-expression-default-s>[slot=errors] stencila-code-error,.sc-stencila-code-expression-default-h [slot=errors].sc-stencila-code-expression-default stencila-code-error.sc-stencila-code-expression-default,stencila-code-expression.sc-stencila-code-expression-default-s>[slot=errors] stencila-code-error,stencila-code-expression .sc-stencila-code-expression-default-s>[slot=errors] stencila-code-error,stencila-code-expression.sc-stencila-code-expression-default [slot=errors].sc-stencila-code-expression-default stencila-code-error.sc-stencila-code-expression-default{background:none;border-style:none;font-family:monospace;font-family:var(--font-family-mono,monospace);font-size:.875rem;line-height:1.25rem;line-height:1.5;padding:0}.sc-stencila-code-expression-default-h .sc-stencila-code-expression-default-s>[slot=errors] stencila-code-error stencila-details,.sc-stencila-code-expression-default-h .sc-stencila-code-expression-default-s>[slot=errors] stencila-code-error stencila-icon,.sc-stencila-code-expression-default-h [slot=errors].sc-stencila-code-expression-default stencila-code-error.sc-stencila-code-expression-default stencila-details.sc-stencila-code-expression-default,.sc-stencila-code-expression-default-h [slot=errors].sc-stencila-code-expression-default stencila-code-error.sc-stencila-code-expression-default stencila-icon.sc-stencila-code-expression-default,stencila-code-expression.sc-stencila-code-expression-default-s>[slot=errors] stencila-code-error stencila-details,stencila-code-expression .sc-stencila-code-expression-default-s>[slot=errors] stencila-code-error stencila-details,stencila-code-expression.sc-stencila-code-expression-default-s>[slot=errors] stencila-code-error stencila-icon,stencila-code-expression .sc-stencila-code-expression-default-s>[slot=errors] stencila-code-error stencila-icon,stencila-code-expression.sc-stencila-code-expression-default [slot=errors].sc-stencila-code-expression-default stencila-code-error.sc-stencila-code-expression-default stencila-details.sc-stencila-code-expression-default,stencila-code-expression.sc-stencila-code-expression-default [slot=errors].sc-stencila-code-expression-default stencila-code-error.sc-stencila-code-expression-default stencila-icon.sc-stencila-code-expression-default{display:none}.sc-stencila-code-expression-default-h.isCodeVisible .sc-stencila-code-expression-default-s>[slot=errors],.isCodeVisible.sc-stencila-code-expression-default-h [slot=errors].sc-stencila-code-expression-default,stencila-code-expression.isCodeVisible.sc-stencila-code-expression-default-s>[slot=errors],stencila-code-expression.isCodeVisible .sc-stencila-code-expression-default-s>[slot=errors],stencila-code-expression.isCodeVisible.sc-stencila-code-expression-default [slot=errors].sc-stencila-code-expression-default{display:inline-block}.sc-stencila-code-expression-default-h .divider.sc-stencila-code-expression-default,stencila-code-expression.sc-stencila-code-expression-default .divider.sc-stencila-code-expression-default{fill:var(--background);-ms-flex-item-align:center;align-self:center;background-color:var(--background-output);display:inline-block;display:none;width:.5rem}.isCodeVisible.sc-stencila-code-expression-default-h .divider.sc-stencila-code-expression-default,stencila-code-expression.isCodeVisible.sc-stencila-code-expression-default .divider.sc-stencila-code-expression-default{display:inline-block}.sc-stencila-code-expression-default-h .sc-stencila-code-expression-default-s>[slot=output],.sc-stencila-code-expression-default-h [slot=output].sc-stencila-code-expression-default,stencila-code-expression.sc-stencila-code-expression-default-s>[slot=output],stencila-code-expression .sc-stencila-code-expression-default-s>[slot=output],stencila-code-expression.sc-stencila-code-expression-default [slot=output].sc-stencila-code-expression-default{background-color:#fff;background-color:var(--color-stock,#fff);background-color:var(--background-output);border-style:none;color:#4a4a4a;color:var(--color-key,#4a4a4a);display:inline-block;font-size:1rem;line-height:1.5rem;line-height:1.5;margin:0;padding:0 .25rem 0 .5rem;-webkit-transition:padding .12s ease-out;transition:padding .12s ease-out;white-space:normal}.sc-stencila-code-expression-default-h .sc-stencila-code-expression-default-s>[slot=output]:empty,.sc-stencila-code-expression-default-h [slot=output].sc-stencila-code-expression-default:empty,stencila-code-expression.sc-stencila-code-expression-default-s>[slot=output]:empty,stencila-code-expression .sc-stencila-code-expression-default-s>[slot=output]:empty,stencila-code-expression.sc-stencila-code-expression-default [slot=output].sc-stencila-code-expression-default:empty{display:none}.sc-stencila-code-expression-default-h .sc-stencila-code-expression-default-s>[slot=output] *,.sc-stencila-code-expression-default-h [slot=output].sc-stencila-code-expression-default *.sc-stencila-code-expression-default,stencila-code-expression.sc-stencila-code-expression-default-s>[slot=output] *,stencila-code-expression .sc-stencila-code-expression-default-s>[slot=output] *,stencila-code-expression.sc-stencila-code-expression-default [slot=output].sc-stencila-code-expression-default *.sc-stencila-code-expression-default{background-color:#fff;background-color:var(--color-stock,#fff);border-style:none;color:#4a4a4a;color:var(--color-key,#4a4a4a);display:inline;font-size:1rem;line-height:1.5rem;line-height:1.5;margin:0;padding:0;white-space:normal}";

const materialCodeExpressionCss = ".sc-stencila-code-expression-material-h,stencila-code-expression.sc-stencila-code-expression-material{--background:var(--color-neutral-50,#edf2f7);--background-editor:var(--color-stock,#fff);--background-output:var(--color-stock,#fff);--border:var(--color-neutral-100,#e2e8f0);-ms-flex-align:center;align-items:center;background-color:var(--background);border-color:var(--border);border-radius:.25rem;border-style:solid;border-width:1px;display:-ms-inline-flexbox;display:inline-flex;font-size:.875rem;line-height:1.25rem;line-height:1;padding:0;position:relative;vertical-align:text-bottom}.sc-stencila-code-expression-material-h stencila-tooltip.sc-stencila-code-expression-material,stencila-code-expression.sc-stencila-code-expression-material stencila-tooltip.sc-stencila-code-expression-material{-ms-flex-align:stretch;align-items:stretch;display:-ms-inline-flexbox;display:inline-flex;line-height:1;overflow:hidden;padding:0;vertical-align:bottom}.sc-stencila-code-expression-material-h .actions.sc-stencila-code-expression-material,stencila-code-expression.sc-stencila-code-expression-material .actions.sc-stencila-code-expression-material{border-bottom-left-radius:.25rem;border-top-left-radius:.25rem;display:-ms-inline-flexbox;display:inline-flex;-ms-flex:0 1 auto;flex:0 1 auto;position:relative;white-space:nowrap}.sc-stencila-code-expression-material-h .actions.sc-stencila-code-expression-material stencila-button.sc-stencila-code-expression-material,stencila-code-expression.sc-stencila-code-expression-material .actions.sc-stencila-code-expression-material stencila-button.sc-stencila-code-expression-material{-ms-flex-align:stretch;align-items:stretch;-ms-flex-item-align:start;align-self:flex-start;cursor:default;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-negative:0;flex-shrink:0;overflow:hidden;-webkit-transition-duration:.15s;transition-duration:.15s;-webkit-transition-property:color,background-color,border-color,fill,stroke,opacity,-webkit-text-decoration-color,-webkit-box-shadow,-webkit-transform,-webkit-filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,fill,stroke,opacity,-webkit-text-decoration-color,-webkit-box-shadow,-webkit-transform,-webkit-filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-text-decoration-color,-webkit-box-shadow,-webkit-transform,-webkit-filter,-webkit-backdrop-filter;-webkit-transition-property:padding,width,max-width;transition-property:padding,width,max-width;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-timing-function:cubic-bezier(0,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1)}.sc-stencila-code-expression-material-h .actions.sc-stencila-code-expression-material .secondaryAction.sc-stencila-code-expression-material,stencila-code-expression.sc-stencila-code-expression-material .actions.sc-stencila-code-expression-material .secondaryAction.sc-stencila-code-expression-material{cursor:default;display:inline-block;overflow:hidden;-webkit-transition-duration:.15s;transition-duration:.15s;-webkit-transition-property:color,background-color,border-color,fill,stroke,opacity,-webkit-text-decoration-color,-webkit-box-shadow,-webkit-transform,-webkit-filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,fill,stroke,opacity,-webkit-text-decoration-color,-webkit-box-shadow,-webkit-transform,-webkit-filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-text-decoration-color,-webkit-box-shadow,-webkit-transform,-webkit-filter,-webkit-backdrop-filter;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-timing-function:cubic-bezier(0,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1);width:0}.hover.sc-stencila-code-expression-material-h .actions.sc-stencila-code-expression-material .secondaryAction.sc-stencila-code-expression-material,.isCodeVisible.sc-stencila-code-expression-material-h .actions.sc-stencila-code-expression-material .secondaryAction.sc-stencila-code-expression-material,.sc-stencila-code-expression-material-h:focus .actions.sc-stencila-code-expression-material .secondaryAction.sc-stencila-code-expression-material,.sc-stencila-code-expression-material-h:focus-within .actions.sc-stencila-code-expression-material .secondaryAction.sc-stencila-code-expression-material,.sc-stencila-code-expression-material-h:hover .actions.sc-stencila-code-expression-material .secondaryAction.sc-stencila-code-expression-material,stencila-code-expression.hover.sc-stencila-code-expression-material .actions.sc-stencila-code-expression-material .secondaryAction.sc-stencila-code-expression-material,stencila-code-expression.isCodeVisible.sc-stencila-code-expression-material .actions.sc-stencila-code-expression-material .secondaryAction.sc-stencila-code-expression-material,stencila-code-expression.sc-stencila-code-expression-material:focus .actions.sc-stencila-code-expression-material .secondaryAction.sc-stencila-code-expression-material,stencila-code-expression.sc-stencila-code-expression-material:focus-within .actions.sc-stencila-code-expression-material .secondaryAction.sc-stencila-code-expression-material,stencila-code-expression.sc-stencila-code-expression-material:hover .actions.sc-stencila-code-expression-material .secondaryAction.sc-stencila-code-expression-material{display:-ms-inline-flexbox;display:inline-flex;max-width:100%;width:1.25rem}.sc-stencila-code-expression-material-h .executeStatus.sc-stencila-code-expression-material,stencila-code-expression.sc-stencila-code-expression-material .executeStatus.sc-stencila-code-expression-material{--height:0.875rem;--width:0.875rem;cursor:pointer;padding:.25rem}.sc-stencila-code-expression-material-h .executeStatus.scheduled.sc-stencila-code-expression-material,stencila-code-expression.sc-stencila-code-expression-material .executeStatus.scheduled.sc-stencila-code-expression-material{cursor:wait}.sc-stencila-code-expression-material-h .text.sc-stencila-code-expression-material,stencila-code-expression.sc-stencila-code-expression-material .text.sc-stencila-code-expression-material{background-color:var(--background-editor);border-color:var(--border);color:#4a4a4a;color:var(--color-key,#4a4a4a);display:inline-block;font-family:monospace;font-family:var(--font-family-mono,monospace);font-size:.875rem;line-height:1.25rem;line-height:1;min-width:0;overflow:hidden;padding:0;-webkit-transition-duration:.15s;transition-duration:.15s;-webkit-transition-property:width;transition-property:width;-webkit-transition-timing-function:cubic-bezier(0,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1);white-space:nowrap;width:0}.isCodeVisible.sc-stencila-code-expression-material-h .text.sc-stencila-code-expression-material,stencila-code-expression.isCodeVisible.sc-stencila-code-expression-material .text.sc-stencila-code-expression-material{border-radius:.25rem;border-width:1px;display:inline-block;margin-right:.25rem;min-width:1em;padding:.25rem .5rem;white-space:pre-line;width:auto}.sc-stencila-code-expression-material-h .sc-stencila-code-expression-material-s>[slot=errors],.sc-stencila-code-expression-material-h [slot=errors].sc-stencila-code-expression-material,stencila-code-expression.sc-stencila-code-expression-material-s>[slot=errors],stencila-code-expression .sc-stencila-code-expression-material-s>[slot=errors],stencila-code-expression.sc-stencila-code-expression-material [slot=errors].sc-stencila-code-expression-material{display:none}.sc-stencila-code-expression-material-h .sc-stencila-code-expression-material-s>[slot=errors] stencila-code-error,.sc-stencila-code-expression-material-h [slot=errors].sc-stencila-code-expression-material stencila-code-error.sc-stencila-code-expression-material,stencila-code-expression.sc-stencila-code-expression-material-s>[slot=errors] stencila-code-error,stencila-code-expression .sc-stencila-code-expression-material-s>[slot=errors] stencila-code-error,stencila-code-expression.sc-stencila-code-expression-material [slot=errors].sc-stencila-code-expression-material stencila-code-error.sc-stencila-code-expression-material{background:none;border-style:none;font-family:monospace;font-family:var(--font-family-mono,monospace);font-size:.875rem;line-height:1.25rem;line-height:1.5;padding:0}.sc-stencila-code-expression-material-h .sc-stencila-code-expression-material-s>[slot=errors] stencila-code-error stencila-details,.sc-stencila-code-expression-material-h .sc-stencila-code-expression-material-s>[slot=errors] stencila-code-error stencila-icon,.sc-stencila-code-expression-material-h [slot=errors].sc-stencila-code-expression-material stencila-code-error.sc-stencila-code-expression-material stencila-details.sc-stencila-code-expression-material,.sc-stencila-code-expression-material-h [slot=errors].sc-stencila-code-expression-material stencila-code-error.sc-stencila-code-expression-material stencila-icon.sc-stencila-code-expression-material,stencila-code-expression.sc-stencila-code-expression-material-s>[slot=errors] stencila-code-error stencila-details,stencila-code-expression .sc-stencila-code-expression-material-s>[slot=errors] stencila-code-error stencila-details,stencila-code-expression.sc-stencila-code-expression-material-s>[slot=errors] stencila-code-error stencila-icon,stencila-code-expression .sc-stencila-code-expression-material-s>[slot=errors] stencila-code-error stencila-icon,stencila-code-expression.sc-stencila-code-expression-material [slot=errors].sc-stencila-code-expression-material stencila-code-error.sc-stencila-code-expression-material stencila-details.sc-stencila-code-expression-material,stencila-code-expression.sc-stencila-code-expression-material [slot=errors].sc-stencila-code-expression-material stencila-code-error.sc-stencila-code-expression-material stencila-icon.sc-stencila-code-expression-material{display:none}.sc-stencila-code-expression-material-h.isCodeVisible .sc-stencila-code-expression-material-s>[slot=errors],.isCodeVisible.sc-stencila-code-expression-material-h [slot=errors].sc-stencila-code-expression-material,stencila-code-expression.isCodeVisible.sc-stencila-code-expression-material-s>[slot=errors],stencila-code-expression.isCodeVisible .sc-stencila-code-expression-material-s>[slot=errors],stencila-code-expression.isCodeVisible.sc-stencila-code-expression-material [slot=errors].sc-stencila-code-expression-material{display:inline-block}.sc-stencila-code-expression-material-h .divider.sc-stencila-code-expression-material,stencila-code-expression.sc-stencila-code-expression-material .divider.sc-stencila-code-expression-material{fill:var(--background);-ms-flex-item-align:center;align-self:center;background-color:var(--background-output);display:inline-block;display:none;width:.5rem}.isCodeVisible.sc-stencila-code-expression-material-h .divider.sc-stencila-code-expression-material,stencila-code-expression.isCodeVisible.sc-stencila-code-expression-material .divider.sc-stencila-code-expression-material{display:inline-block}.sc-stencila-code-expression-material-h .sc-stencila-code-expression-material-s>[slot=output],.sc-stencila-code-expression-material-h [slot=output].sc-stencila-code-expression-material,stencila-code-expression.sc-stencila-code-expression-material-s>[slot=output],stencila-code-expression .sc-stencila-code-expression-material-s>[slot=output],stencila-code-expression.sc-stencila-code-expression-material [slot=output].sc-stencila-code-expression-material{background-color:#fff;background-color:var(--color-stock,#fff);background-color:var(--background-output);border-style:none;color:#4a4a4a;color:var(--color-key,#4a4a4a);display:inline-block;font-size:1rem;line-height:1.5rem;line-height:1.5;margin:0;padding:0 .25rem 0 .5rem;-webkit-transition:padding .12s ease-out;transition:padding .12s ease-out;white-space:normal}.sc-stencila-code-expression-material-h .sc-stencila-code-expression-material-s>[slot=output]:empty,.sc-stencila-code-expression-material-h [slot=output].sc-stencila-code-expression-material:empty,stencila-code-expression.sc-stencila-code-expression-material-s>[slot=output]:empty,stencila-code-expression .sc-stencila-code-expression-material-s>[slot=output]:empty,stencila-code-expression.sc-stencila-code-expression-material [slot=output].sc-stencila-code-expression-material:empty{display:none}.sc-stencila-code-expression-material-h .sc-stencila-code-expression-material-s>[slot=output] *,.sc-stencila-code-expression-material-h [slot=output].sc-stencila-code-expression-material *.sc-stencila-code-expression-material,stencila-code-expression.sc-stencila-code-expression-material-s>[slot=output] *,stencila-code-expression .sc-stencila-code-expression-material-s>[slot=output] *,stencila-code-expression.sc-stencila-code-expression-material [slot=output].sc-stencila-code-expression-material *.sc-stencila-code-expression-material{background-color:#fff;background-color:var(--color-stock,#fff);border-style:none;color:#4a4a4a;color:var(--color-key,#4a4a4a);display:inline;font-size:1rem;line-height:1.5rem;line-height:1.5;margin:0;padding:0;white-space:normal}";

const slots = {
  text: 'text',
  output: 'output',
  errors: 'errors',
};
const CodeExpressionComponent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.languageChange = index.createEvent(this, "stencila-language-change", 7);
    this.allCodeVisibilityChange = index.createEvent(this, "stencila-code-visibility-change", 7);
    this.contentChange = index.createEvent(this, "stencila-content-change", 7);
    this.codeExecuteEvent = index.createEvent(this, "stencila-code-execute", 7);
    this.codeExecuteCancelEvent = index.createEvent(this, "stencila-code-execute-cancel", 7);
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
    this.languageCapabilities = languageUtils.fileFormatMap;
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
      this.languageChange.emit(languageUtils.lookupFormat(language));
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
      const activeLanguageFormat = languageUtils.lookupFormat(this.programmingLanguage).name;
      this.isExecutable =
        this.executeHandler !== undefined &&
          Object.values((_b = this.executableLanguages) !== null && _b !== void 0 ? _b : {}).some((format) => format.name === activeLanguageFormat);
    };
    this.onExecuteHandler = async (ordering = 'Topological') => {
      const node = await this.getContents();
      // If node is running, emit cancel event and terminate early
      if (codeUtils.isPending(this.executeStatus)) {
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
        index.h("span", { class: "actions" }, index.h("stencila-menu", { menuPosition: "bottom-start" }, index.h(codeExecuteStatus.CodeExecuteStatus, { executeStatus: this.executeStatus, executeRequired: this.executeRequired, slot: "toggle" }), index.h("slot", { name: "code-dependencies" }), index.h("slot", { name: "code-dependents" })), index.h("stencila-button", { "aria-label": "Run Code", class: "run", onClick: (e) => this.executeRef(e.shiftKey ? 'Single' : 'Topological'), color: "key", icon: codeUtils.isPending(this.executeStatus) ? 'stop' : 'play', iconOnly: true, minimal: true, size: "xsmall", tooltip: codeUtils.isPending(this.executeStatus)
            ? 'Cancel'
            : this.shiftIsPressed
              ? 'Run only this code'
              : 'Run', onMouseEnter: this.addKeyListeners, onMouseLeave: this.removeKeyListeners }), index.h("stencila-button", { "aria-label": `${this.isCodeVisible ? 'Hide' : 'Show'} Code`, class: "secondaryAction sourceToggle", onClick: this.toggleCodeVisibility, color: "key", icon: this.isCodeVisible ? 'eye-off' : 'eye', iconOnly: true, minimal: true, size: "xsmall", tooltip: `${this.isCodeVisible ? 'Hide' : 'Show'} Code\nShift click to set for all code` }), index.h("span", { class: "secondaryAction" }, index.h(languageSelect.LanguagePickerInline, { activeLanguage: (_a = this.programmingLanguage) !== null && _a !== void 0 ? _a : '', languageCapabilities: this.languageCapabilities, executableLanguages: this.executableLanguages, onSetLanguage: this.onSelectLanguage, disabled: this.readOnly })), index.h("span", { class: "text", contentEditable: !this.readOnly, spellcheck: "false", onBlur: this.removeHoverState, onInput: this.contentChangeHandler, tabIndex: this.isCodeVisible ? 0 : -1, role: "textbox" }, index.h("slot", { name: slots.text })), index.h("slot", { name: slots.errors })),
        index.h("svg", { class: "divider", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 8 24", preserveAspectRatio: "xMinYMin" }, index.h("path", { d: "M8 12L1 0H0v24h1l7-12z" })),
        index.h("slot", { name: slots.output }),
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
    return Promise.resolve(schema.c({
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
    return (index.h(index.Host, { class: {
        hover: this.hover,
        isCodeVisible: this.isCodeVisible,
      }, onMouseEnter: this.addHoverState, onMouseOut: this.onMouseOutHandler, onKeyDown: this.handleKeyDown }, this.generateContent()));
  }
  get el() { return index.getElement(this); }
};
CodeExpressionComponent.style = {
  default: defaultCodeExpressionCss,
  material: materialCodeExpressionCss
};

exports.stencila_code_expression = CodeExpressionComponent;

//# sourceMappingURL=stencila-code-expression.cjs.entry.js.map