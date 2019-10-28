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
				<text>我是2</text>
			</view>
			<view v-if="tabNum === 3">
				<view class="search-block">
				              <view class="search-ico-wapper">
				                  <!-- <image src="../../static/chongzhi_sousuo/chongzhi-icon-sousuo@3x.png" class="search-ico" mode=""></image> -->
				              </view>
				              <input type="text" value="" placeholder="点击输入搜索内容" class="search-text" maxlength="10" focus/>
				              <view class="search-ico-wapper1">
				                 <!-- <image src="../../static/chongzhi_sousuo/chongzhi-icon-sys@3x.png" class="search-ico-1" mode=""></image> -->
				             </view>
				         </view>
			</view>
		</view>
	</view>
</template>

<script>
	import Play from '../../components/play/index.vue'
	import BannerList from '../../components/index/bannelList.vue'
	import RecommendList from '../../components/index/recommendList.vue'
	import TopmvList from '../../components/index/topmvList.vue'
	import SingerList from '../../components/index/singerList.vue'
	import ProgramRecommend from '../../components/index/programRecommend.vue'
	export default {
		components:{
			Play,
			BannerList,
			RecommendList,
			TopmvList,
			SingerList,
			ProgramRecommend
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
				RecommentAllTitle: ''
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
					_this.RecommendTitle = res.data.name.substring(0,1)
					_this.RecommentAllTitle = res.data.name.substring(1)
					_this.programRecommendList = res.data.programs
				})
			},
			getHotMusic () {
				let _this = this;
				_this.MusicApi.request('search/hot/detail', '', 'GET').then(res => {
					console.log(res)
				})
			}
		}
	}
</script>

<style scoped>
.tab-title{
	display: flex;
	text-align: center;
	padding:0upx 0upx 20upx;
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

 .search-ico, .search-ico-1{
     width: 40upx;
     height: 40upx;
 }
 .search-text{
     font-size: 14px;
     background-color: #FFFFFF;
     height: 60upx;
     width: 480upx;
 }
 .search-block{
	 margin-top: 30upx;
     display: flex;
     flex-direction: row;
     padding-left: 60upx;
     position: relative;
     top: -32upx;
	 border: 1px solid #000;
 }
 .search-ico-wapper{
     background-color: #FFFFFF;
     display: flex;
     flex-direction:column;
     justify-content: center;
     padding: 0upx 0upx 0upx 40upx;
     border-bottom-left-radius:18px;
     border-top-left-radius: 18px;
 }
 .search-ico-wapper1{
     background-color: #FFFFFF;
     display: flex;
     flex-direction:column;
     justify-content: center;
     padding: 0upx 40upx 0upx 0upx;
     border-bottom-right-radius:18px;
     border-top-right-radius: 18px;
 }
</style>
