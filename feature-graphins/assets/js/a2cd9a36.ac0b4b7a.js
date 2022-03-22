"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[382],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(n),d=r,h=f["".concat(c,".").concat(d)]||f[d]||p[d]||a;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3231:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return f}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:4},c="Notifications",l={unversionedId:"getting_started/toy_shop/notifications",id:"getting_started/toy_shop/notifications",isDocsHomePage:!1,title:"Notifications",description:"Notifications are a great way to stay up to date with activities in your warehouse. You can let re_data send you notifications for alerts that occured within a specified date range.",source:"@site/docs/getting_started/toy_shop/notifications.md",sourceDirName:"getting_started/toy_shop",slug:"/getting_started/toy_shop/notifications",permalink:"/feature-graphins/docs/getting_started/toy_shop/notifications",editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/getting_started/toy_shop/notifications.md",version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Reliability UI \ud83d\udc40",permalink:"/feature-graphins/docs/getting_started/toy_shop/generate_ui"},next:{title:"Configuration \u2699\ufe0f",permalink:"/feature-graphins/docs/reference/config"}},u=[{value:"Slack",id:"slack",children:[]},{value:"Want to learn more?",id:"want-to-learn-more",children:[]}],p={toc:u};function f(e){var t=e.components,s=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"notifications"},"Notifications"),(0,a.kt)("p",null,"Notifications are a great way to stay up to date with activities in your warehouse. You can let re_data send you notifications for alerts that occured within a specified date range."),(0,a.kt)("p",null,"re_data currently supports the following channels for notifications."),(0,a.kt)("h2",{id:"slack"},"Slack"),(0,a.kt)("p",null,"To send alerts to a slack channel, we make use of ",(0,a.kt)("a",{parentName:"p",href:"https://api.slack.com/messaging/webhooks"},"incoming webhooks")," which is a simple way to post messages from apps into Slack."),(0,a.kt)("p",null,"The steps required to enable incoming webhooks and get started can be found in the slack ",(0,a.kt)("a",{parentName:"p",href:"https://api.slack.com/messaging/webhooks#enable_webhooks"},"API docs"),". Once you have created an incoming webhook successfully, you should see a new entry under Webhook URLs for Your Workspace section, with a Webhook URL that'll look something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX\n")),(0,a.kt)("p",null,"The webhook url can now be used with the re_data notify command as shown below,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'re_data notify slack \\\n--start-date 2021-01-01 \\\n--end-date 2021-01-31 \\\n--webhook-url https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX \\\n--subtitle="[Optional] Markdown text to be added as a subtitle in the slack message generated"\n')),(0,a.kt)("p",null,"Below is a sample alert notification message sent by a slack app created."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"SlackMessage",src:n(652).Z})),(0,a.kt)("p",null,"By default, the most recent 20 alerts are shown and you can generate the Observability UI to show more details relating to alerts."),(0,a.kt)("h2",{id:"want-to-learn-more"},"Want to learn more?"),(0,a.kt)("p",null,"Check out the rest of re_data docs, or ask as on ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://www.getre.io/slack"},"Slack! \ud83d\ude0a"))," (we are very responsive there)"))}f.isMDXComponent=!0},652:function(e,t,n){t.Z=n.p+"assets/images/slack_notification_message-0b079ae996c188c4b56b0644fc5f2fe2.png"}}]);