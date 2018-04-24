<template>
    <div class="yuyue">
        <tab class="tabs">
            <tab-item :selected="!index" v-for="(item,index) in zhuanti" :key="index" @on-item-click="onItemClick">{{item}}</tab-item>
        </tab>

        <div class="zhuti" v-for="(items,indexs) in faxian" :key="indexs">
            <div class="biaoti" @click="xiangqing(item)" v-for="(item,index) in items" :key="index">
                <div v-if="index == 0" class="ding">
                    <img :src="imgUrl + item.PICTURE_NAME" alt="">
                    <img class="ju" src="../../assets/img/find/juxing.png" alt="">
                    <div>
                        <p>{{item.TITLE}}</p>
                        <p>{{item.DESCRIPTION}}</p>
                    </div>
                </div>
                <div v-if="index > 0" class="logo" :style="{backgroundImage: 'url(' + imgUrl + item.PICTURE_NAME + ')'}"></div>
                <div v-if="index > 0"  class="jianjie">
                    <div>{{item.TITLE}}</div>
                    <div>{{item.DESCRIPTION}}</div>
                    <div>
                        <span>{{item.CREATE_TIME.substring(0,10)}}</span>
                        <div class="biao" :class="{biao1:item.BE_LIKED_NUM < 100}">
                            <img src="../../assets/img/home/pinglun@2x.png" alt=""><span>{{item.COMMENT_NUM}}</span>
                            <i :class="{zan:item.isThumb == 1}" class="fa fa-thumbs-up"></i>
                            <span v-if="item.BE_LIKED_NUM < 100">{{item.BE_LIKED_NUM}}</span>
                            <span v-if="item.BE_LIKED_NUM > 99">99</span><span v-if="item.BE_LIKED_NUM > 99" class="jiahao">﹢</span>
                            <!--<i :class="{zan:item.isThumb == 1}" @click.stop="dianzan(indexs,index)" class="fa fa-thumbs-up"></i><span>{{item.BE_LIKED_NUM}}</span>-->
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="shows" id="loading">
                <img v-if="!loading" src="../../assets/placeholder.gif" alt="">
                <span v-if="loading">没有更多了</span>
            </div>
    </div>
</template>

