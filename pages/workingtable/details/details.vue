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
			<uni-grid :column="3" :show-border="false" :square="true" @change="goservice">
				<view v-for="(item) in data2"  >
					<uni-grid-item>
						<view class="uni-grid-item__box-image">
							<view  :class="item.image" />
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
						image: 'icon icon-cashflow',
						text: '现金流水'
					},
					{
						image: 'icon icon-cashflow-sum',
						text: '现金流量'
					},
					{
						image: 'icon icon-budget',
						text: '资产及负债'
					},
					{
						image: 'icon icon-payable',
						text: '应付账款'
					},
					{
						image: 'icon icon-receviable',
						text: '应收账款'
					},
					
					{
						image: 'icon icon-profit',
						text: '利润表'
					},
					{
						image: 'icon icon-tax',
						text: '纳税表'
					},

					// {
					// 	image: 'icon icon-',
					// 	text: '预算管理表'
					// },
					{
						image: 'icon icon-contract',
						text: '合同归档表'
					}
					// ,
					// {
					// 	image: 'icon icon-g',
					// 	text: '财务分析'
					// },
					// {
					// 	image: 'icon icon-g',
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
						target = "../budget/budget";
						break;
					case 3:
						target = "../payable/payable";
						break;
					case 4:
						target = "../receviable/receviable";
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
	@import  url('../../../common/css/my/icon.css');
	.panel{
		
		width: 100%;
		height: 350rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		flex-wrap: wrap;
		background-image: linear-gradient(to bottom right, $uni-bg-color-start, $uni-bg-color-end); 
		
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
	
	
	
	.icon-cashflow{
		background-position: 0.323% 0.683% ; 
	}
	.icon-cashflow-sum{
		background-position: 0.346% 17.527% ; 
	}
	.icon-receviable{
		background-position: 52.773% 100% ; 
	}
	.icon-payable{
		background-position: 76.974% 52.599% ; 
	}
	.icon-budget{
		background-position: 77.942% 17.26% ; 
	}
	.icon-profit{
		background-position: 77.945% 0 ; 
	}
	.icon-tax{
		background-position: 98.878% 52.576% ; 
	}
	.icon-contract{
		background-position: 99.721% 35.103% ; 
	}
	
	

	
</style>
