<template>
	<view class="content">
		<view class="uni-card navbar">
			<view class="item"><uni-icon type="home-filled" color="#fc504f" size="30"></uni-icon></view>
			<view class="item"><uni-icon type="chatboxes-filled" color="#6969ff" size="30"></uni-icon></view>
			<view class="item"><uni-icon type="contact" color="#fe6603" size="30"></uni-icon></view>
		</view>
		<view class="uni-card">
				<view class="box">
					<view class="row1">
						<view class="item">
							<view>{{taking}}</view><view class="items">营业收入</view>
						</view>
						<view class="item">
						  <view>{{expense}}</view> <view class="items">支出</view>   
						</view>
						<view class="item">
							<view>{{profits}}</view> <view class="items">净利润</view> 
						</view>
					</view>
					<view class="row2">
						<view class="item">
							<view>{{tax}}</view> <view class="items">应纳税额</view>  
						</view>
						<view class="item">
							<view class="details"><navigator url="../details/details">查看详情></navigator></view>
						</view>
					</view>
				</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				taking : '0.00',
				expense: '0.00',
				profits: '0.00',
				tax : '0.00',
			}
		},
		onLoad() {

		},
		methods: {
			
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.box {display: flex;flex-wrap: wrap;}
	.row1 {flex-basis: 100%; display: flex;flex: 1;justify-content: space-between;}
	.row2 {flex-basis: 100%; display: flex;justify-content: space-between;}
	.item { display: flex;flex-direction: column;}
	.uni-card {padding: 20rpx 20rpx;background-color:#fad795; color:#8b562a;}
	.details {margin-top: 30rpx;color: #f16660;}
	.items {color: #000000;}
	.navbar {display: flex;justify-content: space-between;width: 66%;
}
</style>
