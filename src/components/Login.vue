<!-- 用户登录页面 -->

<template>
	<div class="loginContainer">

		<!-- 头部标题区域 -->
		<h1 class="title">医院登陆界面</h1>

		<!-- 输入信息区域 -->
		<span class="labelTop">用户：</span><input class="user" type="" name="" v-model="username"><br>
		<span class="labelTop">密码：</span><input class="user" type="password" name="" v-model="password"><br>

		<!-- 登录重置按钮区域 -->
		<div class="btn">
			<mt-button  type="default" @click.prevent="goHome">登录</mt-button>
			<mt-button  type="default" @click.prevent="reset">重置</mt-button>
		</div>

	</div>
</template>

<script type="text/javascript">
let path = require('../path.json')
import { Toast } from 'mint-ui'
import md5 from 'js-md5';

export default {
	data(){
		return {
			username:"",
			password:"",
			dataurl:'http://192.168.0.103:8088/api/',
		}
	},
	methods:{
		reset(){	//重置用户名密码为空函数
			this.username = this.password = '';
		},
		goHome(){		//登录验证函数
			this.$http.post(path.path_login,{username:this.username,password:md5(this.password)},{emulateJSON:true}).then(res=>{
				if(res.body.status == 200){
						sessionStorage.setItem("token", 'true');
						sessionStorage.setItem("id",res.body.message[0].id);
						sessionStorage.setItem("u", this.username);
						sessionStorage.setItem("p", md5(this.password));
						this.$router.push({path:'/home'});
						localStorage.setItem("user",this.username);
					}else {
						Toast({
							message:'用户名或密码错误',
							position:'middle',
							// duration:1,
						});
					}
				})
		}
	}
}
</script>

<style type="text/css" scoped>
.title {
	text-align: center;
	margin-top: 80px;
	font-size: 18px;
	margin-bottom: 100px;
}
.labelTop {
	display: inline-block;
	margin-top: 20px;
	margin-left: 20px;
	font-size: 14px;
	color: #656b79;
}
.user {
	line-height: 21px;
	width: 80%;
	height: 40px;
	margin-bottom: 15px;
	padding: 10px 15px;
	box-sizing: border-box;
	-webkit-user-select: text;
	border: 1px solid rgba(0,0,0,.2);
	border-radius: 3px;
	outline: 0;
	background-color: #fff;
}
.btn {
	margin-left: 35%;
}
</style>

<style type="text/css">
.mint-button--primary {
	text-align: center;
	color: #fff;
	background-color: #26A2A8;
}
.mint-button--default {
	color: #656b79;
	background-color: #ccc;
	-webkit-box-shadow: 0 0 1px #b8bbbf;
	box-shadow: 0 0 2px #b8bbbf;
}
.footerGo {
	display: none;
}
</style>

