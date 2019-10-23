<template>
	<view class="page-panel">
		<!-- Banner -->
		<BannerList :bannerList="bannerList"></BannerList>
		<!-- 推荐歌单 -->
		<RecommendList :personalizedList="personalizedList"></RecommendList>
		<!-- MV排行 -->
		<view class="page-title" @tap="openPersonalizedList()">
			<text class="themeColor">M</text>v排行
		</view>
		<scroll-view class="scroll-view_H" scroll-x style="width: 100%;">
			<view class="topMvList">
				<view class="item" 
					v-for="(item, index) in TopMvList"
					:key="item.index"
					v-if="index <= 10"
				>
					<image :src="item.cover" mode="widthFix"></image>
					<text class="name"> {{ item.name }}</text>
					<view class="playBtn"> <view class="icon"></view> </view>
				</view>	
			</view>
		</scroll-view>
		<!-- 歌手榜 -->
		<view class="page-title">
			<text class="themeColor">歌</text>手榜
		</view>
		<scroll-view class="scroll-view_H" scroll-x style="width: 100%;">
			<view class="toplistArtistList">
				<view class="item" 
					v-for="(item, index) in toplistArtistList"
					:key="item.index"
					v-if="index <= 10"
				>
					<image :src="item.img1v1Url" mode="widthFix"></image>
					<text class="name"> {{ item.name }}</text>
					<view class="playBtn"> <view class="icon"></view> </view>
				</view>	
			</view>
		</scroll-view>
		<!-- 推荐节目 -->
		<view class="page-title">
			<text class="themeColor">{{ RecommendTitle }}</text>{{ RecommentAllTitle }}
		</view>
		<view class="djRecommendList">
			<view
				class="item"
				v-for="(item, index) in programRecommendList"
				:key="item.index"
				@tap="toPlay(item.mainSong.id)"
			>
				<view class="pic">
					<image :src="item.coverUrl" mode="widthFix"></image>
					<view class="playBtn"> <view class="icon"></view> </view>
				</view>
				<view class="content">
					<view class="name">{{ item.name }}</view>
					<view class="rcmdtext">{{ item.reason }}</view>
					<view class="info">
						<text>播放 : {{ item.listenerCount }}次</text>
						<text class="category" v-if="item.channels.length !== 0"
							>类型 : {{ item.channels[0] }}</text
						>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import BannerList from '../../components/bannelList.vue'
	import RecommendList from '../../components/recommendList.vue'
	export default {
		components:{
			BannerList,
			RecommendList
		},
		data() {
			return {
				bannerList: [],
				personalizedList: [],
				TopMvList: [],
				toplistArtistList: [],
				programRecommendList: [],
				RecommendTitle: '',
				RecommentAllTitle: '',
				swiper: {
					indicatorDots: true,
					autoplay: true,
					interval: 5000,
					duration: 500,
					circular: true,
					indicatorActiveColor: '#e91e63',
					previousMargin: '10px'
				}
			}
		},
		onLoad() {
			this.getDataList()
		},
		methods: {		
			getDataList() {
				this.getBannerList() //Banner列表
				this.getPersonalizedList() //推荐歌单
				this.getTopMvList()  //Mv排行
				this.getToplistArtistList() //歌手榜单
				this.getProgramRecommendList() //精彩节目推荐
			},
			getBannerList () {
				let _this = this;
				_this.MusicApi.request('banner', '', 'GET').then(res => {
					_this.bannerList = res.data.banners
				})
			},
			getPersonalizedList () {
				let _this = this;
				_this.MusicApi.request('personalized', '', 'GET').then(res => {
					_this.personalizedList = res.data.result
				})
			},
			getTopMvList () {
				let _this = this;
				_this.MusicApi.request('top/mv', '', 'GET').then(res => {
					_this.TopMvList = res.data.data
				})
			},
			getToplistArtistList () {
				let _this = this;
				let params = {
					limit : 10
				}
				_this.MusicApi.request('toplist/artist', params, 'GET').then(res => {
					_this.toplistArtistList = res.data.list.artists
				})
			},
			getProgramRecommendList () {
				let _this = this;
				_this.MusicApi.request('program/recommend', '', 'GET').then(res => {
					console.log(res)
					_this.RecommendTitle = res.data.name.substring(0,1)
					_this.RecommentAllTitle = res.data.name.substring(1)
					_this.programRecommendList = res.data.programs
				})
			}
		}
	}
