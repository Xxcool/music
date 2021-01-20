<template>
	<view>
		<view class="page-panel-h" v-if="!musicDetail.name == ''">
			<view class="music-name">{{ musicDetail.name }}</view>
			<view class="music-author">{{ musicDetail.author }}</view>
			<view class="music-pic"> <image :src="musicDetail.picUrl"></image> </view>
			<view class="player-panel">
				<view class="time"
					><view class="item">{{ musicTime.currentTime }}</view
					><view class="item">{{ musicTime.duration }}</view></view
				>
				<slider
					:value="musicTime.currentTime"
					step="0.01"
					@changing="sliderChange"
					min="0"
					:max="musicTime.duration"
					block-size="12"
					activeColor="#41b883"
				/>
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
		</view>
		<view class="comment">
			<view style="padding:0upx 10upx">热门评论</view>
			<view class="item" v-for="(item, index) in hotcomment" :key="item.index">
				<view class="index">
					<image :src="item.user.avatarUrl"></image>
				</view>
				<view class="info">
					<view class="name">{{item.user.nickname}}</view>
					<text class="arName">{{ item.content }}</text>
					<text style="font-size: 26upx;">{{item.likedCount}}</text>
				</view>
			</view>
			<view style="padding:30upx 10upx 10upx">最近评论</view>
			<view class="item" v-for="(item, index) in comment" :key="item.index">
				<view class="index">
					<image :src="item.user.avatarUrl"></image>
				</view>
				<view class="info">
					<view class="name">{{item.user.nickname}}</view>
					<text class="arName">{{ item.content }}</text>
				</view>
			</view>
		</view>	
	</view>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
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
			comment: '',
			hotcomment: '',
			musicTime: {
				currentTime: 0,
				duration: 0
			},
			isStop: false,
			isPlay: true,
			playIcon: '../../static/images/play.png',
			pauseIcon: '../../static/images/pause.png',
			beAudioMannager: '',
			innerAudioContext: '',
			musicStatus: 0,
			musicSwithNum: 2
		}
	},
	onLoad(e) {
		this.musicDetail.id = e.id;
		// #ifndef H5
		this.bgAudioMannager = this.globalData.bgAudioMannager;
		this.bgAudioMannagerFunc();
		// #endif

		// #ifdef H5
		this.innerAudioContext = this.globalData.innerAudioContext;
		this.innerAudioContextFunc();
		// #endif

		/* 判断是否不是从音乐组件跳转进来
		 *  是：获取音乐信息并且播放
		 *  否：页面的musicDetail等于vuex的musicInfo，方便页面控制
		 */
		if (this.musicDetail.id !== 'playing') {
			this.getMusicUrl();
			this.getMusicInfo();
			this.getMusicComment();
			this.isStop = false;
			this.isPlay = true;
		} else {
			this.comment = this.commentList;
			this.hotcomment = this.hotcommentList;
			this.musicDetail = this.musicInfo;
			this.musicTime = this.playTime;
			this.isMusicPlay ? (this.isPlay = true) : (this.isPlay = false);
			// #ifndef H5
			if (this.globalData.bgAudioMannager.currentTime == 0) {
				this.isStop = true;
			} else {
				this.isStop = false;
			}
			// #endif
			// #ifdef H5
			if (
				this.globalData.innerAudioContext.currentTime ==
				this.globalData.innerAudioContext.duration
			) {
				this.isStop = true;
			} else {
				this.isStop = false;
			}
			// #endif
		}
	},
	onUnload(e) {
		this.setPlayTime(this.musicTime);
		this.setMusicInfo(this.musicDetail);
		this.setMusicPlay(this.isPlay);
		this.setComment(this.comment);
		this.setHotComment(this.hotcomment);
	},
	computed: {
		...mapState(['isMusicStart', 'musicInfo', 'isMusicPlay', 'playTime', 'commentList', 'hotcommentList'])
	},
	methods: {
		...mapMutations(['musicStart', 'setMusicInfo', 'setMusicPlay', 'setPlayTime', 'setComment', 'setHotComment']),
		// #ifndef H5
		bgAudioMannagerFunc() {
			this.bgAudioMannager.onTimeUpdate(() => {
				this.musicTime.currentTime = this.bgAudioMannager.currentTime / 60;
				this.musicTime.duration = this.bgAudioMannager.duration / 60;
				this.musicTime.currentTime = this.musicTime.currentTime.toFixed(2);
				this.musicTime.duration = this.musicTime.duration.toFixed(2);
		
				//当前播放时间等于歌曲时间，那么状态为暂停
				if (
					this.globalData.bgAudioMannager.currentTime ==
					this.globalData.bgAudioMannager.duration
				) {
					this.isStop = true;
				}
			});
		},
		// #endif
		// #ifdef H5
		innerAudioContextFunc() {
			this.innerAudioContext.onTimeUpdate(() => {
				this.musicTime.currentTime = this.innerAudioContext.currentTime / 60;
				this.musicTime.duration = this.innerAudioContext.duration / 60;
				this.musicTime.currentTime = this.musicTime.currentTime.toFixed(2);
				this.musicTime.duration = this.musicTime.duration.toFixed(2);
		
				//当前播放时间等于歌曲时间，那么状态为暂停
				if (
					this.globalData.innerAudioContext.currentTime ==
					this.globalData.innerAudioContext.duration
				) {
					this.isStop = true;
				}
			});
		},
		// #endif
		getMusicUrl () {
			let _this = this;
			let params = {
				id: _this.musicDetail.id
			}
			_this.MusicApi.request('song/url', params, 'GET').then(res => {
				_this.musicDetail.url = res.data.data[0].url
				_this.musicStatus++;
			})
		},
		getMusicComment () {
			let _this = this;
			let params = {
				id : _this.musicDetail.id
			}
			_this.MusicApi.request('comment/music', params, 'GET').then(res => {
				_this.comment = res.data.comments
				_this.hotcomment = res.data.hotComments
			})
		},
		getMusicInfo () {
			let _this = this;
			let params = {
				ids: _this.musicDetail.id
			}
			_this.MusicApi.request('song/detail', params, 'GET').then(res => {
				res.data.songs[0].name ? _this.musicDetail.name = res.data.songs[0].name : _this.musicDetail.name = ''
				_this.musicDetail.picUrl = res.data.songs[0].al.picUrl
				let songs = res.data.songs[0].ar
				songs.forEach(item => {
					_this.musicDetail.author = _this.musicDetail.author + item.name + '/'
				})
				_this.musicDetail.author = _this.musicDetail.author.substr(0, _this.musicDetail.author.length - 1)
				_this.musicStatus++;
			})
		},
		playMusic() {
			this.musicStart('true'); //显示播放组件
			//播放音乐
			// #ifndef H5
			this.bgAudioMannager.stop();
			this.bgAudioMannager.title = this.musicDetail.name;
			this.bgAudioMannager.singer = this.musicDetail.author;
			this.bgAudioMannager.coverImgUrl = this.musicDetail.picUrl;
			this.bgAudioMannager.src = this.musicDetail.url;
			this.bgAudioMannager.play();
			// #endif
			// #ifdef H5
			this.innerAudioContext.autoplay = true;
			this.innerAudioContext.src = this.musicDetail.url;
			this.innerAudioContext.play();
			// #endif
		},
		toPausePlay() {
			//播放和暂停按钮
			if (this.isPlay) {
				// #ifndef H5
				this.bgAudioMannager.pause();
				// #endif
				// #ifdef H5
				this.innerAudioContext.pause();
				// #endif
				this.isPlay = false;
			} else {
				// #ifndef H5
				this.bgAudioMannager.play();
				// #endif
				// #ifdef H5
				this.innerAudioContext.play();
				// #endif
				this.isPlay = true;
			}
		},
		toAgain() {
			//重新播放音乐
			this.isStop = false;
			this.isPlay = true;
			this.playMusic();
		},
		sliderChange(e) {
			var time = e.detail.value;
			// #ifndef H5
			this.bgAudioMannager.seek(time * 60);
			// #endif
			// #ifdef H5
			this.innerAudioContext.seek(time * 60);
			// #endif
		}
	},
	watch:{
		musicStatus (val) {
			// 两个接口都加载完后播放音乐
			if (val == this.musicSwithNum) {
				this.playMusic();
			}
		}
	}
}
</script>

