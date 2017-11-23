<template>
	<div class="dynamic-fenqgu">
		<ul>
			<li><router-link :to="{ path: '/fenquDetail',query: {channelID: 0}}"><img src="../../assets/fengquPic/ic_category_live.png" class="goDetailG"/>直播</router-link></li>
			<li><router-link :to="{ path: '/fenquDetail',query: {channelID: 1}}"><img src="../../assets/fengquPic/ic_category_t13.png" class="goDetailG"/>番剧</router-link></li>
			
			<li><router-link :to="{ path: '/fenquDetail',query: {channelID: 2}}"><img src="../../assets/fengquPic/ic_category_t1.png" class="goDetailG"/>动画</router-link></li>
			<li><router-link :to="{ path: '/fenquDetail',query: {channelID: 3}}"><img src="../../assets/fengquPic/ic_category_t167.png" class="goDetailG"/>国创</router-link></li>
			<li><router-link :to="{ path: '/fenquDetail',query: {channelID: 4}}"><img src="../../assets/fengquPic/ic_category_t3.png" class="goDetailG"/>音乐</router-link></li>
			<li><router-link :to="{ path: '/fenquDetail',query: {channelID: 5}}"><img src="../../assets/fengquPic/ic_category_t129.png" class="goDetailG"/>舞蹈</router-link></li>
			<li><router-link :to="{ path: '/fenquDetail',query: {channelID: 6}}"><img src="../../assets/fengquPic/ic_category_t4.png" class="goDetailG"/>游戏</router-link></li>
			<li><router-link :to="{ path: '/fenquDetail',query: {channelID: 7}}"><img src="../../assets/fengquPic/ic_category_t36.png" class="goDetailG"/>科技</router-link></li>
			<li><router-link :to="{ path: '/fenquDetail',query: {channelID: 8}}"><img src="../../assets/fengquPic/ic_category_t160.png" class="goDetailG"/>生活</router-link></li>
			<li><router-link :to="{ path: '/fenquDetail',query: {channelID: 9}}"><img src="../../assets/fengquPic/ic_category_t119.png" class="goDetailG"/>鬼畜</router-link></li>
			<li><router-link :to="{ path: '/fenquDetail',query: {channelID: 10}}"><img src="../../assets/fengquPic/ic_category_t155.png" class="goDetailG"/>时尚</router-link></li>
			<li><router-link :to="{ path: '/fenquDetail',query: {channelID: 11}}"><img src="../../assets/fengquPic/ic_category_t165.png" class="goDetailG"/>广告</router-link></li>
			<li><router-link :to="{ path: '/fenquDetail',query: {channelID: 12}}"><img src="../../assets/fengquPic/ic_category_t5.png" class="goDetailG"/>娱乐</router-link></li>
			<li><router-link :to="{ path: '/fenquDetail',query: {channelID: 13}}"><img src="../../assets/fengquPic/ic_category_t23.png" class="goDetailG"/>影视</router-link></li>
			<li><router-link :to="{ path: '/fenquDetail',query: {channelID: 14}}"><img src="../../assets/fengquPic/ic_category_t11.png" class="goDetailG"/>放映听</router-link></li>
			<li><router-link :to="{ path: '/fenquDetail',query: {channelID: 15}}"><img src="../../assets/fengquPic/ic_category_clip_video.png" class="goDetailG"/>小视屏</router-link></li>
			<li><router-link :to="{ path: '/fenquDetail',query: {channelID: 16}}"><img src="../../assets/fengquPic/ic_category_column.png" class="goDetailG"/>专栏</router-link></li>
			<li><router-link :to="{ path: '/fenquDetail',query: {channelID: 17}}"><img src="../../assets/fengquPic/ic_category_audio.png" class="goDetailG"/>音频</router-link></li>
			<li><router-link :to="{ path: '/fenquDetail',query: {channelID: 18}}"><img src="../../assets/fengquPic/ic_category_album.png" class="goDetailG"/>相簿</router-link></li>
			<li><router-link :to="{ path: '/fenquDetail',query: {channelID: 19}}"><img src="../../assets/fengquPic/ic_category_game_center.png" class="goDetailG"/>游戏中心</router-link></li>
		</ul>
		<div class="fenqQu_content">
			
		
			<div class="fanjuqu" v-for="(n,k) in 6">
				<header class="anyFengHead">
					<div class="anyFengname">
						<img src="../../assets/fengquPic/ic_category_t13.png" class="anyFengquTu"/>
						<span class="anyFengnames">
							番剧区
						</span>
					</div>
					
					<ul class="datileBox">
						<li class="weui-grid" v-for="(i,d) in fanjuqu" :key="d">
							<img :src="i.cover">
							<div class="weui-grid-bottom">
								<p>
									{{i.title}}
								</p>
								<div class="weui-grid-bottom-b">
									<div class="weui-grid-bottom-b-l">
										<img src="../../assets/fengquPic/icon_video_play_num.png"/>	
										<span>
											{{Math.ceil(i.play_count/1000)/10+"万"}}
										</span>
									</div>
									<div class="weui-grid-bottom-b-l">
										<img src="../../assets/fengquPic/ic_collect_star.png"/>	
										<span>
											{{Math.ceil(i.fav/1000)/10+"万"}}
										</span>
									</div>
								</div>
							</div>
						</li>
						<footer>
							<router-link :to="{ path: '/fenquDetail',query: {channelID: 1}}" class="footMore">
								
							更多番剧
							</router-link>
						</footer>
					</ul>
					
				</header>
				
				
				
				<header class="anyFengHead">
					<div class="anyFengname">
						<img src="../../assets/fengquPic/ic_category_t13.png" class="anyFengquTu"/>
						<span class="anyFengnames">
							国创区
						</span>
					</div>
					
					<ul class="datileBox">
						<li class="weui-grid" v-for="(i,d) in donghuaqu" :key="d">
							<img :src="i.cover">
							<div class="weui-grid-bottom">
								<p>
									{{i.title}}
								</p>
								<div class="weui-grid-bottom-b">
									<div class="weui-grid-bottom-b-l">
										<img src="../../assets/fengquPic/icon_video_play_num.png"/>	
										<span>
											{{Math.ceil(i.play_count/1000)/10+"万"}}
										</span>
									</div>
									<div class="weui-grid-bottom-b-l">
										<img src="../../assets/fengquPic/ic_collect_star.png"/>	
										<span>
											{{Math.ceil(i.fav/1000)/10+"万"}}
										</span>
									</div>
								</div>
							</div>
						</li>
						<footer>
							<router-link :to="{ path: '/fenquDetail',query: {channelID: 1}}" class="footMore">
								
							更多番剧
							</router-link>
						</footer>
					</ul>
					
				</header>
				
			</div>
			
			
		</div>
	</div>
