<template>
	<div>
		<div class="film_top">
			<div class="film_swiper">
				<!--<div class="film_swiper_wrapper">
					<div class="slide">
						<img src="../../assets/home_src/img/film_pic1.png" width="100%" />
					</div>
				</div>-->
				<swiper :options="swiperOption">
					<swiper-slide>
						<img src="../../assets/home_src/img/film_pic1.png" width="100%" />
					</swiper-slide>
					<swiper-slide>
						<img src="../../assets/home_src/img/film_pic1.png" width="100%" />
					</swiper-slide>
					<swiper-slide>
						<img src="../../assets/home_src/img/film_pic1.png" width="100%" />
					</swiper-slide>
					<div class="swiper-pagination"  slot="pagination"></div>
				</swiper>
			</div>
			<div class="top_btn_four">
				 <tabbar>
			      <tabbar-item>
			        <img slot="icon" src="../../assets/home_src/img/film_ico/groom_pic1.png"/>
			        <span slot="label">纪录片</span>
			      </tabbar-item>
			      <tabbar-item>
			        <img slot="icon" src="../../assets/home_src/img/film_ico/groom_pic2.png"/>
			        <span slot="label">电影</span>
			      </tabbar-item>
			      <tabbar-item selected link="/component/demo">
			        <img slot="icon" src="../../assets/home_src/img/film_ico/groom_pic3.png"/>
			        <span slot="label">电视剧</span>
			      </tabbar-item>
			      <tabbar-item>
			        <img slot="icon" src="../../assets/home_src/img/film_ico/groom_pic4.png"/>
			        <span slot="label">猎场</span>
			      </tabbar-item>
			    </tabbar>
			</div>
		</div>
		<div class="film_con">
			 <div class="film_con_list">
			 	<div class="list_title">
					<p class="title_p">
						<span class="left">
							<i>
								<img src="../../assets/home_src/img/small_icon/film_ico1.png" width="100%"/>
							</i>
							<span>正在热播</span>
						</span>
						<span class="right">
							<i>
								<img src="../../assets/home_src/img/small_icon/special_ico1.png" width="100%"/>
							</i>
							<span>排行榜</span>
						</span>
					</p>
				</div>
			 	<div class="list_integer">
					<ul class="see_list_ul">
						<li class="see_list_li">
							<div class="see_pic_top">
								<img src="../../assets/home_src/img/film_pic2.png" width="100%"/>
								<p class="see_pic_watch">
									<span class="see_pic_watch_span">
										<i>
											<img src="../../assets/home_src/img/small_icon/film_video.png" width="100%"/>
										</i>9129
										<i>
											<img src="../../assets/home_src/img/small_icon/film_list.png" width="100%"/>
										</i>59
									</span>
								</p>
							</div>
							<p class="see_title">
								外交风云
							</p>
							<p class="see_intro">
								py交易大师课
							</p>
						</li>
					</ul>
			 	</div>
			 	<div class="list_integer">
					<ul class="see_list_ul">
						<li class="see_list_li">
							<div class="see_pic_top">
								<img src="../../assets/home_src/img/film_pic2.png" width="100%"/>
								<p class="see_pic_watch">
									<span class="see_pic_watch_span">
										<i></i>9129
										<i></i>59
									</span>
								</p>
							</div>
							<p class="see_title">
								外交风云
							</p>
							<p class="see_intro">
								py交易大师课
							</p>
						</li>
					</ul>
			 	</div>
			 	<div class="list_integer">
					<ul class="see_list_ul">
						<li class="see_list_li">
							<div class="see_pic_top">
								<img src="../../assets/home_src/img/film_pic2.png" width="100%"/>
								<p class="see_pic_watch">
									<span class="see_pic_watch_span">
										<i></i>9129
										<i></i>59
									</span>
								</p>
							</div>
							<p class="see_title">
								外交风云
							</p>
							<p class="see_intro">
								py交易大师课
							</p>
						</li>
					</ul>
			 	</div>
			 	<div class="list_integer">
					<ul class="see_list_ul">
						<li class="see_list_li">
							<div class="see_pic_top">
								<img src="../../assets/home_src/img/film_pic2.png" width="100%"/>
								<p class="see_pic_watch">
									<span class="see_pic_watch_span">
										<i></i>9129
										<i></i>59
									</span>
								</p>
							</div>
							<p class="see_title">
								外交风云
							</p>
							<p class="see_intro">
								py交易大师课
							</p>
						</li>
					</ul>
			 	</div>
			 </div>
		</div>
	</div>
</template>

<script>
	import { Tabbar, TabbarItem} from 'vux'
	import { swiper, swiperSlide } from "vue-awesome-swiper"
	export default {
		name: "film",
		components: {
			Tabbar, TabbarItem, swiper, swiperSlide
		},
		data(){
			return {
				swiperOption:{
					autoplay: 3000,
					loop: true
				}
			}
		}
	}
</script>

<style>
	@import url("../../assets/home_src/css/film.css");
</style>

