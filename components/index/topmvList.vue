<template>
	<view>
		<view class="page-title">
			<text class="themeColor">M</text>v排行
		</view>
		<scroll-view class="scroll-view_H" scroll-x style="width: 100%;">
			<view class="topMvList">
				<view class="item" 
					v-for="(item, index) in TopMvList"
					:key="item.index"
					v-if="index <= 10"
					@tap="openMvDetail(item.id)"
				>
					<image :src="item.cover" mode="widthFix"></image>
					<text class="name"> {{ item.name }}</text>
					<view class="playBtn"> <view class="icon"></view> </view>
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
		props: ['TopMvList'],
		methods:{
			openMvDetail (id) {
				let mvid = id
				uni.navigateTo({
					url:'../mvdetail/mvdetail?mvid=' + mvid
				})
			}
		}
	}
</script>

<style scoped>
.topMvList{
	display: flex;
}
.topMvList .item image {
	max-width: 100%;
	height: 240upx;
	border-radius: 10upx;
	box-shadow: 0 0 10px hsla(0, 0%, 51%, 0.1);
}

.topMvList .item {
	position: relative;
	z-index: 1;
	width: 426upx;
	height: 240upx;
	margin-right: 12upx;
}

.topMvList .item .name {
	position: absolute;
	z-index: 2;
	color: #fff;
	left: 0upx;
	bottom: 0upx;
	font-size: 10px;
	padding: 15upx;
	background: rgba(0, 0, 0, 0.3);
	width: 100%;
	box-sizing: border-box;
	border-radius: 0upx 0upx 10upx 10upx;
}
</style>
