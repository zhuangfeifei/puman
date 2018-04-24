<template>
	
    <div class="yuyue" :style="note1">
        <nav id="nav">
            <div class="header">
                <i @click="history" class="fa fa-angle-left" aria-hidden="true"></i>
                <span>2017年方圆里业委会选举</span>
            </div>
        </nav>
        <div id="tu" :style="note">
            <div>
                <span>倒计时</span><span>{{newDate | data}}</span>
            </div>
            <div>已结束</div>
            <div class="liu1">
                <p>2016年方圆里项目业委会委员投票选举</p>
            </div>
        </div>
        
        <div class="liu">
            
            <div class="liu2">
                <p>选举时间： 2017.02.10 ~ 2017.03.03</p>
            </div>
            <div class="liu3">
                <p>描述本次业委会信息以及规则</p>
            </div>
            <div class="liu4">
                <span>业委会委员名单</span>
            </div>
            <div id="houxuan">
            <div class="houxuan">
                <ul class="list-unstyled">
                    <li>王先生 <span>151****3010</span></li>
                    <li>王先生 <span>151****3010</span></li>
                    <li>王先生 <span>151****3010</span></li>
                    <li>王先生 <span>151****3010</span></li>
                    <li>王先生 <span>151****3010</span></li>
                    <li>王先生 <span>151****3010</span></li>
                    <li>王先生 <span>151****3010</span></li>
                    <li>王先生 <span>151****3010</span></li>
                    <li>王先生 <span>151****3010</span></li>
                    <li>王先生 <span>151****3010</span></li>
                    <li>王先生 <span>151****3010</span></li>
                    <li>王先生 <span>151****3010</span></li>
                </ul>
            </div>
            </div>
            <div class="toupiao">
                <router-link to="/Firstround">
                    <div>
                        <span>首轮投票结果</span>
                        <span class="fa fa-angle-right"></span>
                    </div>
                </router-link>
                <router-link to="/Secondround">
                    <div>
                        <span>第二轮投票结果</span>
                        <span class="fa fa-angle-right"></span>
                    </div>
                </router-link>
                <router-link to="/Final">
                    <div>
                        <span>最终投票结果</span>
                        <span class="fa fa-angle-right"></span>
                    </div>
                </router-link>
            </div>
        </div>

    </div>


</template>

<script>
// import Bus from "../../Bus.js"
import placeholder from "../../assets/img/首页_1/u8975.jpg"
// import placeholder1 from "../../assets/img/kuozhan/hui.png"
	export default {
		name: "election-item",
        data(){
            return{
                placeholder,
                note: {
					backgroundImage: "url(" + require("../../assets/img/首页_1/u8971.jpg") + ")",
					backgroundRepeat: "no-repeat",backgroundSize: "100% 100%",
				},
                note1: {
				backgroundImage: "url(" + require("../../assets/img/1_我的/注册页面_背景.png") + ")",
				backgroundRepeat: "no-repeat",backgroundSize: "100% 100%",
			    },
                newDate: Date.now(),
            }
        },
        methods: {
            history() {
                history.go(-1)
            },
        },
        filters: {
            data: function (input) {
                var d = new Date(input);
                var year = d.getFullYear();
                var month = d.getMonth() + 1;
                var day = d.getDate() < 10 ? '0' + d.getDate() : '' + d.getDate();
                var hour = d.getHours();
                var minutes = d.getMinutes();
                var seconds = d.getSeconds();
                return year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + seconds;
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
    width: 100%; height: 15vw; color: white;
    position: fixed; top: 0; z-index: 10;
     background:rgba(0,0,0,0)
    /*border: 1px solid red;*/
}
#nav .header{
    width: 100%; height: 100%;
    text-align: center;
    line-height: 15vw;
} 
.fa-angle-left{
    float: left; margin-left: 5vw;
    font-size: 10vw;
    line-height: 15vw; color: white;
}
#nav .header span{
    margin-left: -8vw;
    font-size: 5.5vw; 
    line-height: 15vw;
}
#nav>img{
    margin-top: -5vw; width: 100%;
}

/**/
#tu{
    width: 90%; height: 40vw; margin: 0vw auto;
    font-size: 4vw; position: relative;
}
#tu div:nth-child(1){
    width: 70%; height: 10vw; float: left;
    line-height: 10vw; color: white;
    /*background-color: white;*/
}
#tu div:nth-child(2){
    width: 20%; height: 10vw; float: right;
    text-align: center; line-height: 10vw; color: white;
    /*background-color: white;*/
}
#tu div:nth-child(3){ clear: both;
    width: 80%; height: 6vw; text-align: center; line-height: 6vw; background-color: white; 
    position: absolute; top: 32vw; left: 10%; border-radius: 10vw; font-size: 3.5vw;
    box-shadow: 0 0.5vw 0.5vw gray;
}
.liu{
    width: 90%; font-size: 4vw; margin: 0 auto; 
}

.liu2{
    width: 100%; height: 10vw; margin-top: 1.5vw; background-color: white; border-radius: 1vw;
    text-align: left; line-height: 10vw; padding-left: 5vw; color: gray;
}
.liu3{
    width: 100%; height: 10vw; text-align: left; line-height: 10vw; padding-left: 5vw;
    margin-top: 1.5vw; background-color: white; border-radius: 1vw; color: gray;
}
.liu4{
    width: 100%; height: 10vw; line-height: 10vw; padding-left: 5vw;
    margin-top: 1.5vw; background-color: white; border-radius: 1vw; font-weight: 600;
}

#houxuan{
    width: 100%; height: 30vw; overflow: hidden; margin-top: 1.5vw; background-color: white; border-radius: 1vw;
}
.houxuan{
    width: 106%; height: 100%; overflow-y: auto; padding-top: 1vw;
    /*border:1px solid red; */
}
.list-unstyled{
    padding-left: 10vw; font-size: 4.5vw;
}
.list-unstyled span{
    float: right; margin-right: 15vw;
}

.toupiao{
    width: 100%; height: 35vw;
}
.toupiao div{
    width: 100%; height: 10vw; margin-top: 1.5vw; background-color: white; border-radius: 1vw;
    line-height: 10vw; font-size: 4vw; padding-left: 5vw; color: gray;
}
.fa-angle-right{
    float: right; height: 5vw; font-size: 7vw;
    margin-right: 5vw; margin-top: 2vw; color: mediumturquoise;
}
a{
    color: black;
}
a:hover{
    color: black; text-decoration: none;
}
a:focus{
    outline: none;
}

</style>