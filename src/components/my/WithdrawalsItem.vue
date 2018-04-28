<template>
	
    <div class="yuyue">
        <header-item :headers="header"></header-item>
        <div class="tu">
            <div class="logo" @click="asdas"><img :src="yhimg"></div>
            <div class="xx">
                <span>{{bank}}</span><br><span>{{bankcard.substring(0,4)}}**********{{bankcard.substring(bankcard.length-4,bankcard.length)}}</span>
            </div>
        </div>
        <div class="xinxi">
            <div>
                <label>提现金额<br>
                    <span class="rmb">¥</span><input type="text" class="name" placeholder="请输入金额" v-model="value" name="name"><span class="all" @click="quan">全部提现</span>
                </label>
            </div>
        </div>
        <div class="yue">
            <span class="yuer">可提现金额</span><span>{{yuer}}</span>
        </div>
        <p class="jine"><span>注意：单笔提现金额必需≥100元，可能会有延迟等问题。</span></p>
        <button @click="tixian" type="button" :disabled="checked" class="btn" :class="{btns:checked}">确认提现</button>


        <!--模态框-->
            <div class="modal fade bs-example-modal-sm" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-sm">
                    <div class="modal-content">
                        <div class="bao"></div>
                        <div class="modal-body">
                            <p class="modal-bodys"></p>
                        </div>  
                        <div class="modal-footer">
                            <button type="button" class="btn btn-white guanbi" data-dismiss="modal">取消</button>
                            <button @click="queding" type="button" class="btn btn-white queding"> 确定</button>
                        </div>
                        <div class="chahao" data-dismiss="modal"></div>
                    </div>
                </div>
            </div>
            <!--模态框-->
            <div class="modal fade bs-example-modal-sm" id="myModal1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-sm1">
                    <div class="modal-content1">
                        <div class="modal-body">
                            <span id="span" class="glyphicon glyphicon-remove-circle"></span>
                            <p class="modal-bodys1"></p>
                        </div>                       
                    </div>
                </div>
            </div>

            <!--模态框-->
            <div class="modal fade bs-example-modal-sm" id="myModal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-sm">
                    <div class="modal-content">
                        <div class="bao"></div>
                        <div class="modal-body">
                            <p class="modal-bodys2"></p>
                        </div>  
                        <div class="modal-footer">
                            <button type="button" class="btn btn-white guanbi" data-dismiss="modal">返回</button>
                            <button @click="sign" type="button" class="btn btn-white queding">前往签约</button>
                        </div>
                        <div class="chahao" data-dismiss="modal"></div>
                    </div>
                </div>
            </div>
    </div>

</template>

