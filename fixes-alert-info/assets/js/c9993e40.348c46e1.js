"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[994],{3905:function(t,e,r){r.d(e,{Zo:function(){return d},kt:function(){return f}});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var c=a.createContext({}),u=function(t){var e=a.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},d=function(t){var e=u(t.components);return a.createElement(c.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,c=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),p=u(r),f=n,h=p["".concat(c,".").concat(f)]||p[f]||l[f]||o;return r?a.createElement(h,i(i({ref:e},d),{},{components:r})):a.createElement(h,i({ref:e},d))}));function f(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:n,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5097:function(t,e,r){r.r(e),r.d(e,{contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),i=["components"],s={sidebar_position:1},c="What is re_data?",u={unversionedId:"introduction/whatis",id:"introduction/whatis",isDocsHomePage:!1,title:"What is re_data?",description:"re_data is an open-source data reliability framework for modern data stack. \ud83d\ude0a",source:"@site/docs/introduction/whatis.md",sourceDirName:"introduction",slug:"/introduction/whatis",permalink:"/fixes-alert-info/docs/introduction/whatis",editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/introduction/whatis.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Integrations",permalink:"/fixes-alert-info/docs/introduction/integrations"}},d=[{value:"Alerts",id:"alerts",children:[]},{value:"Metrics",id:"metrics",children:[]},{value:"Tests",id:"tests",children:[]},{value:"Lineage",id:"lineage",children:[]},{value:"Macros",id:"macros",children:[]},{value:"Notifications",id:"notifications",children:[]}],l={toc:d};function p(t){var e=t.components,s=(0,n.Z)(t,i);return(0,o.kt)("wrapper",(0,a.Z)({},l,s,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"what-is-re_data"},"What is re_data?"),(0,o.kt)("p",null,"re_data is an open-source data reliability framework for modern data stack. \ud83d\ude0a"),(0,o.kt)("p",null,"Currently, re_data focuses on observing the dbt project (together with underlaying data warehouse - Postgres, BigQuery, Snowflake, Redshift)."),(0,o.kt)("h1",{id:"live-demo"},"Live demo"),(0,o.kt)("p",null,"Check out our ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://re-data.github.io/re-data/ui-latest/#/alerts"},"live demo"))," of what re_data can do for you! \ud83d\ude0a"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"GraphExample",src:r(5661).Z})),(0,o.kt)("h1",{id:"features"},"Features"),(0,o.kt)("h2",{id:"alerts"},"Alerts"),(0,o.kt)("p",null,"Get information about suspicious data patterns & schema changes automatically. re_data detects trends in your data and creates alerts if something seems suspicious."),(0,o.kt)("h2",{id:"metrics"},"Metrics"),(0,o.kt)("p",null,"Monitor predefined and custom metrics about your data. All metrics are stored in your database and accessible for you. re_data custom metrics can be standard dbt macros which make it very easy to add them to your project."),(0,o.kt)("h2",{id:"tests"},"Tests"),(0,o.kt)("p",null,"re_data stores dbt test history making it easier to inspect it.\nApart from that re_data ships with a set of generic dbt tests which can be used to assert that metrics computed are meeting your assumptions."),(0,o.kt)("h2",{id:"lineage"},"Lineage"),(0,o.kt)("p",null,"re_data shows data lineage for your data warehouse. (This is imported from the dbt graph). You can navigate your data & investigate alerts & metrics related to each node in the graph."),(0,o.kt)("h2",{id:"macros"},"Macros"),(0,o.kt)("p",null,"re_data ships with a set of macros to save you time and some pain of writing code for cleaning / normalizing / validating your data. Use them to make your project cleaner \ud83d\ude0a. You can also use them as a base for your own metrics or data tests."),(0,o.kt)("h2",{id:"notifications"},"Notifications"),(0,o.kt)("p",null,"re_data sends notifications about suspicious data patterns, schema changes to your Slack so you can react quickly and fix the issues."),(0,o.kt)("h1",{id:"getting-started"},"Getting started"),(0,o.kt)("p",null,"re_data is very easy to add to existing dbt projects. Check out ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/getting_started/installation/for_dbt_users"},"installation"))," instructions and follow ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/getting_started/toy_shop/toy_shop_data"},"toy shop"))," tutorial to see how you can generate re_data reliability data & UI for your data warehouse."),(0,o.kt)("p",null,"If you are not using dbt, re_data can still be a great option to start monitoring your existing tables. Check out installation for new users: ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/getting_started/installation/new_to_dbt"},"new to dbt"))," in this case."),(0,o.kt)("p",null,"Have more questions? Check out the rest of re_data docs, or ask as on ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://www.getre.io/slack"},"Slack! \ud83d\ude0a"))," (we are very responsive there)"))}p.isMDXComponent=!0},5661:function(t,e,r){e.Z=r.p+"assets/images/graph-e012e8062166c0a5be0e380b7b3f7e01.png"}}]);