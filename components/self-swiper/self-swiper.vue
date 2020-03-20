<template>
	<view>
		<wuc-tab :tab-list="tabList3" :textFlex='true' :tabCur.sync="TabCur3" tab-class="tab-class"
		 select-class="text-orange"></wuc-tab>
		<swiper :current="TabCur3" class="swiper" duration="300" :circular="true" indicator-color="rgba(255,255,255,0)"
		 indicator-active-color="rgba(255,255,0,0)" @change="swiperChange3">
			<swiper-item>
				<scroll-view :scroll-y='true'  @scrolltolower="$emit('loadData')">
					<!-- 多行列表 -->
					<view class="uni-list">
						
						  <view v-for="(item,index) in leftList" :key="index" class="uni-list-cell uni-list-cell-pd " >
						  	<view class="multi-list-container">
						  		<view class="multi-list-title">
						  			<view style="word-break: break-all;"><text class="uni-title">{{item.name}}</text></view>
						  		</view>
						  		<view class="multi-list-cell">
						  			
						  			<text class="uni-text uni-bold" :class="leftActiveClass">{{item.amount|priceFormat(2,'￥',true)}}</text>
						  			<text class="uni-text uni-bold" :class="leftActiveClass">{{item.direction}}</text>
						  		</view>
						  		<view class="multi-list-cell">
						  			<text class="uni-text-small uni-ellipsis text-gray">{{attrs[0]}}</text>
						  			<text class="uni-text-small uni-ellipsis text-gray ">{{attrs[1]}}</text>
						  		</view>
						  	</view>		
						  </view>
					</view>
					<uni-load-more :status="status" :content-text="contentText" @handload="$emit('loadData')" />
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view scroll-y='true' style="height: 100%;" @scrolltolower="$emit('loadData')">
					<!-- 多行列表 -->
					
					<view class="uni-list">
						
						  <view v-for="(item,index) in rightList" :key="index" class="uni-list-cell uni-list-cell-pd " >
						  	<view class="multi-list-container">
						  		<view class="multi-list-title">
						  			<view style="word-break: break-all;"><text class="uni-title">{{item.name}}</text></view>
						  		</view>
						  		<view class="multi-list-cell">
						  			
						  			<text class="uni-text uni-bold" :class="rightActiveClass">{{item.amount|priceFormat(2,'￥',true)}}</text>
						  			<text class="uni-text uni-bold" :class="rightActiveClass">{{item.direction}}</text>
						  		</view>
						  		<view class="multi-list-cell">
						  			<text class="uni-text-small uni-ellipsis text-gray">{{attrs[0]}}</text>
						  			<text class="uni-text-small uni-ellipsis text-gray ">{{attrs[1]}}</text>
						  		</view>
						  	</view>		
						  </view>
					</view>
					<uni-load-more :status="status" :content-text="contentText" @handload="$emit('loadData')" />
				</scroll-view>
			</swiper-item>

		</swiper>
	</view>
</template>

<script>
	import WucTab from '@/components/wuc-tab/wuc-tab.vue'
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
	export default {
		name:'selfSwiper',
		components: {
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
		props:['status','leftList','rightList','leftActiveClass','rightActiveClass'],
		methods:{
			//选项卡
			swiperChange3(e) {
				// console.log(this.leftList)
				console.log(e)
				let {
					current
				} = e.target;
				this.TabCur3 = current;
				
			},
		}
	}
</script>

<style lang="scss" scoped  >
	
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
		height: calc(100vh - 240upx);
	
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
	
	
	
	.tab-class{
		text-align: center;
		color: #333333;
		background-color: #fff;
	}
	// 列表样式
	.multi-list-container{
		width: 100%;
		display: flex;
		flex-direction: column;
		padding:15rpx 15rpx 7.5rpx 15rpx;
		.multi-list-cell{
			width: 100%;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			
		}
		.multi-list-title{
			@extend .multi-list-cell;
			padding-bottom:20rpx;
		}
	}
	
	.uni-list-cell::after {
		position: absolute;
		z-index: 3;
		right: 0;
		bottom: 0;
		left: 30upx;
		right: 30upx;
		height: 1px;
		content: ' ';
		-webkit-transform: scaleY(1);
		transform: scaleY(1);
		background-color: #c8c7cc;
	}
	

</style>
