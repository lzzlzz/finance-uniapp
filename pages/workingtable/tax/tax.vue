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
		 
		 <view class="box">
		 		<view class="item text-white"><text >本月累计</text><text class="pro-num">{{sum|priceFormat(2,'￥',true)}}</text></view>
		 </view>
		 
		 <!-- 列表 -->
		 <view class="uni-list">
		     <block v-for="(item,index) in lists" :key="index">
		         <view class="uni-list-cell" hover-class="uni-list-cell-hover">
					 <view class="uni-triplex-row">
					 	<view class="uni-triplex-left">
					 	    <text class="uni-ellipsis" style="padding: 8upx 0;"><text>{{item.name}}</text></text>
					 	</view>
					 	<view class="uni-triplex-col">
					 	    <text class="uni-h5">{{item.currency|priceFormat(2,'￥',true)}}</text>
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
	import MinCache from '@/common/storage.js'
	export default {
		components:{
			
		},
		data() {
			return {
				sum: 0.00,
				lists:[]
				
	
				
			};
		},
		onLoad() {
			
		},
		methods: {
			
			change(e) {
				let that = this
				console.log(e);
				this.period = e.year.toString() + '.' + (e.month<10?'0'+e.month.toString():e.month.toString())
				this.getdata()				
			},
			getdata(){
				helper.showLoading();
				let balanceRpt = new BalanceRpt();
				balanceRpt.reportName = 'GL_BalanceSumRpt';
				balanceRpt.period = this.period;
				balanceRpt.getReportData().then((res)=>{
				//当没有成功返回的时候 这种情况没有处理
					this.setLists(res) 
					uni.hideLoading();
					 }).catch((err)=>{//如果请求失败就让用户手动请求
							uni.showModal({
								title: '提示',
								content: '数据加载失败，请再次尝试',
								success: (res)=> {
									if (res.confirm) {
										console.log('用户点击确定');
										this.getdata()
									} else if (res.cancel) {
										console.log('用户点击取消');
										uni.hideLoading()
									}
								}
							});
					
				})
			},
			setLists(Rows){
				this.sum = 0
				let taxlist = []
				console.log(Rows)
				// 将科目编号放入可以就可以改变
				let taxArr = ['22210102','222108','222113','222116','222118']
				for(let i = 0;i<taxArr.length;i++){
					let temp = {} 
					let tax = Rows.get(taxArr[i])
					console.log(tax)
					if(typeof(tax) !== 'undefined'){
						//console.log(Rows.get(taxArr[i]))
						temp.name = Rows.get(taxArr[i]).name
						temp.currency = Rows.get(taxArr[i]).currency
					//	console.log(Rows.get(taxArr[i]).currency)
						console.log(temp)
						this.sum += parseFloat(temp.currency)
						taxlist.push(temp)
						//console.log(taxlist)
					}
					
					
				}
							
				this.lists = taxlist//注意在回调函数里这个this不是vue的this了 所以用bind(this) 绑定一下 就成为vue 的this了
			}
		
			
			
		}
	}
	
</script>

<style>
	.box {
	  display: flex;
	  flex-wrap: wrap;
	  align-content: flex-start;
	  background-color: #c6ac80; 
	}
	.text-white {color: #F0F0F0;}
	.pro-num {font-size: 2em;}
	
	
	.item {display: flex;flex-direction: column; margin: 15rpx 25rpx;}
	.uni-list::before{display: none !important;}
	.uni-triplex-col{padding: 8upx 0;}
</style>
