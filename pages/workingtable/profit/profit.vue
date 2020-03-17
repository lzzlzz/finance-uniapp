<template>
	<view>
		
		<uni-calendar :insert="true" @change="change"/>
		<!-- 多行列表 -->
		 
		<self-list :data="profit.profitList" :istrip="true" :attrs="attrs" :isProfit="true"></self-list>
		
</view>
</template>

<script>
import selfList from '@/components/self-list/self-list.vue'
import {mapState,mapActions} from 'vuex'
	
	export default {
		components:{
			selfList
		},
		data() {
			return {
				attrs:['本期发生','本年累计']
			};
		},
		computed:mapState('report',['profit']),
		methods: {
			...mapActions('report',['getBalanceRpt']),
			change(e) {
				console.log(e);
				this.getBalanceRpt()
			},
			
		}
	}
	
</script>

<style>

</style>
