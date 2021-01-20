<template>
	<view>
		<view class="page-title">
			<text class="themeColor">{{ RecommendTitle }}</text>{{ RecommentAllTitle }}
		</view>
		<view class="programRecommendList">
			<view
				class="item"
				v-for="(item, index) in programRecommendList"
				:key="item.mainSong.id"
				@tap="toPlay(item.mainSong.id)"
			>
				<view class="pic">
					<image :src="item.coverUrl" mode="widthFix"></image>
					<view class="playBtn"> <view class="icon"></view> </view>
				</view>
				<view class="content">
					<view class="name">{{ item.name }}</view>
					<view class="rcmdtext">{{ item.reason }}</view>
					<view class="info">
						<text>播放 : {{ item.listenerCount }}次</text>
						<text class="category" v-if="item.channels.length !== 0"
							>类型 : {{ item.channels[0] }}</text
						>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:['programRecommendList', 'RecommendTitle', 'RecommentAllTitle'],
		methods:{
			toPlay (id) {
				uni.navigateTo({
					url:'../play/index?id=' + id
				})
			}
		}
	}
</script>

<style scoped>
.programRecommendList .item {
	display: flex;
	margin-bottom: 40upx;
}

.programRecommendList .item .pic {
	position: relative;
	z-index: 1;
	margin-right: 40upx;
}

.programRecommendList .item .pic .playBtn {
	left: inherit;
	top: inherit;
	right: 20upx;
	bottom: 30upx;
	width: 50upx;
	height: 50upx;
}

.programRecommendList .item .pic .playBtn .icon {
	margin: 16upx 0upx 0upx 18upx;
	border-top: 10upx solid transparent;
	border-bottom: 10upx solid transparent;
	border-left: 20upx solid #41b883;
}

.programRecommendList .item .pic image {
	width: 180upx;
	height: 180upx;
	border-radius: 10upx;
	box-shadow: 0 0 10px hsla(0, 0%, 51%, 0.3);
}

.programRecommendList .item .content {
	flex: 1;
}

.programRecommendList .item .content .name {
	font-size: 32upx;
	font-weight: bold;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	overflow: hidden;
}

.programRecommendList .item .content .rcmdtext {
	margin-top: 10upx;
	font-size: 28upx;
}

.programRecommendList .item .content .info {
	margin-top: 10upx;
	font-size: 20upx;
	color: #999;
}

.programRecommendList .item .content .category {
	margin-left: 40upx;
}
</style>