</template>

<script>
	
	export default{
		data(){
			return{
				shuaxinCount:0,
				fanjuqu:[],
				donghuaqu:[],
				guochuangqu:[],
				yinyuequ :[],
				wudaoqu:[],
				youxiqu:[]
			}
		},
		mounted(){
			this.$http({
				method:"get",
				url:"https://api.imjad.cn/bilibili/v2/?get=rank&type=all&content=global&duration=7&new=false"
			}).then((data)=>{
				if (this.shuaxinCount==46) {
					this.shuaxinCount= 0
				}
				this.fanjuqu = data.data.result.list.slice(this.shuaxinCount,this.shuaxinCount+4)
				console.log(this.fanjuqu)
			})
			
			
			this.$http({
				method:"get",
				url:"https://api.imjad.cn/bilibili/v2/?get=rank&type=all&content=cn&duration=cn&new=false"
			}).then((data)=>{
				this.donghuaqu = data.data.result.list.slice(this.shuaxinCount+4,this.shuaxinCount+8)
				console.log(this.donghuaqu)
			})
			
			
		}
		
		
	}
	
</script>
	
<style  scoped>
	
	.fanjuqu footer{
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	.fanjuqu footer .footMore{
		background-color: #fff;
		text-align: center;
		border-radius: 10%;
		font-size: 0.12rem;
		margin-left: 0.1rem;
		width: 0.8rem;
		height: 0.24rem;
		line-height: 0.24rem;
		color: #000000;
	}
 	
	.fenqQu_content{
		margin-bottom: 0.53rem;
	}
	.dynamic-fenqgu{
		width: 100%;
	} 
	
	.dynamic-fenqgu img{
		width: 0.3rem;
	}
	
	.dynamic-fenqgu ul{
		margin-bottom: 0.3rem;
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
	.dynamic-fenqgu ul li .goDetailG{
		display: block;
		color: #666;
		font-size: 0.14rem;
		letter-spacing: 0.04rem;
	}
	.dynamic-fenqgu ul li a{
		color: #666;
	}
	.dynamic-fenqgu ul li a img {
		margin: 0 auto;
	}
	
	.datileBox {
	  display: flex;
	  justify-content: space-around;
	  flex-wrap: wrap;
	  margin-bottom: 0.53rem;
	}
	.datileBox .weui-grid-bottom {
		width: 100%;
	  padding: 0 0.06rem;
	}
	.datileBox .weui-grid-bottom p {
	  padding: 0 0 0 0.06rem;
	  font-size: 0.12rem;
	  letter-spacing: 0.02rem;
	  line-height: 0.14rem;
	  color: #000;
	  overflow: hidden;
	  text-overflow: ellipsis;
	  display: -webkit-box;
	  -webkit-line-clamp: 2;
	  -webkit-box-orient: vgyyyvertical;
	  height: 0.3rem;
	  margin-bottom: 0;
	}
	.datileBox .weui-grid-bottom .weui-grid-bottom-b {
	  display: flex;
	  justify-content: flex-start;
	  align-items: center;
	  padding: 0 0.04rem;
	}
	.datileBox .weui-grid-bottom .weui-grid-bottom-b span {
		-webkit-transform: scale(0.90); /* Safari 和 Chrome */
    	-webkit-transform-origin:0 0; 	
    	width: 0.5rem;
	  font-size: 0.12rem;
	}
	.datileBox .weui-grid-bottom .weui-grid-bottom-b .weui-grid-bottom-b-l{
		margin-right: 0.08rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.datileBox .weui-grid-bottom .weui-grid-bottom-b .weui-grid-bottom-b-l img{
		margin-right: 0.02rem;
		margin-bottom: 0;
		display: block;
		width:0.14rem
	}
		
	.weui-grid {
	  padding: 0;
	  height: 1.6rem;
	  width: 44% !important;
	  margin-bottom: 0.06rem;
	  margin-top: 0.1rem;
	  background-color: #fff;
	  border-radius: 0.06rem;
	  overflow: hidden;
	}
	
	.weui-grid img {
	  width: 100%;
	  height: 68%;
	  margin-bottom: 0.08rem;
	}

</style>