<template>
	<view class="page-panel" v-if="RankmusicList != '' ">
		<view class="playinfo ease-row">
			<view class="ease-col-3-1 coverImgUrl">
				<image :src="RankmusicList.coverImgUrl" mode="widthFix"></image>
			</view>
			<view class="ease-col-3-2">
				<view class="name">{{ RankmusicList.name }}</view>
				<view class="description">{{ RankmusicList.description }}</view>
			</view>
		</view>
		<view class="playlist">
			<view class="item" 
				v-for="(item, index) in RankmusicList.tracks" 
				:key="item.id"
				@tap="openPlay(item.id)"
			>
				<view class="index">{{ index + 1}}</view>
				<view class="info">
					<view class="name">{{item.name}}</view>
					<text v-for="(childItem, i) in item.ar" :key="childItem.i" class="arName"
						>{{ childItem.name }}
					</text>
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
	props:['RankmusicList'],
	methods: {
		openPlay (id) {
			uni.navigateTo({
				url: '../play/index?id=' + id
			})
		}
	}
}
</script>

<style scoped>
.page-panel{
	padding:0upx 20upx;
}
.playinfo .coverImgUrl{
	height: 200upx;
}
.playinfo .coverImgUrl image{
	width: 100%;
	height: 200upx;
	border-radius: 10upx;
	box-shadow: 0 0 10px hsla(0, 0%, 51%, 0.3);
}
.playinfo .name{
	font-weight: bold;
	font-size: 32upx;
}
.playinfo .description{
	margin-top: 6upx;
	color: #999;
	font-size: 22upx;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 3;
	overflow: hidden;
}
.playlist .item{
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
}
</style>
