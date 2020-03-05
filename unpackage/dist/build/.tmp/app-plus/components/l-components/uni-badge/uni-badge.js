(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/l-components/uni-badge/uni-badge"],{2397:function(t,e,n){},"6b28":function(t,e,n){"use strict";var u,i=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return a}),n.d(e,"a",function(){return u})},"741e":function(t,e,n){"use strict";var u=n("2397"),i=n.n(u);i.a},c730:function(t,e,n){"use strict";n.r(e);var u=n("cc8a"),i=n.n(u);for(var a in u)"default"!==a&&function(t){n.d(e,t,function(){return u[t]})}(a);e["default"]=i.a},cc8a:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={name:"uni-badge",props:{type:{type:String,default:"default"},inverted:{type:Boolean,default:!1},text:{type:String,default:""},size:{type:String,default:"normal"}},computed:{setClass:function(){var t=["uni-badge-"+this.type,"uni-badge--"+this.size];return!0===this.inverted&&t.push("uni-badge-inverted"),t.join(" ")}},methods:{onClick:function(){this.$emit("click")}}};e.default=u},cd7a:function(t,e,n){"use strict";n.r(e);var u=n("6b28"),i=n("c730");for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);n("741e");var c,r=n("f0c5"),o=Object(r["a"])(i["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],c);e["default"]=o.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/l-components/uni-badge/uni-badge-create-component',
    {
        'components/l-components/uni-badge/uni-badge-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("cd7a"))
        })
    },
    [['components/l-components/uni-badge/uni-badge-create-component']]
]);
