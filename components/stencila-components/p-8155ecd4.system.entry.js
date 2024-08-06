var __awaiter=this&&this.__awaiter||function(e,r,t,o){function i(e){return e instanceof t?e:new t((function(r){r(e)}))}return new(t||(t=Promise))((function(t,n){function a(e){try{l(o.next(e))}catch(r){n(r)}}function s(e){try{l(o["throw"](e))}catch(r){n(r)}}function l(e){e.done?t(e.value):i(e.value).then(a,s)}l((o=o.apply(e,r||[])).next())}))};var __generator=this&&this.__generator||function(e,r){var t={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},o,i,n,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(e){return function(r){return l([e,r])}}function l(a){if(o)throw new TypeError("Generator is already executing.");while(t)try{if(o=1,i&&(n=a[0]&2?i["return"]:a[0]?i["throw"]||((n=i["return"])&&n.call(i),0):i.next)&&!(n=n.call(i,a[1])).done)return n;if(i=0,n)a=[a[0]&2,n.value];switch(a[0]){case 0:case 1:n=a;break;case 4:t.label++;return{value:a[1],done:false};case 5:t.label++;i=a[1];a=[0];continue;case 7:a=t.ops.pop();t.trys.pop();continue;default:if(!(n=t.trys,n=n.length>0&&n[n.length-1])&&(a[0]===6||a[0]===2)){t=0;continue}if(a[0]===3&&(!n||a[1]>n[0]&&a[1]<n[3])){t.label=a[1];break}if(a[0]===6&&t.label<n[1]){t.label=n[1];n=a;break}if(n&&t.label<n[2]){t.label=n[2];t.ops.push(a);break}if(n[2])t.ops.pop();t.trys.pop();continue}a=r.call(e,t)}catch(s){a=[6,s];i=0}finally{o=n=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-6cc918a4.system.js"],(function(e){"use strict";var r,t,o,i;return{setters:[function(e){r=e.r;t=e.i;o=e.h;i=e.e}],execute:function(){var n=undefined&&undefined.__assign||function(){n=Object.assign||function(e){for(var r,t=1,o=arguments.length;t<o;t++){r=arguments[t];for(var i in r)if(Object.prototype.hasOwnProperty.call(r,i))e[i]=r[i]}return e};return n.apply(this,arguments)};var a=undefined&&undefined.__spreadArray||function(e,r,t){if(t||arguments.length===2)for(var o=0,i=r.length,n;o<i;o++){if(n||!(o in r)){if(!n)n=Array.prototype.slice.call(r,0,o);n[o]=r[o]}}return e.concat(n||Array.prototype.slice.call(r))};var s=function(e,r,t){if(t===void 0){t=false}if(!e||!r||typeof e!=="object"||typeof r!=="object")return e;var o=n({},e);for(var i in r){if(r.hasOwnProperty(i)){if(r[i]instanceof Array&&e[i]instanceof Array){o[i]=t?a(a([],e[i],true),r[i],true):r[i]}else if(typeof r[i]==="object"&&typeof e[i]==="object"){o[i]=s(e[i],r[i],t)}else{o[i]=r[i]}}}return o};var l=undefined&&undefined.__spreadArray||function(e,r,t){if(t||arguments.length===2)for(var o=0,i=r.length,n;o<i;o++){if(n||!(o in r)){if(!n)n=Array.prototype.slice.call(r,0,o);n[o]=r[o]}}return e.concat(n||Array.prototype.slice.call(r))};var c={defaults:{},errorType:null,polyfills:{fetch:null,FormData:null,URLSearchParams:null,performance:null,PerformanceObserver:null,AbortController:null},polyfill:function(e,r){var t=r===void 0?{}:r,o=t.doThrow,i=o===void 0?true:o,n=t.instance,a=n===void 0?false:n;var s=[];for(var c=2;c<arguments.length;c++){s[c-2]=arguments[c]}var u=this.polyfills[e]||(typeof self!=="undefined"?self[e]:null)||(typeof global!=="undefined"?global[e]:null);if(i&&!u)throw new Error(e+" is not defined");return a&&u?new(u.bind.apply(u,l([void 0],s,false))):u}};var u=function(e,r,t,o){if(!e.getEntriesByName)return false;var i=e.getEntriesByName(r);if(i&&i.length>0){t(i.reverse()[0]);if(o.clearMeasures)o.clearMeasures(r);f.callbacks.delete(r);if(f.callbacks.size<1){f.observer.disconnect();if(o.clearResourceTimings){o.clearResourceTimings()}}return true}return false};var d=function(e,r){if(!f.observer&&e&&r){f.observer=new r((function(r){f.callbacks.forEach((function(t,o){u(r,o,t,e)}))}));if(e.clearResourceTimings)e.clearResourceTimings()}return f.observer};var f={callbacks:new Map,observer:null,observe:function(e,r){if(!e||!r)return;var t=c.polyfill("performance",{doThrow:false});var o=c.polyfill("PerformanceObserver",{doThrow:false});if(!d(t,o))return;if(!u(t,e,r,t)){if(f.callbacks.size<1)f.observer.observe({entryTypes:["resource","measure"]});f.callbacks.set(e,r)}}};var p=function(e){return function(r){return e.length===0?r:e.length===1?e[0](r):e.reduceRight((function(t,o,i){return i===e.length-2?o(t(r)):o(t)}))}};var h=function(){function e(e){this.error=e}return e}();var m=function(e){var r=e._url,t=e._catchers,o=e._resolvers,i=e._middlewares,n=e._options;var a=new Map(t);var l=s(c.defaults,n);var u=c.polyfill("AbortController",{doThrow:false,instance:true});if(!l["signal"]&&u){l["signal"]=u.signal}var d={ref:null,clear:function(){if(d.ref){clearTimeout(d.ref);d.ref=null}}};var m=p(i)(c.polyfill("fetch"))(r,l);var b=m.catch((function(e){throw new h(e)})).then((function(e){d.clear();if(!e.ok){if(e.type==="opaque"){var r=new Error("Opaque response");r["status"]=e.status;r["response"]=e;throw r}return e[c.errorType||"text"]().then((function(r){var t=new Error(r);t[c.errorType||"text"]=r;t["status"]=e.status;t["response"]=e;throw t}))}return e}));var g=function(r){return r.catch((function(r){d.clear();var t=r instanceof h?r.error:r;if(r instanceof h&&a.has("__fromFetch"))return a.get("__fromFetch")(t,e);else if(a.has(t.status))return a.get(t.status)(t,e);else if(a.has(t.name))return a.get(t.name)(t,e);else throw t}))};var y=function(e){return function(r){return e?g(b.then((function(r){return r&&r[e]()})).then((function(e){return r?r(e):e}))):g(b.then((function(e){return r?r(e):e})))}};var v={res:y(null),json:y("json"),blob:y("blob"),formData:y("formData"),arrayBuffer:y("arrayBuffer"),text:y("text"),perfs:function(e){m.then((function(r){return f.observe(r.url,e)}));return v},setTimeout:function(e,r){if(r===void 0){r=u}d.clear();d.ref=setTimeout((function(){return r.abort()}),e);return v},controller:function(){return[u,v]},error:function(e,r){a.set(e,r);return v},badRequest:function(e){return v.error(400,e)},unauthorized:function(e){return v.error(401,e)},forbidden:function(e){return v.error(403,e)},notFound:function(e){return v.error(404,e)},timeout:function(e){return v.error(408,e)},internalError:function(e){return v.error(500,e)},fetchError:function(e){return v.error("__fromFetch",e)},onAbort:function(e){return v.error("AbortError",e)}};return o.reduce((function(r,t){return t(r,e)}),v)};var b=undefined&&undefined.__assign||function(){b=Object.assign||function(e){for(var r,t=1,o=arguments.length;t<o;t++){r=arguments[t];for(var i in r)if(Object.prototype.hasOwnProperty.call(r,i))e[i]=r[i]}return e};return b.apply(this,arguments)};var g=undefined&&undefined.__spreadArray||function(e,r,t){if(t||arguments.length===2)for(var o=0,i=r.length,n;o<i;o++){if(n||!(o in r)){if(!n)n=Array.prototype.slice.call(r,0,o);n[o]=r[o]}}return e.concat(n||Array.prototype.slice.call(r))};var y="application/json";var v="Content-Type";function w(e){var r;if(e===void 0){e={}}return(r=Object.entries(e).find((function(e){var r=e[0];return r.toLowerCase()===v.toLowerCase()})))===null||r===void 0?void 0:r[1]}function k(e){return/^application\/.*json.*/.test(e)}var x=function(){function e(e,r,t,o,i,n){if(t===void 0){t=new Map}if(o===void 0){o=[]}if(i===void 0){i=[]}if(n===void 0){n=[]}this._url=e;this._options=r;this._catchers=t;this._resolvers=o;this._middlewares=i;this._deferredChain=n}e.factory=function(r,t){if(r===void 0){r=""}if(t===void 0){t={}}return new e(r,t)};e.prototype.selfFactory=function(r){var t=r===void 0?{}:r,o=t.url,i=o===void 0?this._url:o,n=t.options,a=n===void 0?this._options:n,s=t.catchers,l=s===void 0?this._catchers:s,c=t.resolvers,u=c===void 0?this._resolvers:c,d=t.middlewares,f=d===void 0?this._middlewares:d,p=t.deferredChain,h=p===void 0?this._deferredChain:p;return new e(i,b({},a),new Map(l),g([],u,true),g([],f,true),g([],h,true))};e.prototype.defaults=function(e,r){if(r===void 0){r=false}c.defaults=r?s(c.defaults,e):e;return this};e.prototype.errorType=function(e){c.errorType=e;return this};e.prototype.polyfills=function(e){c.polyfills=b(b({},c.polyfills),e);return this};e.prototype.url=function(e,r){if(r===void 0){r=false}if(r)return this.selfFactory({url:e});var t=this._url.split("?");return this.selfFactory({url:t.length>1?t[0]+e+"?"+t[1]:this._url+e})};e.prototype.options=function(e,r){if(r===void 0){r=true}return this.selfFactory({options:r?s(this._options,e):e})};e.prototype.query=function(e,r){if(r===void 0){r=false}return this.selfFactory({url:_(this._url,e,r)})};e.prototype.headers=function(e){return this.selfFactory({options:s(this._options,{headers:e||{}})})};e.prototype.accept=function(e){return this.headers({Accept:e})};e.prototype.content=function(e){var r;return this.headers((r={},r[v]=e,r))};e.prototype.auth=function(e){return this.headers({Authorization:e})};e.prototype.catcher=function(e,r){var t=new Map(this._catchers);t.set(e,r);return this.selfFactory({catchers:t})};e.prototype.signal=function(e){return this.selfFactory({options:b(b({},this._options),{signal:e.signal})})};e.prototype.resolve=function(e,r){if(r===void 0){r=false}return this.selfFactory({resolvers:r?[e]:g(g([],this._resolvers,true),[e],false)})};e.prototype.defer=function(e,r){if(r===void 0){r=false}return this.selfFactory({deferredChain:r?[e]:g(g([],this._deferredChain,true),[e],false)})};e.prototype.middlewares=function(e,r){if(r===void 0){r=false}return this.selfFactory({middlewares:r?e:g(g([],this._middlewares,true),e,true)})};e.prototype.method=function(e,r,t){if(r===void 0){r={}}if(t===void 0){t=null}var o=this.options(b(b({},r),{method:e}));var i=w(o._options.headers);var n=typeof t==="object"&&(!o._options.headers||!i||k(i));o=!t?o:n?o.json(t,i):o.body(t);return m(o._deferredChain.reduce((function(e,r){return r(e,e._url,e._options)}),o))};e.prototype.get=function(e){return this.method("GET",e)};e.prototype.delete=function(e){return this.method("DELETE",e)};e.prototype.put=function(e,r){return this.method("PUT",r,e)};e.prototype.post=function(e,r){return this.method("POST",r,e)};e.prototype.patch=function(e,r){return this.method("PATCH",r,e)};e.prototype.head=function(e){return this.method("HEAD",e)};e.prototype.opts=function(e){return this.method("OPTIONS",e)};e.prototype.replay=function(e){return this.method(this._options.method,e)};e.prototype.body=function(e){return this.selfFactory({options:b(b({},this._options),{body:e})})};e.prototype.json=function(e,r){var t=w(this._options.headers);return this.content(r||k(t)&&t||y).body(JSON.stringify(e))};e.prototype.formData=function(e,r){if(r===void 0){r=false}return this.body(j(e,r))};e.prototype.formUrl=function(e){return this.body(typeof e==="string"?e:T(e)).content("application/x-www-form-urlencoded")};return e}();var _=function(e,r,t){var o;if(typeof r==="string"){o=r}else{var i=c.polyfill("URLSearchParams",{instance:true});for(var n in r){if(r[n]instanceof Array){for(var a=0,s=r[n];a<s.length;a++){var l=s[a];i.append(n,l)}}else{i.append(n,r[n])}}o=i.toString()}var u=e.split("?");if(!o)return t?u[0]:e;if(t||u.length<2)return u[0]+"?"+o;return e+"&"+o};function j(e,r,t,o){if(r===void 0){r=false}if(t===void 0){t=c.polyfill("FormData",{instance:true})}if(o===void 0){o=[]}Object.entries(e).forEach((function(e){var i=e[0],n=e[1];var a=o.reduce((function(e,r){return e?"".concat(e,"[").concat(r,"]"):r}),null);a=a?"".concat(a,"[").concat(i,"]"):i;if(n instanceof Array){for(var s=0,l=n;s<l.length;s++){var c=l[s];t.append(a+"[]",c)}}else if(r&&typeof n==="object"&&(!(r instanceof Array)||!r.includes(i))){if(n!==null){j(n,r,t,g(g([],o,true),[i],false))}}else{t.append(a,n)}}));return t}function z(e,r){return encodeURIComponent(e)+"="+encodeURIComponent(typeof r==="object"?JSON.stringify(r):""+r)}function T(e){return Object.keys(e).map((function(r){var t=e[r];if(t instanceof Array){return t.map((function(e){return z(r,e)})).join("&")}return z(r,t)})).join("&")}var q=x.factory;q["default"]=x.factory;var A=["a-b","align-bottom","align-center","align-justify","align-left","align-right","align-top","align-vertically","asterisk","attachment-2","bold","bring-forward","bring-to-front","code-view","delete-column","delete-row","double-quotes-l","double-quotes-r","emphasis-cn","emphasis","english-input","flow-chart","font-color","font-size-2","font-size","format-clear","functions","h-1","h-2","h-3","h-4","h-5","h-6","hashtag","heading","indent-decrease","indent-increase","input-cursor-move","insert-column-left","insert-column-right","insert-row-bottom","insert-row-top","italic","line-height","link-m","link-unlink-m","link-unlink","link","list-check-2","list-check","list-ordered","list-unordered","merge-cells-horizontal","merge-cells-vertical","mind-map","node-tree","number-0","number-1","number-2","number-3","number-4","number-5","number-6","number-7","number-8","number-9","omega","organization-chart","page-separator","paragraph","pinyin-input","question-mark","rounded-corner","safafill","safaline","send-backward","send-to-back","separator","single-quotes-l","single-quotes-r","sort-asc","sort-desc","space","split-cells-horizontal","split-cells-vertical","strikethrough-2","strikethrough","subscript-2","subscript","superscript-2","superscript","table-2","text-direction-l","text-direction-r","text-spacing","text-wrap","text","translate-2","translate","underline","wubi-input"];var F=["24-hours","4k","account-box","account-circle","account-pin-box","account-pin-circle","add-box","add-circle","add","admin","advertisement","airplay","alarm","alarm-warning","album","alert","aliens","alipay","amazon","anchor","ancient-gate","ancient-pavilion","android","angularjs","anticlockwise-2","anticlockwise","app-store","apple","apps-2","apps","archive-drawer","archive","arrow-down-circle","arrow-down","arrow-down-s","arrow-drop-down","arrow-drop-left","arrow-drop-right","arrow-drop-up","arrow-go-back","arrow-go-forward","arrow-left-circle","arrow-left-down","arrow-left","arrow-left-right","arrow-left-s","arrow-left-up","arrow-right-circle","arrow-right-down","arrow-right","arrow-right-s","arrow-right-up","arrow-up-circle","arrow-up-down","arrow-up","arrow-up-s","artboard-2","artboard","article","aspect-ratio","at","attachment","auction","award","baidu","ball-pen","bank-card-2","bank-card","bank","bar-chart-2","bar-chart-box","bar-chart-grouped","bar-chart-horizontal","bar-chart","barcode-box","barcode","barricade","base-station","basketball","battery-2-charge","battery-2","battery-charge","battery","battery-low","battery-saver","battery-share","bear-smile","behance","bell","bike","bilibili","bill","billiards","bit-coin","blaze","bluetooth-connect","bluetooth","blur-off","body-scan","book-2","book-3","book","book-mark","book-open","book-read","booklet","bookmark-2","bookmark-3","bookmark","boxing","braces","brackets","briefcase-2","briefcase-3","briefcase-4","briefcase-5","briefcase","broadcast","brush-2","brush-3","brush-4","brush","bubble-chart","bug-2","bug","building-2","building-3","building-4","building","bus-2","bus","bus-wifi","cactus","cake-2","cake-3","cake","calculator","calendar-2","calendar-check","calendar-event","calendar","calendar-todo","camera-2","camera-3","camera-lens","camera","camera-off","camera-switch","capsule","car","car-washing","caravan","cast","cellphone","celsius","centos","character-recognition","charging-pile-2","charging-pile","chat-1","chat-2","chat-3","chat-4","chat-check","chat-delete","chat-download","chat-follow-up","chat-forward","chat-heart","chat-history","chat-new","chat-off","chat-poll","chat-private","chat-quote","chat-settings","chat-smile-2","chat-smile-3","chat-smile","chat-upload","chat-voice","check-double","check","checkbox-blank-circle","checkbox-blank","checkbox-circle","checkbox-indeterminate","checkbox","checkbox-multiple-blank","checkbox-multiple","china-railway","chrome","clapperboard","clipboard","clockwise-2","clockwise","close-circle","close","closed-captioning","cloud","cloud-off","cloud-windy","cloudy-2","cloudy","code-box","code","code-s","code-s-slash","codepen","coin","coins","collage","command","community","compass-2","compass-3","compass-4","compass-discover","compass","compasses-2","compasses","computer","contacts-book-2","contacts-book","contacts-book-upload","contacts","contrast-2","contrast-drop-2","contrast-drop","contrast","copper-coin","copper-diamond","copyleft","copyright","coreos","coupon-2","coupon-3","coupon-4","coupon-5","coupon","cpu","creative-commons-by","creative-commons","creative-commons-nc","creative-commons-nd","creative-commons-sa","creative-commons-zero","criminal","crop-2","crop","css3","cup","currency","cursor","customer-service-2","customer-service","dashboard-2","dashboard-3","dashboard","database-2","database","delete-back-2","delete-back","delete-bin-2","delete-bin-3","delete-bin-4","delete-bin-5","delete-bin-6","delete-bin-7","delete-bin","device","device-recover","dingding","direction","disc","discord","discuss","dislike","disqus","divide","donut-chart","door-closed","door","door-lock-box","door-lock","door-open","dossier","douban","download-2","download-cloud-2","download-cloud","download","draft","drag-drop","drag-move-2","drag-move","dribbble","drive","drizzle","drop","dropbox","dual-sim-1","dual-sim-2","dv","dvd","e-bike-2","e-bike","earth","earthquake","edge","edit-2","edit-box","edit-circle","edit","eject","emotion-2","emotion-happy","emotion-laugh","emotion","emotion-normal","emotion-sad","emotion-unhappy","empathize","equalizer","eraser","error-warning","evernote","exchange-box","exchange-cny","exchange-dollar","exchange-funds","exchange","external-link","eye-2","eye-close","eye","eye-off","facebook-box","facebook-circle","facebook","fahrenheit","feedback","file-2","file-3","file-4","file-add","file-chart-2","file-chart","file-cloud","file-code","file-copy-2","file-copy","file-damage","file-download","file-edit","file-excel-2","file-excel","file-forbid","file-gif","file-history","file-hwp","file-info","file","file-list-2","file-list-3","file-list","file-lock","file-mark","file-music","file-paper-2","file-paper","file-pdf","file-ppt-2","file-ppt","file-reduce","file-search","file-settings","file-shield-2","file-shield","file-shred","file-text","file-transfer","file-unknow","file-upload","file-user","file-warning","file-word-2","file-word","file-zip","film","filter-2","filter-3","filter","filter-off","find-replace","finder","fingerprint-2","fingerprint","fire","firefox","first-aid-kit","flag-2","flag","flashlight","flask","flight-land","flight-takeoff","flood","flutter","focus-2","focus-3","focus","foggy","folder-2","folder-3","folder-4","folder-5","folder-add","folder-chart-2","folder-chart","folder-download","folder-forbid","folder-history","folder-info","folder-keyhole","folder","folder-lock","folder-music","folder-open","folder-received","folder-reduce","folder-settings","folder-shared","folder-shield-2","folder-shield","folder-transfer","folder-unknow","folder-upload","folder-user","folder-warning","folder-zip","folders","football","footprint","forbid-2","forbid","fridge","fullscreen-exit","fullscreen","function","funds-box","funds","gallery","gallery-upload","game","gamepad","gas-station","gatsby","genderless","ghost-2","ghost","ghost-smile","gift-2","gift","git-branch","git-commit","git-merge","git-pull-request","git-repository-commits","git-repository","git-repository-private","github","gitlab","global","globe","goblet","google","google-play","government","gps","gradienter","grid","group-2","group","guide","hail","hammer","hand-coin","hand-heart","hand-sanitizer","handbag","hard-drive-2","hard-drive","haze-2","haze","hd","headphone","health-book","heart-2","heart-3","heart-add","heart","heart-pulse","hearts","heavy-showers","history","home-2","home-3","home-4","home-5","home-6","home-7","home-8","home-gear","home-heart","home","home-smile-2","home-smile","home-wifi","honor-of-kings","honour","hospital","hotel-bed","hotel","hotspot","hq","html5","ie","image-2","image-add","image-edit","image","inbox-archive","inbox","inbox-unarchive","increase-decrease","indeterminate-circle","information","infrared-thermometer","ink-bottle","input-method","instagram","install","invision","kakao-talk","key-2","key","keyboard-box","keyboard","keynote","knife-blood","knife","landscape","layout-2","layout-3","layout-4","layout-5","layout-6","layout-bottom-2","layout-bottom","layout-column","layout-grid","layout-left-2","layout-left","layout","layout-masonry","layout-right-2","layout-right","layout-row","layout-top-2","layout-top","leaf","lifebuoy","lightbulb-flash","lightbulb","line-chart","line","linkedin-box","linkedin","links","list-settings","live","loader-2","loader-3","loader-4","loader-5","loader","lock-2","lock","lock-password","lock-unlock","login-box","login-circle","logout-box","logout-box-r","logout-circle","logout-circle-r","luggage-cart","luggage-deposit","lungs","mac","macbook","magic","mail-add","mail-check","mail-close","mail-download","mail-forbid","mail","mail-lock","mail-open","mail-send","mail-settings","mail-star","mail-unread","mail-volume","map-2","map","map-pin-2","map-pin-3","map-pin-4","map-pin-5","map-pin-add","map-pin","map-pin-range","map-pin-time","map-pin-user","mark-pen","markdown","markup","mastercard","mastodon","medal-2","medal","medicine-bottle","medium","men","mental-health","menu-2","menu-3","menu-4","menu-5","menu-add","menu-fold","menu","menu-unfold","message-2","message-3","message","messenger","meteor","mic-2","mic","mic-off","mickey","microscope","microsoft","mini-program","mist","money-cny-box","money-cny-circle","money-dollar-box","money-dollar-circle","money-euro-box","money-euro-circle","money-pound-box","money-pound-circle","moon-clear","moon-cloudy","moon-foggy","moon","more-2","more","motorbike","mouse","movie-2","movie","music-2","music","mv","navigation","netease-cloud-music","netflix","newspaper","notification-2","notification-3","notification-4","notification-badge","notification","notification-off","npmjs","numbers","nurse","oil","open-arm","open-source","opera","order-play","outlet-2","outlet","pages","paint-brush","paint","palette","pantone","parent","parentheses","parking-box","parking","passport","patreon","pause-circle","pause","pause-mini","paypal","pen-nib","pencil","pencil-ruler-2","pencil-ruler","percent","phone-camera","phone-find","phone","phone-lock","picture-in-picture-2","picture-in-picture-exit","picture-in-picture","pie-chart-2","pie-chart-box","pie-chart","pin-distance","ping-pong","pinterest","pixelfed","plane","plant","play-circle","play","play-list-2","play-list-add","play-list","play-mini","playstation","plug-2","plug","polaroid-2","polaroid","police-car","price-tag-2","price-tag-3","price-tag","printer-cloud","printer","product-hunt","profile","projector-2","projector","psychotherapy","pulse","pushpin-2","pushpin","qq","qr-code","qr-scan-2","qr-scan","question-answer","question","questionnaire","quill-pen","radar","radio-2","radio-button","radio","rainbow","rainy","reactjs","record-circle","record-mail","recycle","red-packet","reddit","refresh","refund-2","refund","registered","remixicon","remote-control-2","remote-control","repeat-2","repeat","repeat-one","reply-all","reply","reserved","rest-time","restart","restaurant-2","restaurant","rewind","rewind-mini","rhythm","riding","road-map","roadster","robot","rocket-2","rocket","rotate-lock","route","router","rss","ruler-2","ruler","run","safe-2","safe","sailboat","save-2","save-3","save","scales-2","scales-3","scales","scan-2","scan","scissors-2","scissors-cut","scissors","screenshot-2","screenshot","sd-card","sd-card-mini","search-2","search-eye","search","secure-payment","seedling","send-plane-2","send-plane","sensor","server","service","settings-2","settings-3","settings-4","settings-5","settings-6","settings","shape-2","shape","share-box","share-circle","share-forward-2","share-forward-box","share-forward","share","shield-check","shield-cross","shield-flash","shield-keyhole","shield","shield-star","shield-user","ship-2","ship","shirt","shopping-bag-2","shopping-bag-3","shopping-bag","shopping-basket-2","shopping-basket","shopping-cart-2","shopping-cart","showers","shuffle","shut-down","side-bar","signal-tower","signal-wifi-1","signal-wifi-2","signal-wifi-3","signal-wifi-error","signal-wifi","signal-wifi-off","sim-card-2","sim-card","sip","skip-back","skip-back-mini","skip-forward","skip-forward-mini","skull-2","skull","skype","slack","slice","slideshow-2","slideshow-3","slideshow-4","slideshow","smartphone","snapchat","snowy","sound-module","soundcloud","space-ship","spam-2","spam-3","spam","speaker-2","speaker-3","speaker","spectrum","speed","speed-mini","spotify","spy","stack","stack-overflow","stackshare","star-half","star-half-s","star","star-s","star-smile","steam","steering-2","steering","stethoscope","sticky-note-2","sticky-note","stock","stop-circle","stop","stop-mini","store-2","store-3","store","subtract","subway","subway-wifi","suitcase-2","suitcase-3","suitcase","sun-cloudy","sun-foggy","sun","surgical-mask","surround-sound","survey","swap-box","swap","switch","sword","syringe","t-box","t-shirt-2","t-shirt-air","t-shirt","table-alt","table","tablet","takeaway","taobao","tape","task","taxi","taxi-wifi","team","telegram","temp-cold","temp-hot","terminal-box","terminal","terminal-window","test-tube","thermometer","thumb-down","thumb-up","thunderstorms","ticket-2","ticket","time","timer-2","timer-flash","timer","todo","toggle","tools","tornado","trademark","traffic-light","train","train-wifi","travesti","treasure-map","trello","trophy","truck","tumblr","tv-2","tv","twitch","twitter","typhoon","u-disk","ubuntu","umbrella","uninstall","unsplash","upload-2","upload-cloud-2","upload-cloud","upload","usb","user-2","user-3","user-4","user-5","user-6","user-add","user-follow","user-heart","user","user-location","user-received-2","user-received","user-search","user-settings","user-shared-2","user-shared","user-smile","user-star","user-unfollow","user-voice","video-add","video-chat","video-download","video","video-upload","vidicon-2","vidicon","vimeo","vip-crown-2","vip-crown","vip-diamond","vip","virus","visa","voice-recognition","voiceprint","volume-down","volume-mute","volume-off-vibrate","volume-up","volume-vibrate","vuejs","walk","wallet-2","wallet-3","wallet","water-flash","webcam","wechat-2","wechat","wechat-pay","weibo","whatsapp","wheelchair","wifi","wifi-off","window-2","window","windows","windy","wireless-charging","women","xbox","xing","youtube","zcool","zhihu","zoom-in","zoom-out","zzz"];var O=function(e){return A.includes(e)};var C=function(e){return F.includes(e)};var E="@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.sc-stencila-icon-default-h{--height:1.25em;--width:1.25em;color:currentColor;display:inline-block;line-height:1;vertical-align:middle}.sc-stencila-icon-default-h svg.sc-stencila-icon-default{fill:currentColor;display:block;height:auto;height:var(--height);max-height:100%;position:relative;width:100%;width:var(--width)}[icon^=loader].sc-stencila-icon-default-h svg.sc-stencila-icon-default{-webkit-animation:spin 3s linear infinite;animation:spin 3s linear infinite}";var P="@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.sc-stencila-icon-material-h{--height:1.25em;--width:1.25em;color:currentColor;display:inline-block;line-height:1;vertical-align:middle}.sc-stencila-icon-material-h svg.sc-stencila-icon-material{fill:currentColor;stroke-linecap:butt;display:block;height:auto;height:var(--height);max-height:100%;position:relative;width:100%;width:var(--width)}[icon^=loader].sc-stencila-icon-material-h svg.sc-stencila-icon-material{-webkit-animation:spin 3s linear infinite;animation:spin 3s linear infinite}";var S=false;var R=function(){return document.getElementsByTagName("html")[0].getAttribute("data-icon-style")==="fill"?"fill":"line"};var D=e("stencila_icon",function(){function e(e){var o=this;r(this,e);this.iconStyle=R();this.iconUrl=t("./assets/remixicon.symbol.svg");this.fetchIcons=function(){return __awaiter(o,void 0,void 0,(function(){var e,r;return __generator(this,(function(t){switch(t.label){case 0:return[4,q().url(this.iconUrl).options({credentials:"omit",mode:"cors"}).get().text()];case 1:e=t.sent();r=document.createElement("div");r.innerHTML=e;document.body.append(r);return[2]}}))}))}}e.prototype.componentWillLoad=function(){if(!S){S=true;this.fetchIcons().catch((function(e){console.log("Failed to load icons",e)}))}};e.prototype.render=function(){var e=C(this.icon)?"#ri-".concat(this.icon,"-").concat(this.iconStyle):O(this.icon)?"#ri-".concat(this.icon):this.icon;return o(i,{icon:this.icon,"aria-hidden":"true"},o("svg",{style:{fill:this.color!==undefined?"var(--color-".concat(this.color,")"):undefined}},o("use",{href:e})))};Object.defineProperty(e,"assetsDirs",{get:function(){return["assets"]},enumerable:false,configurable:true});return e}());D.style={default:E,material:P}}}}));
//# sourceMappingURL=p-8155ecd4.system.entry.js.map