(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Uf={exports:{}},go={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kg;function Fx(){if(Kg)return go;Kg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:u}}return go.Fragment=e,go.jsx=i,go.jsxs=i,go}var Qg;function Hx(){return Qg||(Qg=1,Uf.exports=Fx()),Uf.exports}var ri=Hx(),Lf={exports:{}},se={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jg;function Gx(){if(Jg)return se;Jg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function x(D){return D===null||typeof D!="object"?null:(D=v&&D[v]||D["@@iterator"],typeof D=="function"?D:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,C={};function M(D,K,mt){this.props=D,this.context=K,this.refs=C,this.updater=mt||y}M.prototype.isReactComponent={},M.prototype.setState=function(D,K){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,K,"setState")},M.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function _(){}_.prototype=M.prototype;function H(D,K,mt){this.props=D,this.context=K,this.refs=C,this.updater=mt||y}var P=H.prototype=new _;P.constructor=H,b(P,M.prototype),P.isPureReactComponent=!0;var U=Array.isArray,B={H:null,A:null,T:null,S:null,V:null},G=Object.prototype.hasOwnProperty;function I(D,K,mt,St,At,J){return mt=J.ref,{$$typeof:o,type:D,key:K,ref:mt!==void 0?mt:null,props:J}}function X(D,K){return I(D.type,K,void 0,void 0,void 0,D.props)}function R(D){return typeof D=="object"&&D!==null&&D.$$typeof===o}function w(D){var K={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(mt){return K[mt]})}var O=/\/+/g;function ot(D,K){return typeof D=="object"&&D!==null&&D.key!=null?w(""+D.key):K.toString(36)}function it(){}function lt(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(it,it):(D.status="pending",D.then(function(K){D.status==="pending"&&(D.status="fulfilled",D.value=K)},function(K){D.status==="pending"&&(D.status="rejected",D.reason=K)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function ct(D,K,mt,St,At){var J=typeof D;(J==="undefined"||J==="boolean")&&(D=null);var ft=!1;if(D===null)ft=!0;else switch(J){case"bigint":case"string":case"number":ft=!0;break;case"object":switch(D.$$typeof){case o:case e:ft=!0;break;case g:return ft=D._init,ct(ft(D._payload),K,mt,St,At)}}if(ft)return At=At(D),ft=St===""?"."+ot(D,0):St,U(At)?(mt="",ft!=null&&(mt=ft.replace(O,"$&/")+"/"),ct(At,K,mt,"",function(Ht){return Ht})):At!=null&&(R(At)&&(At=X(At,mt+(At.key==null||D&&D.key===At.key?"":(""+At.key).replace(O,"$&/")+"/")+ft)),K.push(At)),1;ft=0;var Mt=St===""?".":St+":";if(U(D))for(var wt=0;wt<D.length;wt++)St=D[wt],J=Mt+ot(St,wt),ft+=ct(St,K,mt,J,At);else if(wt=x(D),typeof wt=="function")for(D=wt.call(D),wt=0;!(St=D.next()).done;)St=St.value,J=Mt+ot(St,wt++),ft+=ct(St,K,mt,J,At);else if(J==="object"){if(typeof D.then=="function")return ct(lt(D),K,mt,St,At);throw K=String(D),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return ft}function N(D,K,mt){if(D==null)return D;var St=[],At=0;return ct(D,St,"","",function(J){return K.call(mt,J,At++)}),St}function q(D){if(D._status===-1){var K=D._result;K=K(),K.then(function(mt){(D._status===0||D._status===-1)&&(D._status=1,D._result=mt)},function(mt){(D._status===0||D._status===-1)&&(D._status=2,D._result=mt)}),D._status===-1&&(D._status=0,D._result=K)}if(D._status===1)return D._result.default;throw D._result}var W=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function vt(){}return se.Children={map:N,forEach:function(D,K,mt){N(D,function(){K.apply(this,arguments)},mt)},count:function(D){var K=0;return N(D,function(){K++}),K},toArray:function(D){return N(D,function(K){return K})||[]},only:function(D){if(!R(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},se.Component=M,se.Fragment=i,se.Profiler=l,se.PureComponent=H,se.StrictMode=r,se.Suspense=m,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,se.__COMPILER_RUNTIME={__proto__:null,c:function(D){return B.H.useMemoCache(D)}},se.cache=function(D){return function(){return D.apply(null,arguments)}},se.cloneElement=function(D,K,mt){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var St=b({},D.props),At=D.key,J=void 0;if(K!=null)for(ft in K.ref!==void 0&&(J=void 0),K.key!==void 0&&(At=""+K.key),K)!G.call(K,ft)||ft==="key"||ft==="__self"||ft==="__source"||ft==="ref"&&K.ref===void 0||(St[ft]=K[ft]);var ft=arguments.length-2;if(ft===1)St.children=mt;else if(1<ft){for(var Mt=Array(ft),wt=0;wt<ft;wt++)Mt[wt]=arguments[wt+2];St.children=Mt}return I(D.type,At,void 0,void 0,J,St)},se.createContext=function(D){return D={$$typeof:h,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:u,_context:D},D},se.createElement=function(D,K,mt){var St,At={},J=null;if(K!=null)for(St in K.key!==void 0&&(J=""+K.key),K)G.call(K,St)&&St!=="key"&&St!=="__self"&&St!=="__source"&&(At[St]=K[St]);var ft=arguments.length-2;if(ft===1)At.children=mt;else if(1<ft){for(var Mt=Array(ft),wt=0;wt<ft;wt++)Mt[wt]=arguments[wt+2];At.children=Mt}if(D&&D.defaultProps)for(St in ft=D.defaultProps,ft)At[St]===void 0&&(At[St]=ft[St]);return I(D,J,void 0,void 0,null,At)},se.createRef=function(){return{current:null}},se.forwardRef=function(D){return{$$typeof:d,render:D}},se.isValidElement=R,se.lazy=function(D){return{$$typeof:g,_payload:{_status:-1,_result:D},_init:q}},se.memo=function(D,K){return{$$typeof:p,type:D,compare:K===void 0?null:K}},se.startTransition=function(D){var K=B.T,mt={};B.T=mt;try{var St=D(),At=B.S;At!==null&&At(mt,St),typeof St=="object"&&St!==null&&typeof St.then=="function"&&St.then(vt,W)}catch(J){W(J)}finally{B.T=K}},se.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},se.use=function(D){return B.H.use(D)},se.useActionState=function(D,K,mt){return B.H.useActionState(D,K,mt)},se.useCallback=function(D,K){return B.H.useCallback(D,K)},se.useContext=function(D){return B.H.useContext(D)},se.useDebugValue=function(){},se.useDeferredValue=function(D,K){return B.H.useDeferredValue(D,K)},se.useEffect=function(D,K,mt){var St=B.H;if(typeof mt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return St.useEffect(D,K)},se.useId=function(){return B.H.useId()},se.useImperativeHandle=function(D,K,mt){return B.H.useImperativeHandle(D,K,mt)},se.useInsertionEffect=function(D,K){return B.H.useInsertionEffect(D,K)},se.useLayoutEffect=function(D,K){return B.H.useLayoutEffect(D,K)},se.useMemo=function(D,K){return B.H.useMemo(D,K)},se.useOptimistic=function(D,K){return B.H.useOptimistic(D,K)},se.useReducer=function(D,K,mt){return B.H.useReducer(D,K,mt)},se.useRef=function(D){return B.H.useRef(D)},se.useState=function(D){return B.H.useState(D)},se.useSyncExternalStore=function(D,K,mt){return B.H.useSyncExternalStore(D,K,mt)},se.useTransition=function(){return B.H.useTransition()},se.version="19.1.1",se}var $g;function ud(){return $g||($g=1,Lf.exports=Gx()),Lf.exports}var xh=ud(),Nf={exports:{}},_o={},Of={exports:{}},Pf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t_;function Vx(){return t_||(t_=1,function(o){function e(N,q){var W=N.length;N.push(q);t:for(;0<W;){var vt=W-1>>>1,D=N[vt];if(0<l(D,q))N[vt]=q,N[W]=D,W=vt;else break t}}function i(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var q=N[0],W=N.pop();if(W!==q){N[0]=W;t:for(var vt=0,D=N.length,K=D>>>1;vt<K;){var mt=2*(vt+1)-1,St=N[mt],At=mt+1,J=N[At];if(0>l(St,W))At<D&&0>l(J,St)?(N[vt]=J,N[At]=W,vt=At):(N[vt]=St,N[mt]=W,vt=mt);else if(At<D&&0>l(J,W))N[vt]=J,N[At]=W,vt=At;else break t}}return q}function l(N,q){var W=N.sortIndex-q.sortIndex;return W!==0?W:N.id-q.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,v=null,x=3,y=!1,b=!1,C=!1,M=!1,_=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function U(N){for(var q=i(p);q!==null;){if(q.callback===null)r(p);else if(q.startTime<=N)r(p),q.sortIndex=q.expirationTime,e(m,q);else break;q=i(p)}}function B(N){if(C=!1,U(N),!b)if(i(m)!==null)b=!0,G||(G=!0,ot());else{var q=i(p);q!==null&&ct(B,q.startTime-N)}}var G=!1,I=-1,X=5,R=-1;function w(){return M?!0:!(o.unstable_now()-R<X)}function O(){if(M=!1,G){var N=o.unstable_now();R=N;var q=!0;try{t:{b=!1,C&&(C=!1,H(I),I=-1),y=!0;var W=x;try{e:{for(U(N),v=i(m);v!==null&&!(v.expirationTime>N&&w());){var vt=v.callback;if(typeof vt=="function"){v.callback=null,x=v.priorityLevel;var D=vt(v.expirationTime<=N);if(N=o.unstable_now(),typeof D=="function"){v.callback=D,U(N),q=!0;break e}v===i(m)&&r(m),U(N)}else r(m);v=i(m)}if(v!==null)q=!0;else{var K=i(p);K!==null&&ct(B,K.startTime-N),q=!1}}break t}finally{v=null,x=W,y=!1}q=void 0}}finally{q?ot():G=!1}}}var ot;if(typeof P=="function")ot=function(){P(O)};else if(typeof MessageChannel<"u"){var it=new MessageChannel,lt=it.port2;it.port1.onmessage=O,ot=function(){lt.postMessage(null)}}else ot=function(){_(O,0)};function ct(N,q){I=_(function(){N(o.unstable_now())},q)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(N){N.callback=null},o.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<N?Math.floor(1e3/N):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(N){switch(x){case 1:case 2:case 3:var q=3;break;default:q=x}var W=x;x=q;try{return N()}finally{x=W}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(N,q){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var W=x;x=N;try{return q()}finally{x=W}},o.unstable_scheduleCallback=function(N,q,W){var vt=o.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?vt+W:vt):W=vt,N){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=W+D,N={id:g++,callback:q,priorityLevel:N,startTime:W,expirationTime:D,sortIndex:-1},W>vt?(N.sortIndex=W,e(p,N),i(m)===null&&N===i(p)&&(C?(H(I),I=-1):C=!0,ct(B,W-vt))):(N.sortIndex=D,e(m,N),b||y||(b=!0,G||(G=!0,ot()))),N},o.unstable_shouldYield=w,o.unstable_wrapCallback=function(N){var q=x;return function(){var W=x;x=q;try{return N.apply(this,arguments)}finally{x=W}}}}(Pf)),Pf}var e_;function kx(){return e_||(e_=1,Of.exports=Vx()),Of.exports}var zf={exports:{}},Tn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n_;function Xx(){if(n_)return Tn;n_=1;var o=ud();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:g}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Tn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Tn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,g)},Tn.flushSync=function(m){var p=h.T,g=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=g,r.d.f()}},Tn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Tn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Tn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:y}):g==="script"&&r.d.X(m,{crossOrigin:v,integrity:x,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Tn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Tn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Tn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Tn.requestFormReset=function(m){r.d.r(m)},Tn.unstable_batchedUpdates=function(m,p){return m(p)},Tn.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},Tn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Tn.version="19.1.1",Tn}var i_;function Wx(){if(i_)return zf.exports;i_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),zf.exports=Xx(),zf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a_;function qx(){if(a_)return _o;a_=1;var o=kx(),e=ud(),i=Wx();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(u(t)!==t)throw Error(r(188))}function m(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return d(c),t;if(f===s)return d(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var S=!1,T=c.child;T;){if(T===a){S=!0,a=c,s=f;break}if(T===s){S=!0,s=c,a=f;break}T=T.sibling}if(!S){for(T=f.child;T;){if(T===a){S=!0,a=f,s=c;break}if(T===s){S=!0,s=f,a=c;break}T=T.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function p(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=p(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),H=Symbol.for("react.consumer"),P=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),O=Symbol.iterator;function ot(t){return t===null||typeof t!="object"?null:(t=O&&t[O]||t["@@iterator"],typeof t=="function"?t:null)}var it=Symbol.for("react.client.reference");function lt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===it?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case b:return"Fragment";case M:return"Profiler";case C:return"StrictMode";case B:return"Suspense";case G:return"SuspenseList";case R:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case y:return"Portal";case P:return(t.displayName||"Context")+".Provider";case H:return(t._context.displayName||"Context")+".Consumer";case U:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case I:return n=t.displayName||null,n!==null?n:lt(t.type)||"Memo";case X:n=t._payload,t=t._init;try{return lt(t(n))}catch{}}return null}var ct=Array.isArray,N=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},vt=[],D=-1;function K(t){return{current:t}}function mt(t){0>D||(t.current=vt[D],vt[D]=null,D--)}function St(t,n){D++,vt[D]=t.current,t.current=n}var At=K(null),J=K(null),ft=K(null),Mt=K(null);function wt(t,n){switch(St(ft,n),St(J,t),St(At,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Tg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Tg(n),t=bg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}mt(At),St(At,t)}function Ht(){mt(At),mt(J),mt(ft)}function Vt(t){t.memoizedState!==null&&St(Mt,t);var n=At.current,a=bg(n,t.type);n!==a&&(St(J,t),St(At,a))}function Fe(t){J.current===t&&(mt(At),mt(J)),Mt.current===t&&(mt(Mt),uo._currentValue=W)}var de=Object.prototype.hasOwnProperty,F=o.unstable_scheduleCallback,Ae=o.unstable_cancelCallback,Qt=o.unstable_shouldYield,xe=o.unstable_requestPaint,It=o.unstable_now,He=o.unstable_getCurrentPriorityLevel,Ft=o.unstable_ImmediatePriority,re=o.unstable_UserBlockingPriority,qe=o.unstable_NormalPriority,Ye=o.unstable_LowPriority,L=o.unstable_IdlePriority,E=o.log,et=o.unstable_setDisableYieldValue,ht=null,xt=null;function ut(t){if(typeof E=="function"&&et(t),xt&&typeof xt.setStrictMode=="function")try{xt.setStrictMode(ht,t)}catch{}}var Pt=Math.clz32?Math.clz32:Yt,Rt=Math.log,Wt=Math.LN2;function Yt(t){return t>>>=0,t===0?32:31-(Rt(t)/Wt|0)|0}var yt=256,Lt=4194304;function jt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Xt(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var c=0,f=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var T=s&134217727;return T!==0?(s=T&~f,s!==0?c=jt(s):(S&=T,S!==0?c=jt(S):a||(a=T&~t,a!==0&&(c=jt(a))))):(T=s&~f,T!==0?c=jt(T):S!==0?c=jt(S):a||(a=s&~t,a!==0&&(c=jt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Dt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ae(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function k(){var t=yt;return yt<<=1,(yt&4194048)===0&&(yt=256),t}function bt(){var t=Lt;return Lt<<=1,(Lt&62914560)===0&&(Lt=4194304),t}function Ct(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function zt(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Et(t,n,a,s,c,f){var S=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,z=t.expirationTimes,$=t.hiddenUpdates;for(a=S&~a;0<a;){var dt=31-Pt(a),gt=1<<dt;T[dt]=0,z[dt]=-1;var nt=$[dt];if(nt!==null)for($[dt]=null,dt=0;dt<nt.length;dt++){var at=nt[dt];at!==null&&(at.lane&=-536870913)}a&=~gt}s!==0&&_t(t,s,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(S&~n))}function _t(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Pt(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&4194090}function kt(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Pt(a),c=1<<s;c&n|t[s]&n&&(t[s]|=n),a&=~c}}function ie(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Re(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Se(){var t=q.p;return t!==0?t:(t=window.event,t===void 0?32:Xg(t.type))}function oi(t,n){var a=q.p;try{return q.p=t,n()}finally{q.p=a}}var sn=Math.random().toString(36).slice(2),on="__reactFiber$"+sn,je="__reactProps$"+sn,vi="__reactContainer$"+sn,gr="__reactEvents$"+sn,zo="__reactListeners$"+sn,_r="__reactHandles$"+sn,ys="__reactResources$"+sn,xi="__reactMarker$"+sn;function vr(t){delete t[on],delete t[je],delete t[gr],delete t[zo],delete t[_r]}function Li(t){var n=t[on];if(n)return n;for(var a=t.parentNode;a;){if(n=a[vi]||a[on]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=wg(t);t!==null;){if(a=t[on])return a;t=wg(t)}return n}t=a,a=t.parentNode}return null}function aa(t){if(t=t[on]||t[vi]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function Fa(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function ra(t){var n=t[ys];return n||(n=t[ys]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function en(t){t[xi]=!0}var Bo=new Set,Io={};function A(t,n){Y(t,n),Y(t+"Capture",n)}function Y(t,n){for(Io[t]=n,t=0;t<n.length;t++)Bo.add(n[t])}var rt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),st={},j={};function Tt(t){return de.call(j,t)?!0:de.call(st,t)?!1:rt.test(t)?j[t]=!0:(st[t]=!0,!1)}function Ut(t,n,a){if(Tt(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Bt(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Nt(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}var Jt,te;function qt(t){if(Jt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Jt=n&&n[1]||"",te=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Jt+t+te}var le=!1;function Me(t,n){if(!t||le)return"";le=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(at){var nt=at}Reflect.construct(t,[],gt)}else{try{gt.call()}catch(at){nt=at}t.call(gt.prototype)}}else{try{throw Error()}catch(at){nt=at}(gt=t())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(at){if(at&&nt&&typeof at.stack=="string")return[at.stack,nt.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),S=f[0],T=f[1];if(S&&T){var z=S.split(`
`),$=T.split(`
`);for(c=s=0;s<z.length&&!z[s].includes("DetermineComponentFrameRoot");)s++;for(;c<$.length&&!$[c].includes("DetermineComponentFrameRoot");)c++;if(s===z.length||c===$.length)for(s=z.length-1,c=$.length-1;1<=s&&0<=c&&z[s]!==$[c];)c--;for(;1<=s&&0<=c;s--,c--)if(z[s]!==$[c]){if(s!==1||c!==1)do if(s--,c--,0>c||z[s]!==$[c]){var dt=`
`+z[s].replace(" at new "," at ");return t.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",t.displayName)),dt}while(1<=s&&0<=c);break}}}finally{le=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?qt(a):""}function ke(t){switch(t.tag){case 26:case 27:case 5:return qt(t.type);case 16:return qt("Lazy");case 13:return qt("Suspense");case 19:return qt("SuspenseList");case 0:case 15:return Me(t.type,!1);case 11:return Me(t.type.render,!1);case 1:return Me(t.type,!0);case 31:return qt("Activity");default:return""}}function Ue(t){try{var n="";do n+=ke(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function ce(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Kt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ve(t){var n=Kt(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),s=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(S){s=""+S,f.call(this,S)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(S){s=""+S},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function pe(t){t._valueTracker||(t._valueTracker=Ve(t))}function Mn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=Kt(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function li(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Rn=/[\n"\\]/g;function hn(t){return t.replace(Rn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Be(t,n,a,s,c,f,S,T){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),n!=null?S==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ce(n)):t.value!==""+ce(n)&&(t.value=""+ce(n)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),n!=null?yn(t,S,ce(n)):a!=null?yn(t,S,ce(a)):s!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+ce(T):t.removeAttribute("name")}function Cn(t,n,a,s,c,f,S,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+ce(a):"",n=n!=null?""+ce(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=T?t.checked:!!s,t.defaultChecked=!!s,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S)}function yn(t,n,a){n==="number"&&li(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Ke(t,n,a,s){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&s&&(t[a].defaultSelected=!0)}else{for(a=""+ce(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function _n(t,n,a){if(n!=null&&(n=""+ce(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ce(a):""}function xr(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(ct(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=ce(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s)}function Ln(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var z0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Td(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||z0.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function bd(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&Td(t,c,s)}else for(var f in n)n.hasOwnProperty(f)&&Td(t,f,n[f])}function wc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var B0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),I0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Fo(t){return I0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Dc=null;function Uc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Sr=null,Mr=null;function Ad(t){var n=aa(t);if(n&&(t=n.stateNode)){var a=t[je]||null;t:switch(t=n.stateNode,n.type){case"input":if(Be(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+hn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var c=s[je]||null;if(!c)throw Error(r(90));Be(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&Mn(s)}break t;case"textarea":_n(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Ke(t,!!a.multiple,n,!1)}}}var Lc=!1;function Rd(t,n,a){if(Lc)return t(n,a);Lc=!0;try{var s=t(n);return s}finally{if(Lc=!1,(Sr!==null||Mr!==null)&&(Tl(),Sr&&(n=Sr,t=Mr,Mr=Sr=null,Ad(n),t)))for(n=0;n<t.length;n++)Ad(t[n])}}function Es(t,n){var a=t.stateNode;if(a===null)return null;var s=a[je]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Ni=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Nc=!1;if(Ni)try{var Ts={};Object.defineProperty(Ts,"passive",{get:function(){Nc=!0}}),window.addEventListener("test",Ts,Ts),window.removeEventListener("test",Ts,Ts)}catch{Nc=!1}var sa=null,Oc=null,Ho=null;function Cd(){if(Ho)return Ho;var t,n=Oc,a=n.length,s,c="value"in sa?sa.value:sa.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var S=a-t;for(s=1;s<=S&&n[a-s]===c[f-s];s++);return Ho=c.slice(t,1<s?1-s:void 0)}function Go(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Vo(){return!0}function wd(){return!1}function Nn(t){function n(a,s,c,f,S){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Vo:wd,this.isPropagationStopped=wd,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Vo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Vo)},persist:function(){},isPersistent:Vo}),n}var Ha={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ko=Nn(Ha),bs=g({},Ha,{view:0,detail:0}),F0=Nn(bs),Pc,zc,As,Xo=g({},bs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ic,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==As&&(As&&t.type==="mousemove"?(Pc=t.screenX-As.screenX,zc=t.screenY-As.screenY):zc=Pc=0,As=t),Pc)},movementY:function(t){return"movementY"in t?t.movementY:zc}}),Dd=Nn(Xo),H0=g({},Xo,{dataTransfer:0}),G0=Nn(H0),V0=g({},bs,{relatedTarget:0}),Bc=Nn(V0),k0=g({},Ha,{animationName:0,elapsedTime:0,pseudoElement:0}),X0=Nn(k0),W0=g({},Ha,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),q0=Nn(W0),Y0=g({},Ha,{data:0}),Ud=Nn(Y0),Z0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},j0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},K0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Q0(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=K0[t])?!!n[t]:!1}function Ic(){return Q0}var J0=g({},bs,{key:function(t){if(t.key){var n=Z0[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Go(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?j0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ic,charCode:function(t){return t.type==="keypress"?Go(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Go(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$0=Nn(J0),tv=g({},Xo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ld=Nn(tv),ev=g({},bs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ic}),nv=Nn(ev),iv=g({},Ha,{propertyName:0,elapsedTime:0,pseudoElement:0}),av=Nn(iv),rv=g({},Xo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),sv=Nn(rv),ov=g({},Ha,{newState:0,oldState:0}),lv=Nn(ov),cv=[9,13,27,32],Fc=Ni&&"CompositionEvent"in window,Rs=null;Ni&&"documentMode"in document&&(Rs=document.documentMode);var uv=Ni&&"TextEvent"in window&&!Rs,Nd=Ni&&(!Fc||Rs&&8<Rs&&11>=Rs),Od=" ",Pd=!1;function zd(t,n){switch(t){case"keyup":return cv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var yr=!1;function fv(t,n){switch(t){case"compositionend":return Bd(n);case"keypress":return n.which!==32?null:(Pd=!0,Od);case"textInput":return t=n.data,t===Od&&Pd?null:t;default:return null}}function hv(t,n){if(yr)return t==="compositionend"||!Fc&&zd(t,n)?(t=Cd(),Ho=Oc=sa=null,yr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Nd&&n.locale!=="ko"?null:n.data;default:return null}}var dv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Id(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!dv[t.type]:n==="textarea"}function Fd(t,n,a,s){Sr?Mr?Mr.push(s):Mr=[s]:Sr=s,n=Dl(n,"onChange"),0<n.length&&(a=new ko("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Cs=null,ws=null;function pv(t){xg(t,0)}function Wo(t){var n=Fa(t);if(Mn(n))return t}function Hd(t,n){if(t==="change")return n}var Gd=!1;if(Ni){var Hc;if(Ni){var Gc="oninput"in document;if(!Gc){var Vd=document.createElement("div");Vd.setAttribute("oninput","return;"),Gc=typeof Vd.oninput=="function"}Hc=Gc}else Hc=!1;Gd=Hc&&(!document.documentMode||9<document.documentMode)}function kd(){Cs&&(Cs.detachEvent("onpropertychange",Xd),ws=Cs=null)}function Xd(t){if(t.propertyName==="value"&&Wo(ws)){var n=[];Fd(n,ws,t,Uc(t)),Rd(pv,n)}}function mv(t,n,a){t==="focusin"?(kd(),Cs=n,ws=a,Cs.attachEvent("onpropertychange",Xd)):t==="focusout"&&kd()}function gv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Wo(ws)}function _v(t,n){if(t==="click")return Wo(n)}function vv(t,n){if(t==="input"||t==="change")return Wo(n)}function xv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Hn=typeof Object.is=="function"?Object.is:xv;function Ds(t,n){if(Hn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!de.call(n,c)||!Hn(t[c],n[c]))return!1}return!0}function Wd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function qd(t,n){var a=Wd(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Wd(a)}}function Yd(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Yd(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Zd(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=li(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=li(t.document)}return n}function Vc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Sv=Ni&&"documentMode"in document&&11>=document.documentMode,Er=null,kc=null,Us=null,Xc=!1;function jd(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Xc||Er==null||Er!==li(s)||(s=Er,"selectionStart"in s&&Vc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Us&&Ds(Us,s)||(Us=s,s=Dl(kc,"onSelect"),0<s.length&&(n=new ko("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Er)))}function Ga(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Tr={animationend:Ga("Animation","AnimationEnd"),animationiteration:Ga("Animation","AnimationIteration"),animationstart:Ga("Animation","AnimationStart"),transitionrun:Ga("Transition","TransitionRun"),transitionstart:Ga("Transition","TransitionStart"),transitioncancel:Ga("Transition","TransitionCancel"),transitionend:Ga("Transition","TransitionEnd")},Wc={},Kd={};Ni&&(Kd=document.createElement("div").style,"AnimationEvent"in window||(delete Tr.animationend.animation,delete Tr.animationiteration.animation,delete Tr.animationstart.animation),"TransitionEvent"in window||delete Tr.transitionend.transition);function Va(t){if(Wc[t])return Wc[t];if(!Tr[t])return t;var n=Tr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Kd)return Wc[t]=n[a];return t}var Qd=Va("animationend"),Jd=Va("animationiteration"),$d=Va("animationstart"),Mv=Va("transitionrun"),yv=Va("transitionstart"),Ev=Va("transitioncancel"),tp=Va("transitionend"),ep=new Map,qc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");qc.push("scrollEnd");function ci(t,n){ep.set(t,n),A(n,[t])}var np=new WeakMap;function Kn(t,n){if(typeof t=="object"&&t!==null){var a=np.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Ue(n)},np.set(t,n),n)}return{value:t,source:n,stack:Ue(n)}}var Qn=[],br=0,Yc=0;function qo(){for(var t=br,n=Yc=br=0;n<t;){var a=Qn[n];Qn[n++]=null;var s=Qn[n];Qn[n++]=null;var c=Qn[n];Qn[n++]=null;var f=Qn[n];if(Qn[n++]=null,s!==null&&c!==null){var S=s.pending;S===null?c.next=c:(c.next=S.next,S.next=c),s.pending=c}f!==0&&ip(a,c,f)}}function Yo(t,n,a,s){Qn[br++]=t,Qn[br++]=n,Qn[br++]=a,Qn[br++]=s,Yc|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function Zc(t,n,a,s){return Yo(t,n,a,s),Zo(t)}function Ar(t,n){return Yo(t,null,null,n),Zo(t)}function ip(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Pt(a),t=f.hiddenUpdates,s=t[c],s===null?t[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function Zo(t){if(50<no)throw no=0,tf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Rr={};function Tv(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gn(t,n,a,s){return new Tv(t,n,a,s)}function jc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Oi(t,n){var a=t.alternate;return a===null?(a=Gn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function ap(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function jo(t,n,a,s,c,f){var S=0;if(s=t,typeof t=="function")jc(t)&&(S=1);else if(typeof t=="string")S=Ax(t,a,At.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case R:return t=Gn(31,a,n,c),t.elementType=R,t.lanes=f,t;case b:return ka(a.children,c,f,n);case C:S=8,c|=24;break;case M:return t=Gn(12,a,n,c|2),t.elementType=M,t.lanes=f,t;case B:return t=Gn(13,a,n,c),t.elementType=B,t.lanes=f,t;case G:return t=Gn(19,a,n,c),t.elementType=G,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _:case P:S=10;break t;case H:S=9;break t;case U:S=11;break t;case I:S=14;break t;case X:S=16,s=null;break t}S=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Gn(S,a,n,c),n.elementType=t,n.type=s,n.lanes=f,n}function ka(t,n,a,s){return t=Gn(7,t,s,n),t.lanes=a,t}function Kc(t,n,a){return t=Gn(6,t,null,n),t.lanes=a,t}function Qc(t,n,a){return n=Gn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Cr=[],wr=0,Ko=null,Qo=0,Jn=[],$n=0,Xa=null,Pi=1,zi="";function Wa(t,n){Cr[wr++]=Qo,Cr[wr++]=Ko,Ko=t,Qo=n}function rp(t,n,a){Jn[$n++]=Pi,Jn[$n++]=zi,Jn[$n++]=Xa,Xa=t;var s=Pi;t=zi;var c=32-Pt(s)-1;s&=~(1<<c),a+=1;var f=32-Pt(n)+c;if(30<f){var S=c-c%5;f=(s&(1<<S)-1).toString(32),s>>=S,c-=S,Pi=1<<32-Pt(n)+c|a<<c|s,zi=f+t}else Pi=1<<f|a<<c|s,zi=t}function Jc(t){t.return!==null&&(Wa(t,1),rp(t,1,0))}function $c(t){for(;t===Ko;)Ko=Cr[--wr],Cr[wr]=null,Qo=Cr[--wr],Cr[wr]=null;for(;t===Xa;)Xa=Jn[--$n],Jn[$n]=null,zi=Jn[--$n],Jn[$n]=null,Pi=Jn[--$n],Jn[$n]=null}var wn=null,Qe=null,be=!1,qa=null,Si=!1,tu=Error(r(519));function Ya(t){var n=Error(r(418,""));throw Os(Kn(n,t)),tu}function sp(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[on]=t,n[je]=s,a){case"dialog":ge("cancel",n),ge("close",n);break;case"iframe":case"object":case"embed":ge("load",n);break;case"video":case"audio":for(a=0;a<ao.length;a++)ge(ao[a],n);break;case"source":ge("error",n);break;case"img":case"image":case"link":ge("error",n),ge("load",n);break;case"details":ge("toggle",n);break;case"input":ge("invalid",n),Cn(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),pe(n);break;case"select":ge("invalid",n);break;case"textarea":ge("invalid",n),xr(n,s.value,s.defaultValue,s.children),pe(n)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Eg(n.textContent,a)?(s.popover!=null&&(ge("beforetoggle",n),ge("toggle",n)),s.onScroll!=null&&ge("scroll",n),s.onScrollEnd!=null&&ge("scrollend",n),s.onClick!=null&&(n.onclick=Ul),n=!0):n=!1,n||Ya(t)}function op(t){for(wn=t.return;wn;)switch(wn.tag){case 5:case 13:Si=!1;return;case 27:case 3:Si=!0;return;default:wn=wn.return}}function Ls(t){if(t!==wn)return!1;if(!be)return op(t),be=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||_f(t.type,t.memoizedProps)),a=!a),a&&Qe&&Ya(t),op(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));t:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){Qe=fi(t.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}Qe=null}}else n===27?(n=Qe,ya(t.type)?(t=Mf,Mf=null,Qe=t):Qe=n):Qe=wn?fi(t.stateNode.nextSibling):null;return!0}function Ns(){Qe=wn=null,be=!1}function lp(){var t=qa;return t!==null&&(zn===null?zn=t:zn.push.apply(zn,t),qa=null),t}function Os(t){qa===null?qa=[t]:qa.push(t)}var eu=K(null),Za=null,Bi=null;function oa(t,n,a){St(eu,n._currentValue),n._currentValue=a}function Ii(t){t._currentValue=eu.current,mt(eu)}function nu(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function iu(t,n,a,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var S=c.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=c;for(var z=0;z<n.length;z++)if(T.context===n[z]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),nu(f.return,a,t),s||(S=null);break t}f=T.next}}else if(c.tag===18){if(S=c.return,S===null)throw Error(r(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),nu(S,a,t),S=null}else S=c.child;if(S!==null)S.return=c;else for(S=c;S!==null;){if(S===t){S=null;break}if(c=S.sibling,c!==null){c.return=S.return,S=c;break}S=S.return}c=S}}function Ps(t,n,a,s){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var S=c.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var T=c.type;Hn(c.pendingProps.value,S.value)||(t!==null?t.push(T):t=[T])}}else if(c===Mt.current){if(S=c.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(uo):t=[uo])}c=c.return}t!==null&&iu(n,t,a,s),n.flags|=262144}function Jo(t){for(t=t.firstContext;t!==null;){if(!Hn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ja(t){Za=t,Bi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function En(t){return cp(Za,t)}function $o(t,n){return Za===null&&ja(t),cp(t,n)}function cp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Bi===null){if(t===null)throw Error(r(308));Bi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Bi=Bi.next=n;return a}var bv=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Av=o.unstable_scheduleCallback,Rv=o.unstable_NormalPriority,ln={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function au(){return{controller:new bv,data:new Map,refCount:0}}function zs(t){t.refCount--,t.refCount===0&&Av(Rv,function(){t.controller.abort()})}var Bs=null,ru=0,Dr=0,Ur=null;function Cv(t,n){if(Bs===null){var a=Bs=[];ru=0,Dr=lf(),Ur={status:"pending",value:void 0,then:function(s){a.push(s)}}}return ru++,n.then(up,up),n}function up(){if(--ru===0&&Bs!==null){Ur!==null&&(Ur.status="fulfilled");var t=Bs;Bs=null,Dr=0,Ur=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function wv(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var fp=N.S;N.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Cv(t,n),fp!==null&&fp(t,n)};var Ka=K(null);function su(){var t=Ka.current;return t!==null?t:Ge.pooledCache}function tl(t,n){n===null?St(Ka,Ka.current):St(Ka,n.pool)}function hp(){var t=su();return t===null?null:{parent:ln._currentValue,pool:t}}var Is=Error(r(460)),dp=Error(r(474)),el=Error(r(542)),ou={then:function(){}};function pp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function nl(){}function mp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(nl,nl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,_p(t),t;default:if(typeof n.status=="string")n.then(nl,nl);else{if(t=Ge,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,_p(t),t}throw Fs=n,Is}}var Fs=null;function gp(){if(Fs===null)throw Error(r(459));var t=Fs;return Fs=null,t}function _p(t){if(t===Is||t===el)throw Error(r(483))}var la=!1;function lu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function cu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ca(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ua(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(we&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=Zo(t),ip(t,null,a),n}return Yo(t,s,n,a),Zo(t)}function Hs(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,kt(t,a)}}function uu(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var fu=!1;function Gs(){if(fu){var t=Ur;if(t!==null)throw t}}function Vs(t,n,a,s){fu=!1;var c=t.updateQueue;la=!1;var f=c.firstBaseUpdate,S=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var z=T,$=z.next;z.next=null,S===null?f=$:S.next=$,S=z;var dt=t.alternate;dt!==null&&(dt=dt.updateQueue,T=dt.lastBaseUpdate,T!==S&&(T===null?dt.firstBaseUpdate=$:T.next=$,dt.lastBaseUpdate=z))}if(f!==null){var gt=c.baseState;S=0,dt=$=z=null,T=f;do{var nt=T.lane&-536870913,at=nt!==T.lane;if(at?(ve&nt)===nt:(s&nt)===nt){nt!==0&&nt===Dr&&(fu=!0),dt!==null&&(dt=dt.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var ne=t,$t=T;nt=n;var Oe=a;switch($t.tag){case 1:if(ne=$t.payload,typeof ne=="function"){gt=ne.call(Oe,gt,nt);break t}gt=ne;break t;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=$t.payload,nt=typeof ne=="function"?ne.call(Oe,gt,nt):ne,nt==null)break t;gt=g({},gt,nt);break t;case 2:la=!0}}nt=T.callback,nt!==null&&(t.flags|=64,at&&(t.flags|=8192),at=c.callbacks,at===null?c.callbacks=[nt]:at.push(nt))}else at={lane:nt,tag:T.tag,payload:T.payload,callback:T.callback,next:null},dt===null?($=dt=at,z=gt):dt=dt.next=at,S|=nt;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;at=T,T=at.next,at.next=null,c.lastBaseUpdate=at,c.shared.pending=null}}while(!0);dt===null&&(z=gt),c.baseState=z,c.firstBaseUpdate=$,c.lastBaseUpdate=dt,f===null&&(c.shared.lanes=0),va|=S,t.lanes=S,t.memoizedState=gt}}function vp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function xp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)vp(a[t],n)}var Lr=K(null),il=K(0);function Sp(t,n){t=Wi,St(il,t),St(Lr,n),Wi=t|n.baseLanes}function hu(){St(il,Wi),St(Lr,Lr.current)}function du(){Wi=il.current,mt(Lr),mt(il)}var fa=0,fe=null,Le=null,nn=null,al=!1,Nr=!1,Qa=!1,rl=0,ks=0,Or=null,Dv=0;function $e(){throw Error(r(321))}function pu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Hn(t[a],n[a]))return!1;return!0}function mu(t,n,a,s,c,f){return fa=f,fe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,N.H=t===null||t.memoizedState===null?im:am,Qa=!1,f=a(s,c),Qa=!1,Nr&&(f=yp(n,a,s,c)),Mp(t),f}function Mp(t){N.H=fl;var n=Le!==null&&Le.next!==null;if(fa=0,nn=Le=fe=null,al=!1,ks=0,Or=null,n)throw Error(r(300));t===null||dn||(t=t.dependencies,t!==null&&Jo(t)&&(dn=!0))}function yp(t,n,a,s){fe=t;var c=0;do{if(Nr&&(Or=null),ks=0,Nr=!1,25<=c)throw Error(r(301));if(c+=1,nn=Le=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}N.H=Bv,f=n(a,s)}while(Nr);return f}function Uv(){var t=N.H,n=t.useState()[0];return n=typeof n.then=="function"?Xs(n):n,t=t.useState()[0],(Le!==null?Le.memoizedState:null)!==t&&(fe.flags|=1024),n}function gu(){var t=rl!==0;return rl=0,t}function _u(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function vu(t){if(al){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}al=!1}fa=0,nn=Le=fe=null,Nr=!1,ks=rl=0,Or=null}function On(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?fe.memoizedState=nn=t:nn=nn.next=t,nn}function an(){if(Le===null){var t=fe.alternate;t=t!==null?t.memoizedState:null}else t=Le.next;var n=nn===null?fe.memoizedState:nn.next;if(n!==null)nn=n,Le=t;else{if(t===null)throw fe.alternate===null?Error(r(467)):Error(r(310));Le=t,t={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},nn===null?fe.memoizedState=nn=t:nn=nn.next=t}return nn}function xu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Xs(t){var n=ks;return ks+=1,Or===null&&(Or=[]),t=mp(Or,t,n),n=fe,(nn===null?n.memoizedState:nn.next)===null&&(n=n.alternate,N.H=n===null||n.memoizedState===null?im:am),t}function sl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Xs(t);if(t.$$typeof===P)return En(t)}throw Error(r(438,String(t)))}function Su(t){var n=null,a=fe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=fe.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=xu(),fe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=w;return n.index++,a}function Fi(t,n){return typeof n=="function"?n(t):n}function ol(t){var n=an();return Mu(n,Le,t)}function Mu(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=t.baseQueue,f=s.pending;if(f!==null){if(c!==null){var S=c.next;c.next=f.next,f.next=S}n.baseQueue=c=f,s.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var T=S=null,z=null,$=n,dt=!1;do{var gt=$.lane&-536870913;if(gt!==$.lane?(ve&gt)===gt:(fa&gt)===gt){var nt=$.revertLane;if(nt===0)z!==null&&(z=z.next={lane:0,revertLane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),gt===Dr&&(dt=!0);else if((fa&nt)===nt){$=$.next,nt===Dr&&(dt=!0);continue}else gt={lane:0,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},z===null?(T=z=gt,S=f):z=z.next=gt,fe.lanes|=nt,va|=nt;gt=$.action,Qa&&a(f,gt),f=$.hasEagerState?$.eagerState:a(f,gt)}else nt={lane:gt,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},z===null?(T=z=nt,S=f):z=z.next=nt,fe.lanes|=gt,va|=gt;$=$.next}while($!==null&&$!==n);if(z===null?S=f:z.next=T,!Hn(f,t.memoizedState)&&(dn=!0,dt&&(a=Ur,a!==null)))throw a;t.memoizedState=f,t.baseState=S,t.baseQueue=z,s.lastRenderedState=f}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function yu(t){var n=an(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var S=c=c.next;do f=t(f,S.action),S=S.next;while(S!==c);Hn(f,n.memoizedState)||(dn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Ep(t,n,a){var s=fe,c=an(),f=be;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!Hn((Le||c).memoizedState,a);S&&(c.memoizedState=a,dn=!0),c=c.queue;var T=Ap.bind(null,s,c,t);if(Ws(2048,8,T,[t]),c.getSnapshot!==n||S||nn!==null&&nn.memoizedState.tag&1){if(s.flags|=2048,Pr(9,ll(),bp.bind(null,s,c,a,n),null),Ge===null)throw Error(r(349));f||(fa&124)!==0||Tp(s,n,a)}return a}function Tp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=fe.updateQueue,n===null?(n=xu(),fe.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function bp(t,n,a,s){n.value=a,n.getSnapshot=s,Rp(n)&&Cp(t)}function Ap(t,n,a){return a(function(){Rp(n)&&Cp(t)})}function Rp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Hn(t,a)}catch{return!0}}function Cp(t){var n=Ar(t,2);n!==null&&qn(n,t,2)}function Eu(t){var n=On();if(typeof t=="function"){var a=t;if(t=a(),Qa){ut(!0);try{a()}finally{ut(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:t},n}function wp(t,n,a,s){return t.baseState=a,Mu(t,Le,typeof s=="function"?s:Fi)}function Lv(t,n,a,s,c){if(ul(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};N.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Dp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Dp(t,n){var a=n.action,s=n.payload,c=t.state;if(n.isTransition){var f=N.T,S={};N.T=S;try{var T=a(c,s),z=N.S;z!==null&&z(S,T),Up(t,n,T)}catch($){Tu(t,n,$)}finally{N.T=f}}else try{f=a(c,s),Up(t,n,f)}catch($){Tu(t,n,$)}}function Up(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Lp(t,n,s)},function(s){return Tu(t,n,s)}):Lp(t,n,a)}function Lp(t,n,a){n.status="fulfilled",n.value=a,Np(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Dp(t,a)))}function Tu(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Np(n),n=n.next;while(n!==s)}t.action=null}function Np(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Op(t,n){return n}function Pp(t,n){if(be){var a=Ge.formState;if(a!==null){t:{var s=fe;if(be){if(Qe){e:{for(var c=Qe,f=Si;c.nodeType!==8;){if(!f){c=null;break e}if(c=fi(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Qe=fi(c.nextSibling),s=c.data==="F!";break t}}Ya(s)}s=!1}s&&(n=a[0])}}return a=On(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Op,lastRenderedState:n},a.queue=s,a=tm.bind(null,fe,s),s.dispatch=a,s=Eu(!1),f=wu.bind(null,fe,!1,s.queue),s=On(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,a=Lv.bind(null,fe,c,f,a),c.dispatch=a,s.memoizedState=t,[n,a,!1]}function zp(t){var n=an();return Bp(n,Le,t)}function Bp(t,n,a){if(n=Mu(t,n,Op)[0],t=ol(Fi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=Xs(n)}catch(S){throw S===Is?el:S}else s=n;n=an();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(fe.flags|=2048,Pr(9,ll(),Nv.bind(null,c,a),null)),[s,f,t]}function Nv(t,n){t.action=n}function Ip(t){var n=an(),a=Le;if(a!==null)return Bp(n,a,t);an(),n=n.memoizedState,a=an();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Pr(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=fe.updateQueue,n===null&&(n=xu(),fe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function ll(){return{destroy:void 0,resource:void 0}}function Fp(){return an().memoizedState}function cl(t,n,a,s){var c=On();s=s===void 0?null:s,fe.flags|=t,c.memoizedState=Pr(1|n,ll(),a,s)}function Ws(t,n,a,s){var c=an();s=s===void 0?null:s;var f=c.memoizedState.inst;Le!==null&&s!==null&&pu(s,Le.memoizedState.deps)?c.memoizedState=Pr(n,f,a,s):(fe.flags|=t,c.memoizedState=Pr(1|n,f,a,s))}function Hp(t,n){cl(8390656,8,t,n)}function Gp(t,n){Ws(2048,8,t,n)}function Vp(t,n){return Ws(4,2,t,n)}function kp(t,n){return Ws(4,4,t,n)}function Xp(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Wp(t,n,a){a=a!=null?a.concat([t]):null,Ws(4,4,Xp.bind(null,n,t),a)}function bu(){}function qp(t,n){var a=an();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&pu(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function Yp(t,n){var a=an();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&pu(n,s[1]))return s[0];if(s=t(),Qa){ut(!0);try{t()}finally{ut(!1)}}return a.memoizedState=[s,n],s}function Au(t,n,a){return a===void 0||(fa&1073741824)!==0?t.memoizedState=n:(t.memoizedState=a,t=Km(),fe.lanes|=t,va|=t,a)}function Zp(t,n,a,s){return Hn(a,n)?a:Lr.current!==null?(t=Au(t,a,s),Hn(t,n)||(dn=!0),t):(fa&42)===0?(dn=!0,t.memoizedState=a):(t=Km(),fe.lanes|=t,va|=t,n)}function jp(t,n,a,s,c){var f=q.p;q.p=f!==0&&8>f?f:8;var S=N.T,T={};N.T=T,wu(t,!1,n,a);try{var z=c(),$=N.S;if($!==null&&$(T,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var dt=wv(z,s);qs(t,n,dt,Wn(t))}else qs(t,n,s,Wn(t))}catch(gt){qs(t,n,{then:function(){},status:"rejected",reason:gt},Wn())}finally{q.p=f,N.T=S}}function Ov(){}function Ru(t,n,a,s){if(t.tag!==5)throw Error(r(476));var c=Kp(t).queue;jp(t,c,n,W,a===null?Ov:function(){return Qp(t),a(s)})}function Kp(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:W},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Qp(t){var n=Kp(t).next.queue;qs(t,n,{},Wn())}function Cu(){return En(uo)}function Jp(){return an().memoizedState}function $p(){return an().memoizedState}function Pv(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Wn();t=ca(a);var s=ua(n,t,a);s!==null&&(qn(s,n,a),Hs(s,n,a)),n={cache:au()},t.payload=n;return}n=n.return}}function zv(t,n,a){var s=Wn();a={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},ul(t)?em(n,a):(a=Zc(t,n,a,s),a!==null&&(qn(a,t,s),nm(a,n,s)))}function tm(t,n,a){var s=Wn();qs(t,n,a,s)}function qs(t,n,a,s){var c={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(ul(t))em(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,T=f(S,a);if(c.hasEagerState=!0,c.eagerState=T,Hn(T,S))return Yo(t,n,c,0),Ge===null&&qo(),!1}catch{}finally{}if(a=Zc(t,n,c,s),a!==null)return qn(a,t,s),nm(a,n,s),!0}return!1}function wu(t,n,a,s){if(s={lane:2,revertLane:lf(),action:s,hasEagerState:!1,eagerState:null,next:null},ul(t)){if(n)throw Error(r(479))}else n=Zc(t,a,s,2),n!==null&&qn(n,t,2)}function ul(t){var n=t.alternate;return t===fe||n!==null&&n===fe}function em(t,n){Nr=al=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function nm(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,kt(t,a)}}var fl={readContext:En,use:sl,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useLayoutEffect:$e,useInsertionEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useSyncExternalStore:$e,useId:$e,useHostTransitionStatus:$e,useFormState:$e,useActionState:$e,useOptimistic:$e,useMemoCache:$e,useCacheRefresh:$e},im={readContext:En,use:sl,useCallback:function(t,n){return On().memoizedState=[t,n===void 0?null:n],t},useContext:En,useEffect:Hp,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,cl(4194308,4,Xp.bind(null,n,t),a)},useLayoutEffect:function(t,n){return cl(4194308,4,t,n)},useInsertionEffect:function(t,n){cl(4,2,t,n)},useMemo:function(t,n){var a=On();n=n===void 0?null:n;var s=t();if(Qa){ut(!0);try{t()}finally{ut(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=On();if(a!==void 0){var c=a(n);if(Qa){ut(!0);try{a(n)}finally{ut(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=zv.bind(null,fe,t),[s.memoizedState,t]},useRef:function(t){var n=On();return t={current:t},n.memoizedState=t},useState:function(t){t=Eu(t);var n=t.queue,a=tm.bind(null,fe,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:bu,useDeferredValue:function(t,n){var a=On();return Au(a,t,n)},useTransition:function(){var t=Eu(!1);return t=jp.bind(null,fe,t.queue,!0,!1),On().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=fe,c=On();if(be){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ge===null)throw Error(r(349));(ve&124)!==0||Tp(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Hp(Ap.bind(null,s,f,t),[t]),s.flags|=2048,Pr(9,ll(),bp.bind(null,s,f,a,n),null),a},useId:function(){var t=On(),n=Ge.identifierPrefix;if(be){var a=zi,s=Pi;a=(s&~(1<<32-Pt(s)-1)).toString(32)+a,n="«"+n+"R"+a,a=rl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=Dv++,n="«"+n+"r"+a.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:Cu,useFormState:Pp,useActionState:Pp,useOptimistic:function(t){var n=On();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=wu.bind(null,fe,!0,a),a.dispatch=n,[t,n]},useMemoCache:Su,useCacheRefresh:function(){return On().memoizedState=Pv.bind(null,fe)}},am={readContext:En,use:sl,useCallback:qp,useContext:En,useEffect:Gp,useImperativeHandle:Wp,useInsertionEffect:Vp,useLayoutEffect:kp,useMemo:Yp,useReducer:ol,useRef:Fp,useState:function(){return ol(Fi)},useDebugValue:bu,useDeferredValue:function(t,n){var a=an();return Zp(a,Le.memoizedState,t,n)},useTransition:function(){var t=ol(Fi)[0],n=an().memoizedState;return[typeof t=="boolean"?t:Xs(t),n]},useSyncExternalStore:Ep,useId:Jp,useHostTransitionStatus:Cu,useFormState:zp,useActionState:zp,useOptimistic:function(t,n){var a=an();return wp(a,Le,t,n)},useMemoCache:Su,useCacheRefresh:$p},Bv={readContext:En,use:sl,useCallback:qp,useContext:En,useEffect:Gp,useImperativeHandle:Wp,useInsertionEffect:Vp,useLayoutEffect:kp,useMemo:Yp,useReducer:yu,useRef:Fp,useState:function(){return yu(Fi)},useDebugValue:bu,useDeferredValue:function(t,n){var a=an();return Le===null?Au(a,t,n):Zp(a,Le.memoizedState,t,n)},useTransition:function(){var t=yu(Fi)[0],n=an().memoizedState;return[typeof t=="boolean"?t:Xs(t),n]},useSyncExternalStore:Ep,useId:Jp,useHostTransitionStatus:Cu,useFormState:Ip,useActionState:Ip,useOptimistic:function(t,n){var a=an();return Le!==null?wp(a,Le,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Su,useCacheRefresh:$p},zr=null,Ys=0;function hl(t){var n=Ys;return Ys+=1,zr===null&&(zr=[]),mp(zr,t,n)}function Zs(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function dl(t,n){throw n.$$typeof===v?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function rm(t){var n=t._init;return n(t._payload)}function sm(t){function n(Z,V){if(t){var Q=Z.deletions;Q===null?(Z.deletions=[V],Z.flags|=16):Q.push(V)}}function a(Z,V){if(!t)return null;for(;V!==null;)n(Z,V),V=V.sibling;return null}function s(Z){for(var V=new Map;Z!==null;)Z.key!==null?V.set(Z.key,Z):V.set(Z.index,Z),Z=Z.sibling;return V}function c(Z,V){return Z=Oi(Z,V),Z.index=0,Z.sibling=null,Z}function f(Z,V,Q){return Z.index=Q,t?(Q=Z.alternate,Q!==null?(Q=Q.index,Q<V?(Z.flags|=67108866,V):Q):(Z.flags|=67108866,V)):(Z.flags|=1048576,V)}function S(Z){return t&&Z.alternate===null&&(Z.flags|=67108866),Z}function T(Z,V,Q,pt){return V===null||V.tag!==6?(V=Kc(Q,Z.mode,pt),V.return=Z,V):(V=c(V,Q),V.return=Z,V)}function z(Z,V,Q,pt){var Gt=Q.type;return Gt===b?dt(Z,V,Q.props.children,pt,Q.key):V!==null&&(V.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===X&&rm(Gt)===V.type)?(V=c(V,Q.props),Zs(V,Q),V.return=Z,V):(V=jo(Q.type,Q.key,Q.props,null,Z.mode,pt),Zs(V,Q),V.return=Z,V)}function $(Z,V,Q,pt){return V===null||V.tag!==4||V.stateNode.containerInfo!==Q.containerInfo||V.stateNode.implementation!==Q.implementation?(V=Qc(Q,Z.mode,pt),V.return=Z,V):(V=c(V,Q.children||[]),V.return=Z,V)}function dt(Z,V,Q,pt,Gt){return V===null||V.tag!==7?(V=ka(Q,Z.mode,pt,Gt),V.return=Z,V):(V=c(V,Q),V.return=Z,V)}function gt(Z,V,Q){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=Kc(""+V,Z.mode,Q),V.return=Z,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case x:return Q=jo(V.type,V.key,V.props,null,Z.mode,Q),Zs(Q,V),Q.return=Z,Q;case y:return V=Qc(V,Z.mode,Q),V.return=Z,V;case X:var pt=V._init;return V=pt(V._payload),gt(Z,V,Q)}if(ct(V)||ot(V))return V=ka(V,Z.mode,Q,null),V.return=Z,V;if(typeof V.then=="function")return gt(Z,hl(V),Q);if(V.$$typeof===P)return gt(Z,$o(Z,V),Q);dl(Z,V)}return null}function nt(Z,V,Q,pt){var Gt=V!==null?V.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Gt!==null?null:T(Z,V,""+Q,pt);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case x:return Q.key===Gt?z(Z,V,Q,pt):null;case y:return Q.key===Gt?$(Z,V,Q,pt):null;case X:return Gt=Q._init,Q=Gt(Q._payload),nt(Z,V,Q,pt)}if(ct(Q)||ot(Q))return Gt!==null?null:dt(Z,V,Q,pt,null);if(typeof Q.then=="function")return nt(Z,V,hl(Q),pt);if(Q.$$typeof===P)return nt(Z,V,$o(Z,Q),pt);dl(Z,Q)}return null}function at(Z,V,Q,pt,Gt){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return Z=Z.get(Q)||null,T(V,Z,""+pt,Gt);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case x:return Z=Z.get(pt.key===null?Q:pt.key)||null,z(V,Z,pt,Gt);case y:return Z=Z.get(pt.key===null?Q:pt.key)||null,$(V,Z,pt,Gt);case X:var he=pt._init;return pt=he(pt._payload),at(Z,V,Q,pt,Gt)}if(ct(pt)||ot(pt))return Z=Z.get(Q)||null,dt(V,Z,pt,Gt,null);if(typeof pt.then=="function")return at(Z,V,Q,hl(pt),Gt);if(pt.$$typeof===P)return at(Z,V,Q,$o(V,pt),Gt);dl(V,pt)}return null}function ne(Z,V,Q,pt){for(var Gt=null,he=null,Zt=V,ee=V=0,mn=null;Zt!==null&&ee<Q.length;ee++){Zt.index>ee?(mn=Zt,Zt=null):mn=Zt.sibling;var ye=nt(Z,Zt,Q[ee],pt);if(ye===null){Zt===null&&(Zt=mn);break}t&&Zt&&ye.alternate===null&&n(Z,Zt),V=f(ye,V,ee),he===null?Gt=ye:he.sibling=ye,he=ye,Zt=mn}if(ee===Q.length)return a(Z,Zt),be&&Wa(Z,ee),Gt;if(Zt===null){for(;ee<Q.length;ee++)Zt=gt(Z,Q[ee],pt),Zt!==null&&(V=f(Zt,V,ee),he===null?Gt=Zt:he.sibling=Zt,he=Zt);return be&&Wa(Z,ee),Gt}for(Zt=s(Zt);ee<Q.length;ee++)mn=at(Zt,Z,ee,Q[ee],pt),mn!==null&&(t&&mn.alternate!==null&&Zt.delete(mn.key===null?ee:mn.key),V=f(mn,V,ee),he===null?Gt=mn:he.sibling=mn,he=mn);return t&&Zt.forEach(function(Ra){return n(Z,Ra)}),be&&Wa(Z,ee),Gt}function $t(Z,V,Q,pt){if(Q==null)throw Error(r(151));for(var Gt=null,he=null,Zt=V,ee=V=0,mn=null,ye=Q.next();Zt!==null&&!ye.done;ee++,ye=Q.next()){Zt.index>ee?(mn=Zt,Zt=null):mn=Zt.sibling;var Ra=nt(Z,Zt,ye.value,pt);if(Ra===null){Zt===null&&(Zt=mn);break}t&&Zt&&Ra.alternate===null&&n(Z,Zt),V=f(Ra,V,ee),he===null?Gt=Ra:he.sibling=Ra,he=Ra,Zt=mn}if(ye.done)return a(Z,Zt),be&&Wa(Z,ee),Gt;if(Zt===null){for(;!ye.done;ee++,ye=Q.next())ye=gt(Z,ye.value,pt),ye!==null&&(V=f(ye,V,ee),he===null?Gt=ye:he.sibling=ye,he=ye);return be&&Wa(Z,ee),Gt}for(Zt=s(Zt);!ye.done;ee++,ye=Q.next())ye=at(Zt,Z,ee,ye.value,pt),ye!==null&&(t&&ye.alternate!==null&&Zt.delete(ye.key===null?ee:ye.key),V=f(ye,V,ee),he===null?Gt=ye:he.sibling=ye,he=ye);return t&&Zt.forEach(function(Ix){return n(Z,Ix)}),be&&Wa(Z,ee),Gt}function Oe(Z,V,Q,pt){if(typeof Q=="object"&&Q!==null&&Q.type===b&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case x:t:{for(var Gt=Q.key;V!==null;){if(V.key===Gt){if(Gt=Q.type,Gt===b){if(V.tag===7){a(Z,V.sibling),pt=c(V,Q.props.children),pt.return=Z,Z=pt;break t}}else if(V.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===X&&rm(Gt)===V.type){a(Z,V.sibling),pt=c(V,Q.props),Zs(pt,Q),pt.return=Z,Z=pt;break t}a(Z,V);break}else n(Z,V);V=V.sibling}Q.type===b?(pt=ka(Q.props.children,Z.mode,pt,Q.key),pt.return=Z,Z=pt):(pt=jo(Q.type,Q.key,Q.props,null,Z.mode,pt),Zs(pt,Q),pt.return=Z,Z=pt)}return S(Z);case y:t:{for(Gt=Q.key;V!==null;){if(V.key===Gt)if(V.tag===4&&V.stateNode.containerInfo===Q.containerInfo&&V.stateNode.implementation===Q.implementation){a(Z,V.sibling),pt=c(V,Q.children||[]),pt.return=Z,Z=pt;break t}else{a(Z,V);break}else n(Z,V);V=V.sibling}pt=Qc(Q,Z.mode,pt),pt.return=Z,Z=pt}return S(Z);case X:return Gt=Q._init,Q=Gt(Q._payload),Oe(Z,V,Q,pt)}if(ct(Q))return ne(Z,V,Q,pt);if(ot(Q)){if(Gt=ot(Q),typeof Gt!="function")throw Error(r(150));return Q=Gt.call(Q),$t(Z,V,Q,pt)}if(typeof Q.then=="function")return Oe(Z,V,hl(Q),pt);if(Q.$$typeof===P)return Oe(Z,V,$o(Z,Q),pt);dl(Z,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,V!==null&&V.tag===6?(a(Z,V.sibling),pt=c(V,Q),pt.return=Z,Z=pt):(a(Z,V),pt=Kc(Q,Z.mode,pt),pt.return=Z,Z=pt),S(Z)):a(Z,V)}return function(Z,V,Q,pt){try{Ys=0;var Gt=Oe(Z,V,Q,pt);return zr=null,Gt}catch(Zt){if(Zt===Is||Zt===el)throw Zt;var he=Gn(29,Zt,null,Z.mode);return he.lanes=pt,he.return=Z,he}finally{}}}var Br=sm(!0),om=sm(!1),ti=K(null),Mi=null;function ha(t){var n=t.alternate;St(cn,cn.current&1),St(ti,t),Mi===null&&(n===null||Lr.current!==null||n.memoizedState!==null)&&(Mi=t)}function lm(t){if(t.tag===22){if(St(cn,cn.current),St(ti,t),Mi===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(Mi=t)}}else da()}function da(){St(cn,cn.current),St(ti,ti.current)}function Hi(t){mt(ti),Mi===t&&(Mi=null),mt(cn)}var cn=K(0);function pl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Sf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Du(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Uu={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=Wn(),c=ca(s);c.payload=n,a!=null&&(c.callback=a),n=ua(t,c,s),n!==null&&(qn(n,t,s),Hs(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=Wn(),c=ca(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=ua(t,c,s),n!==null&&(qn(n,t,s),Hs(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Wn(),s=ca(a);s.tag=2,n!=null&&(s.callback=n),n=ua(t,s,a),n!==null&&(qn(n,t,a),Hs(n,t,a))}};function cm(t,n,a,s,c,f,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,S):n.prototype&&n.prototype.isPureReactComponent?!Ds(a,s)||!Ds(c,f):!0}function um(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&Uu.enqueueReplaceState(n,n.state,null)}function Ja(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}var ml=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function fm(t){ml(t)}function hm(t){console.error(t)}function dm(t){ml(t)}function gl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function pm(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Lu(t,n,a){return a=ca(a),a.tag=3,a.payload={element:null},a.callback=function(){gl(t,n)},a}function mm(t){return t=ca(t),t.tag=3,t}function gm(t,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;t.payload=function(){return c(f)},t.callback=function(){pm(n,a,s)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){pm(n,a,s),typeof c!="function"&&(xa===null?xa=new Set([this]):xa.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})})}function Iv(t,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Ps(n,a,c,!0),a=ti.current,a!==null){switch(a.tag){case 13:return Mi===null?nf():a.alternate===null&&Je===0&&(Je=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===ou?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),rf(t,s,c)),!1;case 22:return a.flags|=65536,s===ou?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),rf(t,s,c)),!1}throw Error(r(435,a.tag))}return rf(t,s,c),nf(),!1}if(be)return n=ti.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==tu&&(t=Error(r(422),{cause:s}),Os(Kn(t,a)))):(s!==tu&&(n=Error(r(423),{cause:s}),Os(Kn(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=Kn(s,a),c=Lu(t.stateNode,s,c),uu(t,c),Je!==4&&(Je=2)),!1;var f=Error(r(520),{cause:s});if(f=Kn(f,a),eo===null?eo=[f]:eo.push(f),Je!==4&&(Je=2),n===null)return!0;s=Kn(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Lu(a.stateNode,s,t),uu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(xa===null||!xa.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=mm(c),gm(c,t,a,s),uu(a,c),!1}a=a.return}while(a!==null);return!1}var _m=Error(r(461)),dn=!1;function vn(t,n,a,s){n.child=t===null?om(n,null,a,s):Br(n,t.child,a,s)}function vm(t,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var S={};for(var T in s)T!=="ref"&&(S[T]=s[T])}else S=s;return ja(n),s=mu(t,n,a,S,f,c),T=gu(),t!==null&&!dn?(_u(t,n,c),Gi(t,n,c)):(be&&T&&Jc(n),n.flags|=1,vn(t,n,s,c),n.child)}function xm(t,n,a,s,c){if(t===null){var f=a.type;return typeof f=="function"&&!jc(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Sm(t,n,f,s,c)):(t=jo(a.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Hu(t,c)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:Ds,a(S,s)&&t.ref===n.ref)return Gi(t,n,c)}return n.flags|=1,t=Oi(f,s),t.ref=n.ref,t.return=n,n.child=t}function Sm(t,n,a,s,c){if(t!==null){var f=t.memoizedProps;if(Ds(f,s)&&t.ref===n.ref)if(dn=!1,n.pendingProps=s=f,Hu(t,c))(t.flags&131072)!==0&&(dn=!0);else return n.lanes=t.lanes,Gi(t,n,c)}return Nu(t,n,a,s,c)}function Mm(t,n,a){var s=n.pendingProps,c=s.children,f=t!==null?t.memoizedState:null;if(s.mode==="hidden"){if((n.flags&128)!==0){if(s=f!==null?f.baseLanes|a:a,t!==null){for(c=n.child=t.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~s}else n.childLanes=0,n.child=null;return ym(t,n,s,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&tl(n,f!==null?f.cachePool:null),f!==null?Sp(n,f):hu(),lm(n);else return n.lanes=n.childLanes=536870912,ym(t,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(tl(n,f.cachePool),Sp(n,f),da(),n.memoizedState=null):(t!==null&&tl(n,null),hu(),da());return vn(t,n,c,a),n.child}function ym(t,n,a,s){var c=su();return c=c===null?null:{parent:ln._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&tl(n,null),hu(),lm(n),t!==null&&Ps(t,n,s,!0),null}function _l(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Nu(t,n,a,s,c){return ja(n),a=mu(t,n,a,s,void 0,c),s=gu(),t!==null&&!dn?(_u(t,n,c),Gi(t,n,c)):(be&&s&&Jc(n),n.flags|=1,vn(t,n,a,c),n.child)}function Em(t,n,a,s,c,f){return ja(n),n.updateQueue=null,a=yp(n,s,a,c),Mp(t),s=gu(),t!==null&&!dn?(_u(t,n,f),Gi(t,n,f)):(be&&s&&Jc(n),n.flags|=1,vn(t,n,a,f),n.child)}function Tm(t,n,a,s,c){if(ja(n),n.stateNode===null){var f=Rr,S=a.contextType;typeof S=="object"&&S!==null&&(f=En(S)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Uu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},lu(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?En(S):Rr,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Du(n,a,S,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&Uu.enqueueReplaceState(f,f.state,null),Vs(n,s,f,c),Gs(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var T=n.memoizedProps,z=Ja(a,T);f.props=z;var $=f.context,dt=a.contextType;S=Rr,typeof dt=="object"&&dt!==null&&(S=En(dt));var gt=a.getDerivedStateFromProps;dt=typeof gt=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,dt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||$!==S)&&um(n,f,s,S),la=!1;var nt=n.memoizedState;f.state=nt,Vs(n,s,f,c),Gs(),$=n.memoizedState,T||nt!==$||la?(typeof gt=="function"&&(Du(n,a,gt,s),$=n.memoizedState),(z=la||cm(n,a,z,s,nt,$,S))?(dt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=$),f.props=s,f.state=$,f.context=S,s=z):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,cu(t,n),S=n.memoizedProps,dt=Ja(a,S),f.props=dt,gt=n.pendingProps,nt=f.context,$=a.contextType,z=Rr,typeof $=="object"&&$!==null&&(z=En($)),T=a.getDerivedStateFromProps,($=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==gt||nt!==z)&&um(n,f,s,z),la=!1,nt=n.memoizedState,f.state=nt,Vs(n,s,f,c),Gs();var at=n.memoizedState;S!==gt||nt!==at||la||t!==null&&t.dependencies!==null&&Jo(t.dependencies)?(typeof T=="function"&&(Du(n,a,T,s),at=n.memoizedState),(dt=la||cm(n,a,dt,s,nt,at,z)||t!==null&&t.dependencies!==null&&Jo(t.dependencies))?($||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,at,z),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,at,z)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===t.memoizedProps&&nt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&nt===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=at),f.props=s,f.state=at,f.context=z,s=dt):(typeof f.componentDidUpdate!="function"||S===t.memoizedProps&&nt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&nt===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,_l(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=Br(n,t.child,null,c),n.child=Br(n,null,a,c)):vn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Gi(t,n,c),t}function bm(t,n,a,s){return Ns(),n.flags|=256,vn(t,n,a,s),n.child}var Ou={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Pu(t){return{baseLanes:t,cachePool:hp()}}function zu(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ei),t}function Am(t,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=t!==null&&t.memoizedState===null?!1:(cn.current&2)!==0),S&&(c=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,t===null){if(be){if(c?ha(n):da(),be){var T=Qe,z;if(z=T){t:{for(z=T,T=Si;z.nodeType!==8;){if(!T){T=null;break t}if(z=fi(z.nextSibling),z===null){T=null;break t}}T=z}T!==null?(n.memoizedState={dehydrated:T,treeContext:Xa!==null?{id:Pi,overflow:zi}:null,retryLane:536870912,hydrationErrors:null},z=Gn(18,null,null,0),z.stateNode=T,z.return=n,n.child=z,wn=n,Qe=null,z=!0):z=!1}z||Ya(n)}if(T=n.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return Sf(T)?n.lanes=32:n.lanes=536870912,null;Hi(n)}return T=s.children,s=s.fallback,c?(da(),c=n.mode,T=vl({mode:"hidden",children:T},c),s=ka(s,c,a,null),T.return=n,s.return=n,T.sibling=s,n.child=T,c=n.child,c.memoizedState=Pu(a),c.childLanes=zu(t,S,a),n.memoizedState=Ou,s):(ha(n),Bu(n,T))}if(z=t.memoizedState,z!==null&&(T=z.dehydrated,T!==null)){if(f)n.flags&256?(ha(n),n.flags&=-257,n=Iu(t,n,a)):n.memoizedState!==null?(da(),n.child=t.child,n.flags|=128,n=null):(da(),c=s.fallback,T=n.mode,s=vl({mode:"visible",children:s.children},T),c=ka(c,T,a,null),c.flags|=2,s.return=n,c.return=n,s.sibling=c,n.child=s,Br(n,t.child,null,a),s=n.child,s.memoizedState=Pu(a),s.childLanes=zu(t,S,a),n.memoizedState=Ou,n=c);else if(ha(n),Sf(T)){if(S=T.nextSibling&&T.nextSibling.dataset,S)var $=S.dgst;S=$,s=Error(r(419)),s.stack="",s.digest=S,Os({value:s,source:null,stack:null}),n=Iu(t,n,a)}else if(dn||Ps(t,n,a,!1),S=(a&t.childLanes)!==0,dn||S){if(S=Ge,S!==null&&(s=a&-a,s=(s&42)!==0?1:ie(s),s=(s&(S.suspendedLanes|a))!==0?0:s,s!==0&&s!==z.retryLane))throw z.retryLane=s,Ar(t,s),qn(S,t,s),_m;T.data==="$?"||nf(),n=Iu(t,n,a)}else T.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=z.treeContext,Qe=fi(T.nextSibling),wn=n,be=!0,qa=null,Si=!1,t!==null&&(Jn[$n++]=Pi,Jn[$n++]=zi,Jn[$n++]=Xa,Pi=t.id,zi=t.overflow,Xa=n),n=Bu(n,s.children),n.flags|=4096);return n}return c?(da(),c=s.fallback,T=n.mode,z=t.child,$=z.sibling,s=Oi(z,{mode:"hidden",children:s.children}),s.subtreeFlags=z.subtreeFlags&65011712,$!==null?c=Oi($,c):(c=ka(c,T,a,null),c.flags|=2),c.return=n,s.return=n,s.sibling=c,n.child=s,s=c,c=n.child,T=t.child.memoizedState,T===null?T=Pu(a):(z=T.cachePool,z!==null?($=ln._currentValue,z=z.parent!==$?{parent:$,pool:$}:z):z=hp(),T={baseLanes:T.baseLanes|a,cachePool:z}),c.memoizedState=T,c.childLanes=zu(t,S,a),n.memoizedState=Ou,s):(ha(n),a=t.child,t=a.sibling,a=Oi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(S=n.deletions,S===null?(n.deletions=[t],n.flags|=16):S.push(t)),n.child=a,n.memoizedState=null,a)}function Bu(t,n){return n=vl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function vl(t,n){return t=Gn(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Iu(t,n,a){return Br(n,t.child,null,a),t=Bu(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Rm(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),nu(t.return,n,a)}function Fu(t,n,a,s,c){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=s,f.tail=a,f.tailMode=c)}function Cm(t,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;if(vn(t,n,s.children,a),s=cn.current,(s&2)!==0)s=s&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Rm(t,a,n);else if(t.tag===19)Rm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}s&=1}switch(St(cn,s),c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&pl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Fu(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&pl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}Fu(n,!0,a,null,f);break;case"together":Fu(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Gi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),va|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Ps(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Oi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Oi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Hu(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Jo(t)))}function Fv(t,n,a){switch(n.tag){case 3:wt(n,n.stateNode.containerInfo),oa(n,ln,t.memoizedState.cache),Ns();break;case 27:case 5:Vt(n);break;case 4:wt(n,n.stateNode.containerInfo);break;case 10:oa(n,n.type,n.memoizedProps.value);break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(ha(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Am(t,n,a):(ha(n),t=Gi(t,n,a),t!==null?t.sibling:null);ha(n);break;case 19:var c=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Ps(t,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return Cm(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),St(cn,cn.current),s)break;return null;case 22:case 23:return n.lanes=0,Mm(t,n,a);case 24:oa(n,ln,t.memoizedState.cache)}return Gi(t,n,a)}function wm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)dn=!0;else{if(!Hu(t,a)&&(n.flags&128)===0)return dn=!1,Fv(t,n,a);dn=(t.flags&131072)!==0}else dn=!1,be&&(n.flags&1048576)!==0&&rp(n,Qo,n.index);switch(n.lanes=0,n.tag){case 16:t:{t=n.pendingProps;var s=n.elementType,c=s._init;if(s=c(s._payload),n.type=s,typeof s=="function")jc(s)?(t=Ja(s,t),n.tag=1,n=Tm(null,n,s,t,a)):(n.tag=0,n=Nu(null,n,s,t,a));else{if(s!=null){if(c=s.$$typeof,c===U){n.tag=11,n=vm(null,n,s,t,a);break t}else if(c===I){n.tag=14,n=xm(null,n,s,t,a);break t}}throw n=lt(s)||s,Error(r(306,n,""))}}return n;case 0:return Nu(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=Ja(s,n.pendingProps),Tm(t,n,s,c,a);case 3:t:{if(wt(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,cu(t,n),Vs(n,s,null,a);var S=n.memoizedState;if(s=S.cache,oa(n,ln,s),s!==f.cache&&iu(n,[ln],a,!0),Gs(),s=S.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=bm(t,n,s,a);break t}else if(s!==c){c=Kn(Error(r(424)),n),Os(c),n=bm(t,n,s,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Qe=fi(t.firstChild),wn=n,be=!0,qa=null,Si=!0,a=om(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ns(),s===c){n=Gi(t,n,a);break t}vn(t,n,s,a)}n=n.child}return n;case 26:return _l(t,n),t===null?(a=Ng(n.type,null,n.pendingProps,null))?n.memoizedState=a:be||(a=n.type,t=n.pendingProps,s=Ll(ft.current).createElement(a),s[on]=n,s[je]=t,Sn(s,a,t),en(s),n.stateNode=s):n.memoizedState=Ng(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Vt(n),t===null&&be&&(s=n.stateNode=Dg(n.type,n.pendingProps,ft.current),wn=n,Si=!0,c=Qe,ya(n.type)?(Mf=c,Qe=fi(s.firstChild)):Qe=c),vn(t,n,n.pendingProps.children,a),_l(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&be&&((c=s=Qe)&&(s=dx(s,n.type,n.pendingProps,Si),s!==null?(n.stateNode=s,wn=n,Qe=fi(s.firstChild),Si=!1,c=!0):c=!1),c||Ya(n)),Vt(n),c=n.type,f=n.pendingProps,S=t!==null?t.memoizedProps:null,s=f.children,_f(c,f)?s=null:S!==null&&_f(c,S)&&(n.flags|=32),n.memoizedState!==null&&(c=mu(t,n,Uv,null,null,a),uo._currentValue=c),_l(t,n),vn(t,n,s,a),n.child;case 6:return t===null&&be&&((t=a=Qe)&&(a=px(a,n.pendingProps,Si),a!==null?(n.stateNode=a,wn=n,Qe=null,t=!0):t=!1),t||Ya(n)),null;case 13:return Am(t,n,a);case 4:return wt(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Br(n,null,s,a):vn(t,n,s,a),n.child;case 11:return vm(t,n,n.type,n.pendingProps,a);case 7:return vn(t,n,n.pendingProps,a),n.child;case 8:return vn(t,n,n.pendingProps.children,a),n.child;case 12:return vn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,oa(n,n.type,s.value),vn(t,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,ja(n),c=En(c),s=s(c),n.flags|=1,vn(t,n,s,a),n.child;case 14:return xm(t,n,n.type,n.pendingProps,a);case 15:return Sm(t,n,n.type,n.pendingProps,a);case 19:return Cm(t,n,a);case 31:return s=n.pendingProps,a=n.mode,s={mode:s.mode,children:s.children},t===null?(a=vl(s,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Oi(t.child,s),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return Mm(t,n,a);case 24:return ja(n),s=En(ln),t===null?(c=su(),c===null&&(c=Ge,f=au(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},lu(n),oa(n,ln,c)):((t.lanes&a)!==0&&(cu(t,n),Vs(n,null,null,a),Gs()),c=t.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),oa(n,ln,s)):(s=f.cache,oa(n,ln,s),s!==c.cache&&iu(n,[ln],a,!0))),vn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Vi(t){t.flags|=4}function Dm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Ig(n)){if(n=ti.current,n!==null&&((ve&4194048)===ve?Mi!==null:(ve&62914560)!==ve&&(ve&536870912)===0||n!==Mi))throw Fs=ou,dp;t.flags|=8192}}function xl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?bt():536870912,t.lanes|=n,Gr|=n)}function js(t,n){if(!be)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function Ze(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function Hv(t,n,a){var s=n.pendingProps;switch($c(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(n),null;case 1:return Ze(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Ii(ln),Ht(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Ls(n)?Vi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,lp())),Ze(n),null;case 26:return a=n.memoizedState,t===null?(Vi(n),a!==null?(Ze(n),Dm(n,a)):(Ze(n),n.flags&=-16777217)):a?a!==t.memoizedState?(Vi(n),Ze(n),Dm(n,a)):(Ze(n),n.flags&=-16777217):(t.memoizedProps!==s&&Vi(n),Ze(n),n.flags&=-16777217),null;case 27:Fe(n),a=ft.current;var c=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Vi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ze(n),null}t=At.current,Ls(n)?sp(n):(t=Dg(c,s,a),n.stateNode=t,Vi(n))}return Ze(n),null;case 5:if(Fe(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Vi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ze(n),null}if(t=At.current,Ls(n))sp(n);else{switch(c=Ll(ft.current),t){case 1:t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=c.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof s.is=="string"?c.createElement("select",{is:s.is}):c.createElement("select"),s.multiple?t.multiple=!0:s.size&&(t.size=s.size);break;default:t=typeof s.is=="string"?c.createElement(a,{is:s.is}):c.createElement(a)}}t[on]=n,t[je]=s;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)t.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=t;t:switch(Sn(t,a,s),a){case"button":case"input":case"select":case"textarea":t=!!s.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&Vi(n)}}return Ze(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Vi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=ft.current,Ls(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,c=wn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[on]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Eg(t.nodeValue,a)),t||Ya(n)}else t=Ll(t).createTextNode(s),t[on]=n,n.stateNode=t}return Ze(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Ls(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[on]=n}else Ns(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),c=!1}else c=lp(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Hi(n),n):(Hi(n),null)}if(Hi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=s!==null,t=t!==null&&t.memoizedState!==null,a){s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool);var f=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),xl(n,n.updateQueue),Ze(n),null;case 4:return Ht(),t===null&&hf(n.stateNode.containerInfo),Ze(n),null;case 10:return Ii(n.type),Ze(n),null;case 19:if(mt(cn),c=n.memoizedState,c===null)return Ze(n),null;if(s=(n.flags&128)!==0,f=c.rendering,f===null)if(s)js(c,!1);else{if(Je!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=pl(t),f!==null){for(n.flags|=128,js(c,!1),t=f.updateQueue,n.updateQueue=t,xl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)ap(a,t),a=a.sibling;return St(cn,cn.current&1|2),n.child}t=t.sibling}c.tail!==null&&It()>yl&&(n.flags|=128,s=!0,js(c,!1),n.lanes=4194304)}else{if(!s)if(t=pl(f),t!==null){if(n.flags|=128,s=!0,t=t.updateQueue,n.updateQueue=t,xl(n,t),js(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!be)return Ze(n),null}else 2*It()-c.renderingStartTime>yl&&a!==536870912&&(n.flags|=128,s=!0,js(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(t=c.last,t!==null?t.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=It(),n.sibling=null,t=cn.current,St(cn,s?t&1|2:t&1),n):(Ze(n),null);case 22:case 23:return Hi(n),du(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Ze(n),n.subtreeFlags&6&&(n.flags|=8192)):Ze(n),a=n.updateQueue,a!==null&&xl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&mt(Ka),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ii(ln),Ze(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Gv(t,n){switch($c(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ii(ln),Ht(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Fe(n),null;case 13:if(Hi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Ns()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return mt(cn),null;case 4:return Ht(),null;case 10:return Ii(n.type),null;case 22:case 23:return Hi(n),du(),t!==null&&mt(Ka),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ii(ln),null;case 25:return null;default:return null}}function Um(t,n){switch($c(n),n.tag){case 3:Ii(ln),Ht();break;case 26:case 27:case 5:Fe(n);break;case 4:Ht();break;case 13:Hi(n);break;case 19:mt(cn);break;case 10:Ii(n.type);break;case 22:case 23:Hi(n),du(),t!==null&&mt(Ka);break;case 24:Ii(ln)}}function Ks(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&t)===t){s=void 0;var f=a.create,S=a.inst;s=f(),S.destroy=s}a=a.next}while(a!==c)}}catch(T){Ie(n,n.return,T)}}function pa(t,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&t)===t){var S=s.inst,T=S.destroy;if(T!==void 0){S.destroy=void 0,c=n;var z=a,$=T;try{$()}catch(dt){Ie(c,z,dt)}}}s=s.next}while(s!==f)}}catch(dt){Ie(n,n.return,dt)}}function Lm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{xp(n,a)}catch(s){Ie(t,t.return,s)}}}function Nm(t,n,a){a.props=Ja(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Ie(t,n,s)}}function Qs(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(c){Ie(t,n,c)}}function yi(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Ie(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ie(t,n,c)}else a.current=null}function Om(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Ie(t,t.return,c)}}function Gu(t,n,a){try{var s=t.stateNode;lx(s,t.type,a,n),s[je]=n}catch(c){Ie(t,t.return,c)}}function Pm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ya(t.type)||t.tag===4}function Vu(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Pm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ya(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ku(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ul));else if(s!==4&&(s===27&&ya(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(ku(t,n,a),t=t.sibling;t!==null;)ku(t,n,a),t=t.sibling}function Sl(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&ya(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Sl(t,n,a),t=t.sibling;t!==null;)Sl(t,n,a),t=t.sibling}function zm(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Sn(n,s,a),n[on]=t,n[je]=a}catch(f){Ie(t,t.return,f)}}var ki=!1,tn=!1,Xu=!1,Bm=typeof WeakSet=="function"?WeakSet:Set,pn=null;function Vv(t,n){if(t=t.containerInfo,mf=Il,t=Zd(t),Vc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var S=0,T=-1,z=-1,$=0,dt=0,gt=t,nt=null;e:for(;;){for(var at;gt!==a||c!==0&&gt.nodeType!==3||(T=S+c),gt!==f||s!==0&&gt.nodeType!==3||(z=S+s),gt.nodeType===3&&(S+=gt.nodeValue.length),(at=gt.firstChild)!==null;)nt=gt,gt=at;for(;;){if(gt===t)break e;if(nt===a&&++$===c&&(T=S),nt===f&&++dt===s&&(z=S),(at=gt.nextSibling)!==null)break;gt=nt,nt=gt.parentNode}gt=at}a=T===-1||z===-1?null:{start:T,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(gf={focusedElem:t,selectionRange:a},Il=!1,pn=n;pn!==null;)if(n=pn,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,pn=t;else for(;pn!==null;){switch(n=pn,f=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var ne=Ja(a.type,c,a.elementType===a.type);t=s.getSnapshotBeforeUpdate(ne,f),s.__reactInternalSnapshotBeforeUpdate=t}catch($t){Ie(a,a.return,$t)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)xf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":xf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,pn=t;break}pn=n.return}}function Im(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ma(t,a),s&4&&Ks(5,a);break;case 1:if(ma(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(S){Ie(a,a.return,S)}else{var c=Ja(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(S){Ie(a,a.return,S)}}s&64&&Lm(a),s&512&&Qs(a,a.return);break;case 3:if(ma(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{xp(t,n)}catch(S){Ie(a,a.return,S)}}break;case 27:n===null&&s&4&&zm(a);case 26:case 5:ma(t,a),n===null&&s&4&&Om(a),s&512&&Qs(a,a.return);break;case 12:ma(t,a);break;case 13:ma(t,a),s&4&&Gm(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Qv.bind(null,a),mx(t,a))));break;case 22:if(s=a.memoizedState!==null||ki,!s){n=n!==null&&n.memoizedState!==null||tn,c=ki;var f=tn;ki=s,(tn=n)&&!f?ga(t,a,(a.subtreeFlags&8772)!==0):ma(t,a),ki=c,tn=f}break;case 30:break;default:ma(t,a)}}function Fm(t){var n=t.alternate;n!==null&&(t.alternate=null,Fm(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&vr(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Xe=null,Pn=!1;function Xi(t,n,a){for(a=a.child;a!==null;)Hm(t,n,a),a=a.sibling}function Hm(t,n,a){if(xt&&typeof xt.onCommitFiberUnmount=="function")try{xt.onCommitFiberUnmount(ht,a)}catch{}switch(a.tag){case 26:tn||yi(a,n),Xi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:tn||yi(a,n);var s=Xe,c=Pn;ya(a.type)&&(Xe=a.stateNode,Pn=!1),Xi(t,n,a),so(a.stateNode),Xe=s,Pn=c;break;case 5:tn||yi(a,n);case 6:if(s=Xe,c=Pn,Xe=null,Xi(t,n,a),Xe=s,Pn=c,Xe!==null)if(Pn)try{(Xe.nodeType===9?Xe.body:Xe.nodeName==="HTML"?Xe.ownerDocument.body:Xe).removeChild(a.stateNode)}catch(f){Ie(a,n,f)}else try{Xe.removeChild(a.stateNode)}catch(f){Ie(a,n,f)}break;case 18:Xe!==null&&(Pn?(t=Xe,Cg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),mo(t)):Cg(Xe,a.stateNode));break;case 4:s=Xe,c=Pn,Xe=a.stateNode.containerInfo,Pn=!0,Xi(t,n,a),Xe=s,Pn=c;break;case 0:case 11:case 14:case 15:tn||pa(2,a,n),tn||pa(4,a,n),Xi(t,n,a);break;case 1:tn||(yi(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Nm(a,n,s)),Xi(t,n,a);break;case 21:Xi(t,n,a);break;case 22:tn=(s=tn)||a.memoizedState!==null,Xi(t,n,a),tn=s;break;default:Xi(t,n,a)}}function Gm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{mo(t)}catch(a){Ie(n,n.return,a)}}function kv(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Bm),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Bm),n;default:throw Error(r(435,t.tag))}}function Wu(t,n){var a=kv(t);n.forEach(function(s){var c=Jv.bind(null,t,s);a.has(s)||(a.add(s),s.then(c,c))})}function Vn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=t,S=n,T=S;t:for(;T!==null;){switch(T.tag){case 27:if(ya(T.type)){Xe=T.stateNode,Pn=!1;break t}break;case 5:Xe=T.stateNode,Pn=!1;break t;case 3:case 4:Xe=T.stateNode.containerInfo,Pn=!0;break t}T=T.return}if(Xe===null)throw Error(r(160));Hm(f,S,c),Xe=null,Pn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Vm(n,t),n=n.sibling}var ui=null;function Vm(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Vn(n,t),kn(t),s&4&&(pa(3,t,t.return),Ks(3,t),pa(5,t,t.return));break;case 1:Vn(n,t),kn(t),s&512&&(tn||a===null||yi(a,a.return)),s&64&&ki&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=ui;if(Vn(n,t),kn(t),s&512&&(tn||a===null||yi(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[xi]||f[on]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),Sn(f,s,a),f[on]=t,en(f),s=f;break t;case"link":var S=zg("link","href",c).get(s+(a.href||""));if(S){for(var T=0;T<S.length;T++)if(f=S[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(T,1);break e}}f=c.createElement(s),Sn(f,s,a),c.head.appendChild(f);break;case"meta":if(S=zg("meta","content",c).get(s+(a.content||""))){for(T=0;T<S.length;T++)if(f=S[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(T,1);break e}}f=c.createElement(s),Sn(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[on]=t,en(f),s=f}t.stateNode=s}else Bg(c,t.type,t.stateNode);else t.stateNode=Pg(c,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?Bg(c,t.type,t.stateNode):Pg(c,s,t.memoizedProps)):s===null&&t.stateNode!==null&&Gu(t,t.memoizedProps,a.memoizedProps)}break;case 27:Vn(n,t),kn(t),s&512&&(tn||a===null||yi(a,a.return)),a!==null&&s&4&&Gu(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Vn(n,t),kn(t),s&512&&(tn||a===null||yi(a,a.return)),t.flags&32){c=t.stateNode;try{Ln(c,"")}catch(at){Ie(t,t.return,at)}}s&4&&t.stateNode!=null&&(c=t.memoizedProps,Gu(t,c,a!==null?a.memoizedProps:c)),s&1024&&(Xu=!0);break;case 6:if(Vn(n,t),kn(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(at){Ie(t,t.return,at)}}break;case 3:if(Pl=null,c=ui,ui=Nl(n.containerInfo),Vn(n,t),ui=c,kn(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{mo(n.containerInfo)}catch(at){Ie(t,t.return,at)}Xu&&(Xu=!1,km(t));break;case 4:s=ui,ui=Nl(t.stateNode.containerInfo),Vn(n,t),kn(t),ui=s;break;case 12:Vn(n,t),kn(t);break;case 13:Vn(n,t),kn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Qu=It()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Wu(t,s)));break;case 22:c=t.memoizedState!==null;var z=a!==null&&a.memoizedState!==null,$=ki,dt=tn;if(ki=$||c,tn=dt||z,Vn(n,t),tn=dt,ki=$,kn(t),s&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||z||ki||tn||$a(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){z=a=n;try{if(f=z.stateNode,c)S=f.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{T=z.stateNode;var gt=z.memoizedProps.style,nt=gt!=null&&gt.hasOwnProperty("display")?gt.display:null;T.style.display=nt==null||typeof nt=="boolean"?"":(""+nt).trim()}}catch(at){Ie(z,z.return,at)}}}else if(n.tag===6){if(a===null){z=n;try{z.stateNode.nodeValue=c?"":z.memoizedProps}catch(at){Ie(z,z.return,at)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Wu(t,a))));break;case 19:Vn(n,t),kn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Wu(t,s)));break;case 30:break;case 21:break;default:Vn(n,t),kn(t)}}function kn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(Pm(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=Vu(t);Sl(t,f,c);break;case 5:var S=a.stateNode;a.flags&32&&(Ln(S,""),a.flags&=-33);var T=Vu(t);Sl(t,T,S);break;case 3:case 4:var z=a.stateNode.containerInfo,$=Vu(t);ku(t,$,z);break;default:throw Error(r(161))}}catch(dt){Ie(t,t.return,dt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function km(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;km(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ma(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Im(t,n.alternate,n),n=n.sibling}function $a(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:pa(4,n,n.return),$a(n);break;case 1:yi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Nm(n,n.return,a),$a(n);break;case 27:so(n.stateNode);case 26:case 5:yi(n,n.return),$a(n);break;case 22:n.memoizedState===null&&$a(n);break;case 30:$a(n);break;default:$a(n)}t=t.sibling}}function ga(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=t,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:ga(c,f,a),Ks(4,f);break;case 1:if(ga(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch($){Ie(s,s.return,$)}if(s=f,c=s.updateQueue,c!==null){var T=s.stateNode;try{var z=c.shared.hiddenCallbacks;if(z!==null)for(c.shared.hiddenCallbacks=null,c=0;c<z.length;c++)vp(z[c],T)}catch($){Ie(s,s.return,$)}}a&&S&64&&Lm(f),Qs(f,f.return);break;case 27:zm(f);case 26:case 5:ga(c,f,a),a&&s===null&&S&4&&Om(f),Qs(f,f.return);break;case 12:ga(c,f,a);break;case 13:ga(c,f,a),a&&S&4&&Gm(c,f);break;case 22:f.memoizedState===null&&ga(c,f,a),Qs(f,f.return);break;case 30:break;default:ga(c,f,a)}n=n.sibling}}function qu(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&zs(a))}function Yu(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&zs(t))}function Ei(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Xm(t,n,a,s),n=n.sibling}function Xm(t,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Ei(t,n,a,s),c&2048&&Ks(9,n);break;case 1:Ei(t,n,a,s);break;case 3:Ei(t,n,a,s),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&zs(t)));break;case 12:if(c&2048){Ei(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,S=f.id,T=f.onPostCommit;typeof T=="function"&&T(S,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(z){Ie(n,n.return,z)}}else Ei(t,n,a,s);break;case 13:Ei(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,S=n.alternate,n.memoizedState!==null?f._visibility&2?Ei(t,n,a,s):Js(t,n):f._visibility&2?Ei(t,n,a,s):(f._visibility|=2,Ir(t,n,a,s,(n.subtreeFlags&10256)!==0)),c&2048&&qu(S,n);break;case 24:Ei(t,n,a,s),c&2048&&Yu(n.alternate,n);break;default:Ei(t,n,a,s)}}function Ir(t,n,a,s,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=t,S=n,T=a,z=s,$=S.flags;switch(S.tag){case 0:case 11:case 15:Ir(f,S,T,z,c),Ks(8,S);break;case 23:break;case 22:var dt=S.stateNode;S.memoizedState!==null?dt._visibility&2?Ir(f,S,T,z,c):Js(f,S):(dt._visibility|=2,Ir(f,S,T,z,c)),c&&$&2048&&qu(S.alternate,S);break;case 24:Ir(f,S,T,z,c),c&&$&2048&&Yu(S.alternate,S);break;default:Ir(f,S,T,z,c)}n=n.sibling}}function Js(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,c=s.flags;switch(s.tag){case 22:Js(a,s),c&2048&&qu(s.alternate,s);break;case 24:Js(a,s),c&2048&&Yu(s.alternate,s);break;default:Js(a,s)}n=n.sibling}}var $s=8192;function Fr(t){if(t.subtreeFlags&$s)for(t=t.child;t!==null;)Wm(t),t=t.sibling}function Wm(t){switch(t.tag){case 26:Fr(t),t.flags&$s&&t.memoizedState!==null&&Cx(ui,t.memoizedState,t.memoizedProps);break;case 5:Fr(t);break;case 3:case 4:var n=ui;ui=Nl(t.stateNode.containerInfo),Fr(t),ui=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=$s,$s=16777216,Fr(t),$s=n):Fr(t));break;default:Fr(t)}}function qm(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function to(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];pn=s,Zm(s,t)}qm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ym(t),t=t.sibling}function Ym(t){switch(t.tag){case 0:case 11:case 15:to(t),t.flags&2048&&pa(9,t,t.return);break;case 3:to(t);break;case 12:to(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Ml(t)):to(t);break;default:to(t)}}function Ml(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];pn=s,Zm(s,t)}qm(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:pa(8,n,n.return),Ml(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ml(n));break;default:Ml(n)}t=t.sibling}}function Zm(t,n){for(;pn!==null;){var a=pn;switch(a.tag){case 0:case 11:case 15:pa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:zs(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,pn=s;else t:for(a=t;pn!==null;){s=pn;var c=s.sibling,f=s.return;if(Fm(s),s===a){pn=null;break t}if(c!==null){c.return=f,pn=c;break t}pn=f}}}var Xv={getCacheForType:function(t){var n=En(ln),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},Wv=typeof WeakMap=="function"?WeakMap:Map,we=0,Ge=null,me=null,ve=0,De=0,Xn=null,_a=!1,Hr=!1,Zu=!1,Wi=0,Je=0,va=0,tr=0,ju=0,ei=0,Gr=0,eo=null,zn=null,Ku=!1,Qu=0,yl=1/0,El=null,xa=null,xn=0,Sa=null,Vr=null,kr=0,Ju=0,$u=null,jm=null,no=0,tf=null;function Wn(){if((we&2)!==0&&ve!==0)return ve&-ve;if(N.T!==null){var t=Dr;return t!==0?t:lf()}return Se()}function Km(){ei===0&&(ei=(ve&536870912)===0||be?k():536870912);var t=ti.current;return t!==null&&(t.flags|=32),ei}function qn(t,n,a){(t===Ge&&(De===2||De===9)||t.cancelPendingCommit!==null)&&(Xr(t,0),Ma(t,ve,ei,!1)),zt(t,a),((we&2)===0||t!==Ge)&&(t===Ge&&((we&2)===0&&(tr|=a),Je===4&&Ma(t,ve,ei,!1)),Ti(t))}function Qm(t,n,a){if((we&6)!==0)throw Error(r(327));var s=!a&&(n&124)===0&&(n&t.expiredLanes)===0||Dt(t,n),c=s?Zv(t,n):af(t,n,!0),f=s;do{if(c===0){Hr&&!s&&Ma(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!qv(a)){c=af(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var T=t;c=eo;var z=T.current.memoizedState.isDehydrated;if(z&&(Xr(T,S).flags|=256),S=af(T,S,!1),S!==2){if(Zu&&!z){T.errorRecoveryDisabledLanes|=f,tr|=f,c=4;break t}f=zn,zn=c,f!==null&&(zn===null?zn=f:zn.push.apply(zn,f))}c=S}if(f=!1,c!==2)continue}}if(c===1){Xr(t,0),Ma(t,n,0,!0);break}t:{switch(s=t,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ma(s,n,ei,!_a);break t;case 2:zn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Qu+300-It(),10<c)){if(Ma(s,n,ei,!_a),Xt(s,0,!0)!==0)break t;s.timeoutHandle=Ag(Jm.bind(null,s,a,zn,El,Ku,n,ei,tr,Gr,_a,f,2,-0,0),c);break t}Jm(s,a,zn,El,Ku,n,ei,tr,Gr,_a,f,0,-0,0)}}break}while(!0);Ti(t)}function Jm(t,n,a,s,c,f,S,T,z,$,dt,gt,nt,at){if(t.timeoutHandle=-1,gt=n.subtreeFlags,(gt&8192||(gt&16785408)===16785408)&&(co={stylesheets:null,count:0,unsuspend:Rx},Wm(n),gt=wx(),gt!==null)){t.cancelPendingCommit=gt(rg.bind(null,t,n,f,a,s,c,S,T,z,dt,1,nt,at)),Ma(t,f,S,!$);return}rg(t,n,f,a,s,c,S,T,z)}function qv(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!Hn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ma(t,n,a,s){n&=~ju,n&=~tr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var f=31-Pt(c),S=1<<f;s[f]=-1,c&=~S}a!==0&&_t(t,a,n)}function Tl(){return(we&6)===0?(io(0),!1):!0}function ef(){if(me!==null){if(De===0)var t=me.return;else t=me,Bi=Za=null,vu(t),zr=null,Ys=0,t=me;for(;t!==null;)Um(t.alternate,t),t=t.return;me=null}}function Xr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,ux(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ef(),Ge=t,me=a=Oi(t.current,null),ve=n,De=0,Xn=null,_a=!1,Hr=Dt(t,n),Zu=!1,Gr=ei=ju=tr=va=Je=0,zn=eo=null,Ku=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var c=31-Pt(s),f=1<<c;n|=t[c],s&=~f}return Wi=n,qo(),a}function $m(t,n){fe=null,N.H=fl,n===Is||n===el?(n=gp(),De=3):n===dp?(n=gp(),De=4):De=n===_m?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Xn=n,me===null&&(Je=1,gl(t,Kn(n,t.current)))}function tg(){var t=N.H;return N.H=fl,t===null?fl:t}function eg(){var t=N.A;return N.A=Xv,t}function nf(){Je=4,_a||(ve&4194048)!==ve&&ti.current!==null||(Hr=!0),(va&134217727)===0&&(tr&134217727)===0||Ge===null||Ma(Ge,ve,ei,!1)}function af(t,n,a){var s=we;we|=2;var c=tg(),f=eg();(Ge!==t||ve!==n)&&(El=null,Xr(t,n)),n=!1;var S=Je;t:do try{if(De!==0&&me!==null){var T=me,z=Xn;switch(De){case 8:ef(),S=6;break t;case 3:case 2:case 9:case 6:ti.current===null&&(n=!0);var $=De;if(De=0,Xn=null,Wr(t,T,z,$),a&&Hr){S=0;break t}break;default:$=De,De=0,Xn=null,Wr(t,T,z,$)}}Yv(),S=Je;break}catch(dt){$m(t,dt)}while(!0);return n&&t.shellSuspendCounter++,Bi=Za=null,we=s,N.H=c,N.A=f,me===null&&(Ge=null,ve=0,qo()),S}function Yv(){for(;me!==null;)ng(me)}function Zv(t,n){var a=we;we|=2;var s=tg(),c=eg();Ge!==t||ve!==n?(El=null,yl=It()+500,Xr(t,n)):Hr=Dt(t,n);t:do try{if(De!==0&&me!==null){n=me;var f=Xn;e:switch(De){case 1:De=0,Xn=null,Wr(t,n,f,1);break;case 2:case 9:if(pp(f)){De=0,Xn=null,ig(n);break}n=function(){De!==2&&De!==9||Ge!==t||(De=7),Ti(t)},f.then(n,n);break t;case 3:De=7;break t;case 4:De=5;break t;case 7:pp(f)?(De=0,Xn=null,ig(n)):(De=0,Xn=null,Wr(t,n,f,7));break;case 5:var S=null;switch(me.tag){case 26:S=me.memoizedState;case 5:case 27:var T=me;if(!S||Ig(S)){De=0,Xn=null;var z=T.sibling;if(z!==null)me=z;else{var $=T.return;$!==null?(me=$,bl($)):me=null}break e}}De=0,Xn=null,Wr(t,n,f,5);break;case 6:De=0,Xn=null,Wr(t,n,f,6);break;case 8:ef(),Je=6;break t;default:throw Error(r(462))}}jv();break}catch(dt){$m(t,dt)}while(!0);return Bi=Za=null,N.H=s,N.A=c,we=a,me!==null?0:(Ge=null,ve=0,qo(),Je)}function jv(){for(;me!==null&&!Qt();)ng(me)}function ng(t){var n=wm(t.alternate,t,Wi);t.memoizedProps=t.pendingProps,n===null?bl(t):me=n}function ig(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Em(a,n,n.pendingProps,n.type,void 0,ve);break;case 11:n=Em(a,n,n.pendingProps,n.type.render,n.ref,ve);break;case 5:vu(n);default:Um(a,n),n=me=ap(n,Wi),n=wm(a,n,Wi)}t.memoizedProps=t.pendingProps,n===null?bl(t):me=n}function Wr(t,n,a,s){Bi=Za=null,vu(n),zr=null,Ys=0;var c=n.return;try{if(Iv(t,c,n,a,ve)){Je=1,gl(t,Kn(a,t.current)),me=null;return}}catch(f){if(c!==null)throw me=c,f;Je=1,gl(t,Kn(a,t.current)),me=null;return}n.flags&32768?(be||s===1?t=!0:Hr||(ve&536870912)!==0?t=!1:(_a=t=!0,(s===2||s===9||s===3||s===6)&&(s=ti.current,s!==null&&s.tag===13&&(s.flags|=16384))),ag(n,t)):bl(n)}function bl(t){var n=t;do{if((n.flags&32768)!==0){ag(n,_a);return}t=n.return;var a=Hv(n.alternate,n,Wi);if(a!==null){me=a;return}if(n=n.sibling,n!==null){me=n;return}me=n=t}while(n!==null);Je===0&&(Je=5)}function ag(t,n){do{var a=Gv(t.alternate,t);if(a!==null){a.flags&=32767,me=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){me=t;return}me=t=a}while(t!==null);Je=6,me=null}function rg(t,n,a,s,c,f,S,T,z){t.cancelPendingCommit=null;do Al();while(xn!==0);if((we&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=Yc,Et(t,a,f,S,T,z),t===Ge&&(me=Ge=null,ve=0),Vr=n,Sa=t,kr=a,Ju=f,$u=c,jm=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,$v(qe,function(){return ug(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=N.T,N.T=null,c=q.p,q.p=2,S=we,we|=4;try{Vv(t,n,a)}finally{we=S,q.p=c,N.T=s}}xn=1,sg(),og(),lg()}}function sg(){if(xn===1){xn=0;var t=Sa,n=Vr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=N.T,N.T=null;var s=q.p;q.p=2;var c=we;we|=4;try{Vm(n,t);var f=gf,S=Zd(t.containerInfo),T=f.focusedElem,z=f.selectionRange;if(S!==T&&T&&T.ownerDocument&&Yd(T.ownerDocument.documentElement,T)){if(z!==null&&Vc(T)){var $=z.start,dt=z.end;if(dt===void 0&&(dt=$),"selectionStart"in T)T.selectionStart=$,T.selectionEnd=Math.min(dt,T.value.length);else{var gt=T.ownerDocument||document,nt=gt&&gt.defaultView||window;if(nt.getSelection){var at=nt.getSelection(),ne=T.textContent.length,$t=Math.min(z.start,ne),Oe=z.end===void 0?$t:Math.min(z.end,ne);!at.extend&&$t>Oe&&(S=Oe,Oe=$t,$t=S);var Z=qd(T,$t),V=qd(T,Oe);if(Z&&V&&(at.rangeCount!==1||at.anchorNode!==Z.node||at.anchorOffset!==Z.offset||at.focusNode!==V.node||at.focusOffset!==V.offset)){var Q=gt.createRange();Q.setStart(Z.node,Z.offset),at.removeAllRanges(),$t>Oe?(at.addRange(Q),at.extend(V.node,V.offset)):(Q.setEnd(V.node,V.offset),at.addRange(Q))}}}}for(gt=[],at=T;at=at.parentNode;)at.nodeType===1&&gt.push({element:at,left:at.scrollLeft,top:at.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<gt.length;T++){var pt=gt[T];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}Il=!!mf,gf=mf=null}finally{we=c,q.p=s,N.T=a}}t.current=n,xn=2}}function og(){if(xn===2){xn=0;var t=Sa,n=Vr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=N.T,N.T=null;var s=q.p;q.p=2;var c=we;we|=4;try{Im(t,n.alternate,n)}finally{we=c,q.p=s,N.T=a}}xn=3}}function lg(){if(xn===4||xn===3){xn=0,xe();var t=Sa,n=Vr,a=kr,s=jm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?xn=5:(xn=0,Vr=Sa=null,cg(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(xa=null),Re(a),n=n.stateNode,xt&&typeof xt.onCommitFiberRoot=="function")try{xt.onCommitFiberRoot(ht,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=N.T,c=q.p,q.p=2,N.T=null;try{for(var f=t.onRecoverableError,S=0;S<s.length;S++){var T=s[S];f(T.value,{componentStack:T.stack})}}finally{N.T=n,q.p=c}}(kr&3)!==0&&Al(),Ti(t),c=t.pendingLanes,(a&4194090)!==0&&(c&42)!==0?t===tf?no++:(no=0,tf=t):no=0,io(0)}}function cg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,zs(n)))}function Al(t){return sg(),og(),lg(),ug()}function ug(){if(xn!==5)return!1;var t=Sa,n=Ju;Ju=0;var a=Re(kr),s=N.T,c=q.p;try{q.p=32>a?32:a,N.T=null,a=$u,$u=null;var f=Sa,S=kr;if(xn=0,Vr=Sa=null,kr=0,(we&6)!==0)throw Error(r(331));var T=we;if(we|=4,Ym(f.current),Xm(f,f.current,S,a),we=T,io(0,!1),xt&&typeof xt.onPostCommitFiberRoot=="function")try{xt.onPostCommitFiberRoot(ht,f)}catch{}return!0}finally{q.p=c,N.T=s,cg(t,n)}}function fg(t,n,a){n=Kn(a,n),n=Lu(t.stateNode,n,2),t=ua(t,n,2),t!==null&&(zt(t,2),Ti(t))}function Ie(t,n,a){if(t.tag===3)fg(t,t,a);else for(;n!==null;){if(n.tag===3){fg(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(xa===null||!xa.has(s))){t=Kn(a,t),a=mm(2),s=ua(n,a,2),s!==null&&(gm(a,s,n,t),zt(s,2),Ti(s));break}}n=n.return}}function rf(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new Wv;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(Zu=!0,c.add(a),t=Kv.bind(null,t,n,a),n.then(t,t))}function Kv(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ge===t&&(ve&a)===a&&(Je===4||Je===3&&(ve&62914560)===ve&&300>It()-Qu?(we&2)===0&&Xr(t,0):ju|=a,Gr===ve&&(Gr=0)),Ti(t)}function hg(t,n){n===0&&(n=bt()),t=Ar(t,n),t!==null&&(zt(t,n),Ti(t))}function Qv(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),hg(t,a)}function Jv(t,n){var a=0;switch(t.tag){case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),hg(t,a)}function $v(t,n){return F(t,n)}var Rl=null,qr=null,sf=!1,Cl=!1,of=!1,er=0;function Ti(t){t!==qr&&t.next===null&&(qr===null?Rl=qr=t:qr=qr.next=t),Cl=!0,sf||(sf=!0,ex())}function io(t,n){if(!of&&Cl){of=!0;do for(var a=!1,s=Rl;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var S=s.suspendedLanes,T=s.pingedLanes;f=(1<<31-Pt(42|t)+1)-1,f&=c&~(S&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,gg(s,f))}else f=ve,f=Xt(s,s===Ge?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Dt(s,f)||(a=!0,gg(s,f));s=s.next}while(a);of=!1}}function tx(){dg()}function dg(){Cl=sf=!1;var t=0;er!==0&&(cx()&&(t=er),er=0);for(var n=It(),a=null,s=Rl;s!==null;){var c=s.next,f=pg(s,n);f===0?(s.next=null,a===null?Rl=c:a.next=c,c===null&&(qr=a)):(a=s,(t!==0||(f&3)!==0)&&(Cl=!0)),s=c}io(t)}function pg(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var S=31-Pt(f),T=1<<S,z=c[S];z===-1?((T&a)===0||(T&s)!==0)&&(c[S]=ae(T,n)):z<=n&&(t.expiredLanes|=T),f&=~T}if(n=Ge,a=ve,a=Xt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(De===2||De===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&Ae(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Dt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&Ae(s),Re(a)){case 2:case 8:a=re;break;case 32:a=qe;break;case 268435456:a=L;break;default:a=qe}return s=mg.bind(null,t),a=F(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&Ae(s),t.callbackPriority=2,t.callbackNode=null,2}function mg(t,n){if(xn!==0&&xn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Al()&&t.callbackNode!==a)return null;var s=ve;return s=Xt(t,t===Ge?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(Qm(t,s,n),pg(t,It()),t.callbackNode!=null&&t.callbackNode===a?mg.bind(null,t):null)}function gg(t,n){if(Al())return null;Qm(t,n,!0)}function ex(){fx(function(){(we&6)!==0?F(Ft,tx):dg()})}function lf(){return er===0&&(er=k()),er}function _g(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Fo(""+t)}function vg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function nx(t,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=_g((c[je]||null).action),S=s.submitter;S&&(n=(n=S[je]||null)?_g(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var T=new ko("action","action",null,s,c);t.push({event:T,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(er!==0){var z=S?vg(c,S):new FormData(c);Ru(a,{pending:!0,data:z,method:c.method,action:f},null,z)}}else typeof f=="function"&&(T.preventDefault(),z=S?vg(c,S):new FormData(c),Ru(a,{pending:!0,data:z,method:c.method,action:f},f,z))},currentTarget:c}]})}}for(var cf=0;cf<qc.length;cf++){var uf=qc[cf],ix=uf.toLowerCase(),ax=uf[0].toUpperCase()+uf.slice(1);ci(ix,"on"+ax)}ci(Qd,"onAnimationEnd"),ci(Jd,"onAnimationIteration"),ci($d,"onAnimationStart"),ci("dblclick","onDoubleClick"),ci("focusin","onFocus"),ci("focusout","onBlur"),ci(Mv,"onTransitionRun"),ci(yv,"onTransitionStart"),ci(Ev,"onTransitionCancel"),ci(tp,"onTransitionEnd"),Y("onMouseEnter",["mouseout","mouseover"]),Y("onMouseLeave",["mouseout","mouseover"]),Y("onPointerEnter",["pointerout","pointerover"]),Y("onPointerLeave",["pointerout","pointerover"]),A("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),A("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),A("onBeforeInput",["compositionend","keypress","textInput","paste"]),A("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),A("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),A("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ao));function xg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var S=s.length-1;0<=S;S--){var T=s[S],z=T.instance,$=T.currentTarget;if(T=T.listener,z!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=$;try{f(c)}catch(dt){ml(dt)}c.currentTarget=null,f=z}else for(S=0;S<s.length;S++){if(T=s[S],z=T.instance,$=T.currentTarget,T=T.listener,z!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=$;try{f(c)}catch(dt){ml(dt)}c.currentTarget=null,f=z}}}}function ge(t,n){var a=n[gr];a===void 0&&(a=n[gr]=new Set);var s=t+"__bubble";a.has(s)||(Sg(n,t,2,!1),a.add(s))}function ff(t,n,a){var s=0;n&&(s|=4),Sg(a,t,s,n)}var wl="_reactListening"+Math.random().toString(36).slice(2);function hf(t){if(!t[wl]){t[wl]=!0,Bo.forEach(function(a){a!=="selectionchange"&&(rx.has(a)||ff(a,!1,t),ff(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[wl]||(n[wl]=!0,ff("selectionchange",!1,n))}}function Sg(t,n,a,s){switch(Xg(n)){case 2:var c=Lx;break;case 8:c=Nx;break;default:c=Af}a=c.bind(null,n,a,t),c=void 0,!Nc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function df(t,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var S=s.tag;if(S===3||S===4){var T=s.stateNode.containerInfo;if(T===c)break;if(S===4)for(S=s.return;S!==null;){var z=S.tag;if((z===3||z===4)&&S.stateNode.containerInfo===c)return;S=S.return}for(;T!==null;){if(S=Li(T),S===null)return;if(z=S.tag,z===5||z===6||z===26||z===27){s=f=S;continue t}T=T.parentNode}}s=s.return}Rd(function(){var $=f,dt=Uc(a),gt=[];t:{var nt=ep.get(t);if(nt!==void 0){var at=ko,ne=t;switch(t){case"keypress":if(Go(a)===0)break t;case"keydown":case"keyup":at=$0;break;case"focusin":ne="focus",at=Bc;break;case"focusout":ne="blur",at=Bc;break;case"beforeblur":case"afterblur":at=Bc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":at=Dd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":at=G0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":at=nv;break;case Qd:case Jd:case $d:at=X0;break;case tp:at=av;break;case"scroll":case"scrollend":at=F0;break;case"wheel":at=sv;break;case"copy":case"cut":case"paste":at=q0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":at=Ld;break;case"toggle":case"beforetoggle":at=lv}var $t=(n&4)!==0,Oe=!$t&&(t==="scroll"||t==="scrollend"),Z=$t?nt!==null?nt+"Capture":null:nt;$t=[];for(var V=$,Q;V!==null;){var pt=V;if(Q=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||Q===null||Z===null||(pt=Es(V,Z),pt!=null&&$t.push(ro(V,pt,Q))),Oe)break;V=V.return}0<$t.length&&(nt=new at(nt,ne,null,a,dt),gt.push({event:nt,listeners:$t}))}}if((n&7)===0){t:{if(nt=t==="mouseover"||t==="pointerover",at=t==="mouseout"||t==="pointerout",nt&&a!==Dc&&(ne=a.relatedTarget||a.fromElement)&&(Li(ne)||ne[vi]))break t;if((at||nt)&&(nt=dt.window===dt?dt:(nt=dt.ownerDocument)?nt.defaultView||nt.parentWindow:window,at?(ne=a.relatedTarget||a.toElement,at=$,ne=ne?Li(ne):null,ne!==null&&(Oe=u(ne),$t=ne.tag,ne!==Oe||$t!==5&&$t!==27&&$t!==6)&&(ne=null)):(at=null,ne=$),at!==ne)){if($t=Dd,pt="onMouseLeave",Z="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&($t=Ld,pt="onPointerLeave",Z="onPointerEnter",V="pointer"),Oe=at==null?nt:Fa(at),Q=ne==null?nt:Fa(ne),nt=new $t(pt,V+"leave",at,a,dt),nt.target=Oe,nt.relatedTarget=Q,pt=null,Li(dt)===$&&($t=new $t(Z,V+"enter",ne,a,dt),$t.target=Q,$t.relatedTarget=Oe,pt=$t),Oe=pt,at&&ne)e:{for($t=at,Z=ne,V=0,Q=$t;Q;Q=Yr(Q))V++;for(Q=0,pt=Z;pt;pt=Yr(pt))Q++;for(;0<V-Q;)$t=Yr($t),V--;for(;0<Q-V;)Z=Yr(Z),Q--;for(;V--;){if($t===Z||Z!==null&&$t===Z.alternate)break e;$t=Yr($t),Z=Yr(Z)}$t=null}else $t=null;at!==null&&Mg(gt,nt,at,$t,!1),ne!==null&&Oe!==null&&Mg(gt,Oe,ne,$t,!0)}}t:{if(nt=$?Fa($):window,at=nt.nodeName&&nt.nodeName.toLowerCase(),at==="select"||at==="input"&&nt.type==="file")var Gt=Hd;else if(Id(nt))if(Gd)Gt=vv;else{Gt=gv;var he=mv}else at=nt.nodeName,!at||at.toLowerCase()!=="input"||nt.type!=="checkbox"&&nt.type!=="radio"?$&&wc($.elementType)&&(Gt=Hd):Gt=_v;if(Gt&&(Gt=Gt(t,$))){Fd(gt,Gt,a,dt);break t}he&&he(t,nt,$),t==="focusout"&&$&&nt.type==="number"&&$.memoizedProps.value!=null&&yn(nt,"number",nt.value)}switch(he=$?Fa($):window,t){case"focusin":(Id(he)||he.contentEditable==="true")&&(Er=he,kc=$,Us=null);break;case"focusout":Us=kc=Er=null;break;case"mousedown":Xc=!0;break;case"contextmenu":case"mouseup":case"dragend":Xc=!1,jd(gt,a,dt);break;case"selectionchange":if(Sv)break;case"keydown":case"keyup":jd(gt,a,dt)}var Zt;if(Fc)t:{switch(t){case"compositionstart":var ee="onCompositionStart";break t;case"compositionend":ee="onCompositionEnd";break t;case"compositionupdate":ee="onCompositionUpdate";break t}ee=void 0}else yr?zd(t,a)&&(ee="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ee="onCompositionStart");ee&&(Nd&&a.locale!=="ko"&&(yr||ee!=="onCompositionStart"?ee==="onCompositionEnd"&&yr&&(Zt=Cd()):(sa=dt,Oc="value"in sa?sa.value:sa.textContent,yr=!0)),he=Dl($,ee),0<he.length&&(ee=new Ud(ee,t,null,a,dt),gt.push({event:ee,listeners:he}),Zt?ee.data=Zt:(Zt=Bd(a),Zt!==null&&(ee.data=Zt)))),(Zt=uv?fv(t,a):hv(t,a))&&(ee=Dl($,"onBeforeInput"),0<ee.length&&(he=new Ud("onBeforeInput","beforeinput",null,a,dt),gt.push({event:he,listeners:ee}),he.data=Zt)),nx(gt,t,$,a,dt)}xg(gt,n)})}function ro(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Dl(t,n){for(var a=n+"Capture",s=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Es(t,a),c!=null&&s.unshift(ro(t,c,f)),c=Es(t,n),c!=null&&s.push(ro(t,c,f))),t.tag===3)return s;t=t.return}return[]}function Yr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Mg(t,n,a,s,c){for(var f=n._reactName,S=[];a!==null&&a!==s;){var T=a,z=T.alternate,$=T.stateNode;if(T=T.tag,z!==null&&z===s)break;T!==5&&T!==26&&T!==27||$===null||(z=$,c?($=Es(a,f),$!=null&&S.unshift(ro(a,$,z))):c||($=Es(a,f),$!=null&&S.push(ro(a,$,z)))),a=a.return}S.length!==0&&t.push({event:n,listeners:S})}var sx=/\r\n?/g,ox=/\u0000|\uFFFD/g;function yg(t){return(typeof t=="string"?t:""+t).replace(sx,`
`).replace(ox,"")}function Eg(t,n){return n=yg(n),yg(t)===n}function Ul(){}function Ne(t,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Ln(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Ln(t,""+s);break;case"className":Bt(t,"class",s);break;case"tabIndex":Bt(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Bt(t,a,s);break;case"style":bd(t,s,f);break;case"data":if(n!=="object"){Bt(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Fo(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ne(t,n,"name",c.name,c,null),Ne(t,n,"formEncType",c.formEncType,c,null),Ne(t,n,"formMethod",c.formMethod,c,null),Ne(t,n,"formTarget",c.formTarget,c,null)):(Ne(t,n,"encType",c.encType,c,null),Ne(t,n,"method",c.method,c,null),Ne(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Fo(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Ul);break;case"onScroll":s!=null&&ge("scroll",t);break;case"onScrollEnd":s!=null&&ge("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Fo(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":ge("beforetoggle",t),ge("toggle",t),Ut(t,"popover",s);break;case"xlinkActuate":Nt(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Nt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Nt(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Nt(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Nt(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Nt(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Nt(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Nt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Nt(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Ut(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=B0.get(a)||a,Ut(t,a,s))}}function pf(t,n,a,s,c,f){switch(a){case"style":bd(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?Ln(t,s):(typeof s=="number"||typeof s=="bigint")&&Ln(t,""+s);break;case"onScroll":s!=null&&ge("scroll",t);break;case"onScrollEnd":s!=null&&ge("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Ul);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Io.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[je]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,c);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):Ut(t,a,s)}}}function Sn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",t),ge("load",t);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ne(t,n,f,S,a,null)}}c&&Ne(t,n,"srcSet",a.srcSet,a,null),s&&Ne(t,n,"src",a.src,a,null);return;case"input":ge("invalid",t);var T=f=S=c=null,z=null,$=null;for(s in a)if(a.hasOwnProperty(s)){var dt=a[s];if(dt!=null)switch(s){case"name":c=dt;break;case"type":S=dt;break;case"checked":z=dt;break;case"defaultChecked":$=dt;break;case"value":f=dt;break;case"defaultValue":T=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(r(137,n));break;default:Ne(t,n,s,dt,a,null)}}Cn(t,f,T,z,$,S,c,!1),pe(t);return;case"select":ge("invalid",t),s=S=f=null;for(c in a)if(a.hasOwnProperty(c)&&(T=a[c],T!=null))switch(c){case"value":f=T;break;case"defaultValue":S=T;break;case"multiple":s=T;default:Ne(t,n,c,T,a,null)}n=f,a=S,t.multiple=!!s,n!=null?Ke(t,!!s,n,!1):a!=null&&Ke(t,!!s,a,!0);return;case"textarea":ge("invalid",t),f=c=s=null;for(S in a)if(a.hasOwnProperty(S)&&(T=a[S],T!=null))switch(S){case"value":s=T;break;case"defaultValue":c=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Ne(t,n,S,T,a,null)}xr(t,s,c,f),pe(t);return;case"option":for(z in a)if(a.hasOwnProperty(z)&&(s=a[z],s!=null))switch(z){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Ne(t,n,z,s,a,null)}return;case"dialog":ge("beforetoggle",t),ge("toggle",t),ge("cancel",t),ge("close",t);break;case"iframe":case"object":ge("load",t);break;case"video":case"audio":for(s=0;s<ao.length;s++)ge(ao[s],t);break;case"image":ge("error",t),ge("load",t);break;case"details":ge("toggle",t);break;case"embed":case"source":case"link":ge("error",t),ge("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(s=a[$],s!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ne(t,n,$,s,a,null)}return;default:if(wc(n)){for(dt in a)a.hasOwnProperty(dt)&&(s=a[dt],s!==void 0&&pf(t,n,dt,s,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(s=a[T],s!=null&&Ne(t,n,T,s,a,null))}function lx(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,S=null,T=null,z=null,$=null,dt=null;for(at in a){var gt=a[at];if(a.hasOwnProperty(at)&&gt!=null)switch(at){case"checked":break;case"value":break;case"defaultValue":z=gt;default:s.hasOwnProperty(at)||Ne(t,n,at,null,s,gt)}}for(var nt in s){var at=s[nt];if(gt=a[nt],s.hasOwnProperty(nt)&&(at!=null||gt!=null))switch(nt){case"type":f=at;break;case"name":c=at;break;case"checked":$=at;break;case"defaultChecked":dt=at;break;case"value":S=at;break;case"defaultValue":T=at;break;case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(r(137,n));break;default:at!==gt&&Ne(t,n,nt,at,s,gt)}}Be(t,S,T,z,$,dt,f,c);return;case"select":at=S=T=nt=null;for(f in a)if(z=a[f],a.hasOwnProperty(f)&&z!=null)switch(f){case"value":break;case"multiple":at=z;default:s.hasOwnProperty(f)||Ne(t,n,f,null,s,z)}for(c in s)if(f=s[c],z=a[c],s.hasOwnProperty(c)&&(f!=null||z!=null))switch(c){case"value":nt=f;break;case"defaultValue":T=f;break;case"multiple":S=f;default:f!==z&&Ne(t,n,c,f,s,z)}n=T,a=S,s=at,nt!=null?Ke(t,!!a,nt,!1):!!s!=!!a&&(n!=null?Ke(t,!!a,n,!0):Ke(t,!!a,a?[]:"",!1));return;case"textarea":at=nt=null;for(T in a)if(c=a[T],a.hasOwnProperty(T)&&c!=null&&!s.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Ne(t,n,T,null,s,c)}for(S in s)if(c=s[S],f=a[S],s.hasOwnProperty(S)&&(c!=null||f!=null))switch(S){case"value":nt=c;break;case"defaultValue":at=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Ne(t,n,S,c,s,f)}_n(t,nt,at);return;case"option":for(var ne in a)if(nt=a[ne],a.hasOwnProperty(ne)&&nt!=null&&!s.hasOwnProperty(ne))switch(ne){case"selected":t.selected=!1;break;default:Ne(t,n,ne,null,s,nt)}for(z in s)if(nt=s[z],at=a[z],s.hasOwnProperty(z)&&nt!==at&&(nt!=null||at!=null))switch(z){case"selected":t.selected=nt&&typeof nt!="function"&&typeof nt!="symbol";break;default:Ne(t,n,z,nt,s,at)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $t in a)nt=a[$t],a.hasOwnProperty($t)&&nt!=null&&!s.hasOwnProperty($t)&&Ne(t,n,$t,null,s,nt);for($ in s)if(nt=s[$],at=a[$],s.hasOwnProperty($)&&nt!==at&&(nt!=null||at!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(r(137,n));break;default:Ne(t,n,$,nt,s,at)}return;default:if(wc(n)){for(var Oe in a)nt=a[Oe],a.hasOwnProperty(Oe)&&nt!==void 0&&!s.hasOwnProperty(Oe)&&pf(t,n,Oe,void 0,s,nt);for(dt in s)nt=s[dt],at=a[dt],!s.hasOwnProperty(dt)||nt===at||nt===void 0&&at===void 0||pf(t,n,dt,nt,s,at);return}}for(var Z in a)nt=a[Z],a.hasOwnProperty(Z)&&nt!=null&&!s.hasOwnProperty(Z)&&Ne(t,n,Z,null,s,nt);for(gt in s)nt=s[gt],at=a[gt],!s.hasOwnProperty(gt)||nt===at||nt==null&&at==null||Ne(t,n,gt,nt,s,at)}var mf=null,gf=null;function Ll(t){return t.nodeType===9?t:t.ownerDocument}function Tg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function bg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function _f(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var vf=null;function cx(){var t=window.event;return t&&t.type==="popstate"?t===vf?!1:(vf=t,!0):(vf=null,!1)}var Ag=typeof setTimeout=="function"?setTimeout:void 0,ux=typeof clearTimeout=="function"?clearTimeout:void 0,Rg=typeof Promise=="function"?Promise:void 0,fx=typeof queueMicrotask=="function"?queueMicrotask:typeof Rg<"u"?function(t){return Rg.resolve(null).then(t).catch(hx)}:Ag;function hx(t){setTimeout(function(){throw t})}function ya(t){return t==="head"}function Cg(t,n){var a=n,s=0,c=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<s&&8>s){a=s;var S=t.ownerDocument;if(a&1&&so(S.documentElement),a&2&&so(S.body),a&4)for(a=S.head,so(a),S=a.firstChild;S;){var T=S.nextSibling,z=S.nodeName;S[xi]||z==="SCRIPT"||z==="STYLE"||z==="LINK"&&S.rel.toLowerCase()==="stylesheet"||a.removeChild(S),S=T}}if(c===0){t.removeChild(f),mo(n);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:s=a.charCodeAt(0)-48;else s=0;a=f}while(a);mo(n)}function xf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":xf(a),vr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function dx(t,n,a,s){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[xi])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=fi(t.nextSibling),t===null)break}return null}function px(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=fi(t.nextSibling),t===null))return null;return t}function Sf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function mx(t,n){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function fi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var Mf=null;function wg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function Dg(t,n,a){switch(n=Ll(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function so(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);vr(t)}var ni=new Map,Ug=new Set;function Nl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var qi=q.d;q.d={f:gx,r:_x,D:vx,C:xx,L:Sx,m:Mx,X:Ex,S:yx,M:Tx};function gx(){var t=qi.f(),n=Tl();return t||n}function _x(t){var n=aa(t);n!==null&&n.tag===5&&n.type==="form"?Qp(n):qi.r(t)}var Zr=typeof document>"u"?null:document;function Lg(t,n,a){var s=Zr;if(s&&typeof n=="string"&&n){var c=hn(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Ug.has(c)||(Ug.add(c),t={rel:t,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),Sn(n,"link",t),en(n),s.head.appendChild(n)))}}function vx(t){qi.D(t),Lg("dns-prefetch",t,null)}function xx(t,n){qi.C(t,n),Lg("preconnect",t,n)}function Sx(t,n,a){qi.L(t,n,a);var s=Zr;if(s&&t&&n){var c='link[rel="preload"][as="'+hn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+hn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+hn(a.imageSizes)+'"]')):c+='[href="'+hn(t)+'"]';var f=c;switch(n){case"style":f=jr(t);break;case"script":f=Kr(t)}ni.has(f)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ni.set(f,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(oo(f))||n==="script"&&s.querySelector(lo(f))||(n=s.createElement("link"),Sn(n,"link",t),en(n),s.head.appendChild(n)))}}function Mx(t,n){qi.m(t,n);var a=Zr;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+hn(s)+'"][href="'+hn(t)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Kr(t)}if(!ni.has(f)&&(t=g({rel:"modulepreload",href:t},n),ni.set(f,t),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(lo(f)))return}s=a.createElement("link"),Sn(s,"link",t),en(s),a.head.appendChild(s)}}}function yx(t,n,a){qi.S(t,n,a);var s=Zr;if(s&&t){var c=ra(s).hoistableStyles,f=jr(t);n=n||"default";var S=c.get(f);if(!S){var T={loading:0,preload:null};if(S=s.querySelector(oo(f)))T.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ni.get(f))&&yf(t,a);var z=S=s.createElement("link");en(z),Sn(z,"link",t),z._p=new Promise(function($,dt){z.onload=$,z.onerror=dt}),z.addEventListener("load",function(){T.loading|=1}),z.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Ol(S,n,s)}S={type:"stylesheet",instance:S,count:1,state:T},c.set(f,S)}}}function Ex(t,n){qi.X(t,n);var a=Zr;if(a&&t){var s=ra(a).hoistableScripts,c=Kr(t),f=s.get(c);f||(f=a.querySelector(lo(c)),f||(t=g({src:t,async:!0},n),(n=ni.get(c))&&Ef(t,n),f=a.createElement("script"),en(f),Sn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Tx(t,n){qi.M(t,n);var a=Zr;if(a&&t){var s=ra(a).hoistableScripts,c=Kr(t),f=s.get(c);f||(f=a.querySelector(lo(c)),f||(t=g({src:t,async:!0,type:"module"},n),(n=ni.get(c))&&Ef(t,n),f=a.createElement("script"),en(f),Sn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Ng(t,n,a,s){var c=(c=ft.current)?Nl(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=jr(a.href),a=ra(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=jr(a.href);var f=ra(c).hoistableStyles,S=f.get(t);if(S||(c=c.ownerDocument||c,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,S),(f=c.querySelector(oo(t)))&&!f._p&&(S.instance=f,S.state.loading=5),ni.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ni.set(t,a),f||bx(c,t,a,S.state))),n&&s===null)throw Error(r(528,""));return S}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Kr(a),a=ra(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function jr(t){return'href="'+hn(t)+'"'}function oo(t){return'link[rel="stylesheet"]['+t+"]"}function Og(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function bx(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),Sn(n,"link",a),en(n),t.head.appendChild(n))}function Kr(t){return'[src="'+hn(t)+'"]'}function lo(t){return"script[async]"+t}function Pg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+hn(a.href)+'"]');if(s)return n.instance=s,en(s),s;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),en(s),Sn(s,"style",c),Ol(s,a.precedence,t),n.instance=s;case"stylesheet":c=jr(a.href);var f=t.querySelector(oo(c));if(f)return n.state.loading|=4,n.instance=f,en(f),f;s=Og(a),(c=ni.get(c))&&yf(s,c),f=(t.ownerDocument||t).createElement("link"),en(f);var S=f;return S._p=new Promise(function(T,z){S.onload=T,S.onerror=z}),Sn(f,"link",s),n.state.loading|=4,Ol(f,a.precedence,t),n.instance=f;case"script":return f=Kr(a.src),(c=t.querySelector(lo(f)))?(n.instance=c,en(c),c):(s=a,(c=ni.get(f))&&(s=g({},a),Ef(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),en(c),Sn(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Ol(s,a.precedence,t));return n.instance}function Ol(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,S=0;S<s.length;S++){var T=s[S];if(T.dataset.precedence===n)f=T;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function yf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Ef(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Pl=null;function zg(t,n,a){if(Pl===null){var s=new Map,c=Pl=new Map;c.set(a,s)}else c=Pl,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[xi]||f[on]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=t+S;var T=s.get(S);T?T.push(f):s.set(S,[f])}}return s}function Bg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Ax(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Ig(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var co=null;function Rx(){}function Cx(t,n,a){if(co===null)throw Error(r(475));var s=co;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=jr(a.href),f=t.querySelector(oo(c));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(s.count++,s=zl.bind(s),t.then(s,s)),n.state.loading|=4,n.instance=f,en(f);return}f=t.ownerDocument||t,a=Og(a),(c=ni.get(c))&&yf(a,c),f=f.createElement("link"),en(f);var S=f;S._p=new Promise(function(T,z){S.onload=T,S.onerror=z}),Sn(f,"link",a),n.instance=f}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(s.count++,n=zl.bind(s),t.addEventListener("load",n),t.addEventListener("error",n))}}function wx(){if(co===null)throw Error(r(475));var t=co;return t.stylesheets&&t.count===0&&Tf(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&Tf(t,t.stylesheets),t.unsuspend){var s=t.unsuspend;t.unsuspend=null,s()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function zl(){if(this.count--,this.count===0){if(this.stylesheets)Tf(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Bl=null;function Tf(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Bl=new Map,n.forEach(Dx,t),Bl=null,zl.call(t))}function Dx(t,n){if(!(n.state.loading&4)){var a=Bl.get(t);if(a)var s=a.get(null);else{a=new Map,Bl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var S=c[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),s=S)}s&&a.set(null,s)}c=n.instance,S=c.getAttribute("data-precedence"),f=a.get(S)||s,f===s&&a.set(null,c),a.set(S,c),this.count++,s=zl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var uo={$$typeof:P,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function Ux(t,n,a,s,c,f,S,T){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ct(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ct(0),this.hiddenUpdates=Ct(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function Fg(t,n,a,s,c,f,S,T,z,$,dt,gt){return t=new Ux(t,n,a,S,T,z,$,gt),n=1,f===!0&&(n|=24),f=Gn(3,null,null,n),t.current=f,f.stateNode=t,n=au(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},lu(f),t}function Hg(t){return t?(t=Rr,t):Rr}function Gg(t,n,a,s,c,f){c=Hg(c),s.context===null?s.context=c:s.pendingContext=c,s=ca(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=ua(t,s,n),a!==null&&(qn(a,t,n),Hs(a,t,n))}function Vg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function bf(t,n){Vg(t,n),(t=t.alternate)&&Vg(t,n)}function kg(t){if(t.tag===13){var n=Ar(t,67108864);n!==null&&qn(n,t,67108864),bf(t,67108864)}}var Il=!0;function Lx(t,n,a,s){var c=N.T;N.T=null;var f=q.p;try{q.p=2,Af(t,n,a,s)}finally{q.p=f,N.T=c}}function Nx(t,n,a,s){var c=N.T;N.T=null;var f=q.p;try{q.p=8,Af(t,n,a,s)}finally{q.p=f,N.T=c}}function Af(t,n,a,s){if(Il){var c=Rf(s);if(c===null)df(t,n,s,Fl,a),Wg(t,s);else if(Px(c,t,n,a,s))s.stopPropagation();else if(Wg(t,s),n&4&&-1<Ox.indexOf(t)){for(;c!==null;){var f=aa(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=jt(f.pendingLanes);if(S!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;S;){var z=1<<31-Pt(S);T.entanglements[1]|=z,S&=~z}Ti(f),(we&6)===0&&(yl=It()+500,io(0))}}break;case 13:T=Ar(f,2),T!==null&&qn(T,f,2),Tl(),bf(f,2)}if(f=Rf(s),f===null&&df(t,n,s,Fl,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else df(t,n,s,null,a)}}function Rf(t){return t=Uc(t),Cf(t)}var Fl=null;function Cf(t){if(Fl=null,t=Li(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Fl=t,null}function Xg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(He()){case Ft:return 2;case re:return 8;case qe:case Ye:return 32;case L:return 268435456;default:return 32}default:return 32}}var wf=!1,Ea=null,Ta=null,ba=null,fo=new Map,ho=new Map,Aa=[],Ox="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Wg(t,n){switch(t){case"focusin":case"focusout":Ea=null;break;case"dragenter":case"dragleave":Ta=null;break;case"mouseover":case"mouseout":ba=null;break;case"pointerover":case"pointerout":fo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ho.delete(n.pointerId)}}function po(t,n,a,s,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=aa(n),n!==null&&kg(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function Px(t,n,a,s,c){switch(n){case"focusin":return Ea=po(Ea,t,n,a,s,c),!0;case"dragenter":return Ta=po(Ta,t,n,a,s,c),!0;case"mouseover":return ba=po(ba,t,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return fo.set(f,po(fo.get(f)||null,t,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,ho.set(f,po(ho.get(f)||null,t,n,a,s,c)),!0}return!1}function qg(t){var n=Li(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,oi(t.priority,function(){if(a.tag===13){var s=Wn();s=ie(s);var c=Ar(a,s);c!==null&&qn(c,a,s),bf(a,s)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Hl(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Rf(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Dc=s,a.target.dispatchEvent(s),Dc=null}else return n=aa(a),n!==null&&kg(n),t.blockedOn=a,!1;n.shift()}return!0}function Yg(t,n,a){Hl(t)&&a.delete(n)}function zx(){wf=!1,Ea!==null&&Hl(Ea)&&(Ea=null),Ta!==null&&Hl(Ta)&&(Ta=null),ba!==null&&Hl(ba)&&(ba=null),fo.forEach(Yg),ho.forEach(Yg)}function Gl(t,n){t.blockedOn===n&&(t.blockedOn=null,wf||(wf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,zx)))}var Vl=null;function Zg(t){Vl!==t&&(Vl=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Vl===t&&(Vl=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(Cf(s||a)===null)continue;break}var f=aa(a);f!==null&&(t.splice(n,3),n-=3,Ru(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function mo(t){function n(z){return Gl(z,t)}Ea!==null&&Gl(Ea,t),Ta!==null&&Gl(Ta,t),ba!==null&&Gl(ba,t),fo.forEach(n),ho.forEach(n);for(var a=0;a<Aa.length;a++){var s=Aa[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Aa.length&&(a=Aa[0],a.blockedOn===null);)qg(a),a.blockedOn===null&&Aa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],S=c[je]||null;if(typeof f=="function")S||Zg(a);else if(S){var T=null;if(f&&f.hasAttribute("formAction")){if(c=f,S=f[je]||null)T=S.formAction;else if(Cf(c)!==null)continue}else T=S.action;typeof T=="function"?a[s+1]=T:(a.splice(s,3),s-=3),Zg(a)}}}function Df(t){this._internalRoot=t}kl.prototype.render=Df.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Wn();Gg(a,s,t,n,null,null)},kl.prototype.unmount=Df.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Gg(t.current,2,null,t,null,null),Tl(),n[vi]=null}};function kl(t){this._internalRoot=t}kl.prototype.unstable_scheduleHydration=function(t){if(t){var n=Se();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Aa.length&&n!==0&&n<Aa[a].priority;a++);Aa.splice(a,0,t),a===0&&qg(t)}};var jg=e.version;if(jg!=="19.1.1")throw Error(r(527,jg,"19.1.1"));q.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=m(n),t=t!==null?p(t):null,t=t===null?null:t.stateNode,t};var Bx={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xl.isDisabled&&Xl.supportsFiber)try{ht=Xl.inject(Bx),xt=Xl}catch{}}return _o.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",c=fm,f=hm,S=dm,T=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(T=n.unstable_transitionCallbacks)),n=Fg(t,1,!1,null,null,a,s,c,f,S,T,null),t[vi]=n.current,hf(t),new Df(n)},_o.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,c="",f=fm,S=hm,T=dm,z=null,$=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(z=a.unstable_transitionCallbacks),a.formState!==void 0&&($=a.formState)),n=Fg(t,1,!0,n,a??null,s,c,f,S,T,z,$),n.context=Hg(null),a=n.current,s=Wn(),s=ie(s),c=ca(s),c.callback=null,ua(a,c,s),a=s,n.current.lanes=a,zt(n,a),Ti(n),t[vi]=n.current,hf(t),new kl(n)},_o.version="19.1.1",_o}var r_;function Yx(){if(r_)return Nf.exports;r_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Nf.exports=qx(),Nf.exports}var Zx=Yx();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fd="179",jx=0,s_=1,Kx=2,o0=1,Qx=2,Ji=3,Ba=0,In=1,$i=2,Pa=0,hs=1,Sh=2,o_=3,l_=4,Jx=5,ur=100,$x=101,tS=102,eS=103,nS=104,iS=200,aS=201,rS=202,sS=203,Mh=204,yh=205,oS=206,lS=207,cS=208,uS=209,fS=210,hS=211,dS=212,pS=213,mS=214,Eh=0,Th=1,bh=2,ms=3,Ah=4,Rh=5,Ch=6,wh=7,l0=0,gS=1,_S=2,za=0,vS=1,xS=2,SS=3,MS=4,yS=5,ES=6,TS=7,c0=300,gs=301,_s=302,Dh=303,Uh=304,Ac=306,Lh=1e3,hr=1001,Nh=1002,_i=1003,bS=1004,Wl=1005,Ri=1006,Bf=1007,dr=1008,Di=1009,u0=1010,f0=1011,bo=1012,hd=1013,pr=1014,ta=1015,wo=1016,dd=1017,pd=1018,Ao=1020,h0=35902,d0=1021,p0=1022,gi=1023,Ro=1026,Co=1027,m0=1028,md=1029,g0=1030,gd=1031,_d=1033,mc=33776,gc=33777,_c=33778,vc=33779,Oh=35840,Ph=35841,zh=35842,Bh=35843,Ih=36196,Fh=37492,Hh=37496,Gh=37808,Vh=37809,kh=37810,Xh=37811,Wh=37812,qh=37813,Yh=37814,Zh=37815,jh=37816,Kh=37817,Qh=37818,Jh=37819,$h=37820,td=37821,xc=36492,ed=36494,nd=36495,_0=36283,id=36284,ad=36285,rd=36286,AS=3200,RS=3201,CS=0,wS=1,Oa="",ai="srgb",vs="srgb-linear",Ec="linear",Pe="srgb",Qr=7680,c_=519,DS=512,US=513,LS=514,v0=515,NS=516,OS=517,PS=518,zS=519,u_=35044,f_="300 es",Ci=2e3,Tc=2001;class Ss{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,e);e.target=null}}}const bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],If=Math.PI/180,sd=180/Math.PI;function Do(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(bn[o&255]+bn[o>>8&255]+bn[o>>16&255]+bn[o>>24&255]+"-"+bn[e&255]+bn[e>>8&255]+"-"+bn[e>>16&15|64]+bn[e>>24&255]+"-"+bn[i&63|128]+bn[i>>8&255]+"-"+bn[i>>16&255]+bn[i>>24&255]+bn[r&255]+bn[r>>8&255]+bn[r>>16&255]+bn[r>>24&255]).toLowerCase()}function _e(o,e,i){return Math.max(e,Math.min(i,o))}function BS(o,e){return(o%e+e)%e}function Ff(o,e,i){return(1-i)*o+i*e}function vo(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Bn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Te{constructor(e=0,i=0){Te.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=_e(this.x,e.x,i.x),this.y=_e(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=_e(this.x,e,i),this.y=_e(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_e(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(_e(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,h=this.y-e.y;return this.x=u*r-h*l+e.x,this.y=u*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Uo{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,h,d){let m=r[l+0],p=r[l+1],g=r[l+2],v=r[l+3];const x=u[h+0],y=u[h+1],b=u[h+2],C=u[h+3];if(d===0){e[i+0]=m,e[i+1]=p,e[i+2]=g,e[i+3]=v;return}if(d===1){e[i+0]=x,e[i+1]=y,e[i+2]=b,e[i+3]=C;return}if(v!==C||m!==x||p!==y||g!==b){let M=1-d;const _=m*x+p*y+g*b+v*C,H=_>=0?1:-1,P=1-_*_;if(P>Number.EPSILON){const B=Math.sqrt(P),G=Math.atan2(B,_*H);M=Math.sin(M*G)/B,d=Math.sin(d*G)/B}const U=d*H;if(m=m*M+x*U,p=p*M+y*U,g=g*M+b*U,v=v*M+C*U,M===1-d){const B=1/Math.sqrt(m*m+p*p+g*g+v*v);m*=B,p*=B,g*=B,v*=B}}e[i]=m,e[i+1]=p,e[i+2]=g,e[i+3]=v}static multiplyQuaternionsFlat(e,i,r,l,u,h){const d=r[l],m=r[l+1],p=r[l+2],g=r[l+3],v=u[h],x=u[h+1],y=u[h+2],b=u[h+3];return e[i]=d*b+g*v+m*y-p*x,e[i+1]=m*b+g*x+p*v-d*y,e[i+2]=p*b+g*y+d*x-m*v,e[i+3]=g*b-d*v-m*x-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(r/2),g=d(l/2),v=d(u/2),x=m(r/2),y=m(l/2),b=m(u/2);switch(h){case"XYZ":this._x=x*g*v+p*y*b,this._y=p*y*v-x*g*b,this._z=p*g*b+x*y*v,this._w=p*g*v-x*y*b;break;case"YXZ":this._x=x*g*v+p*y*b,this._y=p*y*v-x*g*b,this._z=p*g*b-x*y*v,this._w=p*g*v+x*y*b;break;case"ZXY":this._x=x*g*v-p*y*b,this._y=p*y*v+x*g*b,this._z=p*g*b+x*y*v,this._w=p*g*v-x*y*b;break;case"ZYX":this._x=x*g*v-p*y*b,this._y=p*y*v+x*g*b,this._z=p*g*b-x*y*v,this._w=p*g*v+x*y*b;break;case"YZX":this._x=x*g*v+p*y*b,this._y=p*y*v+x*g*b,this._z=p*g*b-x*y*v,this._w=p*g*v-x*y*b;break;case"XZY":this._x=x*g*v-p*y*b,this._y=p*y*v-x*g*b,this._z=p*g*b+x*y*v,this._w=p*g*v+x*y*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],v=i[10],x=r+d+v;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(g-m)*y,this._y=(u-p)*y,this._z=(h-l)*y}else if(r>d&&r>v){const y=2*Math.sqrt(1+r-d-v);this._w=(g-m)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(u+p)/y}else if(d>v){const y=2*Math.sqrt(1+d-r-v);this._w=(u-p)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(m+g)/y}else{const y=2*Math.sqrt(1+v-r-d);this._w=(h-l)/y,this._x=(u+p)/y,this._y=(m+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_e(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,h=e._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+h*d+l*p-u*m,this._y=l*g+h*m+u*d-r*p,this._z=u*g+h*p+r*m-l*d,this._w=h*g-r*d-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,u=this._z,h=this._w;let d=h*e._w+r*e._x+l*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=r,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const y=1-i;return this._w=y*h+i*this._w,this._x=y*r+i*this._x,this._y=y*l+i*this._y,this._z=y*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),v=Math.sin((1-i)*g)/p,x=Math.sin(i*g)/p;return this._w=h*v+this._w*x,this._x=r*v+this._x*x,this._y=l*v+this._y*x,this._z=u*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class tt{constructor(e=0,i=0,r=0){tt.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(h_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(h_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,h=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*r),g=2*(d*i-u*l),v=2*(u*r-h*i);return this.x=i+m*p+h*v-d*g,this.y=r+m*g+d*p-u*v,this.z=l+m*v+u*g-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=_e(this.x,e.x,i.x),this.y=_e(this.y,e.y,i.y),this.z=_e(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=_e(this.x,e,i),this.y=_e(this.y,e,i),this.z=_e(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_e(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-r*m,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Hf.copy(this).projectOnVector(e),this.sub(Hf)}reflect(e){return this.sub(Hf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(_e(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hf=new tt,h_=new Uo;class oe{constructor(e,i,r,l,u,h,d,m,p){oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,d,m,p)}set(e,i,r,l,u,h,d,m,p){const g=this.elements;return g[0]=e,g[1]=l,g[2]=d,g[3]=i,g[4]=u,g[5]=m,g[6]=r,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],g=r[4],v=r[7],x=r[2],y=r[5],b=r[8],C=l[0],M=l[3],_=l[6],H=l[1],P=l[4],U=l[7],B=l[2],G=l[5],I=l[8];return u[0]=h*C+d*H+m*B,u[3]=h*M+d*P+m*G,u[6]=h*_+d*U+m*I,u[1]=p*C+g*H+v*B,u[4]=p*M+g*P+v*G,u[7]=p*_+g*U+v*I,u[2]=x*C+y*H+b*B,u[5]=x*M+y*P+b*G,u[8]=x*_+y*U+b*I,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8];return i*h*g-i*d*p-r*u*g+r*d*m+l*u*p-l*h*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8],v=g*h-d*p,x=d*m-g*u,y=p*u-h*m,b=i*v+r*x+l*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/b;return e[0]=v*C,e[1]=(l*p-g*r)*C,e[2]=(d*r-l*h)*C,e[3]=x*C,e[4]=(g*i-l*m)*C,e[5]=(l*u-d*i)*C,e[6]=y*C,e[7]=(r*m-p*i)*C,e[8]=(h*i-r*u)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(Gf.makeScale(e,i)),this}rotate(e){return this.premultiply(Gf.makeRotation(-e)),this}translate(e,i){return this.premultiply(Gf.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Gf=new oe;function x0(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function bc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function IS(){const o=bc("canvas");return o.style.display="block",o}const d_={};function ds(o){o in d_||(d_[o]=!0,console.warn(o))}function FS(o,e,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}const p_=new oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),m_=new oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function HS(){const o={enabled:!0,workingColorSpace:vs,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Pe&&(l.r=na(l.r),l.g=na(l.g),l.b=na(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Pe&&(l.r=ps(l.r),l.g=ps(l.g),l.b=ps(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Oa?Ec:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return ds("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return ds("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[vs]:{primaries:e,whitePoint:r,transfer:Ec,toXYZ:p_,fromXYZ:m_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ai},outputColorSpaceConfig:{drawingBufferColorSpace:ai}},[ai]:{primaries:e,whitePoint:r,transfer:Pe,toXYZ:p_,fromXYZ:m_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ai}}}),o}const Ee=HS();function na(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ps(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Jr;class GS{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Jr===void 0&&(Jr=bc("canvas")),Jr.width=e.width,Jr.height=e.height;const l=Jr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=Jr}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=bc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=na(u[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(na(i[r]/255)*255):i[r]=na(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let VS=0;class vd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:VS++}),this.uuid=Do(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(Vf(l[h].image)):u.push(Vf(l[h]))}else u=Vf(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function Vf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?GS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kS=0;const kf=new tt;class Fn extends Ss{constructor(e=Fn.DEFAULT_IMAGE,i=Fn.DEFAULT_MAPPING,r=hr,l=hr,u=Ri,h=dr,d=gi,m=Di,p=Fn.DEFAULT_ANISOTROPY,g=Oa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kS++}),this.uuid=Do(),this.name="",this.source=new vd(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(kf).x}get height(){return this.source.getSize(kf).y}get depth(){return this.source.getSize(kf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==c0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Lh:e.x=e.x-Math.floor(e.x);break;case hr:e.x=e.x<0?0:1;break;case Nh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Lh:e.y=e.y-Math.floor(e.y);break;case hr:e.y=e.y<0?0:1;break;case Nh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=c0;Fn.DEFAULT_ANISOTROPY=1;class ze{constructor(e=0,i=0,r=0,l=1){ze.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const m=e.elements,p=m[0],g=m[4],v=m[8],x=m[1],y=m[5],b=m[9],C=m[2],M=m[6],_=m[10];if(Math.abs(g-x)<.01&&Math.abs(v-C)<.01&&Math.abs(b-M)<.01){if(Math.abs(g+x)<.1&&Math.abs(v+C)<.1&&Math.abs(b+M)<.1&&Math.abs(p+y+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const P=(p+1)/2,U=(y+1)/2,B=(_+1)/2,G=(g+x)/4,I=(v+C)/4,X=(b+M)/4;return P>U&&P>B?P<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(P),l=G/r,u=I/r):U>B?U<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(U),r=G/l,u=X/l):B<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(B),r=I/u,l=X/u),this.set(r,l,u,i),this}let H=Math.sqrt((M-b)*(M-b)+(v-C)*(v-C)+(x-g)*(x-g));return Math.abs(H)<.001&&(H=1),this.x=(M-b)/H,this.y=(v-C)/H,this.z=(x-g)/H,this.w=Math.acos((p+y+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=_e(this.x,e.x,i.x),this.y=_e(this.y,e.y,i.y),this.z=_e(this.z,e.z,i.z),this.w=_e(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=_e(this.x,e,i),this.y=_e(this.y,e,i),this.z=_e(this.z,e,i),this.w=_e(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_e(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class XS extends Ss{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new ze(0,0,e,i),this.scissorTest=!1,this.viewport=new ze(0,0,e,i);const l={width:e,height:i,depth:r.depth},u=new Fn(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:Ri,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new vd(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mr extends XS{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class S0 extends Fn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=_i,this.minFilter=_i,this.wrapR=hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class WS extends Fn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=_i,this.minFilter=_i,this.wrapR=hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Lo{constructor(e=new tt(1/0,1/0,1/0),i=new tt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(hi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(hi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=hi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,hi):hi.fromBufferAttribute(u,h),hi.applyMatrix4(e.matrixWorld),this.expandByPoint(hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ql.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ql.copy(r.boundingBox)),ql.applyMatrix4(e.matrixWorld),this.union(ql)}const l=e.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hi),hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xo),Yl.subVectors(this.max,xo),$r.subVectors(e.a,xo),ts.subVectors(e.b,xo),es.subVectors(e.c,xo),Ca.subVectors(ts,$r),wa.subVectors(es,ts),nr.subVectors($r,es);let i=[0,-Ca.z,Ca.y,0,-wa.z,wa.y,0,-nr.z,nr.y,Ca.z,0,-Ca.x,wa.z,0,-wa.x,nr.z,0,-nr.x,-Ca.y,Ca.x,0,-wa.y,wa.x,0,-nr.y,nr.x,0];return!Xf(i,$r,ts,es,Yl)||(i=[1,0,0,0,1,0,0,0,1],!Xf(i,$r,ts,es,Yl))?!1:(Zl.crossVectors(Ca,wa),i=[Zl.x,Zl.y,Zl.z],Xf(i,$r,ts,es,Yl))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Yi=[new tt,new tt,new tt,new tt,new tt,new tt,new tt,new tt],hi=new tt,ql=new Lo,$r=new tt,ts=new tt,es=new tt,Ca=new tt,wa=new tt,nr=new tt,xo=new tt,Yl=new tt,Zl=new tt,ir=new tt;function Xf(o,e,i,r,l){for(let u=0,h=o.length-3;u<=h;u+=3){ir.fromArray(o,u);const d=l.x*Math.abs(ir.x)+l.y*Math.abs(ir.y)+l.z*Math.abs(ir.z),m=e.dot(ir),p=i.dot(ir),g=r.dot(ir);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const qS=new Lo,So=new tt,Wf=new tt;class Rc{constructor(e=new tt,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):qS.setFromPoints(e).getCenter(r);let l=0;for(let u=0,h=e.length;u<h;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;So.subVectors(e,this.center);const i=So.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(So,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(So.copy(e.center).add(Wf)),this.expandByPoint(So.copy(e.center).sub(Wf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Zi=new tt,qf=new tt,jl=new tt,Da=new tt,Yf=new tt,Kl=new tt,Zf=new tt;class xd{constructor(e=new tt,i=new tt(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zi)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Zi.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Zi.copy(this.origin).addScaledVector(this.direction,i),Zi.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){qf.copy(e).add(i).multiplyScalar(.5),jl.copy(i).sub(e).normalize(),Da.copy(this.origin).sub(qf);const u=e.distanceTo(i)*.5,h=-this.direction.dot(jl),d=Da.dot(this.direction),m=-Da.dot(jl),p=Da.lengthSq(),g=Math.abs(1-h*h);let v,x,y,b;if(g>0)if(v=h*m-d,x=h*d-m,b=u*g,v>=0)if(x>=-b)if(x<=b){const C=1/g;v*=C,x*=C,y=v*(v+h*x+2*d)+x*(h*v+x+2*m)+p}else x=u,v=Math.max(0,-(h*x+d)),y=-v*v+x*(x+2*m)+p;else x=-u,v=Math.max(0,-(h*x+d)),y=-v*v+x*(x+2*m)+p;else x<=-b?(v=Math.max(0,-(-h*u+d)),x=v>0?-u:Math.min(Math.max(-u,-m),u),y=-v*v+x*(x+2*m)+p):x<=b?(v=0,x=Math.min(Math.max(-u,-m),u),y=x*(x+2*m)+p):(v=Math.max(0,-(h*u+d)),x=v>0?u:Math.min(Math.max(-u,-m),u),y=-v*v+x*(x+2*m)+p);else x=h>0?-u:u,v=Math.max(0,-(h*x+d)),y=-v*v+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(qf).addScaledVector(jl,x),y}intersectSphere(e,i){Zi.subVectors(e.center,this.origin);const r=Zi.dot(this.direction),l=Zi.dot(Zi)-r*r,u=e.radius*e.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,l=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,l=(e.min.x-x.x)*p),g>=0?(u=(e.min.y-x.y)*g,h=(e.max.y-x.y)*g):(u=(e.max.y-x.y)*g,h=(e.min.y-x.y)*g),r>h||u>l||((u>r||isNaN(r))&&(r=u),(h<l||isNaN(l))&&(l=h),v>=0?(d=(e.min.z-x.z)*v,m=(e.max.z-x.z)*v):(d=(e.max.z-x.z)*v,m=(e.min.z-x.z)*v),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Zi)!==null}intersectTriangle(e,i,r,l,u){Yf.subVectors(i,e),Kl.subVectors(r,e),Zf.crossVectors(Yf,Kl);let h=this.direction.dot(Zf),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Da.subVectors(this.origin,e);const m=d*this.direction.dot(Kl.crossVectors(Da,Kl));if(m<0)return null;const p=d*this.direction.dot(Yf.cross(Da));if(p<0||m+p>h)return null;const g=-d*Da.dot(Zf);return g<0?null:this.at(g/h,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class We{constructor(e,i,r,l,u,h,d,m,p,g,v,x,y,b,C,M){We.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,d,m,p,g,v,x,y,b,C,M)}set(e,i,r,l,u,h,d,m,p,g,v,x,y,b,C,M){const _=this.elements;return _[0]=e,_[4]=i,_[8]=r,_[12]=l,_[1]=u,_[5]=h,_[9]=d,_[13]=m,_[2]=p,_[6]=g,_[10]=v,_[14]=x,_[3]=y,_[7]=b,_[11]=C,_[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new We().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/ns.setFromMatrixColumn(e,0).length(),u=1/ns.setFromMatrixColumn(e,1).length(),h=1/ns.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(u),v=Math.sin(u);if(e.order==="XYZ"){const x=h*g,y=h*v,b=d*g,C=d*v;i[0]=m*g,i[4]=-m*v,i[8]=p,i[1]=y+b*p,i[5]=x-C*p,i[9]=-d*m,i[2]=C-x*p,i[6]=b+y*p,i[10]=h*m}else if(e.order==="YXZ"){const x=m*g,y=m*v,b=p*g,C=p*v;i[0]=x+C*d,i[4]=b*d-y,i[8]=h*p,i[1]=h*v,i[5]=h*g,i[9]=-d,i[2]=y*d-b,i[6]=C+x*d,i[10]=h*m}else if(e.order==="ZXY"){const x=m*g,y=m*v,b=p*g,C=p*v;i[0]=x-C*d,i[4]=-h*v,i[8]=b+y*d,i[1]=y+b*d,i[5]=h*g,i[9]=C-x*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const x=h*g,y=h*v,b=d*g,C=d*v;i[0]=m*g,i[4]=b*p-y,i[8]=x*p+C,i[1]=m*v,i[5]=C*p+x,i[9]=y*p-b,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const x=h*m,y=h*p,b=d*m,C=d*p;i[0]=m*g,i[4]=C-x*v,i[8]=b*v+y,i[1]=v,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=y*v+b,i[10]=x-C*v}else if(e.order==="XZY"){const x=h*m,y=h*p,b=d*m,C=d*p;i[0]=m*g,i[4]=-v,i[8]=p*g,i[1]=x*v+C,i[5]=h*g,i[9]=y*v-b,i[2]=b*v-y,i[6]=d*g,i[10]=C*v+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(YS,e,ZS)}lookAt(e,i,r){const l=this.elements;return Yn.subVectors(e,i),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),Ua.crossVectors(r,Yn),Ua.lengthSq()===0&&(Math.abs(r.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),Ua.crossVectors(r,Yn)),Ua.normalize(),Ql.crossVectors(Yn,Ua),l[0]=Ua.x,l[4]=Ql.x,l[8]=Yn.x,l[1]=Ua.y,l[5]=Ql.y,l[9]=Yn.y,l[2]=Ua.z,l[6]=Ql.z,l[10]=Yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],g=r[1],v=r[5],x=r[9],y=r[13],b=r[2],C=r[6],M=r[10],_=r[14],H=r[3],P=r[7],U=r[11],B=r[15],G=l[0],I=l[4],X=l[8],R=l[12],w=l[1],O=l[5],ot=l[9],it=l[13],lt=l[2],ct=l[6],N=l[10],q=l[14],W=l[3],vt=l[7],D=l[11],K=l[15];return u[0]=h*G+d*w+m*lt+p*W,u[4]=h*I+d*O+m*ct+p*vt,u[8]=h*X+d*ot+m*N+p*D,u[12]=h*R+d*it+m*q+p*K,u[1]=g*G+v*w+x*lt+y*W,u[5]=g*I+v*O+x*ct+y*vt,u[9]=g*X+v*ot+x*N+y*D,u[13]=g*R+v*it+x*q+y*K,u[2]=b*G+C*w+M*lt+_*W,u[6]=b*I+C*O+M*ct+_*vt,u[10]=b*X+C*ot+M*N+_*D,u[14]=b*R+C*it+M*q+_*K,u[3]=H*G+P*w+U*lt+B*W,u[7]=H*I+P*O+U*ct+B*vt,u[11]=H*X+P*ot+U*N+B*D,u[15]=H*R+P*it+U*q+B*K,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],h=e[1],d=e[5],m=e[9],p=e[13],g=e[2],v=e[6],x=e[10],y=e[14],b=e[3],C=e[7],M=e[11],_=e[15];return b*(+u*m*v-l*p*v-u*d*x+r*p*x+l*d*y-r*m*y)+C*(+i*m*y-i*p*x+u*h*x-l*h*y+l*p*g-u*m*g)+M*(+i*p*v-i*d*y-u*h*v+r*h*y+u*d*g-r*p*g)+_*(-l*d*g-i*m*v+i*d*x+l*h*v-r*h*x+r*m*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8],v=e[9],x=e[10],y=e[11],b=e[12],C=e[13],M=e[14],_=e[15],H=v*M*p-C*x*p+C*m*y-d*M*y-v*m*_+d*x*_,P=b*x*p-g*M*p-b*m*y+h*M*y+g*m*_-h*x*_,U=g*C*p-b*v*p+b*d*y-h*C*y-g*d*_+h*v*_,B=b*v*m-g*C*m-b*d*x+h*C*x+g*d*M-h*v*M,G=i*H+r*P+l*U+u*B;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/G;return e[0]=H*I,e[1]=(C*x*u-v*M*u-C*l*y+r*M*y+v*l*_-r*x*_)*I,e[2]=(d*M*u-C*m*u+C*l*p-r*M*p-d*l*_+r*m*_)*I,e[3]=(v*m*u-d*x*u-v*l*p+r*x*p+d*l*y-r*m*y)*I,e[4]=P*I,e[5]=(g*M*u-b*x*u+b*l*y-i*M*y-g*l*_+i*x*_)*I,e[6]=(b*m*u-h*M*u-b*l*p+i*M*p+h*l*_-i*m*_)*I,e[7]=(h*x*u-g*m*u+g*l*p-i*x*p-h*l*y+i*m*y)*I,e[8]=U*I,e[9]=(b*v*u-g*C*u-b*r*y+i*C*y+g*r*_-i*v*_)*I,e[10]=(h*C*u-b*d*u+b*r*p-i*C*p-h*r*_+i*d*_)*I,e[11]=(g*d*u-h*v*u-g*r*p+i*v*p+h*r*y-i*d*y)*I,e[12]=B*I,e[13]=(g*C*l-b*v*l+b*r*x-i*C*x-g*r*M+i*v*M)*I,e[14]=(b*d*l-h*C*l-b*r*m+i*C*m+h*r*M-i*d*M)*I,e[15]=(h*v*l-g*d*l+g*r*m-i*v*m-h*r*x+i*d*x)*I,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,h=e.x,d=e.y,m=e.z,p=u*h,g=u*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+r,g*m-l*h,0,p*m-l*d,g*m+l*h,u*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,h){return this.set(1,r,u,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,g=h+h,v=d+d,x=u*p,y=u*g,b=u*v,C=h*g,M=h*v,_=d*v,H=m*p,P=m*g,U=m*v,B=r.x,G=r.y,I=r.z;return l[0]=(1-(C+_))*B,l[1]=(y+U)*B,l[2]=(b-P)*B,l[3]=0,l[4]=(y-U)*G,l[5]=(1-(x+_))*G,l[6]=(M+H)*G,l[7]=0,l[8]=(b+P)*I,l[9]=(M-H)*I,l[10]=(1-(x+C))*I,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let u=ns.set(l[0],l[1],l[2]).length();const h=ns.set(l[4],l[5],l[6]).length(),d=ns.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],di.copy(this);const p=1/u,g=1/h,v=1/d;return di.elements[0]*=p,di.elements[1]*=p,di.elements[2]*=p,di.elements[4]*=g,di.elements[5]*=g,di.elements[6]*=g,di.elements[8]*=v,di.elements[9]*=v,di.elements[10]*=v,i.setFromRotationMatrix(di),r.x=u,r.y=h,r.z=d,this}makePerspective(e,i,r,l,u,h,d=Ci,m=!1){const p=this.elements,g=2*u/(i-e),v=2*u/(r-l),x=(i+e)/(i-e),y=(r+l)/(r-l);let b,C;if(m)b=u/(h-u),C=h*u/(h-u);else if(d===Ci)b=-(h+u)/(h-u),C=-2*h*u/(h-u);else if(d===Tc)b=-h/(h-u),C=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=v,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,u,h,d=Ci,m=!1){const p=this.elements,g=2/(i-e),v=2/(r-l),x=-(i+e)/(i-e),y=-(r+l)/(r-l);let b,C;if(m)b=1/(h-u),C=h/(h-u);else if(d===Ci)b=-2/(h-u),C=-(h+u)/(h-u);else if(d===Tc)b=-1/(h-u),C=-u/(h-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=v,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=b,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const ns=new tt,di=new We,YS=new tt(0,0,0),ZS=new tt(1,1,1),Ua=new tt,Ql=new tt,Yn=new tt,g_=new We,__=new Uo;class ia{constructor(e=0,i=0,r=0,l=ia.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],v=l[2],x=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(_e(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(_e(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-_e(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(_e(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-_e(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return g_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(g_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return __.setFromEuler(this),this.setFromQuaternion(__,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ia.DEFAULT_ORDER="XYZ";class Sd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jS=0;const v_=new tt,is=new Uo,ji=new We,Jl=new tt,Mo=new tt,KS=new tt,QS=new Uo,x_=new tt(1,0,0),S_=new tt(0,1,0),M_=new tt(0,0,1),y_={type:"added"},JS={type:"removed"},as={type:"childadded",child:null},jf={type:"childremoved",child:null};class Un extends Ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jS++}),this.uuid=Do(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Un.DEFAULT_UP.clone();const e=new tt,i=new ia,r=new Uo,l=new tt(1,1,1);function u(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new We},normalMatrix:{value:new oe}}),this.matrix=new We,this.matrixWorld=new We,this.matrixAutoUpdate=Un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return is.setFromAxisAngle(e,i),this.quaternion.multiply(is),this}rotateOnWorldAxis(e,i){return is.setFromAxisAngle(e,i),this.quaternion.premultiply(is),this}rotateX(e){return this.rotateOnAxis(x_,e)}rotateY(e){return this.rotateOnAxis(S_,e)}rotateZ(e){return this.rotateOnAxis(M_,e)}translateOnAxis(e,i){return v_.copy(e).applyQuaternion(this.quaternion),this.position.add(v_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(x_,e)}translateY(e){return this.translateOnAxis(S_,e)}translateZ(e){return this.translateOnAxis(M_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ji.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Jl.copy(e):Jl.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Mo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ji.lookAt(Mo,Jl,this.up):ji.lookAt(Jl,Mo,this.up),this.quaternion.setFromRotationMatrix(ji),l&&(ji.extractRotation(l.matrixWorld),is.setFromRotationMatrix(ji),this.quaternion.premultiply(is.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(y_),as.child=e,this.dispatchEvent(as),as.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(JS),jf.child=e,this.dispatchEvent(jf),jf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(ji),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(y_),as.child=e,this.dispatchEvent(as),as.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mo,e,KS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mo,QS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const v=m[p];u(e.shapes,v)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(e.materials,this.material[m]));l.material=d}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),g=h(e.images),v=h(e.shapes),x=h(e.skeletons),y=h(e.animations),b=h(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),y.length>0&&(r.animations=y),b.length>0&&(r.nodes=b)}return r.object=l,r;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Un.DEFAULT_UP=new tt(0,1,0);Un.DEFAULT_MATRIX_AUTO_UPDATE=!0;Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pi=new tt,Ki=new tt,Kf=new tt,Qi=new tt,rs=new tt,ss=new tt,E_=new tt,Qf=new tt,Jf=new tt,$f=new tt,th=new ze,eh=new ze,nh=new ze;class mi{constructor(e=new tt,i=new tt,r=new tt){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),pi.subVectors(e,i),l.cross(pi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){pi.subVectors(l,i),Ki.subVectors(r,i),Kf.subVectors(e,i);const h=pi.dot(pi),d=pi.dot(Ki),m=pi.dot(Kf),p=Ki.dot(Ki),g=Ki.dot(Kf),v=h*p-d*d;if(v===0)return u.set(0,0,0),null;const x=1/v,y=(p*m-d*g)*x,b=(h*g-d*m)*x;return u.set(1-y-b,b,y)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,Qi)===null?!1:Qi.x>=0&&Qi.y>=0&&Qi.x+Qi.y<=1}static getInterpolation(e,i,r,l,u,h,d,m){return this.getBarycoord(e,i,r,l,Qi)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,Qi.x),m.addScaledVector(h,Qi.y),m.addScaledVector(d,Qi.z),m)}static getInterpolatedAttribute(e,i,r,l,u,h){return th.setScalar(0),eh.setScalar(0),nh.setScalar(0),th.fromBufferAttribute(e,i),eh.fromBufferAttribute(e,r),nh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(th,u.x),h.addScaledVector(eh,u.y),h.addScaledVector(nh,u.z),h}static isFrontFacing(e,i,r,l){return pi.subVectors(r,i),Ki.subVectors(e,i),pi.cross(Ki).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pi.subVectors(this.c,this.b),Ki.subVectors(this.a,this.b),pi.cross(Ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return mi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return mi.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let h,d;rs.subVectors(l,r),ss.subVectors(u,r),Qf.subVectors(e,r);const m=rs.dot(Qf),p=ss.dot(Qf);if(m<=0&&p<=0)return i.copy(r);Jf.subVectors(e,l);const g=rs.dot(Jf),v=ss.dot(Jf);if(g>=0&&v<=g)return i.copy(l);const x=m*v-g*p;if(x<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(r).addScaledVector(rs,h);$f.subVectors(e,u);const y=rs.dot($f),b=ss.dot($f);if(b>=0&&y<=b)return i.copy(u);const C=y*p-m*b;if(C<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(r).addScaledVector(ss,d);const M=g*b-y*v;if(M<=0&&v-g>=0&&y-b>=0)return E_.subVectors(u,l),d=(v-g)/(v-g+(y-b)),i.copy(l).addScaledVector(E_,d);const _=1/(M+C+x);return h=C*_,d=x*_,i.copy(r).addScaledVector(rs,h).addScaledVector(ss,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const M0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},La={h:0,s:0,l:0},$l={h:0,s:0,l:0};function ih(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Ce{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ai){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ee.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Ee.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ee.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Ee.workingColorSpace){if(e=BS(e,1),i=_e(i,0,1),r=_e(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,h=2*r-u;this.r=ih(h,u,e+1/3),this.g=ih(h,u,e),this.b=ih(h,u,e-1/3)}return Ee.colorSpaceToWorking(this,l),this}setStyle(e,i=ai){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ai){const r=M0[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=na(e.r),this.g=na(e.g),this.b=na(e.b),this}copyLinearToSRGB(e){return this.r=ps(e.r),this.g=ps(e.g),this.b=ps(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ai){return Ee.workingToColorSpace(An.copy(this),e),Math.round(_e(An.r*255,0,255))*65536+Math.round(_e(An.g*255,0,255))*256+Math.round(_e(An.b*255,0,255))}getHexString(e=ai){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ee.workingColorSpace){Ee.workingToColorSpace(An.copy(this),i);const r=An.r,l=An.g,u=An.b,h=Math.max(r,l,u),d=Math.min(r,l,u);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const v=h-d;switch(p=g<=.5?v/(h+d):v/(2-h-d),h){case r:m=(l-u)/v+(l<u?6:0);break;case l:m=(u-r)/v+2;break;case u:m=(r-l)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,i=Ee.workingColorSpace){return Ee.workingToColorSpace(An.copy(this),i),e.r=An.r,e.g=An.g,e.b=An.b,e}getStyle(e=ai){Ee.workingToColorSpace(An.copy(this),e);const i=An.r,r=An.g,l=An.b;return e!==ai?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(La),this.setHSL(La.h+e,La.s+i,La.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(La),e.getHSL($l);const r=Ff(La.h,$l.h,i),l=Ff(La.s,$l.s,i),u=Ff(La.l,$l.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const An=new Ce;Ce.NAMES=M0;let $S=0;class No extends Ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$S++}),this.uuid=Do(),this.name="",this.type="Material",this.blending=hs,this.side=Ba,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mh,this.blendDst=yh,this.blendEquation=ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=c_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qr,this.stencilZFail=Qr,this.stencilZPass=Qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==hs&&(r.blending=this.blending),this.side!==Ba&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Mh&&(r.blendSrc=this.blendSrc),this.blendDst!==yh&&(r.blendDst=this.blendDst),this.blendEquation!==ur&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ms&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==c_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Qr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Qr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(e.textures),h=l(e.images);u.length>0&&(r.textures=u),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class y0 extends No{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ia,this.combine=l0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rn=new tt,tc=new Te;let tM=0;class si{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:tM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=u_,this.updateRanges=[],this.gpuType=ta,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)tc.fromBufferAttribute(this,i),tc.applyMatrix3(e),this.setXY(i,tc.x,tc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.applyMatrix3(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.applyMatrix4(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.applyNormalMatrix(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.transformDirection(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=vo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Bn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=vo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=vo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=vo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=vo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Bn(i,this.array),r=Bn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Bn(i,this.array),r=Bn(r,this.array),l=Bn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=Bn(i,this.array),r=Bn(r,this.array),l=Bn(l,this.array),u=Bn(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==u_&&(e.usage=this.usage),e}}class E0 extends si{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class T0 extends si{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class wi extends si{constructor(e,i,r){super(new Float32Array(e),i,r)}}let eM=0;const ii=new We,ah=new Un,os=new tt,Zn=new Lo,yo=new Lo,gn=new tt;class Ui extends Ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eM++}),this.uuid=Do(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(x0(e)?T0:E0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new oe().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ii.makeRotationFromQuaternion(e),this.applyMatrix4(ii),this}rotateX(e){return ii.makeRotationX(e),this.applyMatrix4(ii),this}rotateY(e){return ii.makeRotationY(e),this.applyMatrix4(ii),this}rotateZ(e){return ii.makeRotationZ(e),this.applyMatrix4(ii),this}translate(e,i,r){return ii.makeTranslation(e,i,r),this.applyMatrix4(ii),this}scale(e,i,r){return ii.makeScale(e,i,r),this.applyMatrix4(ii),this}lookAt(e){return ah.lookAt(e),ah.updateMatrix(),this.applyMatrix4(ah.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(os).negate(),this.translate(os.x,os.y,os.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new wi(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Lo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new tt(-1/0,-1/0,-1/0),new tt(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];Zn.setFromBufferAttribute(u),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new tt,1/0);return}if(e){const r=this.boundingSphere.center;if(Zn.setFromBufferAttribute(e),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];yo.setFromBufferAttribute(d),this.morphTargetsRelative?(gn.addVectors(Zn.min,yo.min),Zn.expandByPoint(gn),gn.addVectors(Zn.max,yo.max),Zn.expandByPoint(gn)):(Zn.expandByPoint(yo.min),Zn.expandByPoint(yo.max))}Zn.getCenter(r);let l=0;for(let u=0,h=e.count;u<h;u++)gn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(gn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)gn.fromBufferAttribute(d,p),m&&(os.fromBufferAttribute(e,p),gn.add(os)),l=Math.max(l,r.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new si(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let X=0;X<r.count;X++)d[X]=new tt,m[X]=new tt;const p=new tt,g=new tt,v=new tt,x=new Te,y=new Te,b=new Te,C=new tt,M=new tt;function _(X,R,w){p.fromBufferAttribute(r,X),g.fromBufferAttribute(r,R),v.fromBufferAttribute(r,w),x.fromBufferAttribute(u,X),y.fromBufferAttribute(u,R),b.fromBufferAttribute(u,w),g.sub(p),v.sub(p),y.sub(x),b.sub(x);const O=1/(y.x*b.y-b.x*y.y);isFinite(O)&&(C.copy(g).multiplyScalar(b.y).addScaledVector(v,-y.y).multiplyScalar(O),M.copy(v).multiplyScalar(y.x).addScaledVector(g,-b.x).multiplyScalar(O),d[X].add(C),d[R].add(C),d[w].add(C),m[X].add(M),m[R].add(M),m[w].add(M))}let H=this.groups;H.length===0&&(H=[{start:0,count:e.count}]);for(let X=0,R=H.length;X<R;++X){const w=H[X],O=w.start,ot=w.count;for(let it=O,lt=O+ot;it<lt;it+=3)_(e.getX(it+0),e.getX(it+1),e.getX(it+2))}const P=new tt,U=new tt,B=new tt,G=new tt;function I(X){B.fromBufferAttribute(l,X),G.copy(B);const R=d[X];P.copy(R),P.sub(B.multiplyScalar(B.dot(R))).normalize(),U.crossVectors(G,R);const O=U.dot(m[X])<0?-1:1;h.setXYZW(X,P.x,P.y,P.z,O)}for(let X=0,R=H.length;X<R;++X){const w=H[X],O=w.start,ot=w.count;for(let it=O,lt=O+ot;it<lt;it+=3)I(e.getX(it+0)),I(e.getX(it+1)),I(e.getX(it+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new si(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,y=r.count;x<y;x++)r.setXYZ(x,0,0,0);const l=new tt,u=new tt,h=new tt,d=new tt,m=new tt,p=new tt,g=new tt,v=new tt;if(e)for(let x=0,y=e.count;x<y;x+=3){const b=e.getX(x+0),C=e.getX(x+1),M=e.getX(x+2);l.fromBufferAttribute(i,b),u.fromBufferAttribute(i,C),h.fromBufferAttribute(i,M),g.subVectors(h,u),v.subVectors(l,u),g.cross(v),d.fromBufferAttribute(r,b),m.fromBufferAttribute(r,C),p.fromBufferAttribute(r,M),d.add(g),m.add(g),p.add(g),r.setXYZ(b,d.x,d.y,d.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let x=0,y=i.count;x<y;x+=3)l.fromBufferAttribute(i,x+0),u.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),g.subVectors(h,u),v.subVectors(l,u),g.cross(v),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)gn.fromBufferAttribute(e,i),gn.normalize(),e.setXYZ(i,gn.x,gn.y,gn.z)}toNonIndexed(){function e(d,m){const p=d.array,g=d.itemSize,v=d.normalized,x=new p.constructor(m.length*g);let y=0,b=0;for(let C=0,M=m.length;C<M;C++){d.isInterleavedBufferAttribute?y=m[C]*d.data.stride+d.offset:y=m[C]*g;for(let _=0;_<g;_++)x[b++]=p[y++]}return new si(x,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ui,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,r);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let g=0,v=p.length;g<v;g++){const x=p[g],y=e(x,r);m.push(y)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let v=0,x=p.length;v<x;v++){const y=p[v];g.push(y.toJSON(e.data))}g.length>0&&(l[m]=g,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const u=e.morphAttributes;for(const p in u){const g=[],v=u[p];for(let x=0,y=v.length;x<y;x++)g.push(v[x].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,g=h.length;p<g;p++){const v=h[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const T_=new We,ar=new xd,ec=new Rc,b_=new tt,nc=new tt,ic=new tt,ac=new tt,rh=new tt,rc=new tt,A_=new tt,sc=new tt;class ea extends Un{constructor(e=new Ui,i=new y0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(u&&d){rc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const g=d[m],v=u[m];g!==0&&(rh.fromBufferAttribute(v,e),h?rc.addScaledVector(rh,g):rc.addScaledVector(rh.sub(i),g))}i.add(rc)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ec.copy(r.boundingSphere),ec.applyMatrix4(u),ar.copy(e.ray).recast(e.near),!(ec.containsPoint(ar.origin)===!1&&(ar.intersectSphere(ec,b_)===null||ar.origin.distanceToSquared(b_)>(e.far-e.near)**2))&&(T_.copy(u).invert(),ar.copy(e.ray).applyMatrix4(T_),!(r.boundingBox!==null&&ar.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,ar)))}_computeIntersections(e,i,r){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,g=u.attributes.uv1,v=u.attributes.normal,x=u.groups,y=u.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,C=x.length;b<C;b++){const M=x[b],_=h[M.materialIndex],H=Math.max(M.start,y.start),P=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let U=H,B=P;U<B;U+=3){const G=d.getX(U),I=d.getX(U+1),X=d.getX(U+2);l=oc(this,_,e,r,p,g,v,G,I,X),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),C=Math.min(d.count,y.start+y.count);for(let M=b,_=C;M<_;M+=3){const H=d.getX(M),P=d.getX(M+1),U=d.getX(M+2);l=oc(this,h,e,r,p,g,v,H,P,U),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,C=x.length;b<C;b++){const M=x[b],_=h[M.materialIndex],H=Math.max(M.start,y.start),P=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let U=H,B=P;U<B;U+=3){const G=U,I=U+1,X=U+2;l=oc(this,_,e,r,p,g,v,G,I,X),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),C=Math.min(m.count,y.start+y.count);for(let M=b,_=C;M<_;M+=3){const H=M,P=M+1,U=M+2;l=oc(this,h,e,r,p,g,v,H,P,U),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function nM(o,e,i,r,l,u,h,d){let m;if(e.side===In?m=r.intersectTriangle(h,u,l,!0,d):m=r.intersectTriangle(l,u,h,e.side===Ba,d),m===null)return null;sc.copy(d),sc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(sc);return p<i.near||p>i.far?null:{distance:p,point:sc.clone(),object:o}}function oc(o,e,i,r,l,u,h,d,m,p){o.getVertexPosition(d,nc),o.getVertexPosition(m,ic),o.getVertexPosition(p,ac);const g=nM(o,e,i,r,nc,ic,ac,A_);if(g){const v=new tt;mi.getBarycoord(A_,nc,ic,ac,v),l&&(g.uv=mi.getInterpolatedAttribute(l,d,m,p,v,new Te)),u&&(g.uv1=mi.getInterpolatedAttribute(u,d,m,p,v,new Te)),h&&(g.normal=mi.getInterpolatedAttribute(h,d,m,p,v,new tt),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new tt,materialIndex:0};mi.getNormal(nc,ic,ac,x.normal),g.face=x,g.barycoord=v}return g}class Oo extends Ui{constructor(e=1,i=1,r=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],g=[],v=[];let x=0,y=0;b("z","y","x",-1,-1,r,i,e,h,u,0),b("z","y","x",1,-1,r,i,-e,h,u,1),b("x","z","y",1,1,e,r,i,l,h,2),b("x","z","y",1,-1,e,r,-i,l,h,3),b("x","y","z",1,-1,e,i,r,l,u,4),b("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new wi(p,3)),this.setAttribute("normal",new wi(g,3)),this.setAttribute("uv",new wi(v,2));function b(C,M,_,H,P,U,B,G,I,X,R){const w=U/I,O=B/X,ot=U/2,it=B/2,lt=G/2,ct=I+1,N=X+1;let q=0,W=0;const vt=new tt;for(let D=0;D<N;D++){const K=D*O-it;for(let mt=0;mt<ct;mt++){const St=mt*w-ot;vt[C]=St*H,vt[M]=K*P,vt[_]=lt,p.push(vt.x,vt.y,vt.z),vt[C]=0,vt[M]=0,vt[_]=G>0?1:-1,g.push(vt.x,vt.y,vt.z),v.push(mt/I),v.push(1-D/X),q+=1}}for(let D=0;D<X;D++)for(let K=0;K<I;K++){const mt=x+K+ct*D,St=x+K+ct*(D+1),At=x+(K+1)+ct*(D+1),J=x+(K+1)+ct*D;m.push(mt,St,J),m.push(St,At,J),W+=6}d.addGroup(y,W,R),y+=W,x+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function xs(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Dn(o){const e={};for(let i=0;i<o.length;i++){const r=xs(o[i]);for(const l in r)e[l]=r[l]}return e}function iM(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function b0(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ee.workingColorSpace}const aM={clone:xs,merge:Dn};var rM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ia extends No{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rM,this.fragmentShader=sM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xs(e.uniforms),this.uniformsGroups=iM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class A0 extends Un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new We,this.projectionMatrix=new We,this.projectionMatrixInverse=new We,this.coordinateSystem=Ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Na=new tt,R_=new Te,C_=new Te;class jn extends A0{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=sd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(If*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sd*2*Math.atan(Math.tan(If*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Na.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Na.x,Na.y).multiplyScalar(-e/Na.z),Na.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Na.x,Na.y).multiplyScalar(-e/Na.z)}getViewSize(e,i){return this.getViewBounds(e,R_,C_),i.subVectors(C_,R_)}setViewOffset(e,i,r,l,u,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(If*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const ls=-90,cs=1;class oM extends Un{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new jn(ls,cs,e,i);l.layers=this.layers,this.add(l);const u=new jn(ls,cs,e,i);u.layers=this.layers,this.add(u);const h=new jn(ls,cs,e,i);h.layers=this.layers,this.add(h);const d=new jn(ls,cs,e,i);d.layers=this.layers,this.add(d);const m=new jn(ls,cs,e,i);m.layers=this.layers,this.add(m);const p=new jn(ls,cs,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(e===Ci)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Tc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,g]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,l),e.render(i,g),e.setRenderTarget(v,x,y),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class R0 extends Fn{constructor(e=[],i=gs,r,l,u,h,d,m,p,g){super(e,i,r,l,u,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class lM extends mr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new R0(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Oo(5,5,5),u=new Ia({name:"CubemapFromEquirect",uniforms:xs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:In,blending:Pa});u.uniforms.tEquirect.value=i;const h=new ea(l,u),d=i.minFilter;return i.minFilter===dr&&(i.minFilter=Ri),new oM(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const u=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(u)}}class lc extends Un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cM={type:"move"};class sh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new tt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new tt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new tt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new tt),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const C of e.hand.values()){const M=i.getJointPose(C,r),_=this._getHandJoint(p,C);M!==null&&(_.matrix.fromArray(M.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=M.radius),_.visible=M!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],x=g.position.distanceTo(v.position),y=.02,b=.005;p.inputState.pinching&&x>y+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=y-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(cM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new lc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class uM extends Un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ia,this.environmentIntensity=1,this.environmentRotation=new ia,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const oh=new tt,fM=new tt,hM=new oe;class lr{constructor(e=new tt(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=oh.subVectors(r,i).cross(fM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(oh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||hM.getNormalMatrix(e),l=this.coplanarPoint(oh).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rr=new Rc,dM=new Te(.5,.5),cc=new tt;class Md{constructor(e=new lr,i=new lr,r=new lr,l=new lr,u=new lr,h=new lr){this.planes=[e,i,r,l,u,h]}set(e,i,r,l,u,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Ci,r=!1){const l=this.planes,u=e.elements,h=u[0],d=u[1],m=u[2],p=u[3],g=u[4],v=u[5],x=u[6],y=u[7],b=u[8],C=u[9],M=u[10],_=u[11],H=u[12],P=u[13],U=u[14],B=u[15];if(l[0].setComponents(p-h,y-g,_-b,B-H).normalize(),l[1].setComponents(p+h,y+g,_+b,B+H).normalize(),l[2].setComponents(p+d,y+v,_+C,B+P).normalize(),l[3].setComponents(p-d,y-v,_-C,B-P).normalize(),r)l[4].setComponents(m,x,M,U).normalize(),l[5].setComponents(p-m,y-x,_-M,B-U).normalize();else if(l[4].setComponents(p-m,y-x,_-M,B-U).normalize(),i===Ci)l[5].setComponents(p+m,y+x,_+M,B+U).normalize();else if(i===Tc)l[5].setComponents(m,x,M,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),rr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rr)}intersectsSprite(e){rr.center.set(0,0,0);const i=dM.distanceTo(e.center);return rr.radius=.7071067811865476+i,rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(rr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(cc.x=l.normal.x>0?e.max.x:e.min.x,cc.y=l.normal.y>0?e.max.y:e.min.y,cc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(cc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Sc extends No{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const w_=new We,od=new xd,uc=new Rc,fc=new tt;class lh extends Un{constructor(e=new Ui,i=new Sc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,u=e.params.Points.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),uc.copy(r.boundingSphere),uc.applyMatrix4(l),uc.radius+=u,e.ray.intersectsSphere(uc)===!1)return;w_.copy(l).invert(),od.copy(e.ray).applyMatrix4(w_);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=r.index,v=r.attributes.position;if(p!==null){const x=Math.max(0,h.start),y=Math.min(p.count,h.start+h.count);for(let b=x,C=y;b<C;b++){const M=p.getX(b);fc.fromBufferAttribute(v,M),D_(fc,M,m,l,e,i,this)}}else{const x=Math.max(0,h.start),y=Math.min(v.count,h.start+h.count);for(let b=x,C=y;b<C;b++)fc.fromBufferAttribute(v,b),D_(fc,b,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function D_(o,e,i,r,l,u,h){const d=od.distanceSqToPoint(o);if(d<i){const m=new tt;od.closestPointToPoint(o,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;u.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:h})}}class C0 extends Fn{constructor(e,i,r=pr,l,u,h,d=_i,m=_i,p,g=Ro,v=1){if(g!==Ro&&g!==Co)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:i,depth:v};super(x,l,u,h,d,m,g,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Po extends Ui{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,g=m+1,v=e/d,x=i/m,y=[],b=[],C=[],M=[];for(let _=0;_<g;_++){const H=_*x-h;for(let P=0;P<p;P++){const U=P*v-u;b.push(U,-H,0),C.push(0,0,1),M.push(P/d),M.push(1-_/m)}}for(let _=0;_<m;_++)for(let H=0;H<d;H++){const P=H+p*_,U=H+p*(_+1),B=H+1+p*(_+1),G=H+1+p*_;y.push(P,U,G),y.push(U,B,G)}this.setIndex(y),this.setAttribute("position",new wi(b,3)),this.setAttribute("normal",new wi(C,3)),this.setAttribute("uv",new wi(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Po(e.width,e.height,e.widthSegments,e.heightSegments)}}class yd extends Ui{constructor(e=1,i=.4,r=12,l=48,u=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:i,radialSegments:r,tubularSegments:l,arc:u},r=Math.floor(r),l=Math.floor(l);const h=[],d=[],m=[],p=[],g=new tt,v=new tt,x=new tt;for(let y=0;y<=r;y++)for(let b=0;b<=l;b++){const C=b/l*u,M=y/r*Math.PI*2;v.x=(e+i*Math.cos(M))*Math.cos(C),v.y=(e+i*Math.cos(M))*Math.sin(C),v.z=i*Math.sin(M),d.push(v.x,v.y,v.z),g.x=e*Math.cos(C),g.y=e*Math.sin(C),x.subVectors(v,g).normalize(),m.push(x.x,x.y,x.z),p.push(b/l),p.push(y/r)}for(let y=1;y<=r;y++)for(let b=1;b<=l;b++){const C=(l+1)*y+b-1,M=(l+1)*(y-1)+b-1,_=(l+1)*(y-1)+b,H=(l+1)*y+b;h.push(C,M,H),h.push(M,_,H)}this.setIndex(h),this.setAttribute("position",new wi(d,3)),this.setAttribute("normal",new wi(m,3)),this.setAttribute("uv",new wi(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yd(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class pM extends No{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=AS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class mM extends No{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class w0 extends Un{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const ch=new We,U_=new tt,L_=new tt;class gM{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Te(512,512),this.mapType=Di,this.map=null,this.mapPass=null,this.matrix=new We,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Md,this._frameExtents=new Te(1,1),this._viewportCount=1,this._viewports=[new ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;U_.setFromMatrixPosition(e.matrixWorld),i.position.copy(U_),L_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(L_),i.updateMatrixWorld(),ch.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ch,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(ch)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const N_=new We,Eo=new tt,uh=new tt;class _M extends gM{constructor(){super(new jn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Te(4,2),this._viewportCount=6,this._viewports=[new ze(2,1,1,1),new ze(0,1,1,1),new ze(3,1,1,1),new ze(1,1,1,1),new ze(3,0,1,1),new ze(1,0,1,1)],this._cubeDirections=[new tt(1,0,0),new tt(-1,0,0),new tt(0,0,1),new tt(0,0,-1),new tt(0,1,0),new tt(0,-1,0)],this._cubeUps=[new tt(0,1,0),new tt(0,1,0),new tt(0,1,0),new tt(0,1,0),new tt(0,0,1),new tt(0,0,-1)]}updateMatrices(e,i=0){const r=this.camera,l=this.matrix,u=e.distance||r.far;u!==r.far&&(r.far=u,r.updateProjectionMatrix()),Eo.setFromMatrixPosition(e.matrixWorld),r.position.copy(Eo),uh.copy(r.position),uh.add(this._cubeDirections[i]),r.up.copy(this._cubeUps[i]),r.lookAt(uh),r.updateMatrixWorld(),l.makeTranslation(-Eo.x,-Eo.y,-Eo.z),N_.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(N_,r.coordinateSystem,r.reversedDepth)}}class vM extends w0{constructor(e,i,r=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new _M}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class xM extends A0{constructor(e=-1,i=1,r=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,h=r+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class SM extends w0{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class MM extends jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const O_=new We;class yM{constructor(e,i,r=0,l=1/0){this.ray=new xd(e,i),this.near=r,this.far=l,this.camera=null,this.layers=new Sd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return O_.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(O_),this}intersectObject(e,i=!0,r=[]){return ld(e,this,r,i),r.sort(P_),r}intersectObjects(e,i=!0,r=[]){for(let l=0,u=e.length;l<u;l++)ld(e[l],this,r,i);return r.sort(P_),r}}function P_(o,e){return o.distance-e.distance}function ld(o,e,i,r){let l=!0;if(o.layers.test(e.layers)&&o.raycast(e,i)===!1&&(l=!1),l===!0&&r===!0){const u=o.children;for(let h=0,d=u.length;h<d;h++)ld(u[h],e,i,!0)}}function z_(o,e,i,r){const l=EM(r);switch(i){case d0:return o*e;case m0:return o*e/l.components*l.byteLength;case md:return o*e/l.components*l.byteLength;case g0:return o*e*2/l.components*l.byteLength;case gd:return o*e*2/l.components*l.byteLength;case p0:return o*e*3/l.components*l.byteLength;case gi:return o*e*4/l.components*l.byteLength;case _d:return o*e*4/l.components*l.byteLength;case mc:case gc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case _c:case vc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Ph:case Bh:return Math.max(o,16)*Math.max(e,8)/4;case Oh:case zh:return Math.max(o,8)*Math.max(e,8)/2;case Ih:case Fh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Hh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Gh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Vh:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case kh:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Xh:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Wh:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case qh:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Yh:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Zh:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case jh:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Kh:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Qh:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Jh:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case $h:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case td:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case xc:case ed:case nd:return Math.ceil(o/4)*Math.ceil(e/4)*16;case _0:case id:return Math.ceil(o/4)*Math.ceil(e/4)*8;case ad:case rd:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function EM(o){switch(o){case Di:case u0:return{byteLength:1,components:1};case bo:case f0:case wo:return{byteLength:2,components:1};case dd:case pd:return{byteLength:2,components:4};case pr:case hd:case ta:return{byteLength:4,components:1};case h0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function D0(){let o=null,e=!1,i=null,r=null;function l(u,h){i(u,h),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function TM(o){const e=new WeakMap;function i(d,m){const p=d.array,g=d.usage,v=p.byteLength,x=o.createBuffer();o.bindBuffer(m,x),o.bufferData(m,p,g),d.onUploadCallback();let y;if(p instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=o.SHORT;else if(p instanceof Uint32Array)y=o.UNSIGNED_INT;else if(p instanceof Int32Array)y=o.INT;else if(p instanceof Int8Array)y=o.BYTE;else if(p instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,m,p){const g=m.array,v=m.updateRanges;if(o.bindBuffer(p,d),v.length===0)o.bufferSubData(p,0,g);else{v.sort((y,b)=>y.start-b.start);let x=0;for(let y=1;y<v.length;y++){const b=v[x],C=v[y];C.start<=b.start+b.count+1?b.count=Math.max(b.count,C.start+C.count-b.start):(++x,v[x]=C)}v.length=x+1;for(let y=0,b=v.length;y<b;y++){const C=v[y];o.bufferSubData(p,C.start*g.BYTES_PER_ELEMENT,g,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var bM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,AM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,RM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,CM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,DM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,UM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,LM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,NM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,OM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,PM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,BM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,IM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,FM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,HM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,GM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,VM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,XM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,WM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,YM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ZM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,jM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,KM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,QM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,JM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$M=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ty=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ey="gl_FragColor = linearToOutputTexel( gl_FragColor );",ny=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,iy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ay=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ry=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,sy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,oy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ly=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,dy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,py=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,my=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,_y=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,vy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,My=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ey=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ty=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,by=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ay=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ry=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Uy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ly=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ny=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Oy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Py=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,By=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Iy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Gy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ky=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Xy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Zy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ky=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$y=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,tE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,aE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,oE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,cE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,uE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,hE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,pE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_E=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,SE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ME=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,EE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const TE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,UE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,LE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,NE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,OE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,PE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,BE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,IE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,FE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,kE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,WE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,jE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,QE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,$E=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ue={alphahash_fragment:bM,alphahash_pars_fragment:AM,alphamap_fragment:RM,alphamap_pars_fragment:CM,alphatest_fragment:wM,alphatest_pars_fragment:DM,aomap_fragment:UM,aomap_pars_fragment:LM,batching_pars_vertex:NM,batching_vertex:OM,begin_vertex:PM,beginnormal_vertex:zM,bsdfs:BM,iridescence_fragment:IM,bumpmap_pars_fragment:FM,clipping_planes_fragment:HM,clipping_planes_pars_fragment:GM,clipping_planes_pars_vertex:VM,clipping_planes_vertex:kM,color_fragment:XM,color_pars_fragment:WM,color_pars_vertex:qM,color_vertex:YM,common:ZM,cube_uv_reflection_fragment:jM,defaultnormal_vertex:KM,displacementmap_pars_vertex:QM,displacementmap_vertex:JM,emissivemap_fragment:$M,emissivemap_pars_fragment:ty,colorspace_fragment:ey,colorspace_pars_fragment:ny,envmap_fragment:iy,envmap_common_pars_fragment:ay,envmap_pars_fragment:ry,envmap_pars_vertex:sy,envmap_physical_pars_fragment:_y,envmap_vertex:oy,fog_vertex:ly,fog_pars_vertex:cy,fog_fragment:uy,fog_pars_fragment:fy,gradientmap_pars_fragment:hy,lightmap_pars_fragment:dy,lights_lambert_fragment:py,lights_lambert_pars_fragment:my,lights_pars_begin:gy,lights_toon_fragment:vy,lights_toon_pars_fragment:xy,lights_phong_fragment:Sy,lights_phong_pars_fragment:My,lights_physical_fragment:yy,lights_physical_pars_fragment:Ey,lights_fragment_begin:Ty,lights_fragment_maps:by,lights_fragment_end:Ay,logdepthbuf_fragment:Ry,logdepthbuf_pars_fragment:Cy,logdepthbuf_pars_vertex:wy,logdepthbuf_vertex:Dy,map_fragment:Uy,map_pars_fragment:Ly,map_particle_fragment:Ny,map_particle_pars_fragment:Oy,metalnessmap_fragment:Py,metalnessmap_pars_fragment:zy,morphinstance_vertex:By,morphcolor_vertex:Iy,morphnormal_vertex:Fy,morphtarget_pars_vertex:Hy,morphtarget_vertex:Gy,normal_fragment_begin:Vy,normal_fragment_maps:ky,normal_pars_fragment:Xy,normal_pars_vertex:Wy,normal_vertex:qy,normalmap_pars_fragment:Yy,clearcoat_normal_fragment_begin:Zy,clearcoat_normal_fragment_maps:jy,clearcoat_pars_fragment:Ky,iridescence_pars_fragment:Qy,opaque_fragment:Jy,packing:$y,premultiplied_alpha_fragment:tE,project_vertex:eE,dithering_fragment:nE,dithering_pars_fragment:iE,roughnessmap_fragment:aE,roughnessmap_pars_fragment:rE,shadowmap_pars_fragment:sE,shadowmap_pars_vertex:oE,shadowmap_vertex:lE,shadowmask_pars_fragment:cE,skinbase_vertex:uE,skinning_pars_vertex:fE,skinning_vertex:hE,skinnormal_vertex:dE,specularmap_fragment:pE,specularmap_pars_fragment:mE,tonemapping_fragment:gE,tonemapping_pars_fragment:_E,transmission_fragment:vE,transmission_pars_fragment:xE,uv_pars_fragment:SE,uv_pars_vertex:ME,uv_vertex:yE,worldpos_vertex:EE,background_vert:TE,background_frag:bE,backgroundCube_vert:AE,backgroundCube_frag:RE,cube_vert:CE,cube_frag:wE,depth_vert:DE,depth_frag:UE,distanceRGBA_vert:LE,distanceRGBA_frag:NE,equirect_vert:OE,equirect_frag:PE,linedashed_vert:zE,linedashed_frag:BE,meshbasic_vert:IE,meshbasic_frag:FE,meshlambert_vert:HE,meshlambert_frag:GE,meshmatcap_vert:VE,meshmatcap_frag:kE,meshnormal_vert:XE,meshnormal_frag:WE,meshphong_vert:qE,meshphong_frag:YE,meshphysical_vert:ZE,meshphysical_frag:jE,meshtoon_vert:KE,meshtoon_frag:QE,points_vert:JE,points_frag:$E,shadow_vert:tT,shadow_frag:eT,sprite_vert:nT,sprite_frag:iT},Ot={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},envMapRotation:{value:new oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},Ai={basic:{uniforms:Dn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:Dn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Ce(0)}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:Dn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:Dn([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:Dn([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new Ce(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:Dn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:Dn([Ot.points,Ot.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:Dn([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:Dn([Ot.common,Ot.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:Dn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:Dn([Ot.sprite,Ot.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new oe}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distanceRGBA:{uniforms:Dn([Ot.common,Ot.displacementmap,{referencePosition:{value:new tt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distanceRGBA_vert,fragmentShader:ue.distanceRGBA_frag},shadow:{uniforms:Dn([Ot.lights,Ot.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};Ai.physical={uniforms:Dn([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new Te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new Te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};const hc={r:0,b:0,g:0},sr=new ia,aT=new We;function rT(o,e,i,r,l,u,h){const d=new Ce(0);let m=u===!0?0:1,p,g,v=null,x=0,y=null;function b(P){let U=P.isScene===!0?P.background:null;return U&&U.isTexture&&(U=(P.backgroundBlurriness>0?i:e).get(U)),U}function C(P){let U=!1;const B=b(P);B===null?_(d,m):B&&B.isColor&&(_(B,1),U=!0);const G=o.xr.getEnvironmentBlendMode();G==="additive"?r.buffers.color.setClear(0,0,0,1,h):G==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||U)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(P,U){const B=b(U);B&&(B.isCubeTexture||B.mapping===Ac)?(g===void 0&&(g=new ea(new Oo(1,1,1),new Ia({name:"BackgroundCubeMaterial",uniforms:xs(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(G,I,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),sr.copy(U.backgroundRotation),sr.x*=-1,sr.y*=-1,sr.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(sr.y*=-1,sr.z*=-1),g.material.uniforms.envMap.value=B,g.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(aT.makeRotationFromEuler(sr)),g.material.toneMapped=Ee.getTransfer(B.colorSpace)!==Pe,(v!==B||x!==B.version||y!==o.toneMapping)&&(g.material.needsUpdate=!0,v=B,x=B.version,y=o.toneMapping),g.layers.enableAll(),P.unshift(g,g.geometry,g.material,0,0,null)):B&&B.isTexture&&(p===void 0&&(p=new ea(new Po(2,2),new Ia({name:"BackgroundMaterial",uniforms:xs(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:Ba,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=B,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.toneMapped=Ee.getTransfer(B.colorSpace)!==Pe,B.matrixAutoUpdate===!0&&B.updateMatrix(),p.material.uniforms.uvTransform.value.copy(B.matrix),(v!==B||x!==B.version||y!==o.toneMapping)&&(p.material.needsUpdate=!0,v=B,x=B.version,y=o.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null))}function _(P,U){P.getRGB(hc,b0(o)),r.buffers.color.setClear(hc.r,hc.g,hc.b,U,h)}function H(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(P,U=1){d.set(P),m=U,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(P){m=P,_(d,m)},render:C,addToRenderList:M,dispose:H}}function sT(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=x(null);let u=l,h=!1;function d(w,O,ot,it,lt){let ct=!1;const N=v(it,ot,O);u!==N&&(u=N,p(u.object)),ct=y(w,it,ot,lt),ct&&b(w,it,ot,lt),lt!==null&&e.update(lt,o.ELEMENT_ARRAY_BUFFER),(ct||h)&&(h=!1,U(w,O,ot,it),lt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(lt).buffer))}function m(){return o.createVertexArray()}function p(w){return o.bindVertexArray(w)}function g(w){return o.deleteVertexArray(w)}function v(w,O,ot){const it=ot.wireframe===!0;let lt=r[w.id];lt===void 0&&(lt={},r[w.id]=lt);let ct=lt[O.id];ct===void 0&&(ct={},lt[O.id]=ct);let N=ct[it];return N===void 0&&(N=x(m()),ct[it]=N),N}function x(w){const O=[],ot=[],it=[];for(let lt=0;lt<i;lt++)O[lt]=0,ot[lt]=0,it[lt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:ot,attributeDivisors:it,object:w,attributes:{},index:null}}function y(w,O,ot,it){const lt=u.attributes,ct=O.attributes;let N=0;const q=ot.getAttributes();for(const W in q)if(q[W].location>=0){const D=lt[W];let K=ct[W];if(K===void 0&&(W==="instanceMatrix"&&w.instanceMatrix&&(K=w.instanceMatrix),W==="instanceColor"&&w.instanceColor&&(K=w.instanceColor)),D===void 0||D.attribute!==K||K&&D.data!==K.data)return!0;N++}return u.attributesNum!==N||u.index!==it}function b(w,O,ot,it){const lt={},ct=O.attributes;let N=0;const q=ot.getAttributes();for(const W in q)if(q[W].location>=0){let D=ct[W];D===void 0&&(W==="instanceMatrix"&&w.instanceMatrix&&(D=w.instanceMatrix),W==="instanceColor"&&w.instanceColor&&(D=w.instanceColor));const K={};K.attribute=D,D&&D.data&&(K.data=D.data),lt[W]=K,N++}u.attributes=lt,u.attributesNum=N,u.index=it}function C(){const w=u.newAttributes;for(let O=0,ot=w.length;O<ot;O++)w[O]=0}function M(w){_(w,0)}function _(w,O){const ot=u.newAttributes,it=u.enabledAttributes,lt=u.attributeDivisors;ot[w]=1,it[w]===0&&(o.enableVertexAttribArray(w),it[w]=1),lt[w]!==O&&(o.vertexAttribDivisor(w,O),lt[w]=O)}function H(){const w=u.newAttributes,O=u.enabledAttributes;for(let ot=0,it=O.length;ot<it;ot++)O[ot]!==w[ot]&&(o.disableVertexAttribArray(ot),O[ot]=0)}function P(w,O,ot,it,lt,ct,N){N===!0?o.vertexAttribIPointer(w,O,ot,lt,ct):o.vertexAttribPointer(w,O,ot,it,lt,ct)}function U(w,O,ot,it){C();const lt=it.attributes,ct=ot.getAttributes(),N=O.defaultAttributeValues;for(const q in ct){const W=ct[q];if(W.location>=0){let vt=lt[q];if(vt===void 0&&(q==="instanceMatrix"&&w.instanceMatrix&&(vt=w.instanceMatrix),q==="instanceColor"&&w.instanceColor&&(vt=w.instanceColor)),vt!==void 0){const D=vt.normalized,K=vt.itemSize,mt=e.get(vt);if(mt===void 0)continue;const St=mt.buffer,At=mt.type,J=mt.bytesPerElement,ft=At===o.INT||At===o.UNSIGNED_INT||vt.gpuType===hd;if(vt.isInterleavedBufferAttribute){const Mt=vt.data,wt=Mt.stride,Ht=vt.offset;if(Mt.isInstancedInterleavedBuffer){for(let Vt=0;Vt<W.locationSize;Vt++)_(W.location+Vt,Mt.meshPerAttribute);w.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let Vt=0;Vt<W.locationSize;Vt++)M(W.location+Vt);o.bindBuffer(o.ARRAY_BUFFER,St);for(let Vt=0;Vt<W.locationSize;Vt++)P(W.location+Vt,K/W.locationSize,At,D,wt*J,(Ht+K/W.locationSize*Vt)*J,ft)}else{if(vt.isInstancedBufferAttribute){for(let Mt=0;Mt<W.locationSize;Mt++)_(W.location+Mt,vt.meshPerAttribute);w.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let Mt=0;Mt<W.locationSize;Mt++)M(W.location+Mt);o.bindBuffer(o.ARRAY_BUFFER,St);for(let Mt=0;Mt<W.locationSize;Mt++)P(W.location+Mt,K/W.locationSize,At,D,K*J,K/W.locationSize*Mt*J,ft)}}else if(N!==void 0){const D=N[q];if(D!==void 0)switch(D.length){case 2:o.vertexAttrib2fv(W.location,D);break;case 3:o.vertexAttrib3fv(W.location,D);break;case 4:o.vertexAttrib4fv(W.location,D);break;default:o.vertexAttrib1fv(W.location,D)}}}}H()}function B(){X();for(const w in r){const O=r[w];for(const ot in O){const it=O[ot];for(const lt in it)g(it[lt].object),delete it[lt];delete O[ot]}delete r[w]}}function G(w){if(r[w.id]===void 0)return;const O=r[w.id];for(const ot in O){const it=O[ot];for(const lt in it)g(it[lt].object),delete it[lt];delete O[ot]}delete r[w.id]}function I(w){for(const O in r){const ot=r[O];if(ot[w.id]===void 0)continue;const it=ot[w.id];for(const lt in it)g(it[lt].object),delete it[lt];delete ot[w.id]}}function X(){R(),h=!0,u!==l&&(u=l,p(u.object))}function R(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:X,resetDefaultState:R,dispose:B,releaseStatesOfGeometry:G,releaseStatesOfProgram:I,initAttributes:C,enableAttribute:M,disableUnusedAttributes:H}}function oT(o,e,i){let r;function l(p){r=p}function u(p,g){o.drawArrays(r,p,g),i.update(g,r,1)}function h(p,g,v){v!==0&&(o.drawArraysInstanced(r,p,g,v),i.update(g,r,v))}function d(p,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,v);let y=0;for(let b=0;b<v;b++)y+=g[b];i.update(y,r,1)}function m(p,g,v,x){if(v===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let b=0;b<p.length;b++)h(p[b],g[b],x[b]);else{y.multiDrawArraysInstancedWEBGL(r,p,0,g,0,x,0,v);let b=0;for(let C=0;C<v;C++)b+=g[C]*x[C];i.update(b,r,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function lT(o,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(I){return!(I!==gi&&r.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(I){const X=I===wo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Di&&r.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==ta&&!X)}function m(I){if(I==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),H=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),P=o.getParameter(o.MAX_VARYING_VECTORS),U=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),B=b>0,G=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:x,maxTextures:y,maxVertexTextures:b,maxTextureSize:C,maxCubemapSize:M,maxAttributes:_,maxVertexUniforms:H,maxVaryings:P,maxFragmentUniforms:U,vertexTextures:B,maxSamples:G}}function cT(o){const e=this;let i=null,r=0,l=!1,u=!1;const h=new lr,d=new oe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const y=v.length!==0||x||r!==0||l;return l=x,r=v.length,y},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,x){i=g(v,x,0)},this.setState=function(v,x,y){const b=v.clippingPlanes,C=v.clipIntersection,M=v.clipShadows,_=o.get(v);if(!l||b===null||b.length===0||u&&!M)u?g(null):p();else{const H=u?0:r,P=H*4;let U=_.clippingState||null;m.value=U,U=g(b,x,P,y);for(let B=0;B!==P;++B)U[B]=i[B];_.clippingState=U,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=H}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(v,x,y,b){const C=v!==null?v.length:0;let M=null;if(C!==0){if(M=m.value,b!==!0||M===null){const _=y+C*4,H=x.matrixWorldInverse;d.getNormalMatrix(H),(M===null||M.length<_)&&(M=new Float32Array(_));for(let P=0,U=y;P!==C;++P,U+=4)h.copy(v[P]).applyMatrix4(H,d),h.normal.toArray(M,U),M[U+3]=h.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,M}}function uT(o){let e=new WeakMap;function i(h,d){return d===Dh?h.mapping=gs:d===Uh&&(h.mapping=_s),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Dh||d===Uh)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new lM(m.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const fs=4,B_=[.125,.215,.35,.446,.526,.582],fr=20,fh=new xM,I_=new Ce;let hh=null,dh=0,ph=0,mh=!1;const cr=(1+Math.sqrt(5))/2,us=1/cr,F_=[new tt(-cr,us,0),new tt(cr,us,0),new tt(-us,0,cr),new tt(us,0,cr),new tt(0,cr,-us),new tt(0,cr,us),new tt(-1,1,-1),new tt(1,1,-1),new tt(-1,1,1),new tt(1,1,1)],fT=new tt;class H_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100,u={}){const{size:h=256,position:d=fT}=u;hh=this._renderer.getRenderTarget(),dh=this._renderer.getActiveCubeFace(),ph=this._renderer.getActiveMipmapLevel(),mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=k_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=V_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(hh,dh,ph),this._renderer.xr.enabled=mh,e.scissorTest=!1,dc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===gs||e.mapping===_s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hh=this._renderer.getRenderTarget(),dh=this._renderer.getActiveCubeFace(),ph=this._renderer.getActiveMipmapLevel(),mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ri,minFilter:Ri,generateMipmaps:!1,type:wo,format:gi,colorSpace:vs,depthBuffer:!1},l=G_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=G_(e,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hT(u)),this._blurMaterial=dT(u,e,i)}return l}_compileMaterial(e){const i=new ea(this._lodPlanes[0],e);this._renderer.compile(i,fh)}_sceneToCubeUV(e,i,r,l,u){const m=new jn(90,1,i,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,y=v.toneMapping;v.getClearColor(I_),v.toneMapping=za,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null));const C=new y0({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1}),M=new ea(new Oo,C);let _=!1;const H=e.background;H?H.isColor&&(C.color.copy(H),e.background=null,_=!0):(C.color.copy(I_),_=!0);for(let P=0;P<6;P++){const U=P%3;U===0?(m.up.set(0,p[P],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+g[P],u.y,u.z)):U===1?(m.up.set(0,0,p[P]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+g[P],u.z)):(m.up.set(0,p[P],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+g[P]));const B=this._cubeSize;dc(l,U*B,P>2?B:0,B,B),v.setRenderTarget(l),_&&v.render(M,m),v.render(e,m)}M.geometry.dispose(),M.material.dispose(),v.toneMapping=y,v.autoClear=x,e.background=H}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===gs||e.mapping===_s;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=k_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=V_());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new ea(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const m=this._cubeSize;dc(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,fh)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=F_[(l-u-1)%F_.length];this._blur(e,u-1,u,h,d)}i.autoClear=r}_blur(e,i,r,l,u){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",u),this._halfBlur(h,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new ea(this._lodPlanes[l],p),x=p.uniforms,y=this._sizeLods[r]-1,b=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*fr-1),C=u/b,M=isFinite(u)?1+Math.floor(g*C):fr;M>fr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${fr}`);const _=[];let H=0;for(let I=0;I<fr;++I){const X=I/C,R=Math.exp(-X*X/2);_.push(R),I===0?H+=R:I<M&&(H+=2*R)}for(let I=0;I<_.length;I++)_[I]=_[I]/H;x.envMap.value=e.texture,x.samples.value=M,x.weights.value=_,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:P}=this;x.dTheta.value=b,x.mipInt.value=P-r;const U=this._sizeLods[l],B=3*U*(l>P-fs?l-P+fs:0),G=4*(this._cubeSize-U);dc(i,B,G,3*U,2*U),m.setRenderTarget(i),m.render(v,fh)}}function hT(o){const e=[],i=[],r=[];let l=o;const u=o-fs+1+B_.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-fs?m=B_[h-o+fs-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),g=-p,v=1+p,x=[g,g,v,g,v,v,g,g,v,v,g,v],y=6,b=6,C=3,M=2,_=1,H=new Float32Array(C*b*y),P=new Float32Array(M*b*y),U=new Float32Array(_*b*y);for(let G=0;G<y;G++){const I=G%3*2/3-1,X=G>2?0:-1,R=[I,X,0,I+2/3,X,0,I+2/3,X+1,0,I,X,0,I+2/3,X+1,0,I,X+1,0];H.set(R,C*b*G),P.set(x,M*b*G);const w=[G,G,G,G,G,G];U.set(w,_*b*G)}const B=new Ui;B.setAttribute("position",new si(H,C)),B.setAttribute("uv",new si(P,M)),B.setAttribute("faceIndex",new si(U,_)),e.push(B),l>fs&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function G_(o,e,i){const r=new mr(o,e,i);return r.texture.mapping=Ac,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function dc(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function dT(o,e,i){const r=new Float32Array(fr),l=new tt(0,1,0);return new Ia({name:"SphericalGaussianBlur",defines:{n:fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Ed(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function V_(){return new Ia({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ed(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function k_(){return new Ia({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ed(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function Ed(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function pT(o){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===Dh||m===Uh,g=m===gs||m===_s;if(p||g){let v=e.get(d);const x=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new H_(o)),v=p?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const y=d.image;return p&&y&&y.height>0||g&&y&&l(y)?(i===null&&(i=new H_(o)),v=p?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",u),v.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function mT(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&ds("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function gT(o,e,i,r){const l={},u=new WeakMap;function h(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const b in x.attributes)e.remove(x.attributes[b]);x.removeEventListener("dispose",h),delete l[x.id];const y=u.get(x);y&&(e.remove(y),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(v,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function m(v){const x=v.attributes;for(const y in x)e.update(x[y],o.ARRAY_BUFFER)}function p(v){const x=[],y=v.index,b=v.attributes.position;let C=0;if(y!==null){const H=y.array;C=y.version;for(let P=0,U=H.length;P<U;P+=3){const B=H[P+0],G=H[P+1],I=H[P+2];x.push(B,G,G,I,I,B)}}else if(b!==void 0){const H=b.array;C=b.version;for(let P=0,U=H.length/3-1;P<U;P+=3){const B=P+0,G=P+1,I=P+2;x.push(B,G,G,I,I,B)}}else return;const M=new(x0(x)?T0:E0)(x,1);M.version=C;const _=u.get(v);_&&e.remove(_),u.set(v,M)}function g(v){const x=u.get(v);if(x){const y=v.index;y!==null&&x.version<y.version&&p(v)}else p(v);return u.get(v)}return{get:d,update:m,getWireframeAttribute:g}}function _T(o,e,i){let r;function l(x){r=x}let u,h;function d(x){u=x.type,h=x.bytesPerElement}function m(x,y){o.drawElements(r,y,u,x*h),i.update(y,r,1)}function p(x,y,b){b!==0&&(o.drawElementsInstanced(r,y,u,x*h,b),i.update(y,r,b))}function g(x,y,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,u,x,0,b);let M=0;for(let _=0;_<b;_++)M+=y[_];i.update(M,r,1)}function v(x,y,b,C){if(b===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let _=0;_<x.length;_++)p(x[_]/h,y[_],C[_]);else{M.multiDrawElementsInstancedWEBGL(r,y,0,u,x,0,C,0,b);let _=0;for(let H=0;H<b;H++)_+=y[H]*C[H];i.update(_,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function vT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function xT(o,e,i){const r=new WeakMap,l=new ze;function u(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let x=r.get(d);if(x===void 0||x.count!==v){let w=function(){X.dispose(),r.delete(d),d.removeEventListener("dispose",w)};var y=w;x!==void 0&&x.texture.dispose();const b=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],H=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let U=0;b===!0&&(U=1),C===!0&&(U=2),M===!0&&(U=3);let B=d.attributes.position.count*U,G=1;B>e.maxTextureSize&&(G=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const I=new Float32Array(B*G*4*v),X=new S0(I,B,G,v);X.type=ta,X.needsUpdate=!0;const R=U*4;for(let O=0;O<v;O++){const ot=_[O],it=H[O],lt=P[O],ct=B*G*4*O;for(let N=0;N<ot.count;N++){const q=N*R;b===!0&&(l.fromBufferAttribute(ot,N),I[ct+q+0]=l.x,I[ct+q+1]=l.y,I[ct+q+2]=l.z,I[ct+q+3]=0),C===!0&&(l.fromBufferAttribute(it,N),I[ct+q+4]=l.x,I[ct+q+5]=l.y,I[ct+q+6]=l.z,I[ct+q+7]=0),M===!0&&(l.fromBufferAttribute(lt,N),I[ct+q+8]=l.x,I[ct+q+9]=l.y,I[ct+q+10]=l.z,I[ct+q+11]=lt.itemSize===4?l.w:1)}}x={count:v,texture:X,size:new Te(B,G)},r.set(d,x),d.addEventListener("dispose",w)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let b=0;for(let M=0;M<p.length;M++)b+=p[M];const C=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:u}}function ST(o,e,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,g=m.geometry,v=e.get(m,g);if(l.get(v)!==p&&(e.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return v}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const U0=new Fn,X_=new C0(1,1),L0=new S0,N0=new WS,O0=new R0,W_=[],q_=[],Y_=new Float32Array(16),Z_=new Float32Array(9),j_=new Float32Array(4);function Ms(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let u=W_[l];if(u===void 0&&(u=new Float32Array(l),W_[l]=u),e!==0){r.toArray(u,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(u,d)}return u}function un(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function fn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Cc(o,e){let i=q_[e];i===void 0&&(i=new Int32Array(e),q_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function MT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function yT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(un(i,e))return;o.uniform2fv(this.addr,e),fn(i,e)}}function ET(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(un(i,e))return;o.uniform3fv(this.addr,e),fn(i,e)}}function TT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(un(i,e))return;o.uniform4fv(this.addr,e),fn(i,e)}}function bT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(un(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),fn(i,e)}else{if(un(i,r))return;j_.set(r),o.uniformMatrix2fv(this.addr,!1,j_),fn(i,r)}}function AT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(un(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),fn(i,e)}else{if(un(i,r))return;Z_.set(r),o.uniformMatrix3fv(this.addr,!1,Z_),fn(i,r)}}function RT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(un(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),fn(i,e)}else{if(un(i,r))return;Y_.set(r),o.uniformMatrix4fv(this.addr,!1,Y_),fn(i,r)}}function CT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function wT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(un(i,e))return;o.uniform2iv(this.addr,e),fn(i,e)}}function DT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(un(i,e))return;o.uniform3iv(this.addr,e),fn(i,e)}}function UT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(un(i,e))return;o.uniform4iv(this.addr,e),fn(i,e)}}function LT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function NT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(un(i,e))return;o.uniform2uiv(this.addr,e),fn(i,e)}}function OT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(un(i,e))return;o.uniform3uiv(this.addr,e),fn(i,e)}}function PT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(un(i,e))return;o.uniform4uiv(this.addr,e),fn(i,e)}}function zT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(X_.compareFunction=v0,u=X_):u=U0,i.setTexture2D(e||u,l)}function BT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||N0,l)}function IT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||O0,l)}function FT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||L0,l)}function HT(o){switch(o){case 5126:return MT;case 35664:return yT;case 35665:return ET;case 35666:return TT;case 35674:return bT;case 35675:return AT;case 35676:return RT;case 5124:case 35670:return CT;case 35667:case 35671:return wT;case 35668:case 35672:return DT;case 35669:case 35673:return UT;case 5125:return LT;case 36294:return NT;case 36295:return OT;case 36296:return PT;case 35678:case 36198:case 36298:case 36306:case 35682:return zT;case 35679:case 36299:case 36307:return BT;case 35680:case 36300:case 36308:case 36293:return IT;case 36289:case 36303:case 36311:case 36292:return FT}}function GT(o,e){o.uniform1fv(this.addr,e)}function VT(o,e){const i=Ms(e,this.size,2);o.uniform2fv(this.addr,i)}function kT(o,e){const i=Ms(e,this.size,3);o.uniform3fv(this.addr,i)}function XT(o,e){const i=Ms(e,this.size,4);o.uniform4fv(this.addr,i)}function WT(o,e){const i=Ms(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function qT(o,e){const i=Ms(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function YT(o,e){const i=Ms(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function ZT(o,e){o.uniform1iv(this.addr,e)}function jT(o,e){o.uniform2iv(this.addr,e)}function KT(o,e){o.uniform3iv(this.addr,e)}function QT(o,e){o.uniform4iv(this.addr,e)}function JT(o,e){o.uniform1uiv(this.addr,e)}function $T(o,e){o.uniform2uiv(this.addr,e)}function tb(o,e){o.uniform3uiv(this.addr,e)}function eb(o,e){o.uniform4uiv(this.addr,e)}function nb(o,e,i){const r=this.cache,l=e.length,u=Cc(i,l);un(r,u)||(o.uniform1iv(this.addr,u),fn(r,u));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||U0,u[h])}function ib(o,e,i){const r=this.cache,l=e.length,u=Cc(i,l);un(r,u)||(o.uniform1iv(this.addr,u),fn(r,u));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||N0,u[h])}function ab(o,e,i){const r=this.cache,l=e.length,u=Cc(i,l);un(r,u)||(o.uniform1iv(this.addr,u),fn(r,u));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||O0,u[h])}function rb(o,e,i){const r=this.cache,l=e.length,u=Cc(i,l);un(r,u)||(o.uniform1iv(this.addr,u),fn(r,u));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||L0,u[h])}function sb(o){switch(o){case 5126:return GT;case 35664:return VT;case 35665:return kT;case 35666:return XT;case 35674:return WT;case 35675:return qT;case 35676:return YT;case 5124:case 35670:return ZT;case 35667:case 35671:return jT;case 35668:case 35672:return KT;case 35669:case 35673:return QT;case 5125:return JT;case 36294:return $T;case 36295:return tb;case 36296:return eb;case 35678:case 36198:case 36298:case 36306:case 35682:return nb;case 35679:case 36299:case 36307:return ib;case 35680:case 36300:case 36308:case 36293:return ab;case 36289:case 36303:case 36311:case 36292:return rb}}class ob{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=HT(i.type)}}class lb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=sb(i.type)}}class cb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(e,i[d.id],r)}}}const gh=/(\w+)(\])?(\[|\.)?/g;function K_(o,e){o.seq.push(e),o.map[e.id]=e}function ub(o,e,i){const r=o.name,l=r.length;for(gh.lastIndex=0;;){const u=gh.exec(r),h=gh.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){K_(i,p===void 0?new ob(d,o,e):new lb(d,o,e));break}else{let v=i.map[d];v===void 0&&(v=new cb(d),K_(i,v)),i=v}}}class Mc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=e.getActiveUniform(i,l),h=e.getUniformLocation(i,u.name);ub(u,h,this)}}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function Q_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const fb=37297;let hb=0;function db(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let h=l;h<u;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const J_=new oe;function pb(o){Ee._getMatrix(J_,Ee.workingColorSpace,o);const e=`mat3( ${J_.elements.map(i=>i.toFixed(4))} )`;switch(Ee.getTransfer(o)){case Ec:return[e,"LinearTransferOETF"];case Pe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function $_(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),u=(o.getShaderInfoLog(e)||"").trim();if(r&&u==="")return"";const h=/ERROR: 0:(\d+)/.exec(u);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+u+`

`+db(o.getShaderSource(e),d)}else return u}function mb(o,e){const i=pb(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function gb(o,e){let i;switch(e){case vS:i="Linear";break;case xS:i="Reinhard";break;case SS:i="Cineon";break;case MS:i="ACESFilmic";break;case ES:i="AgX";break;case TS:i="Neutral";break;case yS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const pc=new tt;function _b(){Ee.getLuminanceCoefficients(pc);const o=pc.x.toFixed(4),e=pc.y.toFixed(4),i=pc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vb(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(To).join(`
`)}function xb(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function Sb(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(e,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function To(o){return o!==""}function t0(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function e0(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Mb=/^[ \t]*#include +<([\w\d./]+)>/gm;function cd(o){return o.replace(Mb,Eb)}const yb=new Map;function Eb(o,e){let i=ue[e];if(i===void 0){const r=yb.get(e);if(r!==void 0)i=ue[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return cd(i)}const Tb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function n0(o){return o.replace(Tb,bb)}function bb(o,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function i0(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ab(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===o0?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===Qx?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ji&&(e="SHADOWMAP_TYPE_VSM"),e}function Rb(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case gs:case _s:e="ENVMAP_TYPE_CUBE";break;case Ac:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Cb(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case _s:e="ENVMAP_MODE_REFRACTION";break}return e}function wb(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case l0:e="ENVMAP_BLENDING_MULTIPLY";break;case gS:e="ENVMAP_BLENDING_MIX";break;case _S:e="ENVMAP_BLENDING_ADD";break}return e}function Db(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function Ub(o,e,i,r){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=Ab(i),p=Rb(i),g=Cb(i),v=wb(i),x=Db(i),y=vb(i),b=xb(u),C=l.createProgram();let M,_,H=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(To).join(`
`),M.length>0&&(M+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(To).join(`
`),_.length>0&&(_+=`
`)):(M=[i0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(To).join(`
`),_=[i0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==za?"#define TONE_MAPPING":"",i.toneMapping!==za?ue.tonemapping_pars_fragment:"",i.toneMapping!==za?gb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ue.colorspace_pars_fragment,mb("linearToOutputTexel",i.outputColorSpace),_b(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(To).join(`
`)),h=cd(h),h=t0(h,i),h=e0(h,i),d=cd(d),d=t0(d,i),d=e0(d,i),h=n0(h),d=n0(d),i.isRawShaderMaterial!==!0&&(H=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,_=["#define varying in",i.glslVersion===f_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===f_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const P=H+M+h,U=H+_+d,B=Q_(l,l.VERTEX_SHADER,P),G=Q_(l,l.FRAGMENT_SHADER,U);l.attachShader(C,B),l.attachShader(C,G),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function I(O){if(o.debug.checkShaderErrors){const ot=l.getProgramInfoLog(C)||"",it=l.getShaderInfoLog(B)||"",lt=l.getShaderInfoLog(G)||"",ct=ot.trim(),N=it.trim(),q=lt.trim();let W=!0,vt=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(W=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,B,G);else{const D=$_(l,B,"vertex"),K=$_(l,G,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+ct+`
`+D+`
`+K)}else ct!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ct):(N===""||q==="")&&(vt=!1);vt&&(O.diagnostics={runnable:W,programLog:ct,vertexShader:{log:N,prefix:M},fragmentShader:{log:q,prefix:_}})}l.deleteShader(B),l.deleteShader(G),X=new Mc(l,C),R=Sb(l,C)}let X;this.getUniforms=function(){return X===void 0&&I(this),X};let R;this.getAttributes=function(){return R===void 0&&I(this),R};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(C,fb)),w},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=hb++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=B,this.fragmentShader=G,this}let Lb=0;class Nb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new Ob(e),i.set(e,r)),r}}class Ob{constructor(e){this.id=Lb++,this.code=e,this.usedTimes=0}}function Pb(o,e,i,r,l,u,h){const d=new Sd,m=new Nb,p=new Set,g=[],v=l.logarithmicDepthBuffer,x=l.vertexTextures;let y=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(R){return p.add(R),R===0?"uv":`uv${R}`}function M(R,w,O,ot,it){const lt=ot.fog,ct=it.geometry,N=R.isMeshStandardMaterial?ot.environment:null,q=(R.isMeshStandardMaterial?i:e).get(R.envMap||N),W=q&&q.mapping===Ac?q.image.height:null,vt=b[R.type];R.precision!==null&&(y=l.getMaxPrecision(R.precision),y!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",y,"instead."));const D=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,K=D!==void 0?D.length:0;let mt=0;ct.morphAttributes.position!==void 0&&(mt=1),ct.morphAttributes.normal!==void 0&&(mt=2),ct.morphAttributes.color!==void 0&&(mt=3);let St,At,J,ft;if(vt){const Se=Ai[vt];St=Se.vertexShader,At=Se.fragmentShader}else St=R.vertexShader,At=R.fragmentShader,m.update(R),J=m.getVertexShaderID(R),ft=m.getFragmentShaderID(R);const Mt=o.getRenderTarget(),wt=o.state.buffers.depth.getReversed(),Ht=it.isInstancedMesh===!0,Vt=it.isBatchedMesh===!0,Fe=!!R.map,de=!!R.matcap,F=!!q,Ae=!!R.aoMap,Qt=!!R.lightMap,xe=!!R.bumpMap,It=!!R.normalMap,He=!!R.displacementMap,Ft=!!R.emissiveMap,re=!!R.metalnessMap,qe=!!R.roughnessMap,Ye=R.anisotropy>0,L=R.clearcoat>0,E=R.dispersion>0,et=R.iridescence>0,ht=R.sheen>0,xt=R.transmission>0,ut=Ye&&!!R.anisotropyMap,Pt=L&&!!R.clearcoatMap,Rt=L&&!!R.clearcoatNormalMap,Wt=L&&!!R.clearcoatRoughnessMap,Yt=et&&!!R.iridescenceMap,yt=et&&!!R.iridescenceThicknessMap,Lt=ht&&!!R.sheenColorMap,jt=ht&&!!R.sheenRoughnessMap,Xt=!!R.specularMap,Dt=!!R.specularColorMap,ae=!!R.specularIntensityMap,k=xt&&!!R.transmissionMap,bt=xt&&!!R.thicknessMap,Ct=!!R.gradientMap,zt=!!R.alphaMap,Et=R.alphaTest>0,_t=!!R.alphaHash,kt=!!R.extensions;let ie=za;R.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(ie=o.toneMapping);const Re={shaderID:vt,shaderType:R.type,shaderName:R.name,vertexShader:St,fragmentShader:At,defines:R.defines,customVertexShaderID:J,customFragmentShaderID:ft,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:y,batching:Vt,batchingColor:Vt&&it._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&it.instanceColor!==null,instancingMorph:Ht&&it.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:Mt===null?o.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:vs,alphaToCoverage:!!R.alphaToCoverage,map:Fe,matcap:de,envMap:F,envMapMode:F&&q.mapping,envMapCubeUVHeight:W,aoMap:Ae,lightMap:Qt,bumpMap:xe,normalMap:It,displacementMap:x&&He,emissiveMap:Ft,normalMapObjectSpace:It&&R.normalMapType===wS,normalMapTangentSpace:It&&R.normalMapType===CS,metalnessMap:re,roughnessMap:qe,anisotropy:Ye,anisotropyMap:ut,clearcoat:L,clearcoatMap:Pt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:Wt,dispersion:E,iridescence:et,iridescenceMap:Yt,iridescenceThicknessMap:yt,sheen:ht,sheenColorMap:Lt,sheenRoughnessMap:jt,specularMap:Xt,specularColorMap:Dt,specularIntensityMap:ae,transmission:xt,transmissionMap:k,thicknessMap:bt,gradientMap:Ct,opaque:R.transparent===!1&&R.blending===hs&&R.alphaToCoverage===!1,alphaMap:zt,alphaTest:Et,alphaHash:_t,combine:R.combine,mapUv:Fe&&C(R.map.channel),aoMapUv:Ae&&C(R.aoMap.channel),lightMapUv:Qt&&C(R.lightMap.channel),bumpMapUv:xe&&C(R.bumpMap.channel),normalMapUv:It&&C(R.normalMap.channel),displacementMapUv:He&&C(R.displacementMap.channel),emissiveMapUv:Ft&&C(R.emissiveMap.channel),metalnessMapUv:re&&C(R.metalnessMap.channel),roughnessMapUv:qe&&C(R.roughnessMap.channel),anisotropyMapUv:ut&&C(R.anisotropyMap.channel),clearcoatMapUv:Pt&&C(R.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&C(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Wt&&C(R.clearcoatRoughnessMap.channel),iridescenceMapUv:Yt&&C(R.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&C(R.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&C(R.sheenColorMap.channel),sheenRoughnessMapUv:jt&&C(R.sheenRoughnessMap.channel),specularMapUv:Xt&&C(R.specularMap.channel),specularColorMapUv:Dt&&C(R.specularColorMap.channel),specularIntensityMapUv:ae&&C(R.specularIntensityMap.channel),transmissionMapUv:k&&C(R.transmissionMap.channel),thicknessMapUv:bt&&C(R.thicknessMap.channel),alphaMapUv:zt&&C(R.alphaMap.channel),vertexTangents:!!ct.attributes.tangent&&(It||Ye),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,pointsUvs:it.isPoints===!0&&!!ct.attributes.uv&&(Fe||zt),fog:!!lt,useFog:R.fog===!0,fogExp2:!!lt&&lt.isFogExp2,flatShading:R.flatShading===!0&&R.wireframe===!1,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:wt,skinning:it.isSkinnedMesh===!0,morphTargets:ct.morphAttributes.position!==void 0,morphNormals:ct.morphAttributes.normal!==void 0,morphColors:ct.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:mt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:R.dithering,shadowMapEnabled:o.shadowMap.enabled&&O.length>0,shadowMapType:o.shadowMap.type,toneMapping:ie,decodeVideoTexture:Fe&&R.map.isVideoTexture===!0&&Ee.getTransfer(R.map.colorSpace)===Pe,decodeVideoTextureEmissive:Ft&&R.emissiveMap.isVideoTexture===!0&&Ee.getTransfer(R.emissiveMap.colorSpace)===Pe,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===$i,flipSided:R.side===In,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:kt&&R.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&R.extensions.multiDraw===!0||Vt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return Re.vertexUv1s=p.has(1),Re.vertexUv2s=p.has(2),Re.vertexUv3s=p.has(3),p.clear(),Re}function _(R){const w=[];if(R.shaderID?w.push(R.shaderID):(w.push(R.customVertexShaderID),w.push(R.customFragmentShaderID)),R.defines!==void 0)for(const O in R.defines)w.push(O),w.push(R.defines[O]);return R.isRawShaderMaterial===!1&&(H(w,R),P(w,R),w.push(o.outputColorSpace)),w.push(R.customProgramCacheKey),w.join()}function H(R,w){R.push(w.precision),R.push(w.outputColorSpace),R.push(w.envMapMode),R.push(w.envMapCubeUVHeight),R.push(w.mapUv),R.push(w.alphaMapUv),R.push(w.lightMapUv),R.push(w.aoMapUv),R.push(w.bumpMapUv),R.push(w.normalMapUv),R.push(w.displacementMapUv),R.push(w.emissiveMapUv),R.push(w.metalnessMapUv),R.push(w.roughnessMapUv),R.push(w.anisotropyMapUv),R.push(w.clearcoatMapUv),R.push(w.clearcoatNormalMapUv),R.push(w.clearcoatRoughnessMapUv),R.push(w.iridescenceMapUv),R.push(w.iridescenceThicknessMapUv),R.push(w.sheenColorMapUv),R.push(w.sheenRoughnessMapUv),R.push(w.specularMapUv),R.push(w.specularColorMapUv),R.push(w.specularIntensityMapUv),R.push(w.transmissionMapUv),R.push(w.thicknessMapUv),R.push(w.combine),R.push(w.fogExp2),R.push(w.sizeAttenuation),R.push(w.morphTargetsCount),R.push(w.morphAttributeCount),R.push(w.numDirLights),R.push(w.numPointLights),R.push(w.numSpotLights),R.push(w.numSpotLightMaps),R.push(w.numHemiLights),R.push(w.numRectAreaLights),R.push(w.numDirLightShadows),R.push(w.numPointLightShadows),R.push(w.numSpotLightShadows),R.push(w.numSpotLightShadowsWithMaps),R.push(w.numLightProbes),R.push(w.shadowMapType),R.push(w.toneMapping),R.push(w.numClippingPlanes),R.push(w.numClipIntersection),R.push(w.depthPacking)}function P(R,w){d.disableAll(),w.supportsVertexTextures&&d.enable(0),w.instancing&&d.enable(1),w.instancingColor&&d.enable(2),w.instancingMorph&&d.enable(3),w.matcap&&d.enable(4),w.envMap&&d.enable(5),w.normalMapObjectSpace&&d.enable(6),w.normalMapTangentSpace&&d.enable(7),w.clearcoat&&d.enable(8),w.iridescence&&d.enable(9),w.alphaTest&&d.enable(10),w.vertexColors&&d.enable(11),w.vertexAlphas&&d.enable(12),w.vertexUv1s&&d.enable(13),w.vertexUv2s&&d.enable(14),w.vertexUv3s&&d.enable(15),w.vertexTangents&&d.enable(16),w.anisotropy&&d.enable(17),w.alphaHash&&d.enable(18),w.batching&&d.enable(19),w.dispersion&&d.enable(20),w.batchingColor&&d.enable(21),w.gradientMap&&d.enable(22),R.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reversedDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),R.push(d.mask)}function U(R){const w=b[R.type];let O;if(w){const ot=Ai[w];O=aM.clone(ot.uniforms)}else O=R.uniforms;return O}function B(R,w){let O;for(let ot=0,it=g.length;ot<it;ot++){const lt=g[ot];if(lt.cacheKey===w){O=lt,++O.usedTimes;break}}return O===void 0&&(O=new Ub(o,w,R,u),g.push(O)),O}function G(R){if(--R.usedTimes===0){const w=g.indexOf(R);g[w]=g[g.length-1],g.pop(),R.destroy()}}function I(R){m.remove(R)}function X(){m.dispose()}return{getParameters:M,getProgramCacheKey:_,getUniforms:U,acquireProgram:B,releaseProgram:G,releaseShaderCache:I,programs:g,dispose:X}}function zb(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function u(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function Bb(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function a0(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function r0(){const o=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function h(v,x,y,b,C,M){let _=o[e];return _===void 0?(_={id:v.id,object:v,geometry:x,material:y,groupOrder:b,renderOrder:v.renderOrder,z:C,group:M},o[e]=_):(_.id=v.id,_.object=v,_.geometry=x,_.material=y,_.groupOrder=b,_.renderOrder=v.renderOrder,_.z=C,_.group=M),e++,_}function d(v,x,y,b,C,M){const _=h(v,x,y,b,C,M);y.transmission>0?r.push(_):y.transparent===!0?l.push(_):i.push(_)}function m(v,x,y,b,C,M){const _=h(v,x,y,b,C,M);y.transmission>0?r.unshift(_):y.transparent===!0?l.unshift(_):i.unshift(_)}function p(v,x){i.length>1&&i.sort(v||Bb),r.length>1&&r.sort(x||a0),l.length>1&&l.sort(x||a0)}function g(){for(let v=e,x=o.length;v<x;v++){const y=o[v];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:d,unshift:m,finish:g,sort:p}}function Ib(){let o=new WeakMap;function e(r,l){const u=o.get(r);let h;return u===void 0?(h=new r0,o.set(r,[h])):l>=u.length?(h=new r0,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function Fb(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new tt,color:new Ce};break;case"SpotLight":i={position:new tt,direction:new tt,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new tt,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":i={direction:new tt,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":i={color:new Ce,position:new tt,halfWidth:new tt,halfHeight:new tt};break}return o[e.id]=i,i}}}function Hb(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let Gb=0;function Vb(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function kb(o){const e=new Fb,i=Hb(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new tt);const l=new tt,u=new We,h=new We;function d(p){let g=0,v=0,x=0;for(let R=0;R<9;R++)r.probe[R].set(0,0,0);let y=0,b=0,C=0,M=0,_=0,H=0,P=0,U=0,B=0,G=0,I=0;p.sort(Vb);for(let R=0,w=p.length;R<w;R++){const O=p[R],ot=O.color,it=O.intensity,lt=O.distance,ct=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)g+=ot.r*it,v+=ot.g*it,x+=ot.b*it;else if(O.isLightProbe){for(let N=0;N<9;N++)r.probe[N].addScaledVector(O.sh.coefficients[N],it);I++}else if(O.isDirectionalLight){const N=e.get(O);if(N.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const q=O.shadow,W=i.get(O);W.shadowIntensity=q.intensity,W.shadowBias=q.bias,W.shadowNormalBias=q.normalBias,W.shadowRadius=q.radius,W.shadowMapSize=q.mapSize,r.directionalShadow[y]=W,r.directionalShadowMap[y]=ct,r.directionalShadowMatrix[y]=O.shadow.matrix,H++}r.directional[y]=N,y++}else if(O.isSpotLight){const N=e.get(O);N.position.setFromMatrixPosition(O.matrixWorld),N.color.copy(ot).multiplyScalar(it),N.distance=lt,N.coneCos=Math.cos(O.angle),N.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),N.decay=O.decay,r.spot[C]=N;const q=O.shadow;if(O.map&&(r.spotLightMap[B]=O.map,B++,q.updateMatrices(O),O.castShadow&&G++),r.spotLightMatrix[C]=q.matrix,O.castShadow){const W=i.get(O);W.shadowIntensity=q.intensity,W.shadowBias=q.bias,W.shadowNormalBias=q.normalBias,W.shadowRadius=q.radius,W.shadowMapSize=q.mapSize,r.spotShadow[C]=W,r.spotShadowMap[C]=ct,U++}C++}else if(O.isRectAreaLight){const N=e.get(O);N.color.copy(ot).multiplyScalar(it),N.halfWidth.set(O.width*.5,0,0),N.halfHeight.set(0,O.height*.5,0),r.rectArea[M]=N,M++}else if(O.isPointLight){const N=e.get(O);if(N.color.copy(O.color).multiplyScalar(O.intensity),N.distance=O.distance,N.decay=O.decay,O.castShadow){const q=O.shadow,W=i.get(O);W.shadowIntensity=q.intensity,W.shadowBias=q.bias,W.shadowNormalBias=q.normalBias,W.shadowRadius=q.radius,W.shadowMapSize=q.mapSize,W.shadowCameraNear=q.camera.near,W.shadowCameraFar=q.camera.far,r.pointShadow[b]=W,r.pointShadowMap[b]=ct,r.pointShadowMatrix[b]=O.shadow.matrix,P++}r.point[b]=N,b++}else if(O.isHemisphereLight){const N=e.get(O);N.skyColor.copy(O.color).multiplyScalar(it),N.groundColor.copy(O.groundColor).multiplyScalar(it),r.hemi[_]=N,_++}}M>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ot.LTC_FLOAT_1,r.rectAreaLTC2=Ot.LTC_FLOAT_2):(r.rectAreaLTC1=Ot.LTC_HALF_1,r.rectAreaLTC2=Ot.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=x;const X=r.hash;(X.directionalLength!==y||X.pointLength!==b||X.spotLength!==C||X.rectAreaLength!==M||X.hemiLength!==_||X.numDirectionalShadows!==H||X.numPointShadows!==P||X.numSpotShadows!==U||X.numSpotMaps!==B||X.numLightProbes!==I)&&(r.directional.length=y,r.spot.length=C,r.rectArea.length=M,r.point.length=b,r.hemi.length=_,r.directionalShadow.length=H,r.directionalShadowMap.length=H,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=H,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=U+B-G,r.spotLightMap.length=B,r.numSpotLightShadowsWithMaps=G,r.numLightProbes=I,X.directionalLength=y,X.pointLength=b,X.spotLength=C,X.rectAreaLength=M,X.hemiLength=_,X.numDirectionalShadows=H,X.numPointShadows=P,X.numSpotShadows=U,X.numSpotMaps=B,X.numLightProbes=I,r.version=Gb++)}function m(p,g){let v=0,x=0,y=0,b=0,C=0;const M=g.matrixWorldInverse;for(let _=0,H=p.length;_<H;_++){const P=p[_];if(P.isDirectionalLight){const U=r.directional[v];U.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(M),v++}else if(P.isSpotLight){const U=r.spot[y];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(M),U.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(M),y++}else if(P.isRectAreaLight){const U=r.rectArea[b];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(M),h.identity(),u.copy(P.matrixWorld),u.premultiply(M),h.extractRotation(u),U.halfWidth.set(P.width*.5,0,0),U.halfHeight.set(0,P.height*.5,0),U.halfWidth.applyMatrix4(h),U.halfHeight.applyMatrix4(h),b++}else if(P.isPointLight){const U=r.point[x];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(M),x++}else if(P.isHemisphereLight){const U=r.hemi[C];U.direction.setFromMatrixPosition(P.matrixWorld),U.direction.transformDirection(M),C++}}}return{setup:d,setupView:m,state:r}}function s0(o){const e=new kb(o),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function u(g){i.push(g)}function h(g){r.push(g)}function d(){e.setup(i)}function m(g){e.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function Xb(o){let e=new WeakMap;function i(l,u=0){const h=e.get(l);let d;return h===void 0?(d=new s0(o),e.set(l,[d])):u>=h.length?(d=new s0(o),h.push(d)):d=h[u],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const Wb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Yb(o,e,i){let r=new Md;const l=new Te,u=new Te,h=new ze,d=new pM({depthPacking:RS}),m=new mM,p={},g=i.maxTextureSize,v={[Ba]:In,[In]:Ba,[$i]:$i},x=new Ia({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:Wb,fragmentShader:qb}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const b=new Ui;b.setAttribute("position",new si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new ea(b,x),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=o0;let _=this.type;this.render=function(G,I,X){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||G.length===0)return;const R=o.getRenderTarget(),w=o.getActiveCubeFace(),O=o.getActiveMipmapLevel(),ot=o.state;ot.setBlending(Pa),ot.buffers.depth.getReversed()?ot.buffers.color.setClear(0,0,0,0):ot.buffers.color.setClear(1,1,1,1),ot.buffers.depth.setTest(!0),ot.setScissorTest(!1);const it=_!==Ji&&this.type===Ji,lt=_===Ji&&this.type!==Ji;for(let ct=0,N=G.length;ct<N;ct++){const q=G[ct],W=q.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;l.copy(W.mapSize);const vt=W.getFrameExtents();if(l.multiply(vt),u.copy(W.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/vt.x),l.x=u.x*vt.x,W.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/vt.y),l.y=u.y*vt.y,W.mapSize.y=u.y)),W.map===null||it===!0||lt===!0){const K=this.type!==Ji?{minFilter:_i,magFilter:_i}:{};W.map!==null&&W.map.dispose(),W.map=new mr(l.x,l.y,K),W.map.texture.name=q.name+".shadowMap",W.camera.updateProjectionMatrix()}o.setRenderTarget(W.map),o.clear();const D=W.getViewportCount();for(let K=0;K<D;K++){const mt=W.getViewport(K);h.set(u.x*mt.x,u.y*mt.y,u.x*mt.z,u.y*mt.w),ot.viewport(h),W.updateMatrices(q,K),r=W.getFrustum(),U(I,X,W.camera,q,this.type)}W.isPointLightShadow!==!0&&this.type===Ji&&H(W,X),W.needsUpdate=!1}_=this.type,M.needsUpdate=!1,o.setRenderTarget(R,w,O)};function H(G,I){const X=e.update(C);x.defines.VSM_SAMPLES!==G.blurSamples&&(x.defines.VSM_SAMPLES=G.blurSamples,y.defines.VSM_SAMPLES=G.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new mr(l.x,l.y)),x.uniforms.shadow_pass.value=G.map.texture,x.uniforms.resolution.value=G.mapSize,x.uniforms.radius.value=G.radius,o.setRenderTarget(G.mapPass),o.clear(),o.renderBufferDirect(I,null,X,x,C,null),y.uniforms.shadow_pass.value=G.mapPass.texture,y.uniforms.resolution.value=G.mapSize,y.uniforms.radius.value=G.radius,o.setRenderTarget(G.map),o.clear(),o.renderBufferDirect(I,null,X,y,C,null)}function P(G,I,X,R){let w=null;const O=X.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(O!==void 0)w=O;else if(w=X.isPointLight===!0?m:d,o.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const ot=w.uuid,it=I.uuid;let lt=p[ot];lt===void 0&&(lt={},p[ot]=lt);let ct=lt[it];ct===void 0&&(ct=w.clone(),lt[it]=ct,I.addEventListener("dispose",B)),w=ct}if(w.visible=I.visible,w.wireframe=I.wireframe,R===Ji?w.side=I.shadowSide!==null?I.shadowSide:I.side:w.side=I.shadowSide!==null?I.shadowSide:v[I.side],w.alphaMap=I.alphaMap,w.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,w.map=I.map,w.clipShadows=I.clipShadows,w.clippingPlanes=I.clippingPlanes,w.clipIntersection=I.clipIntersection,w.displacementMap=I.displacementMap,w.displacementScale=I.displacementScale,w.displacementBias=I.displacementBias,w.wireframeLinewidth=I.wireframeLinewidth,w.linewidth=I.linewidth,X.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const ot=o.properties.get(w);ot.light=X}return w}function U(G,I,X,R,w){if(G.visible===!1)return;if(G.layers.test(I.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&w===Ji)&&(!G.frustumCulled||r.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,G.matrixWorld);const it=e.update(G),lt=G.material;if(Array.isArray(lt)){const ct=it.groups;for(let N=0,q=ct.length;N<q;N++){const W=ct[N],vt=lt[W.materialIndex];if(vt&&vt.visible){const D=P(G,vt,R,w);G.onBeforeShadow(o,G,I,X,it,D,W),o.renderBufferDirect(X,null,it,D,G,W),G.onAfterShadow(o,G,I,X,it,D,W)}}}else if(lt.visible){const ct=P(G,lt,R,w);G.onBeforeShadow(o,G,I,X,it,ct,null),o.renderBufferDirect(X,null,it,ct,G,null),G.onAfterShadow(o,G,I,X,it,ct,null)}}const ot=G.children;for(let it=0,lt=ot.length;it<lt;it++)U(ot[it],I,X,R,w)}function B(G){G.target.removeEventListener("dispose",B);for(const X in p){const R=p[X],w=G.target.uuid;w in R&&(R[w].dispose(),delete R[w])}}}const Zb={[Eh]:Th,[bh]:Ch,[Ah]:wh,[ms]:Rh,[Th]:Eh,[Ch]:bh,[wh]:Ah,[Rh]:ms};function jb(o,e){function i(){let k=!1;const bt=new ze;let Ct=null;const zt=new ze(0,0,0,0);return{setMask:function(Et){Ct!==Et&&!k&&(o.colorMask(Et,Et,Et,Et),Ct=Et)},setLocked:function(Et){k=Et},setClear:function(Et,_t,kt,ie,Re){Re===!0&&(Et*=ie,_t*=ie,kt*=ie),bt.set(Et,_t,kt,ie),zt.equals(bt)===!1&&(o.clearColor(Et,_t,kt,ie),zt.copy(bt))},reset:function(){k=!1,Ct=null,zt.set(-1,0,0,0)}}}function r(){let k=!1,bt=!1,Ct=null,zt=null,Et=null;return{setReversed:function(_t){if(bt!==_t){const kt=e.get("EXT_clip_control");_t?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT),bt=_t;const ie=Et;Et=null,this.setClear(ie)}},getReversed:function(){return bt},setTest:function(_t){_t?Mt(o.DEPTH_TEST):wt(o.DEPTH_TEST)},setMask:function(_t){Ct!==_t&&!k&&(o.depthMask(_t),Ct=_t)},setFunc:function(_t){if(bt&&(_t=Zb[_t]),zt!==_t){switch(_t){case Eh:o.depthFunc(o.NEVER);break;case Th:o.depthFunc(o.ALWAYS);break;case bh:o.depthFunc(o.LESS);break;case ms:o.depthFunc(o.LEQUAL);break;case Ah:o.depthFunc(o.EQUAL);break;case Rh:o.depthFunc(o.GEQUAL);break;case Ch:o.depthFunc(o.GREATER);break;case wh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}zt=_t}},setLocked:function(_t){k=_t},setClear:function(_t){Et!==_t&&(bt&&(_t=1-_t),o.clearDepth(_t),Et=_t)},reset:function(){k=!1,Ct=null,zt=null,Et=null,bt=!1}}}function l(){let k=!1,bt=null,Ct=null,zt=null,Et=null,_t=null,kt=null,ie=null,Re=null;return{setTest:function(Se){k||(Se?Mt(o.STENCIL_TEST):wt(o.STENCIL_TEST))},setMask:function(Se){bt!==Se&&!k&&(o.stencilMask(Se),bt=Se)},setFunc:function(Se,oi,sn){(Ct!==Se||zt!==oi||Et!==sn)&&(o.stencilFunc(Se,oi,sn),Ct=Se,zt=oi,Et=sn)},setOp:function(Se,oi,sn){(_t!==Se||kt!==oi||ie!==sn)&&(o.stencilOp(Se,oi,sn),_t=Se,kt=oi,ie=sn)},setLocked:function(Se){k=Se},setClear:function(Se){Re!==Se&&(o.clearStencil(Se),Re=Se)},reset:function(){k=!1,bt=null,Ct=null,zt=null,Et=null,_t=null,kt=null,ie=null,Re=null}}}const u=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let g={},v={},x=new WeakMap,y=[],b=null,C=!1,M=null,_=null,H=null,P=null,U=null,B=null,G=null,I=new Ce(0,0,0),X=0,R=!1,w=null,O=null,ot=null,it=null,lt=null;const ct=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,q=0;const W=o.getParameter(o.VERSION);W.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(W)[1]),N=q>=1):W.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),N=q>=2);let vt=null,D={};const K=o.getParameter(o.SCISSOR_BOX),mt=o.getParameter(o.VIEWPORT),St=new ze().fromArray(K),At=new ze().fromArray(mt);function J(k,bt,Ct,zt){const Et=new Uint8Array(4),_t=o.createTexture();o.bindTexture(k,_t),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let kt=0;kt<Ct;kt++)k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY?o.texImage3D(bt,0,o.RGBA,1,1,zt,0,o.RGBA,o.UNSIGNED_BYTE,Et):o.texImage2D(bt+kt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Et);return _t}const ft={};ft[o.TEXTURE_2D]=J(o.TEXTURE_2D,o.TEXTURE_2D,1),ft[o.TEXTURE_CUBE_MAP]=J(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),ft[o.TEXTURE_2D_ARRAY]=J(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),ft[o.TEXTURE_3D]=J(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),Mt(o.DEPTH_TEST),h.setFunc(ms),xe(!1),It(s_),Mt(o.CULL_FACE),Ae(Pa);function Mt(k){g[k]!==!0&&(o.enable(k),g[k]=!0)}function wt(k){g[k]!==!1&&(o.disable(k),g[k]=!1)}function Ht(k,bt){return v[k]!==bt?(o.bindFramebuffer(k,bt),v[k]=bt,k===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=bt),k===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=bt),!0):!1}function Vt(k,bt){let Ct=y,zt=!1;if(k){Ct=x.get(bt),Ct===void 0&&(Ct=[],x.set(bt,Ct));const Et=k.textures;if(Ct.length!==Et.length||Ct[0]!==o.COLOR_ATTACHMENT0){for(let _t=0,kt=Et.length;_t<kt;_t++)Ct[_t]=o.COLOR_ATTACHMENT0+_t;Ct.length=Et.length,zt=!0}}else Ct[0]!==o.BACK&&(Ct[0]=o.BACK,zt=!0);zt&&o.drawBuffers(Ct)}function Fe(k){return b!==k?(o.useProgram(k),b=k,!0):!1}const de={[ur]:o.FUNC_ADD,[$x]:o.FUNC_SUBTRACT,[tS]:o.FUNC_REVERSE_SUBTRACT};de[eS]=o.MIN,de[nS]=o.MAX;const F={[iS]:o.ZERO,[aS]:o.ONE,[rS]:o.SRC_COLOR,[Mh]:o.SRC_ALPHA,[fS]:o.SRC_ALPHA_SATURATE,[cS]:o.DST_COLOR,[oS]:o.DST_ALPHA,[sS]:o.ONE_MINUS_SRC_COLOR,[yh]:o.ONE_MINUS_SRC_ALPHA,[uS]:o.ONE_MINUS_DST_COLOR,[lS]:o.ONE_MINUS_DST_ALPHA,[hS]:o.CONSTANT_COLOR,[dS]:o.ONE_MINUS_CONSTANT_COLOR,[pS]:o.CONSTANT_ALPHA,[mS]:o.ONE_MINUS_CONSTANT_ALPHA};function Ae(k,bt,Ct,zt,Et,_t,kt,ie,Re,Se){if(k===Pa){C===!0&&(wt(o.BLEND),C=!1);return}if(C===!1&&(Mt(o.BLEND),C=!0),k!==Jx){if(k!==M||Se!==R){if((_!==ur||U!==ur)&&(o.blendEquation(o.FUNC_ADD),_=ur,U=ur),Se)switch(k){case hs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Sh:o.blendFunc(o.ONE,o.ONE);break;case o_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case l_:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case hs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Sh:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case o_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case l_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}H=null,P=null,B=null,G=null,I.set(0,0,0),X=0,M=k,R=Se}return}Et=Et||bt,_t=_t||Ct,kt=kt||zt,(bt!==_||Et!==U)&&(o.blendEquationSeparate(de[bt],de[Et]),_=bt,U=Et),(Ct!==H||zt!==P||_t!==B||kt!==G)&&(o.blendFuncSeparate(F[Ct],F[zt],F[_t],F[kt]),H=Ct,P=zt,B=_t,G=kt),(ie.equals(I)===!1||Re!==X)&&(o.blendColor(ie.r,ie.g,ie.b,Re),I.copy(ie),X=Re),M=k,R=!1}function Qt(k,bt){k.side===$i?wt(o.CULL_FACE):Mt(o.CULL_FACE);let Ct=k.side===In;bt&&(Ct=!Ct),xe(Ct),k.blending===hs&&k.transparent===!1?Ae(Pa):Ae(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),u.setMask(k.colorWrite);const zt=k.stencilWrite;d.setTest(zt),zt&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ft(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Mt(o.SAMPLE_ALPHA_TO_COVERAGE):wt(o.SAMPLE_ALPHA_TO_COVERAGE)}function xe(k){w!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),w=k)}function It(k){k!==jx?(Mt(o.CULL_FACE),k!==O&&(k===s_?o.cullFace(o.BACK):k===Kx?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):wt(o.CULL_FACE),O=k}function He(k){k!==ot&&(N&&o.lineWidth(k),ot=k)}function Ft(k,bt,Ct){k?(Mt(o.POLYGON_OFFSET_FILL),(it!==bt||lt!==Ct)&&(o.polygonOffset(bt,Ct),it=bt,lt=Ct)):wt(o.POLYGON_OFFSET_FILL)}function re(k){k?Mt(o.SCISSOR_TEST):wt(o.SCISSOR_TEST)}function qe(k){k===void 0&&(k=o.TEXTURE0+ct-1),vt!==k&&(o.activeTexture(k),vt=k)}function Ye(k,bt,Ct){Ct===void 0&&(vt===null?Ct=o.TEXTURE0+ct-1:Ct=vt);let zt=D[Ct];zt===void 0&&(zt={type:void 0,texture:void 0},D[Ct]=zt),(zt.type!==k||zt.texture!==bt)&&(vt!==Ct&&(o.activeTexture(Ct),vt=Ct),o.bindTexture(k,bt||ft[k]),zt.type=k,zt.texture=bt)}function L(){const k=D[vt];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function et(){try{o.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ht(){try{o.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function xt(){try{o.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ut(){try{o.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pt(){try{o.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Rt(){try{o.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Wt(){try{o.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Yt(){try{o.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function yt(){try{o.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Lt(k){St.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),St.copy(k))}function jt(k){At.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),At.copy(k))}function Xt(k,bt){let Ct=p.get(bt);Ct===void 0&&(Ct=new WeakMap,p.set(bt,Ct));let zt=Ct.get(k);zt===void 0&&(zt=o.getUniformBlockIndex(bt,k.name),Ct.set(k,zt))}function Dt(k,bt){const zt=p.get(bt).get(k);m.get(bt)!==zt&&(o.uniformBlockBinding(bt,zt,k.__bindingPointIndex),m.set(bt,zt))}function ae(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},vt=null,D={},v={},x=new WeakMap,y=[],b=null,C=!1,M=null,_=null,H=null,P=null,U=null,B=null,G=null,I=new Ce(0,0,0),X=0,R=!1,w=null,O=null,ot=null,it=null,lt=null,St.set(0,0,o.canvas.width,o.canvas.height),At.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:Mt,disable:wt,bindFramebuffer:Ht,drawBuffers:Vt,useProgram:Fe,setBlending:Ae,setMaterial:Qt,setFlipSided:xe,setCullFace:It,setLineWidth:He,setPolygonOffset:Ft,setScissorTest:re,activeTexture:qe,bindTexture:Ye,unbindTexture:L,compressedTexImage2D:E,compressedTexImage3D:et,texImage2D:Yt,texImage3D:yt,updateUBOMapping:Xt,uniformBlockBinding:Dt,texStorage2D:Rt,texStorage3D:Wt,texSubImage2D:ht,texSubImage3D:xt,compressedTexSubImage2D:ut,compressedTexSubImage3D:Pt,scissor:Lt,viewport:jt,reset:ae}}function Kb(o,e,i,r,l,u,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Te,g=new WeakMap;let v;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(L,E){return y?new OffscreenCanvas(L,E):bc("canvas")}function C(L,E,et){let ht=1;const xt=Ye(L);if((xt.width>et||xt.height>et)&&(ht=et/Math.max(xt.width,xt.height)),ht<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ut=Math.floor(ht*xt.width),Pt=Math.floor(ht*xt.height);v===void 0&&(v=b(ut,Pt));const Rt=E?b(ut,Pt):v;return Rt.width=ut,Rt.height=Pt,Rt.getContext("2d").drawImage(L,0,0,ut,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+ut+"x"+Pt+")."),Rt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),L;return L}function M(L){return L.generateMipmaps}function _(L){o.generateMipmap(L)}function H(L){return L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?o.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function P(L,E,et,ht,xt=!1){if(L!==null){if(o[L]!==void 0)return o[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ut=E;if(E===o.RED&&(et===o.FLOAT&&(ut=o.R32F),et===o.HALF_FLOAT&&(ut=o.R16F),et===o.UNSIGNED_BYTE&&(ut=o.R8)),E===o.RED_INTEGER&&(et===o.UNSIGNED_BYTE&&(ut=o.R8UI),et===o.UNSIGNED_SHORT&&(ut=o.R16UI),et===o.UNSIGNED_INT&&(ut=o.R32UI),et===o.BYTE&&(ut=o.R8I),et===o.SHORT&&(ut=o.R16I),et===o.INT&&(ut=o.R32I)),E===o.RG&&(et===o.FLOAT&&(ut=o.RG32F),et===o.HALF_FLOAT&&(ut=o.RG16F),et===o.UNSIGNED_BYTE&&(ut=o.RG8)),E===o.RG_INTEGER&&(et===o.UNSIGNED_BYTE&&(ut=o.RG8UI),et===o.UNSIGNED_SHORT&&(ut=o.RG16UI),et===o.UNSIGNED_INT&&(ut=o.RG32UI),et===o.BYTE&&(ut=o.RG8I),et===o.SHORT&&(ut=o.RG16I),et===o.INT&&(ut=o.RG32I)),E===o.RGB_INTEGER&&(et===o.UNSIGNED_BYTE&&(ut=o.RGB8UI),et===o.UNSIGNED_SHORT&&(ut=o.RGB16UI),et===o.UNSIGNED_INT&&(ut=o.RGB32UI),et===o.BYTE&&(ut=o.RGB8I),et===o.SHORT&&(ut=o.RGB16I),et===o.INT&&(ut=o.RGB32I)),E===o.RGBA_INTEGER&&(et===o.UNSIGNED_BYTE&&(ut=o.RGBA8UI),et===o.UNSIGNED_SHORT&&(ut=o.RGBA16UI),et===o.UNSIGNED_INT&&(ut=o.RGBA32UI),et===o.BYTE&&(ut=o.RGBA8I),et===o.SHORT&&(ut=o.RGBA16I),et===o.INT&&(ut=o.RGBA32I)),E===o.RGB&&et===o.UNSIGNED_INT_5_9_9_9_REV&&(ut=o.RGB9_E5),E===o.RGBA){const Pt=xt?Ec:Ee.getTransfer(ht);et===o.FLOAT&&(ut=o.RGBA32F),et===o.HALF_FLOAT&&(ut=o.RGBA16F),et===o.UNSIGNED_BYTE&&(ut=Pt===Pe?o.SRGB8_ALPHA8:o.RGBA8),et===o.UNSIGNED_SHORT_4_4_4_4&&(ut=o.RGBA4),et===o.UNSIGNED_SHORT_5_5_5_1&&(ut=o.RGB5_A1)}return(ut===o.R16F||ut===o.R32F||ut===o.RG16F||ut===o.RG32F||ut===o.RGBA16F||ut===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ut}function U(L,E){let et;return L?E===null||E===pr||E===Ao?et=o.DEPTH24_STENCIL8:E===ta?et=o.DEPTH32F_STENCIL8:E===bo&&(et=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===pr||E===Ao?et=o.DEPTH_COMPONENT24:E===ta?et=o.DEPTH_COMPONENT32F:E===bo&&(et=o.DEPTH_COMPONENT16),et}function B(L,E){return M(L)===!0||L.isFramebufferTexture&&L.minFilter!==_i&&L.minFilter!==Ri?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function G(L){const E=L.target;E.removeEventListener("dispose",G),X(E),E.isVideoTexture&&g.delete(E)}function I(L){const E=L.target;E.removeEventListener("dispose",I),w(E)}function X(L){const E=r.get(L);if(E.__webglInit===void 0)return;const et=L.source,ht=x.get(et);if(ht){const xt=ht[E.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&R(L),Object.keys(ht).length===0&&x.delete(et)}r.remove(L)}function R(L){const E=r.get(L);o.deleteTexture(E.__webglTexture);const et=L.source,ht=x.get(et);delete ht[E.__cacheKey],h.memory.textures--}function w(L){const E=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(E.__webglFramebuffer[ht]))for(let xt=0;xt<E.__webglFramebuffer[ht].length;xt++)o.deleteFramebuffer(E.__webglFramebuffer[ht][xt]);else o.deleteFramebuffer(E.__webglFramebuffer[ht]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[ht])}else{if(Array.isArray(E.__webglFramebuffer))for(let ht=0;ht<E.__webglFramebuffer.length;ht++)o.deleteFramebuffer(E.__webglFramebuffer[ht]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ht=0;ht<E.__webglColorRenderbuffer.length;ht++)E.__webglColorRenderbuffer[ht]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[ht]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const et=L.textures;for(let ht=0,xt=et.length;ht<xt;ht++){const ut=r.get(et[ht]);ut.__webglTexture&&(o.deleteTexture(ut.__webglTexture),h.memory.textures--),r.remove(et[ht])}r.remove(L)}let O=0;function ot(){O=0}function it(){const L=O;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),O+=1,L}function lt(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function ct(L,E){const et=r.get(L);if(L.isVideoTexture&&re(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&et.__version!==L.version){const ht=L.image;if(ht===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ft(et,L,E);return}}else L.isExternalTexture&&(et.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,et.__webglTexture,o.TEXTURE0+E)}function N(L,E){const et=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&et.__version!==L.version){ft(et,L,E);return}i.bindTexture(o.TEXTURE_2D_ARRAY,et.__webglTexture,o.TEXTURE0+E)}function q(L,E){const et=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&et.__version!==L.version){ft(et,L,E);return}i.bindTexture(o.TEXTURE_3D,et.__webglTexture,o.TEXTURE0+E)}function W(L,E){const et=r.get(L);if(L.version>0&&et.__version!==L.version){Mt(et,L,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,et.__webglTexture,o.TEXTURE0+E)}const vt={[Lh]:o.REPEAT,[hr]:o.CLAMP_TO_EDGE,[Nh]:o.MIRRORED_REPEAT},D={[_i]:o.NEAREST,[bS]:o.NEAREST_MIPMAP_NEAREST,[Wl]:o.NEAREST_MIPMAP_LINEAR,[Ri]:o.LINEAR,[Bf]:o.LINEAR_MIPMAP_NEAREST,[dr]:o.LINEAR_MIPMAP_LINEAR},K={[DS]:o.NEVER,[zS]:o.ALWAYS,[US]:o.LESS,[v0]:o.LEQUAL,[LS]:o.EQUAL,[PS]:o.GEQUAL,[NS]:o.GREATER,[OS]:o.NOTEQUAL};function mt(L,E){if(E.type===ta&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Ri||E.magFilter===Bf||E.magFilter===Wl||E.magFilter===dr||E.minFilter===Ri||E.minFilter===Bf||E.minFilter===Wl||E.minFilter===dr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(L,o.TEXTURE_WRAP_S,vt[E.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,vt[E.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,vt[E.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,D[E.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,D[E.minFilter]),E.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,K[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===_i||E.minFilter!==Wl&&E.minFilter!==dr||E.type===ta&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const et=e.get("EXT_texture_filter_anisotropic");o.texParameterf(L,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function St(L,E){let et=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",G));const ht=E.source;let xt=x.get(ht);xt===void 0&&(xt={},x.set(ht,xt));const ut=lt(E);if(ut!==L.__cacheKey){xt[ut]===void 0&&(xt[ut]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,et=!0),xt[ut].usedTimes++;const Pt=xt[L.__cacheKey];Pt!==void 0&&(xt[L.__cacheKey].usedTimes--,Pt.usedTimes===0&&R(E)),L.__cacheKey=ut,L.__webglTexture=xt[ut].texture}return et}function At(L,E,et){return Math.floor(Math.floor(L/et)/E)}function J(L,E,et,ht){const ut=L.updateRanges;if(ut.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,et,ht,E.data);else{ut.sort((yt,Lt)=>yt.start-Lt.start);let Pt=0;for(let yt=1;yt<ut.length;yt++){const Lt=ut[Pt],jt=ut[yt],Xt=Lt.start+Lt.count,Dt=At(jt.start,E.width,4),ae=At(Lt.start,E.width,4);jt.start<=Xt+1&&Dt===ae&&At(jt.start+jt.count-1,E.width,4)===Dt?Lt.count=Math.max(Lt.count,jt.start+jt.count-Lt.start):(++Pt,ut[Pt]=jt)}ut.length=Pt+1;const Rt=o.getParameter(o.UNPACK_ROW_LENGTH),Wt=o.getParameter(o.UNPACK_SKIP_PIXELS),Yt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let yt=0,Lt=ut.length;yt<Lt;yt++){const jt=ut[yt],Xt=Math.floor(jt.start/4),Dt=Math.ceil(jt.count/4),ae=Xt%E.width,k=Math.floor(Xt/E.width),bt=Dt,Ct=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ae),o.pixelStorei(o.UNPACK_SKIP_ROWS,k),i.texSubImage2D(o.TEXTURE_2D,0,ae,k,bt,Ct,et,ht,E.data)}L.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Rt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Wt),o.pixelStorei(o.UNPACK_SKIP_ROWS,Yt)}}function ft(L,E,et){let ht=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ht=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ht=o.TEXTURE_3D);const xt=St(L,E),ut=E.source;i.bindTexture(ht,L.__webglTexture,o.TEXTURE0+et);const Pt=r.get(ut);if(ut.version!==Pt.__version||xt===!0){i.activeTexture(o.TEXTURE0+et);const Rt=Ee.getPrimaries(Ee.workingColorSpace),Wt=E.colorSpace===Oa?null:Ee.getPrimaries(E.colorSpace),Yt=E.colorSpace===Oa||Rt===Wt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let yt=C(E.image,!1,l.maxTextureSize);yt=qe(E,yt);const Lt=u.convert(E.format,E.colorSpace),jt=u.convert(E.type);let Xt=P(E.internalFormat,Lt,jt,E.colorSpace,E.isVideoTexture);mt(ht,E);let Dt;const ae=E.mipmaps,k=E.isVideoTexture!==!0,bt=Pt.__version===void 0||xt===!0,Ct=ut.dataReady,zt=B(E,yt);if(E.isDepthTexture)Xt=U(E.format===Co,E.type),bt&&(k?i.texStorage2D(o.TEXTURE_2D,1,Xt,yt.width,yt.height):i.texImage2D(o.TEXTURE_2D,0,Xt,yt.width,yt.height,0,Lt,jt,null));else if(E.isDataTexture)if(ae.length>0){k&&bt&&i.texStorage2D(o.TEXTURE_2D,zt,Xt,ae[0].width,ae[0].height);for(let Et=0,_t=ae.length;Et<_t;Et++)Dt=ae[Et],k?Ct&&i.texSubImage2D(o.TEXTURE_2D,Et,0,0,Dt.width,Dt.height,Lt,jt,Dt.data):i.texImage2D(o.TEXTURE_2D,Et,Xt,Dt.width,Dt.height,0,Lt,jt,Dt.data);E.generateMipmaps=!1}else k?(bt&&i.texStorage2D(o.TEXTURE_2D,zt,Xt,yt.width,yt.height),Ct&&J(E,yt,Lt,jt)):i.texImage2D(o.TEXTURE_2D,0,Xt,yt.width,yt.height,0,Lt,jt,yt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){k&&bt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,zt,Xt,ae[0].width,ae[0].height,yt.depth);for(let Et=0,_t=ae.length;Et<_t;Et++)if(Dt=ae[Et],E.format!==gi)if(Lt!==null)if(k){if(Ct)if(E.layerUpdates.size>0){const kt=z_(Dt.width,Dt.height,E.format,E.type);for(const ie of E.layerUpdates){const Re=Dt.data.subarray(ie*kt/Dt.data.BYTES_PER_ELEMENT,(ie+1)*kt/Dt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,ie,Dt.width,Dt.height,1,Lt,Re)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,0,Dt.width,Dt.height,yt.depth,Lt,Dt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Et,Xt,Dt.width,Dt.height,yt.depth,0,Dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Ct&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,0,Dt.width,Dt.height,yt.depth,Lt,jt,Dt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Et,Xt,Dt.width,Dt.height,yt.depth,0,Lt,jt,Dt.data)}else{k&&bt&&i.texStorage2D(o.TEXTURE_2D,zt,Xt,ae[0].width,ae[0].height);for(let Et=0,_t=ae.length;Et<_t;Et++)Dt=ae[Et],E.format!==gi?Lt!==null?k?Ct&&i.compressedTexSubImage2D(o.TEXTURE_2D,Et,0,0,Dt.width,Dt.height,Lt,Dt.data):i.compressedTexImage2D(o.TEXTURE_2D,Et,Xt,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Ct&&i.texSubImage2D(o.TEXTURE_2D,Et,0,0,Dt.width,Dt.height,Lt,jt,Dt.data):i.texImage2D(o.TEXTURE_2D,Et,Xt,Dt.width,Dt.height,0,Lt,jt,Dt.data)}else if(E.isDataArrayTexture)if(k){if(bt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,zt,Xt,yt.width,yt.height,yt.depth),Ct)if(E.layerUpdates.size>0){const Et=z_(yt.width,yt.height,E.format,E.type);for(const _t of E.layerUpdates){const kt=yt.data.subarray(_t*Et/yt.data.BYTES_PER_ELEMENT,(_t+1)*Et/yt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_t,yt.width,yt.height,1,Lt,jt,kt)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,Lt,jt,yt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Xt,yt.width,yt.height,yt.depth,0,Lt,jt,yt.data);else if(E.isData3DTexture)k?(bt&&i.texStorage3D(o.TEXTURE_3D,zt,Xt,yt.width,yt.height,yt.depth),Ct&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,Lt,jt,yt.data)):i.texImage3D(o.TEXTURE_3D,0,Xt,yt.width,yt.height,yt.depth,0,Lt,jt,yt.data);else if(E.isFramebufferTexture){if(bt)if(k)i.texStorage2D(o.TEXTURE_2D,zt,Xt,yt.width,yt.height);else{let Et=yt.width,_t=yt.height;for(let kt=0;kt<zt;kt++)i.texImage2D(o.TEXTURE_2D,kt,Xt,Et,_t,0,Lt,jt,null),Et>>=1,_t>>=1}}else if(ae.length>0){if(k&&bt){const Et=Ye(ae[0]);i.texStorage2D(o.TEXTURE_2D,zt,Xt,Et.width,Et.height)}for(let Et=0,_t=ae.length;Et<_t;Et++)Dt=ae[Et],k?Ct&&i.texSubImage2D(o.TEXTURE_2D,Et,0,0,Lt,jt,Dt):i.texImage2D(o.TEXTURE_2D,Et,Xt,Lt,jt,Dt);E.generateMipmaps=!1}else if(k){if(bt){const Et=Ye(yt);i.texStorage2D(o.TEXTURE_2D,zt,Xt,Et.width,Et.height)}Ct&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Lt,jt,yt)}else i.texImage2D(o.TEXTURE_2D,0,Xt,Lt,jt,yt);M(E)&&_(ht),Pt.__version=ut.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Mt(L,E,et){if(E.image.length!==6)return;const ht=St(L,E),xt=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+et);const ut=r.get(xt);if(xt.version!==ut.__version||ht===!0){i.activeTexture(o.TEXTURE0+et);const Pt=Ee.getPrimaries(Ee.workingColorSpace),Rt=E.colorSpace===Oa?null:Ee.getPrimaries(E.colorSpace),Wt=E.colorSpace===Oa||Pt===Rt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);const Yt=E.isCompressedTexture||E.image[0].isCompressedTexture,yt=E.image[0]&&E.image[0].isDataTexture,Lt=[];for(let _t=0;_t<6;_t++)!Yt&&!yt?Lt[_t]=C(E.image[_t],!0,l.maxCubemapSize):Lt[_t]=yt?E.image[_t].image:E.image[_t],Lt[_t]=qe(E,Lt[_t]);const jt=Lt[0],Xt=u.convert(E.format,E.colorSpace),Dt=u.convert(E.type),ae=P(E.internalFormat,Xt,Dt,E.colorSpace),k=E.isVideoTexture!==!0,bt=ut.__version===void 0||ht===!0,Ct=xt.dataReady;let zt=B(E,jt);mt(o.TEXTURE_CUBE_MAP,E);let Et;if(Yt){k&&bt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,zt,ae,jt.width,jt.height);for(let _t=0;_t<6;_t++){Et=Lt[_t].mipmaps;for(let kt=0;kt<Et.length;kt++){const ie=Et[kt];E.format!==gi?Xt!==null?k?Ct&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,kt,0,0,ie.width,ie.height,Xt,ie.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,kt,ae,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Ct&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,kt,0,0,ie.width,ie.height,Xt,Dt,ie.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,kt,ae,ie.width,ie.height,0,Xt,Dt,ie.data)}}}else{if(Et=E.mipmaps,k&&bt){Et.length>0&&zt++;const _t=Ye(Lt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,zt,ae,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(yt){k?Ct&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Lt[_t].width,Lt[_t].height,Xt,Dt,Lt[_t].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ae,Lt[_t].width,Lt[_t].height,0,Xt,Dt,Lt[_t].data);for(let kt=0;kt<Et.length;kt++){const Re=Et[kt].image[_t].image;k?Ct&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,kt+1,0,0,Re.width,Re.height,Xt,Dt,Re.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,kt+1,ae,Re.width,Re.height,0,Xt,Dt,Re.data)}}else{k?Ct&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Xt,Dt,Lt[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ae,Xt,Dt,Lt[_t]);for(let kt=0;kt<Et.length;kt++){const ie=Et[kt];k?Ct&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,kt+1,0,0,Xt,Dt,ie.image[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,kt+1,ae,Xt,Dt,ie.image[_t])}}}M(E)&&_(o.TEXTURE_CUBE_MAP),ut.__version=xt.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function wt(L,E,et,ht,xt,ut){const Pt=u.convert(et.format,et.colorSpace),Rt=u.convert(et.type),Wt=P(et.internalFormat,Pt,Rt,et.colorSpace),Yt=r.get(E),yt=r.get(et);if(yt.__renderTarget=E,!Yt.__hasExternalTextures){const Lt=Math.max(1,E.width>>ut),jt=Math.max(1,E.height>>ut);xt===o.TEXTURE_3D||xt===o.TEXTURE_2D_ARRAY?i.texImage3D(xt,ut,Wt,Lt,jt,E.depth,0,Pt,Rt,null):i.texImage2D(xt,ut,Wt,Lt,jt,0,Pt,Rt,null)}i.bindFramebuffer(o.FRAMEBUFFER,L),Ft(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ht,xt,yt.__webglTexture,0,He(E)):(xt===o.TEXTURE_2D||xt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ht,xt,yt.__webglTexture,ut),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ht(L,E,et){if(o.bindRenderbuffer(o.RENDERBUFFER,L),E.depthBuffer){const ht=E.depthTexture,xt=ht&&ht.isDepthTexture?ht.type:null,ut=U(E.stencilBuffer,xt),Pt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Rt=He(E);Ft(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Rt,ut,E.width,E.height):et?o.renderbufferStorageMultisample(o.RENDERBUFFER,Rt,ut,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,ut,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Pt,o.RENDERBUFFER,L)}else{const ht=E.textures;for(let xt=0;xt<ht.length;xt++){const ut=ht[xt],Pt=u.convert(ut.format,ut.colorSpace),Rt=u.convert(ut.type),Wt=P(ut.internalFormat,Pt,Rt,ut.colorSpace),Yt=He(E);et&&Ft(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Yt,Wt,E.width,E.height):Ft(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Yt,Wt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Wt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Vt(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ht=r.get(E.depthTexture);ht.__renderTarget=E,(!ht.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ct(E.depthTexture,0);const xt=ht.__webglTexture,ut=He(E);if(E.depthTexture.format===Ro)Ft(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,xt,0,ut):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,xt,0);else if(E.depthTexture.format===Co)Ft(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,xt,0,ut):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,xt,0);else throw new Error("Unknown depthTexture format")}function Fe(L){const E=r.get(L),et=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const ht=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ht){const xt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ht.removeEventListener("dispose",xt)};ht.addEventListener("dispose",xt),E.__depthDisposeCallback=xt}E.__boundDepthTexture=ht}if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");const ht=L.texture.mipmaps;ht&&ht.length>0?Vt(E.__webglFramebuffer[0],L):Vt(E.__webglFramebuffer,L)}else if(et){E.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[ht]),E.__webglDepthbuffer[ht]===void 0)E.__webglDepthbuffer[ht]=o.createRenderbuffer(),Ht(E.__webglDepthbuffer[ht],L,!1);else{const xt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ut=E.__webglDepthbuffer[ht];o.bindRenderbuffer(o.RENDERBUFFER,ut),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,ut)}}else{const ht=L.texture.mipmaps;if(ht&&ht.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),Ht(E.__webglDepthbuffer,L,!1);else{const xt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ut=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ut),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,ut)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function de(L,E,et){const ht=r.get(L);E!==void 0&&wt(ht.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),et!==void 0&&Fe(L)}function F(L){const E=L.texture,et=r.get(L),ht=r.get(E);L.addEventListener("dispose",I);const xt=L.textures,ut=L.isWebGLCubeRenderTarget===!0,Pt=xt.length>1;if(Pt||(ht.__webglTexture===void 0&&(ht.__webglTexture=o.createTexture()),ht.__version=E.version,h.memory.textures++),ut){et.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(E.mipmaps&&E.mipmaps.length>0){et.__webglFramebuffer[Rt]=[];for(let Wt=0;Wt<E.mipmaps.length;Wt++)et.__webglFramebuffer[Rt][Wt]=o.createFramebuffer()}else et.__webglFramebuffer[Rt]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){et.__webglFramebuffer=[];for(let Rt=0;Rt<E.mipmaps.length;Rt++)et.__webglFramebuffer[Rt]=o.createFramebuffer()}else et.__webglFramebuffer=o.createFramebuffer();if(Pt)for(let Rt=0,Wt=xt.length;Rt<Wt;Rt++){const Yt=r.get(xt[Rt]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=o.createTexture(),h.memory.textures++)}if(L.samples>0&&Ft(L)===!1){et.__webglMultisampledFramebuffer=o.createFramebuffer(),et.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let Rt=0;Rt<xt.length;Rt++){const Wt=xt[Rt];et.__webglColorRenderbuffer[Rt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,et.__webglColorRenderbuffer[Rt]);const Yt=u.convert(Wt.format,Wt.colorSpace),yt=u.convert(Wt.type),Lt=P(Wt.internalFormat,Yt,yt,Wt.colorSpace,L.isXRRenderTarget===!0),jt=He(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,jt,Lt,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.RENDERBUFFER,et.__webglColorRenderbuffer[Rt])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(et.__webglDepthRenderbuffer=o.createRenderbuffer(),Ht(et.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ut){i.bindTexture(o.TEXTURE_CUBE_MAP,ht.__webglTexture),mt(o.TEXTURE_CUBE_MAP,E);for(let Rt=0;Rt<6;Rt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Wt=0;Wt<E.mipmaps.length;Wt++)wt(et.__webglFramebuffer[Rt][Wt],L,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Wt);else wt(et.__webglFramebuffer[Rt],L,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);M(E)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Pt){for(let Rt=0,Wt=xt.length;Rt<Wt;Rt++){const Yt=xt[Rt],yt=r.get(Yt);let Lt=o.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Lt=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Lt,yt.__webglTexture),mt(Lt,Yt),wt(et.__webglFramebuffer,L,Yt,o.COLOR_ATTACHMENT0+Rt,Lt,0),M(Yt)&&_(Lt)}i.unbindTexture()}else{let Rt=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Rt=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Rt,ht.__webglTexture),mt(Rt,E),E.mipmaps&&E.mipmaps.length>0)for(let Wt=0;Wt<E.mipmaps.length;Wt++)wt(et.__webglFramebuffer[Wt],L,E,o.COLOR_ATTACHMENT0,Rt,Wt);else wt(et.__webglFramebuffer,L,E,o.COLOR_ATTACHMENT0,Rt,0);M(E)&&_(Rt),i.unbindTexture()}L.depthBuffer&&Fe(L)}function Ae(L){const E=L.textures;for(let et=0,ht=E.length;et<ht;et++){const xt=E[et];if(M(xt)){const ut=H(L),Pt=r.get(xt).__webglTexture;i.bindTexture(ut,Pt),_(ut),i.unbindTexture()}}}const Qt=[],xe=[];function It(L){if(L.samples>0){if(Ft(L)===!1){const E=L.textures,et=L.width,ht=L.height;let xt=o.COLOR_BUFFER_BIT;const ut=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Pt=r.get(L),Rt=E.length>1;if(Rt)for(let Yt=0;Yt<E.length;Yt++)i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Yt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Yt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer);const Wt=L.texture.mipmaps;Wt&&Wt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let Yt=0;Yt<E.length;Yt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(xt|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(xt|=o.STENCIL_BUFFER_BIT)),Rt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Pt.__webglColorRenderbuffer[Yt]);const yt=r.get(E[Yt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,yt,0)}o.blitFramebuffer(0,0,et,ht,0,0,et,ht,xt,o.NEAREST),m===!0&&(Qt.length=0,xe.length=0,Qt.push(o.COLOR_ATTACHMENT0+Yt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Qt.push(ut),xe.push(ut),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,xe)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Qt))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Rt)for(let Yt=0;Yt<E.length;Yt++){i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Yt,o.RENDERBUFFER,Pt.__webglColorRenderbuffer[Yt]);const yt=r.get(E[Yt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Yt,o.TEXTURE_2D,yt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const E=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function He(L){return Math.min(l.maxSamples,L.samples)}function Ft(L){const E=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function re(L){const E=h.render.frame;g.get(L)!==E&&(g.set(L,E),L.update())}function qe(L,E){const et=L.colorSpace,ht=L.format,xt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||et!==vs&&et!==Oa&&(Ee.getTransfer(et)===Pe?(ht!==gi||xt!==Di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),E}function Ye(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=it,this.resetTextureUnits=ot,this.setTexture2D=ct,this.setTexture2DArray=N,this.setTexture3D=q,this.setTextureCube=W,this.rebindTextures=de,this.setupRenderTarget=F,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=It,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=Ft}function Qb(o,e){function i(r,l=Oa){let u;const h=Ee.getTransfer(l);if(r===Di)return o.UNSIGNED_BYTE;if(r===dd)return o.UNSIGNED_SHORT_4_4_4_4;if(r===pd)return o.UNSIGNED_SHORT_5_5_5_1;if(r===h0)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===u0)return o.BYTE;if(r===f0)return o.SHORT;if(r===bo)return o.UNSIGNED_SHORT;if(r===hd)return o.INT;if(r===pr)return o.UNSIGNED_INT;if(r===ta)return o.FLOAT;if(r===wo)return o.HALF_FLOAT;if(r===d0)return o.ALPHA;if(r===p0)return o.RGB;if(r===gi)return o.RGBA;if(r===Ro)return o.DEPTH_COMPONENT;if(r===Co)return o.DEPTH_STENCIL;if(r===m0)return o.RED;if(r===md)return o.RED_INTEGER;if(r===g0)return o.RG;if(r===gd)return o.RG_INTEGER;if(r===_d)return o.RGBA_INTEGER;if(r===mc||r===gc||r===_c||r===vc)if(h===Pe)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===mc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===gc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===_c)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===vc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===mc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===gc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===_c)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===vc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Oh||r===Ph||r===zh||r===Bh)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Oh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ph)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===zh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Bh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ih||r===Fh||r===Hh)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Ih||r===Fh)return h===Pe?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Hh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Gh||r===Vh||r===kh||r===Xh||r===Wh||r===qh||r===Yh||r===Zh||r===jh||r===Kh||r===Qh||r===Jh||r===$h||r===td)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Gh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Vh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===kh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Xh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Wh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===qh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Yh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Zh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===jh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Kh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Qh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Jh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===$h)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===td)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===xc||r===ed||r===nd)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===xc)return h===Pe?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ed)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===nd)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===_0||r===id||r===ad||r===rd)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===xc)return u.COMPRESSED_RED_RGTC1_EXT;if(r===id)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ad)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===rd)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ao?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}class P0 extends Fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const Jb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$b=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class tA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new P0(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Ia({vertexShader:Jb,fragmentShader:$b,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ea(new Po(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class eA extends Ss{constructor(e,i){super();const r=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,g=null,v=null,x=null,y=null,b=null;const C=new tA,M={},_=i.getContextAttributes();let H=null,P=null;const U=[],B=[],G=new Te;let I=null;const X=new jn;X.viewport=new ze;const R=new jn;R.viewport=new ze;const w=[X,R],O=new MM;let ot=null,it=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ft=U[J];return ft===void 0&&(ft=new sh,U[J]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(J){let ft=U[J];return ft===void 0&&(ft=new sh,U[J]=ft),ft.getGripSpace()},this.getHand=function(J){let ft=U[J];return ft===void 0&&(ft=new sh,U[J]=ft),ft.getHandSpace()};function lt(J){const ft=B.indexOf(J.inputSource);if(ft===-1)return;const Mt=U[ft];Mt!==void 0&&(Mt.update(J.inputSource,J.frame,p||h),Mt.dispatchEvent({type:J.type,data:J.inputSource}))}function ct(){l.removeEventListener("select",lt),l.removeEventListener("selectstart",lt),l.removeEventListener("selectend",lt),l.removeEventListener("squeeze",lt),l.removeEventListener("squeezestart",lt),l.removeEventListener("squeezeend",lt),l.removeEventListener("end",ct),l.removeEventListener("inputsourceschange",N);for(let J=0;J<U.length;J++){const ft=B[J];ft!==null&&(B[J]=null,U[J].disconnect(ft))}ot=null,it=null,C.reset();for(const J in M)delete M[J];e.setRenderTarget(H),y=null,x=null,v=null,l=null,P=null,At.stop(),r.isPresenting=!1,e.setPixelRatio(I),e.setSize(G.width,G.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){u=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){d=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(J){p=J},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return v},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(J){if(l=J,l!==null){if(H=e.getRenderTarget(),l.addEventListener("select",lt),l.addEventListener("selectstart",lt),l.addEventListener("selectend",lt),l.addEventListener("squeeze",lt),l.addEventListener("squeezestart",lt),l.addEventListener("squeezeend",lt),l.addEventListener("end",ct),l.addEventListener("inputsourceschange",N),_.xrCompatible!==!0&&await i.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(G),typeof XRWebGLBinding<"u"&&(v=new XRWebGLBinding(l,i)),v!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,wt=null,Ht=null;_.depth&&(Ht=_.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Mt=_.stencil?Co:Ro,wt=_.stencil?Ao:pr);const Vt={colorFormat:i.RGBA8,depthFormat:Ht,scaleFactor:u};x=v.createProjectionLayer(Vt),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),P=new mr(x.textureWidth,x.textureHeight,{format:gi,type:Di,depthTexture:new C0(x.textureWidth,x.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Mt={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(l,i,Mt),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),P=new mr(y.framebufferWidth,y.framebufferHeight,{format:gi,type:Di,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),At.setContext(l),At.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return C.getDepthTexture()};function N(J){for(let ft=0;ft<J.removed.length;ft++){const Mt=J.removed[ft],wt=B.indexOf(Mt);wt>=0&&(B[wt]=null,U[wt].disconnect(Mt))}for(let ft=0;ft<J.added.length;ft++){const Mt=J.added[ft];let wt=B.indexOf(Mt);if(wt===-1){for(let Vt=0;Vt<U.length;Vt++)if(Vt>=B.length){B.push(Mt),wt=Vt;break}else if(B[Vt]===null){B[Vt]=Mt,wt=Vt;break}if(wt===-1)break}const Ht=U[wt];Ht&&Ht.connect(Mt)}}const q=new tt,W=new tt;function vt(J,ft,Mt){q.setFromMatrixPosition(ft.matrixWorld),W.setFromMatrixPosition(Mt.matrixWorld);const wt=q.distanceTo(W),Ht=ft.projectionMatrix.elements,Vt=Mt.projectionMatrix.elements,Fe=Ht[14]/(Ht[10]-1),de=Ht[14]/(Ht[10]+1),F=(Ht[9]+1)/Ht[5],Ae=(Ht[9]-1)/Ht[5],Qt=(Ht[8]-1)/Ht[0],xe=(Vt[8]+1)/Vt[0],It=Fe*Qt,He=Fe*xe,Ft=wt/(-Qt+xe),re=Ft*-Qt;if(ft.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(re),J.translateZ(Ft),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ht[10]===-1)J.projectionMatrix.copy(ft.projectionMatrix),J.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const qe=Fe+Ft,Ye=de+Ft,L=It-re,E=He+(wt-re),et=F*de/Ye*qe,ht=Ae*de/Ye*qe;J.projectionMatrix.makePerspective(L,E,et,ht,qe,Ye),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function D(J,ft){ft===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ft.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(l===null)return;let ft=J.near,Mt=J.far;C.texture!==null&&(C.depthNear>0&&(ft=C.depthNear),C.depthFar>0&&(Mt=C.depthFar)),O.near=R.near=X.near=ft,O.far=R.far=X.far=Mt,(ot!==O.near||it!==O.far)&&(l.updateRenderState({depthNear:O.near,depthFar:O.far}),ot=O.near,it=O.far),O.layers.mask=J.layers.mask|6,X.layers.mask=O.layers.mask&3,R.layers.mask=O.layers.mask&5;const wt=J.parent,Ht=O.cameras;D(O,wt);for(let Vt=0;Vt<Ht.length;Vt++)D(Ht[Vt],wt);Ht.length===2?vt(O,X,R):O.projectionMatrix.copy(X.projectionMatrix),K(J,O,wt)};function K(J,ft,Mt){Mt===null?J.matrix.copy(ft.matrixWorld):(J.matrix.copy(Mt.matrixWorld),J.matrix.invert(),J.matrix.multiply(ft.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ft.projectionMatrix),J.projectionMatrixInverse.copy(ft.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=sd*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(x===null&&y===null))return m},this.setFoveation=function(J){m=J,x!==null&&(x.fixedFoveation=J),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=J)},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(O)},this.getCameraTexture=function(J){return M[J]};let mt=null;function St(J,ft){if(g=ft.getViewerPose(p||h),b=ft,g!==null){const Mt=g.views;y!==null&&(e.setRenderTargetFramebuffer(P,y.framebuffer),e.setRenderTarget(P));let wt=!1;Mt.length!==O.cameras.length&&(O.cameras.length=0,wt=!0);for(let de=0;de<Mt.length;de++){const F=Mt[de];let Ae=null;if(y!==null)Ae=y.getViewport(F);else{const xe=v.getViewSubImage(x,F);Ae=xe.viewport,de===0&&(e.setRenderTargetTextures(P,xe.colorTexture,xe.depthStencilTexture),e.setRenderTarget(P))}let Qt=w[de];Qt===void 0&&(Qt=new jn,Qt.layers.enable(de),Qt.viewport=new ze,w[de]=Qt),Qt.matrix.fromArray(F.transform.matrix),Qt.matrix.decompose(Qt.position,Qt.quaternion,Qt.scale),Qt.projectionMatrix.fromArray(F.projectionMatrix),Qt.projectionMatrixInverse.copy(Qt.projectionMatrix).invert(),Qt.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),de===0&&(O.matrix.copy(Qt.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),wt===!0&&O.cameras.push(Qt)}const Ht=l.enabledFeatures;if(Ht&&Ht.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&v){const de=v.getDepthInformation(Mt[0]);de&&de.isValid&&de.texture&&C.init(de,l.renderState)}if(Ht&&Ht.includes("camera-access")&&(e.state.unbindTexture(),v))for(let de=0;de<Mt.length;de++){const F=Mt[de].camera;if(F){let Ae=M[F];Ae||(Ae=new P0,M[F]=Ae);const Qt=v.getCameraImage(F);Ae.sourceTexture=Qt}}}for(let Mt=0;Mt<U.length;Mt++){const wt=B[Mt],Ht=U[Mt];wt!==null&&Ht!==void 0&&Ht.update(wt,ft,p||h)}mt&&mt(J,ft),ft.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ft}),b=null}const At=new D0;At.setAnimationLoop(St),this.setAnimationLoop=function(J){mt=J},this.dispose=function(){}}}const or=new ia,nA=new We;function iA(o,e){function i(M,_){M.matrixAutoUpdate===!0&&M.updateMatrix(),_.value.copy(M.matrix)}function r(M,_){_.color.getRGB(M.fogColor.value,b0(o)),_.isFog?(M.fogNear.value=_.near,M.fogFar.value=_.far):_.isFogExp2&&(M.fogDensity.value=_.density)}function l(M,_,H,P,U){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(M,_):_.isMeshToonMaterial?(u(M,_),v(M,_)):_.isMeshPhongMaterial?(u(M,_),g(M,_)):_.isMeshStandardMaterial?(u(M,_),x(M,_),_.isMeshPhysicalMaterial&&y(M,_,U)):_.isMeshMatcapMaterial?(u(M,_),b(M,_)):_.isMeshDepthMaterial?u(M,_):_.isMeshDistanceMaterial?(u(M,_),C(M,_)):_.isMeshNormalMaterial?u(M,_):_.isLineBasicMaterial?(h(M,_),_.isLineDashedMaterial&&d(M,_)):_.isPointsMaterial?m(M,_,H,P):_.isSpriteMaterial?p(M,_):_.isShadowMaterial?(M.color.value.copy(_.color),M.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(M,_){M.opacity.value=_.opacity,_.color&&M.diffuse.value.copy(_.color),_.emissive&&M.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.bumpMap&&(M.bumpMap.value=_.bumpMap,i(_.bumpMap,M.bumpMapTransform),M.bumpScale.value=_.bumpScale,_.side===In&&(M.bumpScale.value*=-1)),_.normalMap&&(M.normalMap.value=_.normalMap,i(_.normalMap,M.normalMapTransform),M.normalScale.value.copy(_.normalScale),_.side===In&&M.normalScale.value.negate()),_.displacementMap&&(M.displacementMap.value=_.displacementMap,i(_.displacementMap,M.displacementMapTransform),M.displacementScale.value=_.displacementScale,M.displacementBias.value=_.displacementBias),_.emissiveMap&&(M.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,M.emissiveMapTransform)),_.specularMap&&(M.specularMap.value=_.specularMap,i(_.specularMap,M.specularMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest);const H=e.get(_),P=H.envMap,U=H.envMapRotation;P&&(M.envMap.value=P,or.copy(U),or.x*=-1,or.y*=-1,or.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(or.y*=-1,or.z*=-1),M.envMapRotation.value.setFromMatrix4(nA.makeRotationFromEuler(or)),M.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=_.reflectivity,M.ior.value=_.ior,M.refractionRatio.value=_.refractionRatio),_.lightMap&&(M.lightMap.value=_.lightMap,M.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,M.lightMapTransform)),_.aoMap&&(M.aoMap.value=_.aoMap,M.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,M.aoMapTransform))}function h(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform))}function d(M,_){M.dashSize.value=_.dashSize,M.totalSize.value=_.dashSize+_.gapSize,M.scale.value=_.scale}function m(M,_,H,P){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.size.value=_.size*H,M.scale.value=P*.5,_.map&&(M.map.value=_.map,i(_.map,M.uvTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function p(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.rotation.value=_.rotation,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function g(M,_){M.specular.value.copy(_.specular),M.shininess.value=Math.max(_.shininess,1e-4)}function v(M,_){_.gradientMap&&(M.gradientMap.value=_.gradientMap)}function x(M,_){M.metalness.value=_.metalness,_.metalnessMap&&(M.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,M.metalnessMapTransform)),M.roughness.value=_.roughness,_.roughnessMap&&(M.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,M.roughnessMapTransform)),_.envMap&&(M.envMapIntensity.value=_.envMapIntensity)}function y(M,_,H){M.ior.value=_.ior,_.sheen>0&&(M.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),M.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(M.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,M.sheenColorMapTransform)),_.sheenRoughnessMap&&(M.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,M.sheenRoughnessMapTransform))),_.clearcoat>0&&(M.clearcoat.value=_.clearcoat,M.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(M.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,M.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(M.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===In&&M.clearcoatNormalScale.value.negate())),_.dispersion>0&&(M.dispersion.value=_.dispersion),_.iridescence>0&&(M.iridescence.value=_.iridescence,M.iridescenceIOR.value=_.iridescenceIOR,M.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(M.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,M.iridescenceMapTransform)),_.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),_.transmission>0&&(M.transmission.value=_.transmission,M.transmissionSamplerMap.value=H.texture,M.transmissionSamplerSize.value.set(H.width,H.height),_.transmissionMap&&(M.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,M.transmissionMapTransform)),M.thickness.value=_.thickness,_.thicknessMap&&(M.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=_.attenuationDistance,M.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(M.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(M.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=_.specularIntensity,M.specularColor.value.copy(_.specularColor),_.specularColorMap&&(M.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,M.specularColorMapTransform)),_.specularIntensityMap&&(M.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,_){_.matcap&&(M.matcap.value=_.matcap)}function C(M,_){const H=e.get(_).light;M.referencePosition.value.setFromMatrixPosition(H.matrixWorld),M.nearDistance.value=H.shadow.camera.near,M.farDistance.value=H.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function aA(o,e,i,r){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(H,P){const U=P.program;r.uniformBlockBinding(H,U)}function p(H,P){let U=l[H.id];U===void 0&&(b(H),U=g(H),l[H.id]=U,H.addEventListener("dispose",M));const B=P.program;r.updateUBOMapping(H,B);const G=e.render.frame;u[H.id]!==G&&(x(H),u[H.id]=G)}function g(H){const P=v();H.__bindingPointIndex=P;const U=o.createBuffer(),B=H.__size,G=H.usage;return o.bindBuffer(o.UNIFORM_BUFFER,U),o.bufferData(o.UNIFORM_BUFFER,B,G),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,P,U),U}function v(){for(let H=0;H<d;H++)if(h.indexOf(H)===-1)return h.push(H),H;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(H){const P=l[H.id],U=H.uniforms,B=H.__cache;o.bindBuffer(o.UNIFORM_BUFFER,P);for(let G=0,I=U.length;G<I;G++){const X=Array.isArray(U[G])?U[G]:[U[G]];for(let R=0,w=X.length;R<w;R++){const O=X[R];if(y(O,G,R,B)===!0){const ot=O.__offset,it=Array.isArray(O.value)?O.value:[O.value];let lt=0;for(let ct=0;ct<it.length;ct++){const N=it[ct],q=C(N);typeof N=="number"||typeof N=="boolean"?(O.__data[0]=N,o.bufferSubData(o.UNIFORM_BUFFER,ot+lt,O.__data)):N.isMatrix3?(O.__data[0]=N.elements[0],O.__data[1]=N.elements[1],O.__data[2]=N.elements[2],O.__data[3]=0,O.__data[4]=N.elements[3],O.__data[5]=N.elements[4],O.__data[6]=N.elements[5],O.__data[7]=0,O.__data[8]=N.elements[6],O.__data[9]=N.elements[7],O.__data[10]=N.elements[8],O.__data[11]=0):(N.toArray(O.__data,lt),lt+=q.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ot,O.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(H,P,U,B){const G=H.value,I=P+"_"+U;if(B[I]===void 0)return typeof G=="number"||typeof G=="boolean"?B[I]=G:B[I]=G.clone(),!0;{const X=B[I];if(typeof G=="number"||typeof G=="boolean"){if(X!==G)return B[I]=G,!0}else if(X.equals(G)===!1)return X.copy(G),!0}return!1}function b(H){const P=H.uniforms;let U=0;const B=16;for(let I=0,X=P.length;I<X;I++){const R=Array.isArray(P[I])?P[I]:[P[I]];for(let w=0,O=R.length;w<O;w++){const ot=R[w],it=Array.isArray(ot.value)?ot.value:[ot.value];for(let lt=0,ct=it.length;lt<ct;lt++){const N=it[lt],q=C(N),W=U%B,vt=W%q.boundary,D=W+vt;U+=vt,D!==0&&B-D<q.storage&&(U+=B-D),ot.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),ot.__offset=U,U+=q.storage}}}const G=U%B;return G>0&&(U+=B-G),H.__size=U,H.__cache={},this}function C(H){const P={boundary:0,storage:0};return typeof H=="number"||typeof H=="boolean"?(P.boundary=4,P.storage=4):H.isVector2?(P.boundary=8,P.storage=8):H.isVector3||H.isColor?(P.boundary=16,P.storage=12):H.isVector4?(P.boundary=16,P.storage=16):H.isMatrix3?(P.boundary=48,P.storage=48):H.isMatrix4?(P.boundary=64,P.storage=64):H.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",H),P}function M(H){const P=H.target;P.removeEventListener("dispose",M);const U=h.indexOf(P.__bindingPointIndex);h.splice(U,1),o.deleteBuffer(l[P.id]),delete l[P.id],delete u[P.id]}function _(){for(const H in l)o.deleteBuffer(l[H]);h=[],l={},u={}}return{bind:m,update:p,dispose:_}}class rA{constructor(e={}){const{canvas:i=IS(),context:r=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=h;const b=new Uint32Array(4),C=new Int32Array(4);let M=null,_=null;const H=[],P=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=za,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let B=!1;this._outputColorSpace=ai;let G=0,I=0,X=null,R=-1,w=null;const O=new ze,ot=new ze;let it=null;const lt=new Ce(0);let ct=0,N=i.width,q=i.height,W=1,vt=null,D=null;const K=new ze(0,0,N,q),mt=new ze(0,0,N,q);let St=!1;const At=new Md;let J=!1,ft=!1;const Mt=new We,wt=new tt,Ht=new ze,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Fe=!1;function de(){return X===null?W:1}let F=r;function Ae(A,Y){return i.getContext(A,Y)}try{const A={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${fd}`),i.addEventListener("webglcontextlost",Ct,!1),i.addEventListener("webglcontextrestored",zt,!1),i.addEventListener("webglcontextcreationerror",Et,!1),F===null){const Y="webgl2";if(F=Ae(Y,A),F===null)throw Ae(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Qt,xe,It,He,Ft,re,qe,Ye,L,E,et,ht,xt,ut,Pt,Rt,Wt,Yt,yt,Lt,jt,Xt,Dt,ae;function k(){Qt=new mT(F),Qt.init(),Xt=new Qb(F,Qt),xe=new lT(F,Qt,e,Xt),It=new jb(F,Qt),xe.reversedDepthBuffer&&x&&It.buffers.depth.setReversed(!0),He=new vT(F),Ft=new zb,re=new Kb(F,Qt,It,Ft,xe,Xt,He),qe=new uT(U),Ye=new pT(U),L=new TM(F),Dt=new sT(F,L),E=new gT(F,L,He,Dt),et=new ST(F,E,L,He),yt=new xT(F,xe,re),Rt=new cT(Ft),ht=new Pb(U,qe,Ye,Qt,xe,Dt,Rt),xt=new iA(U,Ft),ut=new Ib,Pt=new Xb(Qt),Yt=new rT(U,qe,Ye,It,et,y,m),Wt=new Yb(U,et,xe),ae=new aA(F,He,xe,It),Lt=new oT(F,Qt,He),jt=new _T(F,Qt,He),He.programs=ht.programs,U.capabilities=xe,U.extensions=Qt,U.properties=Ft,U.renderLists=ut,U.shadowMap=Wt,U.state=It,U.info=He}k();const bt=new eA(U,F);this.xr=bt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const A=Qt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Qt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(A){A!==void 0&&(W=A,this.setSize(N,q,!1))},this.getSize=function(A){return A.set(N,q)},this.setSize=function(A,Y,rt=!0){if(bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=A,q=Y,i.width=Math.floor(A*W),i.height=Math.floor(Y*W),rt===!0&&(i.style.width=A+"px",i.style.height=Y+"px"),this.setViewport(0,0,A,Y)},this.getDrawingBufferSize=function(A){return A.set(N*W,q*W).floor()},this.setDrawingBufferSize=function(A,Y,rt){N=A,q=Y,W=rt,i.width=Math.floor(A*rt),i.height=Math.floor(Y*rt),this.setViewport(0,0,A,Y)},this.getCurrentViewport=function(A){return A.copy(O)},this.getViewport=function(A){return A.copy(K)},this.setViewport=function(A,Y,rt,st){A.isVector4?K.set(A.x,A.y,A.z,A.w):K.set(A,Y,rt,st),It.viewport(O.copy(K).multiplyScalar(W).round())},this.getScissor=function(A){return A.copy(mt)},this.setScissor=function(A,Y,rt,st){A.isVector4?mt.set(A.x,A.y,A.z,A.w):mt.set(A,Y,rt,st),It.scissor(ot.copy(mt).multiplyScalar(W).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(A){It.setScissorTest(St=A)},this.setOpaqueSort=function(A){vt=A},this.setTransparentSort=function(A){D=A},this.getClearColor=function(A){return A.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor(...arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha(...arguments)},this.clear=function(A=!0,Y=!0,rt=!0){let st=0;if(A){let j=!1;if(X!==null){const Tt=X.texture.format;j=Tt===_d||Tt===gd||Tt===md}if(j){const Tt=X.texture.type,Ut=Tt===Di||Tt===pr||Tt===bo||Tt===Ao||Tt===dd||Tt===pd,Bt=Yt.getClearColor(),Nt=Yt.getClearAlpha(),Jt=Bt.r,te=Bt.g,qt=Bt.b;Ut?(b[0]=Jt,b[1]=te,b[2]=qt,b[3]=Nt,F.clearBufferuiv(F.COLOR,0,b)):(C[0]=Jt,C[1]=te,C[2]=qt,C[3]=Nt,F.clearBufferiv(F.COLOR,0,C))}else st|=F.COLOR_BUFFER_BIT}Y&&(st|=F.DEPTH_BUFFER_BIT),rt&&(st|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ct,!1),i.removeEventListener("webglcontextrestored",zt,!1),i.removeEventListener("webglcontextcreationerror",Et,!1),Yt.dispose(),ut.dispose(),Pt.dispose(),Ft.dispose(),qe.dispose(),Ye.dispose(),et.dispose(),Dt.dispose(),ae.dispose(),ht.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",sn),bt.removeEventListener("sessionend",on),je.stop()};function Ct(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function zt(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const A=He.autoReset,Y=Wt.enabled,rt=Wt.autoUpdate,st=Wt.needsUpdate,j=Wt.type;k(),He.autoReset=A,Wt.enabled=Y,Wt.autoUpdate=rt,Wt.needsUpdate=st,Wt.type=j}function Et(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function _t(A){const Y=A.target;Y.removeEventListener("dispose",_t),kt(Y)}function kt(A){ie(A),Ft.remove(A)}function ie(A){const Y=Ft.get(A).programs;Y!==void 0&&(Y.forEach(function(rt){ht.releaseProgram(rt)}),A.isShaderMaterial&&ht.releaseShaderCache(A))}this.renderBufferDirect=function(A,Y,rt,st,j,Tt){Y===null&&(Y=Vt);const Ut=j.isMesh&&j.matrixWorld.determinant()<0,Bt=aa(A,Y,rt,st,j);It.setMaterial(st,Ut);let Nt=rt.index,Jt=1;if(st.wireframe===!0){if(Nt=E.getWireframeAttribute(rt),Nt===void 0)return;Jt=2}const te=rt.drawRange,qt=rt.attributes.position;let le=te.start*Jt,Me=(te.start+te.count)*Jt;Tt!==null&&(le=Math.max(le,Tt.start*Jt),Me=Math.min(Me,(Tt.start+Tt.count)*Jt)),Nt!==null?(le=Math.max(le,0),Me=Math.min(Me,Nt.count)):qt!=null&&(le=Math.max(le,0),Me=Math.min(Me,qt.count));const ke=Me-le;if(ke<0||ke===1/0)return;Dt.setup(j,st,Bt,rt,Nt);let Ue,ce=Lt;if(Nt!==null&&(Ue=L.get(Nt),ce=jt,ce.setIndex(Ue)),j.isMesh)st.wireframe===!0?(It.setLineWidth(st.wireframeLinewidth*de()),ce.setMode(F.LINES)):ce.setMode(F.TRIANGLES);else if(j.isLine){let Kt=st.linewidth;Kt===void 0&&(Kt=1),It.setLineWidth(Kt*de()),j.isLineSegments?ce.setMode(F.LINES):j.isLineLoop?ce.setMode(F.LINE_LOOP):ce.setMode(F.LINE_STRIP)}else j.isPoints?ce.setMode(F.POINTS):j.isSprite&&ce.setMode(F.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)ds("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ce.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(Qt.get("WEBGL_multi_draw"))ce.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Kt=j._multiDrawStarts,Ve=j._multiDrawCounts,pe=j._multiDrawCount,Mn=Nt?L.get(Nt).bytesPerElement:1,li=Ft.get(st).currentProgram.getUniforms();for(let Rn=0;Rn<pe;Rn++)li.setValue(F,"_gl_DrawID",Rn),ce.render(Kt[Rn]/Mn,Ve[Rn])}else if(j.isInstancedMesh)ce.renderInstances(le,ke,j.count);else if(rt.isInstancedBufferGeometry){const Kt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Ve=Math.min(rt.instanceCount,Kt);ce.renderInstances(le,ke,Ve)}else ce.render(le,ke)};function Re(A,Y,rt){A.transparent===!0&&A.side===$i&&A.forceSinglePass===!1?(A.side=In,A.needsUpdate=!0,xi(A,Y,rt),A.side=Ba,A.needsUpdate=!0,xi(A,Y,rt),A.side=$i):xi(A,Y,rt)}this.compile=function(A,Y,rt=null){rt===null&&(rt=A),_=Pt.get(rt),_.init(Y),P.push(_),rt.traverseVisible(function(j){j.isLight&&j.layers.test(Y.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),A!==rt&&A.traverseVisible(function(j){j.isLight&&j.layers.test(Y.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),_.setupLights();const st=new Set;return A.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Tt=j.material;if(Tt)if(Array.isArray(Tt))for(let Ut=0;Ut<Tt.length;Ut++){const Bt=Tt[Ut];Re(Bt,rt,j),st.add(Bt)}else Re(Tt,rt,j),st.add(Tt)}),_=P.pop(),st},this.compileAsync=function(A,Y,rt=null){const st=this.compile(A,Y,rt);return new Promise(j=>{function Tt(){if(st.forEach(function(Ut){Ft.get(Ut).currentProgram.isReady()&&st.delete(Ut)}),st.size===0){j(A);return}setTimeout(Tt,10)}Qt.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let Se=null;function oi(A){Se&&Se(A)}function sn(){je.stop()}function on(){je.start()}const je=new D0;je.setAnimationLoop(oi),typeof self<"u"&&je.setContext(self),this.setAnimationLoop=function(A){Se=A,bt.setAnimationLoop(A),A===null?je.stop():je.start()},bt.addEventListener("sessionstart",sn),bt.addEventListener("sessionend",on),this.render=function(A,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(Y),Y=bt.getCamera()),A.isScene===!0&&A.onBeforeRender(U,A,Y,X),_=Pt.get(A,P.length),_.init(Y),P.push(_),Mt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),At.setFromProjectionMatrix(Mt,Ci,Y.reversedDepth),ft=this.localClippingEnabled,J=Rt.init(this.clippingPlanes,ft),M=ut.get(A,H.length),M.init(),H.push(M),bt.enabled===!0&&bt.isPresenting===!0){const Tt=U.xr.getDepthSensingMesh();Tt!==null&&vi(Tt,Y,-1/0,U.sortObjects)}vi(A,Y,0,U.sortObjects),M.finish(),U.sortObjects===!0&&M.sort(vt,D),Fe=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,Fe&&Yt.addToRenderList(M,A),this.info.render.frame++,J===!0&&Rt.beginShadows();const rt=_.state.shadowsArray;Wt.render(rt,A,Y),J===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const st=M.opaque,j=M.transmissive;if(_.setupLights(),Y.isArrayCamera){const Tt=Y.cameras;if(j.length>0)for(let Ut=0,Bt=Tt.length;Ut<Bt;Ut++){const Nt=Tt[Ut];zo(st,j,A,Nt)}Fe&&Yt.render(A);for(let Ut=0,Bt=Tt.length;Ut<Bt;Ut++){const Nt=Tt[Ut];gr(M,A,Nt,Nt.viewport)}}else j.length>0&&zo(st,j,A,Y),Fe&&Yt.render(A),gr(M,A,Y);X!==null&&I===0&&(re.updateMultisampleRenderTarget(X),re.updateRenderTargetMipmap(X)),A.isScene===!0&&A.onAfterRender(U,A,Y),Dt.resetDefaultState(),R=-1,w=null,P.pop(),P.length>0?(_=P[P.length-1],J===!0&&Rt.setGlobalState(U.clippingPlanes,_.state.camera)):_=null,H.pop(),H.length>0?M=H[H.length-1]:M=null};function vi(A,Y,rt,st){if(A.visible===!1)return;if(A.layers.test(Y.layers)){if(A.isGroup)rt=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Y);else if(A.isLight)_.pushLight(A),A.castShadow&&_.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||At.intersectsSprite(A)){st&&Ht.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Mt);const Ut=et.update(A),Bt=A.material;Bt.visible&&M.push(A,Ut,Bt,rt,Ht.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||At.intersectsObject(A))){const Ut=et.update(A),Bt=A.material;if(st&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ht.copy(A.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),Ht.copy(Ut.boundingSphere.center)),Ht.applyMatrix4(A.matrixWorld).applyMatrix4(Mt)),Array.isArray(Bt)){const Nt=Ut.groups;for(let Jt=0,te=Nt.length;Jt<te;Jt++){const qt=Nt[Jt],le=Bt[qt.materialIndex];le&&le.visible&&M.push(A,Ut,le,rt,Ht.z,qt)}}else Bt.visible&&M.push(A,Ut,Bt,rt,Ht.z,null)}}const Tt=A.children;for(let Ut=0,Bt=Tt.length;Ut<Bt;Ut++)vi(Tt[Ut],Y,rt,st)}function gr(A,Y,rt,st){const j=A.opaque,Tt=A.transmissive,Ut=A.transparent;_.setupLightsView(rt),J===!0&&Rt.setGlobalState(U.clippingPlanes,rt),st&&It.viewport(O.copy(st)),j.length>0&&_r(j,Y,rt),Tt.length>0&&_r(Tt,Y,rt),Ut.length>0&&_r(Ut,Y,rt),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function zo(A,Y,rt,st){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[st.id]===void 0&&(_.state.transmissionRenderTarget[st.id]=new mr(1,1,{generateMipmaps:!0,type:Qt.has("EXT_color_buffer_half_float")||Qt.has("EXT_color_buffer_float")?wo:Di,minFilter:dr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ee.workingColorSpace}));const Tt=_.state.transmissionRenderTarget[st.id],Ut=st.viewport||O;Tt.setSize(Ut.z*U.transmissionResolutionScale,Ut.w*U.transmissionResolutionScale);const Bt=U.getRenderTarget(),Nt=U.getActiveCubeFace(),Jt=U.getActiveMipmapLevel();U.setRenderTarget(Tt),U.getClearColor(lt),ct=U.getClearAlpha(),ct<1&&U.setClearColor(16777215,.5),U.clear(),Fe&&Yt.render(rt);const te=U.toneMapping;U.toneMapping=za;const qt=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),_.setupLightsView(st),J===!0&&Rt.setGlobalState(U.clippingPlanes,st),_r(A,rt,st),re.updateMultisampleRenderTarget(Tt),re.updateRenderTargetMipmap(Tt),Qt.has("WEBGL_multisampled_render_to_texture")===!1){let le=!1;for(let Me=0,ke=Y.length;Me<ke;Me++){const Ue=Y[Me],ce=Ue.object,Kt=Ue.geometry,Ve=Ue.material,pe=Ue.group;if(Ve.side===$i&&ce.layers.test(st.layers)){const Mn=Ve.side;Ve.side=In,Ve.needsUpdate=!0,ys(ce,rt,st,Kt,Ve,pe),Ve.side=Mn,Ve.needsUpdate=!0,le=!0}}le===!0&&(re.updateMultisampleRenderTarget(Tt),re.updateRenderTargetMipmap(Tt))}U.setRenderTarget(Bt,Nt,Jt),U.setClearColor(lt,ct),qt!==void 0&&(st.viewport=qt),U.toneMapping=te}function _r(A,Y,rt){const st=Y.isScene===!0?Y.overrideMaterial:null;for(let j=0,Tt=A.length;j<Tt;j++){const Ut=A[j],Bt=Ut.object,Nt=Ut.geometry,Jt=Ut.group;let te=Ut.material;te.allowOverride===!0&&st!==null&&(te=st),Bt.layers.test(rt.layers)&&ys(Bt,Y,rt,Nt,te,Jt)}}function ys(A,Y,rt,st,j,Tt){A.onBeforeRender(U,Y,rt,st,j,Tt),A.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),j.onBeforeRender(U,Y,rt,st,A,Tt),j.transparent===!0&&j.side===$i&&j.forceSinglePass===!1?(j.side=In,j.needsUpdate=!0,U.renderBufferDirect(rt,Y,st,j,A,Tt),j.side=Ba,j.needsUpdate=!0,U.renderBufferDirect(rt,Y,st,j,A,Tt),j.side=$i):U.renderBufferDirect(rt,Y,st,j,A,Tt),A.onAfterRender(U,Y,rt,st,j,Tt)}function xi(A,Y,rt){Y.isScene!==!0&&(Y=Vt);const st=Ft.get(A),j=_.state.lights,Tt=_.state.shadowsArray,Ut=j.state.version,Bt=ht.getParameters(A,j.state,Tt,Y,rt),Nt=ht.getProgramCacheKey(Bt);let Jt=st.programs;st.environment=A.isMeshStandardMaterial?Y.environment:null,st.fog=Y.fog,st.envMap=(A.isMeshStandardMaterial?Ye:qe).get(A.envMap||st.environment),st.envMapRotation=st.environment!==null&&A.envMap===null?Y.environmentRotation:A.envMapRotation,Jt===void 0&&(A.addEventListener("dispose",_t),Jt=new Map,st.programs=Jt);let te=Jt.get(Nt);if(te!==void 0){if(st.currentProgram===te&&st.lightsStateVersion===Ut)return Li(A,Bt),te}else Bt.uniforms=ht.getUniforms(A),A.onBeforeCompile(Bt,U),te=ht.acquireProgram(Bt,Nt),Jt.set(Nt,te),st.uniforms=Bt.uniforms;const qt=st.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(qt.clippingPlanes=Rt.uniform),Li(A,Bt),st.needsLights=ra(A),st.lightsStateVersion=Ut,st.needsLights&&(qt.ambientLightColor.value=j.state.ambient,qt.lightProbe.value=j.state.probe,qt.directionalLights.value=j.state.directional,qt.directionalLightShadows.value=j.state.directionalShadow,qt.spotLights.value=j.state.spot,qt.spotLightShadows.value=j.state.spotShadow,qt.rectAreaLights.value=j.state.rectArea,qt.ltc_1.value=j.state.rectAreaLTC1,qt.ltc_2.value=j.state.rectAreaLTC2,qt.pointLights.value=j.state.point,qt.pointLightShadows.value=j.state.pointShadow,qt.hemisphereLights.value=j.state.hemi,qt.directionalShadowMap.value=j.state.directionalShadowMap,qt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,qt.spotShadowMap.value=j.state.spotShadowMap,qt.spotLightMatrix.value=j.state.spotLightMatrix,qt.spotLightMap.value=j.state.spotLightMap,qt.pointShadowMap.value=j.state.pointShadowMap,qt.pointShadowMatrix.value=j.state.pointShadowMatrix),st.currentProgram=te,st.uniformsList=null,te}function vr(A){if(A.uniformsList===null){const Y=A.currentProgram.getUniforms();A.uniformsList=Mc.seqWithValue(Y.seq,A.uniforms)}return A.uniformsList}function Li(A,Y){const rt=Ft.get(A);rt.outputColorSpace=Y.outputColorSpace,rt.batching=Y.batching,rt.batchingColor=Y.batchingColor,rt.instancing=Y.instancing,rt.instancingColor=Y.instancingColor,rt.instancingMorph=Y.instancingMorph,rt.skinning=Y.skinning,rt.morphTargets=Y.morphTargets,rt.morphNormals=Y.morphNormals,rt.morphColors=Y.morphColors,rt.morphTargetsCount=Y.morphTargetsCount,rt.numClippingPlanes=Y.numClippingPlanes,rt.numIntersection=Y.numClipIntersection,rt.vertexAlphas=Y.vertexAlphas,rt.vertexTangents=Y.vertexTangents,rt.toneMapping=Y.toneMapping}function aa(A,Y,rt,st,j){Y.isScene!==!0&&(Y=Vt),re.resetTextureUnits();const Tt=Y.fog,Ut=st.isMeshStandardMaterial?Y.environment:null,Bt=X===null?U.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:vs,Nt=(st.isMeshStandardMaterial?Ye:qe).get(st.envMap||Ut),Jt=st.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,te=!!rt.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),qt=!!rt.morphAttributes.position,le=!!rt.morphAttributes.normal,Me=!!rt.morphAttributes.color;let ke=za;st.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(ke=U.toneMapping);const Ue=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,ce=Ue!==void 0?Ue.length:0,Kt=Ft.get(st),Ve=_.state.lights;if(J===!0&&(ft===!0||A!==w)){const Ke=A===w&&st.id===R;Rt.setState(st,A,Ke)}let pe=!1;st.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==Ve.state.version||Kt.outputColorSpace!==Bt||j.isBatchedMesh&&Kt.batching===!1||!j.isBatchedMesh&&Kt.batching===!0||j.isBatchedMesh&&Kt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Kt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Kt.instancing===!1||!j.isInstancedMesh&&Kt.instancing===!0||j.isSkinnedMesh&&Kt.skinning===!1||!j.isSkinnedMesh&&Kt.skinning===!0||j.isInstancedMesh&&Kt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Kt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Kt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Kt.instancingMorph===!1&&j.morphTexture!==null||Kt.envMap!==Nt||st.fog===!0&&Kt.fog!==Tt||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==Rt.numPlanes||Kt.numIntersection!==Rt.numIntersection)||Kt.vertexAlphas!==Jt||Kt.vertexTangents!==te||Kt.morphTargets!==qt||Kt.morphNormals!==le||Kt.morphColors!==Me||Kt.toneMapping!==ke||Kt.morphTargetsCount!==ce)&&(pe=!0):(pe=!0,Kt.__version=st.version);let Mn=Kt.currentProgram;pe===!0&&(Mn=xi(st,Y,j));let li=!1,Rn=!1,hn=!1;const Be=Mn.getUniforms(),Cn=Kt.uniforms;if(It.useProgram(Mn.program)&&(li=!0,Rn=!0,hn=!0),st.id!==R&&(R=st.id,Rn=!0),li||w!==A){It.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Be.setValue(F,"projectionMatrix",A.projectionMatrix),Be.setValue(F,"viewMatrix",A.matrixWorldInverse);const _n=Be.map.cameraPosition;_n!==void 0&&_n.setValue(F,wt.setFromMatrixPosition(A.matrixWorld)),xe.logarithmicDepthBuffer&&Be.setValue(F,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&Be.setValue(F,"isOrthographic",A.isOrthographicCamera===!0),w!==A&&(w=A,Rn=!0,hn=!0)}if(j.isSkinnedMesh){Be.setOptional(F,j,"bindMatrix"),Be.setOptional(F,j,"bindMatrixInverse");const Ke=j.skeleton;Ke&&(Ke.boneTexture===null&&Ke.computeBoneTexture(),Be.setValue(F,"boneTexture",Ke.boneTexture,re))}j.isBatchedMesh&&(Be.setOptional(F,j,"batchingTexture"),Be.setValue(F,"batchingTexture",j._matricesTexture,re),Be.setOptional(F,j,"batchingIdTexture"),Be.setValue(F,"batchingIdTexture",j._indirectTexture,re),Be.setOptional(F,j,"batchingColorTexture"),j._colorsTexture!==null&&Be.setValue(F,"batchingColorTexture",j._colorsTexture,re));const yn=rt.morphAttributes;if((yn.position!==void 0||yn.normal!==void 0||yn.color!==void 0)&&yt.update(j,rt,Mn),(Rn||Kt.receiveShadow!==j.receiveShadow)&&(Kt.receiveShadow=j.receiveShadow,Be.setValue(F,"receiveShadow",j.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(Cn.envMap.value=Nt,Cn.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&Y.environment!==null&&(Cn.envMapIntensity.value=Y.environmentIntensity),Rn&&(Be.setValue(F,"toneMappingExposure",U.toneMappingExposure),Kt.needsLights&&Fa(Cn,hn),Tt&&st.fog===!0&&xt.refreshFogUniforms(Cn,Tt),xt.refreshMaterialUniforms(Cn,st,W,q,_.state.transmissionRenderTarget[A.id]),Mc.upload(F,vr(Kt),Cn,re)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(Mc.upload(F,vr(Kt),Cn,re),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&Be.setValue(F,"center",j.center),Be.setValue(F,"modelViewMatrix",j.modelViewMatrix),Be.setValue(F,"normalMatrix",j.normalMatrix),Be.setValue(F,"modelMatrix",j.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const Ke=st.uniformsGroups;for(let _n=0,xr=Ke.length;_n<xr;_n++){const Ln=Ke[_n];ae.update(Ln,Mn),ae.bind(Ln,Mn)}}return Mn}function Fa(A,Y){A.ambientLightColor.needsUpdate=Y,A.lightProbe.needsUpdate=Y,A.directionalLights.needsUpdate=Y,A.directionalLightShadows.needsUpdate=Y,A.pointLights.needsUpdate=Y,A.pointLightShadows.needsUpdate=Y,A.spotLights.needsUpdate=Y,A.spotLightShadows.needsUpdate=Y,A.rectAreaLights.needsUpdate=Y,A.hemisphereLights.needsUpdate=Y}function ra(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(A,Y,rt){const st=Ft.get(A);st.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),Ft.get(A.texture).__webglTexture=Y,Ft.get(A.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:rt,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Y){const rt=Ft.get(A);rt.__webglFramebuffer=Y,rt.__useDefaultFramebuffer=Y===void 0};const en=F.createFramebuffer();this.setRenderTarget=function(A,Y=0,rt=0){X=A,G=Y,I=rt;let st=!0,j=null,Tt=!1,Ut=!1;if(A){const Nt=Ft.get(A);if(Nt.__useDefaultFramebuffer!==void 0)It.bindFramebuffer(F.FRAMEBUFFER,null),st=!1;else if(Nt.__webglFramebuffer===void 0)re.setupRenderTarget(A);else if(Nt.__hasExternalTextures)re.rebindTextures(A,Ft.get(A.texture).__webglTexture,Ft.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const qt=A.depthTexture;if(Nt.__boundDepthTexture!==qt){if(qt!==null&&Ft.has(qt)&&(A.width!==qt.image.width||A.height!==qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");re.setupDepthRenderbuffer(A)}}const Jt=A.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Ut=!0);const te=Ft.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(te[Y])?j=te[Y][rt]:j=te[Y],Tt=!0):A.samples>0&&re.useMultisampledRTT(A)===!1?j=Ft.get(A).__webglMultisampledFramebuffer:Array.isArray(te)?j=te[rt]:j=te,O.copy(A.viewport),ot.copy(A.scissor),it=A.scissorTest}else O.copy(K).multiplyScalar(W).floor(),ot.copy(mt).multiplyScalar(W).floor(),it=St;if(rt!==0&&(j=en),It.bindFramebuffer(F.FRAMEBUFFER,j)&&st&&It.drawBuffers(A,j),It.viewport(O),It.scissor(ot),It.setScissorTest(it),Tt){const Nt=Ft.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Nt.__webglTexture,rt)}else if(Ut){const Nt=Y;for(let Jt=0;Jt<A.textures.length;Jt++){const te=Ft.get(A.textures[Jt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Jt,te.__webglTexture,rt,Nt)}}else if(A!==null&&rt!==0){const Nt=Ft.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Nt.__webglTexture,rt)}R=-1},this.readRenderTargetPixels=function(A,Y,rt,st,j,Tt,Ut,Bt=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=Ft.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ut!==void 0&&(Nt=Nt[Ut]),Nt){It.bindFramebuffer(F.FRAMEBUFFER,Nt);try{const Jt=A.textures[Bt],te=Jt.format,qt=Jt.type;if(!xe.textureFormatReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!xe.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=A.width-st&&rt>=0&&rt<=A.height-j&&(A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Bt),F.readPixels(Y,rt,st,j,Xt.convert(te),Xt.convert(qt),Tt))}finally{const Jt=X!==null?Ft.get(X).__webglFramebuffer:null;It.bindFramebuffer(F.FRAMEBUFFER,Jt)}}},this.readRenderTargetPixelsAsync=async function(A,Y,rt,st,j,Tt,Ut,Bt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=Ft.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ut!==void 0&&(Nt=Nt[Ut]),Nt)if(Y>=0&&Y<=A.width-st&&rt>=0&&rt<=A.height-j){It.bindFramebuffer(F.FRAMEBUFFER,Nt);const Jt=A.textures[Bt],te=Jt.format,qt=Jt.type;if(!xe.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!xe.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const le=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,le),F.bufferData(F.PIXEL_PACK_BUFFER,Tt.byteLength,F.STREAM_READ),A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Bt),F.readPixels(Y,rt,st,j,Xt.convert(te),Xt.convert(qt),0);const Me=X!==null?Ft.get(X).__webglFramebuffer:null;It.bindFramebuffer(F.FRAMEBUFFER,Me);const ke=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await FS(F,ke,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,le),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Tt),F.deleteBuffer(le),F.deleteSync(ke),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Y=null,rt=0){const st=Math.pow(2,-rt),j=Math.floor(A.image.width*st),Tt=Math.floor(A.image.height*st),Ut=Y!==null?Y.x:0,Bt=Y!==null?Y.y:0;re.setTexture2D(A,0),F.copyTexSubImage2D(F.TEXTURE_2D,rt,0,0,Ut,Bt,j,Tt),It.unbindTexture()};const Bo=F.createFramebuffer(),Io=F.createFramebuffer();this.copyTextureToTexture=function(A,Y,rt=null,st=null,j=0,Tt=null){Tt===null&&(j!==0?(ds("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=j,j=0):Tt=0);let Ut,Bt,Nt,Jt,te,qt,le,Me,ke;const Ue=A.isCompressedTexture?A.mipmaps[Tt]:A.image;if(rt!==null)Ut=rt.max.x-rt.min.x,Bt=rt.max.y-rt.min.y,Nt=rt.isBox3?rt.max.z-rt.min.z:1,Jt=rt.min.x,te=rt.min.y,qt=rt.isBox3?rt.min.z:0;else{const yn=Math.pow(2,-j);Ut=Math.floor(Ue.width*yn),Bt=Math.floor(Ue.height*yn),A.isDataArrayTexture?Nt=Ue.depth:A.isData3DTexture?Nt=Math.floor(Ue.depth*yn):Nt=1,Jt=0,te=0,qt=0}st!==null?(le=st.x,Me=st.y,ke=st.z):(le=0,Me=0,ke=0);const ce=Xt.convert(Y.format),Kt=Xt.convert(Y.type);let Ve;Y.isData3DTexture?(re.setTexture3D(Y,0),Ve=F.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(re.setTexture2DArray(Y,0),Ve=F.TEXTURE_2D_ARRAY):(re.setTexture2D(Y,0),Ve=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,Y.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,Y.unpackAlignment);const pe=F.getParameter(F.UNPACK_ROW_LENGTH),Mn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),li=F.getParameter(F.UNPACK_SKIP_PIXELS),Rn=F.getParameter(F.UNPACK_SKIP_ROWS),hn=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ue.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ue.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Jt),F.pixelStorei(F.UNPACK_SKIP_ROWS,te),F.pixelStorei(F.UNPACK_SKIP_IMAGES,qt);const Be=A.isDataArrayTexture||A.isData3DTexture,Cn=Y.isDataArrayTexture||Y.isData3DTexture;if(A.isDepthTexture){const yn=Ft.get(A),Ke=Ft.get(Y),_n=Ft.get(yn.__renderTarget),xr=Ft.get(Ke.__renderTarget);It.bindFramebuffer(F.READ_FRAMEBUFFER,_n.__webglFramebuffer),It.bindFramebuffer(F.DRAW_FRAMEBUFFER,xr.__webglFramebuffer);for(let Ln=0;Ln<Nt;Ln++)Be&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ft.get(A).__webglTexture,j,qt+Ln),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ft.get(Y).__webglTexture,Tt,ke+Ln)),F.blitFramebuffer(Jt,te,Ut,Bt,le,Me,Ut,Bt,F.DEPTH_BUFFER_BIT,F.NEAREST);It.bindFramebuffer(F.READ_FRAMEBUFFER,null),It.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(j!==0||A.isRenderTargetTexture||Ft.has(A)){const yn=Ft.get(A),Ke=Ft.get(Y);It.bindFramebuffer(F.READ_FRAMEBUFFER,Bo),It.bindFramebuffer(F.DRAW_FRAMEBUFFER,Io);for(let _n=0;_n<Nt;_n++)Be?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,yn.__webglTexture,j,qt+_n):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,yn.__webglTexture,j),Cn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ke.__webglTexture,Tt,ke+_n):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ke.__webglTexture,Tt),j!==0?F.blitFramebuffer(Jt,te,Ut,Bt,le,Me,Ut,Bt,F.COLOR_BUFFER_BIT,F.NEAREST):Cn?F.copyTexSubImage3D(Ve,Tt,le,Me,ke+_n,Jt,te,Ut,Bt):F.copyTexSubImage2D(Ve,Tt,le,Me,Jt,te,Ut,Bt);It.bindFramebuffer(F.READ_FRAMEBUFFER,null),It.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Cn?A.isDataTexture||A.isData3DTexture?F.texSubImage3D(Ve,Tt,le,Me,ke,Ut,Bt,Nt,ce,Kt,Ue.data):Y.isCompressedArrayTexture?F.compressedTexSubImage3D(Ve,Tt,le,Me,ke,Ut,Bt,Nt,ce,Ue.data):F.texSubImage3D(Ve,Tt,le,Me,ke,Ut,Bt,Nt,ce,Kt,Ue):A.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Tt,le,Me,Ut,Bt,ce,Kt,Ue.data):A.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Tt,le,Me,Ue.width,Ue.height,ce,Ue.data):F.texSubImage2D(F.TEXTURE_2D,Tt,le,Me,Ut,Bt,ce,Kt,Ue);F.pixelStorei(F.UNPACK_ROW_LENGTH,pe),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Mn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,li),F.pixelStorei(F.UNPACK_SKIP_ROWS,Rn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,hn),Tt===0&&Y.generateMipmaps&&F.generateMipmap(Ve),It.unbindTexture()},this.copyTextureToTexture3D=function(A,Y,rt=null,st=null,j=0){return ds('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,Y,rt,st,j)},this.initRenderTarget=function(A){Ft.get(A).__webglFramebuffer===void 0&&re.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?re.setTextureCube(A,0):A.isData3DTexture?re.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?re.setTexture2DArray(A,0):re.setTexture2D(A,0),It.unbindTexture()},this.resetState=function(){G=0,I=0,X=null,It.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ee._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ee._getUnpackColorSpace()}}const sA=1/3,bi=1/6,_h=o=>Math.floor(o)|0,vh=new Float64Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]);function oA(o=Math.random){const e=lA(o),i=new Float64Array(e).map(u=>vh[u%12*3]),r=new Float64Array(e).map(u=>vh[u%12*3+1]),l=new Float64Array(e).map(u=>vh[u%12*3+2]);return function(h,d,m){let p,g,v,x;const y=(h+d+m)*sA,b=_h(h+y),C=_h(d+y),M=_h(m+y),_=(b+C+M)*bi,H=b-_,P=C-_,U=M-_,B=h-H,G=d-P,I=m-U;let X,R,w,O,ot,it;B>=G?G>=I?(X=1,R=0,w=0,O=1,ot=1,it=0):B>=I?(X=1,R=0,w=0,O=1,ot=0,it=1):(X=0,R=0,w=1,O=1,ot=0,it=1):G<I?(X=0,R=0,w=1,O=0,ot=1,it=1):B<I?(X=0,R=1,w=0,O=0,ot=1,it=1):(X=0,R=1,w=0,O=1,ot=1,it=0);const lt=B-X+bi,ct=G-R+bi,N=I-w+bi,q=B-O+2*bi,W=G-ot+2*bi,vt=I-it+2*bi,D=B-1+3*bi,K=G-1+3*bi,mt=I-1+3*bi,St=b&255,At=C&255,J=M&255;let ft=.6-B*B-G*G-I*I;if(ft<0)p=0;else{const Vt=St+e[At+e[J]];ft*=ft,p=ft*ft*(i[Vt]*B+r[Vt]*G+l[Vt]*I)}let Mt=.6-lt*lt-ct*ct-N*N;if(Mt<0)g=0;else{const Vt=St+X+e[At+R+e[J+w]];Mt*=Mt,g=Mt*Mt*(i[Vt]*lt+r[Vt]*ct+l[Vt]*N)}let wt=.6-q*q-W*W-vt*vt;if(wt<0)v=0;else{const Vt=St+O+e[At+ot+e[J+it]];wt*=wt,v=wt*wt*(i[Vt]*q+r[Vt]*W+l[Vt]*vt)}let Ht=.6-D*D-K*K-mt*mt;if(Ht<0)x=0;else{const Vt=St+1+e[At+1+e[J+1]];Ht*=Ht,x=Ht*Ht*(i[Vt]*D+r[Vt]*K+l[Vt]*mt)}return 32*(p+g+v+x)}}function lA(o){const i=new Uint8Array(512);for(let r=0;r<512/2;r++)i[r]=r;for(let r=0;r<512/2-1;r++){const l=r+~~(o()*(256-r)),u=i[r];i[r]=i[l],i[l]=u}for(let r=256;r<512;r++)i[r]=i[r-256];return i}const cA=oA();let yc=[];function uA(o,e,i=1,r=1){console.log("Impacto creado en:",o,e,"Fuerza:",i,"Radio:",r),yc.push({x:o,y:e,time:performance.now(),strength:i,radius:r}),yc=yc.filter(l=>performance.now()-l.time<5e3)}function fA(){const o=xh.useRef(null);return xh.useEffect(()=>{if(!o.current)return;let e;const i=new uM,r=new jn(75,window.innerWidth/window.innerHeight,.1,1e3);r.position.set(0,3,5);const l=new rA({canvas:o.current,antialias:!0});function u(){const X=o.current?.parentElement;if(!X)return;const R=X.clientWidth,w=X.clientHeight;l.setSize(R,w),r.aspect=R/w,r.updateProjectionMatrix()}u(),window.addEventListener("resize",u);const h=new Po(50,29,200,100),d=new Sc({size:.005,color:30654}),m=new lh(h,d);m.rotation.x=-Math.PI/2,m.position.y=-1.5,m.position.z=-1.5;const p=800,g=new Ui,v=new Float32Array(p*3),x=new Float32Array(p*3);for(let X=0;X<p;X++){const R=X*3;v[R]=(Math.random()-.5)*50,v[R+1]=-1.4,v[R+2]=(Math.random()-.5)*29-1.5,x[R]=1,x[R+1]=.8,x[R+2]=.3}g.setAttribute("position",new si(v,3)),g.setAttribute("color",new si(x,3));const y=new Sc({size:.012,vertexColors:!0,transparent:!0,opacity:.9,blending:Sh}),b=new lh(g,y);i.add(b);const C=new yd(.05,.5,16,50),M=new Sc({size:.005,color:16770921}),_=new lh(C,M);_.position.z=-10.5,_.position.x=12.5,_.position.y=8.5,i.add(_),i.add(m);const H=new vM(16777215,3);H.position.set(10,10,5),i.add(H);const P=new SM(4210752,.3);i.add(P);const U=h.attributes.position,B=Float32Array.from(U.array);function G(X){e=requestAnimationFrame(G);const R=X*.001;for(let it=0;it<U.count;it++){const lt=U.getX(it),ct=U.getY(it),N=B[it*3+2];let q=cA(lt*.8,ct*.8,R)*.2;for(const W of yc){const vt=lt-W.x,D=ct-W.y,K=Math.sqrt(vt*vt+D*D);if(K<W.radius*5){const mt=(performance.now()-W.time)/1e3,St=Math.exp(-K/W.radius),At=Math.sin(K*2-mt*8)*St,J=Math.exp(-mt*2);q+=W.strength*At*J}}U.setZ(it,N+q)}U.needsUpdate=!0;const w=g.attributes.position.array,O=g.attributes.color.array,ot=_.position;for(let it=0;it<p;it++){const lt=it*3,ct=w[lt],N=w[lt+2],q=ct-ot.x,W=N-ot.z,vt=Math.sqrt(q*q+W*W),D=Math.max(0,1-vt/20),K=Math.sin(R*3+ct*.1)*Math.sin(R*2.5+N*.1),mt=Math.sin(R*4+(ct+N)*.05),St=(K+mt)*.5,At=D*(.3+St*.7);if(At>.1){const J=Math.max(0,At);O[lt]=J,O[lt+1]=J*.8,O[lt+2]=J*.4,w[lt+1]=-1.35+Math.sin(R*4+it*.1)*.03}else O[lt]=0,O[lt+1]=0,O[lt+2]=0}g.attributes.position.needsUpdate=!0,g.attributes.color.needsUpdate=!0,_.rotation.x+=.01,_.rotation.y+=.01,_.scale.setScalar(1+Math.sin(R*2)*.05),l.render(i,r)}function I(X){if(!o.current)return;const R=o.current.getBoundingClientRect(),w=(X.clientX-R.left)/R.width*2-1,O=-((X.clientY-R.top)/R.height)*2+1,ot=new yM,it=new Te(w,O);ot.setFromCamera(it,r);const lt=ot.intersectObject(m);if(lt.length>0){const ct=lt[0].point,N=ct.x,q=-(ct.z-m.position.z);console.log("Click en mundo:",ct.x,ct.y,ct.z),console.log("Coordenadas locales:",N,q),Math.abs(N)<=25&&Math.abs(q)<=14.5&&uA(N,q,.5,2)}}return o.current.addEventListener("click",I),G(0),()=>{cancelAnimationFrame(e),window.removeEventListener("resize",u),l.dispose(),h.dispose(),C.dispose(),d.dispose(),M.dispose(),g.dispose(),y.dispose(),i.clear(),o.current&&o.current.removeEventListener("click",I)}},[]),ri.jsxs("div",{className:"flex flex-col items-center justify-center h-screen bg-black p-4",children:[ri.jsxs("div",{className:"mb-4 text-center",children:[ri.jsx("h2",{className:"text-white text-xl font-semibold mb-2",children:"Ocean Sim"}),ri.jsx("p",{className:"text-white",children:"Pro tip: click"})]}),ri.jsx("div",{className:"w-full h-full max-w-6xl max-h-[80vh] relative",children:ri.jsx("canvas",{ref:o,className:"w-full h-full"})})]})}function hA(){return ri.jsx(ri.Fragment,{children:ri.jsx("div",{className:"bg-black",children:ri.jsx(fA,{})})})}Zx.createRoot(document.getElementById("root")).render(ri.jsx(xh.StrictMode,{children:ri.jsx(hA,{})}));
