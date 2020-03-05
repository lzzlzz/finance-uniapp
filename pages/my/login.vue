<template>
	<view  >
	<!--未登录-->
	
		
		<!-- <cover-image src="/static/images/l-img/bg.png"></cover-image> -->
		<view style="background-color: #d9c298;" class="content">
			<view class="logo">
				<image src="/static/images/l-img/logo.png" mode="widthFix"></image>
			</view>
			<view class="login-form" >
				<view class="item phone">
					<image class="icon left" src="/static/images/l-img/icon_phone.png" mode="widthFix"></image>
					<input v-model="userName"  focus placeholder="手机号" placeholder-class="input-placeholder"/>
					<image class="icon right" src="/static/images/l-img/icon_phone_right.png" mode="widthFix"  @tap="clearInput()"></image>
				</view>
				<view class="item password">
					<image class="icon left" src="/static/images/l-img/icon_pwd.png" mode="widthFix"></image>
					<input  type="password" v-model="password"  placeholder="密码" placeholder-class="input-placeholder" v-show="!isShow"/>
					<input   v-model="password"  placeholder="密码" placeholder-class="input-placeholder" v-show="isShow"/>
					<image class="icon right" src="/static/images/l-img/icon_pwd_right.png" mode="widthFix" @touchstart="lookpwd()" @touchend="lookpwd()"></image>
				</view>
				<view class="btn" :loading="loading" :class="{'user-set-btn-disable': disabled}"
			type="default" @tap="Login" :disabled="disabled">
					<text>登录</text>
				</view>
				<!-- <view class="forgot-pwd"><text>忘记密码？</text></view> -->
			</view>
	    </view>
			
			
	</view>
	
</template>

<script>
	import config from '@/common/config.js'
	var _this;
    import {
        mapState,
        mapMutations
		
	} from 'vuex'		
	export default {

		data() {
			return {
				disabled:true,
				loading:false,
				userName:"",
				password:"",
				//是否显示密码
				isShow:false
			};
		},
		
		watch:{
			userName(val){
				this.change();
			},
			password(val){
				this.change();				
			}
		},
		/*在 computed 计算属性方法中使用  mapState 对全局变量进行监控*/
		computed: mapState(['forcedLogin','hasLogin']),
		methods:{
		/*在 method中使用  mapMutations  进行全局方法监控，*/
			...mapMutations(['login']), //将this.login 映射成 this.$store.commit('login')
			//清除輸入
			clearInput(){
				this.userName = ''
				
			},
			lookpwd(){
				this.isShow = !this.isShow
			},
			//监听输入框
			change(){
				if(this.userName && this.password){
					this.disabled=false;
					return;
				}
			},
			//验证数据
			check(){
				if(this.userName && this.password && this.userName!="" && this.password!=""){
					return true;
				}
				uni.showToast({
					title:'请输入用户名及密码',
					icon:"none"
				});
				return false;
			},
			//登录
			Login(){
				this.loading=true;
				this.disabled=true;
				// const data = {
				//     username: this.username,
				//     password: this.password
				// };
				if(!this.check()){
					this.loading=false;
					return;
				};
				let url_config = config.get('url_config');
				uni.request({
					url:url_config + "/users/"+this.userName+"/username/"+this.password+"/password",
					
					method: 'GET',
					header: {
						'content-type': 'application/x-www-form-urlencoded' 
					},
					success: res => {
						console.log(this.userName);
						console.log(this.password);
						console.log(res);
						console.log(res.data.success);

						if(!res.data.success){
							uni.showToast({
								icon: 'none',
								title: '用户名或密码不正确'
							});
							// setTimeout(function(){
							// 	//uni.navigateBack({delta:1})
							// },2000);
							//uni.hideToast();
							return;
						}
						else{
							uni.showToast({
								title: '登录成功'
							});
							setTimeout(function(){
								//uni.navigateBack({delta:1})
							},2000);
							//uni.hideToast();
							//将登录返回的数据与缓存中提取的数据一致
							let userInfo = {}
							userInfo.token = res.data.data.access_token
							userInfo.userName = this.userName
							this.toMain(userInfo);								
						}
					},
					fail: (e) => {
						uni.showToast({
							icon: 'none',
							title: '网络异常,请稍后重试'
						});	
						console.log(e)
					},
				});
				this.loading=false;
			},
			/*toMain方法*/
            toMain(data) {
                this.login(data); //相当于this.$store.commit('login',data) 这个data为提交的变化
				uni.reLaunch({
					url:'index'
				});
            },
			reset(){
				uni.navigateTo({
					url:'resetpassword'
				});
			}

		}
	}
</script>

<style scoped>
	.content {position: absolute; top: 0;width: 100%;height: 100%;}
	.logo {text-align: center; margin: 96rpx auto 73rpx auto;}
	.logo image {width: 50%;}
	.login-form {width: 630rpx; margin: auto;}
	.login-form .item {
		width: 630rpx;
		height: 84rpx;
		border-radius: 6rpx;
		margin-bottom: 33rpx;
		display: flex;
		justify-content: space-around;
		align-items: center;
		background-color: #d9c298;
	}
	.login-form input {color: #FFFFFF; height: 84rpx; line-height: 84rpx; border-bottom: 1upx solid #F0F0F0 ;}
	.login-form .item .icon{width: 36rpx; height: 40rpx;}
	.input-placeholder {color: #FFFFFF; line-height: 84rpx; height: 84rpx; margin: auto;}
	.login-form .btn{ margin: 43rpx auto 22rpx auto;
		text-align: center;
		height: 84rpx;
		line-height: 84rpx;
		border-radius: 86upx;
		background-color: #FFFFFF;
	}
	.forgot-pwd {text-align: right;}
	.login-third .text{margin: 137rpx auto 106rpx auto; text-align: center; }
	
	.login-third .flex{text-align: center; display: flex; justify-content: space-around; }
	.login-third .flex image {width: 88rpx; height: 88rpx;}
	text{
		height: 30rpx;
		font-family: PingFang-SC-Regular;
		font-size: 32rpx;
		font-weight: bold;
		font-stretch: normal;
		line-height: 40rpx;
		letter-spacing: 3rpx;
		color: #d9c298;
	}
	
	
</style>
