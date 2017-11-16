<template>
	<div id="login">
		<p>
			<img src="../../assets/t/f5.jpg">
			<span>登录</span>
			<span>忘记密码?</span>
		</p>
		
	</div>
</template>

<script>
	export default {
		components:{
			
		},
		
		
		beforeMount(){
			this.$emit("to-parent",false);
		}
	}
</script>

<style>
	#login{
		width: 100%;
		shape-rendering: 100%;
		font-size: 0.14rem;
		color:#fff;
	}
	#login >p{
		width:100%;
		height: 0.4rem;
		background: #fb7299;
		display: flex;
		align-items: center;
		justify-content: space-between;
		
	}
	#login >p img{
		width: 0.16rem;
		height: 0.16rem;
		margin-left: 0.2rem;
	}
	#login >p span:nth-child(2){
		flex: 1;
		text-indent: 0.2rem;
	}
	#login >p span:nth-child(3){
		margin-right: 0.1rem;
	}
</style>