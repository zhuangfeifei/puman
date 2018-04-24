<template>
	
    <div class="yuyue">
        <nav id="nav">
            <div class="header">
                <i @click="history" class="fa fa-angle-left" aria-hidden="true"></i>
                <span>余额</span>
            </div>
        </nav>
        
        <div class="liu">
            <div class="qian">
                <p>余额(元)</p>
                <p>{{Data.account}}</p>
            </div>
            <!--<div class="qian1">
                <p>
                    <router-link to="/Recharge">
                        <span class="glyphicon glyphicon-plus"></span>充值
                    </router-link>
                </p>
                <p>
                    <router-link to="/Withdrawals">
                        <span class="glyphicon glyphicon-minus"></span>提现
                    </router-link>
                </p>
            </div>-->
            <div id="box">
			    <!--<ul id="tab">
				    <li class="current">全部</li>
				    <li>充值</li>
				    <li>提现</li>
			    </ul>-->
                <div>
                    <div class="content" style="display:block;">
                        <div class="jiange"></div>
                        <div class="content1" v-for="(item,index) in Data.list" :key="index">
                            <div><span>提现</span><br><span>{{item.drawDate}}</span></div>
                            <div><span>-{{item.drawCash}}</span><br><span>余额：{{item.accountBalance}}</span></div>
                        </div>
                    </div>
                    <div class="content">
                        <div class="jiange"></div>
                        <!--<div class="content1">
                            <div><span>充值</span><br><span>2017-05-01</span></div>
                            <div><span>+48.00</span><br><span>余额：300.00</span></div>
                        </div>
                        <div class="content1">
                            <div><span>充值</span><br><span>2017-05-01</span></div>
                            <div><span>+48.00</span><br><span>余额：200.00</span></div>
                        </div>
                        <div class="content1">
                            <div><span>充值</span><br><span>2017-05-01</span></div>
                            <div><span>+48.00</span><br><span>余额：100.00</span></div>
                        </div>
                        <div class="content1">
                            <div><span>充值</span><br><span>2017-05-01</span></div>
                            <div><span>+48.00</span><br><span>余额：200.00</span></div>
                        </div>-->
                    </div>
                    <div class="content">
                        <div class="jiange"></div>
                        <!--<div class="content1">
                            <div><span>提现</span><br><span>2017-05-01</span></div>
                            <div><span>-48.00</span><br><span>余额：100.00</span></div>
                        </div>
                        <div class="content1">
                            <div><span>提现</span><br><span>2017-05-01</span></div>
                            <div><span>-48.00</span><br><span>余额：200.00</span></div>
                        </div>
                        <div class="content1">
                            <div><span>提现</span><br><span>2017-05-01</span></div>
                            <div><span>-48.00</span><br><span>余额：300.00</span></div>
                        </div>-->
                    </div>
                </div>		
		    </div>
        </div>
        
    </div>

</template>

<script>
import {httpUrl} from "../../api.js"
import { Loading, XButton} from 'vux'
import placeholder from "../../assets/placeholder.gif"

	export default {
		name: "loginpassword-item",
        data(){
            return{
                placeholder,Data:''
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
            $(document).ready(function(){
                $('#tab li').click(function(){
                    var i = $(this).index()
                    $(this).addClass('current').siblings().removeClass('current')
                    $('.content').eq(i).show().siblings().hide()
                })
            })
        },
        methods: {
            history() {
                history.go(-1)
            }
        },
	}
</script>

<style scoped>
.yuyue{
    width: 100%; padding-top: 15vw;
}
/*顶部*/
#nav{
    width: 100%; height: 15vw;
    position: fixed; top: 0; color: white;
    background-color: black;
}
#nav .header{
    width: 100%; height: 100%;
    text-align: center;
    line-height: 15vw;
} 
.fa-angle-left{
    float: left; margin-left: 5vw;
    font-size: 10vw;
    line-height: 15vw; color: white
}
#nav .header span{
    margin-left: -8vw;
    font-size: 5.5vw; 
    line-height: 15vw;
}
#nav>img{
    margin-top: -5vw; width: 100%;
}



/**/
.liu{
    width: 100%;
    font-size: 4vw;
    /*border:1px solid red;*/
}
.qian{
    width: 100%; height: 40vw;
    /*background-color: #007acc;*/
}
.qian>p:nth-child(1){
    display: inline-block; font-size: 6vw; font-weight: 600;
    color: black; margin: 5vw
}
.qian>p:nth-child(2){
    margin-left: 5vw;
    font-size: 10vw; font-weight: 600;
}
.qian1{
    width: 100%; height: 10vw;
    border-bottom: 0.3vw solid gainsboro;
    display: flex; justify-content: space-around;
    text-align: center; font-size: 4.5vw;
}
.qian1 p{
    width: 50%; height: 10vw; 
    line-height: 10vw;
}
.qian1 p span{
    color: #1E9FFF; 
}




#box {
    width: 100%;
}

#tab {
    border-bottom: 0.6vw solid gainsboro; 
    width: 100%; height: 10vw;
    list-style-type: none; 
    display: flex; justify-content: space-around;
    padding: 0 10vw;
    /*border: 1px solid red;*/
    border-bottom: 0.3vw solid gray;
}
ul{
    margin: 0; padding: 0
}
#tab li {
    color: black; width: 20%; height: 10vw;
    display: inline-block; text-align: center;
    /*border: 1px solid red;*/
    line-height: 10vw; font-size: 4.5vw;
}
.content {
    display: none;
    width: 100%; 
    /*border: 1px solid blue;*/
}
.jiange{
    width: 100%; height: 3vw;
    background-color: gainsboro;
}
.content1{
    width: 100%; height: 15vw;
    /*border: 1px solid red;*/
    border-bottom: 0.3vw solid gainsboro;
}
.content1>div{
    width: 40%; height: 100%;
    /*border: 1px solid black;*/
    padding: 2vw;
}
.content1>div:nth-child(1){ 
    float: left; margin-left: 7vw;
}
.content1>div:nth-child(2){
    float: right; margin-right: 7vw;
}
.content1>div:nth-child(2)>span{
    float: right;
}
.current {
    color: blue !important;
    border-bottom: 0.6vw solid blue !important;
}

a{
    color: black;
}
a:hover{
    color: black; text-decoration: none;
}
a:focus{
    outline: none;
}
</style>