<template>
	<view class="ease-row mvListT">
		<view
			class="ease-col-2-1 item"
			v-for="(item, index) in datalist"
			:key="item.id"
			@tap="openMvDetail(item.id)"
		>
			<image :src="item.cover ? item.cover : item.imgurl16v9" mode="aspectFill"></image>
			<text class="name">{{ item.name }}</text>
			<view class="playBtn"> <view class="icon"></view> </view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props: ['datalist'],
		methods: {
			openMvDetail(id) {
				uni.navigateTo({
					url:'../mvdetail/index?mvid=' + id
				})
			}
		}
	}
</script>

<style scoped>
.mvListT .item {
	position: relative;
	z-index: 1;
	margin-bottom: 25upx;
	height: 196upx;
	border-radius: 10upx;
	box-shadow: 0 0 10px hsla(0, 0%, 50%, 0.1);
}
.mvListT .item image{
	width: 100%;
	height: 196upx;
	border-radius: 10upx;
	object-fit: cover;
	object-position: right top;
}
.mvListT .item .name {
	position: absolute;
	z-index: 2;
	overflow: hidden;
	font-size: 26upx;
	padding: 12upx 16upx;
	text-overflow:ellipsis;
	white-space: nowrap;
	bottom: 0;
	left: 0;
	width: 100%;
	color: #fff;
	background: rgba(0, 0, 0, 0.5);
	box-sizing: border-box;
}
.mvListT .item .playBtn {
	left: 40upx;
	top: 40upx;
	width: 50upx;
	height: 50upx;
}

.mvListT .item .playBtn .icon {
	margin: 16upx 0upx 0upx 18upx;
	border-top: 10upx solid transparent;
	border-bottom: 10upx solid transparent;
	border-left: 20upx solid #41b883;
}
</style>
