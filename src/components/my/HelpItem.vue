<template>
	
    <div class="yuyue">
        <nav id="nav">
            <div class="header">
                <i @click="history" class="fa fa-angle-left" aria-hidden="true"></i>
                <span>帮助</span>
            </div>
        </nav>

        <div class="help"> 
            <h3>用户使用流程</h3>
            <p>1、点击首页底部的操作键</p>
            <img src="../../assets/img/dibu/+@2x.png">
            <p>2、签约—签署委托经营管理合同</p>
            <img src="../../assets/img/my/签约拷贝@2x.png">
            <p>3、提现—绑定权益人</p>
            <img src="../../assets/img/my/我的优惠券@2x.png">
            <p>4、返回首页，点击收益，可查看收益并提现</p>
            <img src="../../assets/img/tanchuang/icon_shouyi_@3x.png">
        </div>
    </div>

</template>

<script>
import {httpUrl} from "../../api.js"
import { Loading, XButton} from 'vux'
import placeholder1 from "../../assets/img/u15320.png"
import placeholder2 from "../../assets/placeholder.gif"
	export default {
		name: "help-item",
        data(){
            return{
                placeholder1,placeholder2,data:'',show:false
            }
        },
        created(){

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
    width: 100%; padding-top: 15vw;
}
/*顶部*/
#nav{
    width: 100%; height: 15vw;
    position: fixed; top: 0; color: white;
    background: url('../../assets/img/my/img_top.png') no-repeat; background-size: 100% 100%;
}
#nav .header{
    width: 100%; height: 100%;
    text-align: center;
    line-height: 15vw;
} 
.fa-angle-left{
    float: left; margin-left: 5vw;
    font-size: 10vw;
    line-height: 15vw;
}
#nav .header span{
    margin-left: -8vw;
    font-size: 5.5vw; 
    line-height: 15vw;
}
.xunze{
    display: inline-block;
    width: 100%; height: 13vw;
    line-height: 13vw; padding-left: 10vw;
}


.help{
    padding-left: 10vw; 
}
h3{
    font-size: 5.5vw;
}
p{
    font-size: 4.5vw; color: gray; margin-top: 8vw; word-wrap: break-word;
}
img{
    width: 11vw; height: 11vw; margin-left: 8vw; margin-top: 2vw;
}

</style>