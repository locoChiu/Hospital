// import VueResource from 'vue-resource'
// import Vue from 'vue'
// Vue.use(VueResource);

module.exports = {
	loginCheck(path,newpath) {
		let username = sessionStorage.getItem('u');
		let password = sessionStorage.getItem('p');
		console.log(username+"新方法的实验");
		console.log(path);
		this.$http.get(path,{params:{username:username,password:password}}).then(res=>{
			console.log("我进来了！");
			if(res.body.state === 1 ){
				this.$router.push({path:newpath});
			}else {
				alert("请先登录");
			}
		})
	},
}


// const API = {
//   	loginCheck(path,newpath) {
// 		let username = sessionStorage.getItem('u');
// 		let password = sessionStorage.getItem('p');
// 		console.log(username+"新方法的实验");
// 		console.log(path);
// 		console.log(123);
// 		this.$http.get(path,{params:{username:username,password:password}}).then(res=>{
// 			console.log("我进来了！");
// 			if(res.body.state === 1 ){
// 						// sessionStorage.setItem("token", 'true');
// 						this.$router.push({path:newpath});
// 					}else {
// 						alert("请先登录");
// 					}
// 				})
// 	},
//   }


// export default API
