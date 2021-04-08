<template>
	<view class="manager">
		<view class="header">
			<view class="header-row">ID</view>
			<view class="header-row">用户名</view>
			<view class="header-row">昵称</view>
			<view class="header-row">权限</view>
			<view class="header-row">编辑</view>
		</view>
		<view >
			<view class="row" v-for="item in userList" :key="item.userId">
				<view class="row-item">{{item.userId}}</view>
				<view class="row-item">{{item.username}}</view>
				<view class="row-item">{{item.realname}}</view>
				<view class="row-item">{{item.status}}</view>
				<view class="row-item"><button type="primary"size="mini" @tap="showpop(item)">
				编辑
				</button></view>
				<view></view>
			</view>
		</view>
		<wyb-popup ref="popup" type="right" height="400" 
		width="500" radius="6" :showCloseIcon="true">
		   <view class="userInfo" v-for="item,index in userInfoList"
			:key="index">
				<view class="label">
		   		{{item.label+"："}}
				</view>
				<view>{{editUserInfo[item.value]}}</view>
			</view>
		   <view class="radio">
			   <view class="radio-radiosty">
			   	权限：
			   </view>
			   <radio-group @change="radioChange">
			            <radio value=1 checked=true />
					<text style="margin-right: 20px;">普通用户</text>
					     <radio value=2 />
					<text>管理员</text>
			   </radio-group>
		   </view>
		   <view class="option">
			   <button type="primary" size="mini" @tap="edit">保存</button>
			   <button type="default" size="mini" @tap="cancel">取消</button>
		   </view>
		</wyb-popup>
	</view>
</template>

<script>
	import wybPopup from '@/components/wyb-popup/wyb-popup.vue'
	export default{
		components:{
			wybPopup
		},
		data(){
			return {
				currentStatus:1,
				userList:[
					{username:"1",userId:1,realname:"3",status:1},
					{username:"1",userId:2,realname:"3",status:1},
					{username:"1",userId:3,realname:"3",status:1},
					{username:"1",userId:4,realname:"3",status:1},
					{username:"1",userId:5,realname:"3",status:1},
					{username:"1",userId:699999999999,realname:"3",status:1},
				],
				userInfoList:[
					{label:"ID",value:"userId"},
					{label:"用户名",value:"username"},
					{label:"昵称",value:"realname"},
				],
				editUserInfo:{},
				status:2
			}
		},
		methods:{
			edit(){
				this.$refs.popup.hide() // 显示
			},
			cancel(){
				this.$refs.popup.hide() // 显示
			},
			showpop(item){
				this.editUserInfo = item
				this.$refs.popup.show() // 显示
			},
			radioChange(data){
				this.currentStatus = data
			}
		}
	}
</script>

<style lang="scss" scoped>
	.manager{
		.option{
			display: flex;
			margin-top: 35px;
		}
		.radio{
			margin:20px 10px;
			&-radiosty{
				background-color: #007AFF;
				padding: 5px 9px;
				border-radius: 20px;
				color: #fff;
				line-height: 18px;
				margin-bottom: 15px;
				width: 50px;
			}
		}
		
		.userInfo{
			margin:10px 10px;
			display: flex;
			padding-top: 10px;
			justify-content: space-between;
			border-bottom: 1upx solid #F1F1F1;
			&:nth-child(1){
				margin-top: 30px;
			}
			.label{
				background-color: #007AFF;
				padding: 5px 9px;
				border-radius: 20px;
				color: #fff;
				line-height: 18px;
				margin-bottom: 5px;
			}
		}
		.row{
			display: flex;
			justify-content: space-between;
			border-bottom: 1px solid #F1F1F1;
			align-items: center;
			text-align: center;
			height: 50px;
			&:nth-child(2n-1){
				background-color: #eee;
			}
			&-item{
				flex-basis: 20%;
				overflow: hidden;
				text-overflow: ellipsis;
			}
		}
		.header{
			display: flex;
			text-align: center;
			align-items: center;
			line-height: 25px;
			justify-content: space-between;
			border-bottom: 3px solid #007AFF;
			margin-top: 15px;
			&-row{
				flex-basis: 20%;
			}
		}
	}
</style>
