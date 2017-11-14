<template>
  <div id="app">
    	<Header-footer></Header-footer>
  </div>
</template>

<script>
	import HeaderFooter from '@/components/HeaderFooter'
	export default {
	  name: 'app',
	  components:{
	  	HeaderFooter
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
