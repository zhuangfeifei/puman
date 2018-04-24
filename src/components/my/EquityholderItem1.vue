<template>
	
    <div class="yuyue">
        <nav id="nav">
            <div class="header">
                <i @click="history" class="fa fa-angle-left" aria-hidden="true"></i>
                <span>成为权益人</span>
            </div>
        </nav>
        <!--<div class="quanyi">
            <div class="quanyi1"><div>1</div><span>输入合同防伪编号</span> </div>
            <div class="quanyi2"><img :src="placeholder3"></div>
            <div class="quanyi3"><div>2</div><span>绑定银行卡</span></div>
        </div>-->
        <p class="xunze">请选择待绑定成为权益人的商铺</p>
        <div id="shangpu">
            <router-link to="/Security">
            <div @click="quanyir(index)" class="pu" v-for="(item,index) in data" :key="index">
                <div><img :src="imgUrl + item.pictures"></div>
                <div>
                    <p>方圆里&nbsp;-&nbsp;{{item.shopsnumber}}</p>
                    <br>
                    <p>{{item.area}}m²<span class="qian">{{item.totalPrice}}</span></p>
                </div>
                <div>
                    <img class="img1" :src="placeholder1">
                </div>
            </div>
            </router-link>
            
        </div>


        <!--模态框-->
            <!--<div class="modal fade bs-example-modal-sm" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-sm">
                    <div class="modal-content">
                        <div class="modal-body">
                            <p class="modal-bodys"></p>
                        </div>  
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default guanbi" data-dismiss="modal">成为权益人</button>
                            <button @click="queding" type="button" class="btn btn-primary queding">提现</button>
                        </div>
                    </div>
                </div>
            </div>-->
    </div>

</template>

<script>
import {httpUrl} from "../../api.js"
import { Loading, XButton} from 'vux'
import placeholder1 from "../../assets/img/u15320.png"
import placeholder2 from "../../assets/placeholder.gif"
import placeholder3 from "../../assets/img/首页_1/u9088.png"
	export default {
		name: "equityholder-item1",
        data(){
            return{
                placeholder1,placeholder2,placeholder3,
                data:'',imgUrl:''
            }
        },
        created(){
            this.imgUrl = httpUrl.imgUrl
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
            // console.log(userId)
            this.$http.post(httpUrl.dev + '/puman/api/rent/bind/shops',{ 'token':token, 'userId':userId },{ emulateJSON: true})
            .then(response => {
                console.log(response.body)
                if(response.body.code == 200){
                    this.data = response.body.list  
                }
            },respnse => {

            })
        },
        methods: {
            history() {
                // this.$router.push({name:'home'})
                history.go(-1)
            },
            quanyir(index){
                var pictures = this.data[index].pictures
                var shopsnumber = this.data[index].shopsnumber
                var area = this.data[index].area
                var totalPrice = this.data[index].totalPrice
                var id = this.data[index].id
                // console.log(pictures)
                this.$router.push({name:'security',query:{picturess:pictures, shopsnumbers:shopsnumber, areas:area, totalPrices:totalPrice,ids:id}})
                
            },
            queding(){
                $('#myModal').modal('hide')
                this.$router.push({name:'withdrawals'})
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
    background: url('../../assets/img/my/img_top.png') no-repeat; background-size: 100% 100%;
}
#nav .header{
    width: 100%; height: 100%;
    text-align: center;
    line-height: 15vw;
} 
.fa{
    float: left; margin-left: 5vw;
    font-size: 10vw;
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
    line-height: 13vw; padding-left: 10vw; margin: 0;
}

/*商铺*/
#shangpu{
    width: 100%; font-size: 4vw;
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
    width: 24%; height: 100%; float: left;
    /*border:1px solid red; */
}
.pu>div:nth-child(1){
    width: 15vw; height: 15vw; text-align: center; margin-top: 1vw; margin-left: 3vw;
    line-height: 13vw; background: url('../../assets/img/qianming/icon1_shop_@2x.png') no-repeat; background-size: 100% 100%;
}
.pu>div:nth-child(1)>img{
    width: 100%; height: 100%;
}
.pu>div:nth-child(2){
    width: 44%; margin-left: 7vw; color: #666666; font-size: 4.5vw;
}
.img1{
    width: 3vw; height: 8vw; margin-top: 4vw; float: right;
}
.pu>div:nth-child(2)>p{
    display: inline-block; margin: 0;
    height: 10vw; line-height: 8vw;
}
.guan{
    color: black; font-weight: 600;
}
.qian{
    margin-left: 5vw;
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


#myModal{
    background: rgba(0,0,0,0)!important;
}
.modal-content{
    background: rgba(0,0,0,0.5)!important;
}
.modal-sm{
    width: 55vw; text-align: center; color: white; 
    margin: 35vh auto;font-size: 4.5vw; border: 0;
}
.modal-footer{border: 0; height: 15vw; padding: 0}
.guanbi{
    width: 45%; height: 10vw;padding: 0; margin-right: 3vw;
}
.queding{
    width: 35%; height: 10vw;padding: 0; margin-right: 3vw;
}
.btn{
    outline: none!important;
}

</style>