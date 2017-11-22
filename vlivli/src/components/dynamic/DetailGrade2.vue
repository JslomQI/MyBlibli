<template>
	<div >
		<swiper :options="swiperOption" ref="mySwiper"  class="dg-swiper">
    <!-- slides -->
		    <swiper-slide v-for="(i,d) in gradeDt2" :key="d"><img :src="i.cover"></swiper-slide>
		    <!-- Optional controls -->
		    <div class="swiper-pagination"  slot="pagination"></div>
	    </swiper>
		
		<div class="dg-content">
			<div class="dg-content-top">
				<span class="dg-class">
					热门推荐
				</span>
				<aside>
					<img src="../../assets/fengquPic/ic_rank.png"/>
					<span class="dg-gorank">
						排行榜
					</span>
				</aside>
				
			</div>
			<ul class="datileBox">
				<li class="weui-grid" v-for="i in gradeDt">
					<img :src="i.cover">
					<div class="weui-grid-bottom">
						<p>
							{{i.title}}
						</p>
						<div class="weui-grid-bottom-b">
							<span class="weui-grid-bottom-fenlei">
								明星
							</span>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import {Grid,GridItem } from 'vux'
	import 'swiper/dist/css/swiper.css'
	import "../../assets/dynamicSrc/css/deatailGrad.css"
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default {
		
		components: {
		    Grid,
		    GridItem,
		    swiper, 
		    swiperSlide
		},
		
		created() {
		    this.zujianid = this.$route.query.reid;
		},
		updated(){
			this.ids = this.$route.query.reid;
			if (this.ids !== this.id) {
				this.$http({
					method:"get",
					url:"https://api.imjad.cn/bilibili/v2/?get=rank&type=all&content=global&duration=7&new=false"
				}).then((data)=>{
					this.gradeDt  = data.data.result.list.slice(Math.ceil(this.ids/4),Math.ceil(this.ids/4)+6)
					this.gradeDt2 = data.data.result.list.slice(Math.ceil(this.ids/4),Math.ceil(this.ids/4)+4)
				})
			}
			
		},
	  	data(){
	  		return{
	  			
				mysg : this.clickToDg,
	  			gradeDt:[],
	  			gradeDt2:[],
	  			swiperOption: {
		          autoplay: 5000,
		          initialSlide: 1,
		          loop: true,
		          pagination: '.swiper-pagination'
		        }
	  		}
	  	},
	  	props:["clickToDg"],
		mounted(){
			console.log(this.mysg)
			this.$http({
				method:"get",
				url:"https://api.imjad.cn/bilibili/v2/?get=rank&type=all&content=global&duration=7&new=false"
			}).then((data)=>{
				this.gradeDt  = data.data.result.list.slice(Math.ceil(this.id/4),Math.ceil(this.id/4)+6)
				this.gradeDt2 = data.data.result.list.slice(Math.ceil(this.id/4),Math.ceil(this.id/4)+4)
			})
		}
		
	}
	
	
</script>

<style scoped>
</style>