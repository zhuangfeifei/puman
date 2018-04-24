
<template>
	<div class="pu">
 
        <div class="qwe">
            <div class="kongge"></div>
            <nav>
                PUMAN
            </nav>
            <div class="container">
                <form>
                    <div class="form-group denlu">
                        <img class="xm" src="../../assets/img/login/icon_name_@2x.png">
                        <input type="text" name="phone" class="input1" placeholder="请输入手机号"  pattern="[0-9a-zA-Z\u4e00-\u9fa5]{2,11}"
                        />
                    </div>
                    <div class="form-group mima">
                        <img class="xm" src="../../assets/img/login/icon_password_@2x.png">
                        <input type="password" name="password" class="input1" placeholder="请输入密码"  pattern="[0-9a-zA-Z]{6,16}"
                        />
                    </div>
                    <p class="p">
                        <router-link to="/Password">
                            修改密码
                        </router-link>
                    </p>             
                    <!--<router-link to="/Home">-->
                        <button @click="login" type="button" class="form-control btn btn-white" >登录</button>
                        <router-link to="/Register">
                            <button class="form-control btn btn-white zhuce">注册</button>
                        </router-link>
                    <!--</router-link>-->
                
                </form>
                
            </div>
        </div>
        
    </div>
</template>
<script>
import { Loading, XButton} from 'vux'
import bus from "../../Bus.js"
import {httpUrl} from "../../api.js"
// import cookie from "../../cookie.js"
	//导入图片
	// import placeholder from "../assets/placeholder.gif";
    import placeholder1 from "../../assets/img/首页_1/3.png";
    import placeholder2 from "../../assets/img/首页_1/2.png";
	export default {
		name: 'login-item',
		// props: ['room'],
		data(){
			return {
				loaded: false,
				placeholder2,placeholder1,
                // note: {
				// 	backgroundImage: "url(" + require("../../assets/img/首页_1/3.png") + ")",
				// 	backgroundRepeat: "no-repeat",
				// 	backgroundSize: "100% 100%",
				// },  
			}
		},
        components: {
            Loading,
            XButton
        },
        created(){
            var phone, password
            function get(phone1, password1) {
                var v = window.document.cookie.match('(^|;) ?' + phone1 + '=([^;]*)(;|$)')
                v = true ? v[2] : null
                var v1 = window.document.cookie.match('(^|;) ?' + password1 + '=([^;]*)(;|$)')
                v1 = true ? v1[2] : null
                phone = v
                password = v1
            }
            get('phone', 'password')
            // console.log(phone, password)
            if (phone == null) {
                this.$vux.loading.show({
                    text: '账号过期，请重新登录'
                })
                setTimeout(() => {
                    this.$vux.loading.hide()
                }, 3000)
            }else{
                this.$http.post(httpUrl.dev + '/puman/api/system/login', { phone, password }, { emulateJSON: true })
                    .then(response => {
                        // console.log(response.body)
                        if (response.body.code == 200) {
                            this.cun(response)
                            this.$vux.loading.show({
                                text: '正在登录',
                            })
                            setTimeout(() => {
                                this.$vux.loading.hide()
                                this.$router.push({ name: 'home' })
                            }, 1000)
                        }else{
                            this.$vux.loading.show({
                                text: response.body.message
                            })
                            setTimeout(() => {
                                this.$vux.loading.hide()
                            }, 3000)
                        }

                    }, response => {
                        this.$vux.loading.hide()
                        this.$vux.loading.show({
                            text: '服务器异常',
                        })
                        setTimeout(() => {
                            this.$vux.loading.hide()
                        }, 3000)
                        // console.log('login网络异常')
                    })
            }
            
        },
        methods: {
            login() {
                this.$vux.loading.show({
                    text: '正在登录'
                })
                // 获取form的值
                var data={}
                var datas = $('form').serializeArray()
                // console.log(datas)
                $.each(datas, function(index) {
                    if (data[this['name']]) {
                        data[this['name']] = o[this['name']] + "," + this['value'];
                    } else {
                        data[this['name']] = this['value'];
                    }
                })
                // console.log(data)
                // 存
                function set(name, value, days) {
                    var d = new Date;
                    d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
                    window.document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString()
                }
                set('phone',data.phone,1)
                set('password',data.password,1)
                
                this.$http.post(httpUrl.dev + '/puman/api/system/login', data , { emulateJSON: true })
                    .then(response => {
                        // console.log(response.body)
                        if(response.body.code == 200){
                            this.cun(response)
                            // this.logins(token1)
                            setTimeout(() => {
                                this.$vux.loading.hide()
                                this.$router.push({ name: 'home' })
                            }, 1000)
                        }else{
                            this.$vux.loading.show({
                                text: response.body.message
                            })
                            setTimeout(() => {
                                this.$vux.loading.hide()
                            }, 3000)
                        }
                        
                    }, response => {
                        this.$vux.loading.show({
                            text: '服务器异常'
                        })
                        setTimeout(() => {
                            this.$vux.loading.hide()
                        },3000)
                        // console.log('失败')
                    })
                
            },
            cun(response){
                var token1 = response.body.token
                            var userId1 = response.body.user.id
                            var bugername1 = encodeURI(encodeURI(response.body.user.bugername))
                            var verificationStatus1 = response.body.user.verificationStatus
                            var identnumber1 = response.body.user.identnumber
                            var imgs = httpUrl.imgUrl + response.body.user.picture
                            var bankcard1 = response.body.user.bankNo
                            var bank1 = encodeURI(encodeURI(response.body.user.accountBankName))
                            // console.log(bankcard1)
                            function set(name, value, days) {
                                var d = new Date;
                                d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
                                window.document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
                            }
                            set('token', token1, 1)
                            set('userId', userId1, 1)
                            set('bugername', bugername1, 1)
                            set('verificationStatus', verificationStatus1, 1)
                            set('identnumber', identnumber1, 1)
                            set('img', imgs, 1)
                            set('bankcard', bankcard1, 1)
                            set('bank', bank1, 1)
            }
            // logins(token){
            //     function isObject(val) {
			// 		return val !== null && typeof val === 'object'
            //     }
            //     function setStore(key, val, type = 'localStorage') {
            //         if (isObject(val)) window[type].setItem(key, JSON.stringify(val))
            //         else window[type].setItem(key, val)
            //     }
            //     setStore('tokens',token)
            // }
        }		
	}
