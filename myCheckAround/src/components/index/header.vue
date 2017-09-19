<template>
	<div id="header">
		<header><img src="../../static/images/logo.png" /></header>
		<ul>
			<li @click="activeLi(1)" :class="{'liiActive':num==1}">常用</li>
			<li @click="activeLi(2)" :class="{'liiActive':num==2}">特色</li>
			<li @click="activeLi(3)" :class="{'liiActive':num==3}">搜索</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'header',
		data() {
			return {
				num: 3,
				msg: 'Welcome to Your Vue.js App'
			}
		},
		methods: {
			activeLi(nums) {
				this.num = nums;
			}
		}
	}
</script>

<style lang="scss">
	#header {
		width: 100%;
		height: 1.2rem;
		border-bottom: 1px dashed #cccccc;
		padding-bottom: 0.2rem;
		font-size: 0.55rem;
		background-color: #fffdf8;
		color: #a8a8a8;
		display: flex;
		justify-content: space-between;
	}
	
	#header img {
		/*margin-left: 0.208333rem;*/
		margin: 0.208333rem;
	}
	
	#header ul {
		float: right;
		line-height: 1.2rem;
	}
	
	#header ul li {
		float: left;
		width: 1.5rem;
		text-align: center;
	}
	
	#header .liiActive {
		color: #ff8506;
		border-bottom: 2px solid #ff8506;
	}
</style>