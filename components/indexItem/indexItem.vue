<template>
	<view class="item" style="color: #212121;">
		<view class="item-name">
			{{planeName}}：{{planeId}}
		</view>
		<view class="item-time">
			{{spendTime}}
		</view>
		<view class="content">
			<view class="startCity">
				<view style="font-size: 22px;font-weight: bolder;color: #F0AD4E;">{{startTime}}</view>
				<view style="font-size: 13px;font-weight: bolder;">{{startPlace}}</view>
				<view style="font-size: 13px;font-weight: bolder;">起始点</view>
			</view>
			<view class="guider">
				<guider></guider>
			</view>
			<view class="endCity">
				<view style="font-size: 22px;font-weight: bolder;color: #F0AD4E;;">{{endTime}}</view>
				<view style="font-size: 13px;font-weight: bolder;">{{endPlace}}</view>
				<view style="font-size: 13px;font-weight: bolder;">结束点</view>
			</view>
		</view>
		<footer>
			<view >剩余：<text style="color: red;">{{ticket}}</text>张票</view>
			<view>
				<text style="color: #DD524D;font-size: 25px;">{{num}}¥</text>
			  <button type="primary" size="mini" @tap="order">预定</button>
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
		props:{
			planeName:{
				type:String,
				default:""
			},
				
			planeId:{
				type:String,
				default:""
			},
			startPlace:{
				type:String,
				default:""
			},
			endPlace:{
				type:String,
				default:""
			},
			ticket:{
				type:Number,
				default:0
			},
			num:{
				type:Number,
				default:0
			},
			time:{
				type:String,
				default:""
			},
			spend:{
				type:String,
				default:""
			}
			
		},
		data() {
			return {
			}
		},
		onLoad() {

		},
		computed:{
				spendTime(){
					return (this.spend/1000/60).toFixed(2)+"分钟"
				},
				startTime(){
					let h = new Date(parseInt(this.time)).getHours()
					let m = new Date(parseInt(this.time)).getMinutes()
					m=m>=10?m:0+m
					return h+":"+m
				},
				endTime(){
					let h = new Date(parseInt(this.time)+parseInt(this.spend)).getHours()
					let m = new Date(parseInt(this.time)+parseInt(this.spend)).getMinutes()
					m=m>=10?m:0+m
					return h+":"+m
				}
		},
		methods: {
		order(){
			//将当前飞机的信息存入storage中
			uni.setStorageSync("cartInfo",{planeName:this.planeName})
			this.$emit("orderSucc")
		}
		}
	}
</script>

<style scoped lang="scss">
	.item{
		width: 100vw;
		background-color: #fff;
		position: relative;
		&-name{
			font-size: 15px;
			line-height: 20px;
			text-align: center;
			color: #F0AD4E;
			position: absolute;
			top: 23px;
			width: 100vw;
			left: -25px;
			margin: 0 auto;
			right: 30px;
			
		}
		&-time{
			font-size: 15px;
			line-height: 20px;
			text-align: center;
			color: #F0AD4E;
			position: absolute;
			top: 65px;
			width: 100vw;
			left: -25px;
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
			padding:10px 22px;
			border-bottom: 1upx solid #F1F1F1;
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
