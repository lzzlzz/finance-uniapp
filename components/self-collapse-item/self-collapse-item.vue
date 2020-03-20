<template>
	<view>
		
		<view class="headline"><text class="cuIcon-titles text-orange"></text>账龄详情</view>
		<view class="uni-list">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(value, key) in listData" :key="key" >
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
	props:['listData'],
	
};
</script>

<style lang="scss" scoped>



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
		background-image: linear-gradient(to bottom right, $uni-bg-color-start, $uni-bg-color-end);
		height: 83rpx;
		padding-left: 10rpx;
		padding-left: 40rpx;
		padding-top: 30rpx;
		font-size: 1.3em;
		color: white;
		.text-orange {
			color:#ffe390 ;
		}
	}
	
</style>
