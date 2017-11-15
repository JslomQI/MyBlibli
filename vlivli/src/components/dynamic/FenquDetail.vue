<template>
	<scroller lock-x :scrollbar-y=false>
      <div class="box1">
        <div class="box1-item" v-for="i in 7"><span>{{' ' + i + ' '}}</span></div>
      </div>
    </scroller>
    
</template>

<script>
	import { Scroller } from 'vux'

export default {
  components: {
    Scroller
  },
  data () {
    return {
      showList1: true,
      scrollTop: 0
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$refs.scrollerEvent.reset({top: 0})
    })
  },
  methods: {
    
    onScroll (pos) {
      this.scrollTop = pos.top
    },
    changeList () {
      this.showList1 = false
      this.$nextTick(() => {
        this.$refs.scroller.reset({
          top: 0
        })
      })
    }
  }
}
</script>

<style>
	html,body{
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	
	.box1 {
  height: 100px;
  position: relative;
  width: 1490px;
}
.box1-item {
  width: 200px;
  height: 100px;
  background-color: #ccc;
  display:inline-block;
  margin-left: 15px;
  float: left;
  text-align: center;
  line-height: 100px;
}
.box1-item:first-child {
  margin-left: 0;
}
</style>