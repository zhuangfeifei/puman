<template>
	
    <div class="yuyue">

        <div class="tixian">
            <div class="tixian1">
                <div class="leiji">
                    <div>
                        <p>
                            <span v-if="isShow1">&nbsp;&nbsp;{{data.totalIncome}}</span>
                            <span v-if="isShow">&nbsp;&nbsp;0.00</span>
                        </p>
                        <p class="lei">累计收益</p>
                        <img src="../../assets/img/home/quan1@2x.png" alt="">
                    </div>
                </div>
                <div class="xinxi">
                    <div @click="yiti">                   
                        <p>
                            <span v-show="isShow1">&nbsp;&nbsp;{{data.alreadyCash}}</span>
                            <span v-show="isShow">&nbsp;&nbsp;0.00</span>
                        </p>
                        <p>已提现</p>
                    </div>
                    <div @click="tixian">                
                        <p>
                            <span v-show="isShow1">&nbsp;&nbsp;{{data.applyCash}}</span>
                            <span v-show="isShow">&nbsp;&nbsp;0.00</span>
                        </p>
                        <p>提现中</p>
                    </div>
                    <div>              
                        <p>
                            <span v-show="isShow1">&nbsp;&nbsp;{{data.balance}}</span>
                            <span v-show="isShow">&nbsp;&nbsp;0.00</span>
                        </p>
                        <p>可提现</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="tongzhi">
            <router-link to="/News">
                <p><span>通知</span><span id="bianse">{{content}}</span></p>
                <!--<p><span>通知</span><span id="bianse">苏浙徽12月23日开业，全部菜品5.8折！</span></p>-->
            </router-link>
        </div>

        <div class="gongneng">
            <router-link to="/Sign">        
                <div>
                    <img src="../../assets/img/home/qianyue@2x.png" alt=""> <br>
                    <span>签约</span>
                </div>
            </router-link>
            <router-link to="/Equityholder">
                <div>
                    <img src="../../assets/img/home/quanyibangding@2x.png" alt=""> <br>
                    <span>权益人绑定</span>
                </div>
            </router-link>
            <router-link to="/Appointment">
                <div>
                    <img src="../../assets/img/home/yuyue@2x.png" alt=""> <br>
                    <span>预约</span>
                </div>
            </router-link>
            <router-link to="/Withdrawals">
                <div>
                    <img src="../../assets/img/home/tixian@2x.png" alt=""> <br>
                    <span>提现</span>
                </div>
            </router-link>
            <!--<router-link to="/Home">
                <div>
                    <img src="../../assets/img/home/shop@2x.png" alt=""> <br>
                    <span>商城</span>
                </div>
            </router-link>
            <router-link to="/Home">
                <div>
                    <img src="../../assets/img/home/qiandao@2x.png" alt=""> <br>
                    <span>签到</span>
                </div>
            </router-link>
            <router-link to="/Home">
                <div>
                    <img src="../../assets/img/home/pinpaishangjia@2x.png" alt=""> <br>
                    <span>品牌商家</span>
                </div>
            </router-link>
            <router-link to="/Home">
                <div>
                    <img src="../../assets/img/home/more@2x.png" alt=""> <br>
                    <span>更多</span>
                </div>
            </router-link>-->
        </div>

        <div class="wangian">
            <popup-radio v-cloak class="guan" title="网签办证流程" @on-change="change" :options="Data" v-model="option1"></popup-radio>
            <img class="befor" src="../../assets/img/home/矩形8@2x.png" alt="">
            <div class="kuang"></div>
        </div>
        <div class="chanzhneg">
            <div @click="knowledge" :style="{backgroundImage: 'url(' + imgUrl + xinweng.pictureName + ')'}">
                <div v-if="xinweng">{{xinweng.title}}</div>
            </div>
            <div v-cloak @click="xiangqing">
                <p class="buzhou"><span :class="{active:DataIndex >= 3}">网签成功</span><span v-if="DataIndex >= 3"><i class="fa fa-check" aria-hidden="true"></i></span></p>
                <p class="buzhou"><span :class="{active:DataIndex >= 4}">产证送件</span><span v-if="DataIndex >= 4"><i class="fa fa-check" aria-hidden="true"></i></span></p>
                <p class="buzhou"><span :class="{active:DataIndex >= 5}">通知领取</span><span v-if="DataIndex >= 5"><i class="fa fa-check" aria-hidden="true"></i></span></p>
                <p class="buzhou"><span :class="{active:DataIndex == 6}">产证领取</span><span v-if="DataIndex == 6"><i class="fa fa-check" aria-hidden="true"></i></span></p>
            </div>
        </div>

    </div>

