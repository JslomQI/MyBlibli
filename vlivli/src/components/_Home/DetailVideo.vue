<template>
	<div>
		<video id="my-video" class="video-js" x-webkit-airplay="allow" webkit-playsinline controls poster="poster.png" preload="auto" width="640" height="360" data-setup="{}">
			<source src="http://media.w3.org/2010/05/sintel/trailer.mp4" type="video/mp4">
		</video>
		<div class="peoples_talk">
			<ul class="talk_list">
				<li class="talk">
					<p class="peopel_name">路人甲</p>
					<p class="talk_con">
						这是什么电影，求电影名
					</p>
				</li>
				<li class="talk">
					<p class="peopel_name">路人乙</p>
					<p class="talk_con">
						我的兄弟叫顺溜
					</p>
				</li>
				<li class="talk">
					<p class="peopel_name">路人丙</p>
					<p class="talk_con">
						顺溜党见撒旦去吧!
					</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import {net} from '@/assets/lib/net.js'
	export default {
		namr : "DetailVideo",
		data: function () {
			return {
				isNotDetailVideo: false,
				VideoListSrc: ""
			}
		},
		beforeMount(){
			this.$emit("to-parent",this.isNotDetailVideo);
		},
		mounted(){
			console.log(this.$route.query.season_id + "ID")
			this.$http({
				method: "get",
				params: {season_id: this.$route.query.season_id},
				url: "https://api.imjad.cn/bilibili/v2/?get=seasonrecommend"
			}).then((data)=>{
				console.log(data)
				this.VideoListSrc = data.config.url
				console.log(this.VideoListSrc)
			})
		}
	}
</script>
<style>
	@import url("//nos.netease.com/vod163/nep.min.css");
	.Detail_video{
	}
	.peoples_talk{
		width: 80%;
		margin-left: 10%;
		
	}
	.talk_list .talk{
		margin-top: 0.1rem;
		font-size: 0.16rem;
		color: #999999;
		
	}
	.peopel_name{
		margin-bottom: 0.08rem;
		font-size: 0.18rem;
		color: #010101;
	}
	
</style>