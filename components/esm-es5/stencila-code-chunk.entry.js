var __awaiter=this&&this.__awaiter||function(e,c,t,n){function a(e){return e instanceof t?e:new t((function(c){c(e)}))}return new(t||(t=Promise))((function(t,i){function s(e){try{l(n.next(e))}catch(c){i(c)}}function o(e){try{l(n["throw"](e))}catch(c){i(c)}}function l(e){e.done?t(e.value):a(e.value).then(s,o)}l((n=n.apply(e,c||[])).next())}))};var __generator=this&&this.__generator||function(e,c){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(e){return function(c){return l([e,c])}}function l(s){if(n)throw new TypeError("Generator is already executing.");while(t)try{if(n=1,a&&(i=s[0]&2?a["return"]:s[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,s[1])).done)return i;if(a=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:t.label++;return{value:s[1],done:false};case 5:t.label++;a=s[1];s=[0];continue;case 7:s=t.ops.pop();t.trys.pop();continue;default:if(!(i=t.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){t=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){t.label=s[1];break}if(s[0]===6&&t.label<i[1]){t.label=i[1];i=s;break}if(i&&t.label<i[2]){t.label=i[2];t.ops.push(s);break}if(i[2])t.ops.pop();t.trys.pop();continue}s=c.call(e,t)}catch(o){s=[6,o];a=0}finally{n=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};import{r as registerInstance,f as createEvent,h,e as Host,c as getElement}from"./index-2305c23c.js";import{d}from"./schema-3c9b003e.js";import{C as CodeExecuteStatus}from"./codeExecuteStatus-b83cc6dd.js";import{i as isPending}from"./codeUtils-6d110640.js";import{f as fileFormatMap,a as lookupFormat}from"./languageUtils-2c49a4c4.js";var defaultCodeChunkCss="*.sc-stencila-code-chunk-default,.sc-stencila-code-chunk-default:after,.sc-stencila-code-chunk-default:before{border:0 solid;-webkit-box-sizing:border-box;box-sizing:border-box}html.sc-stencila-code-chunk-default{font-size:16px}.hidden.sc-stencila-code-chunk-default{display:none}code.sc-stencila-code-chunk-default,code[class*=language-].sc-stencila-code-chunk-default,output.sc-stencila-code-chunk-default{font-family:monospace;font-family:var(--font-family-mono,monospace);font-size:75%}pre.sc-stencila-code-chunk-default{border:1px solid #cfd2e1;border-color:var(--color-neutral-100,#cfd2e1);border-radius:.25rem;margin:.5rem;overflow:auto;padding:.5rem}.preReset.sc-stencila-code-chunk-default{border-width:0;margin:0;padding:0}.sc-stencila-code-chunk-default-h,stencila-code-chunk.sc-stencila-code-chunk-default{--background:var(--color-stock,#fff);--background-editor:var(--color-neutral-50,#edf2f7);--border:var(--color-neutral-100,#e2e8f0);border-color:var(--border);border-radius:.25rem;border-style:solid;border-width:1px;display:block;margin-bottom:1rem;margin-top:1rem;overflow:hidden;position:relative;width:100%}.sc-stencila-code-chunk-default-h>figure.sc-stencila-code-chunk-default,stencila-code-chunk.sc-stencila-code-chunk-default>figure.sc-stencila-code-chunk-default{margin:0;padding:0}.sc-stencila-code-chunk-default-h stencila-action-menu.sc-stencila-code-chunk-default,stencila-code-chunk.sc-stencila-code-chunk-default stencila-action-menu.sc-stencila-code-chunk-default{border-left-width:0;border-radius:0;border-right-width:0;display:block;padding:0;position:relative;width:100%}.sc-stencila-code-chunk-default-h stencila-action-menu.sc-stencila-code-chunk-default .executeStatus.sc-stencila-code-chunk-default,stencila-code-chunk.sc-stencila-code-chunk-default stencila-action-menu.sc-stencila-code-chunk-default .executeStatus.sc-stencila-code-chunk-default{--height:0.875rem;--width:0.875rem;cursor:pointer;padding:.25rem}.sc-stencila-code-chunk-default-h stencila-action-menu.sc-stencila-code-chunk-default .executeStatus.scheduled.sc-stencila-code-chunk-default,stencila-code-chunk.sc-stencila-code-chunk-default stencila-action-menu.sc-stencila-code-chunk-default .executeStatus.scheduled.sc-stencila-code-chunk-default{cursor:wait}.sc-stencila-code-chunk-default-h stencila-action-menu.sc-stencila-code-chunk-default .layoutToggle.sc-stencila-code-chunk-default,stencila-code-chunk.sc-stencila-code-chunk-default stencila-action-menu.sc-stencila-code-chunk-default .layoutToggle.sc-stencila-code-chunk-default{display:none}@media (min-width:1024px){.sc-stencila-code-chunk-default-h stencila-action-menu.sc-stencila-code-chunk-default .layoutToggle.sc-stencila-code-chunk-default,stencila-code-chunk.sc-stencila-code-chunk-default stencila-action-menu.sc-stencila-code-chunk-default .layoutToggle.sc-stencila-code-chunk-default{display:inline-block}}.sc-stencila-code-chunk-default-h stencila-editor.sc-stencila-code-chunk-default,stencila-code-chunk.sc-stencila-code-chunk-default stencila-editor.sc-stencila-code-chunk-default{--border-width:0;background-color:var(--background-editor);-ms-flex-positive:1;flex-grow:1}.sc-stencila-code-chunk-default-h .sc-stencila-code-chunk-default-s>[slot=outputs],.sc-stencila-code-chunk-default-h [slot=outputs].sc-stencila-code-chunk-default,stencila-code-chunk.sc-stencila-code-chunk-default-s>[slot=outputs],stencila-code-chunk .sc-stencila-code-chunk-default-s>[slot=outputs],stencila-code-chunk.sc-stencila-code-chunk-default [slot=outputs].sc-stencila-code-chunk-default{background-color:var(--background);margin:0;padding:.5rem}.sc-stencila-code-chunk-default-h .sc-stencila-code-chunk-default-s>[slot=outputs]:empty,.sc-stencila-code-chunk-default-h [slot=outputs].sc-stencila-code-chunk-default:empty,stencila-code-chunk.sc-stencila-code-chunk-default-s>[slot=outputs]:empty,stencila-code-chunk .sc-stencila-code-chunk-default-s>[slot=outputs]:empty,stencila-code-chunk.sc-stencila-code-chunk-default [slot=outputs].sc-stencila-code-chunk-default:empty{display:none}.editorContainer.sc-stencila-code-chunk-default{background:var(--background-editor);border-color:var(--border);border-radius:0;border-width:0 0 1px;display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-direction:column;flex-direction:column;height:intrinsic;margin:0;position:relative}.editorContainer.sc-stencila-code-chunk-default pre.sc-stencila-code-chunk-default,.editorContainer.sc-stencila-code-chunk-default pre[class*=language-].sc-stencila-code-chunk-default{background-color:transparent}.editorContainer.hidden.sc-stencila-code-chunk-default{display:none}@media (min-width:1024px){.sc-stencila-code-chunk-default-h:not(.isStacked)>figure.sc-stencila-code-chunk-default>div.sc-stencila-code-chunk-default,stencila-code-chunk.sc-stencila-code-chunk-default:not(.isStacked)>figure.sc-stencila-code-chunk-default>div.sc-stencila-code-chunk-default{display:-ms-flexbox;display:flex}.sc-stencila-code-chunk-default-h:not(.isStacked)>figure.sc-stencila-code-chunk-default>div.sc-stencila-code-chunk-default,stencila-code-chunk.sc-stencila-code-chunk-default:not(.isStacked)>figure.sc-stencila-code-chunk-default>div.sc-stencila-code-chunk-default{width:100%}.sc-stencila-code-chunk-default-h:not(.isStacked)>figure.sc-stencila-code-chunk-default>div.sc-stencila-code-chunk-default,stencila-code-chunk.sc-stencila-code-chunk-default:not(.isStacked)>figure.sc-stencila-code-chunk-default>div.sc-stencila-code-chunk-default{-ms-flex-direction:row;flex-direction:row}.sc-stencila-code-chunk-default-h:not(.isStacked)>figure.sc-stencila-code-chunk-default>div.sc-stencila-code-chunk-default,stencila-code-chunk.sc-stencila-code-chunk-default:not(.isStacked)>figure.sc-stencila-code-chunk-default>div.sc-stencila-code-chunk-default{-ms-flex-align:stretch;align-items:stretch}.sc-stencila-code-chunk-default-h:not(.isStacked)>figure.sc-stencila-code-chunk-default>div.sc-stencila-code-chunk-default .editorContainer.sc-stencila-code-chunk-default,stencila-code-chunk.sc-stencila-code-chunk-default:not(.isStacked)>figure.sc-stencila-code-chunk-default>div.sc-stencila-code-chunk-default .editorContainer.sc-stencila-code-chunk-default{width:50%}.sc-stencila-code-chunk-default-h:not(.isStacked)>figure.sc-stencila-code-chunk-default>div.sc-stencila-code-chunk-default .editorContainer.sc-stencila-code-chunk-default,stencila-code-chunk.sc-stencila-code-chunk-default:not(.isStacked)>figure.sc-stencila-code-chunk-default>div.sc-stencila-code-chunk-default .editorContainer.sc-stencila-code-chunk-default{border-bottom-width:0}.sc-stencila-code-chunk-default-h:not(.isStacked)>figure.sc-stencila-code-chunk-default>div.sc-stencila-code-chunk-default .editorContainer.sc-stencila-code-chunk-default,stencila-code-chunk.sc-stencila-code-chunk-default:not(.isStacked)>figure.sc-stencila-code-chunk-default>div.sc-stencila-code-chunk-default .editorContainer.sc-stencila-code-chunk-default{border-right-width:1px}.sc-stencila-code-chunk-default-h:not(.isStacked)>figure.sc-stencila-code-chunk-default>div.sc-stencila-code-chunk-default stencila-node-list.sc-stencila-code-chunk-default,stencila-code-chunk.sc-stencila-code-chunk-default:not(.isStacked)>figure.sc-stencila-code-chunk-default>div.sc-stencila-code-chunk-default stencila-node-list.sc-stencila-code-chunk-default{width:50%}.sc-stencila-code-chunk-default-h:not(.isStacked)>figure.sc-stencila-code-chunk-default>div.sc-stencila-code-chunk-default stencila-node-list.sc-stencila-code-chunk-default,stencila-code-chunk.sc-stencila-code-chunk-default:not(.isStacked)>figure.sc-stencila-code-chunk-default>div.sc-stencila-code-chunk-default stencila-node-list.sc-stencila-code-chunk-default{-ms-flex-positive:1;flex-grow:1}}";var codeChunkMaterialCss="*.sc-stencila-code-chunk-material,.sc-stencila-code-chunk-material:after,.sc-stencila-code-chunk-material:before{border:0 solid;-webkit-box-sizing:border-box;box-sizing:border-box}html.sc-stencila-code-chunk-material{font-size:16px}.hidden.sc-stencila-code-chunk-material{display:none}code.sc-stencila-code-chunk-material,code[class*=language-].sc-stencila-code-chunk-material,output.sc-stencila-code-chunk-material{font-family:monospace;font-family:var(--font-family-mono,monospace);font-size:75%}pre.sc-stencila-code-chunk-material{border:1px solid #cfd2e1;border-color:var(--color-neutral-100,#cfd2e1);border-radius:.25rem;margin:.5rem;overflow:auto;padding:.5rem}.preReset.sc-stencila-code-chunk-material{border-width:0;margin:0;padding:0}.sc-stencila-code-chunk-material-h,stencila-code-chunk.sc-stencila-code-chunk-material{--background:var(--color-stock,#fff);--background-editor:var(--color-neutral-50,#edf2f7);--border:var(--color-neutral-100,#e2e8f0);border-color:var(--border);border-radius:.25rem;border-style:solid;border-width:1px;display:block;margin-bottom:1rem;margin-top:1rem;overflow:hidden;position:relative;width:100%}.sc-stencila-code-chunk-material-h>figure.sc-stencila-code-chunk-material,stencila-code-chunk.sc-stencila-code-chunk-material>figure.sc-stencila-code-chunk-material{margin:0;padding:0}.sc-stencila-code-chunk-material-h stencila-action-menu.sc-stencila-code-chunk-material,stencila-code-chunk.sc-stencila-code-chunk-material stencila-action-menu.sc-stencila-code-chunk-material{border-left-width:0;border-radius:0;border-right-width:0;display:block;padding:0;position:relative;width:100%}.sc-stencila-code-chunk-material-h stencila-action-menu.sc-stencila-code-chunk-material .executeStatus.sc-stencila-code-chunk-material,stencila-code-chunk.sc-stencila-code-chunk-material stencila-action-menu.sc-stencila-code-chunk-material .executeStatus.sc-stencila-code-chunk-material{--height:0.875rem;--width:0.875rem;cursor:pointer;padding:.25rem}.sc-stencila-code-chunk-material-h stencila-action-menu.sc-stencila-code-chunk-material .executeStatus.scheduled.sc-stencila-code-chunk-material,stencila-code-chunk.sc-stencila-code-chunk-material stencila-action-menu.sc-stencila-code-chunk-material .executeStatus.scheduled.sc-stencila-code-chunk-material{cursor:wait}.sc-stencila-code-chunk-material-h stencila-action-menu.sc-stencila-code-chunk-material .layoutToggle.sc-stencila-code-chunk-material,stencila-code-chunk.sc-stencila-code-chunk-material stencila-action-menu.sc-stencila-code-chunk-material .layoutToggle.sc-stencila-code-chunk-material{display:none}@media (min-width:1024px){.sc-stencila-code-chunk-material-h stencila-action-menu.sc-stencila-code-chunk-material .layoutToggle.sc-stencila-code-chunk-material,stencila-code-chunk.sc-stencila-code-chunk-material stencila-action-menu.sc-stencila-code-chunk-material .layoutToggle.sc-stencila-code-chunk-material{display:inline-block}}.sc-stencila-code-chunk-material-h stencila-editor.sc-stencila-code-chunk-material,stencila-code-chunk.sc-stencila-code-chunk-material stencila-editor.sc-stencila-code-chunk-material{--border-width:0;background-color:var(--background-editor);-ms-flex-positive:1;flex-grow:1}.sc-stencila-code-chunk-material-h .sc-stencila-code-chunk-material-s>[slot=outputs],.sc-stencila-code-chunk-material-h [slot=outputs].sc-stencila-code-chunk-material,stencila-code-chunk.sc-stencila-code-chunk-material-s>[slot=outputs],stencila-code-chunk .sc-stencila-code-chunk-material-s>[slot=outputs],stencila-code-chunk.sc-stencila-code-chunk-material [slot=outputs].sc-stencila-code-chunk-material{background-color:var(--background);margin:0;padding:.5rem}.sc-stencila-code-chunk-material-h .sc-stencila-code-chunk-material-s>[slot=outputs]:empty,.sc-stencila-code-chunk-material-h [slot=outputs].sc-stencila-code-chunk-material:empty,stencila-code-chunk.sc-stencila-code-chunk-material-s>[slot=outputs]:empty,stencila-code-chunk .sc-stencila-code-chunk-material-s>[slot=outputs]:empty,stencila-code-chunk.sc-stencila-code-chunk-material [slot=outputs].sc-stencila-code-chunk-material:empty{display:none}.editorContainer.sc-stencila-code-chunk-material{background:var(--background-editor);border-color:var(--border);border-radius:0;border-width:0 0 1px;display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-direction:column;flex-direction:column;height:intrinsic;margin:0;position:relative}.editorContainer.sc-stencila-code-chunk-material pre.sc-stencila-code-chunk-material,.editorContainer.sc-stencila-code-chunk-material pre[class*=language-].sc-stencila-code-chunk-material{background-color:transparent}.editorContainer.hidden.sc-stencila-code-chunk-material{display:none}@media (min-width:1024px){.sc-stencila-code-chunk-material-h:not(.isStacked)>figure.sc-stencila-code-chunk-material>div.sc-stencila-code-chunk-material,stencila-code-chunk.sc-stencila-code-chunk-material:not(.isStacked)>figure.sc-stencila-code-chunk-material>div.sc-stencila-code-chunk-material{display:-ms-flexbox;display:flex}.sc-stencila-code-chunk-material-h:not(.isStacked)>figure.sc-stencila-code-chunk-material>div.sc-stencila-code-chunk-material,stencila-code-chunk.sc-stencila-code-chunk-material:not(.isStacked)>figure.sc-stencila-code-chunk-material>div.sc-stencila-code-chunk-material{width:100%}.sc-stencila-code-chunk-material-h:not(.isStacked)>figure.sc-stencila-code-chunk-material>div.sc-stencila-code-chunk-material,stencila-code-chunk.sc-stencila-code-chunk-material:not(.isStacked)>figure.sc-stencila-code-chunk-material>div.sc-stencila-code-chunk-material{-ms-flex-direction:row;flex-direction:row}.sc-stencila-code-chunk-material-h:not(.isStacked)>figure.sc-stencila-code-chunk-material>div.sc-stencila-code-chunk-material,stencila-code-chunk.sc-stencila-code-chunk-material:not(.isStacked)>figure.sc-stencila-code-chunk-material>div.sc-stencila-code-chunk-material{-ms-flex-align:stretch;align-items:stretch}.sc-stencila-code-chunk-material-h:not(.isStacked)>figure.sc-stencila-code-chunk-material>div.sc-stencila-code-chunk-material .editorContainer.sc-stencila-code-chunk-material,stencila-code-chunk.sc-stencila-code-chunk-material:not(.isStacked)>figure.sc-stencila-code-chunk-material>div.sc-stencila-code-chunk-material .editorContainer.sc-stencila-code-chunk-material{width:50%}.sc-stencila-code-chunk-material-h:not(.isStacked)>figure.sc-stencila-code-chunk-material>div.sc-stencila-code-chunk-material .editorContainer.sc-stencila-code-chunk-material,stencila-code-chunk.sc-stencila-code-chunk-material:not(.isStacked)>figure.sc-stencila-code-chunk-material>div.sc-stencila-code-chunk-material .editorContainer.sc-stencila-code-chunk-material{border-bottom-width:0}.sc-stencila-code-chunk-material-h:not(.isStacked)>figure.sc-stencila-code-chunk-material>div.sc-stencila-code-chunk-material .editorContainer.sc-stencila-code-chunk-material,stencila-code-chunk.sc-stencila-code-chunk-material:not(.isStacked)>figure.sc-stencila-code-chunk-material>div.sc-stencila-code-chunk-material .editorContainer.sc-stencila-code-chunk-material{border-right-width:1px}.sc-stencila-code-chunk-material-h:not(.isStacked)>figure.sc-stencila-code-chunk-material>div.sc-stencila-code-chunk-material stencila-node-list.sc-stencila-code-chunk-material,stencila-code-chunk.sc-stencila-code-chunk-material:not(.isStacked)>figure.sc-stencila-code-chunk-material>div.sc-stencila-code-chunk-material stencila-node-list.sc-stencila-code-chunk-material{width:50%}.sc-stencila-code-chunk-material-h:not(.isStacked)>figure.sc-stencila-code-chunk-material>div.sc-stencila-code-chunk-material stencila-node-list.sc-stencila-code-chunk-material,stencila-code-chunk.sc-stencila-code-chunk-material:not(.isStacked)>figure.sc-stencila-code-chunk-material>div.sc-stencila-code-chunk-material stencila-node-list.sc-stencila-code-chunk-material{-ms-flex-positive:1;flex-grow:1}}";var CodeChunkComponent=function(){function e(e){var c=this;registerInstance(this,e);this.codeExecuteEvent=createEvent(this,"stencila-code-execute",7);this.codeExecuteCancelEvent=createEvent(this,"stencila-code-execute-cancel",7);this.allCodeVisibilityChange=createEvent(this,"stencila-code-visibility-change",7);this.editorLayoutChange=createEvent(this,"stencila-editor-layout-change",7);this.autofocus=false;this.languageCapabilities=fileFormatMap;this.isExecutable=false;this.isCodeVisible=false;this.shiftIsPressed=false;this.keymap=[];this.isStacked=true;this.toggleCodeVisibility=function(e){e.preventDefault();if(e.shiftKey){c.allCodeVisibilityChange.emit({isVisible:!c.isCodeVisible})}else{c.isCodeVisible=!c.isCodeVisible}};this.checkIfExecutable=function(){var e,t;if(c.programmingLanguage===undefined||Object.keys((e=c.executableLanguages)!==null&&e!==void 0?e:{}).length<=0){c.isExecutable=false;return}var n=lookupFormat(c.programmingLanguage).name;c.isExecutable=Object.values((t=c.executableLanguages)!==null&&t!==void 0?t:{}).some((function(e){return e.name===n}))};this.handleLanguageChange=function(e){if(c.programmingLanguage===undefined||lookupFormat(c.programmingLanguage).name!==e.detail.name){c.programmingLanguage=e.detail.name}};this.editorLayoutChangeHandler=function(e){c.isStacked=e};this.toggleEditorLayout=function(e){e.preventDefault();if(e.shiftKey){c.editorLayoutChange.emit({isStacked:!c.isStacked})}else{c.editorLayoutChangeHandler(!c.isStacked)}};this.onExecuteHandler=function(e){if(e===void 0){e="Topological"}return __awaiter(c,void 0,void 0,(function(){var c,t;return __generator(this,(function(n){switch(n.label){case 0:return[4,this.getContents()];case 1:c=n.sent();if(isPending(this.executeStatus)){this.codeExecuteCancelEvent.emit({nodeId:this.el.id,scope:"All"});return[2,c]}this.codeExecuteEvent.emit({nodeId:this.el.id,ordering:e});if(!(this.isExecutable&&this.executeHandler))return[3,3];return[4,this.executeHandler(c)];case 2:t=n.sent();return[2,t];case 3:return[2,c]}}))}))};this.onKeyPress=function(e){c.shiftIsPressed=e.shiftKey};this.addKeyListeners=function(){window.addEventListener("keydown",c.onKeyPress);window.addEventListener("keyup",c.onKeyPress)};this.removeKeyListeners=function(){window.removeEventListener("keydown",c.onKeyPress);window.removeEventListener("keyup",c.onKeyPress);c.shiftIsPressed=false}}e.prototype.onDiscoverExecutableLanguages=function(e){var c=e.detail;this.executableLanguages=c.languages;this.checkIfExecutable()};e.prototype.onAllCodeVisibilityChange=function(e){this.isCodeVisible=e.detail.isVisible};e.prototype.onSetEditorLayout=function(e){this.editorLayoutChangeHandler(e.detail.isStacked)};e.prototype.getContents=function(){return __awaiter(this,void 0,void 0,(function(){var e,c,t,n;return __generator(this,(function(a){switch(a.label){case 0:if(!this.editorRef)return[3,2];return[4,(e=this.editorRef)===null||e===void 0?void 0:e.getContents()];case 1:c=a.sent(),t=c.text,n=c.language;return[2,d({text:t,programmingLanguage:n})];case 2:throw new Error("Could not get CodeChunk contents")}}))}))};e.prototype.getTextContents=function(){return __awaiter(this,void 0,void 0,(function(){var e,c;return __generator(this,(function(t){switch(t.label){case 0:if(!this.editorRef)return[3,2];return[4,(e=this.editorRef)===null||e===void 0?void 0:e.getContents()];case 1:c=t.sent().text;return[2,c];case 2:throw new Error("Could not get CodeChunk contents")}}))}))};e.prototype.execute=function(e){if(e===void 0){e="Topological"}return __awaiter(this,void 0,void 0,(function(){var c,t;return __generator(this,(function(n){switch(n.label){case 0:n.trys.push([0,2,,3]);return[4,this.onExecuteHandler(e)];case 1:c=n.sent();return[2,c];case 2:t=n.sent();console.error(t);return[2,new Error("Could not execute CodeChunk")];case 3:return[2]}}))}))};e.prototype.getRef=function(){return __awaiter(this,void 0,void 0,(function(){var e;return __generator(this,(function(c){return[2,(e=this.editorRef)===null||e===void 0?void 0:e.getRef()]}))}))};e.prototype.componentWillLoad=function(){var e=1200;this.isStacked=this.el.getBoundingClientRect().width<e;this.checkIfExecutable()};e.prototype.render=function(){var e=this;return h(Host,{class:{isCodeVisible:this.isCodeVisible,isStacked:this.isStacked}},h("figure",null,h("stencila-action-menu",null,h("stencila-menu",{menuPosition:"bottom-start",slot:"persistentActions"},h(CodeExecuteStatus,{executeStatus:this.executeStatus,executeRequired:this.executeRequired,slot:"toggle"}),h("slot",{name:"code-dependencies"}),h("slot",{name:"code-dependents"})),this.isExecutable&&h("stencila-button",{icon:isPending(this.executeStatus)?"stop":"play",minimal:true,color:"key",class:"run",size:"xsmall",tooltip:isPending(this.executeStatus)?"Cancel":this.shiftIsPressed?"Run only this code":"Run",iconOnly:true,slot:"persistentActions",onClick:function(c){return e.execute(c.shiftKey?"Single":"Topological")},onMouseEnter:this.addKeyListeners,onMouseLeave:this.removeKeyListeners}),h("stencila-button",{minimal:true,color:"key",class:"sourceToggle",onClick:this.toggleCodeVisibility,icon:this.isCodeVisible?"eye-off":"eye",iconOnly:true,size:"xsmall",slot:"persistentActions",tooltip:"".concat(this.isCodeVisible?"Hide":"Show"," Code\nShift click to set for all code")}),")",this.isCodeVisible&&h("stencila-button",{minimal:true,color:"key",class:"layoutToggle",onClick:this.toggleEditorLayout,icon:this.isStacked?"layout-column":"layout-row",iconOnly:true,size:"xsmall",slot:"persistentActions",tooltip:"".concat(this.isStacked?"Side by side":"Stacked"," view\nShift click to set for all code")})),h("div",null,h("div",{class:{editorContainer:true,hidden:!this.isCodeVisible}},h("stencila-editor",{activeLanguage:this.programmingLanguage,executableLanguages:this.executableLanguages,autofocus:this.autofocus,executeHandler:function(){return e.onExecuteHandler()},keymap:this.keymap,readOnly:!this.isExecutable,"onStencila-language-change":this.handleLanguageChange,ref:function(c){e.editorRef=c}},h("slot",{name:CodeChunkComponent.slots.text}),h("slot",{name:CodeChunkComponent.slots.errors}))),h("slot",{name:CodeChunkComponent.slots.outputs})),h("slot",{name:CodeChunkComponent.slots.label}),h("slot",{name:CodeChunkComponent.slots.caption})))};Object.defineProperty(e.prototype,"el",{get:function(){return getElement(this)},enumerable:false,configurable:true});return e}();CodeChunkComponent.slots={text:"text",outputs:"outputs",errors:"errors",caption:"caption",label:"label"};CodeChunkComponent.style={default:defaultCodeChunkCss,material:codeChunkMaterialCss};export{CodeChunkComponent as stencila_code_chunk};
//# sourceMappingURL=stencila-code-chunk.entry.js.map