<template>
	
    <div class="yuyue">
        <nav id="nav">
            <div class="header">
                <i @click="history" class="fa fa-angle-left" aria-hidden="true"></i>
            </div>
        </nav>


        <div class="tixian">
            <div class="tixian1">
                <div class="leiji">
                    <div>
                        <p>
                            <countup :end-val="totalIncome" :duration="1" :decimals="2" class="demo1"></countup>
                        </p>
                        <p class="lei">累计收益</p>
                        <van-circle class="imgs" v-model="currentRate" :rate="80" size="41vw" :stroke-width="55" color="#f18c47" layer-color="#191919" :speed="100" />
                    </div>
                </div>
                <div class="xinxi">
                    <div @click="yiti">                   
                        <p>
                            <span>&nbsp;&nbsp;{{data.alreadyCash}}</span>
                        </p>
                        <p>已提现</p>
                    </div>
                    <div @click="tixian">                
                        <p>
                            <span>&nbsp;&nbsp;{{data.applyCash || 0.00}}</span>
                        </p>
                        <p>提现中</p>
                    </div>
                    <div>              
                        <p>
                            <span>&nbsp;&nbsp;{{data.balance || 0.00}}</span>
                        </p>
                        <p>可提现</p>
                    </div>
                </div>
            </div>
        </div>


        <div @click="xiangxi(index)" class="chen" v-for="(item,index) in array" :key="index">
                <p class="tixian3">
                    <span>{{item.totalShareMoney}}元</span>
                    <img src="../../assets/img/shouyi/shouyikuang.png">
                    <span>{{name}}-{{item.shopNo}}</span>
                </p>
                <div class="tixian4">
                    <div>
                        <!--<div class="liucheng"><img src="../../assets/img/shouyi/产证面积图标@2x.png"></div>-->
                        <span id="liucheng1">产证面积</span><br>
                        <span class="liucheng2">{{item.shopArea}}m²</span>
                    </div>
                    <div>
                        <!--<div class="liucheng"><img src="../../assets/img/shouyi/补偿面积图标@2x.png"></div>-->
                        <span id="liucheng1">补偿面积</span><br>
                        <span class="liucheng2">{{item.compensationArea}}m²</span>
                    </div>
                    <div>
                        <!--<div class="liucheng"><img src="../../assets/img/shouyi/分摊系数图标@2x.png"></div>-->
                        <span id="liucheng1">分摊系数</span><br>
                        <span class="liucheng2">{{item.shareRatio}}</span>
                    </div>
                </div>
            </div>
    </div>

</template>

