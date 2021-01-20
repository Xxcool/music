<template>
	<view class="page-panel">
		<Play></Play>
		<view class="tab-title">
			<text class="item" :class="tabNum === 1 ? 'active' : '' " @tap="tabNum = 1">推荐音乐</text>
			<text class="item" :class="tabNum === 2 ? 'active' : '' " @tap="tabNum = 2">热歌榜</text>
			<text class="item" :class="tabNum === 3 ? 'active' : '' " @tap="tabNum = 3">搜索</text>
		</view>
		<view class="content">
			<view v-if="tabNum === 1">
				<!-- Banner -->
				<BannerList :bannerList="bannerList"></BannerList>
				<!-- 推荐歌单 -->
				<RecommendList :personalizedList="personalizedList"></RecommendList>
				<!-- MV排行 -->
				<TopmvList :TopMvList="TopMvList"></TopmvList>
				<!-- 歌手榜 -->
				<SingerList :toplistArtistList="toplistArtistList"></SingerList>
				<!-- 推荐节目 -->
				<ProgramRecommend 
					:programRecommendList="programRecommendList" 
					:RecommendTitle="RecommendTitle" 
					:RecommentAllTitle="RecommentAllTitle"
				></ProgramRecommend>
			</view>
			<view v-if="tabNum === 2">
				<!-- 热歌榜 -->
				<HotRankList :RankmusicList="RankmusicList"></HotRankList>
			</view>
			<view v-if="tabNum === 3">
				<!-- 搜索 -->
				<Search :HotMusicList="HotMusicList"></Search>
			</view>
		</view>
	</view>
</template>

<script>
	import Play from '@/components/play/index.vue'
	import BannerList from '@/components/index/bannelList.vue'
	import RecommendList from '@/components/index/recommendList.vue'
	import TopmvList from '@/components/index/topmvList.vue'
	import SingerList from '@/components/index/singerList.vue'
	import ProgramRecommend from '@/components/index/programRecommend.vue'
	import HotRankList from '@/components/index/hotRanklist.vue'
	import Search from '@/components/index/search.vue'
	export default {
		components:{
			Play,
			BannerList,
			RecommendList,
			TopmvList,
			SingerList,
			ProgramRecommend,
			HotRankList,
			Search
		},
		data() {
			return {
				tabNum: 1,
				bannerList: [],
				personalizedList: [],
				TopMvList: [],
				toplistArtistList: [],
				programRecommendList: [],
				RecommendTitle: '',
				RecommentAllTitle: '',
				HotMusicList: [],
				RankmusicList: []
			}
		},
		onLoad() {
			this.getDataList()
		},
		onPullDownRefresh() {
			//下拉请求所有数据
			this.getDataList(); //请求所有数据
			uni.stopPullDownRefresh();
		},
		methods: {		
			getDataList() {
				this.getBannerList() //Banner列表
				this.getPersonalizedList() //推荐歌单
				this.getTopMvList()  //Mv排行
				this.getToplistArtistList() //歌手榜单
				this.getProgramRecommendList() //精彩节目推荐
				this.getRankList() //热歌榜
				this.getHotMusic() //热门搜索
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
				_this.MusicApi.request('toplist/artist', '', 'GET').then(res => {
					_this.toplistArtistList = res.data.list.artists
				})
			},
			getProgramRecommendList () {
				let _this = this;
				_this.MusicApi.request('program/recommend', '', 'GET').then(res => {
					_this.RecommendTitle = res.data.name.substring(0,1)
					_this.RecommentAllTitle = res.data.name.substring(1)
					_this.programRecommendList = res.data.programs
				})
			},
			getRankList () {
				let _this = this;
				let params = {
					idx : 1
				}
				_this.MusicApi.request('top/list',params, 'get').then(res => {
					_this.RankmusicList = res.data.playlist
				})
			},
			getHotMusic () {
				let _this = this;
				_this.MusicApi.request('search/hot/detail', '', 'GET').then(res => {
					_this.HotMusicList = res.data.data
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
	box-shadow: 0 0 10px hsla(0, 0%, 50%, 0.1);
	margin: 0upx 20upx 20upx;
	border-radius: 10upx;
	border: 1px solid #e2e2e2;
}
.tab-title .active{
	background: #41b883;
	color: #fff;
}
</style>
