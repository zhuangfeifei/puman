<template>
	
    <div class="yuyue">
        <header-item :headers="header"></header-item>


        <div id="shangpu">
            <div class="pu" v-for="(item,index) in data" :key="index">
                <p>{{item.shopsnumber}}</p>
                <p class="neirong">{{item.remarks}}</p>
                <p>预约时间：{{item.appointtime}}</p>
            </div>


            <router-link to="/Appointment">
                <button type="button" class="btn">进入预约</button>
            </router-link>
        </div>
        <div v-show="show" class="zanwu">暂无预约</div>
    </div>

</template>

<script>
import {httpUrl} from "../../api.js"
import Header from "../home/header"
import { Loading, XButton} from 'vux'
import placeholder1 from "../../assets/img/u15320.png"
import placeholder2 from "../../assets/placeholder.gif"
	export default {
		name: "mycontract-item",
        data(){
            return{
                placeholder1,placeholder2,header:'我的预约',data:'',show:false
            }
        },
        components: {
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
            this.$http.post(httpUrl.dev + '/puman/api/appointment/hasAppointmentList',{ token },{ emulateJSON: true})
            .then(response => {
                // console.log(response.body)
                if(response.body.code == 200){
                    this.data = response.body.appointment
                    if(response.body.appointment.length == 0){
                        this.show = true
                    }
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
    width: 100%;
}
.zanwu{
    text-align: center; font-size: 5vw; color: gray; margin-top: 25vw;
}

/*商铺*/
#shangpu{
    width: 100%;
    margin-top: 15vw;
    padding-top: 2vw; font-size: 4vw;
    /*border:1px solid red;*/
}
.pu{
    width: 90%; padding-left: 10vw; margin-top: 5vw;
}
.neirong{
    word-wrap: break-word;
}


.btn{
    width: 90%; height: 12vw; background-color: black;
    font-size: 4.5vw; color: white;
    position: fixed; bottom: 5vw; left: 5%;
}
a:focus{
    outline: none;
}
</style>