</script>
<style scoped>
@import "../../assets/vux.css";
.pu{
    width: 100%;
    /*border: 1px solid red;*/
}

.qwe{
    z-index: 50; position: absolute; top: 0;
    width: 100%;
}
.kongge{
    width: 100%; height: 10vh;
}
nav{
    width: 60%; height: 16vh; margin: 0 auto; letter-spacing: 1vw;
	text-align: center; font-size: 8vw; line-height: 16vh;
    color: white;
}
nav img{
    width: 43%; height: 100%
}
.denlu{
    margin-top: 10vw;
}
.form-group{
    border-bottom: 0.3vw solid #666666; position: relative;
    width: 90%; margin-left: 5%; overflow: hidden;
}
.mima{
     margin-top: 5vw;
}
.input1{
    border: 0 ; outline: none; background: none; font-size: 4vw; height: 10vw; width: 75%;
    color: #666666; margin-top: 2vw; position: relative; left: -4vw; bottom: 1vw;
}
input::-moz-placeholder{
    font-size: 4vw; color: #666666;
}
::-webkit-input-placeholder{
    font-size: 4vw; color: #666666;
}
.btn-white{
    border-radius: 20px; font-size: 4vw; border: 0;
    /*margin-top: 5vw;*/
    height: 12vw; 
}
.btn{
    font-size: 5vw; margin-top: 1vw; border-radius: 10vw; width: 60%;outline: none!important;
    background-color: #ff8b4b; color: white; 
}
.container{
    width: 100%; text-align: center; margin-top: 10vh;
}
.p{
    text-align: right; font-size: 4vw; margin-right: 5vw;
}
.container a{
    color: #666666;
    text-decoration: none;
}

.btn:hover{
    color: #666666;
}


/*模态框*/
#myModal{
    background: rgba(0,0,0,0)!important;
}
.modal-content{
    background: rgba(0,0,0,0.5)!important;
}
.modal-sm{
    width: 45vw; text-align: center; color: white; 
    margin: 35vh auto;font-size: 4.5vw;
}
#span{
    font-size: 6vw;
}
a:focus{
    outline: none;
}	


.xm{
    width: 8vw; height: 8vw; position: relative; left: -6vw; bottom: 1vw;
}
.zhuce{
    background: none; border: 0.3vw solid #666666;; color: #666666;; margin-top: 5vw;
}

</style>