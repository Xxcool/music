<template>
	<view class="page-panel">
		<view>{{musicDetail.name}}</view>
		<view class="head">
			<image :src="musicDetail.picUrl" mode="widthFix"></image>
		</view>
		<view class="player-btn">
			<!-- <view class="nextPrev">
				<image src="../../static/images/prev.png" mode=""></image>
			</view> -->
			<view class="playStop" v-if="isStop" @tap="toAgain()">
				<image src="../../static/images/again.png" mode=""></image>
			</view>
			<view class="playStop" v-if="!isStop" @tap="toPausePlay()">
				<image :src="isPlay ? playIcon : pauseIcon" mode=""></image>
			</view>
			<!-- <view class="nextPrev">
				<image src="../../static/images/next.png" mode=""></image>
			</view> -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				musicDetail: {
					id: '',
					url: '',
					name: '',
					picUrl: '',
					author: ''
				},
				isStop: false,
				isPlay: true,
				playIcon: '../../static/images/play.png',
				pauseIcon: '../../static/images/pause.png',
				beAudioMannager: '',
				innerAudioContext: '',
				musicStatus: 0,
				musicStatusNum: 2
			}
		},
		onLoad (e) {
			console.log(e)
			this.musicDetail.id = e.id
			this.getMusicUrl() //获取歌曲的url
			this.getMusicInfo() //获取歌曲的详细信息
			this.bgAudioMannager = this.globalData.bgAudioMannager;
			this.bgAudioMannagerFunc();
		},
		methods: {
			getMusicUrl () {
				let _this = this;
				let params = {
					id: _this.musicDetail.id
				}
				_this.MusicApi.request('song/url', params, 'GET').then(res => {
					_this.musicDetail.url = res.data[0].url
					_this.musicStatus++;
				})
			},
			getMusicInfo () {
				let _this = this;
				let params = {
					ids: _this.musicDetail.id
				}
				_this.MusicApi.request('song/detail', params, 'GET').then(res => {
					// _this.musicDetail.url = res.data[0].url
					res.data.songs[0].name ? _this.musicDetail.name = res.data.songs[0].name : _this.musicDetail.name = ''
					_this.musicDetail.picUrl = res.data.songs[0].al.picUrl
					let songs = res.data.songs[0].ar
					songs.forEach(item => {
						_this.musicDetail.author = _this.musicDetail.author + item.name + '/'
					})
					_this.musicDetail.author = _this.musicDetail.author.substr(0, _this.musicDetail.length - 1)
					console.log(res)
					_this.musicStatus++;
				})
			},
			toPausePlay () {
				this.beAudioMannager.play()
			}
		},
		watch:{
			musicStatus (val) {
				console.log(val)
			}
		}
	}
</script>

<style scoped>
.head{
	position: relative;
	z-index: 1;
	width: 400upx;
	height: 400upx;
	margin: 20upx auto;
	border-radius: 50%;
	overflow: hidden;
	box-shadow: 0 0 10px hsla(0, 0%, 51%, 0.3);
}
.head image{
	width: 400upx;
	height: 400upx;
}
</style>
