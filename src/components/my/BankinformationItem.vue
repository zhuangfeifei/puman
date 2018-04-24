<template>
	<div class="pu">
            <nav id="nav">
                <div class="header">
                    <i @click="history" class="fa fa-angle-left" aria-hidden="true"></i>
                    <strong>身份验证</strong>
                </div>
            </nav>

            <div class="container">
                <div><span>姓名</span><span>{{userName}}</span></div>
                <div><span>银行卡号</span><span>{{address.bankcard}}</span></div>
                <div><span>银行名称</span><span>{{address.bank}}</span></div>
                <div>
                    <span>归属地</span>
                    <div>
                        <div><input id="shen" :value="province" type="text"><span>省/直辖市</span></div>
                        <div><input id="shi" :value="city" type="text"><span>市</span></div>
                    </div>
                </div>
                <div><span>开户行名称</span><input id="xinxi" type="text" placeholder="请补全开户行信息"></div>
                <!--<p>如未获取到归属地或开户行信息，请手动输入！</p>-->
                <button @click="showPlugin" class="btn tijiao">保存</button>
            </div>

            <!--模态框-->
            <div class="modal fade bs-example-modal-sm" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-sm">
                    <div class="modal-content">
                        <div class="modal-body">
                            <span id="span" class="glyphicon glyphicon-ok-circle"></span>
                            <p class="modal-bodys"></p>
                        </div>                       
                    </div>
                </div>
            </div>

        </div>
</template>

<script>
import {httpUrl} from "../../api.js"
import { Loading, XButton, Toast} from 'vux'
	export default {
		name: "register-item",
        data(){
            return{
                sendMsgDisabled : false,userName:'',token1:'',realName:'',
                address:'',province:'',city:''
            }
        },
        components: {
            XButton,
            Loading,
            Toast
        },
        created(){
            var token,userName
            function get(bugername1,token1) {
                var v = window.document.cookie.match('(^|;) ?' + bugername1 + '=([^;]*)(;|$)')
                v = true ? v[2] : null
                userName = v
                var v1 = window.document.cookie.match('(^|;) ?' + token1 + '=([^;]*)(;|$)')
                v1 = true ? v1[2] : null
                token = v1
            }
            get('bugername','token')
            this.realName = decodeURI(userName)
            this.userName = decodeURI(decodeURI(userName))
            this.token1 = token
            // this.address = this.$route.query.adress
            // this.province = this.$route.query.adress.province
            // this.city = this.$route.query.adress.city
        },
        methods: {
            history() {
                history.go(-1)
            },
            showPlugin() {
                this.$vux.loading.show({
                    text: '正在验证'
                })
                var name = encodeURI(this.userName)
                this.$http.post(httpUrl.dev + '/puman/api/system/bank_check',{ 'token':this.token1, 'bankNo':this.$route.query.adress.bankcard, 'realName':name }, {emulateJSON: true}) 
                .then(response => {
                    // console.log(response.body)
                    if(response.body.code == 10000){
                        this.$vux.loading.hide()
                        this.$vux.toast.show({
                            text: response.body.result.reason
                        })
                        if (response.body.result.error_code == 0) {
                            var shen = $('#shen').val()
                            var shi = $('#shi').val()
                            var kaihu = $('#xinxi').val()
                            var bankName = this.$route.query.adress.bank
                            var bankcard1 = this.$route.query.adress.bankcard
                            var type1 = encodeURI(encodeURI(this.$route.query.adress.type))
                            var bank1 = encodeURI(encodeURI(bankName))
                            function set(name, value, days) {
                                var d = new Date;
                                d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
                                window.document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
                            }
                            set('bank', bank1, 1)
                            set('bankcard', bankcard1, 1)
                            set('type', type1, 1)
                            this.$storage.setStore('logo',this.$route.query.adress.logo)
                            var bankCity = this.$route.query.adress.city || shi
                            var accountBankName = kaihu
                            var bankProvince = this.$route.query.adress.province || shen
                            this.baocun(bankName,bankCity,accountBankName,bankProvince)
                        }
                        
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
                        text: '验证失败'
                    })
                    setTimeout(() => {
                        this.$vux.loading.hide()
                    }, 3000)
                })
            },
            baocun(bankName,bankCity,accountBankName,bankProvince){
                this.$http.post(httpUrl.dev + '/puman/api/delegatcontract/check', {
                    'token': this.token1, 'bankNo': this.address.bankcard, 'bankName': bankName, 'bankCity': bankCity, 'accountBankName': accountBankName, 'bankProvince': bankProvince
                }, { emulateJSON: true })
                    .then(response => {
                        if (response.body.code == 200) {
                            this.$vux.toast.hide()
                            this.$vux.loading.show({
                                text: '正在跳转'
                            })
                            // console.log('银行卡保存成功')
                            setTimeout(() => {
                                this.$vux.loading.hide()
                                if(this.$route.query.status){
                                    this.$router.push({ name: "my" })
                                }else{
                                    this.$router.push({ name: "reminder" })
                                }
                            }, 3000)
                            var verificationStatus1 = 1
                            function set(name, value, days) {
                                var d = new Date;
                                d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
                                window.document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
                            }
                            set('verificationStatus', verificationStatus1, 1)
                        }else{
                            his.$vux.loading.show({
                                text: response.body.message
                            })
                            setTimeout(() => {
                                this.$vux.loading.hide()
                            }, 3000)
                        }
                    }, response => {
                        this.$vux.loading.show({
                            text: '银行卡绑定失败'
                        })
                        setTimeout(() => {
                            this.$vux.loading.hide()
                        }, 3000)
                    })

            }
        }
	}
    
