(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{163:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(6),c=(n(0),n(346)),i={title:"ParseResult"},o={id:"api/ParseResult",isDocsHomePage:!1,title:"ParseResult",description:"isSuccess",source:"@site/docs/api/ParseResult.md",permalink:"/docs/next/api/ParseResult",editUrl:"https://github.com/mathiasverraes/parsica/tree/main/docs/api/ParseResult.md",version:"next",sidebar:"docs",previous:{title:"PHPUnit/ParserAssertions",permalink:"/docs/next/api/PHPUnit/ParserAssertions"},next:{title:"Parser",permalink:"/docs/next/api/Parser"},latestVersionMainDocPermalink:"/docs"},p=[{value:"isSuccess",id:"issuccess",children:[]},{value:"isFail",id:"isfail",children:[]},{value:"output",id:"output",children:[]},{value:"remainder",id:"remainder",children:[]},{value:"expected",id:"expected",children:[]},{value:"got",id:"got",children:[]},{value:"append",id:"append",children:[]},{value:"map",id:"map",children:[]},{value:"continueWith",id:"continuewith",children:[]},{value:"throw",id:"throw",children:[]}],l={rightToc:p};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h3",{id:"issuccess"},"isSuccess"),Object(c.b)("p",null,"True if the parser was successful."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"public function isSuccess() : bool\n")),Object(c.b)("h3",{id:"isfail"},"isFail"),Object(c.b)("p",null,"True if the parser has failed."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"public function isFail() : bool\n")),Object(c.b)("h3",{id:"output"},"output"),Object(c.b)("p",null,"The output of the parser."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"public function output()\n")),Object(c.b)("h3",{id:"remainder"},"remainder"),Object(c.b)("p",null,"The part of the input that did not get parsed."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"public function remainder() : Stream\n")),Object(c.b)("h3",{id:"expected"},"expected"),Object(c.b)("p",null,"A message that indicates what the failed parser expected to find at its position in the input. It contains the\nlabel that was attached to the parser."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"public function expected() : string\n")),Object(c.b)("h3",{id:"got"},"got"),Object(c.b)("p",null,"A message indicating the input that the failed parser got at the point where it failed. It's only informational,\nso don't use this for processing. A future version might change this behaviour."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"public function got() : Stream\n")),Object(c.b)("h3",{id:"append"},"append"),Object(c.b)("p",null,"Append the output of two successful ParseResults. If one or both have failed, it returns the first failed\nParseResult."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"public function append(ParseResult $other) : ParseResult\n")),Object(c.b)("h3",{id:"map"},"map"),Object(c.b)("p",null,"Map a function over the output"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"public function map(callable $transform) : ParseResult\n")),Object(c.b)("h3",{id:"continuewith"},"continueWith"),Object(c.b)("p",null,"Use the remainder of this ParseResult as the input for a parser."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"public function continueWith(Parser $parser) : ParseResult\n")),Object(c.b)("h3",{id:"throw"},"throw"),Object(c.b)("p",null,"Throw a ParserFailure exception if the Parser failed, or complain if you're trying to throw a successful\nParseResult."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"public function throw() : void\n")))}s.isMDXComponent=!0},346:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,h=u["".concat(i,".").concat(d)]||u[d]||b[d]||c;return n?a.a.createElement(h,o(o({ref:t},l),{},{components:n})):a.a.createElement(h,o({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<c;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);