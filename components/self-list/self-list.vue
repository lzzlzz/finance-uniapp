<template>
	<view class="uni-list">
		<block v-for="(item,index) in data" :key="index">
			<view class="uni-list-cell uni-list-cell-pd " >
				<block v-if="istrip">
					<view class="multi-list-container">
						<view class="multi-list-title">
							<view style="word-break: break-all;"><text class="uni-title">{{item.name}}</text></view>
						</view>
						<view class="multi-list-cell">
							<text v-if='!isProfit' class="uni-text">{{item.amount|priceFormat(2,'￥',true)}}</text>
							<text v-if='isProfit'  class="uni-text">{{item.value[0]|priceFormat(2,'￥',true)}}</text>
							<text v-if='!isProfit' class="uni-text">{{item.direction}}</text>
							<text v-if='isProfit'  class="uni-text">{{item.value[1]|priceFormat(2,'￥',true)}}</text>
							
						</view>
						<view class="multi-list-cell">
							<text class="uni-text-small uni-ellipsis text-gray">{{attrs[0]}}</text>
							<text class="uni-text-small uni-ellipsis text-gray ">{{attrs[1]}}</text>
						</view>
					</view>
					
				</block>
				<block v-if="!istrip">
					  <text class="uni-ellipsis single-list-cell " style=" padding:8upx 0;">{{item.name}}</text>
					  <text class="uni-h5 ">{{item.value|priceFormat(2,'￥',true)}}</text>
					
				</block>
				
	
						
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		name:'selfList',
		data() {
			return {
				
			}
		},
		props:{
			data:{
				type:Array,
				default:()=>[]
			},
			istrip:{
				type:Boolean,
				default:false
			},
			attrs:{
				type:Array,
				default:()=>['金额','流动方向']
			},
			isProfit:{
				type:Boolean,
				default:false
			}
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
		content: '';
		-webkit-transform: scaleY(1);
		transform: scaleY(1);
		background-color: #c8c7cc;
	}
</style>
