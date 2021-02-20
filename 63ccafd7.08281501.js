(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{204:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return s})),t.d(r,"metadata",(function(){return i})),t.d(r,"rightToc",(function(){return c})),t.d(r,"default",(function(){return l}));var a=t(2),n=(t(0),t(346));const s={title:"PHPUnit/ParserAssertions"},i={id:"api/PHPUnit/ParserAssertions",isDocsHomePage:!1,title:"PHPUnit/ParserAssertions",description:"assertParses",source:"@site/docs/api/PHPUnit/ParserAssertions.md",permalink:"/docs/next/api/PHPUnit/ParserAssertions",editUrl:"https://github.com/mathiasverraes/parsica/tree/main/docs/api/PHPUnit/ParserAssertions.md",version:"next",sidebar:"docs",previous:{title:"JSON/JSON",permalink:"/docs/next/api/JSON/JSON"},next:{title:"ParseResult",permalink:"/docs/next/api/ParseResult"},latestVersionMainDocPermalink:"/docs"},c=[{value:"assertParses",id:"assertparses",children:[]},{value:"assertStrictlyEquals",id:"assertstrictlyequals",children:[]},{value:"assertRemainder",id:"assertremainder",children:[]},{value:"assertParseFails",id:"assertparsefails",children:[]},{value:"assertFailOnEOF",id:"assertfailoneof",children:[]},{value:"assertSucceedOnEOF",id:"assertsucceedoneof",children:[]}],o={rightToc:c};function l({components:e,...r}){return Object(n.b)("wrapper",Object(a.a)({},o,r,{components:e,mdxType:"MDXLayout"}),Object(n.b)("h3",{id:"assertparses"},"assertParses"),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),'protected function assertParses(string $input, Parser $parser, $expectedOutput, string $message = "") : void\n')),Object(n.b)("h3",{id:"assertstrictlyequals"},"assertStrictlyEquals"),Object(n.b)("p",null,"Behaves like assertSame for primitives, behaves like assertEquals for objects of the same type, and fails\nfor everything else."),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"protected function assertStrictlyEquals($expected, $actual, string $message = '') : void\n")),Object(n.b)("h3",{id:"assertremainder"},"assertRemainder"),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),'protected function assertRemainder(string $input, Parser $parser, string $expectedRemaining, string $message = "") : void\n')),Object(n.b)("h3",{id:"assertparsefails"},"assertParseFails"),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),'protected function assertParseFails(string $input, Parser $parser, ?string $expectedFailure = null, string $message = "") : void\n')),Object(n.b)("h3",{id:"assertfailoneof"},"assertFailOnEOF"),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),'protected function assertFailOnEOF(Parser $parser, string $message = "") : void\n')),Object(n.b)("h3",{id:"assertsucceedoneof"},"assertSucceedOnEOF"),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),'protected function assertSucceedOnEOF(Parser $parser, string $message = "") : void\n')))}l.isMDXComponent=!0},346:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return O}));var a=t(0),n=t.n(a);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=n.a.createContext({}),p=function(e){var r=n.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=p(e.components);return n.a.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.a.createElement(n.a.Fragment,{},r)}},b=n.a.forwardRef((function(e,r){var t=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=p(t),b=a,O=u["".concat(i,".").concat(b)]||u[b]||d[b]||s;return t?n.a.createElement(O,c(c({ref:r},l),{},{components:t})):n.a.createElement(O,c({ref:r},l))}));function O(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=b;var c={};for(var o in r)hasOwnProperty.call(r,o)&&(c[o]=r[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<s;l++)i[l]=t[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);