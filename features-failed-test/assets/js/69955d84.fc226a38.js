"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[797],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(a),h=r,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||i;return a?n.createElement(m,s(s({ref:t},c),{},{components:a})):n.createElement(m,s({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var d=2;d<i;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9171:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return p}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),s=["components"],o={sidebar_position:3},l="Reliability UI \ud83d\udc40",d={unversionedId:"getting_started/toy_shop/generate_ui",id:"getting_started/toy_shop/generate_ui",title:"Reliability UI \ud83d\udc40",description:"Now let's investigate generated data in re_data UI. We first generate HTML/JSON from the data warehouse and then serve files.",source:"@site/docs/getting_started/toy_shop/generate_ui.md",sourceDirName:"getting_started/toy_shop",slug:"/getting_started/toy_shop/generate_ui",permalink:"/features-failed-test/docs/getting_started/toy_shop/generate_ui",editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/getting_started/toy_shop/generate_ui.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Reliability data",permalink:"/features-failed-test/docs/getting_started/toy_shop/compute_monitoring"},next:{title:"Notifications",permalink:"/features-failed-test/docs/getting_started/toy_shop/notifications"}},c={},p=[{value:"Alerts",id:"alerts",level:2},{value:"Schema Changes",id:"schema-changes",level:2},{value:"Lineage",id:"lineage",level:2},{value:"Tests",id:"tests",level:2},{value:"Tables",id:"tables",level:2}],u={toc:p};function h(e){var t=e.components,o=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"reliability-ui-"},"Reliability UI \ud83d\udc40"),(0,i.kt)("p",null,"Now let's investigate generated data in re_data UI. We first generate HTML/JSON from the data warehouse and then serve files."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"re_data overview generate --start-date 2021-01-01 --interval days:1\nre_data overview serve\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"We don't pass --end-date to ",(0,i.kt)("inlineCode",{parentName:"p"},"re_data overview generate")," and this is causing re_data to use the default (today). We generate for this whole period to get also tests history (just ran) displayed"))),(0,i.kt)("p",null,"After running these commands you should be able to see views similar to those:"),(0,i.kt)("h2",{id:"alerts"},"Alerts"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"GraphExample",src:a(4001).Z,width:"1586",height:"859"})),(0,i.kt)("p",null,"Alerts view lets you see if there are any problems currently detected in your data.\nre_data compares past & current metric computed using ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://en.wikipedia.org/wiki/Standard_score"},"z_score"))," to determinate if value is suspicious."),(0,i.kt)("p",null,"From the alerts view, you can go to learn more details about specific alerts in the graph view."),(0,i.kt)("h2",{id:"schema-changes"},"Schema Changes"),(0,i.kt)("p",null,"The alerts view also shows any schema changes detected. These schema changes include detecting when columns were added, removed or had its type changed. For tutorial purposes, we modify using the schema of the orders table using macros included in the default template."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# this operation adds a column to the orders table\ndbt run-operation schema_change_add_orders_column\n# run re_data models to detect the column added schema change\nre_data run\n# this operation drops the column added earlier\ndbt run-operation schema_change_drop_orders_column\n# re-run re_data models to detect the removed column\nre_data run\n")),(0,i.kt)("p",null,"Regenerating the user interface shows:"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"AlertsWithSchemaChanges",src:a(6276).Z,width:"1587",height:"862"})),(0,i.kt)("h2",{id:"lineage"},"Lineage"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"GraphExample",src:a(7812).Z,width:"1587",height:"863"})),(0,i.kt)("p",null,"Lineage view lets you investigate anomalies, metrics & schema changes on top of the dbt lineage graph."),(0,i.kt)("h2",{id:"tests"},"Tests"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"GraphExample",src:a(3217).Z,width:"1588",height:"862"})),(0,i.kt)("p",null,"Tests view lets you see history of all dbt tests run. (re_data comes with a ",(0,i.kt)("inlineCode",{parentName:"p"},"save_test_history")," macro which when passed into ",(0,i.kt)("inlineCode",{parentName:"p"},"on-run-end")," dbt configuration, saves tests history into the data warehouse)"),(0,i.kt)("h2",{id:"tables"},"Tables"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"GraphExample",src:a(9282).Z,width:"1587",height:"860"})),(0,i.kt)("p",null,"Tables view lets you investigate any table easily. Check out for anomalies, metrics, tests related to it."),(0,i.kt)("p",null,"In the next section, let's see how we can notify ourselves about problems in the data"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("h3",{parentName:"div",id:"something-didnt-worked-as-expected"},"Something didn't worked as expected?"),(0,i.kt)("p",{parentName:"div"},"If you have more questions, got stuck anywhere, or something is not working as expected, please let us know on ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://www.getre.io/slack"},"Slack! \ud83d\ude0a")),", we will help you asap, and it will help us improve this quick start guide."))))}h.isMDXComponent=!0},4001:function(e,t,a){t.Z=a.p+"assets/images/alerts-ffdf36e7faf7e72388f2c4a84ea7fc43.png"},6276:function(e,t,a){t.Z=a.p+"assets/images/alerts_with_schema_changes-b2299949dd47540cd9ccfdeef58241f6.png"},7812:function(e,t,a){t.Z=a.p+"assets/images/graph-9b350274adfb40bc5c806d7ae9d54c49.png"},9282:function(e,t,a){t.Z=a.p+"assets/images/tables-63cbc57bd8f1158b6a895fbea9a24412.png"},3217:function(e,t,a){t.Z=a.p+"assets/images/tests-692afa30c97d5c95c361c7a5a64fba17.png"}}]);