<script>
import {httpUrl} from "../../api.js"
import Header from "../home/header"
import { Loading, XButton} from 'vux'
import placeholder1 from "../../assets/img/u15320.png"
import placeholder2 from "../../assets/placeholder.gif"
import placeholder3 from "../../assets/img/首页_1/u9088.png"
	export default {
		name: "withdrawals-item",
        data(){
            return{
                placeholder1,placeholder2,placeholder3,header:'提现',
                token:'',userId:'',yuer:'',bankcard:'',bank:'',bugername:'',dayu:'',yhimg:'http://www.homeamc.cn:80/puman/kaptcha/api/YH',
                value:'',checked:true
            }
        },
        components: {
            "header-item": Header,
        },
        created(){
            this.$vux.loading.show({
                text: '正在加载',
            })
            var token,userId,bankcard,bank,bugername
            function get(token1,userId1,bankcard1,bank1,bugername1) {
                var v = window.document.cookie.match('(^|;) ?' + token1 + '=([^;]*)(;|$)')
                v = true ? v[2] : null
                token = v
                var v1 = window.document.cookie.match('(^|;) ?' + userId1 + '=([^;]*)(;|$)')
                v1 = true ? v1[2] : null
                userId = v1
                var v2 = window.document.cookie.match('(^|;) ?' + bankcard1 + '=([^;]*)(;|$)')
                v2 = true ? v2[2] : null
                bankcard = v2
                var v3 = window.document.cookie.match('(^|;) ?' + bank1 + '=([^;]*)(;|$)')
                v3 = true ? v3[2] : null
                bank = v3
                var v4 = window.document.cookie.match('(^|;) ?' + bugername1 + '=([^;]*)(;|$)')
                v4 = true ? v4[2] : null
                bugername = v4
            }
            get('token','userId','bankcard','bank','bugername')
            this.token = token
            this.userId = userId
            this.bankcard = bankcard
            this.bank = decodeURI(decodeURI(bank))
            this.bugername = decodeURI(decodeURI(bugername))
            // console.log(this.bank+'-----')

            var yhName = {'北京银行':'BJYH','工商银行':'GSYH','光大银行':'GDYH','华夏银行':'HXYH','建设银行':'JSYH','交通银行':'JTYH','民生银行':'MSYH','南京银行':'NJYH','宁波银行':'NBYH',
                    '农业银行':'NYYH','浦发银行':'PFYH','深圳发展银行':'SZFZYH','兴业银行':'XYYH','邮政银行':'YZYH','招商银行':'ZSYH','中国银行':'ZGYH','中信银行':'ZXYH'}
                
            for(var key in yhName){
                if(this.bank.indexOf(key) >= 0){
                    this.yhimg = 'http://www.homeamc.cn:80/puman/kaptcha/api/'+ yhName[key]
                    break
                }
            }
            // console.log(this.yhimg)

            // this.yhimg = this.$storage.getStore('logo')

            this.$http.post(httpUrl.dev + '/puman/api/rent/account',{token,userId},{ emulateJSON: true })
            .then(response => {
                this.$vux.loading.hide()
                // console.log(response.body)
                if(response.body.code == 200){
                    this.yuer = response.body.account
                    this.dayu = response.body.totalIncome
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
            asdas(){
                this.$router.push({name:'zhifuwc'})
            },
            history() {
                this.$router.push({ name: "home" })
            },
            quan(){
                this.value = this.yuer
            },
            tixian(){
                var kahao = this.bankcard
                var yuer = parseInt(this.yuer)
                $(document).ready(function(){
                    var asd = parseInt($('.name').val())
                    if(asd == '' || asd < 100 || asd > yuer){
                        $('.modal-bodys1').text('金额不能小于100元或大于余额')
                        $('#myModal1').modal('show')
                        setTimeout(() => {
                            $('#myModal1').modal('hide')
                        },3000)
                        return
                    }
                    if (kahao == '') {
                        $('.modal-bodys2').text('银行卡为空，请先签约')
                        $('#myModal2').modal('show')
                        return
                    }
                    if(kahao != ''){
                        $('.modal-bodys').text('您确定提现吗！')
                        $('#myModal').modal('show')
                    }
                })
            },
            queding(){
                $('#myModal').modal('hide')
                var token = this.token
                var userId = this.userId
                var bankNo = this.bankcard
                var bankName = this.bank
                var drawCash = $('.name').val() - $('.name').val()*$('.shui').text()
                // console.log(bankName)
                // console.log(token+'--'+userId+'--'+bankName+'--'+bankNo+'--'+drawCash)
                this.$http.post(httpUrl.dev + '/puman/api/rent/apply',{token,userId,drawCash,bankNo,bankName},{ emulateJSON: true })
                .then(response => {
                    // console.log(response.body)
                    if(response.body.code == 200){
                        this.$router.push({ name: "zhifuwc" })
                    }else{
                        this.$vux.loading.show({
                            text: response.body.message
                        })
                        setTimeout(() => {
                            this.$vux.loading.hide()
                        }, 3000)
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
            sign(){
                $('#myModal2').modal('hide')
                this.$router.push({ name: "sign" })
            }
        },
        watch:{
            value(val,old){
                if(val != ''){
                    this.checked = false
                }else{
                    this.checked = true
                }
            }
        }
	}
</script>

<style scoped>
.yuyue{
    width: 100%; height: 100vh; padding-top: 15vw;
}



.yue{
    width: 100%; height: 12vw; font-size: 4vw; line-height: 12vw;
    /*border: 1px solid red;*/
}
.yuer{
    float: left; margin-left: 5vw; color: gray;
}
.yue span:nth-child(2){
    float: left; color: #FF8B4B;
}
.jine{
    width: 90%; height: 13vw; margin-left: 5%; color: gray; margin-top: 2vw; font-size: 3.5vw;
}
.jine>span:nth-child(3){
    margin-left: 11.5vw;
}


.tu{
    width: 90%; height: 25vw; margin-left: 5%; border-radius: 3vw; font-size: 4vw;
    margin-top: 3vw; color: black;
}
.logo{
    width: 15vw; height: 15vw; border-radius: 50%; margin-left: 5vw; margin-top: 2.5vw; float: left;
}
.logo img{
    width: 100%; height: 100%; border-radius: 50%;
}
.xx{
    float: left; margin-left: 5vw; margin-top: 4vw; width: 65%;
}
.bd{
    margin-left: 5vw; margin-top: 3vw; color: gray;
}

/*商铺信息*/
.xinxi{
    width: 100%; height: 22vw; border-bottom: 0.3vw solid gainsboro;
    /*border: 1px solid red;*/
}
.xinxi>div{
    width: 90%; height: 8vw;
    line-height: 10vw; font-size: 4vw; margin: 0 auto;
}
.touxiang{
    width: 13vw; height: 10vw; float: right; margin-right: 5vw; 
    border: 0.3vw solid blue;
}
.xinxi1{
    float: right; margin-right: 5vw;
} 
.name{
    width: 55vw; height: 8vw; border:0; outline: none; color: black; line-height: 5vw; padding-left: 3vw; font-size: 6vw;
}
input:-moz-placeholder{
    font-size: 4vw; color: RGBA(206, 206, 206, 1); line-height: 8vw;
}
input::-webkit-input-placeholder{
    font-size: 4vw; color: RGBA(206, 206, 206, 1); line-height: 8vw;
}
.all{
    color: #FF8B4B; font-weight: 500; position: relative; left: 10vw;
}
.rmb{
    font-weight: 600; font-size: 8vw; position: relative; top: 0.7vw;
}
.kahao{
    margin-left: 5vw;
}
.shui{
    margin-left: 5vw; color: gray;
}
.xieyi{
    width: 100%; height: 15vw; font-size: 4vw; line-height: 15vw; padding-left: 5vw;
}

.btn{
    width: 90%; height: 12vw; font-size: 4.5vw; margin-left: 5vw; margin-top: 10vw; outline: none!important;
}
.btns{
    background-color: RGBA(206, 206, 206, 1)!important;
}
.xieyi a{
    color: blue;
}
a:focus{
    outline: none;
}




/*模态框*/
#myModal{
    background: rgba(0,0,0,0)!important;
    
}
.modal-content{
    /*background: rgba(0,0,0,0.5)!important;*/
    height: 65vw!important;
    background: url("../../assets/img/tanchuang/bj.png") no-repeat; background-size: 100% 100%;
}
.bao{
    width: 25vw; height: 20vw; margin: 0vw auto; margin-top: 4vw;
    background: url("../../assets/img/tanchuang/img@2x.png") no-repeat; background-size: 100% 100%;
}
.modal-bodys{
    margin: 0; padding: 0; color: #3e74d8;
}
.modal-sm{
    width: 60vw; text-align: center; color: white; 
    margin: 20vh auto;font-size: 4.5vw; border: 0;
}
.modal-footer{border: 0; height: 15vw; padding: 0}
.guanbi{
    width: 40%; height: 10vw; margin-right: 1vw; float: left; background-color: #cccccc; color: white!important; margin-top: 8vw; border-radius: 5vw;
}
.queding{
    width: 40%; height: 10vw; margin-right: 2vw; float: left; background-color: #3e74db; color: white!important; margin-top: 8vw; border-radius: 5vw;
}
.btn{
    outline: none!important; margin-top: 10vw; background-color: #FF8B4B; color: white;
}
.chahao{
    width: 10vw; height: 18vw; margin: 4vw auto; margin-top: 10vw;
    background: url("../../assets/img/tanchuang/img_cancel_@2x.png") no-repeat; background-size: 100% 100%;
}
.btn:hover{
    color: white;
}




#myModal1{
    background: rgba(0,0,0,0)!important;
}
.modal-content1{
    background: rgba(0,0,0,0.5)!important; border-radius: 2vw;
}
.modal-sm1{
    width: 42vw; text-align: center; color: white; 
    margin: 35vh auto;font-size: 4.5vw;
}


.modal-bodys2{
    color: #3e74d8;
}
</style>