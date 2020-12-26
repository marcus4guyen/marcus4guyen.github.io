(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{106:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return b}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=o.a.createContext({}),h=function(e){var t=o.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=h(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=h(a),p=n,b=d["".concat(i,".").concat(p)]||d[p]||u[p]||r;return a?o.a.createElement(b,c(c({ref:t},l),{},{components:a})):o.a.createElement(b,c({ref:t},l))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<r;l++)i[l]=a[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},65:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return l}));var n=a(3),o=(a(0),a(106));const r={title:"FAQ"},i={unversionedId:"faq",id:"faq",isDocsHomePage:!1,title:"FAQ",description:"If you're not finding the answer to your question on this website, this page",source:"@site/docs/faq.md",slug:"/faq",permalink:"/docs/faq",version:"current",sidebar:"docs",previous:{title:"Tips for a good search",permalink:"/docs/tips"},next:{title:"Supported Integrations",permalink:"/docs/integrations"}},c=[{value:"How often will you crawl my website?",id:"how-often-will-you-crawl-my-website",children:[]},{value:"What do I need to install on my side?",id:"what-do-i-need-to-install-on-my-side",children:[]},{value:"How much does it cost?",id:"how-much-does-it-cost",children:[]},{value:"What data are you collecting?",id:"what-data-are-you-collecting",children:[]},{value:"Where is my data hosted?",id:"where-is-my-data-hosted",children:[]},{value:"Can I use DocSearch on non-doc pages?",id:"can-i-use-docsearch-on-non-doc-pages",children:[]},{value:"Can you index code samples?",id:"can-you-index-code-samples",children:[]},{value:"Why do I have duplicate content in my results?",id:"why-do-i-have-duplicate-content-in-my-results",children:[]},{value:"Why are custom changes from the Algolia dashboard ineffective?",id:"why-are-custom-changes-from-the-algolia-dashboard-ineffective",children:[]},{value:"A documentation website I like does not use DocSearch. What can I do?",id:"a-documentation-website-i-like-does-not-use-docsearch-what-can-i-do",children:[]},{value:"How many records does the DocSearch crawl create?",id:"how-many-records-does-the-docsearch-crawl-create",children:[]},{value:"Why aren&#39;t my pages indexed?",id:"why-arent-my-pages-indexed",children:[]},{value:"Can I know when the next crawl will happen?",id:"can-i-know-when-the-next-crawl-will-happen",children:[]},{value:"How did we build this website?",id:"how-did-we-build-this-website",children:[]},{value:"What is the timeline on the v3?",id:"what-is-the-timeline-on-the-v3",children:[]},{value:"Can I share the <code>apiKey</code> in my repo?",id:"can-i-share-the-apikey-in-my-repo",children:[]}],s={toc:c};function l({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"If you're not finding the answer to your question on this website, this page\nwill help you. If you're still unsure, don't hesitate to send ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"mailto:docsearch@algolia.com"}),"your question to\nus")," directly."),Object(o.b)("h2",{id:"how-often-will-you-crawl-my-website"},"How often will you crawl my website?"),Object(o.b)("p",null,"Every day."),Object(o.b)("p",null,"The exact time of day might vary each day, but we'll crawl your website at most\nevery 24 hours."),Object(o.b)("h2",{id:"what-do-i-need-to-install-on-my-side"},"What do I need to install on my side?"),Object(o.b)("p",null,"Nothing."),Object(o.b)("p",null,"The DocSearch crawler is running on our own infra. It reads the HTML content\nfrom your website and populates an Algolia index every day. All you need to do\nis keep your website online, and we take care of the rest. To edit your\nconfiguration, please ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/algolia/docsearch-configs/pulls"}),"submit a pull request"),"."),Object(o.b)("h2",{id:"how-much-does-it-cost"},"How much does it cost?"),Object(o.b)("p",null,"Nothing."),Object(o.b)("p",null,"We know that paying for search infrastructure is a cost not all open source\nprojects can afford. That's why we decided to keep DocSearch free for everyone.\nAll we ask in exchange is that you keep the \"Search by ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.algolia.com/"}),"Algolia"),'" logo\ndisplayed next to the search results.'),Object(o.b)("p",null,"If this is not possible for you, you're free to ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.algolia.com/pricing"}),"open your own Algolia\naccount")," and run DocSearch on your own without this limitation. In that case,\nthough, depending on the size of your documentation, you might need a paid\naccount (free accounts can hold as much as 10k records)."),Object(o.b)("h2",{id:"what-data-are-you-collecting"},"What data are you collecting?"),Object(o.b)("p",null,"We save the data we extract from your website markup, which we put in a custom\nJSON format instead of HTML. This is the data we put in the Algolia DocSearch\nindex. The selectors in your config define what data to scrape."),Object(o.b)("p",null,"As the website owner, we also give you access to the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.algolia.com/doc/guides/getting-insights-and-analytics/search-analytics/understand-reports/"}),"Algolia Analytics"),"\ndashboard. This will let you have more data about the anonymized searches in\nyour website. You'll see the most searched terms, or those that lead to no\nresults."),Object(o.b)("p",null,"With such analytics, you will better understand what your users are searching\nfor."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"If you don't have Analytics access, ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"mailto:docsearch@algolia.com"}),"send us an email")," and we'll enable it.")),Object(o.b)("h2",{id:"where-is-my-data-hosted"},"Where is my data hosted?"),Object(o.b)("p",null,"We host the DocSearch data on Algolia's servers, with replications around the\nglobe. You can find more details about the actual ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.algolia.com/doc/guides/infrastructure/servers/"}),"server specs here"),", and\nmore complete information in our ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.algolia.com/policies/privacy"}),"privacy policy"),"."),Object(o.b)("h2",{id:"can-i-use-docsearch-on-non-doc-pages"},"Can I use DocSearch on non-doc pages?"),Object(o.b)("p",null,"The free DocSearch we provide will crawl documentation pages. To use it on other\nparts of your website, you'll need to create your own Algolia account and\neither:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Run the ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/run-your-own"}),"DocSearch crawler")," on your own"),Object(o.b)("li",{parentName:"ul"},"Use one of our other ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.algolia.com/doc/api-reference/"}),"framework integrations or API clients"))),Object(o.b)("h2",{id:"can-you-index-code-samples"},"Can you index code samples?"),Object(o.b)("p",null,"Yes, but we do not recommend it."),Object(o.b)("p",null,"Code samples are a great way for humans to understand how people use a specific\nmethod. It often requires boilerplate code though, repeated across examples,\nwhich adds noise to the results."),Object(o.b)("p",null,"What we recommend instead is to exclude the code blocks from the indexing (by\nusing the ",Object(o.b)("inlineCode",{parentName:"p"},"selectors_exclude")," option in your config), and instead structure your\ncontent so the method names are present in the headers."),Object(o.b)("h2",{id:"why-do-i-have-duplicate-content-in-my-results"},"Why do I have duplicate content in my results?"),Object(o.b)("p",null,"This can happen when you have more than one URL pointing to the same content,\nfor example with ",Object(o.b)("inlineCode",{parentName:"p"},"./docs"),", ",Object(o.b)("inlineCode",{parentName:"p"},"./docs/")," and ",Object(o.b)("inlineCode",{parentName:"p"},"./docs/index.html"),"."),Object(o.b)("p",null,"You set the ",Object(o.b)("inlineCode",{parentName:"p"},"stop_urls")," to all the patterns you want to exclude. The following\nexample will exclude all URLs ending with ",Object(o.b)("inlineCode",{parentName:"p"},"/")," or ",Object(o.b)("inlineCode",{parentName:"p"},"index.html")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "stop_urls": ["/$", "/index.html$"]\n}\n')),Object(o.b)("h2",{id:"why-are-custom-changes-from-the-algolia-dashboard-ineffective"},"Why are custom changes from the Algolia dashboard ineffective?"),Object(o.b)("p",null,"Changing your setting from the dashboard might be something you want to do for\nsome reasons ."),Object(o.b)("p",null,"Every successful crawl sets the DocSearch settings. These settings will be\noverridden at the next crawl. We ",Object(o.b)("strong",{parentName:"p"},"do not recommend to edit anything from the\ndashboard"),". These changes come from the JSON configuration itself."),Object(o.b)("p",null,"You can use the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/config-file"}),"custom_settings parameter")," for such purpose."),Object(o.b)("h2",{id:"a-documentation-website-i-like-does-not-use-docsearch-what-can-i-do"},"A documentation website I like does not use DocSearch. What can I do?"),Object(o.b)("p",null,"We'd love to help!"),Object(o.b)("p",null,"If one of your favorite tool documentation websites is missing DocSearch, we\nencourage you to file an issue in their repository explaining how DocSearch\ncould help. Feel free to ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"mailto:docsearch@algolia.com"}),"send us an email")," as well, and we'll provide all\nthe help we can."),Object(o.b)("h2",{id:"how-many-records-does-the-docsearch-crawl-create"},"How many records does the DocSearch crawl create?"),Object(o.b)("p",null,"The ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/config-file"}),Object(o.b)("inlineCode",{parentName:"a"},"nb_hits")," property")," in your configuration keeps track of the number of\nrecords the crawl has extracted and indexed by the last DocSearch run. A crawl\nupdates this number automatically."),Object(o.b)("p",null,"The DocSearch scraper follows ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.algolia.com/doc/guides/sending-and-managing-data/send-and-update-your-data/in-depth/asynchronicity-and-when-to-wait-for-tasks/#atomic-reindexing"}),"the recommended atomic-reindexing strategy"),".\nIt creates a brand new temporary index to populate the data scraped from your\nwebsite. When successful, the crawl overwrites the old index defined in your\nconfiguration with the key ",Object(o.b)("inlineCode",{parentName:"p"},"index_name"),"."),Object(o.b)("h2",{id:"why-arent-my-pages-indexed"},"Why aren't my pages indexed?"),Object(o.b)("p",null,"We are scraping your website according to your configuration. It might happen\nthat some pages are missing from the search. Some possible reasons for that are:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Makes sure you are not filtering on the search by wrongly using\n",Object(o.b)("inlineCode",{parentName:"li"},"facetFilters"),". ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.algolia.com/doc/api-reference/api-parameters/facetFilters/"}),"See here for more details"),"."),Object(o.b)("li",{parentName:"ul"},"Make sure that an other indexed page references the page missing with an\nhyperlink tag ",Object(o.b)("inlineCode",{parentName:"li"},"<a/>"),"."),Object(o.b)("li",{parentName:"ul"},"Make sure you are ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/tips"}),"providing a compliant sitemap from the configuration"),"\nand that it references the page.")),Object(o.b)("h2",{id:"can-i-know-when-the-next-crawl-will-happen"},"Can I know when the next crawl will happen?"),Object(o.b)("p",null,"No you can't. You should be aware that we made every crawls in a day. The\nposition of your crawl in the queue is the lexicographic order of your\n",Object(o.b)("inlineCode",{parentName:"p"},"index_name")," amongs the whole list of featured website."),Object(o.b)("p",null,"If none of the previous points help, you ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"mailto:docsearch@algolia.com"}),"can contact our support"),"."),Object(o.b)("h2",{id:"how-did-we-build-this-website"},"How did we build this website?"),Object(o.b)("p",null,"We build this website with ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://v2.docusaurus.io/"}),"Docusaurus v2"),". We were helped by a great man\nwho inspired us a lot, Endi. We want ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://docusaurus.io/blog/2020/01/07/tribute-to-endi"}),"to pay a tribute to this exceptional human\nbeing that will be always part of the DocSearch project"),". Rest in peace\nmate!"),Object(o.b)("h2",{id:"what-is-the-timeline-on-the-v3"},"What is the timeline on the v3?"),Object(o.b)("p",null,"We are pre-releasing the v3 on docusaurus 2. It will help us to iterate faster\non it and make sure we are ready to release a vanilla version. We will provide a\nmigration guide to help you move on this new version. If you want to have more\ninformation on this version, you can ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://youtu.be/OXRjnG7SHJM"}),"watch the search party we made about this\ntopic"),"."),Object(o.b)("h2",{id:"can-i-share-the-apikey-in-my-repo"},"Can I share the ",Object(o.b)("inlineCode",{parentName:"h2"},"apiKey")," in my repo?"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"apiKey")," the DocSearch team provides is ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://youtu.be/OXRjnG7SHJM"}),"a search-only key")," and can be\nsafely shared publicly. You can track it in your version control system (e.g.\ngit). If you are running the scraper on your own, please make sure to create a\nsearch-only key and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.algolia.com/doc/guides/security/api-keys/#admin-api-key"}),"do not share your Admin key"),"."))}l.isMDXComponent=!0}}]);