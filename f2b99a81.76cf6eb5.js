(window.webpackJsonp=window.webpackJsonp||[]).push([[273],{373:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(6),o=(n(0),n(387)),c=n(393),i=n(394),l={title:"Installation & Requirements"},s={id:"version-0.4.0/installation",isDocsHomePage:!1,title:"Installation & Requirements",description:"<Tabs",source:"@site/versioned_docs/version-0.4.0/installation.md",permalink:"/docs/0.4.0/installation",editUrl:"https://github.com/parsica-php/parsica/tree/main/versioned_docs/version-0.4.0/installation.md",version:"0.4.0",sidebar:"version-0.4.0/docs",previous:{title:"Parsica",permalink:"/docs/0.4.0/"},next:{title:"PHPUnit/ParserAssertions",permalink:"/docs/0.4.0/api/PHPUnit/ParserAssertions"},latestVersionMainDocPermalink:"/docs"},u=[{value:"Requirements",id:"requirements",children:[]},{value:"Usage",id:"usage",children:[]}],p={rightToc:u};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(c.a,{defaultValue:"cli",values:[{label:"Command line",value:"cli"},{label:"composer.json",value:"composer"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"cli",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"composer require mathiasverraes/parsica\n"))),Object(o.b)(i.a,{value:"composer",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'"require": {\n    "mathiasverraes/parsica": "dev-main"\n}\n')))),Object(o.b)("h2",{id:"requirements"},"Requirements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"PHP 7.4 or higher"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.php.net/manual/en/book.mbstring.php"}),"The multibyte string extension for PHP (aka mbstring)"))),Object(o.b)("p",null,"(@TODO: add polyfill for mbstring)."),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,"In a .php file, make sure the Composer autoloader is included:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"require_once __DIR__.'/../vendor/autoload.php';")),Object(o.b)("p",null,"Import parsers and combinators:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"use function Verraes\\Parsica\\char;")),Object(o.b)("p",null,"You can combine multiple imports in one statement: "),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"use function Verraes\\Parsica\\{between, char, atLeastOne, alphaChar};")),Object(o.b)("p",null,"Finally, add some code:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"<?php\n$parser = between(char('{'), char('}'), atLeastOne(alphaChar()));\n$result = $parser->tryString(\"{Hello}\");\necho $result->output();\n// outputs \"Hello\"\n")))}b.isMDXComponent=!0},387:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,f=p["".concat(c,".").concat(m)]||p[m]||b[m]||o;return n?a.a.createElement(f,i(i({ref:t},s),{},{components:n})):a.a.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},388:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},390:function(e,t,n){"use strict";var r=n(0);const a=Object(r.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{},isAnnouncementBarClosed:!1,closeAnnouncementBar:()=>{}});t.a=a},391:function(e,t,n){"use strict";var r=n(0),a=n(390);t.a=function(){return Object(r.useContext)(a.a)}},393:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(391),c=n(388),i=n(92),l=n.n(i);const s=37,u=39;t.a=function(e){const{block:t,children:n,defaultValue:i,values:p,groupId:b}=e,{tabGroupChoices:m,setTabGroupChoices:f}=Object(o.a)(),[d,O]=Object(r.useState)(i);if(null!=b){const e=m[b];null!=e&&e!==d&&p.some(t=>t.value===e)&&O(e)}const j=e=>{O(e),null!=b&&f(b,e)},h=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t})},p.map(({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":d===e,className:Object(c.a)("tabs__item",l.a.tabItem,{"tabs__item--active":d===e}),key:e,ref:e=>h.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case u:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(h,e.target,e),onFocus:()=>j(e),onClick:()=>j(e)},t))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter(e=>e.props.value===d)[0]))}},394:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}}}]);