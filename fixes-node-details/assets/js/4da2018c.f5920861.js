"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[606],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),f=a,g=p["".concat(s,".").concat(f)]||p[f]||u[f]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2246:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:1},s="Installation for dbt users",d={unversionedId:"getting_started/installation/for_dbt_users",id:"getting_started/installation/for_dbt_users",isDocsHomePage:!1,title:"Installation for dbt users",description:"If you are already using dbt in your company, you can install re_data by adding our dbthub package to your project.",source:"@site/docs/getting_started/installation/for_dbt_users.md",sourceDirName:"getting_started/installation",slug:"/getting_started/installation/for_dbt_users",permalink:"/fixes-node-details/docs/getting_started/installation/for_dbt_users",editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/getting_started/installation/for_dbt_users.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Integrations",permalink:"/fixes-node-details/docs/introduction/integrations"},next:{title:"Installation for starters",permalink:"/fixes-node-details/docs/getting_started/installation/new_to_dbt"}},c=[{value:"Adding re_data to packages used",id:"adding-re_data-to-packages-used",children:[]},{value:"Adding re_data python package for reliability UI",id:"adding-re_data-python-package-for-reliability-ui",children:[]}],u={toc:c};function p(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"installation-for-dbt-users"},"Installation for dbt users"),(0,i.kt)("p",null,"If you are already using dbt in your company, you can install re_data by adding our dbthub package to your project."),(0,i.kt)("h2",{id:"adding-re_data-to-packages-used"},"Adding re_data to packages used"),(0,i.kt)("p",null,"Simply update your ",(0,i.kt)("inlineCode",{parentName:"p"},"packages.yml")," file with re_data package"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="packages.yml"',title:'"packages.yml"'},'\npackages:\n    ***\n    \n    - package: re-data/re_data\n      version: [">=0.6.0", "<0.7.0"]\n\n')),(0,i.kt)("p",null,"And run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"dbt deps\n")),(0,i.kt)("h2",{id:"adding-re_data-python-package-for-reliability-ui"},"Adding re_data python package for reliability UI"),(0,i.kt)("p",null,"To generate re_data reliability UI you need to install re_data python packge. You can do it simply like that:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pip install re_data\n")))}p.isMDXComponent=!0}}]);