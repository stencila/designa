'use strict';

const index = require('./index-c157949f.js');
require('./global-f539cda5.js');
require('./mode-4e30c3c8.js');

/*
 Stencil Client Patch Browser v2.14.2 | MIT Licensed | https://stenciljs.com
 */
const getDynamicImportFunction = (namespace) => `__sc_import_${namespace.replace(/\s|-/g, '_')}`;
const patchBrowser = () => {
    {
        // opted-in to polyfill cloneNode() for slot polyfilled components
        patchCloneNodeFix(index.H.prototype);
    }
    // @ts-ignore
    const scriptElm = Array.from(index.doc.querySelectorAll('script')).find((s) => new RegExp(`\/${index.NAMESPACE}(\\.esm)?\\.js($|\\?|#)`).test(s.src) ||
            s.getAttribute('data-stencil-namespace') === index.NAMESPACE)
        ;
    const opts = {};
    if ('onbeforeload' in scriptElm && !history.scrollRestoration /* IS_ESM_BUILD */) {
        // Safari < v11 support: This IF is true if it's Safari below v11.
        // This fn cannot use async/await since Safari didn't support it until v11,
        // however, Safari 10 did support modules. Safari 10 also didn't support "nomodule",
        // so both the ESM file and nomodule file would get downloaded. Only Safari
        // has 'onbeforeload' in the script, and "history.scrollRestoration" was added
        // to Safari in v11. Return a noop then() so the async/await ESM code doesn't continue.
        // IS_ESM_BUILD is replaced at build time so this check doesn't happen in systemjs builds.
        return {
            then() {
                /* promise noop */
            },
        };
    }
    {
        opts.resourcesUrl = new URL('.', new URL(scriptElm.getAttribute('data-resources-url') || scriptElm.src, index.win.location.href)).href;
        {
            patchDynamicImport(opts.resourcesUrl, scriptElm);
        }
        if (!index.win.customElements) {
            // module support, but no custom elements support (Old Edge)
            // @ts-ignore
            return Promise.resolve().then(function () { return require(/* webpackChunkName: "polyfills-dom" */ './dom-14886762.js'); }).then(() => opts);
        }
    }
    return index.promiseResolve(opts);
};
const patchDynamicImport = (base, orgScriptElm) => {
    const importFunctionName = getDynamicImportFunction(index.NAMESPACE);
    try {
        // test if this browser supports dynamic imports
        // There is a caching issue in V8, that breaks using import() in Function
        // By generating a random string, we can workaround it
        // Check https://bugs.chromium.org/p/chromium/issues/detail?id=990810 for more info
        index.win[importFunctionName] = new Function('w', `return import(w);//${Math.random()}`);
    }
    catch (e) {
        // this shim is specifically for browsers that do support "esm" imports
        // however, they do NOT support "dynamic" imports
        // basically this code is for old Edge, v18 and below
        const moduleMap = new Map();
        index.win[importFunctionName] = (src) => {
            const url = new URL(src, base).href;
            let mod = moduleMap.get(url);
            if (!mod) {
                const script = index.doc.createElement('script');
                script.type = 'module';
                script.crossOrigin = orgScriptElm.crossOrigin;
                script.src = URL.createObjectURL(new Blob([`import * as m from '${url}'; window.${importFunctionName}.m = m;`], {
                    type: 'application/javascript',
                }));
                mod = new Promise((resolve) => {
                    script.onload = () => {
                        resolve(index.win[importFunctionName].m);
                        script.remove();
                    };
                });
                moduleMap.set(url, mod);
                index.doc.head.appendChild(script);
            }
            return mod;
        };
    }
};
const patchCloneNodeFix = (HTMLElementPrototype) => {
    const nativeCloneNodeFn = HTMLElementPrototype.cloneNode;
    HTMLElementPrototype.cloneNode = function (deep) {
        if (this.nodeName === 'TEMPLATE') {
            return nativeCloneNodeFn.call(this, deep);
        }
        const clonedNode = nativeCloneNodeFn.call(this, false);
        const srcChildNodes = this.childNodes;
        if (deep) {
            for (let i = 0; i < srcChildNodes.length; i++) {
                // Node.ATTRIBUTE_NODE === 2, and checking because IE11
                if (srcChildNodes[i].nodeType !== 2) {
                    clonedNode.appendChild(srcChildNodes[i].cloneNode(true));
                }
            }
        }
        return clonedNode;
    };
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["stencila-code-chunk.cjs",[[38,"stencila-code-chunk",{"text":[1],"autofocus":[4],"programmingLanguage":[1025,"programming-language"],"languageCapabilities":[16],"executableLanguages":[16],"isCodeVisible":[1028,"is-code-visible"],"executeHandler":[16],"contentChangeHandler":[16],"executeStatus":[1,"execute-status"],"compileDigest":[1,"compile-digest"],"executeRequired":[1,"execute-required"],"executeDigest":[1,"execute-digest"],"executeEnded":[1,"execute-ended"],"executeDuration":[1,"execute-duration"],"keymap":[16],"isExecutable":[32],"shiftIsPressed":[32],"isStacked":[32],"getContents":[64],"getTextContents":[64],"execute":[64],"getRef":[64]},[[8,"stencila-discover-executable-languages","onDiscoverExecutableLanguages"],[8,"stencila-code-visibility-change","onAllCodeVisibilityChange"],[8,"stencila-editor-layout-change","onSetEditorLayout"]]]]],["stencila-code-expression.cjs",[[38,"stencila-code-expression",{"executeHandler":[16],"readOnly":[4,"read-only"],"programmingLanguage":[1025,"programming-language"],"languageCapabilities":[16],"executableLanguages":[1040],"executeStatus":[1,"execute-status"],"compileDigest":[1,"compile-digest"],"executeRequired":[1,"execute-required"],"executeDigest":[1,"execute-digest"],"executeEnded":[1,"execute-ended"],"executeDuration":[1,"execute-duration"],"codeExpression":[1040],"isCodeVisible":[1028,"is-code-visible"],"isExecutable":[32],"shiftIsPressed":[32],"hover":[32],"getTextContents":[64],"getContents":[64],"execute":[64]},[[8,"stencila-discover-executable-languages","onDiscoverExecutableLanguages"],[8,"stencila-code-visibility-change","onAllCodeVisibilityChange"]]]]],["stencila-code-fragment.cjs",[[38,"stencila-code-fragment",{"mode":[513],"programmingLanguage":[1025,"programming-language"],"languageCapabilities":[16],"executableLanguages":[1040],"getTextContents":[64]},[[8,"stencila-discover-executable-languages","onDiscoverExecutableLanguages"]]]]],["stencila-document-toolbar.cjs",[[32,"stencila-document-toolbar",{"sourceUrl":[1,"source-url"],"position":[1],"executeStatus":[1,"execute-status"],"isExecutable":[32],"shiftIsPressed":[32],"altIsPressed":[32]},[[8,"stencila-discover-executable-languages","onDiscoverExecutableLanguages"]]]]],["stencila-code-dependency.cjs",[[34,"stencila-code-dependency",{"nodeId":[1,"node-id"],"label":[1],"nodeKind":[1,"node-kind"],"executeAuto":[1,"execute-auto"],"executeRequired":[1,"execute-required"],"executeStatus":[1,"execute-status"],"programmingLanguage":[1,"programming-language"]}]]],["stencila-code-block.cjs",[[38,"stencila-code-block",{"text":[1],"autofocus":[4],"lineWrapping":[4,"line-wrapping"],"lineNumbers":[4,"line-numbers"],"foldGutter":[4,"fold-gutter"],"programmingLanguage":[1025,"programming-language"],"readOnly":[4,"read-only"],"executableLanguages":[16],"keymap":[16],"contentChangeHandler":[16],"getContents":[64],"getTextContents":[64],"getRef":[64]},[[8,"stencila-discover-executable-languages","onDiscoverExecutableLanguages"]]]]],["stencila-code-dependencies.cjs",[[38,"stencila-code-dependencies"]]],["stencila-code-error.cjs",[[38,"stencila-code-error",{"error":[16],"level":[1537],"hasStackTrace":[32],"stackTraceIsOpen":[32]}]]],["stencila-input.cjs",[[34,"stencila-input",{"autoFocus":[4,"auto-focus"],"inputmode":[1],"type":[1],"name":[1],"label":[1],"hideLabel":[4,"hide-label"],"inline":[4],"placeholder":[1],"iconStart":[1,"icon-start"],"required":[4],"readOnly":[4,"read-only"],"value":[8]}]]],["stencila-tab-list.cjs",[[34,"stencila-tab-list",{"tabs":[16],"activeTabIndex":[32]}]]],["animated-route-switch.cjs",[[4,"animated-route-switch",{"group":[513],"routeViewsUpdated":[16],"scrollTopOffset":[2,"scroll-top-offset"],"location":[16]}]]],["stencila-data-table.cjs",[[38,"stencila-data-table"]]],["stencila-image-object.cjs",[[34,"stencila-image-object",{"image":[16]}]]],["stencila-image-plotly.cjs",[[34,"stencila-image-plotly",{"data":[16],"layout":[16],"config":[16],"plotIsRendered":[32]},[[8,"stencila-plotly-load","onPlotlyLoad"]]]]],["stencila-image-vega.cjs",[[34,"stencila-image-vega",{"spec":[1],"options":[16],"plotIsRendered":[32]},[[8,"stencila-vega-load","onVegaLoad"]]]]],["stencila-node-list.cjs",[[38,"stencila-node-list",{"isEmpty":[32]}]]],["stencila-parameter.cjs",[[38,"stencila-parameter",{"mode":[513],"validator":[1025],"paramName":[32]}]]],["stencila-project-graph.cjs",[[33,"stencila-project-graph",{"graph":[16]}]]],["stencila-action-menu.cjs",[[38,"stencila-action-menu",{"actions":[16],"hasSecondaryActions":[32],"isCollapsed":[32],"width":[32],"isAnimating":[32]}]]],["stencila-details.cjs",[[38,"stencila-details",{"open":[4],"isOpen":[32]}]]],["stencila-tab.cjs",[[34,"stencila-tab",{"href":[1],"label":[1],"isSelected":[4,"selected"]}]]],["stencila-toolbar.cjs",[[38,"stencila-toolbar",{"position":[1],"color":[1]}]]],["stencila-editor.cjs",[[38,"stencila-editor",{"contents":[1],"languageCapabilities":[16],"executableLanguages":[16],"readOnly":[4,"read-only"],"activeLanguage":[1,"active-language"],"executeHandler":[16],"contentChangeHandler":[16],"autofocus":[4],"lineNumbers":[4,"line-numbers"],"lineWrapping":[4,"line-wrapping"],"foldGutter":[4,"fold-gutter"],"keymap":[16],"getContents":[64],"setContents":[64],"getState":[64],"setState":[64],"setStateFromString":[64],"getRef":[64]},[[8,"stencila-discover-executable-languages","onDiscoverExecutableLanguages"]]]]],["animate-presence.cjs",[[1,"animate-presence",{"__presenceKey":[1,"__presence-key"],"descendants":[16],"observe":[1028],"registerChild":[64],"unregisterChild":[64],"exit":[64],"enter":[64]},[[0,"animatePresenceExitComplete","animatePresenceExitCompleteHandler"]]]]],["stencila-icon.cjs",[[34,"stencila-icon",{"icon":[1],"iconStyle":[1,"icon-style"],"color":[1],"iconUrl":[1,"icon-url"]}]]],["stencila-button_3.cjs",[[38,"stencila-button",{"href":[1],"rel":[1],"target":[1],"ariaLabel":[1,"aria-label"],"color":[1],"size":[1],"minimal":[4],"isSecondary":[4,"is-secondary"],"buttonType":[1,"button-type"],"disabled":[4],"icon":[1],"iconOnly":[4,"icon-only"],"isLoading":[4,"is-loading"],"fill":[4],"tooltip":[1],"dataEl":[1,"data-el"]}],[38,"stencila-tooltip",{"text":[1],"position":[1]}],[38,"stencila-tooltip-element"]]],["stencila-toast.cjs",[[36,"stencila-toast",{"dismissable":[4],"duration":[2],"type":[1],"position":[1]}]]],["stencila-toast-container.cjs",[[4,"stencila-toast-container",{"position":[1]}]]],["stencila-menu-item.cjs",[[38,"stencila-menu-item",{"icon":[1],"size":[1],"role":[1],"disabled":[516],"divider":[516]}]]],["stencila-menu.cjs",[[38,"stencila-menu",{"isOpen":[1540,"is-open"],"autoClose":[4,"auto-close"],"autoOpen":[4,"auto-open"],"menuPosition":[1,"menu-position"]}]]]], options);
});

//# sourceMappingURL=stencila-components.cjs.js.map