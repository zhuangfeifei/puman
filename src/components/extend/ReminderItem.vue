<template>
	
    <div class="yuyue">
        <header-item :headers="header"></header-item>
        
        <div class="wenxin">
            <strong>温馨提示</strong>
            <div>（1） 根据我国《合同法》、《电子签名法》及其他法律法规的规定，电子合同与纸质合同具有同等的法律效力。</div>
            <div>（2） 合同是当事人基于信任，在协商的基础上意思表示一致的民事法律行为。合同履行过程中所产生的风险将由合同当事人自行承担，因此签约前请务必确认好合同相对的真实身份及合同内容，谨慎处理。</div>
            <div>（3）合同签约功能免费，不关联账户收款扣费，不收取保证金等其他费用。</div>
        </div>
        
        <router-link to="/Contract">
            <button @click="chuan" type="button" class="btn btn-info">开始</button>
        </router-link>
        
    </div>

</template>

<script>
import bus from "../../Bus.js"
import Header from "../home/header"
import placeholder1 from "../../assets/img/u15320.png"
import placeholder2 from "../../assets/placeholder.gif"
	export default {
		name: "password-item",
        data(){
            return{
                placeholder1,placeholder2,header:'签约',
            }
        },
        components: {
            "header-item": Header,
        },
        created(){
        },
        methods: {
            history() {
                this.$router.push({ name: 'sign' })
            },
            chuan(){
                this.$router.replace({name:"contract"})
            }
        }
	}
</script>

<style scoped>
.yuyue{
    width: 100%;
}



.wenxin{
    width: 100%; margin: 20vw 0; 
    /*border: 1px solid red;*/
}
strong{
    margin-left: 40%; font-size: 5.2vw;
}
.wenxin>div{
    width: 90%; margin: 5vw auto;
    font-size: 4vw;
}
.btn{
    width: 90%; height: 13vw; font-size: 4.5vw; margin-left: 5%;
}
a:hover{
    text-decoration: none;
}
a:focus{
    outline: none;
}
</style>