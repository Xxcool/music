<template>
	<view>
		<view class="playlist">
			<view class="item" 
				v-for="(item, index) in musicList" 
				:key="item.index"
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
		data() {
			return {
				
			}
		},
		props:['musicList'],
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
