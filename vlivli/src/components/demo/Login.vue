<template>
	<div>
		<div>
			denglu
		</div>
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
</style>