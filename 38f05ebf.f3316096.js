(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{164:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return p})),t.d(r,"rightToc",(function(){return l})),t.d(r,"default",(function(){return i}));var a=t(2),n=t(6),s=(t(0),t(387)),c={title:"combinators"},p={id:"api/combinators",isDocsHomePage:!1,title:"combinators",description:"identity",source:"@site/docs/api/combinators.md",permalink:"/docs/next/api/combinators",editUrl:"https://github.com/parsica-php/parsica/tree/main/docs/api/combinators.md",version:"next",sidebar:"docs",previous:{title:"characters",permalink:"/docs/next/api/characters"},next:{title:"numeric",permalink:"/docs/next/api/numeric"},latestVersionMainDocPermalink:"/docs"},l=[{value:"identity",id:"identity",children:[]},{value:"pure",id:"pure",children:[]},{value:"optional",id:"optional",children:[]},{value:"bind",id:"bind",children:[]},{value:"apply",id:"apply",children:[]},{value:"sequence",id:"sequence",children:[]},{value:"keepFirst",id:"keepfirst",children:[]},{value:"keepSecond",id:"keepsecond",children:[]},{value:"either",id:"either",children:[]},{value:"append",id:"append",children:[]},{value:"assemble",id:"assemble",children:[]},{value:"collect",id:"collect",children:[]},{value:"any",id:"any",children:[]},{value:"choice",id:"choice",children:[]},{value:"atLeastOne",id:"atleastone",children:[]},{value:"zeroOrMore",id:"zeroormore",children:[]},{value:"repeat",id:"repeat",children:[]},{value:"repeatList",id:"repeatlist",children:[]},{value:"some",id:"some",children:[]},{value:"many",id:"many",children:[]},{value:"between",id:"between",children:[]},{value:"sepBy",id:"sepby",children:[]},{value:"sepBy1",id:"sepby1",children:[]},{value:"sepBy2",id:"sepby2",children:[]},{value:"notFollowedBy",id:"notfollowedby",children:[]},{value:"map",id:"map",children:[]},{value:"lookAhead",id:"lookahead",children:[]}],o={rightToc:l};function i(e){var r=e.components,t=Object(n.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},o,t,{components:r,mdxType:"MDXLayout"}),Object(s.b)("h3",{id:"identity"},"identity"),Object(s.b)("p",null,"Identity parser, returns the Parser as is."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"function identity(Parser $parser) : Parser\n")),Object(s.b)("h3",{id:"pure"},"pure"),Object(s.b)("p",null,"A parser that will have the argument as its output, no matter what the input was. It doesn't consume any input."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"function pure($output) : Parser\n")),Object(s.b)("h3",{id:"optional"},"optional"),Object(s.b)("p",null,"Optionally parse something, but still succeed if the thing is not there"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"function optional(Parser $parser) : Parser\n")),Object(s.b)("h3",{id:"bind"},"bind"),Object(s.b)("p",null,"Create a parser that takes the output from the first parser (if successful) and feeds it to the callable. The callable\nmust return another parser. If the first parser fails, the first parser is returned."),Object(s.b)("p",null,"This is a monadic bind aka flatmap."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"function bind(Parser $parser, callable $f) : Parser\n")),Object(s.b)("h3",{id:"apply"},"apply"),Object(s.b)("p",null,"Sequential application. Given a parser which outputs a callable, return a new parser that applies the callable on the\noutput of the second parser."),Object(s.b)("p",null,"The first parser must be of type Parser<callable(T1):T2>. {@see pure()} can be used to wrap a callable in a Parser."),Object(s.b)("p",null,"Callables with more than 1 argument need to be curried: pure(curry(fn($x, $y)))->apply($parser2)->apply($parser3)"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"function apply(Parser $parser1, Parser $parser2) : Parser\n")),Object(s.b)("h3",{id:"sequence"},"sequence"),Object(s.b)("p",null,"Parse something, then follow by something else. Ignore the result of the first parser and return the result of the\nsecond parser."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"function sequence(Parser $first, Parser $second) : Parser\n")),Object(s.b)("h3",{id:"keepfirst"},"keepFirst"),Object(s.b)("p",null,"Sequence two parsers, and return the output of the first one."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"function keepFirst(Parser $first, Parser $second) : Parser\n")),Object(s.b)("h3",{id:"keepsecond"},"keepSecond"),Object(s.b)("p",null,"Sequence two parsers, and return the output of the second one."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"function keepSecond(Parser $first, Parser $second) : Parser\n")),Object(s.b)("h3",{id:"either"},"either"),Object(s.b)("p",null,"Either parse the first thing or the second thing"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"function either(Parser $first, Parser $second) : Parser\n")),Object(s.b)("h3",{id:"append"},"append"),Object(s.b)("p",null,"Combine the parser with another parser of the same type, which will cause the results to be appended."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"function append(Parser $left, Parser $right) : Parser\n")),Object(s.b)("h3",{id:"assemble"},"assemble"),Object(s.b)("p",null,"Append all the passed parsers."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"function assemble(Parser ...$parsers) : Parser\n")),Object(s.b)("h3",{id:"collect"},"collect"),Object(s.b)("p",null,"Parse into an array that consists of the results of all parsers."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"function collect(Parser ...$parsers) : Parser\n")),Object(s.b)("h3",{id:"any"},"any"),Object(s.b)("p",null,"Tries each parser one by one, returning the result of the first one that succeeds."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"function any(Parser ...$parsers) : Parser\n")),Object(s.b)("h3",{id:"choice"},"choice"),Object(s.b)("p",null,"Tries each parser one by one, returning the result of the first one that succeeds."),Object(s.b)("p",null,"Alias for {@see any()}"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"function choice(Parser ...$parsers) : Parser\n")),Object(s.b)("h3",{id:"atleastone"},"atLeastOne"),Object(s.b)("p",null,"One or more repetitions of Parser, with the outputs appended."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"function atLeastOne(Parser $parser) : Parser\n")),Object(s.b)("h3",{id:"zeroormore"},"zeroOrMore"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Warning: Deprecated")),Object(s.b)("p",null,"Zero or more repetitions of Parser, with the outputs appended."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"function zeroOrMore(Parser $parser) : Parser\n")),Object(s.b)("h3",{id:"repeat"},"repeat"),Object(s.b)("p",null,"Parse something exactly n times"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"function repeat(int $n, Parser $parser) : Parser\n")),Object(s.b)("h3",{id:"repeatlist"},"repeatList"),Object(s.b)("p",null,"Parse something exactly n times and return as an array"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"function repeatList(int $n, Parser $parser) : Parser\n")),Object(s.b)("h3",{id:"some"},"some"),Object(s.b)("p",null,"Parse something one or more times, and output an array of the successful outputs."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"function some(Parser $parser) : Parser\n")),Object(s.b)("h3",{id:"many"},"many"),Object(s.b)("p",null,"Parse something zero or more times, and output an array of the successful outputs."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"function many(Parser $parser) : Parser\n")),Object(s.b)("h3",{id:"between"},"between"),Object(s.b)("p",null,'Parse $open, followed by $middle, followed by $close, and return the result of $middle. Useful for eg. "(value)".'),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"function between(Parser $open, Parser $close, Parser $middle) : Parser\n")),Object(s.b)("h3",{id:"sepby"},"sepBy"),Object(s.b)("p",null,"Parses zero or more occurrences of $parser, separated by $separator. Returns a list of values."),Object(s.b)("p",null,"The sepBy parser always succeed, even if it doesn't find anything. Use {@see sepBy1()} if you want it to find at\nleast one value."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"function sepBy(Parser $separator, Parser $parser) : Parser\n")),Object(s.b)("h3",{id:"sepby1"},"sepBy1"),Object(s.b)("p",null,"Parses one or more occurrences of $parser, separated by $separator. Returns a list of values."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"function sepBy1(Parser $separator, Parser $parser) : Parser\n")),Object(s.b)("h3",{id:"sepby2"},"sepBy2"),Object(s.b)("p",null,"Parses 2 or more occurrences of $parser, separated by $separator. Returns a list of values."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"function sepBy2(Parser $separator, Parser $parser) : Parser\n")),Object(s.b)("h3",{id:"notfollowedby"},"notFollowedBy"),Object(s.b)("p",null,"notFollowedBy only succeeds when $parser fails. It never consumes any input."),Object(s.b)("p",null,"Example:"),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},'string("print")'),' will also match "printXYZ"'),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},'keepFirst(string("print"), notFollowedBy(alphaNumChar()))'),' will match "print something" but not "printXYZ something"'),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"function notFollowedBy(Parser $parser) : Parser\n")),Object(s.b)("h3",{id:"map"},"map"),Object(s.b)("p",null,"Map a function over the parser (which in turn maps it over the result)."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"function map(Parser $parser, callable $transform) : Parser\n")),Object(s.b)("h3",{id:"lookahead"},"lookAhead"),Object(s.b)("p",null,"If $parser succeeds (either consuming input or not), lookAhead behaves like $parser succeeded without consuming\nanything. If $parser fails, lookAhead has no effect, i.e. it will fail to consume input if $parser fails consuming\ninput."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"function lookAhead(Parser $parser) : Parser\n")))}i.isMDXComponent=!0},387:function(e,r,t){"use strict";t.d(r,"a",(function(){return b})),t.d(r,"b",(function(){return h}));var a=t(0),n=t.n(a);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=n.a.createContext({}),i=function(e){var r=n.a.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},b=function(e){var r=i(e.components);return n.a.createElement(o.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.a.createElement(n.a.Fragment,{},r)}},d=n.a.forwardRef((function(e,r){var t=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),b=i(t),d=a,h=b["".concat(c,".").concat(d)]||b[d]||u[d]||s;return t?n.a.createElement(h,p(p({ref:r},o),{},{components:t})):n.a.createElement(h,p({ref:r},o))}));function h(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=t.length,c=new Array(s);c[0]=d;var p={};for(var l in r)hasOwnProperty.call(r,l)&&(p[l]=r[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,c[1]=p;for(var o=2;o<s;o++)c[o]=t[o];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);