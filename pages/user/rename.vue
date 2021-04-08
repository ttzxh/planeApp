<template>
	<view class="rename">
		<text class="new">新昵称：</text>
		<input type="text" v-model="rename" placeholder="请输入昵称"/>
		<button type="primary" @tap="changeRealname">确认更改</button>
		<quick-message ref="message"></quick-message>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				rename:""
			}
		},
		methods:{
			changeRealname(){
				if(this.rename.trim()&&this.rename.trim().length<10){
					uni.request({
						url:"",
						method:"POST",
						
					})
				}else{
					this.$refs.message.show({
					        msg:'请输入正确的昵称',
							customStyle:{ //自定义样式
					     	color:'red', //字体图标色
						 }, 
					   })
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.rename{
		padding:22px 8px;
		.new{
			color: #fff;
			background-color: #007AFF;
			padding: 5px 8px;
			border-radius: 15px;
		}
		input{
			margin-top: 15px;
			letter-spacing: 1px;
			height: 30px;
			border-bottom: 3px solid #007AFF;
			margin-bottom: 20px;
			transition: all ease 0.3s; 
			&:active{
				border-bottom-color: red;
			}
		}
	}
</style>
