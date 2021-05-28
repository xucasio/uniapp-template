<template>
	<view>
		<z-nav-bar backState="2000" title="活动"></z-nav-bar>
		<!-- 公共组件-每个页面必须引入 -->
		<public-module></public-module>
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
	data() {
		return {
		};
	},
	mixins:[baseMixin],
	computed: {
		...mapState(['userInfo'])
	},
	//方法
	methods: {
		...mapMutations(['setWebViewUrl']),
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
</style>
