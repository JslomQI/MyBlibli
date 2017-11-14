// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'

//import axios from 'axios'

import App from './App'
import Info from '@/components/Info'
import Detail from '@/components/Detail'
import PageTransition from '@/components/PageTransition'

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
  	component:Info
  },{
  	path:'/detail/:goodsID',
  	component:Detail
  } ]
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
