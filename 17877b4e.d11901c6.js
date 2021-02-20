(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{129:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return p})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return l}));var a=r(2),n=r(6),i=(r(0),r(387)),s={title:"Building Blocks"},p={id:"tutorial/02_building_blocks",isDocsHomePage:!1,title:"Building Blocks",description:"Predicates",source:"@site/docs/tutorial/02_building_blocks.md",permalink:"/docs/next/tutorial/02_building_blocks",editUrl:"https://github.com/parsica-php/parsica/tree/main/docs/tutorial/02_building_blocks.md",version:"next",sidebar:"docs",previous:{title:"What are parser combinators?",permalink:"/docs/next/tutorial/01_introduction"},next:{title:"Using Combinators",permalink:"/docs/next/tutorial/03_combinators"},latestVersionMainDocPermalink:"/docs"},c=[{value:"Predicates",id:"predicates",children:[]},{value:"Character parsers",id:"character-parsers",children:[]},{value:"Strings",id:"strings",children:[]},{value:"Other parsers",id:"other-parsers",children:[]}],o={rightToc:c};function l(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},o,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"predicates"},"Predicates"),Object(i.b)("p",null,"The simplest building block is a parser that only considers the first character of an input. If the character satisfies some condition, we consume it from the input. We could write that with some ",Object(i.b)("inlineCode",{parentName:"p"},"if")," statements and ",Object(i.b)("inlineCode",{parentName:"p"},"substr")," calls, but Parsica provides abstractions for that."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),'<?php\n$parser = satisfy(isEqual(\'a\'));\n$input = "abc";\n$result = $parser->tryString($input);\nassertEquals("a", $result->output());\nassertEquals("bc", $result->remainder());\n')),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"isEqual('a')")," is a predicate. If you call it with another argument, you get a boolean: ",Object(i.b)("inlineCode",{parentName:"p"},"isEqual('a')('b') == false"),"."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"satisfy($predicate)")," is a function returns a ",Object(i.b)("inlineCode",{parentName:"p"},"Parser")," object. You can think of it as a parser constructor. This object will do the heavy lifting of taking the first character of ",Object(i.b)("inlineCode",{parentName:"p"},"$input"),", and testing it with the predicate. "),Object(i.b)("p",null,"Parsica comes with some useful predicates, including boolean and/or/not combinators: "),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"<?php\n$parser = satisfy(orPred(isDigit(), isWhitespace()));\n")),Object(i.b)("h2",{id:"character-parsers"},"Character parsers"),Object(i.b)("p",null,"In practice, you may not need to use predicates and ",Object(i.b)("inlineCode",{parentName:"p"},"satisfy")," very often. The characters API provides commonly used parsers for single characters instead:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"<?php\n$parser = char('a');\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"char($x)")," is defined as ",Object(i.b)("inlineCode",{parentName:"p"},"satisfy(isEqual($x))")," so the code above is equivalent to the first example. ",Object(i.b)("inlineCode",{parentName:"p"},"charI()")," is the case-insensitive version of ",Object(i.b)("inlineCode",{parentName:"p"},"char()"),". It preserves the case as is:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),'<?php\n$parser = charI(\'a\');\n$result = $parser->tryString("ABC");\nassertEquals("A", $result->output());\n$result = $parser->tryString("abc");\nassertEquals("a", $result->output());\n')),Object(i.b)("p",null,"Parsica provides various parsers for groups of characters, like ",Object(i.b)("inlineCode",{parentName:"p"},"alphaNumChar"),", ",Object(i.b)("inlineCode",{parentName:"p"},"upperChar"),", ",Object(i.b)("inlineCode",{parentName:"p"},"punctuationChar"),", ",Object(i.b)("inlineCode",{parentName:"p"},"newline"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"digitChar"),". You can find them all listed in the API Reference."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"<?php\n$parser = digitChar();\n$result = $parser->tryString('123');\nassertEquals('1', $result->output());\n")),Object(i.b)("p",null,"Note that even though we parsed a ",Object(i.b)("inlineCode",{parentName:"p"},"digitChar"),", the output is a string, not an int. That's because at this point, we're parsing characters. We'll talk about outputting other types than string later."),Object(i.b)("h2",{id:"strings"},"Strings"),Object(i.b)("p",null,"For longer sequences of characters, you can use ",Object(i.b)("inlineCode",{parentName:"p"},"string")," and ",Object(i.b)("inlineCode",{parentName:"p"},"stringI"),". Keep in mind that ",Object(i.b)("inlineCode",{parentName:"p"},"stringI"),"is not just case-insensitive, but also case-preserving. "),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),'<?php\n$parser = stringI("parsica");\n$result = $parser->tryString("PARSICA");\nassertEquals("PARSICA", $result->output()); \n$result = $parser->tryString("pArSiCa");\nassertEquals("pArSiCa", $result->output()); \n')),Object(i.b)("p",null,"If you want the output to be consistent, you can use ",Object(i.b)("inlineCode",{parentName:"p"},"map")," to convert it."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),'<?php\n$parser = stringI("parsica")\n    ->map(fn($output) => strtolower($output));\n$result = $parser->tryString("pArSiCa");\nassertEquals("parsica", $result->output()); \n')),Object(i.b)("h2",{id:"other-parsers"},"Other parsers"),Object(i.b)("p",null,"Parsica comes with a growing library of other useful parsers, such as numeric types, and spaces. Always make sure to check the API documentation to know what the type of a parser is (aka the tpye of the output that the parser will produce.) For example, parsers like ",Object(i.b)("inlineCode",{parentName:"p"},"space"),", ",Object(i.b)("inlineCode",{parentName:"p"},"tab"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"newline")," all output strings containing the characters they matched. On the other hand, ",Object(i.b)("inlineCode",{parentName:"p"},"skipSpace")," will output ",Object(i.b)("inlineCode",{parentName:"p"},"null"),", no matter if it consumed spaces or not. This makes sense because the point is to ignore them, not use them.    "),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"skipSpace")," consumes all kinds of space, whereas ",Object(i.b)("inlineCode",{parentName:"p"},"skipHSpace")," will stop consuming at newlines and carriage returns. They also come with two friends, ",Object(i.b)("inlineCode",{parentName:"p"},"skipSpace1")," and ",Object(i.b)("inlineCode",{parentName:"p"},"skipHSpace1"),", which expect at least on space to present."))}l.isMDXComponent=!0},387:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return h}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=n.a.createContext({}),l=function(e){var t=n.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=l(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),u=l(r),d=a,h=u["".concat(s,".").concat(d)]||u[d]||b[d]||i;return r?n.a.createElement(h,p(p({ref:t},o),{},{components:r})):n.a.createElement(h,p({ref:t},o))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,s[1]=p;for(var o=2;o<i;o++)s[o]=r[o];return n.a.createElement.apply(null,s)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);