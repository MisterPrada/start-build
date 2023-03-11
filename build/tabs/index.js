!function(){"use strict";var e,t={89:function(){var e=window.wp.blocks;function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function n(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e){if(null==e)throw new TypeError("Cannot destructure "+e)}var a=window.wp.element,c=window.wp.data,o=window.wp.blockEditor,l=window.wp.i18n,i=window.wp.components,s=["react-wordpress/tab"],u="react-wordpress",d=function(e){var t,n,r=e.key,c=e.content,l=e.block,i=e.setActiveTab,s=e.deleteTab,u=e.updateTabName;return(0,a.createElement)(a.Fragment,null,(0,a.createElement)("div",{className:"tabs-nav-line__item "+(null!==(t=l.attributes)&&void 0!==t&&t.isActive?"active":""),key:r,onClick:function(){return i(l.clientId)}},null!==(n=l.attributes)&&void 0!==n&&n.isActive?(0,a.createElement)(o.RichText,{identifier:"tab"+r,tagName:"span",value:c,onChange:function(e){return u(l.clientId,e)}}):(0,a.createElement)("span",null,c),(0,a.createElement)("button",{className:"item-delete",onClick:function(){return s(l.clientId)}},"-")))},b=(0,c.withDispatch)((function(t,r,a){return{updateTabName:function(e,n){var c=r.clientId,l=t(o.store).updateBlockAttributes;(0,a.select(o.store).getBlockOrder)(c).forEach((function(t){t===e&&l(t,{tabName:n})}))},setActiveTab:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=r.clientId,c=t(o.store).updateBlockAttributes;(0,a.select(o.store).getBlockOrder)(n).forEach((function(t){if(t===e)return c(t,{isActive:!0});c(t,{isActive:!1})}))},updateTabs:function(c,l){var i=r.clientId,s=t(o.store).replaceInnerBlocks,u=l>c,d=(0,a.select(o.store).getBlocks)(i);s(i,d=u?[].concat(n(d),[(0,e.createBlock)("react-wordpress/tab",{isActive:!0,tabName:"Tab ".concat(d.length)})]):d.slice(0,-(c-l))),this.setActiveTab(d.at(-1).clientId)},addTab:function(){var c=r.clientId,l=t(o.store).replaceInnerBlocks,i=(0,a.select(o.store).getBlocks)(c),s="Tab ".concat(i.length);l(c,i=[].concat(n(i),[(0,e.createBlock)("react-wordpress/tab",{isActive:!0,tabName:s})])),this.setActiveTab(i.at(-1).clientId)},deleteTab:function(e){var n=r.clientId,c=t(o.store).replaceInnerBlocks,l=(0,a.select(o.store).getBlocks)(n);c(n,l=l.filter((function(t){return t.clientId!==e}))),this.setActiveTab(l[0].clientId)}}}))((function(e){var t=e.attributes,n=(e.setAttributes,e.setActiveTab),b=e.updateTabName,v=e.addTab,m=e.deleteTab,p=e.updateTabs,f=e.clientId;r(t);var k=(0,o.useBlockProps)(),w=(0,o.useInnerBlocksProps)(k,{allowedBlocks:s,renderAppender:!1}),B=(0,c.useSelect)((function(e){return{count:e(o.store).getBlockCount(f),innerBlocks:e(o.store).getBlocks(f),canInsertTabBlock:e(o.store).canInsertBlockType("react-wordpress/tab",f)}}),[f]),E=B.count,h=B.innerBlocks;return B.canInsertTabBlock,(0,a.createElement)(a.Fragment,null,(0,a.createElement)(o.InspectorControls,null,(0,a.createElement)(i.PanelBody,null,(0,a.createElement)(i.RangeControl,{__nextHasNoMarginBottom:!0,label:(0,l.__)("Tabs"),value:E,onChange:function(e){return p(E,e)},min:1,max:Math.max(10,E)}))),(0,a.createElement)("div",k,(0,a.createElement)("div",{className:"tabs"},(0,a.createElement)("div",{className:"tabs__nav"},(0,a.createElement)("div",{className:"tabs-nav-line"},h.map((function(e,t){return(0,a.createElement)(d,{key:t,block:e,content:"tabName"in e.attributes?e.attributes.tabName:"".concat((0,l.__)("Tab",u)," ").concat(t),setActiveTab:n,updateTabName:b,deleteTab:m})})),(0,a.createElement)("button",{className:"tabs-nav-line__item add_new",onClick:v},"+"))),(0,a.createElement)("div",{className:"tabs__content"},(0,a.createElement)("div",w)))))})),v=function(e){var t,n=e.block;return(0,a.createElement)(a.Fragment,null,(0,a.createElement)("div",{className:"tabs-nav-line__item "+(null!==(t=n.attributes)&&void 0!==t&&t.isActive?"active":""),key:n.clientId,"data-hm-target":n.clientId},(0,a.createElement)("span",null,n.attributes.tabName)))},m=JSON.parse('{"u2":"react-wordpress/tabs"}');(0,e.registerBlockType)(m.u2,{attributes:{},edit:function(t){var n=t.clientId;r(t.attributes);var i=(0,c.useSelect)((function(e){return e(o.store).getBlocks(n).length>0}),[n]),s=(0,c.useDispatch)(o.store).replaceInnerBlocks;return i||s(n,[(0,e.createBlock)("react-wordpress/tab",{isActive:!0,tabName:(0,l.__)("Tab 0",u)})],!0),(0,a.createElement)(b,t)},save:function(e){var t=e.innerBlocks,n=null===o.useBlockProps||void 0===o.useBlockProps?void 0:o.useBlockProps.save(),r=null===o.useInnerBlocksProps||void 0===o.useInnerBlocksProps?void 0:o.useInnerBlocksProps.save(n);return(0,a.createElement)(a.Fragment,null,(0,a.createElement)("div",n,(0,a.createElement)("div",{className:"tabs js-tabs"},(0,a.createElement)("div",{className:"tabs__nav"},(0,a.createElement)("div",{className:"tabs-nav-line"},t.map((function(e){return(0,a.createElement)(v,{block:e})})))),(0,a.createElement)("div",{className:"tabs__content"},(0,a.createElement)("div",r)))))}})}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var c=n[e]={exports:{}};return t[e](c,c.exports,r),c.exports}r.m=t,e=[],r.O=function(t,n,a,c){if(!n){var o=1/0;for(u=0;u<e.length;u++){n=e[u][0],a=e[u][1],c=e[u][2];for(var l=!0,i=0;i<n.length;i++)(!1&c||o>=c)&&Object.keys(r.O).every((function(e){return r.O[e](n[i])}))?n.splice(i--,1):(l=!1,c<o&&(o=c));if(l){e.splice(u--,1);var s=a();void 0!==s&&(t=s)}}return t}c=c||0;for(var u=e.length;u>0&&e[u-1][2]>c;u--)e[u]=e[u-1];e[u]=[n,a,c]},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={68:0,370:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,c,o=n[0],l=n[1],i=n[2],s=0;if(o.some((function(t){return 0!==e[t]}))){for(a in l)r.o(l,a)&&(r.m[a]=l[a]);if(i)var u=i(r)}for(t&&t(n);s<o.length;s++)c=o[s],r.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return r.O(u)},n=self.webpackChunkwp=self.webpackChunkwp||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var a=r.O(void 0,[370],(function(){return r(89)}));a=r.O(a)}();