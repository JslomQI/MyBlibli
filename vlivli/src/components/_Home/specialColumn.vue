<template>
	<div>
		<div class="special_top">
			<div class="special_swiper">
				<div class="special_swiper_wrapper">
					<div class="slide">
						<img src="../../assets/home_src/img/special_pic1.png" width="100%" />
					</div>
				</div>
			</div>
			<div class="top_btn_four">
				<tabbar>
			      <tabbar-item>
			        <img slot="icon" src="../../assets/home_src/img/special_ico/special_pic1.png"/>
			        <span slot="label">动画</span>
			      </tabbar-item>
			      <tabbar-item>
			        <img slot="icon" src="../../assets/home_src/img/special_ico/special_pic2.png"/>
			        <span slot="label">游戏</span>
			      </tabbar-item>
			      <tabbar-item selected link="/component/demo">
			        <img slot="icon" src="../../assets/home_src/img/special_ico/special_pic3.png"/>
			        <span slot="label">轻小说</span>
			      </tabbar-item>
			      <tabbar-item>
			        <img slot="icon" src="../../assets/home_src/img/special_ico/special_pic4.png"/>
			        <span slot="label">科技</span>
			      </tabbar-item>
			       <tabbar-item>
			        <img slot="icon" src="../../assets/home_src/img/special_ico/special_pic5.png"/>
			        <span slot="label">其它</span>
			      </tabbar-item>
			    </tabbar>
			</div>
		</div>
		<div class="special_con">
			<div class="special_head">
				<span class="etc_groom">推荐文章</span>
				<span class="etc_right">
					<i>
						<img src="../../assets/home_src/img/small_icon/special_ico1.png" width="100%"/>
					</i>
					排行榜
				</span>
			</div>
			<ul class="special_list_ul">
				<li class="special_list_li">
					<p class="li_author">
						<i></i>
						翎泉umkasa
					</p>
					<p class="special_list_title">大雨倾盆，无止无歇，一行泪，两个人</p>
					<img src="../../assets/home_src/img/special_pic2.png" width="100%"/>
					<p class="special_list_say">
						雨啊，你为何选中了我，这无处躲藏的我在雨中雨啊，你为何选中了我，这无处躲藏的我在雨中
					</p>
					<p class="li_bottom_ic">
						<span class="ic_left">番剧·2091阅读</span>
						<span class="ic_right">
							<span><i>
								<img src="../../assets/home_src/img/small_icon/special_ico3.png" width="100%"/>
							</i>26</span>
							<span><i>
								<img src="../../assets/home_src/img/small_icon/special_ico4.png" width="100%"/>
							</i>9</span>
						</span>
					</p>
				</li>
				<li class="special_list_li">
					<p class="li_author">
						<i></i>
						翎泉umkasa
					</p>
					<p class="special_list_title">大雨倾盆，无止无歇，一行泪，两个人</p>
					<img src="../../assets/home_src/img/special_pic2.png" width="100%"/>
					<p class="special_list_say">
						雨啊，你为何选中了我，这无处躲藏的我在雨中雨啊，你为何选中了我，这无处躲藏的我在雨中
					</p>
					<p class="li_bottom_ic">
						<span class="ic_left">番剧·2091阅读</span>
						<span class="ic_right">
							<span><i>
								<img src="../../assets/home_src/img/small_icon/special_ico3.png" width="100%"/>
							</i>26</span>
							<span><i>
								<img src="../../assets/home_src/img/small_icon/special_ico4.png" width="100%"/>
							</i>9</span>
						</span>
					</p>
				</li>
				
			</ul>
		</div>
	</div>
</template>

<script>
	import { Tabbar, TabbarItem} from 'vux'
	export default {
		name: "specialColumn",
		components: {
			Tabbar, TabbarItem
		},
	}
</script>

<style>
	@import url("../../assets/home_src/css/specialColumen.css");
</style>