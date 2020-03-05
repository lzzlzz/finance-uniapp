<template>
	<view class="service-body">
		<view class="service-title">{{service_name}}</view>

		<view class="title">{{show_list[0].name}}</view>
		<view>
			<uni-grid :column="3" :highlight="true">
				<uni-grid-item v-for="(item, index) in show_list[0].detail" :key="'info1'+index">
					<image :src="item.url" class="image" mode="aspectFill" />
					<text class="text">{{ item.text }}</text>
				</uni-grid-item>
			</uni-grid>
		</view>
		<view class="text"> {{show_list[0].description}}</view>

		<view class="title">{{show_list[1].name}}</view>
		<view class="text" v-for="(info,index) in show_list[1].detail" :key = "'info2'+index">
			<view>{{info.name}}</view>
			<view class="text" v-for="(detail, index) in info.detail" :key = "'info3'+index">{{detail}}</view>
		</view>

		<view class="title">{{show_list[2].name}}</view>
		<view class="text" v-for="(info,index) in show_list[2].detail" :key = "'info4'+index">{{info}}</view>
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
				address_change_list: [

					{
						name: '变更流程',
						detail: [{
								url: '../../static/images/service-img/1215890.png',
								text: '01 沟通方案'
							},
							{
								url: '../../static/images/service-img/1215855.png',
								text: '02 整理资料'
							},
							{
								url: '../../static/images/service-img/1215864.png',
								text: '03 刻章等事项'
							},
							{
								url: '../../static/images/service-img/1215855.png',
								text: '04 领取营业执照'
							}
						],
						description: '由于各地区情况不同，以上资料信息仅供参考，详情请拨打400-888-****，我们竭诚为您服务'
					},
					{
						name: '所需资料',
						detail: [{
								name: '需要提交的文档资料',
								detail: [
									'1. 《公司变更（改制）登记申请书（公司备案申请表）》',
									'2. 《企业法人营业执照》正、副本',
									'3. 《指定（委托）书》',
									'4. 住所使用证明、房产证复印件，（产权为个人每页签字；产权人为单位的应加盖公章）',
									'5. 补充信息登记表'

								]
							},
							{
								name: '需要的基本资料及信息',
								detail: [
									'1. 营业执照正副本原件',
									'2. 组织机构代码证正副本原件',
									'3. 税务登记证正副本原件',
									'4. 统计证正副本原件',
									'5. 公章',
									'6. 法人身份证复印件',
									'7. 可注册公司的商用地址，住所使用证明、房产证复印件，（产权为个人每页签字；产权人为单位的应加盖公章）'
								]
							}
						]
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
				legal_person_change_list: [{
						name: '变更流程',
						detail: [{
								url: '../../static/images/service-img/1215890.png',
								text: '01 确认方案'
							},
							{
								url: '../../static/images/service-img/1215855.png',
								text: '02 整理资料'
							},
							{
								url: '../../static/images/service-img/1215863.png',
								text: '03 递交资料'
							},
							{
								url: '../../static/images/service-img/1215855.png',
								text: '04 领取营业执照'
							}
						],
						description: '由于各地区情况不同，以上资料信息仅供参考，详情请拨打400-888-****，我们竭诚为您服务'
					},
					{
						name: '所需资料',
						detail: [{
								name: '需要提交的文档资料',
								detail: [
									'1. 《公司变更（改制）登记申请书（公司备案申请表）》',
									'2. 《企业法人营业执照》正、副本',
									'3. 《指定（委托）书》',
									'4. 股东会决议（多人）或股东会决定（一人)',
									'5. 执行董事决定（经理担任法人），若设董事会，董事长担任法人。需要董事会决议（选举、免除与章程一致的法定代表人职务）',
									'6. 补充信息登记表'

								]
							},
							{
								name: '需要的基本资料及信息',
								detail: [
									'1. 营业执照正副本原件',
									'2. 组织机构代码证正副本原件',
									'3. 税务登记证正副本原件',
									'4. 统计证正副本原件',
									'5. 公章',
									'6. 新旧法人及董事、监事、经理身份证复印件'
								]
							}
						]
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
				share_change_list: [{
						name: '变更流程',
						detail: [{
								url: '../../static/images/service-img/1215890.png',
								text: '01 确认方案'
							},
							{
								url: '../../static/images/service-img/1215855.png',
								text: '02 整理资料'
							},
							{
								url: '../../static/images/service-img/1215863.png',
								text: '03 递交资料'
							},
							{
								url: '../../static/images/service-img/1215853.png',
								text: '04 完成变更备案'
							}
						],
						description: '由于各地区情况不同，以上资料信息仅供参考，详情请拨打400-888-****，我们竭诚为您服务'
					},
					{
						name: '所需资料',
						detail: [{
							name: ' ', //保持结构一致，便于渲染数据
							detail: [
								'1. 法定代表人签署的《企业变更（备案）登记申请书》（原件依份）',
								'2. 经办人身份证明',
								'3. 公司关于变更事项的决议或决定',
								'4. 修改后的公司章程（由股东签署,加盖公章）或者公司章程修正案（由公司法定代表人签署,加盖公章）',
								'5. 经公证、见证机构公证或见证的股权转让协议，划转股权的提交有权审批部门的划转文件',
								'6. 向原股东以外的人转让的，提交新股东的主体资格证明',
								'7. 因股权转让而变更为一人（自然人）独资有限公司的，应提交一人有限公司承诺书'
							]
						}]
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
				funds_change_list: [{
						name: '变更流程',
						detail: [{
								url: '../../static/images/service-img/1215890.png',
								text: '01 确认方案'
							},
							{
								url: '../../static/images/service-img/1215855.png',
								text: '02 整理资料'
							},
							{
								url: '../../static/images/service-img/1215863.png',
								text: '03 递交资料'
							},
							{
								url: '../../static/images/service-img/1215855.png',
								text: '04 领取营业执照'
							}
						],
						description: '由于各地区情况不同，以上资料信息仅供参考，详情请拨打 15950524039，我们竭诚为您服务'
					},
					{
						name: '所需资料',
						detail: [{
								name: ' ', //保持结构一致，便于渲染数据
								detail: [
									'1. 公司法定代表人签署的《公司变更登记申请书》',

									'2. 公司签署的《公司股东(发起人)出资情况表》',

									'3. 公司签署的《指定代表或者共同委托代理人的证明》(公司加盖公章)及指定代表或委托代理人的身份证复印件(本人签字);应标明具体委托事项、被委托人的权限、委托期限',

									'4. 股东会决议（多人）或股东会决定（一人）',

									'5. 公司章程修正案(公司法定代表人签署)',

									'6. 依法设立的验资机构出具的验资证明',

									'7. 股份有限公司以募集方式增加注册资本的还应提交国务院证券监督管理机构的核准文件',

									'8. 法律、行政法规和国务院决定规定变更注册资本必须报经批准的，提交有关的批准文件或者许可证书复印件',

									'9. 公司减少注册资本的，提交刊登减资公告的报纸报样',

									'10. 公司营业执照副本'

								]
							}



						]
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
				name_change_list: [{
						name: '变更流程',
						detail: [{
								url: '../../static/images/service-img/1215890.png',
								text: '01 确认方案'
							},
							{
								url: '../../static/images/service-img/1215855.png',
								text: '02 整理资料'
							},
							{
								url: '../../static/images/service-img/1215863.png',
								text: '03 递交资料'
							},
							{
								url: '../../static/images/service-img/1215855.png',
								text: '04 领取营业执照'
							}
						],
						description: '由于各地区情况不同，以上资料信息仅供参考，详情请拨打 15950524039，我们竭诚为您服务'
					},
					{
						name: '所需资料',
						detail: [{
								name: '需要提交的文档资料',
								detail: [
									'1.《公司变更（改制）登记申请书（公司备案申请表）》',
									'2.《企业法人营业执照》正、副本',
									'3.《指定（委托）书》',
									'4. 住所使用证明、房产证复印件，（产权为个人每页签字；产权人为单位的应加盖公章）',
									'5. 补充信息登记表'
								]
							},
							{
								name: '需要的基本资料及信息',
								detail: [
									'1. 营业执照正副本原件',
									'2. 组织机构代码证正副本原件',
									'3. 税务登记证正副本原件',
									'4. 统计证正副本原件',
									'5. 公章',
									'6. 法人身份证复印件',
									'7. 可注册公司的商用地址，住所使用证明、房产证复印件，（产权为个人每页签字；产权人为单位的应加盖公章）'
								]
							}
						]
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
				scope_change_list: [{
						name: '变更流程',
						detail: [{
								url: '../../static/images/service-img/1215890.png',
								text: '01 核准名称'
							},

							{
								url: '../../static/images/service-img/1215863.png',
								text: '02 递交资料'
							},
							{
								url: '../../static/images/service-img/1215864.png',
								text: '03 刻章等事项'
							},
							{
								url: '../../static/images/service-img/1215855.png',
								text: '04 领取营业执照'
							}
						],
						description: '由于各地区情况不同，以上资料信息仅供参考，详情请拨打 15950524039，我们竭诚为您服务'
					},
					{
						name: '所需资料',
						detail: [{
								name: '需要提交的文档资料',
								detail: [
									'1.《公司变更（改制）登记申请书（公司备案申请书）》',
									'2.《企业法人营业执照》正、副本',
									'3.《指定（委托）书》',
									'4. 住所使用证明、房产证复印件，（产权为个人每页签字；产权人为单位的应加盖公章）',
									'5. 补充信息登记表'
								]
							},
							{
								name: '需要的基本资料及信息',
								detail: [
									'1. 营业执照正副本原件',
									'2. 组织机构代码证正副本原件',
									'3. 税务登记证正副本原件',
									'4. 统计证正副本原件',
									'5. 公章',
									'6. 法人身份证复印件'
								]
							}
						]
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
				logout_list: [{
						name: '变更流程',
						detail: [{
								url: '../../static/images/service-img/1215871.png',
								text: '01 清缴税控及发票'
							},
							{
								url: '../../static/images/service-img/1215872.png',
								text: '02 注销地税国税'
							},
							{
								url: '../../static/images/service-img/1215880.png',
								text: '03 登报及清算备案'
							},
							{
								url: '../../static/images/service-img/1215847.png',
								text: '04 工商注销'
							},
							{
								url: '../../static/images/service-img/1215852.png',
								text: '05 银行、公章注销'
							}
						],
						description: '由于各地区情况不同，以上资料信息仅供参考，详情请拨打 15950524039，我们竭诚为您服务'
					},
					{
						name: '所需资料',
						detail: [{
							name: ' ', //保持结构一致，便于渲染数据
							detail: [
								'1. 小规模纳税人及一般纳税人企业（有税控设备及发票的需先缴销发票和设备，缴销表格留存注销时递交所需资料）',
								'2. 签订三方协议的先终止协议（到税务所领取表格后去银行终止，终止协议需最后注销时递交材料）',
								'3. 《注销税务登记申请审批表》、国税',
								'4. 《纳税清算申报表》、《注销税务登记申请审批表》地税',
								'5. 税务登记证正、副本原件及复印件',
								'6. 营业执照副本复印件（工商吊销的企业提供吊销证明）',
								'7. 股东会决议（有公司股份的企业的需盖公司公章、个人股的需签字）',
								'8. 注销申请（公司基本情况、成立至今的经营收入及缴税情况、注销公司原因）',
								'9. 公章',
								'10. 房屋租赁合同及发票（成立至今）',
								'11. 审计清算报告（近三年）'
							]
						}]
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
			// console.log(e.id)
			this.service_name = e.service_name
			this.all_list = [this.address_change_list, this.legal_person_change_list, this.share_change_list, this.funds_change_list,
				this.name_change_list, this.scope_change_list, this.logout_list
			]
			this.show_list = this.all_list[e.id]
			// console.log(this.show_list)
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
