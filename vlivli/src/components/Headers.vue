<template>
	<!--<x-header :left-options="{showBack: isTrue, backText:'aaa'}" @click.native="backClick">-->
	<div class="headers">
		<div>
			<p>
				<span class="iconfont icon-gengduo"></span>
				<img src="../assets/demo/1.jpg">
				<span>{{info}}</span>
			</p>
			<p>
				<span class="iconfont icon-daogouhuiyuanpaiming"></span>
				<span class="iconfont icon-youxi"></span>
				<span class="iconfont icon-weibiaoti102"></span>
				<span class="iconfont icon-soushuo"></span>
			</p>	
		</div>
	</div>
	
</template>

<script>
	import { Tab, TabItem } from 'vux'
	
	export default {
	  	components: {
	  		Tab, TabItem
	  	},
	  	data:function(){
	  		return {
	  			info: "未登录"
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
			
			
		}
  	}
</script>


<style>
	
	.headers{
		width: 100%;
		height: 0.5rem;
		overflow: hidden;
		background: #fa7298;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		
	}
	.headers >div:nth-child(1){
		display: flex;
		align-items: center;
		margin-top: 0.04rem;
	}
	.headers >div:nth-child(1) >p:nth-child(1){
		height: 0.4rem;
		display: flex;
		color: #fff;
	}
	
	.headers >div:nth-child(1) >p:nth-child(1) span{
		
		display: inline-block;
		height: 0.4rem;
		line-height: 0.4rem;
		
	}
	.headers >div:nth-child(1) >p:nth-child(1) span:nth-child(3){
		font-size: 0.14rem;
		height: 0.4rem;
		line-height: 0.4rem;
	}
	.headers >div:nth-child(1) img{
		width: 0.34rem;
		height: 0.34rem;
		margin: auto 0.06rem;
		border-radius: 0.17rem;
	}
	.headers >div:nth-child(1) >p:nth-child(2){
		color: #fff;
		height: 0.4rem;
		flex: 1;
		display: flex;
		justify-content: flex-end;
	}
	.headers >div:nth-child(1) >p:nth-child(2) span{
		width: 0.4rem;
		height: 0.4rem;
		font-size: 0.24rem;
		display: inline-block;
		text-align: center;
		line-height: 0.4rem;
	}
	.headers >div:nth-child(1) >p:nth-child(2) span:nth-child(3){
		font-size: 0.16rem;
	}
	.headers >div:nth-child(1) >p:nth-child(2) span:nth-child(4){
		font-size: 0.16rem;
	}
	
	
	.headers >tab{
		width: 100%;
		height: 0.34rem;
		line-height: 0.34rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: #FA7298 !important;
	}
	
	.headers .vux-tab .vux-tab-item{
		width: 25%;
		color: #ddd;
		font-size: 0.12rem;
		display: inline-block;
		text-align: center;
		box-sizing: border-box;
		background: #FA7298;
	}
	.headers .vux-tab .vux-tab-item.vux-tab-selected {
	    color: #fff;
	    border-bottom: 3px solid #fff !important;
	}
	.headers .vux-tab-ink-bar{
		background: #fff;
	}
</style>