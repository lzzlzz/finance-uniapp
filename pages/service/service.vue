<template>

	<view>

		<swiper indicator-dots="true" circular="true" autoplay="true" interval="5000" duration="500" indicator-color="#8799a3"
		 indicator-active-color="#0081ff">
			<swiper-item v-for="(item, index) in banner" :key="index">
				<image :src="item.image" mode="aspectFill" class="bgimg" />

			</swiper-item>
		</swiper>


		<self-title Chinese="注册公司" English="Company"></self-title>
		<view class="service-body">
			<uni-grid :column="3" :highlight="true" @change="open_registered_company_details">
				<uni-grid-item v-for="(item, index1) in registered_company_list" :key="index1">
					<view  :class="item.image" />
					<text class="text">{{ item.text }}</text>
				</uni-grid-item>
			</uni-grid>
		</view>
		<self-title Chinese="记账报税" English="Account&Tax"></self-title>
		<view class="service-body">
			<uni-grid :column="3" :highlight="true" @change="open_accounting_and_tax_reporting_details">
				<uni-grid-item v-for="(item, index2) in accounting_and_tax_reporting_list" :key="index2">
					<view  :class="item.image" />
					<text class="text">{{ item.text }}</text>
				</uni-grid-item>
			</uni-grid>
		</view>

		<self-title Chinese="企业变更" English="Enterprise"></self-title>
		<view class="service-body">
			<uni-grid :column="3" :highlight="true" @change="open_change_of_enterprise_details">
				<uni-grid-item v-for="(item, index3) in change_of_enterprise_list" :key="index3">
					<!-- <image :src="item.url" class="image" mode="aspectFill" /> -->
					<view  :class="item.image" />
					<text class="text">{{ item.text }}</text>
				</uni-grid-item>
			</uni-grid>
		</view>
		<!-- <view class="service-title">税务筹划</view>
		<view class="service-body">

		</view> -->
	</view>
</template>

<script>
	import selfTitle from '@/components/self-title/self-title.vue'
	import uniGrid from '@/components/uni-grid/uni-grid.vue'
	import uniGridItem from '@/components/uni-grid-item/uni-grid-item.vue'


	export default {
		components: {
			uniGrid,
			uniGridItem,
			selfTitle

		},
		data() {
			return {
				banner: [{
						image: '../../static/images/service-img/banner1.jpg',
					},
					{
						image: '../../static/images/service-img/banner2.jpg',
					},
					{
						image: '../../static/images/service-img/banner3.jpg',
					},
					{
						image: '../../static/images/service-img/banner4.jpg',
					}
				],

				registered_company_list: [{
						image: 'icon icon-c1',
						text: '有限公司'
					},
					{
						image: 'icon icon-c2',
						text: '合伙企业'
					},
					{
						image: 'icon icon-c3',
						text: '个人独资'
					},
					{
						image: 'icon icon-c4',
						text: '外资公司'
					},
					{
						image: 'icon icon-c5',
						text: '内资公司'
					}

				],

				accounting_and_tax_reporting_list: [{
						image: 'icon icon-t1',
						text: '一般纳税人'
					},
					{
						image: 'icon icon-t2',
						text: '小规模纳税人'
					}

				],

				change_of_enterprise_list: [{
						image: 'icon icon-h1',
						text: '地址变更'
					},
					{
						image: 'icon icon-h2',
						text: '法人变更'
					},
					{
						image: 'icon icon-h3',
						text: '股权变更'
					},
					{
						image: 'icon icon-h4',
						text: '注册资本金变更'
					},
					{
						image: 'icon icon-h5',
						text: '名称变更'
					},
					{
						image: 'icon icon-h6',
						text: '经营范围变更'
					},
					{
						image: 'icon icon-h7',
						text: '注销'
					}

				]

			}
		},
		methods: {

			open_registered_company_details(e) {
				let {
					index
				} = e.detail
				// console.log(this.registered_company_list[index].text)
				uni.navigateTo({
					url: 'registered_company_details?id=' + index + '&service_name=' + this.registered_company_list[index].text
				})
			},
			open_change_of_enterprise_details(e) {
				let {
					index
				} = e.detail
				console.log(index)
				uni.navigateTo({
					url: 'change_of_enterprise_details?id=' + index + '&service_name=' + this.change_of_enterprise_list[index].text
				})

			},
			open_accounting_and_tax_reporting_details(e) {
				let {
					index
				} = e.detail
				console.log(index)
				uni.navigateTo({
					url: 'accounting_and_tax_reporting_details?id=' + index + '&service_name=' + this.accounting_and_tax_reporting_list[
						index].text
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import  url('../../common/css/my/icon.css');
	$service-title-padding :30rpx;
	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #efeff4
	}

	view {
		font-size: 28upx;
		line-height: inherit
	}

	.bgimg {
		position: fixed;
		width: 100%;
		height: 100%;
	}

	
	.service-body {
		border-top: 1px #f5f5f5 solid;
		padding: 30upx;
		background: #fff
	}

	.image {
		width: 75upx;
		height: 75upx;
	}

	.text {
		font-size: 26upx;
		margin-top: 10upx;
	}
	//图标
	.icon-c1{
		background-position: 0 100% ; //7,1a
	}
	.icon-c2{
		background-position: 99.721% 35.103% ; //3,5a
	}
	.icon-c3{
		background-position: 26.243% 16.429% ; //2,2a
	}
	.icon-c4{
		background-position: 52.504% 16.898% ; //2,3a
	}
	.icon-c5{
		background-position: 77.883% 84.743% ; //6,4a
	}
	.icon-t1{
		background-position: 28.294% 100% ; //7,2a
	}
	.icon-t2{
		background-position: 26.243% 0.45% ; //1,2a
	}
	.icon-h1{
		background-position: 0.347% 86.288% ; //6,1a
	}
	.icon-h2{
		background-position: 52.515% 0 ; //1,3a
	}
	.icon-h3{
		background-position: 100% 84.504% ; //6,5a
	}
	.icon-h4{
		background-position: 27.931% 84.824% ; //6,2a
	}
	.icon-h5{
		background-position: 100% 100% ; //7,5a
	}
	.icon-h6{
		background-position: 52.51% 84.685% ; //6,3a
	}
	.icon-h7{
		background-position: 27.912% 68.32% ; //5,2a
	}
</style>
