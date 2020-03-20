<template>
	<view>
		<self-collapse-item :listData="payable.detail.items"></self-collapse-item>
	</view>
</template>

<script>
import selfCollapseItem from '@/components/self-collapse-item/self-collapse-item'
import {mapState} from 'vuex'
export default {
	components: {
		selfCollapseItem
	},
	data() {
		return {
		};
	},
	computed:mapState('report',['payable']),
	onLoad() {
		uni.setNavigationBarTitle({
			title: this.payable.detail.itemName+'账龄列表'
		});

	},
	methods: {
	
	}
};
</script>

<style>
	
</style>
