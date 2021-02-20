(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{295:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return s})),t.d(r,"metadata",(function(){return c})),t.d(r,"rightToc",(function(){return l})),t.d(r,"default",(function(){return o}));var a=t(2),n=(t(0),t(346));const s={title:"combinators"},c={id:"version-0.3.1/api/combinators",isDocsHomePage:!1,title:"combinators",description:"identity",source:"@site/versioned_docs/version-0.3.1/api/combinators.md",permalink:"/docs/0.3.1/api/combinators",editUrl:"https://github.com/mathiasverraes/parsica/tree/main/versioned_docs/version-0.3.1/api/combinators.md",version:"0.3.1",sidebar:"version-0.3.1/docs",previous:{title:"characters",permalink:"/docs/0.3.1/api/characters"},next:{title:"numeric",permalink:"/docs/0.3.1/api/numeric"},latestVersionMainDocPermalink:"/docs"},l=[{value:"identity",id:"identity",children:[]},{value:"pure",id:"pure",children:[]},{value:"optional",id:"optional",children:[]},{value:"bind",id:"bind",children:[]},{value:"sequence",id:"sequence",children:[]},{value:"keepFirst",id:"keepfirst",children:[]},{value:"keepSecond",id:"keepsecond",children:[]},{value:"either",id:"either",children:[]},{value:"append",id:"append",children:[]},{value:"assemble",id:"assemble",children:[]},{value:"collect",id:"collect",children:[]},{value:"any",id:"any",children:[]},{value:"choice",id:"choice",children:[]},{value:"atLeastOne",id:"atleastone",children:[]},{value:"repeat",id:"repeat",children:[]},{value:"repeatList",id:"repeatlist",children:[]},{value:"many",id:"many",children:[]},{value:"some",id:"some",children:[]},{value:"between",id:"between",children:[]},{value:"sepBy",id:"sepby",children:[]},{value:"sepBy1",id:"sepby1",children:[]},{value:"notFollowedBy",id:"notfollowedby",children:[]}],p={rightToc:l};function o({components:e,...r}){return Object(n.b)("wrapper",Object(a.a)({},p,r,{components:e,mdxType:"MDXLayout"}),Object(n.b)("h3",{id:"identity"},"identity"),Object(n.b)("p",null,"Identity parser, returns the Parser as is."),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"function identity(Parser $parser) : Parser\n")),Object(n.b)("h3",{id:"pure"},"pure"),Object(n.b)("p",null,"A parser that will have the argument as its output, no matter what the input was. It doesn't consume any input."),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"function pure($output) : Parser\n")),Object(n.b)("h3",{id:"optional"},"optional"),Object(n.b)("p",null,"Optionally parse something, but still succeed if the thing is not there"),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"function optional(Parser $parser) : Parser\n")),Object(n.b)("h3",{id:"bind"},"bind"),Object(n.b)("p",null,"Create a parser that takes the output from the first parser (if successful) and feeds it to the callable. The callable\nmust return another parser. If the first parser fails, the first parser is returned."),Object(n.b)("p",null,"This is a monadic bind aka flatmap."),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"function bind(Parser $parser, callable $f) : Parser\n")),Object(n.b)("h3",{id:"sequence"},"sequence"),Object(n.b)("p",null,"Parse something, then follow by something else. Ignore the result of the first parser and return the result of the\nsecond parser."),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"function sequence(Parser $first, Parser $second) : Parser\n")),Object(n.b)("h3",{id:"keepfirst"},"keepFirst"),Object(n.b)("p",null,"Sequence two parsers, and return the output of the first one."),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"function keepFirst(Parser $first, Parser $second) : Parser\n")),Object(n.b)("h3",{id:"keepsecond"},"keepSecond"),Object(n.b)("p",null,"Sequence two parsers, and return the output of the second one."),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"function keepSecond(Parser $first, Parser $second) : Parser\n")),Object(n.b)("h3",{id:"either"},"either"),Object(n.b)("p",null,"Either parse the first thing or the second thing"),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"function either(Parser $first, Parser $second) : Parser\n")),Object(n.b)("h3",{id:"append"},"append"),Object(n.b)("p",null,"Combine the parser with another parser of the same type, which will cause the results to be appended."),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"function append(Parser $left, Parser $right) : Parser\n")),Object(n.b)("h3",{id:"assemble"},"assemble"),Object(n.b)("p",null,"Append all the passed parsers."),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"function assemble(Parser ...$parsers) : Parser\n")),Object(n.b)("h3",{id:"collect"},"collect"),Object(n.b)("p",null,"Parse into an array that consists of the results of all parsers."),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"function collect(Parser ...$parsers) : Parser\n")),Object(n.b)("h3",{id:"any"},"any"),Object(n.b)("p",null,"Tries each parser one by one, returning the result of the first one that succeeds."),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"function any(Parser ...$parsers) : Parser\n")),Object(n.b)("h3",{id:"choice"},"choice"),Object(n.b)("p",null,"Tries each parser one by one, returning the result of the first one that succeeds."),Object(n.b)("p",null,"Alias for {@see any()}"),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"function choice(Parser ...$parsers) : Parser\n")),Object(n.b)("h3",{id:"atleastone"},"atLeastOne"),Object(n.b)("p",null,"One or more repetitions of Parser"),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"function atLeastOne(Parser $parser) : Parser\n")),Object(n.b)("h3",{id:"repeat"},"repeat"),Object(n.b)("p",null,"Parse something exactly n times"),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"function repeat(int $n, Parser $parser) : Parser\n")),Object(n.b)("h3",{id:"repeatlist"},"repeatList"),Object(n.b)("p",null,"Parse something exactly n times and return as an array"),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"function repeatList(int $n, Parser $parser) : Parser\n")),Object(n.b)("h3",{id:"many"},"many"),Object(n.b)("p",null,"Parse something zero or more times, and output an array of the successful outputs."),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"function many(Parser $parser) : Parser\n")),Object(n.b)("h3",{id:"some"},"some"),Object(n.b)("p",null,"Parse something one or more times, and output an array of the successful outputs."),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"function some(Parser $parser) : Parser\n")),Object(n.b)("h3",{id:"between"},"between"),Object(n.b)("p",null,'Parse $open, followed by $middle, followed by $close, and return the result of $middle. Useful for eg. "(value)".'),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"function between(Parser $open, Parser $close, Parser $middle) : Parser\n")),Object(n.b)("h3",{id:"sepby"},"sepBy"),Object(n.b)("p",null,"Parses zero or more occurrences of $parser, separated by $separator. Returns a list of values."),Object(n.b)("p",null,"The sepBy parser always succeed, even if it doesn't find anything. Use {@see sepBy1()} if you want it to find at\nleast one value."),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"function sepBy(Parser $separator, Parser $parser) : Parser\n")),Object(n.b)("h3",{id:"sepby1"},"sepBy1"),Object(n.b)("p",null,"Parses one or more occurrences of $parser, separated by $separator. Returns a list of values."),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"function sepBy1(Parser $separator, Parser $parser) : Parser\n")),Object(n.b)("h3",{id:"notfollowedby"},"notFollowedBy"),Object(n.b)("p",null,"notFollowedBy only succeeds when $parser fails. It never consumes any input."),Object(n.b)("p",null,"Example:"),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},'string("print")'),' will also match "printXYZ"'),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},'keepFirst(string("print"), notFollowedBy(alphaNumChar()))'),' will match "print something" but not "printXYZ something"'),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"function notFollowedBy(Parser $parser) : Parser\n")))}o.isMDXComponent=!0},346:function(e,r,t){"use strict";t.d(r,"a",(function(){return b})),t.d(r,"b",(function(){return h}));var a=t(0),n=t.n(a);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=n.a.createContext({}),i=function(e){var r=n.a.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},b=function(e){var r=i(e.components);return n.a.createElement(o.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.a.createElement(n.a.Fragment,{},r)}},d=n.a.forwardRef((function(e,r){var t=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),b=i(t),d=a,h=b["".concat(c,".").concat(d)]||b[d]||u[d]||s;return t?n.a.createElement(h,l(l({ref:r},o),{},{components:t})):n.a.createElement(h,l({ref:r},o))}));function h(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=t.length,c=new Array(s);c[0]=d;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var o=2;o<s;o++)c[o]=t[o];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);