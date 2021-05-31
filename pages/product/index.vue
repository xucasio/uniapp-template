<template>
	<view>
		<z-nav-bar backState="2000" title="产品"></z-nav-bar>
		<view class="u-wrap">
			<view class="u-search-box">
				<view class="u-search-inner">
					<u-icon name="search" color="#909399" :size="28"></u-icon>
					<text class="u-search-text">搜索uView</text>
				</view>
			</view>
			<view class="u-menu-wrap">
				<scroll-view scroll-y scroll-with-animation class="u-tab-view menu-scroll-view" :scroll-top="scrollTop">
					<view v-for="(item,index) in tabbar" :key="index" class="u-tab-item" :class="[current==index ? 'u-tab-item-active' : '']"
					 :data-current="index" @tap.stop="swichMenu(index)">
						<text class="u-line-1">{{item.name}}</text>
					</view>
				</scroll-view>
				<block v-for="(item,index) in tabbar" :key="index">
					<scroll-view scroll-y class="right-box" v-if="current==index">
						<view class="page-view">
							<view class="class-item">
								<view class="item-title">
									<text>{{item.name}}</text>
								</view>
								<view class="item-container">
									<view class="thumb-box" v-for="(item1, index1) in item.foods" :key="index1">
										<image class="item-menu-image" :src="item1.icon" mode=""></image>
										<view class="item-menu-name">{{item1.name}}</view>
									</view>
								</view>
							</view>
						</view>
					</scroll-view>
				</block>
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
import classifyData from "@/common/classify.data.js";
// #ifdef MP-WEIXIN
import {onLogin} from '@/config/login';
// #endif
export default {
	mixins:[baseMixin],
	data() {
		return {
			tabbar: classifyData,
			scrollTop: 0, //tab标题的滚动条位置
			current: 0, // 预设当前项的值
			menuHeight: 0, // 左边菜单的高度
			menuItemHeight: 0, // 左边菜单item的高度
		};
	},
	computed: {
		...mapState(['userInfo'])
	},
	//第一次加载
	onLoad(e) {
		// 隐藏原生的tabbar
		uni.hideTabBar();
		// #ifdef MP-WEIXIN
		onLogin(() => {
			this.getCoupon();
		});
		// #endif
	},
	//页面显示
	onShow() {
		// 隐藏原生的tabbar
		uni.hideTabBar();
	},
	//方法
	methods: {
		getImg() {
			return Math.floor(Math.random() * 35);
		},
		// 点击左边的栏目切换
		async swichMenu(index) {
			if(index == this.current) return ;
			this.current = index;
			// 如果为0，意味着尚未初始化
			if(this.menuHeight == 0 || this.menuItemHeight == 0) {
				await this.getElRect('menu-scroll-view', 'menuHeight');
				await this.getElRect('u-tab-item', 'menuItemHeight');
			}
			// 将菜单菜单活动item垂直居中
			this.scrollTop = index * this.menuItemHeight + this.menuItemHeight / 2 - this.menuHeight / 2;
		},
		// 获取一个目标元素的高度
		getElRect(elClass, dataVal) {
			new Promise((resolve, reject) => {
				const query = uni.createSelectorQuery().in(this);
				query.select('.' + elClass).fields({size: true},res => {
					// 如果节点尚未生成，res值为null，循环调用执行
					if(!res) {
						setTimeout(() => {
							this.getElRect(elClass);
						}, 10);
						return ;
					}
					this[dataVal] = res.height;
				}).exec();
			})
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
	.u-wrap {
		height: calc(100vh);
		/* #ifdef H5 */
		height: calc(100vh - var(--window-top));
		/* #endif */
		display: flex;
		flex-direction: column;
	}

	.u-search-box {
		padding: 18rpx 30rpx;
	}

	.u-menu-wrap {
		flex: 1;
		display: flex;
		overflow: hidden;
	}

	.u-search-inner {
		background-color: rgb(234, 234, 234);
		border-radius: 100rpx;
		display: flex;
		align-items: center;
		padding: 10rpx 16rpx;
	}

	.u-search-text {
		font-size: 26rpx;
		color: $u-tips-color;
		margin-left: 10rpx;
	}

	.u-tab-view {
		width: 200rpx;
		height: 100%;
	}

	.u-tab-item {
		height: 110rpx;
		background: #f6f6f6;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 26rpx;
		color: #444;
		font-weight: 400;
		line-height: 1;
	}
	
	.u-tab-item-active {
		position: relative;
		color: #000;
		font-size: 30rpx;
		font-weight: 600;
		background: #fff;
	}
	
	.u-tab-item-active::before {
		content: "";
		position: absolute;
		border-left: 4px solid $u-type-primary;
		height: 32rpx;
		left: 0;
		top: 39rpx;
	}

	.u-tab-view {
		height: 100%;
	}
	
	.right-box {
		background-color: rgb(250, 250, 250);
	}
	
	.page-view {
		padding: 16rpx;
	}
	
	.class-item {
		margin-bottom: 30rpx;
		background-color: #fff;
		padding: 16rpx;
		border-radius: 8rpx;
	}
	
	.item-title {
		font-size: 26rpx;
		color: $u-main-color;
		font-weight: bold;
	}
	
	.item-menu-name {
		font-weight: normal;
		font-size: 24rpx;
		color: $u-main-color;
	}
	
	.item-container {
		display: flex;
		flex-wrap: wrap;
	}
	
	.thumb-box {
		width: 33.333333%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		margin-top: 20rpx;
	}
	
	.item-menu-image {
		width: 120rpx;
		height: 120rpx;
	}
</style>
