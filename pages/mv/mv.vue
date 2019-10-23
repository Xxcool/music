<template>
	<view class="page-panel">
		<view class="tab-title">
			<text class="item" :class="tabNum === 1 ? 'active' : '' " @tap="tabNum = 1">最新MV</text>
			<text class="item" :class="tabNum === 2 ? 'active' : '' " @tap="tabNum = 2">MV排行</text>
			<text class="item" :class="tabNum === 3 ? 'active' : '' " @tap="tabNum = 3">推荐MV</text>
		</view>
		<view class="content">
			<view v-if="tabNum === 1"><MvList :data="newmvList"></MvList></view>
			<view v-if="tabNum === 2"><MvList :data="rankmvList"></MvList></view>
			<view v-if="tabNum === 3"><MvList :data="recommendmvList"></MvList></view>
		</view>
	</view>
</template>

<script>
	import MvList from '../../components/mvList.vue'
	export default {
		components : {
			MvList
		},
		data() {
			return {
				tabNum: 1,
				newmvList: [],
				rankmvList: [],
				recommendmvList: []
			}
		},
		onLoad(){
			this.getNewmvList() //最新mv
			this.getRankmvList() //mv排行
			this.getRecommendmvList() //推荐mv
		},
		methods: {
			getNewmvList() {
				let _this = this;
				_this.MusicApi.request('mv/first', '', 'GET').then(res => {
					_this.newmvList = res.data.data
				})
			},
			getRankmvList() {
				let _this = this;
				_this.MusicApi.request('top/mv', '', 'GET').then(res => {
					_this.rankmvList = res.data.data
				})
			},
			getRecommendmvList () {
				let _this = this;
				_this.MusicApi.request('personalized/mv', '', 'GET').then(res => {
					_this.recommendmvList = res.data.result
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
	margin: 0upx 20upx 30upx;
	border-radius: 10upx;
	border: 1px solid #e2e2e2;
}
.tab-title .active{
	background: #e91e63;
	color: #fff;
}
</style>
