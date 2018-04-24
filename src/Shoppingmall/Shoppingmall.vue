<template>

	<div class="zhuye">
		<!--顶部-->
	
		<shoppingmall-item>商城</shoppingmall-item>

		<di-bu>底部</di-bu>

	</div>

</template>

<script>
import bus from '../Bus.js';
	import ShoppingmallItem from "../components/shoppingmall/ShoppingmallItem"
	import SideMenu from "../components/SideMenu";
	import Dibu from "../components/Dibu";
    import placeholder from "../assets/img/首页_1/u9323.png";
	import placeholder1 from "../assets/img/首页_1/u9062.png";
	import placeholder2 from "../assets/img/首页_1/消息.png";
	export default {
		name: "home",
		data(){
			return{
				showMenu: false,	
				placeholder1,placeholder2,
				note: {
					backgroundImage: "url(" + require("../assets/img/首页_1/u9323.png") + ")",
					backgroundRepeat: "no-repeat",
					backgroundSize: "100% 100%",
				}, 
				note1: {
					backgroundImage: "url(" + require("../assets/img/find/img_top.png") + ")",
					backgroundRepeat: "no-repeat",
					backgroundSize: "100%",
				},
			}
		},
        components: {
            "shoppingmall-item": ShoppingmallItem,
			"di-bu": Dibu
        },
		methods: {
			
		},
	    created() {
	  	   
	    }
	}

</script>

<style scoped>
.zhuye{
	width: 100%; height: 100%;
}
	

</style>