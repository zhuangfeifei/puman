<template>
    <div class="my">

        <div class="header">           
            <!--<span>我的</span>
            <router-link to="/Systemsettings">
                <span>设置</span>
            </router-link>-->
        </div>

        <div class="haika">
            <div class="ka">
                <div class="kalogo">
                    <section>
                        <img src="../../assets/img/my/logo@2x.png">
                    </section>
                </div>
                <div class="kaName">
                    <div><span>方圆里</span><br><span class="pName">VIP会员</span></div>
                </div>
            </div>
        </div>

        <div class="xinxi">
            <div class="portrait">
                <router-link to="/Personal">
                <section><img :src="imgs" alt=""></section>
                </router-link>
            </div>
            <div class="wxName">
                <div><span>昵称</span><br><span class="pName">{{name}}</span></div>
            </div>
            <!--<div class="qiandao">签到</div>-->
        </div>

        <div class="zichan">
            <div>
                <span>总收益</span><br><span v-show="isShow1" class="num">¥{{data.totalIncome}}</span><span v-show="isShow">0</span>
            </div>
            <div>
                <span>可提现</span><br><span v-show="isShow1" class="num">¥{{data.balance}}</span><span v-show="isShow">0</span>
            </div>
            <div>
                <span>提现中</span><br><span v-show="isShow1" class="num">¥{{data.applyCash}}</span><span v-show="isShow">0</span>
            </div>
        </div>

        <!--服务-->
        <div class="fuwu">
            <div class="fuwu1">
                <img class="befor" src="../../assets/img/home/矩形8@2x.png" alt="">
                <span>我的服务</span>
            </div>
            <div class="lie">
                <div class="biao">
                    <router-link to="/Administration">
                    <img src="../../assets/img/my/shangpu.png" alt="">
                    <p>商铺</p>
                    </router-link>
                </div>
                <div class="biao">
                    <router-link to="/Profit">
                    <img src="../../assets/img/my/shouyi.png" alt="">
                    <p>收益</p>
                    </router-link>
                </div>
                <div class="biao">
                    <router-link to="/Mycontract">
                    <img src="../../assets/img/my/qianyue.png" alt="">
                    <p>签约</p>
                    </router-link>
                </div>
                <div class="biao">
                    <router-link to="/Myreservation">
                    <img src="../../assets/img/my/yuyue.png" alt="">
                    <p>预约</p>
                    </router-link>
                </div>
            </div>
            <div class="fuwu1">
                <img class="befor" src="../../assets/img/home/矩形8@2x.png" alt="">
                <span>设置</span>
            </div>
            <router-link to="/Systemsettings">
                <span class="shezhi">系统设置</span><span class="fa fa-angle-right"></span>
            </router-link>
        </div>

    </div>
</template>
<script>
import {httpUrl} from "../../api.js"
import { Loading, XButton} from 'vux'
export default {
     name : 'my-item',
     data(){
		return {
			imgs:'',name:'',isShow:false,isShow1:true,
            imgUrl:'',data:''
		}
	},
    created(){
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
        $('#myModal').modal('hide')
        this.imgUrl = httpUrl.imgUrl
        var imgs,bugername,token,userId
        function get(imgs1,bugername1,token1,userId1) {
            var v = window.document.cookie.match('(^|;) ?' + imgs1 + '=([^;]*)(;|$)');
            v = true ? v[2] : null
            imgs = v
            var v1 = window.document.cookie.match('(^|;) ?' + bugername1 + '=([^;]*)(;|$)');
            v1 = true ? v1[2] : null
            bugername = v1
            var v2 = window.document.cookie.match('(^|;) ?' + token1 + '=([^;]*)(;|$)');
            v2 = true ? v2[2] : null
            token = v2
            var v3 = window.document.cookie.match('(^|;) ?' + userId1 + '=([^;]*)(;|$)');
            v3 = true ? v3[2] : null
            userId = v3
        }
        get('img','bugername','token','userId')
        this.imgs = imgs
        this.name = decodeURI(decodeURI(bugername))
        // console.log(this.name)
        // console.log(this.imgs)

        this.$http.post(httpUrl.dev + '/puman/api/system/account',{ 'token':token, 'buyerId':userId },{ emulateJSON: true})
            .then(response => {
                this.$vux.loading.hide()
                // console.log(response.body.account)
                if(response.body.code == 200){
                    this.data = response.body.account
                    if(response.body.account == ''){
                        this.isShow1 = false
                        this.isShow = true
                    }
                }
            },response => {
                this.$vux.loading.show({
                    text: '服务器异常',
                })
                setTimeout(() => {
                    this.$vux.loading.hide()
                },3000)
            })
    },
    methods: {
        kaifa(){
            this.$vux.loading.show({
                text: '开发中',
            })
            setTimeout(() => {
                this.$vux.loading.hide()
            },1000)
        }
    }
}
</script>
<style scoped>
.my{
    width: 100%; padding-bottom: 40vw;
}

