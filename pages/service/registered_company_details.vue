<template>
	<view class="service-body">
		<view class="service-title">{{service_name}}</view>
		<view class="title">{{show_list[0].name}}</view>
		<view>
			<uni-grid :column="3" :highlight="true">
				<uni-grid-item v-for="(item) in show_list[0].detail" >
					<image :src="item.url" class="image" mode="aspectFill" />
					<text class="text">{{ item.text }}</text>
				</uni-grid-item>
			</uni-grid>
		</view>
		<view class="text"> {{show_list[0].description}}</view>

		<view class="title">{{show_list[1].name}}</view>
		<view class="text" v-for="(info) in show_list[1].detail" >{{info}}</view>

		<view class="title">{{show_list[2].name}}</view>

		<view class="text" v-for="(info) in show_list[2].detail" >{{info}}</view>

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
					// {
					// 		iconPath: '../../static/images/service-img/1215884.png',
					// 		selectedIconPath: '../../static/images/service-img/1215884.png',
					// 		text: '在线留言',
					// 		active: false
					// 	},
					content: [

						{
							iconPath: '../../static/images/service-img/1215851.png',
							selectedIconPath: '../../static/images/service-img/1215851.png',
							text: '免费咨询',
							active: false
						}
					]
				},
				company_limited_list: [{
						name: '注册流程',
						detail: [{
								url: '../../static/images/service-img/1215883.png',
								text: '01 核准公司名称'
							},
							{
								url: '../../static/images/service-img/1215863.png',
								text: '02 递交资料'
							},
							{
								url: '../../static/images/service-img/1215855.png',
								text: '03 领取营业执照'
							},
						],
						description: '由于各地区情况不同，以上资料信息仅供参考，详情请拨打 15950524039，我们竭诚为您服务'
					},
					{
						name: '所需资料',
						detail: [
							'1. 公司设立登记申请书',
							'2. 股东的主体资格证明或者自然人身份证件复印件',
							'3. 住所使用证明；全体股东签署的公司章程',
							'4. 依法设立的验资机构出具的验资证明',
							'5. 以股权出资的，提交《股权认缴出资承诺书》',
							'6. 董事、监事和经理的任职文件及身份证件复印件'
						],

					},
					{
						name: '即将获得',
						detail: [
							'营业执照正本',
							'营业执照副本',
							'信用代码证明',
							'公司章程',
							'印章及存留卡'
						],
					}
				],
				partnership_list: [{
						name: '注册流程',
						detail: [{
								url: '../../static/images/service-img/1215883.png',
								text: '01 核准公司名称'
							},
							{
								url: '../../static/images/service-img/1215863.png',
								text: '02 递交资料'
							},
							{
								url: '../../static/images/service-img/1215855.png',
								text: '03 领取营业执照'
							},
						],
						description: '由于各地区情况不同，以上资料信息仅供参考，详情请拨打 15950524039，我们竭诚为您服务'
					},
					{
						name: '所需资料',
						detail: [
							'1. 企业设立登记申请书',
							'2. 全体合伙人的身份证明或主体资格证明，合伙协议',
							'3. 全体合伙人对各合伙人认缴或者实际缴付出资的确认书',
							'4. 企业名称预先核准通知书及预先核准名称投资人名录表',
							'5. 合伙人为外商投资企业（不含外商投资的投资性公司），合伙企业申请的经营范围涉及《外商投资产业指导目录》中限制类的，还应提交商务部门的批准文件',
							'6. 经营范围涉及前置许可项目的，应提交有关审批部门的批准文件'
						],
					},
					{
						name: '即将获得',
						detail: [
							'营业执照正本',
							'营业执照副本',
							'信用代码证明',
							'公司章程',
							'印章及存留卡'
						],
					}
				],
				individual_proprietorship_list: [{
						name: '注册流程',
						detail: [{
								url: '../../static/images/service-img/1215883.png',
								text: '01 核准公司名称'
							},
							{
								url: '../../static/images/service-img/1215863.png',
								text: '02 递交资料'
							},
							{
								url: '../../static/images/service-img/1215855.png',
								text: '03 领取营业执照'
							},
						],
						description: '由于各地区情况不同，以上资料信息仅供参考，详情请拨打 15950524039，我们竭诚为您服务'
					},
					{
						name: '所需资料',
						detail: [
							'1. 投资人签署的《个人独资企业登记(备案)申请书》',
							'2. 投资人身份证明复印件（居民身份证或户籍证明）',
							'3. 投资人委托代理人的，应当提交投资人的委托书原件和代理人的身份证明或资格证明复印件(核对原件)',
							'4. 企业住所证明',
							'5. 从事法律、行政法规规定须报经有关部门审批的业务的，应当提交有关部门的批准文件',
							'6. 国家工商行政管理总局规定提交的其他文件'
						],
					},
					{
						name: '即将获得',
						detail: [
							'营业执照正本',
							'营业执照副本',
							'信用代码证明',
							'公司章程',
							'印章及存留卡'
						],
					}
				],
				foreign_enterprise_list: [{
						name: '注册流程',
						detail: [{
								url: '../../static/images/service-img/1215883.png',
								text: '01 核准公司名称'
							},
							{
								url: '../../static/images/service-img/1215863.png',
								text: '02 递交资料'
							},
							{
								url: '../../static/images/service-img/1215855.png',
								text: '03 领取营业执照'
							},
						],
						description: '由于各地区情况不同，以上资料信息仅供参考，详情请拨打 15950524039，我们竭诚为您服务'
					},
					{
						name: '所需资料',
						detail: [
							'1. 承诺书、法律文件送达委托书',
							'2. 办理人员授权委托书、办理人员身份证复印件',
							'3. 设立外资企业申请书、设立行政许可申请表(投资方签字)',
							'4. 可行性分析报告(包括文字及经济部分，由投资方签字盖章)',
							'5. （1）投资外方是公司，需商业登记证、法定代表人有效证明文件，及资信证明。公司成立满一年以上，需要提供审计报告原件（2）法定代表人为大陆提供身份证原件；若是香港人需提供港澳通行证及香港永久身份证（需公证认证），以上证明需经所在国家公证机关公证并经我国驻该国使领馆认证，港澳台仅需提供当地公证机构的公证文件',
							'6. 房屋、场地租赁协议及产权证明复印件、章程中文正式文本（全体投资方签字）',
							'7. 商业企业需提供以下文件：进出口商品目录（经营范围有进出口时提供）和 投资方为公司并成立一年以上需提供上一年度审计报告',
							'8. 以上文件如有外文需翻译公司翻译，并在翻译件上加盖翻译公司公章，提供翻译公司营业执照复印件加盖翻译公司公章'
						],
					},
					{
						name: '即将获得',
						detail: [
							'营业执照正本',
							'营业执照副本',
							'信用代码证明',
							'公司章程',
							'印章及存留卡'
						],
					}
				],
				domestically_funded_enterprise_list: [{
						name: '注册流程',
						detail: [{
								url: '../../static/images/service-img/1215883.png',
								text: '01 核准公司名称'
							},
							{
								url: '../../static/images/service-img/1215863.png',
								text: '02 递交资料'
							},
							{
								url: '../../static/images/service-img/1215855.png',
								text: '03 领取营业执照'
							},
						],
						description: '由于各地区情况不同，以上资料信息仅供参考，详情请拨打 15950524039，我们竭诚为您服务'
					},
					{
						name: '所需资料',
						detail: [
							'1. 企业设立登记申请书',
							'2. 企业公司章程',
							'3. 企业国有资产产权登记表，集体所有制企业提交验资报告',
							'4. 主管部门或审批机关的批准文件',
							'5. 注册地址使用证明，包括住所租赁使用证明、住所产权归属证明',
							'6. 法定代表人履历表及身份证复印件'
						],

					},
					{
						name: '即将获得',
						detail: [
							'营业执照正本',
							'营业执照副本',
							'信用代码证明',
							'公司章程',
							'印章及存留卡'
						],
					}
				],
				all_list: [],
				show_list: []
			}
		},
		onLoad: function(e) {
			console.log(e)
			this.service_name = e.service_name
			this.all_list = [this.company_limited_list, this.partnership_list, this.individual_proprietorship_list, this.foreign_enterprise_list,
				this.domestically_funded_enterprise_list
			]
			this.show_list = this.all_list[e.id]
			// console.log(this.show_list)
		},
		methods: {
			fab_trigger(e) {
				console.log(e)
				// if (e.item.text == "在线留言") {
				// 	console.log("在线留言")
				// 	uni.navigateTo({
				// 		url: 'message'
				// 	})
				// }

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
