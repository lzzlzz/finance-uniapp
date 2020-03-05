<template>
	<view>
		
		<view v-if="haspic" class="pic_list">
			<view @tap="clickPic(y)" v-for="(x, y) in picList" :key="y">
				<image :src="x.picPath"></image>
			</view>
		</view>
		<view v-else> 暂无合同图片</view>
	</view>
</template>

<script>
import config from '@/common/config.js'
const url_config = config.get('url_config');
export default {
	data() {
		return {
			picList: [],
			banner: {},
			//是否有图片 如果为false就显示暂无图片
			haspic:true,
		};
	},
	onLoad(event) {
		// // 获取图片列表数据
		// this.picList=uni.getStorageSync("imgPreviewPicList");
		// TODO 后面把参数名替换成 payload
		const payload = event.detail;
		// 目前在某些平台参数会被主动 decode，暂时这样处理。
		try {
			this.banner = JSON.parse(decodeURIComponent(payload));
		} catch (error) {
			this.banner = JSON.parse(payload);
		}
		console.log(this.banner.contract_id)
		uni.setNavigationBarTitle({
			title: this.banner.name
		});
		this.getDetail();
	},
	onUnload() {
		uni.removeStorageSync("imgPreviewPicList");
		uni.removeStorageSync("currentImgIndex");
	},
	methods: {
		getDetail() {
			//获取图片数据，构造picList
			let that = this
			uni.request({
				url: url_config + '/contractImage?contract_id=' + this.banner.contract_id,
				success: (res) => {
					//返回值代码不是2007 显示暂无图片
					console.log(res)
					if(res.data.code.trim() != '2007'){
						that.haspic = false
					}else{
						console.log(res)
						if (res.statusCode == 200) {
							for(let path of res.data.data){
								let temp = {}
								temp.picPath = url_config + path.substr(path.indexOf('/contract/'))
								that.picList.push(temp) 
							}							
						}
						uni.setStorageSync('imgPreviewPicList', that.picList);
						console.log(that.picList)
					}
					
				},
				fail: () => {
					console.log('fail');
				}
			});
		},
		clickPic(index) {
			uni.setStorageSync("currentImgIndex",index);
			uni.navigateTo({
				url: '../contractPreview/contractPreview'
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.pic_list {
	display: flex;
	flex-flow: row wrap;
	> view {
		flex: 0 0 240rpx;
		height: 240rpx;
		margin: 7.5rpx 0 0 7.5rpx;
		> image {
			width: 100%;
			height: 100%;
		}
	}
}
</style>
