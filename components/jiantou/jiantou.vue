<template>
	<view class="arrow">
		<view class="arrow-body">
			
		</view>
		<view class="arrow-time">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default{
		
	}
</script>

<style scoped lang="scss">
	.arrow{
		position: relative;
		width: 100%;
		height: 20px;
		display: flex;
		flex-direction: row;
		margin-top: 15px;
		overflow: hidden;
		&-time{
			line-height: 30px;
			position: absolute;
			top: -3px;
			left: 0;
			right: 20px;
			margin: auto;
			color: #F0AD4E;
		}
		&-body{
			width: 100%;
			height: 1px;
			background-color: #808080;
			&::after{
				content: '';
				position: absolute;
				border: 10px solid #808080;
				border-top-color: transparent;
				border-right-color: transparent;
				border-bottom-color: transparent;
				border-left: 27px solid #808080;
				top: calc(25% - 14px);
				right: -10px;
			}
		}
	}
</style>
