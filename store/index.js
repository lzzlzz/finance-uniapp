import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex) //安装vuex vue的状态管理工具

/*
*定义全局变量
**/
const store = new Vuex.Store({
    state: {
        /**
         * 是否需要强制登录
         */
        forcedLogin: false,
        hasLogin: false,
    },
    mutations: {
        login(state,payload) {
			console.log(payload)
            state.hasLogin = true;
			console.log('存入缓存的',payload)
			uni.setStorage({
				key:'userInfo',
				data:payload,
				success: (res) => {
					console.log('存储成功')
				}
			})
        },
        logout(state) {
            //state.username = "";
            state.hasLogin = false;
			//state.token='';
			//state.id=1;
			uni.removeStorage({
				key:'userInfo'
			})
        }
    }
})

export default store
