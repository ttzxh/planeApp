<template>
	<view class="calc">
		<view class="calc-content">
			<view class="payway">选择支付方式：</view>
			<view class="calc-content-WxAli">
				<text class="pay" :style="{backgroundColor:(payIndex===0?'#007AFF':'')}"
				 @tap="payWay(0)">支付宝</text>
				<text class="pay" :style="{backgroundColor:(payIndex===1?'#007AFF':'')}"
				 @tap="payWay(1)">微信</text>
				<text class="pay" :style="{backgroundColor:(payIndex===2?'#007AFF':'')}"
				 @tap="payWay(2)">银行卡</text>
			</view>
			<view v-if="payIndex===2">
				<view class="calc-content-card">
					<view style="color: #fff;background-color: #007AFF;line-height: 30px;border-radius: 30px;">选择银行卡：</view>
					<picker mode="selector" :range="bankList" @change="changeCurrentBank">
						<input type="text" v-model="chooseBank" placeholder="点击选择银行" />
					</picker>
				</view>
				<view class="calc-content-name">
					<view style="color: #fff;background-color: #007AFF;line-height: 30px;border-radius: 30px;" class="name">
						持卡人
					</view>
					<input v-model="cardPerson" style="border-bottom: 2px solid #007AFF;margin: 10px;" type="text" /> 
				</view>
				<view class="calc-content-num">
					<view class="" style="color: #fff;background-color: #007AFF;line-height: 30px;border-radius: 30px;">
						卡号
					</view>
					<input v-model="cardNum" type="text" style="border-bottom: 2px solid #007AFF;margin: 10px;"/>
				</view>
				
			</view>
			<view class="calc-content-pass" style="color: #fff;background-color: #007AFF;line-height: 30px;border-radius: 30px;">
				输入支付密码
			</view>
			<input v-model="cardPassword" type="text" style="border-bottom: 2px solid #007AFF;margin: 10px;" password/>
			
			<view class="calc-content-end">
				<button type="primary" :disabled="!canSubmit" size="mini" @tap="finish">完成</button>
			</view>
			
		</view>
		<quick-message ref="message"></quick-message>
	</view>
</template>

<script>
	
	export default{
		data(){
			return {
				bankList:['中国工商银行','中国农业银行'],
				currentBank:0,
				ifWxAliPay:false,
				payIndex:0,
				cardPerson:"",
				cardNum:"",
				cardPassword:"",
				money:300
			}
		},
		computed:{
			chooseBank(){
				return this.bankList[this.currentBank]
			},
			canSubmit(){
				return (this.payIndex===2&&this.cardPerson&&this.cardNum&&this.cardPassword)||(this.payIndex===0&&this.cardPassword)||(this.payIndex===1&&this.cardPassword)
			}
		},
		methods:{
			changeCurrentBank(e){
				console.log(e.target.value)
				this.currentBank = e.target.value
			},
			payWay(wayId){
				this.cardPassword = ""
				this.payIndex = wayId
			},
			checkCardNum(){
				let exg = /[1-9]/g
				if((!exg.test(this.cardNum))||(this.cardNum.length!==16)){
					this.$refs.message.show({
					        msg:'请输入正确的卡号',
							customStyle:{ //自定义样式
					      color:'red', //字体图标色
						 }, 
					   })
					   return false
				}
				return true
			},
			checkPassword(){
				let exg = /[1-9]/g
				if((!exg.test(this.cardPassword))||(this.cardPassword.length!==6)){
					this.$refs.message.show({
					        msg:'请输入正确的支付密码',
							customStyle:{ //自定义样式
					      color:'red', //字体图标色
						 }, 
					   })
					   return false
				}
				return true
			},
			finish(){
				if(this.payIndex===2&&!(this.checkPassword()&&this.checkCardNum())){
					return
				}else if((this.payIndex===0||this.payIndex===1)&&this.checkPassword())
				// let data = uni.request({
				// 	url:"",
				// 	method:"POST",
				// 	data:{
						
				// 	},
				// })
					setTimeout(function(){
					uni.switchTab({
						url:"../order/order"
					})	
					},3000)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.calc{
		width: 100%;
		height: 100vh;
		&-content{
			text-align: center;
			width: 600upx;
			height: 1000upx;
			position: absolute;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
			margin: auto;
			&-card{
				input{
					border-bottom: 2px solid #007AFF;
					margin: 10px 30px;
				}
			}
			.payway{
				background-color: #007AFF;
				border-radius: 20px;
				color: #fff;
				line-height: 30px;
			}
			&-WxAli{
				margin: 30px 10px;
				.pay{
					border: 1px solid #333;
					padding: 5px 20px;
					margin: 8px;
					border-radius: 15px;
					width: 30px;
					&:active{
						background-color: #007AFF;
						color: #fff;
					}
				}
			}
		}
		
	}
</style>
