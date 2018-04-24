<template>
	<div class="zuce">
        <authentication-item>身份验证</authentication-item>
	</div>
</template>

<script>
	import AuthenticationItem from "../components/extend/AuthenticationItem";
import placeholder from "../assets/img/首页_1/注册页面_背景.png";
	export default {
		name: "authentication",
		data(){
            return{
                placeholder, 
            }
        },
        components: {
            "authentication-item": AuthenticationItem
        }
	}
</script>

<style scoped>
	.zuce{
		/*width: 100%; height: 100vh;*/
		/*border: 1px solid red;*/
	}
</style>