(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{121:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(2),r=n(6),i=(n(0),n(387)),p={title:"Functional Paradigms",sidebar_label:"Functional Paradigms"},o={id:"version-0.6.1/tutorial/90_functional_paradigms",isDocsHomePage:!1,title:"Functional Paradigms",description:"Internally, Parsica is designed using paradigms from functional programming.  We list them here for anybody who's interested in FP, but you don't need to know them to work with Parsica.",source:"@site/versioned_docs/version-0.6.1/tutorial/90_functional_paradigms.md",permalink:"/docs/0.6.1/tutorial/90_functional_paradigms",editUrl:"https://github.com/parsica-php/parsica/tree/main/versioned_docs/version-0.6.1/tutorial/90_functional_paradigms.md",version:"0.6.1",sidebar_label:"Functional Paradigms",sidebar:"version-0.6.1/docs",previous:{title:"Parsing Expression Languages",permalink:"/docs/0.6.1/tutorial/20_expressions"},next:{title:"Development Status",permalink:"/docs/0.6.1/resources/01_development_status"},latestVersionMainDocPermalink:"/docs"},c=[{value:"Purity",id:"purity",children:[]},{value:"Types",id:"types",children:[]},{value:"Either",id:"either",children:[]},{value:"Functors",id:"functors",children:[]},{value:"Monoids",id:"monoids",children:[{value:"Laws",id:"laws",children:[]}]},{value:"Applicative Functors",id:"applicative-functors",children:[{value:"Laws",id:"laws-1",children:[]}]},{value:"Monads",id:"monads",children:[{value:"Laws",id:"laws-2",children:[]}]}],l={rightToc:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Internally, Parsica is designed using paradigms from functional programming.  We list them here for anybody who's interested in FP, but you don't need to know them to work with Parsica. "),Object(i.b)("p",null,"Throughout this document, ",Object(i.b)("inlineCode",{parentName:"p"},"$parser1 \u2261 $parser2")," means that you can swap ",Object(i.b)("inlineCode",{parentName:"p"},"$parser1")," with ",Object(i.b)("inlineCode",{parentName:"p"},"$parser2")," and vice-versa, and it will not affect the outcome of your program."),Object(i.b)("h2",{id:"purity"},"Purity"),Object(i.b)("p",null,"Almost all the code is pure and referentially transparent. ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"recursion"}),"A notable exception")," is the combo of ",Object(i.b)("inlineCode",{parentName:"p"},"recursive()")," and ",Object(i.b)("inlineCode",{parentName:"p"},"Parser::recurse()"),". The latter mutates a ",Object(i.b)("inlineCode",{parentName:"p"},"Parser"),". We constrained this so that you can't use the parser when it's not set up yet, and after calling ",Object(i.b)("inlineCode",{parentName:"p"},"recurse()"),", you can't call it again. So not strictly pure, but close enough not to matter much in practice."),Object(i.b)("p",null,"The combinators are all pure. Some combinators are implemented as instance methods on ",Object(i.b)("inlineCode",{parentName:"p"},"Parser"),", but these are also pure. You can think of them as functions that take ",Object(i.b)("inlineCode",{parentName:"p"},"$this")," as the first argument."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$parser1->combinator($parser2) \n    \u2261 combinator($parser1, $parser2)\n")),Object(i.b)("p",null,"In fact, very often there are both a function and an instance method for the same combinator, where one is an alias for the other."),Object(i.b)("h2",{id:"types"},"Types"),Object(i.b)("p",null,"There are no generics in PHP 7.4, but we use thee Psalm static typechecker to simulate some of it. The two type are really ",Object(i.b)("inlineCode",{parentName:"p"},"Parser<T>")," and ",Object(i.b)("inlineCode",{parentName:"p"},"ParseResult<T>"),", where ",Object(i.b)("inlineCode",{parentName:"p"},"T")," is the type of the resulting output in the case of a successful parse. "),Object(i.b)("h2",{id:"either"},"Either"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"ParseResult<T>")," is approximately an ",Object(i.b)("inlineCode",{parentName:"p"},"Either<ParseFailure, ParseSuccess<T>>")," type.  "),Object(i.b)("h2",{id:"functors"},"Functors"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"ParseResult")," and ",Object(i.b)("inlineCode",{parentName:"p"},"Parser")," are functors, using the ",Object(i.b)("inlineCode",{parentName:"p"},"map")," method. "),Object(i.b)("p",null,"For ",Object(i.b)("inlineCode",{parentName:"p"},"ParseResult"),", the function is only applied to the output if ",Object(i.b)("inlineCode",{parentName:"p"},"ParseResult::isSuccess()")," is true, and ignored in other cases. "),Object(i.b)("p",null,"Similarly, mapping over ",Object(i.b)("inlineCode",{parentName:"p"},"Parser")," is really mapping over the future ",Object(i.b)("inlineCode",{parentName:"p"},"ParseResult"),". "),Object(i.b)("h2",{id:"monoids"},"Monoids"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"ParseResult<T>")," is a monoid under the ",Object(i.b)("inlineCode",{parentName:"p"},"ParseResult::append()")," operation, when ",Object(i.b)("inlineCode",{parentName:"p"},"T")," is a monoid as well. ",Object(i.b)("inlineCode",{parentName:"p"},"discard()")," is the zero value."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Parser<T>")," is a monoid under the ",Object(i.b)("inlineCode",{parentName:"p"},"Parser::append()"),", when ",Object(i.b)("inlineCode",{parentName:"p"},"T")," is a monoid as well. ",Object(i.b)("inlineCode",{parentName:"p"},"nothing()")," is the zero value. "),Object(i.b)("h3",{id:"laws"},"Laws"),Object(i.b)("h4",{id:"identity"},"Identity"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$parser->append(nothing()) \u2261 $parser\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"nothing()->append($parser) \u2261 $parser\n")),Object(i.b)("h4",{id:"associativity"},"Associativity"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$p1->append($p2)->append($p3) \n    \u2261 $p1->append($p2->append($p3))\n")),Object(i.b)("h2",{id:"applicative-functors"},"Applicative Functors"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Parser<T>")," is an applicative functor."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"pure()")," is a parser that will always output its argument, no matter what the input was. Type: ",Object(i.b)("inlineCode",{parentName:"li"},"T -> Parser<T>"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"apply()")," is sequential application, aka ",Object(i.b)("inlineCode",{parentName:"li"},"<*>"),". ",Object(i.b)("inlineCode",{parentName:"li"},"pure($callable)->apply($parser)")," is a parser that applies ",Object(i.b)("inlineCode",{parentName:"li"},"$callable")," to the output of ",Object(i.b)("inlineCode",{parentName:"li"},"$parser"),". It works for callables with multiple arguments, if the callable is curried: ",Object(i.b)("inlineCode",{parentName:"li"},"pure(curry($callable))->apply($p1)->apply($p2)"),". We used ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/matteosister/php-curry"}),"matteosister/php-curry")," to test this, but any method for currying functions should work."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"keepFirst()")," and ",Object(i.b)("inlineCode",{parentName:"li"},"keepSecond()")," are ",Object(i.b)("inlineCode",{parentName:"li"},"<*")," and ",Object(i.b)("inlineCode",{parentName:"li"},"*>")," respectively. Both parsers need to succeed but only the result from one of them is returned.")),Object(i.b)("h3",{id:"laws-1"},"Laws"),Object(i.b)("h4",{id:"identity-1"},"Identity"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"pure(identity())->apply($parser) \u2261 $parser\n")),Object(i.b)("h4",{id:"homomorphism"},"Homomorphism"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"pure($f)->apply(pure($x)) \u2261 pure($f($x))\n")),Object(i.b)("h4",{id:"interchange"},"Interchange"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$p->apply(pure($x)) \n    \u2261 pure(fn($f) => $f($x))->apply($p)\n")),Object(i.b)("h4",{id:"composition"},"Composition"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"// Assuming that\n$compose = fn($f, $g) => fn($x) => $f($g($x))  \n\npure($compose)->apply($p1)->apply($p2)->apply($p3) \n    \u2261 $p1->apply($p2->apply($p3))\n")),Object(i.b)("h4",{id:"map"},"Map"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"pure($f)->apply($parser) \u2261 $parser->map($f)\n")),Object(i.b)("h2",{id:"monads"},"Monads"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Parser<T>")," is a monad. "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"pure()"),": see above."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"sequence()")," runs two parsers in sequence, dropping the result of the first one. Both parsers consume input. You may know this as ",Object(i.b)("inlineCode",{parentName:"li"},">>"),". The type of sequence is ",Object(i.b)("inlineCode",{parentName:"li"},"Parser<T> -> Parser<T2> -> Parser<T2>"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"bind()")," sequentially composes a parser and a parser-constructing function, passing the output produced by the first parser as an argument to the second.  Both parsers consume input. You may know this as ",Object(i.b)("inlineCode",{parentName:"li"},">>=")," or ",Object(i.b)("inlineCode",{parentName:"li"},"flatmap"),". Type: ",Object(i.b)("inlineCode",{parentName:"li"},"Parser<T> -> (T -> Parser<T2>) -> Parser<T2>"),".")),Object(i.b)("h3",{id:"laws-2"},"Laws"),Object(i.b)("p",null,"Left identity: "),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"bind(pure($a), $f) \n    \u2261 pure($a)->bind($f) \n    \u2261 $f($a)\n")),Object(i.b)("p",null,"Right identity: "),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"bind($parser, 'pure') \n    \u2261 $parser->bind('pure') \n    \u2261 $parser\n")),Object(i.b)("p",null,"Associativity:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$parser->bind($f)->bind($g) \n    \u2261 $parser->bind(fn($x) (use $f, $g) => $f($x)->bind($g))\n")))}s.isMDXComponent=!0},387:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=s(n),d=a,m=b["".concat(p,".").concat(d)]||b[d]||u[d]||i;return n?r.a.createElement(m,o(o({ref:t},l),{},{components:n})):r.a.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var l=2;l<i;l++)p[l]=n[l];return r.a.createElement.apply(null,p)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);