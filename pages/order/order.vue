<template>
	<view class="order">
		<view>
			<view v-for="item in orderList" :key="item.id">
				<view class="order-item">
					<view class="order-item-header">
						<view>{{item.plane}}</view>
						<view>2102-1-1</view>
					</view>
					<view class="order-item-content">
						<view class="order-item-content-left">
							<view>
								<view style="font-size: 23px;color: #F0AD4E;">15:00</view>
								<view>武汉</view>
							</view>
							<jianTou style="flex-basis: 200upx;margin-bottom: 20px;">
								12时5分
							</jianTou>
							<view>
								<view style="font-size: 23px;color: #F0AD4E;">15:00</view>
								<view>武汉</view>
							</view>
						</view>
						<view class="order-item-content-right">
							<view>
								¥88
							</view>
							<view>
								1张
							</view>
						</view>
					</view>
					<view class="order-item-footer">
						11111111111111111
						<button type="default" size="mini" plain>再次购买</button>
					<button type="warn" size="mini" plain>申请退款</button>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import jianTou from "../../components/jiantou/jiantou.vue"
	export default{
		components:{
				jianTou
		},
		data(){
			return {
				orderList:[
					{plane:"xxx",id:0},
					{plane:"xxx1",id:1},
					{plane:"xxx2",id:2},
					{plane:"xxx3",id:3}
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.order{
		width: 100vw;
		height: 100vh;
		background-color: #F1F1F1;
		box-sizing: border-box;
		padding: 8px 0;
		&-item{
			background-color: #fff;
			margin: 8px 0;
			padding: 13px;
			border-radius: 18px;
			&-header{
				line-height: 30px;
				border-bottom: 1px solid #F1F1F1;
				margin-bottom: 15px;
				display: flex;
				justify-content: space-between;
			}
			&-content{
				display: flex;
				justify-content: space-between;
				align-items: center;
				text-align: center;
				&-right{
					width: 140upx;
					height: 80upx;
					line-height: 25px;
					margin-right: 10px;
				}
				&-left{
					width: 440upx;
					height: 80upx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					border-right: 1upx solid #F1F1F1;
					padding: 0 10px;
				}
			}
			&-footer{
				width: 100%;
				height: 35px;
				display: flex;
				justify-content: space-between;
				align-items: center;
				button{
					margin-top: 15px;
					height: 25px;
					line-height: 23px;
				}
			}
			
		}
	}
</style>
