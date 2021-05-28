<script>
import store from '@/store/index.js';
import socket from '@/config/socket';
import Vue from 'vue'
// #ifdef H5
import { h5Login } from '@/config/html5Utils';
// #endif
// #ifdef APP-PLUS
import APPUpdate from '@/plugins/APPUpdate';
// #endif
export default {
	onLaunch: function(e) {
		//取出缓存数据
		store.commit('setCacheData');
		// #ifdef MP-WEIXIN
		if (store.state.userInfo.token) {
			socket.init();
		}
		// #endif
		// #ifdef H5
		if (store.state.userInfo.token) {
			// socket.init();
		} else {
			h5Login('force', () => {
				// socket.init();
			});
		}
		// #endif
		// #ifdef APP-PLUS
		if (store.state.userInfo.token) {
			socket.init();
		}
		APPUpdate();
		// #endif
		uni.getSystemInfo({
			success: function(e) {
				// #ifndef MP
				Vue.prototype.StatusBar = e.statusBarHeight;
				if (e.platform == 'android') {
					Vue.prototype.CustomBar = e.statusBarHeight + 50;
				} else {
					Vue.prototype.CustomBar = e.statusBarHeight + 45;
				};
				// #endif
				// #ifdef MP-WEIXIN
				Vue.prototype.StatusBar = e.statusBarHeight;
				let custom = wx.getMenuButtonBoundingClientRect();
				Vue.prototype.Custom = custom;
				Vue.prototype.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
				// #endif       
				// #ifdef MP-ALIPAY
				Vue.prototype.StatusBar = e.statusBarHeight;
				Vue.prototype.CustomBar = e.statusBarHeight + e.titleBarHeight;
				// #endif
			}
		})
	},
	onShow: function(e) {
		// #ifdef MP-WEIXIN
		//获取二维码携带的参数
		let scene = decodeURIComponent(e.query.scene);
		scene = scene.split('&');
		let data = {
			//场景值
			scene: e.scene
		};
		scene.forEach(item => {
			let arr = item.split('=');
			if (arr.length == 2) {
				data[arr[0]] = arr[1];
			}
		});
		store.commit('setChatScenesInfo', Object.assign(e.query, data));
		//小程序更新
		if (uni.getUpdateManager) {
			const updateManager = uni.getUpdateManager();
			updateManager.onCheckForUpdate(function(res) {
				// 请求完新版本信息的回调
				// console.log(res.hasUpdate);
			});
			updateManager.onUpdateReady(function(res) {
				uni.showModal({
					title: '更新提示',
					content: '新版本已经准备好，是否重启应用？',
					success(res) {
						if (res.confirm) {
							// 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
							updateManager.applyUpdate();
						}
					}
				});
			});
			updateManager.onUpdateFailed(function(res) {
				// 新的版本下载失败
				uni.showModal({
					title: '已经有新版本了哟~',
					content: '新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~',
					showCancel: false
				});
			});
		}
		// #endif
	},
	onHide: function() {}
};
</script>

<style lang="scss">
// colorUI样式
@import "colorui/main.css";
@import "colorui/icon.css";

/* #ifndef APP-NVUE */
@import './style/common.scss';
@import './style/input.scss';
@import './style/table.scss';
page {
	height: 100%;
	background-color: #f5f5f5;
}
/* #endif */

/* #ifdef H5 */
//修复H5底部导航挡住内容bug
uni-app {
	height: auto;
}

//修复H5输入框上下不居中bug
.uni-input-form {
	height: 100%;
}
//去除地图上高德地图标识符
.amap-copyright {
	display: none !important;
}

.amap-logo {
	display: none !important;
}

.amap-ui-control-zoom {
	width: 60upx !important;
}

.amap-ui-control-zoom > * {
	width: 60upx !important;
	height: 60upx !important;
	line-height: 60upx !important;
}

.amap-ui-control-theme-dark {
	display: none !important;
}
/* #endif */
</style>
<style>
	@import "colorui/main.css";
	@import "colorui/icon.css";

	.nav-list {
		display: flex;
		flex-wrap: wrap;
		padding: 0px 40upx 0px;
		justify-content: space-between;
	}

	.nav-li {
		padding: 30upx;
		border-radius: 12upx;
		width: 45%;
		margin: 0 2.5% 40upx;
		background-image: url(https://cdn.nlark.com/yuque/0/2019/png/280374/1552996358352-assets/web-upload/cc3b1807-c684-4b83-8f80-80e5b8a6b975.png);
		background-size: cover;
		background-position: center;
		position: relative;
		z-index: 1;
	}

	.nav-li::after {
		content: "";
		position: absolute;
		z-index: -1;
		background-color: inherit;
		width: 100%;
		height: 100%;
		left: 0;
		bottom: -10%;
		border-radius: 10upx;
		opacity: 0.2;
		transform: scale(0.9, 0.9);
	}

	.nav-li.cur {
		color: #fff;
		background: rgb(94, 185, 94);
		box-shadow: 4upx 4upx 6upx rgba(94, 185, 94, 0.4);
	}

	.nav-title {
		font-size: 32upx;
		font-weight: 300;
	}

	.nav-title::first-letter {
		font-size: 40upx;
		margin-right: 4upx;
	}

	.nav-name {
		font-size: 28upx;
		text-transform: Capitalize;
		margin-top: 20upx;
		position: relative;
	}

	.nav-name::before {
		content: "";
		position: absolute;
		display: block;
		width: 40upx;
		height: 6upx;
		background: #fff;
		bottom: 0;
		right: 0;
		opacity: 0.5;
	}

	.nav-name::after {
		content: "";
		position: absolute;
		display: block;
		width: 100upx;
		height: 1px;
		background: #fff;
		bottom: 0;
		right: 40upx;
		opacity: 0.3;
	}

	.nav-name::first-letter {
		font-weight: bold;
		font-size: 36upx;
		margin-right: 1px;
	}

	.nav-li text {
		position: absolute;
		right: 30upx;
		top: 30upx;
		font-size: 52upx;
		width: 60upx;
		height: 60upx;
		text-align: center;
		line-height: 60upx;
	}

	.text-light {
		font-weight: 300;
	}

	@keyframes show {
		0% {
			transform: translateY(-50px);
		}

		60% {
			transform: translateY(40upx);
		}

		100% {
			transform: translateY(0px);
		}
	}

	@-webkit-keyframes show {
		0% {
			transform: translateY(-50px);
		}

		60% {
			transform: translateY(40upx);
		}

		100% {
			transform: translateY(0px);
		}
	}
</style>