<template>

	<div class="zhuye">
		<!--顶部-->
		<div class="pu">
			<header :style="note1">
				<i @click="history" class="fa fa-angle-left" aria-hidden="true"></i>
				<!--<a id="search" href="">
					<span class="glyphicon glyphicon-search"></span>
					搜索
				</a>-->
				<span class="ss">搜索</span>
			</header>
		</div>
	
		<search-item>搜索</search-item>

	</div>

</template>

<script>
import bus from '../Bus.js';
	import SearchItem from "../components/home/SearchItem";
    import placeholder from "../assets/img/首页_1/u9323.png";
	import placeholder1 from "../assets/img/首页_1/u9062.png";
	export default {
		name: "search",
		data(){
			return{
				showMenu: false,	
				placeholder1,
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
			}
		},
        components: {
            "search-item": SearchItem,
        },
        methods: {
            history() {
                history.go(-1)
            }
        }
	// 	methods: {
	// 		//点击标签打开菜单
	// 		openMenu() {
	// 			//使用自定义事件从子组件向父组件传值
	// 			//在单文件组件中进行 子传父,需要使用总线去监听和触发自定义事件 
	// 			bus.$emit("toggleMenu", true);
	// 		}
	// 	},
	//   created() {
	//   	//在钩子函数中监听自定义事件,获取子组件的值
	//     bus.$on("toggleMenu", function(show){
	//       this.showMenu = show;
	//     }.bind(this))
	//   }
		
	}
</script>

<style scoped>
.zhuye{
	width: 100%; height: 100%;
}
.ss{
	color: white; font-size: 5vw; margin-left: 35%;
}
	
/*搜索*/
/*header{width: 100%; height: 18vw; 
    display: flex !important; align-items: center;
    justify-content: space-around;
    padding: 0 5vw;
    position: fixed;top: 0; z-index: 10;}
header #search{
    width: 75vw; height: 7vw; border: 0.3vw solid white;
    border-radius: 4vw; font-size: 3.5vw;
    line-height: 7vw; padding-left: 3vw;
    color: white;}
header .fa-angle-left{color: white; font-size: 10vw;}
header a:hover{
	text-decoration: none;
}*/
header{width: 100%; height: 18vw; 
    /*background-color: black;*/
    display: flex !important; align-items: center;
    /*justify-content: space-around;*/
    padding: 0 0vw;
    position: fixed;top: 0; z-index: 10;}
header #search{
    width: 75vw; height: 7vw; border: 0.3vw solid white;
    /*background-color: white;*/
    border-radius: 4vw; font-size: 3.5vw;
    line-height: 7vw; padding-left: 3vw;
    color: white;}
header .fa-angle-left{color: white; font-size: 10vw; margin-left: 5vw;}
header a:hover{
	text-decoration: none;
}

</style>