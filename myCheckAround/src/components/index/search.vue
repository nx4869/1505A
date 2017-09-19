<template>
  <div id="search">
     <input type="text" placeholder="搜索您想找的" />
  </div>
</template>

<script>
export default {
  name: 'search',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
	#search input{
		margin-left: 2.5%;
		width: 85%;
		height: 0.894444rem;
		margin-top: 0.2rem;
		border-radius: 0.2rem;
		outline:none;
		font-size: 0.4rem;
		color: #d0d0d0;
		padding-left: 0.8rem;
		background: url(../../static/images/fangdajing.jpg) no-repeat left;
	}
</style>
