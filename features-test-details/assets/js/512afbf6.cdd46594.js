"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[964],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return p}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=d(a),p=n,h=m["".concat(s,".").concat(p)]||m[p]||u[p]||i;return a?r.createElement(h,o(o({ref:t},l),{},{components:a})):r.createElement(h,o({ref:t},l))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var d=2;d<i;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6699:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return u}});var r=a(7462),n=a(3366),i=(a(7294),a(3905)),o=["components"],c={sidebar_position:2,dbt_docs_base_url:"https://re-data.github.io/dbt-re-data"},s="Extra Metrics",d={unversionedId:"reference/metrics/extra_metrics",id:"reference/metrics/extra_metrics",title:"Extra Metrics",description:"There are metrics provided by redata but are not computed by default in monitored tables. You can enable them by updating the configuration for the specific table. You can also make the base metrics by adding them to redata:metrics_base.",source:"@site/docs/reference/metrics/extra_metrics.md",sourceDirName:"reference/metrics",slug:"/reference/metrics/extra_metrics",permalink:"/features-test-details/docs/reference/metrics/extra_metrics",editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/reference/metrics/extra_metrics.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,dbt_docs_base_url:"https://re-data.github.io/dbt-re-data"},sidebar:"tutorialSidebar",previous:{title:"Base metrics",permalink:"/features-test-details/docs/reference/metrics/base_metrics"},next:{title:"Your custom metrics",permalink:"/features-test-details/docs/reference/metrics/your_own_metric"}},l={},u=[{value:"Extra Table Metrics",id:"extra-table-metrics",level:2},{value:"distinct_table_rows",id:"distinct_table_rows",level:3},{value:"(source code)",id:"source-code",level:4},{value:"Extra Column Metrics",id:"extra-column-metrics",level:2},{value:"match_regex",id:"match_regex",level:3},{value:"(source code)",id:"source-code-1",level:4},{value:"match_regex_percent",id:"match_regex_percent",level:3},{value:"(source code)",id:"source-code-2",level:4},{value:"not_match_regex",id:"not_match_regex",level:3},{value:"(source code)",id:"source-code-3",level:4},{value:"distinct_values",id:"distinct_values",level:3},{value:"(source code)",id:"source-code-4",level:4},{value:"duplicate_values",id:"duplicate_values",level:3},{value:"(source code)",id:"source-code-5",level:4},{value:"duplicate_rows",id:"duplicate_rows",level:3},{value:"(source code)",id:"source-code-6",level:4},{value:"unique_rows",id:"unique_rows",level:3},{value:"(source code)",id:"source-code-7",level:4},{value:"approx_distinct_values",id:"approx_distinct_values",level:3},{value:"(source code)",id:"source-code-8",level:4}],m={toc:u};function p(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"extra-metrics"},"Extra Metrics"),(0,i.kt)("p",null,"There are metrics provided by re_data but are not computed by default in monitored tables. You can enable them by updating the configuration for the specific table. You can also make the base metrics by adding them to ",(0,i.kt)("inlineCode",{parentName:"p"},"re_data:metrics_base"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv",metastring:'title="Sample table for which we compute extra metrics"',title:'"Sample',table:!0,for:!0,which:!0,we:!0,compute:!0,extra:!0,'metrics"':!0},"__      title               rental_rate rating      created_at\n1       Chamber Italian     4.99        NC-17       2021-09-01T11:00:00\n2       Grosse Wonderful    4.99        R           2021-09-01T12:00:00\n3       Airport Pollock     4.99        R           2021-09-01T15:00:00\n4       Bright Encounters   4.99        PG-13       2021-09-01T09:00:00\n5       Academy Dinosaur    0.99        PG-13       2021-09-01T08:00:00\n6       Ace Goldfinger      4.99        G           2021-09-01T10:00:00\n7       Adaptation Holes    2.99        NC-17       2021-09-01T11:00:00\n8       Affair Prejudice    2.99        G           2021-09-01T19:00:00\n9       African Egg         2.99        G           2021-09-01T20:00:00\n10      Agent Truman        2.99        PG          2021-09-01T07:00:00\n11      Airplane Sierra     4.99        PG-13       2021-09-02T09:00:00\n12      Alabama Devil       2.99        PG-13       2021-09-02T10:00:00\n13      Aladdin Calendar    4.99        NC-17       2021-09-02T11:00:00\n14      Alamo Videotape     0.99        G           2021-09-02T12:00:00\n15      Alaska Phantom      0.99        PG          2021-09-02T13:00:00\n16      Date Speed          0.99        R           2021-09-02T14:00:00\n17      Ali Forever         4.99        PG          2021-09-02T15:00:00\n18      Alice Fantasia      0.99        NC-17       2021-09-02T16:00:00\n19      Alien Center        2.99        NC-17       2021-09-02T17:00:00\n")),(0,i.kt)("h2",{id:"extra-table-metrics"},"Extra Table Metrics"),(0,i.kt)("h3",{id:"distinct_table_rows"},"distinct_table_rows"),(0,i.kt)("h4",{id:"source-code"},(0,i.kt)("a",{parentName:"h4",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_distinct_table_rows"},"(source code)")),(0,i.kt)("p",null,"This metric computes the distinct number of rows in the given table"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"time window is >= 2021-09-01T00:00:00 and < 2021-09-02T00:00:00\ndistinct_rows = 10\n")),(0,i.kt)("h2",{id:"extra-column-metrics"},"Extra Column Metrics"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.regex_match_expression"},(0,i.kt)("inlineCode",{parentName:"a"},"regex_match_expression"))," is resolved at runtime depending on the database in use."))),(0,i.kt)("h3",{id:"match_regex"},"match_regex"),(0,i.kt)("h4",{id:"source-code-1"},(0,i.kt)("a",{parentName:"h4",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_match_regex"},"(source code)")),(0,i.kt)("p",null,"Determines the count of values in a given column that matches the specified regex. Suppose we want to check if\nthe rating column matches a specific regular expression pattern and we define it in our dbt_project.yml file."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"regex")," ",(0,i.kt)("strong",{parentName:"li"},"must")," be specified for this metric to work else a compiler exception would be raised.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="specifying match_regex config"',title:'"specifying',match_regex:!0,'config"':!0},"vars:\n  re_data:monitored:\n    - tables:\n        - name: sample_table\n          time_filter: created_at\n\n          metrics:\n            column:\n              rating:\n                - match_regex:\n                    regex: ([0-9]+)\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select coalesce(\n        sum(\n            case when {{ regex_match_expression('rating', '([0-9]+)') }}\n                then 1\n            else 0\n            end\n        ), 0\n    ) from your_table\nwhere created_at between time_window_start and time_window_end\n\n------------------------------------------------------------------------\n1       Chamber Italian     4.99        NC-17       2021-09-01T11:00:00\n4       Bright Encounters   4.99        PG-13       2021-09-01T09:00:00\n5       Academy Dinosaur    0.99        PG-13       2021-09-01T08:00:00\n7       Adaptation Holes    2.99        NC-17       2021-09-01T11:00:00\n\nmatch_regex = 4 where created_at is between 2021-09-01T00:00:00 and 2021-09-02T00:00:00\n")),(0,i.kt)("h3",{id:"match_regex_percent"},"match_regex_percent"),(0,i.kt)("h4",{id:"source-code-2"},(0,i.kt)("a",{parentName:"h4",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_match_regex_percent"},"(source code)")),(0,i.kt)("p",null,"Determines the percentage of values in a given column that matches the specified regex."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Suppose we use the same configuration for the match_regex metric above, we have\nmatch_regex_percent = 40 where created_at is between 2021-09-01T00:00:00 and 2021-09-02T00:00:00\n")),(0,i.kt)("h3",{id:"not_match_regex"},"not_match_regex"),(0,i.kt)("h4",{id:"source-code-3"},(0,i.kt)("a",{parentName:"h4",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_not_match_regex"},"(source code)")),(0,i.kt)("p",null,"Determines the count of values in a given column that does ",(0,i.kt)("strong",{parentName:"p"},"not")," match the specified regex."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Suppose we pass in ([0-9]+) as our regex parameter,\nnot_match_regex = 6 where created_at is between 2021-09-01T00:00:00 and 2021-09-02T00:00:00\n")),(0,i.kt)("h3",{id:"distinct_values"},"distinct_values"),(0,i.kt)("h4",{id:"source-code-4"},(0,i.kt)("a",{parentName:"h4",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_distinct_values"},"(source code)")),(0,i.kt)("p",null,"Determines the count of values in a given column that are unique."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"rating  count\n-----------------\nPG-13   2\nG       3\nNC-17   2\nPG      1\nR       2\ntime window is >= 2021-09-01T00:00:00 and < 2021-09-02T00:00:00\ndistinct_values = 5. (PG)\n")),(0,i.kt)("h3",{id:"duplicate_values"},"duplicate_values"),(0,i.kt)("h4",{id:"source-code-5"},(0,i.kt)("a",{parentName:"h4",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_duplicate_values"},"(source code)")),(0,i.kt)("p",null,"Determines the count of values in a given column that are duplicated."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"rating  count\n-----------------\nPG-13   2\nG       3\nNC-17   2\nPG      1\nR       2\n\ntime window is >= 2021-09-01T00:00:00 and < 2021-09-02T00:00:00\nduplicate_values = 4. (PG-13, G, NC-17, R)\n")),(0,i.kt)("h3",{id:"duplicate_rows"},"duplicate_rows"),(0,i.kt)("h4",{id:"source-code-6"},(0,i.kt)("a",{parentName:"h4",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_duplicate_rows"},"(source code)")),(0,i.kt)("p",null,"Determines the count of rows in a given column that have values which are duplicates."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"rating  count\n-----------------\nPG-13   2\nG       3\nNC-17   2\nPG      1\nR       2\n\ntime window is >= 2021-09-01T00:00:00 and < 2021-09-02T00:00:00\nduplicate_count = 9. (PG-13[2], G[3], NC-17[2], R[2])\n")),(0,i.kt)("h3",{id:"unique_rows"},"unique_rows"),(0,i.kt)("h4",{id:"source-code-7"},(0,i.kt)("a",{parentName:"h4",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_unique_rows"},"(source code)")),(0,i.kt)("p",null,"Determines the count of rows in a given column that have values which are unique."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"rating  count\n-----------------\nPG-13   2\nG       3\nNC-17   2\nPG      1\nR       2\n\ntime window is >= 2021-09-01T00:00:00 and < 2021-09-02T00:00:00\ndistinct_count = 1 (PG)\n")),(0,i.kt)("h3",{id:"approx_distinct_values"},"approx_distinct_values"),(0,i.kt)("h4",{id:"source-code-8"},(0,i.kt)("a",{parentName:"h4",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_approx_distinct_values"},"(source code)")),(0,i.kt)("p",null,"Determines the approximate distinct count of values in a given column. This metric is useful in large tables where an approximation is sufficient and query performance is required. ",(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"Note:")," Postgres does not support for approximate count of distinct values unlike ",(0,i.kt)("a",{parentName:"p",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.bigquery__approx_distinct_values"},"bigquery"),", ",(0,i.kt)("a",{parentName:"p",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.snowflake__approx_distinct_values"},"snowflake")," and ",(0,i.kt)("a",{parentName:"p",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.redshift__approx_distinct_values"},"redshift"),"."))}p.isMDXComponent=!0}}]);