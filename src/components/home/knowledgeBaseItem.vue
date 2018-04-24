<template>
	
    <div class="yuyues">
        <header-item :headers="header"></header-item>


        <div id="xinwen">
            <h3 class="biaoti">{{xinweng.title}}</h3>
            <span>{{xinweng.createTime}}</span>
            <div id="xin" v-html="xinxi">
                <!--{{xinxi}}-->
            </div>
        </div>
        <!--<div>{{xinweng}}</div>-->
        
    </div>

</template>

<script>
import {httpUrl} from "../../api.js"
import bus from '../../Bus.js'
import Header from "../home/header"
import { Loading, XButton} from 'vux'
import placeholder1 from "../../assets/img/u15320.png"
import placeholder2 from "../../assets/placeholder.gif"
	export default {
		name: "information-item",
        data(){
            return{
                placeholder1,placeholder2,
                xinweng:'',xinxi:'',shibie:'',header:'知识库',
            }
        },
        components: {
            XButton,Loading,
            "header-item": Header,
        },
        created(){
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
            this.$vux.loading.show({
                text: '正在加载',
            })
            this.shibie = this.$route.query.shibie
            var token
            function get(token1) {
                var v = window.document.cookie.match('(^|;) ?' + token1 + '=([^;]*)(;|$)');
                if(v){
                    v = v[2]
                }else{
                    v=null
                }
                token = v
            }
            get('token')
            var newsId = this.$route.query.xinxis
            // console.log(newsId)
            this.$http.post(httpUrl.dev + '/puman/api/basic/news', { token:token, newsId:newsId} , { emulateJSON: true })
            .then(response => {
                this.$vux.loading.hide()
                // console.log(response.body)
                this.xinweng = response.body.news
                this.xinxi = response.body.news.content
                // .replace(/;/g,'').replace(/&gt/g,'>').replace(/&lt/g,'<').replace(/&apos/g,"'").replace(/&quot/g,"\\")
                // .replace(/&#39/g,"'").replace(/&ensp/g,"'").replace(/&emsp/g,"'").replace(/base64/g,';base64').replace(/&ampwxfrom/g,'&amp;wxfrom').replace(/&ampwx_lazy/g,'&amp;wx_lazy')
                // console.log(this.xinxi)
            },response => {

            })
        },
        methods: {
            history() {
                history.go(-1)
            }
        },
        filters:{
            filter(value){  
                // return value.replace(/&gt/g,'>').replace(/&lt/g,'<').replace(/&apos/g,"'").replace(/&amp/g,'&').replace(/&quot/g,"\\") 
            }
        }
	}
</script>

<style>
.yuyues{
    width: 100%;
}
#xinwen{
    width: 100%;
    margin-top: 15vw;
    padding-top: 2vw; font-size: 4vw;
}
#xin{
    font-size: 4vw; padding: 0 5vw 0 5vw;
    word-wrap:break-word;  
    word-break:break-all;  
    overflow: hidden;  
}
#xinwen>h3{
    margin-left: 5vw; font-weight: 600; font-size: 5vw;
}
#xinwen>span{
    margin-left: 5vw; color: gray;
}
#xin h1:nth-child(1){
    font-size: 4vw;
}
#xin img{
    max-width: 100%; max-height: 100%;
}









a:focus{
    outline: none;
}
</style>