<!-- 我的二级代理页面 -->

<template>
	<div class="reciveContainer">

		<!-- 头部标题及返回区域 -->
		<div class="header">
			<a class="backIcon" @click.prevent="backone"><span class="mui-icon mui-icon-arrowleft"></span></a>
			<h1>我的2级代理</h1>
		</div>

		<!-- 二级代理人数展示区域 -->
		<div class="middle">
			<p class="p1">{{count}}</p>
			<p class="p2">2级代理人数（位）</p>
		</div>

		<!-- 二级代理人员信息列表展示区域 -->
		<div class="reciveItem" v-for="item in list" :key="item.reg_time">
			<div class="headImg"><img src="../assets/headImg.png"></div>
			<div class="itemContainer">
				<span class="name">{{item.real_name}}</span>
				<span class="addTime">加入时间：{{item.reg_time | dateFilter}}</span>
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
			time:"2019-05-10 11:57:37",
			reciveMoney:"801.00",
			count:this.$route.query.count,
			id:sessionStorage.getItem('id'),
			list:[]
		}
	},
	created(){
		this.getTwoAgent();
	},
	methods:{
		backone(){	//后退到上一页面函数
			this.$router.go(-1);
		},
		getTwoAgent(){	//获取二级代理人员数据函数
			var that = this;
			this.loginCheck(path.path_loginCheck,function(){
				that.$http.get(path.path_getTwoAgent,{params:{id:that.id}}).then(res=>{
					if(res.body.status == 200) {
						that.list = res.body.message;
					}else {
						Toast('获取二级代理人员数据异常');
					}
				})
			})
		}
	}
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
	position: relative;
	box-shadow: 0 0 1px #000;
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
.reciveItem {
	position: relative;
	margin: 0 auto;
	height: 65px;
	width: 100%;
	font-size: 16px;
	background-color: #fff;
	border-bottom: 1px solid #ccc;
	padding-top: 22px;
	padding-right: 10px;
	padding-bottom: 4px;
	padding-left: 80px;
}
.headImg {
	position: absolute;
	width: 45px;
	height: 45px;
	top: 10px;
	left: 3%;
	border-radius: 50%;
	background-color: red;
	overflow: hidden;
}
.headImg img {
	width: 100%;
}
.name {
	font-size: 16px;
	text-align: left;
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
.middle {
	width: 100%;
	height: 140px;
	background-color: #fff;
	margin-top: 50px;
	text-align: center;
	/*padding-top: 37%;*/
	padding-top: 35px;
	border-bottom: 1px solid #ccc;
}
.middle p {
	margin-bottom: 10px;
}
.middle .p1 {
	font-size: 30px;
	font-weight: 700;
	color: #e9666b;
	margin-bottom: 20px;
}
.itemContainer {
	display: flex;
	justify-content: space-between;
}
</style>