<template>
	<div>
		<div class="demo-box" v-if="btn4">
			<img src="../../assets/t/bj1.jpg" >
			<div>
				<router-link to="login" ><span>登录</span></router-link>
			</div>
		</div>
		<div id="demo2" v-if="btn5">
			<div>
				<ul>
					<li><router-link to="/demo" style="font-size: 0.14rem;color: #525659;">视屏</router-link></li>
					<li><router-link to="/demo/zhuanlan" style="font-size: 0.14rem;color: #525659;" >专栏</router-link></li>
				</ul>
				<span>全部</span>
			</div>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: "Demo",
		data:function(){
			return {
				btn4:true,
				btn5:false
			}
		},
		mounted() {
	  		
		},
		beforeMount:function(){
			this.$emit("to-parent",true);
			let users = localStorage.getItem("user");
			
			let name = JSON.parse(users).users;
			let pwd = JSON.parse(users).pwd;
			
			if (name!==undefined&&pwd!==undefined) {
				this.btn4 = false;
				this.btn5 = true;
			}
		}
	}
</script>

<style>
	.demo-box{
		width: 100%;
		height: 100%;
		background: #EAEAEA;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		overflow: hidden;
	}
	.demo-box img{
		margin: 0.5rem 0rem 0.2rem 0rem;
		width: 2.34rem;
		height: 2.34rem;
	}
	.demo-box >div{
		width: 100%;
		height: 2rem;
		font-size: 0.16rem;
		display: flex;
		flex: 1;
		justify-content: center;
	}
	.demo-box >div span{
		display: block;
		width:2.6rem;
		height: 0.4rem;
		text-align: center;
		color: #fff;
		line-height: 0.44rem;
		background: #FB7299;
	}
	#demo2{
		width: 100%;
		
	}
	#demo2 >div:nth-child(1){
		width: 100%;
		height: 0.4rem;
		font-size: 0.14rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	#demo2 >div:nth-child(1) ul li{
		display: inline-block;
		margin:0 0.1rem 0 0.1rem;
	}
	#demo2 >div:nth-child(1) span{
		margin: 0 0.1rem;
		color: #525659;
	}
</style>