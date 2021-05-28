<template>
	<view>
		<z-nav-bar backState="2000" title="首页"></z-nav-bar>
		<!-- 公共组件-每个页面必须引入 -->
		<public-module></public-module>
		<!-- banner -->
		<view class="banner_swiper_box">
			<swiper class="banner_swiper" :indicator-dots="true" :autoplay="false" :interval="3000" circular :duration="1000" @change="onSwiperChange">
				<swiper-item v-for="(item, index) of bannerList" :key="index">
					<view class="banner_img" :class="{ active: swiperIndex == index }">
						<!-- <image :src="item.img" mode="aspectFill" @click="onBanner(item)"></image> -->
						<image :src="item.img" @click="onBanner(item)"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="nav_list" @click="onPageJump('/pages/demo/themeColor')">
			<image :src="'../../static/demo/icon_case.png'" mode="aspectFit"></image>
			<text>项目主题色介绍</text>
		</view>
		<view class="nav_list" @click="onPageJump('/pages/demo/navBarMemo/index')">
			<image :src="'../../static/demo/icon_case.png'" mode="aspectFit"></image>
			<text>头部导航示例</text>
		</view>
		<view class="nav_list" @click="onPageJump('/pages/demo/formDemo')">
			<image :src="'../../static/demo/icon_case.png'" mode="aspectFit"></image>
			<text>表单模板</text>
		</view>
		<view class="nav_list" @click="onPageJump('/pages/demo/list')">
			<image :src="'../../static/demo/icon_case.png'" mode="aspectFit"></image>
			<text>上拉加载/下拉刷新列表</text>
		</view>
		<view class="nav_list" @click="onPageJump('/pages/demo/areaSelect')">
			<image :src="'../../static/demo/icon_case.png'" mode="aspectFit"></image>
			<text>地区选择</text>
		</view>
		<view class="nav_list" @click="onPageJump('/pages/demo/popup')">
			<image :src="'../../static/demo/icon_case.png'" mode="aspectFit"></image>
			<text>弹窗</text>
		</view>
		<view class="nav_list" @click="onPageJump('/pages/demo/prompt')">
			<image :src="'../../static/demo/icon_case.png'" mode="aspectFit"></image>
			<text>弹窗输入框</text>
		</view>
		<view class="nav_list" @click="onPageJump('/pages/demo/swipeAction')">
			<image :src="'../../static/demo/icon_case.png'" mode="aspectFit"></image>
			<text>滑动操作</text>
		</view>
		<view class="nav_list" @click="onPageJump('/pages/demo/parser')">
			<image :src="'../../static/demo/icon_case.png'" mode="aspectFit"></image>
			<text>富文本编译</text>
		</view>
		<view class="nav_list" @click="onPageJump('/pages/demo/waterfall/common')">
			<image :src="'../../static/demo/icon_case.png'" mode="aspectFit"></image>
			<text>瀑布流列表</text>
		</view>
		<view class="nav_list" @click="onPageJump('/pages/shortVideo')">
			<image :src="'../../static/demo/icon_case.png'" mode="aspectFit"></image>
			<text>防抖音滑动视频（进度调整，丝滑流畅，支持app，小程序、H5)</text>
		</view>
		<view class="video_box" v-if="videoShow" @click="onCloseVideo"><video :src="videoUrl" autoplay="true" controls></video></view>
		<z-navigation></z-navigation>
	</view>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import {baseMixin} from '@/mixins/mixins';
// #ifdef MP-WEIXIN
import {onLogin} from '@/config/login';
// #endif
export default {
	mixins:[baseMixin],
	data() {
		return {
			videoUrl: '',
			videoShow: false,
			swiperIndex: 0,
			bannerList: [
				{img: '../../static/index/banner1.png'},
				{img: '../../static/index/banner2.png'},
				{img: '../../static/index/banner3.png'},
				]
		};
	},
	computed: {
		...mapState(['userInfo'])
	},
	//第一次加载
	onLoad(e) {
		// #ifdef MP-WEIXIN
		onLogin(() => {
			this.getCoupon();
		});
		// #endif
	},
	//页面显示
	onShow() {
	},
	//方法
	methods: {
		...mapMutations(['setWebViewUrl']),
		pageData() {},
		onPageJump(url) {
			uni.navigateTo({
				url: url
			});
		},
		// 轮播图点击
		onBanner(item) {
			if (item.jumpType == 1201) {
				// #ifdef H5
				window.open(item.jumpRecord.webViewUrl);
				// #endif 
				// #ifndef H5
				this.$store.commit("setWebViewUrl", item.jumpRecord.webViewUrl);
				uni.navigateTo({
					url: '/pages/home/webView'
				});
				// #endif
			} else if (item.jumpType == 1301) {
				this.videoUrl = item.jumpRecord.videoUrl;
				this.videoShow = true;
			}
		},
		// 轮播图变化
		onSwiperChange(e){
			this.swiperIndex = e.detail.current;
		}
	},
	//页面隐藏
	onHide() {},
	//页面卸载
	onUnload() {},
	//页面下来刷新
	onPullDownRefresh() {},
	//页面上拉触底
	onReachBottom() {},
	//用户点击分享
	onShareAppMessage(e) {
		return this.wxShare();
	}
};
</script>
<style lang="scss" scoped>
@import '@/style/mixin.scss';
.nav_list {
	background-color: #fff;
	padding: 30upx;
	display: flex;
	align-items: center;
	position: relative;
	margin-bottom: 10upx;
	&:active {
		background-color: #F5f5f5;
	}
	image {
		width: 40upx;
		height: 40upx;
	}
	text {
		font-size: 28upx;
		color: #333;
		margin-left: 30upx;
	}
	&::after {
		content: '';
		position: absolute;
		right: 30upx;
		top: 50%;
		transform: translateY(-50%);
		width: 40upx;
		height: 40upx;
		background-image: url('../../static/demo/icon_right.png');
		background-position: center center;
		background-repeat: no-repeat;
		background-size: cover;
	}
}



.video_box {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: #000;
	display: flex;
	align-items: center;
	justify-content: center;
	video {
		width: 100%;
	}
}
.banner_swiper_box {
	background-color: #fff;
	.banner_swiper {
		swiper-item {
			box-sizing: border-box;
			display: flex;
			align-items: center;
			width: 100%;
			.banner_img {
				width: 100%;
				height: 100%;
				// transform: scale(0.9);
				transition: all 0.4s;
				&.active {
				}
				image {
					width: 100%;
					height: 100%;
					// box-shadow: 0upx 20upx 30upx 0upx rgba(0, 0, 0, 0.1);
				}
			}
		}
	}
}
</style>
