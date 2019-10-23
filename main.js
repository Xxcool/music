import Vue from 'vue'
import App from './App'
import MusicApi from './request/request.js'

Vue.config.productionTip = false
Vue.prototype.MusicApi = MusicApi
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
