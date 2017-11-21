<template>
  <div>
 		<Headers v-if="btn_isNotVideo"></Headers>
 		<router-view @to-parent="getDetailData"></router-view>
 		<Footers v-if="btn_isNotVideo"></Footers>
  </div>
</template>

<script>

import Footers from '@/components/Footers'
import Headers from '@/components/Headers'
export default {
  components: {
    Headers,Footers
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!',
      isTrue: false,
      btn:true,
      isNotDetailVideo: true,
      btn_isNotVideo: true
    }
  },
  methods: {
  	backClick() {
  		this.isTrue = false
  	},
  	getDetailData (value) {
//		console.log(value)
  		this.isTrue = true
  		this.btn = value
  	}
  },
  beforeMount (){
  },
  mounted(){
  	this.btn_isNotVideo = this.isNotDetailVideo && this.btn
  	console.log(this.btn_isNotVideo)
  }
}
</script>

<style>
	*{margin: 0;padding: 0;}
	html,body{
		width: 100%;
		height: 100%;
	}
	html{
		font-size: 100px;
	}

.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
</style>