<script>
import {httpUrl} from "../../api.js"
import { Loading, XButton,Countup} from 'vux'
// import { Swiper, GroupTitle, SwiperItem, XButton, Divider } from 'vux'
	export default {
		name: "profit-item",
        data(){
            return{
                token:'',buyerId:'',data:'',isShow:false,isShow1:true,
                name:'',array:'',currentRate: 0,totalIncome:0
            }
        },
        components: {
            Loading,
            XButton,Countup
        },
        created(){
            // $(document).ready(function(){
            //     // alert($('.tixian1').width())
            //     $('.tixian1').scroll(function(){
            //     if(scrollLeft=0){
            //         alert($('.tixian1').width())
            //     }
            // })
            // })
            this.$vux.loading.show({
                text: '加载中',
            })
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
            this.token = token
            this.buyerId = userId
            this.$http.post(httpUrl.dev + '/puman/api/system/account',{ token, 'buyerId':userId },{ emulateJSON: true})
            .then(response => {
                this.$vux.loading.hide()
                // console.log(response.body)
                if(response.body.code == 200){
                    this.data = response.body.account
                    this.totalIncome = response.body.account.totalIncome || 0.00
                }
            },response => {
                this.$vux.loading.show({
                    text: '网络异常',
                })
                setTimeout(() => {
                    this.$vux.loading.hide()
                },3000)
            })
            this.$http.post(httpUrl.dev + '/puman/api/rent/total_info',{ token,'buyerId':userId },{ emulateJSON: true })
            .then(response => {
                // console.log(response.body)
                if(response.body.code == 200){
                    this.name = response.body.projectName
                    if(response.body.shopInfos.length > 0){
                        this.array = response.body.shopInfos
                    }
                }else{
                    this.$vux.loading.show({
                        text: response.body.message,
                    })
                    setTimeout(() => {
                        this.$vux.loading.hide()
                    },3000)
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
            history() {
                history.go(-1)
            },
            xiangxi(index){
                var shopId1 = this.array[index].shopId
                this.$router.push({name:'detailed',query:{shopId:shopId1}})
            },
            yiti(){
                this.$router.push({path:'Balance',query:{num:1}})
            },
            tixian(){
                this.$router.push({path:'Balance',query:{num:0}})
            }
        }
	}
</script>

<style scoped>
.yuyue{
    width: 100%; padding-bottom: 10vw;
}
/*顶部*/
#nav{
    width: 100%; height: 15vw;
    position: fixed; top: 0; color: white;
    /*background: url('../../assets/img/my/img_top.png') no-repeat; background-size: 100% 100%;*/
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


.demo1{ position: relative; left: 2vw;}
/*提现*/
.tixian{
    width: 100%; padding-bottom: 2vw;
    /*border: 1px solid red;*/
}
.tixian1{
    width: 100%; height: 70vw; background-color: black;
}
.leiji{
    width: 100%; height: 50vw; text-align: center;  padding-top: 10vw;
     color: white;
}
.leiji>div{
    width: 40vw; height: 40vw; border-radius: 50%; margin: 0vw auto; text-align: center; position: relative; font-size: 4vw;
    line-height: 6vw; padding-top: 14vw; background: url("../../assets/img/home/quan2@2x.png") no-repeat; background-size: 100% 100%;
}
.leiji>div>p:nth-child(1){
    font-size: 7vw; margin-left: -4vw;
}
.imgs{
    width: 41vw; height: 42vw; position: absolute; top: -0.5vw; left: -0.5vw;
}
.xinxi{
    display: flex; justify-content: space-around; font-size: 4vw; 
    height: 20vw; padding-top: 4vw;
}
.xinxi>div{
    border-right: 1px solid gainsboro; width: 33%; height: 13vw; text-align: center; color: white;
}
.xinxi>div>p{
    width: 100%; text-align: center; height: 7vw;
}
.xinxi>div>p:nth-child(1){
    font-size: 5vw; margin: 0; margin-left: -1.5vw; color: white;
}
.xinxi>div:nth-child(3){
    border:0;
}



.chen{
    width: 100%; 
}
.tixian2{
    width: 100%; height: 25vw; display: flex;
}

.tixian3{
    display: inline-block; width: 100%; height: 10vw;
    /*border: 1px solid red;*/
}
.tixian3>span:nth-child(1){
    color: black; font-size: 4vw; margin-right: 8vw;
    float: right; line-height: 10vw;
}
.tixian3 img{
    width: 1.5vw; height: 5vw; margin-left: 8vw; line-height: 5vw; margin-top: -1vw;
}
.tixian3>span:nth-child(3){
    font-size: 4.2vw; margin-left: 2vw; font-weight: 600; line-height: 10vw;
}

.tixian4{
    width: 90%; height: 20vw; border-bottom: 0.3vw solid gainsboro; margin: 0 auto;
    display: flex; justify-content: space-around; font-size: 4.5vw; color: gray;
    /*border: 1px solid red;*/
}
.tixian4>div{
    width: 40%; height: 30vw; text-align: center;
    /*border: 1px solid red;*/
}
.liucheng{
    width: 80%; height: 20vw; margin: 0 auto;
    /*border: 1px solid red;*/
}
.liucheng img{
    width: 100%; height: 100%;
}
#liucheng1{
    display: inline-block;
    margin-top: 2.5vw; font-size: 4.5vw;
}
.liucheng2{
    color: black; font-size: 4vw; position: relative; top: 2vw;
}


.lei{
    font-size: 4vw;
}
a:focus{
    outline: none;
}
</style>