<!-- 我的代理页面 -->

<template>
	<div class="DailiContainer">

		<!-- 头部标题及返回区域 -->
		<div class="header">
			<a class="backIcon" @click.prevent="backone"><span class="mui-icon mui-icon-arrowleft"></span></a>
			<h1>我的代理</h1>
		</div>

		<!-- 代理人数展示区域 -->
		<div class="middle">
			<p class="p1">{{count1+count2}}</p>
			<p class="p2">代理人数（位）</p>
			<p class="p3">我的上级代理：{{upNum}}</p>
		</div>

		<!-- 一级代理区域 -->
		<div class="one" @click.prevent="goOneAgent">
			一级代理：<span class="dailiNum">{{count1}}</span>
			<span class="right">></span>	
		</div>

		<!-- 二级代理区域 -->
		<div class="two" @click.prevent="goTwoAgent">
			二级代理：<span class="dailiNum">{{count2}}</span>
			<span class="right">></span>
		</div>

		<!-- 底部提示区域 点击无效 -->
		<div class="footer">
			<h1>立即发展</h1>
		</div>
	</div>
</template>

<script type="text/javascript" >
let path = require('../path.json')
import { Toast } from 'mint-ui'

export default {
	data(){
		return {
			id:sessionStorage.getItem('id'),
			count1:'',
			count2:'',
			upNum:'',
		}
	},
	created(){
		this.getDailiData();
	},
	methods:{
		backone(){	//后退到上一页面函数
			this.$router.go(-1);
		},
		goOneAgent(){	//前往一级代理页面函数
			this.$router.push({path:"/oneAgent",query:{count:this.count1}});
		},
		goTwoAgent(){	//前往二级代理页面函数
			this.$router.push({path:"/twoAgent",query:{count:this.count2}});
		},
		getDailiData(){	//获取代理页面数据函数
			var that = this;
			this.loginCheck(path.path_loginCheck,function(){
				that.$http.get(path.path_getOneDaili,{params:{id:that.id}}).then(res=>{
					if(res.body.status != 0) {
						that.count1 = res.body.message[0].count;
					}else {
						Toast("获取一级代理人数失败");
					}
				}).then(res=>{
					that.$http.get(path.path_getTwoDaili,{params:{id:that.id}}).then(res=>{
						if(res.body.status != 0) {
							that.count2 = res.body.message[0].count;
						}else {
							Toast("获取二级代理人数失败");
						}
					})
				})
				that.$http.get(path.path_getUpNum,{params:{id:that.id}}).then(res=>{
					if(res.body.status == 200) {
						that.upNum = res.body.message[0].user_tel;
					}else {
						Toast("获取上级代理电话失败");
					}
				})
			})
		}	
	}
}
</script>

<style type="text/css" scoped> 
* {
	margin: 0;
	padding: 0;
}
.DailiContainer {
	width: 100%;
}
.header {
	width: 100%;
	background-color: #fff;
	height: 40px;
	text-align: center;
	position: relative;
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
.middle {
	width: 100%;
	height: 160px;
	background-color: #fff;
	margin-top: 10px;
	text-align: center;
	/*padding-top: 37%;*/
	padding-top: 35px;
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
.one,
.two {
	margin-top: 6px;
	width: 100%;
	height: 40px;
	line-height: 40px;
	text-align: left;
	padding: 4px;
	background-color: #fff;
	padding-left: 20px;
	padding-right: 20px;
}
.dailiNum {
	color: red;

}
.right {
	float: right;
	font-size: 20px;
	color: #ccc;
}
.footer {
	width: 95%;
	height: 35px;
	margin: 0 auto;
	position: absolute;
	background-color: #e9666b;
	text-align: center;
	border-radius: 4px;
	line-height: 35px;
	left: 50%;
	margin-left: -47.5%;
	bottom: 65px;
}
.footer h1 {
	color: white;
	font-weight: 400;
	font-size: 16px;
	line-height: 35px;
}
</style>