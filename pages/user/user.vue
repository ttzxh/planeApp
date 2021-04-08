<template>
	<view class="user">
		<button type="primary" @tap="goLogin" v-if="ifLogin">登陆</button>
		<view class="userInfo">
			<view class="card" v-for="item,index in cardList" :key="item.id"
			:style="{color:(item.canEdit?'#000':'#aaa')}" @tap="showPop(item.id)">
				<view class="left">{{item.label}}</view>
				<view class="right">{{item.value}}</view>
			</view>
		</view>
		<wyb-popup ref="popup" class="pop">
			<button>从相册中选择</button>
			<button>拍照</button>
			<button type="warn" @tap="cancel">取消</button>
		</wyb-popup>
	</view>
</template>

<script>
	import wybPopup from '../../components/wyb-popup/wyb-popup.vue'
	export default{
		components: {
		        wybPopup
		    },
		data(){
			return {
				cardList:[
					{label:"头像",value:"1",id:0,canEdit:true},
					{label:"用户名",value:"1",id:1,canEdit:false},
					{label:"昵称",value:"1",id:2,canEdit:true},
					{label:"预定",value:"1",id:3,canEdit:true},
					{label:"用户操作",value:">",id:4,canEdit:true},
					{label:"机票操作",value:">",id:5,canEdit:true}
				]
			}
		},
		computed:{
			ifLogin(){
				return uni.getStorageSync('token')
			}
		},
		methods:{
			cancel(){
				this.$refs.popup.hide() // 显示
			},
			showPop(id){
				switch(id){
					case 0:this.chooseAvatar();break;
					case 2:this.chooseRealname();break;
					case 3:this.goCart();break;
					case 4:this.gouser();break;
					case 5:this.goPlane();break;
				}
			},
			chooseAvatar(){
				this.$refs.popup.show() // 显示
			},
			chooseRealname(){
				uni.navigateTo({
					url:"./rename"
				})
			},
			goCart(){
				uni.navigateTo({
					url:"../cart/cart"
				})
			},
			goPlane(){
					uni.navigateTo({
						url:"../manager/plane"
					})
			},
			gouser(){
				uni.navigateTo({
					url:"../manager/manager"
				})
			},
			goLogin(){
				uni.navigateTo({
					url:"../login/login"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.pop{
		display: flex;
		text-align: center;
		background-color: #F1F1F1;
		button{
			margin: 15px;
		}
	}
	.userInfo{
		width: 100vw;
		height: 100vh;
		background-color: #F1F1F1;
		padding: 5px 5px;
		box-sizing: border-box;
		.card{
			display: flex;
			justify-content: space-between;
			line-height: 35px;
			background-color: #fff;
			height: 35px;
			padding: 10px;
			padding-right: 20px;
			margin: 18px 0;
			border-radius: 12px;
			box-shadow: 0 0 7px 2px rgba(0,0,0,.4);
			transition: all ease 0.2s;
			&:active{
				background-color: #F1F1F1;
			}
		}
	}
</style>

