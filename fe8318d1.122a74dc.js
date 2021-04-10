(window.webpackJsonp=window.webpackJsonp||[]).push([[362],{462:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return c}));var r=t(2),a=t(6),i=(t(0),t(469)),o={title:"Parsing Expression Languages"},s={id:"version-0.8.0/tutorial/20_expressions",isDocsHomePage:!1,title:"Parsing Expression Languages",description:"Can Parsica parse expression? Why yes, I'm glad you asked!",source:"@site/versioned_docs/version-0.8.0/tutorial/20_expressions.md",permalink:"/docs/0.8.0/tutorial/20_expressions",editUrl:"https://github.com/parsica-php/parsica/tree/main/versioned_docs/version-0.8.0/tutorial/20_expressions.md",version:"0.8.0",sidebar:"version-0.8.0/docs",previous:{title:"Dealing with Space",permalink:"/docs/0.8.0/tutorial/11_dealing_with_space"},next:{title:"Functional Paradigms",permalink:"/docs/0.8.0/tutorial/90_functional_paradigms"},latestVersionMainDocPermalink:"/docs"},l=[{value:"Arithmetic",id:"arithmetic",children:[]},{value:"Non-associative operators",id:"non-associative-operators",children:[]},{value:"Unary operators",id:"unary-operators",children:[]},{value:"Parsing to an AST",id:"parsing-to-an-ast",children:[]}],p={rightToc:l};function c(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Can Parsica parse expression? Why yes, I'm glad you asked!"),Object(i.b)("p",null,"An expression, roughly, is anything that can evaluated to a value, such as "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"arithmetic expressions  ",Object(i.b)("inlineCode",{parentName:"li"},"(1 + 2) * 3"),", "),Object(i.b)("li",{parentName:"ul"},"boolean expressions ",Object(i.b)("inlineCode",{parentName:"li"},"x and (y or z)"),","),Object(i.b)("li",{parentName:"ul"},"code inside a template language ",Object(i.b)("inlineCode",{parentName:"li"},"{{ user.loggedIn ? 'Hello '  ~ user.name : 'Log in' }}"),","),Object(i.b)("li",{parentName:"ul"},"spreadsheet formulas ",Object(i.b)("inlineCode",{parentName:"li"},"=SUM(A1:A10) * B1"),", "),Object(i.b)("li",{parentName:"ul"},"rules in a rule engine"),Object(i.b)("li",{parentName:"ul"},"logic inside a configuration language,  "),Object(i.b)("li",{parentName:"ul"},"and anything else you can think of! ")),Object(i.b)("p",null,"The tricky thing about parsing expressions is that you often have to deal with things like recursion, associativity, and operator precedence. These can make it pretty tricky to build a parser. Parsica provides the ",Object(i.b)("inlineCode",{parentName:"p"},"expression()")," function, which offers a simple way to create a parser for your custom expression language. "),Object(i.b)("h2",{id:"arithmetic"},"Arithmetic"),Object(i.b)("p",null,"Let's build a simple calculator, that can evaluate expressions like ",Object(i.b)("inlineCode",{parentName:"p"},"1 + 2 * (2 - 3)")," to ",Object(i.b)("inlineCode",{parentName:"p"},"-1"),". "),Object(i.b)("p",null,'Let\'s handle whitespace first. (See the chapter on "Dealing with Space" for details.)'),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"<?php\n$token = fn(Parser $parser) => keepFirst($parser, skipHSpace());\n")),Object(i.b)("p",null,"Next, we define a parser for our terms. For this example, let's keep it simple and support only natural numbers:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"<?php\n$term = fn(): Parser => $token(atLeastOne(digitChar()))->map('intval');\n")),Object(i.b)("p",null,"Let's do parentheses next. Parsica's ",Object(i.b)("inlineCode",{parentName:"p"},"between()")," combinator will do the job nicely, but let's wrap it in our combinator for clarity and reusability:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"<?php\n$parens = fn (Parser $parser): Parser =>  $token(between($token(char('(')), $token(char(')')), $parser));\n")),Object(i.b)("p",null,"Now let's define our first expression, using ",Object(i.b)("inlineCode",{parentName:"p"},"expression()"),". In our language, an expression can be:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"A naked term like ",Object(i.b)("inlineCode",{parentName:"li"},"12")),Object(i.b)("li",{parentName:"ol"},"A term between parentheses ",Object(i.b)("inlineCode",{parentName:"li"},"(12)")),Object(i.b)("li",{parentName:"ol"},"An operator and its arguments ",Object(i.b)("inlineCode",{parentName:"li"},"1 + 2")),Object(i.b)("li",{parentName:"ol"},"The arguments are expressions themselves, as in ",Object(i.b)("inlineCode",{parentName:"li"},"1 + (2 + 3)")," ")),Object(i.b)("p",null,"An expression is defined using expressions, so this calls for recursion. (See the chapter on Recursion.) Let's ignore operators for now, and do the simplest recursive expression parser:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),'<?php\n$expr = recursive();\n$primary = $parens($expr)->or($term());\n$expr->recurse(\n    expression($primary, [])\n);\n\n$result = $expr->tryString("(((12)))");\nassertSame(12, $result->output());\n')),Object(i.b)("p",null,"We're saying here that ",Object(i.b)("inlineCode",{parentName:"p"},"$primary")," is either an expression wrapped in parens, or a term. ",Object(i.b)("inlineCode",{parentName:"p"},"$expr")," is an expression that uses ",Object(i.b)("inlineCode",{parentName:"p"},"$primary")," as its primary parser."),Object(i.b)("p",null,"Now let's add the plus operator. We need a parser for the symbol itself, in this case a simple ",Object(i.b)("inlineCode",{parentName:"p"},"char('+')")," will do, but it could be anything. For example, PHP has two 'not equal' operators, which we could parse in one go ",Object(i.b)("inlineCode",{parentName:"p"},"either(string('!='), string('<>'))"),". "),Object(i.b)("p",null,"We also need to decide what to do with the terms that we parse, using a transformation. This is a function that will take the left and the right operands from our ",Object(i.b)("inlineCode",{parentName:"p"},"+"),". As we're building a calculator, we're simple going to add up the two terms, using ",Object(i.b)("inlineCode",{parentName:"p"},"fn($left, $right) => $left + $right"),". (Later we will use this to create abstract syntax trees.)"),Object(i.b)("p",null,"Finally, we need to tell the expression parser that ",Object(i.b)("inlineCode",{parentName:"p"},"+")," is a binary operator, and that we want it to be left associative. Let's put it all together:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),'<?php\n$expr = recursive();\n$primary = $parens($expr)->or($term());\n$expr->recurse(\n    expression(\n        $primary,\n        [\n            leftAssoc(\n                binaryOperator($token(char(\'+\')), fn($l, $r) => $l + $r)\n            )\n        ]\n    )\n);\n\n$result = $expr->tryString("1 + 2 + 3");\nassertSame(6, $result->output());\n$result = $expr->tryString("(1 + (2 + 3) + 4)");\nassertSame(10, $result->output());\n')),Object(i.b)("p",null,"The second argument to ",Object(i.b)("inlineCode",{parentName:"p"},"expression()")," is an array of operators. The order is important: it determines the precedence. ",Object(i.b)("inlineCode",{parentName:"p"},"+")," and ",Object(i.b)("inlineCode",{parentName:"p"},"-")," have the same precedence, whereas ",Object(i.b)("inlineCode",{parentName:"p"},"*")," and ",Object(i.b)("inlineCode",{parentName:"p"},"/")," have the same precedence as each other, but higher precedence than ",Object(i.b)("inlineCode",{parentName:"p"},"+")," and ",Object(i.b)("inlineCode",{parentName:"p"},"-"),". We can solve this easily by grouping each precedence level, and putting the highest precedence levels first.  "),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"<?php\n$expr = recursive();\n$primary = $parens($expr)->or($term());\n$expr->recurse(\n    expression(\n        $primary,\n        [\n            leftAssoc(\n                binaryOperator($token(char('*')), fn($l, $r) => $l * $r),\n                binaryOperator($token(char('/')), fn($l, $r) => $l / $r),\n            ),\n            leftAssoc(\n                binaryOperator($token(char('+')), fn($l, $r) => $l + $r),\n                binaryOperator($token(char('-')), fn($l, $r) => $l - $r),\n            ),\n        ]\n    )\n);\n\n$result = $expr->tryString(\"1 + 2 * 3\");\nassertSame(7, $result->output());\n$result = $expr->tryString(\"(1 + 2) * 3\");\nassertSame(9, $result->output());\n$result = $expr->tryString(\"1 - 2 - 3\"); // interpreted as ((1 - 2) - 3)\nassertSame(-4, $result->output());\n")),Object(i.b)("p",null,"You can play around with the precedence and the associativity to see how it impacts the result. As an exercise, make a parser that solves ",Object(i.b)("inlineCode",{parentName:"p"},"1 - 2 - 3 = (1 - (2 - 3) = (1 - (-1)) = 2"),"."),Object(i.b)("h2",{id:"non-associative-operators"},"Non-associative operators"),Object(i.b)("p",null,"Non-associative means that an expression like ",Object(i.b)("inlineCode",{parentName:"p"},"1 + 2 + 3")," cannot be resolved, because there is no way to decide whether it's associates left ",Object(i.b)("inlineCode",{parentName:"p"},"(1 + 2) + 3")," or right ",Object(i.b)("inlineCode",{parentName:"p"},"1 + (2 + 3)"),". The parser will simply fail. Of course, for addition, non-associativity wouldn't make sense, but for other languages or operators it might.  "),Object(i.b)("h2",{id:"unary-operators"},"Unary operators"),Object(i.b)("p",null,"You can add unary operators, such as the negation prefix operator ",Object(i.b)("inlineCode",{parentName:"p"},"-"),", and the increment and decrement postfix operators ",Object(i.b)("inlineCode",{parentName:"p"},"++")," and ",Object(i.b)("inlineCode",{parentName:"p"},"--"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"// ...\n    [\n        prefix(\n            unaryOperator(char('-'), fn($v) => -$v)\n        ),\n        postfix(\n            unaryOperator(string('++'), fn($v) => $v + 1),\n            unaryOperator(string('--'), fn($v) => $v - 1),\n        ),\n        // ...\n    ];\n\n")),Object(i.b)("h2",{id:"parsing-to-an-ast"},"Parsing to an AST"),Object(i.b)("p",null,"Building calculators isn't that interesting of course. Typically you'll want your parser to output a datastructure that represents your expression, called an Abstract Syntax Tree or AST. This structure can then be used for whatever the next step in your program is, ranging from evaluation to compilation, static analysis, typechecking, optimisation, rendering and formatting..."),Object(i.b)("p",null,"Let's build a simple Boolean expression language, starting with the types for AST. Everything else will be pretty similar to the calculator example above, but instead of evaluating the expressions on the fly, we use the transform functions to create the datastructure."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"<?php\n// every term or expression in our language is a Boolean: \ninterface Boolean {}\n\n// Literals\nclass True_ implements Boolean {}\nclass False_ implements Boolean {}\n\n// A variable will be replaced with a value at evaluation stage\nclass Variable implements Boolean {\n    private string $name;\n    function __construct(string $name){$this->name = $name;}\n}\n\n// Our operators are Booleans that are composed of other Booleans \nclass Not_ implements Boolean {\n    private Boolean $boolean;\n    function __construct(Boolean $boolean){$this->boolean = $boolean;}\n}\nclass And_ implements Boolean {\n    private Boolean $l, $r;\n    function __construct(Boolean $l, Boolean $r){\n        $this->l = $l;\n        $this->r = $r;\n    }\n}\nclass Or_ implements Boolean {\n    private Boolean $l, $r;\n    function __construct(Boolean $l, Boolean $r){\n        $this->l = $l;\n        $this->r = $r;\n    }\n}\n\n// Now let's write the parser\n$token = fn(Parser $parser) : Parser => keepFirst($parser, skipHSpace());\n$parens = fn (Parser $parser): Parser =>  $token(between($token(char('(')), $token(char(')')), $parser));\n\n// A term is a literal TRUE/FALSE or a variable \n$term = fn(): Parser => $token(choice(\n    char('$')->followedBy(atLeastOne(alphaChar()))->map(fn($name) => new Variable($name)),\n    string(\"TRUE\")->map(fn($v) => new True_),\n    string(\"FALSE\")->map(fn($v) => new False_),\n));\n$expr = recursive();\n\n// When the parser encounters NOT, AND, or OR, it returns a Not_, And_, or Or_ object.\n// The $v, $l and $r arguments can be Boolean objects themselves, creating the tree. \n$expr->recurse(expression(\n    $parens($expr)->or($term()),\n    [\n        prefix(\n            unaryOperator($token(string(\"NOT\")), fn($v) => new Not_($v))\n        ),\n        leftAssoc(\n            binaryOperator($token(string(\"AND\")), fn($l, $r) => new And_($l, $r))\n        ),\n        leftAssoc(\n            binaryOperator($token(string(\"OR\")), fn($l, $r) => new Or_($l, $r))\n        ),\n    ]\n));\n\n\n$parser = $expr->thenEof(); // check if we reached the end of the input\n$result = $parser->tryString('$isBlue AND NOT ($isEdible OR $isDrinkable)');\nassertEquals(\n    new And_(\n        new Variable('isBlue'),\n        new Not_(\n            new Or_(\n                new Variable('isEdible'),\n                new Variable('isDrinkable'),\n            )\n        )\n    ),\n    $result->output()\n);\n")),Object(i.b)("p",null,"Now the AST can be used for whatever purposes you need. In our Boolean example above, as an exercise you can "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"add a ",Object(i.b)("inlineCode",{parentName:"li"},"render()")," method to write the expression back to a pretty formatted string, "),Object(i.b)("li",{parentName:"ul"},"add a ",Object(i.b)("inlineCode",{parentName:"li"},"reduce()")," method that simplifies the AST (eg turning ",Object(i.b)("inlineCode",{parentName:"li"},"TRUE AND TRUE")," into ",Object(i.b)("inlineCode",{parentName:"li"},"TRUE"),"),"),Object(i.b)("li",{parentName:"ul"},"add an ",Object(i.b)("inlineCode",{parentName:"li"},"evaluate(['isBlue' => true, 'isEdible' => false, ...])")," method that calculates the final result"),Object(i.b)("li",{parentName:"ul"},"...")))}c.isMDXComponent=!0},469:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),c=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,d=u["".concat(o,".").concat(m)]||u[m]||b[m]||i;return t?a.a.createElement(d,s(s({ref:n},p),{},{components:t})):a.a.createElement(d,s({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);