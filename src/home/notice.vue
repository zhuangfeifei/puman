<template>
	<div id="apps">
        <div v-show="notice" class="notice" v-for="(item,index) in notice" :key="index">
            <div v-show="checked" class="checkeds">
                <check-icon :value.sync="checked1[index]"></check-icon>
            </div>
            <div>
                <div class="tittle">
                    <span>{{item.title}}</span>
                    <span>{{item.createtime.substring(5,10)}}</span>
                </div>
                <div class="content">
                    {{item.content}}
                </div>
            </div>
        </div>
        
        <div v-show="checked" class="footer">
            <div class="Select"><check-icon :value.sync="checkeds">全选</check-icon></div>
            <div></div>
            <div @click="Read">标记已读</div>
        </div>
	</div>
</template>

<script>
import {httpUrl} from "../api.js"
import { CheckIcon  } from 'vux'
	export default {
        data(){
            return{
                checkeds:false,checked1:[],id:''
            }
        },
		computed:{
            checked(){
                return this.$store.state.bianji
            },
            notice(){
                return this.$store.state.notice
            },
        },
        components: {
            CheckIcon 
        },
        created(){
            // console.log(this.$store.state.notice)
            var array = []
            for (var i = 0; i < this.notice.length; i++) {
                array.push(false)
            }
            this.checked1 = array
        },
        methods:{
            Read() {
                var id = []
                for (var i = 0; i < this.checked1.length; i++) {
                    if(this.checked1[i]){
                        id.push(this.notice[i].id)
                    }
                }
                var ids = id.join(',')
                if(ids){
                    var token
                    function get(token1,userId1) {
                        var v = window.document.cookie.match('(^|;) ?' + token1 + '=([^;]*)(;|$)')
                        v = true ? v[2] :null
                        token = v
                    }
                    get('token')
                    // console.log(token)
                    this.$http.post(httpUrl.dev + '/puman/api/basic/markRead',{ 'token':token,ids:ids },{ emulateJSON: true})
                    .then(response => {
                        // console.log(response.body)
                        if(response.body.code == 200){
                            this.$vux.toast.show({
                                text: '标记成功',
                            })
                            setTimeout(() => {
                                this.$vux.loading.hide()
                            },3000)
                        }else{
                            this.$vux.loading.show({
                                text: response.body.message
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
                }
            },
        },
        watch:{
            checked(val,old){
                if(val){
                    $('.tittle').css('width','85vw')
                }else{
                    $('.tittle').css('width','95vw')
                }
            },
            checkeds(val,old){
                for(var i = 0; i < this.checked1.length; i ++){
                    this.checked1[i] = val
                }
            },
        },
        destroyed(){
            this.checkeds = false
            this.$store.commit('bianjis',false)
        },
	}
</script>

<style lang="less" scoped>
#apps{
    width: 100%; 
}
.notice{
    width: 100%; height: 15vh; padding: 1.5vh 1vh 0 1.5vh;
    border-bottom: 1px solid gainsboro; display: flex;
    .checkeds{
        width: 10vw; line-height: 12vh; position: relative; left: -1vw;
        // border: 1px solid red; 
    }
    .hangshu{
        display: -webkit-box; -webkit-box-orient: vertical; overflow: hidden;
    }
    .tittle{
        width: 95vw; height: 4vh; font-size: 4.5vw; font-weight: 600; margin: 0; display: flex; 
        justify-content: space-between; line-height: 4vh;
        span:nth-child(1){
            display: inline-block; width: 80%; .hangshu; -webkit-line-clamp: 1;
        }
        span:nth-child(2){
            margin-right: 2vw; color: gray; font-size: 3.8vw;
        }
    }
    .content{
        width: 100%; height: 7vh; color: gray; .hangshu; -webkit-line-clamp: 2; font-size: 4vw;
        position: relative; top: 1vw; line-height: 3.5vh;
    }
}

.footer{
    width: 100%; height: 8vh; position: fixed; bottom: 0; z-index: 10; display: flex; font-size: 4vw;
    border-top: 1px solid gainsboro; text-align: center; color: white; line-height: 8vh;
    div{
        width: 37.5%; height: 100%; background-color: black;
        // border: 1px solid red;
    }
    div:nth-child(2){
        background-color: white;
    }
    .Select{
        width: 25%; background-color: white;
        div{
            width: 100%; background-color: white; position: relative; left: -2vw;
        }
    }
}
</style>