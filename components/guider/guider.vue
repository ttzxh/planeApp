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
		height: 25px;
		.center{
			position: absolute;
			width: 100px;
			height: 15px;
			background-color: #000;
			left: -50px;
			top: 8px;
		}
		.right{
			position: absolute;
			border: 15px solid #212121;
			border-top-color: transparent;
			border-right-color: transparent;
			border-bottom-color: transparent;
			border-left: 60px solid #000;
			left: 50px;
			top: 0;
		}
	}
</style>
