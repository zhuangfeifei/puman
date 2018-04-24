<template>
	
    <div class="yuyues">
        <header-item :headers="header"></header-item>


        <div id="xinwen">
            <h3 class="biaoti">{{this.$route.query.titles}}</h3>
            <span>{{this.$route.query.createTimes}}</span>
            <div id="xin" v-html="xinxi">
                <!--{{xinxi}}-->
            </div>
        </div>
        
        <div class="zan"><i :class="{zans:isThumbs == 1}" class="fa fa-thumbs-up" @click="dianzan()"></i>点赞</div>
        
        <div class="pinluan">
            <div class="quanbu"><span>全部评论</span></div>
            <div class="wu" v-if="pinl.length == 0">暂无评论</div>
            <div class="zhuti" @click="huifus(items.id)" v-for="(items,indexs) in pinl" :key="indexs">
                <div class="tou">
                    <div>
                        <img v-if="items.picture ==''" src="../../assets/img/login/80px_icon.png">
                        <img v-if="items.picture !=''" :src="imgUrl + items.avatar">  
                        <span>{{items.username}}</span>
                    </div>
                    <div>{{items.operatime}}</div>
                </div>
                <div class="neirong">
                    <div>{{items.content}}</div>
                    <div class="huifu" v-for="(item,index) in items.data" :key="index">
                        {{item.username}}：{{item.content}}
                    </div>
                </div>
            </div>
        </div>


        <div class="shuru">
            <div class="inputs">
                <input id="pingluan" v-model="value" type="text" placeholder="......">
            </div>
            <span v-show="show2" @click="fasong" id="pinhui">评论</span>
            <check-icon class="ni" :value.sync="checked" type="plain">匿名</check-icon>
            <span v-show="!show2" @click="fasong" id="pinhui">回复</span>
        </div>
        
    </div>

</template>

<script>
import {httpUrl} from "../../api.js"
import bus from '../../Bus.js'
import Header from "./header"
import { Loading, XButton,Toast,CheckIcon} from 'vux'
import placeholder1 from "../../assets/img/u15320.png"
import placeholder2 from "../../assets/placeholder.gif"
	export default {
		name: "information-item",
        data(){
            return{
                placeholder1,placeholder2,imgUrl:'',value:'',id:'',errors:'',isThumbs:1,
                xinxi:'',token:'',pinl:'',show: true,show2:true,
                header:'专题',checked: false,
            }
        },
        components: {
            XButton,Loading,Toast,
            "header-item": Header,CheckIcon
        },
        created(){
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
            this.imgUrl = httpUrl.imgUrl
            this.$vux.loading.show({
                text: '正在加载',
            })
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
            this.token = token
            
            this.shuaxing()

            this.isThumbs = this.$route.query.isThumbs

            this.huifu()

        },
        methods: {
            history() {
                history.go(-1)
            },
            shuaxing(){
                this.$http.post(httpUrl.dev + '/puman/api/seminar/detailById', { token:this.token,id:this.$route.query.ids } , { emulateJSON: true })
                .then(response => {
                    // console.log(response.body)
                    if(response.body.code == 200){
                        this.xinxi = response.body.data.content
                            .replace(/;/g,'').replace(/&gt/g,'>').replace(/&lt/g,'<').replace(/&apos/g,"'").replace(/&quot/g,"\\")
                            .replace(/&#39/g,"'").replace(/&ensp/g,"'").replace(/&emsp/g,"'").replace(/base64/g,';base64').replace(/&ampwxfrom/g,'&amp;wxfrom').replace(/&ampwx_lazy/g,'&amp;wx_lazy')
            
                    }else{
                        this.$vux.loading.show({
                                text: response.body.message,
                            })
                            setTimeout(() => {
                                this.$vux.loading.hide()
                            }, 3000)
                    }
                },response => {
                    this.$vux.loading.show({
                        text: '服务器异常',
                    })
                    setTimeout(() => {
                        this.$vux.loading.hide()
                    }, 3000)
                })
            },
            huifu(){
                this.$http.post(httpUrl.dev + '/puman/api/seminar/commentList', { token:this.token, seminarid:this.$route.query.ids,limit:20,current:1} , { emulateJSON: true })
                .then(response => {
                    this.$vux.loading.hide()
                    // console.log(response.body)
                    if(response.body.code == 200){
                        this.pinl = response.body.data.reverse()
                    }
                },response => {
                    this.$vux.loading.show({
                        text: '服务器异常',
                    })
                    setTimeout(() => {
                        this.$vux.loading.hide()
                    }, 3000)
                })
            },
            huifus(id){
                if(id != this.id){
                    this.show2 = !this.show2
                    if(this.show2){
                        this.id = ''
                    }else{
                        this.id = id
                    }
                }
                
            },
            fasong(){
                if(this.value != ''){
                    this.$vux.loading.show({
                        text: '正在发送',
                    })
                    var checked = 0
                    if(this.checked){
                        checked = 1
                    }
                    this.$http.post(httpUrl.dev + '/puman/api/seminar/comment', { token:this.token, seminarid:this.$route.query.ids,content:this.value,id:this.id,isAnon:checked} , { emulateJSON: true })
                    .then(response => {
                        // console.log(response.body)
                        if(response.body.code == 200){
                            this.huifu()
                            this.value = ''
                            this.checked = false
                            var result = '评论成功'
                            if(this.id != ''){
                                result = '回复成功'
                            }
                            this.$vux.toast.show({
                                text: result,
                            })
                        }else{
                            this.$vux.loading.show({
                                text: response.body.message,
                            })
                            setTimeout(() => {
                                this.$vux.loading.hide()
                            }, 3000)
                        }
                    },response => {
                        this.$vux.loading.show({
                            text: '服务器异常',
                        })
                        setTimeout(() => {
                            this.$vux.loading.hide()
                        }, 3000)
                    })
                }
            },
            dianzan(){
                if(this.isThumbs == 0){
                    this.like(1)
                }else{
                    this.like(-1)
                }
            },
            like(counts){
                this.$http.post(httpUrl.dev + '/puman/api/seminar/thumb', { token:this.token, seminarid:this.$route.query.ids, count:counts}, { emulateJSON: true })
                    .then(response => {
                        // console.log(response.body,+1)
                        if(response.body.code == 200){
                            if(counts == 1){
                                $('.fa-thumbs-up').css({ "color": 'red' })
                                this.isThumbs ++
                            }else{
                                $('.fa-thumbs-up').css({ "color": 'gray' })
                                this.isThumbs --
                            }
                        }else{
                            this.$vux.loading.show({
                                text: response.body.message,
                            })
                            setTimeout(() => {
                                this.$vux.loading.hide()
                            }, 3000)
                        }
                    }, response => {
                        this.$vux.loading.show({
                            text: '服务器异常',
                        })
                        setTimeout(() => {
                            this.$vux.loading.hide()
                        }, 3000)
                    })
            }
        },
        filters:{
            filter(value){  
                // return value.replace(/&gt/g,'>').replace(/&lt/g,'<').replace(/&apos/g,"'").replace(/&amp/g,'&').replace(/&quot/g,"\\") 
            }
        }
	}
</script>

<style scoped>
@import "../../assets/vux.css";
.yuyues{
    width: 100%; padding-bottom: 10vw;
}
#xinwen{
    width: 100%;
    margin-top: 15vw;
    padding-top: 2vw; font-size: 4vw;
}
#xin{
    font-size: 4vw; padding: 0 5vw 0 5vw; width: 100%; min-height: 65vh;
    word-wrap:break-word;  
    word-break:break-all;  
    overflow: hidden;  
}
#xinwen>h3{
    font-weight: 600; font-size: 5vw; padding-right: 5vw;
}
#xinwen>span{
    margin-left: 5vw; color: gray;
}






