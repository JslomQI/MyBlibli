// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'

//import axios from 'axios'

import App from './App'
import Home from '@/components/_Home/Home.vue'
import liveVideo from '@/components/_Home/liveVideo'
import Detail from '@/components/Detail'
import PageTransition from '@/components/PageTransition'
import Dynamic from '@/components/dynamic/Dynamic'

//简历状态集管理
import Vuex from "vuex"
import store from "./store/TodoStore"

import { AjaxPlugin } from 'vux'
Vue.use(AjaxPlugin)
Vue.use(VueRouter)

Vue.use(Vuex)

const routes = [
{
  path: '/',
  component: PageTransition,
  children:[{
  	path:'',
  	component:Home,
  	children:[{
  		path:"",
  		component:liveVideo
  	}]
  },{
  	path:'/detail/:goodsID',
  	component:Detail
  },{
  	path:'/dynamic',
  	component:Dynamic
  }]
}
]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,store,
  render: h => h(App)
}).$mount('#app-box')
