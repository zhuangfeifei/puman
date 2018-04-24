<template>
	<div class="zuce">
        <AuthenticationName-item>身份验证</AuthenticationName-item>
	</div>
</template>

<script>
	import AuthenticationNameItem from "../components/extend/AuthenticationNameItem";
import placeholder from "../assets/img/首页_1/注册页面_背景.png";
	export default {
		name: "authentication",
		data(){
            return{
                placeholder, 
            }
        },
        components: {
            "AuthenticationName-item": AuthenticationNameItem
        }
	}
</script>

<style scoped>
	.zuce{
		/*width: 100%; height: 100vh;*/
		/*border: 1px solid red;*/
	}
</style>