"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[629],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(r),d=i,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||s;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=r.length,a=new Array(s);a[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var l=2;l<s;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9449:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return m}});var n=r(7462),i=r(3366),s=(r(7294),r(3905)),a=["components"],o={sidebar_position:2},c="Testing metrics",l={unversionedId:"reference/tests/metrics",id:"reference/tests/metrics",title:"Testing metrics",description:"redata models (specifically redata_metrics model) can be tested like any other dbt model. Because of the nature of metrics we created a couple of custom tests to help you with metrics testing.",source:"@site/docs/reference/tests/metrics.md",sourceDirName:"reference/tests",slug:"/reference/tests/metrics",permalink:"/features-test-details/docs/reference/tests/metrics",editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/reference/tests/metrics.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Tests history",permalink:"/features-test-details/docs/reference/tests/history"},next:{title:"Data Cleaning",permalink:"/features-test-details/docs/reference/macros/data_cleaning"}},u={},m=[{value:"Built-in metrics tests",id:"built-in-metrics-tests",level:2},{value:"metric_expression_is_true",id:"metric_expression_is_true",level:3},{value:"metric_equal_to",id:"metric_equal_to",level:3},{value:"metric_in_range",id:"metric_in_range",level:3},{value:"Other test use cases",id:"other-test-use-cases",level:2}],p={toc:m};function d(e){var t=e.components,r=(0,i.Z)(e,a);return(0,s.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"testing-metrics"},"Testing metrics"),(0,s.kt)("p",null,"re_data models (specifically ",(0,s.kt)("inlineCode",{parentName:"p"},"re_data_metrics")," model) can be tested like any other dbt model. Because of the nature of metrics we created a couple of custom tests to help you with metrics testing."),(0,s.kt)("p",null,"Here is an example of metrics tests"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="models/metrics/re_data_metrics.yml"',title:'"models/metrics/re_data_metrics.yml"'},"version: 2\n\nmodels:\n  - name: re_data_metrics\n    tests:\n      - re_data.metric_expression_is_true:\n          table: ref('buy_events')\n          metric: max_length\n          column_name: event_type\n          expression: value = 3\n\n      - re_data.metric_equal_to:\n          table: ref('buy_events')\n          metric: max_length\n          column_name: event_type\n          value: 3\n\n      - re_data.metric_in_range:\n          table: ref('buy_events')\n          metric: max_length\n          column_name: event_type\n          min_value: 3\n          max_value: 3\n\n      - re_data.metric_expression_is_true:\n          table: ref('buy_events')\n          metric: row_count\n          expression: value > 0 and value < 10\n          condition: time_window_start >= '2021-05-02'\n")),(0,s.kt)("h2",{id:"built-in-metrics-tests"},"Built-in metrics tests"),(0,s.kt)("h3",{id:"metric_expression_is_true"},"metric_expression_is_true"),(0,s.kt)("p",null,"Most flexible test. It accepts:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"table - which should be a ref to model which metrics we want to test"),(0,s.kt)("li",{parentName:"ul"},"metric - name of the metric"),(0,s.kt)("li",{parentName:"ul"},"column_name - the name of column (you should skip this for table_level metrics)"),(0,s.kt)("li",{parentName:"ul"},"condition - filtering condition, when you only want to tests only metrics for a limited time window."),(0,s.kt)("li",{parentName:"ul"},"expression - any expression, as re_data_metrics stores metric value in ",(0,s.kt)("inlineCode",{parentName:"li"},"value")," column \ud83d\ude0a You would usually write some expression with ",(0,s.kt)("inlineCode",{parentName:"li"},"value")," column used.")),(0,s.kt)("h3",{id:"metric_equal_to"},"metric_equal_to"),(0,s.kt)("p",null,"Simple shortcut which lets you check if the metric has one specific value"),(0,s.kt)("h3",{id:"metric_in_range"},"metric_in_range"),(0,s.kt)("p",null,"Simple shortcut which lets you check if metric values are in the range"),(0,s.kt)("h2",{id:"other-test-use-cases"},"Other test use cases"),(0,s.kt)("p",null,"If you would like us to add some other tests, information about tests history, etc., join ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"https://www.getre.io/slack"},"Slack! \ud83d\ude0a"))," and let us know! \ud83d\ude0a"))}d.isMDXComponent=!0}}]);