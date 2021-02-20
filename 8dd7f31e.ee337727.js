(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{238:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return c})),t.d(r,"rightToc",(function(){return a})),t.d(r,"default",(function(){return u}));var n=t(2),i=(t(0),t(346));const o={title:"recursion"},c={id:"version-0.3.1/api/recursion",isDocsHomePage:!1,title:"recursion",description:"recursive",source:"@site/versioned_docs/version-0.3.1/api/recursion.md",permalink:"/docs/0.3.1/api/recursion",editUrl:"https://github.com/mathiasverraes/parsica/tree/main/versioned_docs/version-0.3.1/api/recursion.md",version:"0.3.1",sidebar:"version-0.3.1/docs",previous:{title:"primitives",permalink:"/docs/0.3.1/api/primitives"},next:{title:"space",permalink:"/docs/0.3.1/api/space"},latestVersionMainDocPermalink:"/docs"},a=[{value:"recursive",id:"recursive",children:[]}],s={rightToc:a};function u({components:e,...r}){return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:e,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"recursive"},"recursive"),Object(i.b)("p",null,"Create a recursive parser. Used in combination with recurse(Parser)."),Object(i.b)("p",null,"For an example see {@see RecursiveParserTest}."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"function recursive() : Parser\n")))}u.isMDXComponent=!0},346:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return m}));var n=t(0),i=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=i.a.createContext({}),p=function(e){var r=i.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=p(e.components);return i.a.createElement(u.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return i.a.createElement(i.a.Fragment,{},r)}},d=i.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(t),d=n,m=l["".concat(c,".").concat(d)]||l[d]||f[d]||o;return t?i.a.createElement(m,a(a({ref:r},u),{},{components:t})):i.a.createElement(m,a({ref:r},u))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=d;var a={};for(var s in r)hasOwnProperty.call(r,s)&&(a[s]=r[s]);a.originalType=e,a.mdxType="string"==typeof e?e:n,c[1]=a;for(var u=2;u<o;u++)c[u]=t[u];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);