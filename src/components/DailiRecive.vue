<!-- 代理收益页面 -->

<template>
	<div class="reciveContainer">

		<!-- 头部标题及返回区域 -->
		<div class="header">
			<a class="backIcon" @click.prevent="backone"><span class="mui-icon mui-icon-arrowleft"></span></a>
			<h1>代理收益</h1>
		</div>

		<!-- 代理收益展示区域 -->
		<div class="middle">
			<p class="p1">{{profit}}</p>
			<p class="p2">累计收益（元）</p>
		</div>

		<!-- 代理收益明细展示区域 -->
		<div class="reciveItem" v-for="item in list" :key="item.id">
			<div class="headImg"><img src="../assets/headImg.png"></div>
			<span class="name">{{item.User_Cont}}&nbsp;购买</span>
			<span>&nbsp;{{item.Prj_Name}}&nbsp;</span>
			<span>&nbsp;消费：{{item.Prj_Bal}}元</span>
			<p class="reciveMoney">获得收益：<span>{{item.bal}}元</span></p>
			<p>{{item.create_Time | dateFilter2}}</p>	
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
			profit:this.$route.query.profit,
			id:sessionStorage.getItem('id'),
			list:[],
		}
	},
	created(){
		this.getDailiRecive();
	},
	methods:{
		backone(){	//后退到上一页面函数
			this.$router.go(-1);
		},
		getDailiRecive(){	//获取代理收益数据函数
			var that = this;
			this.loginCheck(path.path_loginCheck,function(){
				that.$http.get(path.path_getDailiRecive,{params:{id:that.id}}).then(res=>{
					if(res.body.status == 200) {
						that.list = res.body.message;
					}else {
						Toast('获取代理收益数据异常');
					}
				})
			})
		},
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
	top: 0;
	text-align: center;
	position: fixed;
	z-index: 999;
	box-shadow: 0 0 1px #000;
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
	width: 100%;
	font-size: 14px;
	background-color: #fff;
	border-bottom: 1px solid #ccc;
	padding-top: 10px;
	padding-right: 4px;
	padding-bottom: 4px;
	padding-left: 75px;
}
.headImg {
	position: absolute;
	width: 50px;
	height: 50px;
	top: 14px;
	left: 3%;
	border-radius: 50%;
	background-color: red;
	overflow: hidden;
}
.headImg img {
	width: 100%;
}
.name {
	font-size: 14px;
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
</style>