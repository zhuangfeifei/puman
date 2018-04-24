<template>
	<div class="container">
        <password-item>忘记密码</password-item>
	</div>
</template>

<script>
	import PasswordItem from "../components/login/PasswordItem";
import placeholder from "../assets/img/首页_1/注册页面_背景.png";
	export default {
		name: "password",
		data(){
            return{
                placeholder,
				note: {
					backgroundImage: "url(" + require("../assets/img/首页_1/注册页面_背景.png") + ")",
					backgroundRepeat: "no-repeat",
					backgroundSize: "100% 100%",
				},  
            }
        },
        components: {
            "password-item": PasswordItem
        }
	}
</script>

<style scoped>
.container{
	width: 100%; padding: 0;
	background: url("../assets/img/login/denglubeijing@2x.png") no-repeat; background-size: 100% 40%;
}
	.di{
    width: 100vw; height: 30vw; position: absolute; top: 0vw; z-index: 1;
}
</style>