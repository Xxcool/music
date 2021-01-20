import { config } from './api.js'

/**
 * request
 */
const request = (url, data, method) => {
	var promise = new Promise((resolve, reject) => {
		uni.showLoading({
			title: '加载中'
		});
		uni.request({
			url: config.server + url,
			data: data,
			method: method,
			success: (res) => {
				uni.hideLoading();
				if (res.data.code === 200) {
					// uni.showToast({
					// 	title: '数据获取成功',
					// 	duration: 1000,
					// 	icon: 'none'
					// });
					resolve(res)
				} else {
					reject(res.data)
					uni.showToast({
						title: '数据获取失败',
						duration: 5000,
						icon: 'none'
					});
				}
			},
			error: (err) => {
				reject('网络出错')
				uni.hideLoading();
				uni.showToast({
					title: '请求超时',
					duration: 5000,
					icon: 'none'
				});
			}
		})
	})
	return promise;
}

module.exports = {
	request
}