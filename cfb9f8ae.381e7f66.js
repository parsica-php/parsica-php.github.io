(window.webpackJsonp=window.webpackJsonp||[]).push([[237],{337:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return i})),t.d(r,"rightToc",(function(){return s})),t.d(r,"default",(function(){return o}));var n=t(2),a=t(6),l=(t(0),t(387)),c={title:"Parser"},i={id:"version-0.6.0/api/Parser",isDocsHomePage:!1,title:"Parser",description:"recursive",source:"@site/versioned_docs/version-0.6.0/api/Parser.md",permalink:"/docs/0.6.0/api/Parser",editUrl:"https://github.com/parsica-php/parsica/tree/main/versioned_docs/version-0.6.0/api/Parser.md",version:"0.6.0",sidebar:"version-0.6.0/docs",previous:{title:"ParseResult",permalink:"/docs/0.6.0/api/ParseResult"},next:{title:"ParserHasFailed",permalink:"/docs/0.6.0/api/ParserHasFailed"},latestVersionMainDocPermalink:"/docs"},s=[{value:"recursive",id:"recursive",children:[]},{value:"recurse",id:"recurse",children:[]},{value:"run",id:"run",children:[]},{value:"optional",id:"optional",children:[]},{value:"or",id:"or",children:[]},{value:"followedBy",id:"followedby",children:[]},{value:"sequence",id:"sequence",children:[]},{value:"then",id:"then",children:[]},{value:"bind",id:"bind",children:[]},{value:"map",id:"map",children:[]},{value:"continueFrom",id:"continuefrom",children:[]},{value:"append",id:"append",children:[]},{value:"and",id:"and",children:[]},{value:"tryString",id:"trystring",children:[]},{value:"try",id:"try",children:[]},{value:"apply",id:"apply",children:[]},{value:"thenIgnore",id:"thenignore",children:[]},{value:"notFollowedBy",id:"notfollowedby",children:[]},{value:"label",id:"label",children:[]},{value:"emit",id:"emit",children:[]},{value:"thenEof",id:"theneof",children:[]}],p={rightToc:s};function o(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(l.b)("h3",{id:"recursive"},"recursive"),Object(l.b)("p",null,"Create a recursive parser. Used in combination with recurse(Parser)."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"public static function recursive() : Parser\n")),Object(l.b)("h3",{id:"recurse"},"recurse"),Object(l.b)("p",null,"Recurse on a parser. Used in combination with {@see recursive()}. After calling this method, this parser behaves\nlike a regular parser."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"public function recurse(Parser $parser) : void\n")),Object(l.b)("h3",{id:"run"},"run"),Object(l.b)("p",null,"Run the parser on an input"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"public function run(Stream $input) : ParseResult\n")),Object(l.b)("h3",{id:"optional"},"optional"),Object(l.b)("p",null,"Optionally parse something, but still succeed if the thing is not there."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"public function optional() : Parser\n")),Object(l.b)("h3",{id:"or"},"or"),Object(l.b)("p",null,"Try the first parser, and failing that, try the second parser. Returns the first succeeding result, or the first\nfailing result."),Object(l.b)("p",null,"Caveat: The order matters!\nstring('http')->or(string('https')"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"public function or(Parser $other) : Parser\n")),Object(l.b)("h3",{id:"followedby"},"followedBy"),Object(l.b)("p",null,"Parse something, then follow by something else. Ignore the result of the first parser and return the result of\nthe second parser."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"public function followedBy(Parser $second) : Parser\n")),Object(l.b)("h3",{id:"sequence"},"sequence"),Object(l.b)("p",null,"Parse something, then follow by something else. Ignore the result of the first parser and return the result of\nthe second parser."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"public function sequence(Parser $second) : Parser\n")),Object(l.b)("h3",{id:"then"},"then"),Object(l.b)("p",null,"Parse something, then follow by something else. Ignore the result of the first parser and return the result of\nthe second parser. Alias for sequence()."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"public function then(Parser $second) : Parser\n")),Object(l.b)("h3",{id:"bind"},"bind"),Object(l.b)("p",null,"Create a parser that takes the output from the first parser (if successful) and feeds it to the callable. The\ncallable must return another parser. If the first parser fails, the first parser is returned."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"public function bind(callable $f) : Parser\n")),Object(l.b)("h3",{id:"map"},"map"),Object(l.b)("p",null,"Map a function over the parser (which in turn maps it over the result)."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"public function map(callable $transform) : Parser\n")),Object(l.b)("h3",{id:"continuefrom"},"continueFrom"),Object(l.b)("p",null,"Take the remaining input from the result and parse it."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"public function continueFrom(ParseResult $result) : ParseResult\n")),Object(l.b)("h3",{id:"append"},"append"),Object(l.b)("p",null,"Combine the parser with another parser of the same type, which will cause the results to be appended."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"public function append(Parser $other) : Parser\n")),Object(l.b)("h3",{id:"and"},"and"),Object(l.b)("p",null,"Combine the parser with another parser of the same type, which will cause the results to be appended."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"public function and(Parser $other) : Parser\n")),Object(l.b)("h3",{id:"trystring"},"tryString"),Object(l.b)("p",null,"Try to parse a string. Alias of ",Object(l.b)("inlineCode",{parentName:"p"},"try(new StringStream($string))"),"."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"public function tryString(string $input) : ParseResult\n")),Object(l.b)("h3",{id:"try"},"try"),Object(l.b)("p",null,"Try to parse the input, or throw an exception."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"public function try(Stream $input) : ParseResult\n")),Object(l.b)("h3",{id:"apply"},"apply"),Object(l.b)("p",null,"Sequential application. Given a parser which outputs a callable, return a new parser that applies the callable on the\noutput of the second parser."),Object(l.b)("p",null,"The first parser must be of type Parser<callable(T1):T2>. {@see pure()} can be used to wrap a callable in a Parser."),Object(l.b)("p",null,"Callables with more than 1 argument need to be curried: pure(curry(fn($x, $y)))->apply($parser2)->apply($parser3)"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"public function apply(Parser $parser) : Parser\n")),Object(l.b)("h3",{id:"thenignore"},"thenIgnore"),Object(l.b)("p",null,"Sequence two parsers, and return the output of the first one, ignore the second."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"public function thenIgnore(Parser $other) : Parser\n")),Object(l.b)("h3",{id:"notfollowedby"},"notFollowedBy"),Object(l.b)("p",null,"notFollowedBy only succeeds when $second fails. It never consumes any input."),Object(l.b)("p",null,"Example:"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},'string("print")'),' will also match "printXYZ"'),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},'string("print")->notFollowedBy(alphaNumChar()))'),' will match "print something" but not "printXYZ something"'),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"public function notFollowedBy(Parser $second) : Parser\n")),Object(l.b)("h3",{id:"label"},"label"),Object(l.b)("p",null,"Label a parser. When a parser fails, you'll see your label as the \"expected\" value. As a best practice, the\nlabels should make sense to the person who provides the input for your parser. That's often an end user or a\nthird party, so keep them in mind."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"public function label(string $label) : Parser\n")),Object(l.b)("h3",{id:"emit"},"emit"),Object(l.b)("p",null,"If the parser is successful, call the $receiver function with the output of the parser. The resulting parser\nbehaves identical to the original one. This combinator is useful for expressing side effects during the parsing\nprocess. It can be hooked into existing event publishing libraries by using $receiver as an adapter for those.\nOther use cases are logging, caching, performing an action whenever a value is matched in a long running input\nstream, ..."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"public function emit(callable $receiver) : Parser\n")),Object(l.b)("h3",{id:"theneof"},"thenEof"),Object(l.b)("p",null,"Make sure that the input ends after the parser has successfully completed. The output is the output of the\noriginal parser."),Object(l.b)("p",null,"Also useful in unit tests to make sure a parser doesn't consume more than you intended."),Object(l.b)("p",null,"Alias for $parser->thenIgnore(eof())."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"public function thenEof() : Parser\n")))}o.isMDXComponent=!0},387:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return d}));var n=t(0),a=t.n(n);function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){l(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),o=function(e){var r=a.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=o(e.components);return a.a.createElement(p.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},h=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=o(t),h=n,d=u["".concat(c,".").concat(h)]||u[h]||b[h]||l;return t?a.a.createElement(d,i(i({ref:r},p),{},{components:t})):a.a.createElement(d,i({ref:r},p))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=t.length,c=new Array(l);c[0]=h;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<l;p++)c[p]=t[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}h.displayName="MDXCreateElement"}}]);