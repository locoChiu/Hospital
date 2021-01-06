<!-- 主页面 -->

<template>
	<div class="homeContainer">

		<!-- 头部镖旗及退出系统区域 -->
		<div class="header">
			<p>分销系统个人管理</p>
			<img class="quit" src="../assets/quit.png" @click.prevent="quit">		
		</div>

		<!-- 头部个人信息区域 -->
		<div class="topContainer">
			<div class="headImg" @click.prevent="changeHeadImg">
				<img src="../assets/headImg.png">
			</div>
			<div class="name">
				<span>{{name}}</span>
			</div>
			<div class="level">
				<span>{{level}}</span>
			</div>
			<div class="topFooter">
				<span>余额：￥{{balance}}</span>
				<span>总收益：￥{{profit}}</span>
			</div>
		</div>

		<!-- 中间功能区域 -->
		<div class="middle">
			<div @click.prevent="goMyRecive">
				<img src="../assets/balance.png">
				<span>收益明细</span>
			</div>
			<div @click.prevent="goMyDaili">
				<img src="../assets/kehu.png">
				<span>我的代理</span>
			</div>
			
			<div @click.prevent="goMyQianYue">
				<img src="../assets/qianyue.png">
				<span>我的签约</span>
			</div>
			<div @click.prevent="goMyBD">
				<img src="../assets/baobei.png">
				<span>我的报单</span>
			</div>
			<div @click.prevent="goPerson">
				<img src="../assets/person.png">
				<span>个人信息</span>
			</div>
		</div>

		<!-- 底部广告区域 -->
		<div class="footLabel">
			<p>邀请好友成为代理得<span>40%收益</span></p>
			<p class="ib">好友注册购买代理产品即可获得</p>
			<div class="toDetail">查看详情>></div>
			<div class="hongbao"></div>
		</div>

	</div>
</template>

<script type="text/javascript">
let path = require('../path.json')
import { Toast } from 'mint-ui'
import { MessageBox } from 'mint-ui';

export default {
	data(){
		return {
			name:'',
			level:'',
			balance:'',
			profit:'',
			info:'',
			imgPath:'',
			id:sessionStorage.getItem('id'),
		}
	},
	created(){
		this.getData();	
	},
	methods:{
			getData(){	//获取个人数据函数
				var that = this;
				this.loginCheck(path.path_loginCheck,function(){
					var name = localStorage.getItem('user');
					that.$http.get(path.path_getHomeData,{params:{user:name}}).then(res=>{
						that.name = res.body[0].real_name;
						that.level = res.body[0].user_level;
						that.balance= res.body[0].user_bal;	
						that.profit = res.body[0].user_profit+res.body[0].product_profit;

						// 小数点后两位添0算法 有Bug
						// if(String(this.balance).indexOf('.') == -1) {
						// 	this.balance +=".00";
						// }	
						// if(String(this.profit).indexOf('.') == -1) {
						// 	this.profit +=".00";
						// }
					})
				})	
			},
			quit(){	//退出系统函数
				MessageBox.confirm("确定退出系统吗 ?").then(action=>{
					this.$router.push({path:'/'});
					sessionStorage.setItem("token", 'false');
					sessionStorage.removeItem('u');
					sessionStorage.removeItem('p');
					sessionStorage.removeItem('id');
					localStorage.removeItem('user');
				})
			},
			changeHeadImg(){	//点击切换头像函数 待开发
			},
			goDailiRecive(){	//前往代理收益页面函数
				this.$router.push({path:'/dailiRecive'});
			},
			goUserRecive(){	//前往用户收益页面函数
				this.$router.push({path:'/userRecive'});
			},
			goMyDaili(){	//前往代理页面函数
				this.$router.push({path:'/myDaili'});
			},
			goMyQianYue(){	//前往我的签约页面函数
				this.$router.push({path:'/myQianYue'})
			},
			goMyRecive(){	//前往我的收益页面函数
				this.$router.push({path:'/myRecive'})
			},
			goMyBD(){	//前往我的报单页面函数
				this.$router.push({path:"/myBd"})
			},
			goPerson(){	//前往个人信息页面函数
				this.$router.push({path:'/person'})
			},
			// getImgPath(){	//获取用户头像函数 弃用
			// 	this.$http.get('/api/getImg',{params:{id:this.id}}).then(res=>{
			// 		console.log(res);
			// 		if(res.status == 200) {
			// 			var path = res.body[0].head_img_src;
			// 			path = path.replace(/\\/g,'/');
			// 			this.imgPath = require('../../server/'+path);
			// 			console.log(this.imgPath);
			// 		}else {
			// 			console.log('获取图片失败');
			// 		}
			// 	})
			// },
			// editName(){	//点击修改姓名函数 弃用
			// 	MessageBox.prompt("请输入新的名字").then(action=>{
			// 		this.name = action.value;
			// 	})
			// },
		}
	}
