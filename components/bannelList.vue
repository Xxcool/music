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
					indicatorActiveColor: '#e91e63',
					previousMargin: '10px'
				}
			};
		},
		props: ['bannerList']
	}
</script>

<style>

</style>
