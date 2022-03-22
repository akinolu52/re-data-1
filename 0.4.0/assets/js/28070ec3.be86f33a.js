"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[727],{3905:function(t,e,r){r.d(e,{Zo:function(){return d},kt:function(){return m}});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=n.createContext({}),u=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},d=function(t){var e=u(t.components);return n.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},l=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),l=u(r),m=a,g=l["".concat(s,".").concat(m)]||l[m]||c[m]||o;return r?n.createElement(g,i(i({ref:e},d),{},{components:r})):n.createElement(g,i({ref:e},d))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=l;var p={};for(var s in e)hasOwnProperty.call(e,s)&&(p[s]=e[s]);p.originalType=t,p.mdxType="string"==typeof t?t:a,i[1]=p;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},4595:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return d},default:function(){return l}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],p={sidebar_position:2},s="Supported data warehouses",u={unversionedId:"introduction/supported_warehouses",id:"introduction/supported_warehouses",isDocsHomePage:!1,title:"Supported data warehouses",description:"We support most of the main data warehouses supported by dbt. We plan to add support for Spark/Databricks.",source:"@site/docs/introduction/supported_warehouses.md",sourceDirName:"introduction",slug:"/introduction/supported_warehouses",permalink:"/re-data/0.4.0/docs/introduction/supported_warehouses",editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/introduction/supported_warehouses.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"What is re_data?",permalink:"/re-data/0.4.0/docs/introduction/whatis"},next:{title:"Installation for dbt users",permalink:"/re-data/0.4.0/docs/getting_started/installation/for_dbt_users"}},d=[],c={toc:d};function l(t){var e=t.components,r=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"supported-data-warehouses"},"Supported data warehouses"),(0,o.kt)("p",null,"We support most of the main data warehouses supported by dbt. We plan to add support for Spark/Databricks."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"}),(0,o.kt)("th",{parentName:"tr",align:"center"},"Integration"),(0,o.kt)("th",{parentName:"tr",align:"right"},"Status"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("img",{height:"40",src:"https://miro.medium.com/max/1024/0*eDEy4S8zFfYnRt1X.png"})),(0,o.kt)("td",{parentName:"tr",align:"center"},"BigQuery"),(0,o.kt)("td",{parentName:"tr",align:"right"},"Supported")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("img",{height:"40",src:"https://www.pngkey.com/png/full/20-201458_when-ubers-engineering-team-published-a-blog-post.png"})),(0,o.kt)("td",{parentName:"tr",align:"center"},"PostgreSQL"),(0,o.kt)("td",{parentName:"tr",align:"right"},"Supported")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("img",{height:"40",src:"https://dbdb.io/media/logos/amazon-redshift.png"})),(0,o.kt)("td",{parentName:"tr",align:"center"},"Redshift"),(0,o.kt)("td",{parentName:"tr",align:"right"},"Supported")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("img",{height:"40",src:"https://www.snowflake.com/wp-content/themes/snowflake/img/snowflake-logo-blue@2x.png"})),(0,o.kt)("td",{parentName:"tr",align:"center"},"Snowflake"),(0,o.kt)("td",{parentName:"tr",align:"right"},"Supported")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("img",{height:"40",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Apache_Spark_logo.svg/1200px-Apache_Spark_logo.svg.png"})),(0,o.kt)("td",{parentName:"tr",align:"center"},"Apache Spark"),(0,o.kt)("td",{parentName:"tr",align:"right"},"Planned")))),(0,o.kt)("p",null,"Using other data warehouses and want it being supported? Or need help with data warehouse setup?"),(0,o.kt)("p",null,"Let us know on ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://join.slack.com/t/re-data/shared_invite/zt-vkauq1y8-tL4R4_H5nZoVvyXyy0hdug"},"Slack! \ud83d\ude0a"))," (we are very responsive there)"))}l.isMDXComponent=!0}}]);