<template>
	<view class="guider">
		<view class="left">
			
		</view>
		<view class="center">
			
		</view>
		<view class="right">
			
		</view>
	</view>
</template>

<script>
</script>

<style scoped lang="scss">
	.guider{
		position: relative;
		width: 100%;
		height: 30px;
		// .left{
		// 	position: absolute;
		// 	border: 20px solid black;
		// 	border-top-color: transparent;
		// 	border-left-color: transparent;
		// 	border-bottom-color: transparent;
		// 	right: 50px;
		// 	top: 0;
		// }
		.center{
			position: absolute;
			width: 100px;
			height: 25px;
			background-color: #000;
			left: -50px;
			top: 12px;
		}
		.right{
			position: absolute;
			border: 20px solid black;
			border-left: 60px solid #000;
			border-top-color: transparent;
			border-right-color: transparent;
			border-bottom-color: transparent;
			left: 35px;
			top: 5px;
		}
	}
</style>
