<template>
	
    <div class="yuyue">
        <header-item :headers="header"></header-item>

        
        <div class="xinxi">
            <strong>密码管理</strong>
            <router-link to="/Loginpassword">
                <div>
                    <span>修改登录密码</span>
                    <span class="fa fa-angle-right"></span>
                </div>
            </router-link>
            <!--<router-link to="/Paymentpassword">
            <div>
                <span>修改支付密码</span>
                <span class="fa fa-angle-right"></span>
            </div>
            </router-link>
            <div>
                <span>忘记支付密码</span>
                <span class="fa fa-angle-right"></span>
            </div>-->
            <!--<strong>支付管理</strong>-->
            <!--<div>
                <span>指纹支付</span>
                
                <div id="testswitch">
                    <input class="testswitch-checkbox" id="onoffswitch" type="checkbox">
                    <label class="testswitch-label" for="onoffswitch">
                        <span class="testswitch-inner" data-on="ON" data-off="OFF"></span>
                        <span class="testswitch-switch"></span>
                    </label>
                </div>

            </div>-->
            <strong>缓存设置</strong>
            <div @click="qingchu">
                <span>清除本地缓存</span>
                <span class="xinxi1">0MB</span>
            </div>
            <strong>关于帮助</strong>
            <!--<div>
                <span>版本号</span>
                <span class="xinxi2">1.0.0</span>
            </div>
            <div>
                <span>自动更新</span>
                <span class="fa fa-angle-right"></span>
            </div>-->
            <router-link to="/Help">
            <div>
                <span>帮助</span>
                <span class="fa fa-angle-right"></span>
            </div>
            </router-link>
            
        </div>

        <!--<router-link to="/">
            <button type="button" class="btn btn-danger">注销登录</button>
        </router-link>-->
        <x-button @click.native="showLoading" class="btn btn-danger">注销登录</x-button>
        <!--<x-switch class="asd" title="123" v-model="show1" @on-change="show1change"></x-switch>-->
        
                
    </div>

</template>

<script>
import { Loading, XButton, XSwitch} from 'vux'
import Header from "../home/header"
import placeholder1 from "../../assets/img/u15320.png"
import placeholder2 from "../../assets/placeholder.gif"
	export default {
		name: "systemsettings-item",
        data(){
            return{
                placeholder1,placeholder2,show1: false,header:'系统设置',
            }
        },
        components: {
            Loading,
            XButton,XSwitch,
            "header-item": Header,
        },
        created(){
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
        },
        methods: {
            history() {
                history.go(-1)
            },
            showLoading() {
                // 删除cookie
                function remove(name) {
                    function set(name, value, days) {
                        var d = new Date;
                        d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
                        window.document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
                    }
                    set(name, '', -1)
                }
                remove('phone','password')
                this.$vux.loading.show({
                    text: '正在注销'
                })
                setTimeout(() => {
                    this.$vux.loading.hide()
                    this.$router.push({path:'/'})
                }, 1000)
            },
            qingchu(){
                this.$vux.loading.show({
                    text: '正在清除'
                })
                setTimeout(() => {
                    this.$vux.loading.hide()
                }, 1000)
            },
        },
        mounted(){
            $(document).ready(function () {
                $("#onoffswitch").on('click', function () {
                    clickSwitch()
                });
                var clickSwitch = function () {
                    if ($("#onoffswitch").is(':checked')) {
                        // console.log("在ON的状态下");
                    } else {
                        // console.log("在OFF的状态下");
                    }
                };
            });  
        }
	}
</script>

<style scoped>
@import "../../assets/vux.css";
.yuyue{
    width: 100%; padding-top: 15vw;
}




/*信息*/
.xinxi{
    width: 100%;
    /*border: 1px solid red;*/
}
.xinxi div{
    width: 100%; height: 12vw;border-bottom: 0.3vw solid gainsboro;
    line-height: 12vw; font-size: 4vw; color: gray; padding-left: 5vw;
}
.xinxi strong{
    padding-left: 4vw; font-size: 4.5vw;
    display: inline-block; width: 100%; height: 12vw; line-height: 12vw;
    border-bottom: 0.3vw solid gainsboro;
}
.fa-angle-right{
    float: right; height: 5vw; font-size: 7vw;
    margin-right: 10vw; margin-top: 2vw;
}
.xinxi1{
    float: right; margin-right: 10vw; color: red;
}
.xinxi2{
    float: right; margin-right: 10vw; color: black;
}
a{
    color: gray;
}
a:hover{
    color: gray; text-decoration: none;
}

.btn{
    width: 80%; height: 12vw; margin: 10vw; 
    margin-left: 10%; font-size: 4.6vw; outline: none!important;
}
a:focus{
    outline: none;
}
.btn:hover{
    color: white;
}

/*switch*/
    #testswitch {  
        position: relative; border:0;
        float: right; height: 7vw;
        width: 50px!important;
        margin: 3.5vw 5vw 0 0; padding: 0;
    }  
      
    .testswitch-checkbox {  
        display: none;  
    }  
      
    .testswitch-label {  
        display: block;   
        overflow: hidden;   
        cursor: pointer;  
        border: 1px solid #999999;   
        border-radius: 20px;  
    }  
      
    .testswitch-inner {  
        display: block;   
        width: 200%;   
        margin-left: -100%;  
        transition: margin 0.3s ease-in 0s;  
    }  
      /*高度*/
    .testswitch-inner::before, .testswitch-inner::after {  
        display: block;   
        float: right;   
        width: 50%;   
        height: 16px;   
        padding: 0;   
        line-height: 16px;  
        font-size: 12px;   
        color: white;   
        font-family:   
        Trebuchet, Arial, sans-serif;   
        font-weight: bold;  
        box-sizing: border-box;  
    }  
      
    .testswitch-inner::after {  
        content: attr(data-on);  
        padding-left: 10px;  
        background-color: #00e500;   
        color: #FFFFFF;  
    }  
      
    .testswitch-inner::before {  
        content: attr(data-off);  
        padding-right: 5px;  
        background-color: #EEEEEE;   
        color: #999999;  
        text-align: right;  
    }  
      
    .testswitch-switch {  
        position: absolute;   
        display: block;   
        width: 12px;  
        height: 12px;  
        margin: 3px;  
        background: #FFFFFF;  
        top: 0;   
        bottom: 0;  
        right: 30px;  
        border: 1px solid #999999;   
        border-radius: 20px;  
        transition: all 0.3s ease-in 0s;  
    }  
      
    .testswitch-checkbox:checked + .testswitch-label .testswitch-inner {  
        margin-left: 0;  
    }  
      
    .testswitch-checkbox:checked + .testswitch-label .testswitch-switch {  
        right: 0px;   
    }  
</style>