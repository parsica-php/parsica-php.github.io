(window.webpackJsonp=window.webpackJsonp||[]).push([[231],{331:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return o})),r.d(t,"default",(function(){return s}));var n=r(2),a=(r(0),r(346));const i={title:"ParseResult"},c={id:"version-0.6.1/api/ParseResult",isDocsHomePage:!1,title:"ParseResult",description:"isSuccess",source:"@site/versioned_docs/version-0.6.1/api/ParseResult.md",permalink:"/docs/api/ParseResult",editUrl:"https://github.com/mathiasverraes/parsica/tree/main/versioned_docs/version-0.6.1/api/ParseResult.md",version:"0.6.1",sidebar:"version-0.6.1/docs",previous:{title:"PHPUnit/ParserAssertions",permalink:"/docs/api/PHPUnit/ParserAssertions"},next:{title:"Parser",permalink:"/docs/api/Parser"}},o=[{value:"isSuccess",id:"issuccess",children:[]},{value:"isFail",id:"isfail",children:[]},{value:"output",id:"output",children:[]},{value:"remainder",id:"remainder",children:[]},{value:"expected",id:"expected",children:[]},{value:"got",id:"got",children:[]},{value:"append",id:"append",children:[]},{value:"map",id:"map",children:[]},{value:"continueWith",id:"continuewith",children:[]},{value:"throw",id:"throw",children:[]}],p={rightToc:o};function s({components:e,...t}){return Object(a.b)("wrapper",Object(n.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"issuccess"},"isSuccess"),Object(a.b)("p",null,"True if the parser was successful."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"public function isSuccess() : bool\n")),Object(a.b)("h3",{id:"isfail"},"isFail"),Object(a.b)("p",null,"True if the parser has failed."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"public function isFail() : bool\n")),Object(a.b)("h3",{id:"output"},"output"),Object(a.b)("p",null,"The output of the parser."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"public function output()\n")),Object(a.b)("h3",{id:"remainder"},"remainder"),Object(a.b)("p",null,"The part of the input that did not get parsed."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"public function remainder() : Stream\n")),Object(a.b)("h3",{id:"expected"},"expected"),Object(a.b)("p",null,"A message that indicates what the failed parser expected to find at its position in the input. It contains the\nlabel that was attached to the parser."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"public function expected() : string\n")),Object(a.b)("h3",{id:"got"},"got"),Object(a.b)("p",null,"A message indicating the input that the failed parser got at the point where it failed. It's only informational,\nso don't use this for processing. A future version might change this behaviour."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"public function got() : Stream\n")),Object(a.b)("h3",{id:"append"},"append"),Object(a.b)("p",null,"Append the output of two successful ParseResults. If one or both have failed, it returns the first failed\nParseResult."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"public function append(ParseResult $other) : ParseResult\n")),Object(a.b)("h3",{id:"map"},"map"),Object(a.b)("p",null,"Map a function over the output"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"public function map(callable $transform) : ParseResult\n")),Object(a.b)("h3",{id:"continuewith"},"continueWith"),Object(a.b)("p",null,"Use the remainder of this ParseResult as the input for a parser."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"public function continueWith(Parser $parser) : ParseResult\n")),Object(a.b)("h3",{id:"throw"},"throw"),Object(a.b)("p",null,"Throw a ParserFailure exception if the Parser failed, or complain if you're trying to throw a successful\nParseResult."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"public function throw() : void\n")))}s.isMDXComponent=!0},346:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return h}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(r),d=n,h=u["".concat(c,".").concat(d)]||u[d]||b[d]||i;return r?a.a.createElement(h,o(o({ref:t},s),{},{components:r})):a.a.createElement(h,o({ref:t},s))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var s=2;s<i;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);