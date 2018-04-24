<template>
	
    <div class="yuyue">
        <nav id="nav">
            <div class="header">
                <i @click="history" class="fa fa-angle-left" aria-hidden="true"></i>
                <span>充值</span>
            </div>
        </nav>
        <!--<div class="yue">
            <span>账户余额</span><span>100.00</span>
        </div>
        <div class="xinxi">
            <div>
                <label>金额</label>
                <input type="text" class="name" name="name">
            </div>
            <div>
                <span>支付宝</span>
            </div>
            <div>
                <span>银行转账</span>
            </div>
        </div>
        <router-link to="">
            <button type="button" class="btn btn-primary" @click="qwe">确认充值</button>
        </router-link>-->
        <div class="qidai">敬请期待</div>
    </div>

</template>

<script>
import placeholder1 from "../../assets/img/u15320.png"
import placeholder2 from "../../assets/placeholder.gif"
import placeholder3 from "../../assets/img/首页_1/u9088.png"
	export default {
		name: "recharge-item",
        data(){
            return{
                placeholder1,placeholder2,placeholder3
            }
        },
        methods: {
            history() {
                history.go(-1)
            },
            qwe(){
                // alert('123')
                // this.$router.go('/Home');
            }
        }
	}
</script>

<style scoped>
.yuyue{
    width: 100%; height: 100vh; padding-top: 15vw; text-align: center;
}
.qidai{
    margin-top: 10vw; font-size: 5vw; color: gray;
}
/*顶部*/
#nav{
    width: 100%; height: 15vw;
    position: fixed; top: 0;
    background-color: white;
    border-bottom: 0.3vw solid gainsboro;
}
#nav .header{
    width: 100%; height: 100%;
    text-align: center;
    line-height: 15vw;
} 
.fa{
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


.yue{
    width: 100%; height: 12vw; font-size: 4vw; line-height: 12vw;
    text-align: center;
    /*border: 1px solid red;*/
}
.yue span:nth-child(1){
    float: left; margin-left: 5vw;
}


/*商铺信息*/
.xinxi{
    width: 100%;
    /*border: 1px solid red;*/
}
.xinxi>div{
    width: 100%; height: 12vw;border-bottom: 0.3vw solid gainsboro;
    line-height: 12vw; font-size: 4vw;
}
.xinxi>div:nth-child(1){
    border-top: 0.3vw solid gainsboro;
}
.xinxi label,.xinxi span{
    margin-left: 5vw;
}
.name{
    width: 75%; height: 8vw; margin-left: 3vw; border:0; outline: none;
}

.btn{
    width: 90%; height: 12vw; font-size: 4.5vw; margin-left: 5vw; margin-top: 10vw;
}
a:focus{
    outline: none;
}

</style>