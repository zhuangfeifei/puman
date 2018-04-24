<template>
	
    <div class="yuyue">
        <nav id="nav">
            <div class="header">
                <i @click="history" class="fa fa-angle-left" aria-hidden="true"></i>
                <span>签名</span>
            </div>
        </nav>


        <div id="qianming">
            <div class="qianming1">
                <button @click="clearCanvas" type="button" class="btn btn-info">清<br>除</button>
                <!--<router-link to="/Contract">-->
                <button @click="saveSignature" type="button" class="btn btn-info">确<br>认</button>
                <!--</router-link>-->
            </div>
            <div class="qianming2">
                
                <div class="js-signature" data-width="230" data-height="220"></div>

                <div id="signature"></div>

            </div>
        </div>

        <!--模态框-->
            <div class="modal fade bs-example-modal-sm" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-sm">
                    <div class="modal-content">
                        <div class="modal-body">
                            <p class="modal-bodys"></p>
                        </div>  
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default guanbi" data-dismiss="modal">关闭</button>
                            <button @click="queding" type="button" class="btn btn-primary queding"> 确定</button>
                        </div>
                    </div>
                </div>
            </div>
    </div>

</template>

<script>
import {qianming} from "../../assets/qianming/jq-signature.min.js"
import bus from "../../Bus.js"
import placeholder1 from "../../assets/img/u15320.png"
import placeholder2 from "../../assets/placeholder.gif"
	export default {
		name: "autograph-item",
        data(){
            return{
                placeholder1,placeholder2,
                img:''
            }
        },
        created(){
            $(document).ready(()=>{
                $('.js-signature').jqSignature()
            })
            $('.js-signature').on('jq.signature.changed', function() {
                $('#saveBtn').attr('disabled', false)
            })
        },
        methods: {
            history() {
                history.go(-1)
            },
            clearCanvas(){
                $('.js-signature').jqSignature('clearCanvas')
                $('#saveBtn').attr('disabled', true);
            },
            saveSignature(){
                $('#signature').empty();
                var dataUrl = $('.js-signature').jqSignature('getDataURL')
                var img = $('<img>').attr('src', dataUrl)
                $('#signature').append(img)
                $('.modal-bodys').text('确定签名？')
                $('#myModal').modal('show')
                this.img = dataUrl
            },
            queding(){
                $('#myModal').modal('hide')
                var img = this.img
                this.$router.push({name:'contract',query:{imgs:img}})
            }
        }
	}
</script>

<style scoped>
.yuyue{
    width: 100%;
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

/*签名*/
#qianming{
    width: 100%;
    margin-top: 15vw;
    /*border: 1px solid red;*/
    display: flex; justify-content: space-around;
    padding: 5vw;
}
.qianming1{
    width: 20%; height: 40vh;
    /*border: 1px solid red;*/
    margin-top: 20vw;
    float: left;
}
.qianming2{
    width: 70%; height: 70vh;
    /*border: 1px solid black;*/
    float: left;
}

#signature,.js-signature{
    width: 100%; height: 60vw;
}

.btn{
    width: 60%; height: 30vw; margin: 3vw;
    font-size: 4.5vw; padding-left: 3vw; outline:none!important;
}

#myModal{
    background: rgba(0,0,0,0)!important;
}
.modal-content{
    background: rgba(0,0,0,0.5)!important;
}
.modal-sm{
    width: 45vw; text-align: center; color: white; 
    margin: 35vh auto;font-size: 4.5vw; border: 0;
}
.modal-footer{border: 0; height: 15vw; padding: 0}
.guanbi{
    width: 35%; height: 10vw;float: left;padding: 0;
}
.queding{
    width: 35%; height: 10vw;padding: 0;
}
a:focus{
    outline: none;
}


</style>