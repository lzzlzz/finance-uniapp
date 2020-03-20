<template>
	<view>
		
		<uni-calendar :insert="true" @change="change"/>
		
		 
		
		<!-- 多行列表 -->
		<view class="uni-list">
			
			  <view v-for="(item,index) in profit.profitList" :key="index" class="uni-list-cell uni-list-cell-pd " >
			  	<view class="multi-list-container">
			  		<view class="multi-list-title">
			  			<view style="word-break: break-all;"><text class="uni-title">{{item.name}}</text></view>
			  		</view>
			  		<view class="multi-list-cell">
			  			
			  			<text class="uni-text uni-bold" >{{item.value[0]|priceFormat(2,'￥',true)}}</text>
			  			<text class="uni-text uni-bold" >{{item.value[1]|priceFormat(2,'￥',true)}}</text>
			  		</view>
			  		<view class="multi-list-cell">
			  			<text class="uni-text-small uni-ellipsis text-gray">{{attrs[0]}}</text>
			  			<text class="uni-text-small uni-ellipsis text-gray ">{{attrs[1]}}</text>
			  		</view>
			  	</view>		
			  </view>
		</view>
		
</view>
</template>

<script>

import {mapState,mapActions} from 'vuex'
	
	export default {
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

<style lang="scss" scoped>
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
