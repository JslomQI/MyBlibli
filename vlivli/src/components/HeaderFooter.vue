<template>
  <div class="ff">
 
 			<Headers v-if="btn" @to-parents="getChild"></Headers>
 			<router-view @to-parent="getDetailData"></router-view>
 			<Footers v-if="btn"></Footers>
 		
 		
 			
 			
 			
 			
 			<div class="menu" v-if="is" @click="clickMn()">
 				
 				
 			</div>
 			
 			<transition name="fade" v-if="is">
 				<div class="menu2">
 					<div class="menu3">
 						<img src="../assets/demo/4.jpg">
 						<p><i>{{info}}</i><span class="iconfont icon-daogouhuiyuanpaiming"></span><span class="iconfont icon-wodedahuiyuan"></span></p>
 						<p><span>硬币：1.00</span><span>B币：0.0</span></p>
 					</div>
 					<ul>
 						<li><span class="iconfont icon-shouye"></span><i>首页</i></li>
 						<li><span class="iconfont icon-lishijilu"></span><i>历史记录</i></li>
 						<li><span class="iconfont icon-lixianhuancun"></span><i>离线缓存</i></li>
 						<li><span class="iconfont icon-shoucang"></span><i>我的收藏</i></li>
 						<li><span class="iconfont icon-wodeguanzhu1"></span><i>我的关注</i></li>
 						<li><span class="iconfont icon-shaohouzaikan"></span><i>稍后再看</i></li>
 						<li><span class="iconfont icon-wodedahuiyuan"></span><i>我的大会元</i></li>
 						<li><span class="iconfont icon-mianliuliangfuwu"></span><i>免流量服务</i></li>
 						<li><span class="iconfont icon-daogouhuiyuanpaiming"></span><i>会员导购单</i></li>
 						

 					</ul>
 					
 					<tabbar class="tabbar" style="position:fixed;background: #FEFEFE;">
			      <tabbar-item>
			        <span slot="icon" class="iconfont icon-gear"></span>
			        <span slot="label">设置</span>
			      </tabbar-item>
			      <tabbar-item>
			      	<span slot="icon" class="iconfont icon-zhuti"></span>
			        <span slot="label">主题</span>
			      </tabbar-item>
			      <tabbar-item>
			        <span slot="icon" class="iconfont icon-yejianmoshi"></span>
			        <span slot="label">夜间</span>
			      </tabbar-item>
			     
			    </tabbar>
 					
 				</div>
 			</transition>
 		
 		
 		
  </div>
</template>

<script>

import Footers from '@/components/Footers'
import Headers from '@/components/Headers'
import { Tabbar, TabbarItem } from 'vux'
export default {
  components: {
    Headers,Footers,Tabbar, TabbarItem
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!',
      isTrue: false,
      btn:true,
      is:false,
      info:"未登录"
    }
  },
  beforeMount(){
	  		let users = localStorage.getItem("user");
			if (users!==null) {
				console.log(users);
				let name = JSON.parse(users).users;
				let pwd = JSON.parse(users).pwd;
				
				if (name!==undefined&&pwd!==undefined) {
					this.info= name
				}
			}
			
			
	},
  methods: {
  	backClick(){
  		this.isTrue = false
  	},
  	getDetailData (value) {
  		console.log(value)
  		this.isTrue = true
  		this.btn = value
  		//this.is = value
  	},
  	getChild(value){
  		console.log(value)
  		this.is = true 
  	},
  	clickMn(){
  		this.is = false
  	}
  }
}
</script>

<style>
	*{margin: 0;padding: 0;}
	html,body{
		width: 100%;
		height: 100%;
	}
	html{
		font-size: 100px;
	}

.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
	.ff{
		width: 100%;
		height: 100%;
	}
	.tabbar{
		width: 80% !important;
	}
	.menu{
		width: 100%;height: 100%;
		background: rgba(0,0,0,.5);
		position: fixed;
		z-index: 9999;
		top: 0;
	}
	.menu2{
		width: 80%;
		background: #fff;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 10000;
	}
	.menu3{
		width: 100%;
		height: 1.4rem;
		background: #FA7298;
	}
	
	.menu3 img{
		width: 0.6rem;
		height: 0.6rem;
		border-radius: 0.3rem;
		border: 1px solid #fff;
		margin:0.2rem 0.1rem 0.1rem;
	}
	.menu3 >p:nth-child(2){
		width: 100%;
		font-size: 0.12rem;
		color: #fff;
		display: flex;
		height: 0.20rem;
		align-items: center;
		text-indent: 0.1rem;
	}
	.menu3 >p:nth-child(2) span{
		font-size: 0.16rem
	}
	.menu3 >p:nth-child(3){
		width: 100%;
		height: 0.2rem;
		display: flex;
		font-size: 0.12rem;
		color: #ddd;
		text-indent: 0.1rem;
		margin-top: 0.05rem;
	}
	.menu2 ul{
		width: 100%;
		height: 100%;
		
	}
	
	.menu2 ul li {
		width: 100%;
		height: 0.42rem;
		display: flex;
		align-items: center;
		font-size: 0.12rem;
		justify-content: flex-start;
	}
	.menu2 ul li span{
		margin: 0 0.1rem;
		font-size: 0.16rem;
	}
	/*.fade-enter-active, .fade-leave-active {
	    transition: all 1s;
	}
	.fade-enter, .fade-leave-active {
	    left: 80%;
	}*/
	.fade-enter-active {
		animation: run 1s;
	}
	.fade-leave-active {
		animation: runs 1s;
	}
	@keyframes run{
		from{transform:translate3D(-100%,0,0);}
		to{transform:translate3D(0,0,0);}
	}
	@keyframes runs{
		from{transform:translate3D(0,0,0);}
		to{transform:translate3D(-100%,0,0);}
	}
</style>

