<template>
	
    <div class="yuyue">
        <nav id="nav">
            <div class="header">
                <i @click="history" class="fa fa-angle-left" aria-hidden="true"></i>
                <span>绑定银行卡</span>
            </div>
        </nav>
        <div class="quanyi">
            <div class="quanyi1"><div>1</div><span>输入合同防伪编号</span> </div>
            <div class="quanyi2"><img :src="placeholder3"></div>
            <div class="quanyi3"><div>2</div><span>绑定银行卡</span></div>
        </div>
        <p class="xunze">请绑定持卡人本人的银行卡</p>
        <div class="xinxi">
            <div>
                <label>持卡人</label>
                <!--<div class="name">{{userName}}</div>-->
                <!--<input id="name" type="text" name="realName" required="required"/>-->
            </div>
            <div>
                <label>卡号</label>
                <input type="text" class="kahao" onkeyup="this.value=this.value.replace(/\D/g,'').replace(/....(?!$)/g,'$& ')" required="required"/>
            </div>
            <div>
                <label>身份证号码</label>
                <div>{{identnumber}}</div>
            </div>
        </div>
        <div class="xieyi">
            <div>
                <checklist class="check" required :options="commonList" v-model="checklist001" @on-change="change"></checklist>

                <div class="tongyi">
                    <span>同意</span>
                    <router-link to="">
                        <u>《服务协议》</u>
                    </router-link>
                </div>
            </div>
        </div>
        <!--<router-link to="/Verification">-->
            <button id="btn" type="button" class="btn btn-primary" @click="qwe">下一步</button>
        <!--</router-link>-->
    </div>

</template>

<script>
import { Loading, XButton} from 'vux'
import { Group, Checklist, Cell, Divider} from 'vux'
import placeholder1 from "../../assets/img/u15320.png"
import placeholder2 from "../../assets/placeholder.gif"
import placeholder3 from "../../assets/img/首页_1/u9088.png"
	export default {
		name: "security-item",
        data(){
            return{
                placeholder1,placeholder2,placeholder3,userName:'', isShow:false,userId:'',shopId:'',securityCode:'',identnumber:'',
                commonList: [''],
                checklist001: [],

            }
        },
        components: {
            Group,
            Checklist,
            Cell,
            Divider,
            XButton,
            Loading
        },
        created(){
            this.shopId = this.$route.query.shopIds
            this.securityCode = this.$route.query.securityCodes
            var userId,identnumber
            // function get(bugername1,userId1) {
            //     var v = window.document.cookie.match('(^|;) ?' + bugername1 + '=([^;]*)(;|$)')
            //     if(v){
            //         v = v[2]
            //     }else{
            //         v = null
            //     }
            //     bugername = v
            //     var v1 = window.document.cookie.match('(^|;) ?' + userId1 + '=([^;]*)(;|$)')
            //     if(v1){
            //         v1 = v1[2]
            //     }else{
            //         v1 = null
            //     }
            //     userId = v1
            // }
            // get('bugername',"userId")
            // this.userName = decodeURI(decodeURI(userName))
            this.userId = userId
            console.log(this.userId,this.shopId,this.securityCode)
        },
        methods: {
            history() {
                history.go(-1)
            },
            qwe(){
                var kahao = $('.kahao').val()
                var identnumber = this.identnumber
                this.$http.get('/shenfenzheng/apixcredit/idcheck/bankcard',{params:{type: 'bankcard_three', idcardno:identnumber, name:'庄飞飞', bankcardno:'6214835217020393'},
                headers:{'apix-key': '6e05499fcd7441556cad5a98c19eccb6'},emulateJSON: true}) 
                .then(response => {
                    // console.log(response.body)
                    if(response.body.code == 0){
                        this.$vux.loading.show({
                            text: response.body.msg,
                        })
                        // this.$http.post(httpUrl.dev + '/puman/api/rent/bind',{emulateJSON: true})
                        // .then(response => {
                        //     console.log(response.body)
                        // },response => {

                        // })
                        setTimeout(() => {
                            this.$vux.loading.hide()
                            // this.$router.push({ name: 'reminder' })
                        }, 1000)
                    }
                },response => {
                    // console.log(0)
                })
            },
            change(val) {
                var btn = $('#btn')
                if(this.isShow == false){
                    btn.attr("disabled", "true")  //关闭
                }
                if(this.isShow == true){
                    btn.removeAttr("disabled")  //开启
                }
                this.isShow = !this.isShow
            }
        }
	}
