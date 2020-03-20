<template>
	<view>
		<self-collapse :listData="receviable.list" 
						title="应收账款明细" direction="借方" @click="getDetail">
		</self-collapse>
	</view>

</template>

<script>
	import selfCollapse from '@/components/self-collapse/self-collapse'
	import { mapState, mapMutations, mapActions} from 'vuex'
	export default {
		components: {
			selfCollapse,
		},
		data() {
			return {
			
			};
		},
		computed:mapState('report',['receviable']),
		onLoad(){
			//cs代表应收账款类型
			this.getAgeAnalysisRpt('cs')
		},
		methods: {
			...mapMutations('report',['setReceviableDetail']),
			...mapActions('report',['getAgeAnalysisRpt']),
			getDetail(e){
				//将需要展示的账龄数据存到aatemp 的缓存中
				console.log(e)
				if(e.status){
					this.setReceviableDetail(e.data)
					uni.navigateTo({
						url:'./detailList/detailList?'
					});
				}
				
				
			}
		}
	}
	
</script>

<style scoped>
</style>