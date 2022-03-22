"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[94],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return _}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(n),_=r,m=c["".concat(l,".").concat(_)]||c[_]||u[_]||a;return n?o.createElement(m,s(s({ref:t},d),{},{components:n})):o.createElement(m,s({ref:t},d))}));function _(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9819:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),s=["components"],i={sidebar_position:2},l="Reliability data",p={unversionedId:"getting_started/toy_shop/compute_monitoring",id:"getting_started/toy_shop/compute_monitoring",isDocsHomePage:!1,title:"Reliability data",description:"Now, let's compute the first health data. We will use the redata configuration already defined in the project. Check it out **in our repo**",source:"@site/docs/getting_started/toy_shop/compute_monitoring.md",sourceDirName:"getting_started/toy_shop",slug:"/getting_started/toy_shop/compute_monitoring",permalink:"/features-react-flow/docs/getting_started/toy_shop/compute_monitoring",editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/getting_started/toy_shop/compute_monitoring.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Welcome to a toy shop!",permalink:"/features-react-flow/docs/getting_started/toy_shop/toy_shop_data"},next:{title:"Reliability UI \ud83d\udc40",permalink:"/features-react-flow/docs/getting_started/toy_shop/generate_ui"}},d=[{value:"First re_data run",id:"first-re_data-run",children:[]},{value:"re_data run for ten first days of January",id:"re_data-run-for-ten-first-days-of-january",children:[]},{value:"Looking into anomalies",id:"looking-into-anomalies",children:[]},{value:"Running tests",id:"running-tests",children:[]}],u={toc:d};function c(e){var t=e.components,n=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"reliability-data"},"Reliability data"),(0,a.kt)("p",null,"Now, let's compute the first health data. We will use the re_data configuration already defined in the project. Check it out ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/re-data/re-data/blob/master/getting_started/toy_shop/dbt_project.yml"},"in our repo"))),(0,a.kt)("h2",{id:"first-re_data-run"},"First re_data run"),(0,a.kt)("p",null,"We choose to run re_data for the first day of 2021:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'dbt run --models package:re_data --vars \\\n   \'{\n     "re_data:time_window_start": "2021-01-01 00:00:00",\n     "re_data:time_window_end": "2021-01-02 00:00:00"\n    }\'\n')),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Note, if we don't pass time window parameters re_data will compute stats for the previous day."))),(0,a.kt)("p",null,"This computes metrics for the monitored tables. Let's just see how many customers/order_items/orders we have added in on 01-01-2021."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="Viewing computed metrics"',title:'"Viewing',computed:!0,'metrics"':!0},'select table_name, metric, value from toy_shop_re.re_data_metrics where metric in( \'row_count\', \'global__row_count\');\n\n                     table_name                     |      metric       | value\n----------------------------------------------------+-------------------+-------\n "postgres"."toy_shop"."orders_per_age"             | row_count         |   475\n "postgres"."toy_shop"."companies"                  | global__row_count |    49\n "postgres"."toy_shop"."pending_orders"             | row_count         |   162\n "postgres"."toy_shop"."order_items"                | row_count         |   661\n "postgres"."toy_shop"."revenue_per_age"            | row_count         |   149\n "postgres"."toy_shop"."orders"                     | row_count         |   475\n "postgres"."toy_shop_sources"."toy_shop_customers" | row_count         |    14\n')),(0,a.kt)("h2",{id:"re_data-run-for-ten-first-days-of-january"},"re_data run for ten first days of January"),(0,a.kt)("p",null,"On production, we would set up re_data to run daily/hourly/etc. For toy shop, by using the re_data python package command we backfill daily data for the past."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"re_data run --start-date 2021-01-01 --end-date 2021-01-11\n")),(0,a.kt)("h2",{id:"looking-into-anomalies"},"Looking into anomalies"),(0,a.kt)("p",null,"And now let's look into the ",(0,a.kt)("inlineCode",{parentName:"p"},"alerting")," table to see if ",(0,a.kt)("inlineCode",{parentName:"p"},"re_data")," found anything suspicious for us:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="Viewing computed anomalies"',title:'"Viewing',computed:!0,'anomalies"':!0},'\nselect table_name, metric, z_score_value, last_value, time_window_end from toy_shop_re.re_data_anomalies;\n\n\n                     table_name                     |     metric      |    z_score_value    |     last_value     |   time_window_end\n----------------------------------------------------+-----------------+---------------------+--------------------+---------------------\n "postgres"."toy_shop"."orders_per_age"             | row_count       | -2.0813250940629247 |                447 | 2021-01-09 00:00:00\n "postgres"."toy_shop"."orders"                     | row_count       | -2.0813250940629247 |                447 | 2021-01-09 00:00:00\n "postgres"."toy_shop"."orders_per_age"             | min             |  2.8460498932515366 |                 51 | 2021-01-11 00:00:00\n "postgres"."toy_shop"."orders_per_age"             | nulls_percent   |  2.8460498934090412 | 1.2121212121212122 | 2021-01-11 00:00:00\n "postgres"."toy_shop"."orders_per_age"             | min_length      |  -2.846049893701541 |                  2 | 2021-01-11 00:00:00\n "postgres"."toy_shop"."orders_per_age"             | avg_length      |   -2.20745908506349 | 6.4363636363636365 | 2021-01-11 00:00:00\n "postgres"."toy_shop"."orders"                     | min             |  2.8460498932515366 |                 51 | 2021-01-11 00:00:00\n "postgres"."toy_shop"."orders"                     | nulls_percent   |  2.8460498934090412 | 1.2121212121212122 | 2021-01-11 00:00:00\n "postgres"."toy_shop"."orders"                     | min_length      |  -2.846049893701541 |                  2 | 2021-01-11 00:00:00\n "postgres"."toy_shop"."orders"                     | avg_length      |   -2.20745908506349 | 6.4363636363636365 | 2021-01-11 00:00:00\n "postgres"."toy_shop"."orders"                     | distinct_values |  2.8460498940015415 |                  9 | 2021-01-11 00:00:00\n "postgres"."toy_shop_sources"."toy_shop_customers" | row_count       |  2.0283702112970112 |                 25 | 2021-01-11 00:00:00\n')),(0,a.kt)("p",null,"We can see there are a couple of things re_data flagged for us."),(0,a.kt)("h2",{id:"running-tests"},"Running tests"),(0,a.kt)("p",null,"Before moving on and investigating it in re_data UI. Let's run tests to see if they point to any problems in our data:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Running tests"',title:'"Running','tests"':!0},"$ dbt test --select package:toy_shop\n\n...\n\n10:40:49  Finished running 31 tests, 1 hook in 5.43s.\n10:40:49\n10:40:49  Completed with 3 errors and 0 warnings:\n10:40:49\n10:40:49  Failure in test accepted_values_orders_status__pending__shipped__delivered__not_paid__paid (seeds/schema.yml)\n10:40:49    Got 6 results, configured to fail if != 0\n10:40:49\n10:40:49    compiled SQL at target/compiled/toy_shop/seeds/schema.yml/accepted_values_orders_a63e7616d678ec9b14b0f2b1cb0f332a.sql\n10:40:49\n10:40:49  Failure in test not_null_orders_amount (seeds/schema.yml)\n10:40:49    Got 6 results, configured to fail if != 0\n10:40:49\n10:40:49    compiled SQL at target/compiled/toy_shop/seeds/schema.yml/not_null_orders_amount.sql\n10:40:49\n10:40:49  Failure in test source_not_null_toy_shop_sources_toy_shop_customers_age (sources/schema.yml)\n10:40:49    Got 94 results, configured to fail if != 0\n10:40:49\n10:40:49    compiled SQL at target/compiled/toy_shop/sources/schema.yml/source_not_null_toy_shop_sources_toy_shop_customers_age.sql\n10:40:49\n10:40:49  Done. PASS=28 WARN=0 ERROR=3 SKIP=0 TOTAL=31\n\n")),(0,a.kt)("p",null,"Ok, so some of the tests are failing. At least they should fail for you ... \ud83d\ude0a"),(0,a.kt)("p",null,"Let's move to the next chapter and investigate what's going on."))}c.isMDXComponent=!0}}]);