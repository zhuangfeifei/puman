<!--这是主页-->
<template>
	<div class="container">

			<login-item>登录</login-item>

			<!--<div class="zhuce" :style="note1">
				<router-link to="/Register">
                        <span>新注册用户&nbsp;&nbsp;<i class="fa fa-angle-right" aria-hidden="true"></i></span>
                </router-link>
            </div>-->
	</div>
</template>
<script>
	//导入子组件
	import LoginItem from '../components/login/LoginItem'
	export default {
		name : 'login' ,
		data(){
			return{
				status : 'loading',
				dataArray : [],
				//定义属性判断是否加载更多
				isLoadingMore: false,
				note: {
					backgroundImage: "url(" + require("../assets/img/首页_1/2.png") + ")",
					backgroundRepeat: "no-repeat",
					backgroundSize: "100% 100%",
				},  
				note1: {
					backgroundImage: "url(" + require("../assets/img/首页_1/zuce.png") + ")",
					backgroundRepeat: "no-repeat",
					backgroundSize: "100% 100%",
				},  
			}
		},
		components: {
			'login-item' : LoginItem
		},
		
			
		
	}
</script>
<style scoped>
.container{
	width: 100%; padding: 0; height: 100vh;
	background: url("../assets/img/login/denglubeijing@2x.png") no-repeat; background-size: 100% 40%;
}
	/*.zhuce{
		width: 31%; height: 7vw; position: absolute;
		top: 10vh; text-align: center; line-height: 7vw;
		right: 0; padding-left: 5vw; font-size: 3.2vw; z-index: 50;
	}
	a{
		color: white;
	}
	a:hover{
		color: white; text-decoration: none;
	}*/


	.di{
    width: 100vw; height: 30vw; position: absolute; bottom: 0vw; left: 0;
}
</style>