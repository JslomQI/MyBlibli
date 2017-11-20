<template>
	<div>
		<div class="demos-box" v-if="btn6">
		
			<router-link to="/login"><img src="../../assets/t/bj2.jpg" ></router-link>
		</div>
		<div v-if="btn7">zidai</div>
	</div>
</template>

<script>
	export default {
		components:{
			
		},
		
		data(){
			return{
				btn6:true,
				btn7:false
			}
		},
		mounted:function(){
			
		},
		beforeMount(){
			this.$emit("to-parent",true);
			
			let users = localStorage.getItem("user");
			//console.log(users);
			let name = JSON.parse(users).users;
			let pwd = JSON.parse(users).pwd;
			
			if (name!==undefined&&pwd!==undefined) {
				this.btn6 = false;
				this.btn7 = true;
			}
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