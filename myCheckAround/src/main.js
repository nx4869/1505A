import Vue from 'vue'
import App from './App.vue'
//这里是入口文件 

import VueAMap from 'vue-amap';
Vue.use(VueAMap);
// 初始化vue-amap
VueAMap.initAMapApiLoader({
	// 申请的高德key
  key: '07a607e639a74622330881d3b15c39d7',
  // 插件集合
  plugin: ['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType']
});

//引入使用rem的淘宝框架
import "./static/flexible.js"
import "./static/public.css"

//路由
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
require('swiper/dist/css/swiper.css')

//路由
import Router from "vue-router";
Vue.use(Router)

//访问路由路径所要加载进来的组件
import listInfo from "./components/listInfo.vue";
import index from "./components/index.vue";
import details from "./components/details.vue";
import maps from "./components/map.vue";

//配置路由
var route = new Router({
	routes:[
		//配置路由规则，根据不同的路径加载不同的组件
		{path:"/index",component:index},
		{path:"/listInfo",component:listInfo},
		{path:"/details",component:details},
		{path:"/maps",component:maps},
		//优先级要低一些
		{path:"/",component:index}
	]
})

new Vue({
  el: '#app',
  router:route,
  render: h => h(App)
})