</script>

<style type="text/css" scoped="">
* {
	margin: 0;
	padding: 0;
}
.homeContainer {
	margin: 0 auto;
}
.header {
	height: 45px;
	line-height: 45px;
	text-align: center;
	width: 100%;
	background-color: #22a4ff;
	position: relative;	
}
.header p {
	color: #fff;
	font-size: 18px;
}
.quit {
	color: #fff;
	width: 24px;
	position: absolute;
	right: 4px;
	top: 10px;
}
.topContainer {
	width: 100%;
	height: 200px;
	background: url("../assets/topBg.jpg");
	background-size: cover;
	position: relative;
}
.headImg {
	position: absolute;
	width: 60px;
	height: 60px;
	top: 12px;
	left: 50%;
	margin-left: -30px;
	border-radius: 50%;
	background-color: red;
	overflow: hidden;
}
.headImg img {
	width: 100%;
}
.name {
	width:100px;
	text-align: center;
	color: #000;
	position: absolute;
	top: 80px;
	left: 50%;
	margin-left: -50px;		
}
.name a {
	color: #6c7c7b;
}
.level {
	width: 28%;
	border-radius: 16px;
	background-color: #fff;
	height: 30px;
	line-height: 30px;
	text-align: center;
	position: absolute;
	bottom: 52px;
	left: 50%;
	margin-left: -14%;
}
.level span {
	font-size: 15px;
	color: #6c7c7b;	
}
.topFooter {
	width: 100%;
	background-color: rgba(0,0,0,.3);
	position: absolute;
	bottom: 0;
	height: 30px;
	line-height: 30px;
	display: flex;
	justify-content: space-between;
	font-size: 16px;
	padding-left: 12px;
	padding-right: 12px;
	color:#fff;
}
.middle {
	width: 100%;
	height: 70px;
	margin-top: 10px;
	box-sizing: border-box;
	background-color: #fff;
}
.middle div {
	width: 20%;
	height: 100%;
	float: left;
	border-right: 1px solid #ccc;
	border-bottom: 1px solid #ccc;
	border-top: 1px solid #ccc;
	text-align: center;
	padding-top: 8px;
}
.middle div img {
	width: 30px;

}
.middle div span {
	font-size: 14px;
	color: #6c7c7b;
	display: block;
	
}
.middle div:last-child {
	border-right: 0;
}
.footLabel {
	width: 100%;
	height: 90px;
	padding-top: 23px;
	padding-left: 4%;
	font-size: 14px;
	margin-top: 10px;
	background-color: #fff;
	position: relative;
}
.footLabel span {
	color: red;
}
.toDetail {
	width: 25%;
	height: 22px;
	line-height: 22px;
	color: red;
	display: inline-block;
	border: 1px solid red;
	text-align: center;
}
.ib {
	display: inline-block;
}
.hongbao {
	position: absolute;
	right: 10px;
	top: 20px;
	background:url("../assets/hongbao.png");
	background-size: cover;
	width: 40px;
	height: 40px;
}
</style>
<style type="text/css">
.footerGo {
	display: block;
}
</style>