(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/index"],{2078:function(n,t,e){"use strict";e.r(t);var o=e("782d"),i=e.n(o);for(var u in o)"default"!==u&&function(n){e.d(t,n,function(){return o[n]})}(u);t["default"]=i.a},2730:function(n,t,e){"use strict";(function(n){e("d92d"),e("921b");o(e("66fd"));var t=o(e("5370"));function o(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},3280:function(n,t,e){},3819:function(n,t,e){"use strict";var o=e("3280"),i=e.n(o);i.a},5370:function(n,t,e){"use strict";e.r(t);var o=e("b4a9"),i=e("2078");for(var u in i)"default"!==u&&function(n){e.d(t,n,function(){return i[n]})}(u);e("3819");var a,c=e("f0c5"),r=Object(c["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],a);t["default"]=r.exports},"782d":function(n,t,e){"use strict";(function(n,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=e("2f62");function u(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},o=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(e).filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.forEach(function(t){a(n,t,e[t])})}return n}function a(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var c=function(){return e.e("components/l-components/uni-list/uni-list").then(e.bind(null,"edf0"))},r=function(){return e.e("components/l-components/uni-list-item/uni-list-item").then(e.bind(null,"fe74"))},l={computed:(0,i.mapState)(["forcedLogin","hasLogin","userInfo"]),components:{uniList:c,uniListItem:r},onLoad:function(){var t=this;this.hasLogin||n.showModal({title:"未登录",content:"您未登录，需要登录后才能继续",showCancel:!this.forcedLogin,success:function(e){e.confirm&&(t.forcedLogin?n.reLaunch({url:"login"}):n.navigateTo({url:"login"}))}})},onNavigationBarButtonTap:function(t){return o("log","点击了设置按钮"," at pages\\my\\index.vue:70"),o("log",t," at pages\\my\\index.vue:71"),o("log",this.hasLogin," at pages\\my\\index.vue:72"),o("log",this.userInfo," at pages\\my\\index.vue:73"),this.hasLogin?void n.navigateTo({url:"set"}):void n.navigateTo({url:"login"})},methods:u({},(0,i.mapMutations)(["logout"]),{openLogin:function(){n.navigateTo({url:"login"})},feedbackPage:function(){n.navigateTo({url:"feedback"})},recommandPage:function(){n.navigateTo({url:"resetpassword"})},phoneCall:function(){n.makePhoneCall({phoneNumber:"15950524039"})},clear:function(){n.showModal({title:"提示",content:"是否要清除缓存数据",confirmText:"立即清除",success:function(t){t.confirm&&n.getStorage({key:"userInfo",success:function(t){n.clearStorage(),n.setStorage({key:"userInfo",data:t.data,success:function(){n.showToast({title:"清除缓存成功！"})}})}})}})},bindLogout:function(){var t=this;n.showModal({title:"提示",content:"是否要退出程序",confirmText:"确定",success:function(e){e.confirm&&(n.clearStorage(),t.logout(),n.showToast({title:"您已退出程序！"}))}}),this.forcedLogin&&n.reLaunch({url:"login"})}})};t.default=l}).call(this,e("6e42")["default"],e("0de9")["default"])},b4a9:function(n,t,e){"use strict";var o={"uni-list":()=>e.e("components/uni-list/uni-list").then(e.bind(null,"d273")),"uni-list-item":()=>e.e("components/uni-list-item/uni-list-item").then(e.bind(null,"c150"))},i=function(){var n=this,t=n.$createElement;n._self._c},u=[];e.d(t,"b",function(){return i}),e.d(t,"c",function(){return u}),e.d(t,"a",function(){return o})}},[["2730","common/runtime","common/vendor"]]]);