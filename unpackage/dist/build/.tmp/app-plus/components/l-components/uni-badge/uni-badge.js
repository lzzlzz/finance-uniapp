(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/l-components/uni-badge/uni-badge"],{"2ad0":function(t,n,e){"use strict";e.r(n);var u=e("920a"),i=e.n(u);for(var a in u)"default"!==a&&function(t){e.d(n,t,function(){return u[t]})}(a);n["default"]=i.a},"41e8":function(t,n,e){"use strict";e.r(n);var u=e("d642"),i=e("2ad0");for(var a in i)"default"!==a&&function(t){e.d(n,t,function(){return i[t]})}(a);e("f986");var r,o=e("f0c5"),d=Object(o["a"])(i["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],r);n["default"]=d.exports},"920a":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={name:"uni-badge",props:{type:{type:String,default:"default"},inverted:{type:Boolean,default:!1},text:{type:String,default:""},size:{type:String,default:"normal"}},computed:{setClass:function(){var t=["uni-badge-"+this.type,"uni-badge--"+this.size];return!0===this.inverted&&t.push("uni-badge-inverted"),t.join(" ")}},methods:{onClick:function(){this.$emit("click")}}};n.default=u},d085:function(t,n,e){},d642:function(t,n,e){"use strict";var u,i=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"b",function(){return i}),e.d(n,"c",function(){return a}),e.d(n,"a",function(){return u})},f986:function(t,n,e){"use strict";var u=e("d085"),i=e.n(u);i.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/l-components/uni-badge/uni-badge-create-component',
    {
        'components/l-components/uni-badge/uni-badge-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("41e8"))
        })
    },
    [['components/l-components/uni-badge/uni-badge-create-component']]
]);
