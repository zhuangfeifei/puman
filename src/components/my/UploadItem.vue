<template>
	
    <div class="yuyue">
        <nav id="nav">
            <div class="header">
                <i @click="history" class="fa fa-angle-left" aria-hidden="true"></i>
                <span>上传头像</span>
            </div>
        </nav>
        
        <div class="container">
        	<form>
        		<div class="form-group">
        			 <!--accept=""  支持的文件类型,选择时只能显示相应类型的文件-->
                     选择图片
        			<input id="upload" type="file" name="headImg" required=" required" accept=".jpg , .png , .gif" />
        		</div>
				<input @click="upload" type="button" value="上传头像" class="form-control btn btn-success" />
        	</form>
        </div>
        
    </div>

</template>

<script>
import {httpUrl} from "../../api"
import placeholder from "../../assets/img/首页_1/u8969.jpg"
	export default {
		name: "news-item",
        data(){
            return{
                placeholder,
            }
        },
        created(){
                
        },
        methods: {
            history() {
                history.go(-1)
            },
            upload(){
                var token
                function get(token1) {
                    var v = window.document.cookie.match('(^|;) ?' + token1 + '=([^;]*)(;|$)');
                    if (v) {
                        v = v[2]
                    } else {
                        v = null
                    }
                    token = v
                }
                get('token')
                var reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function(e) {
                    image_base64 = this.result.split(",")[1];
                    //就是base64   
                    article_image = image_base64;
                }  
                var file = new FormData(this)
                console.log(file)
                this.$http.post(httpUrl.dev + '/puman/api/system/upload',{ 'token':token, 'file': file} , { emulateJSON: true })
                .then(response => {
                    console.log(response.body)
                },response => {

                })
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



.container{
    width: 90%; height: 50vw; padding-top: 10vw; 
    /*border : 1px solid red;*/
}
#upload{
    position: absolute; left: 10vw; top: 0; opacity: 0;
}
input[type=button]{
    margin-top: 10vw; height: 10vw; font-size: 4vw; border-radius: 2vw;
}
.form-group{
    position: relative; width: 25vw; height: 10vw;
    display: inline-block; font-size: 4vw;
    background: #D0EEFF;
    border: 0.3vw solid #99D3F5;
    border-radius: 2vw;
    margin-left: 10vw; padding-left: 4.5vw;
    overflow: hidden;
    color: #1E88C7;
    text-decoration: none;
    text-indent: 0;
    line-height: 10vw;
}

a:focus{
    outline: none;
}
</style>