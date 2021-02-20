(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{191:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t(2),a=(t(0),t(346));const i={title:"Using Combinators"},o={id:"version-0.6.0/tutorial/03_combinators",isDocsHomePage:!1,title:"Using Combinators",description:"Fluent interface",source:"@site/versioned_docs/version-0.6.0/tutorial/03_combinators.md",permalink:"/docs/0.6.0/tutorial/03_combinators",editUrl:"https://github.com/mathiasverraes/parsica/tree/main/versioned_docs/version-0.6.0/tutorial/03_combinators.md",version:"0.6.0",sidebar:"version-0.6.0/docs",previous:{title:"Building Blocks",permalink:"/docs/0.6.0/tutorial/02_building_blocks"},next:{title:"Running Parsers",permalink:"/docs/0.6.0/tutorial/04_running_parsers"},latestVersionMainDocPermalink:"/docs"},s=[{value:"Fluent interface",id:"fluent-interface",children:[]},{value:"Sequences",id:"sequences",children:[]},{value:"Alternatives",id:"alternatives",children:[]},{value:"Appending",id:"appending",children:[]},{value:"Folding combinators",id:"folding-combinators",children:[]}],c={rightToc:s};function p({components:e,...n}){return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"fluent-interface"},"Fluent interface"),Object(a.b)("p",null,"Many combinators come both as a standalone function, and as a method on the ",Object(a.b)("inlineCode",{parentName:"p"},"Parser"),"object. They behave the same, and exist as a convenience for writing more readable code. Choosing one or the other will mostly depend on your usecase. "),Object(a.b)("p",null,"The general rule is that ",Object(a.b)("inlineCode",{parentName:"p"},"combinator($parserA, $parserB) \u2261 $parserA->combinator($parserB)"),", in other words, they are equivalent."),Object(a.b)("p",null,"In the example below, the ",Object(a.b)("inlineCode",{parentName:"p"},"sequence")," and ",Object(a.b)("inlineCode",{parentName:"p"},"optional")," combinators are used as functions and as methods, and both parsers are fully equivalent.  "),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"<?php\n$parser1 = sequence(\n            optional(char('a')),\n            char('b')\n          );\n$parser2 = char('a')->optional()\n            ->sequence(char('b'));\n")),Object(a.b)("p",null,"Sometimes combinators have different names for the same behaviour: ",Object(a.b)("inlineCode",{parentName:"p"},"$parserA->or($parserB) \u2261 either($parserA, $parserB)"),". In this case, the reason is partially because ",Object(a.b)("inlineCode",{parentName:"p"},"or")," is a reserved keyword in PHP, and partially because ",Object(a.b)("inlineCode",{parentName:"p"},"either")," reads better in this case. Some combinators have aliases, such as ",Object(a.b)("inlineCode",{parentName:"p"},"Parser#sequence()")," and ",Object(a.b)("inlineCode",{parentName:"p"},"Parser#followedBy()"),", again these exist purely for convenience.   "),Object(a.b)("h2",{id:"sequences"},"Sequences"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"sequence")," is one of the most basic combinators you'll find. ",Object(a.b)("inlineCode",{parentName:"p"},"sequence($parser1, $parser2)")," means ",Object(a.b)("em",{parentName:"p"},'"Try the first parser. If it fails, return the failure. If it succeeds, take the remaining input that was not consumed by ',Object(a.b)("inlineCode",{parentName:"em"},"$parser1"),", and try ",Object(a.b)("inlineCode",{parentName:"em"},"$parser2"),". Return the result of ",Object(a.b)("inlineCode",{parentName:"em"},"$parser2"),'."')),Object(a.b)("p",null,"It's important to understand that this drops whatever output ",Object(a.b)("inlineCode",{parentName:"p"},"$parser1")," produced. That's useful when you're only interested in what comes after ",Object(a.b)("inlineCode",{parentName:"p"},"$parser1"),". This example extracts a value that is prefixed by a string."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),'<?php\n$parser = sequence(string(\'My name is \'), atLeastOne(alphaChar()));\n$result = $parser->tryString("My name is Parsica");\nassertEquals("Parsica", $result->output());\n')),Object(a.b)("h2",{id:"alternatives"},"Alternatives"),Object(a.b)("p",null,"@TODO"),Object(a.b)("h2",{id:"appending"},"Appending"),Object(a.b)("p",null,"@TODO"),Object(a.b)("h2",{id:"folding-combinators"},"Folding combinators"),Object(a.b)("p",null,"There are also combinators that extend the behaviour of others. For example, ",Object(a.b)("inlineCode",{parentName:"p"},"choice")," is a left fold over the ",Object(a.b)("inlineCode",{parentName:"p"},"either")," combinator, effectively turning it from a combinator that takes two arguments, to one that take n arguments. ",Object(a.b)("inlineCode",{parentName:"p"},"choice($parser1, $parser2, $parser3, ...) \u2261 $parser1->or($parser2)->or($parser3)->or...")),Object(a.b)("p",null,"The same happens with the ",Object(a.b)("inlineCode",{parentName:"p"},"assemble")," combinator, which call appends all its arguments. ",Object(a.b)("inlineCode",{parentName:"p"},"assemble($parser1, $parser2, $parser3, ...) \u2261 $parser1->and($parser2)->and($parser3)->...")),Object(a.b)("p",null,"In general, you should use the simplest form available, so if you only have two choices, favour ",Object(a.b)("inlineCode",{parentName:"p"},"or")," over ",Object(a.b)("inlineCode",{parentName:"p"},"choice"),". "))}p.isMDXComponent=!0},346:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),l=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},b=function(e){var n=l(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=l(t),d=r,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||i;return t?a.a.createElement(m,s(s({ref:n},p),{},{components:t})):a.a.createElement(m,s({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);