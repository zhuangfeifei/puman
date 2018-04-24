<template>
	<div class="zuce">
        <Bankinformation-item>银行卡信息</Bankinformation-item>
	</div>
</template>

<script>
	import BankinformationItem from "../components/my/BankinformationItem";
import placeholder from "../assets/img/首页_1/注册页面_背景.png";
	export default {
		name: "Bankinformation",
		data(){
            return{
                placeholder, 
            }
        },
        components: {
            "Bankinformation-item": BankinformationItem
        }
	}
</script>

<style scoped>
	.zuce{
		/*width: 100%; height: 100vh;*/
		/*border: 1px solid red;*/
	}
</style>