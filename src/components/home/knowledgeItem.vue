<template>
	
    <div class="yuyue">
        <header-item :headers="header"></header-item>
        
        
        <div class="xinweng">
            <div class="xin">
            </div>
            <div @click="xiangqing(index)" v-for="(item,index) in xinweng" :key="index">
                <span>{{item.title}}</span>
                <img class="img1" :src="imgUrl + item.pictureName">
                <div class="jianjie">{{item.description}}</div>
                <p v-if="item.createTime" id="time">{{item.createTime | times}}</p>
            </div>

            <!--<div id="chakan">
                <span>查看更多</span>
            </div>-->
        </div>

        
    </div>

</template>

<script>
import {httpUrl} from "../../api.js"
import Header from "./header"
import { Loading, XButton} from 'vux'
	export default {
		name: "news-item",
        data(){
            return{
                xinweng:'',imgUrl:'',header:'知识库',
            }
        },
        components: {
            "header-item": Header,
        },
        created(){
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
            
            this.imgUrl = httpUrl.imgUrl
            // this.xinweng = this.$route.query.knowledgeBase.reverse()
            var token
            function get(token1) {
                var v = window.document.cookie.match('(^|;) ?' + token1 + '=([^;]*)(;|$)')
                v = true ? v[2] :null
                token = v
            }
            get('token')
            this.$http.post(httpUrl.dev + '/puman/api/basic/news', { token:token, type:'1' } , { emulateJSON: true })
                .then(response => {
                    // console.log(response.body)
                    this.xinweng = response.body.news.reverse()
                },response => {
                    this.$vux.loading.show({
                        text: '服务器异常',
                    })
                    setTimeout(() => {
                        this.$vux.loading.hide()
                    }, 3000)
                })
        },
        methods: {
            history() {
                history.go(-1)
            },
            xiangqing(index){
                var newsId = this.xinweng[index].id
                var shibie2 = 0
                this.$router.push({path:"knowledgeBase",query:{xinxis:newsId,shibie:shibie2}})
            },
        },
        filters:{
            times(val){
                return val.substring(0,10)
            }
        }
	}
</script>

<style scoped>
.yuyue{
    width: 100%; padding-top: 15vw; padding-bottom: 5vw;
}


.xinweng{
    clear: both;
    width: 100%; background-color: white;
    font-size: 3.5vw;
}
.xinweng>div{
    width: 90%; height: 31.1vw; margin-left: 5%;
    border-bottom: 0.3vw solid #dbdbdb; position: relative;
}
.xinweng>div:nth-child(1){
    width: 90%; height: 3vw; line-height: 13vw;
    border:0; font-size: 4.5vw;
}
.xinweng span{
    margin-left: 4vw; display: inline-block; width: 60%; margin-top: 2vw; color: #333333;
    overflow: hidden; text-overflow:ellipsis; white-space: nowrap; font-size: 4.4vw; font-weight: 600;
}
.jianjie{
    width: 60%; height: 10vw; float: left; margin-left: 4vw; margin-top: 1vw;  font-size: 4vw; color: #666666;
    display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; overflow: hidden; line-height: 5.5vw;
    /*border: 1px solid red;*/
}
.xinweng .img1{
    float: left; height: 26.1vw; width: 28vw; margin-top: 2.5vw;
}
#time{
    width: 25%;text-align: right; position: absolute; bottom: -2vw; right: 0; color: #666666; font-size: 3.5vw
}

/*查看*/
#chakan{
    width: 100%; height: 10vw; line-height: 10vw;
    text-align: center; margin-left: -1.8vw;
    border: 0;
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