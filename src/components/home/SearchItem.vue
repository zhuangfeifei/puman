<template>
	
    <div class="yuyue">
        
        <div id="box">
			    <!--<ul id="tab" @click="zhandan">
				    <li class="current">新闻资讯</li>
                    <li>推荐</li>
				    <li>网签办证</li>
				    <li>租金方案</li>
			    </ul>
			    <div class="content" style="display:block;">
                    <div class="tuijian">
                        <div :style="note"></div>
                        <div>
                            <p>网签办证需要注意什么</p>
                            <p><span>XXXXXXXX</span></p>
                            <p><span>2017-01-01</span></p>
                        </div>
                    </div>
                    <div class="tuijian">
                        <div :style="note"></div>
                        <div>
                            <p>网签办证需要注意什么</p>
                            <p><span>XXXXXXX</span></p>
                            <p><span>2017-01-01</span></p>
                        </div>
                    </div>
                    <div class="tuijian">
                        <div :style="note"></div>
                        <div>
                            <p>网签办证需要注意什么</p>
                            <p><span>XXXXXXX</span></p>
                            <p><span>2017-01-01</span></p>
                        </div>
                    </div>
                    <div class="tuijian">
                        <div :style="note"></div>
                        <div>
                            <p>网签办证需要注意什么</p>
                            <p><span>XXXXXXX</span></p>
                            <p><span>2017-01-01</span></p>
                        </div>
                    </div>
		        </div>
		        <div class="content">
		            2222222222222222222222
		        </div>
		        <div class="content">
		            33333333333333333333333333333333
		        </div>		
                <div class="content">
		            444444444444444444444444444444444444444444
		        </div>	-->
                暂无数据
		</div>
        
    </div>

</template>

<script>
// import placeholder from "../../assets/img/首页_1/u8969.jpg"
	export default {
		name: "search-item",
        data(){
            return{
                // placeholder,
                // note: {
				// 	backgroundImage: "url(" + require("../../assets/img/首页_1/u8967.jpg") + ")",
				// 	backgroundRepeat: "no-repeat",
				// 	backgroundSize: "100% 100%",
				// },
            }
        },
        methods: {
            history() {
                history.go(-1)
            },
            zhandan(){
		        var lis = document.querySelectorAll('#tab>li')
		        var divs = document.querySelectorAll('.content')
		        for(var i = 0 ; i < lis.length; i++){
			        lis[i].index = i
			        lis[i].onclick = function(){
				        for(var n = 0; n < lis.length; n++){
					        lis[n].className = ''
				        }
				        this.className = 'current'
				        for(var n = 0; n < divs.length; n++){
					        divs[n].style.display = 'none'
				        }
				        divs[this.index].style.display = 'block'
			        }
		        }
            }
        }
	}
</script>

<style scoped>
.yuyue{
    width: 100%; padding-top: 18vw;
}


#box {
    width: 100%; text-align: center; padding-top: 10vw; font-size: 5vw; color: gray;
    /*border: 1px solid red;*/
}

#tab {
    border-bottom: 0.6vw solid gainsboro; 
    width: 100%; height: 10vw;
    list-style-type: none; 
    display: flex; justify-content: space-around;
    padding: 0 5vw;
    /*border: 1px solid red;*/
    border-bottom: 0.3vw solid gray;
}
ul{
    margin: 0; padding: 0
}
#tab li {
    color: black; width: 20%; height: 10vw;
    display: inline-block; text-align: center;
    /*border: 1px solid red;*/
    line-height: 10vw; font-size: 4.5vw;
}
.content {
    display: none; width: 100%; font-size: 4vw;
    /*border: 1px solid blue;*/
}
.tuijian{
    width: 100%; height: 22vw; font-size: 4vw;
    border-bottom: 0.3vw solid gainsboro; 
    /*border: 1px solid red;*/
}
.tuijian:nth-child(1){
    margin-top: 1vw; border-top: 0.3vw solid gainsboro; 
}
.tuijian>div:nth-child(1){ 
    width: 30%; height: 14vw;
    float: right; margin-top: 3vw; margin-right: 5vw;
    /*border: 1px solid blue;*/
}
.tuijian>div:nth-child(2){
    width: 50%; height: 16vw;
    float: left; margin: 2vw 3vw;
    /*border: 1px solid blue;*/
}
.tuijian>div:nth-child(2)>p{
    margin: 0;
}
.current {
    color: black !important; font-weight: 600;
    border-bottom: 0.6vw solid black !important;
}
a:focus{
    outline: none;
}

</style>