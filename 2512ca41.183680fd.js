(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{148:function(e,a,r){"use strict";r.r(a),r.d(a,"frontMatter",(function(){return i})),r.d(a,"metadata",(function(){return l})),r.d(a,"rightToc",(function(){return p})),r.d(a,"default",(function(){return u}));var t=r(2),n=r(6),c=(r(0),r(387)),i={title:"characters"},l={id:"api/characters",isDocsHomePage:!1,title:"characters",description:"char",source:"@site/docs/api/characters.md",permalink:"/docs/next/api/characters",editUrl:"https://github.com/parsica-php/parsica/tree/main/docs/api/characters.md",version:"next",sidebar:"docs",previous:{title:"StringStream",permalink:"/docs/next/api/StringStream"},next:{title:"combinators",permalink:"/docs/next/api/combinators"},latestVersionMainDocPermalink:"/docs"},p=[{value:"char",id:"char",children:[]},{value:"charI",id:"chari",children:[]},{value:"controlChar",id:"controlchar",children:[]},{value:"upperChar",id:"upperchar",children:[]},{value:"lowerChar",id:"lowerchar",children:[]},{value:"alphaChar",id:"alphachar",children:[]},{value:"alphaNumChar",id:"alphanumchar",children:[]},{value:"printChar",id:"printchar",children:[]},{value:"punctuationChar",id:"punctuationchar",children:[]},{value:"digitChar",id:"digitchar",children:[]},{value:"binDigitChar",id:"bindigitchar",children:[]},{value:"octDigitChar",id:"octdigitchar",children:[]},{value:"hexDigitChar",id:"hexdigitchar",children:[]}],o={rightToc:p};function u(e){var a=e.components,r=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(t.a)({},o,r,{components:a,mdxType:"MDXLayout"}),Object(c.b)("h3",{id:"char"},"char"),Object(c.b)("p",null,"Parse a single character."),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-php"}),"function char(string $c) : Parser\n")),Object(c.b)("h3",{id:"chari"},"charI"),Object(c.b)("p",null,"Parse a single character, case-insensitive and case-preserving. On success it returns the string cased as the\nactually parsed input."),Object(c.b)("p",null,'eg charI(\'a\'\')->run("ABC") will succeed with "A", not "a".'),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-php"}),"function charI(string $c) : Parser\n")),Object(c.b)("h3",{id:"controlchar"},"controlChar"),Object(c.b)("p",null,"Parse a control character (a non-printing character of the Latin-1 subset of Unicode)."),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-php"}),"function controlChar() : Parser\n")),Object(c.b)("h3",{id:"upperchar"},"upperChar"),Object(c.b)("p",null,"Parse an uppercase character A-Z."),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-php"}),"function upperChar() : Parser\n")),Object(c.b)("h3",{id:"lowerchar"},"lowerChar"),Object(c.b)("p",null,"Parse a lowercase character a-z."),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-php"}),"function lowerChar() : Parser\n")),Object(c.b)("h3",{id:"alphachar"},"alphaChar"),Object(c.b)("p",null,"Parse an uppercase or lowercase character A-Z, a-z."),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-php"}),"function alphaChar() : Parser\n")),Object(c.b)("h3",{id:"alphanumchar"},"alphaNumChar"),Object(c.b)("p",null,"Parse an alpha or numeric character A-Z, a-z, 0-9."),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-php"}),"function alphaNumChar() : Parser\n")),Object(c.b)("h3",{id:"printchar"},"printChar"),Object(c.b)("p",null,"Parse a printable ASCII char."),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-php"}),"function printChar() : Parser\n")),Object(c.b)("h3",{id:"punctuationchar"},"punctuationChar"),Object(c.b)("p",null,"Parse a single punctuation character !\"#$%&'()*+,-./:;<=>?@[","]","^_`{|}~"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-php"}),"function punctuationChar() : Parser\n")),Object(c.b)("h3",{id:"digitchar"},"digitChar"),Object(c.b)("p",null,"Parse 0-9. Returns the digit as a string. Use ->map('intval')\nor similar to cast it to a numeric type."),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-php"}),"function digitChar() : Parser\n")),Object(c.b)("h3",{id:"bindigitchar"},"binDigitChar"),Object(c.b)("p",null,"Parse a binary character 0 or 1."),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-php"}),"function binDigitChar() : Parser\n")),Object(c.b)("h3",{id:"octdigitchar"},"octDigitChar"),Object(c.b)("p",null,"Parse an octodecimal character 0-7."),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-php"}),"function octDigitChar() : Parser\n")),Object(c.b)("h3",{id:"hexdigitchar"},"hexDigitChar"),Object(c.b)("p",null,"Parse a hexadecimal numeric character 0123456789abcdefABCDEF."),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-php"}),"function hexDigitChar() : Parser\n")))}u.isMDXComponent=!0},387:function(e,a,r){"use strict";r.d(a,"a",(function(){return b})),r.d(a,"b",(function(){return d}));var t=r(0),n=r.n(t);function c(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function i(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?i(Object(r),!0).forEach((function(a){c(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function p(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},c=Object.keys(e);for(t=0;t<c.length;t++)r=c[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)r=c[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=n.a.createContext({}),u=function(e){var a=n.a.useContext(o),r=a;return e&&(r="function"==typeof e?e(a):l(l({},a),e)),r},b=function(e){var a=u(e.components);return n.a.createElement(o.Provider,{value:a},e.children)},h={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},s=n.a.forwardRef((function(e,a){var r=e.components,t=e.mdxType,c=e.originalType,i=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),b=u(r),s=t,d=b["".concat(i,".").concat(s)]||b[s]||h[s]||c;return r?n.a.createElement(d,l(l({ref:a},o),{},{components:r})):n.a.createElement(d,l({ref:a},o))}));function d(e,a){var r=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var c=r.length,i=new Array(c);i[0]=s;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=e,l.mdxType="string"==typeof e?e:t,i[1]=l;for(var o=2;o<c;o++)i[o]=r[o];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);