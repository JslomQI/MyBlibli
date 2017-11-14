<template>
</template>

<script>
	export let getList = async (page, tag) => {  
	  let response = await fetch(`http://datainfo.duapp.com/shopdata/getGoods.php?callback=`, {  
	    method: 'GET',  
	    mode: 'cors',  
	  }).catch((error) => {  
	    console.log(error)  
	  })  
	  return await response.json().catch((error) => {  
	    console.log(error)  
	  })  
	}  
</script>

<style>
</style>