import Vue from 'vue'
import App from './App'//把App.vue导入进来
import store from './store'  //把store模块导入
import priceFormat from '@/common/priceformat.js'//导入金额过滤器
Vue.prototype.$store = store //将store对象挂载到Vue实例的原型链上 this.$store 就能访问到store对象

import uniCalendar from "@/components/uni-calendar-1/uni-calendar"

Vue.component('uni-calendar',uniCalendar) 
//注册一个全局过滤器,进行金额格式化
Vue.filter('priceFormat', priceFormat)

Vue.config.productionTip = true//启动生产消息,发布前要关闭

App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
//将app进行编译
app.$mount()  
