<template>
	<view>
		
		<uni-calendar :insert="true" @change="change"/>
		<!-- 选项卡 -->
		<div>
		  
		  <wuc-tab :tab-list="tabList3" textFlex :tabCur.sync="TabCur3" tab-class="text-center text-black bg-white" select-class="text-orange"></wuc-tab>
		  <swiper :current="TabCur3" class="swiper" duration="300" :circular="true" indicator-color="rgba(255,255,255,0)" indicator-active-color="rgba(255,255,0,0)" @change="swiperChange3">
		    <swiper-item>
			<scroll-view scroll-y='true'>
			<!-- 多行列表 -->
			
			<view class="uni-list">
				<view v-for="(item,index) in budget.asset" :key="index" class="uni-list-cell uni-list-cell-pd " >
					<text class="uni-ellipsis single-list-cell " style=" padding:8upx 0;">{{item.name}}</text>
					<text class="uni-h5 uni-bold ">{{item.value|priceFormat(2,'￥',true)}}</text>		
				</view>
			</view>
			</scroll-view>
			</swiper-item>
			<swiper-item>
			<scroll-view scroll-y='true'>
			
			<!-- 多行列表 -->
			<view class="uni-list">
				<view v-for="(item,index) in budget.asset" :key="index" class="uni-list-cell uni-list-cell-pd " >
					<text class="uni-ellipsis single-list-cell " style=" padding:8upx 0;">{{item.name}}</text>
					<text class="uni-h5 uni-bold ">{{item.value|priceFormat(2,'￥',true)}}</text>		
				</view>
			</view>
			</scroll-view>
			</swiper-item>
			
		  </swiper>
		</div>
		
		
	</view>
</template>

<script>
	
	import WucTab from '@/components/wuc-tab/wuc-tab.vue'
	import {mapState,mapActions} from 'vuex'
	export default {
		components:{
			WucTab,
			
		},
		data() {
			return {
				//选项卡
				 tabList3: [{ name: '资产' }, { name: '负债和所有者权力' }],
				 TabCur3: 0,
			};
		},
		computed:mapState('report',['budget']),
		methods: {
			...mapActions('report',['getBalanceRpt']),
			change(e) {
				console.log(e);
				
				this.getBalanceRpt()
				
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
	/* 选项卡 */
	.text-orange{
	  color:#f37b1d
	}
	.text-black{
	  color:#333333;
	}
	.bg-white{
	    background-color: #ffffff;
	}
	.text-center {
	    text-align: center;
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
		right: 30upx;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(1);
		transform: scaleY(1);
		background-color: #c8c7cc;
	}
</style>
