<template>
	
    <div class="yuyue">
        <div class="yuyue1">
        <nav id="nav">
            <div class="header">
                <i id="fan" @click="history" class="fa fa-angle-left" aria-hidden="true"></i>
                <span>2017年方圆里业委会选举</span>
            </div>
        </nav>
        <div id="tu">
            <div>
                <span>倒计时:</span><span id="divdown1">{{time}}</span>
            </div>
            <div>进行中</div>
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
            <div class="liu4"  data-toggle="collapse" data-target="#demo">
                <span>第二轮投票</span><span>进行中</span>
            </div>

            
            <div class="houxuan collapse in" id="demo">
                
                <div class="liu5">
                    <a id="search" href="">
                        <span class="glyphicon glyphicon-search"></span>
                        搜索
                    </a>
                    <!--<div class="search-input-wrap clearfix">
                            <div class="form-input-wrap f-l">
                                <form action="" class="input-kw-form">
                                    <input type="search" autocomplete="off" name="baike-search" placeholder="请输入关键词" class="input-kw">
                                </form>
                                <i class="iconfont if-message"></i>
                                <i class="iconfont if-close"></i>
                            </div>
                            <i class="search-cancel f-l">取消</i>
                        </div>-->
                </div>

                <div class="houxuan1">
                    <div :style="note3"></div>
                    <div>
                        <p>
                            <span>王先生</span>
                            <span>151****1031</span>
                        </p>
                        <p>
                            <span>30%</span>
                        </p>
                    </div>
                    <div data-toggle="modal" data-target="#myModal">投票</div>
                </div>
                <div class="houxuan1">
                    <div :style="note3"></div>
                    <div>
                        <p>
                            <span>王先生</span>
                            <span>151****1031</span>
                        </p>
                        <p>
                            <span>30%</span>
                        </p>
                    </div>
                    <div data-toggle="modal" data-target="#myModal">投票</div>
                </div>
                <div class="houxuan1">
                    <div :style="note3"></div>
                    <div>
                        <p>
                            <span>王先生</span>
                            <span>151****1031</span>
                        </p>
                        <p>
                            <span>30%</span>
                        </p>
                    </div>
                    <div data-toggle="modal" data-target="#myModal">投票</div>
                </div>
                <div class="houxuan1">
                    <div :style="note3"></div>
                    <div>
                        <p>
                            <span>王先生</span>
                            <span>151****1031</span>
                        </p>
                        <p>
                            <span>30%</span>
                        </p>
                    </div>
                    <div data-toggle="modal" data-target="#myModal">投票</div>
                </div>
                <div class="houxuan1">
                    <div :style="note3"></div>
                    <div>
                        <p>
                            <span>王先生</span>
                            <span>151****1031</span>
                        </p>
                        <p>
                            <span>30%</span>
                        </p>
                    </div>
                    <div data-toggle="modal" data-target="#myModal">投票</div>
                </div>
                <div class="houxuan1">
                    <div :style="note3"></div>
                    <div>
                        <p>
                            <span>王先生</span>
                            <span>151****1031</span>
                        </p>
                        <p>
                            <span>30%</span>
                        </p>
                    </div>
                    <div data-toggle="modal" data-target="#myModal">投票</div>
                </div>
                <div class="houxuan1">
                    <div :style="note3"></div>
                    <div>
                        <p>
                            <span>王先生</span>
                            <span>151****1031</span>
                        </p>
                        <p>
                            <span>30%</span>
                        </p>
                    </div>
                    <div data-toggle="modal" data-target="#myModal">投票</div>
                </div>
            </div>
        </div>

        

        <!--返回顶部-->
        <div id="to_top" class="zxc" @click="hui"   >
            <!--<span class="fa fa-arrow-up"></span>-->
        </div>
        


        <!-- 模态框（Modal） -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="myModalLabel">投票给候选人</h4>
                <P class="piao"><span>王先生</span><span>151****1031</span></P>
            </div>
            <div class="modal-body">
                <textarea maxlength="200" onchange="this.value=this.value.substring(0, 200)" 
                onkeydown="this.value=this.value.substring(0, 200)" onkeyup="this.value=this.value.substring(0, 200)" 
                placeholder="请输入投票理由"></textarea>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary tijiao" data-toggle="modal" data-target="#myModal2">确定</button>
                <button type="button" class="btn btn-default guanbi" data-dismiss="modal">取消</button>
            </div>
        </div><!-- /.modal-content -->
    </div><!-- /.modal -->
</div>


