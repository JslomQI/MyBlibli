<template>
	<group title="">
      <cell :title="data.goodsName" is-link v-for="data in list" link="/detail/:{aaa}"></cell>
    </group>
</template>

<script>
	import { Group, Cell } from 'vux'
	export default {
	  components: {
	    Group,Cell
	  },
	  data () {
	    return {
	      // note: changing this line won't causes changes
	      // with hot-reload because the reloaded component
	      // preserves its current state and we are modifying
	      // its initial state.
	      //list:[],
	    }
	  },
	  mounted() {
//	  	this.$http({
//		  	method:"get",
//			url:"http://datainfo.duapp.com/shopdata/getGoods.php?callback="
//	  	}).then((data) => {
//	  		console.log(eval(data.data))
//	  		this.list = eval(data.data)
//	  	})
		var that = this
		this.$store.dispatch("getData", that);
	 },
	 computed:{
	 	list() {
	 		return this.$store.state.list
	 	}
	 }
	}
</script>

<style>
</style>