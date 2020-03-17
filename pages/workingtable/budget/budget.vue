<template>
	<view>
		
		<uni-calendar :insert="true" @change="change"/>
		<!-- 选项卡 -->
		<div>
		  
		  <wuc-tab :tab-list="tabList3" textFlex :tabCur.sync="TabCur3" tab-class="text-center text-black bg-white" select-class="text-orange"></wuc-tab>
		  <swiper :current="TabCur3" class="swiper" duration="300" :circular="true" indicator-color="rgba(255,255,255,0)" indicator-active-color="rgba(255,255,0,0)" @change="swiperChange3">
		    <swiper-item>
			<scroll-view scroll-y='true'>
			<!-- 多行列表 -->
			<self-list :data="budget.asset" :trip="false"></self-list>
			</scroll-view>
			</swiper-item>
			<swiper-item>
			<scroll-view scroll-y='true'>
			
			<!-- 多行列表 -->
			<self-list :data="budget.budget" :trip="false"></self-list>
			</scroll-view>
			</swiper-item>
			
		  </swiper>
		</div>
		
		
	</view>
</template>

<script>
	import selfList from '@/components/self-list/self-list.vue'
	import WucTab from '@/components/wuc-tab/wuc-tab.vue'
	import {mapState,mapActions} from 'vuex'
	export default {
		components:{
			WucTab,
			selfList
		},
		data() {
			return {
				//选项卡
				 tabList3: [{ name: '资产' }, { name: '负债和所有者权力' }],
				 TabCur3: 0,
			};
		},
		computed:mapState('report',['budget']),
		methods: {
			...mapActions('report',['getBalanceRpt']),
			change(e) {
				console.log(e);
				
				this.getBalanceRpt()
				
			},
			//选项卡
			 swiperChange3(e) {
				 console.log(e)
			    let { current } = e.target;
			    this.TabCur3 = current;
			},
		}
	}
	
</script>

<style scoped>
	div,
	scroll-view,
	swiper {
		box-sizing: border-box;
	}
	div {
	  font-size: 28upx;
	  background-color: #f1f1f1;
	}
	.swiper {
	    height: calc(100vh - 290upx) ;
		
	}
	/* 选项卡 */
	.text-orange{
	  color:#f37b1d
	}
	.text-black{
	  color:#333333;
	}
	.bg-white{
	    background-color: #ffffff;
	}
	.text-center {
	    text-align: center;
	}
	
	scroll-view {
		height: 100%;
	}

</style>
