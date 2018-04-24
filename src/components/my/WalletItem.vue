<template>
	
    <div class="yuyue">
        <nav id="nav">
            <div class="header">
                <i @click="history" class="fa fa-angle-left" aria-hidden="true"></i>
                <span>我的钱包</span>
            </div>
        </nav>
        
        <div class="liu">
            <div class="qian">
                <p>余额(元)</p>
                <p>{{Data.account}}</p>
            </div>
            <div class="ji">
                <div>
                    <div>
                        <img src="../../assets/img/my/积分@2x.png">
                    </div>
                    <span>积分</span><br><span>0</span>
                </div>
                <div>
                    <div>
                        <img src="../../assets/img/my/卡卷包图标@2x.png">
                    </div>
                    <span>卡卷包</span>
                </div>
            </div>
        </div>
        
    </div>

</template>

<script>
import {httpUrl} from "../../api.js"
import { Loading, XButton} from 'vux'
	export default {
		name: "loginpassword-item",
        data(){
            return{
                Data:''
            }
        },
        created(){
            var token,userId
            function get(token1,userId1) {
                var v = window.document.cookie.match('(^|;) ?' + token1 + '=([^;]*)(;|$)');
                v = true ? v[2] :null
                token = v
                var v1 = window.document.cookie.match('(^|;) ?' + userId1 + '=([^;]*)(;|$)');
                v1 = true ? v1[2] :null
                userId = v1
            }
            get('token','userId')
            // console.log(token,userId)
            var shopsid = this.$route.query.shopsid
            this.$http.post(httpUrl.dev + '/puman/api/rent/account', { token, userId }, { emulateJSON: true })
                .then(response => {
                    // console.log(response.body)
                    if (response.body.code == 200) {
                        this.Data = response.body
                    }
                }, response => {
                    this.$vux.loading.show({
                        text: '服务器异常',
                    })
                    setTimeout(() => {
                        this.$vux.loading.hide()
                    },3000)
                })
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
    width: 100%; height: 40vw;
    font-size: 4vw;
}
.qian{
    width: 100%; height: 100%;
    background-color: #007acc;
}
.qian>p:nth-child(1){
    display: inline-block; font-size: 6vw; font-weight: 600;
    color: white; margin: 5vw
}
.qian>p:nth-child(2){
    color: white; margin-left: 5vw;
    font-size: 10vw; font-weight: 600;
}
.ji{
    width: 100%; height: 50vw;
    /*border: 1px solid red;*/
    display: flex; justify-content: space-around;
}
.ji>div{
    width: 25%; height: 50%; text-align: center; margin-top: 20%;
    /*border: 1px solid red;*/
}
.ji>div>div{
    width: 70%; height: 50%; margin-top: 10%; margin-left: 15%;
    /*border: 1px solid red;*/
}
.ji>div>div>img{
    width: 75%; height: 95%;
}

a:focus{
    outline: none;
}
</style>