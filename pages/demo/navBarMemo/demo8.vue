<template>
	<view class="content">
		<!-- 示例代码 开始-->
		<z-nav-bar title="右插槽-搜索图标">
			<view v-if="!isSearch" @click="isSearch = true" slot="right" class="search_box"></view>
			<view class="search_box1"  v-if="isSearch">
				<text class="icon_search"></text>
				<!-- <text class="prompt">搜索目的地/职位等</text> -->
				<u-input class="prompt" v-model="value" :type="type" :border="border" />
			</view>
		</z-nav-bar>
		<!---示例代码 结束---->
		<image src="../../../static/demo/2.jpg" mode="widthFix"></image>
		<image src="../../../static/demo/1.jpg" mode="widthFix"></image>
		<image src="../../../static/demo/3.jpg" mode="widthFix"></image>
		<image src="../../../static/demo/4.jpg" mode="widthFix"></image>
		<image src="../../../static/demo/5.jpg" mode="widthFix"></image>
		<image src="../../../static/demo/6.jpg" mode="widthFix"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isSearch: false,
				value: '',
				type: 'text',
				border: false
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	image {
		width: 750rpx;
		display: block;
	}
	.search_box {
		width: 35upx;
		height: 35upx;
		background-image: url('../../../static/demo/home_ic_search.png');
		background-position: center center;
		background-repeat: no-repeat;
		background-size: 100% 100%;
		margin-right: 15upx;
	}
	.search_box1 {
		margin-right: 30upx;
		width: 300upx;
		height: 64upx;
		background-color: #f5f5f5;
		border-radius: 32upx;
		display: flex;
		align-items: center;
		padding: 0upx 40upx;

		.prompt {
			font-size: 28upx;
			color: #cccccc;
		}
		.icon_search {
			background-image: url('../../../static/demo/map_ic_search.png');
			background-position: center center;
			background-repeat: no-repeat;
			background-size: cover;
			width: 29upx;
			height: 28upx;
			margin-right: 20upx;
		}
	}
</style>
