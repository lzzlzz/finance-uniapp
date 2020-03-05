<script>
	import {mapMutations} from 'vuex'
	export default {
		globalData:{ 
			year:2019,
			month:10,
			
			//token:''
		},
		methods:{
			...mapMutations(['login'])
		},
		onLaunch: function() { //加载项目的时候可以从缓存获取token，然后检查token是否失效，如果没有token或者失效跳转到登录界面
			console.log('App Launch')
			
			let keys = uni.getStorageInfoSync('userInfo')||'';
			
			// console.log(keys.keys.indexOf('userInfo'))
			if(keys.keys.indexOf('userInfo') != -1){
				//更新登录状态
				uni.getStorage({
					key:'userInfo',
					success: (res) => {
						this.login(res.data);//因为页面刷新后登录的状态会消失，所以重新加载后如果缓存中有token就重新登录
						console.log(res)
					}
				});
			}else{//如果缓存中没有token重新登录
				uni.reLaunch({
					url:'pages/my/login'
				})
			}
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>


<style>
	/*每个页面公共css */
	@import './common/uni.css';
	@import url("./common/icon.scss");
	@import url("/components/gaoyia-parse/parse.css");
	
	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #f1f1f1
	}
	
	view {
		font-size: 28upx;
		line-height: inherit
	}
	
	
</style>
