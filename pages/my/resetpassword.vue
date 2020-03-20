<template>
	
	<view class="resetpwd-container">
		<form @submit="confirm">
			
			<view  class="login-input">
				<text>新密码：</text>
				<input class="uni-input" :password="true" placeholder="输入新密码"
					 name="password" />
				
			</view>
			<view  class="login-input">
				<text>确认密码：</text>
				<input class="uni-input" :password="true" placeholder="输入确认密码"
					 name="refirmpwd" />
				
			</view>
			
			<button class="btn" form-type="submit" >确认修改</button>	
		</form>
		
	</view>		

	

</template>

<script>
	import {mapActions,mapMutations} from 'vuex'
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			
			...mapActions('login',['resetpwd','logout']),
			async confirm({detail:{value:{password,refirmpwd}}}){
				console.log(password,refirmpwd)
				let res = this.checkpwd(password,refirmpwd)
				if(res.status){
					let resetRes = await this.resetpwd(password)
					if(resetRes){
						uni.showModal({
							content:'密码修改成功，请重新登录',
							showCancel:false,
							success:res=>{
								if(res.confirm){
									this.logout()
									
								}
							}
						})
						
					}else{
						uni.showModal({
							content:'密码修改失败',
							showCancel:false
						})
					}
				}else{
					uni.showModal({
						title:'信息填写有误',
						content:res.msg,
						showCancel:false
					})
					return false
				}
				
			},
			checkpwd(pwd,refirmpwd){
				pwd = pwd.trim()
				refirmpwd = refirmpwd.trim()
				if(pwd===refirmpwd && pwd.length !==0){
					return {status:true,msg:'校验成功'}
				}else if(pwd!==refirmpwd){
					return {status:false,msg:'两次密码不一致'}
				}else{
					return {status:false,msg:'密码不能为空'}
				}
			}
		}
	}
	
</script>

<style lang="scss" scoped>
@import "../../common/myform.css";

.resetpwd-container{
	height: 100%;
	width: 100%;
	background-image: linear-gradient(to top,$uni-bg-color-start,#fff);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	>form{
		width: 80%;
		.login-input{
			
			display: flex;
			justify-content: space-between;
			align-items: center;
			position: relative;
			margin-bottom: 50rpx;
			.uni-input{
				position: absolute;
				left:150rpx;
				line-height:50upx;
				font-size:28upx;
				background-color: transparent;
				border-bottom: 2rpx solid white;
				flex: 1;
			}
		}
		.btn{
			margin-top: 100rpx;
			border-radius: $uni-border-radius-lg;
		}
	}
	
	
	
}
</style>
