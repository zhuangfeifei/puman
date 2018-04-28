<template>
	
    <div class="yuyue">
        <header-item :headers="header"></header-item>
        <div class="tu" @click="detail">
            <div class="logo"><img :src="logo"></div>
            <div class="xx" v-if="bankcardssss">
                <span>{{bank}}</span><br><br><span>{{bankcard}}</span>
            </div>
        </div>
        
        <button @click="genhuan" type="button" class="btn">更换银行卡</button>
        
    </div>

</template>

<script>
import Header from "../home/header"
	export default {
		name: "shops-item",
        data() {
            return {
                bank:'',type:'',bankcard:'',header:'我的银行卡',logo:'',bankcardssss:''
            }
        },
        components: {
            "header-item": Header,
        },
        created(){
            var bank, type, bankcard
            function get(bank1, bankcard1) {
                var v = window.document.cookie.match('(^|;) ?' + bank1 + '=([^;]*)(;|$)');
                v = true ? v[2] : null
                bank = v
                // var v1 = window.document.cookie.match('(^|;) ?' + type1 + '=([^;]*)(;|$)');
                // v1 = true ? v1[2] : null
                // type = v1
                var v2 = window.document.cookie.match('(^|;) ?' + bankcard1 + '=([^;]*)(;|$)');
                v2 = true ? v2[2] : null
                bankcard = v2
            }
            get('bank', 'bankcard')
            // get('bank', 'type','bankcard')
            // this.type = decodeURI(decodeURI(type))
            this.bank = decodeURI(decodeURI(bank))
            this.bankcard = bankcard.substring(0,4) + '**********' + bankcard.substring(bankcard.length-4,bankcard.length)
            // console.log(this.bank)
            // console.log(this.type,this.bankcard)
            this.logo = this.$storage.getStore('logo')
            // console.log(this.logo)

            this.bankcardssss = bankcard
        },
        methods: {
            history() {
                history.go(-1)
            },
            genhuan(){
                this.$router.push({path:'Authentication',query:{status:1}})
            },
            detail(){
                this.$router.push({path:'Bankinformation'})
            }
        }
	}
</script>

<style scoped>
.center {
  padding-top: 10px;
  padding-left: 15px;
  color: green;
}
.yuyue{
    width: 100%;
}


/*商铺图*/
.tu{
    width: 90%; height: 30vw; margin-left: 5%; border-radius: 3vw; font-size: 4vw;
    margin-top: 18vw; color: black; border: 1px solid black;
}
.logo{
    width: 15vw; height: 15vw; border-radius: 50%; margin-left: 5vw; margin-top: 7.5vw; float: left;
}
.logo img{
    width: 100%; height: 100%; border-radius: 50%;
}
.xx{
    float: left; padding: 6vw;
}


.btn{
    width: 90%; height: 12vw; border-radius: 10vw; background-color: black; color: white;
    font-size: 4vw; position: absolute; bottom: 10vw; left: 5%;
}
a{
    color: black!important;
}
a:hover{
    text-decoration: none; color: black;
}
a:focus{
    outline: none;
}
</style>