<template>
	<view>
		<view class="page-title">
			<text class="themeColor">歌</text>手榜
		</view>
		<scroll-view class="scroll-view_H" scroll-x style="width: 100%;">
			<view class="toplistArtistList">
				<view class="item" 
					v-for="(item, index) in toplistArtistList"
					:key="item.index"
					v-if="index <= 20"
					@tap="openSinger(item.id)"
				>
					<image :src="item.img1v1Url" mode="widthFix"></image>
					<text class="name"> {{ item.name }}</text>
				</view>	
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props: ['toplistArtistList'],
		methods:{
			openSinger (id) {
				uni.navigateTo({
					url:'../singer/index?id=' + id
				})
			}
		}
	}
</script>

<style scoped>
.toplistArtistList {
	display: flex;
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
</style>
