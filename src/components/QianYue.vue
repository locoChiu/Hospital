<!-- 我的签约页面 -->
<!-- 我的签约即是我的一级代理消费的信息 -->

<template>
	<div class="reciveContainer">

		<!-- 头部标题及返回区域 -->
		<div class="header">
			<a class="backIcon" @click.prevent="backone"><span class="mui-icon mui-icon-arrowleft"></span></a>
			<h1>我的签约</h1>
		</div>
		<div class="mt"></div>

		<!-- 一级代理消费列表展示区域 -->
		<div class="reciveItem" v-for="item in list" :key="item.spend_time"> 
			<div class="headImg"><img src="../assets/headImg.png"></div>
			<span class="name">{{item.prj_name}}</span>
			<div>
				<span>￥{{item.prj_price}}&nbsp;({{item.user_name}}&nbsp;{{item.user_tel}})</span>
				<p>{{item.spend_time | dateFilter}}</p>	
			</div>
		</div>
		
	</div>
</template>

<script type="text/javascript">
let path = require('../path.json')
import { Toast } from 'mint-ui'

export default {
	data(){
		return {
			time:"2019-05-10",
			reciveMoney:"18001.00",
			id:sessionStorage.getItem('id'),
			list:[]
		}
	},
	created(){
		this.getData();
	},
	methods:{
		backone(){	//后退到上一页面函数
			this.$router.go(-1);
		},
		getData(){	//获取一级代理消费数据函数
			var that = this;
			this.loginCheck(path.path_loginCheck,function(){
				//获取一级代理会员消费数据
				that.$http.get(path.path_getQianYue,{params:{id:that.id}}).then(res=>{
					if(res.body.status == 200) {
						if(res.body.message.length != 0) {
							res.body.message.forEach(item=>{
								that.list.push(item);
							})					
						}
					}else {
						Toast("获取消费会员数据异常");
					}
				}).then(res=>{
				//获取一级代理产品消费数据
				that.$http.get(path.path_getQianYue2,{params:{id:that.id}}).then(res=>{
					if(res.body.status == 200) {
						if(res.body.message.length != 0) {
							res.body.message.forEach(item=>{
								that.list.push(item);
							})	
							//将产品和会员数据放到同一个数组中 根据时间进行先后消费排序
							var compare = function (obj1, obj2) {
								var val1 = new Date(obj1.spend_time);
								var val2 = new Date(obj2.spend_time);
								if (val1 > val2) {
									return -1;
								} else if (val1 > val2) {
									return 1;
								} else {
									return 0;
								}            
							} 			
						}
					}else {
						Toast("获取消费产品数据异常");
					}
				})
			})
		})
		},
	},
}


</script>

<style type="text/css" scoped>
* {
	margin:0;
	padding:0;
}
.header {
	width: 100%;
	background-color: #fff;
	height: 40px;
	text-align: center;
	margin-bottom: 10px;
	position: fixed;
	top:0;
	z-index:999;
}
.header h1 {
	font-size: 18px;
	line-height: 40px;
	font-weight: 400;
}
.backIcon {
	position: absolute;
	top: 6px;
	left: 10px;
	color: #ccc;
}
.mt {
	margin-top: 40px;
	width: 100%;
	height:10px;
}
.reciveItem {
	position: relative;
	margin: 0 auto;
	width: 100%;
	font-size: 14px;
	background-color: #fff;
	border-bottom: 1px solid #ccc;
	padding-top: 10px;
	padding-right: 4px;
	padding-bottom: 10px;
	padding-left: 75px;
	}
.headImg {
	position: absolute;
	width: 50px;
	height: 50px;
	top: 10px;
	left: 3%;
	border-radius: 2px;
	background-color: red;
	overflow: hidden;
}
.headImg img {
	width: 100%;
}
.name {
	display: block;
	font-size: 14px;
	text-align: left;
	margin-bottom: 5px;
}
.reciveMoney {
	color: #000;
}
.reciveMoney span {
	color: red;
}
.reciveItem p {
	margin: 0;
	padding: 0;
	font-size: 14px;
}
.reciveItem div {
	font-size: 12px;
}
.reciveItem div {
	display: flex;
	justify-content: space-between;
}
.reciveItem div span {
	font-size: 13px;
	color: #e9666b;
}
</style>