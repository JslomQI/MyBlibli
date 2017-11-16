<template>
	<div class="demos-box">
		
		<router-link to="/login"><img src="../../assets/t/bj2.jpg" ></router-link>
	</div>
</template>

<script>
	export default {
		/*components:{
			
		},
		
		data(){
			btn:true
		},
		beforeMount(){
			this.$emit("to-parent",true);
		}*/
		beforeMount(){
			this.$emit("to-parent",true);
		}
	}
</script>
	
<style>
	.demos-box{
		width: 100%;
		height: 100%;
		background: #EAEAEA;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		overflow: hidden;
	}
	.demos-box img{
		margin: 0.5rem 0rem 0.2rem 0rem;
		width: 3rem;
		height: 2rem;
		margin: 1.4rem auto;
	}
	
</style>