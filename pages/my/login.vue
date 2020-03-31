<template>
	<view class="login">
		<!-- 主体内容区 -->
		<view class="login-container">
			<!-- logo区 -->
			<view class="logo">
				<image mode="aspectFit" src="/static/images/l-img/logo.png"></image>
			</view>
			
			<!-- 表单区 -->
			<view class="login-form">
				<form  @submit="Login" @reset='Login'>
					<!-- 用户名 -->
					<view class="login-input">
						<uni-icons type="person" size="30" ></uni-icons>
						<input class="uni-input" type="text" placeholder="手机号" 
							focus v-model="loginInfo.userName" name="userName" />
						<uni-icons type="close" @click="loginInfo.userName=''"></uni-icons>
					</view>
					
					<!-- 密码 -->
					<view  class="login-input">
						<uni-icons type="locked" size="30" ></uni-icons>
						<input class="uni-input" :password="showPassword" placeholder="密码"
							v-model="loginInfo.password" name="password" />
						<uni-icons :type="showPassword?'eye':'eye-slash'" @click="showPassword=!showPassword"></uni-icons>
					</view>
					<!-- <view class="login-help">
						<uni-icons type="help"></uni-icons>
						<text class="uni-link">忘记密码</text>
					</view> -->
					
						<button class="login-btn" id='3'   form-type="submit">登录</button>
						<button class="login-btn entry-btn" id='4' form-type="reset">游客入口</button>
				</form>
			</view>
			
			
		</view>
		
		
	</view>
	
</template>

<script>
	import {mapActions,mapState,mapMutations} from 'vuex'
	export default{
		data(){
			return{
				loginInfo:{
					userName:'',
					password:''
				},
				showPassword:true
			}
		},
		computed:mapState({
			isLog:state=>state.login.isLog,
			visitorPeriod:state => state.global.visitorPeriod.initInfo
		}),
		methods:{
			...mapMutations('login',['setUserAccess']),
			...mapActions('login',['login']),
			...mapActions('global',['update']),
			async Login({mp,detail}){
				let loginInfo = {
						//示例账套的用户名和密码
						userName:'test-user',
						password:'test-user'
					}
				if(mp.type==='submit'){
					//如果是登录按钮进入的说明是用户，就用表单中的信息
					loginInfo= detail.value
				}
				if(this.validCheck(loginInfo)){
					//如果验证成功就发送登录请求
					let res = await this.login(loginInfo)
					if(res){
						if(mp.type==='submit'){
							this.setUserAccess()
						}else{
							//游客登录 定位账套区间
							this.update(this.visitorPeriod)
						}
						uni.switchTab({
							url:'../workingtable/details/details'
						})
					}else{
						console.log(res)
						uni.showModal({
							content:'登录失败'
						})
					}
				}
				
				
			},
			validCheck(info){
				
				for(let [k,v] of Object.entries(info)){
					if(v.trim()===''){
						let msg = '密码不能为空'
						if(k==='userName'){
							msg = '用户名不能为空'
						}
						uni.showModal({
							title:'登录信息填写错误',
							content:msg,
							showCancel:false
						})
						return false
					}
				}
				return true
			}
			
		}
		
	}
	
</script>

<style lang="scss" scoped>
	
	.login{
		height: 100%;
		// background-image: url(/static/images/l-img/login.jpg);
		background-image: linear-gradient(to top,$uni-bg-color-start,#fff);
		
		.login-container{
			height: 100%;
			display: flex;
			flex-direction: column;
			.logo{
				height: 40%;
				display: flex;
				align-items: center;
				justify-content: center;
				
			}
			
			.login-form{
				height: 60%;
				.login-input{
					display: flex;
					justify-content: space-around;
					align-items: center;
					padding: 6rpx 80rpx;
					.uni-input{
						margin: 0 20rpx;
						height: 50upx;
						padding: 15upx 25upx;
						line-height:50upx;
						font-size:28upx;
						background-color: transparent;
						border-bottom: 2rpx solid white;
						flex: 1;
					}
				}
				.login-help{
					display: flex;
					justify-content: flex-end;
					padding: 6rpx 70rpx 4rpx ;
					
				}
				.login-btn{
					background-color: #f1f1f1;
					margin: 100rpx 70rpx 6rpx 70rpx;
					border-radius: $uni-border-radius-lg;
					
				}
				.entry-btn{
					margin-top: 10rpx;
				}
				
			}
				
			
			
		}
	}
	
</style>