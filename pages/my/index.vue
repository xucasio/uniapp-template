<template>
	<view>
	<view>
			<u-navbar :is-back="false" title="　" :border-bottom="false">
				<view class="u-flex u-row-right" style="width: 100%;">
					<view class="camera u-flex u-row-center">
						<u-icon name="camera-fill" color="#000000" size="48"></u-icon>
					</view>
				</view>
			</u-navbar>
			<view class="u-flex user-box u-p-l-30 u-p-r-20 u-p-b-30">
				<view class="u-m-r-10">
					<u-avatar :src="pic" size="140"></u-avatar>
				</view>
				<view class="u-flex-1">
					<view class="u-font-18 u-p-b-20">uView ui</view>
					<view class="u-font-14 u-tips-color">微信号:helang_uView</view>
				</view>
				<view class="u-m-l-10 u-p-10">
					<u-icon name="scan" color="#969799" size="28"></u-icon>
				</view>
				<view class="u-m-l-10 u-p-10">
					<u-icon name="arrow-right" color="#969799" size="28"></u-icon>
				</view>
			</view>
			
			<view class="u-m-t-20">
				<u-cell-group>
					<u-cell-item icon="rmb-circle" title="支付"></u-cell-item>
				</u-cell-group>
			</view>
			
			<view class="u-m-t-20">
				<u-cell-group>
					<u-cell-item icon="star" title="收藏"></u-cell-item>
					<u-cell-item icon="photo" title="相册"></u-cell-item>
					<u-cell-item icon="coupon" title="卡券"></u-cell-item>
					<u-cell-item icon="heart" title="关注"></u-cell-item>
				</u-cell-group>
			</view>
			
			<view class="u-m-t-20">
				<u-cell-group>
					<u-cell-item icon="setting" title="设置"></u-cell-item>
				</u-cell-group>
			</view>
		</view>
		<!-- 公共组件-每个页面必须引入 -->
		<public-module></public-module>
		<!-- <view class="video_box" v-if="videoShow" @click="onCloseVideo"><video :src="videoUrl" autoplay="true" controls></video></view> -->
		
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
				pic:'https://uviewui.com/common/logo.png',
				show:true
		};
	},
	computed: {
		...mapState(['userInfo'])
	},
	//第一次加载
	onLoad(e) {
		// 隐藏原生的tabbar
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
page{
	background-color: #ededed;
}

.camera{
	width: 54px;
	height: 44px;
	
	&:active{
		background-color: #ededed;
	}
}
.user-box{
	background-color: #fff;
}
</style>
