<template>
	<view class="manager">
		<view class="header">
			<view class="header-row">ID</view>
			<view class="header-row">飞机名</view>
			<view class="header-row">起始地</view>
			<view class="header-row">结束地</view>
			<view class="header-row">编辑</view>
		</view>
		<view >
			<view class="row" v-for="item in userList" :key="item.userId">
				<view class="row-item">{{item.planeId}}</view>
				<view class="row-item">{{item.planeName}}</view>
				<view class="row-item">{{item.startPlace}}</view>
				<view class="row-item">{{item.endPlace}}</view>
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
				<!-- <view>{{editUserInfo[item.value]}}</view> -->
				<input style="width: 100px;text-align: center;" type="text" v-model="editUserInfo[item.value]" />
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
					{planeName:"1",planeId:1,startPlace:"3",endPlace:1,startTime:"213213131",endTime:"13123123123",num:"144",ticket:222},
					{planeName:"1",planeId:2,startPlace:"3",endPlace:1,startTime:"213213131",endTime:"13123123123",num:"144",ticket:222},
					{planeName:"1",planeId:3,startPlace:"3",endPlace:1,startTime:"213213131",endTime:"13123123123",num:"144",ticket:222},
					{planeName:"1",planeId:4,startPlace:"3",endPlace:1,startTime:"213213131",endTime:"13123123123",num:"144",ticket:222},
					{planeName:"1",planeId:5,startPlace:"3",endPlace:1,startTime:"213213131",endTime:"13123123123",num:"144",ticket:222},
					{planeName:"1",planeId:699999999999,startPlace:"3",endPlace:1,startTime:"213213131",endTime:"13123123123",num:"144",ticket:222},
				],
				userInfoList:[
					{label:"ID",value:"planeId"},
					{label:"飞机名",value:"planeName"},
					{label:"起始地",value:"startPlace"},
					{label:"结束地",value:"endPlace"},
					{label:"起飞时间",value:"startTime"},
					{label:"抵达时间",value:"endTime"},
					{label:"价格",value:"num"},
					{label:"票数",value:"ticket"},
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
 