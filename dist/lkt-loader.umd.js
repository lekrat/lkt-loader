(function(o,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(o=typeof globalThis<"u"?globalThis:o||self,e(o.LktLoader={},o.Vue))})(this,function(o,e){"use strict";var p=Object.defineProperty;var L=(o,e,t)=>e in o?p(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var a=(o,e,t)=>(L(o,typeof e!="symbol"?e+"":e,t),t);const n=class{static setCustomLoader(d){n.CustomLoader=d}};let t=n;a(t,"CustomLoader");const c={class:"lkt-loader-container"},r={key:1,class:"lkt-loader"},l={name:"LktLoader",inheritAttrs:!1},i=e.defineComponent({...l,setup(s){const d=e.computed(()=>typeof t.CustomLoader<"u"),f=e.computed(()=>t.CustomLoader);return(_,k)=>(e.openBlock(),e.createElementBlock("div",c,[d.value?(e.openBlock(),e.createBlock(e.resolveDynamicComponent(f.value),{key:0})):(e.openBlock(),e.createElementBlock("div",r))]))}}),u={install:s=>{s.component("lkt-loader",i)}},m=s=>{t.setCustomLoader(s)};o.default=u,o.setCustomLoader=m,Object.defineProperties(o,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
