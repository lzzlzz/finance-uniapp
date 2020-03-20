import Vue from 'vue'
import App from './App'
import store from './store' 
import priceFormat from '@/common/priceformat.js'
import uniIcons from '@/components/uni-icons/uni-icons'
import uniCalendar from "@/components/uni-calendar-1/uni-calendar"
import MinCache from '@/common/storage.js'
//挂载全局对象
Vue.prototype.$store = store 
Vue.prototype.$mc = new MinCache()
//注册全局组件
Vue.component('uni-icons',uniIcons)
Vue.component('uni-calendar',uniCalendar) 

//注册全局过滤器
Vue.filter('priceFormat', priceFormat)

//启动生产消息,发布前要关闭
Vue.config.productionTip = true

App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})

//将app进行编译
app.$mount()  
