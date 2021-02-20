(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{208:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(2),o=(r(0),r(346));const a={title:"Design Goals",sidebar_label:"Design Goals"},i={id:"contribute/design_goals",isDocsHomePage:!1,title:"Design Goals",description:"Parsica aims to be the mainstream choice for anyone to create parsers. We want to support all use cases. When parsing a short string, Parsica should be worth picking over regular expressions; when parsing an entire language, it should be worth picking over a handwritten imperative parser. The API should be self-evident, it should be easy to get it right and hard to get it wrong.",source:"@site/docs/contribute/design_goals.md",permalink:"/docs/next/contribute/design_goals",editUrl:"https://github.com/mathiasverraes/parsica/tree/main/docs/contribute/design_goals.md",version:"next",sidebar_label:"Design Goals",sidebar:"docs",previous:{title:"Naming Conventions",permalink:"/docs/next/resources/03_naming_conventions"},latestVersionMainDocPermalink:"/docs"},s=[],c={rightToc:s};function l({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Parsica aims to be the mainstream choice for anyone to create parsers. We want to support all use cases. When parsing a short string, Parsica should be worth picking over regular expressions; when parsing an entire language, it should be worth picking over a handwritten imperative parser. The API should be self-evident, it should be easy to get it right and hard to get it wrong. "),Object(o.b)("p",null,"Developers should not have to learn anything other than this library itself: no need to learn FP, category theory, parser theory, or even the internals of this libary. Under the hood, we use theoretical concepts. However, when adhering to these concepts would require exposing them to the developers, we will prefer a tradeoff that hides them. "),Object(o.b)("p",null,"The same goes for performance: Parsica should be performant enough to be a viable choice, but for most use cases, developers should not have to worry about learning how to achieve greater performance."),Object(o.b)("p",null,"Parsica puts great focus on composability. To achieve this, we use immutability and referential transparency \u2014\xa0not for the sake of perfection, but because these help to achieve effortless composition."),Object(o.b)("p",null,"Finally, it should be easy for third party library authors to publish their own parsers as Composer packages, which in turn can be composed by other users."))}l.isMDXComponent=!0},346:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),b=n,d=p["".concat(i,".").concat(b)]||p[b]||h[b]||a;return r?o.a.createElement(d,s(s({ref:t},l),{},{components:r})):o.a.createElement(d,s({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);