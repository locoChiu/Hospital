//入口文件

import Vue from 'vue'
import App from './App'
import router from './router'

//引入vue-resource模块
import VueResource from 'vue-resource'
Vue.use(VueResource);
Vue.http.options.emulateJSON = true;

//引入格式化时间组件
import moment from "moment"
//定义全局的时间过滤器
Vue.filter("dateFilter",function(dataStr,pattern="YYYY-MM-DD"){ 
	return moment(dataStr).format(pattern);
})
Vue.filter("dateFilter2",function(dataStr,pattern="YYYY-MM-DD hh:mm:ss"){ 
	return moment(dataStr).format(pattern);
})

//引入mint-UI模块
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

//引入mui模块
import "./lib/mui/css/mui.css"
import "./lib/mui/js/mui.min.js"
import "./lib/mui/css/icons-extra.css"

//引入vant css
import 'vant/lib/index.css';

//定义全局登录验证函数
Vue.prototype.loginCheck = function(path,callback){
  let user = sessionStorage.getItem('u');
  let pwd = sessionStorage.getItem('p');
  this.$http.get(path,{params:{user:user,pwd:pwd}}).then(res=>{
    if(res.body.status == 200) {
      callback();
    }else {
      Toast("未登录");
      return 0;
    }
  })
}



new Vue({
	el: '#app',
	router,
	components: { App },
	template: '<App/>'
})
