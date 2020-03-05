<template>
	<view>

		<uni-calendar ref="hello" :insert="true" :lunar="true" :disable-before="true" :start-date="'2019-3-2'" :end-date="'2019-9-20'"
		 @change="change" />

		<view class="box">
			<view class="row">
				<view class="col">
					<view class="content">
						<text>本{{MOY}}利润（{{expense.unit}}）</text>
						<text :class="{pronum:!profit.isScale,stdnum:profit.isScale}">{{profit.amount|priceFormat(2,'',true)}}</text>
					</view>

				</view>
				<view class="col">
					<view class="content">
						<switchc  text="月|年" :sid="0" @change="switchchange"></switchc>
					</view>
				</view>
			</view>
			<view class="row">
				<view class="col">
					<view class="content">
						<text>本{{MOY}}收入（{{income.unit}}）</text>
						<text :class="{pronum:!income.isScale,stdnum:income.isScale}">{{income.amount|priceFormat(2,'',true)}}</text>

					</view>
				</view>
				<view class="col">
					<view class="content">
						<text>本{{MOY}}支出（{{expense.unit}}）</text>
						<text :class="{pronum:!expense.isScale,stdnum:expense.isScale}">{{expense.amount|priceFormat(2,'',true)}}</text>

					</view>
				</view>



			</view>





		</view>

		<!-- <view class="the-step">
			<uni-steps :options="list1" :active="active" :activeColor="activeColor"></uni-steps>

		</view> -->
		<view class="the-grid">
			<uni-grid :column="3" :show-border="true" :square="true" @change="goservice">
				<view v-for="(item,index) in data2" :key="index">
					<uni-grid-item>
						<view class="uni-grid-item__box-image">
							<image :src="item.image" class="grid-image" />
						</view>
						<text class="text">{{item.text}}</text>
					</uni-grid-item>
				</view>
			</uni-grid>
		</view>
		<!-- 	<button @tap="clear">清除缓存</button>-->
		<!-- <button @tap="test">登录</button> -->

	</view>
 
</template>

