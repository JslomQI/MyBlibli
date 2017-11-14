<template>
	<div>
		<div class="search">
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
	   <!--<div class="liveVideo_classify">
			<ul class="classify_ul">
				<li class="classify_li"><span class="active">关注</span></li>
				<li class="classify_li"><span>娱乐</span></li>
				<li class="classify_li"><span>游戏</span></li>
				<li class="classify_li"><span>手游</span></li>
				<li class="classify_li"><span>绘画</span></li>
			</ul>
		</div>-->
		<div class="tabe_bar">
			 <tabbar>
		      <tabbar-item>
		        <img slot="icon" src="../../assets/demo/icon_nav_button.png">
		        <span slot="label">关注</span>
		      </tabbar-item>
		      <tabbar-item>
		        <img slot="icon" src="../../assets/demo/icon_nav_msg.png">
		        <span slot="label">娱乐</span>
		      </tabbar-item>
		      <tabbar-item selected link="/component/demo">
		        <img slot="icon" src="../../assets/demo/icon_nav_article.png">
		        <span slot="label">游戏</span>
		      </tabbar-item>
		      <tabbar-item>
		        <img slot="icon" src="../../assets/demo/icon_nav_cell.png">
		        <span slot="label">手游</span>
		      </tabbar-item>
		      <tabbar-item>
		        <img slot="icon" src="../../assets/demo/icon_nav_cell.png">
		        <span slot="label">绘画</span>
		      </tabbar-item>
		    </tabbar>
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
      			value: '里番'
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
	.swiper{}
	.vux-swiper-item{
		padding: 0.1rem;
		box-sizing: border-box;
	}
	.vux-swiper-item a img{
	}
	.weui-search-bar__form .weui-search-bar__label {
		margin-top: 4px;
		text-align: left;
	}
	.tabe_bar{
		margin-top: ;
	}
	.tabe_bar .weui-tabbar{
		position: static;
	}
</style>