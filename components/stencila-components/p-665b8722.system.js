System.register(["./p-7777e2fb.system.js","./p-2e66c77c.system.js","./p-6cc918a4.system.js","./p-33366d5a.system.js","./p-5cd8524a.system.js"],(function(O){"use strict";var e,r,t,n,s,a,P,Q,o,i;return{setters:[function(O){e=O.L},function(O){r=O.N;t=O.h;n=O.j;s=O.k;a=O.m;P=O.n;Q=O.b;o=O.f;i=O.t},function(){},function(){},function(){}],execute:function(){O("json",g);var c=e.deserialize({version:13,states:"$bOVQPOOOOQO'#Cb'#CbOnQPO'#CeOvQPO'#CjOOQO'#Cp'#CpQOQPOOOOQO'#Cg'#CgO}QPO'#CfO!SQPO'#CrOOQO,59P,59PO![QPO,59PO!aQPO'#CuOOQO,59U,59UO!iQPO,59UOVQPO,59QOqQPO'#CkO!nQPO,59^OOQO1G.k1G.kOVQPO'#ClO!vQPO,59aOOQO1G.p1G.pOOQO1G.l1G.lOOQO,59V,59VOOQO-E6i-E6iOOQO,59W,59WOOQO-E6j-E6j",stateData:"#O~OcOS~OQSORSOSSOTSOWQO]ROePO~OVXOeUO~O[[O~PVOg^O~Oh_OVfX~OVaO~OhbO[iX~O[dO~Oh_OVfa~OhbO[ia~O",goto:"!kjPPPPPPkPPkqwPPk{!RPPP!XP!ePP!hXSOR^bQWQRf_TVQ_Q`WRg`QcZRicQTOQZRQe^RhbRYQR]R",nodeNames:"⚠ JsonText True False Null Number String } { Object Property PropertyName ] [ Array",maxTerm:25,nodeProps:[[r.openedBy,7,"{",12,"["],[r.closedBy,8,"}",13,"]"]],skippedNodes:[0],repeatNodeCount:2,tokenData:"(p~RaXY!WYZ!W]^!Wpq!Wrs!]|}$i}!O$n!Q!R$w!R![&V![!]&h!}#O&m#P#Q&r#Y#Z&w#b#c'f#h#i'}#o#p(f#q#r(k~!]Oc~~!`Upq!]qr!]rs!rs#O!]#O#P!w#P~!]~!wOe~~!zXrs!]!P!Q!]#O#P!]#U#V!]#Y#Z!]#b#c!]#f#g!]#h#i!]#i#j#g~#jR!Q![#s!c!i#s#T#Z#s~#vR!Q![$P!c!i$P#T#Z$P~$SR!Q![$]!c!i$]#T#Z$]~$`R!Q![!]!c!i!]#T#Z!]~$nOh~~$qQ!Q!R$w!R![&V~$|RT~!O!P%V!g!h%k#X#Y%k~%YP!Q![%]~%bRT~!Q![%]!g!h%k#X#Y%k~%nR{|%w}!O%w!Q![%}~%zP!Q![%}~&SPT~!Q![%}~&[ST~!O!P%V!Q![&V!g!h%k#X#Y%k~&mOg~~&rO]~~&wO[~~&zP#T#U&}~'QP#`#a'T~'WP#g#h'Z~'^P#X#Y'a~'fOR~~'iP#i#j'l~'oP#`#a'r~'uP#`#a'x~'}OS~~(QP#f#g(T~(WP#i#j(Z~(^P#X#Y(a~(fOQ~~(kOW~~(pOV~",tokenizers:[0],topRules:{JsonText:[0,1]},tokenPrec:0});var u=O("jsonParseLinter",(function(){return function(O){try{JSON.parse(O.state.doc.toString())}catch(r){if(!(r instanceof SyntaxError))throw r;var e=p(r,O.state.doc);return[{from:e,message:r.message,severity:"error",to:e}]}return[]}}));function p(O,e){var r;if(r=O.message.match(/at position (\d+)/))return Math.min(+r[1],e.length);if(r=O.message.match(/at line (\d+) column (\d+)/))return Math.min(e.line(+r[1]).from+ +r[2]-1,e.length);return 0}var f=O("jsonLanguage",t.define({parser:c.configure({props:[n.add({Object:s({except:/^\s*\}/}),Array:s({except:/^\s*\]/})}),a.add({"Object Array":P}),Q({String:i.string,Number:i.number,"True False":i.bool,PropertyName:i.propertyName,Null:i.null,",":i.separator,"[ ]":i.squareBracket,"{ }":i.brace})]}),languageData:{closeBrackets:{brackets:["[","{",'"']},indentOnInput:/^\s*[\}\]]$/}}));function g(){return new o(f)}}}}));
//# sourceMappingURL=p-665b8722.system.js.map