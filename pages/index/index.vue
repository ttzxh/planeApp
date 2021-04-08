<template>
	<view class="index">
		<index-item></index-item>
	</view>
</template>

<script>
	import indexItem from "../../components/indexItem/indexItem.vue"
	export default {
		components:{
				indexItem
		},
		data() {
			return {
			}
		},
		onLoad() {

		},
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">
	.index{
		width: 100%;
		height: calc(100vh - 94px);
		background-color: #F1F1F1;
		
	}
</style>
