<template>
  <div id="index">
     <header1></header1>
     <search></search>
     <mains></mains>
     <!--<maps></maps>-->
  </div>
</template>

<script>
	import header from "./index/header.vue";
	import search from "./index/search.vue";
	import mains from "./index/main.vue";
//	import 
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
  	"header1":header,
  	"search":search,
		"mains":mains
  }
}
</script>

<style lang="scss">

</style>
