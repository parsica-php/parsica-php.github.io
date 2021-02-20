(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{196:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return b})),r.d(t,"default",(function(){return l}));var a=r(2),n=(r(0),r(346));const c={title:"Parsica API Reference"},i={id:"api/index",isDocsHomePage:!1,title:"Parsica API Reference",description:"* Expression/expression",source:"@site/docs/api/index.md",permalink:"/docs/next/api/index",editUrl:"https://github.com/mathiasverraes/parsica/tree/main/docs/api/index.md",version:"next",latestVersionMainDocPermalink:"/docs"},b=[],o={rightToc:b};function l({components:e,...t}){return Object(n.b)("wrapper",Object(a.a)({},o,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"Expression/expression"}),"Expression/expression")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"JSON/JSON"}),"JSON/JSON")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"PHPUnit/ParserAssertions"}),"PHPUnit/ParserAssertions")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"ParseResult"}),"ParseResult")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"Parser"}),"Parser")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"ParserHasFailed"}),"ParserHasFailed")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"Stream"}),"Stream")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"StringStream"}),"StringStream")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"characters"}),"characters")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"combinators"}),"combinators")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"numeric"}),"numeric")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"predicates"}),"predicates")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"primitives"}),"primitives")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"recursion"}),"recursion")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"sideEffects"}),"sideEffects")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"space"}),"space")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"strings"}),"strings"))))}l.isMDXComponent=!0},346:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):b(b({},t),e)),r},s=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},O=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),s=p(r),O=a,m=s["".concat(i,".").concat(O)]||s[O]||u[O]||c;return r?n.a.createElement(m,b(b({ref:t},l),{},{components:r})):n.a.createElement(m,b({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,i=new Array(c);i[0]=O;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:a,i[1]=b;for(var l=2;l<c;l++)i[l]=r[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"}}]);