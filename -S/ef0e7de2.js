webpackJsonp([3],{MU2S:function(e,t,n){"use strict";var r,i=function(){function e(e,t){var n=[],r=!0,i=!1,s=void 0;try{for(var o,l=e[Symbol.iterator]();!(r=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){i=!0,s=e}finally{try{!r&&l.return&&l.return()}finally{if(i)throw s}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();r=n("ZRyn"),e.exports=function(e){var t,n,s,o=r(e),l=i(o,2);return n=l[0],s=l[1],t=PP.F,[n,s.replaceAll('="'+t.slice(-3),'="'+t)]}},ZRyn:function(e,t,n){"use strict";var r;r=n("fPIg"),e.exports=function(e){var t,n;for(e=(e||"").split("\n"),n="";e.length;){if(t=e[0],t.trim()){"#"===t.charAt(0)&&(n=e.shift().replace(/^#/g,"").trim());break}e.shift()}return[n,r(e.join("\n"))]}},fPIg:function(e,t,n){"use strict";var r;r=n("obn1"),r.setOptions({renderer:new r.Renderer,gfm:!0,tables:!0,breaks:!0,smartLists:!0}),e.exports=r},nAB9:function(e,t,n){"use strict";var r,i=function(){function e(e,t){var n=[],r=!0,i=!1,s=void 0;try{for(var o,l=e[Symbol.iterator]();!(r=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){i=!0,s=e}finally{try{!r&&l.return&&l.return()}finally{if(i)throw s}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();r=$(window),e.exports=function(e,t){var s=this;return PP.get("-/"+e+".md",function(o){var l,h,a,u,p,c,g,d,f,b,k,x=n("MU2S")(o),m=i(x,2);return d=m[0],h=m[1],PP.open&&n.e(4).then(n.bind(null,"uoHJ")).then(function(t){return t(e,s,function(){return s[0]._rm()})}),f=$("<div class=TXT><h1>"+$.escape(d||"无题")+"</h1></div>"),s.find(".PboxMain").replaceWith(f),h=h.replaceAll('<img src="','<img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="'),h=$(h).toArray(),u=0,k=function(){return u=parseInt(2*r.height()+200)},k(),l=++$.guid,g="scroll."+l,c=function(){var e,t,n,r,i,s,o;for(e=h.length,o=this.scrollTop;e--;){if(f.height()-o>u)return void a.update();for(t=h.shift(),s=$(t).find("img"),r=0,i=s.length;r<i;r++)n=s[r],n.src=n.dataset.src,delete n.dataset.src;f.append(t)}a.update(),b()},b=function(){return a.unbind(g),r.unbind(p)},p="resize."+l,r.bind(p,function(){return c.apply(a),k()}),s.on("rm",b),a=s.find(".macS")[0].scrollbar,a.bind(g,c),c.apply(a),$.doc_title((t||"")+s.find("h1:first").text())})}},obn1:function(e,t,n){"use strict";var r,i,s,o,l,h,a,u,p,c,g,d,f,b,k,x;d=function(){},b=function(e,t){var n;return e=e.source,t=t||"",n=function(r,i){return r?(i=i.source||i,i=i.replace(/(^|[^\[])\^/g,"$1"),e=e.replace(r,i),n):new RegExp(e,t)}},a={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:d,hr:/^( *[-*_]){3,} *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,nptable:d,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,blockquote:/^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,table:d,paragraph:/^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,text:/^[^\n]+/},i=function(e){this.tokens=[],this.tokens.links={},this.options=e||c.defaults,this.rules=a.normal,this.options.gfm&&(this.options.tables?this.rules=a.tables:this.rules=a.gfm)},r=function(e,t){if(this.options=t||c.defaults,this.links=e,this.rules=p.normal,this.renderer=this.options.renderer||new o,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.gfm?this.options.breaks?this.rules=p.breaks:this.rules=p.gfm:this.options.pedantic&&(this.rules=p.pedantic)},o=function(e){this.options=e||{}},s=function(e){this.tokens=[],this.token=null,this.options=e||c.defaults,this.options.renderer=this.options.renderer||new o,this.renderer=this.options.renderer,this.renderer.options=this.options},u=function(e,t){return e.replace(t?/&/g:/&(?!#?\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")},x=function(e){return e.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,function(e,t){return t=t.toLowerCase(),"colon"===t?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""})},k=function(e,t){return h[" "+e]||(/^[^:]+:\/*[^\/]*$/.test(e)?h[" "+e]=e+"/":h[" "+e]=e.replace(/[^\/]*$/,"")),e=h[" "+e],"//"===t.slice(0,2)?e.replace(/:[^]*/,":")+t:"/"===t.charAt(0)?e.replace(/(:\/*[^\/]*)[^]*/,"$1")+t:e+t},g=function(e){var t,n,r;for(t=1,r=void 0,n=void 0;t<arguments.length;){r=arguments[t];for(n in r)n=n,Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);t++}return e},c=function(e,t,n){var r,o,l,h,a,p;if(n||"function"==typeof t){n||(n=t,t=null),t=g({},c.defaults,t||{}),l=t.highlight,p=void 0,a=void 0,h=0;try{p=i.lex(e,t)}catch(e){return o=e,n(o)}if(a=p.length,r=function(e){var r;if(e)return t.highlight=l,n(e);r=void 0;try{r=s.parse(p,t)}catch(t){o=t,e=o}return t.highlight=l,e?n(e):n(null,r)},!l||l.length<3)return r();if(delete t.highlight,!a)return r();for(;h<p.length;)!function(e){"code"!==e.type?--a||r():l(e.text,e.lang,function(t,n){return t?r(t):null===n||n===e.text?--a||r():(e.text=n,e.escaped=!0,void(--a||r()))})}(p[h]),h++}else{t&&(t=g({},c.defaults,t));try{return s.parse(i.lex(e,t),t)}catch(e){if(o=e,o.message+="\nPlease report this to https://github.com/chjj/marked.",(t||c.defaults).silent)return"<p>An error occured:</p><pre>"+u(o.message+"",!0)+"</pre>";throw o}}},a.bullet=/(?:[*+-]|\d+\.)/,a.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/,a.item=b(a.item,"gm")(/bull/g,a.bullet)(),a.list=b(a.list)(/bull/g,a.bullet)("hr","\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def","\\n+(?="+a.def.source+")")(),a._tag="(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b",a.html=b(a.html)("comment",/<!--[\s\S]*?-->/)("closed",/<(tag)[\s\S]+?<\/\1>/)("closing",/<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g,a._tag)(),a.paragraph=b(a.paragraph)("hr",a.hr)("heading",a.heading)("lheading",a.lheading)("blockquote",a.blockquote)("tag","<"+a._tag)("def",a.def)(),a.normal=g({},a),a.gfm=g({},a.normal,{fences:/^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,paragraph:/^/,heading:/^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/}),a.gfm.paragraph=b(a.paragraph)("(?!","(?!"+a.gfm.fences.source.replace("\\1","\\2")+"|"+a.list.source.replace("\\1","\\3")+"|")(),a.tables=g({},a.gfm,{nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/}),i.rules=a,i.lex=function(e,t){var n;return n=new i(t),n.lex(e)},i.prototype.lex=function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n"),this.token(e,!0)},i.prototype.token=function(e,t,n){var e,r,i,s,o,l,h,u,p,c;for(e=e.replace(/^ +$/gm,""),p=void 0,u=void 0,s=void 0,i=void 0,r=void 0,l=void 0,c=void 0,o=void 0,h=void 0;e;)if((s=this.rules.newline.exec(e))&&(e=e.substring(s[0].length),s[0].length>1&&this.tokens.push({type:"space"})),s=this.rules.code.exec(e))e=e.substring(s[0].length),s=s[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",text:this.options.pedantic?s:s.replace(/\n+$/,"")});else if(s=this.rules.fences.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"code",lang:s[2],text:s[3]||""});else if(s=this.rules.heading.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"heading",depth:s[1].length,text:s[2]});else if(t&&(s=this.rules.nptable.exec(e))){for(e=e.substring(s[0].length),l={type:"table",header:s[1].replace(/^ *| *\| *$/g,"").split(RegExp(" *\\| *")),align:s[2].replace(/^ *|\| *$/g,"").split(RegExp(" *\\| *")),cells:s[3].replace(/\n$/,"").split("\n")},o=0;o<l.align.length;)/^ *-+: *$/.test(l.align[o])?l.align[o]="right":/^ *:-+: *$/.test(l.align[o])?l.align[o]="center":/^ *:-+ *$/.test(l.align[o])?l.align[o]="left":l.align[o]=null,++o;for(o=0;o<l.cells.length;)l.cells[o]=l.cells[o].split(RegExp(" *\\| *")),++o;this.tokens.push(l)}else if(s=this.rules.lheading.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"heading",depth:"="===s[2]?1:2,text:s[1]});else if(s=this.rules.hr.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"hr"});else if(s=this.rules.blockquote.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"blockquote_start"}),s=s[0].replace(/^ *> ?/gm,""),this.token(s,t,!0),this.tokens.push({type:"blockquote_end"});else if(s=this.rules.list.exec(e)){for(e=e.substring(s[0].length),i=s[2],this.tokens.push({type:"list_start",ordered:i.length>1}),s=s[0].match(this.rules.item),p=!1,h=s.length,o=0;o<h;)l=s[o],c=l.length,l=l.replace(/^ *([*+-]|\d+\.) +/,""),~l.indexOf("\n ")&&(c-=l.length,l=this.options.pedantic?l.replace(/^ {1,4}/gm,""):l.replace(new RegExp("^ {1,"+c+"}","gm"),"")),this.options.smartLists&&o!==h-1&&(r=a.bullet.exec(s[o+1])[0],i===r||i.length>1&&r.length>1||(e=s.slice(o+1).join("\n")+e,o=h-1)),u=p||/\n\n(?!\s*$)/.test(l),o!==h-1&&(p="\n"===l.charAt(l.length-1),u||(u=p)),this.tokens.push({type:u?"loose_item_start":"list_item_start"}),this.token(l,!1,n),this.tokens.push({type:"list_item_end"}),++o;this.tokens.push({type:"list_end"})}else if(s=this.rules.html.exec(e))e=e.substring(s[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&("pre"===s[1]||"script"===s[1]||"style"===s[1]),text:s[0]});else if(!n&&t&&(s=this.rules.def.exec(e)))e=e.substring(s[0].length),this.tokens.links[s[1].toLowerCase()]={href:s[2],title:s[3]};else if(t&&(s=this.rules.table.exec(e))){for(e=e.substring(s[0].length),l={type:"table",header:s[1].replace(/^ *| *\| *$/g,"").split(RegExp(" *\\| *")),align:s[2].replace(/^ *|\| *$/g,"").split(RegExp(" *\\| *")),cells:s[3].replace(/(?: *\| *)?\n$/,"").split("\n")},o=0;o<l.align.length;)/^ *-+: *$/.test(l.align[o])?l.align[o]="right":/^ *:-+: *$/.test(l.align[o])?l.align[o]="center":/^ *:-+ *$/.test(l.align[o])?l.align[o]="left":l.align[o]=null,++o;for(o=0;o<l.cells.length;)l.cells[o]=l.cells[o].replace(/^ *\| *| *\| *$/g,"").split(RegExp(" *\\| *")),++o;this.tokens.push(l)}else if(t&&(s=this.rules.paragraph.exec(e)))e=e.substring(s[0].length),this.tokens.push({type:"paragraph",text:"\n"===s[1].charAt(s[1].length-1)?s[1].slice(0,-1):s[1]});else if(s=this.rules.text.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"text",text:s[0]});else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));return this.tokens},p={escape:/^\\([\\`*{}\[\]()#+\-.!_>])/,autolink:/^<([^ >]+(@|:\/)[^ >]+)>/,url:d,tag:/^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,strong:/^\*\*([\s\S]+?)\*\*(?!\*)/,u:/^__([\s\S]+?)__(?!_)/,em:/^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,code:/^(`+)([\s\S]*?[^`])\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:d,text:/^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/},p._inside=/(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/,p._href=/\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/,p.link=b(p.link)("inside",p._inside)("href",p._href)(),p.reflink=b(p.reflink)("inside",p._inside)(),p.normal=g({},p),p.pedantic=g({},p.normal,{u:/^__(?=\S)([\s\S]*?\S)__(?!_)/,strong:/^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/}),p.gfm=g({},p.normal,{escape:b(p.escape)("])","~|])")(),url:/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:b(p.text)("]|","~]|")("|","|https?://|")()}),p.breaks=g({},p.gfm,{br:b(p.br)("{2,}","*")(),text:b(p.gfm.text)("{2,}","*")()}),r.rules=p,r.output=function(e,t,n){var i;return i=new r(t,n),i.output(e)},r.prototype.output=function(e){var t,n,r,i,s;for(i="",r=void 0,s=void 0,n=void 0,t=void 0;e;)if(t=this.rules.escape.exec(e))e=e.substring(t[0].length),i+=t[1];else if(t=this.rules.autolink.exec(e))e=e.substring(t[0].length),"@"===t[2]?(s=u(":"===t[1].charAt(6)?this.mangle(t[1].substring(7)):this.mangle(t[1])),n=this.mangle("mailto:")+s):(s=u(t[1]),n=s),i+=this.renderer.link(n,null,s);else if(this.inLink||!(t=this.rules.url.exec(e))){if(t=this.rules.tag.exec(e))!this.inLink&&/^<a /i.test(t[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(t[0])&&(this.inLink=!1),e=e.substring(t[0].length),i+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):u(t[0]):t[0];else if(t=this.rules.link.exec(e))e=e.substring(t[0].length),this.inLink=!0,i+=this.outputLink(t,{href:t[2],title:t[3]}),this.inLink=!1;else if((t=this.rules.reflink.exec(e))||(t=this.rules.nolink.exec(e))){if(e=e.substring(t[0].length),r=(t[2]||t[1]).replace(/\s+/g," "),!(r=this.links[r.toLowerCase()])||!r.href){i+=t[0].charAt(0),e=t[0].substring(1)+e;continue}this.inLink=!0,i+=this.outputLink(t,r),this.inLink=!1}else if(t=this.rules.u.exec(e))e=e.substring(t[0].length),i+=this.renderer.u(this.output(t[2]||t[1]));else if(t=this.rules.strong.exec(e))e=e.substring(t[0].length),i+=this.renderer.strong(this.output(t[2]||t[1]));else if(t=this.rules.em.exec(e))e=e.substring(t[0].length),i+=this.renderer.em(this.output(t[2]||t[1]));else if(t=this.rules.code.exec(e))e=e.substring(t[0].length),i+=this.renderer.codespan(u(t[2].trim(),!0));else if(t=this.rules.br.exec(e))e=e.substring(t[0].length),i+=this.renderer.br();else if(t=this.rules.del.exec(e))e=e.substring(t[0].length),i+=this.renderer.del(this.output(t[1]));else if(t=this.rules.text.exec(e))e=e.substring(t[0].length),i+=this.renderer.text(u(this.smartypants(t[0])));else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0))}else e=e.substring(t[0].length),s=u(t[1]),n=s,i+=this.renderer.link(n,null,s);return i},r.prototype.outputLink=function(e,t){var n,r;return n=u(t.href),r=t.title?u(t.title):null,"!"!==e[0].charAt(0)?this.renderer.link(n,r,this.output(e[1])):this.renderer.image(n,r,u(e[1]))},r.prototype.smartypants=function(e){return this.options.smartypants?e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014\/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014\/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…"):e},r.prototype.mangle=function(e){var t,n,r,i;if(!this.options.mangle)return e;for(i="",r=e.length,n=0,t=void 0;n<r;)t=e.charCodeAt(n),Math.random()>.5&&(t="x"+t.toString(16)),i+="&#"+t+";",n++;return i},o.prototype.code=function(e,t,n){var r;return this.options.highlight&&null!==(r=this.options.highlight(e,t))&&r!==e&&(n=!0,e=r),t?'<pre><code class="'+this.options.langPrefix+u(t,!0)+'">'+(n?e:u(e,!0))+"\n</code></pre>\n":"<pre><code>"+(n?e:u(e,!0))+"\n</code></pre>"},o.prototype.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"},o.prototype.html=function(e){return e},o.prototype.heading=function(e,t,n){return"<h"+t+' id="'+this.options.headerPrefix+n.toLowerCase().replace(/[^\w]+/g,"-")+'">'+e+"</h"+t+">\n"},o.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},o.prototype.list=function(e,t){var n;return"<"+(n=t?"ol":"ul")+">\n"+e+"</"+n+">\n"},o.prototype.listitem=function(e){return"<li>"+e+"</li>\n"},o.prototype.paragraph=function(e){return"<p>"+e+"</p>\n"},o.prototype.table=function(e,t){return"<table>\n<thead>\n"+e+"</thead>\n<tbody>\n"+t+"</tbody>\n</table>\n"},o.prototype.tablerow=function(e){return"<tr>\n"+e+"</tr>\n"},o.prototype.tablecell=function(e,t){var n;return n=t.header?"th":"td",(t.align?"<"+n+' style="text-align:'+t.align+'">':"<"+n+">")+e+"</"+n+">\n"},l=function(e){return function(t){return"<"+e+">"+t+"</"+e+">"}},o.prototype.strong=l("strong"),o.prototype.em=l("em"),o.prototype.u=l("u"),o.prototype.del=l("del"),o.prototype.codespan=l("code"),o.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"},o.prototype.link=function(e,t,n){var r,i;if(this.options.sanitize){try{i=decodeURIComponent(x(e)).replace(/[^\w:]/g,"").toLowerCase()}catch(e){return""}if(0===i.indexOf("javascript:")||0===i.indexOf("vbscript:")||0===i.indexOf("data:"))return""}return this.options.baseUrl&&!f.test(e)&&(e=k(this.options.baseUrl,e)),r='<a href="'+e+'"',t&&(r+=' title="'+t+'"'),r+=">"+n+"</a>"},o.prototype.image=function(e,t,n){var r;return this.options.baseUrl&&!f.test(e)&&(e=k(this.options.baseUrl,e)),r='<img src="'+e+'" alt="'+n+'"',t&&(r+=' title="'+t+'"'),r+=this.options.xhtml?"/>":">"},o.prototype.text=function(e){return e},s.parse=function(e,t,n){var r;return r=new s(t,n),r.parse(e)},s.prototype.parse=function(e){var t;for(this.inline=new r(e.links,this.options,this.renderer),this.tokens=e.reverse(),t="";this.next();)t+=this.tok();return t},s.prototype.next=function(){return this.token=this.tokens.pop()},s.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0},s.prototype.parseText=function(){var e;for(e=this.token.text;"text"===this.peek().type;)e+="\n"+this.next().text;return this.inline.output(e)},s.prototype.tok=function(){var e,t,n,r,i,s,o,l;switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,this.token.text);case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":for(n="",e="",l=void 0,t=void 0,s=void 0,t="",i=0;i<this.token.header.length;)this.token.align[i],t+=this.renderer.tablecell(this.inline.output(this.token.header[i]),{header:!0,align:this.token.align[i]}),i++;for(n+=this.renderer.tablerow(t),i=0;i<this.token.cells.length;){for(l=this.token.cells[i],t="",s=0;s<l.length;)t+=this.renderer.tablecell(this.inline.output(l[s]),{header:!1,align:this.token.align[s]}),s++;e+=this.renderer.tablerow(t),i++}return this.renderer.table(n,e);case"blockquote_start":for(e="";"blockquote_end"!==this.next().type;)e+=this.tok();return this.renderer.blockquote(e);case"list_start":for(e="",o=this.token.ordered;"list_end"!==this.next().type;)e+=this.tok();return this.renderer.list(e,o);case"list_item_start":for(e="";"list_item_end"!==this.next().type;)e+="text"===this.token.type?this.parseText():this.tok();return this.renderer.listitem(e);case"loose_item_start":for(e="";"list_item_end"!==this.next().type;)e+=this.tok();return this.renderer.listitem(e);case"html":return r=this.token.pre||this.options.pedantic?this.token.text:this.inline.output(this.token.text),this.renderer.html(r);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText())}},h={},f=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i,d.exec=d,c.options=c.setOptions=function(e){return g(c.defaults,e),c},c.defaults={gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,sanitizer:null,mangle:!0,smartLists:!1,silent:!1,highlight:null,langPrefix:"lang-",smartypants:!1,headerPrefix:"",renderer:new o,xhtml:!1,baseUrl:null},c.Parser=s,c.parser=s.parse,c.Renderer=o,c.Lexer=i,c.lexer=i.lex,c.InlineLexer=r,c.inlineLexer=r.output,c.parse=c,e.exports=c}});