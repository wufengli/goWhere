import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
Vue.use(Vuex)

let defaultCity="上海"
export default new Vuex.Store({
	state,	
	mutations,
	getters:{
		doubleCity(state){
			return state.city+' '+state.city;
		}
	}
})