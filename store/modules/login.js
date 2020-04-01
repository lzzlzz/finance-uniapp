import config from '@/common/config'
import MinCache from '@/common/storage.js'
const mc = new MinCache()

export default {
	namespaced:true,
	state: {
		//登录的身份,默认是访客
		isUser:false,
		//是否强制登录
		forcedLogin:true,
	    //是否登录
	    isLog: false,
		//用户信息
		userInfo:{
			id:'',
			name:'', 
			//token:
			token:''
		}
		
	},
	mutations: {
	    
		setUserInfo(state,userInfo){
			state.userInfo = userInfo
		},
		setLogState(state,logState) {
			state.isLog = logState;
		},
		logout(state){
			state.isLog = false
			mc.clear()//直接清除所有缓存
			uni.reLaunch({
			    url:'login'
			});
		},
		setUserAccess(state){
			state.isUser = true
		}
		
	},
	actions:{
		async login({commit,state},userInfo){
			let {userName,password} = userInfo
			let url_config = config.get('url_config');
			let [err,res] = await uni.request({
				url:url_config + "/users/"+userName+"/username/"+password+"/password",
				method: 'GET',
				header: {
					'content-type': 'application/x-www-form-urlencoded' 
				}
			})
			if(err!==null)  {
				console.log(err)
				return false
			}
			if(res.data.success){
				//如果请求成功,设置登录状态为已登录
				commit('setLogState',true)
				let userInfo={
					id:res.data.data.user.id,
					name:res.data.data.user.company,
					token:res.data.data.access_token
				}
				//清除之前的所有缓存
				mc.clear()
				//将用户信息存入缓存
				mc.set('userInfo',userInfo)
				commit('setUserInfo',userInfo)
				return true
			}
			
			
		},
		//登出
		logout({commit,state}){
			uni.removeStorage({
				key:'userInfo',
				//清除登录信息的缓存成功之后，就将提交变更登录状态
				success:(e)=>{
					console.log('登出成功')
					commit('setLogState',false)
				},
				fail:(e)=>{
					throw e
				}
			})
		},
		async resetpwd({commit,state},pwd){
			let url_config = config.get('url_config');
			let [err,res] = await uni.request({
				url:url_config + "/users",
				method: 'PUT',
				header: {
					'content-type': 'application/json;charset=UTF-8' 
				},
				data:{
					"id": state.userInfo.id,
					"password": pwd
				}
			})
			if(err!==null)  {
				console.log(err)
				return false
			}
			if(res.data.success){
				console.log(res)
				//如果修改成功，就设置为未登录，让其重新登录
				commit('setLogState',false)
				return true
			}
		}
	}
}