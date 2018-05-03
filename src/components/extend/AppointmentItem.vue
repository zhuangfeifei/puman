<template>
	
    <div class="yuyue">
        <header-item :headers="header"></header-item>
        <p class="xunze">请选择需要预约的商铺</p>


        <div id="shangpu">
            <div @click="yuyue(index)" class="pu" v-for="(item,index) in Data" :key="index">
                <div>
                    <img :src="imgUrl + item.pictures">
                </div>
                <div>
                    <p class="guan">{{item.proname}}&nbsp;-&nbsp;{{item.shopsnumber}}</p>
                    <br>
                    <p>{{item.area}}m²<span class="qian">{{item.shouldpay}}元</span></p>
                </div>
                <div>
                    <img class="img1" :src="placeholder1">
                </div>
            </div>
        </div>

        <div class="shu" v-show="isShow">暂无可预约商铺</div>
    </div>

</template>

<script>
import {httpUrl} from "../../api.js"
import { Loading, XButton} from 'vux'
import Header from "../home/header"
import placeholder1 from "../../assets/img/u15320.png"
import placeholder2 from "../../assets/placeholder.gif"
	export default {
		name: "appointment-item",
        data(){
            return{
                placeholder1,placeholder2,header:'预约',
                Data:[],imgUrl:'',isShow:false
            }
        },
        components: {
            Loading,
            XButton,
            "header-item": Header,
        },
        created(){
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
            this.imgUrl = httpUrl.imgUrl
            var token
            function get(token1) {
                var v = window.document.cookie.match('(^|;) ?' + token1 + '=([^;]*)(;|$)');
                v = true ? v[2] :null
                token = v
            }
            get('token')

                this.$http.post(httpUrl.dev + '/puman/api/appointment/list', { token } , { emulateJSON: true })
                .then(response => {
                    // console.log(response.body)
                    if(response.body.code == 200){
                        this.Data = response.body.appointment
                        if(response.body.appointment.length == 0){
                            this.isShow = true
                        }
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
                this.$router.push({name:'home'})
            },
            yuyue(index){
                var shopid = this.Data[index].shopid
                var pictures = this.Data[index].pictures
                // console.log(pictures)
                // console.log(shopid)
                this.$router.push({name:'shops',query:{shopids:shopid,picturess:pictures}})
            }
        }
	}
</script>

<style scoped>
.yuyue{
    width: 100%; height: 100vh; padding-top: 15vw;
}
.shu{
    text-align: center; margin-top: 30vw; font-size: 4.5vw; color: gray;
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
.xunze{
    display: inline-block;
    width: 100%; height: 13vw; font-size: 4.5vw; color: #999999;
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
    height: 100%; float: left;
    /*border:1px solid red; */
}
.pu>div:nth-child(1){
    width: 15vw; height: 15vw; text-align: center; margin-top: 1vw; margin-left: 3vw;
    line-height: 13vw;
}
.pu>div:nth-child(1)>img{
    width: 100%; height: 100%;
}
.pu>div:nth-child(2){
    width: 50vw; margin-left: 7vw; color: #666666; font-size: 4.5vw; margin-left: 10vw;
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
a{
    color: black;
}
a:hover{
    color: black; text-decoration: none;
}
a:focus{
    outline: none;
}

</style>