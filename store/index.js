import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	state:{
		isMusicPlay: true, //音乐是否开始
		isMusicStart: false, //音乐开始状态
		musicInfo: '', //音乐详情
		playTime: '', //音乐时间
		commentList: '', //当前评论
		hotcommentList: '' //热门评论
	},
	mutations: {
		setMusicInfo(state, provider) {
			state.musicInfo = provider;
		},
		musicStart(state, provider) {
			state.isMusicStart = provider;
		},
		setMusicPlay(state, provider) {
			state.isMusicPlay = provider;
		},
		setPlayTime(state, provider) {
			state.playTime = provider;
		},
		setComment(state, provider) {
			state.commentList = provider
		},
		setHotComment(state, provider) {
			state.hotcommentList = provider
		}
	}
})
export default store