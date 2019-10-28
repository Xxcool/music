import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	state:{
		isMusicPlay: true, //音乐是否开始
		isMusicStart: false, //音乐开始状态
		musicInfo: '', //音乐详情
		playTime: '' //音乐时间
	},
	mutations: {
		setMusicInfo(state, provider) {
			state.musicInfo = provider;
			console.log(provider, '1')
		},
		musicStart(state, provider) {
			console.log(provider, 2)
			state.isMusicStart = provider;
		},
		setMusicPlay(state, provider) {
			console.log(provider, 3)
			state.isMusicPlay = provider;
		},
		setPlayTime(state, provider) {
			console.log(provider, 4)
			state.playTime = provider;
		}
	}
})
export default store