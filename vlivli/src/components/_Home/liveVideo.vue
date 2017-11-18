<template>
	<div>
		<div class="search">
			<!--<search
		    @result-click="resultClick"
		    @on-change="getResult"
		    :results="results"
		    v-model="value"
		    position="absolute"
		    auto-scroll-to-top top="0.30rem"
		    @on-focus="onFocus"
		    @on-cancel="onCancel"
		    @on-submit="onSubmit"
		    ref="search"></search>-->
		     <search
		    @result-click="resultClick"
		    @on-change="getResult"
		    :results="results"
		    v-model="value"
		    position="absolute"
		    auto-scroll-to-top top="46px"
		    @on-focus="onFocus"
		    @on-cancel="onCancel"
		    @on-submit="onSubmit"
		    ref="search"></search>
		</div>
		<swiper auto height="100px">
	      <swiper-item class="black">
	      	<a href="javascript:;"><img src="../../assets/home_src/img/home_banner1.png" width="100%"></a>
	      </swiper-item>
	     <swiper-item class="black">
	      	<a href="javascript:;"><img src="../../assets/home_src/img/home_banner.png" width="100%"></a>
	      </swiper-item>
	    </swiper>
		<div class="tabe_bar">
			 <tabbar>
		      <tabbar-item>
		        <img slot="icon" src="../../assets/home_src/img/liveVideo_pic/liveVideo_pic1.png"/>
		        <span slot="label">关注</span>
		      </tabbar-item>
		      <tabbar-item>
		        <img slot="icon" src="../../assets/home_src/img/liveVideo_pic/liveVideo_pic2.png"/>
		        <span slot="label">娱乐</span>
		      </tabbar-item>
		      <tabbar-item selected link="/component/demo">
		        <img slot="icon" src="../../assets/home_src/img/liveVideo_pic/liveVideo_pic3.png"/>
		        <span slot="label">游戏</span>
		      </tabbar-item>
		      <tabbar-item>
		        <img slot="icon" src="../../assets/home_src/img/liveVideo_pic/liveVideo_pic4.png"/>
		        <span slot="label">手游</span>
		      </tabbar-item>
		      <tabbar-item>
		        <img slot="icon" src="../../assets/home_src/img/liveVideo_pic/liveVideo_pic5.png"/>
		        <span slot="label">绘画</span>
		      </tabbar-item>
		    </tabbar>
	    </div>
	    <div class="groom_video see_video">
	    	<div class="viedo_title">
	    		<p class="video_title_p">
	    			<span class="p_left">
	    				<i><img src="../../assets/home_src/img/small_icon/liveVideo_ico1.png" width="100%"/></i>
	    				<span class="see_vide_style">推荐主播</span>
	    			</span>
	    			<span class="p_right">
	    				<span class="goToSee_video goToSee" v-if="isFirstVideo">
		    				当前有<span class="see_video_num">5942</span>个直播，进去看看
		    			</span>
		    			<span class="seeToSee_more goToSee" v-if="!isFirstVideo">更多</span>
		    			<button class="go_video">></button>
	    			</span>
	    		</p>
	    	</div>
	    	<div class="video_list">
	    		<nav class="video_list_nav">
	    			<ul class="video_list_ul">
	    				<li class="video_list_li">
	    					<a href="javascript:;" class="video_pic_name">
	    						<img src="../../assets/home_src/img/home_video_list1.png"  width="100%">
	    						<span class="man_video_name">老骚豆腐</span>
	    					</a>
	    					<p class="video_intro">
	    						【豆腐】 狼人杀！折寿游戏！
	    					</p>
	    					<p class="video_style_num">
	    						<span class="video_style">狼人杀</span>
	    						<span class="video_num">
	    							<i><img src="../../assets/home_src/img/small_icon/liveVideo_ico2.png" width="100%"/></i>
	    							<span>8680</span>
	    						</span>
	    					</p>
	    				</li>
	    				<li class="video_list_li">
	    					<a href="javascript:;" class="video_pic_name">
	    						<img src="../../assets/home_src/img/home_video_list1.png"  width="100%">
	    						<span class="man_video_name">老骚豆腐</span>
	    					</a>
	    					<p class="video_intro">
	    						【豆腐】 狼人杀！折寿游戏！
	    					</p>
	    					<p class="video_style_num">
	    						<span class="video_style">狼人杀</span>
	    						<span class="video_num">
	    							<i><img src="../../assets/home_src/img/small_icon/liveVideo_ico2.png" width="100%"/></i>
	    							<span>8680</span>
	    						</span>
	    					</p>
	    				</li>
	    				<li class="video_list_li">
	    					<a href="javascript:;" class="video_pic_name">
	    						<img src="../../assets/home_src/img/home_video_list1.png"  width="100%">
	    						<span class="man_video_name">老骚豆腐</span>
	    					</a>
	    					<p class="video_intro">
	    						【豆腐】 狼人杀！折寿游戏！
	    					</p>
	    					<p class="video_style_num">
	    						<span class="video_style">狼人杀</span>
	    						<span class="video_num">
	    							<i><img src="../../assets/home_src/img/small_icon/liveVideo_ico2.png" width="100%"/></i>
	    							<span>8680</span>
	    						</span>
	    					</p>
	    				</li>
	    				<li class="video_list_li">
	    					<a href="javascript:;" class="video_pic_name">
	    						<img src="../../assets/home_src/img/home_video_list1.png"  width="100%">
	    						<span class="man_video_name">老骚豆腐</span>
	    					</a>
	    					<p class="video_intro">
	    						【豆腐】 狼人杀！折寿游戏！
	    					</p>
	    					<p class="video_style_num">
	    						<span class="video_style">狼人杀</span>
	    						<span class="video_num">
	    							<i><img src="../../assets/home_src/img/small_icon/liveVideo_ico2.png" width="100%"/></i>
	    							<span>8680</span>
	    						</span>
	    					</p>
	    				</li>
	    			</ul>
	    		</nav>
	    	</div>
	    </div>
	</div>
</template>

<script>
	import { Swiper, SwiperItem, Search, Group, Cell, XButton, Tabbar, TabbarItem} from 'vux'
	export default {
		components: {
			Swiper, SwiperItem, Search, Group, Cell, XButton, Tabbar, TabbarItem
		},
		methods:{
		    setFocus () {
		      this.$refs.search.setFocus()
		    },
		    resultClick (item) {
		      window.alert('you click the result item: ' + JSON.stringify(item))
		    },
		    getResult (val) {
		      console.log('on-change', val)
		      this.results = val ? getResult(this.value) : []
		    },
		    onSubmit () {
		      this.$refs.search.setBlur()
		      this.$vux.toast.show({
		        type: 'text',
		        position: 'top',
		        text: 'on submit'
		      })
		    },
		    onFocus () {
		      console.log('on focus')
		    },
		    onCancel () {
		      console.log('on cancel')
		    }
		},
		mounted(){
			
		},
		data: function(){
			return {
				results: [],
      			value: '里番',
      			isFirstVideo : true
			}
		}
	}
	function getResult (val) {
	  let rs = []
	  for (let i = 0; i < 20; i++) {
	    rs.push({
	      title: `${val} result: ${i + 1} `,
	      other: i
	    })
	  }
	  return rs
	}
</script>

<style>
	@import url("../../assets/home_src/css/live_video.css");
</style>