</script>

<style scoped>
.yuyue{
    width: 100%; height: 100vh; padding-top: 15vw;
}
/*顶部*/
#nav{
    width: 100%; height: 15vw;
    position: fixed; top: 0;
    background-color: white;
    border-bottom: 0.3vw solid gainsboro;
}
#nav .header{
    width: 100%; height: 100%;
    text-align: center;
    line-height: 15vw;
} 
.fa{
    float: left; margin-left: 5vw;
    font-size: 10vw;
    line-height: 15vw; color: black
}
#nav .header span{
    margin-left: -8vw;
    font-size: 5.5vw; 
    line-height: 15vw;
}
#nav>img{
    margin-top: -5vw; width: 100%;
}


.quanyi{
    width: 100%; height: 15vw; font-size: 4vw; display: flex; justify-content: space-around;
    /*border: 1px solid red;*/
}
.quanyi div{
    height: 15vw; 
    /*border: 1px solid red;*/
}
.quanyi1{
    width: 45%;height: 100%;
}
.quanyi1>div{
    width: 6vw; height: 6vw; border-radius: 50%; float: left; margin-top: 4.5vw; text-align: center;
    margin-left: 3vw; line-height: 6vw; background-color: blue; color: white;
}
.quanyi1>span{
    float: left; line-height: 15vw; margin-left: 2vw; color: blue;
}
.quanyi2{
    width: 10%;height: 100%; line-height: 15vw; text-align: center;
}
.quanyi2 img{
    width: 10vw;
}
.quanyi3{
    width: 35%; height: 100%;
}
.quanyi3>div{
    width: 6vw; height: 6vw; border-radius: 50%; float: left; margin-top: 4.5vw; text-align: center;
    background-color: blue; color: white;
}
.quanyi3>span{
    float: left; line-height: 15vw; margin-left: 2vw; color: blue;
}

.xunze{
    display: inline-block;
    width: 100%; height: 13vw; font-size: 4vw;
    line-height: 13vw; padding-left: 10vw;
}

/*商铺信息*/
.xinxi{
    width: 100%;
    /*border: 1px solid red;*/
}
.xinxi>div{
    width: 100%; height: 12vw;border-bottom: 0.3vw solid gainsboro;
    line-height: 12vw; font-size: 4vw; color: gray;
}
.xinxi>div:nth-child(1){
    border-top: 0.3vw solid gainsboro;
}
.xinxi label{
    margin-left: 5vw;
}
.touxiang{
    width: 13vw; height: 10vw; float: right; margin-right: 5vw; 
    border: 0.3vw solid blue; margin-top: 0.75vw;
}
.xinxi1{
    float: right; margin-right: 5vw;
} 
/*#name{
    width: 75%; height: 8vw; margin-left: 3vw; border:0; outline: none;
}*/
.name{
    width: 80%; height: 11vw; margin-left: 3vw; float: right;
}
.kahao{
    width: 80%; height: 8vw; margin-left: 3vw; border:0; outline: none;
}
.shouji{
    width: 65%; height: 8vw; margin-left: 3vw; border:0; outline: none;
}
.xieyi{
    width: 100%; height: 15vw; font-size: 4vw; position: relative;
    /*border:1px solid red;*/
}
.check{
    width: 30%; height: 5vw;
}
.tongyi{
    float: left; margin-left: 35vw; position: absolute; top: 3vw; left: -20vw;
}

.btn{
    width: 90%; height: 12vw; font-size: 4vw; margin-left: 5vw; outline: none!important;
}
.xieyi a{
    color: blue;
}
a:focus{
    outline: none;
}

</style>