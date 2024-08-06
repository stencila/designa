var __extends=this&&this.__extends||function(){var t=function(e,s){t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s))t[s]=e[s]};return t(e,s)};return function(e,s){if(typeof s!=="function"&&s!==null)throw new TypeError("Class extends value "+String(s)+" is not a constructor or null");t(e,s);function r(){this.constructor=e}e.prototype=s===null?Object.create(s):(r.prototype=s.prototype,new r)}}();System.register(["./p-2e66c77c.system.js"],(function(t){"use strict";var e,s,r,i,n,o;return{setters:[function(t){e=t.P;s=t.e;r=t.a;i=t.D;n=t.N;o=t.T}],execute:function(){var a=function(){function t(t,e,s,r,i,n,o,a,h,f,u){if(f===void 0){f=0}this.p=t;this.stack=e;this.state=s;this.reducePos=r;this.pos=i;this.score=n;this.buffer=o;this.bufferBase=a;this.curContext=h;this.lookAhead=f;this.parent=u}t.prototype.toString=function(){return"[".concat(this.stack.filter((function(t,e){return e%3==0})).concat(this.state),"]@").concat(this.pos).concat(this.score?"!"+this.score:"")};t.start=function(e,s,r){if(r===void 0){r=0}var i=e.parser.context;return new t(e,[],s,r,r,0,[],0,i?new h(i,i.start):null,0,null)};Object.defineProperty(t.prototype,"context",{get:function(){return this.curContext?this.curContext.context:null},enumerable:false,configurable:true});t.prototype.pushState=function(t,e){this.stack.push(this.state,e,this.bufferBase+this.buffer.length);this.state=t};t.prototype.reduce=function(t){var e=t>>19,s=t&65535;var r=this.p.parser;var i=r.dynamicPrecedence(s);if(i)this.score+=i;if(e==0){this.pushState(r.getGoto(this.state,s,true),this.reducePos);if(s<r.minRepeatTerm)this.storeNode(s,this.reducePos,this.reducePos,4,true);this.reduceContext(s,this.reducePos);return}var n=this.stack.length-(e-1)*3-(t&262144?6:0);var o=this.stack[n-2];var a=this.stack[n-1],h=this.bufferBase+this.buffer.length-a;if(s<r.minRepeatTerm||t&131072){var f=r.stateFlag(this.state,1)?this.pos:this.reducePos;this.storeNode(s,o,f,h+4,true)}if(t&262144){this.state=this.stack[n]}else{var u=this.stack[n-3];this.state=r.getGoto(u,s,true)}while(this.stack.length>n)this.stack.pop();this.reduceContext(s,o)};t.prototype.storeNode=function(t,e,s,r,i){if(r===void 0){r=4}if(i===void 0){i=false}if(t==0){var n=this,o=this.buffer.length;if(o==0&&n.parent){o=n.bufferBase-n.parent.bufferBase;n=n.parent}if(o>0&&n.buffer[o-4]==0&&n.buffer[o-1]>-1){if(e==s)return;if(n.buffer[o-2]>=e){n.buffer[o-2]=s;return}}}if(!i||this.pos==s){this.buffer.push(t,e,s,r)}else{var a=this.buffer.length;if(a>0&&this.buffer[a-4]!=0)while(a>0&&this.buffer[a-2]>s){this.buffer[a]=this.buffer[a-4];this.buffer[a+1]=this.buffer[a-3];this.buffer[a+2]=this.buffer[a-2];this.buffer[a+3]=this.buffer[a-1];a-=4;if(r>4)r-=4}this.buffer[a]=t;this.buffer[a+1]=e;this.buffer[a+2]=s;this.buffer[a+3]=r}};t.prototype.shift=function(t,e,s){var r=this.pos;if(t&131072){this.pushState(t&65535,this.pos)}else if((t&262144)==0){var i=t,n=this.p.parser;if(s>this.pos||e<=n.maxNode){this.pos=s;if(!n.stateFlag(i,1))this.reducePos=s}this.pushState(i,r);this.shiftContext(e,r);if(e<=n.maxNode)this.buffer.push(e,r,s,4)}else{this.pos=s;this.shiftContext(e,r);if(e<=this.p.parser.maxNode)this.buffer.push(e,r,s,4)}};t.prototype.apply=function(t,e,s){if(t&65536)this.reduce(t);else this.shift(t,e,s)};t.prototype.useNode=function(t,e){var s=this.p.reused.length-1;if(s<0||this.p.reused[s]!=t){this.p.reused.push(t);s++}var r=this.pos;this.reducePos=this.pos=r+t.length;this.pushState(e,r);this.buffer.push(s,r,this.reducePos,-1);if(this.curContext)this.updateContext(this.curContext.tracker.reuse(this.curContext.context,t,this,this.p.stream.reset(this.pos-t.length)))};t.prototype.split=function(){var e=this;var s=e.buffer.length;while(s>0&&e.buffer[s-2]>e.reducePos)s-=4;var r=e.buffer.slice(s),i=e.bufferBase+s;while(e&&i==e.bufferBase)e=e.parent;return new t(this.p,this.stack.slice(),this.state,this.reducePos,this.pos,this.score,r,i,this.curContext,this.lookAhead,e)};t.prototype.recoverByDelete=function(t,e){var s=t<=this.p.parser.maxNode;if(s)this.storeNode(t,this.pos,e,4);this.storeNode(0,this.pos,e,s?8:4);this.pos=this.reducePos=e;this.score-=190};t.prototype.canShift=function(t){for(var e=new u(this);;){var s=this.p.parser.stateSlot(e.state,4)||this.p.parser.hasAction(e.state,t);if((s&65536)==0)return true;if(s==0)return false;e.reduce(s)}};t.prototype.recoverByInsert=function(t){if(this.stack.length>=300)return[];var e=this.p.parser.nextStates(this.state);if(e.length>4<<1||this.stack.length>=120){var s=[];for(var r=0,i=void 0;r<e.length;r+=2){if((i=e[r+1])!=this.state&&this.p.parser.hasAction(i,t))s.push(e[r],i)}if(this.stack.length<120){var n=function(t){var r=e[t+1];if(!s.some((function(t,e){return e&1&&t==r})))s.push(e[t],r)};for(var r=0;s.length<4<<1&&r<e.length;r+=2){n(r)}}e=s}var o=[];for(var r=0;r<e.length&&o.length<4;r+=2){var i=e[r+1];if(i==this.state)continue;var a=this.split();a.storeNode(0,a.pos,a.pos,4,true);a.pushState(i,this.pos);a.shiftContext(e[r],this.pos);a.score-=200;o.push(a)}return o};t.prototype.forceReduce=function(){var t=this.p.parser.stateSlot(this.state,5);if((t&65536)==0)return false;var e=this.p.parser;if(!e.validAction(this.state,t)){var s=t>>19,r=t&65535;var i=this.stack.length-s*3;if(i<0||e.getGoto(this.stack[i],r,false)<0)return false;this.storeNode(0,this.reducePos,this.reducePos,4,true);this.score-=100}this.reduce(t);return true};t.prototype.forceAll=function(){while(!this.p.parser.stateFlag(this.state,2)){if(!this.forceReduce()){this.storeNode(0,this.pos,this.pos,4,true);break}}return this};Object.defineProperty(t.prototype,"deadEnd",{get:function(){if(this.stack.length!=3)return false;var t=this.p.parser;return t.data[t.stateSlot(this.state,1)]==65535&&!t.stateSlot(this.state,4)},enumerable:false,configurable:true});t.prototype.restart=function(){this.state=this.stack[0];this.stack.length=0};t.prototype.sameState=function(t){if(this.state!=t.state||this.stack.length!=t.stack.length)return false;for(var e=0;e<this.stack.length;e+=3)if(this.stack[e]!=t.stack[e])return false;return true};Object.defineProperty(t.prototype,"parser",{get:function(){return this.p.parser},enumerable:false,configurable:true});t.prototype.dialectEnabled=function(t){return this.p.parser.dialect.flags[t]};t.prototype.shiftContext=function(t,e){if(this.curContext)this.updateContext(this.curContext.tracker.shift(this.curContext.context,t,this,this.p.stream.reset(e)))};t.prototype.reduceContext=function(t,e){if(this.curContext)this.updateContext(this.curContext.tracker.reduce(this.curContext.context,t,this,this.p.stream.reset(e)))};t.prototype.emitContext=function(){var t=this.buffer.length-1;if(t<0||this.buffer[t]!=-3)this.buffer.push(this.curContext.hash,this.reducePos,this.reducePos,-3)};t.prototype.emitLookAhead=function(){var t=this.buffer.length-1;if(t<0||this.buffer[t]!=-4)this.buffer.push(this.lookAhead,this.reducePos,this.reducePos,-4)};t.prototype.updateContext=function(t){if(t!=this.curContext.context){var e=new h(this.curContext.tracker,t);if(e.hash!=this.curContext.hash)this.emitContext();this.curContext=e}};t.prototype.setLookAhead=function(t){if(t>this.lookAhead){this.emitLookAhead();this.lookAhead=t}};t.prototype.close=function(){if(this.curContext&&this.curContext.tracker.strict)this.emitContext();if(this.lookAhead>0)this.emitLookAhead()};return t}();var h=function(){function t(t,e){this.tracker=t;this.context=e;this.hash=t.strict?t.hash(e):0}return t}();var f;(function(t){t[t["Insert"]=200]="Insert";t[t["Delete"]=190]="Delete";t[t["Reduce"]=100]="Reduce";t[t["MaxNext"]=4]="MaxNext";t[t["MaxInsertStackDepth"]=300]="MaxInsertStackDepth";t[t["DampenInsertStackDepth"]=120]="DampenInsertStackDepth"})(f||(f={}));var u=function(){function t(t){this.start=t;this.state=t.state;this.stack=t.stack;this.base=this.stack.length}t.prototype.reduce=function(t){var e=t&65535,s=t>>19;if(s==0){if(this.stack==this.start.stack)this.stack=this.stack.slice();this.stack.push(this.state,0,0);this.base+=3}else{this.base-=(s-1)*3}var r=this.start.p.parser.getGoto(this.stack[this.base-3],e,true);this.state=r};return t}();var c=function(){function t(t,e,s){this.stack=t;this.pos=e;this.index=s;this.buffer=t.buffer;if(this.index==0)this.maybeNext()}t.create=function(e,s){if(s===void 0){s=e.bufferBase+e.buffer.length}return new t(e,s,s-e.bufferBase)};t.prototype.maybeNext=function(){var t=this.stack.parent;if(t!=null){this.index=this.stack.bufferBase-t.bufferBase;this.stack=t;this.buffer=t.buffer}};Object.defineProperty(t.prototype,"id",{get:function(){return this.buffer[this.index-4]},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"start",{get:function(){return this.buffer[this.index-3]},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"end",{get:function(){return this.buffer[this.index-2]},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"size",{get:function(){return this.buffer[this.index-1]},enumerable:false,configurable:true});t.prototype.next=function(){this.index-=4;this.pos-=4;if(this.index==0)this.maybeNext()};t.prototype.fork=function(){return new t(this.stack,this.pos,this.index)};return t}();var p=function(){function t(){this.start=-1;this.value=-1;this.end=-1;this.extended=-1;this.lookAhead=0;this.mask=0;this.context=0}return t}();var l=new p;var d=function(){function t(t,e){this.input=t;this.ranges=e;this.chunk="";this.chunkOff=0;this.chunk2="";this.chunk2Pos=0;this.next=-1;this.token=l;this.rangeIndex=0;this.pos=this.chunkPos=e[0].from;this.range=e[0];this.end=e[e.length-1].to;this.readNext()}t.prototype.resolveOffset=function(t,e){var s=this.range,r=this.rangeIndex;var i=this.pos+t;while(i<s.from){if(!r)return null;var n=this.ranges[--r];i-=s.from-n.to;s=n}while(e<0?i>s.to:i>=s.to){if(r==this.ranges.length-1)return null;var n=this.ranges[++r];i+=n.from-s.to;s=n}return i};t.prototype.peek=function(t){var e=this.chunkOff+t,s,r;if(e>=0&&e<this.chunk.length){s=this.pos+t;r=this.chunk.charCodeAt(e)}else{var i=this.resolveOffset(t,1);if(i==null)return-1;s=i;if(s>=this.chunk2Pos&&s<this.chunk2Pos+this.chunk2.length){r=this.chunk2.charCodeAt(s-this.chunk2Pos)}else{var n=this.rangeIndex,o=this.range;while(o.to<=s)o=this.ranges[++n];this.chunk2=this.input.chunk(this.chunk2Pos=s);if(s+this.chunk2.length>o.to)this.chunk2=this.chunk2.slice(0,o.to-s);r=this.chunk2.charCodeAt(0)}}if(s>=this.token.lookAhead)this.token.lookAhead=s+1;return r};t.prototype.acceptToken=function(t,e){if(e===void 0){e=0}var s=e?this.resolveOffset(e,-1):this.pos;if(s==null||s<this.token.start)throw new RangeError("Token end out of bounds");this.token.value=t;this.token.end=s};t.prototype.getChunk=function(){if(this.pos>=this.chunk2Pos&&this.pos<this.chunk2Pos+this.chunk2.length){var t=this,e=t.chunk,s=t.chunkPos;this.chunk=this.chunk2;this.chunkPos=this.chunk2Pos;this.chunk2=e;this.chunk2Pos=s;this.chunkOff=this.pos-this.chunkPos}else{this.chunk2=this.chunk;this.chunk2Pos=this.chunkPos;var r=this.input.chunk(this.pos);var i=this.pos+r.length;this.chunk=i>this.range.to?r.slice(0,this.range.to-this.pos):r;this.chunkPos=this.pos;this.chunkOff=0}};t.prototype.readNext=function(){if(this.chunkOff>=this.chunk.length){this.getChunk();if(this.chunkOff==this.chunk.length)return this.next=-1}return this.next=this.chunk.charCodeAt(this.chunkOff)};t.prototype.advance=function(t){if(t===void 0){t=1}this.chunkOff+=t;while(this.pos+t>=this.range.to){if(this.rangeIndex==this.ranges.length-1)return this.setDone();t-=this.range.to-this.pos;this.range=this.ranges[++this.rangeIndex];this.pos=this.range.from}this.pos+=t;if(this.pos>=this.token.lookAhead)this.token.lookAhead=this.pos+1;return this.readNext()};t.prototype.setDone=function(){this.pos=this.chunkPos=this.end;this.range=this.ranges[this.rangeIndex=this.ranges.length-1];this.chunk="";return this.next=-1};t.prototype.reset=function(t,e){if(e){this.token=e;e.start=t;e.lookAhead=t+1;e.value=e.extended=-1}else{this.token=l}if(this.pos!=t){this.pos=t;if(t==this.end){this.setDone();return this}while(t<this.range.from)this.range=this.ranges[--this.rangeIndex];while(t>=this.range.to)this.range=this.ranges[++this.rangeIndex];if(t>=this.chunkPos&&t<this.chunkPos+this.chunk.length){this.chunkOff=t-this.chunkPos}else{this.chunk="";this.chunkOff=0}this.readNext()}return this};t.prototype.read=function(t,e){if(t>=this.chunkPos&&e<=this.chunkPos+this.chunk.length)return this.chunk.slice(t-this.chunkPos,e-this.chunkPos);if(t>=this.chunk2Pos&&e<=this.chunk2Pos+this.chunk2.length)return this.chunk2.slice(t-this.chunk2Pos,e-this.chunk2Pos);if(t>=this.range.from&&e<=this.range.to)return this.input.read(t,e);var s="";for(var r=0,i=this.ranges;r<i.length;r++){var n=i[r];if(n.from>=e)break;if(n.to>t)s+=this.input.read(Math.max(n.from,t),Math.min(n.to,e))}return s};return t}();var v=function(){function t(t,e){this.data=t;this.id=e}t.prototype.token=function(t,e){g(this.data,t,e,this.id)};return t}();v.prototype.contextual=v.prototype.fallback=v.prototype.extend=false;var k=function(){function t(t,e){if(e===void 0){e={}}this.token=t;this.contextual=!!e.contextual;this.fallback=!!e.fallback;this.extend=!!e.extend}return t}();t("E",k);function g(t,e,s,r){var i=0,n=1<<r,o=s.p.parser,a=o.dialect;t:for(;;){if((n&t[i])==0)break;var h=t[i+1];for(var f=i+3;f<h;f+=2)if((t[f+1]&n)>0){var u=t[f];if(a.allows(u)&&(e.token.value==-1||e.token.value==u||o.overrides(u,e.token.value))){e.acceptToken(u);break}}for(var c=e.next,p=0,l=t[i+2];p<l;){var d=p+l>>1;var v=h+d+(d<<1);var k=t[v],g=t[v+1];if(c<k)l=d;else if(c>=g)p=d+1;else{i=t[v+2];e.advance();continue t}}break}}function m(t,e){if(e===void 0){e=Uint16Array}if(typeof t!="string")return t;var s=null;for(var r=0,i=0;r<t.length;){var n=0;for(;;){var o=t.charCodeAt(r++),a=false;if(o==126){n=65535;break}if(o>=92)o--;if(o>=34)o--;var h=o-32;if(h>=46){h-=46;a=true}n+=h;if(a)break;n*=46}if(s)s[i++]=n;else s=new e(n)}return s}var x=typeof process!="undefined"&&/\bparse\b/.test(process.env.LOG);var b=null;var y;(function(t){t[t["Margin"]=25]="Margin"})(y||(y={}));function P(t,e,s){var r=t.fullCursor();r.moveTo(e);for(;;){if(!(s<0?r.childBefore(e):r.childAfter(e)))for(;;){if((s<0?r.to<e:r.from>e)&&!r.type.isError)return s<0?Math.max(0,Math.min(r.to-1,e-25)):Math.min(t.length,Math.max(r.from+1,e+25));if(s<0?r.prevSibling():r.nextSibling())break;if(!r.parent())return s<0?0:t.length}}}var S=function(){function t(t,e){this.fragments=t;this.nodeSet=e;this.i=0;this.fragment=null;this.safeFrom=-1;this.safeTo=-1;this.trees=[];this.start=[];this.index=[];this.nextFragment()}t.prototype.nextFragment=function(){var t=this.fragment=this.i==this.fragments.length?null:this.fragments[this.i++];if(t){this.safeFrom=t.openStart?P(t.tree,t.from+t.offset,1)-t.offset:t.from;this.safeTo=t.openEnd?P(t.tree,t.to+t.offset,-1)-t.offset:t.to;while(this.trees.length){this.trees.pop();this.start.pop();this.index.pop()}this.trees.push(t.tree);this.start.push(-t.offset);this.index.push(0);this.nextStart=this.safeFrom}else{this.nextStart=1e9}};t.prototype.nodeAt=function(t){if(t<this.nextStart)return null;while(this.fragment&&this.safeTo<=t)this.nextFragment();if(!this.fragment)return null;for(;;){var e=this.trees.length-1;if(e<0){this.nextFragment();return null}var s=this.trees[e],r=this.index[e];if(r==s.children.length){this.trees.pop();this.start.pop();this.index.pop();continue}var i=s.children[r];var a=this.start[e]+s.positions[r];if(a>t){this.nextStart=a;return null}if(i instanceof o){if(a==t){if(a<this.safeFrom)return null;var h=a+i.length;if(h<=this.safeTo){var f=i.prop(n.lookAhead);if(!f||h+f<this.fragment.to)return i}}this.index[e]++;if(a+i.length>=Math.max(this.safeFrom,t)){this.trees.push(i);this.start.push(a);this.index.push(0)}}else{this.index[e]++;this.nextStart=a+i.length}}};return t}();var w=function(){function t(t,e){this.stream=e;this.tokens=[];this.mainToken=null;this.actions=[];this.tokens=t.tokenizers.map((function(t){return new p}))}t.prototype.getActions=function(t){var e=0;var s=null;var r=t.p.parser,i=r.tokenizers;var n=r.stateSlot(t.state,3);var o=t.curContext?t.curContext.hash:0;var a=0;for(var h=0;h<i.length;h++){if((1<<h&n)==0)continue;var f=i[h],u=this.tokens[h];if(s&&!f.fallback)continue;if(f.contextual||u.start!=t.pos||u.mask!=n||u.context!=o){this.updateCachedToken(u,f,t);u.mask=n;u.context=o}if(u.lookAhead>u.end+25)a=Math.max(u.lookAhead,a);if(u.value!=0){var c=e;if(u.extended>-1)e=this.addActions(t,u.extended,u.end,e);e=this.addActions(t,u.value,u.end,e);if(!f.extend){s=u;if(e>c)break}}}while(this.actions.length>e)this.actions.pop();if(a)t.setLookAhead(a);if(!s&&t.pos==this.stream.end){s=new p;s.value=t.p.parser.eofTerm;s.start=s.end=t.pos;e=this.addActions(t,s.value,s.end,e)}this.mainToken=s;return this.actions};t.prototype.getMainToken=function(t){if(this.mainToken)return this.mainToken;var e=new p,s=t.pos,r=t.p;e.start=s;e.end=Math.min(s+1,r.stream.end);e.value=s==r.stream.end?r.parser.eofTerm:0;return e};t.prototype.updateCachedToken=function(t,e,s){e.token(this.stream.reset(s.pos,t),s);if(t.value>-1){var r=s.p.parser;for(var i=0;i<r.specialized.length;i++)if(r.specialized[i]==t.value){var n=r.specializers[i](this.stream.read(t.start,t.end),s);if(n>=0&&s.p.parser.dialect.allows(n>>1)){if((n&1)==0)t.value=n>>1;else t.extended=n>>1;break}}}else{t.value=0;t.end=Math.min(s.p.stream.end,s.pos+1)}};t.prototype.putAction=function(t,e,s,r){for(var i=0;i<r;i+=3)if(this.actions[i]==t)return r;this.actions[r++]=t;this.actions[r++]=e;this.actions[r++]=s;return r};t.prototype.addActions=function(t,e,s,r){var i=t.state,n=t.p.parser,o=n.data;for(var a=0;a<2;a++){for(var h=n.stateSlot(i,a?2:1);;h+=3){if(o[h]==65535){if(o[h+1]==1){h=R(o,h+2)}else{if(r==0&&o[h+1]==2)r=this.putAction(R(o,h+2),e,s,r);break}}if(o[h]==e)r=this.putAction(R(o,h+1),e,s,r)}}return r};return t}();var A;(function(t){t[t["Distance"]=5]="Distance";t[t["MaxRemainingPerStep"]=3]="MaxRemainingPerStep";t[t["MinBufferLengthPrune"]=500]="MinBufferLengthPrune";t[t["ForceReduceLimit"]=10]="ForceReduceLimit";t[t["CutDepth"]=15e3]="CutDepth";t[t["CutTo"]=9e3]="CutTo"})(A||(A={}));var C=function(){function t(t,e,s,r){this.parser=t;this.input=e;this.ranges=r;this.recovering=0;this.nextStackID=9812;this.minStackPos=0;this.reused=[];this.stoppedAt=null;this.stream=new d(e,r);this.tokens=new w(t,this.stream);this.topTerm=t.top[1];var i=r[0].from;this.stacks=[a.start(this,t.top[0],i)];this.fragments=s.length&&this.stream.end-i>t.bufferLength*4?new S(s,t.nodeSet):null}Object.defineProperty(t.prototype,"parsedPos",{get:function(){return this.minStackPos},enumerable:false,configurable:true});t.prototype.advance=function(){var t=this.stacks,e=this.minStackPos;var s=this.stacks=[];var r,i;for(var n=0;n<t.length;n++){var o=t[n];for(;;){this.tokens.mainToken=null;if(o.pos>e){s.push(o)}else if(this.advanceStack(o,s,t)){continue}else{if(!r){r=[];i=[]}r.push(o);var a=this.tokens.getMainToken(o);i.push(a.value,a.end)}break}}if(!s.length){var h=r&&M(r);if(h)return this.stackToTree(h);if(this.parser.strict){if(x&&r)console.log("Stuck with token "+(this.tokens.mainToken?this.parser.getName(this.tokens.mainToken.value):"none"));throw new SyntaxError("No parse at "+e)}if(!this.recovering)this.recovering=5}if(this.recovering&&r){var h=this.stoppedAt!=null&&r[0].pos>this.stoppedAt?r[0]:this.runRecovery(r,i,s);if(h)return this.stackToTree(h.forceAll())}if(this.recovering){var f=this.recovering==1?1:this.recovering*3;if(s.length>f){s.sort((function(t,e){return e.score-t.score}));while(s.length>f)s.pop()}if(s.some((function(t){return t.reducePos>e})))this.recovering--}else if(s.length>1){t:for(var n=0;n<s.length-1;n++){var o=s[n];for(var u=n+1;u<s.length;u++){var c=s[u];if(o.sameState(c)||o.buffer.length>500&&c.buffer.length>500){if((o.score-c.score||o.buffer.length-c.buffer.length)>0){s.splice(u--,1)}else{s.splice(n--,1);continue t}}}}}this.minStackPos=s[0].pos;for(var n=1;n<s.length;n++)if(s[n].pos<this.minStackPos)this.minStackPos=s[n].pos;return null};t.prototype.stopAt=function(t){if(this.stoppedAt!=null&&this.stoppedAt<t)throw new RangeError("Can't move stoppedAt forward");this.stoppedAt=t};t.prototype.advanceStack=function(t,e,s){var r=t.pos,i=this.parser;var a=x?this.stackID(t)+" -> ":"";if(this.stoppedAt!=null&&r>this.stoppedAt)return t.forceReduce()?t:null;if(this.fragments){var h=t.curContext&&t.curContext.tracker.strict,f=h?t.curContext.hash:0;for(var u=this.fragments.nodeAt(r);u;){var c=this.parser.nodeSet.types[u.type.id]==u.type?i.getGoto(t.state,u.type.id):-1;if(c>-1&&u.length&&(!h||(u.prop(n.contextHash)||0)==f)){t.useNode(u,c);if(x)console.log(a+this.stackID(t)+" (via reuse of ".concat(i.getName(u.type.id),")"));return true}if(!(u instanceof o)||u.children.length==0||u.positions[0]>0)break;var p=u.children[0];if(p instanceof o&&u.positions[0]==0)u=p;else break}}var l=i.stateSlot(t.state,4);if(l>0){t.reduce(l);if(x)console.log(a+this.stackID(t)+" (via always-reduce ".concat(i.getName(l&65535),")"));return true}if(t.stack.length>=15e3){while(t.stack.length>9e3&&t.forceReduce()){}}var d=this.tokens.getActions(t);for(var v=0;v<d.length;){var k=d[v++],g=d[v++],m=d[v++];var b=v==d.length||!s;var y=b?t:t.split();y.apply(k,g,m);if(x)console.log(a+this.stackID(y)+" (via ".concat((k&65536)==0?"shift":"reduce of ".concat(i.getName(k&65535))," for ").concat(i.getName(g)," @ ").concat(r).concat(y==t?"":", split",")"));if(b)return true;else if(y.pos>r)e.push(y);else s.push(y)}return false};t.prototype.advanceFully=function(t,e){var s=t.pos;for(;;){if(!this.advanceStack(t,null,null))return false;if(t.pos>s){T(t,e);return true}}};t.prototype.runRecovery=function(t,e,s){var r=null,i=false;for(var n=0;n<t.length;n++){var o=t[n],a=e[n<<1],h=e[(n<<1)+1];var f=x?this.stackID(o)+" -> ":"";if(o.deadEnd){if(i)continue;i=true;o.restart();if(x)console.log(f+this.stackID(o)+" (restarted)");var u=this.advanceFully(o,s);if(u)continue}var c=o.split(),p=f;for(var l=0;c.forceReduce()&&l<10;l++){if(x)console.log(p+this.stackID(c)+" (via force-reduce)");var u=this.advanceFully(c,s);if(u)break;if(x)p=this.stackID(c)+" -> "}for(var d=0,v=o.recoverByInsert(a);d<v.length;d++){var k=v[d];if(x)console.log(f+this.stackID(k)+" (via recover-insert)");this.advanceFully(k,s)}if(this.stream.end>o.pos){if(h==o.pos){h++;a=0}o.recoverByDelete(a,h);if(x)console.log(f+this.stackID(o)+" (via recover-delete ".concat(this.parser.getName(a),")"));T(o,s)}else if(!r||r.score<o.score){r=o}}return r};t.prototype.stackToTree=function(t){t.close();return o.build({buffer:c.create(t),nodeSet:this.parser.nodeSet,topID:this.topTerm,maxBufferLength:this.parser.bufferLength,reused:this.reused,start:this.ranges[0].from,length:t.pos-this.ranges[0].from,minRepeatType:this.parser.minRepeatTerm})};t.prototype.stackID=function(t){var e=(b||(b=new WeakMap)).get(t);if(!e)b.set(t,e=String.fromCodePoint(this.nextStackID++));return e+t};return t}();function T(t,e){for(var s=0;s<e.length;s++){var r=e[s];if(r.pos==t.pos&&r.sameState(t)){if(e[s].score<t.score)e[s]=t;return}}e.push(t)}var N=function(){function t(t,e,s){this.source=t;this.flags=e;this.disabled=s}t.prototype.allows=function(t){return!this.disabled||this.disabled[t]==0};return t}();var D=function(t){return t};var O=function(){function t(t){this.start=t.start;this.shift=t.shift||D;this.reduce=t.reduce||D;this.reuse=t.reuse||D;this.hash=t.hash||function(){return 0};this.strict=t.strict!==false}return t}();t("C",O);var I=function(t){__extends(e,t);function e(e){var n=t.call(this)||this;n.wrappers=[];if(e.version!=13)throw new RangeError("Parser version (".concat(e.version,") doesn't match runtime version (").concat(13,")"));var o=e.nodeNames.split(" ");n.minRepeatTerm=o.length;for(var a=0;a<e.repeatNodeCount;a++)o.push("");var h=Object.keys(e.topRules).map((function(t){return e.topRules[t][1]}));var f=[];for(var a=0;a<o.length;a++)f.push([]);function u(t,e,s){f[t].push([e,e.deserialize(String(s))])}if(e.nodeProps)for(var c=0,p=e.nodeProps;c<p.length;c++){var l=p[c];var d=l[0];for(var a=1;a<l.length;){var k=l[a++];if(k>=0){u(k,d,l[a++])}else{var g=l[a+-k];for(var x=-k;x>0;x--)u(l[a++],d,g);a++}}}n.nodeSet=new s(o.map((function(t,s){return r.define({name:s>=n.minRepeatTerm?undefined:t,id:s,props:f[s],top:h.indexOf(s)>-1,error:s==0,skipped:e.skippedNodes&&e.skippedNodes.indexOf(s)>-1})})));n.strict=false;n.bufferLength=i;var b=m(e.tokenData);n.context=e.context;n.specialized=new Uint16Array(e.specialized?e.specialized.length:0);n.specializers=[];if(e.specialized)for(var a=0;a<e.specialized.length;a++){n.specialized[a]=e.specialized[a].term;n.specializers[a]=e.specialized[a].get}n.states=m(e.states,Uint32Array);n.data=m(e.stateData);n.goto=m(e.goto);n.maxTerm=e.maxTerm;n.tokenizers=e.tokenizers.map((function(t){return typeof t=="number"?new v(b,t):t}));n.topRules=e.topRules;n.dialects=e.dialects||{};n.dynamicPrecedences=e.dynamicPrecedences||null;n.tokenPrecTable=e.tokenPrec;n.termNames=e.termNames||null;n.maxNode=n.nodeSet.types.length-1;n.dialect=n.parseDialect();n.top=n.topRules[Object.keys(n.topRules)[0]];return n}e.prototype.createParse=function(t,e,s){var r=new C(this,t,e,s);for(var i=0,n=this.wrappers;i<n.length;i++){var o=n[i];r=o(r,t,e,s)}return r};e.prototype.getGoto=function(t,e,s){if(s===void 0){s=false}var r=this.goto;if(e>=r[0])return-1;for(var i=r[e+1];;){var n=r[i++],o=n&1;var a=r[i++];if(o&&s)return a;for(var h=i+(n>>1);i<h;i++)if(r[i]==t)return a;if(o)return-1}};e.prototype.hasAction=function(t,e){var s=this.data;for(var r=0;r<2;r++){for(var i=this.stateSlot(t,r?2:1),n=void 0;;i+=3){if((n=s[i])==65535){if(s[i+1]==1)n=s[i=R(s,i+2)];else if(s[i+1]==2)return R(s,i+2);else break}if(n==e||n==0)return R(s,i+1)}}return 0};e.prototype.stateSlot=function(t,e){return this.states[t*6+e]};e.prototype.stateFlag=function(t,e){return(this.stateSlot(t,0)&e)>0};e.prototype.validAction=function(t,e){if(e==this.stateSlot(t,4))return true;for(var s=this.stateSlot(t,1);;s+=3){if(this.data[s]==65535){if(this.data[s+1]==1)s=R(this.data,s+2);else return false}if(e==R(this.data,s+1))return true}};e.prototype.nextStates=function(t){var e=[];var s=function(t){if(r.data[t]==65535){if(r.data[t+1]==1)t=R(r.data,t+2);else return i=t,"break"}if((r.data[t+2]&65536>>16)==0){var s=r.data[t+1];if(!e.some((function(t,e){return e&1&&t==s})))e.push(r.data[t],s)}i=t};var r=this,i;for(var n=this.stateSlot(t,1);;n+=3){var o=s(n);n=i;if(o==="break")break}return e};e.prototype.overrides=function(t,e){var s=z(this.data,this.tokenPrecTable,e);return s<0||z(this.data,this.tokenPrecTable,t)<s};e.prototype.configure=function(t){var s;var r=Object.assign(Object.create(e.prototype),this);if(t.props)r.nodeSet=(s=this.nodeSet).extend.apply(s,t.props);if(t.top){var i=this.topRules[t.top];if(!i)throw new RangeError("Invalid top rule name ".concat(t.top));r.top=i}if(t.tokenizers)r.tokenizers=this.tokenizers.map((function(e){var s=t.tokenizers.find((function(t){return t.from==e}));return s?s.to:e}));if(t.contextTracker)r.context=t.contextTracker;if(t.dialect)r.dialect=this.parseDialect(t.dialect);if(t.strict!=null)r.strict=t.strict;if(t.wrap)r.wrappers=r.wrappers.concat(t.wrap);if(t.bufferLength!=null)r.bufferLength=t.bufferLength;return r};e.prototype.getName=function(t){return this.termNames?this.termNames[t]:String(t<=this.maxNode&&this.nodeSet.types[t].name||t)};Object.defineProperty(e.prototype,"eofTerm",{get:function(){return this.maxNode+1},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"topNode",{get:function(){return this.nodeSet.types[this.top[1]]},enumerable:false,configurable:true});e.prototype.dynamicPrecedence=function(t){var e=this.dynamicPrecedences;return e==null?0:e[t]||0};e.prototype.parseDialect=function(t){var e=Object.keys(this.dialects),s=e.map((function(){return false}));if(t)for(var r=0,i=t.split(" ");r<i.length;r++){var n=i[r];var o=e.indexOf(n);if(o>=0)s[o]=true}var a=null;for(var h=0;h<e.length;h++)if(!s[h]){for(var f=this.dialects[e[h]],u;(u=this.data[f++])!=65535;)(a||(a=new Uint8Array(this.maxTerm+1)))[u]=1}return new N(t,s,a)};e.deserialize=function(t){return new e(t)};return e}(e);t("L",I);function R(t,e){return t[e]|t[e+1]<<16}function z(t,e,s){for(var r=e,i=void 0;(i=t[r])!=65535;r++)if(i==s)return r-e;return-1}function M(t){var e=null;for(var s=0,r=t;s<r.length;s++){var i=r[s];var n=i.p.stoppedAt;if((i.pos==i.p.stream.end||n!=null&&i.pos>n)&&i.p.parser.stateFlag(i.state,2)&&(!e||e.score<i.score))e=i}return e}}}}));
//# sourceMappingURL=p-7777e2fb.system.js.map