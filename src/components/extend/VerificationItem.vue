<template>
	
    <div class="yuyue">
        <nav id="nav">
            <div class="header">
                <i @click="history" class="fa fa-angle-left" aria-hidden="true"></i>
                <span>绑定银行卡</span>
            </div>
        </nav>
        <div class="yanzhen">
            <div>本次操作需要短信确认，请输入151******60收到的短信验证码</div>
            <div class="yanzhen1">
                <div class="form-group">
                    <input type="text" name="number" placeholder="验证码" class="form-control yanzhenma" required="required" pattern="[0-9a-zA-Z\u4e00-\u9fa5]{2,6}"/>
                </div>
                <div class="form-group">
                    <button id="code1" class="btn btn-primary code1" type="button" @click="send">
                        <span v-if="sendMsgDisabled">{{time + '秒后重发'}}</span>
                        <span v-if="!sendMsgDisabled">获取验证码</span>
                    </button>
                </div>
            </div>
        </div>
        <router-link to="/Become">
            <button type="button" class="btn btn-primary xia" @click="qwe">下一步</button>
        </router-link>
        <router-link to="">
            <p>收不到验证码？</p>
        </router-link>
    </div>

</template>

<script>
import placeholder1 from "../../assets/img/u15320.png"
import placeholder2 from "../../assets/placeholder.gif"
import placeholder3 from "../../assets/img/首页_1/u9088.png"
	export default {
		name: "verification-item",
        data(){
            return{
                placeholder1,placeholder2,placeholder3,
                sendMsgDisabled : false,
                time : 60
            }
        },
        methods: {
            history() {
                history.go(-1)
            },
            qwe(){
                // alert('123')
                // this.$router.go('/Home');
            },
            send() {
                let me = this;
                me.sendMsgDisabled = true;
                var btn = document.getElementById('code1')
                btn.id = ' '
                let interval = window.setInterval(function () {
                    if ((me.time--) <= 0) {
                        me.time = 60;
                        me.sendMsgDisabled = false;
                        btn.id = 'code1'
                        window.clearInterval(interval);
                    }
                }, 1000);
            }
        }
	}
</script>

<style scoped>
.yuyue{
    width: 100%; height: 100vh; padding-top: 15vw;
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

.yanzhen{
    width: 100%; height: 35vw;font-size: 4vw;
}
.yanzhen>div:nth-child(1){
    width: 100%; padding: 2vw 3vw; color: gray;
}
.yanzhen1{
    width: 100%; height: 15vw; font-size: 4vw; display: flex; justify-content: space-around;
    padding-top: 3vw;
}
.yanzhenma{
    width: 45vw; height: 10vw; font-size: 4vw;
}
#code1{
    width: 30vw; height: 10vw; font-size: 4vw;
}
.code1{
    width: 30vw; height: 10vw; font-size: 4vw; 
    /*background-color: gray;*/
}



.xia{
    width: 90%; height: 12vw; font-size: 4vw; margin-left: 5vw;
}
a:hover{
    text-decoration: none;
}
P{
    display: inline-block; width: 30%; margin-left: 35%;
    text-align: center; margin-top: 3vw; font-size: 4vw;
}
a:focus{
    outline: none;
}

</style>