<template>
	<view class="content">
		<!--未登录-->
		<view v-if="!hasLogin" class="login-title "> 
			<view class="fontsize">未登录</view>
			<view class="u-f-ajc " @tap="openLogin">点击此处即可登录！</view>
		</view>
		<!--已登录-->
		<view v-if="hasLogin" class="login-title u-f-ajc login-padding login-font-color">您好,用户<!-- {{userInfo.username}} --></view>
		
		<view class="example-title">智能服务</view>
		<uni-list>
			<!-- <uni-list-item title="意见反馈" thumb="/static/images/l-img/feedback.png" @click.native='feedbackPage'></uni-list-item> -->
			<uni-list-item title="客服电话" thumb="/static/images/l-img/phone.png" showArrow="false" @click.native='phoneCall'></uni-list-item>
			<!-- <uni-list-item title="修改密码" thumb="/static/images/l-img/gift.png" @click.native="recommandPage"></uni-list-item> -->
		</uni-list>		
		
		<view  class="example-title">其它</view>
		<uni-list>
			<uni-list-item title="清除缓存" thumb="/static/images/l-img/clear.png" show-arrow="false" @click.native='clear'></uni-list-item>
		</uni-List>
		
		<view class="exit_Button">
            <button v-if="hasLogin" type="default" @tap="bindLogout">退出登录</button>
		</view>
		
	</view>
</template>

<script>
    import {
		mapState,
		mapMutations
	} from 'vuex'
	import uniList from '@/components/l-components/uni-list/uni-list.vue'
	import uniListItem from '@/components/l-components/uni-list-item/uni-list-item.vue'
	
	export default {
		computed: mapState(['forcedLogin','hasLogin', 'userInfo']),
		components: {uniList,uniListItem},
        onLoad() {
            if (!this.hasLogin) {
                uni.showModal({
                    title: '未登录',
                    content: '您未登录，需要登录后才能继续',
                    /**
                     * 如果需要强制登录，不显示取消按钮
                     */
                    showCancel: !this.forcedLogin,
                    success: (res) => {
                        if (res.confirm) {
							/**
							 * 如果需要强制登录，使用reLaunch方式
							 */
                            if (this.forcedLogin) {
                                uni.reLaunch({
                                    url:'login'
                                });
                            } else {
                                uni.navigateTo({
                                    url:'login'
                                });
                            }
                        }
                    }
                });
            }
        },	
		onNavigationBarButtonTap(e) {
			console.log("点击了设置按钮")
			console.log(e)
			console.log(this.hasLogin)
			console.log(this.userInfo)
			if(this.hasLogin){
				uni.navigateTo({
					url:'set'
				});
				return;
			}
			else{
				uni.navigateTo({
					url:'login'
				});
				return;
			}
			// if(e.index==0){
			// 	this.User.navigate({
			// 		url: '../user-set/user-set',
			// 	},false)
			// }
		},
		methods:{
			...mapMutations(['logout']),
			//跳转到登录页面
			openLogin(){
				uni.navigateTo({
					url: 'login',
				});
			}, 
			feedbackPage(){
				uni.navigateTo({
					url:'feedback',
				});				
			},
			recommandPage(){
				uni.navigateTo({
					url: 'resetpassword',
					
				});
			},
			phoneCall(){
				uni.makePhoneCall({
					phoneNumber:'15950524039'
				});
			},
			clear(){
				uni.showModal({
					title:'提示',
					content:'是否要清除缓存数据',
					confirmText:'立即清除',
					success: res => {
						if(res.confirm){
							//先把token提出来然后，清除数据缓存，再把token放进去
							uni.getStorage({
								key:'userInfo',
								success: (res)=> {
									uni.clearStorage();
									uni.setStorage({
										key:'userInfo',
										data:res.data,
										success: () => {
											uni.showToast({
												title:'清除缓存成功！',
											});	
										}
									})
								}
							})
							
													
						}
					}
				});
			},
			
            bindLogout() {
				uni.showModal({
					title:'提示',
					content:'是否要退出程序',
					confirmText:'确定',
					success: res => {
						if(res.confirm){
							uni.clearStorage();
							this.logout();
							uni.showToast({
								title:'您已退出程序！',
							});							
						}
					}
				});

                /**
                 * 如果需要强制登录跳转回登录页面
                 */
                if (this.forcedLogin) {				
                    uni.reLaunch({
                        url: 'login',
                    });
                }
            }			
		}
	}
</script>

<style>
	@import url("../../common/myform.css");
	@import url("../../common/iconfont.css");
	@import url("../../components/l-components/watch-login/css/icon.css");
	@import url("./css/main.css");
	.login-font-color{ color: #BBBBBB; }
	.login-padding{ padding: 20upx 0; }
	.exit_Button{
		margin-top: 48upx;
		margin-bottom: 20upx;
		padding-left: 24upx;
		padding-right: 24upx ;
	}
	.fontsize{
		font-size: 32upx;
	}
</style>
