<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
/* 公用css
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.ease-row {
	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	-webkit-box-pack: justify;
	-ms-flex-pack: justify;
	-webkit-justify-content: space-between;
	justify-content: space-between;
	-webkit-box-lines: multiple;
	-moz-box-lines: multiple;
	-webkit-flex-wrap: wrap;
	-ms-flex-wrap: wrap;
	flex-wrap: wrap;
	-webkit-box-align: start;
	-ms-flex-align: start;
	-webkit-align-items: flex-start;
	align-items: flex-start;
}

.ease-row .ease-col-2-1 {
	box-sizing: border-box;
	width: 50%;
	width: calc((100% - 24upx) / 2);
}
.ease-row .ease-col-3-1 {
	box-sizing: border-box;
	width: 33.3333%;
	width: calc((100% - 48upx) / 3);
}
.ease-row .ease-col-3-2 {
	box-sizing: border-box;
	width: 33.3333%;
	width: calc(100% - ((100% - 48upx) / 3) - 24upx);
}
.ease-row .ease-col-4-1 {
	box-sizing: border-box;
	width: calc((100% - 24upx) / 4);
}
.ease-row .ease-col-4-3 {
	box-sizing: border-box;
	width: calc((100% - 24upx) / 4 * 3);
}
.page-panel {
	padding: 32upx;
}

.page-title {
	font-size: 36upx;
	padding: 25upx 0upx;
	font-weight: bold;
	color: rbga(72, 88, 162, 0.3);
}

.themeColor {
	color: #41b883;
	font-size: 46upx;
}

image {
	vertical-align: middle;
}

.mt30 {
	margin-top: 30upx;
}

.playBtn {
	position: absolute;
	z-index: 99;
	left: 30upx;
	top: 30upx;
	width: 80upx;
	height: 80upx;
	background: rgba(255, 255, 255, 0.8);
	border-radius: 50%;
}

.playBtn .icon {
	margin: 26upx 0upx 0upx 30upx;
	width: 0;
	height: 0;
	border-top: 14upx solid transparent;
	border-bottom: 14upx solid transparent;
	border-left: 28upx solid #41b883;
	border-radius: 5upx;
}

.font-w-b {
	font-weight: bold;
}

.privileges .item {
	background: #fff;
	border-radius: 10upx;
	box-shadow: 0 0 10px hsla(0, 0%, 51%, 0.3);
	margin-top: 32upx;
	padding: 20upx 32upx;
	display: flex;
}

.privileges .item .index {
	font-weight: bold;
	color: #666;
	margin-right: 32upx;
	line-height: 94upx;
	font-size: 48upx;
	padding: 0upx 10upx;
}

.privileges .item .info {
	flex: 1;
	overflow: hidden;
}

.privileges .item .info .name {
	width: 100%;
	font-size: 34upx;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.privileges .item .info .arName {
	font-size: 28upx;
	color: #888;
}

.privileges .item .btn {
	margin-top: 20upx;
	margin-left: 10upx;
	width: 70upx;
}
.privileges .item .btn text {
	display: inline-block;
	width: 10upx;
	height: 10upx;
	border-radius: 50%;
	background: #999;
	margin: 0upx 5upx;
}
</style>
