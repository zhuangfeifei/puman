<template>
	
    <div class="yuyue">
        <header-item :headers="header"></header-item>


        <div id="shangpu">
            <div @click="qianyuepu(index)" class="pu" v-for="(item,index) in Data" :key="index">
                <div>
                    <img v-show="show" :src="imgUrl + item.pictures">
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
        <div class="shu" v-show="isShow">暂无数据</div>
        <router-link to="/Equityholder1">
            <button class="btn code1" type="button">成为权益人</button>
        </router-link>
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
                placeholder1,placeholder2,imgUrl:'',
                Data:'',isShow:false,show:true,header:'我的商铺',
            }
        },
        components: {
            "header-item": Header,
        },
        created(){
            this.imgUrl = httpUrl.imgUrl
            var token
            function get(token1) {
                var v = window.document.cookie.match('(^|;) ?' + token1 + '=([^;]*)(;|$)');
                v = true ? v[2] :null
                token = v
            }
            get('token')
            // console.log(token)
            this.$http.post(httpUrl.dev + '/puman/api/shops/list', { token }, { emulateJSON: true })
                .then(response => {
                    // console.log(response.body)
                    if (response.body.code == 200) {
                        this.Data = response.body.shops
                        if(response.body.shops.length == 0){
                            this.isShow = true
                        }
                        // if(response.body.shops[0].pictures == ''){
                        //     this.show = false
                        // }
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
            qianyuepu(index){
                var shopsid1 = this.Data[index].shopsid
                var shopsnumber1 = this.Data[index].shopsnumber
                // function set(name, value, days) {
                //     var d = new Date;
                //     d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
                //     window.document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
                // }
                // set('shopsid', shopsid1, 1)
                this.$router.push({ name: 'management',query:{shopsid:shopsid1,shopsnumber:shopsnumber1} })
            },
            // quanyir(){
            //     this.$router.push({ name: 'equityholder',query:{ code:'1'} })
            // }
        }
	}
</script>

<style scoped>
.yuyue{
    width: 100%; height: 100vh;
    padding-top: 15vw;
}


/*商铺*/
#shangpu{
    width: 100%; font-size: 4vw; margin-top: 5vw; padding-bottom: 15vw;
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
    width: 50vw; margin-left: 7vw; color: #666666; font-size: 4.5vw;
}
.img1{
    width: 3vw; height: 8vw; margin-top: 4vw; margin-left: 10vw;
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

.btn{
    width: 90%; height: 12vw; margin: 0 5%; background-color: black; color: white;
    position: fixed; bottom: 5vw; font-size: 4.5vw;
}

.shu{
    width: 30vw; height: 10vw; margin: 50vw auto; text-align: center; font-size: 5vw; color: gray;
}
</style>