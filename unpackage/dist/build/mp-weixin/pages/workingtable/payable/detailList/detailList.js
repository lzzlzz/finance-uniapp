(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/workingtable/payable/detailList/detailList"],{"3f52":function(t,n,e){"use strict";e.r(n);var a=e("df13"),i=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);n["default"]=i.a},"4c37":function(t,n,e){"use strict";(function(t){e("356b"),e("921b");a(e("66fd"));var n=a(e("87ca"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},"6edd":function(t,n,e){},"87ca":function(t,n,e){"use strict";e.r(n);var a=e("9af0"),i=e("3f52");for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);e("ad7f");var r,u=e("f0c5"),c=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],r);n["default"]=c.exports},"9af0":function(t,n,e){"use strict";var a,i=function(){var t=this,n=t.$createElement,e=(t._self._c,t.__map(t.listData,function(n,e){var a=t._f("priceFormat")(n.amount,2,"￥",!0);return{$orig:t.__get_orig(n),f0:a}}));t.$mp.data=Object.assign({},{$root:{l0:e}})},o=[];e.d(n,"b",function(){return i}),e.d(n,"c",function(){return o}),e.d(n,"a",function(){return a})},ad7f:function(t,n,e){"use strict";var a=e("6edd"),i=e.n(a);i.a},df13:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;a(e("bb00")),a(e("697d"));function a(t){return t&&t.__esModule?t:{default:t}}var i=function(){return Promise.all([e.e("common/vendor"),e.e("components/uni-icons/uni-icons")]).then(e.bind(null,"a621"))},o={components:{uniIcons:i},data:function(){return{listData:[],banner:{}}},onLoad:function(n){console.log(n);var e=n.detail;try{this.banner=JSON.parse(decodeURIComponent(e))}catch(a){this.banner=JSON.parse(e)}t.setNavigationBarTitle({title:this.banner.age+"账龄列表"}),this.getList()},methods:{getList:function(){var n=t.getStorageSync("aatemp");this.listData=n.items}}};n.default=o}).call(this,e("543d")["default"])}},[["4c37","common/runtime","common/vendor"]]]);