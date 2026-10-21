import{r as e,t}from"./rolldown-runtime-hePW80VL.js";var n=t((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.for(`react.view_transition`),m=Symbol.iterator;function h(e){return typeof e!=`object`||!e?null:(e=m&&e[m]||e[`@@iterator`],typeof e==`function`?e:null)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,v={};function y(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function b(){}b.prototype=y.prototype;function ee(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}var x=ee.prototype=new b;x.constructor=ee,_(x,y.prototype),x.isPureReactComponent=!0;var te=Array.isArray;function ne(){}var S={H:null,A:null,T:null,S:null},re=Object.prototype.hasOwnProperty;function ie(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function ae(e,t){return ie(e.type,t,e.props)}function oe(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function se(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ce=/\/+/g;function le(e,t){return typeof e==`object`&&e&&e.key!=null?se(``+e.key):t.toString(36)}function ue(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(ne,ne):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function C(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,C(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+le(e,0):a,te(o)?(i=``,c!=null&&(i=c.replace(ce,`$&/`)+`/`),C(o,r,i,``,function(e){return e})):o!=null&&(oe(o)&&(o=ae(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ce,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(te(e))for(var u=0;u<e.length;u++)a=e[u],s=l+le(a,u),c+=C(a,r,i,s,o);else if(u=h(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+le(a,u++),c+=C(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return C(ue(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function w(e,t,n){if(e==null)return e;var r=[],i=0;return C(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function T(e){if(e._status===-1){var t=e._result,n=t();n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t,n.status===void 0&&(n.status=`fulfilled`,n.value=t))},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t,n.status===void 0&&(n.status=`rejected`,n.reason=t))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var de=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)};function fe(e){var t=S.T,n={};n.types=t===null?null:t.types,S.T=n;try{var r=e(),i=S.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(ne,de)}catch(e){de(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),S.T=t}}function pe(e){var t=S.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else fe(pe.bind(null,e))}var me={map:w,forEach:function(e,t,n){w(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return w(e,function(){t++}),t},toArray:function(e){return w(e,function(e){return e})||[]},only:function(e){if(!oe(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=me,e.Component=y,e.Fragment=r,e.Profiler=a,e.PureComponent=ee,e.StrictMode=i,e.Suspense=l,e.ViewTransition=p,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=S,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return S.H.useMemoCache(e)}},e.addTransitionType=pe,e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=_({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!re.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return ie(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)re.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return ie(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=oe,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:T}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=fe,e.unstable_useCacheRefresh=function(){return S.H.useCacheRefresh()},e.use=function(e){return S.H.use(e)},e.useActionState=function(e,t,n){return S.H.useActionState(e,t,n)},e.useCallback=function(e,t){return S.H.useCallback(e,t)},e.useContext=function(e){return S.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return S.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return S.H.useEffect(e,t)},e.useEffectEvent=function(e){return S.H.useEffectEvent(e)},e.useId=function(){return S.H.useId()},e.useImperativeHandle=function(e,t,n){return S.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return S.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return S.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return S.H.useMemo(e,t)},e.useOptimistic=function(e,t){return S.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return S.H.useReducer(e,t,n)},e.useRef=function(e){return S.H.useRef(e)},e.useState=function(e){return S.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return S.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return S.H.useTransition()},e.version=`19.3.0`})),r=t(((e,t)=>{t.exports=n()})),i=()=>{},a={},o={},s=null,c={mark:i,measure:i};try{typeof window<`u`&&(a=window),typeof document<`u`&&(o=document),typeof MutationObserver<`u`&&(s=MutationObserver),typeof performance<`u`&&(c=performance)}catch{}var{userAgent:l=``}=a.navigator||{},u=a,d=o,f=s,p=c;u.document;var m=!!d.documentElement&&!!d.head&&typeof d.addEventListener==`function`&&typeof d.createElement==`function`,h=~l.indexOf(`MSIE`)||~l.indexOf(`Trident/`),g=`classic`,_=`duotone`,v=`sharp`,y=`sharp-duotone`,b=[g,_,v,y],ee={classic:{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},sharp:{900:`fass`,400:`fasr`,300:`fasl`,100:`fast`},"sharp-duotone":{900:`fasds`}},x={kit:{fak:`kit`,"fa-kit":`kit`},"kit-duotone":{fakd:`kit-duotone`,"fa-kit-duotone":`kit-duotone`}},te=[`kit`],ne=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,S=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,re={"Font Awesome 5 Free":{900:`fas`,400:`far`},"Font Awesome 5 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`},"Font Awesome 5 Brands":{400:`fab`,normal:`fab`},"Font Awesome 5 Duotone":{900:`fad`}},ie={"Font Awesome 6 Free":{900:`fas`,400:`far`},"Font Awesome 6 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},"Font Awesome 6 Brands":{400:`fab`,normal:`fab`},"Font Awesome 6 Duotone":{900:`fad`},"Font Awesome 6 Sharp":{900:`fass`,400:`fasr`,normal:`fasr`,300:`fasl`,100:`fast`},"Font Awesome 6 Sharp Duotone":{900:`fasds`}},ae={classic:{"fa-brands":`fab`,"fa-duotone":`fad`,"fa-light":`fal`,"fa-regular":`far`,"fa-solid":`fas`,"fa-thin":`fat`},sharp:{"fa-solid":`fass`,"fa-regular":`fasr`,"fa-light":`fasl`,"fa-thin":`fast`},"sharp-duotone":{"fa-solid":`fasds`}},oe={classic:[`fas`,`far`,`fal`,`fat`],sharp:[`fass`,`fasr`,`fasl`,`fast`],"sharp-duotone":[`fasds`]},se={classic:{fab:`fa-brands`,fad:`fa-duotone`,fal:`fa-light`,far:`fa-regular`,fas:`fa-solid`,fat:`fa-thin`},sharp:{fass:`fa-solid`,fasr:`fa-regular`,fasl:`fa-light`,fast:`fa-thin`},"sharp-duotone":{fasds:`fa-solid`}},ce={classic:{solid:`fas`,regular:`far`,light:`fal`,thin:`fat`,duotone:`fad`,brands:`fab`},sharp:{solid:`fass`,regular:`fasr`,light:`fasl`,thin:`fast`},"sharp-duotone":{solid:`fasds`}},le={classic:{fa:`solid`,fas:`solid`,"fa-solid":`solid`,far:`regular`,"fa-regular":`regular`,fal:`light`,"fa-light":`light`,fat:`thin`,"fa-thin":`thin`,fad:`duotone`,"fa-duotone":`duotone`,fab:`brands`,"fa-brands":`brands`},sharp:{fa:`solid`,fass:`solid`,"fa-solid":`solid`,fasr:`regular`,"fa-regular":`regular`,fasl:`light`,"fa-light":`light`,fast:`thin`,"fa-thin":`thin`},"sharp-duotone":{fa:`solid`,fasds:`solid`,"fa-solid":`solid`}},ue=[`solid`,`regular`,`light`,`thin`,`duotone`,`brands`],C=[1,2,3,4,5,6,7,8,9,10],w=C.concat([11,12,13,14,15,16,17,18,19,20]),T={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},de=[...Object.keys(oe),...ue,`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`beat`,`border`,`fade`,`beat-fade`,`bounce`,`flip-both`,`flip-horizontal`,`flip-vertical`,`flip`,`fw`,`inverse`,`layers-counter`,`layers-text`,`layers`,`li`,`pull-left`,`pull-right`,`pulse`,`rotate-180`,`rotate-270`,`rotate-90`,`rotate-by`,`shake`,`spin-pulse`,`spin-reverse`,`spin`,`stack-1x`,`stack-2x`,`stack`,`ul`,T.GROUP,T.SWAP_OPACITY,T.PRIMARY,T.SECONDARY].concat(C.map(e=>`${e}x`),w.map(e=>`w-${e}`)),fe={"Font Awesome Kit":{400:`fak`,normal:`fak`},"Font Awesome Kit Duotone":{400:`fakd`,normal:`fakd`}},pe={kit:{"fa-kit":`fak`},"kit-duotone":{"fa-kit-duotone":`fakd`}},me={kit:{fak:`fa-kit`},"kit-duotone":{fakd:`fa-kit-duotone`}},he={kit:{kit:`fak`},"kit-duotone":{"kit-duotone":`fakd`}},E=`___FONT_AWESOME___`,ge=16,_e=`fa`,ve=`svg-inline--fa`,D=`data-fa-i2svg`,ye=`data-fa-pseudo-element`,be=`data-fa-pseudo-element-pending`,xe=`data-prefix`,Se=`data-icon`,Ce=`fontawesome-i2svg`,we=`async`,Te=[`HTML`,`HEAD`,`STYLE`,`SCRIPT`],Ee=(()=>{try{return!0}catch{return!1}})(),De=[g,v,y];function O(e){return new Proxy(e,{get(e,t){return t in e?e[t]:e[g]}})}var Oe={...le};Oe[g]={...le[g],...x.kit,...x[`kit-duotone`]};var k=O(Oe),ke={...ce};ke[g]={...ke[g],...he.kit,...he[`kit-duotone`]};var A=O(ke),Ae={...se};Ae[g]={...Ae[g],...me.kit};var j=O(Ae),je={...ae};je[g]={...je[g],...pe.kit};var Me=O(je),Ne=ne,Pe=`fa-layers-text`,Fe=S;O({...ee});var Ie=[`class`,`data-prefix`,`data-icon`,`data-fa-transform`,`data-fa-mask`],Le=T,M=new Set;Object.keys(A[g]).map(M.add.bind(M)),Object.keys(A[v]).map(M.add.bind(M)),Object.keys(A[y]).map(M.add.bind(M));var Re=[...te,...de],N=u.FontAwesomeConfig||{};function ze(e){var t=d.querySelector(`script[`+e+`]`);if(t)return t.getAttribute(e)}function Be(e){return e===``?!0:e===`false`?!1:e===`true`||e}d&&typeof d.querySelector==`function`&&[[`data-family-prefix`,`familyPrefix`],[`data-css-prefix`,`cssPrefix`],[`data-family-default`,`familyDefault`],[`data-style-default`,`styleDefault`],[`data-replacement-class`,`replacementClass`],[`data-auto-replace-svg`,`autoReplaceSvg`],[`data-auto-add-css`,`autoAddCss`],[`data-auto-a11y`,`autoA11y`],[`data-search-pseudo-elements`,`searchPseudoElements`],[`data-observe-mutations`,`observeMutations`],[`data-mutate-approach`,`mutateApproach`],[`data-keep-original-source`,`keepOriginalSource`],[`data-measure-performance`,`measurePerformance`],[`data-show-missing-icons`,`showMissingIcons`]].forEach(e=>{let[t,n]=e,r=Be(ze(t));r!=null&&(N[n]=r)});var Ve={styleDefault:`solid`,familyDefault:`classic`,cssPrefix:_e,replacementClass:ve,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:`async`,keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};N.familyPrefix&&(N.cssPrefix=N.familyPrefix);var P={...Ve,...N};P.autoReplaceSvg||(P.observeMutations=!1);var F={};Object.keys(Ve).forEach(e=>{Object.defineProperty(F,e,{enumerable:!0,set:function(t){P[e]=t,I.forEach(e=>e(F))},get:function(){return P[e]}})}),Object.defineProperty(F,"familyPrefix",{enumerable:!0,set:function(e){P.cssPrefix=e,I.forEach(e=>e(F))},get:function(){return P.cssPrefix}}),u.FontAwesomeConfig=F;var I=[];function He(e){return I.push(e),()=>{I.splice(I.indexOf(e),1)}}var L=ge,R={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ue(e){if(!e||!m)return;let t=d.createElement(`style`);t.setAttribute(`type`,`text/css`),t.innerHTML=e;let n=d.head.childNodes,r=null;for(let e=n.length-1;e>-1;e--){let t=n[e],i=(t.tagName||``).toUpperCase();[`STYLE`,`LINK`].indexOf(i)>-1&&(r=t)}return d.head.insertBefore(t,r),e}var We=`0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;function Ge(){let e=12,t=``;for(;e-->0;)t+=We[Math.random()*62|0];return t}function z(e){let t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ke(e){return e.classList?z(e.classList):(e.getAttribute(`class`)||``).split(` `).filter(e=>e)}function qe(e){return`${e}`.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function Je(e){return Object.keys(e||{}).reduce((t,n)=>t+`${n}="${qe(e[n])}" `,``).trim()}function Ye(e){return Object.keys(e||{}).reduce((t,n)=>t+`${n}: ${e[n].trim()};`,``)}function Xe(e){return e.size!==R.size||e.x!==R.x||e.y!==R.y||e.rotate!==R.rotate||e.flipX||e.flipY}function Ze(e){let{transform:t,containerWidth:n,iconWidth:r}=e;return{outer:{transform:`translate(${n/2} 256)`},inner:{transform:`${`translate(${t.x*32}, ${t.y*32}) `} ${`scale(${t.size/16*(t.flipX?-1:1)}, ${t.size/16*(t.flipY?-1:1)}) `} ${`rotate(${t.rotate} 0 0)`}`},path:{transform:`translate(${r/2*-1} -256)`}}}function Qe(e){let{transform:t,width:n=ge,height:r=ge,startCentered:i=!1}=e,a=``;return a+=i&&h?`translate(${t.x/L-n/2}em, ${t.y/L-r/2}em) `:i?`translate(calc(-50% + ${t.x/L}em), calc(-50% + ${t.y/L}em)) `:`translate(${t.x/L}em, ${t.y/L}em) `,a+=`scale(${t.size/L*(t.flipX?-1:1)}, ${t.size/L*(t.flipY?-1:1)}) `,a+=`rotate(${t.rotate}deg) `,a}var $e=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function et(){let e=_e,t=ve,n=F.cssPrefix,r=F.replacementClass,i=$e;if(n!==e||r!==t){let a=RegExp(`\\.${e}\\-`,`g`),o=RegExp(`\\--${e}\\-`,`g`),s=RegExp(`\\.${t}`,`g`);i=i.replace(a,`.${n}-`).replace(o,`--${n}-`).replace(s,`.${r}`)}return i}var tt=!1;function nt(){F.autoAddCss&&!tt&&(Ue(et()),tt=!0)}var rt={mixout(){return{dom:{css:et,insertCss:nt}}},hooks(){return{beforeDOMElementCreation(){nt()},beforeI2svg(){nt()}}}},B=u||{};B[E]||(B[E]={}),B[E].styles||(B[E].styles={}),B[E].hooks||(B[E].hooks={}),B[E].shims||(B[E].shims=[]);var V=B[E],it=[],at=function(){d.removeEventListener(`DOMContentLoaded`,at),ot=1,it.map(e=>e())},ot=!1;m&&(ot=(d.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(d.readyState),ot||d.addEventListener(`DOMContentLoaded`,at));function st(e){m&&(ot?setTimeout(e,0):it.push(e))}function ct(e){let{tag:t,attributes:n={},children:r=[]}=e;return typeof e==`string`?qe(e):`<${t} ${Je(n)}>${r.map(ct).join(``)}</${t}>`}function lt(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var ut=function(e,t){return function(n,r,i,a){return e.call(t,n,r,i,a)}},dt=function(e,t,n,r){var i=Object.keys(e),a=i.length,o=r===void 0?t:ut(t,r),s,c,l;for(n===void 0?(s=1,l=e[i[0]]):(s=0,l=n);s<a;s++)c=i[s],l=o(l,e[c],c,e);return l};function ft(e){let t=[],n=0,r=e.length;for(;n<r;){let i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){let r=e.charCodeAt(n++);(r&64512)==56320?t.push(((i&1023)<<10)+(r&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function pt(e){let t=ft(e);return t.length===1?t[0].toString(16):null}function mt(e,t){let n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function ht(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function gt(e,t){let{skipHooks:n=!1}=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=ht(t);typeof V.hooks.addPack==`function`&&!n?V.hooks.addPack(e,ht(t)):V.styles[e]={...V.styles[e]||{},...r},e===`fas`&&gt(`fa`,t)}var{styles:H,shims:_t}=V,vt={[g]:Object.values(j[g]),[v]:Object.values(j[v]),[y]:Object.values(j[y])},yt=null,bt={},xt={},St={},Ct={},wt={},Tt={[g]:Object.keys(k[g]),[v]:Object.keys(k[v]),[y]:Object.keys(k[y])};function Et(e){return~Re.indexOf(e)}function Dt(e,t){let n=t.split(`-`),r=n[0],i=n.slice(1).join(`-`);return r===e&&i!==``&&!Et(i)?i:null}var Ot=()=>{let e=e=>dt(H,(t,n,r)=>(t[r]=dt(n,e,{}),t),{});bt=e((e,t,n)=>(t[3]&&(e[t[3]]=n),t[2]&&t[2].filter(e=>typeof e==`number`).forEach(t=>{e[t.toString(16)]=n}),e)),xt=e((e,t,n)=>(e[n]=n,t[2]&&t[2].filter(e=>typeof e==`string`).forEach(t=>{e[t]=n}),e)),wt=e((e,t,n)=>{let r=t[2];return e[n]=n,r.forEach(t=>{e[t]=n}),e});let t=`far`in H||F.autoFetchSvg,n=dt(_t,(e,n)=>{let r=n[0],i=n[1],a=n[2];return i===`far`&&!t&&(i=`fas`),typeof r==`string`&&(e.names[r]={prefix:i,iconName:a}),typeof r==`number`&&(e.unicodes[r.toString(16)]={prefix:i,iconName:a}),e},{names:{},unicodes:{}});St=n.names,Ct=n.unicodes,yt=Pt(F.styleDefault,{family:F.familyDefault})};He(e=>{yt=Pt(e.styleDefault,{family:F.familyDefault})}),Ot();function kt(e,t){return(bt[e]||{})[t]}function At(e,t){return(xt[e]||{})[t]}function U(e,t){return(wt[e]||{})[t]}function jt(e){return St[e]||{prefix:null,iconName:null}}function Mt(e){let t=Ct[e],n=kt(`fas`,e);return t||(n?{prefix:`fas`,iconName:n}:null)||{prefix:null,iconName:null}}function W(){return yt}var Nt=()=>({prefix:null,iconName:null,rest:[]});function Pt(e){let{family:t=g}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=k[t][e],r=A[t][e]||A[t][n],i=e in V.styles?e:null;return r||i||null}var Ft={[g]:Object.keys(j[g]),[v]:Object.keys(j[v]),[y]:Object.keys(j[y])};function It(e){let{skipLookups:t=!1}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n={[g]:`${F.cssPrefix}-${g}`,[v]:`${F.cssPrefix}-${v}`,[y]:`${F.cssPrefix}-${y}`},r=null,i=g,a=b.filter(e=>e!==_);a.forEach(t=>{(e.includes(n[t])||e.some(e=>Ft[t].includes(e)))&&(i=t)});let o=e.reduce((e,o)=>{let s=Dt(F.cssPrefix,o);if(H[o]?(o=vt[i].includes(o)?Me[i][o]:o,r=o,e.prefix=o):Tt[i].indexOf(o)>-1?(r=o,e.prefix=Pt(o,{family:i})):s?e.iconName=s:o!==F.replacementClass&&!a.some(e=>o===n[e])&&e.rest.push(o),!t&&e.prefix&&e.iconName){let t=r===`fa`?jt(e.iconName):{},n=U(e.prefix,e.iconName);t.prefix&&(r=null),e.iconName=t.iconName||n||e.iconName,e.prefix=t.prefix||e.prefix,e.prefix===`far`&&!H.far&&H.fas&&!F.autoFetchSvg&&(e.prefix=`fas`)}return e},Nt());return(e.includes(`fa-brands`)||e.includes(`fab`))&&(o.prefix=`fab`),(e.includes(`fa-duotone`)||e.includes(`fad`))&&(o.prefix=`fad`),!o.prefix&&i===v&&(H.fass||F.autoFetchSvg)&&(o.prefix=`fass`,o.iconName=U(o.prefix,o.iconName)||o.iconName),!o.prefix&&i===y&&(H.fasds||F.autoFetchSvg)&&(o.prefix=`fasds`,o.iconName=U(o.prefix,o.iconName)||o.iconName),(o.prefix===`fa`||r===`fa`)&&(o.prefix=W()||`fas`),o}var Lt=class{constructor(){this.definitions={}}add(){let e=[...arguments].reduce(this._pullDefinitions,{});Object.keys(e).forEach(t=>{this.definitions[t]={...this.definitions[t]||{},...e[t]},gt(t,e[t]);let n=j[g][t];n&&gt(n,e[t]),Ot()})}reset(){this.definitions={}}_pullDefinitions(e,t){let n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map(t=>{let{prefix:r,iconName:i,icon:a}=n[t],o=a[2];e[r]||(e[r]={}),o.length>0&&o.forEach(t=>{typeof t==`string`&&(e[r][t]=a)}),e[r][i]=a}),e}},Rt=[],G={},K={},zt=Object.keys(K);function Bt(e,t){let{mixoutsTo:n}=t;return Rt=e,G={},Object.keys(K).forEach(e=>{zt.indexOf(e)===-1&&delete K[e]}),Rt.forEach(e=>{let t=e.mixout?e.mixout():{};if(Object.keys(t).forEach(e=>{typeof t[e]==`function`&&(n[e]=t[e]),typeof t[e]==`object`&&Object.keys(t[e]).forEach(r=>{n[e]||(n[e]={}),n[e][r]=t[e][r]})}),e.hooks){let t=e.hooks();Object.keys(t).forEach(e=>{G[e]||(G[e]=[]),G[e].push(t[e])})}e.provides&&e.provides(K)}),n}function Vt(e,t){var n=[...arguments].slice(2);return(G[e]||[]).forEach(e=>{t=e.apply(null,[t,...n])}),t}function q(e){var t=[...arguments].slice(1);(G[e]||[]).forEach(e=>{e.apply(null,t)})}function J(){let e=arguments[0],t=Array.prototype.slice.call(arguments,1);return K[e]?K[e].apply(null,t):void 0}function Ht(e){e.prefix===`fa`&&(e.prefix=`fas`);let{iconName:t}=e,n=e.prefix||W();if(t)return t=U(n,t)||t,lt(Ut.definitions,n,t)||lt(V.styles,n,t)}var Ut=new Lt,Y={noAuto:()=>{F.autoReplaceSvg=!1,F.observeMutations=!1,q(`noAuto`)},config:F,dom:{i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return m?(q(`beforeI2svg`,e),J(`pseudoElements2svg`,e),J(`i2svg`,e)):Promise.reject(Error(`Operation requires a DOM of some kind.`))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:t}=e;F.autoReplaceSvg===!1&&(F.autoReplaceSvg=!0),F.observeMutations=!0,st(()=>{Wt({autoReplaceSvgRoot:t}),q(`watch`,e)})}},parse:{icon:e=>{if(e===null)return null;if(typeof e==`object`&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:U(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){let t=e[1].indexOf(`fa-`)===0?e[1].slice(3):e[1],n=Pt(e[0]);return{prefix:n,iconName:U(n,t)||t}}if(typeof e==`string`&&(e.indexOf(`${F.cssPrefix}-`)>-1||e.match(Ne))){let t=It(e.split(` `),{skipLookups:!0});return{prefix:t.prefix||W(),iconName:U(t.prefix,t.iconName)||t.iconName}}if(typeof e==`string`){let t=W();return{prefix:t,iconName:U(t,e)||e}}}},library:Ut,findIconDefinition:Ht,toHtml:ct},Wt=function(){let{autoReplaceSvgRoot:e=d}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};(Object.keys(V.styles).length>0||F.autoFetchSvg)&&m&&F.autoReplaceSvg&&Y.dom.i2svg({node:e})};function Gt(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(e=>ct(e))}}),Object.defineProperty(e,"node",{get:function(){if(!m)return;let t=d.createElement(`div`);return t.innerHTML=e.html,t.children}}),e}function Kt(e){let{children:t,main:n,mask:r,attributes:i,styles:a,transform:o}=e;if(Xe(o)&&n.found&&!r.found){let{width:e,height:t}=n,r={x:e/t/2,y:.5};i.style=Ye({...a,"transform-origin":`${r.x+o.x/16}em ${r.y+o.y/16}em`})}return[{tag:`svg`,attributes:i,children:t}]}function qt(e){let{prefix:t,iconName:n,children:r,attributes:i,symbol:a}=e,o=a===!0?`${t}-${F.cssPrefix}-${n}`:a;return[{tag:`svg`,attributes:{style:`display: none;`},children:[{tag:`symbol`,attributes:{...i,id:o},children:r}]}]}function Jt(e){let{icons:{main:t,mask:n},prefix:r,iconName:i,transform:a,symbol:o,title:s,maskId:c,titleId:l,extra:u,watchable:d=!1}=e,{width:f,height:p}=n.found?n:t,m=r===`fak`,h=[F.replacementClass,i?`${F.cssPrefix}-${i}`:``].filter(e=>u.classes.indexOf(e)===-1).filter(e=>e!==``||!!e).concat(u.classes).join(` `),g={children:[],attributes:{...u.attributes,"data-prefix":r,"data-icon":i,class:h,role:u.attributes.role||`img`,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 ${f} ${p}`}},_=m&&!~u.classes.indexOf(`fa-fw`)?{width:`${f/p*16*.0625}em`}:{};d&&(g.attributes[D]=``),s&&(g.children.push({tag:`title`,attributes:{id:g.attributes[`aria-labelledby`]||`title-${l||Ge()}`},children:[s]}),delete g.attributes.title);let v={...g,prefix:r,iconName:i,main:t,mask:n,maskId:c,transform:a,symbol:o,styles:{..._,...u.styles}},{children:y,attributes:b}=n.found&&t.found?J(`generateAbstractMask`,v)||{children:[],attributes:{}}:J(`generateAbstractIcon`,v)||{children:[],attributes:{}};return v.children=y,v.attributes=b,o?qt(v):Kt(v)}function Yt(e){let{content:t,width:n,height:r,transform:i,title:a,extra:o,watchable:s=!1}=e,c={...o.attributes,...a?{title:a}:{},class:o.classes.join(` `)};s&&(c[D]=``);let l={...o.styles};Xe(i)&&(l.transform=Qe({transform:i,startCentered:!0,width:n,height:r}),l[`-webkit-transform`]=l.transform);let u=Ye(l);u.length>0&&(c.style=u);let d=[];return d.push({tag:`span`,attributes:c,children:[t]}),a&&d.push({tag:`span`,attributes:{class:`sr-only`},children:[a]}),d}function Xt(e){let{content:t,title:n,extra:r}=e,i={...r.attributes,...n?{title:n}:{},class:r.classes.join(` `)},a=Ye(r.styles);a.length>0&&(i.style=a);let o=[];return o.push({tag:`span`,attributes:i,children:[t]}),n&&o.push({tag:`span`,attributes:{class:`sr-only`},children:[n]}),o}var{styles:Zt}=V;function Qt(e){let t=e[0],n=e[1],[r]=e.slice(4),i=null;return i=Array.isArray(r)?{tag:`g`,attributes:{class:`${F.cssPrefix}-${Le.GROUP}`},children:[{tag:`path`,attributes:{class:`${F.cssPrefix}-${Le.SECONDARY}`,fill:`currentColor`,d:r[0]}},{tag:`path`,attributes:{class:`${F.cssPrefix}-${Le.PRIMARY}`,fill:`currentColor`,d:r[1]}}]}:{tag:`path`,attributes:{fill:`currentColor`,d:r}},{found:!0,width:t,height:n,icon:i}}var $t={found:!1,width:512,height:512};function en(e,t){!Ee&&!F.showMissingIcons&&e&&console.error(`Icon with name "${e}" and prefix "${t}" is missing.`)}function tn(e,t){let n=t;return t===`fa`&&F.styleDefault!==null&&(t=W()),new Promise((r,i)=>{if(n===`fa`){let n=jt(e)||{};e=n.iconName||e,t=n.prefix||t}if(e&&t&&Zt[t]&&Zt[t][e]){let n=Zt[t][e];return r(Qt(n))}en(e,t),r({...$t,icon:F.showMissingIcons&&e&&J(`missingIconAbstract`)||{}})})}var nn=()=>{},rn=F.measurePerformance&&p&&p.mark&&p.measure?p:{mark:nn,measure:nn},an=`FA "6.6.0"`,on=e=>(rn.mark(`${an} ${e} begins`),()=>sn(e)),sn=e=>{rn.mark(`${an} ${e} ends`),rn.measure(`${an} ${e}`,`${an} ${e} begins`,`${an} ${e} ends`)},cn={begin:on,end:sn},ln=()=>{};function un(e){return typeof(e.getAttribute?e.getAttribute(D):null)==`string`}function dn(e){let t=e.getAttribute?e.getAttribute(xe):null,n=e.getAttribute?e.getAttribute(Se):null;return t&&n}function fn(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(F.replacementClass)}function pn(){return F.autoReplaceSvg===!0?vn.replace:vn[F.autoReplaceSvg]||vn.replace}function mn(e){return d.createElementNS(`http://www.w3.org/2000/svg`,e)}function hn(e){return d.createElement(e)}function gn(e){let{ceFn:t=e.tag===`svg`?mn:hn}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(typeof e==`string`)return d.createTextNode(e);let n=t(e.tag);return Object.keys(e.attributes||[]).forEach(function(t){n.setAttribute(t,e.attributes[t])}),(e.children||[]).forEach(function(e){n.appendChild(gn(e,{ceFn:t}))}),n}function _n(e){let t=` ${e.outerHTML} `;return t=`${t}Font Awesome fontawesome.com `,t}var vn={replace:function(e){let t=e[0];if(t.parentNode){if(e[1].forEach(e=>{t.parentNode.insertBefore(gn(e),t)}),t.getAttribute(D)===null&&F.keepOriginalSource){let e=d.createComment(_n(t));t.parentNode.replaceChild(e,t)}else t.remove()}},nest:function(e){let t=e[0],n=e[1];if(~Ke(t).indexOf(F.replacementClass))return vn.replace(e);let r=RegExp(`${F.cssPrefix}-.*`);if(delete n[0].attributes.id,n[0].attributes.class){let e=n[0].attributes.class.split(` `).reduce((e,t)=>(t===F.replacementClass||t.match(r)?e.toSvg.push(t):e.toNode.push(t),e),{toNode:[],toSvg:[]});n[0].attributes.class=e.toSvg.join(` `),e.toNode.length===0?t.removeAttribute(`class`):t.setAttribute(`class`,e.toNode.join(` `))}let i=n.map(e=>ct(e)).join(`
`);t.setAttribute(D,``),t.innerHTML=i}};function yn(e){e()}function bn(e,t){let n=typeof t==`function`?t:ln;if(e.length===0)n();else{let t=yn;F.mutateApproach===we&&(t=u.requestAnimationFrame||yn),t(()=>{let t=pn(),r=cn.begin(`mutate`);e.map(t),r(),n()})}}var xn=!1;function Sn(){xn=!0}function Cn(){xn=!1}var wn=null;function Tn(e){if(!f||!F.observeMutations)return;let{treeCallback:t=ln,nodeCallback:n=ln,pseudoElementsCallback:r=ln,observeMutationsRoot:i=d}=e;wn=new f(e=>{if(xn)return;let i=W();z(e).forEach(e=>{if(e.type===`childList`&&e.addedNodes.length>0&&!un(e.addedNodes[0])&&(F.searchPseudoElements&&r(e.target),t(e.target)),e.type===`attributes`&&e.target.parentNode&&F.searchPseudoElements&&r(e.target.parentNode),e.type===`attributes`&&un(e.target)&&~Ie.indexOf(e.attributeName)){if(e.attributeName===`class`&&dn(e.target)){let{prefix:t,iconName:n}=It(Ke(e.target));e.target.setAttribute(xe,t||i),n&&e.target.setAttribute(Se,n)}else fn(e.target)&&n(e.target)}})}),m&&wn.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function En(){wn&&wn.disconnect()}function Dn(e){let t=e.getAttribute(`style`),n=[];return t&&(n=t.split(`;`).reduce((e,t)=>{let n=t.split(`:`),r=n[0],i=n.slice(1);return r&&i.length>0&&(e[r]=i.join(`:`).trim()),e},{})),n}function On(e){let t=e.getAttribute(`data-prefix`),n=e.getAttribute(`data-icon`),r=e.innerText===void 0?``:e.innerText.trim(),i=It(Ke(e));return i.prefix||=W(),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=At(i.prefix,e.innerText)||kt(i.prefix,pt(e.innerText))),!i.iconName&&F.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function kn(e){let t=z(e.attributes).reduce((e,t)=>(e.name!==`class`&&e.name!==`style`&&(e[t.name]=t.value),e),{}),n=e.getAttribute(`title`),r=e.getAttribute(`data-fa-title-id`);return F.autoA11y&&(n?t[`aria-labelledby`]=`${F.replacementClass}-title-${r||Ge()}`:(t[`aria-hidden`]=`true`,t.focusable=`false`)),t}function An(){return{iconName:null,title:null,titleId:null,prefix:null,transform:R,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function jn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:n,prefix:r,rest:i}=On(e),a=kn(e),o=Vt(`parseNodeAttributes`,{},e),s=t.styleParser?Dn(e):[];return{iconName:n,title:e.getAttribute(`title`),titleId:e.getAttribute(`data-fa-title-id`),prefix:r,transform:R,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:s,attributes:a},...o}}var{styles:Mn}=V;function Nn(e){let t=F.autoReplaceSvg===`nest`?jn(e,{styleParser:!1}):jn(e);return~t.extra.classes.indexOf(Pe)?J(`generateLayersText`,e,t):J(`generateSvgReplacementMutation`,e,t)}var X=new Set;De.map(e=>{X.add(`fa-${e}`)}),Object.keys(k[g]).map(X.add.bind(X)),Object.keys(k[v]).map(X.add.bind(X)),Object.keys(k[y]).map(X.add.bind(X)),X=[...X];function Pn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!m)return Promise.resolve();let n=d.documentElement.classList,r=e=>n.add(`${Ce}-${e}`),i=e=>n.remove(`${Ce}-${e}`),a=F.autoFetchSvg?X:De.map(e=>`fa-${e}`).concat(Object.keys(Mn));a.includes(`fa`)||a.push(`fa`);let o=[`.${Pe}:not([${D}])`].concat(a.map(e=>`.${e}:not([${D}])`)).join(`, `);if(o.length===0)return Promise.resolve();let s=[];try{s=z(e.querySelectorAll(o))}catch{}if(s.length>0)r(`pending`),i(`complete`);else return Promise.resolve();let c=cn.begin(`onTree`),l=s.reduce((e,t)=>{try{let n=Nn(t);n&&e.push(n)}catch(e){Ee||e.name===`MissingIcon`&&console.error(e)}return e},[]);return new Promise((e,n)=>{Promise.all(l).then(n=>{bn(n,()=>{r(`active`),r(`complete`),i(`pending`),typeof t==`function`&&t(),c(),e()})}).catch(e=>{c(),n(e)})})}function Fn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Nn(e).then(e=>{e&&bn([e],t)})}function In(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Ht(t||{}),{mask:i}=n;return i&&=(i||{}).icon?i:Ht(i||{}),e(r,{...n,mask:i})}}var Ln=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:n=R,symbol:r=!1,mask:i=null,maskId:a=null,title:o=null,titleId:s=null,classes:c=[],attributes:l={},styles:u={}}=t;if(!e)return;let{prefix:d,iconName:f,icon:p}=e;return Gt({type:`icon`,...e},()=>(q(`beforeDOMElementCreation`,{iconDefinition:e,params:t}),F.autoA11y&&(o?l[`aria-labelledby`]=`${F.replacementClass}-title-${s||Ge()}`:(l[`aria-hidden`]=`true`,l.focusable=`false`)),Jt({icons:{main:Qt(p),mask:i?Qt(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:d,iconName:f,transform:{...R,...n},symbol:r,title:o,maskId:a,titleId:s,extra:{attributes:l,styles:u,classes:c}})))},Rn={mixout(){return{icon:In(Ln)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=Pn,e.nodeCallback=Fn,e}}},provides(e){e.i2svg=function(e){let{node:t=d,callback:n=()=>{}}=e;return Pn(t,n)},e.generateSvgReplacementMutation=function(e,t){let{iconName:n,title:r,titleId:i,prefix:a,transform:o,symbol:s,mask:c,maskId:l,extra:u}=t;return new Promise((t,d)=>{Promise.all([tn(n,a),c.iconName?tn(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(c=>{let[d,f]=c;t([e,Jt({icons:{main:d,mask:f},prefix:a,iconName:n,transform:o,symbol:s,maskId:l,title:r,titleId:i,extra:u,watchable:!0})])}).catch(d)})},e.generateAbstractIcon=function(e){let{children:t,attributes:n,main:r,transform:i,styles:a}=e,o=Ye(a);o.length>0&&(n.style=o);let s;return Xe(i)&&(s=J(`generateAbstractTransformGrouping`,{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),t.push(s||r.icon),{children:t,attributes:n}}}},zn={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:n=[]}=t;return Gt({type:`layer`},()=>{q(`beforeDOMElementCreation`,{assembler:e,params:t});let r=[];return e(e=>{Array.isArray(e)?e.map(e=>{r=r.concat(e.abstract)}):r=r.concat(e.abstract)}),[{tag:`span`,attributes:{class:[`${F.cssPrefix}-layers`,...n].join(` `)},children:r}]})}}}},Bn={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:n=null,classes:r=[],attributes:i={},styles:a={}}=t;return Gt({type:`counter`,content:e},()=>(q(`beforeDOMElementCreation`,{content:e,params:t}),Xt({content:e.toString(),title:n,extra:{attributes:i,styles:a,classes:[`${F.cssPrefix}-layers-counter`,...r]}})))}}}},Vn={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:n=R,title:r=null,classes:i=[],attributes:a={},styles:o={}}=t;return Gt({type:`text`,content:e},()=>(q(`beforeDOMElementCreation`,{content:e,params:t}),Yt({content:e,transform:{...R,...n},title:r,extra:{attributes:a,styles:o,classes:[`${F.cssPrefix}-layers-text`,...i]}})))}}},provides(e){e.generateLayersText=function(e,t){let{title:n,transform:r,extra:i}=t,a=null,o=null;if(h){let t=parseInt(getComputedStyle(e).fontSize,10),n=e.getBoundingClientRect();a=n.width/t,o=n.height/t}return F.autoA11y&&!n&&(i.attributes[`aria-hidden`]=`true`),Promise.resolve([e,Yt({content:e.innerHTML,width:a,height:o,transform:r,title:n,extra:i,watchable:!0})])}}},Hn=RegExp(`"`,`ug`),Un=[1105920,1112319],Wn={FontAwesome:{normal:`fas`,400:`fas`},...ie,...re,...fe},Gn=Object.keys(Wn).reduce((e,t)=>(e[t.toLowerCase()]=Wn[t],e),{}),Kn=Object.keys(Gn).reduce((e,t)=>{let n=Gn[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function qn(e){let t=e.replace(Hn,``),n=mt(t,0),r=n>=Un[0]&&n<=Un[1],i=t.length===2&&t[0]===t[1];return{value:pt(i?t[0]:t),isSecondary:r||i}}function Jn(e,t){let n=e.replace(/^['"]|['"]$/g,``).toLowerCase(),r=parseInt(t),i=isNaN(r)?`normal`:r;return(Gn[n]||{})[i]||Kn[n]}function Yn(e,t){let n=`${be}${t.replace(`:`,`-`)}`;return new Promise((r,i)=>{if(e.getAttribute(n)!==null)return r();let a=z(e.children).filter(e=>e.getAttribute(ye)===t)[0],o=u.getComputedStyle(e,t),s=o.getPropertyValue(`font-family`),c=s.match(Fe),l=o.getPropertyValue(`font-weight`),f=o.getPropertyValue(`content`);if(a&&!c)return e.removeChild(a),r();if(c&&f!==`none`&&f!==``){let u=o.getPropertyValue(`content`),f=Jn(s,l),{value:p,isSecondary:m}=qn(u),h=c[0].startsWith(`FontAwesome`),g=kt(f,p),_=g;if(h){let e=Mt(p);e.iconName&&e.prefix&&(g=e.iconName,f=e.prefix)}if(g&&!m&&(!a||a.getAttribute(xe)!==f||a.getAttribute(Se)!==_)){e.setAttribute(n,_),a&&e.removeChild(a);let o=An(),{extra:s}=o;s.attributes[ye]=t,tn(g,f).then(i=>{let a=Jt({...o,icons:{main:i,mask:Nt()},prefix:f,iconName:_,extra:s,watchable:!0}),c=d.createElementNS(`http://www.w3.org/2000/svg`,`svg`);t===`::before`?e.insertBefore(c,e.firstChild):e.appendChild(c),c.outerHTML=a.map(e=>ct(e)).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Xn(e){return Promise.all([Yn(e,`::before`),Yn(e,`::after`)])}function Zn(e){return e.parentNode!==document.head&&!~Te.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(ye)&&(!e.parentNode||e.parentNode.tagName!==`svg`)}function Qn(e){if(m)return new Promise((t,n)=>{let r=z(e.querySelectorAll(`*`)).filter(Zn).map(Xn),i=cn.begin(`searchPseudoElements`);Sn(),Promise.all(r).then(()=>{i(),Cn(),t()}).catch(()=>{i(),Cn(),n()})})}var $n={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=Qn,e}}},provides(e){e.pseudoElements2svg=function(e){let{node:t=d}=e;F.searchPseudoElements&&Qn(t)}}},er=!1,tr={mixout(){return{dom:{unwatch(){Sn(),er=!0}}}},hooks(){return{bootstrap(){Tn(Vt(`mutationObserverCallbacks`,{}))},noAuto(){En()},watch(e){let{observeMutationsRoot:t}=e;er?Cn():Tn(Vt(`mutationObserverCallbacks`,{observeMutationsRoot:t}))}}}},nr=e=>e.toLowerCase().split(` `).reduce((e,t)=>{let n=t.toLowerCase().split(`-`),r=n[0],i=n.slice(1).join(`-`);if(r&&i===`h`)return e.flipX=!0,e;if(r&&i===`v`)return e.flipY=!0,e;if(i=parseFloat(i),isNaN(i))return e;switch(r){case`grow`:e.size+=i;break;case`shrink`:e.size-=i;break;case`left`:e.x-=i;break;case`right`:e.x+=i;break;case`up`:e.y-=i;break;case`down`:e.y+=i;break;case`rotate`:e.rotate+=i}return e},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0}),rr={mixout(){return{parse:{transform:e=>nr(e)}}},hooks(){return{parseNodeAttributes(e,t){let n=t.getAttribute(`data-fa-transform`);return n&&(e.transform=nr(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(e){let{main:t,transform:n,containerWidth:r,iconWidth:i}=e,a={outer:{transform:`translate(${r/2} 256)`},inner:{transform:`${`translate(${n.x*32}, ${n.y*32}) `} ${`scale(${n.size/16*(n.flipX?-1:1)}, ${n.size/16*(n.flipY?-1:1)}) `} ${`rotate(${n.rotate} 0 0)`}`},path:{transform:`translate(${i/2*-1} -256)`}};return{tag:`g`,attributes:{...a.outer},children:[{tag:`g`,attributes:{...a.inner},children:[{tag:t.icon.tag,children:t.icon.children,attributes:{...t.icon.attributes,...a.path}}]}]}}}},ir={x:0,y:0,width:`100%`,height:`100%`};function ar(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill=`black`),e}function or(e){return e.tag===`g`?e.children:[e]}Bt([rt,Rn,zn,Bn,Vn,$n,tr,rr,{hooks(){return{parseNodeAttributes(e,t){let n=t.getAttribute(`data-fa-mask`),r=n?It(n.split(` `).map(e=>e.trim())):Nt();return r.prefix||=W(),e.mask=r,e.maskId=t.getAttribute(`data-fa-mask-id`),e}}},provides(e){e.generateAbstractMask=function(e){let{children:t,attributes:n,main:r,mask:i,maskId:a,transform:o}=e,{width:s,icon:c}=r,{width:l,icon:u}=i,d=Ze({transform:o,containerWidth:l,iconWidth:s}),f={tag:`rect`,attributes:{...ir,fill:`white`}},p=c.children?{children:c.children.map(ar)}:{},m={tag:`g`,attributes:{...d.inner},children:[ar({tag:c.tag,attributes:{...c.attributes,...d.path},...p})]},h={tag:`g`,attributes:{...d.outer},children:[m]},g=`mask-${a||Ge()}`,_=`clip-${a||Ge()}`,v={tag:`mask`,attributes:{...ir,id:g,maskUnits:`userSpaceOnUse`,maskContentUnits:`userSpaceOnUse`},children:[f,h]},y={tag:`defs`,children:[{tag:`clipPath`,attributes:{id:_},children:or(u)},v]};return t.push(y,{tag:`rect`,attributes:{fill:`currentColor`,"clip-path":`url(#${_})`,mask:`url(#${g})`,...ir}}),{children:t,attributes:n}}}},{provides(e){let t=!1;u.matchMedia&&(t=u.matchMedia(`(prefers-reduced-motion: reduce)`).matches),e.missingIconAbstract=function(){let e=[],n={fill:`currentColor`},r={attributeType:`XML`,repeatCount:`indefinite`,dur:`2s`};e.push({tag:`path`,attributes:{...n,d:`M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z`}});let i={...r,attributeName:`opacity`},a={tag:`circle`,attributes:{...n,cx:`256`,cy:`364`,r:`28`},children:[]};return t||a.children.push({tag:`animate`,attributes:{...r,attributeName:`r`,values:`28;14;28;28;14;28;`}},{tag:`animate`,attributes:{...i,values:`1;0;1;1;0;1;`}}),e.push(a),e.push({tag:`path`,attributes:{...n,opacity:`1`,d:`M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z`},children:t?[]:[{tag:`animate`,attributes:{...i,values:`1;0;0;0;0;1;`}}]}),t||e.push({tag:`path`,attributes:{...n,opacity:`0`,d:`M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z`},children:[{tag:`animate`,attributes:{...i,values:`0;0;1;1;0;0;`}}]}),{tag:`g`,attributes:{class:`missing`},children:e}}}},{hooks(){return{parseNodeAttributes(e,t){let n=t.getAttribute(`data-fa-symbol`);return e.symbol=n===null?!1:n===``||n,e}}}}],{mixoutsTo:Y}),Y.noAuto,Y.config,Y.library,Y.dom;var sr=Y.parse;Y.findIconDefinition,Y.toHtml;var cr=Y.icon;Y.layer,Y.text,Y.counter;var lr=t(((e,t)=>{t.exports=`SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED`})),ur=t(((e,t)=>{var n=lr();function r(){}function i(){}i.resetWarningCache=r,t.exports=function(){function e(e,t,r,i,a,o){if(o!==n){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name=`Invariant Violation`,s}}e.isRequired=e;function t(){return e}var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return a.PropTypes=a,a}})),Z=e(t(((e,t)=>{t.exports=ur()()}))()),dr=e(r());function fr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?fr(Object(n),!0).forEach(function(t){$(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):fr(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function pr(e){"@babel/helpers - typeof";return pr=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},pr(e)}function $(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function mr(e,t){if(e==null)return{};for(var n={},r=Object.keys(e),i,a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function hr(e,t){if(e==null)return{};var n=mr(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function gr(e){return _r(e)||vr(e)||yr(e)||xr()}function _r(e){if(Array.isArray(e))return br(e)}function vr(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function yr(e,t){if(e){if(typeof e==`string`)return br(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`)return Array.from(e);if(n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return br(e,t)}}function br(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function xr(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Sr(e){var t,n=e.beat,r=e.fade,i=e.beatFade,a=e.bounce,o=e.shake,s=e.flash,c=e.spin,l=e.spinPulse,u=e.spinReverse,d=e.pulse,f=e.fixedWidth,p=e.inverse,m=e.border,h=e.listItem,g=e.flip,_=e.size,v=e.rotation,y=e.pull,b=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":a,"fa-shake":o,"fa-flash":s,"fa-spin":c,"fa-spin-reverse":u,"fa-spin-pulse":l,"fa-pulse":d,"fa-fw":f,"fa-inverse":p,"fa-border":m,"fa-li":h,"fa-flip":g===!0,"fa-flip-horizontal":g===`horizontal`||g===`both`,"fa-flip-vertical":g===`vertical`||g===`both`},$(t,`fa-${_}`,_!=null),$(t,`fa-rotate-${v}`,v!=null&&v!==0),$(t,`fa-pull-${y}`,y!=null),$(t,`fa-swap-opacity`,e.swapOpacity),t);return Object.keys(b).map(function(e){return b[e]?e:null}).filter(function(e){return e})}function Cr(e){return e-=0,e===e}function wr(e){return Cr(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():``}),e.substr(0,1).toLowerCase()+e.substr(1))}var Tr=[`style`];function Er(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Dr(e){return e.split(`;`).map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var n=t.indexOf(`:`),r=wr(t.slice(0,n)),i=t.slice(n+1).trim();return r.startsWith(`webkit`)?e[Er(r)]=i:e[r]=i,e},{})}function Or(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t==`string`)return t;var r=(t.children||[]).map(function(t){return Or(e,t)}),i=Object.keys(t.attributes||{}).reduce(function(e,n){var r=t.attributes[n];switch(n){case`class`:e.attrs.className=r,delete t.attributes.class;break;case`style`:e.attrs.style=Dr(r);break;default:n.indexOf(`aria-`)===0||n.indexOf(`data-`)===0?e.attrs[n.toLowerCase()]=r:e.attrs[wr(n)]=r}return e},{attrs:{}}),a=n.style,o=a===void 0?{}:a,s=hr(n,Tr);return i.attrs.style=Q(Q({},i.attrs.style),o),e.apply(void 0,[t.tag,Q(Q({},i.attrs),s)].concat(gr(r)))}var kr=!1;try{kr=!0}catch{}function Ar(){if(!kr&&console&&typeof console.error==`function`){var e;(e=console).error.apply(e,arguments)}}function jr(e){if(e&&pr(e)===`object`&&e.prefix&&e.iconName&&e.icon)return e;if(sr.icon)return sr.icon(e);if(e===null)return null;if(e&&pr(e)===`object`&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e==`string`)return{prefix:`fas`,iconName:e}}function Mr(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?$({},e,t):{}}var Nr={border:!1,className:``,mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:``,titleId:null,transform:null,swapOpacity:!1},Pr=dr.forwardRef(function(e,t){var n=Q(Q({},Nr),e),r=n.icon,i=n.mask,a=n.symbol,o=n.className,s=n.title,c=n.titleId,l=n.maskId,u=jr(r),d=Mr(`classes`,[].concat(gr(Sr(n)),gr((o||``).split(` `)))),f=Mr(`transform`,typeof n.transform==`string`?sr.transform(n.transform):n.transform),p=Mr(`mask`,jr(i)),m=cr(u,Q(Q(Q(Q({},d),f),p),{},{symbol:a,title:s,titleId:c,maskId:l}));if(!m)return Ar(`Could not find icon`,u),null;var h=m.abstract,g={ref:t};return Object.keys(n).forEach(function(e){Nr.hasOwnProperty(e)||(g[e]=n[e])}),Fr(h[0],g)});Pr.displayName=`FontAwesomeIcon`,Pr.propTypes={beat:Z.default.bool,border:Z.default.bool,beatFade:Z.default.bool,bounce:Z.default.bool,className:Z.default.string,fade:Z.default.bool,flash:Z.default.bool,mask:Z.default.oneOfType([Z.default.object,Z.default.array,Z.default.string]),maskId:Z.default.string,fixedWidth:Z.default.bool,inverse:Z.default.bool,flip:Z.default.oneOf([!0,!1,`horizontal`,`vertical`,`both`]),icon:Z.default.oneOfType([Z.default.object,Z.default.array,Z.default.string]),listItem:Z.default.bool,pull:Z.default.oneOf([`right`,`left`]),pulse:Z.default.bool,rotation:Z.default.oneOf([0,90,180,270]),shake:Z.default.bool,size:Z.default.oneOf([`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`1x`,`2x`,`3x`,`4x`,`5x`,`6x`,`7x`,`8x`,`9x`,`10x`]),spin:Z.default.bool,spinPulse:Z.default.bool,spinReverse:Z.default.bool,symbol:Z.default.oneOfType([Z.default.bool,Z.default.string]),title:Z.default.string,titleId:Z.default.string,transform:Z.default.oneOfType([Z.default.string,Z.default.object]),swapOpacity:Z.default.bool};var Fr=Or.bind(null,dr.createElement),Ir={prefix:`fab`,iconName:`tiktok`,icon:[448,512,[],`e07b`,`M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z`]},Lr={prefix:`fab`,iconName:`instagram`,icon:[448,512,[],`f16d`,`M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z`]},Rr={prefix:`fab`,iconName:`facebook`,icon:[512,512,[62e3],`f09a`,`M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z`]},zr={prefix:`fab`,iconName:`whatsapp`,icon:[448,512,[],`f232`,`M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z`]},Br={prefix:`fab`,iconName:`youtube`,icon:[576,512,[61802],`f167`,`M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z`]};export{Br as a,zr as i,Lr as n,Pr as o,Ir as r,r as s,Rr as t};