</script>

<style scoped>
.pu{
    width: 100%; height: 100vh;
}
#nav{
    width: 100%; height: 15vw;
    background-color: black;
}
#nav .header{
    width: 100%; height: 100%;
    text-align: center;
    line-height: 15vw; color: white;
} 
.fa{
    float: left; margin-left: 5vw;
    font-size: 10vw;
    margin-top: 1.5vw;
}
strong{
    font-size: 5vw; margin-left: -5vw; font-weight: 500;
}


.container{
    width: 100%; color: gray; font-size: 4vw;
}
.container>div{
    width: 95%; height: 15vw; margin: 0 auto; border-bottom: 0.3vw solid gainsboro; 
    overflow: hidden; padding-top: 5vw;
}
.container>div>span:nth-child(2){
    float: right; color: black;
}
.container>div:nth-child(4)>div{
    width: 70%; float: right; display: flex; justify-content: space-between; 
    position: relative; top: -2vw;
}
input{
    border: none; outline: none!important; text-align: right; color: black; padding-right: 1vw; 
    /*border: 1px solid red;*/
}
#shen,#shi{
    width: 17vw; height: 10vw;
}
#xinxi{
    width: 55%; float: right; position: relative; top: -1vw;
}
input::-moz-placeholder{
    font-size: 4vw;
}
::-webkit-input-placeholder{
    font-size: 4vw;
}
p{
    width: 100%; font-size: 3.5vw; text-align: right; margin-top: 3vw;
}

.tijiao{
    width: 90%; height: 10vw; padding: 0vw 5vw; background-color: black;
    margin: 15vw 5%; height: 12vw; outline: none!important;
    font-size: 4vw; color: white; text-align: center;
}
.tijiao:hover{
    color: white;
}


/*模态框*/
#myModal{
    background: rgba(0,0,0,0)!important;
}
.modal-content{
    background: rgba(0,0,0,0.5)!important;
}
.modal-sm{
    width: 45vw; text-align: center; color: white;
    margin: 35vh auto;font-size: 4.5vw;
}
#span{
    font-size: 6vw;
}

a:focus{
    outline: none;
}


</style>