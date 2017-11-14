import actions from "./Action"
import mutation from "./Mutation"
import state from "./State"

import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

const store = new Vuex.Store({
	actions,
	mutations: mutation,
	state
})

export default store