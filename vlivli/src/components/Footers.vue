<!--<template>
    <tabbar fixed>
      <tabbar-item>
        <img slot="icon" src="../assets/demo/icon_nav_button.png">
        <span slot="label">Wechat</span>
      </tabbar-item>
      <tabbar-item show-dot link="/dynamic">
        <img slot="icon" src="../assets/demo/icon_nav_msg.png">
        <span slot="label">Message</span>
      </tabbar-item>
      <tabbar-item selected link="/component/demo">
        <img slot="icon" src="../assets/demo/icon_nav_article.png">
        <span slot="label">Explore</span>
      </tabbar-item>
      <tabbar-item badge="2">
        <img slot="icon" src="../assets/demo/icon_nav_cell.png">
        <span slot="label">News</span>
      </tabbar-item>
    </tabbar>
</template>

<script>
	import { Tabbar, TabbarItem } from 'vux'
	
	export default {
	  components: {
	    Tabbar, TabbarItem
	  }
	}
</script>

<style>
</style>-->
<template>
    <tabbar style="position:fixed;background: #FEFEFE;">
      <tabbar-item link="/">
        <img slot="icon" src="../assets/t/f1.jpg">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item show-dot link="/dynamic">
      	<img slot="icon" src="../assets/t/f2.jpg">
        <span slot="label">分类</span>
      </tabbar-item>
      <tabbar-item selected link="/demo">
        <img slot="icon" src="../assets/t/f3.jpg">
        <span slot="label">动态</span>
      </tabbar-item>
      <tabbar-item badge="2" link="/message">
        <img slot="icon" src="../assets/t/f4.jpg">
        <span slot="label">消息</span>
      </tabbar-item>
    </tabbar>
</template>

<script>
	import { Tabbar, TabbarItem } from 'vux'
	
	export default {
	  components: {
	    Tabbar, TabbarItem
	  }
	}
</script>

<style>
	@import '../assets/iconfont_f/iconfont.css';
	.iconfont{
		font-size: 0.23rem;
	}
	.red{
		color: #fa7298;
	}
	.weui-tabbar__item img{
		margin: 0 !important;
	}
</style>
