<template>
	
    <div class="yuyue">
        <nav id="nav">
            <div class="header">
                <i @click="history" class="fa fa-angle-left" aria-hidden="true"></i>
                <span>修改支付密码</span>
            </div>
        </nav>
        
        <div class="liu">
            <p>请输入原支付密码进行身份校验</p>
            <input type="text">
            <p>请输入新密码</p>
            <input type="text">
            <p>请再次确认新密码</p>
            <input type="text">
        </div>
        
    </div>

</template>

<script>
import placeholder from "../../assets/placeholder.gif"
	export default {
		name: "paymentpassword-item",
        data(){
            return{
                placeholder
            }
        },
        methods: {
            history() {
                history.go(-1)
            }
        }
	}
</script>

<style scoped>
.yuyue{
    width: 100%; padding-top: 15vw;
}
/*顶部*/
#nav{
    width: 100%; height: 15vw;
    position: fixed; top: 0;
    background-color: white;
    border-bottom: 2px solid gainsboro;
}
#nav .header{
    width: 100%; height: 100%;
    text-align: center;
    line-height: 15vw;
} 
.fa-angle-left{
    float: left; margin-left: 5vw;
    font-size: 10vw;
    line-height: 15vw; color: black
}
#nav .header span{
    margin-left: -8vw;
    font-size: 5.5vw; 
    line-height: 15vw;
}
#nav>img{
    margin-top: -5vw; width: 100%;
}
.xunze{
    display: inline-block;
    width: 100%; height: 13vw;
    line-height: 13vw; padding-left: 10vw;
}



/**/
.liu{
    width: 100%; margin-top: 3vw;
    font-size: 4vw; text-align: center;
}
.liu p{
    font-size: 4.5vw; margin-top: 5vw;
}
input{
    width: 80%; height: 15vw; margin-top: 5vw; font-size: 5vw;
}

a:focus{
    outline: none;
}
</style>