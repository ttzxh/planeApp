<template>
	<view class="login">
		<text class="label">用户名：</text>
			<input id="username" type="text" v-model="username" 
			placeholder="请输入用户名"/>
			<text class="label">密码：</text>
			<input id="password" type="text" v-model="password" password=""
			placeholder="请输入密码"/>
		<button type="primary" @tap="startLogin">登陆</button>
		<view class="footer">
			<view @tap="goRegister">没有账号？注册一个吧!</view>
		</view>
		<quick-message ref="message"></quick-message>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				username:"",
				password:""
			}
		},
		methods:{
			startLogin(){
				if(this.username.trim()&&this.password.trim()){
					//登陆逻辑
					uni.request({
						url:"",
						method:"POST",
						data:{
							username,
							password
						},
						success(res) {
							if(res.data.error===-1){
								uni.navigateTo({
									url:"../index/index"
								})
							}else{
								this.$refs.message.show({
								        msg:'用户名或密码错误',
										customStyle:{ //自定义样式
								     	color:'red', //字体图标色
									 }, 
								   })
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
			goRegister(){
				uni.navigateTo({
					url:"../register/register"
				})
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
			letter-spacing: 2px;
			padding: 5px 10px;
			height: 50upx;
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
