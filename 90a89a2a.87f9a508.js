(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{240:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return l}));var n=r(2),a=(r(0),r(346));const o={title:"What are parser combinators?"},s={id:"version-0.6.1/tutorial/01_introduction",isDocsHomePage:!1,title:"What are parser combinators?",description:"Before you start, make sure you've had a look at the installation instructions.",source:"@site/versioned_docs/version-0.6.1/tutorial/01_introduction.md",permalink:"/docs/tutorial/01_introduction",editUrl:"https://github.com/mathiasverraes/parsica/tree/main/versioned_docs/version-0.6.1/tutorial/01_introduction.md",version:"0.6.1",sidebar:"version-0.6.1/docs",previous:{title:"strings",permalink:"/docs/api/strings"},next:{title:"Building Blocks",permalink:"/docs/tutorial/02_building_blocks"}},i=[{value:"Parsers",id:"parsers",children:[]},{value:"Building a parser",id:"building-a-parser",children:[]},{value:"Parser Combinators",id:"parser-combinators",children:[{value:"Footnotes",id:"footnotes",children:[]}]}],c={rightToc:i};function l({components:e,...t}){return Object(a.b)("wrapper",Object(n.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Before you start, make sure you've had a look at the installation instructions."),Object(a.b)("h2",{id:"parsers"},"Parsers"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"<?php\n$parser = char(':')\n            ->append(atLeastOne(punctuationChar()))\n            ->label('smiley');\n$result = $parser->tryString(':*{)'); \necho $result->output() . \" is a valid smiley!\";\n")),Object(a.b)("p",null,"A parser is a function that takes some unstructured input (like a string) and turns it into structured output, that's easier to work with. This output could be as simple as a slightly better structured string, or an array, an object, up to a complete abstract syntax tree. You can then use this data structure for subsequent processing."),Object(a.b)("p",null,"You're probably using parsers all the time, such as ",Object(a.b)("inlineCode",{parentName:"p"},"json_decode()"),". And even just casting a string to a float ",Object(a.b)("sup",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"#floatval"}),"footnote 1"))," really is parsing. "),Object(a.b)("p",null,"Parsica helps you build your own parsers, in a concise, declarative way. Behind the scenes it takes care of things like error handling, so you can focus on the parser itself. "),Object(a.b)("h2",{id:"building-a-parser"},"Building a parser"),Object(a.b)("p",null,"There are many ways to build a parser for your own use case, ranging from formal grammars that get compiled into a parser, to regular expressions, to writing a parser entirely from scratch. They all have their own tradeoffs and limitations. "),Object(a.b)("p",null,"One of the great benefits of the parser combinator style is that, once you get the hang of it, they're generally easier to write, understand, and maintain. You start from building blocks, such as ",Object(a.b)("inlineCode",{parentName:"p"},"digitChar()"),", which returns a function that parses a single digit.  "),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),'<?php \n$parser = digitChar();\n$input = "1. Write Docs";\n$result = $parser->tryString($input);\n$output = $result->output();\nassertSame("1", $output);\nassertIsString($output);\n')),Object(a.b)("h2",{id:"parser-combinators"},"Parser Combinators"),Object(a.b)("p",null,"Parser Combinators are functions (or methods) that combine parsers into new parsers. Instead of writing one big parser, we can now write smaller parsers and cleverly compose them into larger parsers. "),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"<?php\n$parser = char('a')->append(char('b'));\n$result = $parser->tryString(\"abc\");\n$output = $result->output();\nassertEquals(\"ab\", $output);\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),'<?php\n$parser = \n    collect(\n        string("Hello")->thenIgnore(char(",")),\n        string("world")->thenIgnore(char("!")),\n    );\n$result = $parser->tryString("Hello,world!");\n$output = $result->output();\nassertEquals(["Hello", "world"], $output);   \n')),Object(a.b)("p",null,"To make this work, we need a small change in our original definition of a parser."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"A parser is a function that takes some unstructured input (such as a string), and returns a more structured output, as well as the remaining unparsed part of the input.")),Object(a.b)("p",null,"This way, each parser function can parse a chunk of the input, and leave the remainder to another parser. The combinators take care of the heavy lifting: pass the input to the parser functions, pass the remainder to the next one, decide what to do with errors (eg, fail or backtrack or try another parser), ...   "),Object(a.b)("p",null,"We can inspect the remainder:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),'<?php\n$parser = sequence(char(\'a\'), char(\'b\'));\n$result = $parser->tryString("abc");\n\nassertEquals("b", $result->output());\nassertEquals("c", $result->remainder());\n')),Object(a.b)("p",null,"So when we run our parser using ",Object(a.b)("inlineCode",{parentName:"p"},"$parser->tryString($input)"),", the ",Object(a.b)("inlineCode",{parentName:"p"},"sequence()")," combinator first tries to run ",Object(a.b)("inlineCode",{parentName:"p"},"char('a')")," on the input ",Object(a.b)("inlineCode",{parentName:"p"},'"abc"'),". If it succeeds, it takes the remainder ",Object(a.b)("inlineCode",{parentName:"p"},'"bc"')," and successfully runs ",Object(a.b)("inlineCode",{parentName:"p"},"char('b')")," on it and returns the result. That result consists of the output from the last parser ",Object(a.b)("inlineCode",{parentName:"p"},'"b"'),", and the remainder ",Object(a.b)("inlineCode",{parentName:"p"},'"c"'),"."),Object(a.b)("p",null,"In imperative code, it would look something like this:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"<?php\nfinal class MyParser \n{\n    public function try(string $input) : array \n    {\n        $output1 = substr($input, 0, 1); // \"a\"\n        if ($output1 == 'a') {\n            $remainder1 = substr($input, 1); // \"bc\"\n            $output2 = substr($remainder1, 0, 1); // \"b\"\n            if ($output2 == 'b') {\n                $remainder2 = substr($remainder1, 1); // \"c\"\n            } else {\n                throw new Exception(\"Parser failed\");\n            }\n        } else {\n            throw new Exception(\"Parser failed\");\n        }\n        return ['output' => $output2, 'remainder' => $remainder2];\n    }\n}\n$parser = new MyParser();\n$result = $parser->try(\"abc\");\n\nassertEquals('b', $result['output']);\nassertEquals('c', $result['remainder']);\n")),Object(a.b)("p",null,"If you've been working in PHP long enough and have never used parser combinators, the code above may look more familiar for now. But imagine scaling that to parse anything from simple formats like credit card numbers, recursive structures like JSON or XML, or even entire programming languages like PHP. And that doesn't even include the code you'd need for performance, testing and debugging tooling, code reuse, and reporting on bad input. If you'd rather write ",Object(a.b)("inlineCode",{parentName:"p"},"sequence(char('a'), char('b'))"),", stick around."),Object(a.b)("h3",{id:"footnotes"},"Footnotes"),Object(a.b)("h4",{id:"note-1"},Object(a.b)("a",{name:"floatval"},"Note 1")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),'<?php\n$v = floatval("1.23");\nassertSame(1.23, $v); \n')),Object(a.b)("p",null,"The above looks fine at first sight, but ",Object(a.b)("inlineCode",{parentName:"p"},"floatval()")," really isn't a very good parser."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),'<?php\nassertSame(0.0, floatval("abc"));\n')),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"floatval()")," claims that the float of ",Object(a.b)("inlineCode",{parentName:"p"},'"abc"')," is ",Object(a.b)("inlineCode",{parentName:"p"},"0"),", which really should be an error. So you can only use ",Object(a.b)("inlineCode",{parentName:"p"},"floatval")," when you already know that the string doesn't contain anything non-float. Parsica can help you do that:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),'<?php\n$parser = float()->map(fn($v) => floatval($v));\ntry {\n    // works: \n    $result = $parser->tryString("1.23");\n    assertSame(1.23, $result->output());\n \n    // throws a ParserHasFailed exception with message "Expected: float, got abc"\n    $result = $parser->tryString("abc");\n} catch (ParserHasFailed $e) {}\n')))}l.isMDXComponent=!0},346:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return h}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,h=p["".concat(s,".").concat(d)]||p[d]||b[d]||o;return r?a.a.createElement(h,i(i({ref:t},l),{},{components:r})):a.a.createElement(h,i({ref:t},l))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);