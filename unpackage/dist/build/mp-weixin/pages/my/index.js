(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/index"],{"0c7f":function(n,t,e){"use strict";(function(n){e("356b"),e("921b");o(e("66fd"));var t=o(e("bad2"));function o(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},7816:function(n,t,e){"use strict";var o={"uni-list":()=>e.e("components/uni-list/uni-list").then(e.bind(null,"0eb9")),"uni-list-item":()=>e.e("components/uni-list-item/uni-list-item").then(e.bind(null,"68d6"))},i=function(){var n=this,t=n.$createElement;n._self._c},u=[];e.d(t,"b",function(){return i}),e.d(t,"c",function(){return u}),e.d(t,"a",function(){return o})},"884d":function(n,t,e){"use strict";e.r(t);var o=e("f92e"),i=e.n(o);for(var u in o)"default"!==u&&function(n){e.d(t,n,function(){return o[n]})}(u);t["default"]=i.a},a8cc:function(n,t,e){"use strict";var o=e("e59b"),i=e.n(o);i.a},bad2:function(n,t,e){"use strict";e.r(t);var o=e("7816"),i=e("884d");for(var u in i)"default"!==u&&function(n){e.d(t,n,function(){return i[n]})}(u);e("a8cc");var c,r=e("f0c5"),a=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],c);t["default"]=a.exports},e59b:function(n,t,e){},f92e:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=e("2f62");function i(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},o=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(e).filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.forEach(function(t){u(n,t,e[t])})}return n}function u(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var c=function(){return e.e("components/l-components/uni-list/uni-list").then(e.bind(null,"d2d4"))},r=function(){return e.e("components/l-components/uni-list-item/uni-list-item").then(e.bind(null,"d029"))},a={computed:(0,o.mapState)(["forcedLogin","hasLogin","userInfo"]),components:{uniList:c,uniListItem:r},onLoad:function(){var t=this;this.hasLogin||n.showModal({title:"未登录",content:"您未登录，需要登录后才能继续",showCancel:!this.forcedLogin,success:function(e){e.confirm&&(t.forcedLogin?n.reLaunch({url:"login"}):n.navigateTo({url:"login"}))}})},onNavigationBarButtonTap:function(t){return console.log("点击了设置按钮"),console.log(t),console.log(this.hasLogin),console.log(this.userInfo),this.hasLogin?void n.navigateTo({url:"set"}):void n.navigateTo({url:"login"})},methods:i({},(0,o.mapMutations)(["logout"]),{openLogin:function(){n.navigateTo({url:"login"})},feedbackPage:function(){n.navigateTo({url:"feedback"})},recommandPage:function(){n.navigateTo({url:"resetpassword"})},phoneCall:function(){n.makePhoneCall({phoneNumber:"15950524039"})},clear:function(){n.showModal({title:"提示",content:"是否要清除缓存数据",confirmText:"立即清除",success:function(t){t.confirm&&n.getStorage({key:"userInfo",success:function(t){n.clearStorage(),n.setStorage({key:"userInfo",data:t.data,success:function(){n.showToast({title:"清除缓存成功！"})}})}})}})},bindLogout:function(){var t=this;n.showModal({title:"提示",content:"是否要退出程序",confirmText:"确定",success:function(e){e.confirm&&(n.clearStorage(),t.logout(),n.showToast({title:"您已退出程序！"}))}}),this.forcedLogin&&n.reLaunch({url:"login"})}})};t.default=a}).call(this,e("543d")["default"])}},[["0c7f","common/runtime","common/vendor"]]]);