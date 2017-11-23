<template>
	<div>
		<scroller class="ScoBox" lock-y :scrollbar-x=false ref="spanKuan2">
	      <div class="box1" ref = "box1kuan">
	        	<div class="box1-item" v-for="i in children" :key="i.tid">
		        <router-link :to="{ path: '/hha', query: { reid: i.tid ,gogo:false}}" >
		        	<span @click="gotoDG(i.tid)" class="spanKuan">{{' ' + i.name + ' '}}</span>	      
		        </router-link>
	        	</div>
  		  </div>
	   </scroller>
	   
	   
	   <router-view :clickToDg="clickToDg" :channelID="channelID"></router-view>
	   
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
  },
  data () {
    return {
    	clickToDg : "",
    	aar : [],
    	aar2: [],
	    box1Length : 0,
	  	clickToDg : "",
		children : [],
		DetailD : [],
		showList1 : true,
		scrollTop : 0,
		channelID : 0
    }
  },
  beforeCreated(){
  },
  mounted () {
  	
  	this.channelID = this.$route.query.channelID
  	
  	this.$http({
		method:"get",
		url:"../../../../static/json/region2.json"
	}).then((data)=>{
		console.log(data)
		this.children = eval(data.data)[this.channelID].children
		console.log(this.children)
	})
	
//	this.aar2 = document.getElementsByClassName("spanKuan")
//	console.log(this.aar2)
//	var arr = this.ara2.childNodes;
	console.log(this.aar)
    for (var i = 0; i<this.aar.length; i++) {
    	this.box1Length += this.aar[i].offsetWidth
    	console.log(this.box1Length)
    	this.$refs.box1kuan.style.width = this.box1Length+"px" 
    }
  },
  	
  methods: {
    gotoDG(id){
    	this.clickToDg = id
    },
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
}
.box1-item{
	float: left;
}
.box1-item span{color: #fff;
  font-size: 0.12rem;
  height: 0.2rem;
  background-color: #FA7298;
  display:inline-block;
  float: left;
  padding: 0 0.1rem;
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