.header{
    width: 100%; height: 5vw; color: white; text-align: center;
    font-size: 5vw; line-height: 15vw;
}
/*.header>span:nth-child(1){
    position: relative; left: 5vw;
}
.header>a>span{
    float: right; position: relative; right: 3vw; font-size: 5vw;
}
.header>a{
    color: white;
}*/


.haika{
    width: 90%; height: 35vw; background: url("../../assets/img/my/vips.png") no-repeat; font-size: 4vw;
    background-size: 100% 100%; margin: 3vw auto; color: white; text-align: center; padding-top: 7vw;
}
.ka{
    width: 100%; height: 25vw; padding-top: 2vw; text-align: left;
}
.kalogo{
    width: 20vw; height: 100%; float: left;
}
.kalogo img{
    width: 15vw; height: 15vw; border-radius: 50%;
}
.kalogo section{
    width: 15vw; height: 15vw; border-radius: 50%; position: relative; left: 3vw;
}
.kaName{
    float: left; padding-top: 1vw; margin-left: 3vw; font-size: 4vw;
}



.xinxi{
    width: 90%; height: 25vw; margin: 0 auto; padding: 6vw 0; font-size: 4.3vw;
    /*border: 1px solid red;*/
}
.portrait{
    width: 22vw; height: 20vw; float: left; padding-left: 4vw;
}
.portrait img{
    width: 15vw; height: 15vw; border-radius: 50%;
}
.wxName{
    width: 30vw; height: 15vw; float: left; padding: 1.5vw 1vw;
    /*border: 1px solid red;*/
}
.pName{
    position: relative; top: 1vw; font-size: 4.3vw;
}
.qiandao{
    width: 20vw; height: 8vw; float: right; margin-right: 4vw; color: white; text-align: center; line-height: 8vw;
    background: url("../../assets/img/my/qiandao@2x.png") no-repeat; background-size: 100% 100%;
    position: relative; top: 3.5vw;
}


.zichan{
    width: 100%; height: 20vw; display: flex; margin: 0 auto; font-size: 4.3vw; color: #757575;
    border-bottom: 3vw solid #f7f7f7;
}
.zichan>div{
    width: 33.33%; height: 80%; border-right: 0.3vw solid #dbdbdb; text-align: center;
}
.zichan>div:nth-child(3){
    border: 0;
}
.num{
    position: relative; top: 1vw;
}


/*服务*/
.fuwu{
    width: 100%; height: 45vw; background-color: white; padding: 0 4vw;
    /*border: 1px solid red;*/
}
.fuwu1{
    width: 100%; height: 13vw; position: relative;
    /*border-bottom: 0.3vw solid gainsboro;*/
    line-height: 13vw;
}
.fuwu1>span{
    margin-left: 7vw; font-size: 4.5vw; color: black;
}
.befor{
    width: 1.5vw; height: 4.5vw; position: absolute; top: 4vw; left: 4vw;
}
.lie{
    width: 100%; height: 30vw; font-size: 4vw; color: #757575; border-bottom: 3vw solid #f7f7f7;
    /*border: 1px solid red;*/
}
.biao{
    width: 25%; height: 100%; float: left; text-align: center; padding-top: 1vw;
}
.biao img{
    width: 15vw; height: 15vw; margin-bottom: 2vw;
}




.fuwu2{
    width: 100%; height: 15vw;
}
.fuwu2>div:nth-child(1){
    padding: 0; border: 0;
}
.fuwu2>div{
    width: 100%; height: 100%;
    /*border-bottom: 1px solid gainsboro;*/
    padding-top: 1vw; font-size: 4.7vw;
}
.fuwu2>div>{
     color: #333333;
}
.mc{
    margin-left: 5vw; line-height: 7vw;
}
.rs{
    font-size: 6vw; line-height: 7vw; color: gray; display: inline-block; width: 60%; height: 8vw; text-align: right; padding-right: 5vw;
}
.fuwu2 .liucheng{
    width: 8vw; height: 8vw;float: left;
    border-radius: 50%; margin-left: 5vw;
    font-size: 5vw;
    line-height: 8vw; margin-bottom: 2vw;
}
.fuwu .liucheng>img{
    width: 100%; height: 100%; margin-top: -1.5vw;
}

a{
    color: #666666;
}
a:hover{
    color: #666666; text-decoration: none;
}
a:focus{outline:none;}




.shezhi{
    margin-left: 5vw; font-size: 4vw;
}
.fa-angle-right{
    float: right; height: 5vw; font-size: 7vw;
    margin-right: 10vw; margin-top: -0.7vw;
}
</style>

