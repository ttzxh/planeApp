<template>
	<view class="cart">
		<view v-if="cartList.length>0">
			<view v-for="item in cartList" :key="item.id">
				<view class="cart-item">
					<view class="cart-item-header" >
							<checkbox-group @change="changeifChoose(item.planeId)">
								<label>
									<checkbox :checked="item.ifchoose" /><text></text>
								</label>
							</checkbox-group>
							<view style="color: #999999">{{item.time}}</view>
						<view>{{item.planeName}}</view>
					</view>
					<view class="cart-item-content">
						<view class="cart-item-content-left">
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
						<view class="cart-item-content-right">
							<view style="font-size: 25px;color: #F0AD4E;">
								¥{{item.num*item.ticket}}
							</view>
							<view>
								{{item.ticket}}张
							</view>
						</view>
					</view>
					<view class="cart-item-footer">
						<text style="margin-right: 270upx;">
							{{item.planeId}}
						</text>
						<button type="primary" size="mini" plain @tap="goBuy">去结算</button>
						<button type="warn" size="mini" plain @tap="cancel">退订</button>
					</view>
				</view>
			</view>
		</view>
		<view v-else>
			此处空空如也
		</view>
		<view class="cart-calc">
			<label class="radio">
				<checkbox-group @change="changeifAllChoose">
					<label>
						<checkbox :checked="ifAll" />
						全选
					</label>
				</checkbox-group>
			</label>
			<view class="right">
				<text>总计：{{allMoney}}元</text>
				<button type="primary" :disabled="allMoney===0" @tap="goBuy">结算</button>
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
		data(){
			return {
				cartList:[
						{planeName:"G11",planeId:"123",startPlace:"武汉",endPlace:"成都",ticket:122,num:500,time:(new Date().getTime())+"",spend:"1000000",ifchoose:false},
						{planeName:"G11",planeId:"124",startPlace:"武汉",endPlace:"成都",ticket:122,num:500,time:(new Date().getTime())+"",spend:"1000000",ifchoose:false},
						{planeName:"G11",planeId:"125",startPlace:"武汉",endPlace:"成都",ticket:122,num:500,time:(new Date().getTime())+"",spend:"1000000",ifchoose:false},
						{planeName:"G11",planeId:"126",startPlace:"武汉",endPlace:"成都",ticket:122,num:500,time:(new Date().getTime())+"",spend:"1000000",ifchoose:false},
						{planeName:"G11",planeId:"127",startPlace:"武汉",endPlace:"成都",ticket:122,num:500,time:(new Date().getTime())+"",spend:"1000000",ifchoose:false}
								
					]
			}
		},
		computed:{
				ifAll(){
					return this.cartList.every(item=>item.ifchoose)
				},
				allMoney(){
					return this.cartList.reduce((pre,cur)=>{
						return pre+(cur.ifchoose?cur.num:0)
					},0)
				},
				planeTime(){
					return function(val){
						
					}
				}
		},
		methods:{
			goBuy(){
				uni.navigateTo({
					url:"./calc"
				})
			},
			cancel(){
				//取消操作 从storage中删除该项
				this.$refs.message.show({
				        msg:'退订成功',
						customStyle:{ //自定义样式
				     	color:'#007AFF', //字体图标色
					 }, 
				   })
				
			},
			changeifAllChoose(){
			if(this.ifAll){
				this.cartList.forEach(item=>{
					item.ifchoose = false
				})
			}else{
				this.cartList.forEach(item=>{
					item.ifchoose = true
				})
			}
			},
			changeifChoose(item){
				this.cartList.forEach(items=>{
					if(items.planeId === item){
						items.ifchoose = !items.ifchoose
					}
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.cart{
		background-color: #F1F1F1;
		width: 100%;
		height: 100vh;
		box-sizing: border-box;
		&-item{
			background-color: #fff;
			padding: 10px 15px;
			border-radius: 10px;
			margin: 15px 0px;
			&-header{
				display: flex;
				justify-content: space-between;
				border-bottom: 1upx solid #F1F1F1;
				line-height: 26px;
				padding-bottom: 8px;
			}
			&-content{
				display: flex;
				justify-content: space-between;
				align-items: center;
				text-align: center;
				&-right{
					width: 140upx;
					height: 150upx;
					line-height: 25px;
					margin-top: 30px;
					margin-right: 10px;
				}
				&-left{
					width: 440upx;
					height: 150upx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					border-right: 1upx solid #F1F1F1;
					padding: 0 10px;
				}
			}
			&-footer{
				text-align: right;
				button{
					width: 80px;
					vertical-align: middle;
					height: 30px;
					margin-left: 12px;
				}
			}
		}
		&-calc{
			box-sizing: border-box;
			display: flex;
			justify-content: space-between;
			padding: 0 15px;
			align-items: center;
			position: fixed;
			bottom: 0;
			width: 100%;
			height: 50px;
			background-color: #fff;
			border: 1upx solid #C8C7CC;
			.right{
			}
			button{
				vertical-align: middle;
				display: inline-block;
				width: 90px;
				height: 35px;
				border-radius: 35px;
				line-height: 34px;
				margin-left: 25px;
			}
		}
	}
</style>
