<template>
	<view>
		<self-collapse-item :data="receviable.detail.items"></self-collapse-item>
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
	computed:mapState('report',['receviable']),
	onLoad() {
		uni.setNavigationBarTitle({
			title: this.receviable.detail.itemName+'账龄列表'
		});

	},
	methods: {
	
	}
};
</script>

<style>
	
</style>
