<template>
	<view>
		<view class="headline"><text class="cuIcon-titles text-orange"></text>{{title}}</view>
		
		<!-- 下拉列表 -->
		<uni-collapse>
			<view v-for="(item, index) in listData" :key="index" >
				<uni-collapse-item :show-animation="true"   :title='item[1].accountName' :begin="item[1].totalAmount|priceFormat(2,'￥',true)">
					<view v-for="(oitem,oindex) in item[1].intervalAmount" :key="oindex" >
						<view class="uni-collapse-cell__title" @click="goDetail(oitem)">
							<view class="uni-collapse-cell__title-inner">
								<view class="uni-collapse-cell__title-text row">
									<view class="col1">{{oitem.itemName}}</view>
									<view class="col1">
										<view class="text-gray">{{direction}}余额 :<text class="td">{{ oitem.totalAmount|priceFormat(2,'￥',true)}}</text></view>
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
	import uniCollapse from '@/components/uni-collapse/uni-collapse.vue'
	import uniCollapseItem from '@/components/uni-collapse-item-1/uni-collapse-item.vue'
	export default {
		name:'selfCollapse',
		components: {
			uniCollapse,
			uniCollapseItem,
		},
		data() {
			return {
				
			};
		},
		props:['listData','title','direction'],
		methods:{
			goDetail(oitem){
				let payload = {
					status:true,
					data:oitem
				}
				if(oitem.totalAmount == 0){
					uni.showModal({
					    title: '提示',
					    content: '该项暂无发生额',
						showCancel:false,
						confirmText:'知道了',
					    success: function (res) {
					       console.log(res)
					    }
					});
					payload.status = false
				}
				this.$emit('click',payload)
			}
		}
	}
</script>

<style lang="scss" scoped>
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
		background-image: linear-gradient(to bottom right, $uni-bg-color-start, $uni-bg-color-end);
		height: 83rpx;
		padding-left: 10rpx;
		padding-left: 40rpx;
		padding-top: 30rpx;
		font-size: 1.3em;
		color: white;
		.text-orange {
			color:#ffe390 ;
		}
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
		color: black;
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
