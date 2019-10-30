<template>
	<view>
		<uni-search-bar radius="100" placeholder="搜索歌曲、歌手、专辑" clearButton="always" @confirm="search" class="searchBtn" @cancel="clear"/>
		<view class="searchTitle" v-if="isHotList">热门搜索</view>
		<view  v-if="isHotList === false" class="searchRes">
			<text>搜索结果</text>
			<text @tap="returnHotList">返回热门搜索</text>
		</view>
		<view class="searchKeyword" v-if="isHotList">
			<view class="item" 
				v-for="(item, index) in HotMusicList" 
				:key="item.searchWord" 
				@tap="searchItem(item.searchWord)"
			>{{ item.searchWord }}</view>
		</view>
		<view class="playlist" v-if="isHotList === false">
			<view class="item" 
				v-for="(item, index) in musicDetail" 
				:key="item.id"
				@tap="openPlay(item.id)"
			>
<!-- 				<view class="index btn">
					<image :src="item.artists[0].img1v1Url" mode="widthFix"></image>
				</view> -->
				<view class="info">
					<view class="name">{{item.name}}</view>
					<text class="arName" v-if="item.alias.length">{{item.alias[0]}} / </text>
					<text class="arName">{{item.artists[0].name}}</text>
				</view>
				<view class="btn">
					<image src="../../static/images/play1.png" mode="widthFix"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'
export default {
	components:{
		uniSearchBar
	},
	data () {
		return {
			isHotList: true,
			musicDetail: ''
		}
	},
	props:['HotMusicList'],
	methods:{
		clear(item){
			this.isHotList = true
		},
		returnHotList () {
			this.isHotList = true
		},
		searchItem (index) {
			let _this = this;
			let params = {
				keywords : index
			}
			_this.MusicApi.request('search/default', params, 'GET').then(res => {
				_this.isHotList = false
				_this.musicDetail = res.data.result.songs
			})
		},
		search(res) {
			let _this = this;
			let params = {
				keywords : res.value
			}
			_this.MusicApi.request('search/default', params, 'GET').then(res => {
				_this.isHotList = false
				_this.musicDetail = res.data.result.songs
			})
		},
		openPlay (id) {
			uni.navigateTo({
				url: '../play/index?id=' + id
			})
		}
	}
}
</script>

<style scoped>
.searchBtn{
  padding: 0upx 0upx 10upx;
}
.searchTitle{
  border-top: 2upx solid #e2e2e2;
  font-size: 34upx;
  padding: 20upx 10upx;
}
.searchRes{
  width: 100%;
  height: 40upx;
  border-top: 2upx solid #e2e2e2;
  font-size: 34upx;
  padding: 20upx 10upx 0upx;
}
.searchRes text:first-child{
	float: left;
}
.searchRes text:last-child{
	float: right;
	margin-right: 10upx;
}

.searchKeyword{
  font-size: 34upx;
  line-height: 46upx;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
}
.searchKeyword .item{
  border-radius: 10upx;
  padding: 5upx 10upx;
  margin:10upx 10upx;
  border:1upx solid #e2e2e2;
  color:#888;
}

.playlist .item{
	background: #fff;
	border-radius: 10upx;
	box-shadow: 0 0 10px hsla(0, 0%, 51%, 0.3);
	margin-top: 20upx;
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
}
</style>
