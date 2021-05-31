import Vue from 'vue'
import App from './App'
import uView from "uview-ui";
// uview ui
Vue.use(uView);

//数据管理中心
import store from '@/store'
Vue.prototype.$store = store;
// 工具
import '@/plugins/utils.js';
//权限配置中心
import base from '@/config/baseUrl'
Vue.prototype.$base = base;
//挂载全局http请求
import $http from '@/config/requestConfig'
Vue.prototype.$http = $http;

// #ifdef MP-WEIXIN
//挂载全局微信分享
import { wxShare } from '@/config/utils'
Vue.prototype.wxShare = wxShare;
// #endif

//判断是否登录
import { judgeLogin } from '@/config/login';
Vue.prototype.judgeLogin = judgeLogin;
Vue.config.productionTip = false;
// #ifdef H5
//微信SDK
import '@/plugins/wxJsSDK.js';
// #endif

// i18n部分的配置
// 引入语言包，注意路径
import Chinese from '@/common/locales/zh.js';
import English from '@/common/locales/en.js';

// VueI18n
import VueI18n from '@/common/vue-i18n.min.js';

// VueI18n
Vue.use(VueI18n);

const i18n = new VueI18n({
	// 默认语言
	locale: 'zh',
	// 引入语言文件
	messages: {
		'zh': Chinese,
		'en': English,
	}
});

// 由于微信小程序的运行机制问题，需声明如下一行，H5和APP非必填
Vue.prototype._i18n = i18n;

//全局组件
import MescrollBody from "@/components/mescroll-uni/mescroll-body.vue";
Vue.component("mescroll-body", MescrollBody);
App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount();