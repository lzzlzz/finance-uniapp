<script>
	import {mapMutations} from 'vuex'
	export default {
		globalData:{ 
			year:2019,
			month:10,
		},
		methods:{
			...mapMutations('login',['setUserInfo','setLogState'])
			
		},
		onLaunch: function() { 
			console.log('App Launch')
			if(this.$mc.has('userInfo')){
				//如果有缓存
				this.setUserInfo(this.$mc.get('userInfo'))
				this.setLogState(true)
			}else{
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
		background-color: #f1f1f1;
		width: 100%;
		height: 100%;
		font-family: pingfang;
	}
	
	view {
		font-size: 28upx;
		line-height: inherit
	}
	
	
</style>
