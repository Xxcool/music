<template>
	<view class="banner">
		<swiper
			:indicator-dots="swiper.indicatorDots"
			:autoplay="swiper.autoplay"
			:interval="swiper.interval"
			:duration="swiper.duration"
			:circular="swiper.circular"
			:indicator-active-color="swiper.indicatorActiveColor"
			:previous-margin="swiper.previousMargin"
			:next-margin="swiper.previousMargin"
		>
			<swiper-item
				v-for="(item, index) in bannerList"
				:key="index"
				@tap="openMusicRank(item)"
			>
				<image :src="item.imageUrl" mode="widthFix"></image>
			</swiper-item>
		</swiper>
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
					indicatorActiveColor: '#41b883',
					previousMargin: '10px'
				}
			};
		},
		props: ['bannerList'],
		methods:{
			openMusicRank (item) {
				console.log(item)
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
</style>
