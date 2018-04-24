
<template>
    <!--底部-->
		
	<div>
		<nav>
			<router-link to="/Home">
				<div id="home" target="main" class="dao">
					<div class="home">
					</div>
					<p>首页</p>
				</div>
			</router-link>
			<router-link to="/Shoppingmall">
				<div target="main" class="dao">
					<div class="shop">
					</div>
					<p>收益</p>
				</div>
			</router-link>
			<!--<router-link to="/Find">
				<div target="main" class="dao">
					<div class="find">
					</div>
					<p>专题</p>
				</div>
			</router-link>-->
			<router-link to="/My">
				<div target="main" class="dao">
					<div class="my">
					</div>
					<p>我的</p>
				</div>
			</router-link>
		</nav>
		<transition name="side-menu-animate">
			<side-menu v-show="showMenu"></side-menu>
		</transition>

	</div>


</template>

<script>
    import bus from "../Bus.js";
	import SideMenu from "./SideMenu";

    export default {
        name: "dibu",
        data(){
                return{ 
					showMenu: false,
                }
        },
		components: {
			"side-menu": SideMenu,
        },
        methods: {
			//点击标签打开菜单
			openMenu() { 
				bus.$emit("toggleMenu", true);
			},
		},
	    created() {
			bus.$on("toggleMenu", function(show) {
				this.showMenu = show;
			}.bind(this));
			$('#home').focus();
		}
    }
</script>


<style scoped>
/*底部*/
nav{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 15vw; z-index: 11;
	/*border-top: 0.3vw solid gainsboro;*/
    background-color: white;
	box-shadow: 0.1vw 0vw 0.5vw gray;
}
.dao{
    display: inline-block;
    width: 33.333%;
    height: 100%;
    outline: none;
    float: left;
}
.dao>div{
    width: 7vw; height: 8vw;
    margin: 0 auto;
    text-align: center;
}
.dao>p{
    text-align: center; margin: 1vw auto 0 auto;
    font-size: 3.5vw;
}
nav a{
	 color: #7a7a7a;
}

/*圆圈*/
#jia{
	width: 11vw; height: 11vw; margin-top: 1.5vw;
	background: url("../assets/img/dibu/+@2x.png") no-repeat;
	background-size: 100% 100%;
	/*border: 1px solid red;*/
}
#jia>img{width: 11vw; height: 11vw;}



.router-link-active{
  	color: #ff733c;
}
.home{
	background: url("../assets/img/dibu/home@2x.png") no-repeat;
	background-size: 100% 90%; background-position-y: 1vw;
}
.router-link-active .home{
	background: url("../assets/img/dibu/home2@2x.png") no-repeat;
	background-size: 100% 90%; background-position-y: 1vw;
}
.shop{
	background: url("../assets/img/dibu/shouyi@2x.png") no-repeat;
	background-size: 100% 90%; background-position-y: 1vw;
}
.router-link-active .shop{
	background: url("../assets/img/dibu/shouyi2@2x.png") no-repeat;
	background-size: 100% 90%; background-position-y: 1vw;
}
.find{
	background: url("../assets/img/dibu/zhuanti@2x.png") no-repeat;
	background-size: 100% 90%; background-position-y: 1vw;
}
.router-link-active .find{
	background: url("../assets/img/dibu/zhuanti2@2x.png") no-repeat;
	background-size: 100% 90%; background-position-y: 1vw;
}
.my{
	background: url("../assets/img/dibu/mine@2x.png") no-repeat;
	background-size: 100% 90%; background-position-y: 1vw;
}
.router-link-active .my{
	background: url("../assets/img/dibu/mine2@2x.png") no-repeat;
	background-size: 100% 90%; background-position-y: 1vw;
}

</style>