<!-- 模态框（Modal） -->
<div class="modal fade" id="myModal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog">
		<div id="toupiao" class="modal-content">
			<div class="modal-header">
				<h4 class="modal-title" id="myModalLabel">
					确定投票吗？
				</h4>
			</div>
			<div class="modal-footer">
                <button type="button" class="btn btn-primary queding">确定</button>
				<button type="button" class="btn btn-default quxiao" data-dismiss="modal">取消</button>
			</div>
		</div><!-- /.modal-content -->
	</div><!-- /.modal -->
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
                note3: {
				backgroundImage: "url(" + require("../../assets/img/1_我的/touxiang.jpg") + ")",
				backgroundRepeat: "no-repeat",
				backgroundSize: "100% 140%",
			    }, 
                // newDate: Date.now(),
                time:''
            }
        },
        created(){
            // 回到顶部
            $(document).ready(function (){
                $('.yuyue1').scroll(function(){
                    if ($(this).scrollTop() >0){
                        $('#to_top').css('display','block');
                        $('#nav').css('backgroundColor','rgba(0,0,0,0.5)');
                    }
                    else{
                        $('#to_top').css('display','none');
                        $('#nav').css('backgroundColor','');
                    }
                })
            })
            // 倒计时
            var that = this;
            function ShowCountDown(year, month, day) {
                var now = new Date();
                var endDate = new Date(year, month - 1, day);
                var leftTime = endDate.getTime() - now.getTime();
                var leftsecond = parseInt(leftTime / 1000);
                // var day1=parseInt(leftsecond/(24*60*60*6)); 
                var day1 = Math.floor(leftsecond / (60 * 60 * 24));
                var hour = Math.floor((leftsecond - day1 * 24 * 60 * 60) / 3600);
                var minute = Math.floor((leftsecond - day1 * 24 * 60 * 60 - hour * 3600) / 60);
                var second = Math.floor(leftsecond - day1 * 24 * 60 * 60 - hour * 3600 - minute * 60);
                //var cc = document.getElementById('divdown1');
                // cc.innerHTML = "倒计时" + year + "年" + month + "月" + day + "日还有：" + day1 + "天" + hour + "小时" + minute + "分" + second + "秒";
                that.time = day1 + "天" + hour + "小时" + minute + "分" + second + "秒";
            }
            window.setInterval(function () { 
                ShowCountDown(2017, 8, 25); 
            }, 1000);
        },
        mounted(){
            
        },
        methods: {
            history() {
                history.go(-1)
            },
            hui() {
                $('.yuyue1').animate({
                    scrollTop: 0
                }, 200)
            },
            zijian(){
    //              $('#myModal').modal('hide');
    //              $('#myModal').on('hide.bs.modal', function () {
    //   alert('嘿，我听说您喜欢模态框...')})
            }
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
    width: 100%; background: url("../../assets/img/1_我的/注册页面_背景.png") no-repeat; 
    background-size: 100% 100%; height: 100vh; 
    overflow: hidden;
}
.yuyue1{
    width: 100%; height: 100%; padding-top: 15vw; 
    overflow-y: auto;
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
    width: 90%; height: 40vw; margin: 2vw auto; background: url("../../assets/img/首页_1/u8969.jpg") no-repeat; 
    background-size: 100% 100%;
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
    width: 100%; height: 9vw; background-color: white; border-radius: 1vw;
    text-align: left; line-height: 9vw; padding-left: 5vw; color: gray;
}
.liu3{
    width: 100%; height: 9vw; text-align: left; line-height: 9vw; padding-left: 5vw;
    margin-top: 0.5vw; background-color: white; border-radius: 1vw; color: gray;
}
.liu4{
    width: 100%; height: 9vw; line-height: 9vw; padding-left: 5vw;
    margin-top: 0.5vw; background-color: white; border-radius: 1vw; font-weight: 600;
}
.liu4 span:nth-child(2){
    float: right; margin-right: 20vw;
}
.liu5{
    width: 100%; height: 12vw;
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
/*input[type=search]::-webkit-search-cancel-button{
    -webkit-appearance: none;

    position: relative;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: #EBEBEB;
}

input[type=search]::-webkit-search-cancel-button:after{
    position: absolute;
    content: 'x';
    left: 25%;
    top: -12%;
    font-size: 20px;
    color: #fff;
}*/

.houxuan{
    width: 100%; padding-bottom: 20vw;
    /*border: 1px solid red;*/
}
.houxuan1{
    width: 100%; height: 17vw; background-color: white; border-radius: 1vw; margin-top: 0.2vw;
}
.houxuan1>div:nth-child(1){
    width: 12vw; height: 12vw; border-radius: 50%; float: left; margin: 2.5vw 5vw;
}
.houxuan1>div:nth-child(2){
    width: 50%; height: 100%; float: left; padding-top: 1.5vw;
}
.houxuan1>div:nth-child(2)>p{
    margin: 1vw;
}
.houxuan1>div:nth-child(3){
    width: 16vw; height: 6vw; float: left; background-color: lawngreen; margin-top: 5.5vw;
    border-radius: 5vw; text-align: center; line-height: 6vw; 
}



#to_top {
    position: fixed; width: 12vw; height: 12vw; border-radius: 50%; text-align: center; line-height: 15vw;
    bottom: 5vw; right: 3vw; background: url("../../assets/img/kuozhan/hui.png") no-repeat; background-size: 100% 100%;
    display: none;
}


.modal-dialog{
    width: 85%; font-size: 4vw; margin: 50% auto;
}
.modal-header{
    border: 0; text-align: center; height: 15vw; padding: 2vw;
}
.piao>span{
    margin: 0 2vw;
}
.modal-body{
    /*border: 1px solid red;*/
    height: 32vw; padding: 0;
}
.modal-footer{
    border: 0; display: flex; justify-content: space-around; height: 17vw;
}
.guanbi{
    border: 0.3vw solid gainsboro; width: 30%; height: 10vw; margin-top: -1vw; font-size: 4vw; 
}
.tijiao{
    width: 30%; height: 10vw; margin-top: -1vw; font-size: 4vw;
}
textarea{
    width: 90%; height: 90%; margin: 0 5%; resize: none;
}
#myModalLabel{
    font-size: 5vw;
}
#myModalLabel1{
    margin-top: 2vw; font-size: 5vw;
}

#zijian,#toupiao{
    width: 60%; margin: 80% auto; 
}
.queding{
    width: 40%; height: 10vw; font-size: 4vw;
}
.quxiao{
    width: 40%; height: 10vw; font-size: 4vw; border: 0.3vw solid gainsboro; 
}
</style>