<script>
import {httpUrl} from "../../api.js"
import { Loading, XButton,Tab, TabItem} from 'vux'
	export default {
		name: "find-item",
        data(){
            return{
                faxian:'',token:'',imgUrl:'',number:'',zhuanti:[],
                limit:6,current:1,name:'',loading:false,dibu:1,shows:false,a:false
            }
        },
        components: {
            Loading,
            XButton,
            Tab,
            TabItem,
        },
        created(){
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0 
            $('#myModal').modal('hide')
            this.imgUrl = httpUrl.imgUrl
            var token
            function get(token1) {
                var v = window.document.cookie.match('(^|;) ?' + token1 + '=([^;]*)(;|$)');
                v = true ? v[2] : null
                token = v
            }
            get('token')
            this.token = token
            // console.log(token)
            this.$vux.loading.show({
                text: '正在加载',
            })
            this.shuaxing(this.name)
            if(this.dibu == 1){
                window.onscroll = this.didScroll;
            }
        },
        methods:{
            xiangqing(item){
                this.current = 1
                this.$router.push({name:"information",query:{ids:item.id,titles:item.TITLE,createTimes:item.CREATE_TIME,isThumbs:item.isThumb}})
            },
            dianzan(indexs,index){
                var token = this.token
                var thumb = this.faxian[indexs][index].isThumb
                var seminarid = this.faxian[indexs][index].id
                // console.log(indexs,index)
                var zans = $('.yuyue>div:nth-child(' + (indexs + 2) + ')>div:nth-child(' + (index + 1) + ') .fa-thumbs-up')
                var zxc = index
                if(thumb == 0){
                    zans.css({ "color": 'red' })
                    this.faxian[indexs][index].BE_LIKED_NUM ++
                    this.$http.post(httpUrl.dev + '/puman/api/seminar/thumb', { token, seminarid, count:1}, { emulateJSON: true })
                    .then(response => {
                        // console.log(response.body,+1)
                        if(response.body.code == 200){
                            this.faxian[indexs][index].isThumb += 1
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
                } else {
                    zans.css({ "color": 'gray' })
                    this.faxian[indexs][index].BE_LIKED_NUM --
                    this.$http.post(httpUrl.dev + '/puman/api/seminar/thumb', { token, seminarid, count:-1}, { emulateJSON: true })
                    .then(response => {
                        // console.log(response.body,-1)
                        if(response.body.code == 200){
                            this.faxian[indexs][index].isThumb -= 1
                        }else{
                            this.$vux.loading.show({
                                text: response.body.message,
                            })
                            setTimeout(() => {
                                this.$vux.loading.hide()
                            }, 3000)
                        }
                    }, response => {
                        // console.log(response.body)
                        this.$vux.loading.show({
                            text: '服务器异常',
                        })
                        setTimeout(() => {
                            this.$vux.loading.hide()
                        }, 3000)
                    })
                }
                
            },
            shuaxing(name){
                // console.log(this.current)
                this.$http.post(httpUrl.dev + '/puman/api/seminar/list', { token:this.token,limit:this.limit,current:'1',type:name } , { emulateJSON: true })
                .then(response => {
                    this.$vux.loading.hide()
                    // console.log(response.body.data.list)
                    if(response.body.code == 200){
                        if(response.body.data.list.length == 0){this.dibu ++}
                        // if(response.body.data.list.length > 0){
                            var a = []
                            a = response.body.data.titles.reverse()
                            a.push('推荐')
                            this.zhuanti = a.reverse()
                            // console.log(this.zhuanti)
                            var zhuanti = response.body.data.list.reverse()
                            var c = []
                            if(name == ''){ //推荐
                                for(var i = 0; i < zhuanti.length; ++i){
                                    if(zhuanti[i].RECOMMEND == 1){
                                        c.push(zhuanti[i])
                                    }
                                }
                                // console.log(c)
                                this.faxian = this.paiban(c)
                            }else{
                                this.faxian = this.paiban(zhuanti)
                            }
                        // }
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
            paiban(zhuanti){  //重新排数据
                var b = [];
                var result = [];
                var k = 0;
                for (var i = 0; i < zhuanti.length; ++i) {
                    if (i % 3 == 0) {
                        b = [];
                        for (var j = 0; j < 3; ++j) {
                            if (zhuanti[i + j] == undefined) {
                                continue;
                            } else {
                                b[j] = zhuanti[i + j];
                            }
                        }
                        result[k] = b;
                        k++;
                    }

                }
                return result

                
                // if(this.current > 1){
                //     this.loading = true
                //     var a = this.faxian
                //     var b = a.concat(result)
                //     this.faxian = b // 拼接数组
                //     // this.faxian = this.faxian.concat(result) // 拼接数组
                //     console.log('+++++')
                // }else{
                //     this.faxian = result
                //     // this.current ++
                //     console.log('------')
                // } 
                //     this.current ++
            },
            onItemClick(index){
                // console.log(index)
                this.current = 1
                this.dibu = 1
                this.loading = false
                this.shows = false
                if(index == 0){
                    this.shuaxing('')
                    this.name = ''
                }else{
                    this.name = this.zhuanti[index]
                    this.shuaxing(this.zhuanti[index])
                    // console.log(this.name)
                }
            },
            didScroll() {
                var allHeight = this.$(document).scrollTop() + this.$(window).height();
                var bodyHeight = this.$(document).height();

                // 如果到底部则请求数据
                if (allHeight >= bodyHeight && this.dibu == 1) {
                    this.shows = true
                    this.current ++
                    // this.shuaxing(this.name)
                    this.login()
                }
            },
            login(){
                this.$http.post(httpUrl.dev + '/puman/api/seminar/list', { token:this.token,limit:this.limit,current:this.current,type:this.name } , { emulateJSON: true })
                .then(response => {
                    // console.log(response.body.data.list)
                    if(response.body.code == 200){
                        if(response.body.data.list.length == 0){this.dibu ++}
                        // if(response.body.data.list.length > 0){
                            var zhuanti = response.body.data.list.reverse()
                            this.faxian = this.faxian.concat(this.paiban(zhuanti))
                            this.loading = true
                            this.shows = true
                        // }
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
	}
</script>

<style scoped>
.yuyue{
    width: 100%; padding-top: 15vw; padding-bottom: 17vw; 
    font-size: 4vw;
}

.tabs{
    height: 8vh;
}

.zhuti{
    width: 100%; margin-bottom: 1vh;
    /*border: 1px solid black;*/
}
.ding{
    width: 100%; height: 25vh; position: relative; left: -5%;
    /*background: url("../../assets/img/home/3.jpg") no-repeat;
    background-size: 100% 100%;*/
}
.ding img{
    width: 112%; height: 100%; margin-left: -1%;
}
.ju{
    position: absolute; top: 0; left: 0; z-index: 2;
}
.ding>div{
    position: absolute; bottom: 0; left: 0; z-index: 3; width: 110%; height: 15vw; color: white; padding: 0 3vw 0 5vw; 
    line-height: 5vw; font-size: 4vw;
    /*border: 1px solid red;*/
}
.ding>div>p:nth-child(1){
    font-size: 4.5vw; font-weight: 600;
}
.ding>div>p{
    display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 1; overflow: hidden;
}


.biaoti{
    width: 90%; border-bottom: 1px solid gainsboro; display: flex; justify-content: space-between;
    margin: 0 5%;
}
.biaoti .logo{
    width: 30vw; height: 14.6vh; margin: 1vh 0;
    background: no-repeat;
    background-size: 100% 100%;
}
.jianjie{
    width: 55vw; height: 15vh;
}
.jianjie>div:nth-child(1){
    width: 100%; height: 5.5vh; font-weight: 600; margin: 0; font-size: 5vw; line-height: 6vh;
    display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 1; overflow: hidden;
}
.jianjie>div:nth-child(2){
    width: 100%; height: 6vh; line-height: 3vh; font-size: 3vw;
    display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; overflow: hidden;
}
.jianjie>div:nth-child(3){
    width: 100%; height: 5vh; line-height: 5vh; display: flex; justify-content: space-between;
}

.biao{
    width: 60%; height: 100%; padding-left: 3vw; position: relative; left: 3vw;
}
.biao>img{
    width: 7vw; height: 5vw; margin-right: 1vw;
}
.jiahao{
    position: relative; top: -1vw; left: -1vw;
}
.biao1{
     position: relative; left: 5vw;
}


.fa-thumbs-up{
    font-size: 5vw; color: gray; margin-left: 2vw;
}
.zan{
    color: red;
}


#loading{
    width: 100%; height: 10vw; text-align: center; line-height: 10vw; margin-top: 3vw; color: gray;
}
#loading img{
    width: 8vw; height: 8vw;
}
</style>