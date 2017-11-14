<template>
  <div id="app">
    	<Home></Home>
  </div>
</template>

<script>
	import Home from '@/components/HelloFromVux'
	export default {
	  name: 'app',
	  components:{
	  	Home
	  }
	}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
html,body{
	
}
</style>
