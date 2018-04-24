<template>

	<div class="zhuye">
		<!--顶部-->
		<!--<div class="pu">-->
			<!--<header :style="note1">-->
				<!--<router-link to="/Scanning">
					<img :src="placeholder7">
				</router-link>-->
				<!--<router-link id="search" to="/Search">
					<span class="glyphicon glyphicon-search"></span>
					搜索
				</router-link>
				<router-link to="/News">
					<img :src="placeholder6">
				</router-link>-->
			<!--</header>-->
		<!--</div>-->


		<home-item>首页</home-item>

        <di-bu>底部</di-bu>
		

	</div>

</template>

<script>
    import bus from '../Bus.js';
	import HomeItem from "../components/home/HomeItem";
	import Dibu from "../components/Dibu";
	import placeholder6 from "../assets/img/首页_1/消息.png";
	import placeholder7 from "../assets/img/首页_1/扫啊扫.png";
	export default {
		name: "home",
		data(){
			return{
				placeholder6,
				placeholder7,
				note: {
					backgroundImage: "url(" + require("../assets/img/首页_1/u9323.png") + ")",
					backgroundRepeat: "no-repeat",
					backgroundSize: "100% 100%",
				}, 
				note1: {
					backgroundImage: "url(" + require("../assets/img/首页_1/注册页面_背景.png") + ")",
					backgroundRepeat: "no-repeat",
					backgroundSize: "100%",
				},
				Data:[],token:''
			}
		},
        components: {
            "home-item": HomeItem,
			"di-bu": Dibu,
        },
	    created() {
			
	    },
		methods: {
			tan(){
                $('#myModal').modal('show')
			}
		},
	}
</script>

<style scoped>
.zhuye{
	width: 100%; background-color: white;
}

/*搜索*/
header{width: 100%; height: 15vw; 
    /*background-color: black;*/
    display: flex !important; align-items: center;
    justify-content: space-around;
    padding: 0 2vw;
    position: fixed;top: 0; z-index: 100;}
header #search{
    width: 75vw; height: 7vw; border: 0.3vw solid white;
    /*background-color: white;*/
    border-radius: 4vw; font-size: 3.5vw;
    line-height: 7vw; padding-left: 3vw; margin-top: 2vw;
    color: white;}
header span{color: white;}
.glyphicon-qrcode{
	margin-top: 3vw; font-size: 4.5vw;
}
img{
	margin-top: 1.5vw; font-size: 5vw; width: 5vw; height: 5vw;
}






</style>