<style scoped>
page {
	width: 100%;
	height: 100%;
	background: url(../../static/images/bg.jpg) repeat 50% 50%;
}
.page-panel-h {
	position: relative;
	z-index: 1;
	width: 100%;
	height: 100%;
	color: #41b883;
	text-align: center;
}

.music-name {
	padding: 40upx 20upx 0upx;
	font-size: 40upx;
	font-weight: bold;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	overflow: hidden;
}

.music-author {
	font-size: 28upx;
}

.music-pic {
	margin: 60upx auto 0upx;
	width: 340upx;
	height: 340upx;
	border-radius: 50%;
	overflow: hidden;
	border: 15upx solid #41b883;
	box-shadow: 0px 0px 20upx rgba(233, 30, 99, 0.5);
}

.music-pic image {
	width: 340upx;
	height: 340upx;
	border-radius: 50%;
}

.player-panel {
	position: absolute;
	z-index: 2;
	/* 	border-top:1px solid #999999; */
	left: 0;
	top: 160%;
	bottonm: 0;
	width: 100%;
	padding: 20upx 0upx;
}

.player-btn {
	text-align: center;
	line-height: 100upx;
	padding-bottom: 100upx;
}

.player-btn .playStop,
.player-btn .nextPrev {
	display: inline-block;
}

.player-btn .playStop image {
	width: 100upx;
	height: 100upx;
	margin: 0upx 80upx;
}

.player-btn .nextPrev image {
	width: 70upx;
	height: 70upx;
}
.time {
	display: flex;
	padding: 0upx 30upx;
}
.time .item {
	font-size: 24upx;
	flex: 1;
	text-align: left;
}
.time .item:nth-child(2) {
	text-align: right;
}
.comment{
	position: absolute;
	top: 100%;
	left: 0;
	padding: 20upx;
}
.comment .item{
	width: 100%;
}
.comment .item image{
	width:100upx;
	height:100upx;
}
.comment .item{
	background: #fff;
	border-radius: 10upx;
	box-shadow: 0 0 10px hsla(0, 0%, 51%, 0.3);
	margin-top: 20upx;
	display: flex;
}
.comment .item .index{
	margin-right: 20upx;
	line-height: 50%;
	font-weight: bold;
	font-size: 48upx;
	padding: 20upx 10upx;
	color: #666;
}
.comment .item .info {
	flex:1;
	overflow: hidden;
	padding: 20upx 0upx;
}
.comment .item .info .name{
	font-size: 32upx;
	overflow: hidden;
	text-overflow:ellipsis;
	white-space: nowrap;
}
.comment .item .info .arName{
	font-size: 28upx;
	color: #888;
}
.comment .item .btn{
	width: 70upx;
	line-height: 90upx;
}
/* .comment .item .btn image{
	width: 100%;
	height: 70upx;
} */
</style>
