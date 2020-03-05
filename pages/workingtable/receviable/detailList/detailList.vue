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
import MinCache from '@/common/storage.js'
import url_config from '@/common/config.js'
import uniIcons from '@/components/uni-icons/uni-icons.vue'
export default {
	components: {
		uniIcons
	},
	data() {
		return {
			listData: [],
			banner:{}

		};
	},
	onLoad(event) {
		console.log(event)
		const payload = event.detail;
		// 目前在某些平台参数会被主动 decode，暂时这样处理。
		try {
			this.banner = JSON.parse(decodeURIComponent(payload));
		} catch (error) {
			this.banner = JSON.parse(payload);
		}
		//console.log(this.banner);
		uni.setNavigationBarTitle({
			title: this.banner.age+'账龄列表'
		});
		this.getList();
	},

	methods: {
		getList(){
			
			let res = uni.getStorageSync('aatemp');
			this.listData = res.items
		}
		
		
		
	}
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
