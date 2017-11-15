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
    <tabbar fixed>
      <tabbar-item link="/">
        <span slot="icon" class="iconfont icon-shouye red"></span>
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item show-dot link="/dynamic">
      	<span slot="icon" class="iconfont icon-fenquweixuanzhong"></span>
        <span slot="label">分类</span>
      </tabbar-item>
      <tabbar-item selected link="/component/demo">
        <span slot="icon" class="iconfont icon-dongtai"></span>
        <span slot="label">动态</span>
      </tabbar-item>
      <tabbar-item badge="2">
        <span slot="icon" class="iconfont icon-message-copy"></span>
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
</style>
