window.W||(window.W=new Array,W.$modules=[]),W.$modules.push(function(e,t,n){function r(e,t,n){function r(e){e=e&&e.component,n&&n(e)}function i(e,t){function n(){var t=i.shift();if(!t)return r(e);var a=(e=e[t])&&e.component;if(!a)return r(null);var o=a.props["isTemplate."];if(!o||"none"!=(a.state.style||{}).display)return n();var s=3==o?"inline":2==o?"block":"flex",l=Object.assign({},a.state.style,{display:s});a.setState({style:l},n)}var i=t.split(".");if(!e){var a=i.shift();a||(a=i.shift());var o=(e=y)&&e.component;if(!o||o.$gui.keyid!=a)return r(null)}return n()}var a=d.pathLevelInfo(t);if(!a)return r(null);var o=a[0],s=a[1];if(a[2]){if(e){var f=u=e.widget;if(s<0&&(f=f&&f.parent),f){for(var p=o.slice(0,2);"//"==p;){if(!(f=f.parent))return r(null);p=(o=o.slice(2)).slice(0,2)}return i(f,o)}}}else if(-1==s){if(o)return i(null,o)}else{if(!e)return r(null);for(var u=e.widget;u&&s>0;){var c=u&&u.component;if(c&&c.props["isNavigator."]&&0==(s-=1))break;var g=u.parent;if(!g){s-=1,u=l;break}u=g}if(u&&0==s)return o?i(u,o):r(u)}return r(null)}function i(e,t,n){for(var r=n?0:1,i=e.split("."),a=t.split("."),o=Math.min(i.length,a.length),s="",f=0,p=0;p<o;p++)if(i[p]!=a[p]){p>0&&(f=p,s=i.slice(0,f).join("."));break}var u="";if(s)if(a.length>=i.length&&f>=2&&f==i.length-r)u="//"+a.slice(f).join(".");else{for(var d=!1,c="",g=l.W(s);g;){var h=g.component;if(!h){g!==l&&(c="");break}if(h.props["isNavigator."]){d=!0;break}c="."+h.$gui.keyid+c,g=g.parent}if(!c&&!d)return"";u=a.slice(f).join("."),d?(c&&(c=c.slice(1)),u=c?"./"+c+(u?".":"")+u:"./"+u):c&&(u=c+(u?".":"")+u)}else u=t;return u}function a(e,t,n){function r(e){if(!e)return"";var t=h[e];if(t)return t;var n=e[0];if("#"==n&&4==e.length)return"#"+e[1]+e[1]+e[2]+e[2]+e[3]+e[3];if("#"==n&&7==e.length)return e;if("rgb"==e.slice(0,3)&&"("==(e=e.slice(3).trim())[0]&&")"==e.slice(-1)){var r=e.slice(1,-1).split(",");if(3==r.length)return t="#"+("0"+parseInt(r[0]).toString(16)).slice(-2),t+=("0"+parseInt(r[1]).toString(16)).slice(-2),t+=("0"+parseInt(r[2]).toString(16)).slice(-2)}return""}var i=e._;if(!i||!i._getGroupOpt)return null;var a,o,s=void 0,l=i._statedProp||[],f=i._silentProp||[],u=i._htmlText,d=i._className,c={name:d,desc:i._classDesc,option:i._getGroupOpt(e),doc:i._docUrl||"",linkPath:"",linkStyles:null},g=!1,m=0;void 0!==(s=e.state["data-unit.path"])?(m=2,g=!0,d="RefDiv"):void 0!==(s=e.state["data-span.path"])&&(m=3,g=!0,d="RefSpan"),g?(c.linkPath=s,c.linkStyles=e.props.styles):e.props["childInline."]?m=p.hasClass(e,"rewgt-unit")?2:3:p.hasClass(e,"rewgt-unit")&&(m=1),c.flag=m;var y,v;if(g){var w=e.props["link.props"];if(!w)return null;if(a=Object.assign({},w),o=a.style||{},delete a.style,delete a.styles,"string"==typeof(y=a["keyid."]))if("$"==y[0]){y=y.slice(1);var k=parseInt(y);k+""==y?(a["keyid."]=k,v=y=""):v=a["keyid."]=y}else v=y;else v=y=""}else{if(e.props["isReference."])return null;a=Object.assign({},e.props),o=a.style||{},delete a.style,v="string"!=typeof(y=e.$gui.keyid)?y="":y}if(l.forEach(function(t){a.hasOwnProperty(t)&&(a[t]=e.state[t])}),f.forEach(function(e){delete a[e]}),u){var b=g?a["html."]:e.state["html."];b&&"string"==typeof b&&(c["html."]=b)}delete a["html."],delete a.children,delete a["hasStatic."],delete a["data-rewgt-owner"],a.key=v;var S={},$=!1,O=Object.keys(a),P=100,E={key:{propertyOrder:P,type:"string",default:y}};O.forEach(function(e){var r=e.indexOf(".");if(r>=0){if(r==e.length-1)return;return S[e]=a[e],void($=!0)}if(!n||"$"!=e[0]){var i=a[e],o=!1;if(void 0!==i){if(0!=e.indexOf("data-")&&0!=e.indexOf("aria-")||(o=!0),"klass"==e){if("string"!=typeof i)return;var s=i.split(/[^-_a-zA-Z0-9]+/);if(0==s.length)return;return P+=1,void(E.klass={type:"array",options:{disable_array_reorder:!0},propertyOrder:P,items:{type:"string",format:"classname"},default:s})}var l=t[e],f="any",p=-1,u=null,d="";if(l){if(0==l.length)return;p=l[0],f=l[1]||"any",u=l[2]||null,d=l[3]||""}p<0&&(p=P+=1);var c={propertyOrder:p,default:i},g=!0;if(u&&(c.enum=u),d&&(c.description=d),o)c.type="string","string"!=typeof i&&(c.default=JSON.stringify(i));else if(null===i||"any"==f){"$"==e[0]&&(c.type="string");var h=typeof i;if("string"==h)i||(c.type="string");else{if("function"==h)return void console.log("warning: can not edit function property ("+e+")");c.default=JSON.stringify(i)}}else if("integer"==f){var m=parseInt(i);m+""==i+""?(c.type=f,c.default=m):g=!1}else"number"==f||"boolean"==f||"array"==f||"object"==f?"array"==f&&Array.isArray(i)?c.type=f:typeof i==f?c.type=f:g=!1:"string"==typeof i?(c.type="string","string"!=f&&(c.format=f)):g=!1;g||("string"!=typeof i&&(c.default=JSON.stringify(i)),console.log("warning: property ("+e+") is not match to expected type ("+f+").")),E[e]=c}}}),$&&(c.propsEx=S);var C=Object.keys(o);if(C.length){var N={};P+=1,E.style={type:"object",properties:N,propertyOrder:P},C.sort(),C.forEach(function(e){var t,n={type:"string",default:o[e]+""};if("color"==e||(t=e.indexOf("Color"))>0&&t+5==e.length){var i=r(n.default.trim());i&&(n.default=i,n.format="color")}N[e]=n})}return{type:"object",title:d+" - "+v,properties:E,wdgtOption:c}}var o=e("react"),s=(e("react-dom"),o.createClass);s||console.log("fatal error: invalid React.createClass");var l=e("shadow-widget"),f=l.$main,p=l.$utils,u=l.$templates,d=l.$creator,c=u.RefDiv._createClass(null),g=u.RefSpan._createClass(null),h={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dodgerblue:"#1e90ff",feldspar:"#d19275",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgrey:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslateblue:"#8470ff",lightslategray:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370d8",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#d87093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",violetred:"#d02090",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},m=null,y=null;f.$$onLoad.push(function(e){function t(e,t,n){if(3==t){if(3!=e)return p.instantShow("error: can not insert none-inline into inline widget."),!1}else if(2==t){if(0==e)return p.instantShow("error: can not insert panel into paragraph."),!1}else if(1==t){if(0==e){if(!n)return p.instantShow("error: can not insert panel into none-panel."),!1}else if(3==e)return p.instantShow("error: inline widget can not be inserted into panel or div."),!1}else if(3==e)return p.instantShow("error: inline widget can not be inserted into panel or div."),!1;return!0}function n(e,t,n,r,i,a){function s(){if(l){var e=N||0===N?N+"":"";n.linkPath&&"$"==e[0]&&(e=e.slice(1)),setTimeout(function(){e||(e=j.comps.length+j.removeNum-1);var t=y[e];(t=t&&t.component)&&(u=t.getHtmlNode(),i&&(w=t)),a&&a(l,u)},300)}else a&&a(l,u)}var l=!1,u=null,h=null,m=e.widget,y=m&&m.parent,v=y&&y.component;if(!v)return p.instantShow("warning: update property failed (out of date)."),s();if("object"!=typeof r)return s();var k=e.getHtmlNode(),b=k&&k.parentNode;if(b&&f(b))return p.instantShow("error: can not modify widget that under linker."),s();var S=r.klass;if(Array.isArray(S)){var $="";S.forEach(function(e){$&&($+=" "),$+=(e||"undefined")+""}),S=$||void 0}else void 0!==S&&(S=null);delete r.klass;var O=r.style;if(O&&O instanceof Object){var P={},E=!1;Object.keys(O).forEach(function(e){E=!0;var t=O[e]+"";0==t.search(/^#[a-fA-F0-9]{6}$/)&&t[1]==t[2]&&t[3]==t[4]&&t[5]==t[6]&&(t="#"+t[1]+t[3]+t[5]),P[e]=t}),O=E?P:null}else O=null;delete r.style;var C=e.$gui.keyid,N=r.key,x=!1;if("string"==typeof N){if(N=N.trim())if(parseInt(N)+""==N)N="";else if(C!==N&&y[N])return p.instantShow("error: duplication of key name."),s();N||"string"!=typeof C||(x=!0)}else N="";delete r["keyid."],delete r.key,Object.keys(r).forEach(function(e){var n=r[e];if(0!=e.indexOf("data-")&&0!=e.indexOf("aria-")){if(void 0!==n){var i=t[e],a="any";if(i&&i.length&&(a=i[1]),"any"==a&&"string"==typeof n&&"$"!=e[0]){var o=n.trim(),s=o[0];if(('"'==s||"'"==s)&&o.length>=2&&o.slice(-1)==s)r[e]=o.slice(1,-1);else if("["==s&&"]"==o.slice(-1)||"{"==s&&"}"==o.slice(-1))try{r[e]=JSON.parse(o)}catch(e){console.log("error: parse JSON failed, input string:"),console.log(o)}else if("null"==o)r[e]=null;else{var l=parseFloat(o);l+""===o&&(r[e]=l)}}}}else r[e]=n+""}),x?(r["keyid."]="",r.key=""):N?r["keyid."]=r.key=N:(r["keyid."]=N=C,r.key=N+""),O?r.style=O:e.props.style&&(r.style=void 0),null!==S&&(r.klass=S);var W=n.propsEx;W&&Object.keys(W).forEach(function(e){r.hasOwnProperty(e)||(r[e]=W[e])});var _="",I=["-"+C],j=v.$gui,T=j.compIdx[C];if("number"!=typeof T)return s();if(!(h=j.comps[T]))return s();if(n.linkPath){var H=2==n.flag?c:g;r.$=n.linkPath;var A;"string"==typeof C?("$"!=C[0]&&(_="$"+C,I.push("-"+_)),A=""===N?C:N):(_="$"+C,I.push("-"+_),A=N+""),A&&"$"!=A[0]&&(A="$"+A),A&&(r["keyid."]=r.key=A),n.linkStyles&&(r.styles=n.linkStyles),n["html."]&&!r.hasOwnProperty("html.")&&(r["html."]=n["html."]),h=o.createElement(H,r)}else n["html."]&&!r.hasOwnProperty("html.")&&(r["html."]=n["html."]),h=d.deepCloneReactEle(h,r,m,e);for(var R=j.comps.length,M="",D=T+1;D<R;D+=1){var L=j.comps[D],q=L&&p.keyOfElement(L);if(q&&q!=_){M=q;break}}I.push(function(){l=!0,M?v.setChild("+"+M,h,s):v.setChild(h,s)}),v.setChild.apply(v,I)}m=d.containNode_,y=d.topmostWidget_,p.instantShow!==m.instantShow&&setTimeout(function(){"function"==typeof m.instantShow&&(p.instantShow=m.instantShow)},300),m.closeModal=function(e){function t(){e&&e()}var n=y&&y.component;if(!n)return t();var r=o.createElement(s(u.Panel._extend()),{"hookTo.":y,key:"$pop","keyid.":"$pop",left:0,top:0,width:0,height:0,style:{position:"absolute",zIndex:3016,overflow:"visible"}});n.setChild("$pop",r,t)},m.topmostNode=function(){var e=y&&y.component;return e?e.getHtmlNode():null},m.pluginCss=function(){var e=[];return(l.$css||[]).forEach(function(t){if(Array.isArray(t)){var n=t[0],r=t[1];!r||"pseudo"!=n&&"basic"!=n&&"lazy"!=n||e.push(r+"")}}),e},m.getWidgetNode=function(e,t,n){function i(e){n&&n(e,a)}var a=!1;if(!e)return i(null);var o=null,s=e[0],f=("."==s||"/"==s)&&"/"!=e[1];if(t&&!f&&(o=l.W(t),!(o=o&&o.component)))return i(null);r(o,e,function(e){var t=null;e&&(a=!!e.props["isReference."],t=e.getHtmlNode()),i(t)})},m.getDocHtml=function(e){var t=[];if(m.dumpTree(t=[]),1==t.length){var n=t[0];if(e){var r="",i=n[0];if(Array.isArray(i))for(var a,o=1;a=n[o];o++){var s=m.streamTree(a,0,1);s&&(r+=s)}return r}return m.streamTree(n,0,1)}return""},m.resetRootShow=function(e){var t=y,n=t&&t.component;if(n){var r=[];n.$gui.comps.forEach(function(e){if(e){var n=p.keyOfElement(e);if(n&&"$pop"!=n){var i=t[n];if(i=i&&i.component)if("absolute"==(i.state.style||{}).position)i.setState({style:Object.assign({},i.state.style,{display:"none"})});else{var a=p.hasClass(i,"rewgt-panel")?"flex":"block";r.push([i,a])}}}}),r.forEach(function(e){var t=e[1];(e=e[0]).setState({style:Object.assign({},e.state.style,{display:t})})})}e&&setTimeout(function(){e()},0)},m.showRootPage=function(e,t){function n(){t&&t(r)}var r="";if(!l.__design__||"$pop"==e)return n();var i=y,a=i&&i.component;if(a){var o=i.W(e);if(!(o=o&&o.component))return n();var s=o.getHtmlNode();s&&(s.classList.contains("rewgt-panel")?r="Panel":s.classList.contains("rewgt-unit")?r="Unit":s.classList.contains("rewgt-inline")&&(r="Span"),r&&(s.hasAttribute("data-temp.type")?r="Template":s.classList.contains("rewgt-scene")&&(r="ScenePage")));var f=!1;"absolute"==(o.state.style||{}).position&&(f=!0);var u=[];a.$gui.comps.forEach(function(t){if(t){var n=p.keyOfElement(t);if(n&&"$pop"!=n){var r=i[n];if(r=r&&r.component){var a,o=p.hasClass(r,"rewgt-panel")?"flex":"block";"none"==(a="absolute"==(r.state.style||{}).position?f&&n==e?o:"none":f?"none":o)?r.setState({style:Object.assign({},r.state.style,{display:"none"})}):u.push([r,a])}}}}),u.forEach(function(e){var t=e[1];(e=e[0]).setState({style:Object.assign({},e.state.style,{display:t})})})}n()},m.removeWidget=function(e,t){if(e&&"string"==typeof e){var n=l.W(e),r=n&&n.component;if(r){var i=n.parent,a=r.$gui.keyid,o=i&&i.component;if(o)return void o.setChild("-"+a,function(e){t&&t(e)})}}else if(Array.isArray(e)&&e.length>=2){var s=y&&y.W(e[0]),f=s&&s.component;if(f&&f.props["isScenePage."]){var p=[];return e.slice(1).forEach(function(e){p.push("-"+e)}),p.push(function(e){t&&t(e)}),void f.setChild.apply(f,p)}}t&&t(!1)},m.listPageChild=function(e){var t=[],n=y&&y.W(e),r=n&&n.component;return r&&r.props["isScenePage."]&&(r.$gui.comps||[]).forEach(function(e){if(e){var r=p.keyOfElement(e);if("$"==r[0])return;var i=n[r];if(i=i&&i.component){var a=i.getHtmlNode();a&&t.push([r,a])}}}),t},m.listChildren=function(e){var t=[],n=[],r=-1,i="",a="#a00",o=!0,s=y;e&&(s=l.W(e))!==y&&(o=!1);var f=s&&s.component;if(f){var u=f.$gui.comps||[],d=f.props["isNavigator."];u.forEach(function(e){if(e){var i=p.keyOfElement(e),l=i&&s[i];if(l=l&&l.component){if(o||d)if(o){if("$"==i[0]){if("$pop"==i)return;if("$"==i[1]&&e.props["isTemplate."])return}l.props["isScenePage."]&&n.push([i,l.getHtmlNode()]);var f=l.state.style||{};"absolute"==f.position&&"none"!=f.display&&(r=t.length,a=l.props["isTemplate."]?"#00f":"#a00")}else l.props["isPlayground."]&&(r=t.length);t.push(i)}}}),i=f._._desc(f)}return[i,a,r,t,n]},m.resizeWidget=function(e,t,n,r,i){var a,o=l.W(e),s=!1,f=o&&o.component;if(f&&(a=f.getHtmlNode())){if(p.hasClass(f,["rewgt-panel","rewgt-unit"])){var u=a.getBoundingClientRect(),c=f.state.width,g=f.state.height;if((1==t||3==t)&&"number"==typeof c)if(c>0&&c<1){c>=.9999&&(c=1);var h=Math.max(0,u.width+n);0==h?h=.001:(h/=u.width/c)>=1&&(h=.9999),f.duals.width=h,s=!0}else c>=1&&(f.duals.width=Math.max(1,u.width+n),s=!0);if((2==t||3==t)&&"number"==typeof g)if(g>0&&g<1){g>=.9999&&(g=1);var m=Math.max(0,u.height+r);0==m?m=.001:(m/=u.height/g)>=1&&(m=.9999),f.duals.height=m,s=!0}else g>=1&&(f.duals.height=Math.max(1,u.height+r),s=!0)}else if(f.props["childInline."]){var u=a.getBoundingClientRect(),y={};1!=t&&3!=t||(y.width=Math.max(0,u.width+n)+"px",s=!0),2!=t&&3!=t||(y.height=Math.max(0,u.height+r)+"px",s=!0),s&&(f.duals.style=y)}if(s){var v=f.parentOf(!0);return void(v?d.renewWidgetSpared(v,!0,function(){f.reRender(function(){i&&i(s)})}):f.reRender(function(){i&&i(s)}))}}i&&i(s)},m.setSceneCurrent=function(e){y&&e.forEach(function(e){var t=e[0],n=e[1],r=y.W(t);(r=r&&r.component)&&r.props["isScenePage."]&&r.setSelected(n)})},m.hideTemplate=function(e,t){var n=l.W(e),r=n&&n.component;r&&r.props["isTemplate."]&&(t&&n.parent===y||r.setState({style:Object.assign({},r.state.style,{display:"none"})}))},m.showTemplate=function(e,t,n){function r(){n&&n(i)}var i=!1,a=l.W(e),o=a&&a.component;if(!o)return r();var s=o.props["isTemplate."];if(!s)return r();if(t&&a.parent===y)return r();var f=3==s?"inline":2==s?"block":"flex";i=!0,o.setState({style:Object.assign({},o.state.style,{display:f})},r)};var f=function(e){return!(!e||e===m)&&(!(!e.getAttribute("data-unit.path")&&!e.getAttribute("data-span.path"))||f(e.parentNode))};m.isUnderLinker=f;var h=function(e,t){for(;e&&e!==m;){if(e.classList.contains("rewgt-panel")||e.classList.contains("rewgt-unit")||e.classList.contains("rewgt-inline"))if(t>0)t-=1;else{var n,r=e.getAttribute("data-group.opt");if(r&&"all"!=(n=r.split("/")[1]||"all"))return n}e=e.parentNode}return"all"};m.getEditableFlag=h,m.bindLinker=function(e,t,n){function r(){n&&n(a)}var a=!1,s=0,u=!1;if(e==t)return p.instantShow("error: can not link to self."),r();var d=l.W(e),h=l.W(t),m=d&&d.component,y=h&&h.component;if(!m||!function(e){if(s=e.props["isReference."])return u=!0,!0;var t=e.props["data-unit.path"];return t?(s=1,!0):!!(t=e.props["data-span.path"])&&(s=2,!0)}(m))return p.instantShow("error: source widget is not a linker."),r();if(!y)return p.instantShow("error: invalid target widget."),r();if(y.props["isTemplate."])return p.instantShow("error: can not link to a template."),r();if(2==s){if(!y.props["childInline."]||p.hasClass(y,"rewgt-unit"))return p.instantShow("error: RefSpan can only link to inline widget."),r()}else if(!p.hasClass(y,["rewgt-panel","rewgt-unit"]))return p.instantShow("error: RefDiv can only link to: panel, div, paragraph."),r();"number"==typeof y.$gui.keyid&&p.instantShow("warning: link to numbered-key is not suggested.");var v=i(e,t,!1);if(!v)return r();var w=d.parent,k=w&&w.component;if(!k)return r();if(f(k.getHtmlNode()))return p.instantShow("error: binding path disallowed under a linker."),r();var b=m.$gui.keyid,S=b+"",$=S;"$"!=S[0]&&(b=S="$"+S);var O,P=null,E=k.$gui,C=E.compIdx[$];if("number"==typeof C&&(P=E.comps[C]),!P)return r();var N={$:v,key:S,"keyid.":b};if(u)O=o.cloneElement(P,N);else{var x=2==s?g:c;O=o.createElement(x,Object.assign(m.props["link.props"]||{},N))}var W=E.comps[C+1],_=W&&p.keyOfElement(W);k.setChild("-"+$,function(){a=!0,_?k.setChild("+"+_,O,r):k.setChild(O,r)})},m.createWidget=function(e,n,r,i,a,s,u){function c(){if(u){if(v&&b)for(var e,t=Object.keys(b.$gui.compIdx),n=0;e=t[n];n+=1)if(!w.hasOwnProperty(e)&&"$"!=e[0]){var r=b.widget,i=r&&r[e],a=i&&i.component;a&&(k=a.getHtmlNode());break}u(v,k)}}function g(){if(b=i?$:P,f(b.getHtmlNode()))return p.instantShow("error: can not add widget to a linker."),c();var e=D.props["data-unit.path"],t=D.props["data-span.path"],r="",l="string"==typeof e?"data-unit.path":"string"==typeof t?"data-span.path":"";if(l){if(b.widget===y)return p.instantShow("error: can not use linker under topmost widget."),c();(r=t||e)||p.instantShow("warning: link path is empty.")}var u=p.keyOfElement(D),d=!1,g=!1;u&&"string"==typeof u?((g=0==u.search(/^auto[0-9]+$/))||parseInt(u)+""===u)&&(d=!0):d=!0;var h=!1;d?h=!0:"number"==typeof b.$gui.compIdx[u]&&(h=!0);var m=G&&!U;if(h){O={"keyid.":"",key:""};if(g&&b.props["isScenePage."]){for(var k=b.$gui.removeNum+b.$gui.comps.length,S="auto"+k;"number"==typeof b.$gui.compIdx[S];)S="auto"+(k+=1);O["keyid."]=O.key=S}l&&(O[l]=r),m&&(O.left=a,O.top=s),n&&(O["data-group.optid"]=n+""),D=o.cloneElement(D,O)}else if(l||m||n){var O={};l&&(O[l]=r),m&&(O.left=a,O.top=s),n&&(O["data-group.optid"]=n+""),D=o.cloneElement(D,O)}v=!0,i?(Object.assign(w,b.$gui.compIdx),b.setChild(D,c)):(Object.assign(w,b.$gui.compIdx),b.setChild("+"+$.$gui.keyid,D,c))}var v=!1,w={},k=null,b=null,S=null;r?S=l.W(r):m.children[0]&&(S=y,r=m.frameInfo.rootName,i=!0);var $=S&&S.component,O=S&&S.parent,P=O&&O.component;if(!$||!i&&!P)return p.instantShow("error: invalid target widget."),c();var E=$.getHtmlNode();if(E&&"all"!=h(E,i?0:1))return p.instantShow("error: insert target is disallowed."),c();if(!e[0]){var C=(M=e[1])&&M.html;if(Array.isArray(C)){var N=i?$:P;if((k=N.getHtmlNode())&&f(k))return p.instantShow("error: can not add widget to a linker."),c();var x,W=C.join(""),_=document.createElement("div");if(_.innerHTML=W,(x=_.children.length)>0){for(var I=[],j=l.$staticNodes.push(I)-1,T=0;T<x;T+=1)I.push(_.children[T]);var H=N.$gui,A=H.comps.length+H.removeNum,R=j+"",M={"keyid.":A,key:A+"",className:"rewgt-static",name:R};l.__design__&&(M.onMouseDown=d.staticMouseDown,M.onDoubleClick=d.staticDbClick.bind(N));var D=o.createElement(N.props["childInline."]?"span":"div",M),L=H.compIdx;if(j=-1,i||(j=L[$.$gui.keyid]),"number"==typeof j&&j>=0){L=L;for(var q in L){var z=L[q];z>=j&&(L[q]=z+1)}H.comps.splice(j,0,D)}else j=H.comps.push(D)-1;L[A]=j,v=!0,N.reRender(function(){if(k){var e=k.querySelector('.rewgt-static[name="'+R+'"]');if(e)for(var t,n=0;t=I[n];n++)e.appendChild(t)}})}return void(u&&setTimeout(function(){u(v,k)},0))}}if(!(D=p.loadElement(e)))return c();var G=null,J=null,U=D.props["isScenePage."];if($.props["isScenePage."])G=$,J=S;else if(P&&P.props["isScenePage."])if(i){if(U)return p.instantShow("error: ScenePage can only insert into topmost widget."),c()}else G=P,J=O;var B,F=" "+D.props.className+" ",Z=F.indexOf(" rewgt-panel ")>=0?0:F.indexOf(" rewgt-unit ")>=0?1:3;if(1==Z&&D.props["childInline."]&&(Z=2),G){if(J.parent!==y||!y.component)return p.instantShow("error: invalid target ScenePage."),c();if(B=0,S=J,$=G,U)return O=y,P=y.component,i=!1,g();if(3==Z)return p.instantShow("error: only panel, div, paragraph can add to ScenePage."),c();O=null,P=null,i=!0}else{if(U&&(S!==y||!i))return p.instantShow("error: ScenePage can only hook to topmost widget."),c();1==(B=$.$gui.isPanel||S===y?0:p.hasClass($,"rewgt-unit")?1:3)&&$.props["childInline."]&&(B=2);var K=!1;if(1==B&&$.props["isTableRow."]&&(K=!0),!i){if(S===y||!P)return void p.instantShow("error: can not insert before topmost widget.");1==(B=P.$gui.isPanel||O===y?0:p.hasClass(P,"rewgt-unit")?1:3)&&P.props["childInline."]&&(B=2)}if(!t(Z,B,K))return c()}return g()},m.copyWidget=function(e,t,n,r,i,a,o){function s(){var e=k.$gui,t=e.compIdx[v.$gui.keyid],s="number"==typeof t&&e.comps[t];if(!s)return u();if(I=n?S:O,f(I.getHtmlNode()))return p.instantShow("error: can not add target widget under a linker."),u();var l=k.props["isScenePage."]&&!C,h=s.props["data-unit.path"],P=s.props["data-span.path"],E="",N="string"==typeof h?"data-unit.path":"string"==typeof P?"data-span.path":"";if(N){if(I.widget===y)return p.instantShow("error: can not use linker under topmost widget."),u();if((n?b:$)!==w)return p.instantShow("error: can not move linked-linker to another widget, use unlinked-linker instead."),u();if(!(E=P||h))return p.instantShow("warning: invalid link path."),u()}var W=p.keyOfElement(s),j=!1,T=!1;W&&"string"==typeof W?((T=0==W.search(/^auto[0-9]+$/))||parseInt(W)+""===W)&&(j=!0):j=!0;var H=!1;if(j?H=!0:r||"number"==typeof I.$gui.compIdx[W]&&(H=!0),H&&T&&x&&r&&!n){var A="+"+S.$gui.keyid;I.setChild("-"+W,function(){c=!0,I.setChild(A,s,function(){var e=I.widget,t=e&&e[W],n=t&&t.component;n&&(g=n.getHtmlNode()),o&&o(c,g)})})}else{var R=d.getCompRenewProp(v)||{};if(H)if(T&&(I.props["isScenePage."]||x)){for(var M=I.$gui.removeNum+I.$gui.comps.length,D="auto"+M;"number"==typeof I.$gui.compIdx[D];)D="auto"+(M+=1);R["keyid."]=R.key=D}else R["keyid."]=R.key="";if(N&&(R[N]=E),x?(R.left=0,R.top=0):C&&(R.left=i,R.top=a),l&&(R.left=null,R.top=null),s=d.deepCloneReactEle(s,R,m,v),r&&(j||H||(n?b:$)!==w||(r=!1)),r&&f(k.getHtmlNode()))return p.instantShow("error: can not remove source widget under a link."),u();c=!0,Object.assign(_,I.$gui.compIdx),n?I.setChild(s,u):I.setChild("+"+S.$gui.keyid,s,u)}}function u(){if(c)for(var e,t=Object.keys(I.$gui.compIdx),n=0;e=t[n];n+=1)if(!_.hasOwnProperty(e)&&"$"!=e[0]){var i=I.widget,a=i&&i[e],s=a&&a.component;s&&(g=s.getHtmlNode());break}c&&r?k.setChild("-"+v.$gui.keyid,function(){o&&o(c,g)}):o&&o(c,g)}var c=!1,g=null,m=l.W(e),v=m&&m.component,w=m&&m.parent,k=w&&w.component;if(!v||!k)return p.instantShow("error: invalid source widget."),u();var b=l.W(t),S=b&&b.component,$=b&&b.parent,O=$&&$.component;if(!S||!O)return p.instantShow("error: invalid target widget."),u();if(r){var P=v.getHtmlNode();if(P&&"all"!=h(P,1))return p.instantShow("error: move source widget is disallowed."),u()}var E=S.getHtmlNode();if(E&&"all"!=h(E,n?0:1))return p.instantShow("error: insert target is disallowed."),u();var C=null,N=null,x=v.props["isScenePage."];if(S.props["isScenePage."])C=S,N=b;else if(O.props["isScenePage."])if(n){if(x)return p.instantShow("error: ScenePage can only insert into topmost widget."),u()}else C=O,N=$;var W,_={},I=null,j=v.$gui.isPanel?1:p.hasClass(v,"rewgt-unit")?2:3;if(C){if(N.parent!==y||!y.component)return p.instantShow("error: invalid target ScenePage."),u();if(W=1,b=N,S=C,$=y,O=y.component,x)return r&&v===C?(p.instantShow("warning: ignore moving ScenePage to same place."),u()):(n=!1,s());if(n=!0,1!=j&&2!=j)return p.instantShow("error: only panel, div, paragraph can move to ScenePage."),u()}else{if(x)return p.instantShow("error: ScenePage can only hook to topmost widget."),u();if(W=S.$gui.isPanel?1:p.hasClass(S,"rewgt-unit")?2:3,n){if(3==W&&3!=j)return p.instantShow("error: can not append none-inline to inline widget."),u();if(1==W&&3==j)return p.instantShow("error: can not append inline widget to panel."),u()}else{if(3==W&&3!=j)return p.instantShow("error: can not insert none-inline before inline widget."),u();if(3!=W&&3==j)return p.instantShow("error: can not insert inline before none-inline widget."),u()}}return s()},m.setWdgtZIndex=function(e,t,n){function r(){n&&n(i)}var i=!1,a=e&&l.W(e),o=a&&a.parent;if(a=a&&a.component,o=o&&o.component,!a||!o)return r();if(f(o.getHtmlNode()))return p.instantShow("error: can not change z-index under a link."),r();var s=Object.assign({},a.state.style);s.zIndex=t+"",a.props.style&&(a.props.style.zIndex=s.zIndex),i=!0,a.setState({style:s},r)},m.getGroupOpt=function(e){var t=e;if("string"==typeof e){var n=l.W(e);t=n&&n.component}return t&&t._?t._._getGroupOpt(t):null};var v=0,w=null,k={},b={};m.widgetSchema=function(e,t,n){var r=e;if("string"==typeof e){var i=l.W(e);r=i&&i.component}if(!r||!r.props)return null;if(!t)return[f=r._._getSchema(r),a(r,f,n)];var o=r.getHtmlNode(),s="all";if(o&&(s=h(o,1)),"none"==s)return[0];var f=r._._getSchema(r),p=a(r,f,n);if(!p)return null;if(!p.properties||p.properties.style||r.props.$style||(p.properties.style={type:"object",propertyOrder:200,default:{}}),b=p.wdgtOption,w=r,k=f,v+=1,delete p.wdgtOption,"some"==s){var u={};(c=Object.keys(p.properties||{})).forEach(function(e){"key"!=e&&"klass"!=e&&"style"!=e&&0!=e.indexOf("data-")&&0!=e.indexOf("aria-")||(u[e]=p.properties[e])}),p.properties=u;var d=p.options||{};d.disable_properties=!0,p.options=d}var c=[],g=[];Object.keys(k).forEach(function(e){var t=k[e];Array.isArray(t)&&g.push([t[0]||0,e])}),g.sort(function(e,t){return e[0]-t[0]}),g.forEach(function(e){c.push(e[1])});var m=b.option.baseUrl||"";return[v,p,{name:b.name,doc:b.doc,flag:b.flag,baseUrl:m},c,r._._htmlText&&!r.props["marked."]]},m.saveWdgtProp=function(e,t,r,i,a){"string"==typeof e&&(e=(e=l.W(e))&&e.component),e&&e.props?n(e,t,r,i,!1,a):a&&a(!1,null)},m.updateWdgtProp=function(e,t,r){v==e&&w?n(w,k,b,t,!0,r):r&&r(!1,null)},m.saveCompStyles=function(e,t,n,r){function i(){r&&setTimeout(function(){var e=d[y];(e=e&&e.component)&&(s=e.getHtmlNode()),r(a,s)},300)}var a=!1,s=null;if("string"==typeof e&&(e=l.W(e),e=e&&e.component),!e||!e.props)return i();var u=e.widget,d=u&&u.parent,h=d&&d.component,m=null,y=e.$gui.keyid,v="",w="string"==typeof y&&"$"==y[0]?y:"$"+y;if(h){var k=h.$gui.compIdx[y],b=h.$gui.comps;if("number"==typeof k)for(m=b[k++];k<b.length;){var S=b[k++],$=S&&p.keyOfElement(S);if($&&$!=w){v=$;break}}}if(!m||!t.linkPath)return i();var O=h.getHtmlNode();if(O&&f(O))return p.instantShow("error: can not modify widget under a linker."),i();var P=e._._statedProp||[],E=e._._silentProp||[],C=Object.assign({},m.props["link.props"]);P.forEach(function(t){C.hasOwnProperty(t)&&(C[t]=e.state[t])}),E.forEach(function(e){delete C[e]});var N=y+"";"$"!=N[0]&&(N="$"+N),C["keyid."]=C.key=N,C.$=t.linkPath,n?C.styles=n:delete C.styles,m=o.createElement(2==t.flag?c:g,C),h.setChild("-"+y,"-"+w,function(e){a=!0,v?h.setChild("+"+v,m,i):h.setChild(m,i)})},m.saveNodeContent=function(e,t,n){function r(){if(n){var e=u[y];(e=e&&e.component)&&(a=e.getHtmlNode()),n(i,a)}}var i=!1,a=null;if("string"==typeof e&&(e=l.W(e),e=e&&e.component),!e||!e.props)return r();var s=e.widget,u=s&&s.parent,h=u&&u.component,m=null,y=e.$gui.keyid,v="";if(h){var w=h.$gui.compIdx[y],k=h.$gui.comps;if("number"==typeof w){m=k[w++];for(var b="string"==typeof y&&"$"==y[0]?y:"$"+y;w<k.length;){var S=k[w++],$=S&&p.keyOfElement(S);if($&&$!=b){v=$;break}}}}if(!m)return r();var O=e.getHtmlNode(),P=O&&O.parentNode;if(P&&f(P))return p.instantShow("error: can not save widget content under a linker."),r();if(O&&0==O.children.length){var E=e.props["link.props"];if(E){var C=c,N=e.props["data-unit.path"];if(N||(N=e.props["data-span.path"],C=g),!N)return r();var x=e._._statedProp||[],W=e._._silentProp||[];E=Object.assign({},E),x.forEach(function(t){E.hasOwnProperty(t)&&(E[t]=e.state[t])}),W.forEach(function(e){delete E[e]}),E.$=N,t?E["html."]=t:delete E["html."];var _=y+"";"$"!=_[0]&&(_="$"+_),E.key=E["keyid."]=_,m=o.createElement(C,E),h.setChild("-"+y,"-"+_,function(e){i=!0,v?h.setChild("+"+v,m,r):h.setChild(m,r)})}else{if(!(E=d.getCompRenewProp(e)))return r();E["html."]=t||void 0,E.key=y+"",E["keyid."]=y,m=d.deepCloneReactEle(m,E,s,e),h.setChild("-"+y,function(e){i=!0,v?h.setChild("+"+v,m,r):h.setChild(m,r)})}}else r()},m.onlyScenePage=function(){var e=y,t=0,n=0;return(e=e&&e.component)&&e.$gui.comps.forEach(function(e){var r=e&&p.keyOfElement(e);if(r&&"$pop"!=r){if(e.props["isTemplate."])return;e.props["isScenePage."]?t+=1:n+=1}}),t>0&&0==n},m.selectMultWdgt=function(e,t,n,r,i){function a(e,t,n,r,i,a,o,s){return e<o&&t<s&&n>=i&&r>=a?1:0}function o(e,t,n,r,i,a,o,s){var l=i+o,f=a+s;return i>=e&&a>=t&&l<n&&f<r?1:0}var s=[],l=y&&y.W(e),f=l&&l.component;if(f&&f.props["isScenePage."]){var u=n>=i&&t>=r,d=Math.min(t,r),c=Math.min(n,i),g=Math.max(t,r),h=Math.max(n,i);f.$gui.comps.forEach(function(e){if(e){var t=p.keyOfElement(e),n=t&&"$"!=t[0]&&l[t];if(n=n&&n.component){var r=n.getHtmlNode();if(r){var i=r.getBoundingClientRect();if(0==i.width&&0==i.height)return;if(parseInt(r.style.zIndex||0)<=-999)return;u?a(d,c,g,h,i.left,i.top,i.left+i.width,i.top+i.height)&&s.push([t,i.left,i.top,i.width,i.height]):o(d,c,g,h,i.left,i.top,i.width,i.height)&&s.push([t,i.left,i.top,i.width,i.height])}}}})}return s},m.moveSceneWdgt=function(e,t,n){var r=[];if("string"==typeof e){var i=(f=l.W(e))&&f.component;if(i){var a=i.state.left,o=i.state.top;i.setState({left:"number"!=typeof a?null:a+t,top:"number"!=typeof o?null:o+n}),r.push(i.$gui.keyid+"")}}else if(Array.isArray(e)&&e.length>=2){var s=e[0],f=y&&y.W(s),p=f&&f.component;p&&p.props["isScenePage."]&&e.slice(1).forEach(function(e){var i=f[e],a=i&&i.component;if(a){r.push(e);var o=a.state.left,s=a.state.top;a.setState({left:"number"!=typeof o?null:o+t,top:"number"!=typeof s?null:s+n})}})}return r};m.dumpWidget=function(e,t){var n=!1,r="";try{var i=null,a=",0,";if(Array.isArray(e)){var o=e[0],s=(c=y&&y.W(o))&&c.component;if(s&&s.props["isScenePage."]){a=",1,",i=[];for(var f,p=1;f=e[p];p+=1){var u=c[f];if(u){var d=[];m.dumpTree(d,u,""),1==d.length&&i.push(d[0])}}0==i.length&&(i=null)}}else if("string"==typeof e&&e){var c=l.W(e);c&&(i=[],m.dumpTree(i,c,""),1!=i.length&&(i=null))}i&&(r="SHADOW_WIDGET_COMPONENT"+a+JSON.stringify(i),n=!0)}catch(e){}t&&t(n,r)},m.pasteWidget=function(e,n,r,i){function a(e){if(r&&d&&d==u)if("string"==typeof r){var t=l.W(r),n=t&&t.component;if(n){var a=t.parent,o=n.$gui.keyid,s=a&&a.component;s&&s.setChild("-"+o)}}else if(Array.isArray(r)){var f=r[0],v=r.slice(1),w=y&&y.W(f),k=w&&w.component;if(k){var b=v.map(function(e){return"-"+e});b.length&&k.setChild.apply(k,b)}}e&&p.instantShow(e),i&&setTimeout(function(){if(g&&m)for(var e=Object.keys(m.$gui.compIdx),t=e.length-1;t>=0;t--){var n=e[t];if("$"!=n[0]&&g.indexOf(n)<0){var r=m.widget[n];(r=r&&r.component)&&(h=r.getHtmlNode())}}i(d,c,h)},0)}function s(e,t){if(t){var n=b.parent,r=n&&n.component;return!!r&&(e=o.cloneElement(e,{"keyid.":"",key:""}),r.setChild("+"+m.$gui.keyid,e),!0)}var i=e.props["data-unit.path"],a=e.props["data-span.path"],s="",l="string"==typeof i?"data-unit.path":"string"==typeof a?"data-span.path":"";if(l){if(b===y)return p.instantShow("error: can not use linker under topmost widget."),!1;s=a||i}var f=!1,u=p.keyOfElement(e),d=!1;if(u&&"string"==typeof u?(d=0==u.search(/^auto[0-9]+$/))||parseInt(u)+""===u?f=!0:"number"==typeof m.$gui.compIdx[u]&&(f=!0):f=!0,f||l||S){var c={};if(f)if(d&&m.props["isScenePage."]){for(var g=m.$gui.removeNum+m.$gui.comps.length,h="auto"+g;"number"==typeof m.$gui.compIdx[h];)h="auto"+(g+=1);c["keyid."]=c.key=h}else c["keyid."]=c.key="";l&&(c[l]=s),S&&(c.left=e.props.left||0,c.top=e.props.top||0),e=o.cloneElement(e,c)}return S?m.setChild(e):m.setChild("+"+k.$gui.keyid,e),!0}var u=0,d=0,c=!0,g=null,h=null,m=null,v=null;if(0!=n.indexOf("SHADOW_WIDGET_COMPONENT")||"["==n["SHADOW_WIDGET_COMPONENT".length+3])try{v=JSON.parse(n.slice("SHADOW_WIDGET_COMPONENT".length+3))}catch(e){}if(!Array.isArray(v))return a("paste failed: invalid JSON input.");var w=l.W(e),k=w&&w.component;if(!k)return a();var b=null,S=k.props["isScenePage."];if(S)b=w,m=k,w=null,k=null;else{if(b=w.parent,!(m=b&&b.component))return a();m.props["isScenePage."]&&(S=!0)}"absolute"==(m.state.style||{}).position&&(c=!0);var $=[],O=!1;if(v.forEach(function(e){var t=p.loadElement(e);t?$.push(t):O=!0}),O)return a("paste failed: invalid format.");if(0==(u=$.length))return a("nothing to paste.");1==u&&S&&(g=Object.keys(m.$gui.compIdx));var P=0,E=!1;if(!S){if(f(m.getHtmlNode()))return p.instantShow("error: can not paste widget to a linker."),a();1!=u&&(p.instantShow("warning: only one widget can be inserted into none-ScenePage."),$.splice(1),u=1),1==(P=m.$gui.isPanel||b===y?0:p.hasClass(m,"rewgt-unit")?1:3)&&m.props["childInline."]&&(P=2),1==P&&tarNodeObj.props["isTableRow."]&&(E=!0)}for(var C,N=0;C=$[N];N+=1)if(C.props["isScenePage."]){if(!S)return p.instantShow("error: ScenePage can only insert into topmost widget."),a();if(c=!0,!s(C,!0))return a();d+=1}else{var x=" "+C.props.className+" ",W=x.indexOf(" rewgt-panel ")>=0?0:x.indexOf(" rewgt-unit ")>=0?1:3;if(1==W&&C.props["childInline."]&&(W=2),!t(W,P,E))return a();if(!s(C,!1))return a();d+=1}setTimeout(function(){a()},0)},m.firstChildOf=function(e,t){var n=l.W(e),r=n&&n.component;if(r)for(var i=r.$gui.comps,a=i.length,o=0;o<a;o+=1){var s=i[o],f=s&&p.keyOfElement(s);if(f){if(t&&"$"==f[0])continue;var u=n[f],d=u&&u.component;if(d)return d.getHtmlNode()}}return null},e()})});