<template>
	<view class="page-panel">
		<view class="head">
			<image v-if="headAddress" :src="headAddress"></image>
			<view class="name"> {{ singerName }}</view>
		</view>
		<view class="tab-title">
			<text class="item" :class="tabNum === 1 ? 'active' : '' " @tap="tabNum = 1">描述</text>
			<text class="item" :class="tabNum === 2 ? 'active' : '' " @tap="tabNum = 2">单曲</text>
			<text class="item" :class="tabNum === 3 ? 'active' : '' " @tap="tabNum = 3">MV</text>
		</view>
		<view class="content">
			<view v-if="tabNum === 1">
				<view class="singerdetail">{{ singerDetail.briefDesc }}</view>
				<view class="singerdetail" v-if="singerDetail.introduction">
					<view v-for="(item, index) in singerDetail.introduction" 
						:key="item.index"
					>
						<view>{{item.ti}}</view>
						<view>{{item.txt}}</view>
					</view>
				</view>
			</view>
			<view v-if="tabNum === 2">
				<MusicList :musicList="singerMusicList.hotSongs"></MusicList>
			</view>
			<view v-if="tabNum === 3">
				<MvList :datalist="singerMvList"></MvList>
			</view>
		</view>
	</view>
</template>

<script>
	import MusicList from '../../components/singer/musicList.vue'
	import MvList from '../../components/mv/mvList.vue'
	export default {
		components:{
			MusicList,
			MvList
		},
		data() {
			return {
				tabNum: 1,
				id: '',
				singerMvList: [],
				singerDetail: '',
				singerMusicList: [],
				headAddress: '',
				singerName: ''
			}
		},
		onLoad (e) {
			this.id = e.id
			this.getSingerMv() //获取mv列表
			this.getSingerDetail() //获取歌手详情
			this.getSingerMusicList() //获取音乐列表
			this.getSingerAlbum() //获取歌手专辑
		},
		methods: {
			getSingerMv () {
				let _this = this;
				let params = {
					id : this.id
				}
				_this.MusicApi.request('artist/mv', params, 'GET').then(res => {
					_this.singerMvList = res.data.mvs
				})
			},
			getSingerDetail () {
				let _this = this;
				let params = {
					id : this.id
				}
				_this.MusicApi.request('artist/desc', params, 'GET').then(res => {
					console.log(res)
					_this.singerDetail = res.data
				})
			},
			getSingerMusicList () {
				let _this = this;
				let params = {
					id : this.id
				}
				_this.MusicApi.request('artists', params, 'GET').then(res => {
					_this.singerMusicList = res.data
					_this.headAddress = res.data.artist.picUrl
					_this.singerName = res.data.artist.name
				})
			},
			getSingerAlbum () {
				let _this = this;
				let params = {
					id : this.id
				}
				_this.MusicApi.request('artist/album', params, 'GET').then(res => {
					console.log(res, '专辑')
				})
			}
		}
	}
</script>

<style scoped>
.tab-title{
	display: flex;
	text-align: center;
}
.tab-title .item{
	flex: 1;
	font-size: 26upx;
	font-weight: bold;
	color: #888;
	padding: 20upx 40upx;
	border-bottom: 3px solid #fff;
}
.tab-title .active{
	border-color: #e91e63;
}
.head{
	position: relative;
	z-index: 1;
	width: 300upx;
	height: 300upx;
	text-align: center;
	margin: 20upx auto;
	font-weight: bold;
	border-radius: 50%;
	overflow: hidden;
	color: #fff;
	box-shadow: 0 0 10px hsla(0, 0%, 51%, 0.3);
}
.head image{
	width: 300upx;
	height: 300upx;
}
.head .name{
	z-index: 2;
	position: absolute;
	left: 0;
	top: 0;
	width: 300upx;
	height: 300upx;
	line-height: 300upx;
	background: rgba(0, 0, 0, 0.3);
}
.content{
	padding: 30upx;
}
.content .singerdetail{
	font-size: 33upx;
	color: #666;
	text-indent: 2em;
	box-shadow: 0 0 10px hsla(0, 0%, 51%, 0.1);
	line-height: 2;
	border-radius: 10upx;
}

/* .playlist .item{
	background: #fff;
	border-radius: 10upx;
	box-shadow: 0 0 10px hsla(0, 0%, 51%, 0.3);
	margin-top: 32upx;
	padding: 20upx 32upx;
	display: flex;
}
.playlist .item .index{
	margin-right: 32upx;
	line-height: 94upx;
	font-weight: bold;
	font-size: 48upx;
	padding: 0upx 10upx;
	color: #666;
}
.playlist .item .info {
	flex:1;
	overflow: hidden;
}
.playlist .item .info .name{
	font-size: 32upx;
	overflow: hidden;
	text-overflow:ellipsis;
	white-space: nowrap;
}
.playlist .item .info .arName{
	font-size: 28upx;
	color: #888;
}
.playlist .item .btn{
	width: 70upx;
	line-height: 90upx;
}
.playlist .item .btn image{
	width: 100%;
	height: 70upx;
} */
</style>
