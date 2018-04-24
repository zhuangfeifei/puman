<template>
	
    <div class="yuyue">
        <nav id="nav">
            <div class="header">
                <i @click="history" class="fa fa-angle-left" aria-hidden="true"></i>
                <span>新增地址</span>
            </div>
        </nav>
        
        
        <div class="dizhi">
            <form class="form-horizontal" role="form">
                <div class="lianxi">
                    <label for="firstname" class="col-sm-2 control-label">联系人</label>
                    <input type="text" class="form-control" id="firstname" placeholder="请输入姓名">
                    <input class="magic-radio" type="radio" name="radio" id="r2" value="option2" checked>
                    <label for="r2" class="mo">先生</label>
                    <input class="magic-radio" type="radio" name="radio" id="r1" value="option1">
                    <label for="r1" class="mo">女士</label>
                </div>
                <div class="shouji">
                    <label for="lastname" class="col-sm-2 control-label">手机号</label>
                    <input type="text" class="form-control" id="lastname" placeholder="请输入手机号">
                </div>
                <router-link to="/Maps">
                <!--<a href="../../static/Ditu.html">-->
                    <div class="shouhuo">
                        <label for="firstname" class="col-sm-2 control-label">收货地址</label>
                        <div id="dizhi">
                            <i class="fa fa-map-marker" aria-hidden="true"></i>
                            <!--{{this.$route.query.address}}-->
                            {{zxc}}
                        </div>
                    </div>
                <!--</a>-->
                </router-link>
                 <div class="menpai">
                    <label for="firstname" class="col-sm-2 control-label">门牌号</label>
                    <input type="text" class="form-control" id="firstname" placeholder="详细地址">
                </div>
                <!--<router-link to="Address">-->
                    <button type="button" class="btn btn-primary">保存</button>
                <!--</router-link>-->
            </form>
        </div>
        
        
        

    </div>

</template>

<script>
import placeholder from "../../assets/img/首页_1/u8969.jpg"
import bus from "../../Bus.js";
	export default {
		name: "address-item",
        data(){
            return{
                placeholder,
                note: {
				backgroundImage: "url(" + require("../../assets/img/首页_1/inputradio.gif") + ")",
				backgroundRepeat: "no-repeat",
				backgroundSize: "100% 100%",backgroundPosition: "-5vw 0",
                },
                zxc:'',
            }
        },
        created(){
            bus.$on('asd',(value) => {
                bus.fg = value
            })
            this.zxc = bus.fg
        },
        methods: {
            history() {
                this.$router.push({path:'Address'})
            },
        },
        // beforeDestroy(){
        //     bus.$off('asd')
        // }
	}
</script>

<style scoped>
.yuyue{
    width: 100%; padding-top: 15vw;
}
/*顶部*/
#nav{
    width: 100%; height: 15vw;
    position: fixed; top: 0;
    background-color: white;
    border-bottom: 0.3vw solid gainsboro;
}
#nav .header{
    width: 100%; height: 100%;
    text-align: center;
    line-height: 15vw;
} 
.fa-angle-left{
    float: left; margin-left: 5vw;
    font-size: 10vw;
    line-height: 15vw; color: black
}
#nav .header span{
    margin-left: -8vw;
    font-size: 5.5vw; 
    line-height: 15vw;
}
#nav>img{
    margin-top: -5vw; width: 100%;
}
.xunze{
    display: inline-block;
    width: 100%; height: 13vw;
    line-height: 13vw; padding-left: 10vw;
}

/*地址*/
.dizhi{
    width: 100%; height: 75vw; font-size: 4vw;
    /*border: 1px solid red;*/
}
.form-control{
    width: 70%; margin-left: 20%;
}
label{
    float: left; line-height: 10vw;
    width: 25%;
}
.shouji{
    clear: both; width: 100%; height: 13vw;
    border-bottom: 0.3vw solid gainsboro; margin-top: 3vw;
}
.lianxi{
    width: 100%; height: 20vw;
    border-bottom: 0.3vw solid gainsboro;
    margin-top: 3vw;
}
.shouhuo{
    width: 100%; height: 13vw; margin-top: 3vw; line-height: 10vw;
    border-bottom: 0.3vw solid gainsboro;
}
.menpai{
    width: 100%; height: 13vw; margin-top: 3vw;
    border-bottom: 0.3vw solid gainsboro;
}
#firstname,#lastname{
    width: 70%; height: 10vw; font-size: 3.5vw;
}
.btn{
    /*position: absolute; bottom: 10vw;*/ margin-top: 40vw;
    width: 80%; height: 12vw; border-radius: 10vw;
    margin-left: 10%; font-size: 4.6vw;
}
.allmap{
    width: 300px; height: 30px;
    border: 0.3vw solid red;
}
a{
    color: black;
}
a:hover{
    color: black; text-decoration: none;
}
a:focus{
    outline-style: none;
}
.fa-map-marker{
    font-size: 5vw; color: gray; margin-right: 2vw;
}

#dizhi{
    width: 70%; height: 10vw; font-size: 4vw;
    overflow: hidden; text-overflow:ellipsis; white-space: nowrap;
}

@keyframes hover-color {
  from {
    border-color: #c0c0c0; }
  to {
    border-color: #3e97eb; } }

.magic-radio{
  position: absolute;
  display: none; }

.magic-radio[disabled]{
  cursor: not-allowed; }

.magic-radio + label{
  position: relative;
  display: block; line-height: 9vw;
  padding-left: 12vw;
  cursor: pointer;
  vertical-align: middle; }
  .magic-radio + label:hover:before{
    animation-duration: 0.4s;
    animation-fill-mode: both;
    animation-name: hover-color; }
  .magic-radio + label:before{
    position: absolute;
    top: 2vw;
    left: 5vw;
    display: inline-block;
    width: 5vw;
    height: 5vw;
    content: '';
    border: 0.3vw solid #c0c0c0; }
  .magic-radio + label:after{
    position: absolute;
    display: none;
    content: ''; }

.magic-radio:checked + label:before{
  animation-name: none; }

.magic-radio:checked + label:after{
  display: block; }

.magic-radio + label:before {
  border-radius: 50%; }

.magic-radio + label:after {
  top: 3vw;
  left: 6vw;
  width: 3vw;
  height: 3vw;
  border-radius: 50%;
  background: #3e97eb; }

.magic-radio:checked + label:before {
  border: 0.3vw solid #3e97eb; }

.magic-radio:checked[disabled] + label:before {
  border: 0.3vw solid #c9e2f9; }

.magic-radio:checked[disabled] + label:after {
  background: #c9e2f9;}
</style>