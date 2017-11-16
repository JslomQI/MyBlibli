<template>
	<div class="dynamic-fenqgu">
		<ul>
			<li><img src="../../assets/fengquPic/ic_category_live.png"/><a>直播</a></li>
			<li><img src="../../assets/fengquPic/ic_category_t13.png"/><a href="#/fenquDetail">番剧</a></li>
			<li><img src="../../assets/fengquPic/ic_category_t1.png"/><a href="">动画</a></li>
			<li><img src="../../assets/fengquPic/ic_category_t167.png"/><a href="">国创</a></li>
			<li><img src="../../assets/fengquPic/ic_category_t3.png"/><a href="">音乐</a></li>
			<li><img src="../../assets/fengquPic/ic_category_t129.png"/><a href="">舞蹈</a></li>
			<li><img src="../../assets/fengquPic/ic_category_t4.png"/><a href="">游戏</a></li>
			<li><img src="../../assets/fengquPic/ic_category_t36.png"/><a href="">科技</a></li>
			<li><img src="../../assets/fengquPic/ic_category_t160.png"/><a href="">生活</a></li>
			<li><img src="../../assets/fengquPic/ic_category_t119.png"/><a href="">鬼畜</a></li>
			<li><img src="../../assets/fengquPic/ic_category_t155.png"/><a href="">时尚</a></li>
			<li><img src="../../assets/fengquPic/ic_category_t165.png"/><a href="">广告</a></li>
			<li><img src="../../assets/fengquPic/ic_category_t5.png"/><a href="">娱乐</a></li>
			<li><img src="../../assets/fengquPic/ic_category_t23.png"/><a href="">影视</a></li>
			<li><img src="../../assets/fengquPic/ic_category_t11.png"/><a href="">放映听</a></li>
			<li><img src="../../assets/fengquPic/ic_category_clip_video.png"/><a href="">小视屏</a></li>
			<li><img src="../../assets/fengquPic/ic_category_column.png"/><a href="">专栏</a></li>
			<li><img src="../../assets/fengquPic/ic_category_audio.png"/><a href="">音频</a></li>
			<li><img src="../../assets/fengquPic/ic_category_album.png"/><a href="">相簿</a></li>
			<li><img src="../../assets/fengquPic/ic_category_game_center.png"/><a href="">游戏中心</a></li>
		</ul>
		
		
	</div>
</template>

<script>
	
	export default{
		
		mounted(){
			this.$http({
				method:"get",
				url:"https://api.imjad.cn/bilibili/v2/?get=rank&type=all&content=global&duration=7&new=false"
			}).then((data)=>{
				console.log(data)
			})
		}
		
		
	}
	
</script>
	
<style  scoped>
	
	.dynamic-fenqgu{
		width: 100%;
	} 
	
	.dynamic-fenqgu img{
		width: 0.3rem;
	}
	
	.dynamic-fenqgu ul{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		
	}
	.dynamic-fenqgu ul li{
		margin-bottom: 0.12rem;
		margin-top: 0.12rem;
		width: 24%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.dynamic-fenqgu ul li a{
		color: #666;
		font-size: 0.14rem;
		letter-spacing: 0.04rem;
	}
</style>