<template>
	<div class="pu">
            <nav id="nav">
                <div class="header">
                    <i @click="history" class="fa fa-angle-left" aria-hidden="true"></i>
                    <strong>身份验证</strong>
                </div>
            </nav>

            <div class="container">
                <div class="logo"></div>
                <form id="myform">
                    <div class="form-group">
                        <!--<input id="name" type="text" name="number" placeholder="姓名" required="required"/>-->
                        <span id="name">{{userName}}</span>
                    </div>
                    <div class="form-group">
                        <input id="idCardNo" type="text" name="number" placeholder="银行卡号" />
                        <!--<button @click="paishe" id="pai" class="btn btn-primary">拍&nbsp;摄</button>-->
                        <!--<div class="pai">
                            <input @click="paishe" id="demo_input" type="file" accept="image/*;capture=camera">拍&nbsp;摄
                        </div>-->
                    </div>
                    <!--<span class="tishi">可智能识别银行卡</span>
                    <div id="img">
                        <p>银行卡正面照</p>
                        <div class="jiao1"></div><div class="jiao2"></div><div class="jiao3"></div><div class="jiao4"></div>
                        <div id="img_area"></div>
                    </div>-->
                    <input @click="showPlugin" type="button" value="下一步" class="btn tijiao" />
                </form>
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
                sendMsgDisabled : false,
                time : 60,img:'',userName:'',token1:'',realName:''
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
            // console.log(this.userName,token)
        },
        methods: {
            history() {
                history.go(-1)
            },
            // paishe(){
            //     var that = this
            //     // 拍摄
            //     var input = document.getElementById("demo_input");
            //     var img_area = document.getElementById("img_area");
            //     if (typeof (FileReader) === 'undefined') {
            //         result.innerHTML = "抱歉，你的浏览器不支持 FileReader，请使用现代浏览器操作！";
            //         input.setAttribute('disabled', 'disabled');
            //     } else {
            //         input.addEventListener('change', readFile, false);
            //     }
            //     function readFile() {
            //         var file = this.files[0];
            //         //这里我们判断下类型如果不是图片就返回 去掉就可以上传任意文件
            //         if (!/image\/\w+/.test(file.type)) {
            //             alert("请确保文件为图像类型");
            //             return false;
            //         }
            //         var reader = new FileReader();
            //         reader.readAsDataURL(file);
            //         console.log(file)
            //         reader.onload = function(e) {
            //             img_area.innerHTML = '<img style="width: 80vw; height: 37vw;" src="' + this.result + '" alt=""/>'
            //             var img = this.result
            //             // console.log(img)
            //             that.$http.post('/yhk/shujujia/bankcard_identify?appkey=794531bc73b0bbdab28f39540386032b',
            //             {"inputs":[{"image":{"dataType":50,"dataValue":img},"configure":{"dataType":50,"dataType":"{\"side\":\"face\"}"}}]},{emulateJSON: true})
            //             // that.$http.post('/yhk/shujujia/bankcard_identify?appkey=794531bc73b0bbdab28f39540386032b',{'body':file},{emulateJSON: true})
            //             .then(response => {
            //                 console.log(response.body)
            //             },response => {

            //             })
            //         }
            //     }
            // },
            showPlugin() {

                this.$vux.loading.show({
                    text: '正在查询信息'
                })
                var name = encodeURI(this.userName)
                // console.log(name)
                var kahao = $('#idCardNo').val()
                // console.log(kahao)
                var token = this.token1
                this.$http.post(httpUrl.dev + '/puman/api/system/bank_address', { 'token': token, 'bankNo': kahao }, { emulateJSON: true })
                    .then(response => {
                        // console.log(response.body)
                        if (response.body.code == 10000) {
                            this.$storage.setStore('logo',response.body.result.result.logo)
                            this.$vux.loading.show({
                                text: '正在跳转'
                            })
                            this.$vux.loading.hide()
                            this.$router.push({ path: "AuthenticationName", query: { adress: response.body.result.result,status:this.$route.query.status } })
                        } else {
                            this.$vux.loading.show({
                                text: response.body.message
                            })
                            setTimeout(() => {
                                this.$vux.loading.hide()
                            }, 3000)
                        }
                    }, response => {
                        this.$vux.loading.show({
                            text: '查询信息失败'
                        })
                        setTimeout(() => {
                            this.$vux.loading.hide()
                        }, 3000)
                    })
                
            },
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
    width: 100%; background-color: #fafafc;
}
.logo{
    width: 16vw; height: 20vw; margin: 5vw auto;
    background: url("../../assets/img/shenfen/icon_@2x.png") no-repeat;
    background-size: 100% 100%;
}
.form-group{
    width: 95%; height: 15vw; margin: 0 auto; border-bottom: 0.3vw solid gray; position: relative; 
    overflow: hidden;
}
#name{
    display: inline-block; width: 100%; height: 13vw; border: none; margin-top: 8vw; font-size: 4.5vw; color: gray;
}
#idCardNo{
    width: 100%; height: 13vw; border: none; margin-top: 2vw; padding-top: 4vw;
    outline:none; background: none; line-height: 5vw;
}
input::-moz-placeholder{
    font-size: 4.5vw;
}
::-webkit-input-placeholder{
    font-size: 4.5vw;
}
#pai{
    width: 18vw; height: 9vw; font-size: 4.5vw; position: absolute; right: 0; top: 5vw;
}
.tishi{
    float: right; color: gray; font-size: 4vw; margin-top: 1vw; margin-right: 2vw;
}
#img{
    width: 90%; height: 40vw; margin: 10vw auto; position: relative; margin-top: 15vw;
}
#img p{
    text-align: center; line-height: 35vw; color: gainsboro; font-size: 5vw;
}
.tijiao{
    width: 90%; height: 10vw; padding: 0vw 5vw; background-color: black;
    margin: 15vw 5%; height: 12vw; outline: none!important;
    font-size: 4vw; color: white;
}

#img div{
    width: 10vw; height: 5vw; position: absolute;
}
.jiao1{
    top: 0; left: 0; border-top: 1vw solid gainsboro; border-left: 1vw solid gainsboro;
}
.jiao2{
    top: 0; right: 0; border-top: 1vw solid gainsboro; border-right: 1vw solid gainsboro;
}
.jiao3{
    bottom: 0; left: 0; border-bottom: 1vw solid gainsboro; border-left: 1vw solid gainsboro;
}
.jiao4{
    bottom: 0; right: 0; border-bottom: 1vw solid gainsboro; border-right: 1vw solid gainsboro;
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


#demo_input{
    position: absolute; right: 10vw; top: 0; opacity: 0;border: 1px solid red!important;
}
.pai{
    position: relative; width: 20vw; height: 10vw; left: 55vw; top: -12vw;
    display: inline-block; font-size: 4vw;
    background: #3d6ed1;
    border: 0.3vw solid #99D3F5;
    border-radius: 2vw;
    margin-left: 10vw; padding-left: 4.5vw;
    overflow: hidden;
    color: white;
    text-decoration: none;
    text-indent: 0;
    line-height: 10vw;
}
#img_area{
    width: 70vw; height: 70vw; position: absolute; top: 1.5vw; left: 1.5vw;
}
/*#img_area>img{
    width: 100%; height: 100%;
}*/
</style>