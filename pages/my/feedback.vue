<template>
	<view class="content">
		<view class="container-top">
			<view class="type">
				<view class="example-title">反馈问题类型
				</view>
				<view class="uni-flex uni-row">
					<checkbox-group>
						<label>
							<checkbox value="fe"  style="transform:scale(0.7)"/>功能异常
						</label>
						<label>
							<checkbox value="ef"  style="transform:scale(0.7)"/>体验问题
						</label>
						<label class="checkbox">
							<checkbox value="nfp"  style="transform:scale(0.7)"/>新功能建议
						</label>
						<label class="checkbox">
							<checkbox value="ot"  style="transform:scale(0.7)"/>其它
						</label>
					</checkbox-group>
				</view>	
			</view>
			
			<uni-list>
				<uni-list-item title="称呼"  showArrow="false"></uni-list-item>
				<uni-list-item title="联系方式"  showArrow="false"></uni-list-item>
			</uni-list>			
		</view>
		
		<view class="container-bottom">
				<view class="message-title">留言备注</view>
			<view class="uni-textarea">
				<textarea  placeholder="请输入反馈内容促进我们为您更好的服务"  placeholder-class="fontsize"/>
			</view>				
		</view>
		
		<view class="footer">
			<wButton 
				text="提交反馈"
			></wButton>
		</view>
	</view>
</template>

<script>
	var _this;
	import wInput from '../../components/l-components/watch-login/watch-input.vue' //input
	import wButton from '../../components/l-components/watch-login/watch-button.vue' //button
	import uniList from '@/components/l-components/uni-list/uni-list.vue'
	import uniListItem from '@/components/l-components/uni-list-item/uni-list-item.vue'
	export default {
		components: {uniList,uniListItem,wInput,wButton},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.content{
		display: flex;
		flex-direction: column;
		justify-content:center;
		background-color: #C8C7CC;
		/* margin-top: 128upx; */
	}
	.container-top{
		width: 100%;
		height: 30vh;
		background-color:#FFFFFF;
		margin-bottom: 10upx;
	}
	.container-bottom{
		width: 100%;
		height: 48vh;
		background-color:#FFFFFF;
		margin-top:10upx;
		padding-left: 28upx;
		padding-right: 36upx;
	}
	.footer{	
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 28upx;
		margin-top: 10upx;
		margin-bottom: 48upx;
		text-align: center;

	}
	.type{
		width: 100%;
		height: 10vh;
		margin-top: 36upx;
		margin-bottom: 24upx;
		display: flex;
		justify-content:space-between;
		flex-direction: column;
		padding-left: 36upx;
		padding-right: 36upx;
		font-size: 28upx;
		overflow: hidden;
	}
	.type text{
		font-size: 24upx;
	}
	.example-title {
		display: flex;
		justify-content:flex-start;
		align-items:center;
		font-size: 32upx;
		/*line-height: $uni-font-size-base;*/
		/*margin-top: 20upx;*/
		position: relative;
	}
	.message-title{
		display: flex;
		justify-content:flex-start;
		align-items:center;
		font-size: 32upx;
		/*line-height: $uni-font-size-base;*/
		/*margin-top: 20upx;*/
		position: relative;
		margin-top: 24upx;
		margin-bottom: 24upx;
	}
	.fontsize{
		font-size: 24upx;
	}
	
</style>
