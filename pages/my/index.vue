<template>
	<view class="content">
		<!-- 用户区域， -->
		<view class="example-user">
			
			<view  class="example-title">
				<image src="/static/images/l-img/logo.jpg"></image>
				<text v-if="isLog">您好,{{userInfo.name}} </text>
				<text v-else>您好，请登录</text>
				</view>
		</view>
		
		<!-- 列表区域 -->
		<view class="example-content">
			<self-title Chinese="智能服务" English="Service"></self-title>
			<uni-list>	
				<uni-list-item title="客服电话" thumb="/static/images/l-img/phone.png" showArrow="false" @click.native='phoneCall'></uni-list-item>
				<uni-list-item title="修改密码" thumb="/static/images/l-img/gift.png" @click.native="recommandPage"></uni-list-item>
			</uni-list>		
			<self-title Chinese="其他" English="Items"></self-title>
			<uni-list>
				<uni-list-item title="清除缓存" thumb="/static/images/l-img/clear.png" show-arrow="false" @click.native='clear'></uni-list-item>
			</uni-List>
		</view>
		
		<!-- 退出按钮 -->
		<view class="exit-button">
			<button  v-if="isLog" type="warn"  @tap="bindLogout">退出登录</button>
			<button  v-else type="warn"  @tap="openLogin">点我登录</button>
		</view>
		
	</view>
</template>

<script>
	import selfTitle from '@/components/self-title/self-title.vue'
    import {
		mapState,
		mapMutations
	} from 'vuex'
	import uniList from '@/components/l-components/uni-list/uni-list.vue'
	import uniListItem from '@/components/l-components/uni-list-item/uni-list-item.vue'
	
	export default {
		computed: mapState('login',['userInfo','isLog']),
		components: {uniList,uniListItem, selfTitle},
        onLoad() {
            if (!this.isLog) {
                uni.showModal({
                    title: '未登录',
                    content: '您未登录，需要登录后才能继续',
					showCancel:false,
                    success: (res) => {
                        if (res.confirm) {
							uni.navigateTo({
							    url:'login'
							});
                        }
                    }
                });
            }
        },	
		methods:{
			...mapMutations('login',['logout']),
			//跳转到登录页面
			openLogin(){
				uni.navigateTo({
					url: 'login',
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
							this.$mc.clear()
							this.$mc.set('userInfo',this.userInfo)
													
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
							this.logout()							
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

<style lang="scss" scoped>
	@import url("../../common/myform.css");
	@import url("../../common/iconfont.css");
	@import url("../../components/l-components/watch-login/css/icon.css");
	 // @import '../../common/css/my/main.css';
	.login-font-color{ color: #BBBBBB; }
	.login-padding{ padding: 20upx 0; }
	.content{
		display: flex;
		flex-direction: column;
		height: 100%;
		.example-user{
			height: 30%;
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
			.example-title{
				background-color: #FFFFFF;
				height: 120rpx;
				margin-bottom: 50rpx;
				>image{
					width: 150rpx;
					height: 150rpx;
					margin: -75rpx 40rpx 0 40rpx;
				}
				>text{
					
				}
			}
		}
		.example-content{
			height: 55%;
			.example-title{
				background-color: #FFFFFF;
				height: 80rpx;
				line-height: 80rpx;
				padding-left: 20rpx;
			}
		}
		.exit-button{
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
			height: 15%;
			width: 100%;
			>button{
				width: 60%;
				margin-bottom: 60rpx;
				border-radius: $uni-border-radius-lg;
			}
		
		}
	}
	
	.fontsize{
		font-size: 32upx;
	}
</style>
