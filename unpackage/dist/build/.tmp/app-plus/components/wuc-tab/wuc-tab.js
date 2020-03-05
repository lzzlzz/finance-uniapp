(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/wuc-tab/wuc-tab"],{"0d57":function(t,n,e){},"2f4d":function(t,n,e){"use strict";e.r(n);var u=e("ef39"),r=e("96a4");for(var a in r)"default"!==a&&function(t){e.d(n,t,function(){return r[t]})}(a);e("32b7");var c,f=e("f0c5"),i=Object(f["a"])(r["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],c);n["default"]=i.exports},"32b7":function(t,n,e){"use strict";var u=e("0d57"),r=e.n(u);r.a},"96a4":function(t,n,e){"use strict";e.r(n);var u=e("dae1"),r=e.n(u);for(var a in u)"default"!==a&&function(t){e.d(n,t,function(){return u[t]})}(a);n["default"]=r.a},dae1:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={name:"wuc-tab",data:function(){return{}},props:{tabList:{type:Array,default:function(){return[]}},tabCur:{type:Number,default:function(){return 0}},tabClass:{type:String,default:function(){return""}},tabStyle:{type:String,default:function(){return""}},textFlex:{type:Boolean,default:function(){return!1}},selectClass:{type:String,default:function(){return"text-blue"}}},methods:{tabSelect:function(t,n){if(this.currentTab===t)return!1;this.$emit("update:tabCur",t),this.$emit("change",t)}},computed:{scrollLeft:function(){return 60*(this.tabCur-1)}}};n.default=u},ef39:function(t,n,e){"use strict";var u,r=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"b",function(){return r}),e.d(n,"c",function(){return a}),e.d(n,"a",function(){return u})}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/wuc-tab/wuc-tab-create-component',
    {
        'components/wuc-tab/wuc-tab-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("2f4d"))
        })
    },
    [['components/wuc-tab/wuc-tab-create-component']]
]);
