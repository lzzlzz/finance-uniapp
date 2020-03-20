<template>
	<view>
		<view class="content">
			
			<text class="content-text" >{{itemName}}（{{item.unit}}）</text>
			<text class="content-text"  :class="{pronum:!item.isScale,stdnum:item.isScale}">{{item.amount|priceFormat(2,'',true)}}</text>
			<!-- <text class="content-text" v-show="loading"><div class="loader-02"></div></text> -->
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		computed:{
			item(){
				//通过计算属性为输入的数据进行格式化 然后显示
				return this.getAmountUnit(this.itemAmount)
			}
		},
		props:['itemName','itemAmount','loading'],
		methods:{
			
			//根据金额判断是否要用万元为单位显示,并返回对应的金额和单位
			getAmountUnit (data){
				let origAmount = parseFloat(data)
				if(origAmount>=100000000.00){
					let theAmount = (origAmount/10000)
					let flag = false
					if(theAmount.length > 12){
						flag = true
					}
					return {amount: theAmount, unit:'万元', isScale:flag}
				}else{
					let theAmount = origAmount; 
					let flag = false
					if(theAmount.length > 12){  
						flag = true
					}
					return {amount: theAmount,unit:'元', isScale:flag}
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		display: flex;
		flex-direction: column;
		padding:30rpx ;
		.content-text {
			color: #F0F0F0;
		}
	
	}
	
	
	
	.pronum {
		font-size: 1.7em;
	}
	
	.stdnum {
		font-size: 1.2em;
	}
	// // [class*="loader-"] {
	// //     display: inline-block;
	// //     width: 1em;
	// //     height: 1em;
	// //     color: inherit;
	// //     vertical-align: middle;
	// //     pointer-events: none;
	// // }
	// .loader-02 {
	// 	margin-left:50rpx;
	//     border: .2em solid transparent;
	//     border-left-color: currentcolor;
	//     border-right-color: currentcolor;
	//     border-radius: 50%;
	//     -webkit-animation: 1s loader-02 linear infinite;
	//     animation: 1s loader-02 linear infinite;
	// }
	// @-webkit-keyframes loader-02 {
	//     0% {
	//         -webkit-transform: rotate(0deg);
	//         transform: rotate(0deg);
	//     }
	//     100% {
	//         -webkit-transform: rotate(360deg);
	//         transform: rotate(360deg);
	//     }
	// }
	// @keyframes loader-02 {
	//     0% {
	//         -webkit-transform: rotate(0deg);
	//         transform: rotate(0deg);
	//     }
	//     100% {
	//         -webkit-transform: rotate(360deg);
	//         transform: rotate(360deg);
	//     }
	// }
</style>
