<template>
	<view class="body">
		<input type="text" v-model="oldpassword"
		class="uni-input common-input" 
		placeholder="输入旧密码" />
			
		<input type="text" v-model="newpassword"
		class="uni-input common-input" 
		placeholder="输入新密码" />
			
		<input type="text" v-model="renewpassword"
		class="uni-input common-input" 
		placeholder="输入确认密码" />
			
		<button class="user-set-btn" 
		:loading="loading" :class="{'user-set-btn-disable':disabled}" 
		type="primary" @tap="submit" :disabled="disabled">完成</button>	
	</view>		

	

</template>

<script>
	import config from '@/common/config.js'
	export default {
		data() {
			return {
				//hasPassword:false,
				oldpassword:"",
				newpassword:"",
				renewpassword:"",
				disabled:true,
				loading:false
			}
		},
		onLoad(e) {
			this.hasPassword = !!(e.password && e.password !== "false");
		},
		watch:{
			oldpassword(val){
				this.change();
			},
			newpassword(val){
				this.change();
			},
			renewpassword(val){
				this.change();
			}
		},
		methods: {
			// 监听输入框
			change(){
				if(this.newpassword && this.renewpassword){
					return this.disabled=false;
				}
				if (this.hasPassword && !this.oldpassword) {
					return this.disabled = true;
				}
				this.disabled=true;
			},
			// 验证层
			check(){
				if(this.hasPassword && (!this.oldpassword || this.oldpassword=="")){
					uni.showToast({ title: '旧密码不能为空', icon:"none" });
					return false;
				}
				if(!this.newpassword || this.newpassword==""){
					uni.showToast({ title: '新密码不能为空', icon:"none" });
					return false;
				}
				if(!this.renewpassword || this.renewpassword==""){
					uni.showToast({ title: '确认密码不能为空', icon:"none" });
					return false;
				}
				if(this.newpassword !== this.renewpassword){
					uni.showToast({ title: '确认密码和新密码不一致', icon:"none" });
					return false;
				}
				return true;
			},
			// 提交
			submit(){
				let url_config = config.get('url_config');
				uni.request({
					url:url_config+'/users',
					data:{
						id:1,
						username:this.username,
						password:this.newpassword
					},
					method: 'PUT',
					header: {
						'content-type': 'application/json' 
					},
					success: (res) => {
						console.log(res.data);
						uni.showToast({
							title:'密码修改成功！'
						});
						setTimeout(function(){
							uni.navigateBack({delta:1})
						},2000);
						//console.log(this.data.userId);
					},
					fail: () => {
						uni.showToast({
							icon: 'none',
							title: '网络异常,请稍后重试'
						});					
					},
				});
			},					
		}
	}
</script>

<style>
@import "../../common/myform.css";
</style>
