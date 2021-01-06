<!-- 提交报单页面 -->

<template>
	<div class="DailiContainer">

		<!-- 头部标题及返回区域 -->
		<div class="header">
			<a class="backIcon" @click.prevent="backone"><span class="mui-icon mui-icon-arrowleft"></span></a>
			<h1>我的报单</h1>
		</div>

		<!-- 输入信息区域 -->
		<div class="formMid">
			<van-form @submit="onSubmit">
				<van-field
				v-model="user_name"
				name="姓名"
				label="姓名"
				placeholder="姓名"
				:rules="[{ required: true, message: '请填写姓名' }]"
				></van-field>
				<van-field
				v-model="user_tel"
				type="text"
				name="手机号"
				label="手机号"
				placeholder="手机号"
				:rules="[{ required: true, message: '请填写手机号' }]"
				></van-field>
				<van-field
				readonly
				clickable
				name="calendar"
				:value="value"
				label="报单时间"
				placeholder="点击选择报单日期"
				@click="showCalendar = true"
				/></van-field>
				<van-calendar v-model="showCalendar" @confirm="onConfirm" :show-confirm="false"></van-calendar>

				<!-- 点击提交区域 -->
				<div style="margin: 16px;">
					<van-button round block type="info" native-type="submit" @click.prevent="subBd">
						提交
					</van-button>
				</div>
			</van-form>
		</div>

	</div>
</template>

<script type="text/javascript" >
let path = require('../path.json')
import Vue from 'vue';
import { Toast } from 'mint-ui'
import { Form } from 'vant';
import { Field, Calendar, Button } from 'vant';

Vue.use(Field);
Vue.use(Form);
Vue.use(Calendar);
Vue.use(Button);

export default {
	data(){
		return {
			value: '',
			showCalendar: false,
			user_name: '',
			user_tel: '',
			create_time:'',
			id:sessionStorage.getItem('id'),

		}
	},
	methods:{
		onConfirm(date) {	//vant选择时间插件函数
			this.value = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
			this.showCalendar = false;
		},
		backone(){	//后退到上一个页面函数
			this.$router.go(-1);
		},
		subBd(){	//提交报单到数据库函数
			var that = this;
			this.loginCheck(path.path_loginCheck,function(){
				that.$http.get(path.path_addBd,{params:{id:that.id,user_name:that.user_name,user_tel:that.user_tel,create_time:that.value}}).then(res=>{
					if(res.body.status == 200) {
		    			Toast("报单成功");
		    			that.user_name = that.user_tel = that.value = '';
		    		}else {
		    			Toast("报单失败");
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
	margin-bottom: 20px;
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

</style>
<style type="text/css">
.formMid {
	width: 100%;
	padding-top: 20px;
	padding-left: 10px;
	padding-right: 10px;
	background-color: #fff
}

</style>