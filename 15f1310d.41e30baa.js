(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{126:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var a=r(2),n=r(6),i=(r(0),r(387)),c={title:"Parsica",sidebar_label:"About Parsica"},o={id:"version-0.7.0/index",isDocsHomePage:!0,title:"Parsica",description:"The easiest way to build robust parsers in PHP.",source:"@site/versioned_docs/version-0.7.0/index.md",permalink:"/docs/",editUrl:"https://github.com/parsica-php/parsica/tree/main/versioned_docs/version-0.7.0/index.md",version:"0.7.0",sidebar_label:"About Parsica",sidebar:"version-0.7.0/docs",next:{title:"Installation & Requirements",permalink:"/docs/installation"}},s=[{value:"Donate",id:"donate",children:[]},{value:"Contribute",id:"contribute",children:[]},{value:"Support",id:"support",children:[{value:"Commercial training &amp; support",id:"commercial-training--support",children:[]},{value:"Community support",id:"community-support",children:[]}]},{value:"Links",id:"links",children:[]}],l={rightToc:s};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The easiest way to build robust parsers in PHP."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," Parsica is very early stage, expect things to break. "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"releases"}),"Releases")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"installation"}),"Installation & Requirements")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"api/index"}),"API Reference"))),Object(i.b)("h2",{id:"donate"},"Donate"),Object(i.b)("p",null,"Donate via my ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/sponsors/mathiasverraes"}),"GitHub Sponsor Page"),"\nor via ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=NS4GQXUDXRKQJ&source=url"}),"Paypal"),". "),Object(i.b)("p",null,"A lot of research & development went into this project. We think it can become the mainstream choice for building reliable parsers in PHP, and serve as a foundation for many advancements. Your support will help us to reach that goal."),Object(i.b)("h2",{id:"contribute"},"Contribute"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"contribute/design_goals"}),"Design Goals")),Object(i.b)("li",{parentName:"ul"},"Contribute by submitting code, documentation, examples, ... through pull requests."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"CODE_OF_CONDUCT"}),"Code of Conduct"))),Object(i.b)("h2",{id:"support"},"Support"),Object(i.b)("h3",{id:"commercial-training--support"},"Commercial training & support"),Object(i.b)("p",null,"E-mail us at ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"mailto:contact@value-object.com"}),"contact@value-object.com")," to discuss options."),Object(i.b)("h3",{id:"community-support"},"Community support"),Object(i.b)("p",null,"Submit questions as Github issues. Help us help you by submitting short bits of code that demonstrate the problem, and that can easily be copied and run. "),Object(i.b)("h2",{id:"links"},"Links"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Official Site: ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://parsica.verraes.net"}),"parsica.verraes.net")),Object(i.b)("li",{parentName:"ul"},"Twitter: ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://twitter.com/parsica_php"}),"@parsica_php")),Object(i.b)("li",{parentName:"ul"},"GitHub: ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/mathiasverraes/parsica"}),"mathiasverraes/parsica")),Object(i.b)("li",{parentName:"ul"},"Packagist: ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://packagist.org/packages/mathiasverraes/parsica"}),"mathiasverraes/parsica")),Object(i.b)("li",{parentName:"ul"},"License: ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"LICENSE"}),"MIT"))))}p.isMDXComponent=!0},387:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},b=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(r),m=a,d=b["".concat(c,".").concat(m)]||b[m]||u[m]||i;return r?n.a.createElement(d,o(o({ref:t},l),{},{components:r})):n.a.createElement(d,o({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=r[l];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);