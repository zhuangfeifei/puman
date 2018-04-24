<template>
	
    <div class="yuyue">
        <header-item :headers="header"></header-item>


            <div id="shangpu">
            <div @click="xiangqing(index)" class="pu" v-for="(item,index) in Data" :key="index">
                <div>
                    <img v-show="isShow" :src="imgUrl + item.pictures">
                </div>
                <div>
                    <p class="guan">{{item.proname}}&nbsp;-&nbsp;{{item.shopsnumber}}</p>
                    <br>
                    <p>{{item.area}}m²<span class="qian">{{item.shouldpay}}元</span></p>
                </div>
                <div v-show="item.status == 1" class="zhuangtai" :class="{zhuangtai1:item.status == 1}">
                    已通过
                </div>
                <div v-show="item.status == 0" class="zhuangtai">
                    待审核
                </div>
                <div v-show="item.status == -1" class="zhuangtai" :class="{zhuangtai2:item.status == -1}">
                    审核未通过
                </div>
            </div>
        </div>
        <div class="shu" v-show="isShow">暂无签约商铺</div>


            <router-link to="/Sign">
                <button type="button" class="btn">进入签约</button>
            </router-link>
        </div>
    </div>

</template>

<script>
import {httpUrl} from "../../api.js"
import Header from "../home/header"
import { Loading, XButton} from 'vux'
import placeholder2 from "../../assets/placeholder.gif"
	export default {
		name: "mycontract-item",
        data(){
            return{
                placeholder2,isShow:false,Data:'',img:'',header:'我的签约',
            }
        },
        components: {
            "header-item": Header,
        },
        created(){
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
            this.$vux.loading.show({
                text: '正在加载',
            })
            this.imgUrl = httpUrl.imgUrl
            var token
            function get(token1) {
                var v = window.document.cookie.match('(^|;) ?' + token1 + '=([^;]*)(;|$)');
                v = true ? v[2] :null
                token = v
            }
            get('token')
            // console.log(token)
            this.$http.post(httpUrl.dev + '/puman/api/delegatcontract/hasDelegatList', { token }, { emulateJSON: true })
                .then(response => {
                    // console.log(response.body)
                    this.$vux.loading.hide()
                    if (response.body.code == 200) {
                        this.Data = response.body.info
                        if(response.body.info.length == 0){
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
                history.go(-1)
            },
            xiangqing(index){
                var guan1 = this.Data[index].shopsnumber
                var proname1 = this.Data[index].proname
                var img1 = this.Data[index].written
                var shopsid1 = this.Data[index].shopsid
                // console.log(guan1)
                this.$router.push({name:'contracts',query:{guan:guan1, proname:proname1, img:img1, shopsid:shopsid1}})
            }
        }
	}
</script>

<style scoped>
.yuyue{
    width: 100%; padding-top: 15vw;
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
    width: 25vw; height: 8vw!important; text-align: center; line-height: 8vw; margin-top: 5vw; background-color: #ce9178; color: white;
}
.zhuangtai1{
    background-color: #3d6ed1;
}
.zhuangtai2{
    background-color: red;
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


.btn{
    width: 90%; height: 12vw; background-color: black; color: white;
    font-size: 4.5vw;
    position: fixed; bottom: 5vw; left: 5%;
}
a:focus{
    outline: none;
}

.shu{
    width: 30vw; height: 10vw; margin: 10vw auto; text-align: center; font-size: 5vw; color: gray;
}
</style>