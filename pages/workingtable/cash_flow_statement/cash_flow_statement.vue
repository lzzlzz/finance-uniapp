<template>
	<view>

		<uni-calendar :insert="true" @change="change" />

		<!-- 选项卡 -->
		<self-swiper :leftList="incomeList" :rightList="expenseList" :status="status"
		 @loadData="getData"></self-swiper>

	</view>
</template>

<script>
	import selfSwiper from '@/components/self-swiper/self-swiper.vue'
	import { mapState, mapActions, mapMutations } from 'vuex'
	
	export default {
		components: {
			selfSwiper
		},
		data() {

			return {
			};
		},
		computed:mapState('report',{
			status:state=>state.cashFlowSum.status,
			incomeList:state=>state.cashFlowSum.incomeList,
			expenseList:state=>state.cashFlowSum.expenseList
		}),
		methods: {
			...mapMutations('report',['initCashFlowList']),
			...mapActions('report',['getCashFlowRpt']),
			change(e) {
				//初始化状态
				this.initCashFlowList('sum')
				this.getData()
			},
			getData(){
				if(this.status==='more'){
					this.getCashFlowRpt('sum')
				}
			}

			

		}
	}
</script>

<style scoped>
	
	
</style>
