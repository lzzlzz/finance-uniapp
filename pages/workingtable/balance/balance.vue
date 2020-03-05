<template>
	<view>

		<uni-calendar :insert="true" :lunar="true" :disable-before="true" :start-date="'2019-3-2'" :end-date="'2019-5-20'"
		 @change="change" />

		<view class="box">
			<view class="column">
				<view class="item"><text>总预算金额（元）</text><text class="pro-num">{{cash}}</text></view>
				<view class="item"></view>
			</view>
			<view class="column">
				<view class="item">
					<text>已用（元）</text><text>{{begin}}</text>
				</view>
				<view class="item">
					<text>未用（元）</text><text>{{end}}</text>
				</view>
			</view>
		</view>
		<view class="headline"><text class="cuIcon-titles text-orange" />预算使用情况</view>
		
		<view class="qiun-columns">
			
			<view class="qiun-charts" >
				<canvas canvas-id="canvasGauge" id="canvasGauge" class="charts"></canvas>
			</view>
	    </view>
		
		
		<view>
			
			<button @click="openPopup">调整总预算金额</button>
			<uni-popup ref="popup" type="center">
				<input v-model="balance" placeholder="预算金额" />
				<button @click="closePopup">确定</button>
			</uni-popup>
		</view>
		
	</view>
</template>

<script>
	import uCharts from '@/components/u-charts/u-charts.js';
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	//环形图
	var _self;
	var canvaGauge=null;
	
	export default {
		components:{
			uniPopup
		},
		data() {
			return {
				//面板数据
				cash: '0.00',
				begin: '0.99',
				end: '0.00',
				
				//仪表
				cWidth:'',
				cHeight:'',
				pixelRatio:1,
				gaugeWidth:15,
				
				//余额 可以把这个变量写入数据库
				balance:''
			};
		},
		onLoad() {
			_self = this;
			this.cWidth=uni.upx2px(750);
			this.cHeight=uni.upx2px(500);
			this.getServerData();
		},
		methods: {
			change(e) {
				console.log(e);
			},
			//请求图标要使用的数据
			getServerData(){
				uni.request({
					url: 'https://www.ucharts.cn/data.json',
					data:{
					},
					success: function(res) {
						console.log(res.data.data)
						let Gauge={categories:[],series:[]};
						//这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
						Gauge.categories=res.data.data.Gauge.categories;
						Gauge.series=res.data.data.Gauge.series;
						_self.showGauge("canvasGauge",Gauge);
					},
					fail: () => {
						_self.tips="网络错误，小程序端请检查合法域名";
					},
				});
			},
			showGauge(canvasId,chartData){
				canvaGauge = new uCharts({
					$this:_self,
					canvasId: canvasId,
					type: 'gauge',
					fontSize:11,
					legend:false,
					title: {
						name: Math.round(chartData.series[0].data*100)+'%',
						color: chartData.categories[1].color,
						fontSize: 25*_self.pixelRatio,
						offsetY:50*_self.pixelRatio,//新增参数，自定义调整Y轴文案距离
					},
					subtitle: {
						name: chartData.series[0].name,
						color: '#666666',
						fontSize: 15*_self.pixelRatio,
						offsetY:-50*_self.pixelRatio,//新增参数，自定义调整Y轴文案距离
					},
					extra: {
						gauge:{
							type:'default',
							width: _self.gaugeWidth*_self.pixelRatio,//仪表盘背景的宽度
							startAngle:0.75,
							endAngle:0.25,
							startNumber:0,
							endNumber:100,
							splitLine:{
								fixRadius:0,
								splitNumber:10,
								width: _self.gaugeWidth*_self.pixelRatio,//仪表盘背景的宽度
								color:'#FFFFFF',
								childNumber:5,
								childWidth:_self.gaugeWidth*0.4*_self.pixelRatio,//仪表盘背景的宽度
							},
							pointer:{
								width: _self.gaugeWidth*0.8*_self.pixelRatio,//指针宽度
								color:'auto'
							}
						}
					},
					background:'#FFFFFF',
					pixelRatio:_self.pixelRatio,
					categories: chartData.categories,
					series: chartData.series,
					animation: true,
					width: _self.cWidth*_self.pixelRatio,
					height: _self.cHeight*_self.pixelRatio,
					dataLabel: true,
				});
			},
			openPopup(){
				this.$refs.popup.open()
			},
			closePopup(){
				this.$refs.popup.close()
			}
		}
	}
</script>

<style>
	
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

	.box {
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
		justify-content: space-between;
		background-color: #c6ac80;
	}

	.pro-num {
		font-size: 2em;
	}

	.row {
		display: flex;
		justify-content: space-around;
	}

	.column {
		flex-basis: 100%;
		display: flex;
		justify-content: space-between;
		margin-left: -70rpx;
	}

	.item {
		display: flex;
		flex-direction: column;
		margin: 15rpx auto;
		color: #ffffff;
	}
	.text-orange {
		color: #c7a566;
	}
	
	.qiun-padding{padding:2%; width:96%;}
	.qiun-wrap{display:flex; flex-wrap:wrap;}
	.qiun-rows{display:flex; flex-direction:row !important;}
	.qiun-columns{display:flex; flex-direction:column !important;}
	.qiun-common-mt{margin-top:10upx;}
	.qiun-bg-white{background:#FFFFFF;}
	.qiun-title-bar{width:96%; padding:10upx 2%; flex-wrap:nowrap;}
	.qiun-title-dot-light{border-left: 10upx solid #0ea391; padding-left: 10upx; font-size: 32upx;color: #000000}
	.qiun-charts{width: 750upx; height:500upx;background-color: #FFFFFF;}
	.charts{width: 750upx; height:500upx;background-color: #FFFFFF;}
</style>
