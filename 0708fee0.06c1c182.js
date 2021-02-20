(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{112:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return s}));var n=r(2),a=r(6),o=(r(0),r(346)),i={title:"Looking ahead"},l={id:"tutorial/08_look_ahead",isDocsHomePage:!1,title:"Looking ahead",description:"notFollowedBy",source:"@site/docs/tutorial/08_look_ahead.md",permalink:"/docs/next/tutorial/08_look_ahead",editUrl:"https://github.com/mathiasverraes/parsica/tree/main/docs/tutorial/08_look_ahead.md",version:"next",sidebar:"docs",previous:{title:"Recursion",permalink:"/docs/next/tutorial/07_recursion"},next:{title:"Errors and labels",permalink:"/docs/next/tutorial/09_errors_and_labels"},latestVersionMainDocPermalink:"/docs"},p=[{value:"notFollowedBy",id:"notfollowedby",children:[]}],c={rightToc:p};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"notfollowedby"},"notFollowedBy"),Object(o.b)("p",null,"Say you want to match the ",Object(o.b)("inlineCode",{parentName:"p"},"print")," keyword in a programming language. You can express that with the ",Object(o.b)("inlineCode",{parentName:"p"},'string("print")')," parser, but it will match more than you'd like:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),'<?php\n$print = string("print");\n\n$result = $print->tryString("print(\'Hello World\');");\nassertEquals("print", $result->output());\n\n$result = $print->tryString("printXYZ(\'Hello World\');");\nassertEquals("print", $result->output()); // oops!\n')),Object(o.b)("p",null,'As you can see, "printXYZ" also results in "print", but it wasn\'t our intention, because "printXYZ" is not a valid keyword.'),Object(o.b)("p",null,"We can solve it by using the ",Object(o.b)("inlineCode",{parentName:"p"},"notFollowedBy")," combinator."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),'<?php\n$print = keepFirst(string("print"), notFollowedBy(alphaNumChar()));\n$result = $print->run(new StringStream("printXYZ(\'Hello World\');"));\nassertTrue($result->isFail());\n')),Object(o.b)("p",null,"There's a fluent interface as well:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),'<?php\n$print = string("print")->notFollowedBy(alphaNumChar());\n$result = $print->run(new StringStream("printXYZ(\'Hello World\');"));\nassertTrue($result->isFail());\n')),Object(o.b)("p",null,"In practice, we'll have a lot more keywords than just the one. A good habit is to first generalize this to all the keywords in our language. Then, using our new ",Object(o.b)("inlineCode",{parentName:"p"},"$keyword")," parser constructor, we can match the exact variations we like: "),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"<?php\n$keyword = fn(string $name) => keepFirst(string($name), notFollowedBy(alphaNumChar()));\n\n$parser = choice(\n    $keyword('printf'),\n    $keyword('print'),\n    $keyword('sprintf')\n);\n\n$result = $parser->tryString(\"print('Hello World');\");\nassertEquals(\"print\", $result->output());\n\n$result = $parser->tryString(\"printf('Hello %s', 'world');\");\nassertEquals(\"printf\", $result->output());\n")))}s.isMDXComponent=!0},346:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),s=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(r),b=n,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return r?a.a.createElement(m,l(l({ref:t},c),{},{components:r})):a.a.createElement(m,l({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);