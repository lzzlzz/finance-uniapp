<template>
	<view>
		<wuc-tab :tab-list="tabList3" :textFlex='true' :tabCur.sync="TabCur3" tab-class="tab-class"
		 select-class="text-orange"></wuc-tab>
		<swiper :current="TabCur3" class="swiper" duration="300" :circular="true" indicator-color="rgba(255,255,255,0)"
		 indicator-active-color="rgba(255,255,0,0)" @change="swiperChange3">
			<swiper-item>
				<scroll-view scroll-y='true' style="height: 100%;" @scrolltolower="$emit('loadData')">
					<!-- 多行列表 -->
					<self-list :data="incomeLists" :istrip="true" :attrs='attrs'></self-list>
					<uni-load-more :status="status" :content-text="contentText" @handload="$emit('loadData')" />
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view scroll-y='true' style="height: 100%;" @scrolltolower="$emit('loadData')">
					
					<!-- 多行列表 -->

					<self-list :data="expenseLists"  :istrip="true"></self-list>
					<uni-load-more :status="status" :content-text="contentText" @handload="$emit('loadData')" />
				</scroll-view>
			</swiper-item>

		</swiper>
	</view>
</template>

<script>
	import selfList from '@/components/self-list/self-list.vue'
	import WucTab from '@/components/wuc-tab/wuc-tab.vue'
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
	export default {
		name:'selfSwiper',
		components: {
			selfList,
			WucTab,
			uniLoadMore
		},
		data() {
			return {
				//列表属性
				attrs:['金额','流动方向'],
				//选项卡
				tabList3: [{
					name: '收入'
				}, {
					name: '支出'
				}],
				TabCur3: 0,
				//触底加载更多
				
				contentText: {
					contentdown: '点击加载更多',
					contentrefresh: '加载中',
					contentnomore: '没有更多'
				
				},
				
			};
		},
		props:['status','incomeList','expenseList'],
		methods:{
			//选项卡
			swiperChange3(e) {
				console.log(e)
				let {
					current
				} = e.target;
				this.TabCur3 = current;
				
			},
		}
	}
</script>

<style lang="scss">
	
	div,
	scroll-view,
	swiper {
		box-sizing: border-box;
	}
	
	scroll-view {
		height: 100%;
	}
	
	div {
		font-size: 28upx;
		background-color: #f1f1f1;
	}
	
	.swiper {
		height: calc(100vh - 290upx);
	
	}
	
	.cu-bar {
		display: flex;
		position: relative;
		align-items: center;
		min-height: 100upx;
		justify-content: space-between;
	}
	
	.cu-bar .action {
		display: flex;
		align-items: center;
		height: 100%;
		justify-content: center;
		max-width: 100%;
		background-color: #ffffff;
	}
	
	.cu-bar .action:first-child {
		margin-left: 30upx;
		font-size: 30upx;
	}
	
	
	.text-orange {
		color: #f37b1d
	}
	
	
	
	.padding {
		padding: 30upx;
	}
	
	.margin {
		margin: 30upx;
	}
	
	.margin-top {
		margin-top: 30upx;
	}
	.tab-class{
		text-align: center;
		color: #333333;
		background-color: #ffffff;
	}
	

</style>
