<template>
	
    <div class="yuyue">
        <nav id="nav">
            <div class="header">
                <i v-show="isShow" @click="history" class="fa fa-angle-left" aria-hidden="true"></i>
                <span :class="{wc:isShow1}">成为权益人</span><span v-show="isShow1" @click="wanchen" class="wanchen">完成</span>
            </div>
        </nav>
        
        <div v-show="isShow">
            <p class="xunze">商铺基本信息</p>
            <div class="xinxi">
                <div>
                    <span>商铺图片</span>
                    <div class="touxiang"><img :src="imgUrl + pictures"></div>
                </div>
                <div>
                    <span>商铺号</span>
                    <span class="xinxi1">{{shopsnumber}}</span>
                </div>
                <div>
                    <span>商铺面积(m²)</span>
                    <span class="xinxi1">{{area}}</span>
                </div>
                <div>
                    <span>网签总价(元)</span>
                    <span class="xinxi2">{{totalPrice}}</span>
                </div>
            </div>
            <div class="bianhao">
                <p>合同防伪编号</p>
                <input id="weima" type="text" />
            </div>
            <button @click="bianhao" type="button" class="btn">下一步</button>
        </div>

        <div v-show="isShow1" class="img">
            <img src="../../assets/img/shenfen/img_quanyiren_@2x.png">
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
import placeholder1 from "../../assets/img/u15320.png"
import placeholder2 from "../../assets/placeholder.gif"
import placeholder3 from "../../assets/img/首页_1/u9088.png"
	export default {
		name: "security-item",
        data(){
            return{
                placeholder1,placeholder2,placeholder3,
                pictures:'',shopsnumber:'',area:'',totalPrice:'',id:'',
                imgUrl:'',isShow:true,isShow1:false
            }
        },
        created(){
            this.imgUrl = httpUrl.imgUrl
            this.pictures = this.$route.query.picturess
            this.shopsnumber = this.$route.query.shopsnumbers
            this.area = this.$route.query.areas
            this.totalPrice = this.$route.query.totalPrices
            this.id = this.$route.query.ids
            // console.log(this.pictures)
        },
        methods: {
            history() {
                // this.$router.push({path:'/Equityholder'})
                history.go(-1)
            },
            wanchen(){
                this.$router.push({name:'shoppingmall'})
            },
            bianhao(){
                var token,userId
                function get(token1,userId1) {
                    var v = window.document.cookie.match('(^|;) ?' + token1 + '=([^;]*)(;|$)')
                    var v1 = window.document.cookie.match('(^|;) ?' + userId1 + '=([^;]*)(;|$)');
                    v = true ? v[2] :null
                    token = v
                    v1 = true ? v1[2] :null
                    userId = v1
                }
                get('token','userId')
                var shopId = this.id
                // console.log(shopId,token)
                var securityCode = $('#weima').val()
                if(securityCode.length == 0){
                    $('#span').removeClass('glyphicon-ok-circle').addClass('glyphicon-remove-circle')
                    $('.modal-bodys').text('合同防伪码不能为空')
                    $('#myModal').modal('show')
                    setTimeout(() => {
                        $('#myModal').modal('hide')
                    }, 2000);
                }else{
                    this.$http.post(httpUrl.dev + '/puman/api/rent/bind',{ 'token':token, 'userId':userId, 'shopId':shopId, 'securityCode':securityCode },{ emulateJSON: true })
                    .then(response => {
                        // console.log(response.body)
                        if(response.body.code == 200){
                            this.isShow = false
                            this.isShow1 = true
                        }else{
                            $('#span').removeClass('glyphicon-ok-circle').addClass('glyphicon-remove-circle')
                            $('.modal-bodys').text(response.body.message)
                            $('#myModal').modal('show')
                            setTimeout(() => {
                                $('#myModal').modal('hide')
                            }, 3000);
                        }
                    },response => {
                        $('#span').removeClass('glyphicon-ok-circle').addClass('glyphicon-remove-circle')
                        $('.modal-bodys').text(response.status+' - '+response.statusText)
                        $('#myModal').modal('show')
                        setTimeout(() => {
                            $('#myModal').modal('hide')
                        }, 3000);
                    })
                }
                
            }
        }
	}
