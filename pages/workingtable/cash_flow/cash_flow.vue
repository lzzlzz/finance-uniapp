<template>
	<view>

		<uni-calendar :insert="true" 
		 @change="change" />

		<!-- 选项卡 -->
		<div>
			<wuc-tab :tab-list="tabList3" :textFlex='true' :tabCur.sync="TabCur3" tab-class="text-center text-black bg-white"
			 select-class="text-orange"></wuc-tab>
			<swiper :current="TabCur3" class="swiper" duration="300" :circular="true" indicator-color="rgba(255,255,255,0)"
			 indicator-active-color="rgba(255,255,0,0)" @change="swiperChange3">
				<swiper-item>
					<scroll-view scroll-y='true' style="height: 100%;" @scrolltolower="getData()">
						<!-- 多行列表 -->
						<self-list :data="incomeLists" :istrip="true" :attrs='attrs'></self-list>
						<uni-load-more :status="status" :content-text="contentText" @handload="getData()" />
					</scroll-view>
				</swiper-item>
				<swiper-item>
					<scroll-view scroll-y='true' style="height: 100%;" @scrolltolower="getData()">
						
						<!-- 多行列表 -->

						<self-list :data="expenseLists"  :istrip="true"></self-list>
						<uni-load-more :status="status" :content-text="contentText" @handload="getData()" />
					</scroll-view>
				</swiper-item>

			</swiper>
		</div>

	</view>
</template>

<script>
	import selfList from '@/components/self-list/self-list.vue'
	import helper from '@/common/helper.js'
	import {
		CashFlowRpt
	} from '@/common/report.js'
	import WucTab from '@/components/wuc-tab/wuc-tab.vue';
	import {
		obj2style
	} from '@/common/utils/index';
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
	export default {
		components: {
			WucTab,
			uniLoadMore,
			selfList
		},
		data() {

			return {
				//列表属性
				attrs:['金额','流动方向'],
				//选项卡
				tabList3: [{
					name: '收入'
				}, {
					name: '支出'
				}],
				TabCur3: 0,

				//当前月份
				period: '',

				//多行列表
				incomeLists: [],
				expenseLists: [],

				//触底加载更多

				status: 'more',
				contentText: {
					contentdown: '点击加载更多',
					contentrefresh: '加载中',
					contentnomore: '没有更多'

				},
				//报表对象
				reportObj: null,

			};
		},
		onLoad() { //在加载页面时往lists页面中push 五个数 这样在循环的时候才有的循环 不然循环不出来
			const {
				windowWidth,
				windowHeight
			} = uni.getSystemInfoSync();

		},
		methods: {
			change(e) {
				this.status = 'more'
				console.log(e);
				this.period = e.year.toString() + '.' + (e.month < 10 ? '0' + e.month.toString() : e.month.toString());
				//建立当前时间的报表对象
				let cashFlowRpt = new CashFlowRpt();
				cashFlowRpt.reportName = 'GL_CashFlowDetailRpt';
				cashFlowRpt.period = this.period;
				this.reportObj = cashFlowRpt;
				[this.incomeLists, this.expenseLists] = [
					[],
					[]
				];
				this.getData();
			},

			getData() {

				if (this.status == 'more') {
					helper.showLoading();
					this.status = 'loading';
					this.reportObj.getReportData().then((res) => {
						console.log(res)
						let data = res.get('value');
						this.incomeLists = this.incomeLists.concat(data.filter((obj) => obj.direction == '流入'));
						this.expenseLists = this.expenseLists.concat(data.filter((obj) => obj.direction == '流出'));
						this.status = res.get('done') ? 'noMore' : 'more';
						uni.hideLoading();
					}).catch((err) => { //如果请求失败就让用户手动请求
						console.log(err);
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

					})
				}



			},
			//选项卡
			swiperChange3(e) {
				console.log(e)
				let {
					current
				} = e.target;
				this.TabCur3 = current;
			},

		}
	}
</script>

<style scoped>
	
	div,
	scroll-view,
	swiper {
		box-sizing: border-box;
	}

	scroll-view {
		height: 100%;
	}

	div {
		font-size: 28upx;
		background-color: #f1f1f1;
	}

	.swiper {
		height: calc(100vh - 290upx);

	}

	.cu-bar {
		display: flex;
		position: relative;
		align-items: center;
		min-height: 100upx;
		justify-content: space-between;
	}

	.cu-bar .action {
		display: flex;
		align-items: center;
		height: 100%;
		justify-content: center;
		max-width: 100%;
		background-color: #ffffff;
	}

	.cu-bar .action:first-child {
		margin-left: 30upx;
		font-size: 30upx;
	}


	.text-orange {
		color: #f37b1d
	}

	.text-black {
		color: #333333;
	}

	.bg-white {
		background-color: #ffffff;
	}

	.padding {
		padding: 30upx;
	}

	.margin {
		margin: 30upx;
	}

	.margin-top {
		margin-top: 30upx;
	}

	.text-center {
		text-align: center;
	}

	
</style>