.wu{
    width: 100%; height: 10vw; text-align: center; color: gray; font-size: 3.5vw; line-height: 15vw;
}
.pinluan{
    width: 95%; margin: 0 2.5% 10vw 2.5%; font-size: 4vw;
    /*border: 1px solid red;*/
}
.quanbu{
    width: 100%; height: 10vw; font-size: 3.5vw; border-bottom: 1px solid gainsboro; line-height: 10vw;
}
.quanbu>span{
    border-bottom: 2px solid red; display: inline-block; height: 10vw;
}
.zhuti{
    width: 100%; margin: 0 auto;
}
.tou{
    width: 100%; height: 10vw; display: flex; justify-content: space-between; line-height: 10vw; margin-top: 2vw;
    font-size: 3.5vw; color: gray;
}
.tou img{
    width: 9vw; height: 9vw; border-radius: 50%; margin-right: 1vw;
}
.neirong{
    width: 90%; border-bottom: 1px solid gainsboro; margin: 0 auto; padding-left: 6vw; padding-bottom: 2vw;
}
.huifu{
    width: 105%; background-color: ghostwhite; color: gray; padding: 1vw 2vw 0 2vw; font-size: 3.5vw;
}


.shuru{
    width: 100%; height: 12vw; position: fixed; bottom: 0; border-top: 1px solid gainsboro; background-color: white;
}
.inputs{
    width: 60vw; height: 9vw; border: 1px solid gainsboro; float: left; position: relative; top: 1.5vw; left: 5vw; border-radius: 5vw;
}
input{
    width: 100%; height: 100%; outline: none!important; background:none!important; line-height: 5vw; padding-left: 3vw; 
    border: 0;
}
input:focus{outline:none;}
.shuru>span{
    float: right; font-size: 4vw; position: relative; right: 5vw; top: 3vw; color: #23af22;
}


.zan{
    width: 100%; height: 5vw; text-align: right; padding-right: 5vw; color: gray;
}
.fa-thumbs-up{
    font-size: 5vw;
}
.zans{
    color: red;
}

a:focus{
    outline: none;
}


.ni{
    position: relative; top: 3vw; left: 5vw;
}
</style>