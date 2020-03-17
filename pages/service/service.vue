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
					<image :src="item.url" class="image" mode="aspectFill" />
					<text class="text">{{ item.text }}</text>
				</uni-grid-item>
			</uni-grid>
		</view>
		<self-title Chinese="记账报税" English="Account&Tax"></self-title>
		<view class="service-body">
			<uni-grid :column="3" :highlight="true" @change="open_accounting_and_tax_reporting_details">
				<uni-grid-item v-for="(item, index2) in accounting_and_tax_reporting_list" :key="index2">
					<image :src="item.url" class="image" mode="aspectFill" />
					<text class="text">{{ item.text }}</text>
				</uni-grid-item>
			</uni-grid>
		</view>

		<self-title Chinese="企业变更" English="Enterprise"></self-title>
		<view class="service-body">
			<uni-grid :column="3" :highlight="true" @change="open_change_of_enterprise_details">
				<uni-grid-item v-for="(item, index3) in change_of_enterprise_list" :key="index3">
					<image :src="item.url" class="image" mode="aspectFill" />
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
						url: '../../static/images/service-img/1215847.png',
						text: '有限公司'
					},
					{
						url: '../../static/images/service-img/1215861.png',
						text: '合伙企业'
					},
					{
						url: '../../static/images/service-img/1215852.png',
						text: '个人独资'
					},
					{
						url: '../../static/images/service-img/1215849.png',
						text: '外资公司'
					},
					{
						url: '../../static/images/service-img/1215868.png',
						text: '内资公司'
					}

				],

				accounting_and_tax_reporting_list: [{
						url: '../../static/images/service-img/1215843.png',
						text: '一般纳税人'
					},
					{
						url: '../../static/images/service-img/1215854.png',
						text: '小规模纳税人'
					}

				],

				change_of_enterprise_list: [{
						url: '../../static/images/service-img/1215865.png',
						text: '地址变更'
					},
					{
						url: '../../static/images/service-img/1215871.png',
						text: '法人变更'
					},
					{
						url: '../../static/images/service-img/1215872.png',
						text: '股权变更'
					},
					{
						url: '../../static/images/service-img/1215860.png',
						text: '注册资本金变更'
					},
					{
						url: '../../static/images/service-img/1215878.png',
						text: '名称变更'
					},
					{
						url: '../../static/images/service-img/1215887.png',
						text: '经营范围变更'
					},
					{
						url: '../../static/images/service-img/1215870.png',
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
</style>
