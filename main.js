import Vue from 'vue'
import App from './App'
import MusicApi from './request/request.js'
import store from './store/index.js'

Vue.config.productionTip = false

Vue.prototype.MusicApi = MusicApi
Vue.prototype.$store = store

App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()

Vue.prototype.globalData = {
	// #ifndef H5
	bgAudioMannager: uni.getBackgroundAudioManager(),
	// #endif
	innerAudioContext: uni.createInnerAudioContext()
}

