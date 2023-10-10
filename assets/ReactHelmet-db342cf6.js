import{c as ae,a as ie,l as $,b as ce,d as ue,e as se,g as fe,j as x}from"./index-982b4a46.js";import{r as I,g as H,b as L}from"./react-e7981c99.js";const ct=ae(ie);function ut({children:t,features:e,strict:n=!1}){const[,r]=I.useState(!F(e)),o=I.useRef(void 0);if(!F(e)){const{renderer:a,...s}=e;o.current=a,$(s)}return I.useEffect(()=>{F(e)&&e().then(({renderer:a,...s})=>{$(s),o.current=a,r(!0)})},[]),I.createElement(ce.Provider,{value:{renderer:o.current,strict:n}},t)}function F(t){return typeof t=="function"}const st={renderer:ue,...se,...fe};var Q={exports:{}},le="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",pe=le,de=pe;function J(){}function Z(){}Z.resetWarningCache=J;var Te=function(){function t(r,o,a,s,i,c){if(c!==de){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Z,resetWarningCache:J};return n.PropTypes=n,n};Q.exports=Te();var me=Q.exports;const m=H(me);function he(t){return t&&typeof t=="object"&&"default"in t?t.default:t}var K=I,ve=he(K);function G(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ye(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var ge=!!(typeof window<"u"&&window.document&&window.document.createElement);function Ee(t,e,n){if(typeof t!="function")throw new Error("Expected reducePropsToState to be a function.");if(typeof e!="function")throw new Error("Expected handleStateChangeOnClient to be a function.");if(typeof n<"u"&&typeof n!="function")throw new Error("Expected mapStateOnServer to either be undefined or a function.");function r(o){return o.displayName||o.name||"Component"}return function(a){if(typeof a!="function")throw new Error("Expected WrappedComponent to be a React component.");var s=[],i;function c(){i=t(s.map(function(f){return f.props})),u.canUseDOM?e(i):n&&(i=n(i))}var u=function(f){ye(p,f);function p(){return f.apply(this,arguments)||this}p.peek=function(){return i},p.rewind=function(){if(p.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var y=i;return i=void 0,s=[],y};var d=p.prototype;return d.UNSAFE_componentWillMount=function(){s.push(this),c()},d.componentDidUpdate=function(){c()},d.componentWillUnmount=function(){var y=s.indexOf(this);s.splice(y,1),c()},d.render=function(){return ve.createElement(a,this.props)},p}(K.PureComponent);return G(u,"displayName","SideEffect("+r(a)+")"),G(u,"canUseDOM",ge),u}}var Ae=Ee;const be=H(Ae);var Se=typeof Element<"u",Oe=typeof Map=="function",Ce=typeof Set=="function",Pe=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function M(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var n,r,o;if(Array.isArray(t)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(!M(t[r],e[r]))return!1;return!0}var a;if(Oe&&t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(a=t.entries();!(r=a.next()).done;)if(!e.has(r.value[0]))return!1;for(a=t.entries();!(r=a.next()).done;)if(!M(r.value[1],e.get(r.value[0])))return!1;return!0}if(Ce&&t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(a=t.entries();!(r=a.next()).done;)if(!e.has(r.value[0]))return!1;return!0}if(Pe&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(t[r]!==e[r])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf&&typeof t.valueOf=="function"&&typeof e.valueOf=="function")return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString&&typeof t.toString=="function"&&typeof e.toString=="function")return t.toString()===e.toString();if(o=Object.keys(t),n=o.length,n!==Object.keys(e).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,o[r]))return!1;if(Se&&t instanceof Element)return!1;for(r=n;r--!==0;)if(!((o[r]==="_owner"||o[r]==="__v"||o[r]==="__o")&&t.$$typeof)&&!M(t[o[r]],e[o[r]]))return!1;return!0}return t!==t&&e!==e}var we=function(e,n){try{return M(e,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const Re=H(we);/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var z=Object.getOwnPropertySymbols,_e=Object.prototype.hasOwnProperty,Ie=Object.prototype.propertyIsEnumerable;function Le(t){if(t==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function je(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de",Object.getOwnPropertyNames(t)[0]==="5")return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(e).map(function(a){return e[a]});if(r.join("")!=="0123456789")return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(a){o[a]=a}),Object.keys(Object.assign({},o)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var Me=je()?Object.assign:function(t,e){for(var n,r=Le(t),o,a=1;a<arguments.length;a++){n=Object(arguments[a]);for(var s in n)_e.call(n,s)&&(r[s]=n[s]);if(z){o=z(n);for(var i=0;i<o.length;i++)Ie.call(n,o[i])&&(r[o[i]]=n[o[i]])}}return r};const Ne=H(Me);var O={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},l={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"};Object.keys(l).map(function(t){return l[t]});var h={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src",TARGET:"target"},N={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},j={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},He=Object.keys(N).reduce(function(t,e){return t[N[e]]=e,t},{}),xe=[l.NOSCRIPT,l.SCRIPT,l.STYLE],g="data-react-helmet",Fe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},De=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},ke=function(){function t(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),v=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ue=function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},W=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},Be=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t},k=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},qe=function(e){var n=P(e,l.TITLE),r=P(e,j.TITLE_TEMPLATE);if(r&&n)return r.replace(/%s/g,function(){return Array.isArray(n)?n.join(""):n});var o=P(e,j.DEFAULT_TITLE);return n||o||void 0},Ye=function(e){return P(e,j.ON_CHANGE_CLIENT_STATE)||function(){}},D=function(e,n){return n.filter(function(r){return typeof r[e]<"u"}).map(function(r){return r[e]}).reduce(function(r,o){return v({},r,o)},{})},$e=function(e,n){return n.filter(function(r){return typeof r[l.BASE]<"u"}).map(function(r){return r[l.BASE]}).reverse().reduce(function(r,o){if(!r.length)for(var a=Object.keys(o),s=0;s<a.length;s++){var i=a[s],c=i.toLowerCase();if(e.indexOf(c)!==-1&&o[c])return r.concat(o)}return r},[])},R=function(e,n,r){var o={};return r.filter(function(a){return Array.isArray(a[e])?!0:(typeof a[e]<"u"&&Ve("Helmet: "+e+' should be of type "Array". Instead found type "'+Fe(a[e])+'"'),!1)}).map(function(a){return a[e]}).reverse().reduce(function(a,s){var i={};s.filter(function(d){for(var T=void 0,y=Object.keys(d),E=0;E<y.length;E++){var A=y[E],b=A.toLowerCase();n.indexOf(b)!==-1&&!(T===h.REL&&d[T].toLowerCase()==="canonical")&&!(b===h.REL&&d[b].toLowerCase()==="stylesheet")&&(T=b),n.indexOf(A)!==-1&&(A===h.INNER_HTML||A===h.CSS_TEXT||A===h.ITEM_PROP)&&(T=A)}if(!T||!d[T])return!1;var w=d[T].toLowerCase();return o[T]||(o[T]={}),i[T]||(i[T]={}),o[T][w]?!1:(i[T][w]=!0,!0)}).reverse().forEach(function(d){return a.push(d)});for(var c=Object.keys(i),u=0;u<c.length;u++){var f=c[u],p=Ne({},o[f],i[f]);o[f]=p}return a},[]).reverse()},P=function(e,n){for(var r=e.length-1;r>=0;r--){var o=e[r];if(o.hasOwnProperty(n))return o[n]}return null},Ge=function(e){return{baseTag:$e([h.HREF,h.TARGET],e),bodyAttributes:D(O.BODY,e),defer:P(e,j.DEFER),encode:P(e,j.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:D(O.HTML,e),linkTags:R(l.LINK,[h.REL,h.HREF],e),metaTags:R(l.META,[h.NAME,h.CHARSET,h.HTTPEQUIV,h.PROPERTY,h.ITEM_PROP],e),noscriptTags:R(l.NOSCRIPT,[h.INNER_HTML],e),onChangeClientState:Ye(e),scriptTags:R(l.SCRIPT,[h.SRC,h.INNER_HTML],e),styleTags:R(l.STYLE,[h.CSS_TEXT],e),title:qe(e),titleAttributes:D(O.TITLE,e)}},U=function(){var t=Date.now();return function(e){var n=Date.now();n-t>16?(t=n,e(n)):setTimeout(function(){U(e)},0)}}(),V=function(e){return clearTimeout(e)},ze=typeof window<"u"?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||U:global.requestAnimationFrame||U,We=typeof window<"u"?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||V:global.cancelAnimationFrame||V,Ve=function(e){return console&&typeof console.warn=="function"&&console.warn(e)},_=null,Xe=function(e){_&&We(_),e.defer?_=ze(function(){X(e,function(){_=null})}):(X(e),_=null)},X=function(e,n){var r=e.baseTag,o=e.bodyAttributes,a=e.htmlAttributes,s=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,f=e.scriptTags,p=e.styleTags,d=e.title,T=e.titleAttributes;B(l.BODY,o),B(l.HTML,a),Qe(d,T);var y={baseTag:C(l.BASE,r),linkTags:C(l.LINK,s),metaTags:C(l.META,i),noscriptTags:C(l.NOSCRIPT,c),scriptTags:C(l.SCRIPT,f),styleTags:C(l.STYLE,p)},E={},A={};Object.keys(y).forEach(function(b){var w=y[b],Y=w.newTags,oe=w.oldTags;Y.length&&(E[b]=Y),oe.length&&(A[b]=y[b].oldTags)}),n&&n(),u(e,E,A)},ee=function(e){return Array.isArray(e)?e.join(""):e},Qe=function(e,n){typeof e<"u"&&document.title!==e&&(document.title=ee(e)),B(l.TITLE,n)},B=function(e,n){var r=document.getElementsByTagName(e)[0];if(r){for(var o=r.getAttribute(g),a=o?o.split(","):[],s=[].concat(a),i=Object.keys(n),c=0;c<i.length;c++){var u=i[c],f=n[u]||"";r.getAttribute(u)!==f&&r.setAttribute(u,f),a.indexOf(u)===-1&&a.push(u);var p=s.indexOf(u);p!==-1&&s.splice(p,1)}for(var d=s.length-1;d>=0;d--)r.removeAttribute(s[d]);a.length===s.length?r.removeAttribute(g):r.getAttribute(g)!==i.join(",")&&r.setAttribute(g,i.join(","))}},C=function(e,n){var r=document.head||document.querySelector(l.HEAD),o=r.querySelectorAll(e+"["+g+"]"),a=Array.prototype.slice.call(o),s=[],i=void 0;return n&&n.length&&n.forEach(function(c){var u=document.createElement(e);for(var f in c)if(c.hasOwnProperty(f))if(f===h.INNER_HTML)u.innerHTML=c.innerHTML;else if(f===h.CSS_TEXT)u.styleSheet?u.styleSheet.cssText=c.cssText:u.appendChild(document.createTextNode(c.cssText));else{var p=typeof c[f]>"u"?"":c[f];u.setAttribute(f,p)}u.setAttribute(g,"true"),a.some(function(d,T){return i=T,u.isEqualNode(d)})?a.splice(i,1):s.push(u)}),a.forEach(function(c){return c.parentNode.removeChild(c)}),s.forEach(function(c){return r.appendChild(c)}),{oldTags:a,newTags:s}},te=function(e){return Object.keys(e).reduce(function(n,r){var o=typeof e[r]<"u"?r+'="'+e[r]+'"':""+r;return n?n+" "+o:o},"")},Je=function(e,n,r,o){var a=te(r),s=ee(n);return a?"<"+e+" "+g+'="true" '+a+">"+k(s,o)+"</"+e+">":"<"+e+" "+g+'="true">'+k(s,o)+"</"+e+">"},Ze=function(e,n,r){return n.reduce(function(o,a){var s=Object.keys(a).filter(function(u){return!(u===h.INNER_HTML||u===h.CSS_TEXT)}).reduce(function(u,f){var p=typeof a[f]>"u"?f:f+'="'+k(a[f],r)+'"';return u?u+" "+p:p},""),i=a.innerHTML||a.cssText||"",c=xe.indexOf(e)===-1;return o+"<"+e+" "+g+'="true" '+s+(c?"/>":">"+i+"</"+e+">")},"")},re=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(e).reduce(function(r,o){return r[N[o]||o]=e[o],r},n)},Ke=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(e).reduce(function(r,o){return r[He[o]||o]=e[o],r},n)},et=function(e,n,r){var o,a=(o={key:n},o[g]=!0,o),s=re(r,a);return[L.createElement(l.TITLE,s,n)]},tt=function(e,n){return n.map(function(r,o){var a,s=(a={key:o},a[g]=!0,a);return Object.keys(r).forEach(function(i){var c=N[i]||i;if(c===h.INNER_HTML||c===h.CSS_TEXT){var u=r.innerHTML||r.cssText;s.dangerouslySetInnerHTML={__html:u}}else s[c]=r[i]}),L.createElement(e,s)})},S=function(e,n,r){switch(e){case l.TITLE:return{toComponent:function(){return et(e,n.title,n.titleAttributes)},toString:function(){return Je(e,n.title,n.titleAttributes,r)}};case O.BODY:case O.HTML:return{toComponent:function(){return re(n)},toString:function(){return te(n)}};default:return{toComponent:function(){return tt(e,n)},toString:function(){return Ze(e,n,r)}}}},ne=function(e){var n=e.baseTag,r=e.bodyAttributes,o=e.encode,a=e.htmlAttributes,s=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.scriptTags,f=e.styleTags,p=e.title,d=p===void 0?"":p,T=e.titleAttributes;return{base:S(l.BASE,n,o),bodyAttributes:S(O.BODY,r,o),htmlAttributes:S(O.HTML,a,o),link:S(l.LINK,s,o),meta:S(l.META,i,o),noscript:S(l.NOSCRIPT,c,o),script:S(l.SCRIPT,u,o),style:S(l.STYLE,f,o),title:S(l.TITLE,{title:d,titleAttributes:T},o)}},rt=function(e){var n,r;return r=n=function(o){Ue(a,o);function a(){return De(this,a),Be(this,o.apply(this,arguments))}return a.prototype.shouldComponentUpdate=function(i){return!Re(this.props,i)},a.prototype.mapNestedChildrenToProps=function(i,c){if(!c)return null;switch(i.type){case l.SCRIPT:case l.NOSCRIPT:return{innerHTML:c};case l.STYLE:return{cssText:c}}throw new Error("<"+i.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},a.prototype.flattenArrayTypeChildren=function(i){var c,u=i.child,f=i.arrayTypeChildren,p=i.newChildProps,d=i.nestedChildren;return v({},f,(c={},c[u.type]=[].concat(f[u.type]||[],[v({},p,this.mapNestedChildrenToProps(u,d))]),c))},a.prototype.mapObjectTypeChildren=function(i){var c,u,f=i.child,p=i.newProps,d=i.newChildProps,T=i.nestedChildren;switch(f.type){case l.TITLE:return v({},p,(c={},c[f.type]=T,c.titleAttributes=v({},d),c));case l.BODY:return v({},p,{bodyAttributes:v({},d)});case l.HTML:return v({},p,{htmlAttributes:v({},d)})}return v({},p,(u={},u[f.type]=v({},d),u))},a.prototype.mapArrayTypeChildrenToProps=function(i,c){var u=v({},c);return Object.keys(i).forEach(function(f){var p;u=v({},u,(p={},p[f]=i[f],p))}),u},a.prototype.warnOnInvalidChildren=function(i,c){return!0},a.prototype.mapChildrenToProps=function(i,c){var u=this,f={};return L.Children.forEach(i,function(p){if(!(!p||!p.props)){var d=p.props,T=d.children,y=W(d,["children"]),E=Ke(y);switch(u.warnOnInvalidChildren(p,T),p.type){case l.LINK:case l.META:case l.NOSCRIPT:case l.SCRIPT:case l.STYLE:f=u.flattenArrayTypeChildren({child:p,arrayTypeChildren:f,newChildProps:E,nestedChildren:T});break;default:c=u.mapObjectTypeChildren({child:p,newProps:c,newChildProps:E,nestedChildren:T});break}}}),c=this.mapArrayTypeChildrenToProps(f,c),c},a.prototype.render=function(){var i=this.props,c=i.children,u=W(i,["children"]),f=v({},u);return c&&(f=this.mapChildrenToProps(c,f)),L.createElement(e,f)},ke(a,null,[{key:"canUseDOM",set:function(i){e.canUseDOM=i}}]),a}(L.Component),n.propTypes={base:m.object,bodyAttributes:m.object,children:m.oneOfType([m.arrayOf(m.node),m.node]),defaultTitle:m.string,defer:m.bool,encodeSpecialCharacters:m.bool,htmlAttributes:m.object,link:m.arrayOf(m.object),meta:m.arrayOf(m.object),noscript:m.arrayOf(m.object),onChangeClientState:m.func,script:m.arrayOf(m.object),style:m.arrayOf(m.object),title:m.string,titleAttributes:m.object,titleTemplate:m.string},n.defaultProps={defer:!0,encodeSpecialCharacters:!0},n.peek=e.peek,n.rewind=function(){var o=e.rewind();return o||(o=ne({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),o},r},nt=function(){return null},ot=be(Ge,Xe,ne)(nt),q=rt(ot);q.renderStatic=q.rewind;function ft({title:t,description:e}){return x.jsxs(q,{children:[x.jsx("title",{children:t}),x.jsx("meta",{name:"description",content:e})]})}export{ut as L,ft as R,st as d,ct as m};
//# sourceMappingURL=ReactHelmet-db342cf6.js.map
