<template>
	<div class="zuce">
        <register-item>注册</register-item>
	</div>
</template>

<script>
	import RegisterItem from "../components/login/RegisterItem";
import placeholder from "../assets/img/首页_1/注册页面_背景.png";
	export default {
		name: "register",
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
            "register-item": RegisterItem
        }
	}
</script>

<style scoped>
	.zuce{
		width: 100%;
		background: url("../assets/img/login/denglubeijing@2x.png") no-repeat; background-size: 100% 40%;
	}
	.di{
    width: 100vw; height: 30vw; position: absolute; top: 0vw; z-index: 1;
}
</style>