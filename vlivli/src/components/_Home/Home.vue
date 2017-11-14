<template>
	<div>
		<!--<div class="home_top">
			<ul class="top_ul">
				<li class="top_li"><span class="active">直播</span></li>
				<li class="top_li"><span>推荐</span></li>
				<li class="top_li"><span>追番</span></li>
				<li class="top_li"><span>影视</span></li>
				<li class="top_li"><span>专栏</span></li>
			</ul>
		</div>-->
		 <tab :line-width="3" custom-bar-width="40px">
	      <tab-item selected>直播</tab-item>
	      <tab-item>推荐</tab-item>
	      <tab-item>追番</tab-item>
	      <tab-item>影视</tab-item>
	      <tab-item>专栏</tab-item>
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