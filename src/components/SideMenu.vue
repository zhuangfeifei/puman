<!--左侧菜单组件，是一个非页面级组件-->
<template>
    <div class="root" @click="hideMenu">
        <transition name="side-menu-animate">
        <div id="qianyue" :style="note">
          <nav>
			<router-link to="/Appointment">
				<div target="main" id="dao">
				<div>
					<img src="../assets/img/my/预约拷贝@2x.png">
				</div>
				<p>预约</p>
			    </div>
			</router-link>
			<router-link to="/Sign">
				<div target="main" id="dao">
				<div>
					<img src="../assets/img/my/签约拷贝@2x.png">
				</div>
				<p>签约</p>
			    </div>
			</router-link>
			<div style="width:4%" class="zhong" target="main" id="dao">
				
			</div>
			<router-link to="/Equityholder">
			    <div target="main" id="dao">
				<div>
					<img src="../assets/img/my/我的优惠券@2x.png">
				</div>
				<p>提现</p>
			    </div>
			</router-link>
			<router-link to="/Become">
				<div target="main" id="dao">
				<div>
					<img src="../assets/img/my/对拷贝@2x.png">
				</div>
				<p>年夜饭预订</p>
			    </div>
			</router-link>
		</nav>
      </div>
      </transition>
    </div>
</template>

<script>
    import bus from "../Bus.js";
    // 签约
import placeholder2 from "../assets/img/首页_1/u9323.png";
import placeholder3 from "../assets/img/1_我的/预约.png";
import placeholder4 from "../assets/img/1_我的/签约.png";
import placeholder5 from "../assets/img/1_我的/提现.png";
import placeholder6 from "../assets/img/1_我的/选举.png";

    export default {
        name: "sideMenu",
        data(){
                return{
                    placeholder2,placeholder3,placeholder4,placeholder5,placeholder6,
                    note: {
					backgroundImage: "url(" + require("../assets/img/首页_1/u9323.png") + ")",
					backgroundRepeat: "no-repeat",
					backgroundSize: "100% 100%",
				},  
                }
            },
        methods: {
            hideMenu() {
                bus.$emit("toggleMenu", false);
            }
        }
    }
</script>


<style scoped>
.side-menu-animate-enter-active,      
		.side-menu-animate-leave-active {
      transition: all 0.5s;
    }
    .side-menu-animate-enter,
    .side-menu-animate-leave-active{
      opacity: 0;
      transform: translateY(-100%);
    }
    .root {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        z-index: 200;
        /*background-color: #282828;*/
        background-color: black;
        opacity: 0.9
    }

    #qianyue{
    width: 100%; text-align: center; font-size: 3.5vw; height: 20vw;
    position: absolute; bottom: 22vw;
	/*border:1px solid red;*/
}
nav{
    /*position: fixed;*/
    width: 100%;
    height: 15vw;
    
}
#dao{
    display: inline-block;color: black;
    width: 24%;
    height: 100%;
    outline: none;
    float: left;
}
#dao>div{
    width: 8vw; height: 8vw;
    margin: 0 auto;
    text-align: center; font-size: 8vw;
}
#dao>p{
    text-align: center; margin: 1vw auto 0 auto;
    font-size: 4vw;
}
nav a{
	 color: white;
}
#dao>div>img{
    width: 7vw; height: 7vw;margin-top: -2vw;
}
</style>