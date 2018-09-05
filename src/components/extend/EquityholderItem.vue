<template>
	
    <div class="yuyue">
        <nav id="nav">
            <div class="header">
                <i @click="history" class="fa fa-angle-left" aria-hidden="true"></i>
                <span>成为权益人</span>
            </div>
        </nav>
        <div id="shangpu">
            <div @click="quanyir(index)" class="pu" :class="{pus:item.beneficiary != ''}" v-for="(item,index) in data" :key="index">
                <div><img :src="imgUrl + item.pictures"></div>
                <div>
                    <p>方圆里&nbsp;-&nbsp;{{item.shopsnumber}}</p>
                    <br>
                    <p>{{item.area}}m²<span class="qian">{{item.totalPrice}}</span></p>
                    <p v-if="item.beneficiary != ''">权益人：<span>{{item.beneficiary}}</span></p>
                </div>
                <div>
                    <span v-show="item.beneficiary == ''">待绑定</span>
                    <span v-show="item.beneficiary != ''">已绑定</span>
                </div>
            </div>
            <div class="wu" v-if="data.length == 0">暂无可绑定商铺</div>
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
                            <button type="button" class="btn btn-white guanbi" data-dismiss="modal">取消</button>
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
import { Loading, XButton} from 'vux'
import placeholder1 from "../../assets/img/u15320.png"
import placeholder2 from "../../assets/placeholder.gif"
import placeholder3 from "../../assets/img/首页_1/u9088.png"
	export default {
		name: "equityholder-item",
        data(){
            return{
                placeholder1,placeholder2,placeholder3,
                data:'',imgUrl:'',code:'0'
            }
        },
        created(){
            this.imgUrl = httpUrl.imgUrl
            this.code = this.$route.query.code
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
                // console.log(response.body)
                if(response.body.code == 200){
                    this.data = response.body.list  
                }
            },respnse => {
                this.$vux.loading.show({
                    text: '服务器异常',
                })
                setTimeout(() => {
                    this.$vux.loading.hide()
                },3000)
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
                if(this.data[index].deleStatus == 0){
                    $('.modal-bodys2').text('该铺尚未签约，请先签约！')
                    $('#myModal2').modal('show')
                }
                if(this.data[index].deleStatus == 1){
                    $('.modal-bodys2').text('签约尚未审核，请待审核！')
                    $('#myModal2').modal('show')
                }
                if(this.data[index].deleStatus == 3){
                    $('.modal-bodys2').text('签约未通过，请重新签约！')
                    $('#myModal2').modal('show')
                }
                if(this.data[index].beneficiary == '' && this.data[index].deleStatus == 2){
                    this.$router.push({name:'security',query:{picturess:pictures, shopsnumbers:shopsnumber, areas:area, totalPrices:totalPrice,ids:id}})
                }
                if(this.data[index].beneficiary != ''){
                    this.$router.push({name:'management',query:{shopsid:id,shopsnumber:shopsnumber}})
                }
                
            },
            queding(){
                $('#myModal').modal('hide')
                this.$router.push({name:'withdrawals'})
            },
            sign(){
                $('#myModal2').modal('hide')
                setTimeout(()=>{
                    this.$router.push({name:'sign'})
                },500)
            }
        },
        // updated(){
        //     $('#myModal').modal('hide')
        // }
	}
</script>

<style lang="less" scoped>
.yuyue{
    width: 100%; height: 100vh; padding-top: 15vw;
    background-color: #F7F7F7;
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


/*商铺*/
#shangpu{
    width: 100%; font-size: 4vw;
}
.pu{
    width: 90%; height: 25vw; margin: 2vw auto; padding-top: 3.5vw; clear: both;
    background: url('../../assets/img/home/quanyiback.png') no-repeat; background-size: 100% 100%;
}
.pus{
    width: 90%; height: 35vw; margin: 2vw auto; padding-top: 3.5vw; clear: both;
    background: url('../../assets/img/home/quanyibacks.png') no-repeat; background-size: 100% 100%;
}
.pu>div{
    width: 24%; height: 100%; float: left;
}
.pu>div:nth-child(1){
    width: 15vw; height: 15vw; text-align: center; margin-top: 1vw; margin-left: 3vw;
    line-height: 13vw; 
    // background: url('../../assets/img/home/quanyi.png') no-repeat; background-size: 100% 100%;
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
.pu>div:nth-child(2)>p:nth-child(1){
    font-family:PingFang-SC-Bold;
    color:rgba(68,68,68,1); font-weight: Bold;
}
.pu>div:nth-child(2)>p:nth-child(4){
    font-family:PingFang-SC-Medium; font-size: 4vw; position: relative; top: -1vw;
    color:RGBA(43, 43, 43, 1); font-weight: Medium;
}
.pu>div:nth-child(3){
    text-align: center; padding-top: 1vw; color: white;
    span{
        background-color: RGBA(234, 22, 22, 1); padding: 0.5vw 2vw; border-radius: 1vw;
    }
    span:nth-child(2){
        background-color: RGBA(98, 185, 0, 1)
    }
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
.modal-footer{border: 0; height: 15vw; padding: 0 2vw 0 0;}
.guanbi{
    width: 48%; height: 10vw; margin-right: 1vw; float: left; background-color: #FF8B4B; color: white!important; margin-top: 2vw; border-radius: 5vw; margin-left: 3vw;
}
.queding{
    width: 40%; height: 10vw; float: left; background-color: #FF8B4B; color: white!important; margin-top: 2vw; border-radius: 5vw;
}
.btn{
    outline: none!important;
}
.chahao{
    width: 10vw; height: 18vw; margin: 4vw auto; margin-top: 2vw;
    background: url("../../assets/img/tanchuang/img_cancel_@2x.png") no-repeat; background-size: 100% 100%;
}


.wu{
    width: 100%; text-align: center; margin-top: 10vw; color: gray;
}
</style>