</template>

<script>
import {httpUrl} from "../../api.js"
import { Loading, XButton} from 'vux'
import { Group, PopupRadio } from 'vux'
	export default {
        data(){
            return{
                token:'',buyerId:'',Data:[],data:'',isShow:false,isShow1:true,array:'',name:'',
                option1: '',DataIndex:0,DataTime:'',DataList:'',xinweng:'',xinweng1:'',imgUrl:'',
                yanse:'',content:'',shopsid:'',shopsnumber:''
            }
        },
        components: {
            Loading,
            XButton,PopupRadio,Group
        },
        mounted(){
            
        },
        created(){
            this.$vux.loading.show({
                text: '加载中',
            })
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
            this.imgUrl = httpUrl.imgUrl
            $('#myModal').modal('hide')

            this.$store.dispatch('noticeNew')
            setTimeout(()=>{
                this.content = this.$store.state.notice[0].title
            },500)

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
            this.$http.post(httpUrl.dev + '/puman/api/system/account',{ 'token':token, 'buyerId':userId },{ emulateJSON: true})
            .then(response => {
                this.$vux.loading.hide()
                // console.log(response.body)
                if(response.body.code == 200){
                    this.data = response.body.account
                    if(response.body.account == ''){
                        this.isShow1 = false
                        this.isShow = true
                    }
                }
            },response => {
                this.$vux.loading.show({
                    text: '服务器异常',
                })
                setTimeout(() => {
                    this.$vux.loading.hide()
                },3000)
            })


            // 网签
            this.$http.post(httpUrl.dev + '/puman/api/basic/index', { token } , { emulateJSON: true })
                .then(response => {
                    // console.log(response.body)
                    if(response.body.code == 200){
                        this.DataList = response.body.signedcertificate
                        // this.$storage.setStore('xiugais',response.body.xiugai)
                        if(response.body.signedcertificate.length == 0){
                            this.Data.push('商铺号')
                            this.option1 = '商铺号'
                        }else{
                            var signedcertificates = []
                            this.option1 = response.body.signedcertificate[0].shopsnumber
                            for(var i = 0; i < response.body.signedcertificate.length; i ++){
                                var a = response.body.signedcertificate[i]
                                signedcertificates.push(a.shopsnumber)
                            }
                            this.Data = signedcertificates
                        }
                    } else {
                        this.Data.push('商铺号')
                        this.option1 = '商铺号'
                        this.$vux.loading.show({
                            text: '请重新登录',
                        })
                        setTimeout(() => {
                            this.$vux.loading.hide()
                        },1000)
                    }
                }, response => {
                    this.$vux.loading.hide()
                    this.$vux.loading.show({
                        text: '服务器异常',
                    })
                    setTimeout(() => {
                        this.$vux.loading.hide()
                    }, 3000)
                })
            
            this.news(token)

            $(document).ready(()=>{ 
                this.yanse = setInterval(()=>{
                    this.changeColor()
                },1000);
            })  
            
        },
        methods: {
            history() {
                history.go(-1)
            },
            changeColor(){
                var color="#f00|#0f0|#00f|#880|#808|#088|green|blue|gray|#234|#534";  
                color = color.split("|");   
                var xuan = document.getElementById("bianse");  
                xuan.style.color = color[parseInt(Math.random() * color.length)];   
            },
            xiangxi(index){
                var shopId1 = this.array[index].shopId
                this.$router.push({name:'detailed',query:{shopId:shopId1}})
            },
            change(value){
                if(value != '商铺号'){
                    for(var j = 0; j < this.Data.length; j ++){
                        if(value == this.Data[j]){
                            this.DataIndex = this.DataList[j].status  // 网签状态
                            this.DataTime = this.DataList[j].data  // 网签时间
                            // this.DataTime = this.DataList[j].data[this.DataList[j].status].substring(0,10)  // 网签时间
                            this.shopsid = this.DataList[j].shopid
                            this.shopsnumber = this.DataList[j].shopsnumber
                            break
                        }
                    }
                }
            },
            xiangqing(){
                this.$router.push({path:'Management',query:{shopsid:this.shopsid,shopsnumber:this.shopsnumber}})
            },
            news(token){
                this.$http.post(httpUrl.dev + '/puman/api/basic/news', { token:token, type:'1' } , { emulateJSON: true })
                .then(response => {
                    // console.log(response.body)
                    this.xinweng = response.body.news.reverse()[0]
                },response => {
                    this.$vux.loading.show({
                        text: '服务器异常',
                    })
                    setTimeout(() => {
                        this.$vux.loading.hide()
                    }, 3000)
                })
            },
            knowledge(){
                this.$router.push({path:'knowledge'})
            },
            yiti(){
                this.$router.push({path:'Balance',query:{num:1}})
            },
            tixian(){
                this.$router.push({path:'Balance',query:{num:0}})
            }
        },
        destroyed(){
            clearInterval(this.yanse)
        },
	}
