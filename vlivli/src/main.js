// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'

//import axios from 'axios'

import App from './App'
import Home from '@/components/_Home/Home.vue'
import liveVideo from '@/components/_Home/liveVideo'
import Groom from '@/components/_Home/groom'
import Film from '@/components/_Home/film'
import AfterTribes from '@/components/_Home/afterTribes'
import SpecialColumn from '@/components/_Home/specialColumn'
import Detail from '@/components/Detail'
import DetailVideo from '@/components/_Home/DetailVideo'
import PageTransition from '@/components/PageTransition'
import Dynamic from '@/components/dynamic/Dynamic'
import FenquDetail from '@/components/dynamic/FenquDetail'
import DetailGrade from '@/components/dynamic/DetailGrad'
import DetailGrade2 from '@/components/dynamic/DetailGrade2'
import Demo from '@/components/demo/Demo'
import Message from '@/components/demo/Message'
import Login from '@/components/demo/Login'
import Register from '@/components/demo/register'
import Dtvideo from '@/components/demo/Dtvideo.vue'
import Dtzhuanlan from '@/components/demo/Dtzhuanlan.vue'
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
  		path:'',
  		component:liveVideo
  	},{
  		path:'/Groom',
  		component:Groom
  	},{
  		path:'/Film',
  		component:Film
  	},{
  		path:'/AfterTribes',
  		component:AfterTribes
  	},
  	,{
  		path:'/SpecialColumn',
  		component:SpecialColumn
  	}
  	]
  },{
  	path:'/detail/:goodsID',
  	component:Detail
  },{
  	path:'/dynamic',
  	component:Dynamic
  },{
  	path:'/fenquDetail',
  	component:FenquDetail,
  	children:[{
  		path:"",
  		component:DetailGrade,
  	},{
		  path:"/hha",
	    component:DetailGrade2
  	}]
  },{
  	path:'/demo',
  	component:Demo,
  	children:[{
  		path: "/",
  		component: Dtvideo
  	},{
  		path:"/demo/zhuanlan",
  		component: Dtzhuanlan
  	}]
  },{
  	path:'/message',
  	component:Message
  },{
  	path:'/login',
  	component:Login
  },{
  	path:'/register',
  	component:Register
  },{
    path: '/DetailVideo',
  	component: DetailVideo
  }
  ]
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
