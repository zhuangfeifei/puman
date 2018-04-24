<template>
	<div class="pu">
            <nav id="nav">
                <div class="header">
                    <i @click="history" class="fa fa-angle-left" aria-hidden="true"></i>
                    <strong></strong>
                </div>
            </nav>
            <div class="puman">PUMAN</div>
            <div class="container">
                <form>
                    <div class="form-group">
                        <img class="xm" src="../../assets/img/login/icon_phone_@2x.png">
                        <input id="phone" type="text" name="phone" placeholder="手机号" required="required"
                        />
                    </div>
                    <div class="form-group yanzhen">
                        <img class="xm" src="../../assets/img/login/icon_yanzhengma_@2x.png">
                        <input type="text" name="vCode" placeholder="验证码" class="yanzhen" required="required"
                        />
                    </div>
                    <div class="form-group miao">
                        <button id="code1" class="btn code1" type="button" @click="send">
                            <span v-if="sendMsgDisabled">{{time + '秒后获取'}}</span>
                            <span v-if="!sendMsgDisabled">获取验证码</span>
                        </button>
                    </div>
                    <div class="form-group">
                        <img class="xm" src="../../assets/img/login/icon_password_@2x.png">
                        <input id="password" type="password" name="password" placeholder="请输入新密码" required="required"
                        />
                    </div>
                    <div class="form-group">
                        <img class="xm" src="../../assets/img/login/icon_passwordagain_@2x.png">
                        <input type="password" name="password_again" placeholder="确认新密码" required="required"/>
                    </div>
                    <input @click="password" type="submit" value="提交" class="btn tijiao" data-toggle="modal" data-target="#myModal"/>
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
	export default {
		name: "password-item",
        data(){
            return{
                sendMsgDisabled : false,
                time : 60
            }
        },
        methods: {
            history() {
                history.go(-1)
            },
            send() {
                if(!(/^1[34578]\d{9}$/.test($('#phone').val()))){
                    $('#span').removeClass('glyphicon-ok-circle').addClass('glyphicon-remove-circle')
                    $('.modal-bodys').text('请输入正确的手机号')
                    $('#myModal').modal('show')
                    setTimeout(function() {
                        $('#myModal').modal('hide')
                    }, 2000);
                    //结束方法
                    return
                }
                var phone = $('#phone').val()
                // console.log(phone)
                this.$http.post(httpUrl.dev + '/puman/api/system/code', { phone, 'msgType':'2' } , { emulateJSON: true })
                .then(response => {
                    // console.log(1)
                    // console.log(response.body)
                    if(response.body.code == 200){
                        let me = this
                        me.sendMsgDisabled = true
                        var btn = document.getElementById('code1')
                        btn.id = ' '
                        let interval = window.setInterval(function() {
                            if ((me.time--) <= 0) {
                                me.time = 60;
                                me.sendMsgDisabled = false
                                btn.id = 'code1'
                                window.clearInterval(interval)
                            }
                        }, 1000);
                        $('#span').removeClass('glyphicon-remove-circle').addClass('glyphicon-ok-circle')
                        $('.modal-bodys').text('发送成功')
                        $('#myModal').modal('show')
                        setTimeout(() => {
                            $('#myModal').modal('hide')
                        }, 2000)
                    }else{
                        $('#span').removeClass('glyphicon-ok-circle').addClass('glyphicon-remove-circle')
                        $('.modal-bodys').text(response.body.message)
                        $('#myModal').modal('show')
                        setTimeout(() => {
                            $('#myModal').modal('hide')
                        }, 2000)
                    }
                    // if(response.body.code == 201){
                    //     $('#span').removeClass('glyphicon-ok-circle').addClass('glyphicon-remove-circle')
                    //     $('.modal-bodys').text('请填写号码')
                    //     $('#myModal').modal('show')
                    //     setTimeout(() => {
                    //         $('#myModal').modal('hide')
                    //     }, 2000);
                    // }
                    // console.log(response.body)

                }, response => {
                    // console.log(0)
                    $('#span').removeClass('glyphicon-ok-circle').addClass('glyphicon-remove-circle')
                    $('.modal-bodys').text('发送失败')
                    $('#myModal').modal('show')
                    setTimeout(() => {
                        $('#myModal').modal('hide')
                    }, 2000);
                })
                 
                
            },
            password(event){
                event.preventDefault()
                if ($(':password')[0].value != $(':password')[1].value) {
                        $('#span').removeClass('glyphicon-ok-circle').addClass('glyphicon-remove-circle')
                        $('.modal-bodys').text('两次输入的密码不一致')
                        $('#myModal').modal('show')
                        setTimeout(function() {
                            $('#myModal').modal('hide')
                        }, 2000);
                        return
                    }
                var data={}
                var datas = $('form').serializeArray()
                $.each(datas, function(index) {
                    if (data[this['name']]) {
                        data[this['name']] = o[this['name']] + "," + this['value'];
                    } else {
                        data[this['name']] = this['value'];
                    }
                }); 
                delete data.password_again
                // console.log(data)
                this.$http.post(httpUrl.dev + '/puman/api/system/resetpwd', data , { emulateJSON: true })
                .then(response => {
                    // console.log(response.body)
                    if(response.body.code == 200){
                        $('#span').removeClass('glyphicon-remove-circle').addClass('glyphicon-ok-circle')
                        $('.modal-bodys').text('修改成功')
                        $('#myModal').modal('show')
                        setTimeout(() => {
                            $('#myModal').modal('hide')
                            this.$router.push({path:'/'})
                        }, 2000);
                        function remove(name) {
                            function set(name, value, days) {
                                var d = new Date;
                                d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
                                window.document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
                            }
                            set(name, '', -1)
                        }
                        remove('phone', 'password')
                    }else{
                        $('#span').removeClass('glyphicon-ok-circle').addClass('glyphicon-remove-circle')
                        $('.modal-bodys').text(response.body.message)
                        $('#myModal').modal('show')
                        setTimeout(() => {
                            $('#myModal').modal('hide')
                        }, 2000);
                    }
                }, response => {
                    $('#span').removeClass('glyphicon-ok-circle').addClass('glyphicon-remove-circle')
                    $('.modal-bodys').text('修改失败')
                    $('#myModal').modal('show')
                    setTimeout(() => {
                        $('#myModal').modal('hide')
                    }, 3000);
                })
            }
        }
	}
