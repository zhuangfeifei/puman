<template>
	<div class="diyi">
        <firstround-item>首轮</firstround-item>
	</div>
</template>

<script>
	import FirstroundItem from "../components/extend/FirstroundItem";

	export default {
		name: "firstround",
		data(){
			return{
				// note2: {
				// backgroundImage: "url(" + require("../../assets/img/1_我的/注册页面_背景.png") + ")",
				// backgroundRepeat: "no-repeat",backgroundSize: "100% 100%",
			    // },
			}
		},
        components: {
            "firstround-item": FirstroundItem
        },
		
	}
</script>

<style scoped>
	.diyi{
		width: 100%; height: 100%;
		/*background: url("../assets/img/1_我的/注册页面_背景.png") no-repeat;
		background-size: 100% 100%;*/
	}
</style>