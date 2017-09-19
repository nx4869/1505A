<template>
	<div id="app">
		<!--<index></index>-->
		<router-view></router-view>
	</div>
</template>

<script>
	import index from "./components/index.vue";
	export default {
		name: 'app',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		},
		components: {
			"index": index
		}
	}
</script>

<style scoped="scoped">

</style>