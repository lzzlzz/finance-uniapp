import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'
import global from './modules/global'
import report from './modules/report'


Vue.use(Vuex)//注册Vuex
 
/*
*定义全局变量
**/
const store = new Vuex.Store({
	modules:{
		login,
		global,
		report
	}
})
// store.prototype.mc = new MinCache()

export default store
