(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{106:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),h=n,f=p["".concat(c,".").concat(h)]||p[h]||d[h]||o;return r?a.a.createElement(f,i(i({ref:t},u),{},{components:r})):a.a.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var u=2;u<o;u++)c[u]=r[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},94:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),o=(r(0),r(106)),c={title:"What is DocSearch?"},i={unversionedId:"what-is-docsearch",id:"what-is-docsearch",isDocsHomePage:!1,title:"What is DocSearch?",description:"Why?",source:"@site/docs/what-is-docsearch.md",slug:"/what-is-docsearch",permalink:"/docs/what-is-docsearch",version:"current",sidebar:"docs",next:{title:"How does it work?",permalink:"/docs/how-does-it-work"}},l=[{value:"Why?",id:"why",children:[]},{value:"Quick description",id:"quick-description",children:[]},{value:"How to feature DocSearch?",id:"how-to-feature-docsearch",children:[]}],u={toc:l};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"why"},"Why?"),Object(o.b)("p",null,"We have created DocSearch because we are scratching our own itch. As\ndevelopers, we spent a lot of time reading documentation, and it can be hard to\nfind relevant information in large documentations. We're not blaming anyone\nhere; building a good search is a challenge."),Object(o.b)("p",null,"It happens that we are a search company and we actually have a lot of experience\nbuilding search interfaces. We wanted to use those skills to help others. That's\nwhy we created a way to automatically extract content from tech documentation\nand make it available to everyone from the first keystroke."),Object(o.b)("h2",{id:"quick-description"},"Quick description"),Object(o.b)("p",null,"We split DocSearch into a crawler and a frontend library. We run the crawler on\nour end every 24 hours to extract content from your website and push it to an Algolia\nindex. You can then add the frontend library to your website to search in that index."),Object(o.b)("h2",{id:"how-to-feature-docsearch"},"How to feature DocSearch?"),Object(o.b)("p",null,"DocSearch is entirely free and automated. The one thing we'll need from you is\nto read ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/who-can-apply"}),"our checklist"),' and apply! After that, we\'ll share with you the\nJavaScript snippet needed to add DocSearch to your website. We ask that you keep\nthe "Search by Algolia" link displayed.'),Object(o.b)("p",null,"DocSearch is ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://opencollective.com/algolia"}),"one of our ways")," to give back to the open source community for\neverything it did for us already."),Object(o.b)("p",null,"You can now ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/apply"}),"apply to the program")))}s.isMDXComponent=!0}}]);