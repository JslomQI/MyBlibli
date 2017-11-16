<template>
	<div >
		
		<swiper :aspect-ratio="300/800">
	      <swiper-item class="swiper-demo-img" v-for="(item, index) in gradeDt" :key="index"><img :src="item"></swiper-item>
	    </swiper>
		
		
		<grid :cols="2" class="datileBox">
	      <grid-item  v-for="i in gradeDt" :key="i" class="greadItem">
	        <img  slot="icon" :src="i.cover">
	        <div class="">
	        	
	        </div>
	      </grid-item>
	    </grid>	
	</div>
	
</template>

<script>
	import {Grid,GridItem,Swiper,
    SwiperItem } from 'vux'

	export default {
		
		
		
		components: {
			Swiper,
    		SwiperItem,
		    Grid,
		    GridItem
		},
	  	data(){
	  		return{
	  			gradeDt:[]
	  		}
	  	},
		mounted(){
			this.$http({
				method:"get",
				url:"https://api.imjad.cn/bilibili/v2/?get=rank&type=all&content=global&duration=7&new=false"
			}).then((data)=>{
				this.gradeDt = data.data.result.list
				console.log(this.gradeDt)
			})
		}
		
	}
	
	
</script>

<style scoped>
	html,body{
		background-color: #F4F4F4;
	}
	
	.weui-grid:after{
		border-bottom:none
	}
	.weui-grid:before{
		border-top:none;
		border-right:none
	}
	.datileBox{
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}
	.weui-grid{
		padding: 0;
		height: 1.6rem;
		width: 44% !important;
		margin-bottom: 0.06rem;
		margin-top: 0.12rem;
		background-color: #fff;
		border-radius: 0.06rem;
		overflow: hidden;
	}
	.greadItem img{
		width: 1.36rem!important;
		height: 1rem;
		margin-left: -192%;
	}
	.weui-grid__icon{
		width: 100%!important;
		margin: 0!important;
	}
</style>