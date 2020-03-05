<template>
	<view>
		<uni-list>
			<uni-list-item title="修改密码" thumb="/static/images/l-img/设置.png" show-arrow="false" @click.native='set'></uni-list-item>			
			<uni-list-item title="清除缓存" thumb="/static/images/l-img/清除缓存.png" show-arrow="false" @click.native='clear'></uni-list-item>
		</uni-List>
	</view>
</template>

<script>
	import uniList from '@/components/l-components/uni-list/uni-list.vue'
	import uniListItem from '@/components/l-components/uni-list-item/uni-list-item.vue'
	export default {
		components: {uniList,uniListItem},
		data() {
			return {
				
			}
		},
		methods: {
			clear(){
				uni.showModal({
					title:'提示',
					content:'是否要清除缓存数据',
					confirmText:'立即清除',
					success: res => {
						if(res.confirm){
							uni.clearStorage();
							uni.showToast({
								title:'清除缓存成功！',
							});							
						}
					}
				});
			},
			set(){
				uni.navigateTo({
					url:'resetpassword'
				});
			}
		}
	}
</script>

<style>

</style>
