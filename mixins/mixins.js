
export const baseMixin={
    data() {
        return {   
        }
    },
    methods: {
		onPageJump(url) {
			uni.navigateTo({
				url: url
			});
		}
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
}