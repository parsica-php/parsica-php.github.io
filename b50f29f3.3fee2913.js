(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{278:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),a=(n(0),n(346));const i={title:"Running Parsers"},o={id:"tutorial/04_running_parsers",isDocsHomePage:!1,title:"Running Parsers",description:"There are different ways of running your parser on an input.",source:"@site/docs/tutorial/04_running_parsers.md",permalink:"/docs/next/tutorial/04_running_parsers",editUrl:"https://github.com/mathiasverraes/parsica/tree/main/docs/tutorial/04_running_parsers.md",version:"next",sidebar:"docs",previous:{title:"Using Combinators",permalink:"/docs/next/tutorial/03_combinators"},next:{title:"Mapping to Objects",permalink:"/docs/next/tutorial/05_mapping_to_objects"},latestVersionMainDocPermalink:"/docs"},l=[{value:"try() and tryString()",id:"try-and-trystring",children:[]},{value:"run()",id:"run",children:[]},{value:"Continue with a result",id:"continue-with-a-result",children:[]}],s={rightToc:l};function p({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"There are different ways of running your parser on an input. "),Object(a.b)("h2",{id:"try-and-trystring"},"try() and tryString()"),Object(a.b)("p",null,"Most of the time, you'll want to use ",Object(a.b)("inlineCode",{parentName:"p"},"try"),". It will run the parser on an input ",Object(a.b)("inlineCode",{parentName:"p"},"Stream"),", return a ",Object(a.b)("inlineCode",{parentName:"p"},"Succeed")," (which implements ",Object(a.b)("inlineCode",{parentName:"p"},"ParseResult"),") on success, and throw a ",Object(a.b)("inlineCode",{parentName:"p"},"ParserHasFailed")," exception if the input can't successfully be parsed. "),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"Stream")," type generalises over a different ways of providing input. The simplest implementation is ",Object(a.b)("inlineCode",{parentName:"p"},"StringStream"),". This is really a wrapper around a PHP multibyte string. "),Object(a.b)("p",null,"(In v0.6.0, ",Object(a.b)("inlineCode",{parentName:"p"},"StringStream")," is also the ",Object(a.b)("em",{parentName:"p"},"only")," implementation of ",Object(a.b)("inlineCode",{parentName:"p"},"Stream"),", but this will change.)"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"ParseResult")," has an ",Object(a.b)("inlineCode",{parentName:"p"},"output()")," method, which has the type ",Object(a.b)("inlineCode",{parentName:"p"},"T")," for a ",Object(a.b)("inlineCode",{parentName:"p"},"Parser<T>")," (see ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"mapping_to_objects"}),"Mapping to Objects"),"). It also has a ",Object(a.b)("inlineCode",{parentName:"p"},"remainder()")," method, which gives you the part of the input that wasn't consumed by the parser."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"ParserHasFailed")," has the usual ",Object(a.b)("inlineCode",{parentName:"p"},"Exception")," methods. It also gives you access to the ",Object(a.b)("inlineCode",{parentName:"p"},"Fail implements ParseResult")," object. This contains all the relevant information about the failure, such as ",Object(a.b)("inlineCode",{parentName:"p"},"expected()"),", ",Object(a.b)("inlineCode",{parentName:"p"},"got()"),", and ",Object(a.b)("inlineCode",{parentName:"p"},"position()"),".  "),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),'<?php\n$parser = string(\'hello\');\n\n$result = $parser->try(new StringStream("hello world"));\n// Or, use tryString(string), which is an alias of try(StringStream):\n$result = $parser->tryString("hello world");\n\necho $result->output(); // "hello"\necho $result->remainder(); // StringStream(" world")\n\n// Now let\'s make it fail\ntry {\n    $result = $parser->tryString("hi world");\n} catch(ParserHasFailed $e) {\n    $result = $e->parseResult();\n    echo $result->expected(); // "string(hello)"\n    echo $result->got(); // StringStream("hi world")\n    $position = $result->position(); // A Position object containing the line number,\n                                     // column, and filename where the failure happened\n}\n')),Object(a.b)("h2",{id:"run"},"run()"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"run")," is mostly intended for internal use. "),Object(a.b)("p",null,"The main difference between ",Object(a.b)("inlineCode",{parentName:"p"},"run")," and ",Object(a.b)("inlineCode",{parentName:"p"},"try")," is that ",Object(a.b)("inlineCode",{parentName:"p"},"run")," doesn't throw exceptions when parsing an input fails. (It might throw exceptions if your parser itself is incorrectly defined.) Instead, you'll always get a ",Object(a.b)("inlineCode",{parentName:"p"},"ParseResult"),", and you can inspect it with the same methods as above. You'll also get ",Object(a.b)("inlineCode",{parentName:"p"},"isSuccess")," and ",Object(a.b)("inlineCode",{parentName:"p"},"isFail"),", so you know what you're dealing with."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),'<?php\n$parser = string("hello");\n$result = $parser->run(new StringStream("some input"));\nif($result->isSuccess()) {\n    echo $result->output();\n    echo $result->remainder();\n} elseif ($result->isFail()) {\n    echo $result->expected();\n    echo $result->got();\n}\n')),Object(a.b)("h2",{id:"continue-with-a-result"},"Continue with a result"),Object(a.b)("p",null,"Using ",Object(a.b)("inlineCode",{parentName:"p"},"run")," instead of ",Object(a.b)("inlineCode",{parentName:"p"},"try")," is a good choice when you want to do something with the result, such as:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Building your own combinators"),Object(a.b)("li",{parentName:"ul"},"Interacting with ",Object(a.b)("inlineCode",{parentName:"li"},"ParseResult")," while in the middle of a parse flow")),Object(a.b)("p",null,"To do that, ",Object(a.b)("inlineCode",{parentName:"p"},"ParseResult")," lets you continue parsing:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),'<?php\n$parser1 = string("hello");\n$result1 = $parser1->run(new StringStream("hello world"));\n$parser2 = string("world");\n$result2 = $result1->continueWith($parser2);\n')),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"continueWith")," takes another parser, and uses it to parse the remainder of the of the result. You may have noticed we didn't check for ",Object(a.b)("inlineCode",{parentName:"p"},"isSuccess"),". That's becasue we don't need to. ",Object(a.b)("inlineCode",{parentName:"p"},"continueWith")," is smart; if ",Object(a.b)("inlineCode",{parentName:"p"},"$parser1")," fails, trying to continue parsing on the result will not have any effect. In fact, the example above will fail, because ",Object(a.b)("inlineCode",{parentName:"p"},"$parser1"),' doesn\'t take into account the space between "hello" and "world".'))}p.isMDXComponent=!0},346:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),c=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||i;return n?a.a.createElement(m,l(l({ref:t},p),{},{components:n})):a.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);