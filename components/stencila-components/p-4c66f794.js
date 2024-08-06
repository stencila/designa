var r="top";var t="bottom";var n="right";var e="left";var a="auto";var i=[r,t,n,e];var o="start";var v="end";var f="clippingParents";var u="viewport";var c="popper";var s="reference";var l=i.reduce((function(r,t){return r.concat([t+"-"+o,t+"-"+v])}),[]);var d=[].concat(i,[a]).reduce((function(r,t){return r.concat([t,t+"-"+o,t+"-"+v])}),[]);var p="beforeRead";var b="read";var h="afterRead";var y="beforeMain";var m="main";var x="afterMain";var w="beforeWrite";var O="write";var g="afterWrite";var j=[p,b,h,y,m,x,w,O,g];function M(r){return r?(r.nodeName||"").toLowerCase():null}function k(r){if(r==null){return window}if(r.toString()!=="[object Window]"){var t=r.ownerDocument;return t?t.defaultView||window:window}return r}function E(r){var t=k(r).Element;return r instanceof t||r instanceof Element}function q(r){var t=k(r).HTMLElement;return r instanceof t||r instanceof HTMLElement}function A(r){if(typeof ShadowRoot==="undefined"){return false}var t=k(r).ShadowRoot;return r instanceof t||r instanceof ShadowRoot}function B(r){var t=r.state;Object.keys(t.elements).forEach((function(r){var n=t.styles[r]||{};var e=t.attributes[r]||{};var a=t.elements[r];if(!q(a)||!M(a)){return}Object.assign(a.style,n);Object.keys(e).forEach((function(r){var t=e[r];if(t===false){a.removeAttribute(r)}else{a.setAttribute(r,t===true?"":t)}}))}))}function P(r){var t=r.state;var n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(t.elements.popper.style,n.popper);t.styles=n;if(t.elements.arrow){Object.assign(t.elements.arrow.style,n.arrow)}return function(){Object.keys(t.elements).forEach((function(r){var e=t.elements[r];var a=t.attributes[r]||{};var i=Object.keys(t.styles.hasOwnProperty(r)?t.styles[r]:n[r]);var o=i.reduce((function(r,t){r[t]="";return r}),{});if(!q(e)||!M(e)){return}Object.assign(e.style,o);Object.keys(a).forEach((function(r){e.removeAttribute(r)}))}))}}const R={name:"applyStyles",enabled:true,phase:"write",fn:B,effect:P,requires:["computeStyles"]};function S(r){return r.split("-")[0]}var W=Math.max;var L=Math.min;var T=Math.round;function H(r,t){if(t===void 0){t=false}var n=r.getBoundingClientRect();var e=1;var a=1;if(q(r)&&t){var i=r.offsetHeight;var o=r.offsetWidth;if(o>0){e=T(n.width)/o||1}if(i>0){a=T(n.height)/i||1}}return{width:n.width/e,height:n.height/a,top:n.top/a,right:n.right/e,bottom:n.bottom/a,left:n.left/e,x:n.left/e,y:n.top/a}}function I(r){var t=H(r);var n=r.offsetWidth;var e=r.offsetHeight;if(Math.abs(t.width-n)<=1){n=t.width}if(Math.abs(t.height-e)<=1){e=t.height}return{x:r.offsetLeft,y:r.offsetTop,width:n,height:e}}function z(r,t){var n=t.getRootNode&&t.getRootNode();if(r.contains(t)){return true}else if(n&&A(n)){var e=t;do{if(e&&r.isSameNode(e)){return true}e=e.parentNode||e.host}while(e)}return false}function C(r){return k(r).getComputedStyle(r)}function D(r){return["table","td","th"].indexOf(M(r))>=0}function F(r){return((E(r)?r.ownerDocument:r.document)||window.document).documentElement}function U(r){if(M(r)==="html"){return r}return r.assignedSlot||r.parentNode||(A(r)?r.host:null)||F(r)}function V(r){if(!q(r)||C(r).position==="fixed"){return null}return r.offsetParent}function _(r){var t=navigator.userAgent.toLowerCase().indexOf("firefox")!==-1;var n=navigator.userAgent.indexOf("Trident")!==-1;if(n&&q(r)){var e=C(r);if(e.position==="fixed"){return null}}var a=U(r);if(A(a)){a=a.host}while(q(a)&&["html","body"].indexOf(M(a))<0){var i=C(a);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||t&&i.willChange==="filter"||t&&i.filter&&i.filter!=="none"){return a}else{a=a.parentNode}}return null}function G(r){var t=k(r);var n=V(r);while(n&&D(n)&&C(n).position==="static"){n=V(n)}if(n&&(M(n)==="html"||M(n)==="body"&&C(n).position==="static")){return t}return n||_(r)||t}function J(r){return["top","bottom"].indexOf(r)>=0?"x":"y"}function K(r,t,n){return W(r,L(t,n))}function N(r,t,n){var e=K(r,t,n);return e>n?n:e}function Q(){return{top:0,right:0,bottom:0,left:0}}function X(r){return Object.assign({},Q(),r)}function Y(r,t){return t.reduce((function(t,n){t[n]=r;return t}),{})}var Z=function r(t,n){t=typeof t==="function"?t(Object.assign({},n.rects,{placement:n.placement})):t;return X(typeof t!=="number"?t:Y(t,i))};function $(a){var i;var o=a.state,v=a.name,f=a.options;var u=o.elements.arrow;var c=o.modifiersData.popperOffsets;var s=S(o.placement);var l=J(s);var d=[e,n].indexOf(s)>=0;var p=d?"height":"width";if(!u||!c){return}var b=Z(f.padding,o);var h=I(u);var y=l==="y"?r:e;var m=l==="y"?t:n;var x=o.rects.reference[p]+o.rects.reference[l]-c[l]-o.rects.popper[p];var w=c[l]-o.rects.reference[l];var O=G(u);var g=O?l==="y"?O.clientHeight||0:O.clientWidth||0:0;var j=x/2-w/2;var M=b[y];var k=g-h[p]-b[m];var E=g/2-h[p]/2+j;var q=K(M,E,k);var A=l;o.modifiersData[v]=(i={},i[A]=q,i.centerOffset=q-E,i)}function rr(r){var t=r.state,n=r.options;var e=n.element,a=e===void 0?"[data-popper-arrow]":e;if(a==null){return}if(typeof a==="string"){a=t.elements.popper.querySelector(a);if(!a){return}}if(!z(t.elements.popper,a)){return}t.elements.arrow=a}const tr={name:"arrow",enabled:true,phase:"main",fn:$,effect:rr,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function nr(r){return r.split("-")[1]}var er={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ar(r){var t=r.x,n=r.y;var e=window;var a=e.devicePixelRatio||1;return{x:T(t*a)/a||0,y:T(n*a)/a||0}}function ir(a){var i;var o=a.popper,f=a.popperRect,u=a.placement,c=a.variation,s=a.offsets,l=a.position,d=a.gpuAcceleration,p=a.adaptive,b=a.roundOffsets,h=a.isFixed;var y=s.x,m=y===void 0?0:y,x=s.y,w=x===void 0?0:x;var O=typeof b==="function"?b({x:m,y:w}):{x:m,y:w};m=O.x;w=O.y;var g=s.hasOwnProperty("x");var j=s.hasOwnProperty("y");var M=e;var E=r;var q=window;if(p){var A=G(o);var B="clientHeight";var P="clientWidth";if(A===k(o)){A=F(o);if(C(A).position!=="static"&&l==="absolute"){B="scrollHeight";P="scrollWidth"}}A=A;if(u===r||(u===e||u===n)&&c===v){E=t;var R=h&&A===q&&q.visualViewport?q.visualViewport.height:A[B];w-=R-f.height;w*=d?1:-1}if(u===e||(u===r||u===t)&&c===v){M=n;var S=h&&A===q&&q.visualViewport?q.visualViewport.width:A[P];m-=S-f.width;m*=d?1:-1}}var W=Object.assign({position:l},p&&er);var L=b===true?ar({x:m,y:w}):{x:m,y:w};m=L.x;w=L.y;if(d){var T;return Object.assign({},W,(T={},T[E]=j?"0":"",T[M]=g?"0":"",T.transform=(q.devicePixelRatio||1)<=1?"translate("+m+"px, "+w+"px)":"translate3d("+m+"px, "+w+"px, 0)",T))}return Object.assign({},W,(i={},i[E]=j?w+"px":"",i[M]=g?m+"px":"",i.transform="",i))}function or(r){var t=r.state,n=r.options;var e=n.gpuAcceleration,a=e===void 0?true:e,i=n.adaptive,o=i===void 0?true:i,v=n.roundOffsets,f=v===void 0?true:v;var u={placement:S(t.placement),variation:nr(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:a,isFixed:t.options.strategy==="fixed"};if(t.modifiersData.popperOffsets!=null){t.styles.popper=Object.assign({},t.styles.popper,ir(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:o,roundOffsets:f})))}if(t.modifiersData.arrow!=null){t.styles.arrow=Object.assign({},t.styles.arrow,ir(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:false,roundOffsets:f})))}t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const vr={name:"computeStyles",enabled:true,phase:"beforeWrite",fn:or,data:{}};var fr={passive:true};function ur(r){var t=r.state,n=r.instance,e=r.options;var a=e.scroll,i=a===void 0?true:a,o=e.resize,v=o===void 0?true:o;var f=k(t.elements.popper);var u=[].concat(t.scrollParents.reference,t.scrollParents.popper);if(i){u.forEach((function(r){r.addEventListener("scroll",n.update,fr)}))}if(v){f.addEventListener("resize",n.update,fr)}return function(){if(i){u.forEach((function(r){r.removeEventListener("scroll",n.update,fr)}))}if(v){f.removeEventListener("resize",n.update,fr)}}}const cr={name:"eventListeners",enabled:true,phase:"write",fn:function r(){},effect:ur,data:{}};var sr={left:"right",right:"left",bottom:"top",top:"bottom"};function lr(r){return r.replace(/left|right|bottom|top/g,(function(r){return sr[r]}))}var dr={start:"end",end:"start"};function pr(r){return r.replace(/start|end/g,(function(r){return dr[r]}))}function br(r){var t=k(r);var n=t.pageXOffset;var e=t.pageYOffset;return{scrollLeft:n,scrollTop:e}}function hr(r){return H(F(r)).left+br(r).scrollLeft}function yr(r){var t=k(r);var n=F(r);var e=t.visualViewport;var a=n.clientWidth;var i=n.clientHeight;var o=0;var v=0;if(e){a=e.width;i=e.height;if(!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)){o=e.offsetLeft;v=e.offsetTop}}return{width:a,height:i,x:o+hr(r),y:v}}function mr(r){var t;var n=F(r);var e=br(r);var a=(t=r.ownerDocument)==null?void 0:t.body;var i=W(n.scrollWidth,n.clientWidth,a?a.scrollWidth:0,a?a.clientWidth:0);var o=W(n.scrollHeight,n.clientHeight,a?a.scrollHeight:0,a?a.clientHeight:0);var v=-e.scrollLeft+hr(r);var f=-e.scrollTop;if(C(a||n).direction==="rtl"){v+=W(n.clientWidth,a?a.clientWidth:0)-i}return{width:i,height:o,x:v,y:f}}function xr(r){var t=C(r),n=t.overflow,e=t.overflowX,a=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+a+e)}function wr(r){if(["html","body","#document"].indexOf(M(r))>=0){return r.ownerDocument.body}if(q(r)&&xr(r)){return r}return wr(U(r))}function Or(r,t){var n;if(t===void 0){t=[]}var e=wr(r);var a=e===((n=r.ownerDocument)==null?void 0:n.body);var i=k(e);var o=a?[i].concat(i.visualViewport||[],xr(e)?e:[]):e;var v=t.concat(o);return a?v:v.concat(Or(U(o)))}function gr(r){return Object.assign({},r,{left:r.x,top:r.y,right:r.x+r.width,bottom:r.y+r.height})}function jr(r){var t=H(r);t.top=t.top+r.clientTop;t.left=t.left+r.clientLeft;t.bottom=t.top+r.clientHeight;t.right=t.left+r.clientWidth;t.width=r.clientWidth;t.height=r.clientHeight;t.x=t.left;t.y=t.top;return t}function Mr(r,t){return t===u?gr(yr(r)):E(t)?jr(t):gr(mr(F(r)))}function kr(r){var t=Or(U(r));var n=["absolute","fixed"].indexOf(C(r).position)>=0;var e=n&&q(r)?G(r):r;if(!E(e)){return[]}return t.filter((function(r){return E(r)&&z(r,e)&&M(r)!=="body"}))}function Er(r,t,n){var e=t==="clippingParents"?kr(r):[].concat(t);var a=[].concat(e,[n]);var i=a[0];var o=a.reduce((function(t,n){var e=Mr(r,n);t.top=W(e.top,t.top);t.right=L(e.right,t.right);t.bottom=L(e.bottom,t.bottom);t.left=W(e.left,t.left);return t}),Mr(r,i));o.width=o.right-o.left;o.height=o.bottom-o.top;o.x=o.left;o.y=o.top;return o}function qr(a){var i=a.reference,f=a.element,u=a.placement;var c=u?S(u):null;var s=u?nr(u):null;var l=i.x+i.width/2-f.width/2;var d=i.y+i.height/2-f.height/2;var p;switch(c){case r:p={x:l,y:i.y-f.height};break;case t:p={x:l,y:i.y+i.height};break;case n:p={x:i.x+i.width,y:d};break;case e:p={x:i.x-f.width,y:d};break;default:p={x:i.x,y:i.y}}var b=c?J(c):null;if(b!=null){var h=b==="y"?"height":"width";switch(s){case o:p[b]=p[b]-(i[h]/2-f[h]/2);break;case v:p[b]=p[b]+(i[h]/2-f[h]/2);break}}return p}function Ar(e,a){if(a===void 0){a={}}var o=a,v=o.placement,l=v===void 0?e.placement:v,d=o.boundary,p=d===void 0?f:d,b=o.rootBoundary,h=b===void 0?u:b,y=o.elementContext,m=y===void 0?c:y,x=o.altBoundary,w=x===void 0?false:x,O=o.padding,g=O===void 0?0:O;var j=X(typeof g!=="number"?g:Y(g,i));var M=m===c?s:c;var k=e.rects.popper;var q=e.elements[w?M:m];var A=Er(E(q)?q:q.contextElement||F(e.elements.popper),p,h);var B=H(e.elements.reference);var P=qr({reference:B,element:k,strategy:"absolute",placement:l});var R=gr(Object.assign({},k,P));var S=m===c?R:B;var W={top:A.top-S.top+j.top,bottom:S.bottom-A.bottom+j.bottom,left:A.left-S.left+j.left,right:S.right-A.right+j.right};var L=e.modifiersData.offset;if(m===c&&L){var T=L[l];Object.keys(W).forEach((function(e){var a=[n,t].indexOf(e)>=0?1:-1;var i=[r,t].indexOf(e)>=0?"y":"x";W[e]+=T[i]*a}))}return W}function Br(r,t){if(t===void 0){t={}}var n=t,e=n.placement,a=n.boundary,o=n.rootBoundary,v=n.padding,f=n.flipVariations,u=n.allowedAutoPlacements,c=u===void 0?d:u;var s=nr(e);var p=s?f?l:l.filter((function(r){return nr(r)===s})):i;var b=p.filter((function(r){return c.indexOf(r)>=0}));if(b.length===0){b=p}var h=b.reduce((function(t,n){t[n]=Ar(r,{placement:n,boundary:a,rootBoundary:o,padding:v})[S(n)];return t}),{});return Object.keys(h).sort((function(r,t){return h[r]-h[t]}))}function Pr(r){if(S(r)===a){return[]}var t=lr(r);return[pr(r),t,pr(t)]}function Rr(i){var v=i.state,f=i.options,u=i.name;if(v.modifiersData[u]._skip){return}var c=f.mainAxis,s=c===void 0?true:c,l=f.altAxis,d=l===void 0?true:l,p=f.fallbackPlacements,b=f.padding,h=f.boundary,y=f.rootBoundary,m=f.altBoundary,x=f.flipVariations,w=x===void 0?true:x,O=f.allowedAutoPlacements;var g=v.options.placement;var j=S(g);var M=j===g;var k=p||(M||!w?[lr(g)]:Pr(g));var E=[g].concat(k).reduce((function(r,t){return r.concat(S(t)===a?Br(v,{placement:t,boundary:h,rootBoundary:y,padding:b,flipVariations:w,allowedAutoPlacements:O}):t)}),[]);var q=v.rects.reference;var A=v.rects.popper;var B=new Map;var P=true;var R=E[0];for(var W=0;W<E.length;W++){var L=E[W];var T=S(L);var H=nr(L)===o;var I=[r,t].indexOf(T)>=0;var z=I?"width":"height";var C=Ar(v,{placement:L,boundary:h,rootBoundary:y,altBoundary:m,padding:b});var D=I?H?n:e:H?t:r;if(q[z]>A[z]){D=lr(D)}var F=lr(D);var U=[];if(s){U.push(C[T]<=0)}if(d){U.push(C[D]<=0,C[F]<=0)}if(U.every((function(r){return r}))){R=L;P=false;break}B.set(L,U)}if(P){var V=w?3:1;var _=function r(t){var n=E.find((function(r){var n=B.get(r);if(n){return n.slice(0,t).every((function(r){return r}))}}));if(n){R=n;return"break"}};for(var G=V;G>0;G--){var J=_(G);if(J==="break")break}}if(v.placement!==R){v.modifiersData[u]._skip=true;v.placement=R;v.reset=true}}const Sr={name:"flip",enabled:true,phase:"main",fn:Rr,requiresIfExists:["offset"],data:{_skip:false}};function Wr(r,t,n){if(n===void 0){n={x:0,y:0}}return{top:r.top-t.height-n.y,right:r.right-t.width+n.x,bottom:r.bottom-t.height+n.y,left:r.left-t.width-n.x}}function Lr(a){return[r,n,t,e].some((function(r){return a[r]>=0}))}function Tr(r){var t=r.state,n=r.name;var e=t.rects.reference;var a=t.rects.popper;var i=t.modifiersData.preventOverflow;var o=Ar(t,{elementContext:"reference"});var v=Ar(t,{altBoundary:true});var f=Wr(o,e);var u=Wr(v,a,i);var c=Lr(f);var s=Lr(u);t.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:u,isReferenceHidden:c,hasPopperEscaped:s};t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":s})}const Hr={name:"hide",enabled:true,phase:"main",requiresIfExists:["preventOverflow"],fn:Tr};function Ir(t,a,i){var o=S(t);var v=[e,r].indexOf(o)>=0?-1:1;var f=typeof i==="function"?i(Object.assign({},a,{placement:t})):i,u=f[0],c=f[1];u=u||0;c=(c||0)*v;return[e,n].indexOf(o)>=0?{x:c,y:u}:{x:u,y:c}}function zr(r){var t=r.state,n=r.options,e=r.name;var a=n.offset,i=a===void 0?[0,0]:a;var o=d.reduce((function(r,n){r[n]=Ir(n,t.rects,i);return r}),{});var v=o[t.placement],f=v.x,u=v.y;if(t.modifiersData.popperOffsets!=null){t.modifiersData.popperOffsets.x+=f;t.modifiersData.popperOffsets.y+=u}t.modifiersData[e]=o}const Cr={name:"offset",enabled:true,phase:"main",requires:["popperOffsets"],fn:zr};function Dr(r){var t=r.state,n=r.name;t.modifiersData[n]=qr({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const Fr={name:"popperOffsets",enabled:true,phase:"read",fn:Dr,data:{}};function Ur(r){return r==="x"?"y":"x"}function Vr(a){var i=a.state,v=a.options,f=a.name;var u=v.mainAxis,c=u===void 0?true:u,s=v.altAxis,l=s===void 0?false:s,d=v.boundary,p=v.rootBoundary,b=v.altBoundary,h=v.padding,y=v.tether,m=y===void 0?true:y,x=v.tetherOffset,w=x===void 0?0:x;var O=Ar(i,{boundary:d,rootBoundary:p,padding:h,altBoundary:b});var g=S(i.placement);var j=nr(i.placement);var M=!j;var k=J(g);var E=Ur(k);var q=i.modifiersData.popperOffsets;var A=i.rects.reference;var B=i.rects.popper;var P=typeof w==="function"?w(Object.assign({},i.rects,{placement:i.placement})):w;var R=typeof P==="number"?{mainAxis:P,altAxis:P}:Object.assign({mainAxis:0,altAxis:0},P);var T=i.modifiersData.offset?i.modifiersData.offset[i.placement]:null;var H={x:0,y:0};if(!q){return}if(c){var z;var C=k==="y"?r:e;var D=k==="y"?t:n;var F=k==="y"?"height":"width";var U=q[k];var V=U+O[C];var _=U-O[D];var X=m?-B[F]/2:0;var Y=j===o?A[F]:B[F];var Z=j===o?-B[F]:-A[F];var $=i.elements.arrow;var rr=m&&$?I($):{width:0,height:0};var tr=i.modifiersData["arrow#persistent"]?i.modifiersData["arrow#persistent"].padding:Q();var er=tr[C];var ar=tr[D];var ir=K(0,A[F],rr[F]);var or=M?A[F]/2-X-ir-er-R.mainAxis:Y-ir-er-R.mainAxis;var vr=M?-A[F]/2+X+ir+ar+R.mainAxis:Z+ir+ar+R.mainAxis;var fr=i.elements.arrow&&G(i.elements.arrow);var ur=fr?k==="y"?fr.clientTop||0:fr.clientLeft||0:0;var cr=(z=T==null?void 0:T[k])!=null?z:0;var sr=U+or-cr-ur;var lr=U+vr-cr;var dr=K(m?L(V,sr):V,U,m?W(_,lr):_);q[k]=dr;H[k]=dr-U}if(l){var pr;var br=k==="x"?r:e;var hr=k==="x"?t:n;var yr=q[E];var mr=E==="y"?"height":"width";var xr=yr+O[br];var wr=yr-O[hr];var Or=[r,e].indexOf(g)!==-1;var gr=(pr=T==null?void 0:T[E])!=null?pr:0;var jr=Or?xr:yr-A[mr]-B[mr]-gr+R.altAxis;var Mr=Or?yr+A[mr]+B[mr]-gr-R.altAxis:wr;var kr=m&&Or?N(jr,yr,Mr):K(m?jr:xr,yr,m?Mr:wr);q[E]=kr;H[E]=kr-yr}i.modifiersData[f]=H}const _r={name:"preventOverflow",enabled:true,phase:"main",fn:Vr,requiresIfExists:["offset"]};function Gr(r){return{scrollLeft:r.scrollLeft,scrollTop:r.scrollTop}}function Jr(r){if(r===k(r)||!q(r)){return br(r)}else{return Gr(r)}}function Kr(r){var t=r.getBoundingClientRect();var n=T(t.width)/r.offsetWidth||1;var e=T(t.height)/r.offsetHeight||1;return n!==1||e!==1}function Nr(r,t,n){if(n===void 0){n=false}var e=q(t);var a=q(t)&&Kr(t);var i=F(t);var o=H(r,a);var v={scrollLeft:0,scrollTop:0};var f={x:0,y:0};if(e||!e&&!n){if(M(t)!=="body"||xr(i)){v=Jr(t)}if(q(t)){f=H(t,true);f.x+=t.clientLeft;f.y+=t.clientTop}else if(i){f.x=hr(i)}}return{x:o.left+v.scrollLeft-f.x,y:o.top+v.scrollTop-f.y,width:o.width,height:o.height}}function Qr(r){var t=new Map;var n=new Set;var e=[];r.forEach((function(r){t.set(r.name,r)}));function a(r){n.add(r.name);var i=[].concat(r.requires||[],r.requiresIfExists||[]);i.forEach((function(r){if(!n.has(r)){var e=t.get(r);if(e){a(e)}}}));e.push(r)}r.forEach((function(r){if(!n.has(r.name)){a(r)}}));return e}function Xr(r){var t=Qr(r);return j.reduce((function(r,n){return r.concat(t.filter((function(r){return r.phase===n})))}),[])}function Yr(r){var t;return function(){if(!t){t=new Promise((function(n){Promise.resolve().then((function(){t=undefined;n(r())}))}))}return t}}function Zr(r){var t=r.reduce((function(r,t){var n=r[t.name];r[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t;return r}),{});return Object.keys(t).map((function(r){return t[r]}))}var $r={placement:"bottom",modifiers:[],strategy:"absolute"};function rt(){for(var r=arguments.length,t=new Array(r),n=0;n<r;n++){t[n]=arguments[n]}return!t.some((function(r){return!(r&&typeof r.getBoundingClientRect==="function")}))}function tt(r){if(r===void 0){r={}}var t=r,n=t.defaultModifiers,e=n===void 0?[]:n,a=t.defaultOptions,i=a===void 0?$r:a;return function r(t,n,a){if(a===void 0){a=i}var o={placement:"bottom",orderedModifiers:[],options:Object.assign({},$r,i),modifiersData:{},elements:{reference:t,popper:n},attributes:{},styles:{}};var v=[];var f=false;var u={state:o,setOptions:function r(a){var v=typeof a==="function"?a(o.options):a;s();o.options=Object.assign({},i,o.options,v);o.scrollParents={reference:E(t)?Or(t):t.contextElement?Or(t.contextElement):[],popper:Or(n)};var f=Xr(Zr([].concat(e,o.options.modifiers)));o.orderedModifiers=f.filter((function(r){return r.enabled}));c();return u.update()},forceUpdate:function r(){if(f){return}var t=o.elements,n=t.reference,e=t.popper;if(!rt(n,e)){return}o.rects={reference:Nr(n,G(e),o.options.strategy==="fixed"),popper:I(e)};o.reset=false;o.placement=o.options.placement;o.orderedModifiers.forEach((function(r){return o.modifiersData[r.name]=Object.assign({},r.data)}));for(var a=0;a<o.orderedModifiers.length;a++){if(o.reset===true){o.reset=false;a=-1;continue}var i=o.orderedModifiers[a],v=i.fn,c=i.options,s=c===void 0?{}:c,l=i.name;if(typeof v==="function"){o=v({state:o,options:s,name:l,instance:u})||o}}},update:Yr((function(){return new Promise((function(r){u.forceUpdate();r(o)}))})),destroy:function r(){s();f=true}};if(!rt(t,n)){return u}u.setOptions(a).then((function(r){if(!f&&a.onFirstUpdate){a.onFirstUpdate(r)}}));function c(){o.orderedModifiers.forEach((function(r){var t=r.name,n=r.options,e=n===void 0?{}:n,a=r.effect;if(typeof a==="function"){var i=a({state:o,name:t,instance:u,options:e});var f=function r(){};v.push(i||f)}}))}function s(){v.forEach((function(r){return r()}));v=[]}return u}}var nt=[cr,Fr,vr,R,Cr,Sr,_r,tr,Hr];var et=tt({defaultModifiers:nt});export{et as c};
//# sourceMappingURL=p-4c66f794.js.map