</script>

<style scoped>
@import "../../assets/vux.css";
.yuyue{
    width: 100%; padding-bottom: 20vw;
}
.weui-cell .vux-tap-active .weui-cell_access{
    border-top: 0; 
}

[v-cloak]{
    display: none;
}

/*顶部*/
#nav{
    width: 100%; height: 15vw;
    position: fixed; top: 0;
    background-color: white;
    border-bottom: 0.3vw solid gainsboro;
}
#nav .header{
    width: 100%; height: 100%;
    text-align: center;
    line-height: 15vw;
} 
.fa{
    float: left; margin-left: 5vw;
    font-size: 10vw;
    line-height: 15vw; color: black
}
#nav .header span{
    margin-left: -8vw;
    font-size: 5.5vw; 
    line-height: 15vw;
}
#nav>img{
    margin-top: -5vw; width: 100%;
}

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
.leiji>div>img{
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
    width: 100%;text-align: center; height: 7vw;
}
.xinxi>div>p:nth-child(1){
    font-size: 5vw; margin: 0; margin-left: -1.5vw; color: white;
}
.xinxi>div:nth-child(3){
    border:0;
}

 /*border: 1px solid black;*/
.tongzhi{
    width: 100%; height: 13vw; font-size: 4vw; line-height: 10vw; 
}
.tongzhi p>span:nth-child(1){
    border: 1px solid #ff9154; padding: 1vw 2.5vw; color: #ff9154; margin: 0 3vw 0 4vw; border-radius: 1vw;
}

.gongneng{
    width: 100%; height: 32vw; text-align: center;
    border-bottom: 3vw solid #f7f7f7; border-top: 3vw solid #f7f7f7;
}
.gongneng>a>div{
    width: 25%; height: 25vw; float: left; line-height: 10vw; padding-top: 2vw;
}
.gongneng>a>div>img{
    width: 15vw; height: 15vw;
}


.wangian{
    width: 100%; height: 15vw; position: relative;
}
.guan{
    z-index: 10;
}
.befor{
    width: 1.5vw; height: 5vw; position: absolute; top: 4.3vw; left: 4vw;;
}
.kuang{
    width: 20vw; height: 9vw; position: absolute; top: 3vw; right: 3vw; 
    /*border: 1px solid black;*/
}

.chanzhneg{
    width: 100%; height: 40vw; padding: 0 4vw; display: flex; justify-content: space-between; margin-top: 2vw;
}
.chanzhneg>div:nth-child(1){
    width: 45vw; height: 35vw; text-align: center; line-height: 35vw; color: white;
    background: no-repeat; background-size: 100% 100%;
}
.chanzhneg>div:nth-child(1)>div{
    width: 100%; height: 10vw; background: rgba(0, 0, 0, 0.3); line-height: 10vw; margin-top: 12.5vw; padding: 0 1vw;
    display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 1; overflow: hidden; font-size: 3.8vw;
}
.chanzhneg>div:nth-child(2){
    width: 45vw; height: 35vw;
}
/*.buzhou{
    display: inline-block; width: 45vw; height: 7vw; display: flex;
}*/
.buzhou>span:nth-child(1){
    font-size: 4.5vw; font-weight: 600; margin-right: 2vw; color: gainsboro;
}
.buzhou>span:nth-child(2){
    position: relative; top: -0.5vw;
}
.buzhou>span:nth-child(1)::before{
    content: '●';
    margin-right: 2vw;
}

.fa-check{
    font-size: 5vw; float: right; color: green; line-height: 7vw; position: relative; right: 8vw;
}

.active{
    color: black!important;
}

a{
    color: black;
}
a:active,a:visited,a:link,a:hover{
    color: black;
}
a:focus{
    outline: none;
}
</style>