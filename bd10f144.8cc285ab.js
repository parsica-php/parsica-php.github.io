(window.webpackJsonp=window.webpackJsonp||[]).push([[247],{347:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(6),o=(n(0),n(428)),i={title:"Using Combinators"},s={id:"tutorial/03_combinators",isDocsHomePage:!1,title:"Using Combinators",description:"Fluent interface",source:"@site/docs/tutorial/03_combinators.md",permalink:"/docs/next/tutorial/03_combinators",editUrl:"https://github.com/parsica-php/parsica/tree/main/docs/tutorial/03_combinators.md",version:"next",sidebar:"docs",previous:{title:"Building Blocks",permalink:"/docs/next/tutorial/02_building_blocks"},next:{title:"Running Parsers",permalink:"/docs/next/tutorial/04_running_parsers"},latestVersionMainDocPermalink:"/docs"},c=[{value:"Fluent interface",id:"fluent-interface",children:[]},{value:"Sequences",id:"sequences",children:[]},{value:"Alternatives",id:"alternatives",children:[]},{value:"Appending",id:"appending",children:[]},{value:"Folding combinators",id:"folding-combinators",children:[]}],p={rightToc:c};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"fluent-interface"},"Fluent interface"),Object(o.b)("p",null,"Many combinators come both as a standalone function, and as a method on the ",Object(o.b)("inlineCode",{parentName:"p"},"Parser"),"object. They behave the same, and exist as a convenience for writing more readable code. Choosing one or the other will mostly depend on your usecase. "),Object(o.b)("p",null,"The general rule is that ",Object(o.b)("inlineCode",{parentName:"p"},"combinator($parserA, $parserB) \u2261 $parserA->combinator($parserB)"),", in other words, they are equivalent."),Object(o.b)("p",null,"In the example below, the ",Object(o.b)("inlineCode",{parentName:"p"},"sequence")," and ",Object(o.b)("inlineCode",{parentName:"p"},"optional")," combinators are used as functions and as methods, and both parsers are fully equivalent.  "),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"<?php\n$parser1 = sequence(\n            optional(char('a')),\n            char('b')\n          );\n$parser2 = char('a')->optional()\n            ->sequence(char('b'));\n")),Object(o.b)("p",null,"Sometimes combinators have different names for the same behaviour: ",Object(o.b)("inlineCode",{parentName:"p"},"$parserA->or($parserB) \u2261 either($parserA, $parserB)"),". In this case, the reason is partially because ",Object(o.b)("inlineCode",{parentName:"p"},"or")," is a reserved keyword in PHP, and partially because ",Object(o.b)("inlineCode",{parentName:"p"},"either")," reads better in this case. Some combinators have aliases, such as ",Object(o.b)("inlineCode",{parentName:"p"},"Parser#sequence()")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Parser#followedBy()"),", again these exist purely for convenience.   "),Object(o.b)("h2",{id:"sequences"},"Sequences"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"sequence")," is one of the most basic combinators you'll find. ",Object(o.b)("inlineCode",{parentName:"p"},"sequence($parser1, $parser2)")," means ",Object(o.b)("em",{parentName:"p"},'"Try the first parser. If it fails, return the failure. If it succeeds, take the remaining input that was not consumed by ',Object(o.b)("inlineCode",{parentName:"em"},"$parser1"),", and try ",Object(o.b)("inlineCode",{parentName:"em"},"$parser2"),". Return the result of ",Object(o.b)("inlineCode",{parentName:"em"},"$parser2"),'."')),Object(o.b)("p",null,"It's important to understand that this drops whatever output ",Object(o.b)("inlineCode",{parentName:"p"},"$parser1")," produced. That's useful when you're only interested in what comes after ",Object(o.b)("inlineCode",{parentName:"p"},"$parser1"),". This example extracts a value that is prefixed by a string."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),'<?php\n$parser = sequence(string(\'My name is \'), atLeastOne(alphaChar()));\n$result = $parser->tryString("My name is Parsica");\nassertEquals("Parsica", $result->output());\n')),Object(o.b)("h2",{id:"alternatives"},"Alternatives"),Object(o.b)("p",null,"@TODO"),Object(o.b)("h2",{id:"appending"},"Appending"),Object(o.b)("p",null,"@TODO"),Object(o.b)("h2",{id:"folding-combinators"},"Folding combinators"),Object(o.b)("p",null,"There are also combinators that extend the behaviour of others. For example, ",Object(o.b)("inlineCode",{parentName:"p"},"choice")," is a left fold over the ",Object(o.b)("inlineCode",{parentName:"p"},"either")," combinator, effectively turning it from a combinator that takes two arguments, to one that take n arguments. ",Object(o.b)("inlineCode",{parentName:"p"},"choice($parser1, $parser2, $parser3, ...) \u2261 $parser1->or($parser2)->or($parser3)->or...")),Object(o.b)("p",null,"The same happens with the ",Object(o.b)("inlineCode",{parentName:"p"},"assemble")," combinator, which call appends all its arguments. ",Object(o.b)("inlineCode",{parentName:"p"},"assemble($parser1, $parser2, $parser3, ...) \u2261 $parser1->and($parser2)->and($parser3)->...")),Object(o.b)("p",null,"In general, you should use the simplest form available, so if you only have two choices, favour ",Object(o.b)("inlineCode",{parentName:"p"},"or")," over ",Object(o.b)("inlineCode",{parentName:"p"},"choice"),". "))}l.isMDXComponent=!0},428:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=l(n),d=r,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||o;return n?a.a.createElement(m,s(s({ref:t},p),{},{components:n})):a.a.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);