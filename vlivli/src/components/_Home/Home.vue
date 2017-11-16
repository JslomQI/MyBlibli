<template>
	<div>
		<tab :line-width="3" custom-bar-width="40px">
	      <tab-item selected @click.native="clickMe('')">	直播</tab-item>
	      <tab-item @click.native="clickMe('Groom')">		推荐</tab-item>
	      <tab-item @click.native="clickMe('AfterTribes')">	追番</tab-item>
	      <tab-item @click.native="clickMe('film')">		影视</tab-item>
	      <tab-item @click.native="clickMe('SpecialColumn')">专栏</tab-item>
	    </tab>
		<router-view></router-view>
	</div>
</template>

<script>
	import { Tab, TabItem } from 'vux'
	export default {
	  components: {
	  	 Tab, TabItem
	  },
	  data () {
	    return {
	    }
	  },
	  methods: {
  		clickMe: function (asd){
			this.$router.push({path:'/'+ asd})
//			this.$router.go('/AfterTribes');
	  	}
	  },
	  mounted() {
	  	
	 },
//	 computed:{
//	 }
	}
</script>

<style>
	@import url("../../assets/lib/newPublic.css");
	.child-view .vux-tab{
		background-color: #FB7299;
	}
	.child-view .vux-tab .vux-tab-item.vux-tab-selected {
		color: #FFF4F7;
	}
	.child-view .vux-tab .vux-tab-item{
		box-sizing: border-box;
		color: #fcdbe4;
	}
	.vux-tab .vux-tab-ink-bar .vux-tab-bar-inner{
		background-color: #FAFAFA;
		height: 3px;
	}
	.child-view{
    	position: static !important; 
	}
</style>