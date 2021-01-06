<!-- 我的收益页面 -->

<template>
	<div class="DailiContainer">

		<!-- 头部标题及返回区域 -->
		<div class="header">
			<a class="backIcon" @click.prevent="backone"><span class="mui-icon mui-icon-arrowleft"></span></a>
			<h1>我的收益</h1>
		</div>

		<!-- 中间收益展示区域 -->
		<div class="middle">
			<p class="p1">{{profit}}</p>
			<p class="p2">累计收益（元）</p>
		</div>
		<div class="one" @click.prevent="goAgent">
			<span class="daili">发展代理累计获得</span>
			<span class="right dailiNum">{{profit1}}</span>	
		</div>
		<div class="two" @click.prevent="goUser">
			<span class="daili">发展产品累计获得</span>
			<span class="right dailiNum">{{profit2}}</span>	
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
			profit1:'',
			profit2:'',
			profit:''
		}
	},
	created(){
		this.getRecive();
	},
	methods:{
		backone(){	//后退到上一页面函数
			this.$router.go(-1);
		},
		goAgent(){	//前往代理收益页面函数
			this.$router.push({path:"/dailiRecive",query:{profit:this.profit1}});
			},
		goUser(){	//前往产品收益页面函数
			this.$router.push({path:"/userRecive",query:{profit:this.profit2}});
		},
		getRecive(){	//获取收益数据函数
			var that = this;
			this.loginCheck(path.path_loginCheck,function(){
				that.$http.get(path.path_getRecive,{params:{id:that.id}}).then(res=>{	
					if(res.body.status == 200) {
						that.profit1 = res.body.message[0].user_profit;
						that.profit2 = res.body.message[0].product_profit;
						that.profit = that.profit1 +that.profit2;

						// 添加小数点算法 弃用 有BUG
						// if(String(this.profit1).indexOf('.') == -1) {
						// 	this.profit1 +=".00";
						// }
						// if(String(this.profit2).indexOf('.') == -1) {
						// 	this.profit2 +=".00";
						// }
						// if(String(this.profit).indexOf('.') == -1) {
						// 	this.profit +=".00";
						// }
					}else {
						Toast('获取收益数据异常');
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
	/*height: 100%;*/	
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
	color: #e9666b;
	
}
.right {
	float: right;
	font-size: 16px;
	color: #e9666b;
}
</style>