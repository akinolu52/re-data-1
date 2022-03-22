"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[827],{3905:function(t,e,r){r.d(e,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function d(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var p=n.createContext({}),c=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},s=function(t){var e=c(t.components);return n.createElement(p.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,p=t.parentName,s=d(t,["components","mdxType","originalType","parentName"]),u=c(r),m=o,g=u["".concat(p,".").concat(m)]||u[m]||l[m]||a;return r?n.createElement(g,i(i({ref:e},s),{},{components:r})):n.createElement(g,i({ref:e},s))}));function m(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,i=new Array(a);i[0]=u;var d={};for(var p in e)hasOwnProperty.call(e,p)&&(d[p]=e[p]);d.originalType=t,d.mdxType="string"==typeof t?t:o,i[1]=d;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2920:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return d},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],d={sidebar_position:2},p="Loading data",c={unversionedId:"getting_started/example_project-data_monitoring/loading_data",id:"getting_started/example_project-data_monitoring/loading_data",isDocsHomePage:!1,title:"Loading data",description:"If you would like to load toy_shop data to some of your testing DBs, clone our repo//github.com/re-data/re-data",source:"@site/docs/getting_started/example_project-data_monitoring/loading_data.md",sourceDirName:"getting_started/example_project-data_monitoring",slug:"/getting_started/example_project-data_monitoring/loading_data",permalink:"/re-data/feature-0.4-docs-update/docs/getting_started/example_project-data_monitoring/loading_data",editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/getting_started/example_project-data_monitoring/loading_data.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Welcome to a toy shop!",permalink:"/re-data/feature-0.4-docs-update/docs/getting_started/example_project-data_monitoring/toy_shop_data"},next:{title:"Compute first metrics",permalink:"/re-data/feature-0.4-docs-update/docs/getting_started/example_project-data_monitoring/compute_first_metrics"}},s=[],l={toc:s};function u(t){var e=t.components,r=(0,o.Z)(t,i);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"loading-data"},"Loading data"),(0,a.kt)("p",null,"If you would like to load toy_shop data to some of your testing DBs, clone our repo: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/re-data/re-data"},"https://github.com/re-data/re-data"),"\nAnd copy our template of dbt project for this tutorial:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/re-data/re-data\ncd re-data\ncp -r getting_started/toy_shop/ my_toy_shop_tutorial\n")),(0,a.kt)("p",null,"And specify connection to db you would like to use, example postgres connection here:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml",metastring:"title=~/.dbt/profiles.yml",title:"~/.dbt/profiles.yml"},"toy_shop:\n  target: dev\n  outputs:\n    dev:\n      type: postgres\n      host: xxx\n      user: xxx\n      password: xxx\n      port: 5432\n      dbname: xxx\n      schema: toy_shop\n      threads: 4\n")),(0,a.kt)("p",null,"Make sure you can use schema: toy_shop in your DB."),(0,a.kt)("p",null,"Now you are ready to load load data, you can do it with running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"dbt seed\n")))}u.isMDXComponent=!0}}]);