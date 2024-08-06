import{L as t,d as e,i,N as s,s as r,T as h,a as n,b as l,l as a,P as f,c as u,g as o,e as c,t as p}from"./p-39bf90d7.js";import"./p-42c7aa22.js";import"./p-725b0d42.js";import"./p-f10a134c.js";function d(t,e,i,s=0,r=0){if(e==null){e=t.search(/[^\s\u00a0]/);if(e==-1)e=t.length}let h=r;for(let n=s;n<e;n++){if(t.charCodeAt(n)==9)h+=i-h%i;else h++}return h}class b{constructor(t,e,i){this.string=t;this.tabSize=e;this.indentUnit=i;this.pos=0;this.start=0;this.lastColumnPos=0;this.lastColumnValue=0}eol(){return this.pos>=this.string.length}sol(){return this.pos==0}peek(){return this.string.charAt(this.pos)||undefined}next(){if(this.pos<this.string.length)return this.string.charAt(this.pos++)}eat(t){let e=this.string.charAt(this.pos);let i;if(typeof t=="string")i=e==t;else i=e&&(t instanceof RegExp?t.test(e):t(e));if(i){++this.pos;return e}}eatWhile(t){let e=this.pos;while(this.eat(t)){}return this.pos>e}eatSpace(){let t=this.pos;while(/[\s\u00a0]/.test(this.string.charAt(this.pos)))++this.pos;return this.pos>t}skipToEnd(){this.pos=this.string.length}skipTo(t){let e=this.string.indexOf(t,this.pos);if(e>-1){this.pos=e;return true}}backUp(t){this.pos-=t}column(){if(this.lastColumnPos<this.start){this.lastColumnValue=d(this.string,this.start,this.tabSize,this.lastColumnPos,this.lastColumnValue);this.lastColumnPos=this.start}return this.lastColumnValue}indentation(){return d(this.string,null,this.tabSize)}match(t,e,i){if(typeof t=="string"){let s=t=>i?t.toLowerCase():t;let r=this.string.substr(this.pos,t.length);if(s(r)==s(t)){if(e!==false)this.pos+=t.length;return true}else return null}else{let i=this.string.slice(this.pos).match(t);if(i&&i.index>0)return null;if(i&&e!==false)this.pos+=i[0].length;return i}}current(){return this.string.slice(this.start,this.pos)}}function m(t){return{token:t.token,blankLine:t.blankLine||(()=>{}),startState:t.startState||(()=>true),copyState:t.copyState||w,indent:t.indent||(()=>null),languageData:t.languageData||{},tokenTable:t.tokenTable||x}}function w(t){if(typeof t!="object")return t;let e={};for(let i in t){let s=t[i];e[i]=s instanceof Array?s.slice():s}return e}class g extends t{constructor(t){let r=e(t.languageData);let h=m(t),n;let l=new class extends f{createParse(t,e,i){return new N(n,t,e,i)}};super(r,l,P(r),[i.of(((t,e)=>this.getIndent(t,e)))]);n=this;this.streamParser=h;this.stateAfter=new s({perNode:true});this.tokenTable=t.tokenTable?new O(h.tokenTable):A}static define(t){return new g(t)}getIndent(t,e){let i=r(t.state),s=i.resolve(e);while(s&&s.type!=this.topNode)s=s.parent;if(!s)return null;let h=k(this,i,0,s.from,e),n,l;if(h){l=h.state;n=h.pos+1}else{l=this.streamParser.startState(t.unit);n=0}if(e-n>1e4)return null;while(n<e){let i=t.state.doc.lineAt(n),s=Math.min(e,i.to);if(i.length){let e=new b(i.text,t.state.tabSize,t.unit);while(e.pos<s-i.from)j(this.streamParser.token,e,l)}else{this.streamParser.blankLine(l,t.unit)}if(s==e)break;n=i.to+1}let{text:a}=t.lineAt(e);return this.streamParser.indent(l,/^\s*(.*)/.exec(a)[1],t)}get allowsNesting(){return false}}function k(t,e,i,s,r){let n=i>=s&&i+e.length<=r&&e.prop(t.stateAfter);if(n)return{state:t.streamParser.copyState(n),pos:i+e.length};for(let l=e.children.length-1;l>=0;l--){let n=e.children[l],a=i+e.positions[l];let f=n instanceof h&&a<r&&k(t,n,a,s,r);if(f)return f}return null}function v(t,e,i,s,r){if(r&&i<=0&&s>=e.length)return e;if(!r&&e.type==t.topNode)r=true;for(let n=e.children.length-1;n>=0;n--){let l=e.positions[n],a=e.children[n],f;if(l<s&&a instanceof h){if(!(f=v(t,a,i-l,s-l,r)))break;return!r?f:new h(e.type,e.children.slice(0,n).concat(f),e.positions.slice(0,n+1),l+f.length)}}return null}function y(t,e,i,s){for(let r of e){let e=r.from+(r.openStart?25:0),s=r.to-(r.openEnd?25:0);let h=e<=i&&s>i&&k(t,r.tree,0-r.offset,i,s),n;if(h&&(n=v(t,r.tree,i+r.offset,h.pos+r.offset,false)))return{state:h.state,tree:n}}return{state:t.streamParser.startState(s?o(s):4),tree:h.empty}}class N{constructor(t,e,i,s){this.lang=t;this.input=e;this.fragments=i;this.ranges=s;this.stoppedAt=null;this.chunks=[];this.chunkPos=[];this.chunk=[];this.chunkReused=undefined;this.rangeIndex=0;this.to=s[s.length-1].to;let r=u.get(),h=s[0].from;let{state:n,tree:l}=y(t,i,h,r===null||r===void 0?void 0:r.state);this.state=n;this.parsedPos=this.chunkStart=h+l.length;for(let a=0;a<l.children.length;a++){this.chunks.push(l.children[a]);this.chunkPos.push(l.positions[a])}if(r&&this.parsedPos<r.viewport.from-1e5){this.state=this.lang.streamParser.startState(o(r.state));r.skipUntilInView(this.parsedPos,r.viewport.from);this.parsedPos=r.viewport.from}}advance(){let t=u.get();let e=this.stoppedAt==null?this.to:Math.min(this.to,this.stoppedAt);let i=Math.min(e,this.chunkStart+2048);if(t)i=Math.min(i,t.viewport.to);while(this.parsedPos<i)this.parseLine(t);if(this.chunkStart<this.parsedPos)this.finishChunk();if(this.parsedPos>=e)return this.finish();if(t&&this.parsedPos>=t.viewport.to){t.skipUntilInView(this.parsedPos,e);return this.finish()}return null}stopAt(t){this.stoppedAt=t}lineAfter(t){let e=this.input.chunk(t);if(!this.input.lineChunks){let t=e.indexOf("\n");if(t>-1)e=e.slice(0,t)}else if(e=="\n"){e=""}return t+e.length<=this.to?e:e.slice(0,this.to-t)}nextLine(){let t=this.parsedPos,e=this.lineAfter(t),i=t+e.length;for(let s=this.rangeIndex;;){let t=this.ranges[s].to;if(t>=i)break;e=e.slice(0,t-(i-e.length));s++;if(s==this.ranges.length)break;let r=this.ranges[s].from;let h=this.lineAfter(r);e+=h;i=r+h.length}return{line:e,end:i}}skipGapsTo(t,e,i){for(;;){let s=this.ranges[this.rangeIndex].to,r=t+e;if(i>0?s>r:s>=r)break;let h=this.ranges[++this.rangeIndex].from;e+=h-s}return e}emitToken(t,e,i,s,r){if(this.ranges.length>1){r=this.skipGapsTo(e,r,1);e+=r;let t=this.chunk.length;r=this.skipGapsTo(i,r,-1);i+=r;s+=this.chunk.length-t}this.chunk.push(t,e,i,s);return r}parseLine(t){let{line:e,end:i}=this.nextLine(),s=0,{streamParser:r}=this.lang;let h=new b(e,t?t.state.tabSize:4,t?o(t.state):2);if(h.eol()){r.blankLine(this.state,h.indentUnit)}else{while(!h.eol()){let t=j(r.token,h,this.state);if(t)s=this.emitToken(this.lang.tokenTable.resolve(t),this.parsedPos+h.start,this.parsedPos+h.pos,4,s);if(h.start>1e4)break}}this.parsedPos=i;if(this.parsedPos<this.to)this.parsedPos++}finishChunk(){let t=h.build({buffer:this.chunk,start:this.chunkStart,length:this.parsedPos-this.chunkStart,nodeSet:L,topID:0,maxBufferLength:2048,reused:this.chunkReused});t=new h(t.type,t.children,t.positions,t.length,[[this.lang.stateAfter,this.lang.streamParser.copyState(this.state)]]);this.chunks.push(t);this.chunkPos.push(this.chunkStart-this.ranges[0].from);this.chunk=[];this.chunkReused=undefined;this.chunkStart=this.parsedPos}finish(){return new h(this.lang.topNode,this.chunks,this.chunkPos,this.parsedPos-this.ranges[0].from).balance()}}function j(t,e,i){e.start=e.pos;for(let s=0;s<10;s++){let s=t(e,i);if(e.pos>e.start)return s}throw new Error("Stream parser failed to advance stream.")}const x=Object.create(null);const T=[n.none];const L=new c(T);const M=[];const S=Object.create(null);for(let[$,I]of[["variable","variableName"],["variable-2","variableName.special"],["string-2","string.special"],["def","variableName.definition"],["tag","typeName"],["attribute","propertyName"],["type","typeName"],["builtin","variableName.standard"],["qualifier","modifier"],["error","invalid"],["header","heading"],["property","propertyName"]])S[$]=E(x,I);class O{constructor(t){this.extra=t;this.table=Object.assign(Object.create(null),S)}resolve(t){return!t?0:this.table[t]||(this.table[t]=E(this.extra,t))}}const A=new O(x);function D(t,e){if(M.indexOf(t)>-1)return;M.push(t);console.warn(e)}function E(t,e){let i=null;for(let h of e.split(".")){let e=t[h]||p[h];if(!e){D(h,`Unknown highlighting tag ${h}`)}else if(typeof e=="function"){if(!i)D(h,`Modifier ${h} used at start of tag`);else i=e(i)}else{if(i)D(h,`Tag ${h} used as modifier`);else i=e}}if(!i)return 0;let s=e.replace(/ /g,"_"),r=n.define({id:T.length,name:s,props:[l({[s]:i})]});T.push(r);return r.id}function P(t){let e=n.define({id:T.length,name:"Document",props:[a.add((()=>t))]});T.push(e);return e}export{g as StreamLanguage,b as StringStream};
//# sourceMappingURL=p-1bc2036b.js.map