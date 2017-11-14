<!--<template>
  <div>
 		<x-header :left-options="{showBack: isTrue, backText:'aaa'}" @click.native="backClick">睁眼看世界</x-header>
 		<router-view @to-parent="getDetailData"></router-view>
 		<Footers></Footers>
  </div>
</template>

<script>
import { XHeader } from 'vux'
import Footers from '@/components/Footers'
export default {
  components: {
    XHeader,Footers
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!',
      isTrue: false
    }
  },
  methods: {
  	backClick() {
  		this.isTrue = false
  	},
  	getDetailData (value) {
  		this.isTrue = true
  	}
  }
}
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
</style>-->

<template>
  <div>
 		<!--<x-header :left-options="{showBack: isTrue, backText:'aaa'}" @click.native="backClick">
 			
 		</x-header>-->
 		<Headers></Headers>
 		<router-view @to-parent="getDetailData"></router-view>
 		<Footers></Footers>
  </div>
</template>

<script>
//import { XHeader } from 'vux'

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
      isTrue: false
    }
  },
  methods: {
  	backClick() {
  		this.isTrue = false
  	},
  	getDetailData (value) {
  		this.isTrue = true
  	}
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

