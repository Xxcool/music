<template>
	<view>	
		<view class="page-title" @tap="openPersonalizedList()">
			<text class="themeColor">推</text>荐歌单
		</view>
		<scroll-view class="scroll-view_H" scroll-x style="width: 100%;">
			<view class="personalizedList">
				<view class="item" 
					v-for="(item, index) in personalizedList"
					:key="item.index"
					v-if="index <= 10"
				>
					<image :src="item.picUrl" mode="widthFix"></image>
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
				swiper: {
					indicatorDots: true,
					autoplay: true,
					interval: 5000,
					duration: 500,
					circular: true,
					indicatorActiveColor: '#e91e63',
					previousMargin: '10px'
				}
			};
		},
		props:['personalizedList']
	}
</script>

<style scoped>
.personalizedList {
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

.personalizedList .item image {
	max-width: 100%;
	height: 240upx;
	border-radius: 10upx;
	box-shadow: 0 0 10px hsla(0, 0%, 51%, 0.1);
}
</style>
