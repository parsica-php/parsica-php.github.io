(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{173:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return c})),t.d(r,"rightToc",(function(){return s})),t.d(r,"default",(function(){return u}));var n=t(2),i=t(6),a=(t(0),t(346)),o={title:"strings"},c={id:"version-0.3.1/api/strings",isDocsHomePage:!1,title:"strings",description:"string",source:"@site/versioned_docs/version-0.3.1/api/strings.md",permalink:"/docs/0.3.1/api/strings",editUrl:"https://github.com/mathiasverraes/parsica/tree/main/versioned_docs/version-0.3.1/api/strings.md",version:"0.3.1",sidebar:"version-0.3.1/docs",previous:{title:"space",permalink:"/docs/0.3.1/api/space"},next:{title:"What are parser combinators?",permalink:"/docs/0.3.1/tutorial/introduction"},latestVersionMainDocPermalink:"/docs"},s=[{value:"string",id:"string",children:[]},{value:"stringI",id:"stringi",children:[]}],p={rightToc:s};function u(e){var r=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"string"},"string"),Object(a.b)("p",null,"Parse a non-empty string."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"function string(string $str) : Parser\n")),Object(a.b)("h3",{id:"stringi"},"stringI"),Object(a.b)("p",null,'Parse a non-empty string, case-insensitive and case-preserving. On success it returns the string cased as the\nactually parsed input.\neg stringI("foobar")->run("foObAr") will succeed with "foObAr"'),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"function stringI(string $str) : Parser\n")))}u.isMDXComponent=!0},346:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return d}));var n=t(0),i=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),u=function(e){var r=i.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l=function(e){var r=u(e.components);return i.a.createElement(p.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return i.a.createElement(i.a.Fragment,{},r)}},f=i.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(t),f=n,d=l["".concat(o,".").concat(f)]||l[f]||b[f]||a;return t?i.a.createElement(d,c(c({ref:r},p),{},{components:t})):i.a.createElement(d,c({ref:r},p))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,o=new Array(a);o[0]=f;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var p=2;p<a;p++)o[p]=t[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);