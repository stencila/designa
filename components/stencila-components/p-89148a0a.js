import{h as e,v as t,w as r,f as i,s as a,j as n,k as s,m as o,b as l,t as c}from"./p-39bf90d7.js";import{E as u,L as d}from"./p-ad04fbf9.js";import"./p-42c7aa22.js";import"./p-725b0d42.js";import"./p-f10a134c.js";const m=34,p=1,f=2,g=3,_=4,b=5,h=6,y=7,O=8,v=9,x=10,w=11,k=12,Q=13,q=14,P=15,C=16,z=17,S=18,U=19,X=20,R=21,j=22;function T(e){return e>=65&&e<=90||e>=97&&e<=122||e>=48&&e<=57}function V(e){return e>=48&&e<=57||e>=97&&e<=102||e>=65&&e<=70}function I(e,t,r){for(let i=false;;){if(e.next<0)return;if(e.next==t&&!i){e.advance();return}i=r&&!i&&e.next==92;e.advance()}}function Z(e,t){for(;;){if(e.next!=95&&!T(e.next))break;if(t!=null)t+=String.fromCharCode(e.next);e.advance()}return t}function B(e){if(e.next==39||e.next==34||e.next==96){let t=e.next;e.advance();I(e,t,false)}else{Z(e)}}function D(e,t){for(;;){if(e.next==46){if(t)break;t=true}else if(e.next<48||e.next>57){break}e.advance()}if(e.next==69||e.next==101){e.advance();if(e.next==43||e.next==45)e.advance();while(e.next>=48&&e.next<=57)e.advance()}}function G(e){while(!(e.next<0||e.next==10))e.advance()}function N(e,t){for(let r=0;r<t.length;r++)if(t.charCodeAt(r)==e)return true;return false}const W=" \t\r\n";function E(e,t,r){let i=Object.create(null);i["true"]=i["false"]=b;i["null"]=i["unknown"]=h;for(let a of e.split(" "))if(a)i[a]=X;for(let a of t.split(" "))if(a)i[a]=R;for(let a of(r||"").split(" "))if(a)i[a]=j;return i}const Y="array binary bit boolean char character clob date decimal double float int integer interval large national nchar nclob numeric object precision real smallint time timestamp varchar varying ";const $="absolute action add after all allocate alter and any are as asc assertion at authorization before begin between both breadth by call cascade cascaded case cast catalog check close collate collation column commit condition connect connection constraint constraints constructor continue corresponding count create cross cube current current_date current_default_transform_group current_transform_group_for_type current_path current_role current_time current_timestamp current_user cursor cycle data day deallocate declare default deferrable deferred delete depth deref desc describe descriptor deterministic diagnostics disconnect distinct do domain drop dynamic each else elseif end end-exec equals escape except exception exec execute exists exit external fetch first for foreign found from free full function general get global go goto grant group grouping handle having hold hour identity if immediate in indicator initially inner inout input insert intersect into is isolation join key language last lateral leading leave left level like limit local localtime localtimestamp locator loop map match method minute modifies module month names natural nesting new next no none not of old on only open option or order ordinality out outer output overlaps pad parameter partial path prepare preserve primary prior privileges procedure public read reads recursive redo ref references referencing relative release repeat resignal restrict result return returns revoke right role rollback rollup routine row rows savepoint schema scroll search second section select session session_user set sets signal similar size some space specific specifictype sql sqlexception sqlstate sqlwarning start state static system_user table temporary then timezone_hour timezone_minute to trailing transaction translation treat trigger under undo union unique unnest until update usage user using value values view when whenever where while with without work write year zone ";const L={backslashEscapes:false,hashComments:false,spaceAfterDashes:false,slashComments:false,doubleQuotedStrings:false,charSetCasts:false,operatorChars:"*+-%<>!=&|~^/",specialVar:"?",identifierQuotes:'"',words:E($,Y)};function A(e,t,r,i){let a={};for(let n in L)a[n]=(e.hasOwnProperty(n)?e:L)[n];if(t)a.words=E(t,r||"",i);return a}function K(e){return new u((t=>{var r;let{next:i}=t;t.advance();if(N(i,W)){while(N(t.next,W))t.advance();t.acceptToken(m)}else if(i==39||i==34&&e.doubleQuotedStrings){I(t,i,e.backslashEscapes);t.acceptToken(g)}else if(i==35&&e.hashComments||i==47&&t.next==47&&e.slashComments){G(t);t.acceptToken(p)}else if(i==45&&t.next==45&&(!e.spaceAfterDashes||t.peek(2)==32)){G(t);t.acceptToken(p)}else if(i==47&&t.next==42){t.advance();for(let e=-1,r=1;;){if(t.next<0)break;t.advance();if(e==42&&t.next==47){r--;if(!r)break;e=-1}else if(e==47&&t.next==42){r++;e=-1}else{e=t.next}}t.acceptToken(f)}else if((i==101||i==69)&&t.next==39){t.advance();I(t,39,true)}else if((i==110||i==78)&&t.next==39&&e.charSetCasts){t.advance();I(t,39,e.backslashEscapes);t.acceptToken(g)}else if(i==95&&e.charSetCasts){for(let r=0;;r++){if(t.next==39&&r>1){t.advance();I(t,39,e.backslashEscapes);t.acceptToken(g);break}if(!T(t.next))break;t.advance()}}else if(i==40){t.acceptToken(y)}else if(i==41){t.acceptToken(O)}else if(i==123){t.acceptToken(v)}else if(i==125){t.acceptToken(x)}else if(i==91){t.acceptToken(w)}else if(i==93){t.acceptToken(k)}else if(i==59){t.acceptToken(Q)}else if(i==48&&(t.next==98||t.next==66)||(i==98||i==66)&&t.next==39){let e=t.next==39;t.advance();while(t.next==48||t.next==49)t.advance();if(e&&t.next==39)t.advance();t.acceptToken(_)}else if(i==48&&(t.next==120||t.next==88)||(i==120||i==88)&&t.next==39){let e=t.next==39;t.advance();while(V(t.next))t.advance();if(e&&t.next==39)t.advance();t.acceptToken(_)}else if(i==46&&t.next>=48&&t.next<=57){D(t,true);t.acceptToken(_)}else if(i==46){t.acceptToken(q)}else if(i>=48&&i<=57){D(t,false);t.acceptToken(_)}else if(N(i,e.operatorChars)){while(N(t.next,e.operatorChars))t.advance();t.acceptToken(P)}else if(N(i,e.specialVar)){if(t.next==i)t.advance();B(t);t.acceptToken(z)}else if(N(i,e.identifierQuotes)){I(t,i,false);t.acceptToken(U)}else if(i==58||i==44){t.acceptToken(C)}else if(T(i)){let a=Z(t,String.fromCharCode(i));t.acceptToken((r=e.words[a.toLowerCase()])!==null&&r!==void 0?r:S)}}))}const F=K(L);const H=d.deserialize({version:13,states:"%dQ]QQOOO#kQRO'#DQO#rQQO'#CuO%RQQO'#CvO%YQQO'#CwO%aQQO'#CxOOQQ'#DQ'#DQOOQQ'#C{'#C{O&lQRO'#CyOOQQ'#Ct'#CtOOQQ'#Cz'#CzQ]QQOOQOQQOOO&vQQO,59aO'RQQO,59aO'WQQO'#DQOOQQ,59b,59bO'eQQO,59bOOQQ,59c,59cO'lQQO,59cOOQQ,59d,59dO'sQQO,59dOOQQ-E6y-E6yOOQQ,59`,59`OOQQ-E6x-E6xOOQQ'#C|'#C|OOQQ1G.{1G.{O&vQQO1G.{OOQQ1G.|1G.|OOQQ1G.}1G.}OOQQ1G/O1G/OP'zQQO'#C{POQQ-E6z-E6zOOQQ7+$g7+$g",stateData:"(R~OrOSPOSQOS~ORUOSUOTUOUUOVROXSOZTO]XO^QO_UO`UOaPObPOcPOdUOeUOfUO~O^]ORtXStXTtXUtXVtXXtXZtX]tX_tX`tXatXbtXctXdtXetXftX~OqtX~P!dOa^Ob^Oc^O~ORUOSUOTUOUUOVROXSOZTO^QO_UO`UOa_Ob_Oc_OdUOeUOfUO~OW`O~P#}OYbO~P#}O[dO~P#}ORUOSUOTUOUUOVROXSOZTO^QO_UO`UOaPObPOcPOdUOeUOfUO~O]gOqmX~P%hOaiObiOciO~O^kO~OWtXYtX[tX~P!dOWlO~P#}OYmO~P#}O[nO~P#}O]gO~P#}O",goto:"#YuPPPPPPPPPPPPPPPPPPPPPPPPvzzzz!W![!b!vPPP!|TYOZeUORSTWZaceoT[OZQZORhZSWOZQaRQcSQeTZfWaceoQj]RqkeVORSTWZaceo",nodeNames:"⚠ LineComment BlockComment String Number Bool Null ( ) [ ] { } ; . Operator Punctuation SpecialVar Identifier QuotedIdentifier Keyword Type Builtin Script Statement CompositeIdentifier Parens Braces Brackets Statement",maxTerm:36,skippedNodes:[0,1,2],repeatNodeCount:3,tokenData:"RORO",tokenizers:[0,F],topRules:{Script:[0,23]},tokenPrec:0});function J(e){let t=e.cursor.moveTo(e.from,-1);while(/Comment/.test(t.name))t.moveTo(t.from,-1);return t.node}function M(e){let t=/^[`'"](.*)[`'"]$/.exec(e);return t?t[1]:e}function ee(e,t){let r=a(e).resolveInner(t,-1);let i=false;if(r.name=="Identifier"||r.name=="QuotedIdentifier"){i=false;let t=null;let a=J(r);if(a&&a.name=="."){let r=J(a);if(r&&r.name=="Identifier"||r.name=="QuotedIdentifier")t=M(e.sliceDoc(r.from,r.to).toLowerCase())}return{parent:t,from:r.from,quoted:r.name=="QuotedIdentifier"?e.sliceDoc(r.from,r.from+1):null}}else if(r.name=="."){let i=J(r);if(i&&i.name=="Identifier"||i.name=="QuotedIdentifier")return{parent:M(e.sliceDoc(i.from,i.to).toLowerCase()),from:t,quoted:null}}else{i=true}return{parent:null,from:t,quoted:null,empty:i}}function te(e,t){if(!e)return t;return t.map((t=>Object.assign(Object.assign({},t),{label:e+t.label+e,apply:undefined})))}const re=/^\w*$/,ie=/^[`'"]?\w*[`'"]?$/;function ae(e,t,r){let i=Object.create(null);for(let n in e)i[n]=e[n].map((e=>typeof e=="string"?{label:e,type:"property"}:e));let a=(t||Object.keys(i).map((e=>({label:e,type:"type"})))).concat(r&&i[r]||[]);return e=>{let{parent:t,from:r,quoted:n,empty:s}=ee(e.state,e.pos);if(s&&!e.explicit)return null;let o=a;if(t){let e=i[t];if(!e)return null;o=e}let l=n&&e.state.sliceDoc(e.pos,e.pos+1)==n;return{from:r,to:l?e.pos+1:undefined,options:te(n,o),span:n?ie:re}}}function ne(e,i){let a=Object.keys(e).map((t=>({label:i?t.toUpperCase():t,type:e[t]==R?"type":e[t]==X?"keyword":"variable",boost:-1})));return t(["QuotedIdentifier","SpecialVar","String","LineComment","BlockComment","."],r(a))}let se=H.configure({props:[n.add({Statement:s()}),o.add({Statement(e){return{from:e.firstChild.to,to:e.to}},BlockComment(e){return{from:e.from+2,to:e.to-2}}}),l({Keyword:c.keyword,Type:c.typeName,Builtin:c.standard(c.name),Bool:c.bool,Null:c.null,Number:c.number,String:c.string,Identifier:c.name,QuotedIdentifier:c.special(c.string),SpecialVar:c.special(c.name),LineComment:c.lineComment,BlockComment:c.blockComment,Operator:c.operator,"Semi Punctuation":c.punctuation,"( )":c.paren,"{ }":c.brace,"[ ]":c.squareBracket})]});class oe{constructor(e,t){this.dialect=e;this.language=t}get extension(){return this.language.extension}static define(t){let r=A(t,t.keywords,t.types,t.builtin);let i=e.define({parser:se.configure({tokenizers:[{from:F,to:K(r)}]}),languageData:{commentTokens:{line:"--",block:{open:"/*",close:"*/"}},closeBrackets:{brackets:["(","[","{","'",'"',"`"]}}});return new oe(r,i)}}function le(e,t=false){return e.language.data.of({autocomplete:ne(e.dialect.words,t)})}function ce(e){return e.schema?(e.dialect||de).language.data.of({autocomplete:ae(e.schema,e.tables,e.defaultTable)}):[]}function ue(e={}){let t=e.dialect||de;return new i(t.language,[ce(e),le(t,!!e.upperCaseKeywords)])}const de=oe.define({});const me=oe.define({charSetCasts:true,operatorChars:"+-*/<>=~!@#%^&|`?",specialVar:"",keywords:$+"a abort abs absent access according ada admin aggregate alias also always analyse analyze array_agg array_max_cardinality asensitive assert assignment asymmetric atomic attach attribute attributes avg backward base64 begin_frame begin_partition bernoulli bit_length blocked bom c cache called cardinality catalog_name ceil ceiling chain char_length character_length character_set_catalog character_set_name character_set_schema characteristics characters checkpoint class class_origin cluster coalesce cobol collation_catalog collation_name collation_schema collect column_name columns command_function command_function_code comment comments committed concurrently condition_number configuration conflict connection_name constant constraint_catalog constraint_name constraint_schema contains content control conversion convert copy corr cost covar_pop covar_samp csv cume_dist current_catalog current_row current_schema cursor_name database datalink datatype datetime_interval_code datetime_interval_precision db debug defaults defined definer degree delimiter delimiters dense_rank depends derived detach detail dictionary disable discard dispatch dlnewcopy dlpreviouscopy dlurlcomplete dlurlcompleteonly dlurlcompletewrite dlurlpath dlurlpathonly dlurlpathwrite dlurlscheme dlurlserver dlvalue document dump dynamic_function dynamic_function_code element elsif empty enable encoding encrypted end_frame end_partition endexec enforced enum errcode error event every exclude excluding exclusive exp explain expression extension extract family file filter final first_value flag floor following force foreach fortran forward frame_row freeze fs functions fusion g generated granted greatest groups handler header hex hierarchy hint id ignore ilike immediately immutable implementation implicit import include including increment indent index indexes info inherit inherits inline insensitive instance instantiable instead integrity intersection invoker isnull k key_member key_type label lag last_value lead leakproof least length library like_regex link listen ln load location lock locked log logged lower m mapping matched materialized max max_cardinality maxvalue member merge message message_length message_octet_length message_text min minvalue mod mode more move multiset mumps name namespace nfc nfd nfkc nfkd nil normalize normalized nothing notice notify notnull nowait nth_value ntile nullable nullif nulls number occurrences_regex octet_length octets off offset oids operator options ordering others over overlay overriding owned owner p parallel parameter_mode parameter_name parameter_ordinal_position parameter_specific_catalog parameter_specific_name parameter_specific_schema parser partition pascal passing passthrough password percent percent_rank percentile_cont percentile_disc perform period permission pg_context pg_datatype_name pg_exception_context pg_exception_detail pg_exception_hint placing plans pli policy portion position position_regex power precedes preceding prepared print_strict_params procedural procedures program publication query quote raise range rank reassign recheck recovery refresh regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy regr_syy reindex rename repeatable replace replica requiring reset respect restart restore result_oid returned_cardinality returned_length returned_octet_length returned_sqlstate returning reverse routine_catalog routine_name routine_schema routines row_count row_number rowtype rule scale schema_name schemas scope scope_catalog scope_name scope_schema security selective self sensitive sequence sequences serializable server server_name setof share show simple skip slice snapshot source specific_name sqlcode sqlerror sqrt stable stacked standalone statement statistics stddev_pop stddev_samp stdin stdout storage strict strip structure style subclass_origin submultiset subscription substring substring_regex succeeds sum symmetric sysid system system_time t table_name tables tablesample tablespace temp template ties token top_level_count transaction_active transactions_committed transactions_rolled_back transform transforms translate translate_regex trigger_catalog trigger_name trigger_schema trim trim_array truncate trusted type types uescape unbounded uncommitted unencrypted unlink unlisten unlogged unnamed untyped upper uri use_column use_variable user_defined_type_catalog user_defined_type_code user_defined_type_name user_defined_type_schema vacuum valid validate validator value_of var_pop var_samp varbinary variable_conflict variadic verbose version versioning views volatile warning whitespace width_bucket window within wrapper xmlagg xmlattributes xmlbinary xmlcast xmlcomment xmlconcat xmldeclaration xmldocument xmlelement xmlexists xmlforest xmliterate xmlnamespaces xmlparse xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltext xmlvalidate yes",types:Y+"bigint int8 bigserial serial8 varbit bool box bytea cidr circle precision float8 inet int4 json jsonb line lseg macaddr macaddr8 money numeric pg_lsn point polygon float4 int2 smallserial serial2 serial serial4 text timetz timestamptz tsquery tsvector txid_snapshot uuid xml"});const pe="accessible algorithm analyze asensitive authors auto_increment autocommit avg avg_row_length binlog btree cache catalog_name chain change changed checkpoint checksum class_origin client_statistics coalesce code collations columns comment committed completion concurrent consistent contains contributors convert database databases day_hour day_microsecond day_minute day_second delay_key_write delayed delimiter des_key_file dev_pop dev_samp deviance directory disable discard distinctrow div dual dumpfile enable enclosed ends engine engines enum errors escaped even event events every explain extended fast field fields flush force found_rows fulltext grants handler hash high_priority hosts hour_microsecond hour_minute hour_second ignore ignore_server_ids import index index_statistics infile innodb insensitive insert_method install invoker iterate keys kill linear lines list load lock logs low_priority master master_heartbeat_period master_ssl_verify_server_cert masters max max_rows maxvalue message_text middleint migrate min min_rows minute_microsecond minute_second mod mode modify mutex mysql_errno no_write_to_binlog offline offset one online optimize optionally outfile pack_keys parser partition partitions password phase plugin plugins prev processlist profile profiles purge query quick range read_write rebuild recover regexp relaylog remove rename reorganize repair repeatable replace require resume rlike row_format rtree schedule schema_name schemas second_microsecond security sensitive separator serializable server share show slave slow snapshot soname spatial sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result ssl starting starts std stddev stddev_pop stddev_samp storage straight_join subclass_origin sum suspend table_name table_statistics tables tablespace terminated triggers truncate uncommitted uninstall unlock upgrade use use_frm user_resources user_statistics utc_date utc_time utc_timestamp variables views warnings xa xor year_month zerofill";const fe=Y+"bool blob long longblob longtext medium mediumblob mediumint mediumtext tinyblob tinyint tinytext text bigint int1 int2 int3 int4 int8 float4 float8 varbinary varcharacter precision datetime unsigned signed";const ge="charset clear edit ego help nopager notee nowarning pager print prompt quit rehash source status system tee";const _e=oe.define({operatorChars:"*+-%<>!=&|^",charSetCasts:true,doubleQuotedStrings:true,hashComments:true,spaceAfterDashes:true,specialVar:"@?",identifierQuotes:"`",keywords:$+"group_concat "+pe,types:fe,builtin:ge});const be=oe.define({operatorChars:"*+-%<>!=&|^",charSetCasts:true,doubleQuotedStrings:true,hashComments:true,spaceAfterDashes:true,specialVar:"@?",identifierQuotes:"`",keywords:$+"always generated groupby_concat hard persistent shutdown soft virtual "+pe,types:fe,builtin:ge});const he=oe.define({keywords:$+"trigger proc view index for add constraint key primary foreign collate clustered nonclustered declare exec go if use index holdlock nolock nowait paglock pivot readcommitted readcommittedlock readpast readuncommitted repeatableread rowlock serializable snapshot tablock tablockx unpivot updlock with",types:Y+"bigint smallint smallmoney tinyint money real text nvarchar ntext varbinary image hierarchyid uniqueidentifier sql_variant xml",builtin:"binary_checksum checksum connectionproperty context_info current_request_id error_line error_message error_number error_procedure error_severity error_state formatmessage get_filestream_transaction_context getansinull host_id host_name isnull isnumeric min_active_rowversion newid newsequentialid rowcount_big xact_state object_id",operatorChars:"*+-%<>!=^&|/",specialVar:"@"});const ye=oe.define({keywords:$+"abort analyze attach autoincrement conflict database detach exclusive fail glob ignore index indexed instead isnull notnull offset plan pragma query raise regexp reindex rename replace temp vacuum virtual",types:Y+"bool blob long longblob longtext medium mediumblob mediumint mediumtext tinyblob tinyint tinytext text bigint int2 int8 unsigned signed real",builtin:"auth backup bail changes clone databases dbinfo dump echo eqp explain fullschema headers help import imposter indexes iotrace lint load log mode nullvalue once print prompt quit restore save scanstats separator shell show stats system tables testcase timeout timer trace vfsinfo vfslist vfsname width",operatorChars:"*+-%<>!=&|/~",identifierQuotes:'`"',specialVar:"@:?$"});const Oe=oe.define({keywords:"add all allow alter and any apply as asc authorize batch begin by clustering columnfamily compact consistency count create custom delete desc distinct drop each_quorum exists filtering from grant if in index insert into key keyspace keyspaces level limit local_one local_quorum modify nan norecursive nosuperuser not of on one order password permission permissions primary quorum rename revoke schema select set storage superuser table three to token truncate ttl two type unlogged update use user users using values where with writetime infinity NaN",types:Y+"ascii bigint blob counter frozen inet list map static text timeuuid tuple uuid varint",slashComments:true});const ve=oe.define({keywords:$+"abort accept access add all alter and any arraylen as asc assert assign at attributes audit authorization avg base_table begin between binary_integer body by case cast char_base check close cluster clusters colauth column comment commit compress connected constant constraint crash create current currval cursor data_base database dba deallocate debugoff debugon declare default definition delay delete desc digits dispose distinct do drop else elseif elsif enable end entry exception exception_init exchange exclusive exists external fast fetch file for force form from function generic goto grant group having identified if immediate in increment index indexes indicator initial initrans insert interface intersect into is key level library like limited local lock log logging loop master maxextents maxtrans member minextents minus mislabel mode modify multiset new next no noaudit nocompress nologging noparallel not nowait number_base of off offline on online only option or order out package parallel partition pctfree pctincrease pctused pls_integer positive positiven pragma primary prior private privileges procedure public raise range raw rebuild record ref references refresh rename replace resource restrict return returning returns reverse revoke rollback row rowid rowlabel rownum rows run savepoint schema segment select separate set share snapshot some space split sql start statement storage subtype successful synonym tabauth table tables tablespace task terminate then to trigger truncate type union unique unlimited unrecoverable unusable update use using validate value values variable view views when whenever where while with work",builtin:"appinfo arraysize autocommit autoprint autorecovery autotrace blockterminator break btitle cmdsep colsep compatibility compute concat copycommit copytypecheck define echo editfile embedded feedback flagger flush heading headsep instance linesize lno loboffset logsource longchunksize markup native newpage numformat numwidth pagesize pause pno recsep recsepchar repfooter repheader serveroutput shiftinout show showmode spool sqlblanklines sqlcase sqlcode sqlcontinue sqlnumber sqlpluscompatibility sqlprefix sqlprompt sqlterminator suffix tab term termout timing trimout trimspool ttitle underline verify version wrap",types:Y+"ascii bfile bfilename bigserial bit blob dec long number nvarchar nvarchar2 serial smallint string text uid varchar2 xml",operatorChars:"*/+-%<>!=~",doubleQuotedStrings:true,charSetCasts:true});export{Oe as Cassandra,he as MSSQL,be as MariaSQL,_e as MySQL,ve as PLSQL,me as PostgreSQL,oe as SQLDialect,ye as SQLite,de as StandardSQL,le as keywordCompletion,ce as schemaCompletion,ue as sql};
//# sourceMappingURL=p-89148a0a.js.map