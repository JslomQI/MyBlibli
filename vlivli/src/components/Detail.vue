<template>
	<div>
		<h1>This is detail page</h1>
		<p>{{$route.params.goodsID}}</p>
	</div>
</template>

<script>
	export default {
		mounted(){
			this.$emit("to-parent",true)
		}
	}
</script>

<style>
</style>