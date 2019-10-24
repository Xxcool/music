<template>
	<view class="page-panel">
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
</template>

<script>
	import BannerList from '../../components/index/bannelList.vue'
	import RecommendList from '../../components/index/recommendList.vue'
	import TopmvList from '../../components/index/topmvList.vue'
	import SingerList from '../../components/index/singerList.vue'
	import ProgramRecommend from '../../components/index/programRecommend.vue'
	export default {
		components:{
			BannerList,
			RecommendList,
			TopmvList,
			SingerList,
			ProgramRecommend
		},
		data() {
			return {
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
			}
		}
	}
</script>

<style scoped>

</style>
