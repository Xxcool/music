<template>
	<view class="page-panel">
		<view class="video">
            <video id="myVideo" :src="mvurl"
            @error="videoErrorCallback" controls
			:poster="mvdetail.cover"></video>		
		</view>
		<view class="mvdetail">
			<view class="name">{{ mvdetail.name }}</view>
			<view class="tips">
				<text class="time">发布 : {{ mvdetail.publishTime }}</text>
				<text class="artistname">演唱 : {{ mvdetail.artistName }}</text>
			</view>
			<text class="desc">{{ mvdetail.desc }}</text>
		</view>
		<view class="page-title">
			<text class="themeColor">类</text>似MV
		</view>
		<view class="simiMvList">
			<view class="item" 
				v-for="(item, index) in mvsimilarList" 
				:key="item.id"
				@tap="changeItem(item.id)"
			>
				<view class="pic">
					<image :src="item.cover" mode="aspectFill"></image>
				</view>
				<view class="info">
					<text class="name">{{ item.name }}</text>
					<text class="artistName">{{ item.artistName }}</text>
				</view>
				<view class="btn">
					<image src="../../static/images/play1.png" mode="widthFix"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mvid: '',
				mvdetail: '',
				mvurl: '',
				mvsimilarList: []
			}
		},
		onLoad (e) {
			this.mvid = e.mvid
			this.getMvDetail() //获取当前的mv详情
			this.getMvUrl() //获取当前mv的视频url
			this.getMvsimilar() //获取类似mv列表
		},
		methods: {
			getMvDetail () {
				let _this = this;
				let params = {
					mvid: this.mvid
				}
				_this.MusicApi.request('mv/detail', params, 'GET').then(res => {
					_this.mvdetail = res.data.data
				})
			},
			getMvUrl () {
				let _this = this;
				let params = {
					id: this.mvid
				}
				_this.MusicApi.request('mv/url', params, 'GET').then(res => {
					_this.mvurl = res.data.data.url
				})
			},
			getMvsimilar () {
				let _this = this;
				let params = {
					mvid: this.mvid
				}
				_this.MusicApi.request('simi/mv', params, 'GET').then(res => {
					_this.mvsimilarList = res.data.mvs
					console.log(res)
				})
			},
			changeItem (id) {
				this.mvid = id
				this.getMvDetail() //获取当前的mv详情
				this.getMvUrl() //获取当前mv的视频url
				this.getMvsimilar() //获取类似mv列表
			},
			videoErrorCallback (e) {
				uni.showToast({
					title: e.target.errMsg,
					duration: 5000,
					icon: 'none'
				});
			},
		}
	}
</script>

<style scoped>
.video{
	width: 100%;
}
.video #myVideo{
	width: 100%;
}
.mvdetail{
	padding: 40upx 10upx;
}
.mvdetail .name{
	font-weight: bold;
}
.mvdetail .tips{
	padding: 30upx 0upx;
	font-size: 24upx;
	color: #999;
}
.mvdetail .artistname{
	margin-left: 40upx;
}
.mvdetail .desc{
	font-size: 28upx;
	color: #666;
}
.simiMvList .item {
	background: #fff;
	border-radius: 10upx;
	box-shadow: 0 0 10px hsla(0, 0%, 51%, 0.2);
	margin-bottom: 40upx;
	display: flex;
}

.simiMvList .item .pic {
	width: 270upx;
	height: 200upx;
	margin-right: 30upx;
}

.simiMvList .item .pic image {
	max-width: 100%;
	height: 200upx;
	border-radius: 10upx;
}

.simiMvList .item .info {
	flex: 1;
	overflow: hidden;
	padding: 11upx 0upx;
}

.simiMvList .item .info .name {
	/* margin-top: 25upx; */
	font-weight: bold;
	font-size: 30upx;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	overflow: hidden;
}

.simiMvList .item .info .artistName {
	color: #999;
	font-size: 24upx;
}

.simiMvList .item .btn{
	width: 70upx;
	line-height: 150upx;
	padding: 0upx 21upx;
}
.simiMvList .item .btn image{
	width: 100%;
	height: 70upx;
}
</style>
