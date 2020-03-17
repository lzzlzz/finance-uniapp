<template>
	<view>
		
		<view class="headline"><text class="cuIcon-titles text-orange"></text>账龄详情</view>
		<view class="uni-list">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(value, key) in data" :key="key" >
				<view class="uni-media-list" >
					<view class="uni-media-list-body">
						<view class="uni-media-list-text-top">
							<text>{{ value.auxAccCustomerName }}</text>
						</view>		
						<view class="uni-media-list-text-bottom">
							<view >金额：<text style="color: #000000;">{{ value.amount|priceFormat(2,'￥',true) }}</text></view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>

export default {
	name:'selfCollapseItem',
	data() {
		return {};
	},
	props:['data'],
	
};
</script>

<style>



.uni-media-list-body {
	height: auto;
	justify-content: space-around;
}


.uni-media-list-text-top {
	height: 65upx;
	font-size: 28upx;
	overflow: hidden;
	display: flex;
	justify-content: space-between;
}

.uni-media-list-text-bottom {
	height:50upx;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}
.headline {
		background-color: #e7e7e7;
		height: 83rpx;
		font-weight: bold;
		padding-left: 10rpx;
		font-weight: bold;
		padding-left: 40rpx;
		padding-top: 30rpx;
		font-size: 1.3em;
	}
	.text-orange {
		color: #c7a566;
	}
	
</style>
