(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{279:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return o})),t.d(n,"default",(function(){return s}));var r=t(2),a=(t(0),t(346));const c={title:"primitives"},i={id:"version-0.6.1/api/primitives",isDocsHomePage:!1,title:"primitives",description:"anySingleBut",source:"@site/versioned_docs/version-0.6.1/api/primitives.md",permalink:"/docs/api/primitives",editUrl:"https://github.com/mathiasverraes/parsica/tree/main/versioned_docs/version-0.6.1/api/primitives.md",version:"0.6.1",sidebar:"version-0.6.1/docs",previous:{title:"predicates",permalink:"/docs/api/predicates"},next:{title:"recursion",permalink:"/docs/api/recursion"}},o=[{value:"anySingleBut",id:"anysinglebut",children:[]},{value:"oneOf",id:"oneof",children:[]},{value:"oneOfS",id:"oneofs",children:[]},{value:"noneOf",id:"noneof",children:[]},{value:"noneOfS",id:"noneofs",children:[]},{value:"takeRest",id:"takerest",children:[]},{value:"nothing",id:"nothing",children:[]},{value:"everything",id:"everything",children:[]},{value:"succeed",id:"succeed",children:[]},{value:"fail",id:"fail",children:[]},{value:"eof",id:"eof",children:[]}],l={rightToc:o};function s({components:e,...n}){return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"anysinglebut"},"anySingleBut"),Object(a.b)("p",null,"Match any character but the given one."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"function anySingleBut(string $x) : Parser\n")),Object(a.b)("h3",{id:"oneof"},"oneOf"),Object(a.b)("p",null,"Succeeds if the current character is in the supplied list of characters. Returns the parsed character."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"function oneOf(array $chars) : Parser\n")),Object(a.b)("h3",{id:"oneofs"},"oneOfS"),Object(a.b)("p",null,"A compact form of 'oneOf'.\noneOfS(\"abc\") == oneOf(","['a', 'b', 'c']",")"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"function oneOfS(string $chars) : Parser\n")),Object(a.b)("h3",{id:"noneof"},"noneOf"),Object(a.b)("p",null,"The dual of 'oneOf'. Succeeds if the current character is not in the supplied list of characters. Returns the\nparsed character."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"function noneOf(array $chars) : Parser\n")),Object(a.b)("h3",{id:"noneofs"},"noneOfS"),Object(a.b)("p",null,"A compact form of 'noneOf'.\nnoneOfS(\"abc\") == noneOf(","['a', 'b', 'c']",")"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"function noneOfS(string $chars) : Parser\n")),Object(a.b)("h3",{id:"takerest"},"takeRest"),Object(a.b)("p",null,"Consume the rest of the input and return it as a string. This parser never fails, but may return the empty string."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"function takeRest() : Parser\n")),Object(a.b)("h3",{id:"nothing"},"nothing"),Object(a.b)("p",null,"Parse nothing, but still succeed."),Object(a.b)("p",null,"This serves as the zero parser in ",Object(a.b)("inlineCode",{parentName:"p"},"append()")," operations."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"function nothing() : Parser\n")),Object(a.b)("h3",{id:"everything"},"everything"),Object(a.b)("p",null,"Parse everything; that is, consume the rest of the input until the end."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"function everything() : Parser\n")),Object(a.b)("h3",{id:"succeed"},"succeed"),Object(a.b)("p",null,"Always succeed, no matter what the input was."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"function succeed() : Parser\n")),Object(a.b)("h3",{id:"fail"},"fail"),Object(a.b)("p",null,"Always fail, no matter what the input was."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"function fail(string $label) : Parser\n")),Object(a.b)("h3",{id:"eof"},"eof"),Object(a.b)("p",null,"Parse the end of the input"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"function eof() : Parser\n")))}s.isMDXComponent=!0},346:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),p=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},f=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),f=r,d=u["".concat(i,".").concat(f)]||u[f]||b[f]||c;return t?a.a.createElement(d,o(o({ref:n},s),{},{components:t})):a.a.createElement(d,o({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,i=new Array(c);i[0]=f;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<c;s++)i[s]=t[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);