(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/module/navigation"],{"01ee":function(t,n,e){"use strict";e.r(n);var o=e("4ba9"),a=e.n(o);for(var c in o)"default"!==c&&function(t){e.d(n,t,(function(){return o[t]}))}(c);n["default"]=a.a},"4ba9":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=function(){e.e("components/common/popup").then(function(){return resolve(e("53e5"))}.bind(null,e)).catch(e.oe)},a={components:{zPopup:o},props:{bg:{type:Boolean,default:!0}},data:function(){return{path:"",navigationList:[{pagePath:"pages/template/addTemplate",iconPath:"static/icon/tab/icon_home.png",selectedIconPath:"static/icon/tab/icon_home_c.png",text:"新增功能"},{pagePath:"pages/demo/common",iconPath:"static/icon/tab/icon_wode.png",selectedIconPath:"static/icon/tab/icon_wode_c.png",text:"组件示例"},{iconPath:"static/icon/tab/icon_home_c.png",text:"凸起导航",raised:!0},{pagePath:"pages/sdkDemo/common",iconPath:"static/icon/tab/icon_xiaoxi.png",selectedIconPath:"static/icon/tab/icon_xiaoxi_c.png",text:"SDK示例"},{pagePath:"pages/template/common",iconPath:"static/icon/tab/icon_xiaoxi.png",selectedIconPath:"static/icon/tab/icon_xiaoxi_c.png",text:"模板页面"}],popupShow:!1}},created:function(){var t=getCurrentPages(),n=t[t.length-1];this.path=n.route},methods:{onPageJump:function(n){this.path!==n&&t.switchTab({url:"/"+n})},onRaised:function(){this.popupShow=!0}}};n.default=a}).call(this,e("543d")["default"])},a650:function(t,n,e){"use strict";e.r(n);var o=e("e575"),a=e("01ee");for(var c in a)"default"!==c&&function(t){e.d(n,t,(function(){return a[t]}))}(c);e("b0f3");var i,u=e("f0c5"),s=Object(u["a"])(a["default"],o["b"],o["c"],!1,null,"14bb49da",null,!1,o["a"],i);n["default"]=s.exports},b0f3:function(t,n,e){"use strict";var o=e("b100"),a=e.n(o);a.a},b100:function(t,n,e){},e575:function(t,n,e){"use strict";var o;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return c})),e.d(n,"a",(function(){return o}));var a=function(){var t=this,n=t.$createElement;t._self._c},c=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/module/navigation-create-component',
    {
        'components/module/navigation-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("a650"))
        })
    },
    [['components/module/navigation-create-component']]
]);