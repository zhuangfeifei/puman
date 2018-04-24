<template>  
  <div>  
    
	    <div class="ditu">
			<div class="ss">
				<input type="text" id="suggestId" name="address_detail" placeholder="搜索" class="input_style">
			    <span id="sou">搜索</span>
			</div>
			<div id="allmap"></div>
		</div>
		
		<div class="fujin">
			<div class="suo" v-for="(name,index) in msg" :key="index">
				<p @click="qwe($event.target.innerText)" class="title">{{name.title}}</p>
				<!--<p>{{name.address}}</p>-->
			</div>
		</div>

			
  </div>  
</template>  
<script>   
import {MP} from '../../map.js' 
import bus from "../../Bus.js"
export default {  
    components: {
		// comHeader  
	},
	data() {
		return {
			massage: '', msg: '',
		}
	},
	methods: {
		history() {
			history.go(-1)
		},
		qwe(event) {
			var suoValue = event
			bus.$emit('asd',suoValue)

			// var th = this;
			// setPlace(suoValue)
			// function setPlace(value) {
			// 	var map = new BMap.Map("allmap");
			// 	map.enableScrollWheelZoom();
			// 	map.clearOverlays();    //清除地图上所有覆盖物
			// 	function myFun() {
			// 		th.userlocation = local.getResults().getPoi(0).point;    //获取第一个智能搜索的结果
			// 		map.centerAndZoom(th.userlocation, 16);
			// 		map.addOverlay(new BMap.Marker(th.userlocation));    //添加标注
			// 	}
			// 	var local = new BMap.LocalSearch(map, { //智能搜索
			// 		onSearchComplete: myFun
			// 	});
			// 	local.search(value);
			// }
			// this.$router.replace({name:'newaddress',query:{address: suoValue}})
			this.$router.replace({name:'newaddress'})
		}
	},
	mounted() {
		this.$nextTick(function () {
			// this.tool = new BMap.Map("allmap");
			var that = this;
			
			MP("EZPCgQ6zGu6hZSmXlRrUMTpr").then(BMap => {
				var th = this
				var map = new BMap.Map("allmap");            // 创建Map实例
				// var point = new BMap.Point(116.404, 39.915); // 创建点坐标
				// map.centerAndZoom(point,15);

				map.centerAndZoom("苏州", 16);

				map.enableScrollWheelZoom(); //启用滚轮缩放

				// 周边
				var mOption = {
					poiRadius: 5000,           //半径为1000米内的POI,默认100米
					numPois: 120               //列举出50个POI,默认10个
				}
				var myGeo = new BMap.Geocoder();        //创建地址解析实例
				function POIs(poi) {
					// map.addOverlay(new BMap.Circle(poi,500));        //添加一个圆形覆盖物
					myGeo.getLocation(poi,function mCallback(rs) {
						var allPois = rs.surroundingPois;       //获取全部POI（该点半径为100米内有6个POI点）
						that.msg = allPois
						
						// for(var i =0; i <= allPois.length; i ++){
						// 	var all = new BMap.Marker(allPois[i].point)
						// 	map.addOverlay(all);   //添加标注
						// }
						
						// console.log(JSON.stringify(allPois));
					}, mOption);
				}
				
				//定位
				var geolocation = new BMap.Geolocation();
				geolocation.getCurrentPosition(function (r) {
					if (this.getStatus() == BMAP_STATUS_SUCCESS) {
						var mk = new BMap.Marker(r.point);
						map.addOverlay(mk);
						map.panTo(r.point);
						var myPoint = new BMap.Point(r.longitude, r.latitude); //获取定位的经纬度
						POIs(myPoint)
					}
					else {
						alert('failed' + this.getStatus());
					}
				}, { enableHighAccuracy: true })



				var ac = new BMap.Autocomplete(    //建立一个自动完成的对象
					{
						"input": "suggestId"
						, "location": map
					})
				var myValue
				ac.addEventListener("onconfirm", function (e) {    //鼠标点击下拉列表后的事件
					var _value = e.item.value;
					myValue = _value.province + _value.city + _value.district + _value.street + _value.business;
					this.address_detail = myValue
					setPlace(myValue);
				});

				function setPlace(value) {
					map.clearOverlays();    //清除地图上所有覆盖物
					function myFun() {
						th.userlocation = local.getResults().getPoi(0).point;    //获取第一个智能搜索的结果
						map.centerAndZoom(th.userlocation, 19);
						map.addOverlay(new BMap.Marker(th.userlocation));    //添加标注
						var point = new BMap.Point(th.userlocation.lng, th.userlocation.lat); //获取第一个智能搜索的经纬度
						POIs(point)
						console.log(th.userlocation)
					}
					var local = new BMap.LocalSearch(map, { //智能搜索
						onSearchComplete: myFun
					});
					local.search(value);
				}


				// 搜索
				var input = document.getElementById('suggestId')
				var sou = document.getElementById('sou')
				sou.onclick = function () {
					var souValue = input.value
					setPlace(souValue)
				};
			})
		})
	}
}  
</script>  
<style scoped> 
.ditu{
	width: 100%; 
} 
#suggestId{
	width: 60%; height: 8vw; margin: 3vw 2vw 3vw 10%; border-radius: 5vw; background:rgba(0, 0, 0, 0);
	border: 0.3vw solid gainsboro; padding-left: 5vw; float: left;
}
#allmap{
  width: 100%; height: 45vh;
}
.ss{
	width: 100%; display: flex;
}
#allmap .anchorBL {  
    display:none  
}
#sou{
	width: 20vw; height: 8vw; line-height: 14vw; font-size: 4.5vw;
}

.fujin{
	width: 100%; height: 83vw;
	overflow-y: auto;
}
.fujin .suo:nth-child(1){
	color: red;
}
.suo{
    margin-top: 2vw; font-size: 4vw; border-bottom: 0.3vw solid gainsboro; padding-left: 3vw;
	width: 100%; height: 8vw; line-height: 6vw;
}

/*.suo p{
	margin: 0;
}
.suo p:nth-child(2){
	overflow: hidden; text-overflow:ellipsis; white-space: nowrap;
}*/
</style>  