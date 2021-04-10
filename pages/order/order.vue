<template>
	<view class="order">
		<view>
			<view v-for="item in orderList" :key="item.id">
				<view class="order-item">
					<view class="order-item-header">
						<view>{{item.planeName+"："}}{{item.planeId}}</view>
						<view>2102-1-1</view>
					</view>
					<view class="order-item-content">
						<view class="order-item-content-left">
							<view>
								<view style="font-size: 20px;color: #F0AD4E;">{{startTime(item.time)}}</view>
								<view>{{item.startPlace}}</view>
							</view>
							<jianTou style="flex-basis: 200upx;margin-bottom: 20px;">
								{{spendTime(item.spend)}}
							</jianTou>
							<view>
								<view style="font-size: 20px;color: #F0AD4E;">{{endTime(item.time,item.spend)}}</view>
								<view>{{item.endPlace}}</view>
							</view>
						</view>
						<view class="order-item-content-right">
							<view style="color: #DD524D;font-size: 20px;">
							¥{{item.num}}
							</view>
							<view>
								{{item.ticket}}张
							</view>
						</view>
					</view>
					<view class="order-item-footer">
						<view style="padding-top: 15px;">订单编号：{{item.orderId}}</view>
						<view>
							<button type="warn" size="mini" plain @tap="verb(item)">申请退款</button>
						</view>
						</view>
				</view>
			</view>
		</view>
		<quick-message ref="message"></quick-message>
	</view>
</template>

<script>
	import jianTou from "../../components/jiantou/jiantou.vue"
	
	export default{
		components:{
				jianTou
		},
		computed:{
				spendTime(){
					return function(val){
						return (val/1000/60).toFixed(1)+"分钟"
					}
				},
				startTime(){
					return function(val){
						let h = new Date(parseInt(val)).getHours()
						let m = new Date(parseInt(val)).getMinutes()
						m=m>=10?m:0+m
						return h+":"+m
					}
				},
				endTime(){
					return function(val,spendVal){
						let h = new Date(parseInt(val)+parseInt(spendVal)).getHours()
						let m = new Date(parseInt(val)+parseInt(spendVal)).getMinutes()
						m=m>=10?m:0+m
						return h+":"+m
					}
				}
		},
		data(){
			return {
				orderList:[
					{planeName:"G11",planeId:"123",startPlace:"武汉",endPlace:"成都",ticket:122,num:500,time:(new Date().getTime())+"",spend:"1000000",orderId:"111231231"},
					{planeName:"G11",planeId:"124",startPlace:"武汉",endPlace:"成都",ticket:122,num:500,time:(new Date().getTime())+"",spend:"1000000",orderId:"11"},
					{planeName:"G11",planeId:"125",startPlace:"武汉",endPlace:"成都",ticket:122,num:500,time:(new Date().getTime())+"",spend:"1000000",orderId:"11"},
					{planeName:"G11",planeId:"126",startPlace:"武汉",endPlace:"成都",ticket:122,num:500,time:(new Date().getTime())+"",spend:"1000000",orderId:"11"},
					{planeName:"G11",planeId:"127",startPlace:"武汉",endPlace:"成都",ticket:122,num:500,time:(new Date().getTime())+"",spend:"1000000",orderId:"11"}
									
				]
			}
		},
		methods:{
			verb(){
				this.$refs.message.show({
				        msg:'退款申请已发送',
						customStyle:{ //自定义样式
				     	color:'#F0AD4E', //字体图标色
					 }, 
				   })
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
				margin-top: 5px;
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
