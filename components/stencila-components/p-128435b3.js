import{h as e,F as l}from"./p-42c7aa22.js";import{a as t}from"./p-f10a134c.js";const i=i=>{var n,a;const o=t(i.activeLanguage);const c=Object.keys((n=i.executableLanguages)!==null&&n!==void 0?n:{}).length>0;const r=c?Object.entries(i.languageCapabilities).reduce(((e,[l,t])=>Object.keys(i.executableLanguages).includes(l)?e:Object.assign(Object.assign({},e),{[l]:t})),{}):i.languageCapabilities;return e("stencila-menu",{"aria-label":"Programming Language",autoClose:true},e("stencila-button",{iconOnly:true,icon:"terminal",size:"xsmall",slot:"toggle","aria-label":"Toggle menu",color:"key",minimal:true,tooltip:`${o.name}`,disabled:i.disabled}),c&&e(l,null,Object.values((a=i.executableLanguages)!==null&&a!==void 0?a:{}).map((l=>e("stencila-menu-item",{size:"xsmall",onClick:()=>{var e;return(e=i.onSetLanguage)===null||e===void 0?void 0:e.call(i,l.name)},icon:l.name===o.name?"check":undefined},l.name))),e("stencila-menu-item",{size:"xsmall",divider:true},"Not executable")),Object.values(r).map((l=>e("stencila-menu-item",{size:"xsmall",onClick:()=>{var e;return(e=i.onSetLanguage)===null||e===void 0?void 0:e.call(i,l.name)}},l.name))))};export{i as L};
//# sourceMappingURL=p-128435b3.js.map