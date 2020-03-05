<template>
	<view>
		
	
		<view class="headline"><text class="cuIcon-titles text-orange"></text>应收账款明细</view>
		
		<!-- 下拉列表 -->
		<uni-collapse>
		<view v-for="(item, index) in list" :key="index" >
			<uni-collapse-item :show-animation="true"   :title='item[1].accountName' :begin="item[1].totalAmount|priceFormat(2,'￥',true)">
				<view v-for="(oitem,oindex) in item[1].intervalAmount" :key="oindex" >
					<view class="uni-collapse-cell__title" @click="getDetail(oitem)">
						<view class="uni-collapse-cell__title-inner">
							<view class="uni-collapse-cell__title-text row">
								<view class="col1">{{oitem.itemName}}</view>
								<view class="col1">
									<view class="text-gray">借方余额 :<text class="td">{{ oitem.totalAmount|priceFormat(2,'￥',true)}}</text></view>
								</view>
							</view>
						</view>
					</view>
				
							
				</view>
				
			
			    
			</uni-collapse-item>
		</view>
		
			
		</uni-collapse>
		
		
		
</view>

</template>

<script>
	import {AgeAnalysisRpt} from '@/common/report.js'
	import uniCollapse from '@/components/uni-collapse/uni-collapse.vue'
	import uniCollapseItem from '@/components/uni-collapse-item-1/uni-collapse-item.vue'
	import helper from '@/common/helper.js'
	import MinCache from '@/common/storage.js'
	
	export default {
		components: {
			uniCollapse,
			uniCollapseItem,
		
			
		},
		data() {
			return {
				begin:'0.00',
				end: '0.00',
				//用于循环应收账款明细
				list:[],
				
	        
			};
		},
		onLoad(){
			this.getData()
		},
		methods: {
			
			change(e) {
				console.log(e);
			},
			getData(){
				helper.showLoading();
				let ageAnalysisRpt = new AgeAnalysisRpt();
				ageAnalysisRpt.reportName = 'GL_CustomerAgeAnalysisSumRpt';
				ageAnalysisRpt.period = helper.getdate() 
				ageAnalysisRpt.getReportData().then((res)=>{
					console.log(res)
					this.list =  [...res];
					uni.hideLoading();
				}).catch((err)=>{//如果请求失败就让用户手动请求
					uni.showModal({
					    title: '提示',
					    content: err.message,
						showCancel:false,
					    success:  (res)=> {
					        if (res.confirm) {
					            console.log('用户点击确定');
								uni.navigateBack({
								    delta: 1
								});
								uni.hideLoading();
					        }
					    }
					});
					
				})
			},
			getDetail(e,time){
				//将需要展示的账龄数据存到aatemp 的缓存中
				console.log(e)
				if(e.totalAmount!=0){
					uni.setStorageSync('aatemp',e);
					let detail = {
						age:time
					};
					uni.navigateTo({
						url:'./detailList/detailList?detail=' + encodeURIComponent(JSON.stringify(detail))
					});
				}else{
					//console.log('暂无该项应收款')
					uni.showModal({
					    title: '提示',
					    content: '暂无该项应收款',
						showCancel:false,
						confirmText:'知道了',
					    success: function (res) {
					       console.log(res)
					    }
					});
				}
				
			}
		}
	}
	
</script>

<style scoped>
	.box {
	  display: flex;
	  flex-wrap: wrap;
	  justify-content: space-around;
	  background-color: #c6ac80; 
	  
	}
	text {color: #F0F0F0;}
	.pro-num {font-size: 2em;}
	.column {
	  flex-basis: 100%;
	  display: flex;
	  justify-content: space-between;
	  margin-left: -70rpx;
	  height: 150rpx;
	  align-items: center;
	
	}
	
	.item {display: flex;flex-direction: column; margin: 15rpx auto;}
	.headline {
		background-color: #e7e7e7;
		height: 83rpx;
		font-weight: bold;
		padding-left: 10rpx;
		font-weight: bold;
		padding-left: 40rpx;
		padding-top: 30rpx;
		font-size: 1.3em;
	}
	.row1 {
		display: flex;
		justify-content: space-around;
		border-bottom-width: 1rpx;
		border-bottom-color: #C7A566;
		border-bottom-style: solid;
	
	}
	
	.col2{
		color: #8b562a;
	}
	.td{
		color: #000000;
	}
	.text-orange {
		color: #c7a566;
	}
	.my-card {padding: 10rpx 10rpx;background-color:#fad795; color:#8b562a; border-radius:25rpx;}
	.uni-collapse-cell__title-inner {
		flex: 1;
		overflow: hidden;
		display: flex;
		flex-direction: column
	}
	.uni-collapse-cell__title-text {
		font-size: 32upx;
		text-overflow: ellipsis;
		white-space: nowrap;
		color: inherit;
		line-height: 1.5;
		overflow: hidden
	}
	.row {
		display: flex;
		justify-content: space-around;
	}
	.col1{
		font-size: 1.2em;
		color: #000000;
		height:90rpx;
		line-height: 90rpx;
	}
	.uni-collapse-cell__title {
		padding: 24upx 30upx;
		width: 100%;
		box-sizing: border-box;
		flex: 1;
		position: relative;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center
	}
	.uni-collapse-cell__title:after {
		position: absolute;
		z-index: 3;
		right: 0;
		bottom: 0;
		left: 0;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc
	}
</style>
