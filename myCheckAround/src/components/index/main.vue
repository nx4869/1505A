<template>
	<div id="main">
		<ul class="left">
			<li v-for="(data,index) in leftArr" @click="activeLi(index)" :class="{'liiActive':num==(index)}">{{data.name}}</li>
		</ul>
		<ul class="right">
			<li v-for="(data,index) in RightArr" @click="jumpToListInfo(data.info)">
				<img :src="data.img" /> {{data.info}}
				<span v-show="data.whapp">{{data.whapp}}</span>
			</li>
		</ul>
	</div>
</template>

<script>
	import axios from "axios"
	export default {
		name: 'main',
		data() {

			return {
				//左側數組的空數組變量
				leftArr: [],
				RightArr: [],
				num: 0
			}
		},
		methods: {
			activeLi(nums) {
				this.RightArr = this.leftArr[nums].result;
				this.num = nums;
			},
			jumpToListInfo(checkNames){
				//console.log(names)
				this.$router.push({
					path:"/listInfo",
					query:{'checkNames':checkNames}
				})
			}

		},
		created: function() {
			var tThis = this;
			axios.get("../src/static/data.json").then(function(data) {
				//console.log(data);
				tThis.leftArr = data.data
				tThis.RightArr = data.data[0].result
			})
		}
	}
</script>

<style lang="scss">
	#main {
		margin-top: 0.148148rem;
		background-color: #f6f6f6;
		display: flex;
	}
	
	#main .left li {
		height: 1.777777rem;
		line-height: 1.777777rem;
		width: 2.444444rem;
		text-align: center;
		font-size: 0.555555rem;
		border-right: 1px solid #a8a8a8;
		border-bottom: 1px solid #a8a8a8;
		background-color: white;
	}
	
	#main .right img {
		width: 2.444444rem;
		height: 1.777777rem;
	}
	
	#main .right li {
		width: 7.425925rem;
		border-bottom: 1px solid #fdfcfa;
	}
	
	#main .right li span {
		float: right;
		line-height: 1.777777rem;
		margin-right: 5%;
	}
	
	#main ul li.liiActive {
		/*margin-left: 0.555555rem;*/
		background: url(../../static/images/bj.jpg) no-repeat left;
	}
</style>