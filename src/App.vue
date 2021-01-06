<template>
  <div id="app">
    <router-view/>
    <!-- 底部前进后退按钮 -->
    <div class="footerGo">
      <div @click.prevent="pre">
        <img src="./assets/pre.png">
      </div>
      <div class="space"></div>
      <div @click.prevent="next">
        <img src="./assets/next.png">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
  	pre(){
  		this.$router.go(-1);
  	},
  	next(){
  		this.$router.go(1);
  	},
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
body {
  background-color: #f8f8f8; 
  padding-bottom: 60px;
}
.footerGo {
	position: fixed;
	bottom: 0;
	width:100%;
	line-height: 60px;
	font-size: 28px;
	background-color: #fff;
	color: gray;
	z-index: 999;
	text-align: center; 
	margin-top: 20px;

}
.footerGo div {
  display: inline-block;
}
.footerGo div img{
  width: 28px;
}
.space {
  display: inline-block;
  width: 60px;
}
</style>
