<template>
	
    <div class="yuyue">
        <nav id="nav">
            <div class="header">
                <i @click="history" class="fa fa-angle-left" aria-hidden="true"></i>
                <span>扫描二维码</span>
            </div>
        </nav>
        
        <!--<input type='button' onclick='startRecognize()' value='创建扫描控件' />
		<input type='button' onclick='startScan()' value='开始扫描' />
		<input type='button' onclick='cancelScan()' value='取消扫描' />
		<input type='button' onclick='setFlash()' value='开启闪光灯' />
		<div id= "bcid"></div>
		<input type='text' id='text'/>-->
        
    </div>

</template>

<script>
import placeholder from "../../assets/img/首页_1/u8969.jpg"
// import {Scanning} from "../../Scanning.js"
	export default {
		name: "news-item",
        data(){
            return{
                placeholder,
            }
        },
        created(){
            // 扩展API加载完毕后调用onPlusReady回调函数 
document.addEventListener( "plusready", onPlusReady, false );
// 扩展API加载完毕，现在可以正常调用扩展API
function onPlusReady() {
	var e = document.getElementById("scan");
	e.removeAttribute( "disabled" );
}
var scan = null;
function onmarked( type, result ) {
	var text = '未知: ';
	switch(type){
		case plus.barcode.QR:
		text = 'QR: ';
		break;
		case plus.barcode.EAN13:
		text = 'EAN13: ';
		break;
		case plus.barcode.EAN8:
		text = 'EAN8: ';
		break;
	}
	alert( text+result );
}
function startRecognize() {
	scan = new plus.barcode.Barcode('bcid');
	scan.onmarked = onmarked; 
}
function startScan() {
	scan.start();
}
function cancelScan() {
	scan.cancel();
}
function setFlash() {
	scan.setFlash();
}
        },
        methods: {
            history() {
                history.go(-1)
            },
        },
        mounted(){

            // interface plus.barcode.Barcode {
            //     var scan = new plus.barcode.Barcode('mask');//创建
            // scan.start();//执行
            // scan.onmarked = function (type, result) {//成功回调
            //     console.log(result);
            // };
            // scan.onerror = function (error) {//失败回调
            //     console.log(error);
            // }

            // scan.onmarked = function (type, result) {
            //     if (result) {
            //         alert(result);
            //         scan.close();
            //         plus.storage.setItem('result', result);//这里使用storage来保存数据
            //         var wn = plus.webview.getLaunchWebview();//传递消息返回的webview
            //         wn && wn.evalJS("var result = plus.storage.getItem('result');document.querySelector('#a').innerText = result;");//引号里为指定窗口要执行的代码
            //         plus.webview.currentWebview().close();//扫码成功，关闭当前webview
            //     }
            // };

            // //添加本地图片
            // document.querySelector('#scan1 img').addEventListener('click', function () {
            //     plus.gallery.pick(function (path) {//调用本机图片
            //         console.log(path);
            //         plus.barcode.scan(path, onmarked, function (error) {//识别图片
            //             plus.nativeUI.alert(JSON.stringify(error));
            //         });
            //     }, function (err) {
            //         plus.nativeUI.alert('Failed: ' + err.message);
            //     });
            // })
            // }

            
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
    border-bottom: 1px solid gainsboro;
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

.new{
    width: 100%; font-size: 4.5vw;
}
.new div{
    text-align: center; margin-top: 5vw;
}
li{
    color: red; font-size: 5vw;
}
li>span{
    color: black; font-size: 4.5vw;
}

a:focus{
    outline: none;
}
</style>