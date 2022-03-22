"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[139],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return p}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=c(r),p=i,f=d["".concat(s,".").concat(p)]||d[p]||u[p]||a;return r?n.createElement(f,o(o({ref:t},m),{},{components:r})):n.createElement(f,o({ref:t},m))}));function p(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4370:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return m},default:function(){return d}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),o=["components"],l={sidebar_position:0,dbt_docs_base_url:"https://re-data.github.io/dbt-re-data"},s="Overview",c={unversionedId:"reference/metrics/overview_metric",id:"reference/metrics/overview_metric",isDocsHomePage:!1,title:"Overview",description:"How metrics look like",source:"@site/docs/reference/metrics/overview_metric.md",sourceDirName:"reference/metrics",slug:"/reference/metrics/overview_metric",permalink:"/fixes-graph-error/docs/reference/metrics/overview_metric",editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/reference/metrics/overview_metric.md",version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,dbt_docs_base_url:"https://re-data.github.io/dbt-re-data"},sidebar:"tutorialSidebar",previous:{title:"Notify",permalink:"/fixes-graph-error/docs/reference/cli/notify"},next:{title:"Base metrics",permalink:"/fixes-graph-error/docs/reference/metrics/base_metrics"}},m=[{value:"How metrics look like",id:"how-metrics-look-like",children:[]},{value:"Time based",id:"time-based",children:[]},{value:"Global",id:"global",children:[]},{value:"Table level",id:"table-level",children:[]},{value:"Column level",id:"column-level",children:[]},{value:"Base",id:"base",children:[]},{value:"Extra",id:"extra",children:[]},{value:"Custom",id:"custom",children:[]}],u={toc:m};function d(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("h2",{id:"how-metrics-look-like"},"How metrics look like"),(0,a.kt)("p",null,"re_data metrics are currently ",(0,a.kt)("em",{parentName:"p"},"just")," expressions which\nare added to select statements run automatically by re_data."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="re_data query"',title:'"re_data','query"':!0},"select metric1, metric2, metric3\nfrom your_table\nwhere data in time_window\n")),(0,a.kt)("p",null,"These simple definitions still make it possible to create a wide variety of metrics.\nIn case metric is more than single sql expression, you can also create them by using sub queries in metric macros (more details in custom metrics section)"),(0,a.kt)("h2",{id:"time-based"},"Time based"),(0,a.kt)("p",null,"We recommend that most of your metrics computed would be time-based (data is then filtered by the ",(0,a.kt)("inlineCode",{parentName:"p"},"time_filter")," specified in the table config.\n",(0,a.kt)("inlineCode",{parentName:"p"},"time_filter")," can be either some date column comparable to timestamp or SQL expression that will be comparable to the timestamp in your data warehouse. ",(0,a.kt)("em",{parentName:"p"},"(And if you think we can shorten this definition to just SQL expression as column name is one, you are right \ud83d\ude0a")),(0,a.kt)("h2",{id:"global"},"Global"),(0,a.kt)("p",null,"In cases when time-based filtering is not possible re_data can compute global metrics for a table. Global metrics don't filter by time and work on data from the whole table. You can pass ",(0,a.kt)("inlineCode",{parentName:"p"},"time_filter: null")," in the re_data table config to compute global metrics."),(0,a.kt)("h2",{id:"table-level"},"Table level"),(0,a.kt)("p",null,"Table level metrics compute stats based on the whole table row, the most simple example of this is ",(0,a.kt)("inlineCode",{parentName:"p"},"row_count")," metric. Your custom table level metrics can use multiple columns when computing the value."),(0,a.kt)("h2",{id:"column-level"},"Column level"),(0,a.kt)("p",null,"Column level metrics are testing a single column of data values. For example, computing maximal value appears in the column. They take column names as an argument, which makes them generic. (you can use them on different columns and different tables)"),(0,a.kt)("h2",{id:"base"},"Base"),(0,a.kt)("p",null,"re_data comes with a set of metrics that are computed by default for all monitored tables. This is controlled by ",(0,a.kt)("inlineCode",{parentName:"p"},"metrics_base"),". By default ",(0,a.kt)("inlineCode",{parentName:"p"},"metrics_base")," variable is defined as:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="re_data:metrics_base:"',title:'"re_data:metrics_base:"'},"  re_data:metrics_base:\n    table:\n      - row_count\n      - freshness\n\n    column:\n      numeric:\n        - min\n        - max\n        - avg\n        - stddev\n        - variance\n        - nulls_count\n        - nulls_percent\n      text:\n        - min_length\n        - max_length\n        - avg_length\n        - nulls_count\n        - missing_count\n        - nulls_percent\n        - missing_percent\n")),(0,a.kt)("p",null,"Definition of all base metrics is available under ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/docs/reference/metrics/base_metrics"},"Base metrics"))," section."),(0,a.kt)("h2",{id:"extra"},"Extra"),(0,a.kt)("p",null,"Apart from base metrics which are computed by default, re_data contains set of macros which can be\ncomputed as extra metrics. Full list of those metrics is available in ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/docs/reference/metrics/extra_metrics"},"Extra metrics"))," section."),(0,a.kt)("h2",{id:"custom"},"Custom"),(0,a.kt)("p",null,"re_data makes it possible to create macros which will compute your own metrics. More information about that in ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/docs/reference/metrics/your_own_metric"},"Custom metrics")),"  section."))}d.isMDXComponent=!0}}]);