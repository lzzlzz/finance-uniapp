<template>
	<view class="service-body">
		<view class="service-title">{{service_name}}</view>


		<view class="title">{{taxpayer_list[0].name}}</view>
		<view class="text" v-for="(info,index) in taxpayer_list[0].detail" :key="'info1'+index">
			<view>{{info.name}}</view>
			<view class="text" v-for="(detail,index) in info.detail" :key="'info2'+index">{{detail}}</view>
		</view>

		<view class="title">{{taxpayer_list[1].name}}</view>
		<view class="text" v-for="(info,index) in taxpayer_list[1].detail" :key="'info3'+index">{{info}}</view>
		<uni-fab :pattern="fab_para.pattern" :content="fab_para.content" :horizontal="fab_para.horizontal" :vertical="fab_para.vertical"
		 :direction="fab_para.direction" @trigger="fab_trigger"></uni-fab>
	</view>
</template>

<script>
	import uniGrid from '@/components/uni-grid/uni-grid.vue'
	import uniGridItem from '@/components/uni-grid-item/uni-grid-item.vue'
	import uniFab from '@/components/uni-fab/uni-fab.vue'
	export default {
		components: {
			uniGrid,
			uniGridItem,
			uniFab
		},
		data() {
			return {
				service_name: '',
				fab_para: {
					horizontal: 'left',
					vertical: 'bottom',
					direction: 'horizontal',
					pattern: {
						color: '#7A7E83',
						backgroundColor: '#fff',
						selectedColor: '#007AFF',
						buttonColor: "#007AFF"
					},
					content: [{
							iconPath: '../../static/images/service-img/1215884.png',
							selectedIconPath: '../../static/images/service-img/1215884.png',
							text: '在线留言',
							active: false
						},

						{
							iconPath: '../../static/images/service-img/1215851.png',
							selectedIconPath: '../../static/images/service-img/1215851.png',
							text: '免费咨询',
							active: false
						}
					]
				},
				taxpayer_list: [

					{
						name: '所需资料',
						detail: [{
								name: '新公司需要材料',
								detail: [
									'1. 原始证照（营业执照、开户行许可证、公章、法人和股东身份证原件）',
									'2. 个税明细申报工资表',
									'3. 一证通；可证书复印件或许可证明'
								]
							},
							{
								name: '以往成立公司需要材料',
								detail: [
									'1. 原始证照（营业执照、开户行许可证、公章、法人和股东身份证原件）',
									'2. 个税明细申报工资表',
									'3. 一证通',
									'4. 记账凭证',
									'5. 银行对账单',
									'6. 总账、明细账',
									'7. 税务申报表',
									'8. 工商年报、报告书'
								]
							}
						]
					},
					{
						name: '即将获得',
						detail: [
							'票据整理',
							'工商年报',
							'税控抄税',
							'装订凭证',
							'纳税申报',
							'残保申报',
							'编制记账报税',
							'编制财务报表',
							'总账及明细账',
							'年终汇算清缴',
							'财税咨询解答',
							'税负预警提示'
						]
					}
				]
			}
		},
		onLoad: function(e) {
			// console.log(e.id)
			this.service_name = e.service_name

		},
		methods: {
			fab_trigger(e) {
				console.log(e)
				if (e.item.text == "在线留言") {
					console.log("在线留言")
					uni.navigateTo({
						url: 'message'
					})
				}

				if (e.item.text == "免费咨询") {
					console.log("免费咨询")
					uni.makePhoneCall({
						phoneNumber: '15950524039'
					});

				}

			}
		}
	}
</script>


<style>
	.title {
		display: flex;
		justify-content: center;
		align-items: center;


		font-size: 40upx;
		color: #464e52;
		padding: 30upx;
		margin-top: 20upx;

		background-color: #fdfdfd
	}

	.service-title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 32upx;
		color: #464e52;
		padding: 30upx;
		margin-top: 20upx;
		position: relative;
		background-color: #fdfdfd
	}

	.service-title__after {
		position: relative;
		color: #031e3c
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
		background-color: #031e3c
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
