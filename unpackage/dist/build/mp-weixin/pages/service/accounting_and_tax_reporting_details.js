(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/service/accounting_and_tax_reporting_details"],{"89ec":function(n,e,t){"use strict";var i={"uni-fab":()=>t.e("components/uni-fab/uni-fab").then(t.bind(null,"2341"))},a=function(){var n=this,e=n.$createElement;n._self._c},c=[];t.d(e,"b",function(){return a}),t.d(e,"c",function(){return c}),t.d(e,"a",function(){return i})},"96b0":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=function(){return t.e("components/uni-grid/uni-grid").then(t.bind(null,"967c"))},a=function(){return t.e("components/uni-grid-item/uni-grid-item").then(t.bind(null,"3e89"))},c=function(){return t.e("components/uni-fab/uni-fab").then(t.bind(null,"2341"))},o={components:{uniGrid:i,uniGridItem:a,uniFab:c},data:function(){return{service_name:"",fab_para:{horizontal:"left",vertical:"bottom",direction:"horizontal",pattern:{color:"#7A7E83",backgroundColor:"#fff",selectedColor:"#007AFF",buttonColor:"#007AFF"},content:[{iconPath:"../../static/images/service-img/1215884.png",selectedIconPath:"../../static/images/service-img/1215884.png",text:"在线留言",active:!1},{iconPath:"../../static/images/service-img/1215851.png",selectedIconPath:"../../static/images/service-img/1215851.png",text:"免费咨询",active:!1}]},taxpayer_list:[{name:"所需资料",detail:[{name:"新公司需要材料",detail:["1. 原始证照（营业执照、开户行许可证、公章、法人和股东身份证原件）","2. 个税明细申报工资表","3. 一证通；可证书复印件或许可证明"]},{name:"以往成立公司需要材料",detail:["1. 原始证照（营业执照、开户行许可证、公章、法人和股东身份证原件）","2. 个税明细申报工资表","3. 一证通","4. 记账凭证","5. 银行对账单","6. 总账、明细账","7. 税务申报表","8. 工商年报、报告书"]}]},{name:"即将获得",detail:["票据整理","工商年报","税控抄税","装订凭证","纳税申报","残保申报","编制记账报税","编制财务报表","总账及明细账","年终汇算清缴","财税咨询解答","税负预警提示"]}]}},onLoad:function(n){this.service_name=n.service_name},methods:{fab_trigger:function(e){console.log(e),"在线留言"==e.item.text&&(console.log("在线留言"),n.navigateTo({url:"message"})),"免费咨询"==e.item.text&&(console.log("免费咨询"),n.makePhoneCall({phoneNumber:"15950524039"}))}}};e.default=o}).call(this,t("543d")["default"])},c3af:function(n,e,t){},ca9b:function(n,e,t){"use strict";var i=t("c3af"),a=t.n(i);a.a},cbb0:function(n,e,t){"use strict";(function(n){t("356b"),t("921b");i(t("66fd"));var e=i(t("fbc7"));function i(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])},e4d7:function(n,e,t){"use strict";t.r(e);var i=t("96b0"),a=t.n(i);for(var c in i)"default"!==c&&function(n){t.d(e,n,function(){return i[n]})}(c);e["default"]=a.a},fbc7:function(n,e,t){"use strict";t.r(e);var i=t("89ec"),a=t("e4d7");for(var c in a)"default"!==c&&function(n){t.d(e,n,function(){return a[n]})}(c);t("ca9b");var o,r=t("f0c5"),u=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],o);e["default"]=u.exports}},[["cbb0","common/runtime","common/vendor"]]]);