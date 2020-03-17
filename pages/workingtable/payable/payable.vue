<template>
	<view>
		<self-collapse :data="payable.list" 
						title="应付账款明细" direction="贷方" @click="getDetail">
		</self-collapse>
	</view>

</template>

<script>
	import selfCollapse from '@/components/self-collapse/self-collapse'
	import { mapState,mapMutations, mapActions} from 'vuex'
	export default {
		components: {
			selfCollapse,
		},
		data() {
			return {
				
			};
		},
		computed:mapState('report',['payable']),
		onLoad(){
			//cs代表应收账款类型
			this.getAgeAnalysisRpt('sp')
		},
		methods: {
			...mapMutations('report',['setPayableDetail']),
			...mapActions('report',['getAgeAnalysisRpt']),
			getDetail(e,time){
				//将需要展示的账龄数据存到aatemp 的缓存中
				console.log(e)
				if(e.status){
					this.setPayableDetail(e.data)
					uni.navigateTo({
						url:'./detailList/detailList'
					});
				}
				
				
			}
		}
	}
	
</script>

<style scoped>
</style>