<!-- 我的报单页面 -->

<template>
	<div class="DailiContainer">

		<!-- 头部标题及返回区域 -->
		<div class="header">
			<a class="backIcon" @click.prevent="backone"><span class="mui-icon mui-icon-arrowleft"></span></a>
			<h1>我的报单</h1>
		</div>

		<!-- 报单展示区域 -->
		<div class="itemContainer">
			<van-swipe-cell  right-width="100px" v-for="(item,index) in info" :key="item.id">
				<van-cell :border="false" class="itemCell" :title="item.user_name+' ('+item.user_tel+')'" :value="item.create_time|dateFilter"  />
				<template #right>
					<van-button square type="danger" text="删除" @click.prevent="removeCell(item.id,index)"/>
				</template>
			</van-swipe-cell>
		</div>

		<!-- 点击切换到报单编辑区域 -->
		<div class="footer" @click.prevent="goBd">
			<h1>立即报单</h1>
		</div>
	</div>
</template>

<script type="text/javascript" >
let path = require('../path.json')
import Vue from 'vue'
import { SwipeCell,Cell } from 'vant';
import { Toast } from 'mint-ui'

Vue.use(SwipeCell);
Vue.use(Cell);

export default {
	data(){
		return {
			id:sessionStorage.getItem("id"),
			info:[]
		}
	},
	created(){
		this.getBdData();
	},
	methods:{
		backone(){	//后退到上一页面函数
			this.$router.go(-1);
		},
		goBd(){	//跳转到编辑报单页面函数
			this.$router.push({path:"/Bd"})
		},
		getBdData(){	//获取报单数据列表函数
			var that = this;
			this.loginCheck(path.path_loginCheck,function(){
				that.$http.get(path.path_getBdData,{params:{id:that.id}}).then(res=>{
					if(res.body.status == 200) {
						that.info = res.body.message;
					}else {
					}
				})
			})
		},
		removeCell(id,index) {	//删除报单函数
			var that = this;
			this.loginCheck(path.path_loginCheck,function(){
				that.$http.get(path.path_removeBd,{params:{id:id}}).then(res=>{
					console.log(path.path_removeBd);
					if(res.body.status == 200) {
						Toast("删除成功");
						that.info.splice(index,1);
					}else {
						Toast("删除失败");
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
	position: fixed;
	top:0;
	z-index:999;
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

.right {
	float: right;
	font-size: 20px;
	color: #ccc;
}
.footer {
	width: 95%;
	height: 35px;
	margin: 0 auto;
	position: fixed;
	background-color: #e9666b;
	text-align: center;
	border-radius: 4px;
	line-height: 35px;
	left: 50%;
	margin-left: -47.5%;
	bottom: 60px;
}
.footer h1 {
	color: white;
	font-weight: 400;
	font-size: 16px;
	line-height: 35px;
}
.itemContainer {
	margin-top: 50PX;
	padding-bottom:60px;
}
.itemCell {
	width:100%;
	padding-left:10px;
	padding-right:10px;
	height: 60px;
	line-height: 60px;
	background-color: #fff;
	display:flex;
	border-bottom: 1px solid #ccc;
	justify-content:space-between;
}
.van-button {
	width: 70px;
	height: 60px;
	text-align: center;
	font-size: 16px;
}
</style>
<style type="text/css">
.van-swipe-cell__right {
	width: 60px!important;
}

</style>