</script>

<style scoped>
.pu{
    width: 100%; height: 100vh; position: relative; padding-top: 20vw;
}
#nav{
    width: 100%; height: 20vw; z-index: 15; position: absolute; top: 0vw;
}
#nav .header{
    width: 100%; height: 100%;
    text-align: center;
    line-height: 20vw; color: white;
} 
.fa{
    float: left; margin-left: 5vw;
    font-size: 10vw; margin-top: 5vw;
}

.puman{
    width: 100%; height: 5vw; line-height: 5vw; text-align: center; font-size: 8vw; color: white; 
    letter-spacing: 1vw; position: relative; top: 6.5vw;
}

.container{
    width: 90%; margin-top: 28vh; position: relative; padding-bottom: 8vw;
}
.form-group{
    border-bottom: 0.3vw solid #666666;height: 12vw; display: flex;
}
.xm{
    width: 8vw; height: 8vw; position: relative; top: 1vw;
}
.yanzhen{
    width: 40vw; float: left;
    /*border: 1px solid red;*/
}
.miao{
    border: none;
}
.code1{
    float: left; color: black;
    width: 30vw; height: 10vw; font-size: 4vw; margin-left: 10vw; border: 0.3vw solid #666666;
    background: none;
}
#code1{
    color: #666666; outline: none!important; background: none;
}
.name{
    margin-top: 10vw;
}
input{
    width: 100%; height: 10vw; padding-left: 3vw; background: none; border: 0; outline: none!important;
    margin: 1vw auto; font-size: 5vw;
}
input::-moz-placeholder{
    font-size: 4vw; color: #666666
}
::-webkit-input-placeholder{
    font-size: 4vw; color: #666666
}
.tijiao{
    margin: 10vw auto; height: 12vw; width: 100%; outline: none!important; background: none;
    font-size: 4.5vw; color: #666666; border-radius: 10vw;padding: 0; border: 0.3vw solid #666666;
}
.tijiao:hover{
    color: #666666;
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