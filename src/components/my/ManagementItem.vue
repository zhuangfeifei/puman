<template>
	
    <div class="yuyue">
        <header-item :headers="header"></header-item>
        
        <div class="liu">
            <p>
                <span>商铺图片</span><span><img class="shangpu" :src="imgUrl + Data.pictures"></span>
            </p>
            <p>
                <span>商铺号</span><span>{{this.$route.query.shopsnumber}}</span>
            </p>
            <p>
                <span>商铺面积(m2)</span><span>{{Data.area}}</span>
            </p>
            <p>
                <span>商铺单价(元)</span><span>{{Data.price}}</span>
            </p>
            <p>
                <span>网签总价(元)</span><span>{{Data.totalprice}}</span>
            </p>
            <p>
                <span>所属项目</span><span>{{Data.proname}}</span>
            </p>
            <p>
                <span>买受人</span><span>{{Data.bugername}}</span>
            </p>
            <p>
                <span>权益人</span><span>{{Data.benfiter}}</span>
            </p>
            <p id="wang">
                <span>婚姻状况</span><span>{{Data.maritalstatus}}</span>
            </p>
            <!--<div class="wang"></div>-->
            <p>
                <span>网签编号</span><span>{{Data.signnumber}}</span>
            </p>
            <p>
                <span>契税(元)</span><span>{{Data.deedtaxpay}}</span>
            </p>
            <p>
                <span>维修基金(元)</span><span>{{Data.mainfundpay}}</span>
            </p>
            <p>
                <span>产证编号</span><span>{{Data.permintnum}}</span>
            </p>
            <p>
                <span>土地证编号</span><span>{{Data.landnumber}}</span>
            </p>
            <p>
                <span>不动产证编号</span><span>{{Data.estatescan}}</span>
            </p>
        </div>
        
    </div>

</template>

<script>
import {httpUrl} from "../../api.js"
import Header from "../home/header"
import { Loading, XButton} from 'vux'
import placeholder from "../../assets/placeholder.gif"
	export default {
		name: "shops-item",
        data(){
            return{
                placeholder,header:'产权管理',
                Data:'',imgUrl:''
            }
        },
        components: {
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
            // console.log(token)
            var shopsid = this.$route.query.shopsid
            this.$http.post(httpUrl.dev + '/puman/api/shops/details', { token, shopsid }, { emulateJSON: true })
                .then(response => {
                    // console.log(response.body)
                    if (response.body.code == 200) {
                        this.Data = response.body.shopinfo
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
            }
        }
	}
</script>

<style scoped>
.yuyue{
    width: 100%; padding-top: 15vw;
}




/**/
.liu{
    width: 100%; margin-top: 3vw;
    font-size: 4vw;
}
.liu>p{
    display: inline-block;
    width: 100%; height: 10vw;
    border-bottom:1px solid gainsboro;
    line-height: 8vw;
}
.liu>p>span:nth-child(1){
    margin-left: 5vw;
}
.shangpu{
    width: 8vw; height: 8vw; margin-top: -2vw;
    /*border: 1px solid red;*/
}
.liu>p>span:nth-child(2){
    float: right; margin-right: 5vw;
}

#wang{
    height: 12vw;
    border-bottom: 8px solid gainsboro;
}

a:focus{
    outline: none;
}
</style>