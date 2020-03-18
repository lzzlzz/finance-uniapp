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
			status:state=>state.cashFlow.status,
			incomeList:state=>state.cashFlow.incomeList,
			expenseList:state=>state.cashFlow.expenseList
		}),
		methods: {
			...mapMutations('report',['initCashFlowList']),
			...mapActions('report',['getCashFlowRpt']),
			change(e) {
				//初始化状态
				this.initCashFlowList('detail')
				this.getData()
			},
			getData(){
				if(this.status==='more'){
					this.getCashFlowRpt('detail')
				}
			}

			

		}
	}
</script>

<style scoped>
	
	
</style>
