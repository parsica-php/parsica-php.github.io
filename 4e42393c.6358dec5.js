(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{218:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return p})),n.d(a,"metadata",(function(){return i})),n.d(a,"rightToc",(function(){return l})),n.d(a,"default",(function(){return o}));var r=n(2),t=n(6),c=(n(0),n(469)),p={title:"space"},i={id:"version-0.6.0/api/space",isDocsHomePage:!1,title:"space",description:"space",source:"@site/versioned_docs/version-0.6.0/api/space.md",permalink:"/docs/0.6.0/api/space",editUrl:"https://github.com/parsica-php/parsica/tree/main/versioned_docs/version-0.6.0/api/space.md",version:"0.6.0",sidebar:"version-0.6.0/docs",previous:{title:"sideEffects",permalink:"/docs/0.6.0/api/sideEffects"},next:{title:"strings",permalink:"/docs/0.6.0/api/strings"},latestVersionMainDocPermalink:"/docs"},l=[{value:"space",id:"space",children:[]},{value:"tab",id:"tab",children:[]},{value:"blank",id:"blank",children:[]},{value:"whitespace",id:"whitespace",children:[]},{value:"newline",id:"newline",children:[]},{value:"crlf",id:"crlf",children:[]},{value:"eol",id:"eol",children:[]},{value:"skipSpace",id:"skipspace",children:[]},{value:"skipHSpace",id:"skiphspace",children:[]},{value:"skipSpace1",id:"skipspace1",children:[]},{value:"skipHSpace1",id:"skiphspace1",children:[]}],s={rightToc:l};function o(e){var a=e.components,n=Object(t.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,n,{components:a,mdxType:"MDXLayout"}),Object(c.b)("h3",{id:"space"},"space"),Object(c.b)("p",null,"Parse a single space character."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"function space() : Parser\n")),Object(c.b)("h3",{id:"tab"},"tab"),Object(c.b)("p",null,"Parse a single tab character."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"function tab() : Parser\n")),Object(c.b)("h3",{id:"blank"},"blank"),Object(c.b)("p",null,"Parse a space or tab."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"function blank() : Parser\n")),Object(c.b)("h3",{id:"whitespace"},"whitespace"),Object(c.b)("p",null,"Parse a space character, and \\t, \\n, \\r, \\f, \\v."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"function whitespace() : Parser\n")),Object(c.b)("h3",{id:"newline"},"newline"),Object(c.b)("p",null,"Parse a newline character."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"function newline() : Parser\n")),Object(c.b)("h3",{id:"crlf"},"crlf"),Object(c.b)("p",null,"Parse a carriage return character and a newline character. Return the two characters. {\\r\\n}"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"function crlf() : Parser\n")),Object(c.b)("h3",{id:"eol"},"eol"),Object(c.b)("p",null,"Parse a newline or a crlf."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"function eol() : Parser\n")),Object(c.b)("h3",{id:"skipspace"},"skipSpace"),Object(c.b)("p",null,"Skip zero or more white space characters."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"function skipSpace() : Parser\n")),Object(c.b)("h3",{id:"skiphspace"},"skipHSpace"),Object(c.b)("p",null,"Like 'skipSpace', but does not accept newlines and carriage returns."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"function skipHSpace() : Parser\n")),Object(c.b)("h3",{id:"skipspace1"},"skipSpace1"),Object(c.b)("p",null,"Skip one or more white space characters."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"function skipSpace1() : Parser\n")),Object(c.b)("h3",{id:"skiphspace1"},"skipHSpace1"),Object(c.b)("p",null,"Like 'skipSpace1', but does not accept newlines and carriage returns."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"function skipHSpace1() : Parser\n")))}o.isMDXComponent=!0},469:function(e,a,n){"use strict";n.d(a,"a",(function(){return b})),n.d(a,"b",(function(){return O}));var r=n(0),t=n.n(r);function c(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function p(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?p(Object(n),!0).forEach((function(a){c(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var s=t.a.createContext({}),o=function(e){var a=t.a.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},b=function(e){var a=o(e.components);return t.a.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.a.createElement(t.a.Fragment,{},a)}},d=t.a.forwardRef((function(e,a){var n=e.components,r=e.mdxType,c=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=o(n),d=r,O=b["".concat(p,".").concat(d)]||b[d]||u[d]||c;return n?t.a.createElement(O,i(i({ref:a},s),{},{components:n})):t.a.createElement(O,i({ref:a},s))}));function O(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var c=n.length,p=new Array(c);p[0]=d;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var s=2;s<c;s++)p[s]=n[s];return t.a.createElement.apply(null,p)}return t.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);