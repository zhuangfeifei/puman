<template>
    <div class="home">
		<nav>
            <i @click="history" class="fa fa-angle-left" aria-hidden="true"></i>
        </nav>
        <img class="ye" src="../../assets/img/首页_1/zhuangshi@2x.png" alt="">
        <div class="xinxi">
            <!--<div class="imgs">
                <img class="su" src="../../assets/img/home/苏浙徽年夜饭预定@2x.png" alt="">
                <img class="ye" src="../../assets/img/home/zhuangshi@2x.png" alt="">
            </div>-->
            <div class="jianjie">
                流水、小桥、回廊、古亭，置身于苏浙徽精致的店堂，抄手游廊映着云霞明灭，粼粼水光衬着锦鳞游泳；
                苏菜，浙菜，徽菜，故乡的味道在舌尖依次盛开，这就是苏浙徽农家大院。
            </div>
            <h3>苏州店</h3>
            <div class="dian">
                <p>苏州相城店</p>
                <p>地址：相城区华元路818号方圆里</p>
                <p><a href="tel:0512-66159229">订餐电话：0512-66159229</a></p>
            </div>
            <div class="dian">
                <p>苏州吴江1店</p>
                <p>地址：苏州市吴江区中山南路2110号</p>
                <p><a href="tel:0512-63863777">订餐电话：0512-63863777</a></p>
            </div>
            <div class="dian">
                <p>苏州吴江2店</p>
                <p>地址：吴江区开平路3688水秀天地1-（411-413）</p>
                <p><a href="tel:0512-66159229">订餐电话：0512-66159229</a></p>
            </div>

            <h3>南通店</h3>
            <div class="dian">
                <p>星湖街区</p>
                <p>地址：南通开发区星湖街A区2栋</p>
                <p><a href="tel:0513-81525777">订餐电话：0513-81525777</a></p>
            </div>
            <div class="dian">
                <p>工农路店</p>
                <p>地址：南通市工农路490号</p>
                <p><a href="tel:0513-51019777">订餐电话：0513-51019777</a></p>
            </div>
            <div class="dian">
                <p>中南店</p>
                <p>地址：中南凤凰广场6F崇川路与崇文路口</p>
                <p><a href="tel:0513-81011777">订餐电话：0513-81011777</a></p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    components: {
        
    },
    created(){
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
    },
    methods:{
        history() {
            history.go(-1)
        },
    }
}
</script>
<style scoped>
.home{
    width: 100%; padding-bottom: 20vw;
    background: url('../../assets/img/首页_1/diwen@2x.png') no-repeat; background-size: 100% 95%;
     background-color: #002531;
}
/*顶部*/

.fa{
    float: left; margin-left: 5vw;
    font-size: 10vw; color: white;
    line-height: 14vw;
}
.ye{
    width: 100%; height: 50vw;
}
.xinxi{
    width: 90%; background-color: white; padding: 0 5vw; font-size: 4vw; letter-spacing: 0.3vw; padding-bottom: 10vw; margin-top: 20vw; margin-left: 5%;
    background: url('../../assets/img/首页_1/组3@2x.png') no-repeat; background-size: 100% 80%; padding-top: 46vh; background-color: white;
}
.imgs{
    width: 100%; text-align: center;
}
.su{
    width: 65vw; height: 11vw; margin-top: 8vw; 
}
.jianjie{
    /*text-indent: 2.4em; letter-spacing: 0.5vw;*/
}
h3{
    text-align: center; margin-top: 10vw; font-size: 5vw;
}
h3::before{
    content: '—'; margin: 0 3vw;
}
h3::after{
    content: '—'; margin: 0 3vw;
}
.dian{
    width: 100%; font-size: 4vw; line-height: 5vw;
}
.dian>p:nth-child(1){
    margin-top: 10vw;
}
p {
    text-indent: -3em;
    margin-left: 3em;
}
</style>


