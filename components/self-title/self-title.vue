<template>
	<view class="service-title">
		<text class="service-title-text">{{Chinese}}</text>
		<text class="service-title-shadow">{{English}}</text>
	</view>
</template>

<script>
	export default{
		name:'selfTitle',
		props:['Chinese','English'],
	}
</script>

<style lang="scss" scoped>
	$service-title-padding :30rpx;
	$service-title-margin:10rpx;
	.service-title {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		font-size: $uni-font-size-lg;
		color: #464e52;
		padding: $service-title-padding;
		margin-top: $service-title-margin;
		position: relative;
		background-color: #fdfdfd;
		.service-title-text{
			z-index: 2;
			font-weight: bold;
		}
		.service-title-shadow{
			position: absolute;
			left: ($service-title-padding*1.5);
			top:($service-title-margin*0.5);
			color: $uni-bg-color-hover;
			font-size: (1.5*$uni-font-size-lg);
			font-style: italic;
			
		}
	}
	
	
	
	.service-title:after {
		content: '';
		position: absolute;
		left: 0;
		margin: auto;
		top: 0;
		bottom: 0;
		width: 10upx;
		height: 40upx;
		border-top-right-radius: 10upx;
		border-bottom-right-radius: 10upx;
		background-color: $uni-bg-color-coffee
	}
	
</style>
