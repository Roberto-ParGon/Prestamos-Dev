/*! For license information please see main.bundle.js.LICENSE.txt */
(()=>{"use strict";var e={408:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),s=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator,y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,h={};function v(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||y}function b(){}function _(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||y}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=v.prototype;var S=_.prototype=new b;S.constructor=_,m(S,v.prototype),S.isPureReactComponent=!0;var g=Array.isArray,E=Object.prototype.hasOwnProperty,w={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,n){var o,a={},u=null,i=null;if(null!=t)for(o in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(u=""+t.key),t)E.call(t,o)&&!x.hasOwnProperty(o)&&(a[o]=t[o]);var l=arguments.length-2;if(1===l)a.children=n;else if(1<l){for(var c=Array(l),s=0;s<l;s++)c[s]=arguments[s+2];a.children=c}if(e&&e.defaultProps)for(o in l=e.defaultProps)void 0===a[o]&&(a[o]=l[o]);return{$$typeof:r,type:e,key:u,ref:i,props:a,_owner:w.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var R=/\/+/g;function $(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function k(e,t,o,a,u){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var l=!1;if(null===e)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case r:case n:l=!0}}if(l)return u=u(l=e),e=""===a?"."+$(l,0):a,g(u)?(o="",null!=e&&(o=e.replace(R,"$&/")+"/"),k(u,t,o,"",(function(e){return e}))):null!=u&&(C(u)&&(u=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(u,o+(!u.key||l&&l.key===u.key?"":(""+u.key).replace(R,"$&/")+"/")+e)),t.push(u)),1;if(l=0,a=""===a?".":a+":",g(e))for(var c=0;c<e.length;c++){var s=a+$(i=e[c],c);l+=k(i,t,o,s,u)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),c=0;!(i=e.next()).done;)l+=k(i=i.value,t,o,s=a+$(i,c++),u);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function O(e,t,r){if(null==e)return e;var n=[],o=0;return k(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function P(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var I={current:null},A={transition:null},T={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:A,ReactCurrentOwner:w};t.Children={map:O,forEach:function(e,t,r){O(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return O(e,(function(){t++})),t},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=o,t.Profiler=u,t.PureComponent=_,t.StrictMode=a,t.Suspense=s,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),a=e.key,u=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,i=w.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)E.call(t,c)&&!x.hasOwnProperty(c)&&(o[c]=void 0===t[c]&&void 0!==l?l[c]:t[c])}var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){l=Array(c);for(var s=0;s<c;s++)l[s]=arguments[s+2];o.children=l}return{$$typeof:r,type:e.type,key:a,ref:u,props:o,_owner:i}},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=j,t.createFactory=function(e){var t=j.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=A.transition;A.transition={};try{e()}finally{A.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return I.current.useCallback(e,t)},t.useContext=function(e){return I.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return I.current.useDeferredValue(e)},t.useEffect=function(e,t){return I.current.useEffect(e,t)},t.useId=function(){return I.current.useId()},t.useImperativeHandle=function(e,t,r){return I.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return I.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return I.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return I.current.useMemo(e,t)},t.useReducer=function(e,t,r){return I.current.useReducer(e,t,r)},t.useRef=function(e){return I.current.useRef(e)},t.useState=function(e){return I.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return I.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return I.current.useTransition()},t.version="18.2.0"},294:(e,t,r)=>{e.exports=r(408)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}(()=>{var e=r(294);function t(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,u,i=[],l=!0,c=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=a.call(r)).done)&&(i.push(n.value),i.length!==t);l=!0);}catch(e){c=!0,o=e}finally{try{if(!l&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(c)throw o}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var o=function(){var r=t((0,e.useState)([]),2),n=r[0],o=(r[1],t((0,e.useState)({}),2)),a=o[0],u=(o[1],t((0,e.useState)({matricula:""}),2)),i=u[0],l=(u[1],t((0,e.useState)(""),2)),c=l[0],s=(l[1],t((0,e.useState)(""),2)),f=s[0],p=(s[1],t((0,e.useState)({inicio:{label:"",value:""},fin:{label:"",value:""}}),2)),d=p[0];return p[1],e.createElement("div",{style:{padding:"1rem .5rem",boxShadow:"rgba(99, 99, 99, 0.5) 0px 2px 8px 0px",borderRadius:"10px",backgroundColor:"#fafafa"}},e.createElement("form",{style:{display:"flex",flexFlow:"column",width:"22vw"}},e.createElement("div",{style:{display:"flex",justifyContent:"center",fontSize:"20px",padding:"0 0 .3rem 0"}},"Crear Prestamo"),e.createElement("div",{style:{display:"flex",justifyContent:"center",marginTop:".2rem"}},e.createElement("button",{onClick:function(e){e.preventDefault();var t=new Date,r="".concat(t.getFullYear(),"-").concat(t.getMonth(),"-").concat(t.getDate()),o=document.querySelector("#root");if(d.inicio.label&&d.fin.label&&f.nrc&&c.id&&a.noPersonal&&n.length)if(d.inicio.value!==d.fin.value)if(d.inicio.value>d.fin.value)alert("La hora de inicio no puede ser mayor a la hora de fin");else{var u={fecha:r,horario_entrada:d.inicio.label,horario_salida:d.fin.label,is_active:!0,nrc_materia:f.nrc,id_aula:c.id,id_usuario:parseInt(o.dataset.usuario),id_profesor:a.noPersonal,id_alumno:i?i.matricula:"",dispositivos:n.map((function(e){return{id:e.id,nombre:e.nombre,prestado:e.prestado+e.localPrestado,cantidad:e.cantidad}}))};fetch("public/php/add-loan/postLoan.php",{method:"POST",body:JSON.stringify(u),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.json()})).then((function(e){if(e.success)return alert("Prestamo realizado con exito"),void location.reload();console.log(e),alert("Algo salió mal")})).catch((function(e){console.log(e),alert("Algo salió mal")}))}else alert("La hora de inicio no puede ser igual a la hora de fin");else alert("No dejes campos vacios")}},"Prestar"))))},a=function(){return e.createElement("div",{style:{height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}},e.createElement(o,null))},u=document.getElementById("app");ReactDOM.createRoot(u).render(e.createElement(a,null))})()})();