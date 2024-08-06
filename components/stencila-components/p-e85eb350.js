(function(){var t=new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));function n(n){var i=t.has(n);n=/^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(n);return!i&&n}function i(t){var n=t.isConnected;if(void 0!==n)return n;for(;t&&!(t.__CE_isImportDocument||t instanceof Document);)t=t.parentNode||(window.ShadowRoot&&t instanceof ShadowRoot?t.host:void 0);return!(!t||!(t.__CE_isImportDocument||t instanceof Document))}function e(t,n){for(;n&&n!==t&&!n.nextSibling;)n=n.parentNode;return n&&n!==t?n.nextSibling:null}function o(t,n,i){i=void 0===i?new Set:i;for(var r=t;r;){if(r.nodeType===Node.ELEMENT_NODE){var f=r;n(f);var c=f.localName;if("link"===c&&"import"===f.getAttribute("rel")){r=f.import;if(r instanceof Node&&!i.has(r))for(i.add(r),r=r.firstChild;r;r=r.nextSibling)o(r,n,i);r=e(t,f);continue}else if("template"===c){r=e(t,f);continue}if(f=f.__CE_shadowRoot)for(f=f.firstChild;f;f=f.nextSibling)o(f,n,i)}r=r.firstChild?r.firstChild:e(t,r)}}function r(t,n,i){t[n]=i}function f(){this.a=new Map;this.g=new Map;this.c=[];this.f=[];this.b=!1}function c(t,n,i){t.a.set(n,i);t.g.set(i.constructorFunction,i)}function u(t,n){t.b=!0;t.c.push(n)}function s(t,n){t.b=!0;t.f.push(n)}function a(t,n){t.b&&o(n,(function(n){return h(t,n)}))}function h(t,n){if(t.b&&!n.__CE_patched){n.__CE_patched=!0;for(var i=0;i<t.c.length;i++)t.c[i](n);for(i=0;i<t.f.length;i++)t.f[i](n)}}function l(t,n){var i=[];o(n,(function(t){return i.push(t)}));for(n=0;n<i.length;n++){var e=i[n];1===e.__CE_state?t.connectedCallback(e):w(t,e)}}function d(t,n){var i=[];o(n,(function(t){return i.push(t)}));for(n=0;n<i.length;n++){var e=i[n];1===e.__CE_state&&t.disconnectedCallback(e)}}function v(t,n,i){i=void 0===i?{}:i;var e=i.u||new Set,r=i.i||function(n){return w(t,n)},f=[];o(n,(function(n){if("link"===n.localName&&"import"===n.getAttribute("rel")){var i=n.import;i instanceof Node&&(i.__CE_isImportDocument=!0,i.__CE_hasRegistry=!0);i&&"complete"===i.readyState?i.__CE_documentLoadHandled=!0:n.addEventListener("load",(function(){var i=n.import;if(!i.__CE_documentLoadHandled){i.__CE_documentLoadHandled=!0;var o=new Set(e);o.delete(i);v(t,i,{u:o,i:r})}}))}else f.push(n)}),e);if(t.b)for(n=0;n<f.length;n++)h(t,f[n]);for(n=0;n<f.length;n++)r(f[n])}function w(t,n){if(void 0===n.__CE_state){var e=n.ownerDocument;if(e.defaultView||e.__CE_isImportDocument&&e.__CE_hasRegistry)if(e=t.a.get(n.localName)){e.constructionStack.push(n);var o=e.constructorFunction;try{try{if(new o!==n)throw Error("The custom element constructor did not produce the element being upgraded.")}finally{e.constructionStack.pop()}}catch(c){throw n.__CE_state=2,c}n.__CE_state=1;n.__CE_definition=e;if(e.attributeChangedCallback)for(e=e.observedAttributes,o=0;o<e.length;o++){var r=e[o],f=n.getAttribute(r);null!==f&&t.attributeChangedCallback(n,r,null,f,null)}i(n)&&t.connectedCallback(n)}}}f.prototype.connectedCallback=function(t){var n=t.__CE_definition;n.connectedCallback&&n.connectedCallback.call(t)};f.prototype.disconnectedCallback=function(t){var n=t.__CE_definition;n.disconnectedCallback&&n.disconnectedCallback.call(t)};f.prototype.attributeChangedCallback=function(t,n,i,e,o){var r=t.__CE_definition;r.attributeChangedCallback&&-1<r.observedAttributes.indexOf(n)&&r.attributeChangedCallback.call(t,n,i,e,o)};function m(t){var n=document;this.c=t;this.a=n;this.b=void 0;v(this.c,this.a);"loading"===this.a.readyState&&(this.b=new MutationObserver(this.f.bind(this)),this.b.observe(this.a,{childList:!0,subtree:!0}))}function b(t){t.b&&t.b.disconnect()}m.prototype.f=function(t){var n=this.a.readyState;"interactive"!==n&&"complete"!==n||b(this);for(n=0;n<t.length;n++)for(var i=t[n].addedNodes,e=0;e<i.length;e++)v(this.c,i[e])};function E(){var t=this;this.b=this.a=void 0;this.c=new Promise((function(n){t.b=n;t.a&&n(t.a)}))}function p(t){if(t.a)throw Error("Already resolved.");t.a=void 0;t.b&&t.b(void 0)}function g(t){this.c=!1;this.a=t;this.j=new Map;this.f=function(t){return t()};this.b=!1;this.g=[];this.o=new m(t)}g.prototype.l=function(t,i){var e=this;if(!(i instanceof Function))throw new TypeError("Custom element constructors must be functions.");if(!n(t))throw new SyntaxError("The element name '"+t+"' is not valid.");if(this.a.a.get(t))throw Error("A custom element with name '"+t+"' has already been defined.");if(this.c)throw Error("A custom element is already being defined.");this.c=!0;try{var o=function(t){var n=r[t];if(void 0!==n&&!(n instanceof Function))throw Error("The '"+t+"' callback must be a function.");return n},r=i.prototype;if(!(r instanceof Object))throw new TypeError("The custom element constructor's prototype is not an object.");var f=o("connectedCallback");var u=o("disconnectedCallback");var s=o("adoptedCallback");var a=o("attributeChangedCallback");var h=i.observedAttributes||[]}catch(l){return}finally{this.c=!1}i={localName:t,constructorFunction:i,connectedCallback:f,disconnectedCallback:u,adoptedCallback:s,attributeChangedCallback:a,observedAttributes:h,constructionStack:[]};c(this.a,t,i);this.g.push(i);this.b||(this.b=!0,this.f((function(){return y(e)})))};g.prototype.i=function(t){v(this.a,t)};function y(t){if(!1!==t.b){t.b=!1;for(var n=t.g,i=[],e=new Map,o=0;o<n.length;o++)e.set(n[o].localName,[]);v(t.a,document,{i:function(n){if(void 0===n.__CE_state){var o=n.localName,r=e.get(o);r?r.push(n):t.a.a.get(o)&&i.push(n)}}});for(o=0;o<i.length;o++)w(t.a,i[o]);for(;0<n.length;){var r=n.shift();o=r.localName;r=e.get(r.localName);for(var f=0;f<r.length;f++)w(t.a,r[f]);(o=t.j.get(o))&&p(o)}}}g.prototype.get=function(t){if(t=this.a.a.get(t))return t.constructorFunction};g.prototype.m=function(t){if(!n(t))return Promise.reject(new SyntaxError("'"+t+"' is not a valid custom element name."));var i=this.j.get(t);if(i)return i.c;i=new E;this.j.set(t,i);this.a.a.get(t)&&!this.g.some((function(n){return n.localName===t}))&&p(i);return i.c};g.prototype.s=function(t){b(this.o);var n=this.f;this.f=function(i){return t((function(){return n(i)}))}};window.CustomElementRegistry=g;g.prototype.define=g.prototype.l;g.prototype.upgrade=g.prototype.i;g.prototype.get=g.prototype.get;g.prototype.whenDefined=g.prototype.m;g.prototype.polyfillWrapFlushCallback=g.prototype.s;var C=window.Document.prototype.createElement,T=window.Document.prototype.createElementNS,j=window.Document.prototype.importNode,D=window.Document.prototype.prepend,N=window.Document.prototype.append,A=window.DocumentFragment.prototype.prepend,O=window.DocumentFragment.prototype.append,M=window.Node.prototype.cloneNode,S=window.Node.prototype.appendChild,k=window.Node.prototype.insertBefore,L=window.Node.prototype.removeChild,F=window.Node.prototype.replaceChild,H=Object.getOwnPropertyDescriptor(window.Node.prototype,"textContent"),x=window.Element.prototype.attachShadow,z=Object.getOwnPropertyDescriptor(window.Element.prototype,"innerHTML"),P=window.Element.prototype.getAttribute,R=window.Element.prototype.setAttribute,$=window.Element.prototype.removeAttribute,_=window.Element.prototype.getAttributeNS,B=window.Element.prototype.setAttributeNS,I=window.Element.prototype.removeAttributeNS,U=window.Element.prototype.insertAdjacentElement,W=window.Element.prototype.insertAdjacentHTML,q=window.Element.prototype.prepend,G=window.Element.prototype.append,J=window.Element.prototype.before,K=window.Element.prototype.after,Q=window.Element.prototype.replaceWith,V=window.Element.prototype.remove,X=window.HTMLElement,Y=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML"),Z=window.HTMLElement.prototype.insertAdjacentElement,tt=window.HTMLElement.prototype.insertAdjacentHTML;var nt=new function(){};function it(){var t=st;window.HTMLElement=function(){function n(){var n=this.constructor,i=t.g.get(n);if(!i)throw Error("The custom element being constructed was not registered with `customElements`.");var e=i.constructionStack;if(0===e.length)return e=C.call(document,i.localName),Object.setPrototypeOf(e,n.prototype),e.__CE_state=1,e.__CE_definition=i,h(t,e),e;i=e.length-1;var o=e[i];if(o===nt)throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");e[i]=nt;Object.setPrototypeOf(o,n.prototype);h(t,o);return o}n.prototype=X.prototype;Object.defineProperty(n.prototype,"constructor",{writable:!0,configurable:!0,enumerable:!1,value:n});return n}()}function et(t,n,e){function o(n){return function(e){for(var o=[],r=0;r<arguments.length;++r)o[r]=arguments[r];r=[];for(var f=[],c=0;c<o.length;c++){var u=o[c];u instanceof Element&&i(u)&&f.push(u);if(u instanceof DocumentFragment)for(u=u.firstChild;u;u=u.nextSibling)r.push(u);else r.push(u)}n.apply(this,o);for(o=0;o<f.length;o++)d(t,f[o]);if(i(this))for(o=0;o<r.length;o++)f=r[o],f instanceof Element&&l(t,f)}}void 0!==e.h&&(n.prepend=o(e.h));void 0!==e.append&&(n.append=o(e.append))}function ot(){var t=st;r(Document.prototype,"createElement",(function(n){if(this.__CE_hasRegistry){var i=t.a.get(n);if(i)return new i.constructorFunction}n=C.call(this,n);h(t,n);return n}));r(Document.prototype,"importNode",(function(n,i){n=j.call(this,n,!!i);this.__CE_hasRegistry?v(t,n):a(t,n);return n}));r(Document.prototype,"createElementNS",(function(n,i){if(this.__CE_hasRegistry&&(null===n||"http://www.w3.org/1999/xhtml"===n)){var e=t.a.get(i);if(e)return new e.constructorFunction}n=T.call(this,n,i);h(t,n);return n}));et(t,Document.prototype,{h:D,append:N})}function rt(){function t(t,e){Object.defineProperty(t,"textContent",{enumerable:e.enumerable,configurable:!0,get:e.get,set:function(t){if(this.nodeType===Node.TEXT_NODE)e.set.call(this,t);else{var o=void 0;if(this.firstChild){var r=this.childNodes,f=r.length;if(0<f&&i(this)){o=Array(f);for(var c=0;c<f;c++)o[c]=r[c]}}e.set.call(this,t);if(o)for(t=0;t<o.length;t++)d(n,o[t])}}})}var n=st;r(Node.prototype,"insertBefore",(function(t,e){if(t instanceof DocumentFragment){var o=Array.prototype.slice.apply(t.childNodes);t=k.call(this,t,e);if(i(this))for(e=0;e<o.length;e++)l(n,o[e]);return t}o=i(t);e=k.call(this,t,e);o&&d(n,t);i(this)&&l(n,t);return e}));r(Node.prototype,"appendChild",(function(t){if(t instanceof DocumentFragment){var e=Array.prototype.slice.apply(t.childNodes);t=S.call(this,t);if(i(this))for(var o=0;o<e.length;o++)l(n,e[o]);return t}e=i(t);o=S.call(this,t);e&&d(n,t);i(this)&&l(n,t);return o}));r(Node.prototype,"cloneNode",(function(t){t=M.call(this,!!t);this.ownerDocument.__CE_hasRegistry?v(n,t):a(n,t);return t}));r(Node.prototype,"removeChild",(function(t){var e=i(t),o=L.call(this,t);e&&d(n,t);return o}));r(Node.prototype,"replaceChild",(function(t,e){if(t instanceof DocumentFragment){var o=Array.prototype.slice.apply(t.childNodes);t=F.call(this,t,e);if(i(this))for(d(n,e),e=0;e<o.length;e++)l(n,o[e]);return t}o=i(t);var r=F.call(this,t,e),f=i(this);f&&d(n,e);o&&d(n,t);f&&l(n,t);return r}));H&&H.get?t(Node.prototype,H):u(n,(function(n){t(n,{enumerable:!0,configurable:!0,get:function(){for(var t=[],n=0;n<this.childNodes.length;n++){var i=this.childNodes[n];i.nodeType!==Node.COMMENT_NODE&&t.push(i.textContent)}return t.join("")},set:function(t){for(;this.firstChild;)L.call(this,this.firstChild);null!=t&&""!==t&&S.call(this,document.createTextNode(t))}})}))}function ft(t){function n(n){return function(e){for(var o=[],r=0;r<arguments.length;++r)o[r]=arguments[r];r=[];for(var f=[],c=0;c<o.length;c++){var u=o[c];u instanceof Element&&i(u)&&f.push(u);if(u instanceof DocumentFragment)for(u=u.firstChild;u;u=u.nextSibling)r.push(u);else r.push(u)}n.apply(this,o);for(o=0;o<f.length;o++)d(t,f[o]);if(i(this))for(o=0;o<r.length;o++)f=r[o],f instanceof Element&&l(t,f)}}var e=Element.prototype;void 0!==J&&(e.before=n(J));void 0!==J&&(e.after=n(K));void 0!==Q&&r(e,"replaceWith",(function(n){for(var e=[],o=0;o<arguments.length;++o)e[o]=arguments[o];o=[];for(var r=[],f=0;f<e.length;f++){var c=e[f];c instanceof Element&&i(c)&&r.push(c);if(c instanceof DocumentFragment)for(c=c.firstChild;c;c=c.nextSibling)o.push(c);else o.push(c)}f=i(this);Q.apply(this,e);for(e=0;e<r.length;e++)d(t,r[e]);if(f)for(d(t,this),e=0;e<o.length;e++)r=o[e],r instanceof Element&&l(t,r)}));void 0!==V&&r(e,"remove",(function(){var n=i(this);V.call(this);n&&d(t,this)}))}function ct(){function t(t,n){Object.defineProperty(t,"innerHTML",{enumerable:n.enumerable,configurable:!0,get:n.get,set:function(t){var e=this,r=void 0;i(this)&&(r=[],o(this,(function(t){t!==e&&r.push(t)})));n.set.call(this,t);if(r)for(var c=0;c<r.length;c++){var u=r[c];1===u.__CE_state&&f.disconnectedCallback(u)}this.ownerDocument.__CE_hasRegistry?v(f,this):a(f,this);return t}})}function n(t,n){r(t,"insertAdjacentElement",(function(t,e){var o=i(e);t=n.call(this,t,e);o&&d(f,e);i(t)&&l(f,e);return t}))}function e(t,n){function i(t,n){for(var i=[];t!==n;t=t.nextSibling)i.push(t);for(n=0;n<i.length;n++)v(f,i[n])}r(t,"insertAdjacentHTML",(function(t,e){t=t.toLowerCase();if("beforebegin"===t){var o=this.previousSibling;n.call(this,t,e);i(o||this.parentNode.firstChild,this)}else if("afterbegin"===t)o=this.firstChild,n.call(this,t,e),i(this.firstChild,o);else if("beforeend"===t)o=this.lastChild,n.call(this,t,e),i(o||this.firstChild,null);else if("afterend"===t)o=this.nextSibling,n.call(this,t,e),i(this.nextSibling,o);else throw new SyntaxError("The value provided ("+String(t)+") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.")}))}var f=st;x&&r(Element.prototype,"attachShadow",(function(t){t=x.call(this,t);var n=f;if(n.b&&!t.__CE_patched){t.__CE_patched=!0;for(var i=0;i<n.c.length;i++)n.c[i](t)}return this.__CE_shadowRoot=t}));z&&z.get?t(Element.prototype,z):Y&&Y.get?t(HTMLElement.prototype,Y):s(f,(function(n){t(n,{enumerable:!0,configurable:!0,get:function(){return M.call(this,!0).innerHTML},set:function(t){var n="template"===this.localName,i=n?this.content:this,e=T.call(document,this.namespaceURI,this.localName);for(e.innerHTML=t;0<i.childNodes.length;)L.call(i,i.childNodes[0]);for(t=n?e.content:e;0<t.childNodes.length;)S.call(i,t.childNodes[0])}})}));r(Element.prototype,"setAttribute",(function(t,n){if(1!==this.__CE_state)return R.call(this,t,n);var i=P.call(this,t);R.call(this,t,n);n=P.call(this,t);f.attributeChangedCallback(this,t,i,n,null)}));r(Element.prototype,"setAttributeNS",(function(t,n,i){if(1!==this.__CE_state)return B.call(this,t,n,i);var e=_.call(this,t,n);B.call(this,t,n,i);i=_.call(this,t,n);f.attributeChangedCallback(this,n,e,i,t)}));r(Element.prototype,"removeAttribute",(function(t){if(1!==this.__CE_state)return $.call(this,t);var n=P.call(this,t);$.call(this,t);null!==n&&f.attributeChangedCallback(this,t,n,null,null)}));r(Element.prototype,"removeAttributeNS",(function(t,n){if(1!==this.__CE_state)return I.call(this,t,n);var i=_.call(this,t,n);I.call(this,t,n);var e=_.call(this,t,n);i!==e&&f.attributeChangedCallback(this,n,i,e,t)}));Z?n(HTMLElement.prototype,Z):U?n(Element.prototype,U):console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched.");tt?e(HTMLElement.prototype,tt):W?e(Element.prototype,W):console.warn("Custom Elements: `Element#insertAdjacentHTML` was not patched.");et(f,Element.prototype,{h:q,append:G});ft(f)}var ut=window.customElements;if(!ut||ut.forcePolyfill||"function"!=typeof ut.define||"function"!=typeof ut.get){var st=new f;it();ot();et(st,DocumentFragment.prototype,{h:A,append:O});rt();ct();document.__CE_hasRegistry=!0;var at=new g(st);Object.defineProperty(window,"customElements",{configurable:!0,enumerable:!0,value:at})}}).call(self);"string"!==typeof document.baseURI&&Object.defineProperty(Document.prototype,"baseURI",{enumerable:!0,configurable:!0,get:function(){var t=document.querySelector("base");return t&&t.href?t.href:document.URL}});"function"!==typeof window.CustomEvent&&(window.CustomEvent=function(t,n){n=n||{bubbles:!1,cancelable:!1,detail:void 0};var i=document.createEvent("CustomEvent");i.initCustomEvent(t,n.bubbles,n.cancelable,n.detail);return i},window.CustomEvent.prototype=window.Event.prototype);(function(t,n,i){t.composedPath||(t.composedPath=function(){if(this.path)return this.path;var t=this.target;for(this.path=[];null!==t.parentNode;)this.path.push(t),t=t.parentNode;this.path.push(n,i);return this.path})})(Event.prototype,document,window);
/*!
Element.closest and Element.matches
https://github.com/jonathantneal/closest
Creative Commons Zero v1.0 Universal
*/(function(t){"function"!==typeof t.matches&&(t.matches=t.msMatchesSelector||t.mozMatchesSelector||t.webkitMatchesSelector||function(t){t=(this.document||this.ownerDocument).querySelectorAll(t);for(var n=0;t[n]&&t[n]!==this;)++n;return!!t[n]});"function"!==typeof t.closest&&(t.closest=function(t){for(var n=this;n&&1===n.nodeType;){if(n.matches(t))return n;n=n.parentNode}return null})})(window.Element.prototype);
/*!
Element.getRootNode()
*/(function(t){function n(t){t=i(t);return t&&11===t.nodeType?n(t.host):t}function i(t){return t&&t.parentNode?i(t.parentNode):t}"function"!==typeof t.getRootNode&&(t.getRootNode=function(t){return t&&t.composed?n(this):i(this)})})(Element.prototype);
/*!
Element.isConnected()
*/(function(t){"isConnected"in t||Object.defineProperty(t,"isConnected",{configurable:!0,enumerable:!0,get:function(){var t=this.getRootNode({composed:!0});return t&&9===t.nodeType}})})(Element.prototype);
/*!
Element.remove()
*/(function(t){t.forEach((function(t){t.hasOwnProperty("remove")||Object.defineProperty(t,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){null!==this.parentNode&&this.parentNode.removeChild(this)}})}))})([Element.prototype,CharacterData.prototype,DocumentType.prototype]);
/*!
Element.classList
*/!function(t){"classList"in t||Object.defineProperty(t,"classList",{get:function(){var t=this,n=(t.getAttribute("class")||"").replace(/^\s+|\s$/g,"").split(/\s+/g);function i(){n.length>0?t.setAttribute("class",n.join(" ")):t.removeAttribute("class")}return""===n[0]&&n.splice(0,1),n.toggle=function(t,e){void 0!==e?e?n.add(t):n.remove(t):-1!==n.indexOf(t)?n.splice(n.indexOf(t),1):n.push(t),i()},n.add=function(){for(var t=[].slice.call(arguments),e=0,o=t.length;e<o;e++)-1===n.indexOf(t[e])&&n.push(t[e]);i()},n.remove=function(){for(var t=[].slice.call(arguments),e=0,o=t.length;e<o;e++)-1!==n.indexOf(t[e])&&n.splice(n.indexOf(t[e]),1);i()},n.item=function(t){return n[t]},n.contains=function(t){return-1!==n.indexOf(t)},n.replace=function(t,e){-1!==n.indexOf(t)&&n.splice(n.indexOf(t),1,e),i()},n.value=t.getAttribute("class")||"",n}})}(Element.prototype);
/*!
DOMTokenList
*/(function(t){try{document.body.classList.add()}catch(e){var n=t.add,i=t.remove;t.add=function(){for(var t=0;t<arguments.length;t++)n.call(this,arguments[t])};t.remove=function(){for(var t=0;t<arguments.length;t++)i.call(this,arguments[t])}}})(DOMTokenList.prototype);
//# sourceMappingURL=p-e85eb350.js.map