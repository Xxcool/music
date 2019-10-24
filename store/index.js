import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	state:{
		isMusicPlay: true,
		isMusicStart: false
	}
})
export default store