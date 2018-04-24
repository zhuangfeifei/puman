// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
Vue.use(Vuex)
import store from './store'
Vue.prototype.$store = store

import BMap from "./assets/jQueryBaiduMap/map.jquery.js"
import BMap1 from "./assets/jQueryBaiduMap/jQuery-2.1.4.min.js"

import FontAwesome from "./assets/font-awesome-4.7.0/css/font-awesome.css"
import Bootstrap from "./assets/bootstrap/css/bootstrap.css"
import Bootstrap1 from "./assets/bootstrap/js/bootstrap.js"
import Bootstrap2 from "./assets/bootstrap/dist/bootstrapDatepickr-1.0.0.min.css"
import Bootstrap3 from "./assets/bootstrap/dist/bootstrapDatepickr-1.0.0.js"

import animate from "./assets/animate.css"



import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
  ak: 'EZPCgQ6zGu6hZSmXlRrUMTpr'
})

import {AlertPlugin,ToastPlugin,ConfirmPlugin,LoadingPlugin} from 'vux'
Vue.use(AlertPlugin)
Vue.use(ToastPlugin)
Vue.use(ConfirmPlugin)
Vue.use(LoadingPlugin)


import storage from './storage'
Vue.prototype.$storage = storage

//导入jQuery
import jQuery from 'jquery'
Vue.prototype.$ = jQuery
// import jquery from "./assets/jquery/jquery.validate.min.js"
// import jquery1 from "./assets/jquery/messages_zh.min.js"

// 导入layer
// import layer from 'vue-layer'
// Vue.prototype.$layer = layer(Vue);
// import Layer from "./assets/layui/css/layui.css"
// import Layer1 from "./assets/layui/lay/dest/layui.all"

//导入vue-resource模块用来跨域请求
import vueResource from 'vue-resource'
Vue.use(vueResource)

//定义全局的过滤器
// Vue.filter("formatNumber", function(v){
//   return (v / 10000).toFixed(2) + "万";
// })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
