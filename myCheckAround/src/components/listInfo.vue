<template>
	<div id="listInfo">
		<header>
			<span class="left"><a  onclick ="javascript:history.go(-1);">く</a></span>
			<span class="center">{{checkNames}}</span>
			<span class="right"><img src="../static/images/images/bj_09.jpg"/></span>
		</header>
		<ul>
			<li v-for="data in list" @click="jumpToListInfo(data.id)">
				<h2>{{data.name}}</h2>
				<h4>{{data.address}}</h4>
				<span>{{data.distance/1000}}km</span>
			</li>
		</ul>
	</div>
</template>

<script>
	import axios from "axios";
	export default {
		name: 'listInfo',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
				list:[],
				checkNames:""
			}
		},
		//在钩子函数中进行ajax请求
		created () {
			//获取到传递过来的查询名字
			var checkNames = this.$route.query.checkNames;
			//console.log(checkNames)
			var url = "http://restapi.amap.com/v3/place/around?key=07a607e639a74622330881d3b15c39d7&location=116.29294252043677,40.03924047249981&keywords="+checkNames+""
			axios.get(url).then((res) => {
				this.checkNames = checkNames
				this.list = res.data.pois
//				console.log(res.data.pois.name)
			})
		},
		methods:{
			jumpToListInfo(checkNames){
				//console.log(names)
				this.$router.push({
					path:"/details",
					query:{'checkNames':checkNames}
				})
			}
		}
	}
</script>

<style scoped="scoped">
	header{
		width: 100%;
		height: 1.277777rem;
		background: url(../static/images/images/bj_03.jpg);
	}
	a{
		color: white;
	}
	header .left{
		font-size: 0.537037rem;
		line-height: 1.277777rem;
		padding: 0.297407rem 0.444444rem;
		border-right: 1px solid #ffa732;
	}
	header .center{
		font-size: 0.518518rem;
		color: white;
		margin-left: 0.425925rem;
		padding-left: 0.888888rem;
		background: url(../static/images/images/bj_06.jpg) no-repeat left center;
	}
	header .right{
		float: right;
		line-height: 1.277777rem;
		margin-right: 0.259259rem;
	}
	li{
		height: 2.148148rem;
		border-bottom: 1px solid silver;
	}
	li h2,li h4{
		margin-left: 0.296296rem;
		margin-top: 0.259259rem;
	}
	li h4{
		/*color: #c;*/
	}
	li span{
		float: right;
		margin-right: 0.277777rem;
	}
</style>