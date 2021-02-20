(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{117:function(e,a,r){"use strict";r.r(a),r.d(a,"frontMatter",(function(){return p})),r.d(a,"metadata",(function(){return i})),r.d(a,"rightToc",(function(){return l})),r.d(a,"default",(function(){return o}));var n=r(2),t=r(6),c=(r(0),r(387)),p={title:"space"},i={id:"version-0.3.1/api/space",isDocsHomePage:!1,title:"space",description:"space",source:"@site/versioned_docs/version-0.3.1/api/space.md",permalink:"/docs/0.3.1/api/space",editUrl:"https://github.com/parsica-php/parsica/tree/main/versioned_docs/version-0.3.1/api/space.md",version:"0.3.1",sidebar:"version-0.3.1/docs",previous:{title:"recursion",permalink:"/docs/0.3.1/api/recursion"},next:{title:"strings",permalink:"/docs/0.3.1/api/strings"},latestVersionMainDocPermalink:"/docs"},l=[{value:"space",id:"space",children:[]},{value:"tab",id:"tab",children:[]},{value:"blank",id:"blank",children:[]},{value:"whitespace",id:"whitespace",children:[]},{value:"newline",id:"newline",children:[]},{value:"crlf",id:"crlf",children:[]},{value:"eol",id:"eol",children:[]},{value:"skipSpace",id:"skipspace",children:[]},{value:"skipHSpace",id:"skiphspace",children:[]},{value:"skipSpace1",id:"skipspace1",children:[]},{value:"skipHSpace1",id:"skiphspace1",children:[]}],s={rightToc:l};function o(e){var a=e.components,r=Object(t.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},s,r,{components:a,mdxType:"MDXLayout"}),Object(c.b)("h3",{id:"space"},"space"),Object(c.b)("p",null,"Parse a single space character."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"function space() : Parser\n")),Object(c.b)("h3",{id:"tab"},"tab"),Object(c.b)("p",null,"Parse a single tab character."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"function tab() : Parser\n")),Object(c.b)("h3",{id:"blank"},"blank"),Object(c.b)("p",null,"Parse a space or tab."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"function blank() : Parser\n")),Object(c.b)("h3",{id:"whitespace"},"whitespace"),Object(c.b)("p",null,"Parse a space character, and \\t, \\n, \\r, \\f, \\v."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"function whitespace() : Parser\n")),Object(c.b)("h3",{id:"newline"},"newline"),Object(c.b)("p",null,"Parse a newline character."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"function newline() : Parser\n")),Object(c.b)("h3",{id:"crlf"},"crlf"),Object(c.b)("p",null,"Parse a carriage return character and a newline character. Return the two characters. {\\r\\n}"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"function crlf() : Parser\n")),Object(c.b)("h3",{id:"eol"},"eol"),Object(c.b)("p",null,"Parse a newline or a crlf."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"function eol() : Parser\n")),Object(c.b)("h3",{id:"skipspace"},"skipSpace"),Object(c.b)("p",null,"Skip zero or more white space characters."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"function skipSpace() : Parser\n")),Object(c.b)("h3",{id:"skiphspace"},"skipHSpace"),Object(c.b)("p",null,"Like 'skipSpace', but does not accept newlines and carriage returns."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"function skipHSpace() : Parser\n")),Object(c.b)("h3",{id:"skipspace1"},"skipSpace1"),Object(c.b)("p",null,"Skip one or more white space characters."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"function skipSpace1() : Parser\n")),Object(c.b)("h3",{id:"skiphspace1"},"skipHSpace1"),Object(c.b)("p",null,"Like 'skipSpace1', but does not accept newlines and carriage returns."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"function skipHSpace1() : Parser\n")))}o.isMDXComponent=!0},387:function(e,a,r){"use strict";r.d(a,"a",(function(){return b})),r.d(a,"b",(function(){return O}));var n=r(0),t=r.n(n);function c(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function p(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?p(Object(r),!0).forEach((function(a){c(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function l(e,a){if(null==e)return{};var r,n,t=function(e,a){if(null==e)return{};var r,n,t={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],a.indexOf(r)>=0||(t[r]=e[r]);return t}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var s=t.a.createContext({}),o=function(e){var a=t.a.useContext(s),r=a;return e&&(r="function"==typeof e?e(a):i(i({},a),e)),r},b=function(e){var a=o(e.components);return t.a.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.a.createElement(t.a.Fragment,{},a)}},d=t.a.forwardRef((function(e,a){var r=e.components,n=e.mdxType,c=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=o(r),d=n,O=b["".concat(p,".").concat(d)]||b[d]||u[d]||c;return r?t.a.createElement(O,i(i({ref:a},s),{},{components:r})):t.a.createElement(O,i({ref:a},s))}));function O(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var c=r.length,p=new Array(c);p[0]=d;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var s=2;s<c;s++)p[s]=r[s];return t.a.createElement.apply(null,p)}return t.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);