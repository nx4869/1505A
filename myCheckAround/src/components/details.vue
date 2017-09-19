<template>
	<div id="app">
		<header>
			<div class="left">
				<a onclick="javascript:history.go(-1);">く</a>
			</div>
			<div class="right">☆ 〼 ☰</div>
		</header>
		<swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
			<!-- slides -->
			<swiper-slide v-for="data in urls"><img :src="data.url" /></swiper-slide>
			<!-- Optional controls -->
			<div class="swiper-pagination"></div>
		</swiper>
		<div class="body" v-for="data in list">
			<div class="top">
				<h1>{{data.name}}</h1>
				<span><span style="color: orange; margin-left: 0;">★★★★☆</span> 人均：￥{{data.biz_ext.cost}}</span>
			</div>
			<div class="center">
				<p @click="jumpToListInfo(data.location)">{{data.address}}</p>
				<span><img src="../static/images/images/bjt_05.jpg"/></span>
			</div>
			<div class="bottom">
				<div style="height: 0.307692rem;width: 100%;"></div>
				<p><span>劵</span>代金券</p>
				<span style="color: #5a9e8f;">￥{{lists.groupbuy_price}}</span>
				<span>代￥{{lists.original_price}}元</span>
				<span><p id="a">{{lists.title}}</p><span id="btn" @click="add()">>显示全部</span></span>

			</div>
		</div>
		<!--<footer v-for="data in list">
			当前：{{}}
		</footer>-->
	</div>
</template>

<script>
	//		import banner from "./banner/banner.vue";
	import axios from "axios";
	export default {
		name: 'app',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
				urls: [],
				list: [],
				lists: [],
				notNextTick: true,
				swiperOption: {
					autoplay: 3000,
					direction: 'horizontal',
					grabCursor: true,
					setWrapperSize: true,
					autoHeight: true,
					paginationClickable: true,
					autoplayDisableOnInteraction: false,
					loop: true,
					pagination: '.swiper-pagination',
				}
			}
		},
		created() {
			//获取到传递过来的查询名字
			var checkNames = this.$route.query.checkNames;
			//console.log(checkNames)
			var url = "http://restapi.amap.com/v3/place/detail?key=07a607e639a74622330881d3b15c39d7&id=" + checkNames + ""
			//var tThis = this;
			axios.get(url).then((res) => {
				this.urls = res.data.pois[0].photos
				this.list = res.data.pois
				this.lists = res.data.pois[0].rich_content.groupbuys[0]
				console.log(this.list)
			})

		},
		methods: {
			add(){
				var a = $("#btn").text()
				if(a == ">显示全部"){
					$("#a").css("white-space","initial")
					$("#a").css("width","95%")
					$("#btn").html("点击隐藏")
				}else{
					$("#a").css("white-space","nowrap")
					$("#a").css("width","6.410256rem")
					$("#btn").html(">显示全部")
				}
				
			},
			jumpToListInfo(checkNames){
				//console.log(names)
				this.$router.push({
					path:"/maps",
					query:{'checkNames':checkNames}
				})
			}
		}
	}
</script>

<style scoped="scoped">
	body {
		background-color: #f3f3f3;
	}
	
	header {
		width: 100%;
		height: 1.102564rem;
		font-size: 0.538461rem;
		background-color: black;
		opacity: 0.3;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 999;
	}
	
	header .left {
		color: white;
		float: left;
		line-height: 1.102564rem;
		margin-left: 0.25641rem;
	}
	
	a {
		color: white;
	}
	
	header .right {
		float: right;
		color: white;
		line-height: 1.102564rem;
	}
	
	img {
		height: 7.384615rem;
		width: 100%;
	}
	
	h1 {
		margin-top: 0.307692rem;
		margin-left: 0.307692rem;
		margin-bottom: 0.25641rem;
	}
	
	.body {
		background-color: #F3F3F3;
	}
	
	.body span {
		margin-left: 0.25641rem;
		font-size: 0.307692rem;
	}
	
	.top {
		background-color: white;
		padding-bottom: 0.307692rem;
		border-bottom: 1px solid #ececec;
	}
	
	.center {
		height: 1.487179rem;
		background-color: white;
		margin-bottom: 0.564102rem;
	}
	
	.center p {
		font-size: 0.410256rem;
		margin: 0.307692rem;
		padding-left: 0.76923rem;
		float: left;
		background: url(../static/images/images/bjt_03.jpg) no-repeat left center;
	}
	
	.center span img {
		float: right;
		width: 0.51282rem;
		height: 0.51282rem;
		margin-top: 0.307692rem;
		margin-right: 0.307692rem;
		padding-left: 0.307692rem;
		border-left: 1px solid #ececec;
	}
	
	.bottom {
		background-color: white;
		height: 7.692307rem;
	}
	
	.bottom p span {
		background-color: orange;
		padding: 0.153846rem 0.153846rem 0.076923rem 0.153846rem;
		border-radius: 0.151282rem;
	}
	
	.bottom p,
	.bottom p span {
		font-size: 0.410256rem;
		margin-bottom: 0.307692rem;
	}
	
	#a {
		margin: 0.307692rem;
		width: 6.410256rem;
		overflow: hidden;
		white-space: nowrap;
		/*white-space: initial;*/
		text-overflow: ellipsis;
		float: left;
		margin-right: 0.307692rem;
	}
	
	#btn {
		color: #5aa9a4;
		float: right;
		margin-top: 0.307692rem;
		font-size: 0.410256rem;
		margin-right: 0.307692rem;
	}
</style>