</script>

<style scoped>
.yuyue{
    width: 100%; height: 100vh; padding-top: 15vw;
}
/*顶部*/
#nav{
    width: 100%; height: 15vw;
    position: fixed; top: 0; color: white;
    background: black;
}
#nav .header{
    width: 100%; height: 100%;
    text-align: center;
    line-height: 15vw;
} 
.fa{
    float: left; margin-left: 5vw;
    font-size: 10vw; color: white;
    line-height: 15vw;
}
#nav .header span{
    margin-left: -8vw;
    font-size: 5.5vw; 
    line-height: 15vw;
}
#nav>img{
    margin-top: -5vw; width: 100%;
}


.quanyi{
    width: 100%; height: 15vw; font-size: 4vw; display: flex; justify-content: space-around;
    /*border: 1px solid red;*/
}
.quanyi div{
    height: 15vw; 
    /*border: 1px solid red;*/
}
.quanyi1{
    width: 45%;height: 100%;
}
.quanyi1>div{
    width: 6vw; height: 6vw; border-radius: 50%; float: left; margin-top: 4.5vw; text-align: center;
    margin-left: 3vw; background-color: blue; color: white;line-height: 6vw;
}
.quanyi1>span{
    float: left; line-height: 15vw; margin-left: 2vw; color: blue;
}
.quanyi2{
    width: 10%;height: 100%; line-height: 15vw; text-align: center;
}
.quanyi2 img{
    width: 10vw;
}
.quanyi3{
    width: 35%;height: 100%;
}
.quanyi3>div{
    width: 6vw; height: 6vw; border:0.3vw solid gray; border-radius: 50%; float: left; margin-top: 4.5vw; text-align: center;
}
.quanyi3>span{
    float: left; line-height: 15vw; margin-left: 2vw;
}

.xunze{
    display: inline-block;
    width: 100%; height: 13vw; font-size: 4vw;
    line-height: 13vw; padding-left: 10vw;
}

/*商铺信息*/
.xinxi{
    width: 100%;
    /*border: 1px solid red;*/
}
.xinxi>div{
    width: 100%; height: 12vw;border-bottom: 0.3vw solid gainsboro;
    line-height: 12vw; font-size: 4vw; color: gray;
}
.xinxi>div:nth-child(1){
    border-top: 0.3vw solid gainsboro;
}
.xinxi span{
    margin-left: 5vw;
}
.touxiang{
    width: 10vw; height: 10vw; float: right; margin-right: 5vw; 
    margin-top: 0.75vw; background: url('../../assets/img/qianming/icon1_shop_@2x.png') no-repeat; background-size: 100% 100%;
}
.touxiang img{
    width: 10vw; height: 10vw; position: relative; left: -20vw; top: -20vw;
}
.xinxi1{
    float: right; margin-right: 5vw; 
}
.xinxi2{
    float: right; margin-right: 5vw; 
}

.bianhao{
    width: 100%; height: 23vw; font-size: 4vw; padding: 3vw 5vw;
    /*border:1px solid red;*/
}
.bianhao input{
    width: 100%; height: 10vw;
}
#weima{
    outline: none;
}
.btn{
    width: 90%; height: 12vw; font-size: 4vw; margin-left: 5vw; margin-top: 5vw; outline: none!important;
    background-color: black; color: white;
}
a:focus{
    outline: none;
}
.btn:hover{
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



.img{
    width: 100%;
}
img{
    width: 60vw; height: 60vw; margin: 20vw;
}
.wanchen{
    float: right; margin-right: 5vw;
}
.wc{
    position: relative; left: 5vw;
}
</style>