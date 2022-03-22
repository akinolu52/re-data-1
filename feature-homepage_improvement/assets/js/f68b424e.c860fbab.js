"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[551],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),p=a,f=m["".concat(l,".").concat(p)]||m[p]||d[p]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4533:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:3},l="Anomalies",c={unversionedId:"reference/data_monitoring/anomalies",id:"reference/data_monitoring/anomalies",isDocsHomePage:!1,title:"Anomalies",description:"re_data looks at metrics gathered and alerts if those are suspicious, comparing to data saw in the past. This means situations similar to those.",source:"@site/docs/reference/data_monitoring/anomalies.md",sourceDirName:"reference/data_monitoring",slug:"/reference/data_monitoring/anomalies",permalink:"/re-data/feature-homepage_improvement/docs/reference/data_monitoring/anomalies",editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/reference/data_monitoring/anomalies.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Models",permalink:"/re-data/feature-homepage_improvement/docs/reference/data_monitoring/models"},next:{title:"Tests",permalink:"/re-data/feature-homepage_improvement/docs/reference/data_monitoring/tests"}},u=[{value:"How it works?",id:"how-it-works",children:[]},{value:"Alerting notifications",id:"alerting-notifications",children:[]}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"anomalies"},"Anomalies"),(0,o.kt)("p",null,"re_data looks at metrics gathered and alerts if those are suspicious, comparing to data saw in the past. This means situations similar to those."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"sudden drops or increases in the volume of new records added to your tables"),(0,o.kt)("li",{parentName:"ul"},"longer than expected break between data arrivals"),(0,o.kt)("li",{parentName:"ul"},"increase in NULL values in one of your columns"),(0,o.kt)("li",{parentName:"ul"},"different maximal/minimal/avg numbers in any of the table columns")),(0,o.kt)("p",null,"Will be detected."),(0,o.kt)("h2",{id:"how-it-works"},"How it works?"),(0,o.kt)("p",null,"re_data is currently using z_score to detect anomalies. All detected anomalies are showing up in ",(0,o.kt)("inlineCode",{parentName:"p"},"re_data_alerting")," model."),(0,o.kt)("h2",{id:"alerting-notifications"},"Alerting notifications"),(0,o.kt)("p",null,"To receive notifications you would need to set up, tests for ",(0,o.kt)("inlineCode",{parentName:"p"},"re_data_alerting")," table. We recommend adding tests checking for any recent alerts to a dbt test suite."))}m.isMDXComponent=!0}}]);