(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{130:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return l})),t.d(r,"metadata",(function(){return i})),t.d(r,"rightToc",(function(){return s})),t.d(r,"default",(function(){return p}));var n=t(2),a=t(6),c=(t(0),t(346)),l={title:"Parser"},i={id:"version-0.4.0/api/Parser",isDocsHomePage:!1,title:"Parser",description:"recursive",source:"@site/versioned_docs/version-0.4.0/api/Parser.md",permalink:"/docs/0.4.0/api/Parser",editUrl:"https://github.com/mathiasverraes/parsica/tree/main/versioned_docs/version-0.4.0/api/Parser.md",version:"0.4.0",sidebar:"version-0.4.0/docs",previous:{title:"numeric",permalink:"/docs/0.4.0/api/numeric"},next:{title:"ParseResult",permalink:"/docs/0.4.0/api/ParseResult"},latestVersionMainDocPermalink:"/docs"},s=[{value:"recursive",id:"recursive",children:[]},{value:"recurse",id:"recurse",children:[]},{value:"run",id:"run",children:[]},{value:"optional",id:"optional",children:[]},{value:"or",id:"or",children:[]},{value:"followedBy",id:"followedby",children:[]},{value:"sequence",id:"sequence",children:[]},{value:"bind",id:"bind",children:[]},{value:"map",id:"map",children:[]},{value:"continueFrom",id:"continuefrom",children:[]},{value:"construct",id:"construct",children:[]},{value:"append",id:"append",children:[]},{value:"tryString",id:"trystring",children:[]},{value:"try",id:"try",children:[]},{value:"apply",id:"apply",children:[]},{value:"thenIgnore",id:"thenignore",children:[]},{value:"notFollowedBy",id:"notfollowedby",children:[]},{value:"label",id:"label",children:[]},{value:"emit",id:"emit",children:[]}],o={rightToc:s};function p(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},o,t,{components:r,mdxType:"MDXLayout"}),Object(c.b)("h3",{id:"recursive"},"recursive"),Object(c.b)("p",null,"Create a recursive parser. Used in combination with recurse(Parser)."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"public static function recursive() : Parser\n")),Object(c.b)("h3",{id:"recurse"},"recurse"),Object(c.b)("p",null,"Recurse on a parser. Used in combination with {@see recursive()}. After calling this method, this parser behaves\nlike a regular parser."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"public function recurse(Parser $parser) : Parser\n")),Object(c.b)("h3",{id:"run"},"run"),Object(c.b)("p",null,"Run the parser on an input"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"public function run(Stream $input) : ParseResult\n")),Object(c.b)("h3",{id:"optional"},"optional"),Object(c.b)("p",null,"Optionally parse something, but still succeed if the thing is not there."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"public function optional() : Parser\n")),Object(c.b)("h3",{id:"or"},"or"),Object(c.b)("p",null,"Try the first parser, and failing that, try the second parser. Returns the first succeeding result, or the first\nfailing result."),Object(c.b)("p",null,"Caveat: The order matters!\nstring('http')->or(string('https')"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"public function or(Parser $other) : Parser\n")),Object(c.b)("h3",{id:"followedby"},"followedBy"),Object(c.b)("p",null,"Parse something, then follow by something else. Ignore the result of the first parser and return the result of\nthe second parser."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"public function followedBy(Parser $second) : Parser\n")),Object(c.b)("h3",{id:"sequence"},"sequence"),Object(c.b)("p",null,"Parse something, then follow by something else. Ignore the result of the first parser and return the result of\nthe second parser."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"public function sequence(Parser $second) : Parser\n")),Object(c.b)("h3",{id:"bind"},"bind"),Object(c.b)("p",null,"Create a parser that takes the output from the first parser (if successful) and feeds it to the callable. The\ncallable must return another parser. If the first parser fails, the first parser is returned."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"public function bind(callable $f) : Parser\n")),Object(c.b)("h3",{id:"map"},"map"),Object(c.b)("p",null,"Map a function over the parser (which in turn maps it over the result)."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"public function map(callable $transform) : Parser\n")),Object(c.b)("h3",{id:"continuefrom"},"continueFrom"),Object(c.b)("p",null,"Take the remaining input from the result and parse it."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"public function continueFrom(ParseResult $result) : ParseResult\n")),Object(c.b)("h3",{id:"construct"},"construct"),Object(c.b)("p",null,"Construct a class with thee parser's output as the constructor argument"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"public function construct(string $className) : Parser\n")),Object(c.b)("h3",{id:"append"},"append"),Object(c.b)("p",null,"Combine the parser with another parser of the same type, which will cause the results to be appended."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"public function append(Parser $other) : Parser\n")),Object(c.b)("h3",{id:"trystring"},"tryString"),Object(c.b)("p",null,"Try to parse a string. Alias of ",Object(c.b)("inlineCode",{parentName:"p"},"try(new StringStream($string))"),"."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"public function tryString(string $input) : ParseResult\n")),Object(c.b)("h3",{id:"try"},"try"),Object(c.b)("p",null,"Try to parse the input, or throw an exception."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"public function try(Stream $input) : ParseResult\n")),Object(c.b)("h3",{id:"apply"},"apply"),Object(c.b)("p",null,"Sequential application."),Object(c.b)("p",null,"The first parser must be of type Parser<callable(T2):T3>."),Object(c.b)("p",null,"apply :: f (a -> b) -> f a -> f b"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"public function apply(Parser $parser) : Parser\n")),Object(c.b)("h3",{id:"thenignore"},"thenIgnore"),Object(c.b)("p",null,"Sequence two parsers, and return the output of the first one, ignore the second."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"public function thenIgnore(Parser $other) : Parser\n")),Object(c.b)("h3",{id:"notfollowedby"},"notFollowedBy"),Object(c.b)("p",null,"notFollowedBy only succeeds when $second fails. It never consumes any input."),Object(c.b)("p",null,"Example:"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},'string("print")'),' will also match "printXYZ"'),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},'string("print")->notFollowedBy(alphaNumChar()))'),' will match "print something" but not "printXYZ something"'),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"public function notFollowedBy(Parser $second) : Parser\n")),Object(c.b)("h3",{id:"label"},"label"),Object(c.b)("p",null,"Label a parser. When a parser fails, you'll see your label as the \"expected\" value. As a best practice, the\nlabels should make sense to the person who provides the input for your parser. That's often an end user or a\nthird party, so keep them in mind."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"public function label(string $label) : Parser\n")),Object(c.b)("h3",{id:"emit"},"emit"),Object(c.b)("p",null,"If the parser is successful, call the $receiver function with the output of the parser. The resulting parser\nbehaves identical to the original one. This combinator is useful for expressing side effects during the parsing\nprocess. It can be hooked into existing event publishing libraries by using $receiver as an adapter for those.\nOther use cases are logging, caching, performing an action whenever a value is matched in a long running input\nstream, ..."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"public function emit(callable $receiver) : Parser\n")))}p.isMDXComponent=!0},346:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return h}));var n=t(0),a=t.n(n);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=a.a.createContext({}),p=function(e){var r=a.a.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=p(e.components);return a.a.createElement(o.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},d=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),u=p(t),d=n,h=u["".concat(l,".").concat(d)]||u[d]||b[d]||c;return t?a.a.createElement(h,i(i({ref:r},o),{},{components:t})):a.a.createElement(h,i({ref:r},o))}));function h(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var c=t.length,l=new Array(c);l[0]=d;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var o=2;o<c;o++)l[o]=t[o];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);