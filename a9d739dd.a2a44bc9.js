(window.webpackJsonp=window.webpackJsonp||[]).push([[255],{355:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(2),a=r(6),i=(r(0),r(469)),o={title:"Recursion"},s={id:"tutorial/07_recursion",isDocsHomePage:!1,title:"Recursion",description:"Often we want to parse arbitrarily nested structures. Arrays, JSON, XML are such example. To do that, we need to be able to pass the parser to itself. Because of a limitation in PHP, we cannot pass a value around before it is created. The solution is to split this in two steps: create a placeholder for a recursive parser, and then define the parser in terms of itself.",source:"@site/docs/tutorial/07_recursion.md",permalink:"/docs/next/tutorial/07_recursion",editUrl:"https://github.com/parsica-php/parsica/tree/main/docs/tutorial/07_recursion.md",version:"next",sidebar:"docs",previous:{title:"Order matters",permalink:"/docs/next/tutorial/06_order_matters"},next:{title:"Looking ahead",permalink:"/docs/next/tutorial/08_look_ahead"},latestVersionMainDocPermalink:"/docs"},c=[{value:"Example",id:"example",children:[]},{value:"Using recusion to avoid loops",id:"using-recusion-to-avoid-loops",children:[]}],p={rightToc:c};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Often we want to parse arbitrarily nested structures. Arrays, JSON, XML are such example. To do that, we need to be able to pass the parser to itself. Because of a limitation in PHP, we cannot pass a value around before it is created. The solution is to split this in two steps: create a placeholder for a recursive parser, and then define the parser in terms of itself. "),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("p",null,"We need to parse nested pairs such as ",Object(i.b)("inlineCode",{parentName:"p"},"[1,[2,[3,4]]]"),". The structure repeats itself, every item in the pair can be either a digit or another pair. "),Object(i.b)("p",null,"We cannot write this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"<?php\n$pair = collect(\n    ignore(char('[')),\n    digit()->or($pair),\n    ignore(char(',')),\n    digit()->or($pair),\n    ignore(char(']')),\n);\n")),Object(i.b)("p",null,'The above results in "Undefined variable: pair" because we\'re trying to use ',Object(i.b)("inlineCode",{parentName:"p"},"$pair")," before it's defined. Instead, we need to mark the parser as ",Object(i.b)("inlineCode",{parentName:"p"},"recursive")," in a first step, and then define how the parser should ",Object(i.b)("inlineCode",{parentName:"p"},"recurse"),": "),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"<?php\n// Create a recursive parser first\n$pair = recursive();\n\n// Then define the parser\n$pair->recurse(\n    between(\n        char('['),\n        char(']'),\n        collect(\n            digitChar()->or($pair)\n                ->thenIgnore(char(',')),\n            digitChar()->or($pair)\n        )\n    ),\n);\n\n$result = $pair->tryString(\"[1,[2,[3,4]]]\");\nassertSame(['1', ['2', ['3', '4']]], $result->output());\n")),Object(i.b)("p",null,"It's possible to nest multiple recursive parsers. Simply initialise them all first using  ",Object(i.b)("inlineCode",{parentName:"p"},"recursive()")," and then define them in terms of each other:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"<?php\n$curlyPair = recursive();\n$squarePair = recursive();\n$anyPair = $curlyPair->or($squarePair);\n\n$inner = collect(\n     digitChar()->or($anyPair)\n         ->thenIgnore(char(',')),\n     digitChar()->or($anyPair)\n );\n\n$curlyPair->recurse(\n    between(char('{'), char('}'), $inner),\n);\n\n$squarePair->recurse(\n    between(char('['), char(']'), $inner),\n\n);\n\n$mixed = \"{1,[2,{3,4}]}\";\n$result = $anyPair->tryString($mixed);\nassertSame(['1', ['2', ['3', '4']]], $result->output());\n")),Object(i.b)("p",null,"Note that when you initialize a parser with ",Object(i.b)("inlineCode",{parentName:"p"},"recursive()"),", it is in fact mutable, and the ",Object(i.b)("inlineCode",{parentName:"p"},"recurse()")," method mutates it. All parsers are immutable, and this is the only exception. After calling ",Object(i.b)("inlineCode",{parentName:"p"},"recurse()"),", the parser is immutable again and behaves just like any other parser."),Object(i.b)("h2",{id:"using-recusion-to-avoid-loops"},"Using recusion to avoid loops"),Object(i.b)("p",null,"Let's say we want to parse the character ",Object(i.b)("inlineCode",{parentName:"p"},"'a'")," at least one time, so that ",Object(i.b)("inlineCode",{parentName:"p"},'"aaab"')," outputs ",Object(i.b)("inlineCode",{parentName:"p"},'"aaa"'),", but ",Object(i.b)("inlineCode",{parentName:"p"},'"bbb"')," fails. Imperatively, you could solve this by running the ",Object(i.b)("inlineCode",{parentName:"p"},"char('a')")," parser in a while loop, and stop on the first failure. We can express it more concisely with recursion though: "),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Start by parsing ",Object(i.b)("inlineCode",{parentName:"li"},"char('a')"),"."),Object(i.b)("li",{parentName:"ol"},"Append another ",Object(i.b)("inlineCode",{parentName:"li"},"char('a')"),", but this second one is ",Object(i.b)("inlineCode",{parentName:"li"},"optional()"),"."),Object(i.b)("li",{parentName:"ol"},"Append another ",Object(i.b)("inlineCode",{parentName:"li"},"optional(char('a'))")),Object(i.b)("li",{parentName:"ol"},"Notice the similarity between the first two steps. This suggest an opportunity for recursion. "),Object(i.b)("li",{parentName:"ol"},"Wrap our ",Object(i.b)("inlineCode",{parentName:"li"},"char('a')->append(optional(char('a')))")," in a ",Object(i.b)("inlineCode",{parentName:"li"},"recurse()")," parser. "),Object(i.b)("li",{parentName:"ol"},"Replace the second ",Object(i.b)("inlineCode",{parentName:"li"},"char('a')")," by the recursive parser.")),Object(i.b)("p",null,"The end result looks like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),'<?php\n$rec = recursive();\n$rec->recurse(char(\'a\')->append(optional($rec)));\n$result = $rec->tryString("aaab");\nassertEquals("aaa", $result->output());\n')),Object(i.b)("p",null,"In fact the code above is how the ",Object(i.b)("inlineCode",{parentName:"p"},"atLeastOne()")," combinator works, so you can simplify that code by writing this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),'<?php\n$parser = atLeastOne(char(\'a\'));\n$result = $parser->tryString("aaab");\nassertEquals("aaa", $result->output());\n')))}l.isMDXComponent=!0},469:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return h}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),d=n,h=u["".concat(o,".").concat(d)]||u[d]||b[d]||i;return r?a.a.createElement(h,s(s({ref:t},p),{},{components:r})):a.a.createElement(h,s({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);