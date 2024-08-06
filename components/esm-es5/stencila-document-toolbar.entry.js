import{r as registerInstance,f as createEvent,h,e as Host}from"./index-2305c23c.js";import{i as isPending}from"./codeUtils-6d110640.js";var defaultDocumentToolbarCss=":host,stencila-document-toolbar{--background:var(--color-neutral-100);display:block}:host([position=fixed]),stencila-document-toolbar[position=fixed]{left:0;max-width:none!important;position:fixed;top:0;width:100%;z-index:30}:host([position=fixed])+*,stencila-document-toolbar[position=fixed]+*{margin-top:3rem}:host .hidden-sm,stencila-document-toolbar .hidden-sm{display:none}@media (min-width:640px){:host .hidden-sm,stencila-document-toolbar .hidden-sm{display:inline}}:host .documentStatus,stencila-document-toolbar .documentStatus{color:#4a4a4a;color:var(--color-key,#4a4a4a);font-size:.875rem;line-height:1.25rem;line-height:1}:host .documentStatus.success,stencila-document-toolbar .documentStatus.success{color:#1b5430;color:var(--color-success-700,#1b5430)}:host .documentStatus.danger,stencila-document-toolbar .documentStatus.danger{color:#cf445e;color:var(--color-danger-500,#cf445e)}:host .documentStatus stencila-icon,stencila-document-toolbar .documentStatus stencila-icon{margin-right:.25rem}:host .documentStatus stencila-tooltip,stencila-document-toolbar .documentStatus stencila-tooltip{cursor:help}:host .documentStatus span,stencila-document-toolbar .documentStatus span{vertical-align:middle}";var materialDocumentToolbarCss=":host,stencila-document-toolbar{--background:var(--color-neutral-100);display:block}:host([position=fixed]),stencila-document-toolbar[position=fixed]{left:0;max-width:none!important;position:fixed;top:0;width:100%;z-index:30}:host([position=fixed])+*,stencila-document-toolbar[position=fixed]+*{margin-top:3rem}:host .hidden-sm,stencila-document-toolbar .hidden-sm{display:none}@media (min-width:640px){:host .hidden-sm,stencila-document-toolbar .hidden-sm{display:inline}}:host .documentStatus,stencila-document-toolbar .documentStatus{color:#4a4a4a;color:var(--color-key,#4a4a4a);font-size:.875rem;line-height:1.25rem;line-height:1}:host .documentStatus.success,stencila-document-toolbar .documentStatus.success{color:#1b5430;color:var(--color-success-700,#1b5430)}:host .documentStatus.danger,stencila-document-toolbar .documentStatus.danger{color:#cf445e;color:var(--color-danger-500,#cf445e)}:host .documentStatus stencila-icon,stencila-document-toolbar .documentStatus stencila-icon{margin-right:.25rem}:host .documentStatus stencila-tooltip,stencila-document-toolbar .documentStatus stencila-tooltip{cursor:help}:host .documentStatus span,stencila-document-toolbar .documentStatus span{vertical-align:middle}";var StencilaDocumentToolbar=function(){function e(e){var t=this;registerInstance(this,e);this.codeExecuteEvent=createEvent(this,"stencila-code-execute",7);this.kernelRestart=createEvent(this,"stencila-kernel-restart",7);this.codeExecuteCancelEvent=createEvent(this,"stencila-code-execute-cancel",7);var o,s;this.position="fixed";this.isExecutable=Object.keys((s=(o=window.stencilaWebClient)===null||o===void 0?void 0:o.executableLanguages)!==null&&s!==void 0?s:{}).length>0;this.shiftIsPressed=false;this.altIsPressed=false;this.onKeyPress=function(e){t.shiftIsPressed=e.shiftKey;t.altIsPressed=e.altKey};this.addKeyListeners=function(){window.addEventListener("keydown",t.onKeyPress);window.addEventListener("keyup",t.onKeyPress)};this.removeKeyListeners=function(){window.removeEventListener("keydown",t.onKeyPress);window.removeEventListener("keyup",t.onKeyPress);t.shiftIsPressed=false;t.altIsPressed=false};this.runDocument=function(e){if(isPending(t.executeStatus)){t.codeExecuteCancelEvent.emit({nodeId:null,scope:"All"})}else{if(t.altIsPressed){t.kernelRestart.emit()}else{t.codeExecuteEvent.emit({nodeId:null,ordering:e.shiftKey?"Appearance":"Topological"})}}}}e.prototype.onDiscoverExecutableLanguages=function(e){var t=e.detail;this.isExecutable=Object.keys(t.languages).length>0};e.prototype.render=function(){return h(Host,{position:this.position},h("stencila-toolbar",null,h("span",{slot:"start"},h("stencila-button",{onKeyDown:this.onKeyPress,color:"stock",icon:this.altIsPressed?"restart":isPending(this.executeStatus)?"stop":"play",size:"small",onClick:this.runDocument,disabled:!this.isExecutable,dataEl:"Toolbar/Run Document",onMouseEnter:this.addKeyListeners,onMouseLeave:this.removeKeyListeners,tooltip:this.altIsPressed?undefined:this.shiftIsPressed?"Run in sequentially, in order of appearance":"Run in topological order"},this.altIsPressed?"Restart kernels":isPending(this.executeStatus)?"Cancel all":"Run all")),this.sourceUrl!==undefined&&h("span",{slot:"end"},h("stencila-button",{color:"stock",href:this.sourceUrl,target:"_blank",rel:"nofollow noopener",icon:"external-link",size:"small",dataEl:"Toolbar/Project Source"},"Source"))))};return e}();StencilaDocumentToolbar.style={default:defaultDocumentToolbarCss,material:materialDocumentToolbarCss};export{StencilaDocumentToolbar as stencila_document_toolbar};
//# sourceMappingURL=stencila-document-toolbar.entry.js.map