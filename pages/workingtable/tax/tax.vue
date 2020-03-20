<template>
	<view>

		<uni-calendar :insert="true" @change="change" />
		<!-- 总额区域 -->
		<view class="tax-sum-container">
			
				<text>本月累计</text>
				<text class="pro-num">{{sum|priceFormat(2,'￥',true)}}</text>
			
		</view>

		<!-- 列表 -->
		<view class="uni-list">
			<block v-for="(item,index) in tax.taxList" :key="index">
				<view class="uni-list-cell uni-list-cell-pd">
					<text class="uni-ellipsis" >{{item.taxName}}</text>
					<text class="uni-h5 uni-bold">{{item.currency|priceFormat(2,'￥',true)}}</text>
				</view>
			</block>
		</view>

	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	export default {
		data() {
			return {

			};
		},
		computed: {
			...mapState('report', ['tax']),
			sum: function() {
				console.log(this)
				let sum = 0.00
				this.tax.taxList.map((item) => {
					sum += parseFloat(item.currency)
				})
				return sum
			},

		},
		methods: {
			...mapActions('report', ['getBalanceRpt']),
			change(e) {
				console.log(e)
				this.getBalanceRpt()
			},
		}
	}
</script>

<style lang="scss" scoped>
	.tax-sum-container{
		display: flex;
		flex-direction: column;
		background-color: $uni-bg-color-panel;
		padding:20rpx;
		color: white;
		.pro-num {
			font-size: 2em;
		}
	}
	
</style>
