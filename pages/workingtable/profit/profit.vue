<template>
	<view>
		
		<uni-calendar 
		:insert="true"
		:lunar="true" 
		:disable-before="true" 
		:start-date="'2019-3-2'"
		:end-date="'2019-5-20'"
		@change="change"
		 />
		<!-- 多行列表 -->
		 
		 <view class="uni-list">
		 	<block v-for="(item,index) in profit_list" :key="index">
		 		<view class="uni-list-cell" hover-class="uni-list-cell-hover">
		 			<view class="uni-triplex-row">
		 				<view class="uni-triplex-col">
		 					<text class="uni-title uni-ellipsis">{{item.name}}</text>
		 					<text class="uni-text">{{item.value[0]|priceFormat(2,'￥',true)}}</text>
		 					<text class="uni-text-small uni-ellipsis text-gray">本期发生</text>
		 				</view>
		 				<view class="uni-triplex-col" style="text-align: right;">
		 					<text class="uni-title uni-ellipsis"> </text>
		 					<text class="uni-title uni-ellipsis"> </text>
		 
		 					<text class="uni-text">{{item.value[1]|priceFormat(2,'￥',true)}}</text>
		 					<text class="uni-text-small uni-ellipsis text-gray">本年累计</text>
		 				</view>
		 			</view>
		 		</view>
		 	</block>
		 </view>
		
</view>
</template>

<script>
import {BalanceRpt} from '@/common/report.js'
import helper from '@/common/helper.js'
import constants from '@/common/constants.js'
import MinCache from '@/common/storage.js'
	
	export default {
		data() {
			return {
				//利润列表
				profit_list: constants.profitList,
				
				//当前的月份
				period:'',
				
				
			};
		},
		onLoad() {//在加载页面时往lists页面中push 五个数 这样在循环的时候才有的循环 不然循环不出来
		
		},
		methods: {
			change(e) {
				console.log(e);
				this.period = e.year.toString() + '.' + (e.month<10?'0'+e.month.toString():e.month.toString())
				this.getProfit()
			},
			getProfit(){
				helper.showLoading();
				let balanceRpt = new BalanceRpt();
				balanceRpt.reportName = 'GL_BalanceSumRpt';
				balanceRpt.period = this.period;
				balanceRpt.getReportData().then((res)=>{
					this.profit_list = helper.profit_calculate(res, this.profit_list)
					uni.hideLoading();
				}).catch((err)=>{//如果请求失败就让用户手动请求
					uni.showModal({
					    title: '提示',
					    content: '数据加载失败，请再次尝试',
					    success:  (res)=> {
					        if (res.confirm) {
					            console.log('用户点击确定');
								this.getProfit()
					        } else if (res.cancel) {
								console.log('用户点击取消');
								uni.hideLoading()
							}
					    }
					});
					
				})
			}
		}
	}
	
</script>

<style>
	.uni-triplex-row {
		display: flex;
		justify-content: space-between;
	}
	
	.uni-triplex-col {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
</style>
