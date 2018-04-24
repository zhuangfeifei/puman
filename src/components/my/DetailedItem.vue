<template>
	
    <div class="yuyue">
        <header-item :headers="header"></header-item>

        <div class="mingxi">
            <h4>商铺号：{{shopNo}}</h4>
            <div class="mingxi1">
                <div>日期</div><div>分配金额</div><div id="bu">分摊收益</div>
            </div>
            <div class="mingxi2" v-for="(item,index) in data" :key="index">
                <div>{{item.assignTime.substring(0,10)}}</div><div>{{item.actualAssignMoney}}</div><div>{{item.shareMoney}}</div>
            </div>
            <div class="mingxi3">
                <div>总收益</div><div>{{jinge}}</div><div>{{shouyi}}</div>
            </div>
        </div>
        
    </div>

</template>

<script>
import {httpUrl} from "../../api.js"
import Header from "../home/header"
import { Loading, XButton} from 'vux'
	export default {
		name: "detailed-item",
        data(){
            return{
                data:[],shopNo:'',jinge:'',shouyi:'',header:'收益明细'
            }
        },
        components: {
            Loading,
            XButton,
            "header-item": Header,
        },
        created(){
            var token
            function get(token1) {
                var v = window.document.cookie.match('(^|;) ?' + token1 + '=([^;]*)(;|$)')
                v = true ? v[2] :null
                token = v
            }
            get('token')
            var shopId = this.$route.query.shopId
            var jinge = 0 
            var shouyi = 0
            this.$http.post(httpUrl.dev + '/puman/api/rent/infos',{ token, shopId},{ emulateJSON:true })
            .then(response => {
                // console.log(response.body)
                if(response.body.code == 200){
                    if(response.body.shopInfos.length > 0){
                        this.data = response.body.shopInfos
                        this.shopNo = response.body.shopInfos[0].shopNo
                        for(var i = 0; i < this.data.length; i ++){
                            jinge += this.data[i].actualAssignMoney
                            shouyi += this.data[i].shareMoney
                        }
                        this.jinge = jinge.toFixed(2)
                        this.shouyi = shouyi.toFixed(2)
                    }
                }else{
                    this.$vux.loading.show({
                        text: response.body.message,
                    })
                    setTimeout(() => {
                        this.$vux.loading.hide()
                    },3000)
                }
            },response => {
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
    width: 100%; height: 100vh;
    padding-top: 15vw;
}




a:focus{
    outline: none;
}

h4{
    height: 12vw; line-height: 9vw; border-bottom: 0.3vw solid gainsboro; padding-left: 5vw;
}

.mingxi{
    width: 100%;
}
.mingxi1,.mingxi2{
  width: 100%; height: 10vw; border-bottom: 0.3vw solid gainsboro;
}
.mingxi1>div{
    float: left; width: 33%; text-align: center; line-height: 7vw; font-size: 4.3vw; border-right: 0.3vw solid gainsboro;
}
#bu{
    border-right: 0vw;
} 
.mingxi2{
    height: 12vw;
}
.mingxi2>div,.mingxi3>div{
    width: 33%; text-align: center; line-height: 12vw; font-size: 4.3vw; float: left;
}
.mingxi3>div{
    line-height: 14vw;
}
.mingxi3{
  width: 100%; height: 14vw; border-bottom: 0.3vw solid gainsboro; border-top: 0.3vw solid gainsboro; margin-top: 3vw;
}
</style>