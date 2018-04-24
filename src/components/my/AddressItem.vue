<template>
	
    <div class="yuyue">
        <nav id="nav">
            <div class="header">
                <i @click="history" class="fa fa-angle-left" aria-hidden="true"></i>
                <span>地址管理</span>
            </div>
        </nav>
        
        
        <div class="dizhi">
            <div>
                <div class="dizhi1">
                    <p><span>李先生</span><span>151****0000</span></p>
                    <span>江苏苏州相城区月星国际10室</span>
                </div>
                <div class="dizhi2">
                    <p>
                        <!--<label class="checkbox-inline">
                            <input type="radio" name="optionsRadiosinline" id="optionsRadios3" value="option1" checked>&nbsp;&nbsp;默认地址
                        </label>-->
                        <input class="magic-radio" type="radio" name="radio" id="r2" value="option2" checked>
			            <label for="r2" class="mo">默认地址</label>
                    </p>
                        <span class="fa fa-trash-o">&nbsp;&nbsp;删除</span>
                        <span class="fa fa-pencil-square-o">&nbsp;&nbsp;编辑</span>
                </div>
            </div>
            <div>
                <div class="dizhi1">
                    <p><span>李先生</span><span>151****0000</span></p>
                    <span>江苏苏州相城区月星国际10室</span>
                </div>
                <div class="dizhi2">
                    <p>
                        <!--<label class="checkbox-inline">&nbsp;&nbsp;默认地址
                            <span class="pay_list_c1 on" :style="note">
                                <input type="radio" checked="checked" name="paylist" value="1" class="radioclass">
                            </span>
                        </label>-->
                        <input class="magic-radio" type="radio" name="radio" id="r1" value="option1">
			            <label for="r1" class="mo">默认地址</label>
                    </p>
                        <span class="fa fa-trash-o">&nbsp;&nbsp;删除</span>
                        <span class="fa fa-pencil-square-o">&nbsp;&nbsp;编辑</span>
                </div>
            </div>
        </div>
        
        
        <router-link to="/Newaddress">
            <button type="button" class="btn btn-primary"><span class="glyphicon glyphicon-plus">
                </span>&nbsp;&nbsp;新建地址
            </button>
        </router-link>

    </div>

</template>

<script>
import placeholder from "../../assets/img/首页_1/u8969.jpg"
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
            }
        },
        methods: {
            history() {
                this.$router.push({path:'/Personal'})
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

/*地址*/
.dizhi{
    width: 100%; height: 60vw;
    /*border: 1px solid red;*/
}
.dizhi1{
    width: 100%; height: 18vw;
    border-bottom: 0.3vw solid gainsboro;
    padding: 1vw 5vw; font-size: 4.5vw;
}
.dizhi p span:nth-child(2){
    padding-left: 5vw;
}
.dizhi2{
    width: 100%; height: 10vw; font-size: 4vw; color: gray;
    border-bottom: 5px solid gainsboro;
}
.dizhi2>p{
    display: inline-block; 
    width: 30%; height: 10vw; line-height: 10vw;
}
.dizhi2 span{
    float: right; margin-right: 5vw; margin-top: 2vw;
}
/*.dizhi2 p .checkbox-inline{
    float: left; margin-top: -1vw;
}*/
.dizhi2 .fa{
    font-size: 4vw;
}
.btn{
    position: absolute; bottom: 10vw;
    width: 80%; height: 12vw; border-radius: 10vw;
    margin-left: 10%; font-size: 4.6vw;
}
a:focus{
    outline: none;
}

/*.pay_list_c1 {
width: 15vw; border:1px solid red;
height: 5vw;
float: left;
padding-top: 3px;
cursor: pointer;
text-align: center;
margin-right: 10px;

}
.radioclass {
opacity: 0;
cursor: pointer;
-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
filter: alpha(opacity=0);
}
.on {
background-position: 0 0;
}*/

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