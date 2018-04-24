import Vue from 'vue'
import axios from 'axios'
import storage from './storage'
import {httpUrl} from "./api.js"
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        bianji:false,
        notice:[]
    },
    mutations: {
        bianjis(state, n) {
            state.bianji = n
        },
        notices(state, n) {
            state.notice = n
        }
    },
    getters: {
        notice(state) {
            var array = [], b = {}
            var a = state.notice
            for (var i = 0; i < a.length; i++) {
                b = {
                    buyerid: a[i].buyerid, content: a[i].content, createtime: a[i].createtime, id: a[i].id,
                    read: a[i].read, title: a[i].title, checked: false
                }
                array.push(b)
            }
            return array
        }
    },
    actions: {
        noticeNew({commit}){
            var token
            function get(token1) {
                var v = window.document.cookie.match('(^|;) ?' + token1 + '=([^;]*)(;|$)')
                v = true ? v[2] :null
                token = v
            }
            get('token')
            axios.post(httpUrl.dev + '/puman/api/basic/noticeList',{ 'token':token },{ emulateJSON: true})
            .then(response => {
                // console.log(response.data)
                if(response.data.code == 200){
                    var news = response.data.data.reverse()
                    commit('notices',news)
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
    }
})

export default store