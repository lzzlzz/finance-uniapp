<template>
	<view>
		
		<view class="headline"><text class="cuIcon-titles text-orange"></text>合同归档</view>
		<view class="uni-list">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(value, key) in listData" :key="key" >
				<view class="uni-media-list" @click="goDetail(value)">
					<view class="uni-media-list-body">
						<view class="uni-media-list-text-top">
							<text  >{{ value.name }}</text>
						</view>
						<view class="uni-media-list-text-bottom">
							<text>对方单位：{{ value.company }}</text>
						</view>
						<view class="uni-media-list-text-bottom">
							<text>
								<text>合同有效期：</text>
								<text>{{ value.sign_date }} -</text>
								<text>- {{ value.due_date }}</text>
							</text>
							<uni-icons type="arrowright" size=30 color="#888"></uni-icons>
						</view>
						<view class="uni-media-list-text-bottom">
							<text>合同总额：{{ value.money|priceFormat(2,'￥',true) }}</text>
						</view>
						<view class="uni-media-list-text-bottom">
							<text>
								<text >合同类型：{{ value.type }} &nbsp;&nbsp;&nbsp;&nbsp;合同状态：{{ value.status }}</text>				
							</text>
							
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import MinCache from '@/common/storage.js'
import config from '@/common/config.js'
import uniIcons from '@/components/uni-icons/uni-icons.vue'
import helper from '@/common/helper.js'
const url_config = config.get('url_config');
export default {
	components: {
		uniIcons
	},
	data() {
		return {
			listData: [],
			

		};
	},
	onLoad() {
		this.getList();
	},

	methods: {
		change(e) {
			console.log(e);
		},
		getList() {
			helper.showLoading();
			let that = this 
			let mc = new MinCache()
			let userName = mc.get('userInfo').userName
			uni.request({
				url: url_config+'/contracts/'+userName+'/username',
				success: res => {
					console.log(res)
					that.listData = res.data.data
					uni.hideLoading()
				},
				fail: (data, code) => {
					console.log('fail' + JSON.stringify(data));
					uni.showModal({
					    title: '提示',
					    content: '数据加载失败，请再次尝试',
					    success: function (res) {
					        if (res.confirm) {
					            console.log('用户点击确定');
								that.getList()()
					        } else if (res.cancel) {
								console.log('用户点击取消');
								uni.hideLoading()
							}
					    }
					});
				}
			});
		},
		goDetail: function(e) {
		
			let detail = {
				contract_id: e.contract_id,
				name: e.name
			};
			uni.navigateTo({
				url: './contractList/contractList?detail=' + encodeURIComponent(JSON.stringify(detail))
			});
		},
		
		
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
