<template>
	<view>
		
		<!-- 月份选择器 -->
		<uni-calendar ref="hello" :insert="true"  @change="change" />
		<!-- 面板区域 -->
		<view class="panel">
			<account-item v-for="(item,index) in detail.panel" :key="index"
			 class="panel-item" :loading="loading" :itemName="prefix + item.name" :itemAmount="item.amount" ></account-item>
			<switchc class="panel-switch"  text="月|年" :sid="0" @change="switchchange"></switchc>
		</view>

		<!-- 方格导航区域 -->
		<view class="the-grid">
			<uni-grid :column="3" :show-border="true" :square="true" @change="goservice">
				<view v-for="(item,index) in data2" :key="index">
					<uni-grid-item>
						<view class="uni-grid-item__box-image">
							<image :src="item.image" class="grid-image" />
						</view>
						<text >{{item.text}}</text>
					</uni-grid-item>
				</view>
			</uni-grid>
		</view>

	</view>
 
</template>

<script> 
	import accountItem from '@/components/self-account-item/self-account-item.vue'
	import uniGrid from '@/components/uni-grid/uni-grid.vue'
	import uniGridItem from '@/components/uni-grid-item/uni-grid-item.vue'
	import switchc from '@/components/zz-switchc/zz-switchc.vue'
	import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
	export default { 
		components: {
			uniGrid,
			uniGridItem,
			switchc,
			accountItem,
		},
		data() {
			return {
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
			
			};
		},
		computed:{
			...mapState('report',['detail','loading']),
			...mapGetters('report',{
				prefix:'detailPanelNamePrefixGetter'
			})
		},
		onReady() {
			uni.setNavigationBarTitle({
				title: this.$mc.get('userInfo').name
			});
		},
		methods: {
			...mapActions('report',['getBalanceRpt','changeDetailMethod']),
			change(e) {
				console.log(e)
				//获取报表数据
				this.getBalanceRpt()
			},
			//切换按钮 
			switchchange(e) {
				console.log(e); // e 中的返回值 value 月为false 年为true
				this.changeDetailMethod(e.value?'month':'year')
			
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

<style lang="scss" scoped>
	.panel{
		width: 100%;
		height: 350rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		flex-wrap: wrap;
		background-color: #c6ac80; 
		margin-bottom: 10rpx;
		.panel-item{
			width: 50%;
		}
		.panel-switch{
			width: 50%;
			display: flex;
			justify-content: center;
		}
		
		
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

	
</style>
