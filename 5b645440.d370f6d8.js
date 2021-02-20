(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{205:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(6),o=(r(0),r(387)),s={title:"What are parser combinators?"},i={id:"version-0.4.0/tutorial/introduction",isDocsHomePage:!1,title:"What are parser combinators?",description:"Before you start, make sure you've had a look at the installation instructions.",source:"@site/versioned_docs/version-0.4.0/tutorial/introduction.md",permalink:"/docs/0.4.0/tutorial/introduction",editUrl:"https://github.com/parsica-php/parsica/tree/main/versioned_docs/version-0.4.0/tutorial/introduction.md",version:"0.4.0",sidebar:"version-0.4.0/docs",previous:{title:"StringStream",permalink:"/docs/0.4.0/api/StringStream"},next:{title:"Building Blocks",permalink:"/docs/0.4.0/tutorial/building_blocks"},latestVersionMainDocPermalink:"/docs"},c=[{value:"Parsers",id:"parsers",children:[]},{value:"Building a parser",id:"building-a-parser",children:[]},{value:"Parser Combinators",id:"parser-combinators",children:[{value:"Footnotes",id:"footnotes",children:[]}]}],l={rightToc:c};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Before you start, make sure you've had a look at the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"installation"}),"installation instructions"),"."),Object(o.b)("h2",{id:"parsers"},"Parsers"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"<?php\n$parser = char(':')\n            ->append(atLeastOne(punctuationChar()))\n            ->label('smiley');\n$result = $parser->tryString(':*{)'); \necho $result->output() . \" is a valid smiley!\";\n")),Object(o.b)("p",null,"A parser is a function that takes some unstructured input (like a string) and turns it into structured output, that's easier to work with. This output could be as simple as a slightly better structured string, or an array, an object, up to a complete abstract syntax tree. You can then use this data structure for subsequent processing."),Object(o.b)("p",null,"You're probably using parsers all the time, such as ",Object(o.b)("inlineCode",{parentName:"p"},"json_decode()"),". And even just casting a string to a float ",Object(o.b)("sup",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"#floatval"}),"footnote 1"))," really is parsing. "),Object(o.b)("p",null,"Parsica helps you build your own parsers, in a concise, declarative way. Behind the scenes it takes care of things like error handling, so you can focus on the parser itself. "),Object(o.b)("h2",{id:"building-a-parser"},"Building a parser"),Object(o.b)("p",null,"There are many ways to build a parser for your own use case, ranging from formal grammars that get compiled into a parser, to regular expressions, to writing a parser entirely from scratch. They all have their own tradeoffs and limitations. "),Object(o.b)("p",null,"One of the great benefits of the parser combinator style is that, once you get the hang of it, they're generally easier to write, understand, and maintain. You start from building blocks, such as ",Object(o.b)("inlineCode",{parentName:"p"},"digitChar()"),", which returns a function that parses a single digit.  "),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),'<?php \n$parser = digitChar();\n$input = "1. Write Docs";\n$result = $parser->tryString($input);\n$output = $result->output();\nassert($output === "1");\nassert(is_string($output));\n')),Object(o.b)("h2",{id:"parser-combinators"},"Parser Combinators"),Object(o.b)("p",null,"Parser Combinators are functions (or methods) that combine parsers into new parsers. Instead of writing one big parser, we can now write smaller parsers and cleverly compose them into larger parsers. "),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"<?php\n$parser = char('a')->append(char('b'));\n$result = $parser->tryString(\"abc\");\n$output = $result->output();\nassert($output === \"ab\");\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),'<?php\n$parser = \n    collect(\n        string("Hello")->thenIgnore(char(",")),\n        string("world")->thenIgnore(char("!")),\n    );\n$result = $parser->tryString("Hello,world!");\n$output = $result->output();\nassert($output == ["Hello", "world"]);   \n')),Object(o.b)("p",null,"To make this work, we need a small change in our original definition of a parser."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"A parser is a function that takes some unstructured input (such as a string), and returns a more structured output, as well as the remaining unparsed part of the input.")),Object(o.b)("p",null,"This way, each parser function can parse a chunk of the input, and leave the remainder to another parser. The combinators take care of the heavy lifting: pass the input to the parser functions, pass the remainder to the next one, decide what to do with errors (eg, fail or backtrack or try another parser), ...   "),Object(o.b)("p",null,"We can inspect the remainder:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),'<?php\n$parser = sequence(char(\'a\'), char(\'b\'));\n$result = $parser->tryString("abc");\n\nassert($result->output() === "b");\nassert($result->remainder() === "c");\n')),Object(o.b)("p",null,"So when we run our parser using ",Object(o.b)("inlineCode",{parentName:"p"},"$parser->tryString($input)"),", the ",Object(o.b)("inlineCode",{parentName:"p"},"sequence()")," combinator first tries to run ",Object(o.b)("inlineCode",{parentName:"p"},"char('a')")," on the input ",Object(o.b)("inlineCode",{parentName:"p"},'"abc"'),". If it succeeds, it takes the remainder ",Object(o.b)("inlineCode",{parentName:"p"},'"bc"')," and successfully runs ",Object(o.b)("inlineCode",{parentName:"p"},"char('b')")," on it and returns the result. That result consists of the output from the last parser ",Object(o.b)("inlineCode",{parentName:"p"},'"b"'),", and the remainder ",Object(o.b)("inlineCode",{parentName:"p"},'"c"'),"."),Object(o.b)("p",null,"In imperative code, it would look something like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"<?php\nfinal class MyParser \n{\n    public function try(string $input) : array \n    {\n        $output1 = substr($input, 0, 1); // \"a\"\n        if ($output1 == 'a') {\n            $remainder1 = substr($input, 1); // \"bc\"\n            $output2 = substr($remainder1, 0, 1); // \"b\"\n            if ($output2 == 'b') {\n                $remainder2 = substr($remainder1, 1); // \"c\"\n            } else {\n                throw new Exception(\"Parser failed\");\n            }\n        } else {\n            throw new Exception(\"Parser failed\");\n        }\n        return ['output' => $output2, 'remainder' => $remainder2];\n    }\n}\n$parser = new MyParser();\n$result = $parser->try(\"abc\");\n\nassert($result['output'] == 'b');\nassert($result['remainder'] == 'c');\n")),Object(o.b)("p",null,"If you've been working in PHP long enough and have never used parser combinators, the code above may look more familiar for now. But imagine scaling that to parse anything from simple formats like credit card numbers, recursive structures like JSON or XML, or even entire programming languages like PHP. And that doesn't even include the code you'd need for performance, testing and debugging tooling, code reuse, and reporting on bad input. If you'd rather write ",Object(o.b)("inlineCode",{parentName:"p"},"sequence(char('a'), char('b'))"),", stick around."),Object(o.b)("h3",{id:"footnotes"},"Footnotes"),Object(o.b)("h4",{id:"note-1"},Object(o.b)("a",{name:"floatval"},"Note 1")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),'<?php\n$v = floatval("1.23");\nassert($v === 1.23); \nassert(is_float($v)); \n')),Object(o.b)("p",null,"The above looks fine at first sight, but ",Object(o.b)("inlineCode",{parentName:"p"},"floatval()")," really isn't a very good parser."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),'<?php\nassert(floatval("abc") == 0);\n')),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"floatval()")," claims that the float of ",Object(o.b)("inlineCode",{parentName:"p"},'"abc"')," is ",Object(o.b)("inlineCode",{parentName:"p"},"0"),", which really should be an error. So you can only use ",Object(o.b)("inlineCode",{parentName:"p"},"floatval")," when you already know that the string doesn't contain anything non-float. Parsica can help you do that:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),'<?php\n$parser = float()->map(fn($v) => floatval($v));\ntry {\n    // works: \n    $result = $parser->tryString("1.23");\n    assert($result->output() == 1.23);\n \n    // throws a ParseFailure exception with message "Expected: float, got abc"\n    $result = $parser->tryString("abc");\n} catch (ParserFailure $e) {}\n')))}p.isMDXComponent=!0},387:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return h}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,h=u["".concat(s,".").concat(d)]||u[d]||b[d]||o;return r?a.a.createElement(h,i(i({ref:t},l),{},{components:r})):a.a.createElement(h,i({ref:t},l))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);