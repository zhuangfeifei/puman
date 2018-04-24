<template>
	
    <div class="yuyue">
        <header-item :headers="header"></header-item>

        <div class="tu">
            <!--<img :src="this.$route.query.picturess">-->
            <img src="../../assets/img/qianming/组3@2x.png">
        </div>
        
        <div class="liu">
            <div class="liu1">
                <p>预约事项</p>
                <textarea maxlength="200" onchange="this.value=this.value.substring(0, 200)" 
                onkeydown="this.value=this.value.substring(0, 200)" onkeyup="this.value=this.value.substring(0, 200)" 
                ></textarea>
            </div>
            <div class="liu2">
	            <p>预约时间</p>
                <group >
                    <datetime class="shijian" v-model="minuteListValue" format="YYYY-MM-DD HH:mm" :minute-list="['00', '15', '30', '45']" @on-change="change"></datetime>
                </group>
                <!--<div>{{minuteListValue}}</div>-->
            </div>
            <button @click="shijian" type="button" class="btn">提交</button>
        </div>
        
    </div>

</template>
<script>
import {httpUrl} from "../../api.js"
import Header from "../home/header"
import placeholder from "../../assets/img/首页_1/u8969.jpg"
import { Datetime, Group, XButton, Loading } from 'vux'

	export default {
		name: "shops-item",
        data() {
            return {
                placeholder,Data:'',img:'',data:'日期',header:'预约',
                readonly: true,
                formatValueFunction(val) {
                    return val.replace(/-/g, '$')
                }
            }
        },
        components: {
            Datetime,
            Group,"header-item": Header,
            XButton
        },
        created(){
            this.img = this.$route.query.picturess
            // console.log(this.$route.query.picturess)
        },
        computed:{
            minuteListValue(){
                function p(s) {
                    return s < 10 ? '0' + s : s;
                }

                var myDate = new Date();
                //获取当前年
                var year = myDate.getFullYear();
                //获取当前月
                var month = myDate.getMonth() + 1;
                //获取当前日
                var date = myDate.getDate();
                var h = myDate.getHours();       //获取当前小时数(0-23)
                var m = myDate.getMinutes();     //获取当前分钟数(0-59)
                var s = myDate.getSeconds();

                return year + '-' + p(month) + "-" + p(date) + " " + p(h) + ':' + p(m)
                //  + ":" + p(s);
            },
        },
        methods: {
            history() {
                this.$router.push({name:'appointment'})
            },
            change(value) {
                // console.log('change', value)
                this.Data = value
            },
            
            shijian(){
                var token
                function get(token1) {
                    var v = window.document.cookie.match('(^|;) ?' + token1 + '=([^;]*)(;|$)');
                    if (v) {
                        v = v[2]
                    } else {
                        v = null
                    }
                    token = v
                }
                get('token')
                var Remarks = $('textarea').val()
                var appointtime = this.Data + ':00'
                var shopsid = this.$route.query.shopids
                // console.log(token)
                // console.log(shopsid)
                // console.log(Remarks)
                // console.log(appointtime)
                var that = this
                this.$http.post(httpUrl.dev + '/puman/api/appointment/details', {'token':token,'shopsnumber':shopsid,'remarks':Remarks,'appointtime':appointtime }, { emulateJSON: true })
                .then(response => {
                    // console.log(response.body)
                    if (response.body.code == 200) {
                        // console.log(response.body.message)
                        this.$vux.loading.show({
                            text: '预约成功'
                        })
                        setTimeout(() => {
                            this.$vux.loading.hide()
                            this.$router.push({ name: 'appointment' })
                        }, 2000)
                    }else{
                        this.$vux.loading.show({
                            text: response.body.message
                        })
                        setTimeout(() => {
                            this.$vux.loading.hide()
                        }, 3000)
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
        }
	}
</script>

<style scoped>
@import "../../assets/vux.css";
@import "../../assets/time/css/mobiscroll.css";
@import "../../assets/time/css/mobiscroll_002.css";
@import "../../assets/time/css/mobiscroll_003.css";
.center {
  padding-top: 10px;
  padding-left: 15px;
  color: green;
}
.yuyue{
    width: 100%;
}


/*商铺图*/
.tu{
    width: 100%; height: 30vw;
    margin-top: 15vw;
}
.tu img{
    width: 100%; height: 100%;
}

/**/
.liu{
    width: 100%; margin-top: 5vw;
    /*font-size: 4vw;*/
}
.liu1{
    width: 100%; height: 40vw;
    /*border: 1px solid red;*/
}
.liu1>p{
    display: inline-block;
    /*width: 100%; height: 5vw;*/
    /*border:1px solid red;*/
    line-height: 5vw; padding-left: 5vw;
}
textarea{
    width: 90%; height: 80%; margin: 0 5%; resize: none;
}
.liu2{
    width: 100%; height: 35vw;
    /*border: 1px solid red;*/
}
.liu2>p{
    padding-left: 5vw; margin-top: 3vw;
}
/*.row{
    width: 90%; margin: 0 auto;
}
#calendar{
    width: 100%; height: 10vw; 
    font-size: 4vw; border:0.3vw solid gainsboro;
}
.input-group-addon{
    font-size: 4vw;
}*/

.shijian{
    background-color: gainsboro; padding-right: 35%; width: 100%; height: 12vw; font-size: 4.5vw;
}

.btn{
    width: 90%; height: 12vw; border-radius: 10vw; background-color: black;
    margin: 0vw 5%; font-size: 4vw; outline: none!important; color: white;
}
.btn:hover{
    color: white;
}

.vux-datetime-cancel{
    /*width: 100%; height: 100vh!important; */
    font-size: 4vw!important;background-color: red!important;
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

a{
    color: black!important;
}
a:hover{
    text-decoration: none; color: black;
}
a:focus{
    outline: none;
}
</style>