<script>
	
	import {BalanceRpt} from '@/common/report.js'
	import uniSteps from '@/components/uni-steps-1/uni-steps.vue'
	import uniGrid from '@/components/uni-grid/uni-grid.vue'
	import uniGridItem from '@/components/uni-grid-item/uni-grid-item.vue'
	import switchc from '@/components/zz-switchc/zz-switchc.vue'
	import helper from '@/common/helper.js'
	import MinCache from '@/common/storage.js'
	
	export default { //这里的export 是对于template而言的
		components: {
			uniSteps,
			uniGrid,
			uniGridItem,
			switchc

		},
		data() {
			return {
				
				//面板
				profit: {
					amount: '0.00',
					unit: '元',
					isScale: false //是否缩小 默认不缩小
				},
				income: {
					amount: '0.00',
					unit: '元',
					isScale: false
				},
				expense: {
					amount: '0.00',
					unit: '元',
					isScale: false
				},
				//分年月显示信息 month or year
				MOY: "月",
				method: 'month',
				//用于请求参数的period
				period: '',
				//步骤条
				active: 1,
				activeColor: '#d7c094',
				list1: [{
					title: '做账中',

				}, {
					title: '待报税',

				}, {
					title: '已报税',

				}],
				//格子布局
				data2: [{
						image: '/static/images/w-img/c14.png',
						text: '现金流水'
					},
					{
						image: '/static/images/w-img/c4.png',
						text: '现金流量'
					},

					{
						image: '/static/images/w-img/c11.png',
						text: '应收账款'
					},
					{
						image: '/static/images/w-img/c7.png',
						text: '应付账款'
					},
					{
						image: '/static/images/w-img/c5.png',
						text: '资产及负债'
					},
					{
						image: '/static/images/w-img/c6.png',
						text: '利润表'
					},
					{
						image: '/static/images/w-img/c12.png',
						text: '纳税表'
					},

					// {
					// 	image: '/static/images/w-img/c8.png',
					// 	text: '预算管理表'
					// },
					{
						image: '/static/images/w-img/c9.png',
						text: '合同归档表'
					}
					// ,
					// {
					// 	image: '/static/images/w-img/c10.png',
					// 	text: '财务分析'
					// },
					// {
					// 	image: '/static/images/w-img/c15.png',
					// 	text: '自定义报表'
					// }
				],
				//报表对象
				reportObj:null,
			};
		},
		onLoad() {
			//页面加载的时候 建立报表对象
			let balanceRpt = new BalanceRpt();
			balanceRpt.reportName = 'GL_BalanceSumRpt';
			this.reportObj = balanceRpt;
		},
		onShow() {
			
			if (this.$refs.hello !== undefined) {
				this.$refs.hello.init(); //每次页面展示的时候 更新一下当前的日历日期 保证 下级页面的改变能够影响到上级
			}
		},
		watch: {
			//period 发生改变的时候调用获取数据的方法
			period:'getData',				
			//年月的显示方式变了，也要重新获取数据
			method:'getData',
		},
		methods: {
			change(e) {
				console.log(e);
				this.year = e.year; //把当前的时间作为请求的参数 用在请求上
				this.month = e.month;
				this.period = e.year.toString() + '.' + (e.month < 10 ? '0' + e.month.toString() : e.month.toString());
			},

			getData() { //按月 或者 年的方式获取面板的数据
				helper.showLoading();	
				//设置对象的时间
				this.reportObj.period = this.period;
				//初始化开始的请求页
				this.reportObj.param.pageIndex = 1;
				this.reportObj.getReportData().then((res)=>{
					console.log(res)
					//收入记贷方 支出记借方 先传贷方 再传借方
					let { income,expense,profit} 
						= helper.money(res, 
								['5001'], ['5401', '5403', '5602', '5603'],
								 this.method);
					console.log(expense)
					this.income = helper.getAmountUnit(income)
					this.expense = helper.getAmountUnit(expense)
					this.profit = helper.getAmountUnit(profit)
					uni.hideLoading();
				}).catch((err)=> { //如果请求失败就让用户手动请求
					console.log(err)
					console.log('数据获取失败')
					uni.showModal({
						title: '提示',
						content: '数据加载失败，请再次尝试',
						success: (res) => {
							if (res.confirm) {
								console.log('用户点击确定');
								this.getData()
							} else if (res.cancel) {
								console.log('用户点击取消');
								uni.hideLoading()
							}
						}
					});
				
			})},
			//切换按钮 
			switchchange(e) {
				console.log(e); // e 中的返回值 value 月为false 年为true
				this.MOY = e.text;
				if (e.value) {
					this.method = 'month';					
				} else {
					this.method = 'year';
				}

			},
			goservice(e) {

				console.log(e)
				let target
				switch (e.detail.index) {
					case 0:
						target = "../cash_flow/cash_flow";
						break;
					case 1:
						target = "../cash_flow_statement/cash_flow_statement";
						break;	
					case 2:
						target = "../receviable/receviable";
						break;
					case 3:
						target = "../payable/payable";
						break;
					case 4:
						target = "../budget/budget";
						break;
					case 5:
						target = "../profit/profit";
						break;
					case 6:
						target = "../tax/tax";
						break;
					case 7:
						target = "../contract/contract";
						break;
					case 8:
						target = "../balance/balance";
						break;
					case 9:
						target = "../financial/financial";
						break;

				}
				uni.navigateTo({
					url: target,
				});

			}
		}
	}
</script>

<style>
	.box {
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
		justify-content: space-between;
		background-color: #c6ac80;
		height: 315upx;
		width: 100%;
	}

	.row {
		height: 50%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.col {
		width: 50%;
	}

	.content {
		display: flex;
		flex-direction: column;
		margin: 30upx 30upx;
	}

	text {
		color: #F0F0F0;
	}

	.pronum {
		font-size: 1.7em;
	}

	.stdnum {
		font-size: 1.2em;
	}



	.item {
		display: flex;
		flex-direction: column;
		margin: 15rpx auto;
	}

	.move-left {
		margin-left: 30rpx;
	}

	.the-step {
		background-color: #FFFFFF;
		width: 90%;
		height: 120rpx;
		margin: 0 auto;
	}

	.the-grid {
		margin-top: 1rpx;
		background-color: #FFFFFF;
		padding: 20rpx 30rpx;

	}

	.grid-image {
		width: 90rpx;
		height: 90rpx;
	}

	.text {
		color: #7d7d7d;
	}
</style>
