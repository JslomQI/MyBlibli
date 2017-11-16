<template>
	<div class="demo-box">
		<img src="../../assets/t/bj1.jpg" >
		<div>
			<router-link to="login" ><span>登录</span></router-link>
		</div>
	</div>
</template>

<script>
	export default {
		
		beforeMount(){
			this.$emit("to-parent",true);
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
</style>