<template>

	<div class="zhuye">
		<!--顶部-->
		<div class="pu">
			<header>
				<span>专题</span>
			</header>
		</div>
	
		<find-item>发现</find-item>

        <di-bu>底部</di-bu>

	</div>

</template>

<script>
    import bus from '../Bus.js';
	import Dibu from "../components/Dibu";
	import FindItem from "../components/find/FindItem";
	import SideMenu from "../components/SideMenu";
    import placeholder from "../assets/img/首页_1/u9323.png";
	import placeholder1 from "../assets/img/首页_1/u9062.png";
	import placeholder2 from "../assets/img/首页_1/消息.png";
	export default {
		name: "find",
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
            "find-item": FindItem,
			"di-bu": Dibu,
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
	
/*搜索*/
header{width: 100%; height: 15vw; background-color: black;
    text-align: center; line-height: 15vw;
    position: fixed;top: 0; z-index: 100;}
header span{color: white; font-size: 5vw;}



</style>