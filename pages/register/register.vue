<template>
	<view class="login">
		<text class="label">用户名：</text>
			<input id="username" type="text" v-model="username" maxlength="20"
			placeholder="请输入用户名"/>
			<text class="label">密码：</text>
			<input id="password" type="text" v-model="password" maxlength="20" password=""
			placeholder="请输入密码"/>
			<text class="label">确认密码：</text>
			<input id="password" type="text" v-model="repassword" maxlength="20" password=""
			placeholder="请输入密码"/>
		<button type="primary" @tap="startRegister">注册</button>
		<view class="footer">
			<view @tap="goLogin">已有账号？去登陆吧!</view>
		</view>
		<quick-message ref="message"></quick-message>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				username:"",
				password:"",
				repassword:""
			}
		},
		methods:{
			startRegister(){
				if(this.username.trim()&&this.password.trim()&&this.repassword.trim()){
					if(this.password!==this.repassword){
						this.$refs.message.show({
						        msg:'两次输入的密码不一样',
								customStyle:{ //自定义样式
								color:'red', //字体图标色
							}, 
						   })
						   this.password = ""
						   this.repassword = ""
						   return 
					}
					//注册逻辑
					uni.request({
						url:"",
						method:"POST",
						data:{
							username,
							password
						},
						success(res) {
							if(res.data.error===-1){
								uni.navigateBack()
							}
						}
					})
				}else{
					this.$refs.message.show({
					        msg:'请输入用户名或密码',
							customStyle:{ //自定义样式
					      color:'red', //字体图标色
			 			 }, 
					   })
				}
			},
			goLogin(){
				uni.navigateBack()
			}
		}
	}
</script>

<style scoped lang="scss">
	.login{
		padding: 15px 5px;
		.label{
			background-color: #007AFF;
			border-radius: 15px;
			padding: 7px;
			color: #fff;
			font-weight: 1000;
			line-height: 25px;
		}
		input{
			padding: 5px 10px;
			height: 50upx;
			letter-spacing: 2px;
			border-bottom: 2px solid #007AFF;
			// border-radius: 50upx;
			transition: all ease-in-out 0.3s; 
			margin-bottom: 25px;
			&:active{
				border-color: red;
				border-width: 5px;
			}
		}
		button{
			margin-top: 15px;
		}
		.footer{
			font-size: 14px;
			padding: 0 5px;
			display: flex;
			justify-content: space-between;
			margin-top: 15px;
			color: #007AFF;
		}
	}
</style>
