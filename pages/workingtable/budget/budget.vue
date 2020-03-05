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
		<!-- 选项卡 -->
		<div>
		  
		  <wuc-tab :tab-list="tabList3" textFlex :tabCur.sync="TabCur3" tab-class="text-center text-black bg-white" select-class="text-orange"></wuc-tab>
		  <swiper :current="TabCur3" class="swiper" duration="300" :circular="true" indicator-color="rgba(255,255,255,0)" indicator-active-color="rgba(255,255,0,0)" @change="swiperChange3">
		    <swiper-item>
			<scroll-view scroll-y='true'>
			<!-- 多行列表 -->
			<view class="uni-list"> 
			    <block v-for="(item,index) in asset" :key="index">
			        <view class="uni-list-cell" hover-class="uni-list-cell-hover">
			            <view class="uni-triplex-row">
							<view class="uni-triplex-left">
							    <text class="uni-ellipsis" style=" padding:8upx 0;">{{item.name}}</text>
							</view>
							<view class="uni-triplex-col">
							    <text class="uni-h5">{{item.value|priceFormat(2,'￥',true)}}</text>
							</view>
			            </view>
			        </view>
			    </block>
			</view>
			</scroll-view>
			</swiper-item>
			<swiper-item>
			<scroll-view scroll-y='true'>
			 <!-- <div class="bg-white padding margin text-center text-black">{{item.name}}</div> -->
			<!-- 多行列表 -->
			<view class="uni-list"> 
			    <block v-for="(item,index) in budget" :key="index">
			        <view class="uni-list-cell" hover-class="uni-list-cell-hover">
			            <view class="uni-triplex-row">
							<view class="uni-triplex-left">
							    <text class="uni-ellipsis" style="padding: 8upx 0;"><text>{{item.name}}</text></text>
							</view>
							<view class="uni-triplex-col">
							    <text class="uni-h5">{{item.value|priceFormat(2,'￥',true)}}</text>
							</view>
			                <!-- <view class="uni-triplex-col">
			                    <text class="uni-title uni-ellipsis">{{item.name}}</text>
			                    
			                </view>
			            	<view class="uni-triplex-col">
			            			<text class="uni-text-small uni-ellipsis">期末余额:</text>
			            			<text class="uni-text">{{item.value}}</text>
			            	</view> -->
			                
			            </view>
			        </view>
			    </block>
			</view>
			</scroll-view>
			</swiper-item>
			
		  </swiper>
		</div>
		
		
	</view>
</template>

<script>
	import {BalanceRpt} from '@/common/report.js'
	import helper from '@/common/helper.js'
	import constants from '@/common/constants.js'
	import MinCache from '@/common/storage.js'
	import WucTab from '@/components/wuc-tab/wuc-tab.vue';
	import { obj2style } from '@/common/utils/index';
	
	export default {
		components:{
			WucTab
		},
		data() {
			return {
				//选项卡
				 tabList3: [{ name: '资产' }, { name: '负债和所有者权力' }],
				 TabCur3: 0,
				 
				 //当前月份
				 period:'',
				 
				 //多行列表
				 lists: [{
					 name:'123',
					 value:12312312
				 },{
					 name:'456',
					 value:123.312
				 }],
				 //资产类的结构及对应科目
				 asset: constants.assetList,
				 //负债类对应科目
				 budget:constants.budgetList,
				 
				 
				 
			};
		},
		onLoad() {},
		methods: {
			getData(){
				helper.showLoading();
				let balanceRpt = new BalanceRpt();
				balanceRpt.reportName = 'GL_BalanceSumRpt';
				balanceRpt.period = this.period;
				balanceRpt.getReportData().then((res)=>{
					this.asset = helper.asset_calculate(res, this.asset, true)
					this.budget = helper.asset_calculate(res, this.budget, false)
					uni.hideLoading();
				}).catch((err)=>{//如果请求失败就让用户手动请求
					uni.showModal({
					    title: '提示',
					    content: '数据加载失败，请再次尝试',
					    success: (res) => {
					        if (res.confirm) {
					            console.log('用户点击确定');
								this.getData();
					        } else if (res.cancel) {
								console.log('用户点击取消');
								uni.hideLoading();
							}
					    }
					});
					
				}) 
			},
	
			change(e) {
				console.log(e);
				this.period = e.year.toString() + '.' + (e.month < 10 ?'0'+e.month.toString():e.month.toString())
				this.getData()
			},
			//选项卡
			 swiperChange3(e) {
				 console.log(e)
			    let { current } = e.target;
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
	div {
	  font-size: 28upx;
	  background-color: #f1f1f1;
	}
	.swiper {
	    height: calc(100vh - 290upx) ;
		
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
	
	.solid,
	.solid-bottom {
		position: relative;
	}
	
	.solid::after,
	.solid-bottom::after{
		content: " ";
		width: 200%;
		height: 200%;
		position: absolute;
		top: 0;
		left: 0;
		border-radius: inherit;
		transform: scale(0.5);
		transform-origin: 0 0;
		pointer-events: none;
		box-sizing: border-box;
	}
	
	.solid::after {
		border: 1upx solid rgba(0, 0, 0, 0.1);
	}
	
	.solid-bottom::after {
		border-bottom: 1upx solid rgba(0, 0, 0, 0.1);
	}
	
	.text-orange{
	  color:#f37b1d
	}
	.text-black{
	  color:#333333;
	}
	.bg-white{
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
	.uni-triplex-row{
		display: flex;
		justify-content: space-between;
	}
	.uni-triplex-col {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 8upx 0;
	}
	scroll-view {
		height: 100%;
	}
	.uni-list-cell::after {
		position: absolute;
	  z-index: 3;
		right: 0;
		bottom: 0;
		left: 30upx;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(1);
		transform: scaleY(1);
		background-color: #c8c7cc;
	}
</style>
