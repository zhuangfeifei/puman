<template>
	
    <div class="yuyue">
        <header-item :headers="header"></header-item>


        <div id="shangpu">
            <div @click="qianyuepu(index)" class="pu" v-for="(item,index) in Data" :key="index">
                <div>
                    <img :src="imgUrl + item.pictures">
                </div>
                <div>
                    <p class="guan">{{item.proname}}&nbsp;-&nbsp;{{item.shopsnumber}}</p>
                    <br>
                    <p>{{item.area}}m²<span class="qian">{{item.shouldpay}}元</span></p>
                </div>
                <div v-show="item.status == -2" class="zhuangtai" :class="{zhuangtai1:item.status == -2}">
                    未签约
                </div>
                <div v-show="item.status == 0" class="zhuangtai">
                    待审核
                </div>
                <div v-show="item.status == -1" class="zhuangtai" :class="{zhuangtai2:item.status == -1}">
                    审核未通过
                </div>
            </div>
        </div>
        <div class="shu" v-show="isShow">已完成所有签约</div>

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
            
        

    </div>

</template>

<script>
import {httpUrl} from "../../api.js"
import bus from "../../Bus.js"
import Header from "../home/header"
import { Confirm, Group, XSwitch, Loading, XButton, TransferDomDirective as TransferDom } from 'vux'
import { dateFormat } from 'vux'
import placeholder1 from "../../assets/img/u15320.png"
import placeholder2 from "../../assets/placeholder.gif"
	export default {
		name: "sigin-item",
        data(){
            return{
                placeholder1,placeholder2,Data:[],header:'签约',
                guan:'',proname:'',shopsid:'',verificationStatus:'',isShow: false,imgUrl:'',
            }
        },
        created(){
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
            this.$vux.loading.hide()
            this.$vux.loading.show({
                text: '正在加载',
            })
            this.imgUrl = httpUrl.imgUrl


            var token,verificationStatus
                function get(token1,verificationStatus1) {
                    var v = window.document.cookie.match('(^|;) ?' + token1 + '=([^;]*)(;|$)');
                    v = true ? v[2] :null
                    token = v
                    var v1 = window.document.cookie.match('(^|;) ?' + verificationStatus1 + '=([^;]*)(;|$)');
                    v1 = true ? v1[2] :null
                    verificationStatus = v1
                }
                get('token','verificationStatus')
                // console.log(token,verificationStatus)
                this.verificationStatus = verificationStatus
            this.shua(token)
            
            
        },
        components: {
            Confirm,
            Group,
            XSwitch,
            XButton,Loading,
            "header-item": Header,
        },
        directives: {
            TransferDom
        },
        methods: {
            history() {
                this.$router.push({ name: 'home' })
                this.$vux.loading.hide()
            },
            shua(token){
                this.$http.post(httpUrl.dev + '/puman/api/delegatcontract/list', { token }, { emulateJSON: true })
                .then(response => {
                    this.$vux.loading.hide()
                    // console.log(response.body)
                    if (response.body.code == 200) {
                        this.Data = response.body.delegatcontract
                        if(response.body.delegatcontract.length == 0){
                            this.isShow = true
                        }
                        // var filterarray = response.body.delegatcontract
                        // this.Data = $.grep(filterarray,function(value){
                        //     return value.status < 1
                        // })
                        // console.log(this.Data)
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
            qianyuepu(index){
                var guan1 = this.Data[index].shopsnumber
                var proname1 = encodeURI(encodeURI(this.Data[index].proname))
                var shopsid1 = this.Data[index].shopsid
                function set(name, value, days) {
                    var d = new Date;
                    d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
                    window.document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
                }
                set('guan', guan1, 1)
                set('proname', proname1, 1)
                set('shopsid', shopsid1, 1)
                if (this.verificationStatus == 1) {
                    $('.modal-bodys').text('您未身份验证，请先验证！')
                    $('#myModal').modal('show')
                }else{
                    this.$router.push({ name: 'reminder' })
                }
                
                
            },
            queding(){
                $('#myModal').modal('hide')
                this.$router.push({name:'authentication'})
            }
        },
        // filters:{
        //     formatDate (time){
        //         var data= new Date(time)
        //         return formatDate(date,'yyyy-MM-dd hh:mm')
        //     }
        // }
	}
</script>

<style scoped>
.yuyue{
    width: 100%;
}




/*商铺*/
#shangpu{
    width: 100%; font-size: 4vw; margin-top: 20vw; padding-bottom: 15vw;
    /*border:1px solid red;*/
}
#shangpu .pu{
    width: 90%; height: 20vw; margin: 2vw auto;
    /*border: 1px solid gray;*/
    border-bottom: 1px solid #cccccc;
}
#shangpu .pu:nth-child(2){
    margin-top: 3vw;
}
.pu>div{
    height: 100%; float: left;
    /*border:1px solid red; */
}
.pu>div:nth-child(1){
    width: 15vw; height: 15vw; text-align: center; margin-top: 1vw;
    line-height: 13vw; background: url('../../assets/img/qianming/icon2_shop_@2x.png') no-repeat; background-size: 100% 100%;
}
.pu>div:nth-child(1)>img{
    width: 100%; height: 100%;
}
.pu>div:nth-child(2){
    width: 45vw; margin-left: 4vw; color: #666666; font-size: 4.5vw;
}
.zhuangtai{
    width: 25vw; height: 8vw!important; text-align: center; line-height: 8vw; margin-top: 5vw; color: #ce9178;border: 1px solid #ce9178; border-radius: 1vw;
}
.zhuangtai1{
    border: 1px solid #3d6ed1; color: #3d6ed1; border-radius: 1vw;
}
.zhuangtai2{
    border: 1px solid red; color: red; border-radius: 1vw;
}
.pu>div:nth-child(2)>p{
    display: inline-block; margin: 0;
    height: 10vw; line-height: 8vw;
}
.guan{
    color: black; font-weight: 600;
}
.qian{
    margin-left: 4vw;
}
a {
    color: black; 
}
a:hover{
    text-decoration: none; color: black;
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
    width: 40%; height: 10vw; margin-right: 1vw; float: left; background-color: #cccccc; color: white!important; margin-top: 3vw; border-radius: 5vw; margin-left: 4.5vw;
}
.queding{
    width: 40%; height: 10vw; margin-right: 2vw; float: left; background-color: #3e74db; color: white!important; margin-top: 3vw; border-radius: 5vw;
}
.btn{
    outline: none!important;
}
.chahao{
    width: 10vw; height: 18vw; margin: 4vw auto; margin-top: 4vw;
    background: url("../../assets/img/tanchuang/img_cancel_@2x.png") no-repeat; background-size: 100% 100%;
}

.shu{
    width: 30vw; height: 10vw; margin: 10vw auto; text-align: center; font-size: 5vw; color: gray;
}




/*------------------------------------*/





</style>