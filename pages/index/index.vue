<template>
	<view class="index">
		<view class="index-item" v-for="item in planeList" :key="item.planeId">
			<index-item @orderSucc="orderSucc"
			:planeName="item.planeName"
			:planeId="item.planeId"
			:startPlace="item.startPlace"
			:endPlace="item.endPlace"
			:ticket="item.ticket"
			:num="item.num"
			:time="item.time"
			:spend="item.spend"></index-item>
		</view>
		<quick-message ref="message"></quick-message>
	</view>
</template>

<script>
	import indexItem from "../../components/indexItem/indexItem.vue"
	
	export default {
		components:{
				indexItem
		},
		data() {
			return {
				planeList:[
					{planeName:"G11",planeId:"123",startPlace:"武汉",endPlace:"成都",ticket:122,num:500,time:(new Date().getTime())+"",spend:"1000000"},
					{planeName:"G11",planeId:"124",startPlace:"武汉",endPlace:"成都",ticket:122,num:500,time:(new Date().getTime())+"",spend:"1000000"},
					{planeName:"G11",planeId:"125",startPlace:"武汉",endPlace:"成都",ticket:122,num:500,time:(new Date().getTime())+"",spend:"1000000"},
					{planeName:"G11",planeId:"126",startPlace:"武汉",endPlace:"成都",ticket:122,num:500,time:(new Date().getTime())+"",spend:"1000000"},
					{planeName:"G11",planeId:"127",startPlace:"武汉",endPlace:"成都",ticket:122,num:500,time:(new Date().getTime())+"",spend:"1000000"}
				
				]
		    }
		},
		methods: {
			orderSucc(){
				this.$refs.message.show({
				        msg:'预定成功，请在24小时之内付款',
						customStyle:{ //自定义样式
				      color:'#007AFF', //字体图标色
					 }, 
				   })
			}

		}
	}
</script>

<style scoped lang="scss">
	.index{
		width: 100%;
		height: calc(100vh - 94px);
		background-color: #F1F1F1;
		&-item{
			margin-bottom: 10px;
		}
	}

</style>