</script>

<style scoped>
.banner swiper {
	height: 236upx;
	border-radius: 10upx;
	overflow: hidden;
}

.banner swiper swiper-item {
	padding: 0upx 5upx;
	box-sizing: border-box;
}

.banner image {
	width: 100%;
	height: 236upx;
	border-radius: 10upx;
	box-shadow: 0 0 10px hsla(0, 0%, 51%, 0.1);
}
.personalizedList,
.topMvList,
.toplistArtistList {
	display: flex;
}

.personalizedList .item {
	position: relative;
	z-index: 1;
	width: 240upx;
	height: 240upx;
	margin-right: 12upx;
}

.personalizedList .item .name {
	position: absolute;
	z-index: 2;
	color: #fff;
	left: 0upx;
	bottom: 0upx;
	font-size: 20upx;
	padding: 10upx;
	background: rgba(0, 0, 0, 0.3);
	width: 100%;
	min-height: 76upx;
	box-sizing: border-box;
	border-radius: 0upx 0upx 10upx 10upx;
}

.personalizedList .item image,
.topMvList .item image {
	max-width: 100%;
	height: 240upx;
	border-radius: 10upx;
	box-shadow: 0 0 10px hsla(0, 0%, 51%, 0.1);
}

.topMvList .item {
	position: relative;
	z-index: 1;
	width: 426upx;
	height: 240upx;
	margin-right: 12upx;
}

.topMvList .item .name {
	position: absolute;
	z-index: 2;
	color: #fff;
	left: 0upx;
	bottom: 0upx;
	font-size: 10px;
	padding: 15upx;
	background: rgba(0, 0, 0, 0.3);
	width: 100%;
	box-sizing: border-box;
	border-radius: 0upx 0upx 10upx 10upx;
}

.toplistArtistList .item {
	position: relative;
	z-index: 1;
	width: 150upx;
	height: 150upx;
	line-height: 142upx;
	text-align: center;
	margin-right: 20upx;
}

.toplistArtistList .item image {
	max-width: 100%;
	height: 150upx;
	border-radius: 50%;
	box-shadow: 0 0 10px hsla(0, 0%, 51%, 0.1);
	vertical-align: middle;
}

.toplistArtistList .item .name {
	position: absolute;
	z-index: 2;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.3);
	color: #fff;
	border-radius: 50%;
	font-size: 10px;
}

.djRecommendList .item {
	display: flex;
	margin-bottom: 40upx;
}

.djRecommendList .item .pic {
	position: relative;
	z-index: 1;
	margin-right: 40upx;
}

.djRecommendList .item .pic .playBtn {
	left: inherit;
	top: inherit;
	right: 20upx;
	bottom: 30upx;
	width: 50upx;
	height: 50upx;
}

.djRecommendList .item .pic .playBtn .icon {
	margin: 16upx 0upx 0upx 18upx;
	border-top: 10upx solid transparent;
	border-bottom: 10upx solid transparent;
	border-left: 20upx solid #e91e63;
}

.djRecommendList .item .pic image {
	width: 180upx;
	height: 180upx;
	border-radius: 10upx;
	box-shadow: 0 0 10px hsla(0, 0%, 51%, 0.3);
}

.djRecommendList .item .content {
	flex: 1;
}

.djRecommendList .item .content .name {
	font-size: 32upx;
	font-weight: bold;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	overflow: hidden;
}

.djRecommendList .item .content .rcmdtext {
	margin-top: 10upx;
	font-size: 28upx;
}

.djRecommendList .item .content .info {
	margin-top: 10upx;
	font-size: 20upx;
	color: #999;
}

.djRecommendList .item .content .category {
	margin-left: 40upx;
}
</style>
