<template>
	<view class="item" style="color: #212121;">
		<view class="item-name">
			G11
		</view>
		<view class="content">
			<view class="startCity">
				<view style="font-size: 30px;font-weight: bolder;color: #007AFF;">15:00</view>
				<view style="font-size: 13px;font-weight: bolder;">武汉</view>
				<view style="font-size: 13px;font-weight: bolder;">起始点</view>
			</view>
			<view class="guider">
				<guider></guider>
			</view>
			<view class="endCity">
				<view style="font-size: 30px;font-weight: bolder;color: red;">15:00</view>
				<view style="font-size: 13px;font-weight: bolder;">武汉</view>
				<view style="font-size: 13px;font-weight: bolder;">起始点</view>
			</view>
		</view>
		<footer>
			<view style="color: red;">剩余：{{ticket}}张票</view>
			<view>
				<text style="color: #DD524D;font-size: 25px;">{{num}}¥</text>
			  <button type="primary" size="mini">预定</button>
			</view>
			
		</footer>
	</view>
	
</template>

<script>
	import guider from "../guider/guider.vue"
	import guiderRight from "../guider/guiderRight.vue"
	export default {
		components:{
			guider,
			guiderRight
		},
		data() {
			return {
				ticket:122,
				num:500
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
	.item{
		width: 100vw;
		background-color: #fff;
		position: relative;
		&-name{
			font-size: 22px;
			line-height: 30px;
			text-align: center;
			color: #F0AD4E;
			position: absolute;
			top: 15px;
			width: 100vw;
			left: 0;
			margin: 0 auto;
			right: 30px;
			
		}
		footer{
			box-sizing: border-box;
			width: 100%;
			height: 40px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 25px;
			button{
				margin-left: 20px;
				vertical-align: top;
			}
		}
		.content {
			width: 100vw;
			height: 100px;
			display: flex;
			box-sizing: border-box;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			padding:10px 15px;
			.startCity{
				text-align: center;
			}
			.guider{
				margin-right: 25px;
			}
			.endCity{
				text-align: center;
			}
		}
		
	}
</style>
