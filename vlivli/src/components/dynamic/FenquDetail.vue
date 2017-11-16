<template>
	<div>
		<scroller class="ScoBox" lock-y :scrollbar-x=false>
	      <div class="box1">
	        <div class="box1-item" v-for="i in children"><span>{{' ' + i.name + ' '}}</span></div>
	      </div>
	   </scroller>
	   
	   
	   <router-view></router-view>
	   
	</div>
		
		
		
    
</template>

<script>
import { Scroller,Grid,GridItem } from 'vux'

export default {
  components: {
    Scroller,
    Grid,
    GridItem
  },
  methods: {
    onItemClick () {
      console.log('on item click')
    }
  },
  data () {
    return {
      children:[],
      DetailD:[],
      showList1: true,
      scrollTop: 0
    }
  },
  mounted () {
  	this.$http({
		method:"get",
		url:"../../../../static/json/region2.json"
	}).then((data)=>{
		this.children =  eval(data.data)[1].children
		console.log(this.children)
	})
  },
  methods: {
    
    onScroll (pos) {
      this.scrollLeft = pos.left
    }
  }
}
</script>

<style scoped>
html,body{
	width: 100%;
	overflow: hidden;
}
.ScoBox{
	background-color: #FA7298;
}
.box1 {
  position: relative;
  width: 3.5rem;
}
.box1-item {color: #fff;
  font-size: 0.12rem;
  width: 0.5rem;
  height: 0.2rem;
  background-color: #FA7298;
  display:inline-block;
  float: left;
  margin: 0 0.08rem;
  text-align: center;
}
.box1-item:first-child {
  margin-left: 0;
}
.grid-center{
	width: 45%;
	background-color: #ccc;
}
</style>