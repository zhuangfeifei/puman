<template>
	
    <div class="yuyue">
        <nav id="nav">
            <div class="header">
                <i id="fan" @click="history" class="fa fa-angle-left" aria-hidden="true"></i>
                <span>2017年方圆里业委会选举</span>
            </div>
        </nav>
        <div id="tu">
           <div>总投票人数：&nbsp;&nbsp;&nbsp;6000</div>
           <div>候选人名单：&nbsp;&nbsp;&nbsp;6000</div>
        </div>
        
        <div class="liu">
            <div class="liu5">
                <a id="search" href="">
					<span class="glyphicon glyphicon-search"></span>
					搜索
				</a>
            </div>
            <div class="houxuan">
                <div>
                    <span>姓名</span><span>联系电话</span><span>得票率</span>
                </div>
            </div>    
            <div class="houxuan">
                <div v-for="(houxuan,index) in houxuan" :key="index">
                    <span>{{houxuan.name}}</span><span>{{houxuan.telephone}}</span><span>{{houxuan.votingrate}}</span>
                </div>
            </div>
        </div>


    </div>


</template>

<script>
// import Bus from "../../Bus.js"
import placeholder from "../../assets/img/首页_1/u8975.jpg"
// import placeholder1 from "../../assets/img/kuozhan/hui.png"
	export default {
		name: "firstround-item",
        data(){
            return{
                placeholder,
                note2: {
				backgroundImage: "url(" + require("../../assets/img/1_我的/注册页面_背景.png") + ")",
				backgroundRepeat: "no-repeat",backgroundSize: "100% 100%",
			    },
                houxuan: [
                    {name:'王先生',telephone:'151****3010',votingrate:'20%'},
                    {name:'王先生',telephone:'151****3010',votingrate:'19%'},
                    {name:'王先生',telephone:'151****3010',votingrate:'18%'},
                    {name:'王先生',telephone:'151****3010',votingrate:'17%'},
                    {name:'王先生',telephone:'151****3010',votingrate:'16%'},
                    {name:'王先生',telephone:'151****3010',votingrate:'15%'},
                ]
            }
        },
        created(){
           
        },
        methods: {
            history() {
                history.go(-1)
            },
            zijian(){
    //              $('#myModal').modal('hide');
    //              $('#myModal').on('hide.bs.modal', function () {
    //   alert('嘿，我听说您喜欢模态框...')})
            }
        },
        // filters: {
        //     data: function (input) {
        //         var d = new Date(input);
        //         var year = d.getFullYear();
        //         var month = d.getMonth() + 1;
        //         var day = d.getDate() < 10 ? '0' + d.getDate() : '' + d.getDate();
        //         var hour = d.getHours();
        //         var minutes = d.getMinutes();
        //         var seconds = d.getSeconds();
        //         return year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + seconds;
        //     }
        // }
	}
    
</script>

<style scoped>
.yuyue{
    width: 100%; padding-top: 15vw; height: 100vh;
}
/*顶部*/
#nav{
    width: 100%; height: 15vw; color: black; border-bottom: 0.3vw solid gainsboro;
    position: fixed; top: 0; z-index: 10;
     /*background:rgba(0,0,0,0)*/
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
    line-height: 15vw; color: black;
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
    width: 100%; height: 18vw; display: flex; justify-content: space-around;
    background-color: gainsboro; 
}
#tu div{
    width: 40%; height: 10vw; background-color: white; text-align: center; line-height: 10vw; border-radius: 3vw;
    margin-top: 5vw; font-size: 4vw;
}
.liu{
    width: 100%; font-size: 4vw; background-color: gainsboro;
}
.liu5{
    width: 90%; height: 14vw; margin: 0 auto;
}
#search{
    display: inline-block; margin-top: 2vw; line-height: 8vw; 
    width: 100%; height: 8vw; border-radius: 10vw; background-color: white;
}
#search>span{
    margin-left: 5vw;
}
a{
    color: gray;
}
a:hover{
    color: gray; text-decoration: none; 
}
a:focus{
    outline: none;
}


.houxuan{
    width: 100%; background-color: white; border-bottom: 0.3vw solid gainsboro;
}
.houxuan div{
    width: 100%; height: 11vw; background-color: white; text-align: center;
    display: flex; justify-content: space-around; line-height: 11vw; font-size: 4.5vw;
}
.houxuan div>span:nth-child(1),.houxuan div>span:nth-child(3){
    display: inline-block; width: 20%;
}
.houxuan div>span:nth-child(2){
    display: inline-block; width: 40%;
}

</style>