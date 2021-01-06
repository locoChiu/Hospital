<!-- 个人信息页面 -->

<template>
	<div class="reciveContainer">

		<!-- 头部标题及返回区域 -->
		<div class="header">
			<a class="backIcon" @click.prevent="backone"><span class="mui-icon mui-icon-arrowleft"></span></a>
			<h1>我的信息</h1>
		</div>
		<div class="mt"></div>

		<!-- 功能项列表区域 -->
		<van-collapse v-model="activeName" accordion>

			<!-- 修改密码区域 -->
			<van-collapse-item title="修改密码" name="1">
				输入旧密码：<br>
				<input type="text" v-model="oldPwd" required name="" >
				输入新密码：( 6-20位 允许：数字、字母、下划线 )<br>
				<input type="text" v-model="newPwd" required name="">
				确认密码：
				<input type="text" v-model="confirmPwd" required name="" >
				<input type="button" @click.prevent="submitPwd" name="" value="提交">
			</van-collapse-item>

			<!-- 修改头像区域 弃用 -->
		    <!--   <van-collapse-item title="修改头像" name="2">
		  	  	<van-uploader :after-read="onRead"  multiple :max-count='1'>
		  	  		<input type="button" @click.prevent="submitPwd" name="" value="点击上传头像">
		  	  	</van-uploader>	
		  	  </van-collapse-item> -->

		  	  <!-- 待开发项目区域 -->
		  	  <!-- <van-collapse-item title="标题3" name="3">内容</van-collapse-item> -->

		  	</van-collapse>

	</div>
</template>

<script type="text/javascript">
let path = require('../path.json')
import Vue from 'vue'
import md5 from 'js-md5';
import { Toast } from 'mint-ui'
import { Collapse, CollapseItem } from 'vant';
import { Form,Field } from 'vant';
import { Uploader } from 'vant';

Vue.use(Uploader);
Vue.use(Form);
Vue.use(Field);
Vue.use(Collapse);
Vue.use(CollapseItem);

export default {
	data(){
		return {
			time:"2019-05-10",
			reciveMoney:"18001.00",
			id:sessionStorage.getItem('id'),
			list:[],
			activeName: '',
			oldPwd:'',
			newPwd:'',
			value1:'',
			value2:'',
			confirmPwd:'',
			pattern: /\d{6}/,
			id:sessionStorage.getItem('id'),
			fileList: [
        	],
    	}
	},
	created(){
	},
	methods:{
		backone(){	//后退到上一页面函数
			console.log("back");
			this.$router.go(-1);
		},
		checkData(value){	//验证输入根式是否正确 6-20位 字母数字下划线
			var pattern = /^(\w){6,20}$/;
			var result = pattern.test(value);
			return result;
		},
		submitPwd(){	//修改密码函数
			var that = this;
			this.loginCheck(path.path_loginCheck,function(){
				if(that.checkData(that.oldPwd)) {
					if(that.checkData(that.newPwd)) {
						if(that.newPwd === that.confirmPwd) {
							Toast("验证通过");
							var oldPwd = md5(that.oldPwd);
							var newPwd = md5(that.newPwd);
							that.$http.get(path.path_updatePwd,{params:{old:oldPwd,new:newPwd,id:that.id}}).then(res=>{
								if(res.body.status == 200) {
									Toast('密码更新成功，请重新登录');
									setTimeout(function(){
										that.$router.push({path:'/'});
										sessionStorage.setItem("token", 'false');
										sessionStorage.removeItem('u');
										sessionStorage.removeItem('p');
										sessionStorage.removeItem('id');
										localStorage.removeItem('user');
									},3000);
								}else {
									Toast('密码更新失败，请检查旧密码是否输入正确');
								}
							})
						}else {
							Toast("新密码两次输入不一致");
						}
					}else {
						Toast("新密码格式不正确");
					}	
				}else {
					Toast("旧密码格式不正确");
				}
			})	
		},
		// onRead(file) {	//上传头像函数 弃用
		//      console.log(file);
		//      let formData = new FormData();
		//      formData.append('avatar', file.file);
		//      this.$http.post('/api/upload',formData, {
		//      	headers: {
		//      		'enctype': 'multipart/form-data'
		//      	}
		//      }).then(res => {
		//      	Toast("上传成功");
		//      })
		//   },
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
.mt {
	margin-top: 40px;
	width: 100%;
	height:10px;
}
</style>