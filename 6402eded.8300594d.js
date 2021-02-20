(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{207:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return c})),t.d(r,"rightToc",(function(){return a})),t.d(r,"default",(function(){return s}));var n=t(2),i=(t(0),t(346));const o={title:"recursion"},c={id:"api/recursion",isDocsHomePage:!1,title:"recursion",description:"recursive",source:"@site/docs/api/recursion.md",permalink:"/docs/next/api/recursion",editUrl:"https://github.com/mathiasverraes/parsica/tree/main/docs/api/recursion.md",version:"next",sidebar:"docs",previous:{title:"primitives",permalink:"/docs/next/api/primitives"},next:{title:"sideEffects",permalink:"/docs/next/api/sideEffects"},latestVersionMainDocPermalink:"/docs"},a=[{value:"recursive",id:"recursive",children:[]}],u={rightToc:a};function s({components:e,...r}){return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:e,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"recursive"},"recursive"),Object(i.b)("p",null,"Create a recursive parser. Used in combination with Parser#recurse()."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"function recursive() : Parser\n")))}s.isMDXComponent=!0},346:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return m}));var n=t(0),i=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),p=function(e){var r=i.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=p(e.components);return i.a.createElement(s.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return i.a.createElement(i.a.Fragment,{},r)}},d=i.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=p(t),d=n,m=l["".concat(c,".").concat(d)]||l[d]||f[d]||o;return t?i.a.createElement(m,a(a({ref:r},s),{},{components:t})):i.a.createElement(m,a({ref:r},s))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=d;var a={};for(var u in r)hasOwnProperty.call(r,u)&&(a[u]=r[u]);a.originalType=e,a.mdxType="string"==typeof e?e:n,c[1]=a;for(var s=2;s<o;s++)c[s]=t[s];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);