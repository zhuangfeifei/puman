<template>
	
    <div class="yuyue">
        <nav id="nav">
            <div class="header">
                <i @click="history" class="fa fa-angle-left" aria-hidden="true"></i>
                <span id="tongzhi">通知</span><span @click="bianji" id="bianji" :class="{colors:checked}">编辑</span>
            </div>
            <div class="you">
                <div :class="{bei:beis == keyWords}" @click="change(keyWords)" v-for="(item,keyWords) in zhuangtai" :key="keyWords">{{item}}</div>
            </div>
        </nav>
        
        <router-view></router-view>
        
    </div>

</template>

<script>
import {httpUrl} from "../../api.js"
	export default {
        data(){
            return{
                data:'',
                zhuangtai:['通知','消息'],beis:0,
                chosenCoupon: -1,
                coupons: [],
                disabledCoupons: [],
                showList:true,
                couponsarry:[],dis:[],diss:[],disss:[],
            }
        },
        components: {
            // "header-item": Header,
        },
        computed:{
            checked(){
                return this.$store.state.bianji
            }
        },
        created(){
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
            
            this.coupons = this.couponsarry  // 第一次加载优惠卷
            this.disabledCoupons = this.disss

            
        },
        methods: {
            history() {
                history.go(-1)
            },
           change(index){
               this.beis = index
               if(index == 0){
                   this.$router.replace({path:'/News'})
               }else{
                   this.$router.replace({path:'/News/new'})
               }
           },
           bianji(){
                this.$store.commit('bianjis',!this.checked)
                if(this.checked){
                    $('#bianji').text('完成')
                }else{
                    $('#bianji').text('编辑')
                }
                this.checked = !this.checked
           }
        }
	}
</script>

<style scoped>
.yuyue{
    width: 100%; padding-top: 28vw;
}
/*顶部*/
#nav{
    width: 100%; height: 28vw;
    position: fixed; top: 0; z-index: 1000;
    background-color: white;
    border-bottom: 1px solid gainsboro;
}
#nav .header{
    width: 100%; height: 15vw;
    text-align: center;
    line-height: 15vw;
} 
.fa-angle-left{
    float: left; margin-left: 5vw;
    font-size: 10vw;
    line-height: 14vw; color: black
}
#nav .header span{
    font-size: 5vw; 
    line-height: 15vw;
}
#nav>img{
    margin-top: -5vw; width: 100%;
}
#tongzhi{
    position: relative; left: 2.5vw;
}
#bianji{
    float: right; margin-right: 2vw;
}


.you{
    width: 50%; height: 10vw; border: 0.5vw solid black; margin: 0 auto; border-radius: 1vw;
    display: flex; border-right: 0; font-size: 4.3vw; color: black;
}
.you>div{
    width: 50%; text-align: center; line-height: 9vw; border-right: 0.5vw solid black;
}
.bei{
    background-color: black; color: white;
}

.colors{
    color: #09bb07!important;
}



</style>