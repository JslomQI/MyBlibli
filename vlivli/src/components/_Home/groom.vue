<template>
	<div>
		<div class="groom_top">
			<a href="javascript:;" class="groom_top_left">综合</a>
			<span class="groom_top_right">
				<a href="javascript:;"><i>
					<img src="../../assets/home_src/img/small_icon/special_ico1.png" width="100%"/>
				</i>排行榜</a>
				<a href="javascript:;"><i>
					<img src="../../assets/home_src/img/small_icon/groom_ico2.png" width="100%"/>
				</i>标签</a>
			</span>
		</div>
		<nav class="groom_nav">
			<ul class="groom_nav_ul">
				<li class="groom_nav_ul_li" v-for="(data, index) in goodsData">
					<div class="li_see_head">
						<img src="../../assets/home_src/img/groom_pic1.png" width="100%" />
						<!--<img v-bind:src="data.cover" width="100%" />-->
						<p class="see_head_p">
							<span class="see_head_p_left">
								<span><i>
									<img src="../../assets/home_src/img/small_icon/film_video.png" width="100%"/>
								</i>{{data.follow}}<i>
									<img src="../../assets/home_src/img/small_icon/film_list.png" width="100%"/>
								</i>{{data.season_id}}</span>
							</span>
							<span class="see_head_p_right">
								<span>56:27</span>
							</span>
						</p>
					</div>
					<div class="li_see_under">
						<p class="under_title">{{data.title}}</p>
						<p class="under_end">
							<span class="tag_list">
								<span class="end_left" v-for="mes in data.tags">{{mes.tag_name}}·</span>
							</span>
							<span class="end_more">
								<img src="../../assets/home_src/img/small_icon/groom_more.png" width="100%"/>
							</span>
						</p>
					</div>
				</li>
			</ul>
		</nav>
	</div>
</template>

<script>
	export default {
		name: "groom",
		data: function () {
			return {
				goodsData : [],
			}
		},
		mounted(){
			this.$http({
				method: "get",
				params: {season_id: 5800},
				url: "https://api.imjad.cn/bilibili/v2/?get=seasonrecommend"
			}).then((data)=>{
				this.goodsData = data.data.result.list;
				console.log(this.goodsData)
			})
		}
	}
</script>

<style>
	@import url("../../assets/home_src/css/groom.css");
</style>