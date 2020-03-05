(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/zz-switchc/zz-switchc"],{"045d":function(t,e,n){"use strict";var i=n("dd1d"),u=n.n(i);u.a},3752:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"switchComponent",props:{value:{type:Boolean,default:!0},bgcolor:{type:String,default:"#c6acff"},width:{type:Number,default:52},text:{type:String,default:""},sid:{type:Number,default:0}},data:function(){return{isChecked:this.value}},computed:{direction:function(){return this.text?this.text.split("|"):[]}},watch:{value:function(t){this.isChecked=t},isChecked:function(t){var e="";t&&(e=this.text.split("|")[0]),t||(e=this.text.split("|")[1]);var n={sid:this.sid,value:t,text:e};this.$emit("change",n)}},methods:{toggle:function(t){this.isChecked=!this.isChecked}}};e.default=i},"66bc":function(t,e,n){"use strict";var i,u=function(){var t=this,e=t.$createElement;t._self._c},c=[];n.d(e,"b",function(){return u}),n.d(e,"c",function(){return c}),n.d(e,"a",function(){return i})},"7a71":function(t,e,n){"use strict";n.r(e);var i=n("66bc"),u=n("9af1");for(var c in u)"default"!==c&&function(t){n.d(e,t,function(){return u[t]})}(c);n("045d");var a,r=n("f0c5"),s=Object(r["a"])(u["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],a);e["default"]=s.exports},"9af1":function(t,e,n){"use strict";n.r(e);var i=n("3752"),u=n.n(i);for(var c in i)"default"!==c&&function(t){n.d(e,t,function(){return i[t]})}(c);e["default"]=u.a},dd1d:function(t,e,n){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/zz-switchc/zz-switchc-create-component',
    {
        'components/zz-switchc/zz-switchc-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("7a71"))
        })
    },
    [['components/zz-switchc/zz-switchc-create-component']]
]);
