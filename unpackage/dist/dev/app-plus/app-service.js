(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!***************************************!*\
  !*** D:/uniapp/uniapp-simple/main.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("__webpack_require__(/*! uni-pages */ 1);var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 18));\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 19));\n\nvar _store = _interopRequireDefault(__webpack_require__(/*! @/store */ 22));\n\n\nvar _baseUrl = _interopRequireDefault(__webpack_require__(/*! @/config/baseUrl */ 31));\n\n\nvar _requestConfig = _interopRequireDefault(__webpack_require__(/*! @/config/requestConfig */ 33));\n\n\n\n\n\n\n\nvar _login = __webpack_require__(/*! @/config/login */ 44);\n\n\n\n\n\n\n\n\n\n\nvar _zhouWeiNavBar = _interopRequireDefault(__webpack_require__(/*! @/components/common/zhouWei-navBar */ 45));\n\nvar _publicModule = _interopRequireDefault(__webpack_require__(/*! @/components/common/public-module.vue */ 50));\n\nvar _mescrollBody = _interopRequireDefault(__webpack_require__(/*! @/components/common/mescroll-uni/mescroll-body.vue */ 65));\n\n\n\nvar _home = _interopRequireDefault(__webpack_require__(/*! ./colorui/basics/home.vue */ 82));\n\n\nvar _cuCustom = _interopRequireDefault(__webpack_require__(/*! ./colorui/components/cu-custom.vue */ 87));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}_vue.default.prototype.$store = _store.default; //权限配置中心\n_vue.default.prototype.$base = _baseUrl.default; //挂载全局http请求\n_vue.default.prototype.$http = _requestConfig.default; //判断是否登录\n_vue.default.prototype.judgeLogin = _login.judgeLogin;_vue.default.config.productionTip = false; //全局组件\n_vue.default.component(\"nav-bar\", _zhouWeiNavBar.default);_vue.default.component(\"public-module\", _publicModule.default);_vue.default.component(\"mescroll-body\", _mescrollBody.default);_App.default.mpType = 'app'; // colorui\n_vue.default.component('basics', _home.default);_vue.default.component('cu-custom', _cuCustom.default);var app = new _vue.default(_objectSpread({ store: _store.default }, _App.default));\n\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJwcm90b3R5cGUiLCIkc3RvcmUiLCJzdG9yZSIsIiRiYXNlIiwiYmFzZSIsIiRodHRwIiwianVkZ2VMb2dpbiIsImNvbmZpZyIsInByb2R1Y3Rpb25UaXAiLCJjb21wb25lbnQiLCJ6aG91V2VpTmF2QmFyIiwicHVibGljTW9kdWxlIiwiTWVzY3JvbGxCb2R5IiwiQXBwIiwibXBUeXBlIiwiYmFzaWNzIiwiY3VDdXN0b20iLCJhcHAiLCIkbW91bnQiXSwibWFwcGluZ3MiOiJBQUFBLHdDQUFtQjtBQUNuQjs7QUFFQTs7O0FBR0E7OztBQUdBOzs7Ozs7OztBQVFBOzs7Ozs7Ozs7OztBQVdBOztBQUVBOztBQUVBOzs7O0FBSUE7OztBQUdBLDBHLHduQ0FuQ0FBLGFBQUlDLFNBQUosQ0FBY0MsTUFBZCxHQUF1QkMsY0FBdkIsQyxDQUNBO0FBRUFILGFBQUlDLFNBQUosQ0FBY0csS0FBZCxHQUFzQkMsZ0JBQXRCLEMsQ0FDQTtBQUVBTCxhQUFJQyxTQUFKLENBQWNLLEtBQWQsR0FBc0JBLHNCQUF0QixDLENBTUE7QUFFQU4sYUFBSUMsU0FBSixDQUFjTSxVQUFkLEdBQTJCQSxpQkFBM0IsQ0FDQVAsYUFBSVEsTUFBSixDQUFXQyxhQUFYLEdBQTJCLEtBQTNCLEMsQ0FRQTtBQUVBVCxhQUFJVSxTQUFKLENBQWMsU0FBZCxFQUF5QkMsc0JBQXpCLEVBRUFYLGFBQUlVLFNBQUosQ0FBYyxlQUFkLEVBQStCRSxxQkFBL0IsRUFFQVosYUFBSVUsU0FBSixDQUFjLGVBQWQsRUFBK0JHLHFCQUEvQixFQUNBQyxhQUFJQyxNQUFKLEdBQWEsS0FBYixDLENBQ0E7QUFFQWYsYUFBSVUsU0FBSixDQUFjLFFBQWQsRUFBdUJNLGFBQXZCLEVBR0FoQixhQUFJVSxTQUFKLENBQWMsV0FBZCxFQUEwQk8saUJBQTFCLEVBRUEsSUFBTUMsR0FBRyxHQUFHLElBQUlsQixZQUFKLGlCQUNYRyxLQUFLLEVBQUxBLGNBRFcsSUFFUlcsWUFGUSxFQUFaOztBQUlBSSxHQUFHLENBQUNDLE1BQUoiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCdcclxuLy/mlbDmja7nrqHnkIbkuK3lv4NcclxuaW1wb3J0IHN0b3JlIGZyb20gJ0Avc3RvcmUnXHJcblZ1ZS5wcm90b3R5cGUuJHN0b3JlID0gc3RvcmU7XHJcbi8v5p2D6ZmQ6YWN572u5Lit5b+DXHJcbmltcG9ydCBiYXNlIGZyb20gJ0AvY29uZmlnL2Jhc2VVcmwnXHJcblZ1ZS5wcm90b3R5cGUuJGJhc2UgPSBiYXNlO1xyXG4vL+aMgui9veWFqOWxgGh0dHDor7fmsYJcclxuaW1wb3J0ICRodHRwIGZyb20gJ0AvY29uZmlnL3JlcXVlc3RDb25maWcnXHJcblZ1ZS5wcm90b3R5cGUuJGh0dHAgPSAkaHR0cDtcclxuXHJcblxyXG5cclxuXHJcblxyXG4vL+WIpOaWreaYr+WQpueZu+W9lVxyXG5pbXBvcnQgeyBqdWRnZUxvZ2luIH0gZnJvbSAnQC9jb25maWcvbG9naW4nO1xyXG5WdWUucHJvdG90eXBlLmp1ZGdlTG9naW4gPSBqdWRnZUxvZ2luO1xyXG5WdWUuY29uZmlnLnByb2R1Y3Rpb25UaXAgPSBmYWxzZTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8v5YWo5bGA57uE5Lu2XHJcbmltcG9ydCB6aG91V2VpTmF2QmFyIGZyb20gXCJAL2NvbXBvbmVudHMvY29tbW9uL3pob3VXZWktbmF2QmFyXCI7XHJcblZ1ZS5jb21wb25lbnQoXCJuYXYtYmFyXCIsIHpob3VXZWlOYXZCYXIpO1xyXG5pbXBvcnQgcHVibGljTW9kdWxlIGZyb20gXCJAL2NvbXBvbmVudHMvY29tbW9uL3B1YmxpYy1tb2R1bGUudnVlXCI7XHJcblZ1ZS5jb21wb25lbnQoXCJwdWJsaWMtbW9kdWxlXCIsIHB1YmxpY01vZHVsZSk7XHJcbmltcG9ydCBNZXNjcm9sbEJvZHkgZnJvbSBcIkAvY29tcG9uZW50cy9jb21tb24vbWVzY3JvbGwtdW5pL21lc2Nyb2xsLWJvZHkudnVlXCI7XHJcblZ1ZS5jb21wb25lbnQoXCJtZXNjcm9sbC1ib2R5XCIsIE1lc2Nyb2xsQm9keSk7XHJcbkFwcC5tcFR5cGUgPSAnYXBwJ1xyXG4vLyBjb2xvcnVpXHJcbmltcG9ydCBiYXNpY3MgZnJvbSAnLi9jb2xvcnVpL2Jhc2ljcy9ob21lLnZ1ZSdcclxuVnVlLmNvbXBvbmVudCgnYmFzaWNzJyxiYXNpY3MpXHJcblxyXG5pbXBvcnQgY3VDdXN0b20gZnJvbSAnLi9jb2xvcnVpL2NvbXBvbmVudHMvY3UtY3VzdG9tLnZ1ZSdcclxuVnVlLmNvbXBvbmVudCgnY3UtY3VzdG9tJyxjdUN1c3RvbSlcclxuXHJcbmNvbnN0IGFwcCA9IG5ldyBWdWUoe1xyXG5cdHN0b3JlLFxyXG5cdC4uLkFwcFxyXG59KVxyXG5hcHAuJG1vdW50KCk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!******************************************!*\
  !*** D:/uniapp/uniapp-simple/pages.json ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('pages/index/index', function () {return Vue.extend(__webpack_require__(/*! pages/index/index.vue?mpType=page */ 2).default);});

/***/ }),
/* 2 */
/*!*****************************************************************!*\
  !*** D:/uniapp/uniapp-simple/pages/index/index.vue?mpType=page ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 3);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 5);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 17);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/index/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ3VLO0FBQ3ZLLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiZTg0YTNjJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL+WuieijheWMhS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL2luZGV4L2luZGV4LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!***********************************************************************************************!*\
  !*** D:/uniapp/uniapp-simple/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 4 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/uniapp/uniapp-simple/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "content"), attrs: { _i: 0 } },
    [
      _c(
        "cu-custom",
        { attrs: { bgColor: "bg-gradual-blue", isBack: true, _i: 1 } },
        [
          _c("template", { slot: "backText" }),
          _c("template", { slot: "content" })
        ],
        2
      ),
      _vm._$s(4, "i", _vm.PageCur == "basics")
        ? _c("basics", { attrs: { _i: 4 } })
        : _vm._e(),
      _vm._$s(5, "i", _vm.PageCur == "component")
        ? _c("components", { attrs: { _i: 5 } })
        : _vm._e(),
      _vm._$s(6, "i", _vm.PageCur == "plugin")
        ? _c("plugin", { attrs: { _i: 6 } })
        : _vm._e(),
      _c("z-navigation", { attrs: { _i: 7 } })
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 5 */
/*!*****************************************************************************************!*\
  !*** D:/uniapp/uniapp-simple/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 6);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTRqQixDQUFnQixza0JBQUcsRUFBQyIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi/lronoo4XljIUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi/lronoo4XljIUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi/lronoo4XljIUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL+WuieijheWMhS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL+WuieijheWMhS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uL+WuieijheWMhS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi8uLi/lronoo4XljIUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/uniapp/uniapp-simple/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _navigation = _interopRequireDefault(__webpack_require__(/*! @/components/module/navigation.vue */ 7));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = { components: { zNavigation: _navigation.default }, data: function data() {return { title: 'Hello', PageCur: 'basics' };}, onLoad: function onLoad() {},\n  methods: {\n    NavChange: function NavChange(e) {\n      this.PageCur = e.currentTarget.dataset.cur;\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgudnVlIl0sIm5hbWVzIjpbImNvbXBvbmVudHMiLCJ6TmF2aWdhdGlvbiIsImRhdGEiLCJ0aXRsZSIsIlBhZ2VDdXIiLCJvbkxvYWQiLCJtZXRob2RzIiwiTmF2Q2hhbmdlIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiY3VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQWNBLDJHLDhGQWRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO2VBR2dCLEVBQ2ZBLFVBQVUsRUFBRSxFQUNWQyxXQUFXLEVBQVhBLG1CQURVLEVBREcsRUFJZEMsSUFKYyxrQkFJUCxDQUNOLE9BQU8sRUFDTkMsS0FBSyxFQUFFLE9BREQsRUFFTkMsT0FBTyxFQUFFLFFBRkgsRUFBUCxDQUlBLENBVGEsRUFVZEMsTUFWYyxvQkFVTCxDQUVSLENBWmE7QUFhZEMsU0FBTyxFQUFFO0FBQ1JDLGFBQVMsRUFBRSxtQkFBU0MsQ0FBVCxFQUFZO0FBQ3RCLFdBQUtKLE9BQUwsR0FBZUksQ0FBQyxDQUFDQyxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkMsR0FBdkM7QUFDQSxLQUhPLEVBYkssRSIsImZpbGUiOiI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuXHJcbmltcG9ydCB6TmF2aWdhdGlvbiBmcm9tICdAL2NvbXBvbmVudHMvbW9kdWxlL25hdmlnYXRpb24udnVlJztcclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0Y29tcG9uZW50czoge1xyXG5cdFx0XHR6TmF2aWdhdGlvblxyXG5cdFx0fSxcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0dGl0bGU6ICdIZWxsbycsXHJcblx0XHRcdFx0UGFnZUN1cjogJ2Jhc2ljcydcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG9uTG9hZCgpIHtcclxuXHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHROYXZDaGFuZ2U6IGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHR0aGlzLlBhZ2VDdXIgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5jdXJcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!****************************************************************!*\
  !*** D:/uniapp/uniapp-simple/components/module/navigation.vue ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _navigation_vue_vue_type_template_id_1fc12e6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation.vue?vue&type=template&id=1fc12e6c&scoped=true& */ 8);\n/* harmony import */ var _navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation.vue?vue&type=script&lang=js& */ 10);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 17);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _navigation_vue_vue_type_template_id_1fc12e6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _navigation_vue_vue_type_template_id_1fc12e6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"1fc12e6c\",\n  null,\n  false,\n  _navigation_vue_vue_type_template_id_1fc12e6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"components/module/navigation.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUk7QUFDbkk7QUFDOEQ7QUFDTDs7O0FBR3pEO0FBQ3VLO0FBQ3ZLLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLGdGQUFNO0FBQ1IsRUFBRSxpR0FBTTtBQUNSLEVBQUUsMEdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUscUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vbmF2aWdhdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWZjMTJlNmMmc2NvcGVkPXRydWUmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9uYXZpZ2F0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vbmF2aWdhdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL+WuieijheWMhS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMWZjMTJlNmNcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9tb2R1bGUvbmF2aWdhdGlvbi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!***********************************************************************************************************!*\
  !*** D:/uniapp/uniapp-simple/components/module/navigation.vue?vue&type=template&id=1fc12e6c&scoped=true& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_navigation_vue_vue_type_template_id_1fc12e6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./navigation.vue?vue&type=template&id=1fc12e6c&scoped=true& */ 9);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_navigation_vue_vue_type_template_id_1fc12e6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_navigation_vue_vue_type_template_id_1fc12e6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_navigation_vue_vue_type_template_id_1fc12e6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_navigation_vue_vue_type_template_id_1fc12e6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 9 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/uniapp/uniapp-simple/components/module/navigation.vue?vue&type=template&id=1fc12e6c&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    [
      _c(
        "view",
        {
          staticClass: _vm._$s(1, "sc", "footer_box"),
          class: _vm._$s(1, "c", { footer_bg: _vm.bg }),
          attrs: { _i: 1 }
        },
        _vm._l(_vm._$s(2, "f", { forItems: _vm.navigationList }), function(
          item,
          index,
          $20,
          $30
        ) {
          return _c(
            "view",
            {
              key: _vm._$s(2, "f", { forIndex: $20, key: index }),
              staticClass: _vm._$s("2-" + $30, "sc", "footer_item"),
              attrs: { _i: "2-" + $30 }
            },
            [
              _vm._$s("3-" + $30, "i", item.raised)
                ? _c(
                    "view",
                    {
                      staticClass: _vm._$s(
                        "3-" + $30,
                        "sc",
                        "footer_raised_item"
                      ),
                      attrs: { _i: "3-" + $30 },
                      on: { click: _vm.onRaised }
                    },
                    [
                      _c("image", {
                        staticClass: _vm._$s(
                          "4-" + $30,
                          "sc",
                          "footer_raised_item_image"
                        ),
                        attrs: {
                          src: _vm._$s(
                            "4-" + $30,
                            "a-src",
                            "/" + item.iconPath
                          ),
                          _i: "4-" + $30
                        }
                      })
                    ]
                  )
                : _c(
                    "view",
                    {
                      staticClass: _vm._$s("5-" + $30, "sc", "footer_nav_item"),
                      attrs: { _i: "5-" + $30 },
                      on: {
                        click: function($event) {
                          return _vm.onPageJump(item.pagePath)
                        }
                      }
                    },
                    [
                      _vm._$s("6-" + $30, "i", item.pagePath == _vm.path)
                        ? _c("image", {
                            staticClass: _vm._$s(
                              "6-" + $30,
                              "sc",
                              "footer_nav_item_image"
                            ),
                            attrs: {
                              src: _vm._$s(
                                "6-" + $30,
                                "a-src",
                                "/" + item.selectedIconPath
                              ),
                              _i: "6-" + $30
                            }
                          })
                        : _c("image", {
                            staticClass: _vm._$s(
                              "7-" + $30,
                              "sc",
                              "footer_nav_item_image"
                            ),
                            attrs: {
                              src: _vm._$s(
                                "7-" + $30,
                                "a-src",
                                "/" + item.iconPath
                              ),
                              _i: "7-" + $30
                            }
                          }),
                      _c(
                        "text",
                        {
                          staticClass: _vm._$s(
                            "8-" + $30,
                            "sc",
                            "footer_nav_item_text"
                          ),
                          class: _vm._$s("8-" + $30, "c", [
                            item.pagePath == _vm.path
                              ? "footer_item_text_active"
                              : ""
                          ]),
                          attrs: { _i: "8-" + $30 }
                        },
                        [_vm._v(_vm._$s("8-" + $30, "t0-0", _vm._s(item.text)))]
                      )
                    ]
                  )
            ]
          )
        }),
        0
      ),
      _vm._$s(9, "i", _vm.bg)
        ? _c("view", {
            staticClass: _vm._$s(9, "sc", "footer_station"),
            attrs: { _i: 9 }
          })
        : _vm._e(),
      _c(
        "z-popup",
        {
          attrs: { type: "2000", _i: 10 },
          model: {
            value: _vm._$s(10, "v-model", _vm.popupShow),
            callback: function($$v) {
              _vm.popupShow = $$v
            },
            expression: "popupShow"
          }
        },
        [
          _c(
            "view",
            {
              staticClass: _vm._$s(11, "sc", "popup_content"),
              attrs: { _i: 11 }
            },
            [_c("view"), _c("view")]
          )
        ]
      )
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 10 */
/*!*****************************************************************************************!*\
  !*** D:/uniapp/uniapp-simple/components/module/navigation.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./navigation.vue?vue&type=script&lang=js& */ 11);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNqQixDQUFnQixna0JBQUcsRUFBQyIsImZpbGUiOiIxMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uL+WuieijheWMhS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9uYXZpZ2F0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi/lronoo4XljIUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi/lronoo4XljIUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi/lronoo4XljIUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25hdmlnYXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/uniapp/uniapp-simple/components/module/navigation.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _popup = _interopRequireDefault(__webpack_require__(/*! @/components/common/popup */ 12));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = { components: { zPopup: _popup.default }, props: { bg: { type: Boolean, default: true } }, data: function data() {return { path: '', navigationList: [{ pagePath: 'pages/template/addTemplate', iconPath: 'static/icon/tab/icon_home.png', selectedIconPath: 'static/icon/tab/icon_home_c.png', text: '新增功能' }, { pagePath: 'pages/demo/common', iconPath: 'static/icon/tab/icon_wode.png',\n        selectedIconPath: 'static/icon/tab/icon_wode_c.png',\n        text: '组件示例' },\n\n      {\n        iconPath: 'static/icon/tab/icon_home_c.png',\n        text: '凸起导航',\n        raised: true },\n\n      {\n        pagePath: 'pages/sdkDemo/common',\n        iconPath: 'static/icon/tab/icon_xiaoxi.png',\n        selectedIconPath: 'static/icon/tab/icon_xiaoxi_c.png',\n        text: 'SDK示例' },\n\n      {\n        pagePath: 'pages/template/common',\n        iconPath: 'static/icon/tab/icon_xiaoxi.png',\n        selectedIconPath: 'static/icon/tab/icon_xiaoxi_c.png',\n        text: '模板页面' }],\n\n\n      popupShow: false };\n\n  },\n  //第一次加载\n  created: function created() {\n    //获取所有页面\n    var currentPages = getCurrentPages();\n    var page = currentPages[currentPages.length - 1];\n    this.path = page.route;\n  },\n  //方法\n  methods: {\n    onPageJump: function onPageJump(url) {\n      debugger;\n      if (this.path !== url) {\n        uni.switchTab({\n          url: '/' + url });\n\n      }\n    },\n    onRaised: function onRaised() {\n      this.popupShow = true;\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9tb2R1bGUvbmF2aWdhdGlvbi52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0JBLDhGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQUNBLEVBQ0EsY0FDQSxzQkFEQSxFQURBLEVBSUEsU0FDQSxNQUNBLGFBREEsRUFFQSxhQUZBLEVBREEsRUFKQSxFQVVBLElBVkEsa0JBVUEsQ0FDQSxTQUNBLFFBREEsRUFFQSxpQkFDQSxFQUNBLHNDQURBLEVBRUEseUNBRkEsRUFHQSxtREFIQSxFQUlBLFlBSkEsRUFEQSxFQU9BLEVBQ0EsNkJBREEsRUFFQSx5Q0FGQTtBQUdBLDJEQUhBO0FBSUEsb0JBSkEsRUFQQTs7QUFhQTtBQUNBLG1EQURBO0FBRUEsb0JBRkE7QUFHQSxvQkFIQSxFQWJBOztBQWtCQTtBQUNBLHdDQURBO0FBRUEsbURBRkE7QUFHQSw2REFIQTtBQUlBLHFCQUpBLEVBbEJBOztBQXdCQTtBQUNBLHlDQURBO0FBRUEsbURBRkE7QUFHQSw2REFIQTtBQUlBLG9CQUpBLEVBeEJBLENBRkE7OztBQWlDQSxzQkFqQ0E7O0FBbUNBLEdBOUNBO0FBK0NBO0FBQ0EsU0FoREEscUJBZ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQXJEQTtBQXNEQTtBQUNBO0FBQ0EsY0FEQSxzQkFDQSxHQURBLEVBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFEQTs7QUFHQTtBQUNBLEtBUkE7QUFTQSxZQVRBLHNCQVNBO0FBQ0E7QUFDQSxLQVhBLEVBdkRBLEUiLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PHZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cImZvb3Rlcl9ib3hcIiA6Y2xhc3M9XCJ7IGZvb3Rlcl9iZzogYmcgfVwiPlxyXG5cdFx0XHQ8dmlldyB2LWZvcj1cIihpdGVtLCBpbmRleCkgb2YgbmF2aWdhdGlvbkxpc3RcIiA6a2V5PVwiaW5kZXhcIiBjbGFzcz1cImZvb3Rlcl9pdGVtXCI+XHJcblx0XHRcdFx0PHZpZXcgdi1pZj1cIml0ZW0ucmFpc2VkXCIgY2xhc3M9XCJmb290ZXJfcmFpc2VkX2l0ZW1cIiBAY2xpY2s9XCJvblJhaXNlZFwiPlxyXG5cdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwiZm9vdGVyX3JhaXNlZF9pdGVtX2ltYWdlXCIgOnNyYz1cIicvJyArIGl0ZW0uaWNvblBhdGhcIiBtb2RlPVwiYXNwZWN0Rml0XCI+PC9pbWFnZT5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgdi1lbHNlIGNsYXNzPVwiZm9vdGVyX25hdl9pdGVtXCIgQGNsaWNrPVwib25QYWdlSnVtcChpdGVtLnBhZ2VQYXRoKVwiPlxyXG5cdFx0XHRcdFx0PGltYWdlIHYtaWY9XCJpdGVtLnBhZ2VQYXRoID09IHBhdGhcIiBjbGFzcz1cImZvb3Rlcl9uYXZfaXRlbV9pbWFnZVwiIDpzcmM9XCInLycgKyBpdGVtLnNlbGVjdGVkSWNvblBhdGhcIiBtb2RlPVwiYXNwZWN0Rml0XCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdDxpbWFnZSB2LWVsc2UgY2xhc3M9XCJmb290ZXJfbmF2X2l0ZW1faW1hZ2VcIiA6c3JjPVwiJy8nICsgaXRlbS5pY29uUGF0aFwiIG1vZGU9XCJhc3BlY3RGaXRcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJmb290ZXJfbmF2X2l0ZW1fdGV4dFwiIDpjbGFzcz1cIltpdGVtLnBhZ2VQYXRoID09IHBhdGggPyAnZm9vdGVyX2l0ZW1fdGV4dF9hY3RpdmUnIDogJyddXCI+e3sgaXRlbS50ZXh0IH19PC90ZXh0PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXcgdi1pZj1cImJnXCIgY2xhc3M9XCJmb290ZXJfc3RhdGlvblwiPjwvdmlldz5cclxuXHRcdDx6LXBvcHVwIHYtbW9kZWw9XCJwb3B1cFNob3dcIiB0eXBlPVwiMjAwMFwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInBvcHVwX2NvbnRlbnRcIj5cclxuXHRcdFx0XHQ8dmlldz7lh7jotbflr7zoiKrop6PlhrPmlrnmoYjvvIzor7fnnItjb21wb25lbnRzL21vZHVsZS9uYXZpZ2F0aW9uLnZ1ZTwvdmlldz5cclxuXHRcdFx0XHQ8dmlldz7lkoxwYWdlcy9kZW1vL2NvbW1vbi52dWU8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvei1wb3B1cD5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQ+XHJcbmltcG9ydCB6UG9wdXAgZnJvbSAnQC9jb21wb25lbnRzL2NvbW1vbi9wb3B1cCc7XG5leHBvcnQgZGVmYXVsdCB7XG5cdGNvbXBvbmVudHM6e1xuXHRcdHpQb3B1cFxuXHR9LFxyXG5cdHByb3BzOiB7XHJcblx0XHRiZzoge1xyXG5cdFx0XHR0eXBlOiBCb29sZWFuLFxyXG5cdFx0XHRkZWZhdWx0OiB0cnVlXHJcblx0XHR9XHJcblx0fSxcclxuXHRkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0cGF0aDogJycsXHJcblx0XHRcdG5hdmlnYXRpb25MaXN0OiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0cGFnZVBhdGg6ICdwYWdlcy90ZW1wbGF0ZS9hZGRUZW1wbGF0ZScsXHJcblx0XHRcdFx0XHRpY29uUGF0aDogJ3N0YXRpYy9pY29uL3RhYi9pY29uX2hvbWUucG5nJyxcclxuXHRcdFx0XHRcdHNlbGVjdGVkSWNvblBhdGg6ICdzdGF0aWMvaWNvbi90YWIvaWNvbl9ob21lX2MucG5nJyxcclxuXHRcdFx0XHRcdHRleHQ6ICfmlrDlop7lip/og70nXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRwYWdlUGF0aDogJ3BhZ2VzL2RlbW8vY29tbW9uJyxcclxuXHRcdFx0XHRcdGljb25QYXRoOiAnc3RhdGljL2ljb24vdGFiL2ljb25fd29kZS5wbmcnLFxyXG5cdFx0XHRcdFx0c2VsZWN0ZWRJY29uUGF0aDogJ3N0YXRpYy9pY29uL3RhYi9pY29uX3dvZGVfYy5wbmcnLFxyXG5cdFx0XHRcdFx0dGV4dDogJ+e7hOS7tuekuuS+iydcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGljb25QYXRoOiAnc3RhdGljL2ljb24vdGFiL2ljb25faG9tZV9jLnBuZycsXHJcblx0XHRcdFx0XHR0ZXh0OiAn5Ye46LW35a+86IiqJyxcclxuXHRcdFx0XHRcdHJhaXNlZDogdHJ1ZVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0cGFnZVBhdGg6ICdwYWdlcy9zZGtEZW1vL2NvbW1vbicsXHJcblx0XHRcdFx0XHRpY29uUGF0aDogJ3N0YXRpYy9pY29uL3RhYi9pY29uX3hpYW94aS5wbmcnLFxyXG5cdFx0XHRcdFx0c2VsZWN0ZWRJY29uUGF0aDogJ3N0YXRpYy9pY29uL3RhYi9pY29uX3hpYW94aV9jLnBuZycsXHJcblx0XHRcdFx0XHR0ZXh0OiAnU0RL56S65L6LJ1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0cGFnZVBhdGg6ICdwYWdlcy90ZW1wbGF0ZS9jb21tb24nLFxyXG5cdFx0XHRcdFx0aWNvblBhdGg6ICdzdGF0aWMvaWNvbi90YWIvaWNvbl94aWFveGkucG5nJyxcclxuXHRcdFx0XHRcdHNlbGVjdGVkSWNvblBhdGg6ICdzdGF0aWMvaWNvbi90YWIvaWNvbl94aWFveGlfYy5wbmcnLFxyXG5cdFx0XHRcdFx0dGV4dDogJ+aooeadv+mhtemdoidcclxuXHRcdFx0XHR9XHJcblx0XHRcdF0sXHJcblx0XHRcdHBvcHVwU2hvdzogZmFsc2UsXHJcblx0XHR9O1xyXG5cdH0sXHJcblx0Ly/nrKzkuIDmrKHliqDovb1cclxuXHRjcmVhdGVkKCkge1xyXG5cdFx0Ly/ojrflj5bmiYDmnInpobXpnaJcclxuXHRcdGxldCBjdXJyZW50UGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcclxuXHRcdGxldCBwYWdlID0gY3VycmVudFBhZ2VzW2N1cnJlbnRQYWdlcy5sZW5ndGggLSAxXTtcclxuXHRcdHRoaXMucGF0aCA9IHBhZ2Uucm91dGU7XHJcblx0fSxcclxuXHQvL+aWueazlVxyXG5cdG1ldGhvZHM6IHtcclxuXHRcdG9uUGFnZUp1bXAodXJsKSB7XHJcblx0XHRcdGRlYnVnZ2VyXHJcblx0XHRcdGlmICh0aGlzLnBhdGggIT09IHVybCkge1xyXG5cdFx0XHRcdHVuaS5zd2l0Y2hUYWIoe1xyXG5cdFx0XHRcdFx0dXJsOiAnLycgKyB1cmxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG9uUmFpc2VkKCl7XHJcblx0XHRcdHRoaXMucG9wdXBTaG93ID0gdHJ1ZTtcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbkBpbXBvcnQgJ0Avc3R5bGUvbWl4aW4uc2Nzcyc7XHJcbi5mb290ZXJfc3RhdGlvbiB7XHJcblx0aGVpZ2h0OiAxMDBycHg7XHJcbn1cclxuLmZvb3Rlcl9ib3gge1xyXG5cdGhlaWdodDogMTAwcnB4O1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRib3R0b206IDA7XHJcblx0bGVmdDogMDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0ZGlzcGxheTogZmxleDtcclxuXHQvKiAjZW5kaWYgKi9cclxuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdHotaW5kZXg6IDUwMjtcclxufVxyXG4uZm9vdGVyX2JnIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG59XHJcbi5mb290ZXJfaXRlbSB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGZsZXg6IDE7XHJcbn1cclxuLmZvb3Rlcl9uYXZfaXRlbSB7XHJcblx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0LyogI2VuZGlmICovXHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGhlaWdodDogMTAwJTtcclxufVxyXG4uZm9vdGVyX25hdl9pdGVtOmFjdGl2ZSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICNmZmYsICRhbHBoYTogMC4xKTtcclxufVxyXG4uZm9vdGVyX25hdl9pdGVtX3RleHQge1xyXG5cdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0Y29sb3I6ICM5OTk5OTk7XHJcblx0bWFyZ2luLXRvcDogNnJweDtcclxufVxyXG4uZm9vdGVyX25hdl9pdGVtX3RleHRfYWN0aXZlIHtcclxuXHRjb2xvcjogI2Y5YTYzMztcclxufVxyXG4uZm9vdGVyX25hdl9pdGVtX2ltYWdlIHtcclxuXHR3aWR0aDogNTBycHg7XHJcblx0aGVpZ2h0OiA1MHJweDtcclxufVxyXG4uZm9vdGVyX3JhaXNlZF9pdGVtIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAtNDBycHg7XHJcblx0bGVmdDogNTAlO1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuXHR3aWR0aDogMTIwcnB4O1xyXG5cdGhlaWdodDogMTIwcnB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdC8qICNlbmRpZiAqL1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmZvb3Rlcl9yYWlzZWRfaXRlbV9pbWFnZSB7XHJcblx0d2lkdGg6IDcwcnB4O1xyXG5cdGhlaWdodDogNzBycHg7XHJcbn1cclxuLnBvcHVwX2NvbnRlbnQge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcblx0cGFkZGluZzogMzBycHg7XHJcbn1cclxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!***********************************************************!*\
  !*** D:/uniapp/uniapp-simple/components/common/popup.vue ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _popup_vue_vue_type_template_id_4bd36a43_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup.vue?vue&type=template&id=4bd36a43&scoped=true& */ 13);\n/* harmony import */ var _popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popup.vue?vue&type=script&lang=js& */ 15);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 17);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _popup_vue_vue_type_template_id_4bd36a43_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _popup_vue_vue_type_template_id_4bd36a43_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"4bd36a43\",\n  null,\n  false,\n  _popup_vue_vue_type_template_id_4bd36a43_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"components/common/popup.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEg7QUFDOUg7QUFDeUQ7QUFDTDs7O0FBR3BEO0FBQ3VLO0FBQ3ZLLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLDJFQUFNO0FBQ1IsRUFBRSw0RkFBTTtBQUNSLEVBQUUscUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsZ0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3BvcHVwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YmQzNmE0MyZzY29wZWQ9dHJ1ZSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3BvcHVwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vcG9wdXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi/lronoo4XljIUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjRiZDM2YTQzXCIsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvY29tbW9uL3BvcHVwLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
/*!******************************************************************************************************!*\
  !*** D:/uniapp/uniapp-simple/components/common/popup.vue?vue&type=template&id=4bd36a43&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_popup_vue_vue_type_template_id_4bd36a43_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./popup.vue?vue&type=template&id=4bd36a43&scoped=true& */ 14);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_popup_vue_vue_type_template_id_4bd36a43_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_popup_vue_vue_type_template_id_4bd36a43_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_popup_vue_vue_type_template_id_4bd36a43_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_popup_vue_vue_type_template_id_4bd36a43_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 14 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/uniapp/uniapp-simple/components/common/popup.vue?vue&type=template&id=4bd36a43&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", { attrs: { _i: 0 }, on: { touchmove: _vm.onTouchMove } }, [
    _vm._$s(1, "i", _vm.currentValue)
      ? _c("view", {
          staticClass: _vm._$s(1, "sc", "mask"),
          attrs: { _i: 1 },
          on: {
            click: function($event) {
              _vm.hideOnBlur && (_vm.currentValue = false)
            }
          }
        })
      : _vm._e(),
    _c(
      "view",
      {
        staticClass: _vm._$s(2, "sc", "popup_box"),
        class: _vm._$s(2, "c", {
          bottom: _vm.type == 1000,
          center: _vm.type == 2000
        }),
        style: _vm._$s(2, "s", {
          opacity: _vm.opacity,
          transform: _vm.transform
        }),
        attrs: { _i: 2 }
      },
      [_vm._t("default", null, { _i: 3 })],
      2
    )
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 15 */
/*!************************************************************************************!*\
  !*** D:/uniapp/uniapp-simple/components/common/popup.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./popup.vue?vue&type=script&lang=js& */ 16);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWlqQixDQUFnQiwyakJBQUcsRUFBQyIsImZpbGUiOiIxNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uL+WuieijheWMhS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wb3B1cC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uL+WuieijheWMhS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wb3B1cC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///15\n");

/***/ }),
/* 16 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/uniapp/uniapp-simple/components/common/popup.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default2 =\n{\n  props: {\n    //是否显示\n    value: {\n      type: Boolean,\n      default: function _default() {\n        return false;\n      } },\n\n    //点击遮罩层关闭弹窗\n    hideOnBlur: {\n      type: Boolean,\n      default: function _default() {\n        return true;\n      } },\n\n    //禁止页面滚动（H5生效）\n    scroll: {\n      type: Boolean,\n      default: true },\n\n    // 类型\n    //  1000 靠下\n    //  2000 居中\n    type: {\n      type: String,\n      default: function _default() {\n        return \"1000\";\n      } } },\n\n\n  created: function created() {\n    if (typeof this.value !== \"undefined\") {\n      this.currentValue = this.value;\n      this.setAnimation(this.value);\n    }\n  },\n  watch: {\n    value: function value(val) {\n      this.currentValue = val;\n      this.setAnimation(val);\n    },\n    currentValue: function currentValue(val) {\n      this.$emit(\"change\", val);\n      this.$emit(\"input\", val);\n    } },\n\n  data: function data() {\n    return {\n      // 传进来的值\n      currentValue: false,\n      opacity: 0,\n      transform: \"\" };\n\n  },\n  methods: {\n    onTouchMove: function onTouchMove(event) {\n      !this.scroll && event.preventDefault();\n    },\n    setAnimation: function setAnimation(val) {\n      if (this.type == 1000) {\n        if (val) {\n          this.transform = \"translateY(0%)\";\n          this.opacity = 1;\n        } else {\n          this.opacity = 0;\n          this.transform = \"translateY(100%)\";\n        }\n      } else if (this.type == 2000) {\n        if (val) {\n          this.opacity = 1;\n          this.transform = \"translateX(-50%) translateY(-50%) scale(1)\";\n        } else {\n          this.opacity = 0;\n          this.transform = \"translateX(-50%) translateY(-50%) scale(0)\";\n        }\n      }\n    } } };exports.default = _default2;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9jb21tb24vcG9wdXAudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBREE7QUFFQTtBQUNBO0FBQ0EsT0FKQSxFQUZBOztBQVFBO0FBQ0E7QUFDQSxtQkFEQTtBQUVBO0FBQ0E7QUFDQSxPQUpBLEVBVEE7O0FBZUE7QUFDQTtBQUNBLG1CQURBO0FBRUEsbUJBRkEsRUFoQkE7O0FBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBREE7QUFFQTtBQUNBO0FBQ0EsT0FKQSxFQXZCQSxFQURBOzs7QUErQkEsU0EvQkEscUJBK0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQXBDQTtBQXFDQTtBQUNBLFNBREEsaUJBQ0EsR0FEQSxFQUNBO0FBQ0E7QUFDQTtBQUNBLEtBSkE7QUFLQSxnQkFMQSx3QkFLQSxHQUxBLEVBS0E7QUFDQTtBQUNBO0FBQ0EsS0FSQSxFQXJDQTs7QUErQ0EsTUEvQ0Esa0JBK0NBO0FBQ0E7QUFDQTtBQUNBLHlCQUZBO0FBR0EsZ0JBSEE7QUFJQSxtQkFKQTs7QUFNQSxHQXREQTtBQXVEQTtBQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUEsZ0JBSkEsd0JBSUEsR0FKQSxFQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUhBLE1BR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQVJBLE1BUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUhBLE1BR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBdEJBLEVBdkRBLEUiLCJmaWxlIjoiMTYuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PHZpZXcgQHRvdWNobW92ZT1cIm9uVG91Y2hNb3ZlXCI+XHJcblx0XHQ8IS0tIOmBrue9qeWxguWKqOeUuyAtLT5cclxuXHRcdDx2aWV3IGNsYXNzPVwibWFza1wiIEBjbGljaz1cImhpZGVPbkJsdXIgJiYgKGN1cnJlbnRWYWx1ZSA9IGZhbHNlKVwiIHYtaWY9XCJjdXJyZW50VmFsdWVcIj48L3ZpZXc+XHJcblx0XHQ8IS0tIOaYvuekuuS/oeaBr+WxgiAtLT5cclxuXHRcdDx2aWV3IGNsYXNzPVwicG9wdXBfYm94XCIgOmNsYXNzPVwieydib3R0b20nOiB0eXBlID09IDEwMDAgLCdjZW50ZXInOnR5cGUgPT0gMjAwMH1cIiA6c3R5bGU9XCJ7b3BhY2l0eTpvcGFjaXR5LHRyYW5zZm9ybTp0cmFuc2Zvcm19XCI+XHJcblx0XHRcdDxzbG90Pjwvc2xvdD5cclxuXHRcdDwvdmlldz5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdC8v5piv5ZCm5pi+56S6XHJcblx0XHRcdHZhbHVlOiB7XHJcblx0XHRcdFx0dHlwZTogQm9vbGVhbixcclxuXHRcdFx0XHRkZWZhdWx0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdC8v54K55Ye76YGu572p5bGC5YWz6Zet5by556qXXHJcblx0XHRcdGhpZGVPbkJsdXI6IHtcclxuXHRcdFx0XHR0eXBlOiBCb29sZWFuLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvL+emgeatoumhtemdoua7muWKqO+8iEg155Sf5pWI77yJXHJcblx0XHRcdHNjcm9sbDoge1xyXG5cdFx0XHRcdHR5cGU6IEJvb2xlYW4sXHJcblx0XHRcdFx0ZGVmYXVsdDogdHJ1ZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDnsbvlnotcclxuXHRcdFx0Ly8gIDEwMDAg6Z2g5LiLXHJcblx0XHRcdC8vICAyMDAwIOWxheS4rVxyXG5cdFx0XHR0eXBlOiB7XHJcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIFwiMTAwMFwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGNyZWF0ZWQoKSB7XHJcblx0XHRcdGlmICh0eXBlb2YgdGhpcy52YWx1ZSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG5cdFx0XHRcdHRoaXMuY3VycmVudFZhbHVlID0gdGhpcy52YWx1ZTtcclxuXHRcdFx0XHR0aGlzLnNldEFuaW1hdGlvbih0aGlzLnZhbHVlKTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdHdhdGNoOiB7XHJcblx0XHRcdHZhbHVlKHZhbCkge1xyXG5cdFx0XHRcdHRoaXMuY3VycmVudFZhbHVlID0gdmFsO1xyXG5cdFx0XHRcdHRoaXMuc2V0QW5pbWF0aW9uKHZhbCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGN1cnJlbnRWYWx1ZSh2YWwpIHtcclxuXHRcdFx0XHR0aGlzLiRlbWl0KFwiY2hhbmdlXCIsIHZhbCk7XHJcblx0XHRcdFx0dGhpcy4kZW1pdChcImlucHV0XCIsIHZhbCk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC8vIOS8oOi/m+adpeeahOWAvFxyXG5cdFx0XHRcdGN1cnJlbnRWYWx1ZTogZmFsc2UsXHJcblx0XHRcdFx0b3BhY2l0eTogMCxcclxuXHRcdFx0XHR0cmFuc2Zvcm06IFwiXCJcclxuXHRcdFx0fTtcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdG9uVG91Y2hNb3ZlOiBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0XHRcdCF0aGlzLnNjcm9sbCAmJiBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRzZXRBbmltYXRpb24odmFsKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMudHlwZSA9PSAxMDAwKSB7XHJcblx0XHRcdFx0XHRpZiAodmFsKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVZKDAlKVwiO1xyXG5cdFx0XHRcdFx0XHR0aGlzLm9wYWNpdHkgPSAxO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5vcGFjaXR5ID0gMDtcclxuXHRcdFx0XHRcdFx0dGhpcy50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVkoMTAwJSlcIjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMudHlwZSA9PSAyMDAwKSB7XHJcblx0XHRcdFx0XHRpZiAodmFsKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMub3BhY2l0eSA9IDE7XHJcblx0XHRcdFx0XHRcdHRoaXMudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSkgc2NhbGUoMSlcIjtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHRoaXMub3BhY2l0eSA9IDA7XHJcblx0XHRcdFx0XHRcdHRoaXMudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSkgc2NhbGUoMClcIjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuXHQvKumBrue9qeWxgiovXHJcblx0Lm1hc2sge1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0ei1pbmRleDogNTAwO1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0cmlnaHQ6IDA7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0Ym90dG9tOiAwO1xyXG5cdFx0YmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG5cdFx0dHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcblx0fVxyXG5cclxuXHQucG9wdXBfYm94IHtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdG1heC13aWR0aDogMTAwJTtcclxuXHRcdG1heC1oZWlnaHQ6IDEwMCU7XHJcblx0XHRtaW4taGVpZ2h0OiA1MHVweDtcclxuXHRcdHotaW5kZXg6IDUwMTtcclxuXHRcdG9wYWNpdHk6IDA7XHJcblx0XHRmb250LXNpemU6IDI4dXB4O1xyXG5cdFx0dHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcblxyXG5cdFx0Ji5ib3R0b20ge1xyXG5cdFx0XHRsZWZ0OiAwdXB4O1xyXG5cdFx0XHQvKiAjaWZkZWYgSDUgKi9cclxuXHRcdFx0Ym90dG9tOiB2YXIoLS13aW5kb3ctYm90dG9tKTtcclxuXHRcdFx0LyogI2VuZGlmICovXHJcblx0XHRcdC8qICNpZm5kZWYgSDUgKi9cclxuXHRcdFx0Ym90dG9tOiAwO1xyXG5cdFx0XHQvKiAjZW5kaWYgKi9cclxuXHRcdFx0bWluLXdpZHRoOiAxMDAlO1xyXG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ji5jZW50ZXIge1xyXG5cdFx0XHRsZWZ0OiA1MCU7XHJcblx0XHRcdHRvcDogNTAlO1xyXG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcclxuXHRcdH1cclxuXHR9XHJcbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///16\n");

/***/ }),
/* 17 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 18 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 19 */
/*!***************************************!*\
  !*** D:/uniapp/uniapp-simple/App.vue ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 20);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 17);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDaUs7QUFDakssZ0JBQWdCLDZLQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjE5LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiQXBwLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///19\n");

/***/ }),
/* 20 */
/*!****************************************************************!*\
  !*** D:/uniapp/uniapp-simple/App.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 21);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVoQixDQUFnQix5akJBQUcsRUFBQyIsImZpbGUiOiIyMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uL+WuieijheWMhS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL+WuieijheWMhS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL+WuieijheWMhS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uL+WuieijheWMhS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi/lronoo4XljIUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///20\n");

/***/ }),
/* 21 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/uniapp/uniapp-simple/App.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\nvar _index = _interopRequireDefault(__webpack_require__(/*! @/store/index.js */ 22));\nvar _socket = _interopRequireDefault(__webpack_require__(/*! @/config/socket */ 29));\nvar _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 18));\n\n\n\n\nvar _APPUpdate = _interopRequireDefault(__webpack_require__(/*! @/plugins/APPUpdate */ 32));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =\n\n{\n  onLaunch: function onLaunch(e) {\n    //取出缓存数据\n    _index.default.commit('setCacheData');\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    if (_index.default.state.userInfo.token) {\n      _socket.default.init();\n    }\n    (0, _APPUpdate.default)();\n\n    uni.getSystemInfo({\n      success: function success(e) {\n\n        _vue.default.prototype.StatusBar = e.statusBarHeight;\n        if (e.platform == 'android') {\n          _vue.default.prototype.CustomBar = e.statusBarHeight + 50;\n        } else {\n          _vue.default.prototype.CustomBar = e.statusBarHeight + 45;\n        };\n\n\n\n\n\n\n\n\n\n\n\n      } });\n\n  },\n  onShow: function onShow(e) {\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n  },\n  onHide: function onHide() {} };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJvbkxhdW5jaCIsImUiLCJzdG9yZSIsImNvbW1pdCIsInN0YXRlIiwidXNlckluZm8iLCJ0b2tlbiIsInNvY2tldCIsImluaXQiLCJ1bmkiLCJnZXRTeXN0ZW1JbmZvIiwic3VjY2VzcyIsIlZ1ZSIsInByb3RvdHlwZSIsIlN0YXR1c0JhciIsInN0YXR1c0JhckhlaWdodCIsInBsYXRmb3JtIiwiQ3VzdG9tQmFyIiwib25TaG93Iiwib25IaWRlIl0sIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBLDRGOztBQUVlO0FBQ2RBLFVBQVEsRUFBRSxrQkFBU0MsQ0FBVCxFQUFZO0FBQ3JCO0FBQ0FDLG1CQUFNQyxNQUFOLENBQWEsY0FBYjs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQSxRQUFJRCxlQUFNRSxLQUFOLENBQVlDLFFBQVosQ0FBcUJDLEtBQXpCLEVBQWdDO0FBQy9CQyxzQkFBT0MsSUFBUDtBQUNBO0FBQ0Q7O0FBRUFDLE9BQUcsQ0FBQ0MsYUFBSixDQUFrQjtBQUNqQkMsYUFBTyxFQUFFLGlCQUFTVixDQUFULEVBQVk7O0FBRXBCVyxxQkFBSUMsU0FBSixDQUFjQyxTQUFkLEdBQTBCYixDQUFDLENBQUNjLGVBQTVCO0FBQ0EsWUFBSWQsQ0FBQyxDQUFDZSxRQUFGLElBQWMsU0FBbEIsRUFBNkI7QUFDNUJKLHVCQUFJQyxTQUFKLENBQWNJLFNBQWQsR0FBMEJoQixDQUFDLENBQUNjLGVBQUYsR0FBb0IsRUFBOUM7QUFDQSxTQUZELE1BRU87QUFDTkgsdUJBQUlDLFNBQUosQ0FBY0ksU0FBZCxHQUEwQmhCLENBQUMsQ0FBQ2MsZUFBRixHQUFvQixFQUE5QztBQUNBOzs7Ozs7Ozs7Ozs7QUFZRCxPQXBCZ0IsRUFBbEI7O0FBc0JBLEdBOUNhO0FBK0NkRyxRQUFNLEVBQUUsZ0JBQVNqQixDQUFULEVBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZDbkIsR0E1RmE7QUE2RmRrQixRQUFNLEVBQUUsa0JBQVcsQ0FBRSxDQTdGUCxFIiwiZmlsZSI6IjIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBzdG9yZSBmcm9tICdAL3N0b3JlL2luZGV4LmpzJztcclxuaW1wb3J0IHNvY2tldCBmcm9tICdAL2NvbmZpZy9zb2NrZXQnO1xyXG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuXHJcblxyXG5cclxuXHJcbmltcG9ydCBBUFBVcGRhdGUgZnJvbSAnQC9wbHVnaW5zL0FQUFVwZGF0ZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0b25MYXVuY2g6IGZ1bmN0aW9uKGUpIHtcclxuXHRcdC8v5Y+W5Ye657yT5a2Y5pWw5o2uXHJcblx0XHRzdG9yZS5jb21taXQoJ3NldENhY2hlRGF0YScpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cdFx0aWYgKHN0b3JlLnN0YXRlLnVzZXJJbmZvLnRva2VuKSB7XHJcblx0XHRcdHNvY2tldC5pbml0KCk7XHJcblx0XHR9XHJcblx0XHRBUFBVcGRhdGUoKTtcclxuXHJcblx0XHR1bmkuZ2V0U3lzdGVtSW5mbyh7XHJcblx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKGUpIHtcclxuXHJcblx0XHRcdFx0VnVlLnByb3RvdHlwZS5TdGF0dXNCYXIgPSBlLnN0YXR1c0JhckhlaWdodDtcclxuXHRcdFx0XHRpZiAoZS5wbGF0Zm9ybSA9PSAnYW5kcm9pZCcpIHtcclxuXHRcdFx0XHRcdFZ1ZS5wcm90b3R5cGUuQ3VzdG9tQmFyID0gZS5zdGF0dXNCYXJIZWlnaHQgKyA1MDtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0VnVlLnByb3RvdHlwZS5DdXN0b21CYXIgPSBlLnN0YXR1c0JhckhlaWdodCArIDQ1O1xyXG5cdFx0XHRcdH07XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHR9LFxyXG5cdG9uU2hvdzogZnVuY3Rpb24oZSkge1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblx0fSxcclxuXHRvbkhpZGU6IGZ1bmN0aW9uKCkge31cclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///21\n");

/***/ }),
/* 22 */
/*!**********************************************!*\
  !*** D:/uniapp/uniapp-simple/store/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 18));\nvar _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 23));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\n\n_vue.default.use(_vuex.default);\nvar files = __webpack_require__(25);\nvar modules = {\n  state: {},\n  mutations: {},\n  actions: {} };\n\n\nfiles.keys().forEach(function (key) {\n  Object.assign(modules.state, files(key)[\"state\"]);\n  Object.assign(modules.mutations, files(key)[\"mutations\"]);\n  Object.assign(modules.actions, files(key)[\"actions\"]);\n});\nvar store = new _vuex.default.Store(modules);var _default =\nstore;exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vc3RvcmUvaW5kZXguanMiXSwibmFtZXMiOlsiVnVlIiwidXNlIiwiVnVleCIsImZpbGVzIiwicmVxdWlyZSIsIm1vZHVsZXMiLCJzdGF0ZSIsIm11dGF0aW9ucyIsImFjdGlvbnMiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsIk9iamVjdCIsImFzc2lnbiIsInN0b3JlIiwiU3RvcmUiXSwibWFwcGluZ3MiOiJ1RkFBQTtBQUNBLHdFOztBQUVBQSxhQUFJQyxHQUFKLENBQVFDLGFBQVI7QUFDQSxJQUFNQyxLQUFLLEdBQUdDLHVCQUFkO0FBQ0EsSUFBSUMsT0FBTyxHQUFHO0FBQ2JDLE9BQUssRUFBRSxFQURNO0FBRWJDLFdBQVMsRUFBRSxFQUZFO0FBR2JDLFNBQU8sRUFBRSxFQUhJLEVBQWQ7OztBQU1BTCxLQUFLLENBQUNNLElBQU4sR0FBYUMsT0FBYixDQUFxQixVQUFDQyxHQUFELEVBQVM7QUFDNUJDLFFBQU0sQ0FBQ0MsTUFBUCxDQUFjUixPQUFPLENBQUNDLEtBQXRCLEVBQTZCSCxLQUFLLENBQUNRLEdBQUQsQ0FBTCxDQUFXLE9BQVgsQ0FBN0I7QUFDQUMsUUFBTSxDQUFDQyxNQUFQLENBQWNSLE9BQU8sQ0FBQ0UsU0FBdEIsRUFBaUNKLEtBQUssQ0FBQ1EsR0FBRCxDQUFMLENBQVcsV0FBWCxDQUFqQztBQUNBQyxRQUFNLENBQUNDLE1BQVAsQ0FBY1IsT0FBTyxDQUFDRyxPQUF0QixFQUErQkwsS0FBSyxDQUFDUSxHQUFELENBQUwsQ0FBVyxTQUFYLENBQS9CO0FBQ0QsQ0FKRDtBQUtBLElBQU1HLEtBQUssR0FBRyxJQUFJWixjQUFLYSxLQUFULENBQWVWLE9BQWYsQ0FBZCxDO0FBQ2VTLEsiLCJmaWxlIjoiMjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVnVlIGZyb20gXCJ2dWVcIjtcclxuaW1wb3J0IFZ1ZXggZnJvbSBcInZ1ZXhcIjtcclxuXHJcblZ1ZS51c2UoVnVleCk7XHJcbmNvbnN0IGZpbGVzID0gcmVxdWlyZS5jb250ZXh0KFwiLi9tb2R1bGVzXCIsIGZhbHNlLCAvXFwuanMkLyk7XHJcbmxldCBtb2R1bGVzID0ge1xyXG5cdHN0YXRlOiB7fSxcclxuXHRtdXRhdGlvbnM6IHt9LFxyXG5cdGFjdGlvbnM6IHt9XHJcbn07XHJcblxyXG5maWxlcy5rZXlzKCkuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgT2JqZWN0LmFzc2lnbihtb2R1bGVzLnN0YXRlLCBmaWxlcyhrZXkpW1wic3RhdGVcIl0pO1xyXG4gIE9iamVjdC5hc3NpZ24obW9kdWxlcy5tdXRhdGlvbnMsIGZpbGVzKGtleSlbXCJtdXRhdGlvbnNcIl0pO1xyXG4gIE9iamVjdC5hc3NpZ24obW9kdWxlcy5hY3Rpb25zLCBmaWxlcyhrZXkpW1wiYWN0aW9uc1wiXSk7XHJcbn0pO1xyXG5jb25zdCBzdG9yZSA9IG5ldyBWdWV4LlN0b3JlKG1vZHVsZXMpO1xyXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///22\n");

/***/ }),
/* 23 */
/*!********************************************!*\
  !*** ./node_modules/vuex/dist/vuex.esm.js ***!
  \********************************************/
/*! exports provided: default, Store, createNamespacedHelpers, install, mapActions, mapGetters, mapMutations, mapState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNamespacedHelpers", function() { return createNamespacedHelpers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapActions", function() { return mapActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapGetters", function() { return mapGetters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapMutations", function() { return mapMutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapState", function() { return mapState; });
/*!
 * vuex v3.4.0
 * (c) 2020 Evan You
 * @license MIT
 */
function applyMixin (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}

var target = typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
    ? global
    : {};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  }, { prepend: true });

  store.subscribeAction(function (action, state) {
    devtoolHook.emit('vuex:action', action, state);
  }, { prepend: true });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */

/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

function partial (fn, arg) {
  return function () {
    return fn(arg)
  }
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors = { namespaced: { configurable: true } };

prototypeAccessors.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.hasChild = function hasChild (key) {
  return key in this._children
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if ((true)) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) { return }

  parent.removeChild(key);
};

ModuleCollection.prototype.isRegistered = function isRegistered (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];

  return parent.hasChild(key)
};

function update (path, targetModule, newModule) {
  if ((true)) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if ((true)) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if ((true)) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();
  this._makeLocalGettersCache = Object.create(null);

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors$1 = { state: { configurable: true } };

prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors$1.state.set = function (v) {
  if ((true)) {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });

  this._subscribers
    .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    ( true) &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  try {
    this._actionSubscribers
      .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
      .filter(function (sub) { return sub.before; })
      .forEach(function (sub) { return sub.before(action, this$1.state); });
  } catch (e) {
    if ((true)) {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }

  var result = entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload);

  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.after; })
          .forEach(function (sub) { return sub.after(action, this$1.state); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in after action subscribers: ");
          console.error(e);
        }
      }
      resolve(res);
    }, function (error) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.error; })
          .forEach(function (sub) { return sub.error(action, this$1.state, error); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in error action subscribers: ");
          console.error(e);
        }
      }
      reject(error);
    });
  })
};

Store.prototype.subscribe = function subscribe (fn, options) {
  return genericSubscribe(fn, this._subscribers, options)
};

Store.prototype.subscribeAction = function subscribeAction (fn, options) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if ((true)) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hasModule = function hasModule (path) {
  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  return this._modules.isRegistered(path)
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors$1 );

function genericSubscribe (fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend
      ? subs.unshift(fn)
      : subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null);
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure environment.
    computed[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && ("development" !== 'production')) {
      console.error(("[vuex] duplicate namespace " + namespace + " for the namespaced module " + (path.join('/'))));
    }
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      if ((true)) {
        if (moduleName in parentState) {
          console.warn(
            ("[vuex] state field \"" + moduleName + "\" was overridden by a module with the same name at \"" + (path.join('.')) + "\"")
          );
        }
      }
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) { return }

      // extract local getter type
      var localType = type.slice(splitPos);

      // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.
      Object.defineProperty(gettersProxy, localType, {
        get: function () { return store.getters[type]; },
        enumerable: true
      });
    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }

  return store._makeLocalGettersCache[namespace]
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if ((true)) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if ((true)) {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.reduce(function (state, key) { return state[key]; }, state)
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if ((true)) {
    assert(typeof type === 'string', ("expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if ((true)) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

/**
 * Reduce the code which written in Vue.js for getting the state.
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
 * @param {Object}
 */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  if (( true) && !isValidMap(states)) {
    console.error('[vuex] mapState: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for committing the mutation
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept anthor params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  if (( true) && !isValidMap(mutations)) {
    console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  if (( true) && !isValidMap(getters)) {
    console.error('[vuex] mapGetters: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (( true) && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for dispatch the action
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  if (( true) && !isValidMap(actions)) {
    console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */
var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */
function normalizeMap (map) {
  if (!isValidMap(map)) {
    return []
  }
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

/**
 * Validate whether given map is valid or not
 * @param {*} map
 * @return {Boolean}
 */
function isValidMap (map) {
  return Array.isArray(map) || isObject(map)
}

/**
 * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */
function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

/**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {Object} store
 * @param {String} helper
 * @param {String} namespace
 * @return {Object}
 */
function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (( true) && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

var index = {
  Store: Store,
  install: install,
  version: '3.4.0',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers
};

/* harmony default export */ __webpack_exports__["default"] = (index);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ 24)))

/***/ }),
/* 24 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 25 */
/*!*********************************************************************!*\
  !*** D:/uniapp/uniapp-simple/store/modules sync nonrecursive \.js$ ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./common.js": 26,
	"./order.js": 27,
	"./user.js": 28
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 25;

/***/ }),
/* 26 */
/*!*******************************************************!*\
  !*** D:/uniapp/uniapp-simple/store/modules/common.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.actions = exports.mutations = exports.state = void 0;function _createForOfIteratorHelper(o, allowArrayLike) {var it;if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) {if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") {if (it) o = it;var i = 0;var F = function F() {};return { s: F, n: function n() {if (i >= o.length) return { done: true };return { done: false, value: o[i++] };}, e: function e(_e) {throw _e;}, f: F };}throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");}var normalCompletion = true,didErr = false,err;return { s: function s() {it = o[Symbol.iterator]();}, n: function n() {var step = it.next();normalCompletion = step.done;return step;}, e: function e(_e2) {didErr = true;err = _e2;}, f: function f() {try {if (!normalCompletion && it.return != null) it.return();} finally {if (didErr) throw err;}} };}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === \"Object\" && o.constructor) n = o.constructor.name;if (n === \"Map\" || n === \"Set\") return Array.from(o);if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}var state = {\n  //webView地址\n  webViewUrl: \"\",\n  loadingShow: false,\n  //微信场景参数\n  chatScenesInfo: {},\n  //登录弹窗状态\n  loginPopupShow: false,\n  //当前位置\n  currentAddress: {\n    areaName: \"请选择\",\n    areaId: '' } };\n\n\n//缓存浏览器的数据名称\nexports.state = state;var cacheNameList = [\"userInfo\", \"webViewUrl\"];\nvar clearTime;\nvar mutations = {\n  //取出缓存数据（打开APP就取出）\n  setCacheData: function setCacheData(state) {var _iterator = _createForOfIteratorHelper(\n    cacheNameList),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var name = _step.value;\n        var data = void 0;\n\n        data = uni.getStorageSync(name);\n\n\n\n\n        if (data) {\n\n\n\n\n\n\n          state[name] = data;\n        }\n      }} catch (err) {_iterator.e(err);} finally {_iterator.f();}\n  },\n  //WebView地址\n  setWebViewUrl: function setWebViewUrl(state, data) {\n    if (data) {\n      state.webViewUrl = data;\n\n\n\n    }\n  },\n  //数据加载状态\n  setLoadingShow: function setLoadingShow(state, data) {\n    if (state.loadingShow) {\n      clearTime && clearTimeout(clearTime);\n      clearTime = setTimeout(function () {\n        state.loadingShow = data;\n      }, 300);\n    } else {\n      state.loadingShow = data;\n    }\n  },\n  //微信场景参数\n  setChatScenesInfo: function setChatScenesInfo(state, data) {\n    if (data) {\n      state.chatScenesInfo = Object.assign({}, state.chatScenesInfo, data);\n    }\n  },\n  //登录弹窗状态\n  setLoginPopupShow: function setLoginPopupShow(state, data) {\n    state.loginPopupShow = data;\n  },\n  //当前地址\n  setCurrentAddress: function setCurrentAddress(state, data) {\n    if (data) {\n      state.currentAddress = Object.assign(state.currentAddress, data);\n      var addressInfo = {\n        \"provinceId\": state.currentAddress.provinceId,\n        \"provinceName\": state.currentAddress.provinceName,\n        \"cityId\": state.currentAddress.cityId,\n        \"cityName\": state.currentAddress.cityName,\n        \"areaId\": state.currentAddress.areaId,\n        \"areaName\": state.currentAddress.areaName };\n\n      uni.setStorageSync('currentAddress', addressInfo);\n    }\n  } };exports.mutations = mutations;\n\nvar actions = {};exports.actions = actions;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vc3RvcmUvbW9kdWxlcy9jb21tb24uanMiXSwibmFtZXMiOlsic3RhdGUiLCJ3ZWJWaWV3VXJsIiwibG9hZGluZ1Nob3ciLCJjaGF0U2NlbmVzSW5mbyIsImxvZ2luUG9wdXBTaG93IiwiY3VycmVudEFkZHJlc3MiLCJhcmVhTmFtZSIsImFyZWFJZCIsImNhY2hlTmFtZUxpc3QiLCJjbGVhclRpbWUiLCJtdXRhdGlvbnMiLCJzZXRDYWNoZURhdGEiLCJuYW1lIiwiZGF0YSIsInVuaSIsImdldFN0b3JhZ2VTeW5jIiwic2V0V2ViVmlld1VybCIsInNldExvYWRpbmdTaG93IiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsInNldENoYXRTY2VuZXNJbmZvIiwiT2JqZWN0IiwiYXNzaWduIiwic2V0TG9naW5Qb3B1cFNob3ciLCJzZXRDdXJyZW50QWRkcmVzcyIsImFkZHJlc3NJbmZvIiwicHJvdmluY2VJZCIsInByb3ZpbmNlTmFtZSIsImNpdHlJZCIsImNpdHlOYW1lIiwic2V0U3RvcmFnZVN5bmMiLCJhY3Rpb25zIl0sIm1hcHBpbmdzIjoiaW9EQUFPLElBQU1BLEtBQUssR0FBRztBQUNuQjtBQUNBQyxZQUFVLEVBQUUsRUFGTztBQUduQkMsYUFBVyxFQUFFLEtBSE07QUFJbkI7QUFDQUMsZ0JBQWMsRUFBRSxFQUxHO0FBTW5CO0FBQ0FDLGdCQUFjLEVBQUUsS0FQRztBQVFuQjtBQUNBQyxnQkFBYyxFQUFFO0FBQ2ZDLFlBQVEsRUFBRSxLQURLO0FBRWZDLFVBQU0sRUFBRSxFQUZPLEVBVEcsRUFBZDs7O0FBY1A7c0JBQ0EsSUFBTUMsYUFBYSxHQUFHLENBQUMsVUFBRCxFQUFhLFlBQWIsQ0FBdEI7QUFDQSxJQUFJQyxTQUFKO0FBQ08sSUFBTUMsU0FBUyxHQUFHO0FBQ3ZCO0FBQ0FDLGNBRnVCLHdCQUVWWCxLQUZVLEVBRUg7QUFDRlEsaUJBREUsYUFDbkIsb0RBQWdDLEtBQXZCSSxJQUF1QjtBQUNqQyxZQUFJQyxJQUFJLFNBQVI7O0FBRUVBLFlBQUksR0FBR0MsR0FBRyxDQUFDQyxjQUFKLENBQW1CSCxJQUFuQixDQUFQOzs7OztBQUtBLFlBQUlDLElBQUosRUFBVTs7Ozs7OztBQU9UYixlQUFLLENBQUNZLElBQUQsQ0FBTCxHQUFjQyxJQUFkO0FBQ0E7QUFDRCxPQWxCa0I7QUFtQm5CLEdBckJzQjtBQXNCdkI7QUFDQUcsZUF2QnVCLHlCQXVCVGhCLEtBdkJTLEVBdUJGYSxJQXZCRSxFQXVCSTtBQUMxQixRQUFJQSxJQUFKLEVBQVU7QUFDVGIsV0FBSyxDQUFDQyxVQUFOLEdBQW1CWSxJQUFuQjs7OztBQUlBO0FBQ0QsR0E5QnNCO0FBK0J2QjtBQUNBSSxnQkFoQ3VCLDBCQWdDUmpCLEtBaENRLEVBZ0NEYSxJQWhDQyxFQWdDSztBQUMzQixRQUFHYixLQUFLLENBQUNFLFdBQVQsRUFBcUI7QUFDcEJPLGVBQVMsSUFBSVMsWUFBWSxDQUFDVCxTQUFELENBQXpCO0FBQ0FBLGVBQVMsR0FBR1UsVUFBVSxDQUFDLFlBQVU7QUFDaENuQixhQUFLLENBQUNFLFdBQU4sR0FBb0JXLElBQXBCO0FBQ0EsT0FGcUIsRUFFcEIsR0FGb0IsQ0FBdEI7QUFHQSxLQUxELE1BS087QUFDTmIsV0FBSyxDQUFDRSxXQUFOLEdBQW9CVyxJQUFwQjtBQUNBO0FBQ0QsR0F6Q3NCO0FBMEN2QjtBQUNBTyxtQkEzQ3VCLDZCQTJDTHBCLEtBM0NLLEVBMkNFYSxJQTNDRixFQTJDUTtBQUM5QixRQUFJQSxJQUFKLEVBQVU7QUFDVGIsV0FBSyxDQUFDRyxjQUFOLEdBQXVCa0IsTUFBTSxDQUFDQyxNQUFQLENBQWMsRUFBZCxFQUFrQnRCLEtBQUssQ0FBQ0csY0FBeEIsRUFBd0NVLElBQXhDLENBQXZCO0FBQ0E7QUFDRCxHQS9Dc0I7QUFnRHZCO0FBQ0FVLG1CQWpEdUIsNkJBaURMdkIsS0FqREssRUFpREVhLElBakRGLEVBaURRO0FBQzlCYixTQUFLLENBQUNJLGNBQU4sR0FBdUJTLElBQXZCO0FBQ0EsR0FuRHNCO0FBb0R2QjtBQUNBVyxtQkFyRHVCLDZCQXFETHhCLEtBckRLLEVBcURFYSxJQXJERixFQXFEUTtBQUM5QixRQUFJQSxJQUFKLEVBQVU7QUFDVGIsV0FBSyxDQUFDSyxjQUFOLEdBQXVCZ0IsTUFBTSxDQUFDQyxNQUFQLENBQWN0QixLQUFLLENBQUNLLGNBQXBCLEVBQW9DUSxJQUFwQyxDQUF2QjtBQUNBLFVBQUlZLFdBQVcsR0FBRztBQUNqQixzQkFBY3pCLEtBQUssQ0FBQ0ssY0FBTixDQUFxQnFCLFVBRGxCO0FBRWpCLHdCQUFnQjFCLEtBQUssQ0FBQ0ssY0FBTixDQUFxQnNCLFlBRnBCO0FBR2pCLGtCQUFVM0IsS0FBSyxDQUFDSyxjQUFOLENBQXFCdUIsTUFIZDtBQUlqQixvQkFBWTVCLEtBQUssQ0FBQ0ssY0FBTixDQUFxQndCLFFBSmhCO0FBS2pCLGtCQUFVN0IsS0FBSyxDQUFDSyxjQUFOLENBQXFCRSxNQUxkO0FBTWpCLG9CQUFZUCxLQUFLLENBQUNLLGNBQU4sQ0FBcUJDLFFBTmhCLEVBQWxCOztBQVFBUSxTQUFHLENBQUNnQixjQUFKLENBQW1CLGdCQUFuQixFQUFxQ0wsV0FBckM7QUFDQTtBQUNELEdBbEVzQixFQUFsQixDOztBQW9FQSxJQUFNTSxPQUFPLEdBQUcsRUFBaEIsQyIsImZpbGUiOiIyNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzdGF0ZSA9IHtcclxuICAvL3dlYlZpZXflnLDlnYBcclxuICB3ZWJWaWV3VXJsOiBcIlwiLFxyXG4gIGxvYWRpbmdTaG93OiBmYWxzZSxcclxuICAvL+W+ruS/oeWcuuaZr+WPguaVsFxyXG4gIGNoYXRTY2VuZXNJbmZvOiB7fSxcclxuICAvL+eZu+W9leW8ueeql+eKtuaAgVxyXG4gIGxvZ2luUG9wdXBTaG93OiBmYWxzZSxcclxuICAvL+W9k+WJjeS9jee9rlxyXG4gIGN1cnJlbnRBZGRyZXNzOiB7XHJcbiAgXHRhcmVhTmFtZTogXCLor7fpgInmi6lcIixcclxuICBcdGFyZWFJZDogJydcclxuICB9LFxyXG59O1xyXG4vL+e8k+WtmOa1j+iniOWZqOeahOaVsOaNruWQjeensFxyXG5jb25zdCBjYWNoZU5hbWVMaXN0ID0gW1widXNlckluZm9cIiwgXCJ3ZWJWaWV3VXJsXCJdO1xyXG5sZXQgY2xlYXJUaW1lO1xyXG5leHBvcnQgY29uc3QgbXV0YXRpb25zID0ge1xyXG4gIC8v5Y+W5Ye657yT5a2Y5pWw5o2u77yI5omT5byAQVBQ5bCx5Y+W5Ye677yJXHJcbiAgc2V0Q2FjaGVEYXRhKHN0YXRlKSB7XHJcbiAgXHRmb3IgKGxldCBuYW1lIG9mIGNhY2hlTmFtZUxpc3QpIHtcclxuXHRcdGxldCBkYXRhO1xyXG5cclxuICBcdFx0ZGF0YSA9IHVuaS5nZXRTdG9yYWdlU3luYyhuYW1lKTtcclxuXHJcblxyXG5cclxuXHJcbiAgXHRcdGlmIChkYXRhKSB7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgXHRcdFx0c3RhdGVbbmFtZV0gPSBkYXRhO1xyXG4gIFx0XHR9XHJcbiAgXHR9XHJcbiAgfSxcclxuICAvL1dlYlZpZXflnLDlnYBcclxuICBzZXRXZWJWaWV3VXJsKHN0YXRlLCBkYXRhKSB7XHJcbiAgXHRpZiAoZGF0YSkge1xyXG4gIFx0XHRzdGF0ZS53ZWJWaWV3VXJsID0gZGF0YTtcclxuXHJcblxyXG5cclxuICBcdH1cclxuICB9LFxyXG4gIC8v5pWw5o2u5Yqg6L2954q25oCBXHJcbiAgc2V0TG9hZGluZ1Nob3coc3RhdGUsIGRhdGEpIHtcclxuICBcdGlmKHN0YXRlLmxvYWRpbmdTaG93KXtcclxuICBcdFx0Y2xlYXJUaW1lICYmIGNsZWFyVGltZW91dChjbGVhclRpbWUpO1xyXG4gIFx0XHRjbGVhclRpbWUgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgXHRcdFx0c3RhdGUubG9hZGluZ1Nob3cgPSBkYXRhO1xyXG4gIFx0XHR9LDMwMCk7XHJcbiAgXHR9IGVsc2Uge1xyXG4gIFx0XHRzdGF0ZS5sb2FkaW5nU2hvdyA9IGRhdGE7XHJcbiAgXHR9XHJcbiAgfSxcclxuICAvL+W+ruS/oeWcuuaZr+WPguaVsFxyXG4gIHNldENoYXRTY2VuZXNJbmZvKHN0YXRlLCBkYXRhKSB7XHJcbiAgXHRpZiAoZGF0YSkge1xyXG4gIFx0XHRzdGF0ZS5jaGF0U2NlbmVzSW5mbyA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLmNoYXRTY2VuZXNJbmZvLCBkYXRhKTtcclxuICBcdH1cclxuICB9LFxyXG4gIC8v55m75b2V5by556qX54q25oCBXHJcbiAgc2V0TG9naW5Qb3B1cFNob3coc3RhdGUsIGRhdGEpIHtcclxuICBcdHN0YXRlLmxvZ2luUG9wdXBTaG93ID0gZGF0YTtcclxuICB9LFxyXG4gIC8v5b2T5YmN5Zyw5Z2AXHJcbiAgc2V0Q3VycmVudEFkZHJlc3Moc3RhdGUsIGRhdGEpIHtcclxuICBcdGlmIChkYXRhKSB7XHJcbiAgXHRcdHN0YXRlLmN1cnJlbnRBZGRyZXNzID0gT2JqZWN0LmFzc2lnbihzdGF0ZS5jdXJyZW50QWRkcmVzcywgZGF0YSk7XHJcbiAgXHRcdGxldCBhZGRyZXNzSW5mbyA9IHtcclxuICBcdFx0XHRcInByb3ZpbmNlSWRcIjogc3RhdGUuY3VycmVudEFkZHJlc3MucHJvdmluY2VJZCxcclxuICBcdFx0XHRcInByb3ZpbmNlTmFtZVwiOiBzdGF0ZS5jdXJyZW50QWRkcmVzcy5wcm92aW5jZU5hbWUsXHJcbiAgXHRcdFx0XCJjaXR5SWRcIjogc3RhdGUuY3VycmVudEFkZHJlc3MuY2l0eUlkLFxyXG4gIFx0XHRcdFwiY2l0eU5hbWVcIjogc3RhdGUuY3VycmVudEFkZHJlc3MuY2l0eU5hbWUsXHJcbiAgXHRcdFx0XCJhcmVhSWRcIjogc3RhdGUuY3VycmVudEFkZHJlc3MuYXJlYUlkLFxyXG4gIFx0XHRcdFwiYXJlYU5hbWVcIjogc3RhdGUuY3VycmVudEFkZHJlc3MuYXJlYU5hbWUsXHJcbiAgXHRcdH07XHJcbiAgXHRcdHVuaS5zZXRTdG9yYWdlU3luYygnY3VycmVudEFkZHJlc3MnLCBhZGRyZXNzSW5mbyk7XHJcbiAgXHR9XHJcbiAgfVxyXG59O1xyXG5leHBvcnQgY29uc3QgYWN0aW9ucyA9IHtcclxuICBcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///26\n");

/***/ }),
/* 27 */
/*!******************************************************!*\
  !*** D:/uniapp/uniapp-simple/store/modules/order.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.actions = exports.mutations = exports.state = void 0;var state = {};exports.state = state;\n\n\nvar mutations = {};exports.mutations = mutations;\n\n\nvar actions = {};exports.actions = actions;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vc3RvcmUvbW9kdWxlcy9vcmRlci5qcyJdLCJuYW1lcyI6WyJzdGF0ZSIsIm11dGF0aW9ucyIsImFjdGlvbnMiXSwibWFwcGluZ3MiOiIySEFBTyxJQUFNQSxLQUFLLEdBQUcsRUFBZCxDOzs7QUFHQSxJQUFNQyxTQUFTLEdBQUcsRUFBbEIsQzs7O0FBR0EsSUFBTUMsT0FBTyxHQUFHLEVBQWhCLEMiLCJmaWxlIjoiMjcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc3RhdGUgPSB7XHJcbiAgXHJcbn07XHJcbmV4cG9ydCBjb25zdCBtdXRhdGlvbnMgPSB7XHJcbiAgXHJcbn07XHJcbmV4cG9ydCBjb25zdCBhY3Rpb25zID0ge1xyXG4gIFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///27\n");

/***/ }),
/* 28 */
/*!*****************************************************!*\
  !*** D:/uniapp/uniapp-simple/store/modules/user.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.actions = exports.mutations = exports.state = void 0;var state = {\n  //用户数据\n  userInfo: {} };exports.state = state;\n\nvar mutations = {\n  //储存用户信息\n  setUserInfo: function setUserInfo(state, data) {\n    if (data) {\n      state.userInfo = Object.assign({}, state.userInfo, data);\n\n\n\n\n      uni.setStorageSync('userInfo', state.userInfo);\n\n    }\n  },\n  // 退出APP\n  emptyUserInfo: function emptyUserInfo(state) {\n    state.userInfo = {};\n\n\n\n\n    uni.removeStorageSync(\"userInfo\");\n\n  } };exports.mutations = mutations;\n\nvar actions = {};exports.actions = actions;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vc3RvcmUvbW9kdWxlcy91c2VyLmpzIl0sIm5hbWVzIjpbInN0YXRlIiwidXNlckluZm8iLCJtdXRhdGlvbnMiLCJzZXRVc2VySW5mbyIsImRhdGEiLCJPYmplY3QiLCJhc3NpZ24iLCJ1bmkiLCJzZXRTdG9yYWdlU3luYyIsImVtcHR5VXNlckluZm8iLCJyZW1vdmVTdG9yYWdlU3luYyIsImFjdGlvbnMiXSwibWFwcGluZ3MiOiIySEFBTyxJQUFNQSxLQUFLLEdBQUc7QUFDbkI7QUFDQUMsVUFBUSxFQUFFLEVBRlMsRUFBZCxDOztBQUlBLElBQU1DLFNBQVMsR0FBRztBQUN2QjtBQUNBQyxhQUZ1Qix1QkFFWEgsS0FGVyxFQUVKSSxJQUZJLEVBRUU7QUFDeEIsUUFBSUEsSUFBSixFQUFVO0FBQ1RKLFdBQUssQ0FBQ0MsUUFBTixHQUFrQkksTUFBTSxDQUFDQyxNQUFQLENBQWMsRUFBZCxFQUFrQk4sS0FBSyxDQUFDQyxRQUF4QixFQUFpQ0csSUFBakMsQ0FBbEI7Ozs7O0FBS0FHLFNBQUcsQ0FBQ0MsY0FBSixDQUFtQixVQUFuQixFQUErQlIsS0FBSyxDQUFDQyxRQUFyQzs7QUFFQTtBQUNELEdBWnNCO0FBYXZCO0FBQ0FRLGVBZHVCLHlCQWNUVCxLQWRTLEVBY0Y7QUFDcEJBLFNBQUssQ0FBQ0MsUUFBTixHQUFpQixFQUFqQjs7Ozs7QUFLQU0sT0FBRyxDQUFDRyxpQkFBSixDQUFzQixVQUF0Qjs7QUFFQSxHQXRCc0IsRUFBbEIsQzs7QUF3QkEsSUFBTUMsT0FBTyxHQUFHLEVBQWhCLEMiLCJmaWxlIjoiMjguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc3RhdGUgPSB7XHJcbiAgLy/nlKjmiLfmlbDmja5cclxuICB1c2VySW5mbzoge30sXHJcbn07XHJcbmV4cG9ydCBjb25zdCBtdXRhdGlvbnMgPSB7XHJcbiAgLy/lgqjlrZjnlKjmiLfkv6Hmga9cclxuICBzZXRVc2VySW5mbyhzdGF0ZSwgZGF0YSkge1xyXG4gIFx0aWYgKGRhdGEpIHtcclxuICBcdFx0c3RhdGUudXNlckluZm8gPSAgT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUudXNlckluZm8sZGF0YSk7XHJcblxyXG5cclxuXHJcblxyXG4gIFx0XHR1bmkuc2V0U3RvcmFnZVN5bmMoJ3VzZXJJbmZvJywgc3RhdGUudXNlckluZm8pO1xyXG5cclxuICBcdH1cclxuICB9LFxyXG4gIC8vIOmAgOWHukFQUFxyXG4gIGVtcHR5VXNlckluZm8oc3RhdGUpIHtcclxuICBcdHN0YXRlLnVzZXJJbmZvID0ge307XHJcblxyXG5cclxuXHJcblxyXG4gIFx0dW5pLnJlbW92ZVN0b3JhZ2VTeW5jKFwidXNlckluZm9cIik7XHJcblxyXG4gIH0sXHJcbn07XHJcbmV4cG9ydCBjb25zdCBhY3Rpb25zID0ge1xyXG4gIFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///28\n");

/***/ }),
/* 29 */
/*!************************************************!*\
  !*** D:/uniapp/uniapp-simple/config/socket.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _baseUrl = _interopRequireDefault(__webpack_require__(/*! @/config/baseUrl */ 31));\nvar _store = _interopRequireDefault(__webpack_require__(/*! @/store */ 22));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError(\"Cannot call a class as a function\");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if (\"value\" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var\nsocket = /*#__PURE__*/function () {\n  function socket(options) {_classCallCheck(this, socket);\n    //地址\n    this.socketUrl = _baseUrl.default.socketUrl;\n    this.socketStart = false;\n    this.monitorSocketError();\n    this.monitorSocketClose();\n    this.socketReceive();\n  }_createClass(socket, [{ key: \"init\", value: function init(\n    callback) {var _this2 = this;\n      var _this = this;\n      if (_baseUrl.default.socketUrl) {\n        if (this.socketStart) {\n          __f__(\"log\", 'webSocket已经启动了', \" at config/socket.js:16\");\n        } else {\n          uni.connectSocket({\n            url: this.socketUrl,\n            method: 'GET' });\n\n          uni.onSocketOpen(function (res) {\n            _this2.socketStart = true;\n            callback && callback();\n            __f__(\"log\", 'WebSocket连接已打开！', \" at config/socket.js:25\");\n          });\n          setTimeout(function () {\n            _this.getHeartbeat();\n          }, 5000);\n        }\n      } else {\n        __f__(\"log\", 'config/baseUrl socketUrl为空', \" at config/socket.js:32\");\n      }\n    }\n    //Socket给服务器发送消息\n  }, { key: \"send\", value: function send(data, callback) {\n      var _this = this;\n      if (_store.default.state.userInfo.uid) {\n        data.userUid = _store.default.state.userInfo.uid;\n      }\n      __f__(\"log\", data, \" at config/socket.js:41\");\n      uni.sendSocketMessage({\n        data: JSON.stringify(data),\n        success: function success() {\n          callback && callback(true);\n        },\n        fail: function fail() {\n          callback && callback(false);\n        } });\n\n    }\n    //Socket接收服务器发送过来的消息\n  }, { key: \"socketReceive\", value: function socketReceive() {\n      var _this = this;\n      uni.onSocketMessage(function (res) {\n        var data = JSON.parse(res.data);\n        __f__(\"log\", '收到服务器内容：', data, \" at config/socket.js:57\");\n        _this.acceptMessage && _this.acceptMessage(data);\n      });\n    }\n    //关闭Socket\n  }, { key: \"closeSocket\", value: function closeSocket() {\n      uni.closeSocket();\n      _this.socketStart = false;\n    }\n    //监听Socket关闭\n  }, { key: \"monitorSocketClose\", value: function monitorSocketClose() {\n      var _this = this;\n      uni.onSocketClose(function (res) {\n        __f__(\"log\", 'WebSocket 已关闭！', \" at config/socket.js:70\");\n        _this.socketStart = false;\n        setTimeout(function () {\n          _this.init();\n        }, 3000);\n      });\n    }\n    //监听Socket错误\n  }, { key: \"monitorSocketError\", value: function monitorSocketError() {\n      var _this = this;\n      uni.onSocketError(function (res) {\n        _this.socketStart = false;\n        __f__(\"log\", 'WebSocket连接打开失败，请检查！', \" at config/socket.js:82\");\n      });\n    }\n    //心跳\n  }, { key: \"getHeartbeat\", value: function getHeartbeat() {\n      var _this = this;\n      this.send({\n        type: \"心跳\",\n        userUid: _store.default.state.userInfo.userUid },\n      function (val) {\n        setTimeout(function () {\n          if (val) {\n            _this.getHeartbeat();\n          } else {\n            _this.init();\n          }\n        }, 10000);\n      });\n    } }]);return socket;}();\n;\nvar mySocket = new socket();var _default =\nmySocket;exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 30)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29uZmlnL3NvY2tldC5qcyJdLCJuYW1lcyI6WyJzb2NrZXQiLCJvcHRpb25zIiwic29ja2V0VXJsIiwiYmFzZSIsInNvY2tldFN0YXJ0IiwibW9uaXRvclNvY2tldEVycm9yIiwibW9uaXRvclNvY2tldENsb3NlIiwic29ja2V0UmVjZWl2ZSIsImNhbGxiYWNrIiwiX3RoaXMiLCJ1bmkiLCJjb25uZWN0U29ja2V0IiwidXJsIiwibWV0aG9kIiwib25Tb2NrZXRPcGVuIiwicmVzIiwic2V0VGltZW91dCIsImdldEhlYXJ0YmVhdCIsImRhdGEiLCJzdG9yZSIsInN0YXRlIiwidXNlckluZm8iLCJ1aWQiLCJ1c2VyVWlkIiwic2VuZFNvY2tldE1lc3NhZ2UiLCJKU09OIiwic3RyaW5naWZ5Iiwic3VjY2VzcyIsImZhaWwiLCJvblNvY2tldE1lc3NhZ2UiLCJwYXJzZSIsImFjY2VwdE1lc3NhZ2UiLCJjbG9zZVNvY2tldCIsIm9uU29ja2V0Q2xvc2UiLCJpbml0Iiwib25Tb2NrZXRFcnJvciIsInNlbmQiLCJ0eXBlIiwidmFsIiwibXlTb2NrZXQiXSwibWFwcGluZ3MiOiJvSUFBQTtBQUNBLDRFO0FBQ01BLE07QUFDTCxrQkFBWUMsT0FBWixFQUFxQjtBQUNwQjtBQUNBLFNBQUtDLFNBQUwsR0FBaUJDLGlCQUFLRCxTQUF0QjtBQUNBLFNBQUtFLFdBQUwsR0FBbUIsS0FBbkI7QUFDQSxTQUFLQyxrQkFBTDtBQUNBLFNBQUtDLGtCQUFMO0FBQ0EsU0FBS0MsYUFBTDtBQUNBLEc7QUFDSUMsWSxFQUFVO0FBQ2QsVUFBTUMsS0FBSyxHQUFHLElBQWQ7QUFDQSxVQUFJTixpQkFBS0QsU0FBVCxFQUFvQjtBQUNuQixZQUFHLEtBQUtFLFdBQVIsRUFBb0I7QUFDbkIsdUJBQVksZ0JBQVo7QUFDQSxTQUZELE1BRUs7QUFDSk0sYUFBRyxDQUFDQyxhQUFKLENBQWtCO0FBQ2pCQyxlQUFHLEVBQUUsS0FBS1YsU0FETztBQUVqQlcsa0JBQU0sRUFBRSxL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ZXNDb250ZW50IjpbImltcG9ydCBiYXNlIGZyb20gJ0AvY29uZmlnL2Jhc2VVcmwnO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSAnQC9zdG9yZSc7XHJcbmNsYXNzIHNvY2tldCB7XHJcblx0Y29uc3RydWN0b3Iob3B0aW9ucykge1xyXG5cdFx0Ly/lnLDlnYBcclxuXHRcdHRoaXMuc29ja2V0VXJsID0gYmFzZS5zb2NrZXRVcmw7XHJcblx0XHR0aGlzLnNvY2tldFN0YXJ0ID0gZmFsc2U7XHJcblx0XHR0aGlzLm1vbml0b3JTb2NrZXRFcnJvcigpO1xyXG5cdFx0dGhpcy5tb25pdG9yU29ja2V0Q2xvc2UoKTtcclxuXHRcdHRoaXMuc29ja2V0UmVjZWl2ZSgpO1xyXG5cdH1cclxuXHRpbml0KGNhbGxiYWNrKSB7XHJcblx0XHRjb25zdCBfdGhpcyA9IHRoaXM7XHJcblx0XHRpZiAoYmFzZS5zb2NrZXRVcmwpIHtcclxuXHRcdFx0aWYodGhpcy5zb2NrZXRTdGFydCl7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ3dlYlNvY2tldOW3sue7j+WQr+WKqOS6hicpO1xyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHR1bmkuY29ubmVjdFNvY2tldCh7XHJcblx0XHRcdFx0XHR1cmw6IHRoaXMuc29ja2V0VXJsLFxyXG5cdFx0XHRcdFx0bWV0aG9kOiAnR0VUJ1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHVuaS5vblNvY2tldE9wZW4oKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5zb2NrZXRTdGFydCA9IHRydWU7XHJcblx0XHRcdFx0XHRjYWxsYmFjayAmJiBjYWxsYmFjaygpO1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ1dlYlNvY2tldOi/nuaOpeW3suaJk+W8gO+8gScpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0X3RoaXMuZ2V0SGVhcnRiZWF0KCk7XHJcblx0XHRcdFx0fSwgNTAwMCk7XHJcblx0XHRcdH1cclxuXHRcdH1lbHNle1xyXG5cdFx0XHRjb25zb2xlLmxvZygnY29uZmlnL2Jhc2VVcmwgc29ja2V0VXJs5Li656m6Jyk7XHJcblx0XHR9XHJcblx0fVxyXG5cdC8vU29ja2V057uZ5pyN5Yqh5Zmo5Y+R6YCB5raI5oGvXHJcblx0c2VuZChkYXRhLCBjYWxsYmFjaykge1xyXG5cdFx0Y29uc3QgX3RoaXMgPSB0aGlzO1xyXG5cdFx0aWYgKHN0b3JlLnN0YXRlLnVzZXJJbmZvLnVpZCkge1xyXG5cdFx0XHRkYXRhLnVzZXJVaWQgPSBzdG9yZS5zdGF0ZS51c2VySW5mby51aWQ7XHJcblx0XHR9XHJcblx0XHRjb25zb2xlLmxvZyhkYXRhKTtcclxuXHRcdHVuaS5zZW5kU29ja2V0TWVzc2FnZSh7XHJcblx0XHRcdGRhdGE6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG5cdFx0XHRzdWNjZXNzOiAoKSA9PiB7XHJcblx0XHRcdFx0Y2FsbGJhY2sgJiYgY2FsbGJhY2sodHJ1ZSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGZhaWw6ICgpID0+IHtcclxuXHRcdFx0XHRjYWxsYmFjayAmJiBjYWxsYmFjayhmYWxzZSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHQvL1NvY2tldOaOpeaUtuacjeWKoeWZqOWPkemAgei/h+adpeeahOa2iOaBr1xyXG5cdHNvY2tldFJlY2VpdmUoKSB7XHJcblx0XHRjb25zdCBfdGhpcyA9IHRoaXM7XHJcblx0XHR1bmkub25Tb2NrZXRNZXNzYWdlKGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRsZXQgZGF0YSA9IEpTT04ucGFyc2UocmVzLmRhdGEpO1xyXG5cdFx0XHRjb25zb2xlLmxvZygn5pS25Yiw5pyN5Yqh5Zmo5YaF5a6577yaJywgZGF0YSk7XHJcblx0XHRcdF90aGlzLmFjY2VwdE1lc3NhZ2UgJiYgX3RoaXMuYWNjZXB0TWVzc2FnZShkYXRhKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHQvL+WFs+mXrVNvY2tldFxyXG5cdGNsb3NlU29ja2V0KCkge1xyXG5cdFx0dW5pLmNsb3NlU29ja2V0KCk7XHJcblx0XHRfdGhpcy5zb2NrZXRTdGFydCA9IGZhbHNlO1xyXG5cdH1cclxuXHQvL+ebkeWQrFNvY2tldOWFs+mXrVxyXG5cdG1vbml0b3JTb2NrZXRDbG9zZSgpIHtcclxuXHRcdGNvbnN0IF90aGlzID0gdGhpcztcclxuXHRcdHVuaS5vblNvY2tldENsb3NlKGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnV2ViU29ja2V0IOW3suWFs+mXre+8gScpO1xyXG5cdFx0XHRfdGhpcy5zb2NrZXRTdGFydCA9IGZhbHNlO1xyXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdF90aGlzLmluaXQoKTtcclxuXHRcdFx0fSwgMzAwMCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0Ly/nm5HlkKxTb2NrZXTplJnor69cclxuXHRtb25pdG9yU29ja2V0RXJyb3IoKSB7XHJcblx0XHRjb25zdCBfdGhpcyA9IHRoaXM7XHJcblx0XHR1bmkub25Tb2NrZXRFcnJvcihmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0X3RoaXMuc29ja2V0U3RhcnQgPSBmYWxzZTtcclxuXHRcdFx0Y29uc29sZS5sb2coJ1dlYlNvY2tldOi/nuaOpeaJk+W8gOWksei0pe+8jOivt+ajgOafpe+8gScpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdC8v5b+D6LezXHJcblx0Z2V0SGVhcnRiZWF0KCkge1xyXG5cdFx0Y29uc3QgX3RoaXMgPSB0aGlzO1xyXG5cdFx0dGhpcy5zZW5kKHtcclxuXHRcdFx0dHlwZTogXCLlv4Pot7NcIixcclxuXHRcdFx0dXNlclVpZDogc3RvcmUuc3RhdGUudXNlckluZm8udXNlclVpZFxyXG5cdFx0fSwgKHZhbCkgPT4ge1xyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRpZiAodmFsKSB7XHJcblx0XHRcdFx0XHRfdGhpcy5nZXRIZWFydGJlYXQoKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0X3RoaXMuaW5pdCgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSwgMTAwMDApO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59O1xyXG5jb25zdCBteVNvY2tldCA9IG5ldyBzb2NrZXQoKTtcclxuZXhwb3J0IGRlZmF1bHQgbXlTb2NrZXQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///29\n");

/***/ }),
/* 30 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! exports provided: log, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLog; });
function typof (v) {
  var s = Object.prototype.toString.call(v)
  return s.substring(8, s.length - 1)
}

function isDebugMode () {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__
}

function jsonStringifyReplacer (k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }'
    default :
      return p
  }
}

function log (type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key]
  }
  console[type].apply(console, args)
}

function formatLog () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key]
  }
  var type = args.shift()
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'))
    return console[type].apply(console, args)
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase()

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---'
      } catch (e) {
        v = type
      }
    } else {
      if (v === null) {
        v = '---NULL---'
      } else if (v === undefined) {
        v = '---UNDEFINED---'
      } else {
        var vType = typof(v).toUpperCase()

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---'
        } else {
          v = String(v)
        }
      }
    }

    return v
  })
  var msg = ''

  if (msgs.length > 1) {
    var lastMsg = msgs.pop()
    msg = msgs.join('---COMMA---')

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg
    } else {
      msg += '---COMMA---' + lastMsg
    }
  } else {
    msg = msgs[0]
  }

  console[type](msg)
}


/***/ }),
/* 31 */
/*!*************************************************!*\
  !*** D:/uniapp/uniapp-simple/config/baseUrl.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var baseUrl = \"\";\nvar socketUrl = \"\";\nif (true) {\n  // 开发环境\n  // baseUrl = \"http://localhost:7001/\";\n  // socketUrl = \"ws://localhost:6001/\";\n  baseUrl = \"http://8.129.186.35/\";\n  socketUrl = \"ws://8.129.186.35:6001/\";\n\n  // socketUrl = \"ws://8.129.186.35:6001/\";\n} else {}\nvar courtConfig = {\n  //微信公众号APPID\n  publicAppId: \"\",\n  //请求接口\n  baseUrl: baseUrl,\n  //webSocket地址\n  socketUrl: socketUrl,\n  //平台名称\n  platformName: \"uniApp-案例\",\n  //项目logo\n  logoUrl: \"https://qn.kemean.cn/upload/201906/19/3f3b4751f3ed4a97be804450c3ec4c79\",\n  //页面分享配置\n  share: {\n    title: 'uniApp-案例',\n\n\n\n\n    //公众号||APP分享\n    desc: \"uniApp-案例\", // 分享描述\n    link: \"https://www.kemean.com/sameCity/18031201/index.html\", // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致\n    imgUrl: \"http://qn.kemean.cn/upload/201901/28/23bedfc34597482292ecd6dc107f6342\" // 分享图标\n  } };\n\n\n//手机号验证正则表达式\nvar phoneRegular = /^1\\d{10}$/;\n//邮箱验证正则表达式\nvar mailRegular = /^\\w+@\\w+(\\.[a-zA-Z]{2,3}){1,2}$/;\n//密码验证正则表达式\nvar passwordRegular = /^[a-zA-Z0-9]{4,10}$/;var _default =\nObject.assign({\n  phoneRegular: phoneRegular,\n  mailRegular: mailRegular,\n  passwordRegular: passwordRegular },\ncourtConfig);exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29uZmlnL2Jhc2VVcmwuanMiXSwibmFtZXMiOlsiYmFzZVVybCIsInNvY2tldFVybCIsInByb2Nlc3MiLCJjb3VydENvbmZpZyIsInB1YmxpY0FwcElkIiwicGxhdGZvcm1OYW1lIiwibG9nb1VybCIsInNoYXJlIiwidGl0bGUiLCJkZXNjIiwibGluayIsImltZ1VybCIsInBob25lUmVndWxhciIsIm1haWxSZWd1bGFyIiwicGFzc3dvcmRSZWd1bGFyIiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoidUZBQUEsSUFBSUEsT0FBTyxHQUFHLEVBQWQ7QUFDQSxJQUFJQyxTQUFTLEdBQUcsRUFBaEI7QUFDQSxJQUFJQyxJQUFKLEVBQTRDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBRixTQUFPLEdBQUcsc0JBQVY7QUFDQUMsV0FBUyxHQUFHLHlCQUFaOztBQUVBO0FBQ0EsQ0FSRCxNQVFPLEVBSU47QUFDRCxJQUFNRSxXQUFXLEdBQUc7QUFDbkI7QUFDQUMsYUFBVyxFQUFFLEVBRk07QUFHbkI7QUFDQUosU0FBTyxFQUFFQSxPQUpVO0FBS25CO0FBQ0FDLFdBQVMsRUFBRUEsU0FOUTtBQU9uQjtBQUNBSSxjQUFZLEVBQUUsV0FSSztBQVNuQjtBQUNBQyxTQUFPLEVBQUUsd0VBVlU7QUFXbkI7QUFDQUMsT0FBSyxFQUFFO0FBQ05DLFNBQUssRUFBRSxXQUREOzs7OztBQU1OO0FBQ0FDLFFBQUksRUFBRSxXQVBBLEVBT2E7QUFDbkJDLFFBQUksRUFBRSxxREFSQSxFQVF1RDtBQUM3REMsVUFBTSxFQUFFLHVFQVRGLENBUzJFO0FBVDNFLEdBWlksRUFBcEI7OztBQXlCQTtBQUNBLElBQU1DLFlBQVksR0FBRyxXQUFyQjtBQUNBO0FBQ0EsSUFBTUMsV0FBVyxHQUFHLGlDQUFwQjtBQUNBO0FBQ0EsSUFBTUMsZUFBZSxHQUFHLHFCQUF4QixDO0FBQ2VDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjO0FBQzVCSixjQUFZLEVBQVpBLFlBRDRCO0FBRTVCQyxhQUFXLEVBQVhBLFdBRjRCO0FBRzVCQyxpQkFBZSxFQUFmQSxlQUg0QixFQUFkO0FBSVpYLFdBSlksQyIsImZpbGUiOiIzMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBiYXNlVXJsID0gXCJcIjtcclxubGV0IHNvY2tldFVybCA9IFwiXCI7XHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG5cdC8vIOW8gOWPkeeOr+Wig1xyXG5cdC8vIGJhc2VVcmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NzAwMS9cIjtcclxuXHQvLyBzb2NrZXRVcmwgPSBcIndzOi8vbG9jYWxob3N0OjYwMDEvXCI7XHJcblx0YmFzZVVybCA9IFwiaHR0cDovLzguMTI5LjE4Ni4zNS9cIjtcclxuXHRzb2NrZXRVcmwgPSBcIndzOi8vOC4xMjkuMTg2LjM1OjYwMDEvXCI7XHJcblx0XHJcblx0Ly8gc29ja2V0VXJsID0gXCJ3czovLzguMTI5LjE4Ni4zNTo2MDAxL1wiO1xyXG59IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcclxuXHQvLyDnlJ/kuqfnjq/looNcclxuXHRiYXNlVXJsID0gXCJodHRwOi8vOC4xMjkuMTg2LjM1L1wiO1xyXG5cdHNvY2tldFVybCA9IFwid3M6Ly84LjEyOS4xODYuMzU6NjAwMS9cIjtcclxufVxyXG5jb25zdCBjb3VydENvbmZpZyA9IHtcclxuXHQvL+W+ruS/oeWFrOS8l+WPt0FQUElEXHJcblx0cHVibGljQXBwSWQ6IFwiXCIsXHJcblx0Ly/or7fmsYLmjqXlj6NcclxuXHRiYXNlVXJsOiBiYXNlVXJsLFxyXG5cdC8vd2ViU29ja2V05Zyw5Z2AXHJcblx0c29ja2V0VXJsOiBzb2NrZXRVcmwsXHJcblx0Ly/lubPlj7DlkI3np7BcclxuXHRwbGF0Zm9ybU5hbWU6IFwidW5pQXBwLeahiOS+i1wiLFxyXG5cdC8v6aG555uubG9nb1xyXG5cdGxvZ29Vcmw6IFwiaHR0cHM6Ly9xbi5rZW1lYW4uY24vdXBsb2FkLzIwMTkwNi8xOS8zZjNiNDc1MWYzZWQ0YTk3YmU4MDQ0NTBjM2VjNGM3OVwiLFxyXG5cdC8v6aG16Z2i5YiG5Lqr6YWN572uXHJcblx0c2hhcmU6IHtcclxuXHRcdHRpdGxlOiAndW5pQXBwLeahiOS+iycsXHJcblxyXG5cclxuXHJcblxyXG5cdFx0Ly/lhazkvJflj7d8fEFQUOWIhuS6q1xyXG5cdFx0ZGVzYzogXCJ1bmlBcHAt5qGI5L6LXCIsIC8vIOWIhuS6q+aPj+i/sFxyXG5cdFx0bGluazogXCJodHRwczovL3d3dy5rZW1lYW4uY29tL3NhbWVDaXR5LzE4MDMxMjAxL2luZGV4Lmh0bWxcIiwgLy8g5YiG5Lqr6ZO+5o6l77yM6K+l6ZO+5o6l5Z+f5ZCN5oiW6Lev5b6E5b+F6aG75LiO5b2T5YmN6aG16Z2i5a+55bqU55qE5YWs5LyX5Y+3SlPlronlhajln5/lkI3kuIDoh7RcclxuXHRcdGltZ1VybDogXCJodHRwOi8vcW4ua2VtZWFuLmNuL3VwbG9hZC8yMDE5MDEvMjgvMjNiZWRmYzM0NTk3NDgyMjkyZWNkNmRjMTA3ZjYzNDJcIiwgLy8g5YiG5Lqr5Zu+5qCHXHJcblxyXG5cdH1cclxufTtcclxuLy/miYvmnLrlj7fpqozor4HmraPliJnooajovr7lvI9cclxuY29uc3QgcGhvbmVSZWd1bGFyID0gL14xXFxkezEwfSQvO1xyXG4vL+mCrueusemqjOivgeato+WImeihqOi+vuW8j1xyXG5jb25zdCBtYWlsUmVndWxhciA9IC9eXFx3K0BcXHcrKFxcLlthLXpBLVpdezIsM30pezEsMn0kLztcclxuLy/lr4bnoIHpqozor4HmraPliJnooajovr7lvI9cclxuY29uc3QgcGFzc3dvcmRSZWd1bGFyID0gL15bYS16QS1aMC05XXs0LDEwfSQvO1xyXG5leHBvcnQgZGVmYXVsdCBPYmplY3QuYXNzaWduKHtcclxuXHRwaG9uZVJlZ3VsYXIsXHJcblx0bWFpbFJlZ3VsYXIsXHJcblx0cGFzc3dvcmRSZWd1bGFyXHJcbn0sIGNvdXJ0Q29uZmlnKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///31\n");

/***/ }),
/* 32 */
/*!**********************************************************!*\
  !*** D:/uniapp/uniapp-simple/plugins/APPUpdate/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = _default;exports.getCurrentNo = void 0;\n\n\n\nvar _requestConfig = _interopRequireDefault(__webpack_require__(/*! @/config/requestConfig */ 33));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /**** 此文件说明请看注释 *****/ // 可以用自己项目的请求方法\n// 请求配置说明：https://ext.dcloud.net.cn/plugin?id=822\n/**** 结束 *****/\nvar platform = uni.getSystemInfoSync().platform;\n// 主颜色\nvar $mainColor = \"FF5B78\";\n// 弹窗图标url\nvar $iconUrl = \"/static/icon/ic_ar.png\";\n\n// 获取当前应用的版本号\nvar getCurrentNo = function getCurrentNo(callback) {\n  // 获取本地应用资源版本号\n  plus.runtime.getProperty(plus.runtime.appid, function (inf) {\n    callback && callback({\n      versionCode: inf.versionCode,\n      versionName: inf.version });\n\n  });\n};\n// 发起ajax请求获取服务端版本号\nexports.getCurrentNo = getCurrentNo;var getServerNo = function getServerNo(version) {var isPrompt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var callback = arguments.length > 2 ? arguments[2] : undefined;\n  var httpData = {\n    version: version.versionCode,\n    versionName: version.versionName };\n\n  if (platform == \"android\") {\n    httpData.type = 1101;\n  } else {\n    httpData.type = 1102;\n  }\n  /* 接口入参说明\r\n     * version: 应用当前版本号（已自动获取）\r\n     * versionName: 应用当前版本名称（已自动获取）\r\n     * type：平台（1101是安卓，1102是IOS）\r\n     */\n  /****************以下是示例*******************/\n  // 可以用自己项目的请求方法\n  _requestConfig.default.get(\"api/common/v1/app_version\", httpData, {\n    isPrompt: isPrompt }).\n  then(function (res) {\n    /* res的数据说明\r\n                        * | 参数名称\t     | 一定返回 \t| 类型\t    | 描述\r\n                        * | -------------|--------- | --------- | ------------- |\r\n                        * | versionCode\t | y\t    | int\t    | 版本号        |\r\n                        * | versionName\t | y\t    | String\t| 版本名称      |\r\n                        * | versionInfo\t | y\t    | String\t| 版本信息      |\r\n                        * | forceUpdate\t | y\t    | boolean\t| 是否强制更新  |\r\n                        * | downloadUrl\t | y\t    | String\t| 版本下载链接（IOS安装包更新请放跳转store应用商店链接,安卓apk和wgt文件放文件下载链接）  |\r\n                        */\n    if (res && res.downloadUrl) {\n      callback && callback(res);\n    } else if (isPrompt) {\n      uni.showToast({\n        title: \"暂无新版本\",\n        icon: \"none\" });\n\n    }\n  });\n  /****************以上是示例*******************/\n};\n// 从服务器下载应用资源包（wgt文件）\nvar getDownload = function getDownload(data) {\n  var popupData = {\n    progress: true,\n    buttonNum: 2 };\n\n  if (data.forceUpdate) {\n    popupData.buttonNum = 0;\n  }\n  var dtask;\n  var lastProgressValue = 0;\n  var popupObj = downloadPopup(popupData);\n  dtask = plus.downloader.createDownload(data.downloadUrl, {\n    filename: \"_doc/update/\" },\n  function (download, status) {\n    if (status == 200) {\n      popupObj.change({\n        progressValue: 100,\n        progressTip: \"正在安装文件...\",\n        progress: true,\n        buttonNum: 0 });\n\n      plus.runtime.install(download.filename, {}, function () {\n        popupObj.change({\n          contentText: \"应用资源更新完成！\",\n          buttonNum: 1,\n          progress: false });\n\n      }, function (e) {\n        popupObj.cancel();\n        plus.nativeUI.alert(\"安装文件失败[\" + e.code + \"]：\" + e.message);\n      });\n    } else {\n      popupObj.change({\n        contentText: \"文件下载失败...\",\n        buttonNum: 1,\n        progress: false });\n\n    }\n  });\n  dtask.start();\n  dtask.addEventListener(\"statechanged\", function (task, status) {\n    switch (task.state) {\n      case 1: // 开始\n        popupObj.change({\n          progressValue: 0,\n          progressTip: \"准备下载...\",\n          progress: true });\n\n        break;\n      case 2: // 已连接到服务器  \n        popupObj.change({\n          progressValue: 0,\n          progressTip: \"开始下载...\",\n          progress: true });\n\n        break;\n      case 3:\n        var progress = parseInt(task.downloadedSize / task.totalSize * 100);\n        if (progress - lastProgressValue >= 2) {\n          lastProgressValue = progress;\n          popupObj.change({\n            progressValue: progress,\n            progressTip: \"已下载\" + progress + \"%\",\n            progress: true });\n\n        }\n        break;}\n\n  });\n  // 取消下载\n  popupObj.cancelDownload = function () {\n    dtask && dtask.abort();\n    uni.showToast({\n      title: \"已取消下载\",\n      icon: \"none\" });\n\n  };\n  // 重启APP\n  popupObj.reboot = function () {\n    plus.runtime.restart();\n  };\n};\n// 文字换行\nfunction drawtext(text, maxWidth) {\n  var textArr = text.split(\"\");\n  var len = textArr.length;\n  // 上个节点\n  var previousNode = 0;\n  // 记录节点宽度\n  var nodeWidth = 0;\n  // 文本换行数组\n  var rowText = [];\n  // 如果是字母，侧保存长度\n  var letterWidth = 0;\n  // 汉字宽度\n  var chineseWidth = 14;\n  // otherFont宽度\n  var otherWidth = 7;\n  for (var i = 0; i < len; i++) {\n    if (/[\\u4e00-\\u9fa5]|[\\uFE30-\\uFFA0]/g.test(textArr[i])) {\n      if (letterWidth > 0) {\n        if (nodeWidth + chineseWidth + letterWidth * otherWidth > maxWidth) {\n          rowText.push({\n            type: \"text\",\n            content: text.substring(previousNode, i) });\n\n          previousNode = i;\n          nodeWidth = chineseWidth;\n          letterWidth = 0;\n        } else {\n          nodeWidth += chineseWidth + letterWidth * otherWidth;\n          letterWidth = 0;\n        }\n      } else {\n        if (nodeWidth + chineseWidth > maxWidth) {\n          rowText.push({\n            type: \"text\",\n            content: text.substring(previousNode, i) });\n\n          previousNode = i;\n          nodeWidth = chineseWidth;\n        } else {\n          nodeWidth += chineseWidth;\n        }\n      }\n    } else {\n      if (/\\n/g.test(textArr[i])) {\n        rowText.push({\n          type: \"break\",\n          content: text.substring(previousNode, i) });\n\n        previousNode = i + 1;\n        nodeWidth = 0;\n        letterWidth = 0;\n      } else if (textArr[i] == \"\\\\\" && textArr[i + 1] == \"n\") {\n        rowText.push({\n          type: \"break\",\n          content: text.substring(previousNode, i) });\n\n        previousNode = i + 2;\n        nodeWidth = 0;\n        letterWidth = 0;\n      } else if (/[a-zA-Z0-9]/g.test(textArr[i])) {\n        letterWidth += 1;\n        if (nodeWidth + letterWidth * otherWidth > maxWidth) {\n          rowText.push({\n            type: \"text\",\n            content: text.substring(previousNode, i + 1 - letterWidth) });\n\n          previousNode = i + 1 - letterWidth;\n          nodeWidth = letterWidth * otherWidth;\n          letterWidth = 0;\n        }\n      } else {\n        if (nodeWidth + otherWidth > maxWidth) {\n          rowText.push({\n            type: \"text\",\n            content: text.substring(previousNode, i) });\n\n          previousNode = i;\n          nodeWidth = otherWidth;\n        } else {\n          nodeWidth += otherWidth;\n        }\n      }\n    }\n  }\n  if (previousNode < len) {\n    rowText.push({\n      type: \"text\",\n      content: text.substring(previousNode, len) });\n\n  }\n  return rowText;\n}\n// 是否更新弹窗\nfunction updatePopup(data, callback) {\n  // 弹窗遮罩层\n  var maskLayer = new plus.nativeObj.View(\"maskLayer\", { //先创建遮罩层\n    top: '0px',\n    left: '0px',\n    height: '100%',\n    width: '100%',\n    backgroundColor: 'rgba(0,0,0,0.5)' });\n\n\n  // 以下为计算菜单的nview绘制布局，为固定算法，使用者无关关心\n  var screenWidth = plus.screen.resolutionWidth;\n  var screenHeight = plus.screen.resolutionHeight;\n  //弹窗容器宽度\n  var popupViewWidth = screenWidth * 0.7;\n  // 弹窗容器的Padding\n  var viewContentPadding = 20;\n  // 弹窗容器的宽度\n  var viewContentWidth = parseInt(popupViewWidth - viewContentPadding * 2);\n  // 描述的列表\n  var descriptionList = drawtext(data.versionInfo, viewContentWidth);\n  // 弹窗容器高度\n  var popupViewHeight = 80 + 20 + 20 + 90 + 10;\n  var popupViewContentList = [{\n    src: $iconUrl,\n    id: \"logo\",\n    tag: \"img\",\n    position: {\n      top: \"0px\",\n      left: (popupViewWidth - 124) / 2 + \"px\",\n      width: \"124px\",\n      height: \"80px\" } },\n\n\n  {\n    tag: 'font',\n    id: 'title',\n    text: \"发现新版本\" + data.versionName,\n    textStyles: {\n      size: '18px',\n      color: \"#333\",\n      weight: \"bold\",\n      whiteSpace: \"normal\" },\n\n    position: {\n      top: '90px',\n      left: viewContentPadding + \"px\",\n      width: viewContentWidth + \"px\",\n      height: \"30px\" } }];\n\n\n  var textHeight = 18;\n  var contentTop = 130;\n  descriptionList.forEach(function (item, index) {\n    if (index > 0) {\n      popupViewHeight += textHeight;\n      contentTop += textHeight;\n    }\n    popupViewContentList.push({\n      tag: 'font',\n      id: 'content' + index + 1,\n      text: item.content,\n      textStyles: {\n        size: '14px',\n        color: \"#666\",\n        lineSpacing: \"50%\",\n        align: \"left\" },\n\n      position: {\n        top: contentTop + \"px\",\n        left: viewContentPadding + \"px\",\n        width: viewContentWidth + \"px\",\n        height: textHeight + \"px\" } });\n\n\n    if (item.type == \"break\") {\n      contentTop += 10;\n      popupViewHeight += 10;\n    }\n  });\n  // 弹窗内容\n  var popupView = new plus.nativeObj.View(\"popupView\", { //创建底部图标菜单\n    tag: \"rect\",\n    top: (screenHeight - popupViewHeight) / 2 + \"px\",\n    left: '15%',\n    height: popupViewHeight + \"px\",\n    width: \"70%\" });\n\n  // 绘制白色背景\n  popupView.drawRect({\n    color: \"#FFFFFF\",\n    radius: \"8px\" },\n  {\n    top: \"40px\",\n    height: popupViewHeight - 40 + \"px\" });\n\n  // 绘制底边按钮\n  popupView.drawRect({\n    radius: \"3px\",\n    borderColor: \"#f1f1f1\",\n    borderWidth: \"1px\" },\n  {\n    bottom: viewContentPadding + 'px',\n    left: viewContentPadding + \"px\",\n    width: (viewContentWidth - viewContentPadding) / 2 + \"px\",\n    height: \"30px\" });\n\n  // 绘制底边按钮\n  popupView.drawRect({\n    radius: \"3px\",\n    color: $mainColor },\n  {\n    bottom: viewContentPadding + 'px',\n    left: (viewContentWidth - viewContentPadding) / 2 + viewContentPadding * 2 + \"px\",\n    width: (viewContentWidth - viewContentPadding) / 2 + \"px\",\n    height: \"30px\" });\n\n  popupViewContentList.push({\n    tag: 'font',\n    id: 'cancelText',\n    text: \"暂不升级\",\n    textStyles: {\n      size: '14px',\n      color: \"#666\",\n      lineSpacing: \"0%\",\n      whiteSpace: \"normal\" },\n\n    position: {\n      bottom: viewContentPadding + 'px',\n      left: viewContentPadding + \"px\",\n      width: (viewContentWidth - viewContentPadding) / 2 + \"px\",\n      height: \"30px\" } });\n\n\n  popupViewContentList.push({\n    tag: 'font',\n    id: 'confirmText',\n    text: \"立即升级\",\n    textStyles: {\n      size: '14px',\n      color: \"#FFF\",\n      lineSpacing: \"0%\",\n      whiteSpace: \"normal\" },\n\n    position: {\n      bottom: viewContentPadding + 'px',\n      left: (viewContentWidth - viewContentPadding) / 2 + viewContentPadding * 2 + \"px\",\n      width: (viewContentWidth - viewContentPadding) / 2 + \"px\",\n      height: \"30px\" } });\n\n\n  popupView.draw(popupViewContentList);\n  popupView.addEventListener(\"click\", function (e) {\n    var maxTop = popupViewHeight - viewContentPadding;\n    var maxLeft = popupViewWidth - viewContentPadding;\n    var buttonWidth = (viewContentWidth - viewContentPadding) / 2;\n    if (e.clientY > maxTop - 30 && e.clientY < maxTop) {\n      // 暂不升级\n      if (e.clientX > viewContentPadding && e.clientX < maxLeft - buttonWidth - viewContentPadding) {\n        maskLayer.hide();\n        popupView.hide();\n      } else if (e.clientX > maxLeft - buttonWidth && e.clientX < maxLeft) {\n        // 立即升级\n        maskLayer.hide();\n        popupView.hide();\n        callback && callback();\n      }\n    }\n  });\n  // 点击遮罩层\n  maskLayer.addEventListener(\"click\", function () {//处理遮罩层点击\n    maskLayer.hide();\n    popupView.hide();\n  });\n  // 显示弹窗\n  maskLayer.show();\n  popupView.show();\n}\n// 文件下载的弹窗绘图\nfunction downloadPopupDrawing(data) {\n  // 以下为计算菜单的nview绘制布局，为固定算法，使用者无关关心\n  var screenWidth = plus.screen.resolutionWidth;\n  var screenHeight = plus.screen.resolutionHeight;\n  //弹窗容器宽度\n  var popupViewWidth = screenWidth * 0.7;\n  // 弹窗容器的Padding\n  var viewContentPadding = 20;\n  // 弹窗容器的宽度\n  var viewContentWidth = popupViewWidth - viewContentPadding * 2;\n  // 弹窗容器高度\n  var popupViewHeight = viewContentPadding * 3 + 60;\n  var progressTip = data.progressTip || \"准备下载...\";\n  var contentText = data.contentText || \"正在为您更新，请耐心等待\";\n  var elementList = [\n  {\n    tag: 'rect', //背景色\n    color: '#FFFFFF',\n    rectStyles: {\n      radius: \"8px\" } },\n\n\n  {\n    tag: 'font',\n    id: 'title',\n    text: \"升级APP\",\n    textStyles: {\n      size: '16px',\n      color: \"#333\",\n      weight: \"bold\",\n      verticalAlign: \"middle\",\n      whiteSpace: \"normal\" },\n\n    position: {\n      top: viewContentPadding + 'px',\n      height: \"30px\" } },\n\n\n  {\n    tag: 'font',\n    id: 'content',\n    text: contentText,\n    textStyles: {\n      size: '14px',\n      color: \"#333\",\n      verticalAlign: \"middle\",\n      whiteSpace: \"normal\" },\n\n    position: {\n      top: viewContentPadding * 2 + 30 + 'px',\n      height: \"20px\" } }];\n\n\n\n  // 是否有进度条\n  if (data.progress) {\n    popupViewHeight += viewContentPadding + 40;\n    elementList = elementList.concat([\n    {\n      tag: 'font',\n      id: 'progressValue',\n      text: progressTip,\n      textStyles: {\n        size: '14px',\n        color: $mainColor,\n        whiteSpace: \"normal\" },\n\n      position: {\n        top: viewContentPadding * 4 + 20 + 'px',\n        height: \"30px\" } },\n\n\n    {\n      tag: 'rect', //绘制进度条背景\n      id: 'progressBg',\n      rectStyles: {\n        radius: \"4px\",\n        borderColor: \"#f1f1f1\",\n        borderWidth: \"1px\" },\n\n      position: {\n        top: viewContentPadding * 4 + 60 + 'px',\n        left: viewContentPadding + \"px\",\n        width: viewContentWidth + \"px\",\n        height: \"8px\" } }]);\n\n\n\n  }\n  if (data.buttonNum == 2) {\n    popupViewHeight += viewContentPadding + 30;\n    elementList = elementList.concat([\n    {\n      tag: 'rect', //绘制底边按钮\n      rectStyles: {\n        radius: \"3px\",\n        borderColor: \"#f1f1f1\",\n        borderWidth: \"1px\" },\n\n      position: {\n        bottom: viewContentPadding + 'px',\n        left: viewContentPadding + \"px\",\n        width: (viewContentWidth - viewContentPadding) / 2 + \"px\",\n        height: \"30px\" } },\n\n\n    {\n      tag: 'rect', //绘制底边按钮\n      rectStyles: {\n        radius: \"3px\",\n        color: $mainColor },\n\n      position: {\n        bottom: viewContentPadding + 'px',\n        left: (viewContentWidth - viewContentPadding) / 2 + viewContentPadding * 2 + \"px\",\n        width: (viewContentWidth - viewContentPadding) / 2 + \"px\",\n        height: \"30px\" } },\n\n\n    {\n      tag: 'font',\n      id: 'cancelText',\n      text: \"取消下载\",\n      textStyles: {\n        size: '14px',\n        color: \"#666\",\n        lineSpacing: \"0%\",\n        whiteSpace: \"normal\" },\n\n      position: {\n        bottom: viewContentPadding + 'px',\n        left: viewContentPadding + \"px\",\n        width: (viewContentWidth - viewContentPadding) / 2 + \"px\",\n        height: \"30px\" } },\n\n\n    {\n      tag: 'font',\n      id: 'confirmText',\n      text: \"后台下载\",\n      textStyles: {\n        size: '14px',\n        color: \"#FFF\",\n        lineSpacing: \"0%\",\n        whiteSpace: \"normal\" },\n\n      position: {\n        bottom: viewContentPadding + 'px',\n        left: (viewContentWidth - viewContentPadding) / 2 + viewContentPadding * 2 + \"px\",\n        width: (viewContentWidth - viewContentPadding) / 2 + \"px\",\n        height: \"30px\" } }]);\n\n\n\n  }\n  if (data.buttonNum == 1) {\n    popupViewHeight += viewContentPadding + 40;\n    elementList = elementList.concat([\n    {\n      tag: 'rect', //绘制底边按钮\n      rectStyles: {\n        radius: \"6px\",\n        color: $mainColor },\n\n      position: {\n        bottom: viewContentPadding + 'px',\n        left: viewContentPadding + \"px\",\n        width: viewContentWidth + \"px\",\n        height: \"40px\" } },\n\n\n    {\n      tag: 'font',\n      id: 'confirmText',\n      text: \"关闭\",\n      textStyles: {\n        size: '14px',\n        color: \"#FFF\",\n        lineSpacing: \"0%\" },\n\n      position: {\n        bottom: viewContentPadding + 'px',\n        left: viewContentPadding + \"px\",\n        width: viewContentWidth + \"px\",\n        height: \"40px\" } }]);\n\n\n\n  }\n  return {\n    popupViewHeight: popupViewHeight,\n    popupViewWidth: popupViewWidth,\n    screenHeight: screenHeight,\n    viewContentWidth: viewContentWidth,\n    viewContentPadding: viewContentPadding,\n    elementList: elementList };\n\n}\n// 文件下载的弹窗\nfunction downloadPopup(data) {\n  // 弹窗遮罩层\n  var maskLayer = new plus.nativeObj.View(\"maskLayer\", { //先创建遮罩层\n    top: '0px',\n    left: '0px',\n    height: '100%',\n    width: '100%',\n    backgroundColor: 'rgba(0,0,0,0.5)' });\n\n  var popupViewData = downloadPopupDrawing(data);\n  // 弹窗内容\n  var popupView = new plus.nativeObj.View(\"popupView\", { //创建底部图标菜单\n    tag: \"rect\",\n    top: (popupViewData.screenHeight - popupViewData.popupViewHeight) / 2 + \"px\",\n    left: '15%',\n    height: popupViewData.popupViewHeight + \"px\",\n    width: \"70%\" });\n\n  var progressValue = 0;\n  var progressTip = 0;\n  var contentText = 0;\n  var buttonNum = 2;\n  if (data.buttonNum >= 0) {\n    buttonNum = data.buttonNum;\n  }\n  popupView.draw(popupViewData.elementList);\n  var callbackData = {\n    change: function change(res) {\n      var progressElement = [];\n      if (res.progressValue) {\n        progressValue = res.progressValue;\n        // 绘制进度条\n        progressElement.push({\n          tag: 'rect', //绘制进度条背景\n          id: 'progressValueBg',\n          rectStyles: {\n            radius: \"4px\",\n            color: $mainColor },\n\n          position: {\n            top: popupViewData.viewContentPadding * 4 + 60 + 'px',\n            left: popupViewData.viewContentPadding + \"px\",\n            width: popupViewData.viewContentWidth * (res.progressValue / 100) + \"px\",\n            height: \"8px\" } });\n\n\n      }\n      if (res.progressTip) {\n        progressTip = res.progressTip;\n        progressElement.push({\n          tag: 'font',\n          id: 'progressValue',\n          text: res.progressTip,\n          textStyles: {\n            size: '14px',\n            color: $mainColor,\n            whiteSpace: \"normal\" },\n\n          position: {\n            top: popupViewData.viewContentPadding * 4 + 20 + 'px',\n            height: \"30px\" } });\n\n\n      }\n      if (res.contentText) {\n        contentText = res.contentText;\n        progressElement.push({\n          tag: 'font',\n          id: 'content',\n          text: res.contentText,\n          textStyles: {\n            size: '16px',\n            color: \"#333\",\n            whiteSpace: \"normal\" },\n\n          position: {\n            top: popupViewData.viewContentPadding * 2 + 30 + 'px',\n            height: \"30px\" } });\n\n\n      }\n      if (res.buttonNum >= 0 && buttonNum != res.buttonNum) {\n        buttonNum = res.buttonNum;\n        popupView.reset();\n        popupViewData = downloadPopupDrawing(Object.assign({\n          progressValue: progressValue,\n          progressTip: progressTip,\n          contentText: contentText },\n        res));\n        var newElement = [];\n        popupViewData.elementList.map(function (item, index) {\n          var have = false;\n          progressElement.forEach(function (childItem, childIndex) {\n            if (item.id == childItem.id) {\n              have = true;\n            }\n          });\n          if (!have) {\n            newElement.push(item);\n          }\n        });\n        progressElement = newElement.concat(progressElement);\n        popupView.setStyle({\n          tag: \"rect\",\n          top: (popupViewData.screenHeight - popupViewData.popupViewHeight) / 2 + \"px\",\n          left: '15%',\n          height: popupViewData.popupViewHeight + \"px\",\n          width: \"70%\" });\n\n        popupView.draw(progressElement);\n      } else {\n        popupView.draw(progressElement);\n      }\n    },\n    cancel: function cancel() {\n      maskLayer.hide();\n      popupView.hide();\n    } };\n\n  popupView.addEventListener(\"click\", function (e) {\n    var maxTop = popupViewData.popupViewHeight - popupViewData.viewContentPadding;\n    var maxLeft = popupViewData.popupViewWidth - popupViewData.viewContentPadding;\n    if (e.clientY > maxTop - 40 && e.clientY < maxTop) {\n      if (buttonNum == 1) {\n        // 单按钮\n        if (e.clientX > popupViewData.viewContentPadding && e.clientX < maxLeft) {\n          maskLayer.hide();\n          popupView.hide();\n          callbackData.reboot();\n        }\n      } else if (buttonNum == 2) {\n        // 双按钮\n        var buttonWidth = (popupViewData.viewContentWidth - popupViewData.viewContentPadding) / 2;\n        if (e.clientX > popupViewData.viewContentPadding && e.clientX < maxLeft - buttonWidth - popupViewData.viewContentPadding) {\n          maskLayer.hide();\n          popupView.hide();\n          callbackData.cancelDownload();\n        } else if (e.clientX > maxLeft - buttonWidth && e.clientX < maxLeft) {\n          maskLayer.hide();\n          popupView.hide();\n        }\n      }\n    }\n  });\n  // 显示弹窗\n  maskLayer.show();\n  popupView.show();\n  // 改变进度条\n  return callbackData;\n}\nfunction _default() {var isPrompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n  getCurrentNo(function (versionInfo) {\n    getServerNo(versionInfo, isPrompt, function (res) {\n      if (res.forceUpdate) {\n        if (/\\.wgt$/i.test(res.downloadUrl)) {\n          getDownload(res);\n        } else if (/\\.html$/i.test(res.downloadUrl)) {\n          plus.runtime.openURL(res.downloadUrl);\n        } else {\n          if (platform == \"android\") {\n            getDownload(res);\n          } else {\n            plus.runtime.openURL(res.downloadUrl);\n          }\n        }\n      } else {\n        updatePopup(res, function () {\n          if (/\\.wgt$/i.test(res.downloadUrl)) {\n            getDownload(res);\n          } else if (/\\.html$/i.test(res.downloadUrl)) {\n            plus.runtime.openURL(res.downloadUrl);\n          } else {\n            if (platform == \"android\") {\n              getDownload(res);\n            } else {\n              plus.runtime.openURL(res.downloadUrl);\n            }\n          }\n        });\n      }\n    });\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGx1Z2lucy9BUFBVcGRhdGUvaW5kZXguanMiXSwibmFtZXMiOlsicGxhdGZvcm0iLCJ1bmkiLCJnZXRTeXN0ZW1JbmZvU3luYyIsIiRtYWluQ29sb3IiLCIkaWNvblVybCIsImdldEN1cnJlbnRObyIsImNhbGxiYWNrIiwicGx1cyIsInJ1bnRpbWUiLCJnZXRQcm9wZXJ0eSIsImFwcGlkIiwiaW5mIiwidmVyc2lvbkNvZGUiLCJ2ZXJzaW9uTmFtZSIsInZlcnNpb24iLCJnZXRTZXJ2ZXJObyIsImlzUHJvbXB0IiwiaHR0cERhdGEiLCJ0eXBlIiwiJGh0dHAiLCJnZXQiLCJ0aGVuIiwicmVzIiwiZG93bmxvYWRVcmwiLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJnZXREb3dubG9hZCIsImRhdGEiLCJwb3B1cERhdGEiLCJwcm9ncmVzcyIsImJ1dHRvbk51bSIsImZvcmNlVXBkYXRlIiwiZHRhc2siLCJsYXN0UHJvZ3Jlc3NWYWx1ZSIsInBvcHVwT2JqIiwiZG93bmxvYWRQb3B1cCIsImRvd25sb2FkZXIiLCJjcmVhdGVEb3dubG9hZCIsImZpbGVuYW1lIiwiZG93bmxvYWQiLCJzdGF0dXMiLCJjaGFuZ2UiLCJwcm9ncmVzc1ZhbHVlIiwicHJvZ3Jlc3NUaXAiLCJpbnN0YWxsIiwiY29udGVudFRleHQiLCJlIiwiY2FuY2VsIiwibmF0aXZlVUkiLCJhbGVydCIsImNvZGUiLCJtZXNzYWdlIiwic3RhcnQiLCJhZGRFdmVudExpc3RlbmVyIiwidGFzayIsInN0YXRlIiwicGFyc2VJbnQiLCJkb3dubG9hZGVkU2l6ZSIsInRvdGFsU2l6ZSIsImNhbmNlbERvd25sb2FkIiwiYWJvcnQiLCJyZWJvb3QiLCJyZXN0YXJ0IiwiZHJhd3RleHQiLCJ0ZXh0IiwibWF4V2lkdGgiLCJ0ZXh0QXJyIiwic3BsaXQiLCJsZW4iLCJsZW5ndGgiLCJwcmV2aW91c05vZGUiLCJub2RlV2lkdGgiLCJyb3dUZXh0IiwibGV0dGVyV2lkdGgiLCJjaGluZXNlV2lkdGgiLCJvdGhlcldpZHRoIiwiaSIsInRlc3QiLCJwdXNoIiwiY29udGVudCIsInN1YnN0cmluZyIsInVwZGF0ZVBvcHVwIiwibWFza0xheWVyIiwibmF0aXZlT2JqIiwiVmlldyIsInRvcCIsImxlZnQiLCJoZWlnaHQiLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsInNjcmVlbldpZHRoIiwic2NyZWVuIiwicmVzb2x1dGlvbldpZHRoIiwic2NyZWVuSGVpZ2h0IiwicmVzb2x1dGlvbkhlaWdodCIsInBvcHVwVmlld1dpZHRoIiwidmlld0NvbnRlbnRQYWRkaW5nIiwidmlld0NvbnRlbnRXaWR0aCIsImRlc2NyaXB0aW9uTGlzdCIsInZlcnNpb25JbmZvIiwicG9wdXBWaWV3SGVpZ2h0IiwicG9wdXBWaWV3Q29udGVudExpc3QiLCJzcmMiLCJpZCIsInRhZyIsInBvc2l0aW9uIiwidGV4dFN0eWxlcyIsInNpemUiLCJjb2xvciIsIndlaWdodCIsIndoaXRlU3BhY2UiLCJ0ZXh0SGVpZ2h0IiwiY29udGVudFRvcCIsImZvckVhY2giLCJpdGVtIiwiaW5kZXgiLCJsaW5lU3BhY2luZyIsImFsaWduIiwicG9wdXBWaWV3IiwiZHJhd1JlY3QiLCJyYWRpdXMiLCJib3JkZXJDb2xvciIsImJvcmRlcldpZHRoIiwiYm90dG9tIiwiZHJhdyIsIm1heFRvcCIsIm1heExlZnQiLCJidXR0b25XaWR0aCIsImNsaWVudFkiLCJjbGllbnRYIiwiaGlkZSIsInNob3ciLCJkb3dubG9hZFBvcHVwRHJhd2luZyIsImVsZW1lbnRMaXN0IiwicmVjdFN0eWxlcyIsInZlcnRpY2FsQWxpZ24iLCJjb25jYXQiLCJwb3B1cFZpZXdEYXRhIiwiY2FsbGJhY2tEYXRhIiwicHJvZ3Jlc3NFbGVtZW50IiwicmVzZXQiLCJPYmplY3QiLCJhc3NpZ24iLCJuZXdFbGVtZW50IiwibWFwIiwiaGF2ZSIsImNoaWxkSXRlbSIsImNoaWxkSW5kZXgiLCJzZXRTdHlsZSIsIm9wZW5VUkwiXSwibWFwcGluZ3MiOiI7Ozs7QUFJQSxtRyw4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LE1BRUE7QUFDTixjQUFJdkIsUUFBUSxJQUFJLFNBQWhCLEVBQTJCO0FBQzFCMkIsdUJBQVcsQ0FBQ0wsR0FBRCxDQUFYO0FBQ0EsV0FGRCxNQUVPO0FBQ05mLGdCQUFJLENBQUNDLE9BQUwsQ0FBYThJLE9BQWIsQ0FBcUJoSSxHQUFHLENBQUNDLFdBQXpCO0FBQ0E7QUFDRDtBQUNELE9BWkQsTUFZTztBQUNOMkQsbUJBQVcsQ0FBQzVELEdBQUQsRUFBTSxZQUFXO0FBQzNCLGNBQUksVUFBVXdELElBQVYsQ0FBZXhELEdBQUcsQ0FBQ0MsV0FBbkIsQ0FBSixFQUFxQztBQUNwQ0ksdUJBQVcsQ0FBQ0wsR0FBRCxDQUFYO0FBQ0EsV0FGRCxNQUVPLElBQUcsV0FBV3dELElBQVgsQ0FBZ0J4RCxHQUFHLENBQUNDLFdBQXBCLENBQUgsRUFBb0M7QUFDMUNoQixnQkFBSSxDQUFDQyxPQUFMLENBQWE4SSxPQUFiLENBQXFCaEksR0FBRyxDQUFDQyxXQUF6QjtBQUNBLFdBRk0sTUFFQTtBQUNOLGdCQUFJdkIsUUFBUSxJQUFJLFNBQWhCLEVBQTJCO0FBQzFCMkIseUJBQVcsQ0FBQ0wsR0FBRCxDQUFYO0FBQ0EsYUFGRCxNQUVPO0FBQ05mLGtCQUFJLENBQUNDLE9BQUwsQ0FBYThJLE9BQWIsQ0FBcUJoSSxHQUFHLENBQUNDLFdBQXpCO0FBQ0E7QUFDRDtBQUNELFNBWlUsQ0FBWDtBQWFBO0FBQ0QsS0E1QlUsQ0FBWDtBQTZCQSxHQTlCVyxDQUFaO0FBK0JBIiwiZmlsZSI6IjMyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8qKioqIOatpOaWh+S7tuivtOaYjuivt+eci+azqOmHiiAqKioqKi9cclxuLy8g5Y+v5Lul55So6Ieq5bex6aG555uu55qE6K+35rGC5pa55rOVXHJcbi8vIOivt+axgumFjee9ruivtOaYju+8mmh0dHBzOi8vZXh0LmRjbG91ZC5uZXQuY24vcGx1Z2luP2lkPTgyMlxyXG5pbXBvcnQgJGh0dHAgZnJvbSAnQC9jb25maWcvcmVxdWVzdENvbmZpZyc7XHJcbi8qKioqIOe7k+adnyAqKioqKi9cclxuXHJcbmNvbnN0IHBsYXRmb3JtID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKCkucGxhdGZvcm07XHJcbi8vIOS4u+minOiJslxyXG5jb25zdCAkbWFpbkNvbG9yID0gXCJGRjVCNzhcIjtcclxuLy8g5by556qX5Zu+5qCHdXJsXHJcbmNvbnN0ICRpY29uVXJsID0gXCIvc3RhdGljL2ljb24vaWNfYXIucG5nXCI7XHJcblxyXG4vLyDojrflj5blvZPliY3lupTnlKjnmoTniYjmnKzlj7dcclxuZXhwb3J0IGNvbnN0IGdldEN1cnJlbnRObyA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcblx0Ly8g6I635Y+W5pys5Zyw5bqU55So6LWE5rqQ54mI5pys5Y+3XHJcblx0cGx1cy5ydW50aW1lLmdldFByb3BlcnR5KHBsdXMucnVudGltZS5hcHBpZCwgZnVuY3Rpb24oaW5mKSB7XHJcblx0XHRjYWxsYmFjayAmJiBjYWxsYmFjayh7XHJcblx0XHRcdHZlcnNpb25Db2RlOiBpbmYudmVyc2lvbkNvZGUsXHJcblx0XHRcdHZlcnNpb25OYW1lOiBpbmYudmVyc2lvblxyXG5cdFx0fSk7XHJcblx0fSk7XHJcbn1cclxuLy8g5Y+R6LW3YWpheOivt+axguiOt+WPluacjeWKoeerr+eJiOacrOWPt1xyXG5jb25zdCBnZXRTZXJ2ZXJObyA9IGZ1bmN0aW9uKHZlcnNpb24saXNQcm9tcHQgPSBmYWxzZSwgY2FsbGJhY2spIHtcclxuXHRsZXQgaHR0cERhdGEgPSB7XHJcblx0XHR2ZXJzaW9uOiB2ZXJzaW9uLnZlcnNpb25Db2RlLFxyXG4gICAgICAgIHZlcnNpb25OYW1lOiB2ZXJzaW9uLnZlcnNpb25OYW1lXHJcblx0fTtcclxuXHRpZiAocGxhdGZvcm0gPT0gXCJhbmRyb2lkXCIpIHtcclxuXHRcdGh0dHBEYXRhLnR5cGUgPSAxMTAxO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRodHRwRGF0YS50eXBlID0gMTEwMjtcclxuXHR9XHJcblx0Lyog5o6l5Y+j5YWl5Y+C6K+05piOXHJcblx0ICogdmVyc2lvbjog5bqU55So5b2T5YmN54mI5pys5Y+377yI5bey6Ieq5Yqo6I635Y+W77yJXHJcblx0ICogdmVyc2lvbk5hbWU6IOW6lOeUqOW9k+WJjeeJiOacrOWQjeensO+8iOW3suiHquWKqOiOt+WPlu+8iVxyXG5cdCAqIHR5cGXvvJrlubPlj7DvvIgxMTAx5piv5a6J5Y2T77yMMTEwMuaYr0lPU++8iVxyXG5cdCAqL1xyXG5cdC8qKioqKioqKioqKioqKioq5Lul5LiL5piv56S65L6LKioqKioqKioqKioqKioqKioqKi9cclxuXHQvLyDlj6/ku6XnlKjoh6rlt7Hpobnnm67nmoTor7fmsYLmlrnms5VcclxuXHQkaHR0cC5nZXQoXCJhcGkvY29tbW9uL3YxL2FwcF92ZXJzaW9uXCIsIGh0dHBEYXRhLHtcclxuXHRcdGlzUHJvbXB0OiBpc1Byb21wdFxyXG5cdH0pLnRoZW4ocmVzID0+IHtcclxuXHRcdC8qIHJlc+eahOaVsOaNruivtOaYjlxyXG5cdFx0ICogfCDlj4LmlbDlkI3np7BcdCAgICAgfCDkuIDlrprov5Tlm54gXHR8IOexu+Wei1x0ICAgIHwg5o+P6L+wXHJcblx0XHQgKiB8IC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tIHwgLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLSB8XHJcblx0XHQgKiB8IHZlcnNpb25Db2RlXHQgfCB5XHQgICAgfCBpbnRcdCAgICB8IOeJiOacrOWPtyAgICAgICAgfFxyXG5cdFx0ICogfCB2ZXJzaW9uTmFtZVx0IHwgeVx0ICAgIHwgU3RyaW5nXHR8IOeJiOacrOWQjeensCAgICAgIHxcclxuXHRcdCAqIHwgdmVyc2lvbkluZm9cdCB8IHlcdCAgICB8IFN0cmluZ1x0fCDniYjmnKzkv6Hmga8gICAgICB8XHJcblx0XHQgKiB8IGZvcmNlVXBkYXRlXHQgfCB5XHQgICAgfCBib29sZWFuXHR8IOaYr+WQpuW8uuWItuabtOaWsCAgfFxyXG5cdFx0ICogfCBkb3dubG9hZFVybFx0IHwgeVx0ICAgIHwgU3RyaW5nXHR8IOeJiOacrOS4i+i9vemTvuaOpe+8iElPU+WuieijheWMheabtOaWsOivt+aUvui3s+i9rHN0b3Jl5bqU55So5ZWG5bqX6ZO+5o6lLOWuieWNk2Fwa+WSjHdndOaWh+S7tuaUvuaWh+S7tuS4i+i9vemTvuaOpe+8iSAgfFxyXG5cdFx0ICovXHJcblx0XHRpZiAocmVzICYmIHJlcy5kb3dubG9hZFVybCkge1xyXG5cdFx0XHRjYWxsYmFjayAmJiBjYWxsYmFjayhyZXMpO1xyXG5cdFx0fSBlbHNlIGlmIChpc1Byb21wdCkge1xyXG5cdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHR0aXRsZTogXCLmmoLml6DmlrDniYjmnKxcIixcclxuXHRcdFx0XHRpY29uOiBcIm5vbmVcIlxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHQvKioqKioqKioqKioqKioqKuS7peS4iuaYr+ekuuS+iyoqKioqKioqKioqKioqKioqKiovXHJcbn1cclxuLy8g5LuO5pyN5Yqh5Zmo5LiL6L295bqU55So6LWE5rqQ5YyF77yId2d05paH5Lu277yJXHJcbmNvbnN0IGdldERvd25sb2FkID0gZnVuY3Rpb24oZGF0YSkge1xyXG5cdGxldCBwb3B1cERhdGEgPSB7XHJcblx0XHRwcm9ncmVzczogdHJ1ZSxcclxuXHRcdGJ1dHRvbk51bTogMlxyXG5cdH07XHJcblx0aWYoZGF0YS5mb3JjZVVwZGF0ZSl7XHJcblx0XHRwb3B1cERhdGEuYnV0dG9uTnVtID0gMDtcclxuXHR9XHJcblx0bGV0IGR0YXNrO1xyXG5cdGxldCBsYXN0UHJvZ3Jlc3NWYWx1ZSA9IDA7XHJcblx0bGV0IHBvcHVwT2JqID0gZG93bmxvYWRQb3B1cChwb3B1cERhdGEpO1xyXG4gICAgZHRhc2sgPSBwbHVzLmRvd25sb2FkZXIuY3JlYXRlRG93bmxvYWQoZGF0YS5kb3dubG9hZFVybCwge1xyXG4gICAgICAgIGZpbGVuYW1lOiBcIl9kb2MvdXBkYXRlL1wiXHJcbiAgICB9LCBmdW5jdGlvbihkb3dubG9hZCwgc3RhdHVzKSB7XHJcbiAgICAgICAgaWYgKHN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICAgICAgcG9wdXBPYmouY2hhbmdlKHtcclxuICAgICAgICAgICAgICAgIHByb2dyZXNzVmFsdWU6IDEwMCxcclxuICAgICAgICAgICAgICAgIHByb2dyZXNzVGlwOlwi5q2j5Zyo5a6J6KOF5paH5Lu2Li4uXCIsXHJcbiAgICAgICAgICAgICAgICBwcm9ncmVzczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGJ1dHRvbk51bTogMFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcGx1cy5ydW50aW1lLmluc3RhbGwoZG93bmxvYWQuZmlsZW5hbWUsIHt9LCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHBvcHVwT2JqLmNoYW5nZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudFRleHQ6IFwi5bqU55So6LWE5rqQ5pu05paw5a6M5oiQ77yBXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uTnVtOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgIHBvcHVwT2JqLmNhbmNlbCgpO1xyXG4gICAgICAgICAgICAgICAgcGx1cy5uYXRpdmVVSS5hbGVydChcIuWuieijheaWh+S7tuWksei0pVtcIiArIGUuY29kZSArIFwiXe+8mlwiICsgZS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcG9wdXBPYmouY2hhbmdlKHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRUZXh0OiBcIuaWh+S7tuS4i+i9veWksei0pS4uLlwiLFxyXG4gICAgICAgICAgICAgICAgYnV0dG9uTnVtOiAxLFxyXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3M6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgZHRhc2suc3RhcnQoKTtcclxuICAgIGR0YXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJzdGF0ZWNoYW5nZWRcIiwgZnVuY3Rpb24odGFzaywgc3RhdHVzKSB7XHJcbiAgICAgICAgc3dpdGNoICh0YXNrLnN0YXRlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMTogLy8g5byA5aeLXHJcbiAgICAgICAgICAgICAgICBwb3B1cE9iai5jaGFuZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzVmFsdWU6MCxcclxuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc1RpcDpcIuWHhuWkh+S4i+i9vS4uLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6IC8vIOW3sui/nuaOpeWIsOacjeWKoeWZqCAgXHJcbiAgICAgICAgICAgICAgICBwb3B1cE9iai5jaGFuZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzVmFsdWU6MCxcclxuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc1RpcDpcIuW8gOWni+S4i+i9vS4uLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9ncmVzcyA9IHBhcnNlSW50KHRhc2suZG93bmxvYWRlZFNpemUgLyB0YXNrLnRvdGFsU2l6ZSAqIDEwMCk7XHJcbiAgICAgICAgICAgICAgICBpZihwcm9ncmVzcyAtIGxhc3RQcm9ncmVzc1ZhbHVlID49IDIpe1xyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RQcm9ncmVzc1ZhbHVlID0gcHJvZ3Jlc3M7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9wdXBPYmouY2hhbmdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3NWYWx1ZTpwcm9ncmVzcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3NUaXA6IFwi5bey5LiL6L29XCIgKyBwcm9ncmVzcyArIFwiJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmVzczogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvLyDlj5bmtojkuIvovb1cclxuICAgIHBvcHVwT2JqLmNhbmNlbERvd25sb2FkID0gZnVuY3Rpb24oKXtcclxuICAgICAgICBkdGFzayAmJiBkdGFzay5hYm9ydCgpO1xyXG4gICAgICAgIHVuaS5zaG93VG9hc3Qoe1xyXG4gICAgICAgIFx0dGl0bGU6IFwi5bey5Y+W5raI5LiL6L29XCIsXHJcbiAgICAgICAgXHRpY29uOlwibm9uZVwiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvLyDph43lkK9BUFBcclxuICAgIHBvcHVwT2JqLnJlYm9vdCA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcGx1cy5ydW50aW1lLnJlc3RhcnQoKTtcclxuICAgIH1cclxufVxyXG4vLyDmloflrZfmjaLooYxcclxuZnVuY3Rpb24gZHJhd3RleHQodGV4dCwgbWF4V2lkdGgpIHtcclxuXHRsZXQgdGV4dEFyciA9IHRleHQuc3BsaXQoXCJcIik7XHJcblx0bGV0IGxlbiA9IHRleHRBcnIubGVuZ3RoO1xyXG5cdC8vIOS4iuS4quiKgueCuVxyXG5cdGxldCBwcmV2aW91c05vZGUgPSAwO1xyXG5cdC8vIOiusOW9leiKgueCueWuveW6plxyXG5cdGxldCBub2RlV2lkdGggPSAwO1xyXG5cdC8vIOaWh+acrOaNouihjOaVsOe7hFxyXG5cdGxldCByb3dUZXh0ID0gW107XHJcblx0Ly8g5aaC5p6c5piv5a2X5q+N77yM5L6n5L+d5a2Y6ZW/5bqmXHJcblx0bGV0IGxldHRlcldpZHRoID0gMDtcclxuXHQvLyDmsYnlrZflrr3luqZcclxuXHRsZXQgY2hpbmVzZVdpZHRoID0gMTQ7XHJcblx0Ly8gb3RoZXJGb2505a695bqmXHJcblx0bGV0IG90aGVyV2lkdGggPSA3O1xyXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuXHRcdGlmICgvW1xcdTRlMDAtXFx1OWZhNV18W1xcdUZFMzAtXFx1RkZBMF0vZy50ZXN0KHRleHRBcnJbaV0pKSB7XHJcblx0XHRcdGlmKGxldHRlcldpZHRoID4gMCl7XHJcblx0XHRcdFx0aWYobm9kZVdpZHRoICsgY2hpbmVzZVdpZHRoICsgbGV0dGVyV2lkdGggKiBvdGhlcldpZHRoID4gbWF4V2lkdGgpe1xyXG5cdFx0XHRcdFx0cm93VGV4dC5wdXNoKHtcclxuXHRcdFx0XHRcdFx0dHlwZTogXCJ0ZXh0XCIsXHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6IHRleHQuc3Vic3RyaW5nKHByZXZpb3VzTm9kZSwgaSlcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0cHJldmlvdXNOb2RlID0gaTtcclxuXHRcdFx0XHRcdG5vZGVXaWR0aCA9IGNoaW5lc2VXaWR0aDtcclxuXHRcdFx0XHRcdGxldHRlcldpZHRoID0gMDtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0bm9kZVdpZHRoICs9IGNoaW5lc2VXaWR0aCArIGxldHRlcldpZHRoICogb3RoZXJXaWR0aDtcclxuXHRcdFx0XHRcdGxldHRlcldpZHRoID0gMDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0aWYobm9kZVdpZHRoICsgY2hpbmVzZVdpZHRoID4gbWF4V2lkdGgpe1xyXG5cdFx0XHRcdFx0cm93VGV4dC5wdXNoKHtcclxuXHRcdFx0XHRcdFx0dHlwZTogXCJ0ZXh0XCIsXHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6IHRleHQuc3Vic3RyaW5nKHByZXZpb3VzTm9kZSwgaSlcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0cHJldmlvdXNOb2RlID0gaTtcclxuXHRcdFx0XHRcdG5vZGVXaWR0aCA9IGNoaW5lc2VXaWR0aDtcclxuXHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdG5vZGVXaWR0aCArPSBjaGluZXNlV2lkdGg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZigvXFxuL2cudGVzdCh0ZXh0QXJyW2ldKSl7XHJcblx0XHRcdFx0cm93VGV4dC5wdXNoKHtcclxuXHRcdFx0XHRcdHR5cGU6IFwiYnJlYWtcIixcclxuXHRcdFx0XHRcdGNvbnRlbnQ6IHRleHQuc3Vic3RyaW5nKHByZXZpb3VzTm9kZSwgaSlcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRwcmV2aW91c05vZGUgPSBpICsgMTtcclxuXHRcdFx0XHRub2RlV2lkdGggPSAwO1xyXG5cdFx0XHRcdGxldHRlcldpZHRoID0gMDtcclxuXHRcdFx0fWVsc2UgaWYodGV4dEFycltpXSA9PSBcIlxcXFxcIiAmJiB0ZXh0QXJyW2kgKyAxXSA9PSBcIm5cIil7XHJcblx0XHRcdFx0cm93VGV4dC5wdXNoKHtcclxuXHRcdFx0XHRcdHR5cGU6IFwiYnJlYWtcIixcclxuXHRcdFx0XHRcdGNvbnRlbnQ6IHRleHQuc3Vic3RyaW5nKHByZXZpb3VzTm9kZSwgaSlcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRwcmV2aW91c05vZGUgPSBpICsgMjtcclxuXHRcdFx0XHRub2RlV2lkdGggPSAwO1xyXG5cdFx0XHRcdGxldHRlcldpZHRoID0gMDtcclxuXHRcdFx0fWVsc2UgaWYoL1thLXpBLVowLTldL2cudGVzdCh0ZXh0QXJyW2ldKSl7XHJcblx0XHRcdFx0bGV0dGVyV2lkdGggKz0gMTtcclxuXHRcdFx0XHRpZihub2RlV2lkdGggKyBsZXR0ZXJXaWR0aCAqIG90aGVyV2lkdGggPiBtYXhXaWR0aCl7XHJcblx0XHRcdFx0XHRyb3dUZXh0LnB1c2goe1xyXG5cdFx0XHRcdFx0XHR0eXBlOiBcInRleHRcIixcclxuXHRcdFx0XHRcdFx0Y29udGVudDogdGV4dC5zdWJzdHJpbmcocHJldmlvdXNOb2RlLCBpICsgMSAtIGxldHRlcldpZHRoKVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRwcmV2aW91c05vZGUgPSBpICsgMSAtIGxldHRlcldpZHRoO1xyXG5cdFx0XHRcdFx0bm9kZVdpZHRoID0gbGV0dGVyV2lkdGggKiBvdGhlcldpZHRoO1xyXG5cdFx0XHRcdFx0bGV0dGVyV2lkdGggPSAwO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNle1xyXG5cdFx0XHRcdGlmKG5vZGVXaWR0aCArIG90aGVyV2lkdGggPiBtYXhXaWR0aCl7XHJcblx0XHRcdFx0XHRyb3dUZXh0LnB1c2goe1xyXG5cdFx0XHRcdFx0XHR0eXBlOiBcInRleHRcIixcclxuXHRcdFx0XHRcdFx0Y29udGVudDogdGV4dC5zdWJzdHJpbmcocHJldmlvdXNOb2RlLCBpKVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRwcmV2aW91c05vZGUgPSBpO1xyXG5cdFx0XHRcdFx0bm9kZVdpZHRoID0gb3RoZXJXaWR0aDtcclxuXHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdG5vZGVXaWR0aCArPSBvdGhlcldpZHRoO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRpZiAocHJldmlvdXNOb2RlIDwgbGVuKSB7XHJcblx0XHRyb3dUZXh0LnB1c2goe1xyXG5cdFx0XHR0eXBlOiBcInRleHRcIixcclxuXHRcdFx0Y29udGVudDogdGV4dC5zdWJzdHJpbmcocHJldmlvdXNOb2RlLCBsZW4pXHJcblx0XHR9KTtcclxuXHR9XHJcblx0cmV0dXJuIHJvd1RleHQ7XHJcbn1cclxuLy8g5piv5ZCm5pu05paw5by556qXXHJcbmZ1bmN0aW9uIHVwZGF0ZVBvcHVwKGRhdGEsIGNhbGxiYWNrKSB7XHJcblx0Ly8g5by556qX6YGu572p5bGCXHJcblx0bGV0IG1hc2tMYXllciA9IG5ldyBwbHVzLm5hdGl2ZU9iai5WaWV3KFwibWFza0xheWVyXCIsIHsgLy/lhYjliJvlu7rpga7nvanlsYJcclxuXHRcdHRvcDogJzBweCcsXHJcblx0XHRsZWZ0OiAnMHB4JyxcclxuXHRcdGhlaWdodDogJzEwMCUnLFxyXG5cdFx0d2lkdGg6ICcxMDAlJyxcclxuXHRcdGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwwLDAsMC41KSdcclxuXHR9KTtcclxuXHJcblx0Ly8g5Lul5LiL5Li66K6h566X6I+c5Y2V55qEbnZpZXfnu5jliLbluIPlsYDvvIzkuLrlm7rlrprnrpfms5XvvIzkvb/nlKjogIXml6DlhbPlhbPlv4NcclxuXHRjb25zdCBzY3JlZW5XaWR0aCA9IHBsdXMuc2NyZWVuLnJlc29sdXRpb25XaWR0aDtcclxuXHRjb25zdCBzY3JlZW5IZWlnaHQgPSBwbHVzLnNjcmVlbi5yZXNvbHV0aW9uSGVpZ2h0O1xyXG5cdC8v5by556qX5a655Zmo5a695bqmXHJcblx0Y29uc3QgcG9wdXBWaWV3V2lkdGggPSBzY3JlZW5XaWR0aCAqIDAuNztcclxuXHQvLyDlvLnnqpflrrnlmajnmoRQYWRkaW5nXHJcblx0Y29uc3Qgdmlld0NvbnRlbnRQYWRkaW5nID0gMjA7XHJcblx0Ly8g5by556qX5a655Zmo55qE5a695bqmXHJcblx0Y29uc3Qgdmlld0NvbnRlbnRXaWR0aCA9IHBhcnNlSW50KHBvcHVwVmlld1dpZHRoIC0gKHZpZXdDb250ZW50UGFkZGluZyAqIDIpKTtcclxuXHQvLyDmj4/ov7DnmoTliJfooahcclxuXHRjb25zdCBkZXNjcmlwdGlvbkxpc3QgPSBkcmF3dGV4dChkYXRhLnZlcnNpb25JbmZvLCB2aWV3Q29udGVudFdpZHRoKTtcclxuXHQvLyDlvLnnqpflrrnlmajpq5jluqZcclxuXHRsZXQgcG9wdXBWaWV3SGVpZ2h0ID0gODAgKyAyMCArIDIwICsgOTAgICsgMTA7XHJcblx0bGV0IHBvcHVwVmlld0NvbnRlbnRMaXN0ID0gW3tcclxuXHRcdFx0c3JjOiAkaWNvblVybCxcclxuXHRcdFx0aWQ6IFwibG9nb1wiLCBcclxuXHRcdFx0dGFnOiBcImltZ1wiLFxyXG5cdFx0XHRwb3NpdGlvbjoge1xyXG5cdFx0XHRcdHRvcDogXCIwcHhcIixcclxuXHRcdFx0XHRsZWZ0OiAocG9wdXBWaWV3V2lkdGggLSAxMjQpIC8gMiArIFwicHhcIixcclxuXHRcdFx0XHR3aWR0aDogXCIxMjRweFwiLFxyXG5cdFx0XHRcdGhlaWdodDogXCI4MHB4XCIsXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdHRhZzogJ2ZvbnQnLFxyXG5cdFx0XHRpZDogJ3RpdGxlJyxcclxuXHRcdFx0dGV4dDogXCLlj5HnjrDmlrDniYjmnKxcIiArIGRhdGEudmVyc2lvbk5hbWUsXHJcblx0XHRcdHRleHRTdHlsZXM6IHtcclxuXHRcdFx0XHRzaXplOiAnMThweCcsXHJcblx0XHRcdFx0Y29sb3I6IFwiIzMzM1wiLFxyXG5cdFx0XHRcdHdlaWdodDogXCJib2xkXCIsXHJcblx0XHRcdFx0d2hpdGVTcGFjZTogXCJub3JtYWxcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRwb3NpdGlvbjoge1xyXG5cdFx0XHRcdHRvcDogJzkwcHgnLFxyXG5cdFx0XHRcdGxlZnQ6IHZpZXdDb250ZW50UGFkZGluZyArIFwicHhcIixcclxuXHRcdFx0XHR3aWR0aDogdmlld0NvbnRlbnRXaWR0aCArIFwicHhcIixcclxuXHRcdFx0XHRoZWlnaHQ6IFwiMzBweFwiLFxyXG5cdFx0XHR9XHJcblx0XHR9XTtcclxuXHRjb25zdCB0ZXh0SGVpZ2h0ID0gMTg7XHJcblx0bGV0IGNvbnRlbnRUb3AgPSAxMzA7XHJcblx0ZGVzY3JpcHRpb25MaXN0LmZvckVhY2goKGl0ZW0saW5kZXgpID0+IHtcclxuXHRcdGlmKGluZGV4ID4gMCl7XHJcblx0XHRcdHBvcHVwVmlld0hlaWdodCArPSB0ZXh0SGVpZ2h0O1xyXG5cdFx0XHRjb250ZW50VG9wICs9IHRleHRIZWlnaHQ7XHJcblx0XHR9XHJcblx0XHRwb3B1cFZpZXdDb250ZW50TGlzdC5wdXNoKHtcclxuXHRcdFx0dGFnOiAnZm9udCcsXHJcblx0XHRcdGlkOiAnY29udGVudCcgKyBpbmRleCArIDEsXHJcblx0XHRcdHRleHQ6IGl0ZW0uY29udGVudCxcclxuXHRcdFx0dGV4dFN0eWxlczoge1xyXG5cdFx0XHRcdHNpemU6ICcxNHB4JyxcclxuXHRcdFx0XHRjb2xvcjogXCIjNjY2XCIsXHJcblx0XHRcdFx0bGluZVNwYWNpbmc6IFwiNTAlXCIsXHJcblx0XHRcdFx0YWxpZ246IFwibGVmdFwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHBvc2l0aW9uOiB7XHJcblx0XHRcdFx0dG9wOiBjb250ZW50VG9wICsgXCJweFwiLFxyXG5cdFx0XHRcdGxlZnQ6IHZpZXdDb250ZW50UGFkZGluZyArIFwicHhcIixcclxuXHRcdFx0XHR3aWR0aDogdmlld0NvbnRlbnRXaWR0aCArIFwicHhcIixcclxuXHRcdFx0XHRoZWlnaHQ6IHRleHRIZWlnaHQgKyBcInB4XCIsXHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0aWYoaXRlbS50eXBlID09IFwiYnJlYWtcIil7XHJcblx0XHRcdGNvbnRlbnRUb3AgKz0gMTA7XHJcblx0XHRcdHBvcHVwVmlld0hlaWdodCArPSAxMDtcclxuXHRcdH1cclxuXHR9KTtcclxuXHQvLyDlvLnnqpflhoXlrrlcclxuXHRsZXQgcG9wdXBWaWV3ID0gbmV3IHBsdXMubmF0aXZlT2JqLlZpZXcoXCJwb3B1cFZpZXdcIiwgeyAvL+WIm+W7uuW6lemDqOWbvuagh+iPnOWNlVxyXG5cdFx0dGFnOiBcInJlY3RcIixcclxuXHRcdHRvcDogKHNjcmVlbkhlaWdodCAtIHBvcHVwVmlld0hlaWdodCkgLyAyICsgXCJweFwiLFxyXG5cdFx0bGVmdDogJzE1JScsXHJcblx0XHRoZWlnaHQ6IHBvcHVwVmlld0hlaWdodCArIFwicHhcIixcclxuXHRcdHdpZHRoOiBcIjcwJVwiXHJcblx0fSk7XHJcblx0Ly8g57uY5Yi255m96Imy6IOM5pmvXHJcblx0cG9wdXBWaWV3LmRyYXdSZWN0KHtcclxuXHRcdGNvbG9yOiBcIiNGRkZGRkZcIixcclxuXHRcdHJhZGl1czogXCI4cHhcIlxyXG5cdH0sIHtcclxuXHRcdHRvcDogXCI0MHB4XCIsXHJcblx0XHRoZWlnaHQ6IHBvcHVwVmlld0hlaWdodCAtIDQwICsgXCJweFwiLFxyXG5cdH0pO1xyXG5cdC8vIOe7mOWItuW6lei+ueaMiemSrlxyXG5cdHBvcHVwVmlldy5kcmF3UmVjdCh7XHJcblx0XHRyYWRpdXM6IFwiM3B4XCIsXHJcblx0XHRib3JkZXJDb2xvcjogXCIjZjFmMWYxXCIsXHJcblx0XHRib3JkZXJXaWR0aDogXCIxcHhcIixcclxuXHR9LCB7XHJcblx0XHRib3R0b206IHZpZXdDb250ZW50UGFkZGluZyArICdweCcsXHJcblx0XHRsZWZ0OiB2aWV3Q29udGVudFBhZGRpbmcgKyBcInB4XCIsXHJcblx0XHR3aWR0aDogKHZpZXdDb250ZW50V2lkdGggLSB2aWV3Q29udGVudFBhZGRpbmcpIC8gMiArIFwicHhcIixcclxuXHRcdGhlaWdodDogXCIzMHB4XCIsXHJcblx0fSk7XHJcblx0Ly8g57uY5Yi25bqV6L655oyJ6ZKuXHJcblx0cG9wdXBWaWV3LmRyYXdSZWN0KHtcclxuXHRcdHJhZGl1czogXCIzcHhcIixcclxuXHRcdGNvbG9yOiAkbWFpbkNvbG9yLFxyXG5cdH0sIHtcclxuXHRcdGJvdHRvbTogdmlld0NvbnRlbnRQYWRkaW5nICsgJ3B4JyxcclxuXHRcdGxlZnQ6ICgodmlld0NvbnRlbnRXaWR0aCAtIHZpZXdDb250ZW50UGFkZGluZykgLyAyICsgdmlld0NvbnRlbnRQYWRkaW5nICogMikgKyBcInB4XCIsXHJcblx0XHR3aWR0aDogKHZpZXdDb250ZW50V2lkdGggLSB2aWV3Q29udGVudFBhZGRpbmcpIC8gMiArIFwicHhcIixcclxuXHRcdGhlaWdodDogXCIzMHB4XCIsXHJcblx0fSk7XHJcblx0cG9wdXBWaWV3Q29udGVudExpc3QucHVzaCh7XHJcblx0XHR0YWc6ICdmb250JyxcclxuXHRcdGlkOiAnY2FuY2VsVGV4dCcsXHJcblx0XHR0ZXh0OiBcIuaaguS4jeWNh+e6p1wiLFxyXG5cdFx0dGV4dFN0eWxlczoge1xyXG5cdFx0XHRzaXplOiAnMTRweCcsXHJcblx0XHRcdGNvbG9yOiBcIiM2NjZcIixcclxuXHRcdFx0bGluZVNwYWNpbmc6IFwiMCVcIixcclxuXHRcdFx0d2hpdGVTcGFjZTogXCJub3JtYWxcIlxyXG5cdFx0fSxcclxuXHRcdHBvc2l0aW9uOiB7XHJcblx0XHRcdGJvdHRvbTogdmlld0NvbnRlbnRQYWRkaW5nICsgJ3B4JyxcclxuXHRcdFx0bGVmdDogdmlld0NvbnRlbnRQYWRkaW5nICsgXCJweFwiLFxyXG5cdFx0XHR3aWR0aDogKHZpZXdDb250ZW50V2lkdGggLSB2aWV3Q29udGVudFBhZGRpbmcpIC8gMiArIFwicHhcIixcclxuXHRcdFx0aGVpZ2h0OiBcIjMwcHhcIixcclxuXHRcdH1cclxuXHR9KTtcclxuXHRwb3B1cFZpZXdDb250ZW50TGlzdC5wdXNoKHtcclxuXHRcdFx0dGFnOiAnZm9udCcsXHJcblx0XHRcdGlkOiAnY29uZmlybVRleHQnLFxyXG5cdFx0XHR0ZXh0OiBcIueri+WNs+WNh+e6p1wiLFxyXG5cdFx0XHR0ZXh0U3R5bGVzOiB7XHJcblx0XHRcdFx0c2l6ZTogJzE0cHgnLFxyXG5cdFx0XHRcdGNvbG9yOiBcIiNGRkZcIixcclxuXHRcdFx0XHRsaW5lU3BhY2luZzogXCIwJVwiLFxyXG5cdFx0XHRcdHdoaXRlU3BhY2U6IFwibm9ybWFsXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0cG9zaXRpb246IHtcclxuXHRcdFx0XHRib3R0b206IHZpZXdDb250ZW50UGFkZGluZyArICdweCcsXHJcblx0XHRcdFx0bGVmdDogKCh2aWV3Q29udGVudFdpZHRoIC0gdmlld0NvbnRlbnRQYWRkaW5nKSAvIDIgKyB2aWV3Q29udGVudFBhZGRpbmcgKiAyKSArIFwicHhcIixcclxuXHRcdFx0XHR3aWR0aDogKHZpZXdDb250ZW50V2lkdGggLSB2aWV3Q29udGVudFBhZGRpbmcpIC8gMiArIFwicHhcIixcclxuXHRcdFx0XHRoZWlnaHQ6IFwiMzBweFwiLFxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRwb3B1cFZpZXcuZHJhdyhwb3B1cFZpZXdDb250ZW50TGlzdCk7XHJcblx0cG9wdXBWaWV3LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XHJcblx0XHRsZXQgbWF4VG9wID0gcG9wdXBWaWV3SGVpZ2h0IC0gdmlld0NvbnRlbnRQYWRkaW5nO1xyXG5cdFx0bGV0IG1heExlZnQgPSBwb3B1cFZpZXdXaWR0aCAtIHZpZXdDb250ZW50UGFkZGluZztcclxuXHRcdGxldCBidXR0b25XaWR0aCA9ICh2aWV3Q29udGVudFdpZHRoIC0gdmlld0NvbnRlbnRQYWRkaW5nKSAvIDI7XHJcblx0XHRpZiAoZS5jbGllbnRZID4gbWF4VG9wIC0gMzAgJiYgZS5jbGllbnRZIDwgbWF4VG9wKSB7XHJcblx0XHRcdC8vIOaaguS4jeWNh+e6p1xyXG5cdFx0XHRpZiAoZS5jbGllbnRYID4gdmlld0NvbnRlbnRQYWRkaW5nICYmIGUuY2xpZW50WCA8IG1heExlZnQgLSBidXR0b25XaWR0aCAtIHZpZXdDb250ZW50UGFkZGluZykge1xyXG5cdFx0XHRcdG1hc2tMYXllci5oaWRlKCk7XHJcblx0XHRcdFx0cG9wdXBWaWV3LmhpZGUoKTtcclxuXHRcdFx0fSBlbHNlIGlmIChlLmNsaWVudFggPiBtYXhMZWZ0IC0gYnV0dG9uV2lkdGggJiYgZS5jbGllbnRYIDwgbWF4TGVmdCkge1xyXG5cdFx0XHRcdC8vIOeri+WNs+WNh+e6p1xyXG5cdFx0XHRcdG1hc2tMYXllci5oaWRlKCk7XHJcblx0XHRcdFx0cG9wdXBWaWV3LmhpZGUoKTtcclxuXHRcdFx0XHRjYWxsYmFjayAmJiBjYWxsYmFjaygpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSk7XHJcblx0Ly8g54K55Ye76YGu572p5bGCXHJcblx0bWFza0xheWVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHsgLy/lpITnkIbpga7nvanlsYLngrnlh7tcclxuXHRcdG1hc2tMYXllci5oaWRlKCk7XHJcblx0XHRwb3B1cFZpZXcuaGlkZSgpO1xyXG5cdH0pO1xyXG5cdC8vIOaYvuekuuW8ueeql1xyXG5cdG1hc2tMYXllci5zaG93KCk7XHJcblx0cG9wdXBWaWV3LnNob3coKTtcclxufVxyXG4vLyDmlofku7bkuIvovb3nmoTlvLnnqpfnu5jlm75cclxuZnVuY3Rpb24gZG93bmxvYWRQb3B1cERyYXdpbmcoZGF0YSl7XHJcblx0Ly8g5Lul5LiL5Li66K6h566X6I+c5Y2V55qEbnZpZXfnu5jliLbluIPlsYDvvIzkuLrlm7rlrprnrpfms5XvvIzkvb/nlKjogIXml6DlhbPlhbPlv4NcclxuXHRjb25zdCBzY3JlZW5XaWR0aCA9IHBsdXMuc2NyZWVuLnJlc29sdXRpb25XaWR0aDtcclxuXHRjb25zdCBzY3JlZW5IZWlnaHQgPSBwbHVzLnNjcmVlbi5yZXNvbHV0aW9uSGVpZ2h0O1xyXG5cdC8v5by556qX5a655Zmo5a695bqmXHJcblx0Y29uc3QgcG9wdXBWaWV3V2lkdGggPSBzY3JlZW5XaWR0aCAqIDAuNztcclxuXHQvLyDlvLnnqpflrrnlmajnmoRQYWRkaW5nXHJcblx0Y29uc3Qgdmlld0NvbnRlbnRQYWRkaW5nID0gMjA7XHJcblx0Ly8g5by556qX5a655Zmo55qE5a695bqmXHJcblx0Y29uc3Qgdmlld0NvbnRlbnRXaWR0aCA9IHBvcHVwVmlld1dpZHRoIC0gKHZpZXdDb250ZW50UGFkZGluZyAqIDIpO1xyXG5cdC8vIOW8ueeql+WuueWZqOmrmOW6plxyXG5cdGxldCBwb3B1cFZpZXdIZWlnaHQgPSB2aWV3Q29udGVudFBhZGRpbmcgKiAzICsgNjA7XHJcblx0bGV0IHByb2dyZXNzVGlwID0gZGF0YS5wcm9ncmVzc1RpcCB8fCBcIuWHhuWkh+S4i+i9vS4uLlwiO1xyXG5cdGxldCBjb250ZW50VGV4dCA9IGRhdGEuY29udGVudFRleHQgfHwgXCLmraPlnKjkuLrmgqjmm7TmlrDvvIzor7fogJDlv4PnrYnlvoVcIjtcclxuXHRsZXQgZWxlbWVudExpc3QgPSBbXHJcblx0XHR7XHJcblx0XHRcdHRhZzogJ3JlY3QnLCAvL+iDjOaZr+iJslxyXG5cdFx0XHRjb2xvcjogJyNGRkZGRkYnLFxyXG5cdFx0XHRyZWN0U3R5bGVzOntcclxuXHRcdFx0XHRyYWRpdXM6IFwiOHB4XCJcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0dGFnOiAnZm9udCcsXHJcblx0XHRcdGlkOiAndGl0bGUnLFxyXG5cdFx0XHR0ZXh0OiBcIuWNh+e6p0FQUFwiLFxyXG5cdFx0XHR0ZXh0U3R5bGVzOiB7XHJcblx0XHRcdFx0c2l6ZTogJzE2cHgnLFxyXG5cdFx0XHRcdGNvbG9yOiBcIiMzMzNcIixcclxuXHRcdFx0XHR3ZWlnaHQ6IFwiYm9sZFwiLFxyXG5cdFx0XHRcdHZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCIsXHJcblx0XHRcdFx0d2hpdGVTcGFjZTogXCJub3JtYWxcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRwb3NpdGlvbjoge1xyXG5cdFx0XHRcdHRvcDogdmlld0NvbnRlbnRQYWRkaW5nICsgJ3B4JyxcclxuXHRcdFx0XHRoZWlnaHQ6IFwiMzBweFwiLFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHR0YWc6ICdmb250JyxcclxuXHRcdFx0aWQ6ICdjb250ZW50JyxcclxuXHRcdFx0dGV4dDogY29udGVudFRleHQsXHJcblx0XHRcdHRleHRTdHlsZXM6IHtcclxuXHRcdFx0XHRzaXplOiAnMTRweCcsXHJcblx0XHRcdFx0Y29sb3I6IFwiIzMzM1wiLFxyXG5cdFx0XHRcdHZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCIsXHJcblx0XHRcdFx0d2hpdGVTcGFjZTogXCJub3JtYWxcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRwb3NpdGlvbjoge1xyXG5cdFx0XHRcdHRvcDogdmlld0NvbnRlbnRQYWRkaW5nICogMiArIDMwICsgJ3B4JyxcclxuXHRcdFx0XHRoZWlnaHQ6IFwiMjBweFwiLFxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XTtcclxuXHQvLyDmmK/lkKbmnInov5vluqbmnaFcclxuXHRpZihkYXRhLnByb2dyZXNzKXtcclxuXHRcdHBvcHVwVmlld0hlaWdodCArPSB2aWV3Q29udGVudFBhZGRpbmcgKyA0MDtcclxuXHRcdGVsZW1lbnRMaXN0ID0gZWxlbWVudExpc3QuY29uY2F0KFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRhZzogJ2ZvbnQnLFxyXG5cdFx0XHRcdGlkOiAncHJvZ3Jlc3NWYWx1ZScsXHJcblx0XHRcdFx0dGV4dDogcHJvZ3Jlc3NUaXAsXHJcblx0XHRcdFx0dGV4dFN0eWxlczoge1xyXG5cdFx0XHRcdFx0c2l6ZTogJzE0cHgnLFxyXG5cdFx0XHRcdFx0Y29sb3I6ICRtYWluQ29sb3IsXHJcblx0XHRcdFx0XHR3aGl0ZVNwYWNlOiBcIm5vcm1hbFwiXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRwb3NpdGlvbjoge1xyXG5cdFx0XHRcdFx0dG9wOiB2aWV3Q29udGVudFBhZGRpbmcgKiA0ICsgMjAgKyAncHgnLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiBcIjMwcHhcIlxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRhZzogJ3JlY3QnLCAvL+e7mOWItui/m+W6puadoeiDjOaZr1xyXG5cdFx0XHRcdGlkOiAncHJvZ3Jlc3NCZycsXHJcblx0XHRcdFx0cmVjdFN0eWxlczp7XHJcblx0XHRcdFx0XHRyYWRpdXM6IFwiNHB4XCIsXHJcblx0XHRcdFx0XHRib3JkZXJDb2xvcjogXCIjZjFmMWYxXCIsXHJcblx0XHRcdFx0XHRib3JkZXJXaWR0aDogXCIxcHhcIixcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHBvc2l0aW9uOntcclxuXHRcdFx0XHRcdHRvcDogdmlld0NvbnRlbnRQYWRkaW5nICogNCArIDYwICsgJ3B4JyxcclxuXHRcdFx0XHRcdGxlZnQ6IHZpZXdDb250ZW50UGFkZGluZyArIFwicHhcIixcclxuXHRcdFx0XHRcdHdpZHRoOiB2aWV3Q29udGVudFdpZHRoICsgXCJweFwiLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiBcIjhweFwiXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XSk7XHJcblx0fVxyXG5cdGlmIChkYXRhLmJ1dHRvbk51bSA9PSAyKSB7XHJcblx0XHRwb3B1cFZpZXdIZWlnaHQgKz0gdmlld0NvbnRlbnRQYWRkaW5nICsgMzA7XHJcblx0XHRlbGVtZW50TGlzdCA9IGVsZW1lbnRMaXN0LmNvbmNhdChbXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0YWc6ICdyZWN0JywgLy/nu5jliLblupXovrnmjInpkq5cclxuXHRcdFx0XHRyZWN0U3R5bGVzOntcclxuXHRcdFx0XHRcdHJhZGl1czogXCIzcHhcIixcclxuXHRcdFx0XHRcdGJvcmRlckNvbG9yOiBcIiNmMWYxZjFcIixcclxuXHRcdFx0XHRcdGJvcmRlcldpZHRoOiBcIjFweFwiLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0cG9zaXRpb246e1xyXG5cdFx0XHRcdFx0Ym90dG9tOiB2aWV3Q29udGVudFBhZGRpbmcgKyAncHgnLFxyXG5cdFx0XHRcdFx0bGVmdDogdmlld0NvbnRlbnRQYWRkaW5nICsgXCJweFwiLFxyXG5cdFx0XHRcdFx0d2lkdGg6ICh2aWV3Q29udGVudFdpZHRoIC0gdmlld0NvbnRlbnRQYWRkaW5nKSAvIDIgKyBcInB4XCIsXHJcblx0XHRcdFx0XHRoZWlnaHQ6IFwiMzBweFwiXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGFnOiAncmVjdCcsIC8v57uY5Yi25bqV6L655oyJ6ZKuXHJcblx0XHRcdFx0cmVjdFN0eWxlczp7XHJcblx0XHRcdFx0XHRyYWRpdXM6IFwiM3B4XCIsXHJcblx0XHRcdFx0XHRjb2xvcjogJG1haW5Db2xvclxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0cG9zaXRpb246e1xyXG5cdFx0XHRcdFx0Ym90dG9tOiB2aWV3Q29udGVudFBhZGRpbmcgKyAncHgnLFxyXG5cdFx0XHRcdFx0bGVmdDogKCh2aWV3Q29udGVudFdpZHRoIC0gdmlld0NvbnRlbnRQYWRkaW5nKSAvIDIgKyB2aWV3Q29udGVudFBhZGRpbmcgKiAyKSArIFwicHhcIixcclxuXHRcdFx0XHRcdHdpZHRoOiAodmlld0NvbnRlbnRXaWR0aCAtIHZpZXdDb250ZW50UGFkZGluZykgLyAyICsgXCJweFwiLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiBcIjMwcHhcIlxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRhZzogJ2ZvbnQnLFxyXG5cdFx0XHRcdGlkOiAnY2FuY2VsVGV4dCcsXHJcblx0XHRcdFx0dGV4dDogXCLlj5bmtojkuIvovb1cIixcclxuXHRcdFx0XHR0ZXh0U3R5bGVzOiB7XHJcblx0XHRcdFx0XHRzaXplOiAnMTRweCcsXHJcblx0XHRcdFx0XHRjb2xvcjogXCIjNjY2XCIsXHJcblx0XHRcdFx0XHRsaW5lU3BhY2luZzogXCIwJVwiLFxyXG5cdFx0XHRcdFx0d2hpdGVTcGFjZTogXCJub3JtYWxcIlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0cG9zaXRpb246IHtcclxuXHRcdFx0XHRcdGJvdHRvbTogdmlld0NvbnRlbnRQYWRkaW5nICsgJ3B4JyxcclxuXHRcdFx0XHRcdGxlZnQ6IHZpZXdDb250ZW50UGFkZGluZyArIFwicHhcIixcclxuXHRcdFx0XHRcdHdpZHRoOiAodmlld0NvbnRlbnRXaWR0aCAtIHZpZXdDb250ZW50UGFkZGluZykgLyAyICsgXCJweFwiLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiBcIjMwcHhcIixcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0YWc6ICdmb250JyxcclxuXHRcdFx0XHRpZDogJ2NvbmZpcm1UZXh0JyxcclxuXHRcdFx0XHR0ZXh0OiBcIuWQjuWPsOS4i+i9vVwiLFxyXG5cdFx0XHRcdHRleHRTdHlsZXM6IHtcclxuXHRcdFx0XHRcdHNpemU6ICcxNHB4JyxcclxuXHRcdFx0XHRcdGNvbG9yOiBcIiNGRkZcIixcclxuXHRcdFx0XHRcdGxpbmVTcGFjaW5nOiBcIjAlXCIsXHJcblx0XHRcdFx0XHR3aGl0ZVNwYWNlOiBcIm5vcm1hbFwiXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRwb3NpdGlvbjoge1xyXG5cdFx0XHRcdFx0Ym90dG9tOiB2aWV3Q29udGVudFBhZGRpbmcgKyAncHgnLFxyXG5cdFx0XHRcdFx0bGVmdDogKCh2aWV3Q29udGVudFdpZHRoIC0gdmlld0NvbnRlbnRQYWRkaW5nKSAvIDIgKyB2aWV3Q29udGVudFBhZGRpbmcgKiAyKSArIFwicHhcIixcclxuXHRcdFx0XHRcdHdpZHRoOiAodmlld0NvbnRlbnRXaWR0aCAtIHZpZXdDb250ZW50UGFkZGluZykgLyAyICsgXCJweFwiLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiBcIjMwcHhcIixcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdF0pO1xyXG5cdH1cclxuXHRpZiAoZGF0YS5idXR0b25OdW0gPT0gMSkge1xyXG5cdFx0cG9wdXBWaWV3SGVpZ2h0ICs9IHZpZXdDb250ZW50UGFkZGluZyArIDQwO1xyXG5cdFx0ZWxlbWVudExpc3QgPSBlbGVtZW50TGlzdC5jb25jYXQoW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGFnOiAncmVjdCcsIC8v57uY5Yi25bqV6L655oyJ6ZKuXHJcblx0XHRcdFx0cmVjdFN0eWxlczp7XHJcblx0XHRcdFx0XHRyYWRpdXM6IFwiNnB4XCIsXHJcblx0XHRcdFx0XHRjb2xvcjogJG1haW5Db2xvclxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0cG9zaXRpb246e1xyXG5cdFx0XHRcdFx0Ym90dG9tOiB2aWV3Q29udGVudFBhZGRpbmcgKyAncHgnLFxyXG5cdFx0XHRcdFx0bGVmdDogdmlld0NvbnRlbnRQYWRkaW5nICsgXCJweFwiLFxyXG5cdFx0XHRcdFx0d2lkdGg6IHZpZXdDb250ZW50V2lkdGggKyBcInB4XCIsXHJcblx0XHRcdFx0XHRoZWlnaHQ6IFwiNDBweFwiXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGFnOiAnZm9udCcsXHJcblx0XHRcdFx0aWQ6ICdjb25maXJtVGV4dCcsXHJcblx0XHRcdFx0dGV4dDogXCLlhbPpl61cIixcclxuXHRcdFx0XHR0ZXh0U3R5bGVzOiB7XHJcblx0XHRcdFx0XHRzaXplOiAnMTRweCcsXHJcblx0XHRcdFx0XHRjb2xvcjogXCIjRkZGXCIsXHJcblx0XHRcdFx0XHRsaW5lU3BhY2luZzogXCIwJVwiLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0cG9zaXRpb246IHtcclxuXHRcdFx0XHRcdGJvdHRvbTogdmlld0NvbnRlbnRQYWRkaW5nICsgJ3B4JyxcclxuXHRcdFx0XHRcdGxlZnQ6IHZpZXdDb250ZW50UGFkZGluZyArIFwicHhcIixcclxuXHRcdFx0XHRcdHdpZHRoOiB2aWV3Q29udGVudFdpZHRoICsgXCJweFwiLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiBcIjQwcHhcIlxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XSk7XHJcblx0fVxyXG5cdHJldHVybiB7XHJcblx0XHRwb3B1cFZpZXdIZWlnaHQ6cG9wdXBWaWV3SGVpZ2h0LFxyXG5cdFx0cG9wdXBWaWV3V2lkdGg6cG9wdXBWaWV3V2lkdGgsXHJcblx0XHRzY3JlZW5IZWlnaHQ6c2NyZWVuSGVpZ2h0LFxyXG5cdFx0dmlld0NvbnRlbnRXaWR0aDp2aWV3Q29udGVudFdpZHRoLFxyXG5cdFx0dmlld0NvbnRlbnRQYWRkaW5nOnZpZXdDb250ZW50UGFkZGluZyxcclxuXHRcdGVsZW1lbnRMaXN0OiBlbGVtZW50TGlzdFxyXG5cdH07XHJcbn1cclxuLy8g5paH5Lu25LiL6L2955qE5by556qXXHJcbmZ1bmN0aW9uIGRvd25sb2FkUG9wdXAoZGF0YSkge1xyXG5cdC8vIOW8ueeql+mBrue9qeWxglxyXG5cdGxldCBtYXNrTGF5ZXIgPSBuZXcgcGx1cy5uYXRpdmVPYmouVmlldyhcIm1hc2tMYXllclwiLCB7IC8v5YWI5Yib5bu66YGu572p5bGCXHJcblx0XHR0b3A6ICcwcHgnLFxyXG5cdFx0bGVmdDogJzBweCcsXHJcblx0XHRoZWlnaHQ6ICcxMDAlJyxcclxuXHRcdHdpZHRoOiAnMTAwJScsXHJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsMCwwLDAuNSknXHJcblx0fSk7XHJcblx0bGV0IHBvcHVwVmlld0RhdGEgPSBkb3dubG9hZFBvcHVwRHJhd2luZyhkYXRhKTtcclxuXHQvLyDlvLnnqpflhoXlrrlcclxuXHRsZXQgcG9wdXBWaWV3ID0gbmV3IHBsdXMubmF0aXZlT2JqLlZpZXcoXCJwb3B1cFZpZXdcIiwgeyAvL+WIm+W7uuW6lemDqOWbvuagh+iPnOWNlVxyXG5cdFx0dGFnOiBcInJlY3RcIixcclxuXHRcdHRvcDogKHBvcHVwVmlld0RhdGEuc2NyZWVuSGVpZ2h0IC0gcG9wdXBWaWV3RGF0YS5wb3B1cFZpZXdIZWlnaHQpIC8gMiArIFwicHhcIixcclxuXHRcdGxlZnQ6ICcxNSUnLFxyXG5cdFx0aGVpZ2h0OiBwb3B1cFZpZXdEYXRhLnBvcHVwVmlld0hlaWdodCArIFwicHhcIixcclxuXHRcdHdpZHRoOiBcIjcwJVwiLFxyXG5cdH0pO1xyXG5cdGxldCBwcm9ncmVzc1ZhbHVlID0gMDtcclxuXHRsZXQgcHJvZ3Jlc3NUaXAgPSAwO1xyXG5cdGxldCBjb250ZW50VGV4dCA9IDA7XHJcblx0bGV0IGJ1dHRvbk51bSA9IDI7XHJcblx0aWYoZGF0YS5idXR0b25OdW0gPj0gMCl7XHJcblx0XHRidXR0b25OdW0gPSBkYXRhLmJ1dHRvbk51bTtcclxuXHR9XHJcblx0cG9wdXBWaWV3LmRyYXcocG9wdXBWaWV3RGF0YS5lbGVtZW50TGlzdCk7XHJcbiAgICBsZXQgY2FsbGJhY2tEYXRhID0ge1xyXG5cdFx0Y2hhbmdlOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0bGV0IHByb2dyZXNzRWxlbWVudCA9IFtdO1xyXG5cdFx0XHRpZihyZXMucHJvZ3Jlc3NWYWx1ZSl7XHJcblx0XHRcdFx0cHJvZ3Jlc3NWYWx1ZSA9IHJlcy5wcm9ncmVzc1ZhbHVlO1xyXG5cdFx0XHRcdC8vIOe7mOWItui/m+W6puadoVxyXG5cdFx0XHRcdHByb2dyZXNzRWxlbWVudC5wdXNoKHtcclxuXHRcdFx0XHRcdHRhZzogJ3JlY3QnLCAvL+e7mOWItui/m+W6puadoeiDjOaZr1xyXG5cdFx0XHRcdFx0aWQ6ICdwcm9ncmVzc1ZhbHVlQmcnLFxyXG5cdFx0XHRcdFx0cmVjdFN0eWxlczp7XHJcblx0XHRcdFx0XHRcdHJhZGl1czogXCI0cHhcIixcclxuXHRcdFx0XHRcdFx0Y29sb3I6ICRtYWluQ29sb3JcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRwb3NpdGlvbjp7XHJcblx0XHRcdFx0XHRcdHRvcDogcG9wdXBWaWV3RGF0YS52aWV3Q29udGVudFBhZGRpbmcgKiA0ICsgNjAgKyAncHgnLFxyXG5cdFx0XHRcdFx0XHRsZWZ0OiBwb3B1cFZpZXdEYXRhLnZpZXdDb250ZW50UGFkZGluZyArIFwicHhcIixcclxuXHRcdFx0XHRcdFx0d2lkdGg6IHBvcHVwVmlld0RhdGEudmlld0NvbnRlbnRXaWR0aCAqIChyZXMucHJvZ3Jlc3NWYWx1ZSAvIDEwMCkgKyBcInB4XCIsXHJcblx0XHRcdFx0XHRcdGhlaWdodDogXCI4cHhcIlxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmKHJlcy5wcm9ncmVzc1RpcCl7XHJcblx0XHRcdFx0cHJvZ3Jlc3NUaXAgPSByZXMucHJvZ3Jlc3NUaXA7XHJcblx0XHRcdFx0cHJvZ3Jlc3NFbGVtZW50LnB1c2goe1xyXG5cdFx0XHRcdFx0dGFnOiAnZm9udCcsXHJcblx0XHRcdFx0XHRpZDogJ3Byb2dyZXNzVmFsdWUnLFxyXG5cdFx0XHRcdFx0dGV4dDogcmVzLnByb2dyZXNzVGlwLFxyXG5cdFx0XHRcdFx0dGV4dFN0eWxlczoge1xyXG5cdFx0XHRcdFx0XHRzaXplOiAnMTRweCcsXHJcblx0XHRcdFx0XHRcdGNvbG9yOiAkbWFpbkNvbG9yLFxyXG5cdFx0XHRcdFx0XHR3aGl0ZVNwYWNlOiBcIm5vcm1hbFwiXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0cG9zaXRpb246IHtcclxuXHRcdFx0XHRcdFx0dG9wOiBwb3B1cFZpZXdEYXRhLnZpZXdDb250ZW50UGFkZGluZyAqIDQgKyAyMCArICdweCcsXHJcblx0XHRcdFx0XHRcdGhlaWdodDogXCIzMHB4XCJcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZihyZXMuY29udGVudFRleHQpe1xyXG5cdFx0XHRcdGNvbnRlbnRUZXh0ID0gcmVzLmNvbnRlbnRUZXh0O1xyXG5cdFx0XHRcdHByb2dyZXNzRWxlbWVudC5wdXNoKHtcclxuXHRcdFx0XHRcdHRhZzogJ2ZvbnQnLFxyXG5cdFx0XHRcdFx0aWQ6ICdjb250ZW50JyxcclxuXHRcdFx0XHRcdHRleHQ6IHJlcy5jb250ZW50VGV4dCxcclxuXHRcdFx0XHRcdHRleHRTdHlsZXM6IHtcclxuXHRcdFx0XHRcdFx0c2l6ZTogJzE2cHgnLFxyXG5cdFx0XHRcdFx0XHRjb2xvcjogXCIjMzMzXCIsXHJcblx0XHRcdFx0XHRcdHdoaXRlU3BhY2U6IFwibm9ybWFsXCJcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRwb3NpdGlvbjoge1xyXG5cdFx0XHRcdFx0XHR0b3A6IHBvcHVwVmlld0RhdGEudmlld0NvbnRlbnRQYWRkaW5nICogMiArIDMwICsgJ3B4JyxcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OiBcIjMwcHhcIixcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZihyZXMuYnV0dG9uTnVtID49IDAgJiYgYnV0dG9uTnVtICE9IHJlcy5idXR0b25OdW0pe1xyXG5cdFx0XHRcdGJ1dHRvbk51bSA9IHJlcy5idXR0b25OdW07XHJcblx0XHRcdFx0cG9wdXBWaWV3LnJlc2V0KCk7XHJcblx0XHRcdFx0cG9wdXBWaWV3RGF0YSA9IGRvd25sb2FkUG9wdXBEcmF3aW5nKE9iamVjdC5hc3NpZ24oe1xyXG5cdFx0XHRcdFx0cHJvZ3Jlc3NWYWx1ZTpwcm9ncmVzc1ZhbHVlLFxyXG5cdFx0XHRcdFx0cHJvZ3Jlc3NUaXA6cHJvZ3Jlc3NUaXAsXHJcblx0XHRcdFx0XHRjb250ZW50VGV4dDpjb250ZW50VGV4dCxcclxuXHRcdFx0XHR9LHJlcykpO1xyXG5cdFx0XHRcdGxldCBuZXdFbGVtZW50ID0gW107XHJcblx0XHRcdFx0cG9wdXBWaWV3RGF0YS5lbGVtZW50TGlzdC5tYXAoKGl0ZW0saW5kZXgpID0+IHtcclxuXHRcdFx0XHRcdGxldCBoYXZlID0gZmFsc2U7XHJcblx0XHRcdFx0XHRwcm9ncmVzc0VsZW1lbnQuZm9yRWFjaCgoY2hpbGRJdGVtLGNoaWxkSW5kZXgpID0+IHtcclxuXHRcdFx0XHRcdFx0aWYoaXRlbS5pZCA9PSBjaGlsZEl0ZW0uaWQpe1xyXG5cdFx0XHRcdFx0XHRcdGhhdmUgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdGlmKCFoYXZlKXtcclxuXHRcdFx0XHRcdFx0bmV3RWxlbWVudC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHByb2dyZXNzRWxlbWVudCA9IG5ld0VsZW1lbnQuY29uY2F0KHByb2dyZXNzRWxlbWVudCk7XHJcblx0XHRcdFx0cG9wdXBWaWV3LnNldFN0eWxlKHtcclxuXHRcdFx0XHRcdHRhZzogXCJyZWN0XCIsXHJcblx0XHRcdFx0XHR0b3A6IChwb3B1cFZpZXdEYXRhLnNjcmVlbkhlaWdodCAtIHBvcHVwVmlld0RhdGEucG9wdXBWaWV3SGVpZ2h0KSAvIDIgKyBcInB4XCIsXHJcblx0XHRcdFx0XHRsZWZ0OiAnMTUlJyxcclxuXHRcdFx0XHRcdGhlaWdodDogcG9wdXBWaWV3RGF0YS5wb3B1cFZpZXdIZWlnaHQgKyBcInB4XCIsXHJcblx0XHRcdFx0XHR3aWR0aDogXCI3MCVcIixcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRwb3B1cFZpZXcuZHJhdyhwcm9ncmVzc0VsZW1lbnQpOyBcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0cG9wdXBWaWV3LmRyYXcocHJvZ3Jlc3NFbGVtZW50KTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGNhbmNlbDogZnVuY3Rpb24oKSB7IFxyXG5cdFx0XHRtYXNrTGF5ZXIuaGlkZSgpO1xyXG5cdFx0XHRwb3B1cFZpZXcuaGlkZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRwb3B1cFZpZXcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdGxldCBtYXhUb3AgPSBwb3B1cFZpZXdEYXRhLnBvcHVwVmlld0hlaWdodCAtIHBvcHVwVmlld0RhdGEudmlld0NvbnRlbnRQYWRkaW5nO1xyXG5cdFx0bGV0IG1heExlZnQgPSBwb3B1cFZpZXdEYXRhLnBvcHVwVmlld1dpZHRoIC0gcG9wdXBWaWV3RGF0YS52aWV3Q29udGVudFBhZGRpbmc7XHJcblx0XHRpZiAoZS5jbGllbnRZID4gbWF4VG9wIC0gNDAgJiYgZS5jbGllbnRZIDwgbWF4VG9wKSB7XHJcblx0XHRcdGlmKGJ1dHRvbk51bSA9PSAxKXtcclxuXHRcdFx0XHQvLyDljZXmjInpkq5cclxuXHRcdFx0XHRpZiAoZS5jbGllbnRYID4gcG9wdXBWaWV3RGF0YS52aWV3Q29udGVudFBhZGRpbmcgJiYgZS5jbGllbnRYIDwgbWF4TGVmdCkge1xyXG5cdFx0XHRcdFx0bWFza0xheWVyLmhpZGUoKTtcclxuXHRcdFx0XHRcdHBvcHVwVmlldy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tEYXRhLnJlYm9vdCgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fWVsc2UgaWYoYnV0dG9uTnVtID09IDIpe1xyXG5cdFx0XHRcdC8vIOWPjOaMiemSrlxyXG5cdFx0XHRcdGxldCBidXR0b25XaWR0aCA9IChwb3B1cFZpZXdEYXRhLnZpZXdDb250ZW50V2lkdGggLSBwb3B1cFZpZXdEYXRhLnZpZXdDb250ZW50UGFkZGluZykgLyAyO1xyXG5cdFx0XHRcdGlmIChlLmNsaWVudFggPiBwb3B1cFZpZXdEYXRhLnZpZXdDb250ZW50UGFkZGluZyAmJiBlLmNsaWVudFggPCBtYXhMZWZ0IC0gYnV0dG9uV2lkdGggLSBwb3B1cFZpZXdEYXRhLnZpZXdDb250ZW50UGFkZGluZykge1xyXG5cdFx0XHRcdFx0bWFza0xheWVyLmhpZGUoKTtcclxuXHRcdFx0XHRcdHBvcHVwVmlldy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tEYXRhLmNhbmNlbERvd25sb2FkKCk7XHJcblx0XHRcdFx0fSBlbHNlIGlmIChlLmNsaWVudFggPiBtYXhMZWZ0IC0gYnV0dG9uV2lkdGggJiYgZS5jbGllbnRYIDwgbWF4TGVmdCkge1xyXG5cdFx0XHRcdFx0bWFza0xheWVyLmhpZGUoKTtcclxuXHRcdFx0XHRcdHBvcHVwVmlldy5oaWRlKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSk7XHJcblx0Ly8g5pi+56S65by556qXXHJcblx0bWFza0xheWVyLnNob3coKTtcclxuXHRwb3B1cFZpZXcuc2hvdygpO1xyXG5cdC8vIOaUueWPmOi/m+W6puadoVxyXG5cdHJldHVybiBjYWxsYmFja0RhdGE7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaXNQcm9tcHQgPSBmYWxzZSkge1xyXG5cdGdldEN1cnJlbnRObyh2ZXJzaW9uSW5mbyA9PiB7XHJcblx0XHRnZXRTZXJ2ZXJObyh2ZXJzaW9uSW5mbyxpc1Byb21wdCwgcmVzID0+IHtcclxuXHRcdFx0aWYgKHJlcy5mb3JjZVVwZGF0ZSkge1xyXG5cdFx0XHRcdGlmICgvXFwud2d0JC9pLnRlc3QocmVzLmRvd25sb2FkVXJsKSkge1xyXG5cdFx0XHRcdFx0Z2V0RG93bmxvYWQocmVzKTtcclxuXHRcdFx0XHR9IGVsc2UgaWYoL1xcLmh0bWwkL2kudGVzdChyZXMuZG93bmxvYWRVcmwpKXtcclxuXHRcdFx0XHRcdHBsdXMucnVudGltZS5vcGVuVVJMKHJlcy5kb3dubG9hZFVybCk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGlmIChwbGF0Zm9ybSA9PSBcImFuZHJvaWRcIikge1xyXG5cdFx0XHRcdFx0XHRnZXREb3dubG9hZChyZXMpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0cGx1cy5ydW50aW1lLm9wZW5VUkwocmVzLmRvd25sb2FkVXJsKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dXBkYXRlUG9wdXAocmVzLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGlmICgvXFwud2d0JC9pLnRlc3QocmVzLmRvd25sb2FkVXJsKSkge1xyXG5cdFx0XHRcdFx0XHRnZXREb3dubG9hZChyZXMpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIGlmKC9cXC5odG1sJC9pLnRlc3QocmVzLmRvd25sb2FkVXJsKSl7XHJcblx0XHRcdFx0XHRcdHBsdXMucnVudGltZS5vcGVuVVJMKHJlcy5kb3dubG9hZFVybCk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRpZiAocGxhdGZvcm0gPT0gXCJhbmRyb2lkXCIpIHtcclxuXHRcdFx0XHRcdFx0XHRnZXREb3dubG9hZChyZXMpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHBsdXMucnVudGltZS5vcGVuVVJMKHJlcy5kb3dubG9hZFVybCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fSk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///32\n");

/***/ }),
/* 33 */
/*!*******************************************************!*\
  !*** D:/uniapp/uniapp-simple/config/requestConfig.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 34));var _request = _interopRequireDefault(__webpack_require__(/*! @/plugins/request */ 37));\nvar _store = _interopRequireDefault(__webpack_require__(/*! @/store */ 22));\nvar _baseUrl = _interopRequireDefault(__webpack_require__(/*! @/config/baseUrl */ 31));\n\n\n\n\n\n\n\n\n\n\n\n\nvar _APPUpdate = __webpack_require__(/*! @/plugins/APPUpdate */ 32);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};}function _createForOfIteratorHelper(o, allowArrayLike) {var it;if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) {if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") {if (it) o = it;var i = 0;var F = function F() {};return { s: F, n: function n() {if (i >= o.length) return { done: true };return { done: false, value: o[i++] };}, e: function e(_e) {throw _e;}, f: F };}throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");}var normalCompletion = true,didErr = false,err;return { s: function s() {it = o[Symbol.iterator]();}, n: function n() {var step = it.next();normalCompletion = step.done;return step;}, e: function e(_e2) {didErr = true;err = _e2;}, f: function f() {try {if (!normalCompletion && it.return != null) it.return();} finally {if (didErr) throw err;}} };}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === \"Object\" && o.constructor) n = o.constructor.name;if (n === \"Map\" || n === \"Set\") return Array.from(o);if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}var version_code = '';\nsetTimeout(function () {\n  (0, _APPUpdate.getCurrentNo)(function (res) {\n    __f__(\"log\", \"版本号\", res, \" at config/requestConfig.js:19\");\n    version_code = res.versionCode;\n  });\n}, 200);\n\n\n//可以new多个request来支持多个域名请求\nvar $http = new _request.default({\n  //接口请求地址\n  baseUrl: _baseUrl.default.baseUrl,\n  //服务器本地上传文件地址\n  fileUrl: _baseUrl.default.baseUrl,\n  // 服务器上传图片默认url\n  defaultUploadUrl: \"api/common/v1/upload_image\",\n  //设置请求头（如果使用报错跨域问题，可能是content-type请求类型和后台那边设置的不一致）\n  header: {\n    'Content-Type': 'application/json;charset=UTF-8'\n    // 'project_token': base.projectToken, //项目token（可删除）\n  } });\n\n// 添加获取七牛云token的方法\n$http.getQnToken = function (callback) {\n  //该地址需要开发者自行配置（每个后台的接口风格都不一样）\n  $http.get(\"api/common/v1/qn_upload\").then(function (data) {\n    /*\r\n                                                              *接口返回参数：\r\n                                                              *visitPrefix:访问文件的域名\r\n                                                              *token:七牛云上传token\r\n                                                              *folderPath:上传的文件夹\r\n                                                              *region: 地区 默认为：SCN\r\n                                                              */\n    callback({\n      visitPrefix: data.visitPrefix,\n      token: data.token,\n      folderPath: data.folderPath });\n\n  });\n};\n//请求开始拦截器\n$http.requestStart = function (options) {\n  __f__(\"log\", \"请求开始\", options, \" at config/requestConfig.js:59\");\n  if (options.load) {\n    //打开加载动画\n    _store.default.commit(\"setLoadingShow\", true);\n  }\n  // 图片上传大小限制\n  if (options.method == \"FILE\" && options.maxSize) {\n    // 文件最大字节: options.maxSize 可以在调用方法的时候加入参数\n    var maxSize = options.maxSize;var _iterator = _createForOfIteratorHelper(\n    options.files),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var item = _step.value;\n        if (item.size > maxSize) {\n          setTimeout(function () {\n            uni.showToast({\n              title: \"图片过大，请重新上传\",\n              icon: \"none\" });\n\n          }, 500);\n          return false;\n        }\n      }} catch (err) {_iterator.e(err);} finally {_iterator.f();}\n  }\n\n  // 添加当前版本号\n  if (version_code) {\n    options.header['version_code'] = version_code;\n  }\n\n  //请求前加入token\n  if (_store.default.state.userInfo.token) {\n    options.header['user_token'] = _store.default.state.userInfo.token;\n  };\n  return options;\n};\n//请求结束\n$http.requestEnd = function (options) {\n  //判断当前接口是否需要加载动画\n  if (options.load) {\n    // 关闭加载动画\n    _store.default.commit(\"setLoadingShow\", false);\n  }\n};\nvar loginPopupNum = 0;\n//所有接口数据处理（此方法需要开发者根据各自的接口返回类型修改，以下只是模板）\n$http.dataFactory = /*#__PURE__*/function () {var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(res) {var httpData, content;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:\n            __f__(\"log\", \"接口请求数据\", {\n              url: res.url,\n              resolve: res.response,\n              header: res.header,\n              data: res.data,\n              method: res.method }, \" at config/requestConfig.js:103\");if (!(\n\n            res.response.statusCode && res.response.statusCode == 200)) {_context.next = 25;break;}\n            httpData = res.response.data;\n            if (typeof httpData == \"string\") {\n              httpData = JSON.parse(httpData);\n            }\n            /*********以下只是模板(及共参考)，需要开发者根据各自的接口返回类型修改*********/\n\n            //判断数据是否请求成功\n            if (!(httpData.success || httpData.code == 200)) {_context.next = 8;break;}return _context.abrupt(\"return\",\n\n            Promise.resolve(httpData.data));case 8:if (!(\n            httpData.code == \"1000\" || httpData.code == \"1001\" || httpData.code == 1100 || httpData.code == 402)) {_context.next = 16;break;}\n\n            // 失败重新请求（最多重新请求3次）\n            // if(res.resend < 3){\n            //     let result = await $http.request({\n            //     \turl: res.url,\n            //     \tdata: res.data,\n            //     \tmethod: res.method,\n            //     \theader: res.header,\n            //     \tisPrompt: res.isPrompt,//（默认 true 说明：本接口抛出的错误是否提示）\n            //     \tload: res.load,//（默认 true 说明：本接口是否提示加载动画）\n            //     \tisFactory: res.isFactory, //（默认 true 说明：本接口是否调用公共的数据处理方法，设置false后isPrompt参数将失去作用）\n            //      resend: res.resend += 1 // 当前重发次数\n            //     });\n            //     // 返回正确的结果(then接受数据)\n            //     return Promise.resolve(result);\n            // }\n            // 返回错误的结果(catch接受数据)\n            // return Promise.reject({\n            // \tstatusCode: 0,\n            // \terrMsg: \"【request】\" +  (httpData.info || httpData.msg)\n            // });\n\n            //----------------------------------------分割线---------------------------------------------------\n\n            // 刷新token在重新请求（最多重新请求2次）\n            // if(res.resend < 2){\n            //     let tokenResult = await $http.request({\n            //     \turl: \"http://localhost:7001/api/common/v1/protocol\", // 获取token接口地址\n            //     \tdata: {\n            //             type: 1000\n            //         }, // 获取接口参数\n            //     \tmethod: \"GET\",\n            //     \tload: false,//（默认 true 说明：本接口是否提示加载动画）\n            //     });\n            //     // 储存token\n            //     store.commit(\"userInfo\", tokenResult);\n            //     let result = await $http.request({\n            //     \turl: res.url,\n            //     \tdata: res.data,\n            //     \tmethod: res.method,\n            //     \theader: res.header,\n            //     \tisPrompt: res.isPrompt,//（默认 true 说明：本接口抛出的错误是否提示）\n            //     \tload: res.load,//（默认 true 说明：本接口是否提示加载动画）\n            //     \tisFactory: res.isFactory, //（默认 true 说明：本接口是否调用公共的数据处理方法，设置false后isPrompt参数将失去作用）\n            //         resend: res.resend += 1 // 当前重发次数\n            //     });\n            //     // 返回正确的结果(then接受数据)\n            //     return Promise.resolve(result);\n            // }\n            // 返回错误的结果(catch接受数据)\n            // return Promise.reject({\n            // \tstatusCode: 0,\n            // \terrMsg: \"【request】\" +  (httpData.info || httpData.msg)\n            // });\n\n\n\n\n\n            _store.default.commit(\"emptyUserInfo\");\n\n\n\n\n\n\n\n            content = '此时此刻需要您登录喔~';\n            if (httpData.code == \"1000\") {\n              content = '此时此刻需要您登录喔';\n            }\n            if (loginPopupNum <= 0) {\n              loginPopupNum++;\n              uni.showModal({\n                title: '温馨提示',\n                content: content,\n                confirmText: \"去登录\",\n                cancelText: \"再逛会\",\n                success: function success(res) {\n                  loginPopupNum--;\n                  if (res.confirm) {\n                    uni.navigateTo({\n                      url: \"/pages/user/login\" });\n\n                  }\n                } });\n\n            }\n\n            // 返回错误的结果(catch接受数据)\n            return _context.abrupt(\"return\", Promise.reject({\n              statusCode: 0,\n              errMsg: \"【request】\" + (httpData.info || httpData.msg),\n              data: res.data }));case 16:if (!(\n\n            httpData.code == \"1004\")) {_context.next = 21;break;}\n            if (loginPopupNum <= 0) {\n              loginPopupNum++;\n              uni.showModal({\n                title: \"提示\",\n                content: \"您还未绑定手机号，请先绑定~\",\n                confirmText: \"去绑定\",\n                cancelText: \"再逛会\",\n                success: function success(res) {\n                  loginPopupNum--;\n                  if (res.confirm) {\n                    uni.navigateTo({\n                      url: '/pages/user/bindPhone' });\n\n                  }\n                } });\n\n            }\n            // 返回错误的结果(catch接受数据)\n            return _context.abrupt(\"return\", Promise.reject({\n              statusCode: 0,\n              errMsg: \"【request】\" + (httpData.info || httpData.msg),\n              data: res.data }));case 21:\n\n            //其他错误提示   \n            if (res.isPrompt) {\n              uni.showToast({\n                title: httpData.info || httpData.msg,\n                icon: \"none\",\n                duration: 3000 });\n\n            }\n            // 返回错误的结果(catch接受数据)\n            return _context.abrupt(\"return\", Promise.reject({\n              statusCode: 0,\n              errMsg: \"【request】\" + (httpData.info || httpData.msg),\n              data: res.data }));case 23:_context.next = 26;break;case 25:return _context.abrupt(\"return\",\n\n\n\n\n\n\n\n            Promise.reject({\n              statusCode: res.response.statusCode,\n              errMsg: \"【request】数据工厂验证不通过\",\n              data: res.data }));case 26:case \"end\":return _context.stop();}}}, _callee);}));return function (_x) {return _ref.apply(this, arguments);};}();\n\n\n\n// 错误回调\n$http.requestError = function (e) {\n  // e.statusCode === 0 是参数效验错误抛出的\n  if (e.statusCode === 0) {\n    throw e;\n  } else {\n    __f__(\"log\", e, \" at config/requestConfig.js:274\");\n    uni.showToast({\n      title: \"网络错误，请检查一下网络\",\n      icon: \"none\" });\n\n  }\n};var _default =\n$http;exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 30)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29uZmlnL3JlcXVlc3RDb25maWcuanMiXSwibmFtZXMiOlsidmVyc2lvbl9jb2RlIiwic2V0VGltZW91dCIsInJlcyIsInZlcnNpb25Db2RlIiwiJGh0dHAiLCJyZXF1ZXN0IiwiYmFzZVVybCIsImJhc2UiLCJmaWxlVXJsIiwiZGVmYXVsdFVwbG9hZFVybCIsImhlYWRlciIsImdldFFuVG9rZW4iLCJjYWxsYmFjayIsImdldCIsInRoZW4iLCJkYXRhIiwidmlzaXRQcmVmaXgiLCJ0b2tlbiIsImZvbGRlclBhdGgiLCJyZXF1ZXN0U3RhcnQiLCJvcHRpb25zIiwibG9hZCIsInN0b3JlIiwiY29tbWl0IiwibWV0aG9kIiwibWF4U2l6ZSIsImZpbGVzIiwiaXRlbSIsInNpemUiLCJ1bmkiLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJzdGF0ZSIsInVzZXJJbmZvIiwicmVxdWVzdEVuZCIsImxvZ2luUG9wdXBOdW0iLCJkYXRhRmFjdG9yeSIsInVybCIsInJlc29sdmUiLCJyZXNwb25zZSIsInN0YXR1c0NvZGUiLCJodHRwRGF0YSIsIkpTT04iLCJwYXJzZSIsInN1Y2Nlc3MiLCJjb2RlIiwiUHJvbWlzZSIsImNvbnRlbnQiLCJzaG93TW9kYWwiLCJjb25maXJtVGV4dCIsImNhbmNlbFRleHQiLCJjb25maXJtIiwibmF2aWdhdGVUbyIsInJlamVjdCIsImVyck1zZyIsImluZm8iLCJtc2ciLCJpc1Byb21wdCIsImR1cmF0aW9uIiwicmVxdWVzdEVycm9yIiwiZSJdLCJtYXBwaW5ncyI6IndQQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQWFBLG9FLHF0RUFGQSxJQUFJQSxZQUFZLEdBQUcsRUFBbkI7QUFHQUMsVUFBVSxDQUFDLFlBQU07QUFDaEIsK0JBQWEsVUFBU0MsR0FBVCxFQUFhO0FBQ3pCLGlCQUFZLEtBQVosRUFBa0JBLEdBQWxCO0FBQ0FGLGdCQUFZLEdBQUdFLEdBQUcsQ0FBQ0MsV0FBbkI7QUFDQSxHQUhEO0FBSUEs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TUFGTyxFQUFkOztBQUlBO0FBQ0QsQ0FYRCxDO0FBWWU1QixLIiwiZmlsZSI6IjMzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlcXVlc3QgZnJvbSBcIkAvcGx1Z2lucy9yZXF1ZXN0XCI7XHJcbmltcG9ydCBzdG9yZSBmcm9tICdAL3N0b3JlJztcclxuaW1wb3J0IGJhc2UgZnJvbSAnQC9jb25maWcvYmFzZVVybCc7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5sZXQgdmVyc2lvbl9jb2RlID0gJyc7XHJcblxyXG5pbXBvcnQgeyBnZXRDdXJyZW50Tm8gfSBmcm9tICdAL3BsdWdpbnMvQVBQVXBkYXRlJztcclxuc2V0VGltZW91dCgoKSA9PiB7XHJcblx0Z2V0Q3VycmVudE5vKGZ1bmN0aW9uKHJlcyl7XHJcblx0XHRjb25zb2xlLmxvZyhcIueJiOacrOWPt1wiLHJlcyk7XHJcblx0XHR2ZXJzaW9uX2NvZGUgPSByZXMudmVyc2lvbkNvZGU7XHJcblx0fSk7XHJcbn0sMjAwKTtcclxuXHJcblxyXG4vL+WPr+S7pW5ld+WkmuS4qnJlcXVlc3TmnaXmlK/mjIHlpJrkuKrln5/lkI3or7fmsYJcclxubGV0ICRodHRwID0gbmV3IHJlcXVlc3Qoe1xyXG5cdC8v5o6l5Y+j6K+35rGC5Zyw5Z2AXHJcblx0YmFzZVVybDogYmFzZS5iYXNlVXJsLFxyXG5cdC8v5pyN5Yqh5Zmo5pys5Zyw5LiK5Lyg5paH5Lu25Zyw5Z2AXHJcblx0ZmlsZVVybDogYmFzZS5iYXNlVXJsLFxyXG5cdC8vIOacjeWKoeWZqOS4iuS8oOWbvueJh+m7mOiupHVybFxyXG5cdGRlZmF1bHRVcGxvYWRVcmw6IFwiYXBpL2NvbW1vbi92MS91cGxvYWRfaW1hZ2VcIixcclxuXHQvL+iuvue9ruivt+axguWktO+8iOWmguaenOS9v+eUqOaKpemUmei3qOWfn+mXrumimO+8jOWPr+iDveaYr2NvbnRlbnQtdHlwZeivt+axguexu+Wei+WSjOWQjuWPsOmCo+i+ueiuvue9rueahOS4jeS4gOiHtO+8iVxyXG5cdGhlYWRlcjoge1xyXG5cdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9VVRGLTgnLFxyXG5cdFx0Ly8gJ3Byb2plY3RfdG9rZW4nOiBiYXNlLnByb2plY3RUb2tlbiwgLy/pobnnm650b2tlbu+8iOWPr+WIoOmZpO+8iVxyXG5cdH1cclxufSk7XHJcbi8vIOa3u+WKoOiOt+WPluS4g+eJm+S6kXRva2Vu55qE5pa55rOVXHJcbiRodHRwLmdldFFuVG9rZW4gPSBmdW5jdGlvbihjYWxsYmFjayl7XHJcblx0Ly/or6XlnLDlnYDpnIDopoHlvIDlj5HogIXoh6rooYzphY3nva7vvIjmr4/kuKrlkI7lj7DnmoTmjqXlj6Ppo47moLzpg73kuI3kuIDmoLfvvIlcclxuXHQkaHR0cC5nZXQoXCJhcGkvY29tbW9uL3YxL3FuX3VwbG9hZFwiKS50aGVuKGRhdGEgPT4ge1xyXG5cdFx0LypcclxuXHRcdCAq5o6l5Y+j6L+U5Zue5Y+C5pWw77yaXHJcblx0XHQgKnZpc2l0UHJlZml4Ouiuv+mXruaWh+S7tueahOWfn+WQjVxyXG5cdFx0ICp0b2tlbjrkuIPniZvkupHkuIrkvKB0b2tlblxyXG5cdFx0ICpmb2xkZXJQYXRoOuS4iuS8oOeahOaWh+S7tuWkuVxyXG5cdFx0ICpyZWdpb246IOWcsOWMuiDpu5jorqTkuLrvvJpTQ05cclxuXHRcdCAqL1xyXG5cdFx0Y2FsbGJhY2soe1xyXG5cdFx0XHR2aXNpdFByZWZpeDogZGF0YS52aXNpdFByZWZpeCxcclxuXHRcdFx0dG9rZW46IGRhdGEudG9rZW4sXHJcblx0XHRcdGZvbGRlclBhdGg6IGRhdGEuZm9sZGVyUGF0aFxyXG5cdFx0fSk7XHJcblx0fSk7XHJcbn1cclxuLy/or7fmsYLlvIDlp4vmi6bmiKrlmahcclxuJGh0dHAucmVxdWVzdFN0YXJ0ID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG5cdGNvbnNvbGUubG9nKFwi6K+35rGC5byA5aeLXCIsIG9wdGlvbnMpO1xyXG5cdGlmIChvcHRpb25zLmxvYWQpIHtcclxuXHRcdC8v5omT5byA5Yqg6L295Yqo55S7XHJcblx0XHRzdG9yZS5jb21taXQoXCJzZXRMb2FkaW5nU2hvd1wiLCB0cnVlKTtcclxuXHR9XHJcblx0Ly8g5Zu+54mH5LiK5Lyg5aSn5bCP6ZmQ5Yi2XHJcblx0aWYgKG9wdGlvbnMubWV0aG9kID09IFwiRklMRVwiICYmIG9wdGlvbnMubWF4U2l6ZSkge1xyXG5cdFx0Ly8g5paH5Lu25pyA5aSn5a2X6IqCOiBvcHRpb25zLm1heFNpemUg5Y+v5Lul5Zyo6LCD55So5pa55rOV55qE5pe25YCZ5Yqg5YWl5Y+C5pWwXHJcblx0XHRsZXQgbWF4U2l6ZSA9IG9wdGlvbnMubWF4U2l6ZTtcclxuXHRcdGZvciAobGV0IGl0ZW0gb2Ygb3B0aW9ucy5maWxlcykge1xyXG5cdFx0XHRpZiAoaXRlbS5zaXplID4gbWF4U2l6ZSkge1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiBcIuWbvueJh+i/h+Wkp++8jOivt+mHjeaWsOS4iuS8oFwiLFxyXG5cdFx0XHRcdFx0XHRpY29uOiBcIm5vbmVcIlxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fSwgNTAwKTtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIOa3u+WKoOW9k+WJjeeJiOacrOWPt1xyXG5cdGlmKHZlcnNpb25fY29kZSl7XHJcblx0XHRvcHRpb25zLmhlYWRlclsndmVyc2lvbl9jb2RlJ10gPSB2ZXJzaW9uX2NvZGU7XHJcblx0fVxyXG5cclxuXHQvL+ivt+axguWJjeWKoOWFpXRva2VuXHJcblx0aWYgKHN0b3JlLnN0YXRlLnVzZXJJbmZvLnRva2VuKSB7XHJcblx0XHRvcHRpb25zLmhlYWRlclsndXNlcl90b2tlbiddID0gc3RvcmUuc3RhdGUudXNlckluZm8udG9rZW47XHJcblx0fTtcclxuXHRyZXR1cm4gb3B0aW9ucztcclxufVxyXG4vL+ivt+axgue7k+adn1xyXG4kaHR0cC5yZXF1ZXN0RW5kID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG5cdC8v5Yik5pat5b2T5YmN5o6l5Y+j5piv5ZCm6ZyA6KaB5Yqg6L295Yqo55S7XHJcblx0aWYgKG9wdGlvbnMubG9hZCkge1xyXG5cdFx0Ly8g5YWz6Zet5Yqg6L295Yqo55S7XHJcblx0XHRzdG9yZS5jb21taXQoXCJzZXRMb2FkaW5nU2hvd1wiLCBmYWxzZSk7XHJcblx0fVxyXG59XHJcbmxldCBsb2dpblBvcHVwTnVtID0gMDtcclxuLy/miYDmnInmjqXlj6PmlbDmja7lpITnkIbvvIjmraTmlrnms5XpnIDopoHlvIDlj5HogIXmoLnmja7lkIToh6rnmoTmjqXlj6Pov5Tlm57nsbvlnovkv67mlLnvvIzku6XkuIvlj6rmmK/mqKHmnb/vvIlcclxuJGh0dHAuZGF0YUZhY3RvcnkgPSBhc3luYyBmdW5jdGlvbihyZXMpIHtcclxuXHRjb25zb2xlLmxvZyhcIuaOpeWPo+ivt+axguaVsOaNrlwiLCB7XHJcblx0XHR1cmw6IHJlcy51cmwsXHJcblx0XHRyZXNvbHZlOiByZXMucmVzcG9uc2UsXHJcblx0XHRoZWFkZXI6IHJlcy5oZWFkZXIsXHJcblx0XHRkYXRhOiByZXMuZGF0YSxcclxuXHRcdG1ldGhvZDogcmVzLm1ldGhvZCxcclxuXHR9KTtcclxuXHRpZiAocmVzLnJlc3BvbnNlLnN0YXR1c0NvZGUgJiYgcmVzLnJlc3BvbnNlLnN0YXR1c0NvZGUgPT0gMjAwKSB7XHJcblx0XHRsZXQgaHR0cERhdGEgPSByZXMucmVzcG9uc2UuZGF0YTtcclxuXHRcdGlmKHR5cGVvZihodHRwRGF0YSkgPT0gXCJzdHJpbmdcIil7XHJcblx0XHRcdGh0dHBEYXRhID0gSlNPTi5wYXJzZShodHRwRGF0YSk7XHJcblx0XHR9XHJcblx0XHQvKioqKioqKioq5Lul5LiL5Y+q5piv5qih5p2/KOWPiuWFseWPguiAgynvvIzpnIDopoHlvIDlj5HogIXmoLnmja7lkIToh6rnmoTmjqXlj6Pov5Tlm57nsbvlnovkv67mlLkqKioqKioqKiovXHJcblxyXG5cdFx0Ly/liKTmlq3mlbDmja7mmK/lkKbor7fmsYLmiJDlip9cclxuXHRcdGlmIChodHRwRGF0YS5zdWNjZXNzIHx8IGh0dHBEYXRhLmNvZGUgPT0gMjAwKSB7XHJcblx0XHRcdC8vIOi/lOWbnuato+ehrueahOe7k+aenCh0aGVu5o6l5Y+X5pWw5o2uKVxyXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGh0dHBEYXRhLmRhdGEpO1xyXG5cdFx0fSBlbHNlIGlmIChodHRwRGF0YS5jb2RlID09IFwiMTAwMFwiIHx8IGh0dHBEYXRhLmNvZGUgPT0gXCIxMDAxXCIgfHwgaHR0cERhdGEuY29kZSA9PSAxMTAwIHx8IGh0dHBEYXRhLmNvZGUgPT0gNDAyKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyDlpLHotKXph43mlrDor7fmsYLvvIjmnIDlpJrph43mlrDor7fmsYIz5qyh77yJXHJcbiAgICAgICAgICAgIC8vIGlmKHJlcy5yZXNlbmQgPCAzKXtcclxuICAgICAgICAgICAgLy8gICAgIGxldCByZXN1bHQgPSBhd2FpdCAkaHR0cC5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgLy8gICAgIFx0dXJsOiByZXMudXJsLFxyXG4gICAgICAgICAgICAvLyAgICAgXHRkYXRhOiByZXMuZGF0YSxcclxuICAgICAgICAgICAgLy8gICAgIFx0bWV0aG9kOiByZXMubWV0aG9kLFxyXG4gICAgICAgICAgICAvLyAgICAgXHRoZWFkZXI6IHJlcy5oZWFkZXIsXHJcbiAgICAgICAgICAgIC8vICAgICBcdGlzUHJvbXB0OiByZXMuaXNQcm9tcHQsLy/vvIjpu5jorqQgdHJ1ZSDor7TmmI7vvJrmnKzmjqXlj6Pmipvlh7rnmoTplJnor6/mmK/lkKbmj5DnpLrvvIlcclxuICAgICAgICAgICAgLy8gICAgIFx0bG9hZDogcmVzLmxvYWQsLy/vvIjpu5jorqQgdHJ1ZSDor7TmmI7vvJrmnKzmjqXlj6PmmK/lkKbmj5DnpLrliqDovb3liqjnlLvvvIlcclxuICAgICAgICAgICAgLy8gICAgIFx0aXNGYWN0b3J5OiByZXMuaXNGYWN0b3J5LCAvL++8iOm7mOiupCB0cnVlIOivtOaYju+8muacrOaOpeWPo+aYr+WQpuiwg+eUqOWFrOWFseeahOaVsOaNruWkhOeQhuaWueazle+8jOiuvue9rmZhbHNl5ZCOaXNQcm9tcHTlj4LmlbDlsIblpLHljrvkvZznlKjvvIlcclxuICAgICAgICAgICAgLy8gICAgICByZXNlbmQ6IHJlcy5yZXNlbmQgKz0gMSAvLyDlvZPliY3ph43lj5HmrKHmlbBcclxuICAgICAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgICAgICAvLyAgICAgLy8g6L+U5Zue5q2j56Gu55qE57uT5p6cKHRoZW7mjqXlj5fmlbDmja4pXHJcbiAgICAgICAgICAgIC8vICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgLy8g6L+U5Zue6ZSZ6K+v55qE57uT5p6cKGNhdGNo5o6l5Y+X5pWw5o2uKVxyXG4gICAgICAgICAgICAvLyByZXR1cm4gUHJvbWlzZS5yZWplY3Qoe1xyXG4gICAgICAgICAgICAvLyBcdHN0YXR1c0NvZGU6IDAsXHJcbiAgICAgICAgICAgIC8vIFx0ZXJyTXNnOiBcIuOAkHJlcXVlc3TjgJFcIiArICAoaHR0cERhdGEuaW5mbyB8fCBodHRwRGF0YS5tc2cpXHJcbiAgICAgICAgICAgIC8vIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t5YiG5Ymy57q/LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyDliLfmlrB0b2tlbuWcqOmHjeaWsOivt+axgu+8iOacgOWkmumHjeaWsOivt+axgjLmrKHvvIlcclxuICAgICAgICAgICAgLy8gaWYocmVzLnJlc2VuZCA8IDIpe1xyXG4gICAgICAgICAgICAvLyAgICAgbGV0IHRva2VuUmVzdWx0ID0gYXdhaXQgJGh0dHAucmVxdWVzdCh7XHJcbiAgICAgICAgICAgIC8vICAgICBcdHVybDogXCJodHRwOi8vbG9jYWxob3N0OjcwMDEvYXBpL2NvbW1vbi92MS9wcm90b2NvbFwiLCAvLyDojrflj5Z0b2tlbuaOpeWPo+WcsOWdgFxyXG4gICAgICAgICAgICAvLyAgICAgXHRkYXRhOiB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHR5cGU6IDEwMDBcclxuICAgICAgICAgICAgLy8gICAgICAgICB9LCAvLyDojrflj5bmjqXlj6Plj4LmlbBcclxuICAgICAgICAgICAgLy8gICAgIFx0bWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICAvLyAgICAgXHRsb2FkOiBmYWxzZSwvL++8iOm7mOiupCB0cnVlIOivtOaYju+8muacrOaOpeWPo+aYr+WQpuaPkOekuuWKoOi9veWKqOeUu++8iVxyXG4gICAgICAgICAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vICAgICAvLyDlgqjlrZh0b2tlblxyXG4gICAgICAgICAgICAvLyAgICAgc3RvcmUuY29tbWl0KFwidXNlckluZm9cIiwgdG9rZW5SZXN1bHQpO1xyXG4gICAgICAgICAgICAvLyAgICAgbGV0IHJlc3VsdCA9IGF3YWl0ICRodHRwLnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAvLyAgICAgXHR1cmw6IHJlcy51cmwsXHJcbiAgICAgICAgICAgIC8vICAgICBcdGRhdGE6IHJlcy5kYXRhLFxyXG4gICAgICAgICAgICAvLyAgICAgXHRtZXRob2Q6IHJlcy5tZXRob2QsXHJcbiAgICAgICAgICAgIC8vICAgICBcdGhlYWRlcjogcmVzLmhlYWRlcixcclxuICAgICAgICAgICAgLy8gICAgIFx0aXNQcm9tcHQ6IHJlcy5pc1Byb21wdCwvL++8iOm7mOiupCB0cnVlIOivtOaYju+8muacrOaOpeWPo+aKm+WHuueahOmUmeivr+aYr+WQpuaPkOekuu+8iVxyXG4gICAgICAgICAgICAvLyAgICAgXHRsb2FkOiByZXMubG9hZCwvL++8iOm7mOiupCB0cnVlIOivtOaYju+8muacrOaOpeWPo+aYr+WQpuaPkOekuuWKoOi9veWKqOeUu++8iVxyXG4gICAgICAgICAgICAvLyAgICAgXHRpc0ZhY3Rvcnk6IHJlcy5pc0ZhY3RvcnksIC8v77yI6buY6K6kIHRydWUg6K+05piO77ya5pys5o6l5Y+j5piv5ZCm6LCD55So5YWs5YWx55qE5pWw5o2u5aSE55CG5pa55rOV77yM6K6+572uZmFsc2XlkI5pc1Byb21wdOWPguaVsOWwhuWkseWOu+S9nOeUqO+8iVxyXG4gICAgICAgICAgICAvLyAgICAgICAgIHJlc2VuZDogcmVzLnJlc2VuZCArPSAxIC8vIOW9k+WJjemHjeWPkeasoeaVsFxyXG4gICAgICAgICAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vICAgICAvLyDov5Tlm57mraPnoa7nmoTnu5PmnpwodGhlbuaOpeWPl+aVsOaNrilcclxuICAgICAgICAgICAgLy8gICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAvLyDov5Tlm57plJnor6/nmoTnu5PmnpwoY2F0Y2jmjqXlj5fmlbDmja4pXHJcbiAgICAgICAgICAgIC8vIHJldHVybiBQcm9taXNlLnJlamVjdCh7XHJcbiAgICAgICAgICAgIC8vIFx0c3RhdHVzQ29kZTogMCxcclxuICAgICAgICAgICAgLy8gXHRlcnJNc2c6IFwi44CQcmVxdWVzdOOAkVwiICsgIChodHRwRGF0YS5pbmZvIHx8IGh0dHBEYXRhLm1zZylcclxuICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuXHRcdFx0c3RvcmUuY29tbWl0KFwiZW1wdHlVc2VySW5mb1wiKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblx0XHRcdHZhciBjb250ZW50ID0gJ+atpOaXtuatpOWIu+mcgOimgeaCqOeZu+W9leWWlH4nO1xyXG5cdFx0XHRpZiAoaHR0cERhdGEuY29kZSA9PSBcIjEwMDBcIikge1xyXG5cdFx0XHRcdGNvbnRlbnQgPSAn5q2k5pe25q2k5Yi76ZyA6KaB5oKo55m75b2V5ZaUJztcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAobG9naW5Qb3B1cE51bSA8PSAwKSB7XHJcblx0XHRcdFx0bG9naW5Qb3B1cE51bSsrO1xyXG5cdFx0XHRcdHVuaS5zaG93TW9kYWwoe1xyXG5cdFx0XHRcdFx0dGl0bGU6ICfmuKnppqjmj5DnpLonLFxyXG5cdFx0XHRcdFx0Y29udGVudDogY29udGVudCxcclxuXHRcdFx0XHRcdGNvbmZpcm1UZXh0OiBcIuWOu+eZu+W9lVwiLFxyXG5cdFx0XHRcdFx0Y2FuY2VsVGV4dDogXCLlho3pgJvkvJpcIixcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0XHRsb2dpblBvcHVwTnVtLS07XHJcblx0XHRcdFx0XHRcdGlmIChyZXMuY29uZmlybSkge1xyXG5cdFx0XHRcdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdFx0XHRcdHVybDogXCIvcGFnZXMvdXNlci9sb2dpblwiXHJcblx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8g6L+U5Zue6ZSZ6K+v55qE57uT5p6cKGNhdGNo5o6l5Y+X5pWw5o2uKVxyXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3Qoe1xyXG5cdFx0XHRcdHN0YXR1c0NvZGU6IDAsXHJcblx0XHRcdFx0ZXJyTXNnOiBcIuOAkHJlcXVlc3TjgJFcIiArICAoaHR0cERhdGEuaW5mbyB8fCBodHRwRGF0YS5tc2cpLFxyXG5cdFx0XHRcdGRhdGE6IHJlcy5kYXRhXHJcblx0XHRcdH0pO1xyXG5cdFx0fSBlbHNlIGlmIChodHRwRGF0YS5jb2RlID09IFwiMTAwNFwiKSB7XHJcblx0XHRcdGlmIChsb2dpblBvcHVwTnVtIDw9IDApIHtcclxuXHRcdFx0XHRsb2dpblBvcHVwTnVtKys7XHJcblx0XHRcdFx0dW5pLnNob3dNb2RhbCh7XHJcblx0XHRcdFx0XHR0aXRsZTogXCLmj5DnpLpcIixcclxuXHRcdFx0XHRcdGNvbnRlbnQ6IFwi5oKo6L+Y5pyq57uR5a6a5omL5py65Y+377yM6K+35YWI57uR5a6aflwiLFxyXG5cdFx0XHRcdFx0Y29uZmlybVRleHQ6IFwi5Y6757uR5a6aXCIsXHJcblx0XHRcdFx0XHRjYW5jZWxUZXh0OiBcIuWGjemAm+S8mlwiLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0XHRsb2dpblBvcHVwTnVtLS07XHJcblx0XHRcdFx0XHRcdGlmIChyZXMuY29uZmlybSkge1xyXG5cdFx0XHRcdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdFx0XHRcdHVybDogJy9wYWdlcy91c2VyL2JpbmRQaG9uZSdcclxuXHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdC8vIOi/lOWbnumUmeivr+eahOe7k+aenChjYXRjaOaOpeWPl+aVsOaNrilcclxuXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KHtcclxuXHRcdFx0XHRzdGF0dXNDb2RlOiAwLFxyXG5cdFx0XHRcdGVyck1zZzogXCLjgJByZXF1ZXN044CRXCIgKyAoaHR0cERhdGEuaW5mbyB8fCBodHRwRGF0YS5tc2cpLFxyXG5cdFx0XHRcdGRhdGE6IHJlcy5kYXRhXHJcblx0XHRcdH0pO1xyXG5cdFx0fSBlbHNlIHsgLy/lhbbku5bplJnor6/mj5DnpLogICBcclxuXHRcdFx0aWYgKHJlcy5pc1Byb21wdCkge1xyXG5cdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0dGl0bGU6IGh0dHBEYXRhLmluZm8gfHwgaHR0cERhdGEubXNnLFxyXG5cdFx0XHRcdFx0aWNvbjogXCJub25lXCIsXHJcblx0XHRcdFx0XHRkdXJhdGlvbjogMzAwMFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdC8vIOi/lOWbnumUmeivr+eahOe7k+aenChjYXRjaOaOpeWPl+aVsOaNrilcclxuXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KHtcclxuXHRcdFx0XHRzdGF0dXNDb2RlOiAwLFxyXG5cdFx0XHRcdGVyck1zZzogXCLjgJByZXF1ZXN044CRXCIgKyAgKGh0dHBEYXRhLmluZm8gfHwgaHR0cERhdGEubXNnKSxcclxuXHRcdFx0XHRkYXRhOiByZXMuZGF0YVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuICAgICAgICBcclxuXHRcdC8qKioqKioqKirku6XkuIrlj6rmmK/mqKHmnb8o5Y+K5YWx5Y+C6ICDKe+8jOmcgOimgeW8gOWPkeiAheagueaNruWQhOiHqueahOaOpeWPo+i/lOWbnuexu+Wei+S/ruaUuSoqKioqKioqKi9cclxuXHJcblx0fSBlbHNlIHtcclxuXHRcdC8vIOi/lOWbnumUmeivr+eahOe7k+aenChjYXRjaOaOpeWPl+aVsOaNrilcclxuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdCh7XHJcblx0XHRcdHN0YXR1c0NvZGU6IHJlcy5yZXNwb25zZS5zdGF0dXNDb2RlLFxyXG5cdFx0XHRlcnJNc2c6IFwi44CQcmVxdWVzdOOAkeaVsOaNruW3peWOgumqjOivgeS4jemAmui/h1wiLFxyXG5cdFx0XHRkYXRhOiByZXMuZGF0YVxyXG5cdFx0fSk7XHJcblx0fVxyXG59O1xyXG4vLyDplJnor6/lm57osINcclxuJGh0dHAucmVxdWVzdEVycm9yID0gZnVuY3Rpb24oZSl7XHJcblx0Ly8gZS5zdGF0dXNDb2RlID09PSAwIOaYr+WPguaVsOaViOmqjOmUmeivr+aKm+WHuueahFxyXG5cdGlmKGUuc3RhdHVzQ29kZSA9PT0gMCl7XHJcblx0XHR0aHJvdyBlO1xyXG5cdH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcblx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0dGl0bGU6IFwi572R57uc6ZSZ6K+v77yM6K+35qOA5p+l5LiA5LiL572R57ucXCIsXHJcblx0XHRcdGljb246IFwibm9uZVwiXHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgJGh0dHA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///33\n");

/***/ }),
/* 34 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 35);

/***/ }),
/* 35 */
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 36);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 36 */
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),
/* 37 */
/*!********************************************************!*\
  !*** D:/uniapp/uniapp-simple/plugins/request/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\nvar _upload = _interopRequireDefault(__webpack_require__(/*! ./upload/upload.js */ 38));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /***************纯粹的数据请求（如果使用这种可以删除掉fileUpload.js）******************/ // import request from \"./core/request.js\";\n// export default request;\n/********数据请求同时继承了文件上传（包括七牛云上传）************/var _default = _upload.default;exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGx1Z2lucy9yZXF1ZXN0L2luZGV4LmpzIl0sIm5hbWVzIjpbInVwbG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFLQSx3Riw4RkFMQSxvRSxDQUNBO0FBQ0E7QUFFQSw0QyxlQUVlQSxlIiwiZmlsZSI6IjM3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKue6r+eyueeahOaVsOaNruivt+axgu+8iOWmguaenOS9v+eUqOi/meenjeWPr+S7peWIoOmZpOaOiWZpbGVVcGxvYWQuanPvvIkqKioqKioqKioqKioqKioqKiovXHJcbi8vIGltcG9ydCByZXF1ZXN0IGZyb20gXCIuL2NvcmUvcmVxdWVzdC5qc1wiO1xyXG4vLyBleHBvcnQgZGVmYXVsdCByZXF1ZXN0O1xyXG5cclxuLyoqKioqKioq5pWw5o2u6K+35rGC5ZCM5pe257un5om/5LqG5paH5Lu25LiK5Lyg77yI5YyF5ous5LiD54mb5LqR5LiK5Lyg77yJKioqKioqKioqKioqL1xyXG5pbXBvcnQgdXBsb2FkIGZyb20gXCIuL3VwbG9hZC91cGxvYWQuanNcIjtcclxuZXhwb3J0IGRlZmF1bHQgdXBsb2FkOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///37\n");

/***/ }),
/* 38 */
/*!****************************************************************!*\
  !*** D:/uniapp/uniapp-simple/plugins/request/upload/upload.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 34));var _request2 = _interopRequireDefault(__webpack_require__(/*! ./../core/request.js */ 39));\n\n\n\n\n\n\nvar _utils = __webpack_require__(/*! ./../core/utils.js */ 40);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError(\"Cannot call a class as a function\");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if (\"value\" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _inherits(subClass, superClass) {if (typeof superClass !== \"function\" && superClass !== null) {throw new TypeError(\"Super expression must either be null or a function\");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _createSuper(Derived) {var hasNativeReflectConstruct = _isNativeReflectConstruct();return function _createSuperInternal() {var Super = _getPrototypeOf(Derived),result;if (hasNativeReflectConstruct) {var NewTarget = _getPrototypeOf(this).constructor;result = Reflect.construct(Super, arguments, NewTarget);} else {result = Super.apply(this, arguments);}return _possibleConstructorReturn(this, result);};}function _possibleConstructorReturn(self, call) {if (call && (typeof call === \"object\" || typeof call === \"function\")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");}return self;}function _isNativeReflectConstruct() {if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;if (Reflect.construct.sham) return false;if (typeof Proxy === \"function\") return true;try {Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));return true;} catch (e) {return false;}}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}var _require = __webpack_require__(/*! ./utils */ 41),chooseImage = _require.chooseImage,chooseVideo = _require.chooseVideo,qiniuUpload = _require.qiniuUpload,urlUpload = _require.urlUpload;var\n\n\nfileUpload = /*#__PURE__*/function (_request) {_inherits(fileUpload, _request);var _super = _createSuper(fileUpload);\n  function fileUpload(props) {_classCallCheck(this, fileUpload);\n    // 调用实现父类的构造函数\n    return _super.call(this, props);\n  }\n  //七牛云上传图片\n  _createClass(fileUpload, [{ key: \"qnImgUpload\", value: function () {var _qnImgUpload = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var options,files,_args = arguments;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:options = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};_context.prev = 1;_context.next = 4;return (\n\n\n                  chooseImage(options));case 4:files = _context.sent;\n                // 选择完成回调\n                options.onSelectComplete && options.onSelectComplete(files);_context.next = 12;break;case 8:_context.prev = 8;_context.t0 = _context[\"catch\"](1);\n\n                this.requestError && this.requestError(_context.t0);return _context.abrupt(\"return\",\n                Promise.reject(_context.t0));case 12:if (!\n\n                files) {_context.next = 14;break;}return _context.abrupt(\"return\",\n                this.qnFileUpload(_objectSpread(_objectSpread({},\n                options), {}, {\n                  files: files })));case 14:case \"end\":return _context.stop();}}}, _callee, this, [[1, 8]]);}));function qnImgUpload() {return _qnImgUpload.apply(this, arguments);}return qnImgUpload;}()\n\n\n\n    //七牛云上传视频\n  }, { key: \"qnVideoUpload\", value: function () {var _qnVideoUpload = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var options,files,_args2 = arguments;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:options = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {};_context2.prev = 1;_context2.next = 4;return (\n\n\n                  chooseVideo(options));case 4:files = _context2.sent;\n                // 选择完成回调\n                options.onSelectComplete && options.onSelectComplete(files);_context2.next = 12;break;case 8:_context2.prev = 8;_context2.t0 = _context2[\"catch\"](1);\n\n                this.requestError && this.requestError(_context2.t0);return _context2.abrupt(\"return\",\n                Promise.reject(_context2.t0));case 12:if (!\n\n                files) {_context2.next = 14;break;}return _context2.abrupt(\"return\",\n                this.qnFileUpload(_objectSpread(_objectSpread({},\n                options), {}, {\n                  files: files })));case 14:case \"end\":return _context2.stop();}}}, _callee2, this, [[1, 8]]);}));function qnVideoUpload() {return _qnVideoUpload.apply(this, arguments);}return qnVideoUpload;}()\n\n\n\n\n    //七牛云文件上传（支持多张上传）\n  }, { key: \"qnFileUpload\", value: function () {var _qnFileUpload = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {var options,requestInfo,requestStart,changekeys,requestResult,_args3 = arguments;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:options = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {};_context3.prev = 1;\n\n\n                // 数据合并\n                requestInfo = _objectSpread(_objectSpread(_objectSpread({},\n                this.config),\n                options), {}, {\n                  header: {},\n                  method: \"FILE\" });\n\n                //请求前回调\n                if (!this.requestStart) {_context3.next = 11;break;}\n                requestStart = this.requestStart(requestInfo);if (!(\n                typeof requestStart == \"object\")) {_context3.next = 10;break;}\n                changekeys = [\"load\", \"files\"];\n                changekeys.forEach(function (key) {\n                  requestInfo[key] = requestStart[key];\n                });_context3.next = 11;break;case 10:throw (\n\n                  {\n                    errMsg: \"【request】请求开始拦截器未通过\",\n                    statusCode: 0,\n                    data: requestInfo.data,\n                    method: requestInfo.method,\n                    header: requestInfo.header,\n                    url: requestInfo.url });case 11:_context3.next = 13;return (\n\n\n\n                  qiniuUpload(requestInfo, this.getQnToken));case 13:requestResult = _context3.sent;return _context3.abrupt(\"return\",\n                Promise.resolve(requestResult));case 17:_context3.prev = 17;_context3.t0 = _context3[\"catch\"](1);\n\n                this.requestError && this.requestError(_context3.t0);return _context3.abrupt(\"return\",\n                Promise.reject(_context3.t0));case 21:_context3.prev = 21;\n\n                this.requestEnd && this.requestEnd(requestInfo);return _context3.finish(21);case 24:case \"end\":return _context3.stop();}}}, _callee3, this, [[1, 17, 21, 24]]);}));function qnFileUpload() {return _qnFileUpload.apply(this, arguments);}return qnFileUpload;}()\n\n\n    //本地服务器图片上传\n  }, { key: \"urlImgUpload\", value: function () {var _urlImgUpload = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {var options,_args4 = arguments;return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:\n                options = {};\n                if (_args4[0]) {\n                  if (typeof _args4[0] == \"string\") {\n                    options.url = _args4[0];\n                  } else if (typeof _args4[0] == \"object\") {\n                    options = Object.assign(options, _args4[0]);\n                  }\n                }\n                if (_args4[1] && typeof _args4[1] == \"object\") {\n                  options = Object.assign(options, _args4[1]);\n                }_context4.prev = 3;_context4.next = 6;return (\n\n                  chooseImage(options));case 6:options.files = _context4.sent;\n                // 选择完成回调\n                options.onSelectComplete && options.onSelectComplete(options.files);_context4.next = 14;break;case 10:_context4.prev = 10;_context4.t0 = _context4[\"catch\"](3);\n\n                this.requestError && this.requestError(_context4.t0);return _context4.abrupt(\"return\",\n                Promise.reject(_context4.t0));case 14:if (!\n\n                options.files) {_context4.next = 16;break;}return _context4.abrupt(\"return\",\n                this.urlFileUpload(options));case 16:case \"end\":return _context4.stop();}}}, _callee4, this, [[3, 10]]);}));function urlImgUpload() {return _urlImgUpload.apply(this, arguments);}return urlImgUpload;}()\n\n\n    //本地服务器上传视频\n  }, { key: \"urlVideoUpload\", value: function () {var _urlVideoUpload = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5() {var options,_args5 = arguments;return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:\n                options = {};\n                if (_args5[0]) {\n                  if (typeof _args5[0] == \"string\") {\n                    options.url = _args5[0];\n                  } else if (typeof _args5[0] == \"object\") {\n                    options = Object.assign(options, _args5[0]);\n                  }\n                }\n                if (_args5[1] && typeof _args5[1] == \"object\") {\n                  options = Object.assign(options, _args5[1]);\n                }_context5.prev = 3;_context5.next = 6;return (\n\n                  chooseVideo(options));case 6:options.files = _context5.sent;\n                // 选择完成回调\n                options.onSelectComplete && options.onSelectComplete(options.files);_context5.next = 14;break;case 10:_context5.prev = 10;_context5.t0 = _context5[\"catch\"](3);\n\n                this.requestError && this.requestError(_context5.t0);return _context5.abrupt(\"return\",\n                Promise.reject(_context5.t0));case 14:if (!\n\n                options.files) {_context5.next = 16;break;}return _context5.abrupt(\"return\",\n                this.urlFileUpload(options));case 16:case \"end\":return _context5.stop();}}}, _callee5, this, [[3, 10]]);}));function urlVideoUpload() {return _urlVideoUpload.apply(this, arguments);}return urlVideoUpload;}()\n\n\n    //本地服务器文件上传方法\n  }, { key: \"urlFileUpload\", value: function () {var _urlFileUpload = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6() {var requestInfo,runRequestStart,requestStart,changekeys,requestResult,_args6 = arguments;return _regenerator.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:\n                requestInfo = {\n                  method: \"FILE\" };\n\n                if (_args6[0]) {\n                  if (typeof _args6[0] == \"string\") {\n                    requestInfo.url = _args6[0];\n                  } else if (typeof _args6[0] == \"object\") {\n                    requestInfo = Object.assign(requestInfo, _args6[0]);\n                  }\n                }\n                if (_args6[1] && typeof _args6[1] == \"object\") {\n                  requestInfo = Object.assign(requestInfo, _args6[1]);\n                }\n                if (!requestInfo.url && this.defaultUploadUrl) {\n                  requestInfo.url = this.defaultUploadUrl;\n                }\n                // 请求数据\n                // 是否运行过请求开始钩子\n                runRequestStart = false;_context6.prev = 5;if (\n\n                requestInfo.url) {_context6.next = 8;break;}throw (\n                  {\n                    errMsg: \"【request】文件上传缺失数据url\",\n                    statusCode: 0,\n                    data: requestInfo.data,\n                    method: requestInfo.method,\n                    header: requestInfo.header,\n                    url: requestInfo.url });case 8:\n\n\n                // 数据合并\n                requestInfo = (0, _utils.mergeConfig)(this, requestInfo);\n                // 代表之前运行到这里\n                runRequestStart = true;\n                //请求前回调\n                if (!this.requestStart) {_context6.next = 18;break;}\n                requestStart = this.requestStart(requestInfo);if (!(\n                typeof requestStart == \"object\")) {_context6.next = 17;break;}\n                changekeys = [\"data\", \"header\", \"isPrompt\", \"load\", \"isFactory\", \"files\"];\n                changekeys.forEach(function (key) {\n                  requestInfo[key] = requestStart[key];\n                });_context6.next = 18;break;case 17:throw (\n\n                  {\n                    errMsg: \"【request】请求开始拦截器未通过\",\n                    statusCode: 0,\n                    data: requestInfo.data,\n                    method: requestInfo.method,\n                    header: requestInfo.header,\n                    url: requestInfo.url });case 18:_context6.next = 20;return (\n\n\n\n                  urlUpload(requestInfo, this.dataFactory));case 20:requestResult = _context6.sent;return _context6.abrupt(\"return\",\n                Promise.resolve(requestResult));case 24:_context6.prev = 24;_context6.t0 = _context6[\"catch\"](5);\n\n                this.requestError && this.requestError(_context6.t0);return _context6.abrupt(\"return\",\n                Promise.reject(_context6.t0));case 28:_context6.prev = 28;\n\n                if (runRequestStart) {\n                  this.requestEnd && this.requestEnd(requestInfo);\n                }return _context6.finish(28);case 31:case \"end\":return _context6.stop();}}}, _callee6, this, [[5, 24, 28, 31]]);}));function urlFileUpload() {return _urlFileUpload.apply(this, arguments);}return urlFileUpload;}() }]);return fileUpload;}(_request2.default);exports.default = fileUpload;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGx1Z2lucy9yZXF1ZXN0L3VwbG9hZC91cGxvYWQuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsImNob29zZUltYWdlIiwiY2hvb3NlVmlkZW8iLCJxaW5pdVVwbG9hZCIsInVybFVwbG9hZCIsImZpbGVVcGxvYWQiLCJwcm9wcyIsIm9wdGlvbnMiLCJmaWxlcyIsIm9uU2VsZWN0Q29tcGxldGUiLCJyZXF1ZXN0RXJyb3IiLCJQcm9taXNlIiwicmVqZWN0IiwicW5GaWxlVXBsb2FkIiwicmVxdWVzdEluZm8iLCJjb25maWciLCJoZWFkZXIiLCJtZXRob2QiLCJyZXF1ZXN0U3RhcnQiLCJjaGFuZ2VrZXlzIiwiZm9yRWFjaCIsImtleSIsImVyck1zZyIsInN0YXR1c0NvZGUiLCJkYXRhIiwidXJsIiwiZ2V0UW5Ub2tlbiIsInJlcXVlc3RSZXN1bHQiLCJyZXNvbHZlIiwicmVxdWVzdEVuZCIsIk9iamVjdCIsImFzc2lnbiIsInVybEZpbGVVcGxvYWQiLCJkZWZhdWx0VXBsb2FkVXJsIiwicnVuUmVxdWVzdFN0YXJ0IiwiZGF0YUZhY3RvcnkiLCJyZXF1ZXN0Il0sIm1hcHBpbmdzIjoiMk1BQUE7Ozs7Ozs7QUFPQSwrRCw4cElBRElBLG1CQUFPLENBQUMsaUJBQUQsQyxDQUpWQyxXLFlBQUFBLFcsQ0FDQUMsVyxZQUFBQSxXLENBQ0FDLFcsWUFBQUEsVyxDQUNBQyxTLFlBQUFBLFM7OztBQUtvQkMsVTtBQUNwQixzQkFBWUMsS0FBWixFQUFtQjtBQUNsQjtBQURrQiw2QkFFWkEsS0FGWTtBQUdsQjtBQUNEO21VQUNrQkMsTywyREFBVSxFOzs7QUFHWk4sNkJBQVcsQ0FBQ00sT0FBRCxDLFNBQXpCQyxLO0FBQ0E7QUFDQUQsdUJBQU8sQ0FBQ0UsZ0JBQVIsSUFBNEJGLE9BQU8sQ0FBQ0UsZ0JBQVIsQ0FBeUJELEtBQXpCLENBQTVCLEM7O0FBRUEscUJBQUtFLFlBQUwsSUFBcUIsS0FBS0EsWUFBTCxhQUFyQixDO0FBQ09DLHVCQUFPLENBQUND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Q0FBbUIsVUFBQUMsR0FBRyxFQUFJO0FBQ3pCUCw2QkFBVyxDQUFDTyxHQUFELENBQVgsR0FBbUJILFlBQVksQ0FBQ0csR0FBRCxDQUEvQjtBQUNBLGlCQUZELEU7O0FBSU07QUFDTEMsMEJBQU0sRUFBRSxxQkFESDtBQUVMQyw4QkFBVSxFQUFFLENBRlA7QUFHTEMsd0JBQUksRUFBRVYsV0FBVyxDQUFDVSxJQUhiO0FBSUxQLDBCQUFNLEVBQUVILFdBQVcsQ0FBQ0csTUFKZjtBQUtMRCwwQkFBTSxFQUFFRixXQUFXLENBQUNFLE1BTGY7QUFNTFMsdUJBQUcsRUFBRVgsV0FBVyxDQUFDVyxHQU5aLEU7Ozs7QUFVa0JyQiwyQkFBUyxDQUFDVSxXQUFELEVBQWMsS0FBS3FCLFdBQW5CLEMsVUFBL0JSLGE7QUFDR2hCLHVCQUFPLENBQUNpQixPQUFSLENBQWdCRCxhQUFoQixDOztBQUVQLHFCQUFLakIsWUFBTCxJQUFxQixLQUFLQSxZQUFMLGNBQXJCLEM7QUFDT0MsdUJBQU8sQ0FBQ0MsTUFBUixjOztBQUVQLG9CQUFJc0IsZUFBSixFQUFxQjtBQUNwQix1QkFBS0wsVUFBTCxJQUFtQixLQUFLQSxVQUFMLENBQWdCZixXQUFoQixDQUFuQjtBQUNBLGlCLDRPQWxNb0NzQixpQiIsImZpbGUiOiIzOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZXF1ZXN0IGZyb20gXCIuLy4uL2NvcmUvcmVxdWVzdC5qc1wiO1xyXG5jb25zdCB7XHJcblx0Y2hvb3NlSW1hZ2UsXHJcblx0Y2hvb3NlVmlkZW8sXHJcblx0cWluaXVVcGxvYWQsXHJcblx0dXJsVXBsb2FkXHJcbn0gPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcclxuaW1wb3J0IHtcclxuXHRtZXJnZUNvbmZpZ1xyXG59IGZyb20gXCIuLy4uL2NvcmUvdXRpbHMuanNcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZmlsZVVwbG9hZCBleHRlbmRzIHJlcXVlc3Qge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHQvLyDosIPnlKjlrp7njrDniLbnsbvnmoTmnoTpgKDlh73mlbBcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHR9XHJcblx0Ly/kuIPniZvkupHkuIrkvKDlm77niYdcclxuXHRhc3luYyBxbkltZ1VwbG9hZChvcHRpb25zID0ge30pIHtcclxuXHRcdGxldCBmaWxlcztcclxuXHRcdHRyeSB7XHJcblx0XHRcdGZpbGVzID0gYXdhaXQgY2hvb3NlSW1hZ2Uob3B0aW9ucyk7XHJcblx0XHRcdC8vIOmAieaLqeWujOaIkOWbnuiwg1xyXG5cdFx0XHRvcHRpb25zLm9uU2VsZWN0Q29tcGxldGUgJiYgb3B0aW9ucy5vblNlbGVjdENvbXBsZXRlKGZpbGVzKTtcclxuXHRcdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0XHR0aGlzLnJlcXVlc3RFcnJvciAmJiB0aGlzLnJlcXVlc3RFcnJvcihlcnIpO1xyXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcclxuXHRcdH1cclxuXHRcdGlmIChmaWxlcykge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5xbkZpbGVVcGxvYWQoe1xyXG5cdFx0XHRcdC4uLm9wdGlvbnMsXHJcblx0XHRcdFx0ZmlsZXM6IGZpbGVzXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHQvL+S4g+eJm+S6keS4iuS8oOinhumikVxyXG5cdGFzeW5jIHFuVmlkZW9VcGxvYWQob3B0aW9ucyA9IHt9KSB7XHJcblx0XHRsZXQgZmlsZXM7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRmaWxlcyA9IGF3YWl0IGNob29zZVZpZGVvKG9wdGlvbnMpO1xyXG5cdFx0XHQvLyDpgInmi6nlrozmiJDlm57osINcclxuXHRcdFx0b3B0aW9ucy5vblNlbGVjdENvbXBsZXRlICYmIG9wdGlvbnMub25TZWxlY3RDb21wbGV0ZShmaWxlcyk7XHJcblx0XHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdFx0dGhpcy5yZXF1ZXN0RXJyb3IgJiYgdGhpcy5yZXF1ZXN0RXJyb3IoZXJyKTtcclxuXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XHJcblx0XHR9XHJcblx0XHRpZiAoZmlsZXMpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMucW5GaWxlVXBsb2FkKHtcclxuXHRcdFx0XHQuLi5vcHRpb25zLFxyXG5cdFx0XHRcdGZpbGVzOiBmaWxlc1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8v5LiD54mb5LqR5paH5Lu25LiK5Lyg77yI5pSv5oyB5aSa5byg5LiK5Lyg77yJXHJcblx0YXN5bmMgcW5GaWxlVXBsb2FkKG9wdGlvbnMgPSB7fSkge1xyXG5cdFx0bGV0IHJlcXVlc3RJbmZvO1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0Ly8g5pWw5o2u5ZCI5bm2XHJcblx0XHRcdHJlcXVlc3RJbmZvID0ge1xyXG5cdFx0XHRcdC4uLnRoaXMuY29uZmlnLFxyXG5cdFx0XHRcdC4uLm9wdGlvbnMsXHJcblx0XHRcdFx0aGVhZGVyOiB7fSxcclxuXHRcdFx0XHRtZXRob2Q6IFwiRklMRVwiXHJcblx0XHRcdH07XHJcblx0XHRcdC8v6K+35rGC5YmN5Zue6LCDXHJcblx0XHRcdGlmICh0aGlzLnJlcXVlc3RTdGFydCkge1xyXG5cdFx0XHRcdGxldCByZXF1ZXN0U3RhcnQgPSB0aGlzLnJlcXVlc3RTdGFydChyZXF1ZXN0SW5mbyk7XHJcblx0XHRcdFx0aWYgKHR5cGVvZiByZXF1ZXN0U3RhcnQgPT0gXCJvYmplY3RcIikge1xyXG5cdFx0XHRcdFx0bGV0IGNoYW5nZWtleXMgPSBbXCJsb2FkXCIsIFwiZmlsZXNcIl07XHJcblx0XHRcdFx0XHRjaGFuZ2VrZXlzLmZvckVhY2goa2V5ID0+IHtcclxuXHRcdFx0XHRcdFx0cmVxdWVzdEluZm9ba2V5XSA9IHJlcXVlc3RTdGFydFtrZXldO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRocm93IHtcclxuXHRcdFx0XHRcdFx0ZXJyTXNnOiBcIuOAkHJlcXVlc3TjgJHor7fmsYLlvIDlp4vmi6bmiKrlmajmnKrpgJrov4dcIixcclxuXHRcdFx0XHRcdFx0c3RhdHVzQ29kZTogMCxcclxuXHRcdFx0XHRcdFx0ZGF0YTogcmVxdWVzdEluZm8uZGF0YSxcclxuXHRcdFx0XHRcdFx0bWV0aG9kOiByZXF1ZXN0SW5mby5tZXRob2QsXHJcblx0XHRcdFx0XHRcdGhlYWRlcjogcmVxdWVzdEluZm8uaGVhZGVyLFxyXG5cdFx0XHRcdFx0XHR1cmw6IHJlcXVlc3RJbmZvLnVybCxcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0bGV0IHJlcXVlc3RSZXN1bHQgPSBhd2FpdCBxaW5pdVVwbG9hZChyZXF1ZXN0SW5mbywgdGhpcy5nZXRRblRva2VuKTtcclxuXHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXF1ZXN0UmVzdWx0KTtcclxuXHRcdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0XHR0aGlzLnJlcXVlc3RFcnJvciAmJiB0aGlzLnJlcXVlc3RFcnJvcihlcnIpO1xyXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcclxuXHRcdH0gZmluYWxseSB7XHJcblx0XHRcdHRoaXMucmVxdWVzdEVuZCAmJiB0aGlzLnJlcXVlc3RFbmQocmVxdWVzdEluZm8pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHQvL+acrOWcsOacjeWKoeWZqOWbvueJh+S4iuS8oFxyXG5cdGFzeW5jIHVybEltZ1VwbG9hZCgpIHtcclxuXHRcdGxldCBvcHRpb25zID0ge307XHJcblx0XHRpZiAoYXJndW1lbnRzWzBdKSB7XHJcblx0XHRcdGlmICh0eXBlb2YoYXJndW1lbnRzWzBdKSA9PSBcInN0cmluZ1wiKSB7XHJcblx0XHRcdFx0b3B0aW9ucy51cmwgPSBhcmd1bWVudHNbMF07XHJcblx0XHRcdH0gZWxzZSBpZiAodHlwZW9mKGFyZ3VtZW50c1swXSkgPT0gXCJvYmplY3RcIikge1xyXG5cdFx0XHRcdG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKG9wdGlvbnMsIGFyZ3VtZW50c1swXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmIChhcmd1bWVudHNbMV0gJiYgdHlwZW9mKGFyZ3VtZW50c1sxXSkgPT0gXCJvYmplY3RcIikge1xyXG5cdFx0XHRvcHRpb25zID0gT2JqZWN0LmFzc2lnbihvcHRpb25zLCBhcmd1bWVudHNbMV0pO1xyXG5cdFx0fVxyXG5cdFx0dHJ5IHtcclxuXHRcdFx0b3B0aW9ucy5maWxlcyA9IGF3YWl0IGNob29zZUltYWdlKG9wdGlvbnMpO1xyXG5cdFx0XHQvLyDpgInmi6nlrozmiJDlm57osINcclxuXHRcdFx0b3B0aW9ucy5vblNlbGVjdENvbXBsZXRlICYmIG9wdGlvbnMub25TZWxlY3RDb21wbGV0ZShvcHRpb25zLmZpbGVzKTtcclxuXHRcdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0XHR0aGlzLnJlcXVlc3RFcnJvciAmJiB0aGlzLnJlcXVlc3RFcnJvcihlcnIpO1xyXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcclxuXHRcdH1cclxuXHRcdGlmIChvcHRpb25zLmZpbGVzKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLnVybEZpbGVVcGxvYWQob3B0aW9ucyk7XHJcblx0XHR9XHJcblx0fVxyXG5cdC8v5pys5Zyw5pyN5Yqh5Zmo5LiK5Lyg6KeG6aKRXHJcblx0YXN5bmMgdXJsVmlkZW9VcGxvYWQoKSB7XHJcblx0XHRsZXQgb3B0aW9ucyA9IHt9O1xyXG5cdFx0aWYgKGFyZ3VtZW50c1swXSkge1xyXG5cdFx0XHRpZiAodHlwZW9mKGFyZ3VtZW50c1swXSkgPT0gXCJzdHJpbmdcIikge1xyXG5cdFx0XHRcdG9wdGlvbnMudXJsID0gYXJndW1lbnRzWzBdO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHR5cGVvZihhcmd1bWVudHNbMF0pID09IFwib2JqZWN0XCIpIHtcclxuXHRcdFx0XHRvcHRpb25zID0gT2JqZWN0LmFzc2lnbihvcHRpb25zLCBhcmd1bWVudHNbMF0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAoYXJndW1lbnRzWzFdICYmIHR5cGVvZihhcmd1bWVudHNbMV0pID09IFwib2JqZWN0XCIpIHtcclxuXHRcdFx0b3B0aW9ucyA9IE9iamVjdC5hc3NpZ24ob3B0aW9ucywgYXJndW1lbnRzWzFdKTtcclxuXHRcdH1cclxuXHRcdHRyeSB7XHJcblx0XHRcdG9wdGlvbnMuZmlsZXMgPSBhd2FpdCBjaG9vc2VWaWRlbyhvcHRpb25zKTtcclxuXHRcdFx0Ly8g6YCJ5oup5a6M5oiQ5Zue6LCDXHJcblx0XHRcdG9wdGlvbnMub25TZWxlY3RDb21wbGV0ZSAmJiBvcHRpb25zLm9uU2VsZWN0Q29tcGxldGUob3B0aW9ucy5maWxlcyk7XHJcblx0XHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdFx0dGhpcy5yZXF1ZXN0RXJyb3IgJiYgdGhpcy5yZXF1ZXN0RXJyb3IoZXJyKTtcclxuXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XHJcblx0XHR9XHJcblx0XHRpZiAob3B0aW9ucy5maWxlcykge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy51cmxGaWxlVXBsb2FkKG9wdGlvbnMpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHQvL+acrOWcsOacjeWKoeWZqOaWh+S7tuS4iuS8oOaWueazlVxyXG5cdGFzeW5jIHVybEZpbGVVcGxvYWQoKSB7XHJcblx0XHRsZXQgcmVxdWVzdEluZm8gPSB7XHJcblx0XHRcdG1ldGhvZDogXCJGSUxFXCJcclxuXHRcdH07XHJcblx0XHRpZiAoYXJndW1lbnRzWzBdKSB7XHJcblx0XHRcdGlmICh0eXBlb2YoYXJndW1lbnRzWzBdKSA9PSBcInN0cmluZ1wiKSB7XHJcblx0XHRcdFx0cmVxdWVzdEluZm8udXJsID0gYXJndW1lbnRzWzBdO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHR5cGVvZihhcmd1bWVudHNbMF0pID09IFwib2JqZWN0XCIpIHtcclxuXHRcdFx0XHRyZXF1ZXN0SW5mbyA9IE9iamVjdC5hc3NpZ24ocmVxdWVzdEluZm8sIGFyZ3VtZW50c1swXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmIChhcmd1bWVudHNbMV0gJiYgdHlwZW9mKGFyZ3VtZW50c1sxXSkgPT0gXCJvYmplY3RcIikge1xyXG5cdFx0XHRyZXF1ZXN0SW5mbyA9IE9iamVjdC5hc3NpZ24ocmVxdWVzdEluZm8sIGFyZ3VtZW50c1sxXSk7XHJcblx0XHR9XHJcblx0XHRpZiAoIXJlcXVlc3RJbmZvLnVybCAmJiB0aGlzLmRlZmF1bHRVcGxvYWRVcmwpIHtcclxuXHRcdFx0cmVxdWVzdEluZm8udXJsID0gdGhpcy5kZWZhdWx0VXBsb2FkVXJsO1xyXG5cdFx0fVxyXG5cdFx0Ly8g6K+35rGC5pWw5o2uXHJcblx0XHQvLyDmmK/lkKbov5DooYzov4for7fmsYLlvIDlp4vpkqnlrZBcclxuXHRcdGxldCBydW5SZXF1ZXN0U3RhcnQgPSBmYWxzZTtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGlmICghcmVxdWVzdEluZm8udXJsKSB7XHJcblx0XHRcdFx0dGhyb3cge1xyXG5cdFx0XHRcdFx0ZXJyTXNnOiBcIuOAkHJlcXVlc3TjgJHmlofku7bkuIrkvKDnvLrlpLHmlbDmja51cmxcIixcclxuXHRcdFx0XHRcdHN0YXR1c0NvZGU6IDAsXHJcblx0XHRcdFx0XHRkYXRhOiByZXF1ZXN0SW5mby5kYXRhLFxyXG5cdFx0XHRcdFx0bWV0aG9kOiByZXF1ZXN0SW5mby5tZXRob2QsXHJcblx0XHRcdFx0XHRoZWFkZXI6IHJlcXVlc3RJbmZvLmhlYWRlcixcclxuXHRcdFx0XHRcdHVybDogcmVxdWVzdEluZm8udXJsLFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHQvLyDmlbDmja7lkIjlubZcclxuXHRcdFx0cmVxdWVzdEluZm8gPSBtZXJnZUNvbmZpZyh0aGlzLCByZXF1ZXN0SW5mbyk7XHJcblx0XHRcdC8vIOS7o+ihqOS5i+WJjei/kOihjOWIsOi/memHjFxyXG5cdFx0XHRydW5SZXF1ZXN0U3RhcnQgPSB0cnVlO1xyXG5cdFx0XHQvL+ivt+axguWJjeWbnuiwg1xyXG5cdFx0XHRpZiAodGhpcy5yZXF1ZXN0U3RhcnQpIHtcclxuXHRcdFx0XHRsZXQgcmVxdWVzdFN0YXJ0ID0gdGhpcy5yZXF1ZXN0U3RhcnQocmVxdWVzdEluZm8pO1xyXG5cdFx0XHRcdGlmICh0eXBlb2YgcmVxdWVzdFN0YXJ0ID09IFwib2JqZWN0XCIpIHtcclxuXHRcdFx0XHRcdGxldCBjaGFuZ2VrZXlzID0gW1wiZGF0YVwiLCBcImhlYWRlclwiLCBcImlzUHJvbXB0XCIsIFwibG9hZFwiLCBcImlzRmFjdG9yeVwiLCBcImZpbGVzXCJdO1xyXG5cdFx0XHRcdFx0Y2hhbmdla2V5cy5mb3JFYWNoKGtleSA9PiB7XHJcblx0XHRcdFx0XHRcdHJlcXVlc3RJbmZvW2tleV0gPSByZXF1ZXN0U3RhcnRba2V5XTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aHJvdyB7XHJcblx0XHRcdFx0XHRcdGVyck1zZzogXCLjgJByZXF1ZXN044CR6K+35rGC5byA5aeL5oum5oiq5Zmo5pyq6YCa6L+HXCIsXHJcblx0XHRcdFx0XHRcdHN0YXR1c0NvZGU6IDAsXHJcblx0XHRcdFx0XHRcdGRhdGE6IHJlcXVlc3RJbmZvLmRhdGEsXHJcblx0XHRcdFx0XHRcdG1ldGhvZDogcmVxdWVzdEluZm8ubWV0aG9kLFxyXG5cdFx0XHRcdFx0XHRoZWFkZXI6IHJlcXVlc3RJbmZvLmhlYWRlcixcclxuXHRcdFx0XHRcdFx0dXJsOiByZXF1ZXN0SW5mby51cmwsXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGxldCByZXF1ZXN0UmVzdWx0ID0gYXdhaXQgdXJsVXBsb2FkKHJlcXVlc3RJbmZvLCB0aGlzLmRhdGFGYWN0b3J5KTtcclxuXHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXF1ZXN0UmVzdWx0KTtcclxuXHRcdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0XHR0aGlzLnJlcXVlc3RFcnJvciAmJiB0aGlzLnJlcXVlc3RFcnJvcihlcnIpO1xyXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcclxuXHRcdH0gZmluYWxseSB7XHJcblx0XHRcdGlmIChydW5SZXF1ZXN0U3RhcnQpIHtcclxuXHRcdFx0XHR0aGlzLnJlcXVlc3RFbmQgJiYgdGhpcy5yZXF1ZXN0RW5kKHJlcXVlc3RJbmZvKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///38\n");

/***/ }),
/* 39 */
/*!***************************************************************!*\
  !*** D:/uniapp/uniapp-simple/plugins/request/core/request.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 34));var _utils = __webpack_require__(/*! ./utils.js */ 40);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError(\"Cannot call a class as a function\");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if (\"value\" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var\nrequest = /*#__PURE__*/function () {\n  function request(options) {_classCallCheck(this, request);\n    //请求公共地址\n    this.baseUrl = options.baseUrl || \"\";\n    //公共文件上传请求地址\n    this.fileUrl = options.fileUrl || \"\";\n    // 服务器上传图片默认url\n    this.defaultUploadUrl = options.defaultUploadUrl || \"\";\n    //默认请求头\n    this.header = options.header || {};\n    //默认配置\n    this.config = options.config || {\n      isPrompt: true,\n      load: true,\n      isFactory: true,\n      resend: 0 };\n\n  }\n  //post请求\n  _createClass(request, [{ key: \"post\", value: function post() {var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n      return this.request(_objectSpread({\n        method: \"POST\",\n        data: data,\n        url: url },\n      options));\n\n    }\n\n    //get请求\n  }, { key: \"get\", value: function get() {var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n      return this.request(_objectSpread({\n        method: \"GET\",\n        data: data,\n        url: url },\n      options));\n\n    }\n\n    //put请求\n  }, { key: \"put\", value: function put() {var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n      return this.request(_objectSpread({\n        method: \"PUT\",\n        data: data,\n        url: url },\n      options));\n\n    }\n\n    //delete请求\n  }, { key: \"delete\", value: function _delete() {var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n      return this.request(_objectSpread({\n        method: \"DELETE\",\n        data: data,\n        url: url },\n      options));\n\n    }\n    //jsonp请求(只限于H5使用)\n  }, { key: \"jsonp\", value: function jsonp() {var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n      return this.request(_objectSpread({\n        method: \"JSONP\",\n        data: data,\n        url: url },\n      options));\n\n    }\n    //接口请求方法\n  }, { key: \"request\", value: function () {var _request = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(data) {var requestInfo, runRequestStart, requestStart, changekeys, requestResult, result;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:\n                // 请求数据\n\n\n                runRequestStart = false;_context.prev = 1;if (\n\n                data.url) {_context.next = 4;break;}throw (\n                  { errMsg: \"【request】缺失数据url\", statusCode: 0 });case 4:\n\n                // 数据合并\n                requestInfo = (0, _utils.mergeConfig)(this, data);\n                // 代表之前运行到这里\n                runRequestStart = true;\n                //请求前回调\n                if (!this.requestStart) {_context.next = 14;break;}\n                requestStart = this.requestStart(requestInfo);if (!(\n                typeof requestStart == \"object\")) {_context.next = 13;break;}\n                changekeys = [\"data\", \"header\", \"isPrompt\", \"load\", \"isFactory\"];\n                changekeys.forEach(function (key) {\n                  requestInfo[key] = requestStart[key];\n                });_context.next = 14;break;case 13:throw (\n\n                  {\n                    errMsg: \"【request】请求开始拦截器未通过\",\n                    statusCode: 0,\n                    data: requestInfo.data,\n                    method: requestInfo.method,\n                    header: requestInfo.header,\n                    url: requestInfo.url });case 14:\n\n\n\n                requestResult = {};if (!(\n                requestInfo.method == \"JSONP\")) {_context.next = 21;break;}_context.next = 18;return (\n                  (0, _utils.jsonpRequest)(requestInfo));case 18:requestResult = _context.sent;_context.next = 24;break;case 21:_context.next = 23;return (\n\n                  (0, _utils.dispatchRequest)(requestInfo));case 23:requestResult = _context.sent;case 24:if (!(\n\n\n                requestInfo.isFactory && this.dataFactory)) {_context.next = 31;break;}_context.next = 27;return (\n\n                  this.dataFactory(_objectSpread(_objectSpread({},\n                  requestInfo), {}, {\n                    response: requestResult })));case 27:result = _context.sent;return _context.abrupt(\"return\",\n\n                Promise.resolve(result));case 31:return _context.abrupt(\"return\",\n\n                Promise.resolve(requestResult));case 32:_context.next = 38;break;case 34:_context.prev = 34;_context.t0 = _context[\"catch\"](1);\n\n\n                this.requestError && this.requestError(_context.t0);return _context.abrupt(\"return\",\n                Promise.reject(_context.t0));case 38:_context.prev = 38;\n\n                // 如果请求开始未运行到，请求结束也不运行\n                if (runRequestStart) {\n                  this.requestEnd && this.requestEnd(requestInfo);\n                }return _context.finish(38);case 41:case \"end\":return _context.stop();}}}, _callee, this, [[1, 34, 38, 41]]);}));function request(_x) {return _request.apply(this, arguments);}return request;}() }]);return request;}();exports.default = request;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGx1Z2lucy9yZXF1ZXN0L2NvcmUvcmVxdWVzdC5qcyJdLCJuYW1lcyI6WyJyZXF1ZXN0Iiwib3B0aW9ucyIsImJhc2VVcmwiLCJmaWxlVXJsIiwiZGVmYXVsdFVwbG9hZFVybCIsImhlYWRlciIsImNvbmZpZyIsImlzUHJvbXB0IiwibG9hZCIsImlzRmFjdG9yeSIsInJlc2VuZCIsInVybCIsImRhdGEiLCJtZXRob2QiLCJydW5SZXF1ZXN0U3RhcnQiLCJlcnJNc2ciLCJzdGF0dXNDb2RlIiwicmVxdWVzdEluZm8iLCJyZXF1ZXN0U3RhcnQiLCJjaGFuZ2VrZXlzIiwiZm9yRWFjaCIsImtleSIsInJlcXVlc3RSZXN1bHQiLCJkYXRhRmFjdG9yeSIsInJlc3BvbnNlIiwicmVzdWx0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZXF1ZXN0RXJyb3IiLCJyZWplY3QiLCJyZXF1ZXN0RW5kIl0sIm1hcHBpbmdzIjoiMk1BQUEsdUQ7QUFDcUJBLE87QUFDcEIsbUJBQVlDLE9BQVosRUFBcUI7QUFDcEI7QUFDQSxTQUFLQyxPQUFMLEdBQWVELE9BQU8sQ0FBQ0MsT0FBUixJQUFtQixFQUFsQztBQUNBO0FBQ0EsU0FBS0MsT0FBTCxHQUFlRixPQUFPLENBQUNFLE9BQVIsSUFBbUIsRUFBbEM7QUFDQTtBQUNBLFNBQUtDLGdCQUFMLEdBQXdCSCxPQUFPLENBQUNHLGdCQUFSLElBQTRCLEVBQXBEO0FBQ0E7QUFDQSxTQUFLQyxNQUFMLEdBQWNKLE9BQU8sQ0FBQ0ksTUFBUixJQUFrQixFQUFoQztBQUNBO0FBQ0EsU0FBS0MsTUFBTCxHQUFjTCxPQUFPLENBQUNLLE1BQVIsSUFBa0I7QUFDL0JDLGNBQVEsRUFBRSxJQURxQjtBQUUvQkMsVUFBSSxFQUFFLElBRnlCO0FBRy9CQyxlQUFTLEVBQUUsSUFIb0I7QUFJdEJDLFlBQU0sRUFBRSxDQUpjLEVBQWhDOztBQU1BO0FBQ0Q7K0RBQ3dDLEtBQW5DQyxHQUFtQyx1RUFBN0IsRUFBNkIsS0FBekJDLElB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OztBQUlHQyx1QkFBTyxDQUFDQyxPQUFSLENBQWdCRixNQUFoQixDOztBQUVBQyx1QkFBTyxDQUFDQyxPQUFSLENBQWdCTCxhQUFoQixDOzs7QUFHUixxQkFBS00sWUFBTCxJQUFxQixLQUFLQSxZQUFMLGFBQXJCLEM7QUFDT0YsdUJBQU8sQ0FBQ0csTUFBUixhOztBQUVQO0FBQ0Esb0JBQUdmLGVBQUgsRUFBbUI7QUFDbEIsdUJBQUtnQixVQUFMLElBQW1CLEtBQUtBLFVBQUwsQ0FBZ0JiLFdBQWhCLENBQW5CO0FBQ0EsaUIiLCJmaWxlIjoiMzkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtZXJnZUNvbmZpZywgZGlzcGF0Y2hSZXF1ZXN0LCBqc29ucFJlcXVlc3R9IGZyb20gXCIuL3V0aWxzLmpzXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHJlcXVlc3Qge1xyXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuXHRcdC8v6K+35rGC5YWs5YWx5Zyw5Z2AXHJcblx0XHR0aGlzLmJhc2VVcmwgPSBvcHRpb25zLmJhc2VVcmwgfHwgXCJcIjtcclxuXHRcdC8v5YWs5YWx5paH5Lu25LiK5Lyg6K+35rGC5Zyw5Z2AXHJcblx0XHR0aGlzLmZpbGVVcmwgPSBvcHRpb25zLmZpbGVVcmwgfHwgXCJcIjtcclxuXHRcdC8vIOacjeWKoeWZqOS4iuS8oOWbvueJh+m7mOiupHVybFxyXG5cdFx0dGhpcy5kZWZhdWx0VXBsb2FkVXJsID0gb3B0aW9ucy5kZWZhdWx0VXBsb2FkVXJsIHx8IFwiXCI7XHJcblx0XHQvL+m7mOiupOivt+axguWktFxyXG5cdFx0dGhpcy5oZWFkZXIgPSBvcHRpb25zLmhlYWRlciB8fCB7fTtcclxuXHRcdC8v6buY6K6k6YWN572uXHJcblx0XHR0aGlzLmNvbmZpZyA9IG9wdGlvbnMuY29uZmlnIHx8IHtcclxuXHRcdFx0aXNQcm9tcHQ6IHRydWUsXHJcblx0XHRcdGxvYWQ6IHRydWUsXHJcblx0XHRcdGlzRmFjdG9yeTogdHJ1ZSxcclxuICAgICAgICAgICAgcmVzZW5kOiAwXHJcblx0XHR9O1xyXG5cdH1cclxuXHQvL3Bvc3Tor7fmsYJcclxuXHRwb3N0KHVybCA9ICcnLCBkYXRhID0ge30sIG9wdGlvbnMgPSB7fSkge1xyXG5cdFx0cmV0dXJuIHRoaXMucmVxdWVzdCh7XHJcblx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXHJcblx0XHRcdGRhdGE6IGRhdGEsXHJcblx0XHRcdHVybDogdXJsLFxyXG5cdFx0XHQuLi5vcHRpb25zXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdC8vZ2V06K+35rGCXHJcblx0Z2V0KHVybCA9ICcnLCBkYXRhID0ge30sIG9wdGlvbnMgPSB7fSkge1xyXG5cdFx0cmV0dXJuIHRoaXMucmVxdWVzdCh7XHJcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcclxuXHRcdFx0ZGF0YTogZGF0YSxcclxuXHRcdFx0dXJsOiB1cmwsXHJcblx0XHRcdC4uLm9wdGlvbnNcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Ly9wdXTor7fmsYJcclxuXHRwdXQodXJsID0gJycsIGRhdGEgPSB7fSwgb3B0aW9ucyA9IHt9KSB7XHJcblx0XHRyZXR1cm4gdGhpcy5yZXF1ZXN0KHtcclxuXHRcdFx0bWV0aG9kOiBcIlBVVFwiLFxyXG5cdFx0XHRkYXRhOiBkYXRhLFxyXG5cdFx0XHR1cmw6IHVybCxcclxuXHRcdFx0Li4ub3B0aW9uc1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHQvL2RlbGV0Zeivt+axglxyXG5cdGRlbGV0ZSh1cmwgPSAnJywgZGF0YSA9IHt9LCBvcHRpb25zID0ge30pIHtcclxuXHRcdHJldHVybiB0aGlzLnJlcXVlc3Qoe1xyXG5cdFx0XHRtZXRob2Q6IFwiREVMRVRFXCIsXHJcblx0XHRcdGRhdGE6IGRhdGEsXHJcblx0XHRcdHVybDogdXJsLFxyXG5cdFx0XHQuLi5vcHRpb25zXHJcblx0XHR9KTtcclxuXHR9XHJcblx0Ly9qc29ucOivt+axgijlj6rpmZDkuo5INeS9v+eUqClcclxuXHRqc29ucCh1cmwgPSAnJywgZGF0YSA9IHt9LCBvcHRpb25zID0ge30pIHtcclxuXHRcdHJldHVybiB0aGlzLnJlcXVlc3Qoe1xyXG5cdFx0XHRtZXRob2Q6IFwiSlNPTlBcIixcclxuXHRcdFx0ZGF0YTogZGF0YSxcclxuXHRcdFx0dXJsOiB1cmwsXHJcblx0XHRcdC4uLm9wdGlvbnNcclxuXHRcdH0pO1xyXG5cdH1cclxuXHQvL+aOpeWPo+ivt+axguaWueazlVxyXG5cdGFzeW5jIHJlcXVlc3QoZGF0YSkge1xyXG5cdFx0Ly8g6K+35rGC5pWw5o2uXHJcblx0XHRsZXQgcmVxdWVzdEluZm8sXHJcblx0XHQvLyDmmK/lkKbov5DooYzov4for7fmsYLlvIDlp4vpkqnlrZBcclxuXHRcdHJ1blJlcXVlc3RTdGFydCA9IGZhbHNlO1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0aWYgKCFkYXRhLnVybCkge1xyXG5cdFx0XHRcdHRocm93IHsgZXJyTXNnOiBcIuOAkHJlcXVlc3TjgJHnvLrlpLHmlbDmja51cmxcIiwgc3RhdHVzQ29kZTogMH1cclxuXHRcdFx0fVxyXG5cdFx0XHQvLyDmlbDmja7lkIjlubZcclxuXHRcdFx0cmVxdWVzdEluZm8gPSBtZXJnZUNvbmZpZyh0aGlzLCBkYXRhKTtcclxuXHRcdFx0Ly8g5Luj6KGo5LmL5YmN6L+Q6KGM5Yiw6L+Z6YeMXHJcblx0XHRcdHJ1blJlcXVlc3RTdGFydCA9IHRydWU7XHJcblx0XHRcdC8v6K+35rGC5YmN5Zue6LCDXHJcblx0XHRcdGlmICh0aGlzLnJlcXVlc3RTdGFydCkge1xyXG5cdFx0XHRcdGxldCByZXF1ZXN0U3RhcnQgPSB0aGlzLnJlcXVlc3RTdGFydChyZXF1ZXN0SW5mbyk7XHJcblx0XHRcdFx0aWYgKHR5cGVvZiByZXF1ZXN0U3RhcnQgPT0gXCJvYmplY3RcIikge1xyXG5cdFx0XHRcdFx0bGV0IGNoYW5nZWtleXMgPSBbXCJkYXRhXCIsIFwiaGVhZGVyXCIsIFwiaXNQcm9tcHRcIiwgXCJsb2FkXCIsIFwiaXNGYWN0b3J5XCJdO1xyXG5cdFx0XHRcdFx0Y2hhbmdla2V5cy5mb3JFYWNoKGtleSA9PiB7XHJcblx0XHRcdFx0XHRcdHJlcXVlc3RJbmZvW2tleV0gPSByZXF1ZXN0U3RhcnRba2V5XTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aHJvdyB7XHJcblx0XHRcdFx0XHRcdGVyck1zZzogXCLjgJByZXF1ZXN044CR6K+35rGC5byA5aeL5oum5oiq5Zmo5pyq6YCa6L+HXCIsXHJcblx0XHRcdFx0XHRcdHN0YXR1c0NvZGU6IDAsXHJcblx0XHRcdFx0XHRcdGRhdGE6IHJlcXVlc3RJbmZvLmRhdGEsXHJcblx0XHRcdFx0XHRcdG1ldGhvZDogcmVxdWVzdEluZm8ubWV0aG9kLFxyXG5cdFx0XHRcdFx0XHRoZWFkZXI6IHJlcXVlc3RJbmZvLmhlYWRlcixcclxuXHRcdFx0XHRcdFx0dXJsOiByZXF1ZXN0SW5mby51cmwsXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGxldCByZXF1ZXN0UmVzdWx0ID0ge307XHJcblx0XHRcdGlmKHJlcXVlc3RJbmZvLm1ldGhvZCA9PSBcIkpTT05QXCIpe1xyXG5cdFx0XHRcdHJlcXVlc3RSZXN1bHQgPSBhd2FpdCBqc29ucFJlcXVlc3QocmVxdWVzdEluZm8pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlcXVlc3RSZXN1bHQgPSBhd2FpdCBkaXNwYXRjaFJlcXVlc3QocmVxdWVzdEluZm8pO1xyXG5cdFx0XHR9XHJcblx0XHRcdC8v5piv5ZCm55So5aSW6YOo55qE5pWw5o2u5aSE55CG5pa55rOVXHJcblx0XHRcdGlmIChyZXF1ZXN0SW5mby5pc0ZhY3RvcnkgJiYgdGhpcy5kYXRhRmFjdG9yeSkge1xyXG5cdFx0XHRcdC8v5pWw5o2u5aSE55CGXHJcblx0XHRcdFx0bGV0IHJlc3VsdCA9IGF3YWl0IHRoaXMuZGF0YUZhY3Rvcnkoe1xyXG5cdFx0XHRcdFx0Li4ucmVxdWVzdEluZm8sXHJcblx0XHRcdFx0XHRyZXNwb25zZTogcmVxdWVzdFJlc3VsdFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzdWx0KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlcXVlc3RSZXN1bHQpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGNhdGNoIChlcnIpe1xyXG5cdFx0XHR0aGlzLnJlcXVlc3RFcnJvciAmJiB0aGlzLnJlcXVlc3RFcnJvcihlcnIpO1xyXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcclxuXHRcdH0gZmluYWxseSB7XHJcblx0XHRcdC8vIOWmguaenOivt+axguW8gOWni+acqui/kOihjOWIsO+8jOivt+axgue7k+adn+S5n+S4jei/kOihjFxyXG5cdFx0XHRpZihydW5SZXF1ZXN0U3RhcnQpe1xyXG5cdFx0XHRcdHRoaXMucmVxdWVzdEVuZCAmJiB0aGlzLnJlcXVlc3RFbmQocmVxdWVzdEluZm8pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///39\n");

/***/ }),
/* 40 */
/*!*************************************************************!*\
  !*** D:/uniapp/uniapp-simple/plugins/request/core/utils.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.jsonpRequest = exports.dispatchRequest = exports.mergeConfig = void 0; // 获取合并的数据\nvar mergeConfig = function mergeConfig(_this, options) {\n  //判断url是不是链接\n  var urlType = /^(http|https):\\/\\//.test(options.url);\n  var config = Object.assign({}, _this.config, options);\n  if (options.method == \"FILE\") {\n    config.url = urlType ? options.url : _this.fileUrl + options.url;\n  } else {\n    config.url = urlType ? options.url : _this.baseUrl + options.url;\n  }\n  //请求头\n  if (options.header) {\n    config.header = Object.assign({}, _this.header, options.header);\n  } else {\n    config.header = _this.header;\n  }\n  return config;\n};\n// 请求\nexports.mergeConfig = mergeConfig;var dispatchRequest = function dispatchRequest(requestInfo) {\n  return new Promise(function (resolve, reject) {\n    var requestData = {\n      url: requestInfo.url,\n      header: requestInfo.header, //加入请求头\n      success: function success(res) {\n        resolve(res);\n      },\n      fail: function fail(err) {\n        reject(err);\n      } };\n\n    //请求类型\n    if (requestInfo.method) {\n      requestData.method = requestInfo.method;\n    }\n    if (requestInfo.data) {\n      requestData.data = requestInfo.data;\n    }\n\n\n\n\n\n    if (requestInfo.dataType) {\n      requestData.dataType = requestInfo.dataType;\n    }\n\n\n\n\n\n\n\n\n\n\n    uni.request(requestData);\n  });\n};\n// jsonp请求\nexports.dispatchRequest = dispatchRequest;var jsonpRequest = function jsonpRequest(requestInfo) {\n  return new Promise(function (resolve, reject) {\n    var dataStr = '';\n    Object.keys(requestInfo.data).forEach(function (key) {\n      dataStr += key + '=' + requestInfo.data[key] + '&';\n    });\n    //匹配最后一个&并去除\n    if (dataStr !== '') {\n      dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));\n    }\n    requestInfo.url = requestInfo.url + '?' + dataStr;\n    var callbackName = \"callback\" + Math.ceil(Math.random() * 1000000);\n\n\n\n\n\n\n\n\n\n\n  });\n};exports.jsonpRequest = jsonpRequest;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGx1Z2lucy9yZXF1ZXN0L2NvcmUvdXRpbHMuanMiXSwibmFtZXMiOlsibWVyZ2VDb25maWciLCJfdGhpcyIsIm9wdGlvbnMiLCJ1cmxUeXBlIiwidGVzdCIsInVybCIsImNvbmZpZyIsIk9iamVjdCIsImFzc2lnbiIsIm1ldGhvZCIsImZpbGVVcmwiLCJiYXNlVXJsIiwiaGVhZGVyIiwiZGlzcGF0Y2hSZXF1ZXN0IiwicmVxdWVzdEluZm8iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlcXVlc3REYXRhIiwic3VjY2VzcyIsInJlcyIsImZhaWwiLCJlcnIiLCJkYXRhIiwiZGF0YVR5cGUiLCJ1bmkiLCJyZXF1ZXN0IiwianNvbnBSZXF1ZXN0IiwiZGF0YVN0ciIsImtleXMiLCJmb3JFYWNoIiwia2V5Iiwic3Vic3RyIiwibGFzdEluZGV4T2YiLCJjYWxsYmFja05hbWUiLCJNYXRoIiwiY2VpbCIsInJhbmRvbSJdLCJtYXBwaW5ncyI6IjZJQUFBO0FBQ08sSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBU0MsS0FBVCxFQUFnQkMsT0FBaEIsRUFBeUI7QUFDbkQ7QUFDQSxNQUFJQyxPQUFPLEdBQUcscUJBQXFCQyxJQUFyQixDQUEwQkYsT0FBTyxDQUFDRyxHQUFsQyxDQUFkO0FBQ0EsTUFBSUMsTUFBTSxHQUFHQyxNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWtCUCxLQUFLLENBQUNLLE1BQXhCLEVBQWdDSixPQUFoQyxDQUFiO0FBQ0EsTUFBSUEsT0FBTyxDQUFDTyxNQUFSLElBQWtCLE1BQXRCLEVBQThCO0FBQzdCSCxVQUFNLENBQUNELEdBQVAsR0FBYUYsT0FBTyxHQUFHRCxPQUFPLENBQUNHLEdBQVgsR0FBaUJKLEtBQUssQ0FBQ1MsT0FBTixHQUFnQlIsT0FBTyxDQUFDRyxHQUE3RDtBQUNBLEdBRkQsTUFFTztBQUNOQyxVQUFNLENBQUNELEdBQVAsR0FBYUYsT0FBTyxHQUFHRCxPQUFPLENBQUNHLEdBQVgsR0FBaUJKLEtBQUssQ0FBQ1UsT0FBTixHQUFnQlQsT0FBTyxDQUFDRyxHQUE3RDtBQUNBO0FBQ0Q7QUFDQSxNQUFJSCxPQUFPLENBQUNVLE1BQVosRUFBb0I7QUFDbkJOLFVBQU0sQ0FBQ00sTUFBUCxHQUFnQkwsTUFBTSxDQUFDQyxNQUFQLENBQWMsRUFBZCxFQUFrQlAsS0FBSyxDQUFDVyxNQUF4QixFQUFnQ1YsT0FBTyxDQUFDVSxNQUF4QyxDQUFoQjtBQUNBLEdBRkQsTUFFTztBQUNOTixVQUFNLENBQUNNLE1BQVAsR0FBZ0JYLEtBQUssQ0FBQ1csTUFBdEI7QUFDQTtBQUNELFNBQU9OLE1BQVA7QUFDQSxDQWhCTTtBQWlCUDtrQ0FDTyxJQUFNTyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQVNDLFdBQVQsRUFBc0I7QUFDcEQsU0FBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3ZDLFFBQUlDLFdBQVcsR0FBRztBQUNqQmIsU0FBRyxFQUFFUyxXQUFXLENBQUNULEdBREE7QUFFakJPLFlBQU0sRUFBRUUsV0FBVyxDQUFDRixNQUZILEVBRVc7QUFDNUJPLGFBQU8sRUFBRSxpQkFBQ0MsR0FBRCxFQUFTO0FBQ2pCSixlQUFPLENBQUNJLEdBQUQsQ0FBUDtBQUNBLE9BTGdCO0FBTWpCQyxVQUFJLEVBQUUsY0FBQ0MsR0FBRCxFQUFTO0FBQ2RMLGNBQU0sQ0FBQ0ssR0FBRCxDQUFOO0FBQ0EsT0FSZ0IsRUFBbEI7O0FBVUE7QUFDQSxRQUFJUixXQUFXLENBQUNMLE1BQWhCLEVBQXdCO0FBQ3ZCUyxpQkFBVyxDQUFDVCxNQUFaLEdBQXFCSyxXQUFXLENBQUNMLE1BQWpDO0FBQ0E7QUFDRCxRQUFJSyxXQUFXLENBQUNTLElBQWhCLEVBQXNCO0FBQ3JCTCxpQkFBVyxDQUFDSyxJQUFaLEdBQW1CVCxXQUFXLENBQUNTLElBQS9CO0FBQ0E7Ozs7OztBQU1ELFFBQUlULFdBQVcsQ0FBQ1UsUUFBaEIsRUFBMEI7QUFDekJOLGlCQUFXLENBQUNNLFFBQVosR0FBdUJWLFdBQVcsQ0FBQ1UsUUFBbkM7QUFDQTs7Ozs7Ozs7Ozs7QUFXREMsT0FBRyxDQUFDQyxPQUFKLENBQVlSLFdBQVo7QUFDQSxHQXJDTSxDQUFQO0FBc0NBLENBdkNNO0FBd0NQOzBDQUNPLElBQU1TLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQVNiLFdBQVQsRUFBc0I7QUFDakQsU0FBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3ZDLFFBQUlXLE9BQU8sR0FBRyxFQUFkO0FBQ0FyQixVQUFNLENBQUNzQixJQUFQLENBQVlmLFdBQVcsQ0FBQ1MsSUFBeEIsRUFBOEJPLE9BQTlCLENBQXNDLFVBQUFDLEdBQUcsRUFBSTtBQUM1Q0gsYUFBTyxJQUFJRyxHQUFHLEdBQUcsR0FBTixHQUFZakIsV0FBVyxDQUFDUyxJQUFaLENBQWlCUSxHQUFqQixDQUFaLEdBQW9DLEdBQS9DO0FBQ0EsS0FGRDtBQUdBO0FBQ0EsUUFBSUgsT0FBTyxLQUFLLEVBQWhCLEVBQW9CO0FBQ25CQSxhQUFPLEdBQUdBLE9BQU8sQ0FBQ0ksTUFBUixDQUFlLENBQWYsRUFBa0JKLE9BQU8sQ0FBQ0ssV0FBUixDQUFvQixHQUFwQixDQUFsQixDQUFWO0FBQ0E7QUFDRG5CLGVBQVcsQ0FBQ1QsR0FBWixHQUFrQlMsV0FBVyxDQUFDVCxHQUFaLEdBQWtCLEdBQWxCLEdBQXdCdUIsT0FBMUM7QUFDQSxRQUFJTSxZQUFZLEdBQUcsYUFBYUMsSUFBSSxDQUFDQyxJQUFMLENBQVVELElBQUksQ0FBQ0UsTUFBTCxLQUFnQixPQUExQixDQUFoQzs7Ozs7Ozs7Ozs7QUFXQSxHQXJCTSxDQUFQO0FBc0JBLENBdkJNLEMiLCJmaWxlIjoiNDAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyDojrflj5blkIjlubbnmoTmlbDmja5cclxuZXhwb3J0IGNvbnN0IG1lcmdlQ29uZmlnID0gZnVuY3Rpb24oX3RoaXMsIG9wdGlvbnMpIHtcclxuXHQvL+WIpOaWrXVybOaYr+S4jeaYr+mTvuaOpVxyXG5cdGxldCB1cmxUeXBlID0gL14oaHR0cHxodHRwcyk6XFwvXFwvLy50ZXN0KG9wdGlvbnMudXJsKTtcclxuXHRsZXQgY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgX3RoaXMuY29uZmlnLCBvcHRpb25zKTtcclxuXHRpZiAob3B0aW9ucy5tZXRob2QgPT0gXCJGSUxFXCIpIHtcclxuXHRcdGNvbmZpZy51cmwgPSB1cmxUeXBlID8gb3B0aW9ucy51cmwgOiBfdGhpcy5maWxlVXJsICsgb3B0aW9ucy51cmw7XHJcblx0fSBlbHNlIHtcclxuXHRcdGNvbmZpZy51cmwgPSB1cmxUeXBlID8gb3B0aW9ucy51cmwgOiBfdGhpcy5iYXNlVXJsICsgb3B0aW9ucy51cmw7XHJcblx0fVxyXG5cdC8v6K+35rGC5aS0XHJcblx0aWYgKG9wdGlvbnMuaGVhZGVyKSB7XHJcblx0XHRjb25maWcuaGVhZGVyID0gT2JqZWN0LmFzc2lnbih7fSwgX3RoaXMuaGVhZGVyLCBvcHRpb25zLmhlYWRlcik7XHJcblx0fSBlbHNlIHtcclxuXHRcdGNvbmZpZy5oZWFkZXIgPSBfdGhpcy5oZWFkZXI7XHJcblx0fVxyXG5cdHJldHVybiBjb25maWc7XHJcbn1cclxuLy8g6K+35rGCXHJcbmV4cG9ydCBjb25zdCBkaXNwYXRjaFJlcXVlc3QgPSBmdW5jdGlvbihyZXF1ZXN0SW5mbykge1xyXG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRsZXQgcmVxdWVzdERhdGEgPSB7XHJcblx0XHRcdHVybDogcmVxdWVzdEluZm8udXJsLFxyXG5cdFx0XHRoZWFkZXI6IHJlcXVlc3RJbmZvLmhlYWRlciwgLy/liqDlhaXor7fmsYLlpLRcclxuXHRcdFx0c3VjY2VzczogKHJlcykgPT4ge1xyXG5cdFx0XHRcdHJlc29sdmUocmVzKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0ZmFpbDogKGVycikgPT4ge1xyXG5cdFx0XHRcdHJlamVjdChlcnIpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdFx0Ly/or7fmsYLnsbvlnotcclxuXHRcdGlmIChyZXF1ZXN0SW5mby5tZXRob2QpIHtcclxuXHRcdFx0cmVxdWVzdERhdGEubWV0aG9kID0gcmVxdWVzdEluZm8ubWV0aG9kO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHJlcXVlc3RJbmZvLmRhdGEpIHtcclxuXHRcdFx0cmVxdWVzdERhdGEuZGF0YSA9IHJlcXVlc3RJbmZvLmRhdGE7XHJcblx0XHR9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHRcdGlmIChyZXF1ZXN0SW5mby5kYXRhVHlwZSkge1xyXG5cdFx0XHRyZXF1ZXN0RGF0YS5kYXRhVHlwZSA9IHJlcXVlc3RJbmZvLmRhdGFUeXBlO1xyXG5cdFx0fVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHRcdHVuaS5yZXF1ZXN0KHJlcXVlc3REYXRhKTtcclxuXHR9KVxyXG59XHJcbi8vIGpzb25w6K+35rGCXHJcbmV4cG9ydCBjb25zdCBqc29ucFJlcXVlc3QgPSBmdW5jdGlvbihyZXF1ZXN0SW5mbykge1xyXG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRsZXQgZGF0YVN0ciA9ICcnO1xyXG5cdFx0T2JqZWN0LmtleXMocmVxdWVzdEluZm8uZGF0YSkuZm9yRWFjaChrZXkgPT4ge1xyXG5cdFx0XHRkYXRhU3RyICs9IGtleSArICc9JyArIHJlcXVlc3RJbmZvLmRhdGFba2V5XSArICcmJztcclxuXHRcdH0pO1xyXG5cdFx0Ly/ljLnphY3mnIDlkI7kuIDkuKom5bm25Y676ZmkXHJcblx0XHRpZiAoZGF0YVN0ciAhPT0gJycpIHtcclxuXHRcdFx0ZGF0YVN0ciA9IGRhdGFTdHIuc3Vic3RyKDAsIGRhdGFTdHIubGFzdEluZGV4T2YoJyYnKSk7XHJcblx0XHR9XHJcblx0XHRyZXF1ZXN0SW5mby51cmwgPSByZXF1ZXN0SW5mby51cmwgKyAnPycgKyBkYXRhU3RyO1xyXG5cdFx0bGV0IGNhbGxiYWNrTmFtZSA9IFwiY2FsbGJhY2tcIiArIE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTAwMDAwMCk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cdH0pO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///40\n");

/***/ }),
/* 41 */
/*!***************************************************************!*\
  !*** D:/uniapp/uniapp-simple/plugins/request/upload/utils.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.urlUpload = exports.qiniuUpload = exports.chooseVideo = exports.chooseImage = exports.randomChar = void 0;function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var qiniuUploader = __webpack_require__(/*! ./qiniuUploader */ 42);\n//七牛云上传文件命名\nvar randomChar = function randomChar(l) {var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"\";\n  var x = \"0123456789qwertyuioplkjhgfdsazxcvbnm\";\n  var tmp = \"\";\n  var time = new Date();\n  for (var i = 0; i < l; i++) {\n    tmp += x.charAt(Math.ceil(Math.random() * 100000000) % x.length);\n  }\n  return (\n    \"file/\" +\n    url +\n    time.getTime() +\n    tmp);\n\n};\n//图片选择\nexports.randomChar = randomChar;var chooseImage = function chooseImage(data) {\n  return new Promise(function (resolve, reject) {\n    uni.chooseImage({\n      count: data.count || 9, //默认9\n      sizeType: data.sizeType || ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有\n      sourceType: data.sourceType || ['album', 'camera'], //从相册选择\n      success: function success(res) {\n        resolve(res.tempFiles);\n      },\n      fail: function fail(err) {\n        reject(err);\n      } });\n\n  });\n};\n//视频选择\nexports.chooseImage = chooseImage;var chooseVideo = function chooseVideo(data) {\n  return new Promise(function (resolve, reject) {\n    uni.chooseVideo({\n      sourceType: data.sourceType || ['album', 'camera'], //从相册选择\n      compressed: data.compressed || false, //是否压缩所选的视频源文件，默认值为 true，需要压缩。\n      maxDuration: data.maxDuration || 60, //拍摄视频最长拍摄时间，单位秒。最长支持 60 秒。\n      camera: data.camera || 'back', //'front'、'back'，默认'back'\n      success: function success(res) {\n        var files = [{\n          path: res.tempFilePath }];\n\n\n        files[0].duration = res.duration;\n        files[0].size = res.size;\n        files[0].height = res.height;\n        files[0].width = res.width;\n\n\n\n\n        resolve(files);\n      },\n      fail: function fail(err) {\n        reject(err);\n      } });\n\n  });\n};\n// 七牛云上传\nexports.chooseVideo = chooseVideo;var qiniuUpload = function qiniuUpload(requestInfo, getQnToken) {\n  return new Promise(function (resolve, reject) {\n    if (Array.isArray(requestInfo.files)) {\n      var len = requestInfo.files.length;\n      var fileList = new Array();\n      if (getQnToken) {\n        getQnToken(function (qnRes) {\n          /*\r\n                                      *接口返回参数：\r\n                                      *visitPrefix:访问文件的域名\r\n                                      *token:七牛云上传token\r\n                                      *folderPath:上传的文件夹\r\n                                      *region: 地区 默认为：SCN\r\n                                      */\n          var prefixLen = qnRes.visitPrefix.length;\n          if (qnRes.visitPrefix.charAt(prefixLen - 1) == '/') {\n            qnRes.visitPrefix = qnRes.visitPrefix.substring(0, prefixLen - 1);\n          }\n          uploadFile(0);\n\n          function uploadFile(i) {\n            var item = requestInfo.files[i];\n            var updateUrl = randomChar(10, qnRes.folderPath);\n            var fileData = _objectSpread({\n              fileIndex: i,\n              files: requestInfo.files },\n            item);\n\n            if (item.name) {\n              fileData.name = item.name;\n              var nameArr = item.name.split(\".\");\n              updateUrl += \".\" + nameArr[nameArr.length - 1];\n            }\n            // 交给七牛上传\n            qiniuUploader.upload(item.path || item, function (res) {\n              fileData.url = res.imageURL;\n              requestInfo.onEachUpdate && requestInfo.onEachUpdate(_objectSpread({\n                url: res.imageURL },\n              fileData));\n\n              fileList.push(res.imageURL);\n              if (len - 1 > i) {\n                uploadFile(i + 1);\n              } else {\n                resolve(fileList);\n              }\n            }, function (error) {\n              reject(error);\n            }, {\n              region: qnRes.region || 'SCN', //地区\n              domain: qnRes.visitPrefix, // bucket 域名，下载资源时用到。\n              key: updateUrl,\n              uptoken: qnRes.token, // 由其他程序生成七牛 uptoken\n              uptokenURL: 'UpTokenURL.com/uptoken' // 上传地址\n            }, function (res) {\n              __f__(\"log\", requestInfo, \" at plugins/request/upload/utils.js:118\");\n              requestInfo.onProgressUpdate && requestInfo.onProgressUpdate(Object.assign({}, fileData, res));\n              // console.log('上传进度', res.progress)\n              // console.log('已经上传的数据长度', res.totalBytesSent)\n              // console.log('预期需要上传的数据总长度', res.totalBytesExpectedToSend)\n            });\n          }\n        });\n      } else {\n        reject({\n          errMsg: \"请添加七牛云回调方法：getQnToken\",\n          statusCode: 0 });\n\n      }\n    } else {\n      reject({\n        errMsg: \"files 必须是数组类型\",\n        statusCode: 0 });\n\n    };\n  });\n};\n// 服务器URL上传\nexports.qiniuUpload = qiniuUpload;var urlUpload = function urlUpload(requestInfo, dataFactory) {\n  return new Promise(function (resolve, reject) {\n    // 本地文件上传去掉默认Content-Type\n    if (requestInfo.header['Content-Type']) {\n      delete requestInfo.header['Content-Type'];\n    }\n    // 本地文件上传去掉默认Content-Type\n    if (requestInfo.header['content-type']) {\n      delete requestInfo.header['content-type'];\n    }\n    if (Array.isArray(requestInfo.files)) {\n\n      var files = [];\n      var fileData = {\n        files: requestInfo.files,\n        name: requestInfo.name || \"file\" };\n\n      requestInfo.files.forEach(function (item) {\n        var fileInfo = {\n          name: requestInfo.name || \"file\" };\n\n        if (item.path) {\n          fileInfo.uri = item.path;\n        } else {\n          fileInfo.file = item;\n        }\n        files.push(fileInfo);\n      });\n      var config = {\n        url: requestInfo.url,\n        files: files,\n        header: requestInfo.header, //加入请求头\n        success: function success(response) {\n          //是否用外部的数据处理方法\n          if (requestInfo.isFactory && dataFactory) {\n            //数据处理\n            dataFactory(_objectSpread(_objectSpread({},\n            requestInfo), {}, {\n              response: response })).\n            then(function (data) {\n              requestInfo.onEachUpdate && requestInfo.onEachUpdate(_objectSpread({\n                data: data },\n              fileData));\n\n              resolve(data);\n            }, function (err) {\n              reject(err);\n            });\n          } else {\n            requestInfo.onEachUpdate && requestInfo.onEachUpdate(_objectSpread({\n              data: response },\n            fileData));\n\n            resolve(response);\n          }\n        },\n        fail: function fail(err) {\n          reject(err);\n        } };\n\n      if (requestInfo.data) {\n        config.formData = requestInfo.data;\n      }\n      var uploadTask = uni.uploadFile(config);\n      uploadTask.onProgressUpdate(function (res) {\n        requestInfo.onProgressUpdate && requestInfo.onProgressUpdate(Object.assign({}, fileData, res));\n      });\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    } else {\n      reject({\n        errMsg: \"files 必须是数组类型\",\n        statusCode: 0 });\n\n    }\n  });\n};exports.urlUpload = urlUpload;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 30)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGx1Z2lucy9yZXF1ZXN0L3VwbG9hZC91dGlscy5qcyJdLCJuYW1lcyI6WyJxaW5pdVVwbG9hZGVyIiwicmVxdWlyZSIsInJhbmRvbUNoYXIiLCJsIiwidXJsIiwieCIsInRtcCIsInRpbWUiLCJEYXRlIiwiaSIsImNoYXJBdCIsIk1hdGgiLCJjZWlsIiwicmFuZG9tIiwibGVuZ3RoIiwiZ2V0VGltZSIsImNob29zZUltYWdlIiwiZGF0YSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidW5pIiwiY291bnQiLCJzaXplVHlwZSIsInNvdXJjZVR5cGUiLCJzdWNjZXNzIiwicmVzIiwidGVtcEZpbGVzIiwiZmFpbCIsImVyciIsImNob29zZVZpZGVvIiwiY29tcHJlc3NlZCIsIm1heER1cmF0aW9uIiwiY2FtZXJhIiwiZmlsZXMiLCJwYXRoIiwidGVtcEZpbGVQYXRoIiwiZHVyYXRpb24iLCJzaXplIiwiaGVpZ2h0Iiwid2lkdGgiLCJxaW5pdVVwbG9hZCIsInJlcXVlc3RJbmZvIiwiZ2V0UW5Ub2tlbiIsIkFycmF5IiwiaXNBcnJheSIsImxlbiIsImZpbGVMaXN0IiwicW5SZXMiLCJwcmVmaXhMZW4iLCJ2aXNpdFByZWZpeCIsInN1YnN0cmluZyIsInVwbG9hZEZpbGUiLCJpdGVtIiwidXBkYXRlVXJsIiwiZm9sZGVyUGF0aCIsImZpbGVEYXRhIiwiZmlsZUluZGV4IiwibmFtZSIsIm5hbWVBcnIiLCJzcGxpdCIsInVwbG9hZCIsImltYWdlVVJMIiwib25FYWNoVXBkYXRlIiwicHVzaCIsImVycm9yIiwicmVnaW9uIiwiZG9tYWluIiwia2V5IiwidXB0b2tlbiIsInRva2VuIiwidXB0b2tlblVSTCIsIm9uUHJvZ3Jlc3NVcGRhdGUiLCJPYmplY3QiLCJhc3NpZ24iLCJlcnJNc2ciLCJzdGF0dXNDb2RlIiwidXJsVXBsb2FkIiwiZGF0YUZhY3RvcnkiLCJoZWFkZXIiLCJmb3JFYWNoIiwiZmlsZUluZm8iLCJ1cmkiLCJmaWxlIiwiY29uZmlnIiwicmVzcG9uc2UiLCJpc0ZhY3RvcnkiLCJ0aGVuIiwiZm9ybURhdGEiLCJ1cGxvYWRUYXNrIl0sIm1hcHBpbmdzIjoid3ZDQUFBLElBQU1BLGFBQWEsR0FBR0MsbUJBQU8sQ0FBQyx5QkFBRCxDQUE3QjtBQUNBO0FBQ08sSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBU0MsQ0FBVCxFQUFzQixLQUFWQyxHQUFVLHVFQUFKLEVBQUk7QUFDL0MsTUFBTUMsQ0FBQyxHQUFHLHNDQUFWO0FBQ0EsTUFBSUMsR0FBRyxHQUFHLEVBQVY7QUFDQSxNQUFJQyxJQUFJLEdBQUcsSUFBSUMsSUFBSixFQUFYO0FBQ0EsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHTixDQUFwQixFQUF1Qk0sQ0FBQyxFQUF4QixFQUE0QjtBQUMzQkgsT0FBRyxJQUFJRCxDQUFDLENBQUNLLE1BQUYsQ0FBU0MsSUFBSSxDQUFDQyxJQUFMLENBQVVELElBQUksQ0FBQ0UsTUFBTCxLQUFnQixTQUExQixJQUF1Q1IsQ0FBQyxDQUFDUyxNQUFsRCxDQUFQO0FBQ0E7QUFDRDtBQUNDO0FBQ0FWLE9BREE7QUFFQUcsUUFBSSxDQUFDUSxPQUFMLEVBRkE7QUFHQVQsT0FKRDs7QUFNQSxDQWJNO0FBY1A7Z0NBQ08sSUFBTVUsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBU0MsSUFBVCxFQUFlO0FBQ3pDLFNBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN2Q0MsT0FBRyxDQUFDTCxXQUFKLENBQWdCO0FBQ2ZNLFdBQUssRUFBRUwsSUFBSSxDQUFDSyxLQUFMLElBQWMsQ0FETixFQUNTO0FBQ3hCQyxjQUFRLEVBQUVOLElBQUksQ0FBQ00sUUFBTCxJQUFpQixDQUFDLFVBQUQsRUFBYSxZQUFiLENBRlosRUFFd0M7QUFDdkRDLGdCQUFVLEVBQUVQLElBQUksQ0FBQ08sVUFBTCxJQUFtQixDQUFDLE9BQUQsRUFBVSxRQUFWLENBSGhCLEVBR3FDO0FBQ3BEQyxh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TSxDQUFQO0FBMElBLENBM0lNLEMiLCJmaWxlIjoiNDEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBxaW5pdVVwbG9hZGVyID0gcmVxdWlyZShcIi4vcWluaXVVcGxvYWRlclwiKTtcclxuLy/kuIPniZvkupHkuIrkvKDmlofku7blkb3lkI1cclxuZXhwb3J0IGNvbnN0IHJhbmRvbUNoYXIgPSBmdW5jdGlvbihsLCB1cmwgPSBcIlwiKSB7XHJcblx0Y29uc3QgeCA9IFwiMDEyMzQ1Njc4OXF3ZXJ0eXVpb3Bsa2poZ2Zkc2F6eGN2Ym5tXCI7XHJcblx0bGV0IHRtcCA9IFwiXCI7XHJcblx0bGV0IHRpbWUgPSBuZXcgRGF0ZSgpO1xyXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgbDsgaSsrKSB7XHJcblx0XHR0bXAgKz0geC5jaGFyQXQoTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDApICUgeC5sZW5ndGgpO1xyXG5cdH1cclxuXHRyZXR1cm4gKFxyXG5cdFx0XCJmaWxlL1wiICtcclxuXHRcdHVybCArXHJcblx0XHR0aW1lLmdldFRpbWUoKSArXHJcblx0XHR0bXBcclxuXHQpO1xyXG59XHJcbi8v5Zu+54mH6YCJ5oupXHJcbmV4cG9ydCBjb25zdCBjaG9vc2VJbWFnZSA9IGZ1bmN0aW9uKGRhdGEpIHtcclxuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0dW5pLmNob29zZUltYWdlKHtcclxuXHRcdFx0Y291bnQ6IGRhdGEuY291bnQgfHwgOSwgLy/pu5jorqQ5XHJcblx0XHRcdHNpemVUeXBlOiBkYXRhLnNpemVUeXBlIHx8IFsnb3JpZ2luYWwnLCAnY29tcHJlc3NlZCddLCAvL+WPr+S7peaMh+WumuaYr+WOn+Wbvui/mOaYr+WOi+e8qeWbvu+8jOm7mOiupOS6jOiAhemDveaciVxyXG5cdFx0XHRzb3VyY2VUeXBlOiBkYXRhLnNvdXJjZVR5cGUgfHwgWydhbGJ1bScsICdjYW1lcmEnXSwgLy/ku47nm7jlhozpgInmi6lcclxuXHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0cmVzb2x2ZShyZXMudGVtcEZpbGVzKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0ZmFpbDogZXJyID0+IHtcclxuXHRcdFx0XHRyZWplY3QoZXJyKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fSk7XHJcbn1cclxuLy/op4bpopHpgInmi6lcclxuZXhwb3J0IGNvbnN0IGNob29zZVZpZGVvID0gZnVuY3Rpb24oZGF0YSkge1xyXG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHR1bmkuY2hvb3NlVmlkZW8oe1xyXG5cdFx0XHRzb3VyY2VUeXBlOiBkYXRhLnNvdXJjZVR5cGUgfHwgWydhbGJ1bScsICdjYW1lcmEnXSwgLy/ku47nm7jlhozpgInmi6lcclxuXHRcdFx0Y29tcHJlc3NlZDogZGF0YS5jb21wcmVzc2VkIHx8IGZhbHNlLCAvL+aYr+WQpuWOi+e8qeaJgOmAieeahOinhumikea6kOaWh+S7tu+8jOm7mOiupOWAvOS4uiB0cnVl77yM6ZyA6KaB5Y6L57yp44CCXHJcblx0XHRcdG1heER1cmF0aW9uOiBkYXRhLm1heER1cmF0aW9uIHx8IDYwLCAvL+aLjeaRhOinhumikeacgOmVv+aLjeaRhOaXtumXtO+8jOWNleS9jeenkuOAguacgOmVv+aUr+aMgSA2MCDnp5LjgIJcclxuXHRcdFx0Y2FtZXJhOiBkYXRhLmNhbWVyYSB8fCAnYmFjaycsIC8vJ2Zyb250J+OAgSdiYWNrJ++8jOm7mOiupCdiYWNrJ1xyXG5cdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRsZXQgZmlsZXMgPSBbe1xyXG5cdFx0XHRcdFx0cGF0aDogcmVzLnRlbXBGaWxlUGF0aFxyXG5cdFx0XHRcdH1dO1xyXG5cclxuXHRcdFx0XHRmaWxlc1swXS5kdXJhdGlvbiA9IHJlcy5kdXJhdGlvbjtcclxuXHRcdFx0XHRmaWxlc1swXS5zaXplID0gcmVzLnNpemU7XHJcblx0XHRcdFx0ZmlsZXNbMF0uaGVpZ2h0ID0gcmVzLmhlaWdodDtcclxuXHRcdFx0XHRmaWxlc1swXS53aWR0aCA9IHJlcy53aWR0aDtcclxuXHJcblxyXG5cclxuXHJcblx0XHRcdFx0cmVzb2x2ZShmaWxlcyk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGZhaWw6IGVyciA9PiB7XHJcblx0XHRcdFx0cmVqZWN0KGVycik7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH0pO1xyXG59XHJcbi8vIOS4g+eJm+S6keS4iuS8oFxyXG5leHBvcnQgY29uc3QgcWluaXVVcGxvYWQgPSBmdW5jdGlvbihyZXF1ZXN0SW5mbywgZ2V0UW5Ub2tlbikge1xyXG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRpZiAoQXJyYXkuaXNBcnJheShyZXF1ZXN0SW5mby5maWxlcykpIHtcclxuXHRcdFx0bGV0IGxlbiA9IHJlcXVlc3RJbmZvLmZpbGVzLmxlbmd0aDtcclxuXHRcdFx0bGV0IGZpbGVMaXN0ID0gbmV3IEFycmF5O1xyXG5cdFx0XHRpZiAoZ2V0UW5Ub2tlbikge1xyXG5cdFx0XHRcdGdldFFuVG9rZW4ocW5SZXMgPT4ge1xyXG5cdFx0XHRcdFx0LypcclxuXHRcdFx0XHRcdCAq5o6l5Y+j6L+U5Zue5Y+C5pWw77yaXHJcblx0XHRcdFx0XHQgKnZpc2l0UHJlZml4Ouiuv+mXruaWh+S7tueahOWfn+WQjVxyXG5cdFx0XHRcdFx0ICp0b2tlbjrkuIPniZvkupHkuIrkvKB0b2tlblxyXG5cdFx0XHRcdFx0ICpmb2xkZXJQYXRoOuS4iuS8oOeahOaWh+S7tuWkuVxyXG5cdFx0XHRcdFx0ICpyZWdpb246IOWcsOWMuiDpu5jorqTkuLrvvJpTQ05cclxuXHRcdFx0XHRcdCAqL1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwcmVmaXhMZW4gPSBxblJlcy52aXNpdFByZWZpeC5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocW5SZXMudmlzaXRQcmVmaXguY2hhckF0KHByZWZpeExlbiAtIDEpID09ICcvJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHFuUmVzLnZpc2l0UHJlZml4ID0gcW5SZXMudmlzaXRQcmVmaXguc3Vic3RyaW5nKDAsIHByZWZpeExlbiAtIDEpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cdFx0XHRcdFx0dXBsb2FkRmlsZSgwKTtcclxuXHJcblx0XHRcdFx0XHRmdW5jdGlvbiB1cGxvYWRGaWxlKGkpIHtcclxuXHRcdFx0XHRcdFx0bGV0IGl0ZW0gPSByZXF1ZXN0SW5mby5maWxlc1tpXTtcclxuXHRcdFx0XHRcdFx0bGV0IHVwZGF0ZVVybCA9IHJhbmRvbUNoYXIoMTAsIHFuUmVzLmZvbGRlclBhdGgpO1xyXG5cdFx0XHRcdFx0XHRsZXQgZmlsZURhdGEgPSB7XHJcblx0XHRcdFx0XHRcdFx0ZmlsZUluZGV4OiBpLFxyXG5cdFx0XHRcdFx0XHRcdGZpbGVzOiByZXF1ZXN0SW5mby5maWxlcyxcclxuXHRcdFx0XHRcdFx0XHQuLi5pdGVtXHJcblx0XHRcdFx0XHRcdH07XHJcblx0XHRcdFx0XHRcdGlmIChpdGVtLm5hbWUpIHtcclxuXHRcdFx0XHRcdFx0XHRmaWxlRGF0YS5uYW1lID0gaXRlbS5uYW1lO1xyXG5cdFx0XHRcdFx0XHRcdGxldCBuYW1lQXJyID0gaXRlbS5uYW1lLnNwbGl0KFwiLlwiKTtcclxuXHRcdFx0XHRcdFx0XHR1cGRhdGVVcmwgKz0gXCIuXCIgKyBuYW1lQXJyW25hbWVBcnIubGVuZ3RoIC0gMV07XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0Ly8g5Lqk57uZ5LiD54mb5LiK5LygXHJcblx0XHRcdFx0XHRcdHFpbml1VXBsb2FkZXIudXBsb2FkKGl0ZW0ucGF0aCB8fCBpdGVtLCAocmVzKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0ZmlsZURhdGEudXJsID0gcmVzLmltYWdlVVJMO1xyXG5cdFx0XHRcdFx0XHRcdHJlcXVlc3RJbmZvLm9uRWFjaFVwZGF0ZSAmJiByZXF1ZXN0SW5mby5vbkVhY2hVcGRhdGUoe1xyXG5cdFx0XHRcdFx0XHRcdFx0dXJsOiByZXMuaW1hZ2VVUkwsXHJcblx0XHRcdFx0XHRcdFx0XHQuLi5maWxlRGF0YVxyXG5cdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdGZpbGVMaXN0LnB1c2gocmVzLmltYWdlVVJMKTtcclxuXHRcdFx0XHRcdFx0XHRpZiAobGVuIC0gMSA+IGkpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHVwbG9hZEZpbGUoaSArIDEpO1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXNvbHZlKGZpbGVMaXN0KTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0sIChlcnJvcikgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHJlamVjdChlcnJvcik7XHJcblx0XHRcdFx0XHRcdH0sIHtcclxuXHRcdFx0XHRcdFx0XHRyZWdpb246IHFuUmVzLnJlZ2lvbiB8fCAnU0NOJywgLy/lnLDljLpcclxuXHRcdFx0XHRcdFx0XHRkb21haW46IHFuUmVzLnZpc2l0UHJlZml4LCAvLyBidWNrZXQg5Z+f5ZCN77yM5LiL6L296LWE5rqQ5pe255So5Yiw44CCXHJcblx0XHRcdFx0XHRcdFx0a2V5OiB1cGRhdGVVcmwsXHJcblx0XHRcdFx0XHRcdFx0dXB0b2tlbjogcW5SZXMudG9rZW4sIC8vIOeUseWFtuS7lueoi+W6j+eUn+aIkOS4g+eJmyB1cHRva2VuXHJcblx0XHRcdFx0XHRcdFx0dXB0b2tlblVSTDogJ1VwVG9rZW5VUkwuY29tL3VwdG9rZW4nIC8vIOS4iuS8oOWcsOWdgFxyXG5cdFx0XHRcdFx0XHR9LCAocmVzKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2cocmVxdWVzdEluZm8pO1xyXG5cdFx0XHRcdFx0XHRcdHJlcXVlc3RJbmZvLm9uUHJvZ3Jlc3NVcGRhdGUgJiYgcmVxdWVzdEluZm8ub25Qcm9ncmVzc1VwZGF0ZShPYmplY3QuYXNzaWduKHt9LCBmaWxlRGF0YSwgcmVzKSk7XHJcblx0XHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ+S4iuS8oOi/m+W6picsIHJlcy5wcm9ncmVzcylcclxuXHRcdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygn5bey57uP5LiK5Lyg55qE5pWw5o2u6ZW/5bqmJywgcmVzLnRvdGFsQnl0ZXNTZW50KVxyXG5cdFx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKCfpooTmnJ/pnIDopoHkuIrkvKDnmoTmlbDmja7mgLvplb/luqYnLCByZXMudG90YWxCeXRlc0V4cGVjdGVkVG9TZW5kKVxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZWplY3Qoe1xyXG5cdFx0XHRcdFx0ZXJyTXNnOiBcIuivt+a3u+WKoOS4g+eJm+S6keWbnuiwg+aWueazle+8mmdldFFuVG9rZW5cIixcclxuXHRcdFx0XHRcdHN0YXR1c0NvZGU6IDBcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmVqZWN0KHtcclxuXHRcdFx0XHRlcnJNc2c6IFwiZmlsZXMg5b+F6aG75piv5pWw57uE57G75Z6LXCIsXHJcblx0XHRcdFx0c3RhdHVzQ29kZTogMFxyXG5cdFx0XHR9KTtcclxuXHRcdH07XHJcblx0fSk7XHJcbn1cclxuLy8g5pyN5Yqh5ZmoVVJM5LiK5LygXHJcbmV4cG9ydCBjb25zdCB1cmxVcGxvYWQgPSBmdW5jdGlvbihyZXF1ZXN0SW5mbywgZGF0YUZhY3RvcnkpIHtcclxuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0Ly8g5pys5Zyw5paH5Lu25LiK5Lyg5Y675o6J6buY6K6kQ29udGVudC1UeXBlXHJcblx0XHRpZiAocmVxdWVzdEluZm8uaGVhZGVyWydDb250ZW50LVR5cGUnXSkge1xyXG5cdFx0XHRkZWxldGUgcmVxdWVzdEluZm8uaGVhZGVyWydDb250ZW50LVR5cGUnXTtcclxuXHRcdH1cclxuXHRcdC8vIOacrOWcsOaWh+S7tuS4iuS8oOWOu+aOiem7mOiupENvbnRlbnQtVHlwZVxyXG5cdFx0aWYgKHJlcXVlc3RJbmZvLmhlYWRlclsnY29udGVudC10eXBlJ10pIHtcclxuXHRcdFx0ZGVsZXRlIHJlcXVlc3RJbmZvLmhlYWRlclsnY29udGVudC10eXBlJ107XHJcblx0XHR9XHJcblx0XHRpZiAoQXJyYXkuaXNBcnJheShyZXF1ZXN0SW5mby5maWxlcykpIHtcclxuXHJcblx0XHRcdGxldCBmaWxlcyA9IFtdO1xyXG5cdFx0XHRsZXQgZmlsZURhdGEgPSB7XHJcblx0XHRcdFx0ZmlsZXM6IHJlcXVlc3RJbmZvLmZpbGVzLFxyXG5cdFx0XHRcdG5hbWU6IHJlcXVlc3RJbmZvLm5hbWUgfHwgXCJmaWxlXCJcclxuXHRcdFx0fTtcclxuXHRcdFx0cmVxdWVzdEluZm8uZmlsZXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBmaWxlSW5mbyA9IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiByZXF1ZXN0SW5mby5uYW1lIHx8IFwiZmlsZVwiLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGlmKGl0ZW0ucGF0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsZUluZm8udXJpID0gaXRlbS5wYXRoO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWxlSW5mby5maWxlID0gaXRlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHRcdFx0XHRmaWxlcy5wdXNoKGZpbGVJbmZvKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdGxldCBjb25maWcgPSB7XHJcblx0XHRcdFx0dXJsOiByZXF1ZXN0SW5mby51cmwsXHJcblx0XHRcdFx0ZmlsZXM6IGZpbGVzLFxyXG5cdFx0XHRcdGhlYWRlcjogcmVxdWVzdEluZm8uaGVhZGVyLCAvL+WKoOWFpeivt+axguWktFxyXG5cdFx0XHRcdHN1Y2Nlc3M6IChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRcdFx0Ly/mmK/lkKbnlKjlpJbpg6jnmoTmlbDmja7lpITnkIbmlrnms5VcclxuXHRcdFx0XHRcdGlmIChyZXF1ZXN0SW5mby5pc0ZhY3RvcnkgJiYgZGF0YUZhY3RvcnkpIHtcclxuXHRcdFx0XHRcdFx0Ly/mlbDmja7lpITnkIZcclxuXHRcdFx0XHRcdFx0ZGF0YUZhY3Rvcnkoe1xyXG5cdFx0XHRcdFx0XHRcdC4uLnJlcXVlc3RJbmZvLFxyXG5cdFx0XHRcdFx0XHRcdHJlc3BvbnNlOiByZXNwb25zZSxcclxuXHRcdFx0XHRcdFx0fSkudGhlbihkYXRhID0+IHtcclxuXHRcdFx0XHRcdFx0XHRyZXF1ZXN0SW5mby5vbkVhY2hVcGRhdGUgJiYgcmVxdWVzdEluZm8ub25FYWNoVXBkYXRlKHtcclxuXHRcdFx0XHRcdFx0XHRcdGRhdGE6IGRhdGEsXHJcblx0XHRcdFx0XHRcdFx0XHQuLi5maWxlRGF0YVxyXG5cdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdHJlc29sdmUoZGF0YSk7XHJcblx0XHRcdFx0XHRcdH0sZXJyID0+IHtcclxuXHRcdFx0XHRcdFx0XHRyZWplY3QoZXJyKTtcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRyZXF1ZXN0SW5mby5vbkVhY2hVcGRhdGUgJiYgcmVxdWVzdEluZm8ub25FYWNoVXBkYXRlKHtcclxuXHRcdFx0XHRcdFx0XHRkYXRhOiByZXNwb25zZSxcclxuXHRcdFx0XHRcdFx0XHQuLi5maWxlRGF0YVxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0cmVzb2x2ZShyZXNwb25zZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRmYWlsOiAoZXJyKSA9PiB7XHJcblx0XHRcdFx0XHRyZWplY3QoZXJyKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH07XHJcblx0XHRcdGlmIChyZXF1ZXN0SW5mby5kYXRhKSB7XHJcblx0XHRcdFx0Y29uZmlnLmZvcm1EYXRhID0gcmVxdWVzdEluZm8uZGF0YTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjb25zdCB1cGxvYWRUYXNrID0gdW5pLnVwbG9hZEZpbGUoY29uZmlnKTtcclxuXHRcdFx0dXBsb2FkVGFzay5vblByb2dyZXNzVXBkYXRlKHJlcyA9PiB7XHJcblx0XHRcdFx0cmVxdWVzdEluZm8ub25Qcm9ncmVzc1VwZGF0ZSAmJiByZXF1ZXN0SW5mby5vblByb2dyZXNzVXBkYXRlKE9iamVjdC5hc3NpZ24oe30sIGZpbGVEYXRhLCByZXMpKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJlamVjdCh7XHJcblx0XHRcdFx0ZXJyTXNnOiBcImZpbGVzIOW/hemhu+aYr+aVsOe7hOexu+Wei1wiLFxyXG5cdFx0XHRcdHN0YXR1c0NvZGU6IDBcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fSk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///41\n");

/***/ }),
/* 42 */
/*!***********************************************************************!*\
  !*** D:/uniapp/uniapp-simple/plugins/request/upload/qiniuUploader.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(__f__, wx) {// created by gpake\n(function () {\n\n  var config = {\n    qiniuRegion: '',\n    qiniuImageURLPrefix: '',\n    qiniuUploadToken: '',\n    qiniuUploadTokenURL: '',\n    qiniuUploadTokenFunction: null,\n    qiniuShouldUseQiniuFileName: false };\n\n\n  module.exports = {\n    init: init,\n    upload: upload };\n\n\n  // 在整个程序生命周期中，只需要 init 一次即可\n  // 如果需要变更参数，再调用 init 即可\n  function init(options) {\n    config = {\n      qiniuRegion: '',\n      qiniuImageURLPrefix: '',\n      qiniuUploadToken: '',\n      qiniuUploadTokenURL: '',\n      qiniuUploadTokenFunction: null,\n      qiniuShouldUseQiniuFileName: false };\n\n    updateConfigWithOptions(options);\n  }\n\n  function updateConfigWithOptions(options) {\n    if (options.region) {\n      config.qiniuRegion = options.region;\n    } else {\n      __f__(\"error\", 'qiniu uploader need your bucket region', \" at plugins/request/upload/qiniuUploader.js:36\");\n    }\n    if (options.uptoken) {\n      config.qiniuUploadToken = options.uptoken;\n    } else if (options.uptokenURL) {\n      config.qiniuUploadTokenURL = options.uptokenURL;\n    } else if (options.uptokenFunc) {\n      config.qiniuUploadTokenFunction = options.uptokenFunc;\n    }\n    if (options.domain) {\n      config.qiniuImageURLPrefix = options.domain;\n    }\n    config.qiniuShouldUseQiniuFileName = options.shouldUseQiniuFileName;\n  }\n\n  function upload(filePath, success, fail, options, progress, cancelTask) {\n    if (null == filePath) {\n      __f__(\"error\", 'qiniu uploader need filePath to upload', \" at plugins/request/upload/qiniuUploader.js:53\");\n      return;\n    }\n    if (options) {\n      updateConfigWithOptions(options);\n    }\n    if (config.qiniuUploadToken) {\n      doUpload(filePath, success, fail, options, progress, cancelTask);\n    } else if (config.qiniuUploadTokenURL) {\n      getQiniuToken(function () {\n        doUpload(filePath, success, fail, options, progress, cancelTask);\n      });\n    } else if (config.qiniuUploadTokenFunction) {\n      config.qiniuUploadToken = config.qiniuUploadTokenFunction();\n      if (null == config.qiniuUploadToken && config.qiniuUploadToken.length > 0) {\n        __f__(\"error\", 'qiniu UploadTokenFunction result is null, please check the return value', \" at plugins/request/upload/qiniuUploader.js:68\");\n        return;\n      }\n      doUpload(filePath, success, fail, options, progress, cancelTask);\n    } else {\n      __f__(\"error\", 'qiniu uploader need one of [uptoken, uptokenURL, uptokenFunc]', \" at plugins/request/upload/qiniuUploader.js:73\");\n      return;\n    }\n  }\n\n  function doUpload(filePath, _success, _fail, options, progress, cancelTask) {\n    if (null == config.qiniuUploadToken && config.qiniuUploadToken.length > 0) {\n      __f__(\"error\", 'qiniu UploadToken is null, please check the init config or networking', \" at plugins/request/upload/qiniuUploader.js:80\");\n      return;\n    }\n    var url = uploadURLFromRegionCode(config.qiniuRegion);\n    var fileName = filePath.split('//')[1];\n    if (options && options.key) {\n      fileName = options.key;\n    }\n    var formData = {\n      'token': config.qiniuUploadToken };\n\n    if (!config.qiniuShouldUseQiniuFileName) {\n      formData['key'] = fileName;\n    }\n    var uploadTask = wx.uploadFile({\n      url: url,\n      filePath: filePath,\n      name: 'file',\n      formData: formData,\n      success: function success(res) {\n        var dataString = res.data;\n        if (res.data.hasOwnProperty('type') && res.data.type === 'Buffer') {\n          dataString = String.fromCharCode.apply(null, res.data.data);\n        }\n        try {\n          var dataObject = JSON.parse(dataString);\n          //do something\n          var imageUrl = config.qiniuImageURLPrefix + '/' + dataObject.key;\n          dataObject.imageURL = imageUrl;\n          if (_success) {\n            _success(dataObject);\n          }\n        } catch (e) {\n          __f__(\"log\", 'parse JSON failed, origin String is: ' + dataString, \" at plugins/request/upload/qiniuUploader.js:113\");\n          if (_fail) {\n            _fail(e);\n          }\n        }\n      },\n      fail: function fail(error) {\n        __f__(\"error\", error, \" at plugins/request/upload/qiniuUploader.js:120\");\n        if (_fail) {\n          _fail(error);\n        }\n      } });\n\n\n    uploadTask.onProgressUpdate(function (res) {\n      progress && progress(res);\n    });\n\n    cancelTask && cancelTask(function () {\n      uploadTask.abort();\n    });\n  }\n\n  function getQiniuToken(callback) {\n    wx.request({\n      url: config.qiniuUploadTokenURL,\n      success: function success(res) {\n        var token = res.data.uptoken;\n        if (token && token.length > 0) {\n          config.qiniuUploadToken = token;\n          if (callback) {\n            callback();\n          }\n        } else {\n          __f__(\"error\", 'qiniuUploader cannot get your token, please check the uptokenURL or server', \" at plugins/request/upload/qiniuUploader.js:147\");\n        }\n      },\n      fail: function fail(error) {\n        __f__(\"error\", 'qiniu UploadToken is null, please check the init config or networking: ' + error, \" at plugins/request/upload/qiniuUploader.js:151\");\n      } });\n\n  }\n\n  function uploadURLFromRegionCode(code) {\n    var uploadURL = null;\n    switch (code) {\n      case 'ECN':uploadURL = 'https://up.qbox.me';break;\n      case 'NCN':uploadURL = 'https://up-z1.qbox.me';break;\n      case 'SCN':uploadURL = 'https://up-z2.qbox.me';break;\n      case 'NA':uploadURL = 'https://up-na0.qbox.me';break;\n      case 'ASG':uploadURL = 'https://up-as0.qbox.me';break;\n      default:__f__(\"error\", 'please make the region is with one of [ECN, SCN, NCN, NA, ASG]', \" at plugins/request/upload/qiniuUploader.js:164\");}\n\n    return uploadURL;\n  }\n\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 30)[\"default\"], __webpack_require__(/*! @dcloudio/uni-mp-weixin/dist/mp.js */ 43)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGx1Z2lucy9yZXF1ZXN0L3VwbG9hZC9xaW5pdVVwbG9hZGVyLmpzIl0sIm5hbWVzIjpbImNvbmZpZyIsInFpbml1UmVnaW9uIiwicWluaXVJbWFnZVVSTFByZWZpeCIsInFpbml1VXBsb2FkVG9rZW4iLCJxaW5pdVVwbG9hZFRva2VuVVJMIiwicWluaXVVcGxvYWRUb2tlbkZ1bmN0aW9uIiwicWluaXVTaG91bGRVc2VRaW5pdUZpbGVOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyIsImluaXQiLCJ1cGxvYWQiLCJvcHRpb25zIiwidXBkYXRlQ29uZmlnV2l0aE9wdGlvbnMiLCJyZWdpb24iLCJ1cHRva2VuIiwidXB0b2tlblVSTCIsInVwdG9rZW5GdW5jIiwiZG9tYWluIiwic2hvdWxkVXNlUWluaXVGaWxlTmFtZSIsImZpbGVQYXRoIiwic3VjY2VzcyIsImZhaWwiLCJwcm9ncmVzcyIsImNhbmNlbFRhc2siLCJkb1VwbG9hZCIsImdldFFpbml1VG9rZW4iLCJsZW5ndGgiLCJ1cmwiLCJ1cGxvYWRVUkxGcm9tUmVnaW9uQ29kZSIsImZpbGVOYW1lIiwic3BsaXQiLCJrZXkiLCJmb3JtRGF0YSIsInVwbG9hZFRhc2siLCJ3eCIsInVwbG9hZEZpbGUiLCJuYW1lIiwicmVzIiwiZGF0YVN0cmluZyIsImRhdGEiLCJoYXNPd25Qcm9wZXJ0eSIsInR5cGUiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJhcHBseSIsImRhdGFPYmplY3QiLCJKU09OIiwicGFyc2UiLCJpbWFnZVVybCIsImltYWdlVVJMIiwiZSIsImVycm9yIiwib25Qcm9ncmVzc1VwZGF0ZSIsImFib3J0IiwiY2FsbGJhY2siLCJyZXF1ZXN0IiwidG9rZW4iLCJjb2RlIiwidXBsb2FkVVJMIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLENBQUMsWUFBWTs7QUFFWCxNQUFJQSxNQUFNLEdBQUc7QUFDWEMsZUFBVyxFQUFFLEVBREY7QUFFWEMsdUJBQW1CLEVBQUUsRUFGVjtBQUdYQyxv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RyxFQUFFM0IsTUFBTSxDQUFDSSxtQkFESDtBQUVUZ0IsYUFBTyxFQUFFLGlCQUFVaUIsR0FBVixFQUFlO0FBQ3RCLFlBQUltQixLQUFLLEdBQUduQixHQUFHLENBQUNFLElBQUosQ0FBU3pCLE9BQXJCO0FBQ0EsWUFBSTBDLEtBQUssSUFBSUEsS0FBSyxDQUFDOUIsTUFBTixHQUFlLENBQTVCLEVBQStCO0FBQzdCMUIsZ0JBQU0sQ0FBQ0csZ0JBQVAsR0FBMEJxRCxLQUExQjtBQUNBLGNBQUlGLFFBQUosRUFBYztBQUNaQSxvQkFBUTtBQUNUO0FBQ0YsU0FMRCxNQUtPO0FBQ0wseUJBQWMsNEVBQWQ7QUFDRDtBQUNGLE9BWlE7QUFhVGpDLFVBQUksRUFBRSxjQUFVOEIsS0FBVixFQUFpQjtBQUNyQix1QkFBYyw0RUFBNEVBLEtBQTFGO0FBQ0QsT0FmUSxFQUFYOztBQWlCRDs7QUFFRCxXQUFTdkIsdUJBQVQsQ0FBaUM2QixJQUFqQyxFQUF1QztBQUNyQyxRQUFJQyxTQUFTLEdBQUcsSUFBaEI7QUFDQSxZQUFRRCxJQUFSO0FBQ0UsV0FBSyxLQUFMLENBQVlDLFNBQVMsR0FBRyxvQkFBWixDQUFrQztBQUM5QyxXQUFLLEtBQUwsQ0FBWUEsU0FBUyxHQUFHLHVCQUFaLENBQXFDO0FBQ2pELFdBQUssS0FBTCxDQUFZQSxTQUFTLEdBQUcsdUJBQVosQ0FBcUM7QUFDakQsV0FBSyxJQUFMLENBQVdBLFNBQVMsR0FBRyx3QkFBWixDQUFzQztBQUNqRCxXQUFLLEtBQUwsQ0FBWUEsU0FBUyxHQUFHLHdCQUFaLENBQXNDO0FBQ2xELGNBQVMsZUFBYyxnRUFBZCxxREFOWDs7QUFRQSxXQUFPQSxTQUFQO0FBQ0Q7O0FBRUYsQ0F2S0QsSSIsImZpbGUiOiI0Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNyZWF0ZWQgYnkgZ3Bha2VcclxuKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgdmFyIGNvbmZpZyA9IHtcclxuICAgIHFpbml1UmVnaW9uOiAnJyxcclxuICAgIHFpbml1SW1hZ2VVUkxQcmVmaXg6ICcnLFxyXG4gICAgcWluaXVVcGxvYWRUb2tlbjogJycsXHJcbiAgICBxaW5pdVVwbG9hZFRva2VuVVJMOiAnJyxcclxuICAgIHFpbml1VXBsb2FkVG9rZW5GdW5jdGlvbjogbnVsbCxcclxuICAgIHFpbml1U2hvdWxkVXNlUWluaXVGaWxlTmFtZTogZmFsc2VcclxuICB9XHJcblxyXG4gIG1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgaW5pdDogaW5pdCxcclxuICAgIHVwbG9hZDogdXBsb2FkLFxyXG4gIH1cclxuXHJcbiAgLy8g5Zyo5pW05Liq56iL5bqP55Sf5ZG95ZGo5pyf5Lit77yM5Y+q6ZyA6KaBIGluaXQg5LiA5qyh5Y2z5Y+vXHJcbiAgLy8g5aaC5p6c6ZyA6KaB5Y+Y5pu05Y+C5pWw77yM5YaN6LCD55SoIGluaXQg5Y2z5Y+vXHJcbiAgZnVuY3Rpb24gaW5pdChvcHRpb25zKSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIHFpbml1UmVnaW9uOiAnJyxcclxuICAgICAgcWluaXVJbWFnZVVSTFByZWZpeDogJycsXHJcbiAgICAgIHFpbml1VXBsb2FkVG9rZW46ICcnLFxyXG4gICAgICBxaW5pdVVwbG9hZFRva2VuVVJMOiAnJyxcclxuICAgICAgcWluaXVVcGxvYWRUb2tlbkZ1bmN0aW9uOiBudWxsLFxyXG4gICAgICBxaW5pdVNob3VsZFVzZVFpbml1RmlsZU5hbWU6IGZhbHNlXHJcbiAgICB9O1xyXG4gICAgdXBkYXRlQ29uZmlnV2l0aE9wdGlvbnMob3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB1cGRhdGVDb25maWdXaXRoT3B0aW9ucyhvcHRpb25zKSB7XHJcbiAgICBpZiAob3B0aW9ucy5yZWdpb24pIHtcclxuICAgICAgY29uZmlnLnFpbml1UmVnaW9uID0gb3B0aW9ucy5yZWdpb247XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdxaW5pdSB1cGxvYWRlciBuZWVkIHlvdXIgYnVja2V0IHJlZ2lvbicpO1xyXG4gICAgfVxyXG4gICAgaWYgKG9wdGlvbnMudXB0b2tlbikge1xyXG4gICAgICBjb25maWcucWluaXVVcGxvYWRUb2tlbiA9IG9wdGlvbnMudXB0b2tlbjtcclxuICAgIH0gZWxzZSBpZiAob3B0aW9ucy51cHRva2VuVVJMKSB7XHJcbiAgICAgIGNvbmZpZy5xaW5pdVVwbG9hZFRva2VuVVJMID0gb3B0aW9ucy51cHRva2VuVVJMO1xyXG4gICAgfSBlbHNlIGlmIChvcHRpb25zLnVwdG9rZW5GdW5jKSB7XHJcbiAgICAgIGNvbmZpZy5xaW5pdVVwbG9hZFRva2VuRnVuY3Rpb24gPSBvcHRpb25zLnVwdG9rZW5GdW5jO1xyXG4gICAgfVxyXG4gICAgaWYgKG9wdGlvbnMuZG9tYWluKSB7XHJcbiAgICAgIGNvbmZpZy5xaW5pdUltYWdlVVJMUHJlZml4ID0gb3B0aW9ucy5kb21haW47XHJcbiAgICB9XHJcbiAgICBjb25maWcucWluaXVTaG91bGRVc2VRaW5pdUZpbGVOYW1lID0gb3B0aW9ucy5zaG91bGRVc2VRaW5pdUZpbGVOYW1lXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB1cGxvYWQoZmlsZVBhdGgsIHN1Y2Nlc3MsIGZhaWwsIG9wdGlvbnMsIHByb2dyZXNzLCBjYW5jZWxUYXNrKSB7XHJcbiAgICBpZiAobnVsbCA9PSBmaWxlUGF0aCkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdxaW5pdSB1cGxvYWRlciBuZWVkIGZpbGVQYXRoIHRvIHVwbG9hZCcpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAob3B0aW9ucykge1xyXG4gICAgICB1cGRhdGVDb25maWdXaXRoT3B0aW9ucyhvcHRpb25zKTtcclxuICAgIH1cclxuICAgIGlmIChjb25maWcucWluaXVVcGxvYWRUb2tlbikge1xyXG4gICAgICBkb1VwbG9hZChmaWxlUGF0aCwgc3VjY2VzcywgZmFpbCwgb3B0aW9ucywgcHJvZ3Jlc3MsIGNhbmNlbFRhc2spO1xyXG4gICAgfSBlbHNlIGlmIChjb25maWcucWluaXVVcGxvYWRUb2tlblVSTCkge1xyXG4gICAgICBnZXRRaW5pdVRva2VuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBkb1VwbG9hZChmaWxlUGF0aCwgc3VjY2VzcywgZmFpbCwgb3B0aW9ucywgcHJvZ3Jlc3MsIGNhbmNlbFRhc2spO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAoY29uZmlnLnFpbml1VXBsb2FkVG9rZW5GdW5jdGlvbikge1xyXG4gICAgICBjb25maWcucWluaXVVcGxvYWRUb2tlbiA9IGNvbmZpZy5xaW5pdVVwbG9hZFRva2VuRnVuY3Rpb24oKTtcclxuICAgICAgaWYgKG51bGwgPT0gY29uZmlnLnFpbml1VXBsb2FkVG9rZW4gJiYgY29uZmlnLnFpbml1VXBsb2FkVG9rZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ3Fpbml1IFVwbG9hZFRva2VuRnVuY3Rpb24gcmVzdWx0IGlzIG51bGwsIHBsZWFzZSBjaGVjayB0aGUgcmV0dXJuIHZhbHVlJyk7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgICAgZG9VcGxvYWQoZmlsZVBhdGgsIHN1Y2Nlc3MsIGZhaWwsIG9wdGlvbnMsIHByb2dyZXNzLCBjYW5jZWxUYXNrKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ3Fpbml1IHVwbG9hZGVyIG5lZWQgb25lIG9mIFt1cHRva2VuLCB1cHRva2VuVVJMLCB1cHRva2VuRnVuY10nKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZG9VcGxvYWQoZmlsZVBhdGgsIHN1Y2Nlc3MsIGZhaWwsIG9wdGlvbnMsIHByb2dyZXNzLCBjYW5jZWxUYXNrKSB7XHJcbiAgICBpZiAobnVsbCA9PSBjb25maWcucWluaXVVcGxvYWRUb2tlbiAmJiBjb25maWcucWluaXVVcGxvYWRUb2tlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ3Fpbml1IFVwbG9hZFRva2VuIGlzIG51bGwsIHBsZWFzZSBjaGVjayB0aGUgaW5pdCBjb25maWcgb3IgbmV0d29ya2luZycpO1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIHZhciB1cmwgPSB1cGxvYWRVUkxGcm9tUmVnaW9uQ29kZShjb25maWcucWluaXVSZWdpb24pO1xyXG4gICAgdmFyIGZpbGVOYW1lID0gZmlsZVBhdGguc3BsaXQoJy8vJylbMV07XHJcbiAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmtleSkge1xyXG4gICAgICBmaWxlTmFtZSA9IG9wdGlvbnMua2V5O1xyXG4gICAgfVxyXG4gICAgdmFyIGZvcm1EYXRhID0ge1xyXG4gICAgICAndG9rZW4nOiBjb25maWcucWluaXVVcGxvYWRUb2tlblxyXG4gICAgfTtcclxuICAgIGlmICghY29uZmlnLnFpbml1U2hvdWxkVXNlUWluaXVGaWxlTmFtZSkge1xyXG4gICAgICBmb3JtRGF0YVsna2V5J10gPSBmaWxlTmFtZVxyXG4gICAgfVxyXG4gICAgdmFyIHVwbG9hZFRhc2sgPSB3eC51cGxvYWRGaWxlKHtcclxuICAgICAgdXJsOiB1cmwsXHJcbiAgICAgIGZpbGVQYXRoOiBmaWxlUGF0aCxcclxuICAgICAgbmFtZTogJ2ZpbGUnLFxyXG4gICAgICBmb3JtRGF0YTogZm9ybURhdGEsXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICB2YXIgZGF0YVN0cmluZyA9IHJlcy5kYXRhXHJcbiAgICAgICAgaWYgKHJlcy5kYXRhLmhhc093blByb3BlcnR5KCd0eXBlJykgJiYgcmVzLmRhdGEudHlwZSA9PT0gJ0J1ZmZlcicpIHtcclxuICAgICAgICAgIGRhdGFTdHJpbmcgPSBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIHJlcy5kYXRhLmRhdGEpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICB2YXIgZGF0YU9iamVjdCA9IEpTT04ucGFyc2UoZGF0YVN0cmluZyk7XHJcbiAgICAgICAgICAvL2RvIHNvbWV0aGluZ1xyXG4gICAgICAgICAgdmFyIGltYWdlVXJsID0gY29uZmlnLnFpbml1SW1hZ2VVUkxQcmVmaXggKyAnLycgKyBkYXRhT2JqZWN0LmtleTtcclxuICAgICAgICAgIGRhdGFPYmplY3QuaW1hZ2VVUkwgPSBpbWFnZVVybDtcclxuICAgICAgICAgIGlmIChzdWNjZXNzKSB7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3MoZGF0YU9iamVjdCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ3BhcnNlIEpTT04gZmFpbGVkLCBvcmlnaW4gU3RyaW5nIGlzOiAnICsgZGF0YVN0cmluZylcclxuICAgICAgICAgIGlmIChmYWlsKSB7XHJcbiAgICAgICAgICAgIGZhaWwoZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBmYWlsOiBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICBpZiAoZmFpbCkge1xyXG4gICAgICAgICAgZmFpbChlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIHVwbG9hZFRhc2sub25Qcm9ncmVzc1VwZGF0ZSgocmVzKSA9PiB7XHJcbiAgICAgIHByb2dyZXNzICYmIHByb2dyZXNzKHJlcylcclxuICAgIH0pXHJcblxyXG4gICAgY2FuY2VsVGFzayAmJiBjYW5jZWxUYXNrKCgpID0+IHtcclxuICAgICAgdXBsb2FkVGFzay5hYm9ydCgpXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0UWluaXVUb2tlbihjYWxsYmFjaykge1xyXG4gICAgd3gucmVxdWVzdCh7XHJcbiAgICAgIHVybDogY29uZmlnLnFpbml1VXBsb2FkVG9rZW5VUkwsXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICB2YXIgdG9rZW4gPSByZXMuZGF0YS51cHRva2VuO1xyXG4gICAgICAgIGlmICh0b2tlbiAmJiB0b2tlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBjb25maWcucWluaXVVcGxvYWRUb2tlbiA9IHRva2VuO1xyXG4gICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3Fpbml1VXBsb2FkZXIgY2Fubm90IGdldCB5b3VyIHRva2VuLCBwbGVhc2UgY2hlY2sgdGhlIHVwdG9rZW5VUkwgb3Igc2VydmVyJylcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWw6IGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ3Fpbml1IFVwbG9hZFRva2VuIGlzIG51bGwsIHBsZWFzZSBjaGVjayB0aGUgaW5pdCBjb25maWcgb3IgbmV0d29ya2luZzogJyArIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHVwbG9hZFVSTEZyb21SZWdpb25Db2RlKGNvZGUpIHtcclxuICAgIHZhciB1cGxvYWRVUkwgPSBudWxsO1xyXG4gICAgc3dpdGNoIChjb2RlKSB7XHJcbiAgICAgIGNhc2UgJ0VDTic6IHVwbG9hZFVSTCA9ICdodHRwczovL3VwLnFib3gubWUnOyBicmVhaztcclxuICAgICAgY2FzZSAnTkNOJzogdXBsb2FkVVJMID0gJ2h0dHBzOi8vdXAtejEucWJveC5tZSc7IGJyZWFrO1xyXG4gICAgICBjYXNlICdTQ04nOiB1cGxvYWRVUkwgPSAnaHR0cHM6Ly91cC16Mi5xYm94Lm1lJzsgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ05BJzogdXBsb2FkVVJMID0gJ2h0dHBzOi8vdXAtbmEwLnFib3gubWUnOyBicmVhaztcclxuICAgICAgY2FzZSAnQVNHJzogdXBsb2FkVVJMID0gJ2h0dHBzOi8vdXAtYXMwLnFib3gubWUnOyBicmVhaztcclxuICAgICAgZGVmYXVsdDogY29uc29sZS5lcnJvcigncGxlYXNlIG1ha2UgdGhlIHJlZ2lvbiBpcyB3aXRoIG9uZSBvZiBbRUNOLCBTQ04sIE5DTiwgTkEsIEFTR10nKTtcclxuICAgIH1cclxuICAgIHJldHVybiB1cGxvYWRVUkw7XHJcbiAgfVxyXG5cclxufSkoKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///42\n");

/***/ }),
/* 43 */
/*!*********************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/mp.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports, "__esModule", { value: true });exports.Behavior = Behavior;exports.Component = Component;exports.Page = Page;exports.nextTick = exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 18));var _PROP_DEFAULT_VALUES;function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}

function parseData(data, vueComponentOptions) {
  if (!data) {
    return;
  }
  vueComponentOptions.mpOptions.data = data;
}

function parseComponents(vueComponentOptions) {
  vueComponentOptions.components = global.__wxVueOptions.components;
}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var SOURCE_KEY = '__data__';

var COMPONENT_LIFECYCLE = {
  created: 'onServiceCreated',
  attached: 'onServiceAttached',
  ready: 'mounted',
  moved: 'moved',
  detached: 'destroyed' };


var COMPONENT_LIFECYCLE_KEYS = Object.keys(COMPONENT_LIFECYCLE);

var PAGE_LIFETIMES = {
  show: 'onPageShow',
  hide: 'onPageHide',
  resize: 'onPageResize' };


var PAGE_LIFETIMES_KEYS = Object.keys(PAGE_LIFETIMES);

var PAGE_LIFECYCLE = [
'onLoad',
'onShow',
'onReady',
'onHide',
'onUnload',
'onPullDownRefresh',
'onReachBottom',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function parsePageMethods(mpComponentOptions, vueComponentOptions) {
  var methods = Object.create(null);
  Object.keys(mpComponentOptions).forEach(function (key) {
    var value = mpComponentOptions[key];
    if (isFn(value) && PAGE_LIFECYCLE.indexOf(key) === -1) {
      methods[key] = value;
    }
  });
  vueComponentOptions.methods = methods;
}

function parsePageLifecycle(mpComponentOptions, vueComponentOptions) {
  Object.keys(mpComponentOptions).forEach(function (key) {
    if (PAGE_LIFECYCLE.indexOf(key) !== -1) {
      vueComponentOptions[key] = mpComponentOptions[key];
    }
  });
}

function parsePage(mpComponentOptions) {
  var vueComponentOptions = {
    mixins: [],
    mpOptions: {} };


  parseComponents(vueComponentOptions);

  parseData(mpComponentOptions.data, vueComponentOptions);

  parsePageMethods(mpComponentOptions, vueComponentOptions);
  parsePageLifecycle(mpComponentOptions, vueComponentOptions);

  return vueComponentOptions;
}

function parseProperties(properties, vueComponentOptions) {
  if (!properties) {
    return;
  }
  vueComponentOptions.mpOptions.properties = properties;
}

function parseOptions(options, vueComponentOptions) {
  if (!options) {
    return;
  }
  vueComponentOptions.mpOptions.options = options;
}

function parseMethods(methods, vueComponentOptions) {
  if (!methods) {
    return;
  }
  if (methods.$emit) {
    console.warn('Method "$emit" conflicts with an existing Vue instance method');
    delete methods.$emit;
  }
  vueComponentOptions.methods = methods;
}

function parseLifecycle(mpComponentOptions, vueComponentOptions) {
  COMPONENT_LIFECYCLE_KEYS.forEach(function (name) {
    if (hasOwn(mpComponentOptions, name)) {
      (vueComponentOptions[COMPONENT_LIFECYCLE[name]] || (vueComponentOptions[COMPONENT_LIFECYCLE[name]] = [])).
      push(mpComponentOptions[name]);
    }
  });
}

var mpBehaviors = {
  'wx://form-field': {},
  'wx://component-export': {} };


function callDefinitionFilter(mpComponentOptions) {var

  behaviors =

  mpComponentOptions.behaviors,definitionFilter = mpComponentOptions.definitionFilter;

  var behaviorDefinitionFilters = [];

  if (Array.isArray(behaviors)) {
    behaviors.forEach(function (behavior) {
      behavior = typeof behavior === 'string' ? mpBehaviors[behavior] : behavior;
      if (behavior.definitionFilter) {
        behaviorDefinitionFilters.push(behavior.definitionFilter);
        behavior.definitionFilter.call(null, mpComponentOptions, []);
      }
    });
  }

  if (isFn(definitionFilter)) {
    return function (defFields) {
      definitionFilter(defFields, behaviorDefinitionFilters);
    };
  }
}

function parseDefinitionFilter(mpComponentOptions, vueComponentOptions) {
  callDefinitionFilter(mpComponentOptions);
}

function parseBehavior(behavior) {var

  data =



  behavior.data,methods = behavior.methods,behaviors = behavior.behaviors,properties = behavior.properties;

  var vueComponentOptions = {
    watch: {},
    mpOptions: {
      mpObservers: [] } };



  parseData(data, vueComponentOptions);
  parseMethods(methods, vueComponentOptions);
  parseBehaviors(behaviors, vueComponentOptions);
  parseProperties(properties, vueComponentOptions);

  parseLifecycle(behavior, vueComponentOptions);
  parseDefinitionFilter(behavior);

  return vueComponentOptions;
}

var BEHAVIORS = {
  'wx://form-field': {
    beforeCreate: function beforeCreate() {
      var mpOptions = this.$options.mpOptions;
      if (!mpOptions.properties) {
        mpOptions.properties = Object.create(null);
      }

      var props = mpOptions.properties;
      // TODO form submit,reset
      if (!hasOwn(props, 'name')) {
        props.name = {
          type: String };

      }
      if (!hasOwn(props, 'value')) {
        props.value = {
          type: String // 默认类型调整为 String,否则默认值为 null,导致一些自定义 input 显示不正确
        };
      }
    } } };



function parseBehaviors(behaviors, vueComponentOptions) {
  if (!behaviors) {
    return;
  }
  behaviors.forEach(function (behavior) {
    if (typeof behavior === 'string') {
      BEHAVIORS[behavior] && vueComponentOptions.mixins.push(BEHAVIORS[behavior]);
    } else {
      vueComponentOptions.mixins.push(parseBehavior(behavior));
    }
  });
}

function parseSinglePath(path) {
  return path.split('.');
}

function parseMultiPaths(paths) {
  return paths.split(',').map(function (path) {return parseSinglePath(path);});
}

function parseObservers(observers, vueComponentOptions) {
  if (!observers) {
    return;
  }var


  mpObservers =
  vueComponentOptions.mpOptions.mpObservers;

  Object.keys(observers).forEach(function (path) {
    mpObservers.push({
      paths: parseMultiPaths(path),
      observer: observers[path] });

  });
}

function relative(from, to) {
  if (to.indexOf('/') === 0) {
    from = '';
  }
  var fromArr = from.split('/');
  var toArr = to.split('/');
  fromArr.pop();
  while (toArr.length) {
    var part = toArr.shift();
    if (part !== '' && part !== '.') {
      if (part !== '..') {
        fromArr.push(part);
      } else {
        fromArr.pop();
      }
    }
  }
  return fromArr.join('/');
}

function parseRelations(relations, vueComponentOptions) {
  if (!relations) {
    return;
  }
  Object.keys(relations).forEach(function (name) {
    var relation = relations[name];
    relation.name = name;
    relation.target = relation.target ? String(relation.target) : relative(global.__wxRoute, name);
  });
  vueComponentOptions.mpOptions.relations = relations;
}

function parseExternalClasses(externalClasses, vueComponentOptions) {
  if (!externalClasses) {
    return;
  }
  if (!Array.isArray(externalClasses)) {
    externalClasses = [externalClasses];
  }
  vueComponentOptions.mpOptions.externalClasses = externalClasses;
  if (!vueComponentOptions.mpOptions.properties) {
    vueComponentOptions.mpOptions.properties = Object.create(null);
  }
  externalClasses.forEach(function (externalClass) {
    vueComponentOptions.mpOptions.properties[camelize(externalClass)] = {
      type: String,
      value: '' };

  });
}

function parseLifetimes(lifetimes, vueComponentOptions) {
  if (!lifetimes) {
    return;
  }
  parseLifecycle(lifetimes, vueComponentOptions);
}

function parsePageLifetimes(pageLifetimes, vueComponentOptions) {
  if (!pageLifetimes) {
    return;
  }
  PAGE_LIFETIMES_KEYS.forEach(function (key) {
    var lifetimeFn = pageLifetimes[key];
    isFn(lifetimeFn) && (vueComponentOptions[PAGE_LIFETIMES[key]] = lifetimeFn);
  });
}

function parseComponent(mpComponentOptions) {var

  data =









  mpComponentOptions.data,options = mpComponentOptions.options,methods = mpComponentOptions.methods,behaviors = mpComponentOptions.behaviors,lifetimes = mpComponentOptions.lifetimes,observers = mpComponentOptions.observers,relations = mpComponentOptions.relations,properties = mpComponentOptions.properties,pageLifetimes = mpComponentOptions.pageLifetimes,externalClasses = mpComponentOptions.externalClasses;

  var vueComponentOptions = {
    mixins: [],
    props: {},
    watch: {},
    mpOptions: {
      mpObservers: [] } };



  parseComponents(vueComponentOptions);

  parseData(data, vueComponentOptions);
  parseOptions(options, vueComponentOptions);
  parseMethods(methods, vueComponentOptions);
  parseBehaviors(behaviors, vueComponentOptions);
  parseLifetimes(lifetimes, vueComponentOptions);
  parseObservers(observers, vueComponentOptions);
  parseRelations(relations, vueComponentOptions);
  parseProperties(properties, vueComponentOptions);
  parsePageLifetimes(pageLifetimes, vueComponentOptions);
  parseExternalClasses(externalClasses, vueComponentOptions);

  parseLifecycle(mpComponentOptions, vueComponentOptions);
  parseDefinitionFilter(mpComponentOptions);

  return vueComponentOptions;
}

function initRelationHandlers(type, handler, target, ctx) {
  if (!handler) {
    return;
  }
  var name = "_$".concat(type, "Handlers");
  (ctx[name] || (ctx[name] = [])).push(function () {
    handler.call(ctx, target);
  });
}

function initLinkedHandlers(relation, target, ctx) {
  var type = 'linked';
  var name = relation.name;
  var relationNodes = ctx._$relationNodes || (ctx._$relationNodes = Object.create(null));
  (relationNodes[name] || (relationNodes[name] = [])).push(target);
  initRelationHandlers(type, relation[type], target, ctx);
}

function initUnlinkedHandlers(relation, target, ctx) {
  var type = 'unlinked';
  initRelationHandlers(type, relation[type], target, ctx);
}

function findParentRelation(parentVm, target, type) {
  var relations = parentVm &&
  parentVm.$options.mpOptions &&
  parentVm.$options.mpOptions.relations;

  if (!relations) {
    return [];
  }
  var name = Object.keys(relations).find(function (name) {
    var relation = relations[name];
    return relation.target === target && relation.type === type;
  });
  if (!name) {
    return [];
  }
  return [relations[name], parentVm];
}

function initParentRelation(vm, childRelation, match) {var _match =
  match(vm, vm.$options.mpOptions.path),_match2 = _slicedToArray(_match, 2),parentRelation = _match2[0],parentVm = _match2[1];
  if (!parentRelation) {
    return;
  }

  initLinkedHandlers(parentRelation, vm, parentVm);
  initLinkedHandlers(childRelation, parentVm, vm);

  initUnlinkedHandlers(parentRelation, vm, parentVm);
  initUnlinkedHandlers(childRelation, parentVm, vm);
}

function initRelation(relation, vm) {
  var type = relation.type;
  if (type === 'parent') {
    initParentRelation(vm, relation, function matchParent(vm, target) {
      return findParentRelation(vm.$parent, target, 'child');
    });
  } else if (type === 'ancestor') {
    initParentRelation(vm, relation, function matchAncestor(vm, target) {
      var $parent = vm.$parent;
      while ($parent) {
        var ret = findParentRelation($parent, target, 'descendant');
        if (ret.length) {
          return ret;
        }
        $parent = $parent.$parent;
      }
      return [];
    });
  }
}

function initRelations(vm) {var _ref =


  vm.$options.mpOptions || {},relations = _ref.relations;
  if (!relations) {
    return;
  }
  Object.keys(relations).forEach(function (name) {
    initRelation(relations[name], vm);
  });
}

function handleRelations(vm, type) {
  // TODO 需要移除 relationNodes
  var handlers = vm["_$".concat(type, "Handlers")];
  if (!handlers) {
    return;
  }
  handlers.forEach(function (handler) {return handler();});
}

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop };


function proxy(target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter() {
    return this[sourceKey][key];
  };
  sharedPropertyDefinition.set = function proxySetter(val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function setDataByExprPath(exprPath, value, data) {
  var keys = exprPath.replace(/\[(\d+?)\]/g, '.$1').split('.');
  keys.reduce(function (obj, key, idx) {
    if (idx === keys.length - 1) {
      obj[key] = value;
    } else {
      if (typeof obj[key] === 'undefined') {
        obj[key] = {};
      }
      return obj[key];
    }
  }, data);
  return keys.length === 1;
}

function setData(data, callback) {var _this = this;
  if (!isPlainObject(data)) {
    return;
  }
  Object.keys(data).forEach(function (key) {
    if (setDataByExprPath(key, data[key], _this.data)) {
      !hasOwn(_this, key) && proxy(_this, SOURCE_KEY, key);
    }
  });
  this.$forceUpdate();
  isFn(callback) && this.$nextTick(callback);
}

/**
   * https://github.com/swan-team/swan-js/blob/61e2a63f7aa576b5daafbe77fdfa7c65b977060c/src/utils/index.js
   */

var _toString$1 = Object.prototype.toString;
/**
                                              * 深度assign的函数
                                              * @param {Object} targetObject 要被拷贝的目标对象
                                              * @param {Object} originObject 拷贝的源对象
                                              * @return {Object} merge后的对象
                                              */
var deepAssign = function deepAssign() {var targetObject = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var originObject = arguments.length > 1 ? arguments[1] : undefined;
  var originType = _toString$1.call(originObject);
  if (originType === '[object Array]') {
    targetObject = originObject.slice(0);
    return targetObject;
  } else if (originType === '[object Object]') {
    for (var key in originObject) {
      targetObject[key] = deepAssign(targetObject[key], originObject[key]);
    }
    return targetObject;
  } else if (originType === '[object Date]') {
    return new Date(originObject.getTime());
  } else if (originType === '[object RegExp]') {
    var target = String(originObject);
    var lastIndex = target.lastIndexOf('/');
    return new RegExp(target.slice(1, lastIndex), target.slice(lastIndex + 1));
  }
  return originObject;
};

/**
    * 深度拷贝逻辑，不同于lodash等库，但是与微信一致
    * @param {*} [originObj] 原对象
    * @return {Object|Array} 拷贝结果
    */
var deepClone = function deepClone(originObj) {
  return deepAssign(_toString$1.call(originObj) === '[object Array]' ? [] : {}, originObj);
};

var PROP_DEFAULT_VALUES = (_PROP_DEFAULT_VALUES = {}, _defineProperty(_PROP_DEFAULT_VALUES,
String, ''), _defineProperty(_PROP_DEFAULT_VALUES,
Number, 0), _defineProperty(_PROP_DEFAULT_VALUES,
Boolean, false), _defineProperty(_PROP_DEFAULT_VALUES,
Object, null), _defineProperty(_PROP_DEFAULT_VALUES,
Array, []), _defineProperty(_PROP_DEFAULT_VALUES,
null, null), _PROP_DEFAULT_VALUES);


function getDefaultVal(propType) {
  return PROP_DEFAULT_VALUES[propType];
}

function getPropertyVal(options) {
  if (isPlainObject(options)) {
    if (hasOwn(options, 'value')) {
      return options.value;
    }
    return getDefaultVal(options.type);
  }
  return getDefaultVal(options);
}

function getType(propOptions) {
  return isPlainObject(propOptions) ? propOptions.type : propOptions;
}

function validateProp(key, propsOptions, propsData, vm) {
  var value = propsData[key];
  if (value !== undefined) {
    var propOptions = propsOptions[key];
    var type = getType(propOptions);
    value = formatVal(value, type);
    var observer = propOptions && propOptions.observer;
    if (observer) {
      // 初始化时,异步触发 observer,否则 observer 中无法访问 methods 或其他
      setTimeout(function () {
        observe(observer, vm, value);
      }, 4);
    }
    return value;
  }
  return getPropertyVal(propsOptions[key]);
}

function formatVal(val, type) {
  if (type === Boolean) {
    return !!val;
  } else if (type === String) {
    return String(val);
  }
  return val;
}

function observe(observer, vm, newVal, oldVal) {
  try {
    if (typeof observer === 'function') {
      observer.call(vm, newVal, oldVal);
    } else if (typeof observer === 'string' &&
    typeof vm[observer] === 'function')
    {
      vm[observer](newVal, oldVal);
    }
  } catch (err) {
    console.error("execute observer ".concat(observer, " callback fail! err: ").concat(err));
  }
}

function initProperties(vm, instanceData) {
  var properties = vm.$options.mpOptions.properties;
  if (!properties) {
    return;
  }

  var propsData = deepClone(vm.$options.propsData) || {};var _loop = function _loop(

  key) {
    var observer = isPlainObject(properties[key]) ? properties[key].observer : false;
    var value = validateProp(key, properties, propsData, vm);
    Object.defineProperty(instanceData, key, {
      enumerable: true,
      configurable: true,
      get: function get() {
        return value;
      },
      set: function set(newVal) {
        var oldVal = value;
        /* eslint-disable no-self-compare */
        if (newVal === value || newVal !== newVal && value !== value) {
          return;
        }
        // TODO 临时方案,clone array
        value = Array.isArray(newVal) ? newVal.slice(0) : newVal;
        if (observer) {
          observe(observer, vm, newVal, oldVal);
        }
        // 触发渲染
        vm.$forceUpdate();
      } });};for (var key in properties) {_loop(key);

  }
}

function updateProperties(vm) {
  var properties = vm.$options.mpOptions && vm.$options.mpOptions.properties;
  var propsData = vm.$options.propsData;
  if (propsData && properties) {
    Object.keys(properties).forEach(function (key) {
      if (hasOwn(propsData, key)) {
        vm[key] = formatVal(propsData[key], getType(properties[key]));
      }
    });
  }
}

function initState(vm) {
  var instanceData = JSON.parse(JSON.stringify(vm.$options.mpOptions.data || {}));

  vm[SOURCE_KEY] = instanceData;

  var propertyDefinition = {
    get: function get() {
      return vm[SOURCE_KEY];
    },
    set: function set(value) {
      vm[SOURCE_KEY] = value;
    } };


  Object.defineProperties(vm, {
    data: propertyDefinition,
    properties: propertyDefinition });


  vm.setData = setData;

  initProperties(vm, instanceData);

  Object.keys(instanceData).forEach(function (key) {
    proxy(vm, SOURCE_KEY, key);
  });
}

function initMethods(vm) {
  var oldEmit = vm.$emit;
  vm.triggerEvent = function (eventName, detail, options) {
    var target = {
      dataset: vm.$el.dataset };


    var event = {
      target: target,
      currentTarget: target,
      detail: detail,
      preventDefault: noop,
      stopPropagation: noop };


    oldEmit.call(vm, eventName, event);
  };
  // 主要是Vant 自己封装了 $emit,放到 methods 中会触发 Vue 的警告,索性,框架直接重写该方法
  vm.$emit = function () {
    vm.triggerEvent.apply(vm, arguments);
  };
  vm.getRelationNodes = function (relationKey) {
    // 需要过滤已被销毁的vm
    /* eslint-disable  no-mixed-operators */
    return (vm._$relationNodes && vm._$relationNodes[relationKey] || []).filter(function (vm) {return !vm._isDestroyed;});
  };

  vm._$updateProperties = updateProperties;
}

function handleObservers(vm) {
  var watch = vm.$options.watch;
  if (!watch) {
    return;
  }
  Object.keys(watch).forEach(function (name) {
    var observer = watch[name];
    if (observer.mounted) {
      var val = vm[name];
      var handler = observer.handler;
      if (typeof handler === 'string') {
        handler = vm[handler];
      }
      handler && handler.call(vm, val, val);
    }
  });
}

var polyfill = {
  beforeCreate: function beforeCreate() {
    // 取消 development 时的 Proxy,避免小程序组件模板中使用尚未定义的属性告警
    this._renderProxy = this;

    this._$self = this;
    this._$noop = noop;
  },
  created: function created() {// properties 中可能会访问 methods,故需要在 created 中初始化
    initState(this);
    initMethods(this);
    initRelations(this);
  },
  mounted: function mounted() {
    handleObservers(this);
  },
  destroyed: function destroyed() {
    handleRelations(this, 'unlinked');
  } };


global.__wxRoute = '';
global.__wxComponents = Object.create(null);
global.__wxVueOptions = Object.create(null);

function Page(options) {
  var pageOptions = parsePage(options);
  pageOptions.mixins.unshift(polyfill);
  pageOptions.mpOptions.path = global.__wxRoute;
  global.__wxComponents[global.__wxRoute] = pageOptions;
}

function initRelationsHandler(vueComponentOptions) {
  // linked 需要在当前组件 attached 之后再执行
  if (!vueComponentOptions.onServiceAttached) {
    vueComponentOptions.onServiceAttached = [];
  }
  vueComponentOptions.onServiceAttached.push(function onServiceAttached() {
    handleRelations(this, 'linked');
  });
}

function Component(options) {
  var componentOptions = parseComponent(options);
  componentOptions.mixins.unshift(polyfill);
  componentOptions.mpOptions.path = global.__wxRoute;
  initRelationsHandler(componentOptions);
  global.__wxComponents[global.__wxRoute] = componentOptions;
}

function Behavior(options) {
  return options;
}

var nextTick = _vue.default.nextTick;exports.nextTick = nextTick;

var index = uni.__$wx__;var _default =

index;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 24)))

/***/ }),
/* 44 */
/*!***********************************************!*\
  !*** D:/uniapp/uniapp-simple/config/login.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.onLogin = onLogin;exports.getUserInfo = getUserInfo;exports.judgeLogin = judgeLogin;var _store = _interopRequireDefault(__webpack_require__(/*! @/store */ 22));\nvar _requestConfig = _interopRequireDefault(__webpack_require__(/*! @/config/requestConfig */ 33));\nvar _baseUrl = _interopRequireDefault(__webpack_require__(/*! @/config/baseUrl */ 31));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\n\n\n\nvar code = \"\";\nvar loginStart = true;\nvar userInfo = {\n  token: \"\" };\n\nvar lastPageUrl = \"\";\n// 微信小程序登录\nfunction onLogin() {var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"judge\";var callback = arguments.length > 1 ? arguments[1] : undefined;\n  //判断登录状态\n  if (loginStart) {\n    lastPageUrl = \"\";\n    loginStart = false;\n    var _this = this;\n    var platform;\n\n\n\n\n\n\n\n\n\n    uni.login({\n      provider: platform,\n      success: function success(loginRes) {\n        if (loginRes.errMsg == 'login:ok') {\n          code = loginRes.code;\n          // 获取用户信息\n          uni.getUserInfo({\n            provider: platform,\n            success: function success(infoRes) {\n              getUserInfo(infoRes, \"\", callback);\n            },\n            fail: function fail() {\n              if (type != \"try\") {\n                _store.default.commit('setLoginPopupShow', true);\n                Object.defineProperty(userInfo, \"token\", {\n                  get: function get(val) {\n                    return {};\n                  },\n                  set: function set(newVal) {\n                    callback && callback();\n                  } });\n\n                setTimeout(function () {\n                  loginStart = true;\n                }, 2000);\n              } else {\n                loginStart = true;\n              }\n            } });\n\n        }\n      } });\n\n  }\n}\n//微信小程序获取用户信息\nfunction getUserInfo(info, type, callback) {\n  var httpData = {\n    wxSmallCode: code, //小程序code\n    iv: info.iv, //小程序加密算法的初始向量\n    encryptedData: info.encryptedData //包括敏感数据在内的完整用户信息的加密数据\n  };\n  // store.state.chatScenesInfo里面是小程序二维码附带的信息\n  if (_store.default.state.chatScenesInfo.recommendCode) {\n    // 推荐码\n    httpData.recommendUid = _store.default.state.chatScenesInfo.recommendCode;\n  }\n  _requestConfig.default.post('api/open/v1/login', httpData).then(function (res) {\n    loginStart = true;\n    _store.default.commit('setUserInfo', res);\n    if (type == \"authorized\") {\n      userInfo.token = res.token;\n      _store.default.commit('setLoginPopupShow', false);\n    } else {\n      callback && callback();\n    }\n    uni.showToast({\n      title: \"登录成功\" });\n\n  }, function (err) {\n    loginStart = true;\n  });\n}\n//判断是否登录（所有端）\nfunction judgeLogin(callback) {var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"judge\";\n  debugger;\n  if (_store.default.state.chatScenesInfo.scene == 1154) {\n    uni.showToast({\n      title: '请前往小程序使用完整服务',\n      icon: \"none\" });\n\n  } else {\n    var storeUserInfo = _store.default.state.userInfo;\n    if (!storeUserInfo.token) {// nvue页面读取不到vuex里面数据，将取缓存\n      storeUserInfo = uni.getStorageSync(\"userInfo\");\n    }\n    if (type != \"force\" && storeUserInfo.token) {\n      callback();\n    } else if (storeUserInfo.token && !storeUserInfo.phone) {\n      if (type == \"force\") {\n        uni.navigateTo({\n          url: '/pages/user/bindPhone' });\n\n      } else {\n        uni.showModal({\n          title: \"提示\",\n          content: \"您还未绑定手机号，请先绑定~\",\n          confirmText: \"去绑定\",\n          cancelText: \"再逛会\",\n          success: function success(res) {\n            if (res.confirm) {\n              uni.navigateTo({\n                url: '/pages/user/bindPhone' });\n\n            }\n          } });\n\n      }\n    } else {\n      debugger;\n\n\n\n\n      uni.showModal({\n        title: \"登录提示\",\n        content: \"此时此刻需要您登录喔~\",\n        confirmText: \"去登录\",\n        cancelText: \"再逛会\",\n        success: function success(res) {\n          if (res.confirm) {\n            uni.navigateTo({\n              url: \"/pages/user/login\" });\n\n          }\n        } });\n\n\n\n\n\n\n\n    }\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29uZmlnL2xvZ2luLmpzIl0sIm5hbWVzIjpbImNvZGUiLCJsb2dpblN0YXJ0IiwidXNlckluZm8iLCJ0b2tlbiIsImxhc3RQYWdlVXJsIiwib25Mb2dpbiIsInR5cGUiLCJjYWxsYmFjayIsIl90aGlzIiwicGxhdGZvcm0iLCJ1bmkiLCJsb2dpbiIsInByb3ZpZGVyIiwic3VjY2VzcyIsImxvZ2luUmVzIiwiZXJyTXNnIiwiZ2V0VXNlckluZm8iLCJpbmZvUmVzIiwiZmFpbCIsInN0b3JlIiwiY29tbWl0IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJ2YWwiLCJzZXQiLCJuZXdWYWwiLCJzZXRUaW1lb3V0IiwiaW5mbyIsImh0dHBEYXRhIiwid3hTbWFsbENvZGUiLCJpdiIsImVuY3J5cHRlZERhdGEiLCJzdGF0ZSIsImNoYXRTY2VuZXNJbmZvIiwicmVjb21tZW5kQ29kZSIsInJlY29tbWVuZFVpZCIsIiRodHRwIiwicG9zdCIsInRoZW4iLCJyZXMiLCJzaG93VG9hc3QiLCJ0aXRsZSIsImVyciIsImp1ZGdlTG9naW4iLCJzY2VuZSIsImljb24iLCJzdG9yZVVzZXJJbmZvIiwiZ2V0U3RvcmFnZVN5bmMiLCJwaG9uZSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJzaG93TW9kYWwiLCJjb250ZW50IiwiY29uZmlybVRleHQiLCJjYW5jZWxUZXh0IiwiY29uZmlybSJdLCJtYXBwaW5ncyI6IjBKQUFBO0FBQ0E7QUFDQSx1Rjs7OztBQUlBLElBQUlBLElBQUksR0FBRyxFQUFYO0FBQ0EsSUFBSUMsVUFBVSxHQUFHLElBQWpCO0FBQ0EsSUFBSUMsUUFBUSxHQUFHO0FBQ2RDLE9BQUssRUFBRSxFQURPLEVBQWY7O0FBR0EsSUFBSUMsV0FBVyxHQUFHLEVBQWxCO0FBQ0E7QUFDQSxTQUFTQyxPQUFULEdBQTBDLEtBQXpCQyxJQUF5Qix1RUFBbEIsT0FBa0IsS0FBVkMsUUFBVTtBQUN6QztBQUNBLE1BQUlOLFVBQUosRUFBZ0I7QUFD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MUMsZUFBTyxFQUFFLGlCQUFDMkIsR0FBRCxFQUFTO0FBQ2QsY0FBSUEsR0FBRyxDQUFDZ0IsT0FBUixFQUFpQjtBQUNiOUMsZUFBRyxDQUFDd0MsVUFBSixDQUFlO0FBQ1hDLGlCQUFHLEVBQUUsbUJBRE0sRUFBZjs7QUFHSDtBQUNKLFNBWFMsRUFBZDs7Ozs7Ozs7QUFtQkg7QUFDSjtBQUNKIiwiZmlsZSI6IjQ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0b3JlIGZyb20gJ0Avc3RvcmUnO1xyXG5pbXBvcnQgJGh0dHAgZnJvbSAnQC9jb25maWcvcmVxdWVzdENvbmZpZydcclxuaW1wb3J0IGJhc2UgZnJvbSAnQC9jb25maWcvYmFzZVVybCc7XHJcblxyXG5cclxuXHJcbmxldCBjb2RlID0gXCJcIjtcclxubGV0IGxvZ2luU3RhcnQgPSB0cnVlO1xyXG5sZXQgdXNlckluZm8gPSB7XHJcblx0dG9rZW46IFwiXCJcclxufTtcclxubGV0IGxhc3RQYWdlVXJsID0gXCJcIjtcclxuLy8g5b6u5L+h5bCP56iL5bqP55m75b2VXHJcbmZ1bmN0aW9uIG9uTG9naW4odHlwZSA9IFwianVkZ2VcIixjYWxsYmFjaykge1xyXG5cdC8v5Yik5pat55m75b2V54q25oCBXHJcblx0aWYgKGxvZ2luU3RhcnQpIHtcclxuXHRcdGxhc3RQYWdlVXJsID0gXCJcIjtcclxuXHRcdGxvZ2luU3RhcnQgPSBmYWxzZTtcclxuXHRcdGNvbnN0IF90aGlzID0gdGhpcztcclxuXHRcdGxldCBwbGF0Zm9ybTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHRcdHVuaS5sb2dpbih7XHJcblx0XHRcdHByb3ZpZGVyOiBwbGF0Zm9ybSxcclxuXHRcdFx0c3VjY2VzczogZnVuY3Rpb24obG9naW5SZXMpIHtcclxuXHRcdFx0XHRpZiAobG9naW5SZXMuZXJyTXNnID09ICdsb2dpbjpvaycpIHtcclxuXHRcdFx0XHRcdGNvZGUgPSBsb2dpblJlcy5jb2RlO1xyXG5cdFx0XHRcdFx0Ly8g6I635Y+W55So5oi35L+h5oGvXHJcblx0XHRcdFx0XHR1bmkuZ2V0VXNlckluZm8oe1xyXG5cdFx0XHRcdFx0XHRwcm92aWRlcjogcGxhdGZvcm0sXHJcblx0XHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKGluZm9SZXMpIHtcclxuXHRcdFx0XHRcdFx0XHRnZXRVc2VySW5mbyhpbmZvUmVzLCBcIlwiLCBjYWxsYmFjayk7XHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdGZhaWwoKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYodHlwZSAhPSBcInRyeVwiKXtcclxuXHRcdFx0XHRcdFx0XHRcdHN0b3JlLmNvbW1pdCgnc2V0TG9naW5Qb3B1cFNob3cnLCB0cnVlKTtcclxuXHRcdFx0XHRcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh1c2VySW5mbywgXCJ0b2tlblwiLCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGdldDogZnVuY3Rpb24odmFsKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHt9O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXQ6IGZ1bmN0aW9uKG5ld1ZhbCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNhbGxiYWNrICYmIGNhbGxiYWNrKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGxvZ2luU3RhcnQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSwgMjAwMCk7XHJcblx0XHRcdFx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRcdFx0XHRsb2dpblN0YXJ0ID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcbi8v5b6u5L+h5bCP56iL5bqP6I635Y+W55So5oi35L+h5oGvXHJcbmZ1bmN0aW9uIGdldFVzZXJJbmZvKGluZm8sIHR5cGUsIGNhbGxiYWNrKSB7XHJcblx0bGV0IGh0dHBEYXRhID0ge1xyXG5cdFx0d3hTbWFsbENvZGU6IGNvZGUsIC8v5bCP56iL5bqPY29kZVxyXG5cdFx0aXY6IGluZm8uaXYsIC8v5bCP56iL5bqP5Yqg5a+G566X5rOV55qE5Yid5aeL5ZCR6YePXHJcblx0XHRlbmNyeXB0ZWREYXRhOiBpbmZvLmVuY3J5cHRlZERhdGEgLy/ljIXmi6zmlY/mhJ/mlbDmja7lnKjlhoXnmoTlrozmlbTnlKjmiLfkv6Hmga/nmoTliqDlr4bmlbDmja5cclxuXHR9O1xyXG5cdC8vIHN0b3JlLnN0YXRlLmNoYXRTY2VuZXNJbmZv6YeM6Z2i5piv5bCP56iL5bqP5LqM57u056CB6ZmE5bim55qE5L+h5oGvXHJcblx0aWYoc3RvcmUuc3RhdGUuY2hhdFNjZW5lc0luZm8ucmVjb21tZW5kQ29kZSl7XHJcblx0XHQvLyDmjqjojZDnoIFcclxuXHRcdGh0dHBEYXRhLnJlY29tbWVuZFVpZCA9IHN0b3JlLnN0YXRlLmNoYXRTY2VuZXNJbmZvLnJlY29tbWVuZENvZGU7XHJcblx0fVxyXG5cdCRodHRwLnBvc3QoJ2FwaS9vcGVuL3YxL2xvZ2luJywgaHR0cERhdGEpLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0bG9naW5TdGFydCA9IHRydWU7XHJcblx0XHRcdHN0b3JlLmNvbW1pdCgnc2V0VXNlckluZm8nLCByZXMpO1xyXG5cdFx0XHRpZiAodHlwZSA9PSBcImF1dGhvcml6ZWRcIikge1xyXG5cdFx0XHRcdHVzZXJJbmZvLnRva2VuID0gcmVzLnRva2VuO1xyXG5cdFx0XHRcdHN0b3JlLmNvbW1pdCgnc2V0TG9naW5Qb3B1cFNob3cnLCBmYWxzZSk7XHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdGNhbGxiYWNrICYmIGNhbGxiYWNrKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0dGl0bGU6IFwi55m75b2V5oiQ5YqfXCJcclxuXHRcdFx0fSk7XHJcblx0XHR9LCBlcnIgPT4ge1xyXG5cdFx0XHRsb2dpblN0YXJ0ID0gdHJ1ZTtcclxuXHRcdH0pO1xyXG59XHJcbi8v5Yik5pat5piv5ZCm55m75b2V77yI5omA5pyJ56uv77yJXHJcbmZ1bmN0aW9uIGp1ZGdlTG9naW4oY2FsbGJhY2ssIHR5cGUgPSBcImp1ZGdlXCIpe1xyXG5cdGRlYnVnZ2VyXHJcbiAgICBpZihzdG9yZS5zdGF0ZS5jaGF0U2NlbmVzSW5mby5zY2VuZSA9PSAxMTU0KXtcclxuICAgICAgICB1bmkuc2hvd1RvYXN0KHtcclxuICAgICAgICBcdHRpdGxlOiAn6K+35YmN5b6A5bCP56iL5bqP5L2/55So5a6M5pW05pyN5YqhJyxcclxuICAgICAgICAgICAgaWNvbjogXCJub25lXCJcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IHN0b3JlVXNlckluZm8gPSBzdG9yZS5zdGF0ZS51c2VySW5mbztcclxuICAgICAgICBpZighc3RvcmVVc2VySW5mby50b2tlbil7IC8vIG52dWXpobXpnaLor7vlj5bkuI3liLB2dWV46YeM6Z2i5pWw5o2u77yM5bCG5Y+W57yT5a2YXHJcbiAgICAgICAgICAgIHN0b3JlVXNlckluZm8gPSB1bmkuZ2V0U3RvcmFnZVN5bmMoXCJ1c2VySW5mb1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGUgIT0gXCJmb3JjZVwiICYmIHN0b3JlVXNlckluZm8udG9rZW4pIHtcclxuICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHN0b3JlVXNlckluZm8udG9rZW4gJiYgIXN0b3JlVXNlckluZm8ucGhvbmUpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGUgPT0gXCJmb3JjZVwiKSB7XHJcbiAgICAgICAgICAgICAgICB1bmkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL3VzZXIvYmluZFBob25lJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB1bmkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCLmj5DnpLpcIixcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIuaCqOi/mOacque7keWumuaJi+acuuWPt++8jOivt+WFiOe7keWumn5cIixcclxuICAgICAgICAgICAgICAgICAgICBjb25maXJtVGV4dDogXCLljrvnu5HlrppcIixcclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxUZXh0OiBcIuWGjemAm+S8mlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL3VzZXIvYmluZFBob25lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcblx0XHRcdGRlYnVnZ2VyXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICB1bmkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIueZu+W9leaPkOekulwiLFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCLmraTml7bmraTliLvpnIDopoHmgqjnmbvlvZXllpR+XCIsXHJcbiAgICAgICAgICAgICAgICBjb25maXJtVGV4dDogXCLljrvnmbvlvZVcIixcclxuICAgICAgICAgICAgICAgIGNhbmNlbFRleHQ6IFwi5YaN6YCb5LyaXCIsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuaS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCIvcGFnZXMvdXNlci9sb2dpblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCB7XHJcblx0b25Mb2dpbixcclxuXHRnZXRVc2VySW5mbyxcclxuXHRqdWRnZUxvZ2luXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///44\n");

/***/ }),
/* 45 */
/*!**************************************************************************!*\
  !*** D:/uniapp/uniapp-simple/components/common/zhouWei-navBar/index.vue ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_485c0c12___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=485c0c12& */ 46);\n/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ 48);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 17);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_485c0c12___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_485c0c12___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _index_vue_vue_type_template_id_485c0c12___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"components/common/zhouWei-navBar/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0g7QUFDbEg7QUFDeUQ7QUFDTDs7O0FBR3BEO0FBQzBLO0FBQzFLLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLDJFQUFNO0FBQ1IsRUFBRSxnRkFBTTtBQUNSLEVBQUUseUZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsb0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiNDUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00ODVjMGMxMiZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi/lronoo4XljIUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL2NvbW1vbi96aG91V2VpLW5hdkJhci9pbmRleC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///45\n");

/***/ }),
/* 46 */
/*!*********************************************************************************************************!*\
  !*** D:/uniapp/uniapp-simple/components/common/zhouWei-navBar/index.vue?vue&type=template&id=485c0c12& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_485c0c12___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=485c0c12& */ 47);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_485c0c12___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_485c0c12___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_485c0c12___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_485c0c12___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 47 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/uniapp/uniapp-simple/components/common/zhouWei-navBar/index.vue?vue&type=template&id=485c0c12& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", [
    _c(
      "view",
      {
        class: _vm._$s(1, "c", [
          _vm.navFixed ? "header_fixed" : "",
          _vm.type == "transparent" ? "header_absolute" : "",
          _vm.navShadow ? "header_shadow" : "",
          _vm.themeBgColorName
        ]),
        style: _vm._$s(1, "s", [
          _vm.navBgColor ? { backgroundImage: _vm.navBgColor } : {},
          {
            paddingTop: _vm.statusBarHeight + "px",
            color: _vm.navFontColor,
            opacity: _vm.transparentValue
          }
        ]),
        attrs: { _i: 1 }
      },
      [
        _c(
          "view",
          { staticClass: _vm._$s(2, "sc", "header_content"), attrs: { _i: 2 } },
          [
            _c(
              "view",
              {
                staticClass: _vm._$s(3, "sc", "header_left_box"),
                attrs: { _i: 3 }
              },
              [
                _vm._t(
                  "left",
                  [
                    _vm._$s(5, "i", _vm.back || _vm.$slots.left || _vm.home)
                      ? _c(
                          "view",
                          {
                            staticClass: _vm._$s(5, "sc", "header_left_info"),
                            class: _vm._$s(5, "c", [
                              _vm.isTwoBtn ? "header_btnMongol" : "",
                              _vm.isWhite && _vm.isTwoBtn
                                ? "header_colorWhite_btnMongol"
                                : ""
                            ]),
                            attrs: { _i: 5 }
                          },
                          [
                            _vm._$s(6, "i", _vm.back && !_vm.firstPage)
                              ? _c(
                                  "view",
                                  {
                                    staticClass: _vm._$s(
                                      6,
                                      "sc",
                                      "header_left_back"
                                    ),
                                    class: _vm._$s(6, "c", [
                                      _vm.isTwoBtn
                                        ? "header_btnMongol_left_back"
                                        : ""
                                    ]),
                                    attrs: { _i: 6 },
                                    on: { click: _vm.onBackPage }
                                  },
                                  [
                                    _vm._$s(7, "i", _vm.isWhite)
                                      ? _c("image", {
                                          staticClass: _vm._$s(
                                            7,
                                            "sc",
                                            "header_icon"
                                          ),
                                          attrs: { _i: 7 }
                                        })
                                      : _c("image", {
                                          staticClass: _vm._$s(
                                            8,
                                            "sc",
                                            "header_icon"
                                          ),
                                          attrs: { _i: 8 }
                                        })
                                  ]
                                )
                              : _vm._e(),
                            _vm._$s(9, "i", _vm.isTwoBtn)
                              ? _c("text", {
                                  staticClass: _vm._$s(
                                    9,
                                    "sc",
                                    "header_left_line"
                                  ),
                                  class: _vm._$s(9, "c", [
                                    _vm.isWhite
                                      ? "header_colorWhite_left_line"
                                      : ""
                                  ]),
                                  attrs: { _i: 9 }
                                })
                              : _vm._e(),
                            _vm._$s(
                              10,
                              "i",
                              (_vm.firstPage && _vm.back) || _vm.home
                            )
                              ? _c(
                                  "view",
                                  {
                                    staticClass: _vm._$s(
                                      10,
                                      "sc",
                                      "header_left_home"
                                    ),
                                    class: _vm._$s(10, "c", [
                                      _vm.isTwoBtn
                                        ? "header_btnMongol_left_home"
                                        : ""
                                    ]),
                                    attrs: { _i: 10 },
                                    on: { click: _vm.onBackHome }
                                  },
                                  [
                                    _vm._$s(11, "i", _vm.isWhite)
                                      ? _c("image", {
                                          staticClass: _vm._$s(
                                            11,
                                            "sc",
                                            "header_icon"
                                          ),
                                          attrs: { _i: 11 }
                                        })
                                      : _c("image", {
                                          staticClass: _vm._$s(
                                            12,
                                            "sc",
                                            "header_icon"
                                          ),
                                          attrs: { _i: 12 }
                                        })
                                  ]
                                )
                              : _vm._e()
                          ]
                        )
                      : _vm._e()
                  ],
                  { _i: 4 }
                ),
                _vm._$s(
                  13,
                  "i",
                  !_vm.titleCenter && (_vm.$slots.default || _vm.navTitle)
                )
                  ? _c(
                      "view",
                      {
                        staticClass: _vm._$s(13, "sc", "header_title"),
                        style: _vm._$s(13, "s", { color: _vm.navFontColor }),
                        attrs: { _i: 13 }
                      },
                      [
                        _vm._t(
                          "default",
                          [
                            _c(
                              "text",
                              {
                                style: _vm._$s(15, "s", {
                                  color: _vm.navFontColor
                                }),
                                attrs: { _i: 15 }
                              },
                              [
                                _vm._v(
                                  _vm._$s(15, "t0-0", _vm._s(_vm.navTitle))
                                )
                              ]
                            )
                          ],
                          { _i: 14 }
                        )
                      ],
                      2
                    )
                  : _vm._e()
              ],
              2
            ),
            _vm._$s(
              16,
              "i",
              _vm.titleCenter && (_vm.$slots.default || _vm.navTitle)
            )
              ? _c(
                  "view",
                  {
                    staticClass: _vm._$s(
                      16,
                      "sc",
                      "header_title header_title_center"
                    ),
                    style: _vm._$s(16, "s", { color: _vm.navFontColor }),
                    attrs: { _i: 16 }
                  },
                  [
                    _vm._t(
                      "default",
                      [
                        _c(
                          "text",
                          {
                            style: _vm._$s(18, "s", {
                              color: _vm.navFontColor
                            }),
                            attrs: { _i: 18 }
                          },
                          [_vm._v(_vm._$s(18, "t0-0", _vm._s(_vm.navTitle)))]
                        )
                      ],
                      { _i: 17 }
                    )
                  ],
                  2
                )
              : _vm._e(),
            _c(
              "view",
              {
                staticClass: _vm._$s(19, "sc", "header_right_info"),
                attrs: { _i: 19 }
              },
              [_vm._t("right", null, { _i: 20 })],
              2
            )
          ]
        )
      ]
    ),
    _vm._$s(21, "i", _vm.type == "transparentFixed")
      ? _c(
          "view",
          {
            staticClass: _vm._$s(
              21,
              "sc",
              "header_transparentFixed header_fixed"
            ),
            style: _vm._$s(21, "s", {
              paddingTop: _vm.statusBarHeight + "px",
              color: _vm.navTransparentFixedFontColor,
              opacity: 1 - _vm.transparentValue,
              zIndex: _vm.transparentValue < 0.3 ? 100 : 90
            }),
            attrs: { _i: 21 }
          },
          [
            _c(
              "view",
              {
                staticClass: _vm._$s(22, "sc", "header_content"),
                attrs: { _i: 22 }
              },
              [
                _c(
                  "view",
                  {
                    staticClass: _vm._$s(23, "sc", "header_left_box"),
                    attrs: { _i: 23 }
                  },
                  [
                    _vm._t(
                      "transparentFixedLeft",
                      [
                        _vm._$s(
                          25,
                          "i",
                          _vm.back || _vm.$slots.left || _vm.home
                        )
                          ? _c(
                              "view",
                              {
                                staticClass: _vm._$s(
                                  25,
                                  "sc",
                                  "header_left_info header_transparentFixed_left_info"
                                ),
                                class: _vm._$s(25, "c", [
                                  _vm.isWhite
                                    ? "header_transparentFixed_colorWhite_left_info"
                                    : ""
                                ]),
                                attrs: { _i: 25 }
                              },
                              [
                                _vm._$s(26, "i", _vm.back && !_vm.firstPage)
                                  ? _c(
                                      "view",
                                      {
                                        staticClass: _vm._$s(
                                          26,
                                          "sc",
                                          "header_left_back"
                                        ),
                                        class: _vm._$s(26, "c", [
                                          _vm.isTwoBtn
                                            ? "header_btnMongol_left_back"
                                            : ""
                                        ]),
                                        attrs: { _i: 26 },
                                        on: { click: _vm.onBackPage }
                                      },
                                      [
                                        _vm._$s(27, "i", _vm.isWhite)
                                          ? _c("image", {
                                              staticClass: _vm._$s(
                                                27,
                                                "sc",
                                                "header_icon"
                                              ),
                                              attrs: { _i: 27 }
                                            })
                                          : _c("image", {
                                              staticClass: _vm._$s(
                                                28,
                                                "sc",
                                                "header_icon"
                                              ),
                                              attrs: { _i: 28 }
                                            })
                                      ]
                                    )
                                  : _vm._e(),
                                _vm._$s(29, "i", _vm.isTwoBtn)
                                  ? _c("text", {
                                      staticClass: _vm._$s(
                                        29,
                                        "sc",
                                        "header_left_line"
                                      ),
                                      attrs: { _i: 29 }
                                    })
                                  : _vm._e(),
                                _vm._$s(
                                  30,
                                  "i",
                                  (_vm.firstPage && _vm.back) || _vm.home
                                )
                                  ? _c(
                                      "view",
                                      {
                                        staticClass: _vm._$s(
                                          30,
                                          "sc",
                                          "header_left_home"
                                        ),
                                        class: _vm._$s(30, "c", [
                                          _vm.isTwoBtn
                                            ? "header_btnMongol_left_home"
                                            : ""
                                        ]),
                                        attrs: { _i: 30 },
                                        on: { click: _vm.onBackHome }
                                      },
                                      [
                                        _vm._$s(31, "i", _vm.isWhite)
                                          ? _c("image", {
                                              staticClass: _vm._$s(
                                                31,
                                                "sc",
                                                "header_icon"
                                              ),
                                              attrs: { _i: 31 }
                                            })
                                          : _c("image", {
                                              staticClass: _vm._$s(
                                                32,
                                                "sc",
                                                "header_icon"
                                              ),
                                              attrs: { _i: 32 }
                                            })
                                      ]
                                    )
                                  : _vm._e()
                              ]
                            )
                          : _vm._e()
                      ],
                      { _i: 24 }
                    ),
                    _vm._$s(
                      33,
                      "i",
                      !_vm.titleCenter &&
                        (_vm.navTitle || _vm.$slots.transparentFixed)
                    )
                      ? _c(
                          "view",
                          {
                            staticClass: _vm._$s(33, "sc", "header_title"),
                            style: _vm._$s(33, "s", {
                              color: _vm.navTransparentFixedFontColor
                            }),
                            attrs: { _i: 33 }
                          },
                          [
                            _vm._t(
                              "transparentFixed",
                              [
                                _c(
                                  "text",
                                  {
                                    style: _vm._$s(35, "s", {
                                      color: _vm.navTransparentFixedFontColor
                                    }),
                                    attrs: { _i: 35 }
                                  },
                                  [
                                    _vm._v(
                                      _vm._$s(35, "t0-0", _vm._s(_vm.navTitle))
                                    )
                                  ]
                                )
                              ],
                              { _i: 34 }
                            )
                          ],
                          2
                        )
                      : _vm._e()
                  ],
                  2
                ),
                _vm._$s(
                  36,
                  "i",
                  _vm.titleCenter &&
                    (_vm.navTitle || _vm.$slots.transparentFixed)
                )
                  ? _c(
                      "view",
                      {
                        staticClass: _vm._$s(
                          36,
                          "sc",
                          "header_title header_title_center"
                        ),
                        style: _vm._$s(36, "s", {
                          color: _vm.navTransparentFixedFontColor
                        }),
                        attrs: { _i: 36 }
                      },
                      [
                        _vm._t(
                          "transparentFixed",
                          [
                            _c(
                              "text",
                              {
                                style: _vm._$s(38, "s", {
                                  color: _vm.navTransparentFixedFontColor
                                }),
                                attrs: { _i: 38 }
                              },
                              [
                                _vm._v(
                                  _vm._$s(38, "t0-0", _vm._s(_vm.navTitle))
                                )
                              ]
                            )
                          ],
                          { _i: 37 }
                        )
                      ],
                      2
                    )
                  : _vm._e(),
                _c(
                  "view",
                  {
                    staticClass: _vm._$s(39, "sc", "header_right_info"),
                    attrs: { _i: 39 }
                  },
                  [_vm._t("transparentFixedRight", null, { _i: 40 })],
                  2
                )
              ]
            )
          ]
        )
      : _vm._e(),
    _vm._$s(41, "i", _vm.type == "fixed")
      ? _c(
          "view",
          {
            style: _vm._$s(41, "s", { paddingTop: _vm.statusBarHeight + "px" }),
            attrs: { _i: 41 }
          },
          [
            _c("view", {
              staticClass: _vm._$s(42, "sc", "header_station"),
              attrs: { _i: 42 }
            })
          ]
        )
      : _vm._e()
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 48 */
/*!***************************************************************************************************!*\
  !*** D:/uniapp/uniapp-simple/components/common/zhouWei-navBar/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ 49);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTZqQixDQUFnQiwyakJBQUcsRUFBQyIsImZpbGUiOiI0OC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uL+WuieijheWMhS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uL+WuieijheWMhS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///48\n");

/***/ }),
/* 49 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/uniapp/uniapp-simple/components/common/zhouWei-navBar/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n// 主页页面的页面路径\n// 关联功能：打开的页面只有一个的时候右上角自动显示返回首页按钮，下面这个数组是排除显示返回首页的页面。\n// 主页使用场景：小程序分享出去的页面，用户点击开是分享页面，很多情况下是没有返回首页按钮的\nvar mainPagePath = ['pages/home/home', 'pages/my/my', 'pages/demo/common', 'pages/template/common', 'pages/apiDemo/common'];\n//返回首页的地址\nvar homePath = '/pages/demo/common';\n//白色表达值\nvar whiteList = ['#FFF', '#fff', '#FFFFFF', '#ffffff', 'white', 'rgb(255,255,255)', 'rgba(255,255,255,1)'];var _default2 =\n{\n  props: {\n    //是否显示返回按钮\n    // 1000 显示返回按钮\n    // 2000 不显示返回按钮\n    // 3000 自定义返回按钮方法，点击返回箭头后会发送一个backClick事件\n    backState: {\n      type: [String, Number],\n      default: function _default() {\n        return 1000;\n      } },\n\n    //是否显示返回首页按钮\n    // 1000 显示首页按钮\n    // 2000 不显示首页按钮\n    // 3000 自定义首页按钮方法，点击首页箭头后会发送一个homeClick事件\n    homeState: {\n      type: [String, Number],\n      default: function _default() {\n        return 2000;\n      } },\n\n    //导航背景色，支持渐变\n    bgColor: {\n      type: [String, Array],\n      default: function _default() {\n        return '#FFFFFF';\n      } },\n\n    // 导航背景色渐变角度\n    bgColorAngle: {\n      type: [String, Number],\n      default: function _default() {\n        return 90;\n      } },\n\n    //导航字体颜色，字体颜色为白色的时候会把手机状态栏设置为白色，否则为黑色\n    fontColor: {\n      type: String,\n      default: function _default() {\n        return '#000000';\n      } },\n\n    //标题是否居中\n    titleCenter: {\n      type: Boolean,\n      default: function _default() {\n        return true;\n      } },\n\n    //标题\n    title: {\n      type: String,\n      default: function _default() {\n        return '';\n      } },\n\n    //类型 fixed为固定 默认\n    // ordinary 普通的 不固定\n    // transparent 透明不固定的\n    //transparentFixed  透明固定的\n    type: {\n      type: String,\n      default: function _default() {\n        return 'fixed';\n      } },\n\n    //透明固定的时候字体颜色\n    transparentFixedFontColor: {\n      type: String,\n      default: function _default() {\n        return '#000000';\n      } },\n\n    // 屏幕滑动距离顶部距离(透明固定导航比传)\n    scrollTop: {\n      type: Number,\n      default: function _default() {\n        return 0;\n      } },\n\n    // 是否显示阴影\n    shadow: {\n      type: Boolean,\n      default: function _default() {\n        return true;\n      } } },\n\n\n  data: function data() {\n    return {\n      //当前页面是否是第一个页面\n      firstPage: false,\n      //透明度值\n      transparentValue: 1,\n      //标题\n      navTitle: '',\n      //字体色\n      navFontColor: '#000000',\n      //背景色\n      navBgColor: '',\n      //透明底字体色\n      navTransparentFixedFontColor: '#000000',\n      // 导航栏高度\n      statusBarHeight: 0,\n      // 上次显示的导航栏颜色\n      lastFrontColor: '',\n      themeBgColorName: '' };\n\n  },\n  computed: {\n    back: function back() {\n      return this.backState == 1000 || this.backState == 3000;\n    },\n    home: function home() {\n      return this.homeState == 1000;\n    },\n    //导航固定\n    navFixed: function navFixed() {\n      if (this.type == 'transparentFixed' || this.type == 'fixed') {\n        return true;\n      } else {\n        return false;\n      }\n    },\n    //导航底部线是否显示\n    navShadow: function navShadow() {\n      if (this.bgColor && typeof this.bgColor == 'string') {\n        return this.shadow && this.type !== 'transparent' && whiteList.includes(this.bgColor);\n      } else {\n        return false;\n      }\n    },\n    //导航字体是否是白色颜色\n    isWhite: function isWhite() {\n      return whiteList.includes(this.navFontColor);\n    },\n    //右上角是否有两个按钮\n    isTwoBtn: function isTwoBtn() {\n      return (this.backState == 1000 || this.backState == 3000) && this.homeState == 1000 && !this.firstPage;\n    } },\n\n  watch: {\n    title: function title(val) {\n      this.navTitle = val;\n    },\n    fontColor: function fontColor(val) {\n      this.navFontColor = val;\n      this.settingColor();\n    },\n    bgColor: function bgColor(val) {\n      this.getNavBgColor(val);\n    },\n    transparentFixedFontColor: function transparentFixedFontColor(val) {\n      this.navTransparentFixedFontColor = val;\n    },\n    scrollTop: function scrollTop(val) {\n      this.pageScroll({\n        scrollTop: val });\n\n    } },\n\n  //第一次加载\n  created: function created() {\n    this.navTitle = this.title;\n    this.navFontColor = this.fontColor;\n    this.getNavBgColor(this.bgColor);\n    this.navTransparentFixedFontColor = this.transparentFixedFontColor;\n    //获取手机状态栏高度\n    this.statusBarHeight = uni.getSystemInfoSync()['statusBarHeight'];\n    var _this = this;\n    this.pageScroll({\n      scrollTop: this.scrollTop });\n\n    //获取所有页面\n    var currentPages = getCurrentPages();\n    var pageLen = currentPages.length;\n    //判断是否是第一个页面，如果是有设置back为true的页面，将不显示返回箭头，而显示返回首页按钮\n    if (pageLen == 1 && !mainPagePath.includes(currentPages[0].route)) {\n      this.firstPage = true;\n    }\n  },\n  //方法\n  methods: {\n    //返回上一页面\n    onBackPage: function onBackPage() {\n      if (this.backState == 3000) {\n        this.$emit('backClick');\n      } else {\n        uni.navigateBack();\n      }\n    },\n    //返回首页\n    onBackHome: function onBackHome() {\n      if (this.homeState == 3000) {\n        this.$emit('homeClick');\n      } else {\n        uni.reLaunch({\n          url: homePath });\n\n      }\n    },\n    pageScroll: function pageScroll(e) {\n      if (this.type == 'transparentFixed') {\n        if (e.scrollTop && e.scrollTop > 0) {\n          if (e.scrollTop > 180) {\n            this.transparentValue = 1;\n          } else {\n            this.transparentValue = e.scrollTop / 180;\n          }\n        } else {\n          this.transparentValue = 0;\n        }\n        this.settingColor();\n      }\n    },\n    // 获取导航背景颜色\n    getNavBgColor: function getNavBgColor(val) {\n      if (typeof val == 'string') {\n        if (this.type == 'transparent') {\n          this.navBgColor = '';\n        } else if (val.indexOf('#') === -1) {\n          this.themeBgColorName = val;\n          this.navBgColor = '';\n        } else {\n          this.navBgColor = 'linear-gradient(90deg,' + val + ',' + val + ')';\n        }\n      } else if (Array.isArray(val) && val.length >= 2) {\n        var navBgColor = 'linear-gradient(' + this.bgColorAngle + 'deg';\n        val.forEach(function (item) {\n          if (typeof item == 'string') {\n            navBgColor += ',' + item;\n          } else if (typeof item == 'object') {\n            navBgColor += ',' + item.color + ' ' + item.scale;\n          }\n        });\n        navBgColor += ')';\n        this.navBgColor = navBgColor;\n      }\n    },\n    //设置手机状态栏颜色\n    settingColor: function settingColor() {var _this2 = this;\n      var navColor = this.navFontColor;\n      if (this.type == 'transparentFixed' && this.transparentValue <= 0.5) {\n        navColor = this.navTransparentFixedFontColor;\n      }\n      var frontColor = '#000000';\n      if (whiteList.includes(navColor)) {\n        frontColor = '#ffffff';\n      }\n      if (this.lastFrontColor == frontColor) {\n        return;\n      }\n      setTimeout(function () {\n        _this2.lastFrontColor = frontColor;\n        // 改变手机状态栏颜色\n        uni.setNavigationBarColor({\n          frontColor: frontColor,\n          backgroundColor: '#FFFFFF' });\n\n      }, 150);\n    } } };exports.default = _default2;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9jb21tb24vemhvdVdlaS1uYXZCYXIvaW5kZXgudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQURBO0FBRUE7QUFDQTtBQUNBLE9BSkEsRUFMQTs7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBREE7QUFFQTtBQUNBO0FBQ0EsT0FKQSxFQWZBOztBQXFCQTtBQUNBO0FBQ0EsMkJBREE7QUFFQTtBQUNBO0FBQ0EsT0FKQSxFQXRCQTs7QUE0QkE7QUFDQTtBQUNBLDRCQURBO0FBRUE7QUFDQTtBQUNBLE9BSkEsRUE3QkE7O0FBbUNBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBO0FBQ0E7QUFDQSxPQUpBLEVBcENBOztBQTBDQTtBQUNBO0FBQ0EsbUJBREE7QUFFQTtBQUNBO0FBQ0EsT0FKQSxFQTNDQTs7QUFpREE7QUFDQTtBQUNBLGtCQURBO0FBRUE7QUFDQTtBQUNBLE9BSkEsRUFsREE7O0FBd0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBO0FBQ0E7QUFDQSxPQUpBLEVBNURBOztBQWtFQTtBQUNBO0FBQ0Esa0JBREE7QUFFQTtBQUNBO0FBQ0EsT0FKQSxFQW5FQTs7QUF5RUE7QUFDQTtBQUNBLGtCQURBO0FBRUE7QUFDQTtBQUNBLE9BSkEsRUExRUE7O0FBZ0ZBO0FBQ0E7QUFDQSxtQkFEQTtBQUVBO0FBQ0E7QUFDQSxPQUpBLEVBakZBLEVBREE7OztBQXlGQSxNQXpGQSxrQkF5RkE7QUFDQTtBQUNBO0FBQ0Esc0JBRkE7QUFHQTtBQUNBLHlCQUpBO0FBS0E7QUFDQSxrQkFOQTtBQU9BO0FBQ0EsNkJBUkE7QUFTQTtBQUNBLG9CQVZBO0FBV0E7QUFDQSw2Q0FaQTtBQWFBO0FBQ0Esd0JBZEE7QUFlQTtBQUNBLHdCQWhCQTtBQWlCQSwwQkFqQkE7O0FBbUJBLEdBN0dBO0FBOEdBO0FBQ0EsUUFEQSxrQkFDQTtBQUNBO0FBQ0EsS0FIQTtBQUlBLFFBSkEsa0JBSUE7QUFDQTtBQUNBLEtBTkE7QUFPQTtBQUNBLFlBUkEsc0JBUUE7QUFDQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBLEtBZEE7QUFlQTtBQUNBLGFBaEJBLHVCQWdCQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0EsS0F0QkE7QUF1QkE7QUFDQSxXQXhCQSxxQkF3QkE7QUFDQTtBQUNBLEtBMUJBO0FBMkJBO0FBQ0EsWUE1QkEsc0JBNEJBO0FBQ0E7QUFDQSxLQTlCQSxFQTlHQTs7QUE4SUE7QUFDQSxTQURBLGlCQUNBLEdBREEsRUFDQTtBQUNBO0FBQ0EsS0FIQTtBQUlBLGFBSkEscUJBSUEsR0FKQSxFQUlBO0FBQ0E7QUFDQTtBQUNBLEtBUEE7QUFRQSxXQVJBLG1CQVFBLEdBUkEsRUFRQTtBQUNBO0FBQ0EsS0FWQTtBQVdBLDZCQVhBLHFDQVdBLEdBWEEsRUFXQTtBQUNBO0FBQ0EsS0FiQTtBQWNBLGFBZEEscUJBY0EsR0FkQSxFQWNBO0FBQ0E7QUFDQSxzQkFEQTs7QUFHQSxLQWxCQSxFQTlJQTs7QUFrS0E7QUFDQSxTQW5LQSxxQkFtS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBREE7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQXJMQTtBQXNMQTtBQUNBO0FBQ0E7QUFDQSxjQUZBLHdCQUVBO0FBQ0E7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQSxLQVJBO0FBU0E7QUFDQSxjQVZBLHdCQVVBO0FBQ0E7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0EsdUJBREE7O0FBR0E7QUFDQSxLQWxCQTtBQW1CQSxjQW5CQSxzQkFtQkEsQ0FuQkEsRUFtQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQSxTQU5BLE1BTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBaENBO0FBaUNBO0FBQ0EsaUJBbENBLHlCQWtDQSxHQWxDQSxFQWtDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUhBLE1BR0E7QUFDQTtBQUNBO0FBQ0EsT0FUQSxNQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0EsU0FOQTtBQU9BO0FBQ0E7QUFDQTtBQUNBLEtBeERBO0FBeURBO0FBQ0EsZ0JBMURBLDBCQTBEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQURBO0FBRUEsb0NBRkE7O0FBSUEsT0FQQSxFQU9BLEdBUEE7QUFRQSxLQTlFQSxFQXZMQSxFIiwiZmlsZSI6IjQ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDx2aWV3PlxyXG5cdFx0PHZpZXdcclxuXHRcdFx0OmNsYXNzPVwiW25hdkZpeGVkID8gJ2hlYWRlcl9maXhlZCcgOiAnJywgdHlwZSA9PSAndHJhbnNwYXJlbnQnID8gJ2hlYWRlcl9hYnNvbHV0ZSc6ICcnLCBuYXZTaGFkb3cgPyAnaGVhZGVyX3NoYWRvdyc6ICcnLCB0aGVtZUJnQ29sb3JOYW1lXVwiXHJcblx0XHRcdDpzdHlsZT1cIltuYXZCZ0NvbG9yID8geyBiYWNrZ3JvdW5kSW1hZ2U6IG5hdkJnQ29sb3IgfSA6IHt9LCB7IHBhZGRpbmdUb3A6IHN0YXR1c0JhckhlaWdodCArICdweCcsIGNvbG9yOiBuYXZGb250Q29sb3IsIG9wYWNpdHk6IHRyYW5zcGFyZW50VmFsdWV9XVwiXHJcblx0XHQ+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiaGVhZGVyX2NvbnRlbnRcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImhlYWRlcl9sZWZ0X2JveFwiPlxyXG5cdFx0XHRcdFx0PHNsb3QgbmFtZT1cImxlZnRcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJoZWFkZXJfbGVmdF9pbmZvXCIgOmNsYXNzPVwiW2lzVHdvQnRuID8gJ2hlYWRlcl9idG5Nb25nb2wnIDogJycgLCBpc1doaXRlICYmIGlzVHdvQnRuID8gJ2hlYWRlcl9jb2xvcldoaXRlX2J0bk1vbmdvbCcgOiAnJ11cIiB2LWlmPVwiYmFjayB8fCAkc2xvdHMubGVmdCB8fCBob21lXCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJoZWFkZXJfbGVmdF9iYWNrXCIgOmNsYXNzPVwiWyBpc1R3b0J0biA/ICdoZWFkZXJfYnRuTW9uZ29sX2xlZnRfYmFjaycgOiAnJyBdXCIgdi1pZj1cImJhY2sgJiYgIWZpcnN0UGFnZVwiIEBjbGljaz1cIm9uQmFja1BhZ2VcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cImhlYWRlcl9pY29uXCIgdi1pZj1cImlzV2hpdGVcIiBzcmM9XCIvc3RhdGljL3pob3VXZWktbmF2QmFyL2ljb25fYmFja193aGl0ZS5wbmdcIiBtb2RlPVwiYXNwZWN0Rml0XCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cImhlYWRlcl9pY29uXCIgdi1lbHNlIHNyYz1cIi9zdGF0aWMvemhvdVdlaS1uYXZCYXIvaWNvbl9iYWNrX2JsYWNrLnBuZ1wiIG1vZGU9XCJhc3BlY3RGaXRcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImhlYWRlcl9sZWZ0X2xpbmVcIiA6Y2xhc3M9XCJbaXNXaGl0ZSA/ICdoZWFkZXJfY29sb3JXaGl0ZV9sZWZ0X2xpbmUnIDogJyddXCIgdi1pZj1cImlzVHdvQnRuXCI+PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaGVhZGVyX2xlZnRfaG9tZVwiIDpjbGFzcz1cIltpc1R3b0J0biA/ICdoZWFkZXJfYnRuTW9uZ29sX2xlZnRfaG9tZScgOiAnJ11cIiB2LWlmPVwiKGZpcnN0UGFnZSAmJiBiYWNrKSB8fCBob21lXCIgQGNsaWNrPVwib25CYWNrSG9tZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwiaGVhZGVyX2ljb25cIiB2LWlmPVwiaXNXaGl0ZVwiIHNyYz1cIi9zdGF0aWMvemhvdVdlaS1uYXZCYXIvaWNvbl9ob21lX3doaXRlLnBuZ1wiIG1vZGU9XCJhc3BlY3RGaXRcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwiaGVhZGVyX2ljb25cIiB2LWVsc2Ugc3JjPVwiL3N0YXRpYy96aG91V2VpLW5hdkJhci9pY29uX2hvbWVfYmxhY2sucG5nXCIgbW9kZT1cImFzcGVjdEZpdFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3Nsb3Q+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImhlYWRlcl90aXRsZVwiIHYtaWY9XCIhdGl0bGVDZW50ZXIgJiYgKCRzbG90cy5kZWZhdWx0IHx8IG5hdlRpdGxlKVwiIDpzdHlsZT1cInsgY29sb3I6IG5hdkZvbnRDb2xvciB9XCI+XHJcblx0XHRcdFx0XHRcdDxzbG90PlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IDpzdHlsZT1cInsgY29sb3I6IG5hdkZvbnRDb2xvciB9XCI+e3sgbmF2VGl0bGUgfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdDwvc2xvdD5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJoZWFkZXJfdGl0bGUgaGVhZGVyX3RpdGxlX2NlbnRlclwiIHYtaWY9XCJ0aXRsZUNlbnRlciAmJiAoJHNsb3RzLmRlZmF1bHQgfHwgbmF2VGl0bGUpXCIgOnN0eWxlPVwieyBjb2xvcjogbmF2Rm9udENvbG9yIH1cIj5cclxuXHRcdFx0XHRcdDxzbG90PlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCA6c3R5bGU9XCJ7IGNvbG9yOiBuYXZGb250Q29sb3IgfVwiPnt7IG5hdlRpdGxlIH19PC90ZXh0PlxyXG5cdFx0XHRcdFx0PC9zbG90PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImhlYWRlcl9yaWdodF9pbmZvXCI+PHNsb3QgbmFtZT1cInJpZ2h0XCI+PC9zbG90Pjwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXdcclxuXHRcdFx0Y2xhc3M9XCJoZWFkZXJfdHJhbnNwYXJlbnRGaXhlZCBoZWFkZXJfZml4ZWRcIlxyXG5cdFx0XHR2LWlmPVwidHlwZSA9PSAndHJhbnNwYXJlbnRGaXhlZCdcIlxyXG5cdFx0XHQ6c3R5bGU9XCJ7IHBhZGRpbmdUb3A6IHN0YXR1c0JhckhlaWdodCArICdweCcsIGNvbG9yOiBuYXZUcmFuc3BhcmVudEZpeGVkRm9udENvbG9yLCBvcGFjaXR5OiAxIC0gdHJhbnNwYXJlbnRWYWx1ZSwgekluZGV4OiB0cmFuc3BhcmVudFZhbHVlIDwgMC4zID8gMTAwIDogOTB9XCJcclxuXHRcdD5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJoZWFkZXJfY29udGVudFwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiaGVhZGVyX2xlZnRfYm94XCI+XHJcblx0XHRcdFx0XHQ8c2xvdCBuYW1lPVwidHJhbnNwYXJlbnRGaXhlZExlZnRcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXdcclxuXHRcdFx0XHRcdFx0XHRjbGFzcz1cImhlYWRlcl9sZWZ0X2luZm8gaGVhZGVyX3RyYW5zcGFyZW50Rml4ZWRfbGVmdF9pbmZvXCJcclxuXHRcdFx0XHRcdFx0XHQ6Y2xhc3M9XCJbIGlzV2hpdGUgPyAnaGVhZGVyX3RyYW5zcGFyZW50Rml4ZWRfY29sb3JXaGl0ZV9sZWZ0X2luZm8nIDogJycgXVwiXHJcblx0XHRcdFx0XHRcdFx0di1pZj1cImJhY2sgfHwgJHNsb3RzLmxlZnQgfHwgaG9tZVwiXHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImhlYWRlcl9sZWZ0X2JhY2tcIiA6Y2xhc3M9XCJbIGlzVHdvQnRuID8gJ2hlYWRlcl9idG5Nb25nb2xfbGVmdF9iYWNrJyA6ICcnIF1cIiB2LWlmPVwiYmFjayAmJiAhZmlyc3RQYWdlXCIgQGNsaWNrPVwib25CYWNrUGFnZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwiaGVhZGVyX2ljb25cIiB2LWlmPVwiaXNXaGl0ZVwiIHNyYz1cIi9zdGF0aWMvemhvdVdlaS1uYXZCYXIvaWNvbl9iYWNrX3doaXRlLnBuZ1wiIG1vZGU9XCJhc3BlY3RGaXRcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwiaGVhZGVyX2ljb25cIiB2LWVsc2Ugc3JjPVwiL3N0YXRpYy96aG91V2VpLW5hdkJhci9pY29uX2JhY2tfYmxhY2sucG5nXCIgbW9kZT1cImFzcGVjdEZpdFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaGVhZGVyX2xlZnRfbGluZVwiIHYtaWY9XCJpc1R3b0J0blwiPjwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImhlYWRlcl9sZWZ0X2hvbWVcIiA6Y2xhc3M9XCJbaXNUd29CdG4gPyAnaGVhZGVyX2J0bk1vbmdvbF9sZWZ0X2hvbWUnIDogJyddXCIgdi1pZj1cIihmaXJzdFBhZ2UgJiYgYmFjaykgfHwgaG9tZVwiIEBjbGljaz1cIm9uQmFja0hvbWVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cImhlYWRlcl9pY29uXCIgdi1pZj1cImlzV2hpdGVcIiBzcmM9XCIvc3RhdGljL3pob3VXZWktbmF2QmFyL2ljb25faG9tZV93aGl0ZS5wbmdcIiBtb2RlPVwiYXNwZWN0Rml0XCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cImhlYWRlcl9pY29uXCIgdi1lbHNlIHNyYz1cIi9zdGF0aWMvemhvdVdlaS1uYXZCYXIvaWNvbl9ob21lX2JsYWNrLnBuZ1wiIG1vZGU9XCJhc3BlY3RGaXRcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC9zbG90PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJoZWFkZXJfdGl0bGVcIiB2LWlmPVwiIXRpdGxlQ2VudGVyICYmIChuYXZUaXRsZSB8fCAkc2xvdHMudHJhbnNwYXJlbnRGaXhlZClcIiA6c3R5bGU9XCJ7IGNvbG9yOiBuYXZUcmFuc3BhcmVudEZpeGVkRm9udENvbG9yIH1cIj5cclxuXHRcdFx0XHRcdFx0PHNsb3QgbmFtZT1cInRyYW5zcGFyZW50Rml4ZWRcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCA6c3R5bGU9XCJ7IGNvbG9yOiBuYXZUcmFuc3BhcmVudEZpeGVkRm9udENvbG9yIH1cIj57eyBuYXZUaXRsZSB9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PC9zbG90PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImhlYWRlcl90aXRsZSBoZWFkZXJfdGl0bGVfY2VudGVyXCIgdi1pZj1cInRpdGxlQ2VudGVyICYmIChuYXZUaXRsZSB8fCAkc2xvdHMudHJhbnNwYXJlbnRGaXhlZClcIiA6c3R5bGU9XCJ7IGNvbG9yOiBuYXZUcmFuc3BhcmVudEZpeGVkRm9udENvbG9yIH1cIj5cclxuXHRcdFx0XHRcdDxzbG90IG5hbWU9XCJ0cmFuc3BhcmVudEZpeGVkXCI+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IDpzdHlsZT1cInsgY29sb3I6IG5hdlRyYW5zcGFyZW50Rml4ZWRGb250Q29sb3IgfVwiPnt7IG5hdlRpdGxlIH19PC90ZXh0PlxyXG5cdFx0XHRcdFx0PC9zbG90PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImhlYWRlcl9yaWdodF9pbmZvXCI+PHNsb3QgbmFtZT1cInRyYW5zcGFyZW50Rml4ZWRSaWdodFwiPjwvc2xvdD48L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IHYtaWY9XCJ0eXBlID09ICdmaXhlZCdcIiA6c3R5bGU9XCJ7IHBhZGRpbmdUb3A6IHN0YXR1c0JhckhlaWdodCArICdweCcgfVwiPjx2aWV3IGNsYXNzPVwiaGVhZGVyX3N0YXRpb25cIj48L3ZpZXc+PC92aWV3PlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuLy8g5Li76aG16aG16Z2i55qE6aG16Z2i6Lev5b6EXHJcbi8vIOWFs+iBlOWKn+iDve+8muaJk+W8gOeahOmhtemdouWPquacieS4gOS4queahOaXtuWAmeWPs+S4iuinkuiHquWKqOaYvuekuui/lOWbnummlumhteaMiemSru+8jOS4i+mdoui/meS4quaVsOe7hOaYr+aOkumZpOaYvuekuui/lOWbnummlumhteeahOmhtemdouOAglxyXG4vLyDkuLvpobXkvb/nlKjlnLrmma/vvJrlsI/nqIvluo/liIbkuqvlh7rljrvnmoTpobXpnaLvvIznlKjmiLfngrnlh7vlvIDmmK/liIbkuqvpobXpnaLvvIzlvojlpJrmg4XlhrXkuIvmmK/msqHmnInov5Tlm57pppbpobXmjInpkq7nmoRcclxuY29uc3QgbWFpblBhZ2VQYXRoID0gWydwYWdlcy9ob21lL2hvbWUnLCAncGFnZXMvbXkvbXknLCAncGFnZXMvZGVtby9jb21tb24nLCAncGFnZXMvdGVtcGxhdGUvY29tbW9uJywgJ3BhZ2VzL2FwaURlbW8vY29tbW9uJ107XG4vL+i/lOWbnummlumhteeahOWcsOWdgFxuY29uc3QgaG9tZVBhdGggPSAnL3BhZ2VzL2RlbW8vY29tbW9uJztcclxuLy/nmb3oibLooajovr7lgLxcclxuY29uc3Qgd2hpdGVMaXN0ID0gWycjRkZGJywgJyNmZmYnLCAnI0ZGRkZGRicsICcjZmZmZmZmJywgJ3doaXRlJywgJ3JnYigyNTUsMjU1LDI1NSknLCAncmdiYSgyNTUsMjU1LDI1NSwxKSddO1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0cHJvcHM6IHtcclxuXHRcdC8v5piv5ZCm5pi+56S66L+U5Zue5oyJ6ZKuXHJcblx0XHQvLyAxMDAwIOaYvuekuui/lOWbnuaMiemSrlxyXG5cdFx0Ly8gMjAwMCDkuI3mmL7npLrov5Tlm57mjInpkq5cclxuXHRcdC8vIDMwMDAg6Ieq5a6a5LmJ6L+U5Zue5oyJ6ZKu5pa55rOV77yM54K55Ye76L+U5Zue566t5aS05ZCO5Lya5Y+R6YCB5LiA5LiqYmFja0NsaWNr5LqL5Lu2XHJcblx0XHRiYWNrU3RhdGU6IHtcclxuICAgICAgICAgICAgdHlwZTogW1N0cmluZywgTnVtYmVyXSxcclxuXHRcdFx0ZGVmYXVsdDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIDEwMDA7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHQvL+aYr+WQpuaYvuekuui/lOWbnummlumhteaMiemSrlxyXG4gICAgICAgIC8vIDEwMDAg5pi+56S66aaW6aG15oyJ6ZKuXHJcbiAgICAgICAgLy8gMjAwMCDkuI3mmL7npLrpppbpobXmjInpkq5cclxuICAgICAgICAvLyAzMDAwIOiHquWumuS5iemmlumhteaMiemSruaWueazle+8jOeCueWHu+mmlumhteeureWktOWQjuS8muWPkemAgeS4gOS4qmhvbWVDbGlja+S6i+S7tlxyXG5cdFx0aG9tZVN0YXRlOiB7XHJcblx0XHRcdHR5cGU6IFtTdHJpbmcsIE51bWJlcl0sXHJcblx0XHRcdGRlZmF1bHQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiAyMDAwO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0Ly/lr7zoiKrog4zmma/oibLvvIzmlK/mjIHmuJDlj5hcclxuXHRcdGJnQ29sb3I6IHtcclxuXHRcdFx0dHlwZTogW1N0cmluZywgQXJyYXldLFxyXG5cdFx0XHRkZWZhdWx0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gJyNGRkZGRkYnO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0Ly8g5a+86Iiq6IOM5pmv6Imy5riQ5Y+Y6KeS5bqmXHJcblx0XHRiZ0NvbG9yQW5nbGU6IHtcclxuXHRcdFx0dHlwZTogW1N0cmluZywgTnVtYmVyXSxcclxuXHRcdFx0ZGVmYXVsdDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIDkwO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0Ly/lr7zoiKrlrZfkvZPpopzoibLvvIzlrZfkvZPpopzoibLkuLrnmb3oibLnmoTml7blgJnkvJrmiormiYvmnLrnirbmgIHmoI/orr7nva7kuLrnmb3oibLvvIzlkKbliJnkuLrpu5HoibJcclxuXHRcdGZvbnRDb2xvcjoge1xyXG5cdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdGRlZmF1bHQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiAnIzAwMDAwMCc7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHQvL+agh+mimOaYr+WQpuWxheS4rVxyXG5cdFx0dGl0bGVDZW50ZXI6IHtcclxuXHRcdFx0dHlwZTogQm9vbGVhbixcclxuXHRcdFx0ZGVmYXVsdDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHQvL+agh+mimFxyXG5cdFx0dGl0bGU6IHtcclxuXHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRkZWZhdWx0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gJyc7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHQvL+exu+WeiyBmaXhlZOS4uuWbuuWumiDpu5jorqRcclxuXHRcdC8vIG9yZGluYXJ5IOaZrumAmueahCDkuI3lm7rlrppcclxuXHRcdC8vIHRyYW5zcGFyZW50IOmAj+aYjuS4jeWbuuWumueahFxyXG5cdFx0Ly90cmFuc3BhcmVudEZpeGVkICDpgI/mmI7lm7rlrprnmoRcclxuXHRcdHR5cGU6IHtcclxuXHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRkZWZhdWx0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gJ2ZpeGVkJztcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdC8v6YCP5piO5Zu65a6a55qE5pe25YCZ5a2X5L2T6aKc6ImyXHJcblx0XHR0cmFuc3BhcmVudEZpeGVkRm9udENvbG9yOiB7XHJcblx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0ZGVmYXVsdDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuICcjMDAwMDAwJztcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdC8vIOWxj+W5lea7keWKqOi3neemu+mhtumDqOi3neemuyjpgI/mmI7lm7rlrprlr7zoiKrmr5TkvKApXHJcblx0XHRzY3JvbGxUb3A6IHtcclxuXHRcdFx0dHlwZTogTnVtYmVyLFxyXG5cdFx0XHRkZWZhdWx0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gMDtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdC8vIOaYr+WQpuaYvuekuumYtOW9sVxyXG5cdFx0c2hhZG93OiB7XHJcblx0XHRcdHR5cGU6IEJvb2xlYW4sXHJcblx0XHRcdGRlZmF1bHQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSxcclxuXHRkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0Ly/lvZPliY3pobXpnaLmmK/lkKbmmK/nrKzkuIDkuKrpobXpnaJcclxuXHRcdFx0Zmlyc3RQYWdlOiBmYWxzZSxcclxuXHRcdFx0Ly/pgI/mmI7luqblgLxcclxuXHRcdFx0dHJhbnNwYXJlbnRWYWx1ZTogMSxcclxuXHRcdFx0Ly/moIfpophcclxuXHRcdFx0bmF2VGl0bGU6ICcnLFxyXG5cdFx0XHQvL+Wtl+S9k+iJslxyXG5cdFx0XHRuYXZGb250Q29sb3I6ICcjMDAwMDAwJyxcclxuXHRcdFx0Ly/og4zmma/oibJcclxuXHRcdFx0bmF2QmdDb2xvcjogJycsXHJcblx0XHRcdC8v6YCP5piO5bqV5a2X5L2T6ImyXHJcblx0XHRcdG5hdlRyYW5zcGFyZW50Rml4ZWRGb250Q29sb3I6ICcjMDAwMDAwJyxcclxuXHRcdFx0Ly8g5a+86Iiq5qCP6auY5bqmXHJcblx0XHRcdHN0YXR1c0JhckhlaWdodDogMCxcclxuXHRcdFx0Ly8g5LiK5qyh5pi+56S655qE5a+86Iiq5qCP6aKc6ImyXHJcblx0XHRcdGxhc3RGcm9udENvbG9yOiAnJyxcclxuXHRcdFx0dGhlbWVCZ0NvbG9yTmFtZTogJycsXHJcblx0XHR9O1xyXG5cdH0sXHJcblx0Y29tcHV0ZWQ6IHtcclxuXHRcdGJhY2soKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmJhY2tTdGF0ZSA9PSAxMDAwIHx8IHRoaXMuYmFja1N0YXRlID09IDMwMDA7XHJcblx0XHR9LFxyXG4gICAgICAgIGhvbWUoKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmhvbWVTdGF0ZSA9PSAxMDAwO1xyXG5cdFx0fSxcclxuXHRcdC8v5a+86Iiq5Zu65a6aXHJcblx0XHRuYXZGaXhlZCgpIHtcclxuXHRcdFx0aWYgKHRoaXMudHlwZSA9PSAndHJhbnNwYXJlbnRGaXhlZCcgfHwgdGhpcy50eXBlID09ICdmaXhlZCcpIHtcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHQvL+WvvOiIquW6lemDqOe6v+aYr+WQpuaYvuekulxyXG5cdFx0bmF2U2hhZG93KCkge1xyXG5cdFx0XHRpZiAodGhpcy5iZ0NvbG9yICYmIHR5cGVvZiB0aGlzLmJnQ29sb3IgPT0gJ3N0cmluZycpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5zaGFkb3cgJiYgdGhpcy50eXBlICE9PSAndHJhbnNwYXJlbnQnICYmIHdoaXRlTGlzdC5pbmNsdWRlcyh0aGlzLmJnQ29sb3IpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdC8v5a+86Iiq5a2X5L2T5piv5ZCm5piv55m96Imy6aKc6ImyXHJcblx0XHRpc1doaXRlKCkge1xyXG5cdFx0XHRyZXR1cm4gd2hpdGVMaXN0LmluY2x1ZGVzKHRoaXMubmF2Rm9udENvbG9yKTtcclxuXHRcdH0sXHJcblx0XHQvL+WPs+S4iuinkuaYr+WQpuacieS4pOS4quaMiemSrlxyXG5cdFx0aXNUd29CdG4oKSB7XHJcblx0XHRcdHJldHVybiAodGhpcy5iYWNrU3RhdGUgPT0gMTAwMCB8fCB0aGlzLmJhY2tTdGF0ZSA9PSAzMDAwKSAmJiB0aGlzLmhvbWVTdGF0ZSA9PSAxMDAwICYmICF0aGlzLmZpcnN0UGFnZTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdHdhdGNoOiB7XHJcblx0XHR0aXRsZSh2YWwpIHtcclxuXHRcdFx0dGhpcy5uYXZUaXRsZSA9IHZhbDtcclxuXHRcdH0sXHJcblx0XHRmb250Q29sb3IodmFsKSB7XHJcblx0XHRcdHRoaXMubmF2Rm9udENvbG9yID0gdmFsO1xyXG5cdFx0XHR0aGlzLnNldHRpbmdDb2xvcigpO1xyXG5cdFx0fSxcclxuXHRcdGJnQ29sb3IodmFsKSB7XHJcblx0XHRcdHRoaXMuZ2V0TmF2QmdDb2xvcih2YWwpO1xyXG5cdFx0fSxcclxuXHRcdHRyYW5zcGFyZW50Rml4ZWRGb250Q29sb3IodmFsKSB7XHJcblx0XHRcdHRoaXMubmF2VHJhbnNwYXJlbnRGaXhlZEZvbnRDb2xvciA9IHZhbDtcclxuXHRcdH0sXHJcblx0XHRzY3JvbGxUb3AodmFsKSB7XHJcblx0XHRcdHRoaXMucGFnZVNjcm9sbCh7XHJcblx0XHRcdFx0c2Nyb2xsVG9wOiB2YWxcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fSxcclxuXHQvL+esrOS4gOasoeWKoOi9vVxyXG5cdGNyZWF0ZWQoKSB7XHJcblx0XHR0aGlzLm5hdlRpdGxlID0gdGhpcy50aXRsZTtcclxuXHRcdHRoaXMubmF2Rm9udENvbG9yID0gdGhpcy5mb250Q29sb3I7XHJcblx0XHR0aGlzLmdldE5hdkJnQ29sb3IodGhpcy5iZ0NvbG9yKTtcclxuXHRcdHRoaXMubmF2VHJhbnNwYXJlbnRGaXhlZEZvbnRDb2xvciA9IHRoaXMudHJhbnNwYXJlbnRGaXhlZEZvbnRDb2xvcjtcclxuXHRcdC8v6I635Y+W5omL5py654q25oCB5qCP6auY5bqmXHJcblx0XHR0aGlzLnN0YXR1c0JhckhlaWdodCA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpWydzdGF0dXNCYXJIZWlnaHQnXTtcclxuXHRcdGNvbnN0IF90aGlzID0gdGhpcztcclxuXHRcdHRoaXMucGFnZVNjcm9sbCh7XHJcblx0XHRcdHNjcm9sbFRvcDogdGhpcy5zY3JvbGxUb3BcclxuXHRcdH0pO1xyXG5cdFx0Ly/ojrflj5bmiYDmnInpobXpnaJcclxuXHRcdGxldCBjdXJyZW50UGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcclxuXHRcdGxldCBwYWdlTGVuID0gY3VycmVudFBhZ2VzLmxlbmd0aDtcclxuXHRcdC8v5Yik5pat5piv5ZCm5piv56ys5LiA5Liq6aG16Z2i77yM5aaC5p6c5piv5pyJ6K6+572uYmFja+S4unRydWXnmoTpobXpnaLvvIzlsIbkuI3mmL7npLrov5Tlm57nrq3lpLTvvIzogIzmmL7npLrov5Tlm57pppbpobXmjInpkq5cclxuXHRcdGlmIChwYWdlTGVuID09IDEgJiYgIW1haW5QYWdlUGF0aC5pbmNsdWRlcyhjdXJyZW50UGFnZXNbMF0ucm91dGUpKSB7XHJcblx0XHRcdHRoaXMuZmlyc3RQYWdlID0gdHJ1ZTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdC8v5pa55rOVXHJcblx0bWV0aG9kczoge1xyXG5cdFx0Ly/ov5Tlm57kuIrkuIDpobXpnaJcclxuXHRcdG9uQmFja1BhZ2UoKSB7XHJcblx0XHRcdGlmICh0aGlzLmJhY2tTdGF0ZSA9PSAzMDAwKSB7XHJcblx0XHRcdFx0dGhpcy4kZW1pdCgnYmFja0NsaWNrJyk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlQmFjaygpO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0Ly/ov5Tlm57pppbpobVcclxuXHRcdG9uQmFja0hvbWUoKSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuaG9tZVN0YXRlID09IDMwMDApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnaG9tZUNsaWNrJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB1bmkucmVMYXVuY2goe1xyXG4gICAgICAgICAgICAgICAgXHR1cmw6IGhvbWVQYXRoXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cdFx0fSxcclxuXHRcdHBhZ2VTY3JvbGwoZSkge1xyXG5cdFx0XHRpZiAodGhpcy50eXBlID09ICd0cmFuc3BhcmVudEZpeGVkJykge1xyXG5cdFx0XHRcdGlmIChlLnNjcm9sbFRvcCAmJiBlLnNjcm9sbFRvcCA+IDApIHtcclxuXHRcdFx0XHRcdGlmIChlLnNjcm9sbFRvcCA+IDE4MCkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnRyYW5zcGFyZW50VmFsdWUgPSAxO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dGhpcy50cmFuc3BhcmVudFZhbHVlID0gZS5zY3JvbGxUb3AgLyAxODA7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRoaXMudHJhbnNwYXJlbnRWYWx1ZSA9IDA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMuc2V0dGluZ0NvbG9yKCk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHQvLyDojrflj5blr7zoiKrog4zmma/popzoibJcclxuXHRcdGdldE5hdkJnQ29sb3IodmFsKSB7XHJcblx0XHRcdGlmICh0eXBlb2YgdmFsID09ICdzdHJpbmcnKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMudHlwZSA9PSAndHJhbnNwYXJlbnQnKSB7XHJcblx0XHRcdFx0XHR0aGlzLm5hdkJnQ29sb3IgPSAnJztcclxuXHRcdFx0XHR9IGVsc2UgaWYgKHZhbC5pbmRleE9mKCcjJykgPT09IC0xKSB7XHJcblx0XHRcdFx0XHR0aGlzLnRoZW1lQmdDb2xvck5hbWUgPSB2YWw7XHJcblx0XHRcdFx0XHR0aGlzLm5hdkJnQ29sb3IgPSAnJztcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5uYXZCZ0NvbG9yID0gJ2xpbmVhci1ncmFkaWVudCg5MGRlZywnICsgdmFsICsgJywnICsgdmFsICsgJyknO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbCkgJiYgdmFsLmxlbmd0aCA+PSAyKSB7XHJcblx0XHRcdFx0bGV0IG5hdkJnQ29sb3IgPSAnbGluZWFyLWdyYWRpZW50KCcgKyB0aGlzLmJnQ29sb3JBbmdsZSArICdkZWcnO1xyXG5cdFx0XHRcdHZhbC5mb3JFYWNoKGl0ZW0gPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHR5cGVvZiBpdGVtID09ICdzdHJpbmcnKSB7XHJcblx0XHRcdFx0XHRcdG5hdkJnQ29sb3IgKz0gJywnICsgaXRlbTtcclxuXHRcdFx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIGl0ZW0gPT0gJ29iamVjdCcpIHtcclxuXHRcdFx0XHRcdFx0bmF2QmdDb2xvciArPSAnLCcgKyBpdGVtLmNvbG9yICsgJyAnICsgaXRlbS5zY2FsZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRuYXZCZ0NvbG9yICs9ICcpJztcclxuXHRcdFx0XHR0aGlzLm5hdkJnQ29sb3IgPSBuYXZCZ0NvbG9yO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0Ly/orr7nva7miYvmnLrnirbmgIHmoI/popzoibJcclxuXHRcdHNldHRpbmdDb2xvcigpIHtcclxuXHRcdFx0bGV0IG5hdkNvbG9yID0gdGhpcy5uYXZGb250Q29sb3I7XHJcblx0XHRcdGlmICh0aGlzLnR5cGUgPT0gJ3RyYW5zcGFyZW50Rml4ZWQnICYmIHRoaXMudHJhbnNwYXJlbnRWYWx1ZSA8PSAwLjUpIHtcclxuXHRcdFx0XHRuYXZDb2xvciA9IHRoaXMubmF2VHJhbnNwYXJlbnRGaXhlZEZvbnRDb2xvcjtcclxuXHRcdFx0fVxyXG5cdFx0XHRsZXQgZnJvbnRDb2xvciA9ICcjMDAwMDAwJztcclxuXHRcdFx0aWYgKHdoaXRlTGlzdC5pbmNsdWRlcyhuYXZDb2xvcikpIHtcclxuXHRcdFx0XHRmcm9udENvbG9yID0gJyNmZmZmZmYnO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh0aGlzLmxhc3RGcm9udENvbG9yID09IGZyb250Q29sb3IpIHtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5sYXN0RnJvbnRDb2xvciA9IGZyb250Q29sb3I7XHJcblx0XHRcdFx0Ly8g5pS55Y+Y5omL5py654q25oCB5qCP6aKc6ImyXHJcblx0XHRcdFx0dW5pLnNldE5hdmlnYXRpb25CYXJDb2xvcih7XHJcblx0XHRcdFx0XHRmcm9udENvbG9yOiBmcm9udENvbG9yLFxyXG5cdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiAnI0ZGRkZGRidcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSwgMTUwKTtcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cclxuLmhlYWRlcl9jb250ZW50IHtcclxuXHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0ZGlzcGxheTogZmxleDtcclxuXHQvKiAjZW5kaWYgKi9cclxuXHQvKiAjaWZkZWYgTVAgKi9cclxuXHRwYWRkaW5nLXJpZ2h0OiAxOTBycHg7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHQvKiAjZW5kaWYgKi9cclxuXHR3aWR0aDogNzUwcnB4O1xyXG5cdGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRoZWlnaHQ6IDg4cnB4O1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmhlYWRlcl9zdGF0aW9uIHtcclxuXHRoZWlnaHQ6IDg4cnB4O1xyXG59XHJcblxyXG4uaGVhZGVyX3NoYWRvdyB7XHJcblx0Ly8gYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuXHQvLyBib3JkZXItd2lkdGg6IDJycHg7XHJcblx0Ly8gYm9yZGVyLWNvbG9yOiAjZjVmNWY1O1xyXG5cdGJveC1zaGFkb3c6IDAgMCA2cnB4IDAgI2RkZDtcclxufVxyXG5cclxuLmhlYWRlcl9maXhlZCB7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdHRvcDogMDtcclxuXHRsZWZ0OiAwO1xyXG5cdHdpZHRoOiA3NTBycHg7XHJcblx0ei1pbmRleDogOTk7XHJcbn1cclxuXHJcbi5oZWFkZXJfYWJzb2x1dGUge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDA7XHJcblx0bGVmdDogMDtcclxuXHR6LWluZGV4OiA5OTtcclxuXHR3aWR0aDogNzUwcnB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5oZWFkZXJfbGVmdF9ib3gge1xyXG5cdC8qICNpZm5kZWYgQVBQLVBMVVMtTlZVRSAqL1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0LyogI2VuZGlmICovXHJcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGhlaWdodDogODhycHg7XHJcblx0ZmxleDogMTtcclxufVxyXG5cclxuLmhlYWRlcl9sZWZ0X2xpbmUge1xyXG5cdGhlaWdodDogMzBycHg7XHJcblx0d2lkdGg6IDJycHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xyXG59XHJcblxyXG4uaGVhZGVyX2xlZnRfYmFjayB7XHJcblx0d2lkdGg6IDU2cnB4O1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHQvKiAjaWZuZGVmIEFQUC1QTFVTLU5WVUUgKi9cclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdC8qICNlbmRpZiAqL1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5oZWFkZXJfaWNvbiB7XHJcblx0d2lkdGg6IDMwcnB4O1xyXG5cdGhlaWdodDogMzBycHg7XHJcbn1cclxuXHJcbi5oZWFkZXJfbGVmdF9ob21lIHtcclxuXHR3aWR0aDogNTZycHg7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdC8qICNpZm5kZWYgQVBQLVBMVVMtTlZVRSAqL1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0LyogI2VuZGlmICovXHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmhlYWRlcl9sZWZ0X2luZm8ge1xyXG5cdC8qICNpZm5kZWYgQVBQLVBMVVMtTlZVRSAqL1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0LyogI2VuZGlmICovXHJcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGhlaWdodDogNTZycHg7XHJcblx0bWFyZ2luLWxlZnQ6IDE2cnB4O1xyXG59XHJcblxyXG4uaGVhZGVyX3RpdGxlIHtcclxuXHRoZWlnaHQ6IDg4cnB4O1xyXG5cdGZvbnQtc2l6ZTogMzJycHg7XHJcblx0cGFkZGluZy1sZWZ0OiAzMHJweDtcclxuXHRwYWRkaW5nLXJpZ2h0OiAzMHJweDtcclxuXHRmb250LXdlaWdodDogNzAwO1xyXG5cdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5cdC8qICNpZm5kZWYgQVBQLVBMVVMtTlZVRSAqL1xyXG5cdHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdC8qICNlbmRpZiAqL1xyXG5cdC8qICNpZmRlZiBBUFAtUExVUy1OVlVFICovXHJcblx0bGluZXM6IDE7XHJcblx0LyogI2VuZGlmICovXHJcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdC8qICNpZmRlZiBNUCAqL1xyXG5cdG1heC13aWR0aDogY2FsYygxMDB2dyAtIDE2MHJweCk7XHJcblx0LyogI2VuZGlmICovXHJcbn1cclxuXHJcbi5oZWFkZXJfdGl0bGVfY2VudGVyIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0Ym90dG9tOiAwcnB4O1xyXG5cdGxlZnQ6IDM3NXJweDtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbn1cclxuXHJcbi5oZWFkZXJfcmlnaHRfaW5mbyB7XHJcblx0aGVpZ2h0OiA4OHJweDtcclxuXHQvKiAjaWZuZGVmIEFQUC1QTFVTLU5WVUUgKi9cclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtc2hyaW5rOiAwO1xyXG5cdC8qICNlbmRpZiAqL1xyXG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmhlYWRlcl9idG5Nb25nb2wge1xyXG5cdGJvcmRlci1yYWRpdXM6IDMzcnB4O1xyXG5cdGJvcmRlci1zdHlsZTogc29saWQ7XHJcblx0Ym9yZGVyLXdpZHRoOiAycnB4O1xyXG5cdGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcclxuXHQvKiAjaWZuZGVmIEFQUC1QTFVTLU5WVUUgKi9cclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdC8qICNlbmRpZiAqL1xyXG59XHJcblxyXG4uaGVhZGVyX2J0bk1vbmdvbF9sZWZ0X2JhY2ssXHJcbi5oZWFkZXJfYnRuTW9uZ29sX2xlZnRfaG9tZSB7XHJcblx0d2lkdGg6IDcwcnB4O1xyXG59XHJcblxyXG4uaGVhZGVyX3RyYW5zcGFyZW50Rml4ZWQge1xyXG5cdGJvcmRlci1ib3R0b20td2lkdGg6IDA7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0YmFja2dyb3VuZC1pbWFnZTogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5oZWFkZXJfdHJhbnNwYXJlbnRGaXhlZF9sZWZ0X2luZm8ge1xyXG5cdGJvcmRlci1zdHlsZTogc29saWQ7XHJcblx0Ym9yZGVyLXdpZHRoOiAycnB4O1xyXG5cdGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcclxuXHRib3JkZXItcmFkaXVzOiAzM3JweDtcclxuXHQvKiAjaWZuZGVmIEFQUC1QTFVTLU5WVUUgKi9cclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdC8qICNlbmRpZiAqL1xyXG59XHJcblxyXG4uaGVhZGVyX3RyYW5zcGFyZW50Rml4ZWRfY29sb3JXaGl0ZV9sZWZ0X2luZm8ge1xyXG5cdGJvcmRlci1zdHlsZTogc29saWQ7XHJcblx0Ym9yZGVyLXdpZHRoOiAycnB4O1xyXG5cdGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxufVxyXG5cclxuLy/popzoibLnmb3oibJcclxuLmhlYWRlcl9jb2xvcldoaXRlX2J0bk1vbmdvbCB7XHJcblx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcclxuXHRib3JkZXItd2lkdGg6IDJycHg7XHJcblx0Ym9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcblxyXG4uaGVhZGVyX2NvbG9yV2hpdGVfbGVmdF9saW5lIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcbn1cclxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///49\n");

/***/ }),
/* 50 */
/*!*******************************************************************!*\
  !*** D:/uniapp/uniapp-simple/components/common/public-module.vue ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _public_module_vue_vue_type_template_id_c064c232_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public-module.vue?vue&type=template&id=c064c232&scoped=true& */ 51);\n/* harmony import */ var _public_module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./public-module.vue?vue&type=script&lang=js& */ 53);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _public_module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _public_module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 17);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _public_module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _public_module_vue_vue_type_template_id_c064c232_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _public_module_vue_vue_type_template_id_c064c232_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"c064c232\",\n  null,\n  false,\n  _public_module_vue_vue_type_template_id_c064c232_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"components/common/public-module.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBc0k7QUFDdEk7QUFDaUU7QUFDTDs7O0FBRzVEO0FBQ3VLO0FBQ3ZLLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLG1GQUFNO0FBQ1IsRUFBRSxvR0FBTTtBQUNSLEVBQUUsNkdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsd0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiNTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3B1YmxpYy1tb2R1bGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWMwNjRjMjMyJnNjb3BlZD10cnVlJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vcHVibGljLW1vZHVsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3B1YmxpYy1tb2R1bGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi/lronoo4XljIUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImMwNjRjMjMyXCIsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvY29tbW9uL3B1YmxpYy1tb2R1bGUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///50\n");

/***/ }),
/* 51 */
/*!**************************************************************************************************************!*\
  !*** D:/uniapp/uniapp-simple/components/common/public-module.vue?vue&type=template&id=c064c232&scoped=true& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_public_module_vue_vue_type_template_id_c064c232_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./public-module.vue?vue&type=template&id=c064c232&scoped=true& */ 52);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_public_module_vue_vue_type_template_id_c064c232_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_public_module_vue_vue_type_template_id_c064c232_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_public_module_vue_vue_type_template_id_c064c232_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_public_module_vue_vue_type_template_id_c064c232_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 52 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/uniapp/uniapp-simple/components/common/public-module.vue?vue&type=template&id=c064c232&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    [
      _c("z-loading", { attrs: { _i: 1 } }),
      _c("guide-pages", { attrs: { _i: 2 } })
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 53 */
/*!********************************************************************************************!*\
  !*** D:/uniapp/uniapp-simple/components/common/public-module.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_public_module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./public-module.vue?vue&type=script&lang=js& */ 54);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_public_module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_public_module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_public_module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_public_module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_public_module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlqQixDQUFnQixta0JBQUcsRUFBQyIsImZpbGUiOiI1My5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uL+WuieijheWMhS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wdWJsaWMtbW9kdWxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi/lronoo4XljIUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi/lronoo4XljIUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi/lronoo4XljIUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3B1YmxpYy1tb2R1bGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///53\n");

/***/ }),
/* 54 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/uniapp/uniapp-simple/components/common/public-module.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _loading = _interopRequireDefault(__webpack_require__(/*! @/components/common/loading.vue */ 55));\n\n\n\n\nvar _guidePages = _interopRequireDefault(__webpack_require__(/*! @/components/module/guide-pages.vue */ 60));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = { components: { zLoading: _loading.default, guidePages: _guidePages.default } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9jb21tb24vcHVibGljLW1vZHVsZS52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBZUE7Ozs7O0FBS0EsNkc7Ozs7Ozs7Ozs7Ozs7O2VBRUEsRUFDQSxjQUNBLDBCQURBLEVBTUEsK0JBTkEsRUFEQSxFIiwiZmlsZSI6IjU0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDx2aWV3PlxyXG5cdFx0PCEtLSDliqDovb3liqjnlLvnu4Tku7YgLS0+XHJcblx0XHQ8ei1sb2FkaW5nPjwvei1sb2FkaW5nPlxyXG5cdFx0PCEtLSAjaWZkZWYgTVAtV0VJWElOIC0tPlxyXG5cdFx0PCEtLSDlsI/nqIvluo/nmbvlvZXlvLnnqpfnu4Tku7YgLS0+XHJcblx0XHQ8YXBwbGV0cy1sb2dpbj48L2FwcGxldHMtbG9naW4+XHJcblx0XHQ8IS0tICNlbmRpZiAtLT5cclxuICAgICAgICA8IS0tICNpZmRlZiBBUFAtUExVUyAtLT5cclxuICAgICAgICA8Z3VpZGUtcGFnZXM+PC9ndWlkZS1wYWdlcz5cclxuICAgICAgICA8IS0tICNlbmRpZiAtLT5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCB6TG9hZGluZyAgZnJvbSBcIkAvY29tcG9uZW50cy9jb21tb24vbG9hZGluZy52dWVcIlxyXG5cdC8vICNpZmRlZiBNUC1XRUlYSU5cclxuXHRpbXBvcnQgYXBwbGV0c0xvZ2luICBmcm9tIFwiQC9jb21wb25lbnRzL2NvbW1vbi9hcHBsZXRzLWxvZ2luLnZ1ZVwiXHJcblx0Ly8gI2VuZGlmXHJcbiAgICAvLyAjaWZkZWYgQVBQLVBMVVNcclxuICAgIGltcG9ydCBndWlkZVBhZ2VzICBmcm9tIFwiQC9jb21wb25lbnRzL21vZHVsZS9ndWlkZS1wYWdlcy52dWVcIlxyXG4gICAgLy8gI2VuZGlmXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0Y29tcG9uZW50czp7XHJcblx0XHRcdHpMb2FkaW5nLFxyXG5cdFx0XHQvLyAjaWZkZWYgTVAtV0VJWElOXHJcblx0XHRcdGFwcGxldHNMb2dpbixcclxuXHRcdFx0Ly8gI2VuZGlmXHJcbiAgICAgICAgICAgIC8vICNpZmRlZiBBUFAtUExVU1xyXG4gICAgICAgICAgICBndWlkZVBhZ2VzLFxyXG4gICAgICAgICAgICAvLyAjZW5kaWZcclxuXHRcdH1cclxuXHR9O1xyXG48L3NjcmlwdD5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG5cclxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///54\n");

/***/ }),
/* 55 */
/*!*************************************************************!*\
  !*** D:/uniapp/uniapp-simple/components/common/loading.vue ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loading_vue_vue_type_template_id_95e061da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loading.vue?vue&type=template&id=95e061da& */ 56);\n/* harmony import */ var _loading_vue_vue_type_script_scoped_true_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading.vue?vue&type=script&scoped=true&lang=js& */ 58);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _loading_vue_vue_type_script_scoped_true_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _loading_vue_vue_type_script_scoped_true_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 17);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _loading_vue_vue_type_script_scoped_true_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _loading_vue_vue_type_template_id_95e061da___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _loading_vue_vue_type_template_id_95e061da___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _loading_vue_vue_type_template_id_95e061da___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"components/common/loading.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBb0g7QUFDcEg7QUFDdUU7QUFDTDs7O0FBR2xFO0FBQ3VLO0FBQ3ZLLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLHlGQUFNO0FBQ1IsRUFBRSxrRkFBTTtBQUNSLEVBQUUsMkZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsc0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiNTUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2xvYWRpbmcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTk1ZTA2MWRhJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbG9hZGluZy52dWU/dnVlJnR5cGU9c2NyaXB0JnNjb3BlZD10cnVlJmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2xvYWRpbmcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZzY29wZWQ9dHJ1ZSZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi/lronoo4XljIUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL2NvbW1vbi9sb2FkaW5nLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///55\n");

/***/ }),
/* 56 */
/*!********************************************************************************************!*\
  !*** D:/uniapp/uniapp-simple/components/common/loading.vue?vue&type=template&id=95e061da& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_template_id_95e061da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./loading.vue?vue&type=template&id=95e061da& */ 57);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_template_id_95e061da___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_template_id_95e061da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_template_id_95e061da___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_template_id_95e061da___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 57 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/uniapp/uniapp-simple/components/common/loading.vue?vue&type=template&id=95e061da& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._$s(0, "i", _vm.loadingShow)
    ? _c(
        "view",
        {
          staticClass: _vm._$s(0, "sc", "mask mask-show"),
          attrs: { _i: 0 },
          on: {
            touchmove: function($event) {
              $event.stopPropagation()
              $event.preventDefault()
              return _vm.preventTouchMove($event)
            }
          }
        },
        [
          _c(
            "view",
            { staticClass: _vm._$s(1, "sc", "preloader"), attrs: { _i: 1 } },
            [
              _c("view", {
                staticClass: _vm._$s(2, "sc", "loader"),
                attrs: { _i: 2 }
              })
            ]
          ),
          _c("view", {
            staticClass: _vm._$s(3, "sc", "title"),
            attrs: { _i: 3 }
          })
        ]
      )
    : _vm._e()
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 58 */
/*!**************************************************************************************************!*\
  !*** D:/uniapp/uniapp-simple/components/common/loading.vue?vue&type=script&scoped=true&lang=js& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_script_scoped_true_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./loading.vue?vue&type=script&scoped=true&lang=js& */ 59);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_script_scoped_true_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_script_scoped_true_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_script_scoped_true_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_script_scoped_true_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_script_scoped_true_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStqQixDQUFnQix5a0JBQUcsRUFBQyIsImZpbGUiOiI1OC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uL+WuieijheWMhS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9sb2FkaW5nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmc2NvcGVkPXRydWUmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi/lronoo4XljIUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi/lronoo4XljIUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi/lronoo4XljIUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xvYWRpbmcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZzY29wZWQ9dHJ1ZSZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///58\n");

/***/ }),
/* 59 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/uniapp/uniapp-simple/components/common/loading.vue?vue&type=script&scoped=true&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\nvar _vuex = __webpack_require__(/*! vuex */ 23);function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _default =\n{\n  computed: _objectSpread({},\n  (0, _vuex.mapState)(['loadingShow'])),\n\n  methods: {\n    preventTouchMove: function preventTouchMove() {\n      __f__(\"log\", 'stop user scroll it!', \" at components/common/loading.vue:20\");\n      return;\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 30)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9jb21tb24vbG9hZGluZy52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBWUEsZ0Q7QUFDQTtBQUNBO0FBQ0Esc0NBREEsQ0FEQTs7QUFJQTtBQUNBLG9CQURBLDhCQUNBO0FBQ0E7QUFDQTtBQUNBLEtBSkEsRUFKQSxFIiwiZmlsZSI6IjU5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwibWFzayBtYXNrLXNob3dcIiB2LWlmPVwibG9hZGluZ1Nob3dcIiBAdG91Y2htb3ZlLnN0b3AucHJldmVudD1cInByZXZlbnRUb3VjaE1vdmVcIj5cclxuXHRcdDwhLS0g5Yqg6L295Yqo55S75byA5aeLIC0tPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJwcmVsb2FkZXJcIj5cclxuXHRcdCAgPHZpZXcgY2xhc3M9XCJsb2FkZXJcIj48L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8IS0tIOWKoOi9veWKqOeUu+e7k+adnyAtLT5cclxuXHRcdDx2aWV3IGNsYXNzPVwidGl0bGVcIj7liqDovb3kuK0uLi48L3ZpZXc+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdCBzY29wZWQ9XCJ0cnVlXCI+XHJcbmltcG9ydCB7IG1hcFN0YXRlLCBtYXBNdXRhdGlvbnMgfSBmcm9tICd2dWV4JztcclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdGNvbXB1dGVkOiB7XHJcblx0XHQuLi5tYXBTdGF0ZShbJ2xvYWRpbmdTaG93J10pXHJcblx0fSxcclxuXHRtZXRob2RzOntcclxuXHRcdHByZXZlbnRUb3VjaE1vdmUoKXtcclxuXHRcdFx0Y29uc29sZS5sb2coJ3N0b3AgdXNlciBzY3JvbGwgaXQhJyk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG4ubWFzayB7XHJcblx0LyogcG9pbnRlci1ldmVudHM6IG5vbmU7ICovXHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdHotaW5kZXg6IDk5OTk5O1xyXG5cdHRvcDogMDtcclxuXHRsZWZ0OiAwO1xyXG5cdHJpZ2h0OiAwO1xyXG5cdGJvdHRvbTogMDtcclxuXHRoZWlnaHQ6IDEwMHZoO1xyXG5cdHdpZHRoOiAxMDB2dztcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuLm1hc2subWFzay1zaG93IHtcclxuXHRiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LCAwLjMpO1xyXG59XHJcbi50aXRsZSB7XHJcblx0Y29sb3I6ICMzMzM7XHJcblx0Zm9udC1zaXplOiAyOHJweDtcclxuXHRtYXJnaW4tdG9wOiAyMHJweDtcclxufVxyXG5cclxuLmxvYWRlciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEyMHJweDtcclxuICBoZWlnaHQ6IDEyMHJweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyOiAzcnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci10b3AtY29sb3I6ICM5MzcwZGI7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xyXG4gIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuLmxvYWRlcjo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDVycHg7XHJcbiAgbGVmdDogNXJweDtcclxuICByaWdodDogNXJweDtcclxuICBib3R0b206IDVycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlcjogM3JweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItdG9wLWNvbG9yOiAjYmE1NWQzO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDNzIGxpbmVhciBpbmZpbml0ZTtcclxuICBhbmltYXRpb246IHNwaW4gM3MgbGluZWFyIGluZmluaXRlO1xyXG59XHJcbi5sb2FkZXI6OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDE1cnB4O1xyXG4gIGxlZnQ6IDE1cnB4O1xyXG4gIHJpZ2h0OiAxNXJweDtcclxuICBib3R0b206IDE1cnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXI6IDNycHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2ZmMDBmZjtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAxLjVzIGxpbmVhciBpbmZpbml0ZTtcclxuICBhbmltYXRpb246IHNwaW4gMS41cyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4ge1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///59\n");

/***/ }),
/* 60 */
/*!*****************************************************************!*\
  !*** D:/uniapp/uniapp-simple/components/module/guide-pages.vue ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _guide_pages_vue_vue_type_template_id_8c30e1ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guide-pages.vue?vue&type=template&id=8c30e1ea& */ 61);\n/* harmony import */ var _guide_pages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guide-pages.vue?vue&type=script&lang=js& */ 63);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _guide_pages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _guide_pages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 17);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _guide_pages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _guide_pages_vue_vue_type_template_id_8c30e1ea___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _guide_pages_vue_vue_type_template_id_8c30e1ea___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _guide_pages_vue_vue_type_template_id_8c30e1ea___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"components/module/guide-pages.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0g7QUFDeEg7QUFDK0Q7QUFDTDs7O0FBRzFEO0FBQ3VLO0FBQ3ZLLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLGlGQUFNO0FBQ1IsRUFBRSxzRkFBTTtBQUNSLEVBQUUsK0ZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMEZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiNjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2d1aWRlLXBhZ2VzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04YzMwZTFlYSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2d1aWRlLXBhZ2VzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vZ3VpZGUtcGFnZXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi/lronoo4XljIUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL21vZHVsZS9ndWlkZS1wYWdlcy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///60\n");

/***/ }),
/* 61 */
/*!************************************************************************************************!*\
  !*** D:/uniapp/uniapp-simple/components/module/guide-pages.vue?vue&type=template&id=8c30e1ea& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_guide_pages_vue_vue_type_template_id_8c30e1ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./guide-pages.vue?vue&type=template&id=8c30e1ea& */ 62);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_guide_pages_vue_vue_type_template_id_8c30e1ea___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_guide_pages_vue_vue_type_template_id_8c30e1ea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_guide_pages_vue_vue_type_template_id_8c30e1ea___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_guide_pages_vue_vue_type_template_id_8c30e1ea___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 62 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/uniapp/uniapp-simple/components/module/guide-pages.vue?vue&type=template&id=8c30e1ea& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._$s(0, "i", _vm.show)
    ? _c("view", [
        _c(
          "swiper",
          {
            staticClass: _vm._$s(1, "sc", "guide_pages_swiper"),
            attrs: { _i: 1 }
          },
          [
            _c("swiper-item", [
              _c("view", {
                staticClass: _vm._$s(3, "sc", "guide_pages_bg1"),
                attrs: { _i: 3 }
              })
            ]),
            _c("swiper-item", [
              _c("view", {
                staticClass: _vm._$s(5, "sc", "guide_pages_bg2"),
                attrs: { _i: 5 }
              })
            ]),
            _c("swiper-item", [
              _c("view", {
                staticClass: _vm._$s(7, "sc", "guide_pages_bg3"),
                attrs: { _i: 7 }
              }),
              _vm._$s(8, "i", _vm.screenHeight > 667)
                ? _c("button", {
                    staticClass: _vm._$s(
                      8,
                      "sc",
                      "guide_pages_close close_1624"
                    ),
                    attrs: { _i: 8 },
                    on: { click: _vm.onClose }
                  })
                : _c("button", {
                    staticClass: _vm._$s(
                      9,
                      "sc",
                      "guide_pages_close close_1334"
                    ),
                    attrs: { _i: 9 },
                    on: { click: _vm.onClose }
                  })
            ])
          ]
        )
      ])
    : _vm._e()
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 63 */
/*!******************************************************************************************!*\
  !*** D:/uniapp/uniapp-simple/components/module/guide-pages.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_guide_pages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./guide-pages.vue?vue&type=script&lang=js& */ 64);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_guide_pages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_guide_pages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_guide_pages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_guide_pages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_guide_pages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVqQixDQUFnQixpa0JBQUcsRUFBQyIsImZpbGUiOiI2My5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uL+WuieijheWMhS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ndWlkZS1wYWdlcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uL+WuieijheWMhS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ndWlkZS1wYWdlcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///63\n");

/***/ }),
/* 64 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/uniapp/uniapp-simple/components/module/guide-pages.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _vuex = __webpack_require__(/*! vuex */ 23); //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = { data: function data() {return { screenHeight: 667, show: true };}, created: function created() {if (uni.getStorageSync('guidePages') != 2) {this.show = true;}var systemInfo = uni.getSystemInfoSync();this.screenHeight = systemInfo.screenHeight;}, methods: {\n    onClose: function onClose() {\n      uni.setStorageSync('guidePages', 2);\n      this.show = false;\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9tb2R1bGUvZ3VpZGUtcGFnZXMudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQkEsZ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQUlBLEVBQ0EsSUFEQSxrQkFDQSxDQUNBLFNBQ0EsaUJBREEsRUFFQSxVQUZBLEdBSUEsQ0FOQSxFQU9BLE9BUEEscUJBT0EsQ0FDQSw0Q0FDQSxpQkFDQSxDQUNBLHlDQUNBLDRDQUNBLENBYkEsRUFjQTtBQUNBLFdBREEscUJBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FKQSxFQWRBLEUiLCJmaWxlIjoiNjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PHZpZXcgdi1pZj1cInNob3dcIj5cclxuXHRcdDxzd2lwZXIgY2xhc3M9XCJndWlkZV9wYWdlc19zd2lwZXJcIj5cclxuXHRcdFx0PHN3aXBlci1pdGVtPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiZ3VpZGVfcGFnZXNfYmcxXCI+56ys5LiA5bGPPC92aWV3PlxyXG5cdFx0XHQ8L3N3aXBlci1pdGVtPlxyXG5cdFx0XHQ8c3dpcGVyLWl0ZW0+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJndWlkZV9wYWdlc19iZzJcIj7nrKzkuozlsY88L3ZpZXc+XHJcblx0XHRcdDwvc3dpcGVyLWl0ZW0+XHJcblx0XHRcdDxzd2lwZXItaXRlbT5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImd1aWRlX3BhZ2VzX2JnM1wiPuesrOS4ieWxjzwvdmlldz5cclxuXHRcdFx0XHQ8YnV0dG9uIHYtaWY9XCJzY3JlZW5IZWlnaHQgPiA2NjdcIiBjbGFzcz1cImd1aWRlX3BhZ2VzX2Nsb3NlIGNsb3NlXzE2MjRcIiBAY2xpY2s9XCJvbkNsb3NlXCI+5YWz6ZetPC9idXR0b24+XHJcblx0XHRcdFx0PGJ1dHRvbiB2LWVsc2UgY2xhc3M9XCJndWlkZV9wYWdlc19jbG9zZSBjbG9zZV8xMzM0XCIgQGNsaWNrPVwib25DbG9zZVwiPuWFs+mXrTwvYnV0dG9uPlxyXG5cdFx0XHQ8L3N3aXBlci1pdGVtPlxyXG5cdFx0PC9zd2lwZXI+XHJcblx0PC92aWV3PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cclxuICAgIGltcG9ydCB7XHJcbiAgICBcdG1hcFN0YXRlLFxyXG4gICAgXHRtYXBNdXRhdGlvbnNcclxuICAgIH0gZnJvbSAndnVleCc7XG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRkYXRhKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0c2NyZWVuSGVpZ2h0OiA2NjcsXHJcblx0XHRcdFx0c2hvdzogdHJ1ZVxuXHRcdFx0fTtcblx0XHR9LFxyXG5cdFx0Y3JlYXRlZCgpIHtcclxuXHRcdFx0aWYodW5pLmdldFN0b3JhZ2VTeW5jKCdndWlkZVBhZ2VzJykgIT0gMil7XHJcblx0XHRcdFx0dGhpcy5zaG93ID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG4gICAgICAgICAgICBsZXQgc3lzdGVtSW5mbyA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpO1xyXG4gICAgICAgICAgICB0aGlzLnNjcmVlbkhlaWdodCA9IHN5c3RlbUluZm8uc2NyZWVuSGVpZ2h0O1xyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6e1xyXG5cdFx0XHRvbkNsb3NlKCl7XHJcblx0XHRcdFx0dW5pLnNldFN0b3JhZ2VTeW5jKCdndWlkZVBhZ2VzJywgMik7XHJcblx0XHRcdFx0dGhpcy5zaG93ID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH1cblx0fVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuLmd1aWRlX3BhZ2VzX3N3aXBlciB7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdHRvcDogMDtcclxuXHRsZWZ0OiAwO1xyXG5cdHdpZHRoOiAxMDB2dztcclxuXHRoZWlnaHQ6IDEwMHZoO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IzAwMDtcclxuICAgIHotaW5kZXg6IDEwMDAwO1xyXG5cdGltYWdlIHtcclxuXHRcdHdpZHRoOiAxMDB2dztcclxuXHRcdGhlaWdodDogMTAwdmg7XHJcblx0fVxyXG4gICAgLmd1aWRlX3BhZ2VzX2JnMSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRDRDk2NDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICNGRkY7XHJcbiAgICAgICAgZm9udC1zaXplOiA2MHJweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICAgIC5ndWlkZV9wYWdlc19iZzIge1xyXG4gICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdBRkY7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNjBycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICAuZ3VpZGVfcGFnZXNfYmczIHtcclxuICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUE1NTJEO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogI0ZGRjtcclxuICAgICAgICBmb250LXNpemU6IDYwcnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgLmd1aWRlX3BhZ2VzX2Nsb3NlIHtcclxuICAgICAgICBib3JkZXI6MnJweCBzb2xpZCAjRkZGO1xyXG4gICAgICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA2OHJweDtcclxuICAgICAgICBoZWlnaHQ6IDY4cnB4O1xyXG4gICAgfVxyXG5cdC5jbG9zZV8xMzM0IHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHRvcDogNTAlO1xyXG5cdFx0bGVmdDogNTAlO1xyXG5cdFx0d2lkdGg6IDI5MHJweDtcclxuXHRcdGhlaWdodDogNjhycHg7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSg0MzhycHgpO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0fVxyXG5cdC5jbG9zZV8xNjI0IHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHRvcDogNTAlO1xyXG5cdFx0bGVmdDogNTAlO1xyXG5cdFx0d2lkdGg6IDI5MHJweDtcclxuXHRcdGhlaWdodDogNjhycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKDQxMnJweCk7XHJcblx0fVxyXG59XHJcbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///64\n");

/***/ }),
/* 65 */
/*!********************************************************************************!*\
  !*** D:/uniapp/uniapp-simple/components/common/mescroll-uni/mescroll-body.vue ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mescroll_body_vue_vue_type_template_id_fb1d6d88___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mescroll-body.vue?vue&type=template&id=fb1d6d88& */ 66);\n/* harmony import */ var _mescroll_body_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mescroll-body.vue?vue&type=script&lang=js& */ 68);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _mescroll_body_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _mescroll_body_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 17);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _mescroll_body_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _mescroll_body_vue_vue_type_template_id_fb1d6d88___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _mescroll_body_vue_vue_type_template_id_fb1d6d88___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _mescroll_body_vue_vue_type_template_id_fb1d6d88___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"components/common/mescroll-uni/mescroll-body.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEg7QUFDMUg7QUFDaUU7QUFDTDs7O0FBRzVEO0FBQzBLO0FBQzFLLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLG1GQUFNO0FBQ1IsRUFBRSx3RkFBTTtBQUNSLEVBQUUsaUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNEZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiNjUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL21lc2Nyb2xsLWJvZHkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWZiMWQ2ZDg4JlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbWVzY3JvbGwtYm9keS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL21lc2Nyb2xsLWJvZHkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi/lronoo4XljIUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL2NvbW1vbi9tZXNjcm9sbC11bmkvbWVzY3JvbGwtYm9keS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///65\n");

/***/ }),
/* 66 */
/*!***************************************************************************************************************!*\
  !*** D:/uniapp/uniapp-simple/components/common/mescroll-uni/mescroll-body.vue?vue&type=template&id=fb1d6d88& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_body_vue_vue_type_template_id_fb1d6d88___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./mescroll-body.vue?vue&type=template&id=fb1d6d88& */ 67);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_body_vue_vue_type_template_id_fb1d6d88___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_body_vue_vue_type_template_id_fb1d6d88___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_body_vue_vue_type_template_id_fb1d6d88___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_body_vue_vue_type_template_id_fb1d6d88___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 67 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/uniapp/uniapp-simple/components/common/mescroll-uni/mescroll-body.vue?vue&type=template&id=fb1d6d88& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    {
      staticClass: _vm._$s(0, "sc", "mescroll-body"),
      style: _vm._$s(0, "s", {
        minHeight: _vm.minHeight,
        "padding-top": _vm.padTop,
        "padding-bottom": _vm.padBottom
      }),
      attrs: { _i: 0 },
      on: {
        touchstart: _vm.touchstartEvent,
        touchmove: _vm.touchmoveEvent,
        touchend: _vm.touchendEvent,
        touchcancel: _vm.touchendEvent
      }
    },
    [
      _c(
        "view",
        {
          staticClass: _vm._$s(1, "sc", "mescroll-body-content"),
          style: _vm._$s(1, "s", {
            transform: _vm.translateY,
            transition: _vm.transition
          }),
          attrs: { _i: 1 }
        },
        [
          _vm._$s(2, "i", _vm.mescroll.optDown.use)
            ? _c(
                "view",
                {
                  staticClass: _vm._$s(2, "sc", "mescroll-downwarp"),
                  style: _vm._$s(2, "s", {
                    background: _vm.mescroll.optDown.bgColor,
                    color: _vm.mescroll.optDown.textColor
                  }),
                  attrs: { _i: 2 }
                },
                [
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(3, "sc", "downwarp-content"),
                      attrs: { _i: 3 }
                    },
                    [
                      _c("view", {
                        staticClass: _vm._$s(4, "sc", "downwarp-progress"),
                        class: _vm._$s(4, "c", {
                          "mescroll-rotate": _vm.isDownLoading
                        }),
                        style: _vm._$s(4, "s", {
                          "border-color": _vm.mescroll.optDown.textColor,
                          transform: _vm.downRotate
                        }),
                        attrs: { _i: 4 }
                      }),
                      _c(
                        "view",
                        {
                          staticClass: _vm._$s(5, "sc", "downwarp-tip"),
                          attrs: { _i: 5 }
                        },
                        [_vm._v(_vm._$s(5, "t0-0", _vm._s(_vm.downText)))]
                      )
                    ]
                  )
                ]
              )
            : _vm._e(),
          _vm._t("default", null, { _i: 6 }),
          _vm._$s(7, "i", _vm.isShowEmpty)
            ? _c("mescroll-empty", {
                attrs: { option: _vm.mescroll.optUp.empty, _i: 7 },
                on: { emptyclick: _vm.emptyClick }
              })
            : _vm._e(),
          _vm._$s(
            8,
            "i",
            _vm.mescroll.optUp.use && !_vm.isDownLoading && _vm.upLoadType !== 3
          )
            ? _c(
                "view",
                {
                  staticClass: _vm._$s(8, "sc", "mescroll-upwarp"),
                  style: _vm._$s(8, "s", {
                    background: _vm.mescroll.optUp.bgColor,
                    color: _vm.mescroll.optUp.textColor
                  }),
                  attrs: { _i: 8 }
                },
                [
                  _c(
                    "view",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm._$s(9, "v-show", _vm.upLoadType === 1),
                          expression: "_$s(9,'v-show',upLoadType===1)"
                        }
                      ],
                      attrs: { _i: 9 }
                    },
                    [
                      _c("view", {
                        staticClass: _vm._$s(
                          10,
                          "sc",
                          "upwarp-progress mescroll-rotate"
                        ),
                        style: _vm._$s(10, "s", {
                          "border-color": _vm.mescroll.optUp.textColor
                        }),
                        attrs: { _i: 10 }
                      }),
                      _c(
                        "view",
                        {
                          staticClass: _vm._$s(11, "sc", "upwarp-tip"),
                          attrs: { _i: 11 }
                        },
                        [
                          _vm._v(
                            _vm._$s(
                              11,
                              "t0-0",
                              _vm._s(_vm.mescroll.optUp.textLoading)
                            )
                          )
                        ]
                      )
                    ]
                  ),
                  _vm._$s(12, "i", _vm.upLoadType === 2)
                    ? _c(
                        "view",
                        {
                          staticClass: _vm._$s(12, "sc", "upwarp-nodata"),
                          attrs: { _i: 12 }
                        },
                        [
                          _vm._v(
                            _vm._$s(
                              12,
                              "t0-0",
                              _vm._s(_vm.mescroll.optUp.textNoMore)
                            )
                          )
                        ]
                      )
                    : _vm._e()
                ]
              )
            : _vm._e()
        ],
        2
      ),
      _vm._$s(13, "i", _vm.safearea)
        ? _c("view", {
            staticClass: _vm._$s(13, "sc", "mescroll-safearea"),
            attrs: { _i: 13 }
          })
        : _vm._e(),
      _c("mescroll-top", {
        attrs: { option: _vm.mescroll.optUp.toTop, _i: 14 },
        on: { click: _vm.toTopClick },
        model: {
          value: _vm._$s(14, "v-model", _vm.isShowToTop),
          callback: function($$v) {
            _vm.isShowToTop = $$v
          },
          expression: "isShowToTop"
        }
      })
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 68 */
/*!*********************************************************************************************************!*\
  !*** D:/uniapp/uniapp-simple/components/common/mescroll-uni/mescroll-body.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_body_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./mescroll-body.vue?vue&type=script&lang=js& */ 69);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_body_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_body_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_body_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_body_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_body_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFrQixDQUFnQixta0JBQUcsRUFBQyIsImZpbGUiOiI2OC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uL+WuieijheWMhS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tZXNjcm9sbC1ib2R5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi/lronoo4XljIUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi/lronoo4XljIUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi8uLi/lronoo4XljIUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21lc2Nyb2xsLWJvZHkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///68\n");

/***/ }),
/* 69 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/uniapp/uniapp-simple/components/common/mescroll-uni/mescroll-body.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _mescrollUni = _interopRequireDefault(__webpack_require__(/*! ./mescroll-uni.js */ 70));\n\nvar _mescrollUniOption = _interopRequireDefault(__webpack_require__(/*! ./mescroll-uni-option.js */ 71));\n\nvar _mescrollEmpty = _interopRequireDefault(__webpack_require__(/*! ./components/mescroll-empty.vue */ 72));\n\nvar _mescrollTop = _interopRequireDefault(__webpack_require__(/*! ./components/mescroll-top.vue */ 77));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n// 引入mescroll-uni.js,处理核心逻辑\n// 引入全局配置\n// 引入空布局组件\n// 引入回到顶部组件\nvar _default = { components: { MescrollEmpty: _mescrollEmpty.default, MescrollTop: _mescrollTop.default }, data: function data() {return { mescroll: { optDown: {}, optUp: {} }, // mescroll实例\n      downHight: 0, //下拉刷新: 容器高度\n      downRate: 0, // 下拉比率(inOffset: rate<1; outOffset: rate>=1)\n      downLoadType: 4, // 下拉刷新状态 （inOffset：1， outOffset：2， showLoading：3， endDownScroll：4）\n      upLoadType: 0, // 上拉加载状态：0（loading前），1（loading中），2（没有更多了,显示END文本提示），3（没有更多了,不显示END文本提示）\n      isShowEmpty: false, // 是否显示空布局\n      isShowToTop: false, // 是否显示回到顶部按钮\n      windowHeight: 0, // 可使用窗口的高度\n      windowBottom: 0, // 可使用窗口的底部位置\n      statusBarHeight: 0 // 状态栏高度\n    };}, props: { down: Object, // 下拉刷新的参数配置\n    up: Object, // 上拉加载的参数配置\n    top: [String, Number], // 下拉布局往下的偏移量 (支持20, \"20rpx\", \"20px\", \"20%\"格式的值, 其中纯数字则默认单位rpx, 百分比则相对于windowHeight)\n    bottom: [String, Number], // 上拉布局往上的偏移量 (支持20, \"20rpx\", \"20px\", \"20%\"格式的值, 其中纯数字则默认单位rpx, 百分比则相对于windowHeight)\n    safearea: Boolean, // bottom的偏移量是否加上底部安全区的距离, 默认false (需要适配iPhoneX时使用)\n    height: [String, Number], // 指定mescroll最小高度,默认windowHeight,使列表不满屏仍可下拉\n    bottombar: { // 底部是否偏移TabBar的高度(默认仅在H5端的tab页生效)\n      type: Boolean, default: true }, navbar: { type: Boolean, default: true } // 高度是否减去导航栏和状态栏部分\n  }, computed: { // mescroll最小高度,默认windowHeight,使列表不满屏仍可下拉\n    minHeight: function minHeight() {var minHeight = 0;if (this.height > 0) {minHeight = this.toPx(this.height);} else if (this.height && Number(this.height) < 0) {minHeight = this.toPx('100%') + uni.upx2px(this.height);} else {minHeight = this.toPx('100%');}if (this.navbar) {return minHeight - this.statusBarHeight - uni.upx2px(88) + 'px';} else {return minHeight + 'px';}}, // 下拉布局往下偏移的距离 (px)\n    numTop: function numTop() {return this.toPx(this.top);}, padTop: function padTop() {return this.numTop + 'px';}, // 上拉布局往上偏移 (px)\n    numBottom: function numBottom() {return this.toPx(this.bottom);}, padBottom: function padBottom() {return this.numBottom + 'px';}, // 是否为重置下拉的状态\n    isDownReset: function isDownReset() {return this.downLoadType === 3 || this.downLoadType === 4;\n    },\n    // 过渡\n    transition: function transition() {\n      return this.isDownReset ? 'transform 300ms' : this.downTransition;\n    },\n    translateY: function translateY() {\n      return this.downHight > 0 ? 'translateY(' + this.downHight + 'px)' : ''; // transform会使fixed失效,需注意把fixed元素写在mescroll之外\n    },\n    // 是否在加载中\n    isDownLoading: function isDownLoading() {\n      return this.downLoadType === 3;\n    },\n    // 旋转的角度\n    downRotate: function downRotate() {\n      return 'rotate(' + 360 * this.downRate + 'deg)';\n    },\n    // 文本提示\n    downText: function downText() {\n      switch (this.downLoadType) {\n        case 1:return this.mescroll.optDown.textInOffset;\n        case 2:return this.mescroll.optDown.textOutOffset;\n        case 3:return this.mescroll.optDown.textLoading;\n        case 4:return this.mescroll.optDown.textLoading;\n        default:return this.mescroll.optDown.textInOffset;}\n\n    } },\n\n  methods: {\n    //number,rpx,upx,px,% --> px的数值\n    toPx: function toPx(num) {\n      if (typeof num === 'string') {\n        if (num.indexOf('px') !== -1) {\n          if (num.indexOf('rpx') !== -1) {\n            // \"10rpx\"\n            num = num.replace('rpx', '');\n          } else if (num.indexOf('upx') !== -1) {\n            // \"10upx\"\n            num = num.replace('upx', '');\n          } else {\n            // \"10px\"\n            return Number(num.replace('px', ''));\n          }\n        } else if (num.indexOf('%') !== -1) {\n          // 传百分比,则相对于windowHeight,传\"10%\"则等于windowHeight的10%\n          var rate = Number(num.replace('%', '')) / 100;\n          return this.windowHeight * rate;\n        }\n      }\n      return num ? uni.upx2px(Number(num)) : 0;\n    },\n    //注册列表touchstart事件,用于下拉刷新\n    touchstartEvent: function touchstartEvent(e) {\n      this.mescroll.touchstartEvent(e);\n    },\n    //注册列表touchmove事件,用于下拉刷新\n    touchmoveEvent: function touchmoveEvent(e) {\n      this.mescroll.touchmoveEvent(e);\n    },\n    //注册列表touchend事件,用于下拉刷新\n    touchendEvent: function touchendEvent(e) {\n      this.mescroll.touchendEvent(e);\n    },\n    // 点击空布局的按钮回调\n    emptyClick: function emptyClick() {\n      this.$emit('emptyclick', this.mescroll);\n    },\n    // 点击回到顶部的按钮回调\n    toTopClick: function toTopClick() {\n      this.mescroll.scrollTo(0, this.mescroll.optUp.toTop.duration); // 执行回到顶部\n      this.$emit('topclick', this.mescroll); // 派发点击回到顶部按钮的回调\n    } },\n\n  // 使用created初始化mescroll对象; 如果用mounted部分css样式编译到H5会失效\n  created: function created() {\n    var vm = this;\n\n    var diyOption = {\n      // 下拉刷新的配置\n      down: {\n        inOffset: function inOffset(mescroll) {\n          vm.downLoadType = 1; // 下拉的距离进入offset范围内那一刻的回调 (自定义mescroll组件时,此行不可删)\n        },\n        outOffset: function outOffset(mescroll) {\n          vm.downLoadType = 2; // 下拉的距离大于offset那一刻的回调 (自定义mescroll组件时,此行不可删)\n        },\n        onMoving: function onMoving(mescroll, rate, downHight) {\n          // 下拉过程中的回调,滑动过程一直在执行;\n          vm.downHight = downHight; // 设置下拉区域的高度 (自定义mescroll组件时,此行不可删)\n          vm.downRate = rate; //下拉比率 (inOffset: rate<1; outOffset: rate>=1)\n        },\n        showLoading: function showLoading(mescroll, downHight) {\n          vm.downLoadType = 3; // 显示下拉刷新进度的回调 (自定义mescroll组件时,此行不可删)\n          vm.downHight = downHight; // 设置下拉区域的高度 (自定义mescroll组件时,此行不可删)\n        },\n        endDownScroll: function endDownScroll(mescroll) {\n          vm.downLoadType = 4; // 结束下拉 (自定义mescroll组件时,此行不可删)\n          vm.downHight = 0; // 设置下拉区域的高度 (自定义mescroll组件时,此行不可删)\n        },\n        // 派发下拉刷新的回调\n        callback: function callback(mescroll) {\n          vm.$emit('down', mescroll);\n        } },\n\n      // 上拉加载的配置\n      up: {\n        // 显示加载中的回调\n        showLoading: function showLoading() {\n          vm.upLoadType = 1;\n        },\n        // 显示无更多数据的回调\n        showNoMore: function showNoMore() {\n          vm.upLoadType = 2;\n        },\n        // 隐藏上拉加载的回调\n        hideUpScroll: function hideUpScroll(mescroll) {\n          vm.upLoadType = mescroll.optUp.hasNext ? 0 : 3;\n        },\n        // 空布局\n        empty: {\n          onShow: function onShow(isShow) {\n            // 显示隐藏的回调\n            vm.isShowEmpty = isShow;\n          } },\n\n        // 回到顶部\n        toTop: {\n          onShow: function onShow(isShow) {\n            // 显示隐藏的回调\n            vm.isShowToTop = isShow;\n          } },\n\n        // 派发上拉加载的回调\n        callback: function callback(mescroll) {\n          vm.$emit('up', mescroll);\n        } } };\n\n\n\n    _mescrollUni.default.extend(diyOption, _mescrollUniOption.default); // 混入全局的配置\n    var myOption = JSON.parse(\n    JSON.stringify({\n      down: vm.down,\n      up: vm.up }));\n\n    // 深拷贝,避免对props的影响\n    _mescrollUni.default.extend(myOption, diyOption); // 混入具体界面的配置\n\n    // 初始化MeScroll对象\n    vm.mescroll = new _mescrollUni.default(myOption, true); // 传入true,标记body为滚动区域\n    // init回调mescroll对象\n    vm.$emit('init', vm.mescroll);\n\n    // 设置高度\n    var sys = uni.getSystemInfoSync();\n    if (sys.windowHeight) vm.windowHeight = sys.windowHeight;\n    if (sys.windowBottom) vm.windowBottom = sys.windowBottom;\n    if (sys.statusBarHeight) vm.statusBarHeight = sys.statusBarHeight;\n    // 使down的bottomOffset生效\n    vm.mescroll.setBodyHeight(sys.windowHeight);\n    // mescroll-body在Android小程序下拉会卡顿,无法像mescroll-uni那样通过设置\"disableScroll\":true解决,只能用动画过渡缓解\n\n\n\n\n    // 因为使用的是page的scroll,这里需自定义scrollTo\n    vm.mescroll.resetScrollTo(function (y, t) {\n      if (typeof y === 'string') {\n        // 滚动到指定view (y必须为元素的id,不带#)\n        setTimeout(function () {// 延时确保view已渲染; 不使用$nextTick\n          uni.createSelectorQuery().select('#' + y).boundingClientRect(function (rect) {\n            var top = rect.top;\n            top += vm.mescroll.getScrollTop();\n            uni.pageScrollTo({\n              scrollTop: top,\n              duration: t });\n\n          }).exec();\n        }, 30);\n      } else {\n        // 滚动到指定位置 (y必须为数字)\n        uni.pageScrollTo({\n          scrollTop: y,\n          duration: t });\n\n      }\n    });\n\n    // 具体的界面如果不配置up.toTop.safearea,则取本vue的safearea值\n    if (vm.up && vm.up.toTop && vm.up.toTop.safearea != null) {} else {\n      vm.mescroll.optUp.toTop.safearea = vm.safearea;\n    }\n  } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9jb21tb24vbWVzY3JvbGwtdW5pL21lc2Nyb2xsLWJvZHkudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4Q0E7O0FBRUE7O0FBRUE7O0FBRUEsd0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUEE7QUFFQTtBQUVBO0FBRUE7ZUFHQSxFQUNBLGNBQ0EscUNBREEsRUFFQSxpQ0FGQSxFQURBLEVBS0EsSUFMQSxrQkFLQSxDQUNBLFNBQ0Esb0NBREEsRUFDQTtBQUNBLGtCQUZBLEVBRUE7QUFDQSxpQkFIQSxFQUdBO0FBQ0EscUJBSkEsRUFJQTtBQUNBLG1CQUxBLEVBS0E7QUFDQSx3QkFOQSxFQU1BO0FBQ0Esd0JBUEEsRUFPQTtBQUNBLHFCQVJBLEVBUUE7QUFDQSxxQkFUQSxFQVNBO0FBQ0Esd0JBVkEsQ0FVQTtBQVZBLE1BWUEsQ0FsQkEsRUFtQkEsU0FDQSxZQURBLEVBQ0E7QUFDQSxjQUZBLEVBRUE7QUFDQSx5QkFIQSxFQUdBO0FBQ0EsNEJBSkEsRUFJQTtBQUNBLHFCQUxBLEVBS0E7QUFDQSw0QkFOQSxFQU1BO0FBQ0E7QUFDQSxtQkFEQSxFQUVBLGFBRkEsRUFQQSxFQVdBLFVBQ0EsYUFEQSxFQUVBLGFBRkEsRUFYQSxDQWNBO0FBZEEsR0FuQkEsRUFtQ0EsWUFDQTtBQUNBLGFBRkEsdUJBRUEsQ0FDQSxrQkFDQSxzQkFDQSxtQ0FDQSxDQUZBLE1BRUEsNkNBQ0Esd0RBQ0EsQ0FGQSxNQUVBLENBQ0EsOEJBQ0EsQ0FDQSxrQkFDQSxnRUFDQSxDQUZBLE1BRUEsQ0FDQSx3QkFDQSxDQUNBLENBaEJBLEVBaUJBO0FBQ0EsVUFsQkEsb0JBa0JBLENBQ0EsMkJBQ0EsQ0FwQkEsRUFxQkEsTUFyQkEsb0JBcUJBLENBQ0EsMEJBQ0EsQ0F2QkEsRUF3QkE7QUFDQSxhQXpCQSx1QkF5QkEs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QUNBO0FBQ0Esc0JBREE7QUFFQSxxQkFGQTs7QUFJQTtBQUNBLEtBcEJBOztBQXNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBcFFBLEUiLCJmaWxlIjoiNjkuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJtZXNjcm9sbC1ib2R5XCIgOnN0eWxlPVwieydtaW5IZWlnaHQnOm1pbkhlaWdodCwgJ3BhZGRpbmctdG9wJzogcGFkVG9wLCAncGFkZGluZy1ib3R0b20nOiBwYWRCb3R0b219XCIgQHRvdWNoc3RhcnQ9XCJ0b3VjaHN0YXJ0RXZlbnRcIiBAdG91Y2htb3ZlPVwidG91Y2htb3ZlRXZlbnRcIiBAdG91Y2hlbmQ9XCJ0b3VjaGVuZEV2ZW50XCIgQHRvdWNoY2FuY2VsPVwidG91Y2hlbmRFdmVudFwiID5cclxuXHRcdDx2aWV3IGNsYXNzPVwibWVzY3JvbGwtYm9keS1jb250ZW50XCIgOnN0eWxlPVwieyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVksIHRyYW5zaXRpb246IHRyYW5zaXRpb24gfVwiPlxyXG5cdFx0XHQ8IS0tIOS4i+aLieWKoOi9veWMuuWfnyAo5pSv5LuY5a6d5bCP56iL5bqP5a2Q57uE5Lu25Lyg5Y+C57uZ5a2Q5a2Q57uE5Lu25LuN5oql5Y2V6aG55pWw5o2u5rWB55qE5byC5bi4LOaaguaXtuS4jemAmui/h21lc2Nyb2xsLWRvd27nu4Tku7blrp7njrApLS0+XHJcblx0XHRcdDwhLS0gPG1lc2Nyb2xsLWRvd24gOm9wdGlvbj1cIm1lc2Nyb2xsLm9wdERvd25cIiA6dHlwZT1cImRvd25Mb2FkVHlwZVwiIDpyYXRlPVwiZG93blJhdGVcIj48L21lc2Nyb2xsLWRvd24+IC0tPlxyXG5cdFx0XHQ8dmlldyB2LWlmPVwibWVzY3JvbGwub3B0RG93bi51c2VcIiBjbGFzcz1cIm1lc2Nyb2xsLWRvd253YXJwXCIgOnN0eWxlPVwieydiYWNrZ3JvdW5kJzptZXNjcm9sbC5vcHREb3duLmJnQ29sb3IsJ2NvbG9yJzptZXNjcm9sbC5vcHREb3duLnRleHRDb2xvcn1cIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImRvd253YXJwLWNvbnRlbnRcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZG93bndhcnAtcHJvZ3Jlc3NcIiA6Y2xhc3M9XCJ7J21lc2Nyb2xsLXJvdGF0ZSc6IGlzRG93bkxvYWRpbmd9XCIgOnN0eWxlPVwieydib3JkZXItY29sb3InOm1lc2Nyb2xsLm9wdERvd24udGV4dENvbG9yLCAndHJhbnNmb3JtJzogZG93blJvdGF0ZX1cIj48L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImRvd253YXJwLXRpcFwiPnt7ZG93blRleHR9fTwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcclxuXHRcdFx0PCEtLSDliJfooajlhoXlrrkgLS0+XHJcblx0XHRcdDxzbG90Pjwvc2xvdD5cclxuXHJcblx0XHRcdDwhLS0g56m65biD5bGAIC0tPlxyXG5cdFx0XHQ8bWVzY3JvbGwtZW1wdHkgdi1pZj1cImlzU2hvd0VtcHR5XCIgOm9wdGlvbj1cIm1lc2Nyb2xsLm9wdFVwLmVtcHR5XCIgQGVtcHR5Y2xpY2s9XCJlbXB0eUNsaWNrXCI+PC9tZXNjcm9sbC1lbXB0eT5cclxuXHJcblx0XHRcdDwhLS0g5LiK5ouJ5Yqg6L295Yy65Z+fICjkuIvmi4nliLfmlrDml7bkuI3mmL7npLosIOaUr+S7mOWuneWwj+eoi+W6j+WtkOe7hOS7tuS8oOWPgue7meWtkOWtkOe7hOS7tuS7jeaKpeWNlemhueaVsOaNrua1geeahOW8guW4uCzmmoLml7bkuI3pgJrov4dtZXNjcm9sbC11cOe7hOS7tuWunueOsCktLT5cclxuXHRcdFx0PCEtLSA8bWVzY3JvbGwtdXAgdi1pZj1cIm1lc2Nyb2xsLm9wdFVwLnVzZSAmJiAhaXNEb3duTG9hZGluZyAmJiB1cExvYWRUeXBlIT09M1wiIDpvcHRpb249XCJtZXNjcm9sbC5vcHRVcFwiIDp0eXBlPVwidXBMb2FkVHlwZVwiPjwvbWVzY3JvbGwtdXA+IC0tPlxyXG5cdFx0XHQ8dmlldyB2LWlmPVwibWVzY3JvbGwub3B0VXAudXNlICYmICFpc0Rvd25Mb2FkaW5nICYmIHVwTG9hZFR5cGUhPT0zXCIgY2xhc3M9XCJtZXNjcm9sbC11cHdhcnBcIiA6c3R5bGU9XCJ7J2JhY2tncm91bmQnOm1lc2Nyb2xsLm9wdFVwLmJnQ29sb3IsJ2NvbG9yJzptZXNjcm9sbC5vcHRVcC50ZXh0Q29sb3J9XCI+XHJcblx0XHRcdFx0PCEtLSDliqDovb3kuK0gKOatpOWkhOS4jeiDveeUqHYtaWYs5ZCm5YiZYW5kcm9pZOWwj+eoi+W6j+W/q+mAn+S4iuaLieWPr+iDveS8muS4jeaWreinpuWPkeS4iuaLieWbnuiwgykgLS0+XHJcblx0XHRcdFx0PHZpZXcgdi1zaG93PVwidXBMb2FkVHlwZT09PTFcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidXB3YXJwLXByb2dyZXNzIG1lc2Nyb2xsLXJvdGF0ZVwiIDpzdHlsZT1cInsnYm9yZGVyLWNvbG9yJzptZXNjcm9sbC5vcHRVcC50ZXh0Q29sb3J9XCI+PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1cHdhcnAtdGlwXCI+e3sgbWVzY3JvbGwub3B0VXAudGV4dExvYWRpbmcgfX08L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwhLS0g5peg5pWw5o2uIC0tPlxyXG5cdFx0XHRcdDx2aWV3IHYtaWY9XCJ1cExvYWRUeXBlPT09MlwiIGNsYXNzPVwidXB3YXJwLW5vZGF0YVwiPnt7IG1lc2Nyb2xsLm9wdFVwLnRleHROb01vcmUgfX08L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdFxyXG5cdFx0PCEtLSDlupXpg6jmmK/lkKblgY/np7tUYWJCYXLnmoTpq5jluqYo6buY6K6k5LuF5ZyoSDXnq6/nmoR0YWLpobXnlJ/mlYgpIC0tPlxyXG5cdFx0PCEtLSAjaWZkZWYgSDUgLS0+XHJcblx0XHQ8dmlldyB2LWlmPVwiYm90dG9tYmFyICYmIHdpbmRvd0JvdHRvbT4wXCIgY2xhc3M9XCJtZXNjcm9sbC1ib3R0b21iYXJcIiA6c3R5bGU9XCJ7aGVpZ2h0OiB3aW5kb3dCb3R0b20rJ3B4J31cIj48L3ZpZXc+XHJcblx0XHQ8IS0tICNlbmRpZiAtLT5cclxuXHRcdFxyXG5cdFx0PCEtLSDpgILphY1pUGhvbmVYIC0tPlxyXG5cdFx0PHZpZXcgdi1pZj1cInNhZmVhcmVhXCIgY2xhc3M9XCJtZXNjcm9sbC1zYWZlYXJlYVwiPjwvdmlldz5cclxuXHRcdFxyXG5cdFx0PCEtLSDlm57liLDpobbpg6jmjInpkq4gKGZpeGVk5YWD57Sg6ZyA5YaZ5ZyodHJhbnNmb3Jt5aSW6Z2iLOmYsuatoumZjee6p+S4umFic29sdXRlKS0tPlxyXG5cdFx0PG1lc2Nyb2xsLXRvcCB2LW1vZGVsPVwiaXNTaG93VG9Ub3BcIiA6b3B0aW9uPVwibWVzY3JvbGwub3B0VXAudG9Ub3BcIiBAY2xpY2s9XCJ0b1RvcENsaWNrXCI+PC9tZXNjcm9sbC10b3A+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHQvLyDlvJXlhaVtZXNjcm9sbC11bmkuanMs5aSE55CG5qC45b+D6YC76L6RXHJcblx0aW1wb3J0IE1lU2Nyb2xsIGZyb20gJy4vbWVzY3JvbGwtdW5pLmpzJztcclxuXHQvLyDlvJXlhaXlhajlsYDphY3nva5cclxuXHRpbXBvcnQgR2xvYmFsT3B0aW9uIGZyb20gJy4vbWVzY3JvbGwtdW5pLW9wdGlvbi5qcyc7XHJcblx0Ly8g5byV5YWl56m65biD5bGA57uE5Lu2XHJcblx0aW1wb3J0IE1lc2Nyb2xsRW1wdHkgZnJvbSAnLi9jb21wb25lbnRzL21lc2Nyb2xsLWVtcHR5LnZ1ZSc7XHJcblx0Ly8g5byV5YWl5Zue5Yiw6aG26YOo57uE5Lu2XHJcblx0aW1wb3J0IE1lc2Nyb2xsVG9wIGZyb20gJy4vY29tcG9uZW50cy9tZXNjcm9sbC10b3AudnVlJztcclxuXHRcclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRjb21wb25lbnRzOiB7XHJcblx0XHRcdE1lc2Nyb2xsRW1wdHksXHJcblx0XHRcdE1lc2Nyb2xsVG9wXHJcblx0XHR9LFxyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRtZXNjcm9sbDoge29wdERvd246e30sb3B0VXA6e319LCAvLyBtZXNjcm9sbOWunuS+i1xyXG5cdFx0XHRcdGRvd25IaWdodDogMCwgLy/kuIvmi4nliLfmlrA6IOWuueWZqOmrmOW6plxyXG5cdFx0XHRcdGRvd25SYXRlOiAwLCAvLyDkuIvmi4nmr5TnjocoaW5PZmZzZXQ6IHJhdGU8MTsgb3V0T2Zmc2V0OiByYXRlPj0xKVxyXG5cdFx0XHRcdGRvd25Mb2FkVHlwZTogNCwgLy8g5LiL5ouJ5Yi35paw54q25oCBIO+8iGluT2Zmc2V077yaMe+8jCBvdXRPZmZzZXTvvJoy77yMIHNob3dMb2FkaW5n77yaM++8jCBlbmREb3duU2Nyb2xs77yaNO+8iVxyXG5cdFx0XHRcdHVwTG9hZFR5cGU6IDAsIC8vIOS4iuaLieWKoOi9veeKtuaAge+8mjDvvIhsb2FkaW5n5YmN77yJ77yMMe+8iGxvYWRpbmfkuK3vvInvvIwy77yI5rKh5pyJ5pu05aSa5LqGLOaYvuekukVOROaWh+acrOaPkOekuu+8ie+8jDPvvIjmsqHmnInmm7TlpJrkuoYs5LiN5pi+56S6RU5E5paH5pys5o+Q56S677yJXHJcblx0XHRcdFx0aXNTaG93RW1wdHk6IGZhbHNlLCAvLyDmmK/lkKbmmL7npLrnqbrluIPlsYBcclxuXHRcdFx0XHRpc1Nob3dUb1RvcDogZmFsc2UsIC8vIOaYr+WQpuaYvuekuuWbnuWIsOmhtumDqOaMiemSrlxyXG5cdFx0XHRcdHdpbmRvd0hlaWdodDogMCwgLy8g5Y+v5L2/55So56qX5Y+j55qE6auY5bqmXHJcblx0XHRcdFx0d2luZG93Qm90dG9tOiAwLCAvLyDlj6/kvb/nlKjnqpflj6PnmoTlupXpg6jkvY3nva5cclxuXHRcdFx0XHRzdGF0dXNCYXJIZWlnaHQ6IDAgLy8g54q25oCB5qCP6auY5bqmXHJcblx0XHRcdH07XHJcblx0XHR9LFxyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0ZG93bjogT2JqZWN0LCAvLyDkuIvmi4nliLfmlrDnmoTlj4LmlbDphY3nva5cclxuXHRcdFx0dXA6IE9iamVjdCwgLy8g5LiK5ouJ5Yqg6L2955qE5Y+C5pWw6YWN572uXHJcblx0XHRcdHRvcDogW1N0cmluZywgTnVtYmVyXSwgLy8g5LiL5ouJ5biD5bGA5b6A5LiL55qE5YGP56e76YePICjmlK/mjIEyMCwgXCIyMHJweFwiLCBcIjIwcHhcIiwgXCIyMCVcIuagvOW8j+eahOWAvCwg5YW25Lit57qv5pWw5a2X5YiZ6buY6K6k5Y2V5L2NcnB4LCDnmb7liIbmr5TliJnnm7jlr7nkuo53aW5kb3dIZWlnaHQpXHJcblx0XHRcdGJvdHRvbTogW1N0cmluZywgTnVtYmVyXSwgLy8g5LiK5ouJ5biD5bGA5b6A5LiK55qE5YGP56e76YePICjmlK/mjIEyMCwgXCIyMHJweFwiLCBcIjIwcHhcIiwgXCIyMCVcIuagvOW8j+eahOWAvCwg5YW25Lit57qv5pWw5a2X5YiZ6buY6K6k5Y2V5L2NcnB4LCDnmb7liIbmr5TliJnnm7jlr7nkuo53aW5kb3dIZWlnaHQpXHJcblx0XHRcdHNhZmVhcmVhOiBCb29sZWFuLCAvLyBib3R0b23nmoTlgY/np7vph4/mmK/lkKbliqDkuIrlupXpg6jlronlhajljLrnmoTot53nprssIOm7mOiupGZhbHNlICjpnIDopoHpgILphY1pUGhvbmVY5pe25L2/55SoKVxyXG5cdFx0XHRoZWlnaHQ6IFtTdHJpbmcsIE51bWJlcl0sIC8vIOaMh+Wumm1lc2Nyb2xs5pyA5bCP6auY5bqmLOm7mOiupHdpbmRvd0hlaWdodCzkvb/liJfooajkuI3mu6HlsY/ku43lj6/kuIvmi4lcclxuXHRcdFx0Ym90dG9tYmFyOnsgLy8g5bqV6YOo5piv5ZCm5YGP56e7VGFiQmFy55qE6auY5bqmKOm7mOiupOS7heWcqEg156uv55qEdGFi6aG155Sf5pWIKVxyXG5cdFx0XHRcdHR5cGU6IEJvb2xlYW4sXHJcblx0XHRcdFx0ZGVmYXVsdDogdHJ1ZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRuYXZiYXI6IHtcclxuXHRcdFx0XHR0eXBlOiBCb29sZWFuLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IHRydWVcclxuXHRcdFx0fSwgLy8g6auY5bqm5piv5ZCm5YeP5Y675a+86Iiq5qCP5ZKM54q25oCB5qCP6YOo5YiGXHJcblx0XHR9LFxyXG5cdFx0Y29tcHV0ZWQ6IHtcclxuXHRcdFx0Ly8gbWVzY3JvbGzmnIDlsI/pq5jluqYs6buY6K6kd2luZG93SGVpZ2h0LOS9v+WIl+ihqOS4jea7oeWxj+S7jeWPr+S4i+aLiVxyXG5cdFx0XHRtaW5IZWlnaHQoKXtcclxuXHRcdFx0XHRsZXQgbWluSGVpZ2h0ID0gMDtcclxuXHRcdFx0XHRpZih0aGlzLmhlaWdodCA+IDApe1xyXG5cdFx0XHRcdFx0IG1pbkhlaWdodCA9IHRoaXMudG9QeCh0aGlzLmhlaWdodCk7XHJcblx0XHRcdFx0fWVsc2UgaWYodGhpcy5oZWlnaHQgJiYgTnVtYmVyKHRoaXMuaGVpZ2h0KSA8IDApe1xyXG5cdFx0XHRcdFx0bWluSGVpZ2h0ID0gdGhpcy50b1B4KCcxMDAlJykgKyB1bmkudXB4MnB4KHRoaXMuaGVpZ2h0KVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRtaW5IZWlnaHQgPSB0aGlzLnRvUHgoJzEwMCUnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYodGhpcy5uYXZiYXIpe1xyXG5cdFx0XHRcdFx0cmV0dXJuIChtaW5IZWlnaHQgLSB0aGlzLnN0YXR1c0JhckhlaWdodCAtIHVuaS51cHgycHgoODgpICkrICdweCdcclxuXHRcdFx0XHR9ZWxzZSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gbWluSGVpZ2h0ICsgJ3B4J1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5LiL5ouJ5biD5bGA5b6A5LiL5YGP56e755qE6Led56a7IChweClcclxuXHRcdFx0bnVtVG9wKCkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLnRvUHgodGhpcy50b3ApXHJcblx0XHRcdH0sXHJcblx0XHRcdHBhZFRvcCgpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5udW1Ub3AgKyAncHgnO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDkuIrmi4nluIPlsYDlvoDkuIrlgY/np7sgKHB4KVxyXG5cdFx0XHRudW1Cb3R0b20oKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMudG9QeCh0aGlzLmJvdHRvbSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHBhZEJvdHRvbSgpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5udW1Cb3R0b20gKyAncHgnO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDmmK/lkKbkuLrph43nva7kuIvmi4nnmoTnirbmgIFcclxuXHRcdFx0aXNEb3duUmVzZXQoKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuZG93bkxvYWRUeXBlID09PSAzIHx8IHRoaXMuZG93bkxvYWRUeXBlID09PSA0O1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDov4fmuKFcclxuXHRcdFx0dHJhbnNpdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5pc0Rvd25SZXNldCA/ICd0cmFuc2Zvcm0gMzAwbXMnIDogdGhpcy5kb3duVHJhbnNpdGlvbjtcclxuXHRcdFx0fSxcclxuXHRcdFx0dHJhbnNsYXRlWSgpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5kb3duSGlnaHQgPiAwID8gJ3RyYW5zbGF0ZVkoJyArIHRoaXMuZG93bkhpZ2h0ICsgJ3B4KScgOiAnJzsgLy8gdHJhbnNmb3Jt5Lya5L2/Zml4ZWTlpLHmlYgs6ZyA5rOo5oSP5oqKZml4ZWTlhYPntKDlhpnlnKhtZXNjcm9sbOS5i+WkllxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDmmK/lkKblnKjliqDovb3kuK1cclxuXHRcdFx0aXNEb3duTG9hZGluZygpe1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmRvd25Mb2FkVHlwZSA9PT0gM1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDml4vovaznmoTop5LluqZcclxuXHRcdFx0ZG93blJvdGF0ZSgpe1xyXG5cdFx0XHRcdHJldHVybiAncm90YXRlKCcgKyAzNjAgKiB0aGlzLmRvd25SYXRlICsgJ2RlZyknXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOaWh+acrOaPkOekulxyXG5cdFx0XHRkb3duVGV4dCgpe1xyXG5cdFx0XHRcdHN3aXRjaCAodGhpcy5kb3duTG9hZFR5cGUpe1xyXG5cdFx0XHRcdFx0Y2FzZSAxOiByZXR1cm4gdGhpcy5tZXNjcm9sbC5vcHREb3duLnRleHRJbk9mZnNldDtcclxuXHRcdFx0XHRcdGNhc2UgMjogcmV0dXJuIHRoaXMubWVzY3JvbGwub3B0RG93bi50ZXh0T3V0T2Zmc2V0O1xyXG5cdFx0XHRcdFx0Y2FzZSAzOiByZXR1cm4gdGhpcy5tZXNjcm9sbC5vcHREb3duLnRleHRMb2FkaW5nO1xyXG5cdFx0XHRcdFx0Y2FzZSA0OiByZXR1cm4gdGhpcy5tZXNjcm9sbC5vcHREb3duLnRleHRMb2FkaW5nO1xyXG5cdFx0XHRcdFx0ZGVmYXVsdDogcmV0dXJuIHRoaXMubWVzY3JvbGwub3B0RG93bi50ZXh0SW5PZmZzZXQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHQvL251bWJlcixycHgsdXB4LHB4LCUgLS0+IHB455qE5pWw5YC8XHJcblx0XHRcdHRvUHgobnVtKSB7XHJcblx0XHRcdFx0aWYgKHR5cGVvZiBudW0gPT09ICdzdHJpbmcnKSB7XHJcblx0XHRcdFx0XHRpZiAobnVtLmluZGV4T2YoJ3B4JykgIT09IC0xKSB7XHJcblx0XHRcdFx0XHRcdGlmIChudW0uaW5kZXhPZigncnB4JykgIT09IC0xKSB7XHJcblx0XHRcdFx0XHRcdFx0Ly8gXCIxMHJweFwiXHJcblx0XHRcdFx0XHRcdFx0bnVtID0gbnVtLnJlcGxhY2UoJ3JweCcsICcnKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChudW0uaW5kZXhPZigndXB4JykgIT09IC0xKSB7XHJcblx0XHRcdFx0XHRcdFx0Ly8gXCIxMHVweFwiXHJcblx0XHRcdFx0XHRcdFx0bnVtID0gbnVtLnJlcGxhY2UoJ3VweCcsICcnKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHQvLyBcIjEwcHhcIlxyXG5cdFx0XHRcdFx0XHRcdHJldHVybiBOdW1iZXIobnVtLnJlcGxhY2UoJ3B4JywgJycpKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChudW0uaW5kZXhPZignJScpICE9PSAtMSkge1xyXG5cdFx0XHRcdFx0XHQvLyDkvKDnmb7liIbmr5Qs5YiZ55u45a+55LqOd2luZG93SGVpZ2h0LOS8oFwiMTAlXCLliJnnrYnkuo53aW5kb3dIZWlnaHTnmoQxMCVcclxuXHRcdFx0XHRcdFx0bGV0IHJhdGUgPSBOdW1iZXIobnVtLnJlcGxhY2UoJyUnLCAnJykpIC8gMTAwO1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy53aW5kb3dIZWlnaHQgKiByYXRlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gbnVtID8gdW5pLnVweDJweChOdW1iZXIobnVtKSkgOiAwO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvL+azqOWGjOWIl+ihqHRvdWNoc3RhcnTkuovku7Ys55So5LqO5LiL5ouJ5Yi35pawXHJcblx0XHRcdHRvdWNoc3RhcnRFdmVudChlKSB7XHJcblx0XHRcdFx0dGhpcy5tZXNjcm9sbC50b3VjaHN0YXJ0RXZlbnQoZSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdC8v5rOo5YaM5YiX6KGodG91Y2htb3Zl5LqL5Lu2LOeUqOS6juS4i+aLieWIt+aWsFxyXG5cdFx0XHR0b3VjaG1vdmVFdmVudChlKSB7XHJcblx0XHRcdFx0dGhpcy5tZXNjcm9sbC50b3VjaG1vdmVFdmVudChlKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly/ms6jlhozliJfooah0b3VjaGVuZOS6i+S7tiznlKjkuo7kuIvmi4nliLfmlrBcclxuXHRcdFx0dG91Y2hlbmRFdmVudChlKSB7XHJcblx0XHRcdFx0dGhpcy5tZXNjcm9sbC50b3VjaGVuZEV2ZW50KGUpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDngrnlh7vnqbrluIPlsYDnmoTmjInpkq7lm57osINcclxuXHRcdFx0ZW1wdHlDbGljaygpIHtcclxuXHRcdFx0XHR0aGlzLiRlbWl0KCdlbXB0eWNsaWNrJywgdGhpcy5tZXNjcm9sbCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOeCueWHu+WbnuWIsOmhtumDqOeahOaMiemSruWbnuiwg1xyXG5cdFx0XHR0b1RvcENsaWNrKCkge1xyXG5cdFx0XHRcdHRoaXMubWVzY3JvbGwuc2Nyb2xsVG8oMCwgdGhpcy5tZXNjcm9sbC5vcHRVcC50b1RvcC5kdXJhdGlvbik7IC8vIOaJp+ihjOWbnuWIsOmhtumDqFxyXG5cdFx0XHRcdHRoaXMuJGVtaXQoJ3RvcGNsaWNrJywgdGhpcy5tZXNjcm9sbCk7IC8vIOa0vuWPkeeCueWHu+WbnuWIsOmhtumDqOaMiemSrueahOWbnuiwg1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0Ly8g5L2/55SoY3JlYXRlZOWIneWni+WMlm1lc2Nyb2xs5a+56LGhOyDlpoLmnpznlKhtb3VudGVk6YOo5YiGY3Nz5qC35byP57yW6K+R5YiwSDXkvJrlpLHmlYhcclxuXHRcdGNyZWF0ZWQoKSB7XHJcblx0XHRcdGxldCB2bSA9IHRoaXM7XHJcblxyXG5cdFx0XHRsZXQgZGl5T3B0aW9uID0ge1xyXG5cdFx0XHRcdC8vIOS4i+aLieWIt+aWsOeahOmFjee9rlxyXG5cdFx0XHRcdGRvd246IHtcclxuXHRcdFx0XHRcdGluT2Zmc2V0KG1lc2Nyb2xsKSB7XHJcblx0XHRcdFx0XHRcdHZtLmRvd25Mb2FkVHlwZSA9IDE7IC8vIOS4i+aLieeahOi3neemu+i/m+WFpW9mZnNldOiMg+WbtOWGhemCo+S4gOWIu+eahOWbnuiwgyAo6Ieq5a6a5LmJbWVzY3JvbGznu4Tku7bml7Ys5q2k6KGM5LiN5Y+v5YigKVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdG91dE9mZnNldChtZXNjcm9sbCkge1xyXG5cdFx0XHRcdFx0XHR2bS5kb3duTG9hZFR5cGUgPSAyOyAvLyDkuIvmi4nnmoTot53nprvlpKfkuo5vZmZzZXTpgqPkuIDliLvnmoTlm57osIMgKOiHquWumuS5iW1lc2Nyb2xs57uE5Lu25pe2LOatpOihjOS4jeWPr+WIoClcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRvbk1vdmluZyhtZXNjcm9sbCwgcmF0ZSwgZG93bkhpZ2h0KSB7XHJcblx0XHRcdFx0XHRcdC8vIOS4i+aLiei/h+eoi+S4reeahOWbnuiwgyzmu5Hliqjov4fnqIvkuIDnm7TlnKjmiafooYw7XHJcblx0XHRcdFx0XHRcdHZtLmRvd25IaWdodCA9IGRvd25IaWdodDsgLy8g6K6+572u5LiL5ouJ5Yy65Z+f55qE6auY5bqmICjoh6rlrprkuYltZXNjcm9sbOe7hOS7tuaXtizmraTooYzkuI3lj6/liKApXHJcblx0XHRcdFx0XHRcdHZtLmRvd25SYXRlID0gcmF0ZTsgLy/kuIvmi4nmr5TnjocgKGluT2Zmc2V0OiByYXRlPDE7IG91dE9mZnNldDogcmF0ZT49MSlcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRzaG93TG9hZGluZyhtZXNjcm9sbCwgZG93bkhpZ2h0KSB7XHJcblx0XHRcdFx0XHRcdHZtLmRvd25Mb2FkVHlwZSA9IDM7IC8vIOaYvuekuuS4i+aLieWIt+aWsOi/m+W6pueahOWbnuiwgyAo6Ieq5a6a5LmJbWVzY3JvbGznu4Tku7bml7Ys5q2k6KGM5LiN5Y+v5YigKVxyXG5cdFx0XHRcdFx0XHR2bS5kb3duSGlnaHQgPSBkb3duSGlnaHQ7IC8vIOiuvue9ruS4i+aLieWMuuWfn+eahOmrmOW6piAo6Ieq5a6a5LmJbWVzY3JvbGznu4Tku7bml7Ys5q2k6KGM5LiN5Y+v5YigKVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGVuZERvd25TY3JvbGwobWVzY3JvbGwpIHtcclxuXHRcdFx0XHRcdFx0dm0uZG93bkxvYWRUeXBlID0gNDsgLy8g57uT5p2f5LiL5ouJICjoh6rlrprkuYltZXNjcm9sbOe7hOS7tuaXtizmraTooYzkuI3lj6/liKApXHJcblx0XHRcdFx0XHRcdHZtLmRvd25IaWdodCA9IDA7IC8vIOiuvue9ruS4i+aLieWMuuWfn+eahOmrmOW6piAo6Ieq5a6a5LmJbWVzY3JvbGznu4Tku7bml7Ys5q2k6KGM5LiN5Y+v5YigKVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdC8vIOa0vuWPkeS4i+aLieWIt+aWsOeahOWbnuiwg1xyXG5cdFx0XHRcdFx0Y2FsbGJhY2s6IGZ1bmN0aW9uKG1lc2Nyb2xsKSB7XHJcblx0XHRcdFx0XHRcdHZtLiRlbWl0KCdkb3duJywgbWVzY3JvbGwpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Ly8g5LiK5ouJ5Yqg6L2955qE6YWN572uXHJcblx0XHRcdFx0dXA6IHtcclxuXHRcdFx0XHRcdC8vIOaYvuekuuWKoOi9veS4reeahOWbnuiwg1xyXG5cdFx0XHRcdFx0c2hvd0xvYWRpbmcoKSB7XHJcblx0XHRcdFx0XHRcdHZtLnVwTG9hZFR5cGUgPSAxO1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdC8vIOaYvuekuuaXoOabtOWkmuaVsOaNrueahOWbnuiwg1xyXG5cdFx0XHRcdFx0c2hvd05vTW9yZSgpIHtcclxuXHRcdFx0XHRcdFx0dm0udXBMb2FkVHlwZSA9IDI7XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0Ly8g6ZqQ6JeP5LiK5ouJ5Yqg6L2955qE5Zue6LCDXHJcblx0XHRcdFx0XHRoaWRlVXBTY3JvbGwobWVzY3JvbGwpIHtcclxuXHRcdFx0XHRcdFx0dm0udXBMb2FkVHlwZSA9IG1lc2Nyb2xsLm9wdFVwLmhhc05leHQgPyAwIDogMztcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHQvLyDnqbrluIPlsYBcclxuXHRcdFx0XHRcdGVtcHR5OiB7XHJcblx0XHRcdFx0XHRcdG9uU2hvdyhpc1Nob3cpIHtcclxuXHRcdFx0XHRcdFx0XHQvLyDmmL7npLrpmpDol4/nmoTlm57osINcclxuXHRcdFx0XHRcdFx0XHR2bS5pc1Nob3dFbXB0eSA9IGlzU2hvdztcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdC8vIOWbnuWIsOmhtumDqFxyXG5cdFx0XHRcdFx0dG9Ub3A6IHtcclxuXHRcdFx0XHRcdFx0b25TaG93KGlzU2hvdykge1xyXG5cdFx0XHRcdFx0XHRcdC8vIOaYvuekuumakOiXj+eahOWbnuiwg1xyXG5cdFx0XHRcdFx0XHRcdHZtLmlzU2hvd1RvVG9wID0gaXNTaG93O1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0Ly8g5rS+5Y+R5LiK5ouJ5Yqg6L2955qE5Zue6LCDXHJcblx0XHRcdFx0XHRjYWxsYmFjazogZnVuY3Rpb24obWVzY3JvbGwpIHtcclxuXHRcdFx0XHRcdFx0dm0uJGVtaXQoJ3VwJywgbWVzY3JvbGwpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdE1lU2Nyb2xsLmV4dGVuZChkaXlPcHRpb24sIEdsb2JhbE9wdGlvbik7IC8vIOa3t+WFpeWFqOWxgOeahOmFjee9rlxyXG5cdFx0XHRsZXQgbXlPcHRpb24gPSBKU09OLnBhcnNlKFxyXG5cdFx0XHRcdEpTT04uc3RyaW5naWZ5KHtcclxuXHRcdFx0XHRcdGRvd246IHZtLmRvd24sXHJcblx0XHRcdFx0XHR1cDogdm0udXBcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpOyAvLyDmt7Hmi7fotJ0s6YG/5YWN5a+5cHJvcHPnmoTlvbHlk41cclxuXHRcdFx0TWVTY3JvbGwuZXh0ZW5kKG15T3B0aW9uLCBkaXlPcHRpb24pOyAvLyDmt7flhaXlhbfkvZPnlYzpnaLnmoTphY3nva5cclxuXHJcblx0XHRcdC8vIOWIneWni+WMlk1lU2Nyb2xs5a+56LGhXHJcblx0XHRcdHZtLm1lc2Nyb2xsID0gbmV3IE1lU2Nyb2xsKG15T3B0aW9uLCB0cnVlKTsgLy8g5Lyg5YWldHJ1ZSzmoIforrBib2R55Li65rua5Yqo5Yy65Z+fXHJcblx0XHRcdC8vIGluaXTlm57osINtZXNjcm9sbOWvueixoVxyXG5cdFx0XHR2bS4kZW1pdCgnaW5pdCcsIHZtLm1lc2Nyb2xsKTtcclxuXHJcblx0XHRcdC8vIOiuvue9rumrmOW6plxyXG5cdFx0XHRjb25zdCBzeXMgPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKTtcclxuXHRcdFx0aWYgKHN5cy53aW5kb3dIZWlnaHQpIHZtLndpbmRvd0hlaWdodCA9IHN5cy53aW5kb3dIZWlnaHQ7XHJcblx0XHRcdGlmIChzeXMud2luZG93Qm90dG9tKSB2bS53aW5kb3dCb3R0b20gPSBzeXMud2luZG93Qm90dG9tO1xyXG5cdFx0XHRpZiAoc3lzLnN0YXR1c0JhckhlaWdodCkgdm0uc3RhdHVzQmFySGVpZ2h0ID0gc3lzLnN0YXR1c0JhckhlaWdodDtcclxuXHRcdFx0Ly8g5L2/ZG93bueahGJvdHRvbU9mZnNldOeUn+aViFxyXG5cdFx0XHR2bS5tZXNjcm9sbC5zZXRCb2R5SGVpZ2h0KHN5cy53aW5kb3dIZWlnaHQpO1xyXG5cdFx0XHQvLyBtZXNjcm9sbC1ib2R55ZyoQW5kcm9pZOWwj+eoi+W6j+S4i+aLieS8muWNoemhvyzml6Dms5Xlg49tZXNjcm9sbC11bmnpgqPmoLfpgJrov4forr7nva5cImRpc2FibGVTY3JvbGxcIjp0cnVl6Kej5YazLOWPquiDveeUqOWKqOeUu+i/h+a4oee8k+ino1xyXG5cdFx0XHQvLyAjaWZkZWYgTVBcclxuXHRcdFx0aWYoc3lzLnBsYXRmb3JtID09IFwiYW5kcm9pZFwiKSB2bS5kb3duVHJhbnNpdGlvbiA9ICd0cmFuc2Zvcm0gMjAwbXMnXHJcblx0XHRcdC8vICNlbmRpZlxyXG5cclxuXHRcdFx0Ly8g5Zug5Li65L2/55So55qE5pivcGFnZeeahHNjcm9sbCzov5nph4zpnIDoh6rlrprkuYlzY3JvbGxUb1xyXG5cdFx0XHR2bS5tZXNjcm9sbC5yZXNldFNjcm9sbFRvKCh5LCB0KSA9PiB7XHJcblx0XHRcdFx0aWYodHlwZW9mIHkgPT09ICdzdHJpbmcnKXtcclxuXHRcdFx0XHRcdC8vIOa7muWKqOWIsOaMh+WumnZpZXcgKHnlv4XpobvkuLrlhYPntKDnmoRpZCzkuI3luKYjKVxyXG5cdFx0XHRcdFx0c2V0VGltZW91dCgoKT0+eyAvLyDlu7bml7bnoa7kv512aWV35bey5riy5p+TOyDkuI3kvb/nlKgkbmV4dFRpY2tcclxuXHRcdFx0XHRcdFx0dW5pLmNyZWF0ZVNlbGVjdG9yUXVlcnkoKS5zZWxlY3QoJyMnK3kpLmJvdW5kaW5nQ2xpZW50UmVjdChmdW5jdGlvbihyZWN0KXtcclxuXHRcdFx0XHRcdFx0XHRsZXQgdG9wID0gcmVjdC50b3BcclxuXHRcdFx0XHRcdFx0XHR0b3AgKz0gdm0ubWVzY3JvbGwuZ2V0U2Nyb2xsVG9wKClcclxuXHRcdFx0XHRcdFx0XHR1bmkucGFnZVNjcm9sbFRvKHtcclxuXHRcdFx0XHRcdFx0XHRcdHNjcm9sbFRvcDogdG9wLFxyXG5cdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IHRcclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHR9KS5leGVjKClcclxuXHRcdFx0XHRcdH0sMzApXHJcblx0XHRcdFx0fSBlbHNle1xyXG5cdFx0XHRcdFx0Ly8g5rua5Yqo5Yiw5oyH5a6a5L2N572uICh55b+F6aG75Li65pWw5a2XKVxyXG5cdFx0XHRcdFx0dW5pLnBhZ2VTY3JvbGxUbyh7XHJcblx0XHRcdFx0XHRcdHNjcm9sbFRvcDogeSxcclxuXHRcdFx0XHRcdFx0ZHVyYXRpb246IHRcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdC8vIOWFt+S9k+eahOeVjOmdouWmguaenOS4jemFjee9rnVwLnRvVG9wLnNhZmVhcmVhLOWImeWPluacrHZ1ZeeahHNhZmVhcmVh5YC8XHJcblx0XHRcdGlmICh2bS51cCAmJiB2bS51cC50b1RvcCAmJiB2bS51cC50b1RvcC5zYWZlYXJlYSAhPSBudWxsKSB7fSBlbHNlIHtcclxuXHRcdFx0XHR2bS5tZXNjcm9sbC5vcHRVcC50b1RvcC5zYWZlYXJlYSA9IHZtLnNhZmVhcmVhO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcblx0QGltcG9ydCBcIi4vbWVzY3JvbGwtYm9keS5jc3NcIjtcclxuXHRAaW1wb3J0IFwiLi9jb21wb25lbnRzL21lc2Nyb2xsLWRvd24uY3NzXCI7XHJcblx0QGltcG9ydCAnLi9jb21wb25lbnRzL21lc2Nyb2xsLXVwLmNzcyc7XHJcbjwvc3R5bGU+XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///69\n");

/***/ }),
/* 70 */
/*!******************************************************************************!*\
  !*** D:/uniapp/uniapp-simple/components/common/mescroll-uni/mescroll-uni.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = MeScroll; /* mescroll\r\n                                                                                                        * version 1.2.8\r\n                                                                                                        * 2020-06-28 wenju\r\n                                                                                                        * http://www.mescroll.com\r\n                                                                                                        */\n\nfunction MeScroll(options, isScrollBody) {\n  var me = this;\n  me.version = '1.2.8'; // mescroll版本号\n  me.options = options || {}; // 配置\n  me.isScrollBody = isScrollBody || false; // 滚动区域是否为原生页面滚动; 默认为scroll-view\n\n  me.isDownScrolling = false; // 是否在执行下拉刷新的回调\n  me.isUpScrolling = false; // 是否在执行上拉加载的回调\n  var hasDownCallback = me.options.down && me.options.down.callback; // 是否配置了down的callback\n\n  // 初始化下拉刷新\n  me.initDownScroll();\n  // 初始化上拉加载,则初始化\n  me.initUpScroll();\n\n  // 自动加载\n  setTimeout(function () {// 待主线程执行完毕再执行,避免new MeScroll未初始化,在回调获取不到mescroll的实例\n    // 自动触发下拉刷新 (只有配置了down的callback才自动触发下拉刷新)\n    if ((me.optDown.use || me.optDown.native) && me.optDown.auto && hasDownCallback) {\n      if (me.optDown.autoShowLoading) {\n        me.triggerDownScroll(); // 显示下拉进度,执行下拉回调\n      } else {\n        me.optDown.callback && me.optDown.callback(me); // 不显示下拉进度,直接执行下拉回调\n      }\n    }\n    // 自动触发上拉加载\n    setTimeout(function () {// 延时确保先执行down的callback,再执行up的callback,因为部分小程序emit是异步,会导致isUpAutoLoad判断有误\n      me.optUp.use && me.optUp.auto && !me.isUpAutoLoad && me.triggerUpScroll();\n    }, 100);\n  }, 30); // 需让me.optDown.inited和me.optUp.inited先执行\n}\n\n/* 配置参数:下拉刷新 */\nMeScroll.prototype.extendDownScroll = function (optDown) {\n  // 下拉刷新的配置\n  MeScroll.extend(optDown, {\n    use: true, // 是否启用下拉刷新; 默认true\n    auto: true, // 是否在初始化完毕之后自动执行下拉刷新的回调; 默认true\n    native: false, // 是否使用系统自带的下拉刷新; 默认false; 仅mescroll-body生效 (值为true时,还需在pages配置enablePullDownRefresh:true;详请参考mescroll-native的案例)\n    autoShowLoading: false, // 如果设置auto=true(在初始化完毕之后自动执行下拉刷新的回调),那么是否显示下拉刷新的进度; 默认false\n    isLock: false, // 是否锁定下拉刷新,默认false;\n    offset: 80, // 在列表顶部,下拉大于80px,松手即可触发下拉刷新的回调\n    startTop: 100, // scroll-view滚动到顶部时,此时的scroll-top不一定为0, 此值用于控制最大的误差\n    fps: 80, // 下拉节流 (值越大每秒刷新频率越高)\n    inOffsetRate: 1, // 在列表顶部,下拉的距离小于offset时,改变下拉区域高度比例;值小于1且越接近0,高度变化越小,表现为越往下越难拉\n    outOffsetRate: 0.2, // 在列表顶部,下拉的距离大于offset时,改变下拉区域高度比例;值小于1且越接近0,高度变化越小,表现为越往下越难拉\n    bottomOffset: 20, // 当手指touchmove位置在距离body底部20px范围内的时候结束上拉刷新,避免Webview嵌套导致touchend事件不执行\n    minAngle: 45, // 向下滑动最少偏移的角度,取值区间  [0,90];默认45度,即向下滑动的角度大于45度则触发下拉;而小于45度,将不触发下拉,避免与左右滑动的轮播等组件冲突;\n    textInOffset: '下拉刷新', // 下拉的距离在offset范围内的提示文本\n    textOutOffset: '释放更新', // 下拉的距离大于offset范围的提示文本\n    textLoading: '加载中 ...', // 加载中的提示文本\n    bgColor: \"transparent\", // 背景颜色 (建议在pages.json中再设置一下backgroundColorTop)\n    textColor: \"gray\", // 文本颜色 (当bgColor配置了颜色,而textColor未配置时,则textColor会默认为白色)\n    inited: null, // 下拉刷新初始化完毕的回调\n    inOffset: null, // 下拉的距离进入offset范围内那一刻的回调\n    outOffset: null, // 下拉的距离大于offset那一刻的回调\n    onMoving: null, // 下拉过程中的回调,滑动过程一直在执行; rate下拉区域当前高度与指定距离的比值(inOffset: rate<1; outOffset: rate>=1); downHight当前下拉区域的高度\n    beforeLoading: null, // 准备触发下拉刷新的回调: 如果return true,将不触发showLoading和callback回调; 常用来完全自定义下拉刷新, 参考案例【淘宝 v6.8.0】\n    showLoading: null, // 显示下拉刷新进度的回调\n    afterLoading: null, // 准备结束下拉的回调. 返回结束下拉的延时执行时间,默认0ms; 常用于结束下拉之前再显示另外一小段动画,才去隐藏下拉刷新的场景, 参考案例【dotJump】\n    endDownScroll: null, // 结束下拉刷新的回调\n    callback: function callback(mescroll) {\n      // 下拉刷新的回调;默认重置上拉加载列表为第一页\n      mescroll.resetUpScroll();\n    } });\n\n};\n\n/* 配置参数:上拉加载 */\nMeScroll.prototype.extendUpScroll = function (optUp) {\n  // 上拉加载的配置\n  MeScroll.extend(optUp, {\n    use: true, // 是否启用上拉加载; 默认true\n    auto: true, // 是否在初始化完毕之后自动执行上拉加载的回调; 默认true\n    isLock: false, // 是否锁定上拉加载,默认false;\n    isBoth: true, // 上拉加载时,如果滑动到列表顶部是否可以同时触发下拉刷新;默认true,两者可同时触发;\n    isBounce: false, // 默认禁止橡皮筋的回弹效果, 必读事项: http://www.mescroll.com/qa.html?v=190725#q25\n    callback: null, // 上拉加载的回调;function(page,mescroll){ }\n    page: {\n      num: 1, // 当前页码,默认0,回调之前会加1,即callback(page)会从1开始\n      size: 10, // 每页数据的数量\n      time: null // 加载第一页数据服务器返回的时间; 防止用户翻页时,后台新增了数据从而导致下一页数据重复;\n    },\n    noMoreSize: 5, // 如果列表已无数据,可设置列表的总数量要大于等于5条才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看\n    offset: 80, // 距底部多远时,触发upCallback\n    textLoading: '加载中 ...', // 加载中的提示文本\n    textNoMore: '-- END --', // 没有更多数据的提示文本\n    bgColor: \"transparent\", // 背景颜色 (建议在pages.json中再设置一下backgroundColorBottom)\n    textColor: \"gray\", // 文本颜色 (当bgColor配置了颜色,而textColor未配置时,则textColor会默认为白色)\n    inited: null, // 初始化完毕的回调\n    showLoading: null, // 显示加载中的回调\n    showNoMore: null, // 显示无更多数据的回调\n    hideUpScroll: null, // 隐藏上拉加载的回调\n    errDistance: 60, // endErr的时候需往上滑动一段距离,使其往下滑动时再次触发onReachBottom,仅mescroll-body生效\n    toTop: {\n      // 回到顶部按钮,需配置src才显示\n      src: null, // 图片路径,默认null (绝对路径或网络图)\n      offset: 1000, // 列表滚动多少距离才显示回到顶部按钮,默认1000\n      duration: 300, // 回到顶部的动画时长,默认300ms (当值为0或300则使用系统自带回到顶部,更流畅; 其他值则通过step模拟,部分机型可能不够流畅,所以非特殊情况不建议修改此项)\n      btnClick: null, // 点击按钮的回调\n      onShow: null, // 是否显示的回调\n      zIndex: 9990, // fixed定位z-index值\n      left: null, // 到左边的距离, 默认null. 此项有值时,right不生效. (支持20, \"20rpx\", \"20px\", \"20%\"格式的值, 其中纯数字则默认单位rpx)\n      right: 20, // 到右边的距离, 默认20 (支持20, \"20rpx\", \"20px\", \"20%\"格式的值, 其中纯数字则默认单位rpx)\n      bottom: 120, // 到底部的距离, 默认120 (支持20, \"20rpx\", \"20px\", \"20%\"格式的值, 其中纯数字则默认单位rpx)\n      safearea: false, // bottom的偏移量是否加上底部安全区的距离, 默认false, 需要适配iPhoneX时使用 (具体的界面如果不配置此项,则取本vue的safearea值)\n      width: 72, // 回到顶部图标的宽度, 默认72 (支持20, \"20rpx\", \"20px\", \"20%\"格式的值, 其中纯数字则默认单位rpx)\n      radius: \"50%\" // 圆角, 默认\"50%\" (支持20, \"20rpx\", \"20px\", \"20%\"格式的值, 其中纯数字则默认单位rpx)\n    },\n    empty: {\n      use: true, // 是否显示空布局\n      icon: null, // 图标路径\n      tip: '~ 暂无相关数据 ~', // 提示\n      btnText: '', // 按钮\n      btnClick: null, // 点击按钮的回调\n      onShow: null, // 是否显示的回调\n      fixed: false, // 是否使用fixed定位,默认false; 配置fixed为true,以下的top和zIndex才生效 (transform会使fixed失效,最终会降级为absolute)\n      top: \"100rpx\", // fixed定位的top值 (完整的单位值,如 \"10%\"; \"100rpx\")\n      zIndex: 99 // fixed定位z-index值\n    },\n    onScroll: false // 是否监听滚动事件\n  });\n};\n\n/* 配置参数 */\nMeScroll.extend = function (userOption, defaultOption) {\n  if (!userOption) return defaultOption;\n  for (var key in defaultOption) {\n    if (userOption[key] == null) {\n      var def = defaultOption[key];\n      if (def != null && typeof def === 'object') {\n        userOption[key] = MeScroll.extend({}, def); // 深度匹配\n      } else {\n        userOption[key] = def;\n      }\n    } else if (typeof userOption[key] === 'object') {\n      MeScroll.extend(userOption[key], defaultOption[key]); // 深度匹配\n    }\n  }\n  return userOption;\n};\n\n/* 简单判断是否配置了颜色 (非透明,非白色) */\nMeScroll.prototype.hasColor = function (color) {\n  if (!color) return false;\n  var c = color.toLowerCase();\n  return c != \"#fff\" && c != \"#ffffff\" && c != \"transparent\" && c != \"white\";\n};\n\n/* -------初始化下拉刷新------- */\nMeScroll.prototype.initDownScroll = function () {\n  var me = this;\n  // 配置参数\n  me.optDown = me.options.down || {};\n  if (!me.optDown.textColor && me.hasColor(me.optDown.bgColor)) me.optDown.textColor = \"#fff\"; // 当bgColor有值且textColor未设置,则textColor默认白色\n  me.extendDownScroll(me.optDown);\n  // 如果是mescroll-body且配置了native,则禁止自定义的下拉刷新\n  if (me.isScrollBody && me.optDown.native) {\n    me.optDown.use = false;\n  } else {\n    me.optDown.native = false; // 仅mescroll-body支持,mescroll-uni不支持\n  }\n\n  me.downHight = 0; // 下拉区域的高度\n\n  // 在页面中加入下拉布局\n  if (me.optDown.use && me.optDown.inited) {\n    // 初始化完毕的回调\n    setTimeout(function () {// 待主线程执行完毕再执行,避免new MeScroll未初始化,在回调获取不到mescroll的实例\n      me.optDown.inited(me);\n    }, 0);\n  }\n};\n\n/* 列表touchstart事件 */\nMeScroll.prototype.touchstartEvent = function (e) {\n  if (!this.optDown.use) return;\n\n  this.startPoint = this.getPoint(e); // 记录起点\n  this.startTop = this.getScrollTop(); // 记录此时的滚动条位置\n  this.lastPoint = this.startPoint; // 重置上次move的点\n  this.maxTouchmoveY = this.getBodyHeight() - this.optDown.bottomOffset; // 手指触摸的最大范围(写在touchstart避免body获取高度为0的情况)\n  this.inTouchend = false; // 标记不是touchend\n};\n\n/* 列表touchmove事件 */\nMeScroll.prototype.touchmoveEvent = function (e) {\n\n\n\n\n  if (!this.optDown.use) return;\n  if (!this.startPoint) return;\n  var me = this;\n\n  // 节流\n  var t = new Date().getTime();\n  if (me.moveTime && t - me.moveTime < me.moveTimeDiff) {// 小于节流时间,则不处理\n    return;\n  } else {\n    me.moveTime = t;\n    if (!me.moveTimeDiff) me.moveTimeDiff = 1000 / me.optDown.fps;\n  }\n\n  var scrollTop = me.getScrollTop(); // 当前滚动条的距离\n  var curPoint = me.getPoint(e); // 当前点\n\n  var moveY = curPoint.y - me.startPoint.y; // 和起点比,移动的距离,大于0向下拉,小于0向上拉\n\n  // 向下拉 && 在顶部\n  // mescroll-body,直接判定在顶部即可\n  // scroll-view在滚动时不会触发touchmove,当触顶/底/左/右时,才会触发touchmove\n  // scroll-view滚动到顶部时,scrollTop不一定为0; 在iOS的APP中scrollTop可能为负数,不一定和startTop相等\n  if (moveY > 0 && (\n  me.isScrollBody && scrollTop <= 0 ||\n\n  !me.isScrollBody && (scrollTop <= 0 || scrollTop <= me.optDown.startTop && scrollTop === me.startTop)))\n  {\n    // 可下拉的条件\n    if (!me.inTouchend && !me.isDownScrolling && !me.optDown.isLock && (!me.isUpScrolling || me.isUpScrolling &&\n    me.optUp.isBoth)) {\n\n      // 下拉的角度是否在配置的范围内\n      var angle = me.getAngle(me.lastPoint, curPoint); // 两点之间的角度,区间 [0,90]\n      if (angle < me.optDown.minAngle) return; // 如果小于配置的角度,则不往下执行下拉刷新\n\n      // 如果手指的位置超过配置的距离,则提前结束下拉,避免Webview嵌套导致touchend无法触发\n      if (me.maxTouchmoveY > 0 && curPoint.y >= me.maxTouchmoveY) {\n        me.inTouchend = true; // 标记执行touchend\n        me.touchendEvent(); // 提前触发touchend\n        return;\n      }\n\n\n\n\n      me.preventDefault(e); // 阻止默认事件\n\n      var diff = curPoint.y - me.lastPoint.y; // 和上次比,移动的距离 (大于0向下,小于0向上)\n\n      // 下拉距离  < 指定距离\n      if (me.downHight < me.optDown.offset) {\n        if (me.movetype !== 1) {\n          me.movetype = 1; // 加入标记,保证只执行一次\n          me.optDown.inOffset && me.optDown.inOffset(me); // 进入指定距离范围内那一刻的回调,只执行一次\n          me.isMoveDown = true; // 标记下拉区域高度改变,在touchend重置回来\n        }\n        me.downHight += diff * me.optDown.inOffsetRate; // 越往下,高度变化越小\n\n        // 指定距离  <= 下拉距离\n      } else {\n        if (me.movetype !== 2) {\n          me.movetype = 2; // 加入标记,保证只执行一次\n          me.optDown.outOffset && me.optDown.outOffset(me); // 下拉超过指定距离那一刻的回调,只执行一次\n          me.isMoveDown = true; // 标记下拉区域高度改变,在touchend重置回来\n        }\n        if (diff > 0) {// 向下拉\n          me.downHight += Math.round(diff * me.optDown.outOffsetRate); // 越往下,高度变化越小\n        } else {// 向上收\n          me.downHight += diff; // 向上收回高度,则向上滑多少收多少高度\n        }\n      }\n\n      var rate = me.downHight / me.optDown.offset; // 下拉区域当前高度与指定距离的比值\n      me.optDown.onMoving && me.optDown.onMoving(me, rate, me.downHight); // 下拉过程中的回调,一直在执行\n    }\n  }\n\n  me.lastPoint = curPoint; // 记录本次移动的点\n};\n\n/* 列表touchend事件 */\nMeScroll.prototype.touchendEvent = function (e) {\n  if (!this.optDown.use) return;\n  // 如果下拉区域高度已改变,则需重置回来\n  if (this.isMoveDown) {\n    if (this.downHight >= this.optDown.offset) {\n      // 符合触发刷新的条件\n      this.triggerDownScroll();\n    } else {\n      // 不符合的话 则重置\n      this.downHight = 0;\n      this.optDown.endDownScroll && this.optDown.endDownScroll(this);\n    }\n    this.movetype = 0;\n    this.isMoveDown = false;\n  } else if (!this.isScrollBody && this.getScrollTop() === this.startTop) {// scroll-view到顶/左/右/底的滑动事件\n    var isScrollUp = this.getPoint(e).y - this.startPoint.y < 0; // 和起点比,移动的距离,大于0向下拉,小于0向上拉\n    // 上滑\n    if (isScrollUp) {\n      // 需检查滑动的角度\n      var angle = this.getAngle(this.getPoint(e), this.startPoint); // 两点之间的角度,区间 [0,90]\n      if (angle > 80) {\n        // 检查并触发上拉\n        this.triggerUpScroll(true);\n      }\n    }\n  }\n};\n\n/* 根据点击滑动事件获取第一个手指的坐标 */\nMeScroll.prototype.getPoint = function (e) {\n  if (!e) {\n    return {\n      x: 0,\n      y: 0 };\n\n  }\n  if (e.touches && e.touches[0]) {\n    return {\n      x: e.touches[0].pageX,\n      y: e.touches[0].pageY };\n\n  } else if (e.changedTouches && e.changedTouches[0]) {\n    return {\n      x: e.changedTouches[0].pageX,\n      y: e.changedTouches[0].pageY };\n\n  } else {\n    return {\n      x: e.clientX,\n      y: e.clientY };\n\n  }\n};\n\n/* 计算两点之间的角度: 区间 [0,90]*/\nMeScroll.prototype.getAngle = function (p1, p2) {\n  var x = Math.abs(p1.x - p2.x);\n  var y = Math.abs(p1.y - p2.y);\n  var z = Math.sqrt(x * x + y * y);\n  var angle = 0;\n  if (z !== 0) {\n    angle = Math.asin(y / z) / Math.PI * 180;\n  }\n  return angle;\n};\n\n/* 触发下拉刷新 */\nMeScroll.prototype.triggerDownScroll = function () {\n  if (this.optDown.beforeLoading && this.optDown.beforeLoading(this)) {\n    //return true则处于完全自定义状态\n  } else {\n    var page = this.optUp.page;\n    page.num = this.startNum; // 重置为第一页\n    this.showDownScroll(); // 下拉刷新中...\n    this.optDown.callback && this.optDown.callback(this); // 执行回调,联网加载数据\n  }\n};\n\n/* 显示下拉进度布局 */\nMeScroll.prototype.showDownScroll = function () {\n  this.isDownScrolling = true; // 标记下拉中\n  if (this.optDown.native) {\n    uni.startPullDownRefresh(); // 系统自带的下拉刷新\n    this.optDown.showLoading && this.optDown.showLoading(this, 0); // 仍触发showLoading,因为上拉加载用到\n  } else {\n    this.downHight = this.optDown.offset; // 更新下拉区域高度\n    this.optDown.showLoading && this.optDown.showLoading(this, this.downHight); // 下拉刷新中...\n  }\n};\n\n/* 显示系统自带的下拉刷新时需要处理的业务 */\nMeScroll.prototype.onPullDownRefresh = function () {\n  this.isDownScrolling = true; // 标记下拉中\n  this.optDown.showLoading && this.optDown.showLoading(this, 0); // 仍触发showLoading,因为上拉加载用到\n  this.optDown.callback && this.optDown.callback(this); // 执行回调,联网加载数据\n};\n\n/* 结束下拉刷新 */\nMeScroll.prototype.endDownScroll = function () {\n  if (this.optDown.native) {// 结束原生下拉刷新\n    this.isDownScrolling = false;\n    this.optDown.endDownScroll && this.optDown.endDownScroll(this);\n    uni.stopPullDownRefresh();\n    return;\n  }\n  var me = this;\n  // 结束下拉刷新的方法\n  var endScroll = function endScroll() {\n    me.downHight = 0;\n    me.isDownScrolling = false;\n    me.optDown.endDownScroll && me.optDown.endDownScroll(me);\n    !me.isScrollBody && me.setScrollHeight(0); // scroll-view重置滚动区域,使数据不满屏时仍可检查触发翻页\n  };\n  // 结束下拉刷新时的回调\n  var delay = 0;\n  if (me.optDown.afterLoading) delay = me.optDown.afterLoading(me); // 结束下拉刷新的延时,单位ms\n  if (typeof delay === 'number' && delay > 0) {\n    setTimeout(endScroll, delay);\n  } else {\n    endScroll();\n  }\n};\n\n/* 锁定下拉刷新:isLock=ture,null锁定;isLock=false解锁 */\nMeScroll.prototype.lockDownScroll = function (isLock) {\n  if (isLock == null) isLock = true;\n  this.optDown.isLock = isLock;\n};\n\n/* 锁定上拉加载:isLock=ture,null锁定;isLock=false解锁 */\nMeScroll.prototype.lockUpScroll = function (isLock) {\n  if (isLock == null) isLock = true;\n  this.optUp.isLock = isLock;\n};\n\n/* -------初始化上拉加载------- */\nMeScroll.prototype.initUpScroll = function () {\n  var me = this;\n  // 配置参数\n  me.optUp = me.options.up || { use: false };\n  if (!me.optUp.textColor && me.hasColor(me.optUp.bgColor)) me.optUp.textColor = \"#fff\"; // 当bgColor有值且textColor未设置,则textColor默认白色\n  me.extendUpScroll(me.optUp);\n\n  if (!me.optUp.isBounce) me.setBounce(false); // 不允许bounce时,需禁止window的touchmove事件\n\n  if (me.optUp.use === false) return; // 配置不使用上拉加载时,则不初始化上拉布局\n  me.optUp.hasNext = true; // 如果使用上拉,则默认有下一页\n  me.startNum = me.optUp.page.num; // 记录page开始的页码\n\n  // 初始化完毕的回调\n  if (me.optUp.inited) {\n    setTimeout(function () {// 待主线程执行完毕再执行,避免new MeScroll未初始化,在回调获取不到mescroll的实例\n      me.optUp.inited(me);\n    }, 0);\n  }\n};\n\n/*滚动到底部的事件 (仅mescroll-body生效)*/\nMeScroll.prototype.onReachBottom = function () {\n  if (this.isScrollBody && !this.isUpScrolling) {// 只能支持下拉刷新的时候同时可以触发上拉加载,否则滚动到底部就需要上滑一点才能触发onReachBottom\n    if (!this.optUp.isLock && this.optUp.hasNext) {\n      this.triggerUpScroll();\n    }\n  }\n};\n\n/*列表滚动事件 (仅mescroll-body生效)*/\nMeScroll.prototype.onPageScroll = function (e) {\n  if (!this.isScrollBody) return;\n\n  // 更新滚动条的位置 (主要用于判断下拉刷新时,滚动条是否在顶部)\n  this.setScrollTop(e.scrollTop);\n\n  // 顶部按钮的显示隐藏\n  if (e.scrollTop >= this.optUp.toTop.offset) {\n    this.showTopBtn();\n  } else {\n    this.hideTopBtn();\n  }\n};\n\n/*列表滚动事件*/\nMeScroll.prototype.scroll = function (e, onScroll) {\n  // 更新滚动条的位置\n  this.setScrollTop(e.scrollTop);\n  // 更新滚动内容高度\n  this.setScrollHeight(e.scrollHeight);\n\n  // 向上滑还是向下滑动\n  if (this.preScrollY == null) this.preScrollY = 0;\n  this.isScrollUp = e.scrollTop - this.preScrollY > 0;\n  this.preScrollY = e.scrollTop;\n\n  // 上滑 && 检查并触发上拉\n  this.isScrollUp && this.triggerUpScroll(true);\n\n  // 顶部按钮的显示隐藏\n  if (e.scrollTop >= this.optUp.toTop.offset) {\n    this.showTopBtn();\n  } else {\n    this.hideTopBtn();\n  }\n\n  // 滑动监听\n  this.optUp.onScroll && onScroll && onScroll();\n};\n\n/* 触发上拉加载 */\nMeScroll.prototype.triggerUpScroll = function (isCheck) {\n  if (!this.isUpScrolling && this.optUp.use && this.optUp.callback) {\n    // 是否校验在底部; 默认不校验\n    if (isCheck === true) {\n      var canUp = false;\n      // 还有下一页 && 没有锁定 && 不在下拉中\n      if (this.optUp.hasNext && !this.optUp.isLock && !this.isDownScrolling) {\n        if (this.getScrollBottom() <= this.optUp.offset) {// 到底部\n          canUp = true; // 标记可上拉\n        }\n      }\n      if (canUp === false) return;\n    }\n    this.showUpScroll(); // 上拉加载中...\n    // this.optUp.page.num++; // 预先加一页,如果失败则减回\n    this.isUpAutoLoad = true; // 标记上拉已经自动执行过,避免初始化时多次触发上拉回调\n    this.num = this.optUp.page.num; // 把最新的页数赋值在mescroll上,避免对page的影响\n    this.size = this.optUp.page.size; // 把最新的页码赋值在mescroll上,避免对page的影响\n    this.time = this.optUp.page.time; // 把最新的页码赋值在mescroll上,避免对page的影响\n    this.optUp.callback(this); // 执行回调,联网加载数据\n  }\n};\n\n/* 显示上拉加载中 */\nMeScroll.prototype.showUpScroll = function () {\n  this.isUpScrolling = true; // 标记上拉加载中\n  this.optUp.showLoading && this.optUp.showLoading(this); // 回调\n};\n\n/* 显示上拉无更多数据 */\nMeScroll.prototype.showNoMore = function () {\n  this.optUp.hasNext = false; // 标记无更多数据\n  this.optUp.showNoMore && this.optUp.showNoMore(this); // 回调\n};\n\n/* 隐藏上拉区域**/\nMeScroll.prototype.hideUpScroll = function () {\n  this.optUp.hideUpScroll && this.optUp.hideUpScroll(this); // 回调\n};\n\n/* 结束上拉加载 */\nMeScroll.prototype.endUpScroll = function (isShowNoMore) {\n  if (isShowNoMore != null) {// isShowNoMore=null,不处理下拉状态,下拉刷新的时候调用\n    if (isShowNoMore) {\n      this.showNoMore(); // isShowNoMore=true,显示无更多数据\n    } else {\n      this.hideUpScroll(); // isShowNoMore=false,隐藏上拉加载\n    }\n  }\n  this.isUpScrolling = false; // 标记结束上拉加载\n};\n\n/* 重置上拉加载列表为第一页\r\n    *isShowLoading 是否显示进度布局;\r\n    * 1.默认null,不传参,则显示上拉加载的进度布局\r\n    * 2.传参true, 则显示下拉刷新的进度布局\r\n    * 3.传参false,则不显示上拉和下拉的进度 (常用于静默更新列表数据)\r\n    */\nMeScroll.prototype.resetUpScroll = function (isShowLoading) {\n  if (this.optUp && this.optUp.use) {\n    var page = this.optUp.page;\n    this.prePageNum = page.num; // 缓存重置前的页码,加载失败可退回\n    this.prePageTime = page.time; // 缓存重置前的时间,加载失败可退回\n    page.num = this.startNum; // 重置为第一页\n    page.time = null; // 重置时间为空\n    if (!this.isDownScrolling && isShowLoading !== false) {// 如果不是下拉刷新触发的resetUpScroll并且不配置列表静默更新,则显示进度;\n      if (isShowLoading == null) {\n        this.removeEmpty(); // 移除空布局\n        this.showUpScroll(); // 不传参,默认显示上拉加载的进度布局\n      } else {\n        this.showDownScroll(); // 传true,显示下拉刷新的进度布局,不清空列表\n      }\n    }\n    this.isUpAutoLoad = true; // 标记上拉已经自动执行过,避免初始化时多次触发上拉回调\n    this.num = page.num; // 把最新的页数赋值在mescroll上,避免对page的影响\n    this.size = page.size; // 把最新的页码赋值在mescroll上,避免对page的影响\n    this.time = page.time; // 把最新的页码赋值在mescroll上,避免对page的影响\n    this.optUp.callback && this.optUp.callback(this); // 执行上拉回调\n  }\n};\n\n/* 设置page.num的值 */\nMeScroll.prototype.setPageNum = function (num) {\n  this.optUp.page.num = num;\n};\n\n/* 设置page.size的值 */\nMeScroll.prototype.setPageSize = function (size) {\n  this.optUp.page.size = size;\n};\n\n/* 联网回调成功,结束下拉刷新和上拉加载\r\n    * dataSize: 当前页的数据量(必传)\r\n    * totalPage: 总页数(必传)\r\n    * systime: 服务器时间 (可空)\r\n    */\nMeScroll.prototype.endByPage = function (dataSize, totalPage, systime) {\n  var hasNext;\n  if (this.optUp.use && totalPage != null) hasNext = this.optUp.page.num < totalPage; // 是否还有下一页\n  this.endSuccess(dataSize, hasNext, systime);\n};\n\n/* 联网回调成功,结束下拉刷新和上拉加载\r\n    * dataSize: 当前页的数据量(必传)\r\n    * totalSize: 列表所有数据总数量(必传)\r\n    * systime: 服务器时间 (可空)\r\n    */\nMeScroll.prototype.endBySize = function (dataSize, totalSize, systime) {\n  var hasNext;\n  if (this.optUp.use && totalSize != null) {\n    var loadSize = (this.optUp.page.num - 1) * this.optUp.page.size + dataSize; // 已加载的数据总数\n    hasNext = loadSize < totalSize; // 是否还有下一页\n  }\n  this.endSuccess(dataSize, hasNext, systime);\n};\n\n/* 联网回调成功,结束下拉刷新和上拉加载\r\n    * dataSize: 当前页的数据个数(不是所有页的数据总和),用于上拉加载判断是否还有下一页.如果不传,则会判断还有下一页\r\n    * hasNext: 是否还有下一页,布尔类型;用来解决这个小问题:比如列表共有20条数据,每页加载10条,共2页.如果只根据dataSize判断,则需翻到第三页才会知道无更多数据,如果传了hasNext,则翻到第二页即可显示无更多数据.\r\n    * systime: 服务器时间(可空);用来解决这个小问题:当准备翻下一页时,数据库新增了几条记录,此时翻下一页,前面的几条数据会和上一页的重复;这里传入了systime,那么upCallback的page.time就会有值,把page.time传给服务器,让后台过滤新加入的那几条记录\r\n    */\nMeScroll.prototype.endSuccess = function (dataSize, hasNext, systime) {\n  var me = this;\n  // 结束下拉刷新\n  if (me.isDownScrolling) me.endDownScroll();\n\n  // 结束上拉加载\n  if (me.optUp.use) {\n    var isShowNoMore; // 是否已无更多数据\n    if (dataSize != null) {\n      var pageNum = me.optUp.page.num; // 当前页码\n      var pageSize = me.optUp.page.size; // 每页长度\n\n      // 如果是第一页\n      if (pageNum === 1) {\n        if (systime) me.optUp.page.time = systime; // 设置加载列表数据第一页的时间\n      }\n      if (dataSize < pageSize || hasNext === false) {\n        // 返回的数据不满一页时,则说明已无更多数据\n        me.optUp.hasNext = false;\n        if (dataSize === 0 && pageNum === 1) {\n          // 如果第一页无任何数据且配置了空布局\n          isShowNoMore = false;\n          me.showEmpty();\n        } else {\n          // 总列表数少于配置的数量,则不显示无更多数据\n          var allDataSize = (pageNum - 1) * pageSize + dataSize;\n          if (allDataSize < me.optUp.noMoreSize) {\n            isShowNoMore = false;\n          } else {\n            isShowNoMore = true;\n          }\n          me.removeEmpty(); // 移除空布局\n        }\n      } else {\n        this.optUp.page.num += 1;\n        // 还有下一页\n        isShowNoMore = false;\n        me.optUp.hasNext = true;\n        me.removeEmpty(); // 移除空布局\n      }\n    }\n\n    // 隐藏上拉\n    me.endUpScroll(isShowNoMore);\n  }\n};\n\n/* 回调失败,结束下拉刷新和上拉加载 */\nMeScroll.prototype.endErr = function (errDistance) {\n  // 结束下拉,回调失败重置回原来的页码和时间\n  if (this.isDownScrolling) {\n    var page = this.optUp.page;\n    if (page && this.prePageNum) {\n      page.num = this.prePageNum;\n      page.time = this.prePageTime;\n    }\n    this.endDownScroll();\n  }\n  // 结束上拉,回调失败重置回原来的页码\n  if (this.isUpScrolling) {\n    // this.optUp.page.num--;\n    this.endUpScroll(false);\n    // 如果是mescroll-body,则需往回滚一定距离\n    if (this.isScrollBody && errDistance !== 0) {// 不处理0\n      if (!errDistance) errDistance = this.optUp.errDistance; // 不传,则取默认\n      this.scrollTo(this.getScrollTop() - errDistance, 0); // 往上回滚的距离\n    }\n  }\n};\n\n/* 显示空布局 */\nMeScroll.prototype.showEmpty = function () {\n  this.optUp.empty.use && this.optUp.empty.onShow && this.optUp.empty.onShow(true);\n};\n\n/* 移除空布局 */\nMeScroll.prototype.removeEmpty = function () {\n  this.optUp.empty.use && this.optUp.empty.onShow && this.optUp.empty.onShow(false);\n};\n\n/* 显示回到顶部的按钮 */\nMeScroll.prototype.showTopBtn = function () {\n  if (!this.topBtnShow) {\n    this.topBtnShow = true;\n    this.optUp.toTop.onShow && this.optUp.toTop.onShow(true);\n  }\n};\n\n/* 隐藏回到顶部的按钮 */\nMeScroll.prototype.hideTopBtn = function () {\n  if (this.topBtnShow) {\n    this.topBtnShow = false;\n    this.optUp.toTop.onShow && this.optUp.toTop.onShow(false);\n  }\n};\n\n/* 获取滚动条的位置 */\nMeScroll.prototype.getScrollTop = function () {\n  return this.scrollTop || 0;\n};\n\n/* 记录滚动条的位置 */\nMeScroll.prototype.setScrollTop = function (y) {\n  this.scrollTop = y;\n};\n\n/* 滚动到指定位置 */\nMeScroll.prototype.scrollTo = function (y, t) {\n  this.myScrollTo && this.myScrollTo(y, t); // scrollview需自定义回到顶部方法\n};\n\n/* 自定义scrollTo */\nMeScroll.prototype.resetScrollTo = function (myScrollTo) {\n  this.myScrollTo = myScrollTo;\n};\n\n/* 滚动条到底部的距离 */\nMeScroll.prototype.getScrollBottom = function () {\n  return this.getScrollHeight() - this.getClientHeight() - this.getScrollTop();\n};\n\n/* 计步器\r\n    star: 开始值\r\n    end: 结束值\r\n    callback(step,timer): 回调step值,计步器timer,可自行通过window.clearInterval(timer)结束计步器;\r\n    t: 计步时长,传0则直接回调end值;不传则默认300ms\r\n    rate: 周期;不传则默认30ms计步一次\r\n    * */\nMeScroll.prototype.getStep = function (star, end, callback, t, rate) {\n  var diff = end - star; // 差值\n  if (t === 0 || diff === 0) {\n    callback && callback(end);\n    return;\n  }\n  t = t || 300; // 时长 300ms\n  rate = rate || 30; // 周期 30ms\n  var count = t / rate; // 次数\n  var step = diff / count; // 步长\n  var i = 0; // 计数\n  var timer = setInterval(function () {\n    if (i < count - 1) {\n      star += step;\n      callback && callback(star, timer);\n      i++;\n    } else {\n      callback && callback(end, timer); // 最后一次直接设置end,避免计算误差\n      clearInterval(timer);\n    }\n  }, rate);\n};\n\n/* 滚动容器的高度 */\nMeScroll.prototype.getClientHeight = function (isReal) {\n  var h = this.clientHeight || 0;\n  if (h === 0 && isReal !== true) {// 未获取到容器的高度,可临时取body的高度 (可能会有误差)\n    h = this.getBodyHeight();\n  }\n  return h;\n};\nMeScroll.prototype.setClientHeight = function (h) {\n  this.clientHeight = h;\n};\n\n/* 滚动内容的高度 */\nMeScroll.prototype.getScrollHeight = function () {\n  return this.scrollHeight || 0;\n};\nMeScroll.prototype.setScrollHeight = function (h) {\n  this.scrollHeight = h;\n};\n\n/* body的高度 */\nMeScroll.prototype.getBodyHeight = function () {\n  return this.bodyHeight || 0;\n};\nMeScroll.prototype.setBodyHeight = function (h) {\n  this.bodyHeight = h;\n};\n\n/* 阻止浏览器默认滚动事件 */\nMeScroll.prototype.preventDefault = function (e) {\n  // 小程序不支持e.preventDefault\n  // app的bounce只能通过配置pages.json的style.app-plus.bounce为\"none\"来禁止\n  // cancelable:是否可以被禁用; defaultPrevented:是否已经被禁用\n  if (e && e.cancelable && !e.defaultPrevented) e.preventDefault();\n};\n\n/* 是否允许下拉回弹(橡皮筋效果); true或null为允许; false禁止bounce */\nMeScroll.prototype.setBounce = function (isBounce) {\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9jb21tb24vbWVzY3JvbGwtdW5pL21lc2Nyb2xsLXVuaS5qcyJdLCJuYW1lcyI6WyJNZVNjcm9sbCIsIm9wdGlvbnMiLCJpc1Njcm9sbEJvZHkiLCJtZSIsInZlcnNpb24iLCJpc0Rvd25TY3JvbGxpbmciLCJpc1VwU2Nyb2xsaW5nIiwiaGFzRG93bkNhbGxiYWNrIiwiZG93biIsImNhbGxiYWNrIiwiaW5pdERvd25TY3JvbGwiLCJpbml0VXBTY3JvbGwiLCJzZXRUaW1lb3V0Iiwib3B0RG93biIsInVzZSIsIm5hdGl2ZSIsImF1dG8iLCJhdXRvU2hvd0xvYWRpbmciLCJ0cmlnZ2VyRG93blNjcm9sbCIsIm9wdFVwIiwiaXNVcEF1dG9Mb2FkIiwidHJpZ2dlclVwU2Nyb2xsIiwicHJvdG90eXBlIiwiZXh0ZW5kRG93blNjcm9sbCIsImV4dGVuZCIsImlzTG9jayIsIm9mZnNldCIsInN0YXJ0VG9wIiwiZnBzIiwiaW5PZmZzZXRSYXRlIiwib3V0T2Zmc2V0UmF0ZSIsImJvdHRvbU9mZnNldCIsIm1pbkFuZ2xlIiwidGV4dEluT2Zmc2V0IiwidGV4dE91dE9mZnNldCIsInRleHRMb2FkaW5nIiwiYmdDb2xvciIsInRleHRDb2xvciIsImluaXRlZCIsImluT2Zmc2V0Iiwib3V0T2Zmc2V0Iiwib25Nb3ZpbmciLCJiZWZvcmVMb2FkaW5nIiwic2hvd0xvYWRpbmciLCJhZnRlckxvYWRpbmciLCJlbmREb3duU2Nyb2xsIiwibWVzY3JvbGwiLCJyZXNldFVwU2Nyb2xsIiwiZXh0ZW5kVXBTY3JvbGwiLCJpc0JvdGgiLCJpc0JvdW5jZSIsInBhZ2UiLCJudW0iLCJzaXplIiwidGltZSIsIm5vTW9yZVNpemUiLCJ0ZXh0Tm9Nb3JlIiwic2hvd05vTW9yZSIsImhpZGVVcFNjcm9sbCIsImVyckRpc3RhbmNlIiwidG9Ub3AiLCJzcmMiLCJkdXJhdGlvbiIsImJ0bkNsaWNrIiwib25TaG93IiwiekluZGV4IiwibGVmdCIsInJpZ2h0IiwiYm90dG9tIiwic2FmZWFyZWEiLCJ3aWR0aCIsInJhZGl1cyIsImVtcHR5IiwiaWNvbiIsInRpcCIsImJ0blRleHQiLCJmaXhlZCIsInRvcCIsIm9uU2Nyb2xsIiwidXNlck9wdGlvbiIsImRlZmF1bHRPcHRpb24iLCJrZXkiLCJkZWYiLCJoYXNDb2xvciIsImNvbG9yIiwiYyIsInRvTG93ZXJDYXNlIiwiZG93bkhpZ2h0IiwidG91Y2hzdGFydEV2ZW50IiwiZSIsInN0YXJ0UG9pbnQiLCJnZXRQb2ludCIsImdldFNjcm9sbFRvcCIsImxhc3RQb2ludCIsIm1heFRvdWNobW92ZVkiLCJnZXRCb2R5SGVpZ2h0IiwiaW5Ub3VjaGVuZCIsInRvdWNobW92ZUV2ZW50IiwidCIsIkRhdGUiLCJnZXRUaW1lIiwibW92ZVRpbWUiLCJtb3ZlVGltZURpZmYiLCJzY3JvbGxUb3AiLCJjdXJQb2ludCIsIm1vdmVZIiwieSIsImFuZ2xlIiwiZ2V0QW5nbGUiLCJ0b3VjaGVuZEV2ZW50IiwicHJldmVudERlZmF1bHQiLCJkaWZmIiwibW92ZXR5cGUiLCJpc01vdmVEb3duIiwiTWF0aCIsInJvdW5kIiwicmF0ZSIsImlzU2Nyb2xsVXAiLCJ4IiwidG91Y2hlcyIsInBhZ2VYIiwicGFnZVkiLCJjaGFuZ2VkVG91Y2hlcyIsImNsaWVudFgiLCJjbGllbnRZIiwicDEiLCJwMiIsImFicyIsInoiLCJzcXJ0IiwiYXNpbiIsIlBJIiwic3RhcnROdW0iLCJzaG93RG93blNjcm9sbCIsInVuaSIsInN0YXJ0UHVsbERvd25SZWZyZXNoIiwib25QdWxsRG93blJlZnJlc2giLCJzdG9wUHVsbERvd25SZWZyZXNoIiwiZW5kU2Nyb2xsIiwic2V0U2Nyb2xsSGVpZ2h0IiwiZGVsYXkiLCJsb2NrRG93blNjcm9sbCIsImxvY2tVcFNjcm9sbCIsInVwIiwic2V0Qm91bmNlIiwiaGFzTmV4dCIsIm9uUmVhY2hCb3R0b20iLCJvblBhZ2VTY3JvbGwiLCJzZXRTY3JvbGxUb3AiLCJzaG93VG9wQnRuIiwiaGlkZVRvcEJ0biIsInNjcm9sbCIsInNjcm9sbEhlaWdodCIsInByZVNjcm9sbFkiLCJpc0NoZWNrIiwiY2FuVXAiLCJnZXRTY3JvbGxCb3R0b20iLCJzaG93VXBTY3JvbGwiLCJlbmRVcFNjcm9sbCIsImlzU2hvd05vTW9yZSIsImlzU2hvd0xvYWRpbmciLCJwcmVQYWdlTnVtIiwicHJlUGFnZVRpbWUiLCJyZW1vdmVFbXB0eSIsInNldFBhZ2VOdW0iLCJzZXRQYWdlU2l6ZSIsImVuZEJ5UGFnZSIsImRhdGFTaXplIiwidG90YWxQYWdlIiwic3lzdGltZSIsImVuZFN1Y2Nlc3MiLCJlbmRCeVNpemUiLCJ0b3RhbFNpemUiLCJsb2FkU2l6ZSIsInBhZ2VOdW0iLCJwYWdlU2l6ZSIsInNob3dFbXB0eSIsImFsbERhdGFTaXplIiwiZW5kRXJyIiwic2Nyb2xsVG8iLCJ0b3BCdG5TaG93IiwibXlTY3JvbGxUbyIsInJlc2V0U2Nyb2xsVG8iLCJnZXRTY3JvbGxIZWlnaHQiLCJnZXRDbGllbnRIZWlnaHQiLCJnZXRTdGVwIiwic3RhciIsImVuZCIsImNvdW50Iiwic3RlcCIsImkiLCJ0aW1lciIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImlzUmVhbCIsImgiLCJjbGllbnRIZWlnaHQiLCJzZXRDbGllbnRIZWlnaHQiLCJib2R5SGVpZ2h0Iiwic2V0Qm9keUhlaWdodCIsImNhbmNlbGFibGUiLCJkZWZhdWx0UHJldmVudGVkIl0sIm1hcHBpbmdzIjoiMEZBQUE7Ozs7OztBQU1lLFNBQVNBLFFBQVQsQ0FBa0JDLE9BQWxCLEVBQTJCQyxZQUEzQixFQUF5QztBQUN2RCxNQUFJQyxFQUFFLEdBQUcsSUFBVDtBQUNBQSxJQUFFLENBQUNDLE9BQUgsR0FBYSxPQUFiLENBRnVELENBRWpDO0FBQ3RCRCxJQUFFLENBQUNGLE9BQUgsR0FBYUEsT0FBTyxJQUFJLEVBQXhCLENBSHVELENBRzNCO0FBQzVCRSxJQUFFLENBQUNELFlBQUgsR0FBa0JBLFlBQVksSUFBSSxLQUFsQyxDQUp1RCxDQUlkOztBQUV6Q0MsSUFBRSxDQUFDRSxlQUFI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QThDaEgsQ0FBQyxDQUFDcUIsY0FBRjtBQUM5QyxDQUxEOztBQU9BO0FBQ0E5RyxRQUFRLENBQUNzQixTQUFULENBQW1CMEgsU0FBbkIsR0FBK0IsVUFBUzlGLFFBQVQsRUFBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFFakQsQ0FyRUQiLCJmaWxlIjoiNzAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBtZXNjcm9sbFxyXG4gKiB2ZXJzaW9uIDEuMi44XHJcbiAqIDIwMjAtMDYtMjggd2VuanVcclxuICogaHR0cDovL3d3dy5tZXNjcm9sbC5jb21cclxuICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZVNjcm9sbChvcHRpb25zLCBpc1Njcm9sbEJvZHkpIHtcclxuXHRsZXQgbWUgPSB0aGlzO1xyXG5cdG1lLnZlcnNpb24gPSAnMS4yLjgnOyAvLyBtZXNjcm9sbOeJiOacrOWPt1xyXG5cdG1lLm9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyDphY3nva5cclxuXHRtZS5pc1Njcm9sbEJvZHkgPSBpc1Njcm9sbEJvZHkgfHwgZmFsc2U7IC8vIOa7muWKqOWMuuWfn+aYr+WQpuS4uuWOn+eUn+mhtemdoua7muWKqDsg6buY6K6k5Li6c2Nyb2xsLXZpZXdcclxuXHJcblx0bWUuaXNEb3duU2Nyb2xsaW5nID0gZmFsc2U7IC8vIOaYr+WQpuWcqOaJp+ihjOS4i+aLieWIt+aWsOeahOWbnuiwg1xyXG5cdG1lLmlzVXBTY3JvbGxpbmcgPSBmYWxzZTsgLy8g5piv5ZCm5Zyo5omn6KGM5LiK5ouJ5Yqg6L2955qE5Zue6LCDXHJcblx0bGV0IGhhc0Rvd25DYWxsYmFjayA9IG1lLm9wdGlvbnMuZG93biAmJiBtZS5vcHRpb25zLmRvd24uY2FsbGJhY2s7IC8vIOaYr+WQpumFjee9ruS6hmRvd27nmoRjYWxsYmFja1xyXG5cclxuXHQvLyDliJ3lp4vljJbkuIvmi4nliLfmlrBcclxuXHRtZS5pbml0RG93blNjcm9sbCgpO1xyXG5cdC8vIOWIneWni+WMluS4iuaLieWKoOi9vSzliJnliJ3lp4vljJZcclxuXHRtZS5pbml0VXBTY3JvbGwoKTtcclxuXHJcblx0Ly8g6Ieq5Yqo5Yqg6L29XHJcblx0c2V0VGltZW91dChmdW5jdGlvbigpIHsgLy8g5b6F5Li757q/56iL5omn6KGM5a6M5q+V5YaN5omn6KGMLOmBv+WFjW5ldyBNZVNjcm9sbOacquWIneWni+WMlizlnKjlm57osIPojrflj5bkuI3liLBtZXNjcm9sbOeahOWunuS+i1xyXG5cdFx0Ly8g6Ieq5Yqo6Kem5Y+R5LiL5ouJ5Yi35pawICjlj6rmnInphY3nva7kuoZkb3du55qEY2FsbGJhY2vmiY3oh6rliqjop6blj5HkuIvmi4nliLfmlrApXHJcblx0XHRpZiAoKG1lLm9wdERvd24udXNlIHx8IG1lLm9wdERvd24ubmF0aXZlKSAmJiBtZS5vcHREb3duLmF1dG8gJiYgaGFzRG93bkNhbGxiYWNrKSB7XHJcblx0XHRcdGlmIChtZS5vcHREb3duLmF1dG9TaG93TG9hZGluZykge1xyXG5cdFx0XHRcdG1lLnRyaWdnZXJEb3duU2Nyb2xsKCk7IC8vIOaYvuekuuS4i+aLiei/m+W6pizmiafooYzkuIvmi4nlm57osINcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRtZS5vcHREb3duLmNhbGxiYWNrICYmIG1lLm9wdERvd24uY2FsbGJhY2sobWUpOyAvLyDkuI3mmL7npLrkuIvmi4nov5vluqYs55u05o6l5omn6KGM5LiL5ouJ5Zue6LCDXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdC8vIOiHquWKqOinpuWPkeS4iuaLieWKoOi9vVxyXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpeyAvLyDlu7bml7bnoa7kv53lhYjmiafooYxkb3du55qEY2FsbGJhY2ss5YaN5omn6KGMdXDnmoRjYWxsYmFjayzlm6DkuLrpg6jliIblsI/nqIvluo9lbWl05piv5byC5q2lLOS8muWvvOiHtGlzVXBBdXRvTG9hZOWIpOaWreacieivr1xyXG5cdFx0XHRtZS5vcHRVcC51c2UgJiYgbWUub3B0VXAuYXV0byAmJiAhbWUuaXNVcEF1dG9Mb2FkICYmIG1lLnRyaWdnZXJVcFNjcm9sbCgpO1xyXG5cdFx0fSwxMDApXHJcblx0fSwgMzApOyAvLyDpnIDorqltZS5vcHREb3duLmluaXRlZOWSjG1lLm9wdFVwLmluaXRlZOWFiOaJp+ihjFxyXG59XHJcblxyXG4vKiDphY3nva7lj4LmlbA65LiL5ouJ5Yi35pawICovXHJcbk1lU2Nyb2xsLnByb3RvdHlwZS5leHRlbmREb3duU2Nyb2xsID0gZnVuY3Rpb24ob3B0RG93bikge1xyXG5cdC8vIOS4i+aLieWIt+aWsOeahOmFjee9rlxyXG5cdE1lU2Nyb2xsLmV4dGVuZChvcHREb3duLCB7XHJcblx0XHR1c2U6IHRydWUsIC8vIOaYr+WQpuWQr+eUqOS4i+aLieWIt+aWsDsg6buY6K6kdHJ1ZVxyXG5cdFx0YXV0bzogdHJ1ZSwgLy8g5piv5ZCm5Zyo5Yid5aeL5YyW5a6M5q+V5LmL5ZCO6Ieq5Yqo5omn6KGM5LiL5ouJ5Yi35paw55qE5Zue6LCDOyDpu5jorqR0cnVlXHJcblx0XHRuYXRpdmU6IGZhbHNlLCAvLyDmmK/lkKbkvb/nlKjns7vnu5/oh6rluKbnmoTkuIvmi4nliLfmlrA7IOm7mOiupGZhbHNlOyDku4VtZXNjcm9sbC1ib2R555Sf5pWIICjlgLzkuLp0cnVl5pe2LOi/mOmcgOWcqHBhZ2Vz6YWN572uZW5hYmxlUHVsbERvd25SZWZyZXNoOnRydWU76K+m6K+35Y+C6ICDbWVzY3JvbGwtbmF0aXZl55qE5qGI5L6LKVxyXG5cdFx0YXV0b1Nob3dMb2FkaW5nOiBmYWxzZSwgLy8g5aaC5p6c6K6+572uYXV0bz10cnVlKOWcqOWIneWni+WMluWujOavleS5i+WQjuiHquWKqOaJp+ihjOS4i+aLieWIt+aWsOeahOWbnuiwgyks6YKj5LmI5piv5ZCm5pi+56S65LiL5ouJ5Yi35paw55qE6L+b5bqmOyDpu5jorqRmYWxzZVxyXG5cdFx0aXNMb2NrOiBmYWxzZSwgLy8g5piv5ZCm6ZSB5a6a5LiL5ouJ5Yi35pawLOm7mOiupGZhbHNlO1xyXG5cdFx0b2Zmc2V0OiA4MCwgLy8g5Zyo5YiX6KGo6aG26YOoLOS4i+aLieWkp+S6jjgwcHgs5p2+5omL5Y2z5Y+v6Kem5Y+R5LiL5ouJ5Yi35paw55qE5Zue6LCDXHJcblx0XHRzdGFydFRvcDogMTAwLCAvLyBzY3JvbGwtdmlld+a7muWKqOWIsOmhtumDqOaXtizmraTml7bnmoRzY3JvbGwtdG9w5LiN5LiA5a6a5Li6MCwg5q2k5YC855So5LqO5o6n5Yi25pyA5aSn55qE6K+v5beuXHJcblx0XHRmcHM6IDgwLCAvLyDkuIvmi4noioLmtYEgKOWAvOi2iuWkp+avj+enkuWIt+aWsOmikeeOh+i2iumrmClcclxuXHRcdGluT2Zmc2V0UmF0ZTogMSwgLy8g5Zyo5YiX6KGo6aG26YOoLOS4i+aLieeahOi3neemu+Wwj+S6jm9mZnNldOaXtizmlLnlj5jkuIvmi4nljLrln5/pq5jluqbmr5Tkvos75YC85bCP5LqOMeS4lOi2iuaOpei/kTAs6auY5bqm5Y+Y5YyW6LaK5bCPLOihqOeOsOS4uui2iuW+gOS4i+i2iumavuaLiVxyXG5cdFx0b3V0T2Zmc2V0UmF0ZTogMC4yLCAvLyDlnKjliJfooajpobbpg6gs5LiL5ouJ55qE6Led56a75aSn5LqOb2Zmc2V05pe2LOaUueWPmOS4i+aLieWMuuWfn+mrmOW6puavlOS+izvlgLzlsI/kuo4x5LiU6LaK5o6l6L+RMCzpq5jluqblj5jljJbotorlsI8s6KGo546w5Li66LaK5b6A5LiL6LaK6Zq+5ouJXHJcblx0XHRib3R0b21PZmZzZXQ6IDIwLCAvLyDlvZPmiYvmjId0b3VjaG1vdmXkvY3nva7lnKjot53nprtib2R55bqV6YOoMjBweOiMg+WbtOWGheeahOaXtuWAmee7k+adn+S4iuaLieWIt+aWsCzpgb/lhY1XZWJ2aWV35bWM5aWX5a+86Ie0dG91Y2hlbmTkuovku7bkuI3miafooYxcclxuXHRcdG1pbkFuZ2xlOiA0NSwgLy8g5ZCR5LiL5ruR5Yqo5pyA5bCR5YGP56e755qE6KeS5bqmLOWPluWAvOWMuumXtCAgWzAsOTBdO+m7mOiupDQ15bqmLOWNs+WQkeS4i+a7keWKqOeahOinkuW6puWkp+S6jjQ15bqm5YiZ6Kem5Y+R5LiL5ouJO+iAjOWwj+S6jjQ15bqmLOWwhuS4jeinpuWPkeS4i+aLiSzpgb/lhY3kuI7lt6blj7Pmu5HliqjnmoTova7mkq3nrYnnu4Tku7blhrLnqoE7XHJcblx0XHR0ZXh0SW5PZmZzZXQ6ICfkuIvmi4nliLfmlrAnLCAvLyDkuIvmi4nnmoTot53nprvlnKhvZmZzZXTojIPlm7TlhoXnmoTmj5DnpLrmlofmnKxcclxuXHRcdHRleHRPdXRPZmZzZXQ6ICfph4rmlL7mm7TmlrAnLCAvLyDkuIvmi4nnmoTot53nprvlpKfkuo5vZmZzZXTojIPlm7TnmoTmj5DnpLrmlofmnKxcclxuXHRcdHRleHRMb2FkaW5nOiAn5Yqg6L295LitIC4uLicsIC8vIOWKoOi9veS4reeahOaPkOekuuaWh+acrFxyXG5cdFx0YmdDb2xvcjogXCJ0cmFuc3BhcmVudFwiLCAvLyDog4zmma/popzoibIgKOW7uuiuruWcqHBhZ2VzLmpzb27kuK3lho3orr7nva7kuIDkuItiYWNrZ3JvdW5kQ29sb3JUb3ApXHJcblx0XHR0ZXh0Q29sb3I6IFwiZ3JheVwiLCAvLyDmlofmnKzpopzoibIgKOW9k2JnQ29sb3LphY3nva7kuobpopzoibIs6ICMdGV4dENvbG9y5pyq6YWN572u5pe2LOWImXRleHRDb2xvcuS8mum7mOiupOS4uueZveiJsilcclxuXHRcdGluaXRlZDogbnVsbCwgLy8g5LiL5ouJ5Yi35paw5Yid5aeL5YyW5a6M5q+V55qE5Zue6LCDXHJcblx0XHRpbk9mZnNldDogbnVsbCwgLy8g5LiL5ouJ55qE6Led56a76L+b5YWlb2Zmc2V06IyD5Zu05YaF6YKj5LiA5Yi755qE5Zue6LCDXHJcblx0XHRvdXRPZmZzZXQ6IG51bGwsIC8vIOS4i+aLieeahOi3neemu+Wkp+S6jm9mZnNldOmCo+S4gOWIu+eahOWbnuiwg1xyXG5cdFx0b25Nb3Zpbmc6IG51bGwsIC8vIOS4i+aLiei/h+eoi+S4reeahOWbnuiwgyzmu5Hliqjov4fnqIvkuIDnm7TlnKjmiafooYw7IHJhdGXkuIvmi4nljLrln5/lvZPliY3pq5jluqbkuI7mjIflrprot53nprvnmoTmr5TlgLwoaW5PZmZzZXQ6IHJhdGU8MTsgb3V0T2Zmc2V0OiByYXRlPj0xKTsgZG93bkhpZ2h05b2T5YmN5LiL5ouJ5Yy65Z+f55qE6auY5bqmXHJcblx0XHRiZWZvcmVMb2FkaW5nOiBudWxsLCAvLyDlh4blpIfop6blj5HkuIvmi4nliLfmlrDnmoTlm57osIM6IOWmguaenHJldHVybiB0cnVlLOWwhuS4jeinpuWPkXNob3dMb2FkaW5n5ZKMY2FsbGJhY2vlm57osIM7IOW4uOeUqOadpeWujOWFqOiHquWumuS5ieS4i+aLieWIt+aWsCwg5Y+C6ICD5qGI5L6L44CQ5reY5a6dIHY2LjguMOOAkVxyXG5cdFx0c2hvd0xvYWRpbmc6IG51bGwsIC8vIOaYvuekuuS4i+aLieWIt+aWsOi/m+W6pueahOWbnuiwg1xyXG5cdFx0YWZ0ZXJMb2FkaW5nOiBudWxsLCAvLyDlh4blpIfnu5PmnZ/kuIvmi4nnmoTlm57osIMuIOi/lOWbnue7k+adn+S4i+aLieeahOW7tuaXtuaJp+ihjOaXtumXtCzpu5jorqQwbXM7IOW4uOeUqOS6jue7k+adn+S4i+aLieS5i+WJjeWGjeaYvuekuuWPpuWkluS4gOWwj+auteWKqOeUuyzmiY3ljrvpmpDol4/kuIvmi4nliLfmlrDnmoTlnLrmma8sIOWPguiAg+ahiOS+i+OAkGRvdEp1bXDjgJFcclxuXHRcdGVuZERvd25TY3JvbGw6IG51bGwsIC8vIOe7k+adn+S4i+aLieWIt+aWsOeahOWbnuiwg1xyXG5cdFx0Y2FsbGJhY2s6IGZ1bmN0aW9uKG1lc2Nyb2xsKSB7XHJcblx0XHRcdC8vIOS4i+aLieWIt+aWsOeahOWbnuiwgzvpu5jorqTph43nva7kuIrmi4nliqDovb3liJfooajkuLrnrKzkuIDpobVcclxuXHRcdFx0bWVzY3JvbGwucmVzZXRVcFNjcm9sbCgpO1xyXG5cdFx0fVxyXG5cdH0pXHJcbn1cclxuXHJcbi8qIOmFjee9ruWPguaVsDrkuIrmi4nliqDovb0gKi9cclxuTWVTY3JvbGwucHJvdG90eXBlLmV4dGVuZFVwU2Nyb2xsID0gZnVuY3Rpb24ob3B0VXApIHtcclxuXHQvLyDkuIrmi4nliqDovb3nmoTphY3nva5cclxuXHRNZVNjcm9sbC5leHRlbmQob3B0VXAsIHtcclxuXHRcdHVzZTogdHJ1ZSwgLy8g5piv5ZCm5ZCv55So5LiK5ouJ5Yqg6L29OyDpu5jorqR0cnVlXHJcblx0XHRhdXRvOiB0cnVlLCAvLyDmmK/lkKblnKjliJ3lp4vljJblrozmr5XkuYvlkI7oh6rliqjmiafooYzkuIrmi4nliqDovb3nmoTlm57osIM7IOm7mOiupHRydWVcclxuXHRcdGlzTG9jazogZmFsc2UsIC8vIOaYr+WQpumUgeWumuS4iuaLieWKoOi9vSzpu5jorqRmYWxzZTtcclxuXHRcdGlzQm90aDogdHJ1ZSwgLy8g5LiK5ouJ5Yqg6L295pe2LOWmguaenOa7keWKqOWIsOWIl+ihqOmhtumDqOaYr+WQpuWPr+S7peWQjOaXtuinpuWPkeS4i+aLieWIt+aWsDvpu5jorqR0cnVlLOS4pOiAheWPr+WQjOaXtuinpuWPkTtcclxuXHRcdGlzQm91bmNlOiBmYWxzZSwgLy8g6buY6K6k56aB5q2i5qmh55qu562L55qE5Zue5by55pWI5p6cLCDlv4Xor7vkuovpobk6IGh0dHA6Ly93d3cubWVzY3JvbGwuY29tL3FhLmh0bWw/dj0xOTA3MjUjcTI1XHJcblx0XHRjYWxsYmFjazogbnVsbCwgLy8g5LiK5ouJ5Yqg6L2955qE5Zue6LCDO2Z1bmN0aW9uKHBhZ2UsbWVzY3JvbGwpeyB9XHJcblx0XHRwYWdlOiB7XHJcblx0XHRcdG51bTogMSwgLy8g5b2T5YmN6aG156CBLOm7mOiupDAs5Zue6LCD5LmL5YmN5Lya5YqgMSzljbNjYWxsYmFjayhwYWdlKeS8muS7jjHlvIDlp4tcclxuXHRcdFx0c2l6ZTogMTAsIC8vIOavj+mhteaVsOaNrueahOaVsOmHj1xyXG5cdFx0XHR0aW1lOiBudWxsIC8vIOWKoOi9veesrOS4gOmhteaVsOaNruacjeWKoeWZqOi/lOWbnueahOaXtumXtDsg6Ziy5q2i55So5oi357+76aG15pe2LOWQjuWPsOaWsOWinuS6huaVsOaNruS7juiAjOWvvOiHtOS4i+S4gOmhteaVsOaNrumHjeWkjTtcclxuXHRcdH0sXHJcblx0XHRub01vcmVTaXplOiA1LCAvLyDlpoLmnpzliJfooajlt7Lml6DmlbDmja4s5Y+v6K6+572u5YiX6KGo55qE5oC75pWw6YeP6KaB5aSn5LqO562J5LqONeadoeaJjeaYvuekuuaXoOabtOWkmuaVsOaNrjvpgb/lhY3liJfooajmlbDmja7ov4flsJEo5q+U5aaC5Y+q5pyJ5LiA5p2h5pWw5o2uKSzmmL7npLrml6Dmm7TlpJrmlbDmja7kvJrkuI3lpb3nnItcclxuXHRcdG9mZnNldDogODAsIC8vIOi3neW6lemDqOWkmui/nOaXtizop6blj5F1cENhbGxiYWNrXHJcblx0XHR0ZXh0TG9hZGluZzogJ+WKoOi9veS4rSAuLi4nLCAvLyDliqDovb3kuK3nmoTmj5DnpLrmlofmnKxcclxuXHRcdHRleHROb01vcmU6ICctLSBFTkQgLS0nLCAvLyDmsqHmnInmm7TlpJrmlbDmja7nmoTmj5DnpLrmlofmnKxcclxuXHRcdGJnQ29sb3I6IFwidHJhbnNwYXJlbnRcIiwgLy8g6IOM5pmv6aKc6ImyICjlu7rorq7lnKhwYWdlcy5qc29u5Lit5YaN6K6+572u5LiA5LiLYmFja2dyb3VuZENvbG9yQm90dG9tKVxyXG5cdFx0dGV4dENvbG9yOiBcImdyYXlcIiwgLy8g5paH5pys6aKc6ImyICjlvZNiZ0NvbG9y6YWN572u5LqG6aKc6ImyLOiAjHRleHRDb2xvcuacqumFjee9ruaXtizliJl0ZXh0Q29sb3LkvJrpu5jorqTkuLrnmb3oibIpXHJcblx0XHRpbml0ZWQ6IG51bGwsIC8vIOWIneWni+WMluWujOavleeahOWbnuiwg1xyXG5cdFx0c2hvd0xvYWRpbmc6IG51bGwsIC8vIOaYvuekuuWKoOi9veS4reeahOWbnuiwg1xyXG5cdFx0c2hvd05vTW9yZTogbnVsbCwgLy8g5pi+56S65peg5pu05aSa5pWw5o2u55qE5Zue6LCDXHJcblx0XHRoaWRlVXBTY3JvbGw6IG51bGwsIC8vIOmakOiXj+S4iuaLieWKoOi9veeahOWbnuiwg1xyXG5cdFx0ZXJyRGlzdGFuY2U6IDYwLCAvLyBlbmRFcnLnmoTml7blgJnpnIDlvoDkuIrmu5HliqjkuIDmrrXot53nprss5L2/5YW25b6A5LiL5ruR5Yqo5pe25YaN5qyh6Kem5Y+Rb25SZWFjaEJvdHRvbSzku4VtZXNjcm9sbC1ib2R555Sf5pWIXHJcblx0XHR0b1RvcDoge1xyXG5cdFx0XHQvLyDlm57liLDpobbpg6jmjInpkq4s6ZyA6YWN572uc3Jj5omN5pi+56S6XHJcblx0XHRcdHNyYzogbnVsbCwgLy8g5Zu+54mH6Lev5b6ELOm7mOiupG51bGwgKOe7neWvuei3r+W+hOaIlue9kee7nOWbvilcclxuXHRcdFx0b2Zmc2V0OiAxMDAwLCAvLyDliJfooajmu5rliqjlpJrlsJHot53nprvmiY3mmL7npLrlm57liLDpobbpg6jmjInpkq4s6buY6K6kMTAwMFxyXG5cdFx0XHRkdXJhdGlvbjogMzAwLCAvLyDlm57liLDpobbpg6jnmoTliqjnlLvml7bplb8s6buY6K6kMzAwbXMgKOW9k+WAvOS4ujDmiJYzMDDliJnkvb/nlKjns7vnu5/oh6rluKblm57liLDpobbpg6gs5pu05rWB55WFOyDlhbbku5blgLzliJnpgJrov4dzdGVw5qih5oufLOmDqOWIhuacuuWei+WPr+iDveS4jeWkn+a1geeVhSzmiYDku6XpnZ7nibnmrormg4XlhrXkuI3lu7rorq7kv67mlLnmraTpobkpXHJcblx0XHRcdGJ0bkNsaWNrOiBudWxsLCAvLyDngrnlh7vmjInpkq7nmoTlm57osINcclxuXHRcdFx0b25TaG93OiBudWxsLCAvLyDmmK/lkKbmmL7npLrnmoTlm57osINcclxuXHRcdFx0ekluZGV4OiA5OTkwLCAvLyBmaXhlZOWumuS9jXotaW5kZXjlgLxcclxuXHRcdFx0bGVmdDogbnVsbCwgLy8g5Yiw5bem6L6555qE6Led56a7LCDpu5jorqRudWxsLiDmraTpobnmnInlgLzml7YscmlnaHTkuI3nlJ/mlYguICjmlK/mjIEyMCwgXCIyMHJweFwiLCBcIjIwcHhcIiwgXCIyMCVcIuagvOW8j+eahOWAvCwg5YW25Lit57qv5pWw5a2X5YiZ6buY6K6k5Y2V5L2NcnB4KVxyXG5cdFx0XHRyaWdodDogMjAsIC8vIOWIsOWPs+i+ueeahOi3neemuywg6buY6K6kMjAgKOaUr+aMgTIwLCBcIjIwcnB4XCIsIFwiMjBweFwiLCBcIjIwJVwi5qC85byP55qE5YC8LCDlhbbkuK3nuq/mlbDlrZfliJnpu5jorqTljZXkvY1ycHgpXHJcblx0XHRcdGJvdHRvbTogMTIwLCAvLyDliLDlupXpg6jnmoTot53nprssIOm7mOiupDEyMCAo5pSv5oyBMjAsIFwiMjBycHhcIiwgXCIyMHB4XCIsIFwiMjAlXCLmoLzlvI/nmoTlgLwsIOWFtuS4ree6r+aVsOWtl+WImem7mOiupOWNleS9jXJweClcclxuXHRcdFx0c2FmZWFyZWE6IGZhbHNlLCAvLyBib3R0b23nmoTlgY/np7vph4/mmK/lkKbliqDkuIrlupXpg6jlronlhajljLrnmoTot53nprssIOm7mOiupGZhbHNlLCDpnIDopoHpgILphY1pUGhvbmVY5pe25L2/55SoICjlhbfkvZPnmoTnlYzpnaLlpoLmnpzkuI3phY3nva7mraTpobks5YiZ5Y+W5pysdnVl55qEc2FmZWFyZWHlgLwpXHJcblx0XHRcdHdpZHRoOiA3MiwgLy8g5Zue5Yiw6aG26YOo5Zu+5qCH55qE5a695bqmLCDpu5jorqQ3MiAo5pSv5oyBMjAsIFwiMjBycHhcIiwgXCIyMHB4XCIsIFwiMjAlXCLmoLzlvI/nmoTlgLwsIOWFtuS4ree6r+aVsOWtl+WImem7mOiupOWNleS9jXJweClcclxuXHRcdFx0cmFkaXVzOiBcIjUwJVwiIC8vIOWchuinkiwg6buY6K6kXCI1MCVcIiAo5pSv5oyBMjAsIFwiMjBycHhcIiwgXCIyMHB4XCIsIFwiMjAlXCLmoLzlvI/nmoTlgLwsIOWFtuS4ree6r+aVsOWtl+WImem7mOiupOWNleS9jXJweClcclxuXHRcdH0sXHJcblx0XHRlbXB0eToge1xyXG5cdFx0XHR1c2U6IHRydWUsIC8vIOaYr+WQpuaYvuekuuepuuW4g+WxgFxyXG5cdFx0XHRpY29uOiBudWxsLCAvLyDlm77moIfot6/lvoRcclxuXHRcdFx0dGlwOiAnfiDmmoLml6Dnm7jlhbPmlbDmja4gficsIC8vIOaPkOekulxyXG5cdFx0XHRidG5UZXh0OiAnJywgLy8g5oyJ6ZKuXHJcblx0XHRcdGJ0bkNsaWNrOiBudWxsLCAvLyDngrnlh7vmjInpkq7nmoTlm57osINcclxuXHRcdFx0b25TaG93OiBudWxsLCAvLyDmmK/lkKbmmL7npLrnmoTlm57osINcclxuXHRcdFx0Zml4ZWQ6IGZhbHNlLCAvLyDmmK/lkKbkvb/nlKhmaXhlZOWumuS9jSzpu5jorqRmYWxzZTsg6YWN572uZml4ZWTkuLp0cnVlLOS7peS4i+eahHRvcOWSjHpJbmRleOaJjeeUn+aViCAodHJhbnNmb3Jt5Lya5L2/Zml4ZWTlpLHmlYgs5pyA57uI5Lya6ZmN57qn5Li6YWJzb2x1dGUpXHJcblx0XHRcdHRvcDogXCIxMDBycHhcIiwgLy8gZml4ZWTlrprkvY3nmoR0b3DlgLwgKOWujOaVtOeahOWNleS9jeWAvCzlpoIgXCIxMCVcIjsgXCIxMDBycHhcIilcclxuXHRcdFx0ekluZGV4OiA5OSAvLyBmaXhlZOWumuS9jXotaW5kZXjlgLxcclxuXHRcdH0sXHJcblx0XHRvblNjcm9sbDogZmFsc2UgLy8g5piv5ZCm55uR5ZCs5rua5Yqo5LqL5Lu2XHJcblx0fSlcclxufVxyXG5cclxuLyog6YWN572u5Y+C5pWwICovXHJcbk1lU2Nyb2xsLmV4dGVuZCA9IGZ1bmN0aW9uKHVzZXJPcHRpb24sIGRlZmF1bHRPcHRpb24pIHtcclxuXHRpZiAoIXVzZXJPcHRpb24pIHJldHVybiBkZWZhdWx0T3B0aW9uO1xyXG5cdGZvciAobGV0IGtleSBpbiBkZWZhdWx0T3B0aW9uKSB7XHJcblx0XHRpZiAodXNlck9wdGlvbltrZXldID09IG51bGwpIHtcclxuXHRcdFx0bGV0IGRlZiA9IGRlZmF1bHRPcHRpb25ba2V5XTtcclxuXHRcdFx0aWYgKGRlZiAhPSBudWxsICYmIHR5cGVvZiBkZWYgPT09ICdvYmplY3QnKSB7XHJcblx0XHRcdFx0dXNlck9wdGlvbltrZXldID0gTWVTY3JvbGwuZXh0ZW5kKHt9LCBkZWYpOyAvLyDmt7HluqbljLnphY1cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR1c2VyT3B0aW9uW2tleV0gPSBkZWY7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSBpZiAodHlwZW9mIHVzZXJPcHRpb25ba2V5XSA9PT0gJ29iamVjdCcpIHtcclxuXHRcdFx0TWVTY3JvbGwuZXh0ZW5kKHVzZXJPcHRpb25ba2V5XSwgZGVmYXVsdE9wdGlvbltrZXldKTsgLy8g5rex5bqm5Yy56YWNXHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiB1c2VyT3B0aW9uO1xyXG59XHJcblxyXG4vKiDnroDljZXliKTmlq3mmK/lkKbphY3nva7kuobpopzoibIgKOmdnumAj+aYjizpnZ7nmb3oibIpICovXHJcbk1lU2Nyb2xsLnByb3RvdHlwZS5oYXNDb2xvciA9IGZ1bmN0aW9uKGNvbG9yKSB7XHJcblx0aWYoIWNvbG9yKSByZXR1cm4gZmFsc2U7XHJcblx0bGV0IGMgPSBjb2xvci50b0xvd2VyQ2FzZSgpO1xyXG5cdHJldHVybiBjICE9IFwiI2ZmZlwiICYmIGMgIT0gXCIjZmZmZmZmXCIgJiYgYyAhPSBcInRyYW5zcGFyZW50XCIgJiYgYyAhPSBcIndoaXRlXCJcclxufVxyXG5cclxuLyogLS0tLS0tLeWIneWni+WMluS4i+aLieWIt+aWsC0tLS0tLS0gKi9cclxuTWVTY3JvbGwucHJvdG90eXBlLmluaXREb3duU2Nyb2xsID0gZnVuY3Rpb24oKSB7XHJcblx0bGV0IG1lID0gdGhpcztcclxuXHQvLyDphY3nva7lj4LmlbBcclxuXHRtZS5vcHREb3duID0gbWUub3B0aW9ucy5kb3duIHx8IHt9O1xyXG5cdGlmKCFtZS5vcHREb3duLnRleHRDb2xvciAmJiBtZS5oYXNDb2xvcihtZS5vcHREb3duLmJnQ29sb3IpKSBtZS5vcHREb3duLnRleHRDb2xvciA9IFwiI2ZmZlwiOyAvLyDlvZNiZ0NvbG9y5pyJ5YC85LiUdGV4dENvbG9y5pyq6K6+572uLOWImXRleHRDb2xvcum7mOiupOeZveiJslxyXG5cdG1lLmV4dGVuZERvd25TY3JvbGwobWUub3B0RG93bik7XHJcblx0Ly8g5aaC5p6c5pivbWVzY3JvbGwtYm9keeS4lOmFjee9ruS6hm5hdGl2ZSzliJnnpoHmraLoh6rlrprkuYnnmoTkuIvmi4nliLfmlrBcclxuXHRpZihtZS5pc1Njcm9sbEJvZHkgJiYgbWUub3B0RG93bi5uYXRpdmUpe1xyXG5cdFx0bWUub3B0RG93bi51c2UgPSBmYWxzZVxyXG5cdH1lbHNle1xyXG5cdFx0bWUub3B0RG93bi5uYXRpdmUgPSBmYWxzZSAvLyDku4VtZXNjcm9sbC1ib2R55pSv5oyBLG1lc2Nyb2xsLXVuaeS4jeaUr+aMgVxyXG5cdH1cclxuXHRcclxuXHRtZS5kb3duSGlnaHQgPSAwOyAvLyDkuIvmi4nljLrln5/nmoTpq5jluqZcclxuXHJcblx0Ly8g5Zyo6aG16Z2i5Lit5Yqg5YWl5LiL5ouJ5biD5bGAXHJcblx0aWYgKG1lLm9wdERvd24udXNlICYmIG1lLm9wdERvd24uaW5pdGVkKSB7XHJcblx0XHQvLyDliJ3lp4vljJblrozmr5XnmoTlm57osINcclxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IC8vIOW+heS4u+e6v+eoi+aJp+ihjOWujOavleWGjeaJp+ihjCzpgb/lhY1uZXcgTWVTY3JvbGzmnKrliJ3lp4vljJYs5Zyo5Zue6LCD6I635Y+W5LiN5YiwbWVzY3JvbGznmoTlrp7kvotcclxuXHRcdFx0bWUub3B0RG93bi5pbml0ZWQobWUpO1xyXG5cdFx0fSwgMClcclxuXHR9XHJcbn1cclxuXHJcbi8qIOWIl+ihqHRvdWNoc3RhcnTkuovku7YgKi9cclxuTWVTY3JvbGwucHJvdG90eXBlLnRvdWNoc3RhcnRFdmVudCA9IGZ1bmN0aW9uKGUpIHtcclxuXHRpZiAoIXRoaXMub3B0RG93bi51c2UpIHJldHVybjtcclxuXHJcblx0dGhpcy5zdGFydFBvaW50ID0gdGhpcy5nZXRQb2ludChlKTsgLy8g6K6w5b2V6LW354K5XHJcblx0dGhpcy5zdGFydFRvcCA9IHRoaXMuZ2V0U2Nyb2xsVG9wKCk7IC8vIOiusOW9leatpOaXtueahOa7muWKqOadoeS9jee9rlxyXG5cdHRoaXMubGFzdFBvaW50ID0gdGhpcy5zdGFydFBvaW50OyAvLyDph43nva7kuIrmrKFtb3Zl55qE54K5XHJcblx0dGhpcy5tYXhUb3VjaG1vdmVZID0gdGhpcy5nZXRCb2R5SGVpZ2h0KCkgLSB0aGlzLm9wdERvd24uYm90dG9tT2Zmc2V0OyAvLyDmiYvmjIfop6bmkbjnmoTmnIDlpKfojIPlm7Qo5YaZ5ZyodG91Y2hzdGFydOmBv+WFjWJvZHnojrflj5bpq5jluqbkuLow55qE5oOF5Ya1KVxyXG5cdHRoaXMuaW5Ub3VjaGVuZCA9IGZhbHNlOyAvLyDmoIforrDkuI3mmK90b3VjaGVuZFxyXG59XHJcblxyXG4vKiDliJfooah0b3VjaG1vdmXkuovku7YgKi9cclxuTWVTY3JvbGwucHJvdG90eXBlLnRvdWNobW92ZUV2ZW50ID0gZnVuY3Rpb24oZSkge1xyXG5cclxuXHJcblxyXG5cdFxyXG5cdGlmICghdGhpcy5vcHREb3duLnVzZSkgcmV0dXJuO1xyXG5cdGlmICghdGhpcy5zdGFydFBvaW50KSByZXR1cm47XHJcblx0bGV0IG1lID0gdGhpcztcclxuXHJcblx0Ly8g6IqC5rWBXHJcblx0bGV0IHQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuXHRpZiAobWUubW92ZVRpbWUgJiYgdCAtIG1lLm1vdmVUaW1lIDwgbWUubW92ZVRpbWVEaWZmKSB7IC8vIOWwj+S6juiKgua1geaXtumXtCzliJnkuI3lpITnkIZcclxuXHRcdHJldHVybjtcclxuXHR9IGVsc2Uge1xyXG5cdFx0bWUubW92ZVRpbWUgPSB0XHJcblx0XHRpZighbWUubW92ZVRpbWVEaWZmKSBtZS5tb3ZlVGltZURpZmYgPSAxMDAwIC8gbWUub3B0RG93bi5mcHNcclxuXHR9XHJcblxyXG5cdGxldCBzY3JvbGxUb3AgPSBtZS5nZXRTY3JvbGxUb3AoKTsgLy8g5b2T5YmN5rua5Yqo5p2h55qE6Led56a7XHJcblx0bGV0IGN1clBvaW50ID0gbWUuZ2V0UG9pbnQoZSk7IC8vIOW9k+WJjeeCuVxyXG5cclxuXHRsZXQgbW92ZVkgPSBjdXJQb2ludC55IC0gbWUuc3RhcnRQb2ludC55OyAvLyDlkozotbfngrnmr5Qs56e75Yqo55qE6Led56a7LOWkp+S6jjDlkJHkuIvmi4ks5bCP5LqOMOWQkeS4iuaLiVxyXG5cclxuXHQvLyDlkJHkuIvmi4kgJiYg5Zyo6aG26YOoXHJcblx0Ly8gbWVzY3JvbGwtYm9keSznm7TmjqXliKTlrprlnKjpobbpg6jljbPlj69cclxuXHQvLyBzY3JvbGwtdmlld+WcqOa7muWKqOaXtuS4jeS8muinpuWPkXRvdWNobW92ZSzlvZPop6bpobYv5bqVL+W3pi/lj7Pml7Ys5omN5Lya6Kem5Y+RdG91Y2htb3ZlXHJcblx0Ly8gc2Nyb2xsLXZpZXfmu5rliqjliLDpobbpg6jml7Ysc2Nyb2xsVG9w5LiN5LiA5a6a5Li6MDsg5ZyoaU9T55qEQVBQ5Litc2Nyb2xsVG9w5Y+v6IO95Li66LSf5pWwLOS4jeS4gOWumuWSjHN0YXJ0VG9w55u4562JXHJcblx0aWYgKG1vdmVZID4gMCAmJiAoXHJcblx0XHRcdChtZS5pc1Njcm9sbEJvZHkgJiYgc2Nyb2xsVG9wIDw9IDApXHJcblx0XHRcdHx8XHJcblx0XHRcdCghbWUuaXNTY3JvbGxCb2R5ICYmIChzY3JvbGxUb3AgPD0gMCB8fCAoc2Nyb2xsVG9wIDw9IG1lLm9wdERvd24uc3RhcnRUb3AgJiYgc2Nyb2xsVG9wID09PSBtZS5zdGFydFRvcCkpIClcclxuXHRcdCkpIHtcclxuXHRcdC8vIOWPr+S4i+aLieeahOadoeS7tlxyXG5cdFx0aWYgKCFtZS5pblRvdWNoZW5kICYmICFtZS5pc0Rvd25TY3JvbGxpbmcgJiYgIW1lLm9wdERvd24uaXNMb2NrICYmICghbWUuaXNVcFNjcm9sbGluZyB8fCAobWUuaXNVcFNjcm9sbGluZyAmJlxyXG5cdFx0XHRcdG1lLm9wdFVwLmlzQm90aCkpKSB7XHJcblxyXG5cdFx0XHQvLyDkuIvmi4nnmoTop5LluqbmmK/lkKblnKjphY3nva7nmoTojIPlm7TlhoVcclxuXHRcdFx0bGV0IGFuZ2xlID0gbWUuZ2V0QW5nbGUobWUubGFzdFBvaW50LCBjdXJQb2ludCk7IC8vIOS4pOeCueS5i+mXtOeahOinkuW6pizljLrpl7QgWzAsOTBdXHJcblx0XHRcdGlmIChhbmdsZSA8IG1lLm9wdERvd24ubWluQW5nbGUpIHJldHVybjsgLy8g5aaC5p6c5bCP5LqO6YWN572u55qE6KeS5bqmLOWImeS4jeW+gOS4i+aJp+ihjOS4i+aLieWIt+aWsFxyXG5cclxuXHRcdFx0Ly8g5aaC5p6c5omL5oyH55qE5L2N572u6LaF6L+H6YWN572u55qE6Led56a7LOWImeaPkOWJjee7k+adn+S4i+aLiSzpgb/lhY1XZWJ2aWV35bWM5aWX5a+86Ie0dG91Y2hlbmTml6Dms5Xop6blj5FcclxuXHRcdFx0aWYgKG1lLm1heFRvdWNobW92ZVkgPiAwICYmIGN1clBvaW50LnkgPj0gbWUubWF4VG91Y2htb3ZlWSkge1xyXG5cdFx0XHRcdG1lLmluVG91Y2hlbmQgPSB0cnVlOyAvLyDmoIforrDmiafooYx0b3VjaGVuZFxyXG5cdFx0XHRcdG1lLnRvdWNoZW5kRXZlbnQoKTsgLy8g5o+Q5YmN6Kem5Y+RdG91Y2hlbmRcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblxyXG5cclxuXHJcblx0XHRcdG1lLnByZXZlbnREZWZhdWx0KGUpOyAvLyDpmLvmraLpu5jorqTkuovku7ZcclxuXHJcblx0XHRcdGxldCBkaWZmID0gY3VyUG9pbnQueSAtIG1lLmxhc3RQb2ludC55OyAvLyDlkozkuIrmrKHmr5Qs56e75Yqo55qE6Led56a7ICjlpKfkuo4w5ZCR5LiLLOWwj+S6jjDlkJHkuIopXHJcblxyXG5cdFx0XHQvLyDkuIvmi4not53nprsgIDwg5oyH5a6a6Led56a7XHJcblx0XHRcdGlmIChtZS5kb3duSGlnaHQgPCBtZS5vcHREb3duLm9mZnNldCkge1xyXG5cdFx0XHRcdGlmIChtZS5tb3ZldHlwZSAhPT0gMSkge1xyXG5cdFx0XHRcdFx0bWUubW92ZXR5cGUgPSAxOyAvLyDliqDlhaXmoIforrAs5L+d6K+B5Y+q5omn6KGM5LiA5qyhXHJcblx0XHRcdFx0XHRtZS5vcHREb3duLmluT2Zmc2V0ICYmIG1lLm9wdERvd24uaW5PZmZzZXQobWUpOyAvLyDov5vlhaXmjIflrprot53nprvojIPlm7TlhoXpgqPkuIDliLvnmoTlm57osIMs5Y+q5omn6KGM5LiA5qyhXHJcblx0XHRcdFx0XHRtZS5pc01vdmVEb3duID0gdHJ1ZTsgLy8g5qCH6K6w5LiL5ouJ5Yy65Z+f6auY5bqm5pS55Y+YLOWcqHRvdWNoZW5k6YeN572u5Zue5p2lXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdG1lLmRvd25IaWdodCArPSBkaWZmICogbWUub3B0RG93bi5pbk9mZnNldFJhdGU7IC8vIOi2iuW+gOS4iyzpq5jluqblj5jljJbotorlsI9cclxuXHJcblx0XHRcdFx0Ly8g5oyH5a6a6Led56a7ICA8PSDkuIvmi4not53nprtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRpZiAobWUubW92ZXR5cGUgIT09IDIpIHtcclxuXHRcdFx0XHRcdG1lLm1vdmV0eXBlID0gMjsgLy8g5Yqg5YWl5qCH6K6wLOS/neivgeWPquaJp+ihjOS4gOasoVxyXG5cdFx0XHRcdFx0bWUub3B0RG93bi5vdXRPZmZzZXQgJiYgbWUub3B0RG93bi5vdXRPZmZzZXQobWUpOyAvLyDkuIvmi4notoXov4fmjIflrprot53nprvpgqPkuIDliLvnmoTlm57osIMs5Y+q5omn6KGM5LiA5qyhXHJcblx0XHRcdFx0XHRtZS5pc01vdmVEb3duID0gdHJ1ZTsgLy8g5qCH6K6w5LiL5ouJ5Yy65Z+f6auY5bqm5pS55Y+YLOWcqHRvdWNoZW5k6YeN572u5Zue5p2lXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChkaWZmID4gMCkgeyAvLyDlkJHkuIvmi4lcclxuXHRcdFx0XHRcdG1lLmRvd25IaWdodCArPSBNYXRoLnJvdW5kKGRpZmYgKiBtZS5vcHREb3duLm91dE9mZnNldFJhdGUpOyAvLyDotorlvoDkuIss6auY5bqm5Y+Y5YyW6LaK5bCPXHJcblx0XHRcdFx0fSBlbHNlIHsgLy8g5ZCR5LiK5pS2XHJcblx0XHRcdFx0XHRtZS5kb3duSGlnaHQgKz0gZGlmZjsgLy8g5ZCR5LiK5pS25Zue6auY5bqmLOWImeWQkeS4iua7keWkmuWwkeaUtuWkmuWwkemrmOW6plxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0bGV0IHJhdGUgPSBtZS5kb3duSGlnaHQgLyBtZS5vcHREb3duLm9mZnNldDsgLy8g5LiL5ouJ5Yy65Z+f5b2T5YmN6auY5bqm5LiO5oyH5a6a6Led56a755qE5q+U5YC8XHJcblx0XHRcdG1lLm9wdERvd24ub25Nb3ZpbmcgJiYgbWUub3B0RG93bi5vbk1vdmluZyhtZSwgcmF0ZSwgbWUuZG93bkhpZ2h0KTsgLy8g5LiL5ouJ6L+H56iL5Lit55qE5Zue6LCDLOS4gOebtOWcqOaJp+ihjFxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0bWUubGFzdFBvaW50ID0gY3VyUG9pbnQ7IC8vIOiusOW9leacrOasoeenu+WKqOeahOeCuVxyXG59XHJcblxyXG4vKiDliJfooah0b3VjaGVuZOS6i+S7tiAqL1xyXG5NZVNjcm9sbC5wcm90b3R5cGUudG91Y2hlbmRFdmVudCA9IGZ1bmN0aW9uKGUpIHtcclxuXHRpZiAoIXRoaXMub3B0RG93bi51c2UpIHJldHVybjtcclxuXHQvLyDlpoLmnpzkuIvmi4nljLrln5/pq5jluqblt7LmlLnlj5gs5YiZ6ZyA6YeN572u5Zue5p2lXHJcblx0aWYgKHRoaXMuaXNNb3ZlRG93bikge1xyXG5cdFx0aWYgKHRoaXMuZG93bkhpZ2h0ID49IHRoaXMub3B0RG93bi5vZmZzZXQpIHtcclxuXHRcdFx0Ly8g56ym5ZCI6Kem5Y+R5Yi35paw55qE5p2h5Lu2XHJcblx0XHRcdHRoaXMudHJpZ2dlckRvd25TY3JvbGwoKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdC8vIOS4jeespuWQiOeahOivnSDliJnph43nva5cclxuXHRcdFx0dGhpcy5kb3duSGlnaHQgPSAwO1xyXG5cdFx0XHR0aGlzLm9wdERvd24uZW5kRG93blNjcm9sbCAmJiB0aGlzLm9wdERvd24uZW5kRG93blNjcm9sbCh0aGlzKTtcclxuXHRcdH1cclxuXHRcdHRoaXMubW92ZXR5cGUgPSAwO1xyXG5cdFx0dGhpcy5pc01vdmVEb3duID0gZmFsc2U7XHJcblx0fSBlbHNlIGlmICghdGhpcy5pc1Njcm9sbEJvZHkgJiYgdGhpcy5nZXRTY3JvbGxUb3AoKSA9PT0gdGhpcy5zdGFydFRvcCkgeyAvLyBzY3JvbGwtdmlld+WIsOmhti/lt6Yv5Y+zL+W6leeahOa7keWKqOS6i+S7tlxyXG5cdFx0bGV0IGlzU2Nyb2xsVXAgPSB0aGlzLmdldFBvaW50KGUpLnkgLSB0aGlzLnN0YXJ0UG9pbnQueSA8IDA7IC8vIOWSjOi1t+eCueavlCznp7vliqjnmoTot53nprss5aSn5LqOMOWQkeS4i+aLiSzlsI/kuo4w5ZCR5LiK5ouJXHJcblx0XHQvLyDkuIrmu5FcclxuXHRcdGlmIChpc1Njcm9sbFVwKSB7XHJcblx0XHRcdC8vIOmcgOajgOafpea7keWKqOeahOinkuW6plxyXG5cdFx0XHRsZXQgYW5nbGUgPSB0aGlzLmdldEFuZ2xlKHRoaXMuZ2V0UG9pbnQoZSksIHRoaXMuc3RhcnRQb2ludCk7IC8vIOS4pOeCueS5i+mXtOeahOinkuW6pizljLrpl7QgWzAsOTBdXHJcblx0XHRcdGlmIChhbmdsZSA+IDgwKSB7XHJcblx0XHRcdFx0Ly8g5qOA5p+l5bm26Kem5Y+R5LiK5ouJXHJcblx0XHRcdFx0dGhpcy50cmlnZ2VyVXBTY3JvbGwodHJ1ZSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi8qIOagueaNrueCueWHu+a7keWKqOS6i+S7tuiOt+WPluesrOS4gOS4quaJi+aMh+eahOWdkOaghyAqL1xyXG5NZVNjcm9sbC5wcm90b3R5cGUuZ2V0UG9pbnQgPSBmdW5jdGlvbihlKSB7XHJcblx0aWYgKCFlKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHR4OiAwLFxyXG5cdFx0XHR5OiAwXHJcblx0XHR9XHJcblx0fVxyXG5cdGlmIChlLnRvdWNoZXMgJiYgZS50b3VjaGVzWzBdKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHR4OiBlLnRvdWNoZXNbMF0ucGFnZVgsXHJcblx0XHRcdHk6IGUudG91Y2hlc1swXS5wYWdlWVxyXG5cdFx0fVxyXG5cdH0gZWxzZSBpZiAoZS5jaGFuZ2VkVG91Y2hlcyAmJiBlLmNoYW5nZWRUb3VjaGVzWzBdKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHR4OiBlLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYLFxyXG5cdFx0XHR5OiBlLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZXHJcblx0XHR9XHJcblx0fSBlbHNlIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHg6IGUuY2xpZW50WCxcclxuXHRcdFx0eTogZS5jbGllbnRZXHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4vKiDorqHnrpfkuKTngrnkuYvpl7TnmoTop5LluqY6IOWMuumXtCBbMCw5MF0qL1xyXG5NZVNjcm9sbC5wcm90b3R5cGUuZ2V0QW5nbGUgPSBmdW5jdGlvbihwMSwgcDIpIHtcclxuXHRsZXQgeCA9IE1hdGguYWJzKHAxLnggLSBwMi54KTtcclxuXHRsZXQgeSA9IE1hdGguYWJzKHAxLnkgLSBwMi55KTtcclxuXHRsZXQgeiA9IE1hdGguc3FydCh4ICogeCArIHkgKiB5KTtcclxuXHRsZXQgYW5nbGUgPSAwO1xyXG5cdGlmICh6ICE9PSAwKSB7XHJcblx0XHRhbmdsZSA9IE1hdGguYXNpbih5IC8geikgLyBNYXRoLlBJICogMTgwO1xyXG5cdH1cclxuXHRyZXR1cm4gYW5nbGVcclxufVxyXG5cclxuLyog6Kem5Y+R5LiL5ouJ5Yi35pawICovXHJcbk1lU2Nyb2xsLnByb3RvdHlwZS50cmlnZ2VyRG93blNjcm9sbCA9IGZ1bmN0aW9uKCkge1xyXG5cdGlmICh0aGlzLm9wdERvd24uYmVmb3JlTG9hZGluZyAmJiB0aGlzLm9wdERvd24uYmVmb3JlTG9hZGluZyh0aGlzKSkge1xyXG5cdFx0Ly9yZXR1cm4gdHJ1ZeWImeWkhOS6juWujOWFqOiHquWumuS5ieeKtuaAgVxyXG5cdH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IHBhZ2UgPSB0aGlzLm9wdFVwLnBhZ2U7XHJcbiAgICAgICAgcGFnZS5udW0gPSB0aGlzLnN0YXJ0TnVtOyAvLyDph43nva7kuLrnrKzkuIDpobVcclxuXHRcdHRoaXMuc2hvd0Rvd25TY3JvbGwoKTsgLy8g5LiL5ouJ5Yi35paw5LitLi4uXHJcblx0XHR0aGlzLm9wdERvd24uY2FsbGJhY2sgJiYgdGhpcy5vcHREb3duLmNhbGxiYWNrKHRoaXMpOyAvLyDmiafooYzlm57osIMs6IGU572R5Yqg6L295pWw5o2uXHJcblx0fVxyXG59XHJcblxyXG4vKiDmmL7npLrkuIvmi4nov5vluqbluIPlsYAgKi9cclxuTWVTY3JvbGwucHJvdG90eXBlLnNob3dEb3duU2Nyb2xsID0gZnVuY3Rpb24oKSB7XHJcblx0dGhpcy5pc0Rvd25TY3JvbGxpbmcgPSB0cnVlOyAvLyDmoIforrDkuIvmi4nkuK1cclxuXHRpZiAodGhpcy5vcHREb3duLm5hdGl2ZSkge1xyXG5cdFx0dW5pLnN0YXJ0UHVsbERvd25SZWZyZXNoKCk7IC8vIOezu+e7n+iHquW4pueahOS4i+aLieWIt+aWsFxyXG5cdFx0dGhpcy5vcHREb3duLnNob3dMb2FkaW5nICYmIHRoaXMub3B0RG93bi5zaG93TG9hZGluZyh0aGlzLCAwKTsgLy8g5LuN6Kem5Y+Rc2hvd0xvYWRpbmcs5Zug5Li65LiK5ouJ5Yqg6L2955So5YiwXHJcblx0fSBlbHNle1xyXG5cdFx0dGhpcy5kb3duSGlnaHQgPSB0aGlzLm9wdERvd24ub2Zmc2V0OyAvLyDmm7TmlrDkuIvmi4nljLrln5/pq5jluqZcclxuXHRcdHRoaXMub3B0RG93bi5zaG93TG9hZGluZyAmJiB0aGlzLm9wdERvd24uc2hvd0xvYWRpbmcodGhpcywgdGhpcy5kb3duSGlnaHQpOyAvLyDkuIvmi4nliLfmlrDkuK0uLi5cclxuXHR9XHJcbn1cclxuXHJcbi8qIOaYvuekuuezu+e7n+iHquW4pueahOS4i+aLieWIt+aWsOaXtumcgOimgeWkhOeQhueahOS4muWKoSAqL1xyXG5NZVNjcm9sbC5wcm90b3R5cGUub25QdWxsRG93blJlZnJlc2ggPSBmdW5jdGlvbigpIHtcclxuXHR0aGlzLmlzRG93blNjcm9sbGluZyA9IHRydWU7IC8vIOagh+iusOS4i+aLieS4rVxyXG5cdHRoaXMub3B0RG93bi5zaG93TG9hZGluZyAmJiB0aGlzLm9wdERvd24uc2hvd0xvYWRpbmcodGhpcywgMCk7IC8vIOS7jeinpuWPkXNob3dMb2FkaW5nLOWboOS4uuS4iuaLieWKoOi9veeUqOWIsFxyXG5cdHRoaXMub3B0RG93bi5jYWxsYmFjayAmJiB0aGlzLm9wdERvd24uY2FsbGJhY2sodGhpcyk7IC8vIOaJp+ihjOWbnuiwgyzogZTnvZHliqDovb3mlbDmja5cclxufVxyXG5cclxuLyog57uT5p2f5LiL5ouJ5Yi35pawICovXHJcbk1lU2Nyb2xsLnByb3RvdHlwZS5lbmREb3duU2Nyb2xsID0gZnVuY3Rpb24oKSB7XHJcblx0aWYgKHRoaXMub3B0RG93bi5uYXRpdmUpIHsgLy8g57uT5p2f5Y6f55Sf5LiL5ouJ5Yi35pawXHJcblx0XHR0aGlzLmlzRG93blNjcm9sbGluZyA9IGZhbHNlO1xyXG5cdFx0dGhpcy5vcHREb3duLmVuZERvd25TY3JvbGwgJiYgdGhpcy5vcHREb3duLmVuZERvd25TY3JvbGwodGhpcyk7XHJcblx0XHR1bmkuc3RvcFB1bGxEb3duUmVmcmVzaCgpO1xyXG5cdFx0cmV0dXJuXHJcblx0fVxyXG5cdGxldCBtZSA9IHRoaXM7XHJcblx0Ly8g57uT5p2f5LiL5ouJ5Yi35paw55qE5pa55rOVXHJcblx0bGV0IGVuZFNjcm9sbCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0bWUuZG93bkhpZ2h0ID0gMDtcclxuXHRcdG1lLmlzRG93blNjcm9sbGluZyA9IGZhbHNlO1xyXG5cdFx0bWUub3B0RG93bi5lbmREb3duU2Nyb2xsICYmIG1lLm9wdERvd24uZW5kRG93blNjcm9sbChtZSk7XHJcblx0XHQhbWUuaXNTY3JvbGxCb2R5ICYmIG1lLnNldFNjcm9sbEhlaWdodCgwKSAvLyBzY3JvbGwtdmlld+mHjee9rua7muWKqOWMuuWfnyzkvb/mlbDmja7kuI3mu6HlsY/ml7bku43lj6/mo4Dmn6Xop6blj5Hnv7vpobVcclxuXHR9XHJcblx0Ly8g57uT5p2f5LiL5ouJ5Yi35paw5pe255qE5Zue6LCDXHJcblx0bGV0IGRlbGF5ID0gMDtcclxuXHRpZiAobWUub3B0RG93bi5hZnRlckxvYWRpbmcpIGRlbGF5ID0gbWUub3B0RG93bi5hZnRlckxvYWRpbmcobWUpOyAvLyDnu5PmnZ/kuIvmi4nliLfmlrDnmoTlu7bml7Ys5Y2V5L2NbXNcclxuXHRpZiAodHlwZW9mIGRlbGF5ID09PSAnbnVtYmVyJyAmJiBkZWxheSA+IDApIHtcclxuXHRcdHNldFRpbWVvdXQoZW5kU2Nyb2xsLCBkZWxheSk7XHJcblx0fSBlbHNlIHtcclxuXHRcdGVuZFNjcm9sbCgpO1xyXG5cdH1cclxufVxyXG5cclxuLyog6ZSB5a6a5LiL5ouJ5Yi35pawOmlzTG9jaz10dXJlLG51bGzplIHlrpo7aXNMb2NrPWZhbHNl6Kej6ZSBICovXHJcbk1lU2Nyb2xsLnByb3RvdHlwZS5sb2NrRG93blNjcm9sbCA9IGZ1bmN0aW9uKGlzTG9jaykge1xyXG5cdGlmIChpc0xvY2sgPT0gbnVsbCkgaXNMb2NrID0gdHJ1ZTtcclxuXHR0aGlzLm9wdERvd24uaXNMb2NrID0gaXNMb2NrO1xyXG59XHJcblxyXG4vKiDplIHlrprkuIrmi4nliqDovb06aXNMb2NrPXR1cmUsbnVsbOmUgeWumjtpc0xvY2s9ZmFsc2Xop6PplIEgKi9cclxuTWVTY3JvbGwucHJvdG90eXBlLmxvY2tVcFNjcm9sbCA9IGZ1bmN0aW9uKGlzTG9jaykge1xyXG5cdGlmIChpc0xvY2sgPT0gbnVsbCkgaXNMb2NrID0gdHJ1ZTtcclxuXHR0aGlzLm9wdFVwLmlzTG9jayA9IGlzTG9jaztcclxufVxyXG5cclxuLyogLS0tLS0tLeWIneWni+WMluS4iuaLieWKoOi9vS0tLS0tLS0gKi9cclxuTWVTY3JvbGwucHJvdG90eXBlLmluaXRVcFNjcm9sbCA9IGZ1bmN0aW9uKCkge1xyXG5cdGxldCBtZSA9IHRoaXM7XHJcblx0Ly8g6YWN572u5Y+C5pWwXHJcblx0bWUub3B0VXAgPSBtZS5vcHRpb25zLnVwIHx8IHt1c2U6IGZhbHNlfVxyXG5cdGlmKCFtZS5vcHRVcC50ZXh0Q29sb3IgJiYgbWUuaGFzQ29sb3IobWUub3B0VXAuYmdDb2xvcikpIG1lLm9wdFVwLnRleHRDb2xvciA9IFwiI2ZmZlwiOyAvLyDlvZNiZ0NvbG9y5pyJ5YC85LiUdGV4dENvbG9y5pyq6K6+572uLOWImXRleHRDb2xvcum7mOiupOeZveiJslxyXG5cdG1lLmV4dGVuZFVwU2Nyb2xsKG1lLm9wdFVwKTtcclxuXHJcblx0aWYgKCFtZS5vcHRVcC5pc0JvdW5jZSkgbWUuc2V0Qm91bmNlKGZhbHNlKTsgLy8g5LiN5YWB6K64Ym91bmNl5pe2LOmcgOemgeatondpbmRvd+eahHRvdWNobW92ZeS6i+S7tlxyXG5cclxuXHRpZiAobWUub3B0VXAudXNlID09PSBmYWxzZSkgcmV0dXJuOyAvLyDphY3nva7kuI3kvb/nlKjkuIrmi4nliqDovb3ml7Ys5YiZ5LiN5Yid5aeL5YyW5LiK5ouJ5biD5bGAXHJcblx0bWUub3B0VXAuaGFzTmV4dCA9IHRydWU7IC8vIOWmguaenOS9v+eUqOS4iuaLiSzliJnpu5jorqTmnInkuIvkuIDpobVcclxuXHRtZS5zdGFydE51bSA9IG1lLm9wdFVwLnBhZ2UubnVtOyAvLyDorrDlvZVwYWdl5byA5aeL55qE6aG156CBXHJcblxyXG5cdC8vIOWIneWni+WMluWujOavleeahOWbnuiwg1xyXG5cdGlmIChtZS5vcHRVcC5pbml0ZWQpIHtcclxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IC8vIOW+heS4u+e6v+eoi+aJp+ihjOWujOavleWGjeaJp+ihjCzpgb/lhY1uZXcgTWVTY3JvbGzmnKrliJ3lp4vljJYs5Zyo5Zue6LCD6I635Y+W5LiN5YiwbWVzY3JvbGznmoTlrp7kvotcclxuXHRcdFx0bWUub3B0VXAuaW5pdGVkKG1lKTtcclxuXHRcdH0sIDApXHJcblx0fVxyXG59XHJcblxyXG4vKua7muWKqOWIsOW6lemDqOeahOS6i+S7tiAo5LuFbWVzY3JvbGwtYm9keeeUn+aViCkqL1xyXG5NZVNjcm9sbC5wcm90b3R5cGUub25SZWFjaEJvdHRvbSA9IGZ1bmN0aW9uKCkge1xyXG5cdGlmICh0aGlzLmlzU2Nyb2xsQm9keSAmJiAhdGhpcy5pc1VwU2Nyb2xsaW5nKSB7IC8vIOWPquiDveaUr+aMgeS4i+aLieWIt+aWsOeahOaXtuWAmeWQjOaXtuWPr+S7peinpuWPkeS4iuaLieWKoOi9vSzlkKbliJnmu5rliqjliLDlupXpg6jlsLHpnIDopoHkuIrmu5HkuIDngrnmiY3og73op6blj5FvblJlYWNoQm90dG9tXHJcblx0XHRpZiAoIXRoaXMub3B0VXAuaXNMb2NrICYmIHRoaXMub3B0VXAuaGFzTmV4dCkge1xyXG5cdFx0XHR0aGlzLnRyaWdnZXJVcFNjcm9sbCgpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLyrliJfooajmu5rliqjkuovku7YgKOS7hW1lc2Nyb2xsLWJvZHnnlJ/mlYgpKi9cclxuTWVTY3JvbGwucHJvdG90eXBlLm9uUGFnZVNjcm9sbCA9IGZ1bmN0aW9uKGUpIHtcclxuXHRpZiAoIXRoaXMuaXNTY3JvbGxCb2R5KSByZXR1cm47XHJcblx0XHJcblx0Ly8g5pu05paw5rua5Yqo5p2h55qE5L2N572uICjkuLvopoHnlKjkuo7liKTmlq3kuIvmi4nliLfmlrDml7Ys5rua5Yqo5p2h5piv5ZCm5Zyo6aG26YOoKVxyXG5cdHRoaXMuc2V0U2Nyb2xsVG9wKGUuc2Nyb2xsVG9wKTtcclxuXHJcblx0Ly8g6aG26YOo5oyJ6ZKu55qE5pi+56S66ZqQ6JePXHJcblx0aWYgKGUuc2Nyb2xsVG9wID49IHRoaXMub3B0VXAudG9Ub3Aub2Zmc2V0KSB7XHJcblx0XHR0aGlzLnNob3dUb3BCdG4oKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dGhpcy5oaWRlVG9wQnRuKCk7XHJcblx0fVxyXG59XHJcblxyXG4vKuWIl+ihqOa7muWKqOS6i+S7tiovXHJcbk1lU2Nyb2xsLnByb3RvdHlwZS5zY3JvbGwgPSBmdW5jdGlvbihlLCBvblNjcm9sbCkge1xyXG5cdC8vIOabtOaWsOa7muWKqOadoeeahOS9jee9rlxyXG5cdHRoaXMuc2V0U2Nyb2xsVG9wKGUuc2Nyb2xsVG9wKTtcclxuXHQvLyDmm7TmlrDmu5rliqjlhoXlrrnpq5jluqZcclxuXHR0aGlzLnNldFNjcm9sbEhlaWdodChlLnNjcm9sbEhlaWdodCk7XHJcblxyXG5cdC8vIOWQkeS4iua7kei/mOaYr+WQkeS4i+a7keWKqFxyXG5cdGlmICh0aGlzLnByZVNjcm9sbFkgPT0gbnVsbCkgdGhpcy5wcmVTY3JvbGxZID0gMDtcclxuXHR0aGlzLmlzU2Nyb2xsVXAgPSBlLnNjcm9sbFRvcCAtIHRoaXMucHJlU2Nyb2xsWSA+IDA7XHJcblx0dGhpcy5wcmVTY3JvbGxZID0gZS5zY3JvbGxUb3A7XHJcblxyXG5cdC8vIOS4iua7kSAmJiDmo4Dmn6Xlubbop6blj5HkuIrmi4lcclxuXHR0aGlzLmlzU2Nyb2xsVXAgJiYgdGhpcy50cmlnZ2VyVXBTY3JvbGwodHJ1ZSk7XHJcblxyXG5cdC8vIOmhtumDqOaMiemSrueahOaYvuekuumakOiXj1xyXG5cdGlmIChlLnNjcm9sbFRvcCA+PSB0aGlzLm9wdFVwLnRvVG9wLm9mZnNldCkge1xyXG5cdFx0dGhpcy5zaG93VG9wQnRuKCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHRoaXMuaGlkZVRvcEJ0bigpO1xyXG5cdH1cclxuXHJcblx0Ly8g5ruR5Yqo55uR5ZCsXHJcblx0dGhpcy5vcHRVcC5vblNjcm9sbCAmJiBvblNjcm9sbCAmJiBvblNjcm9sbCgpXHJcbn1cclxuXHJcbi8qIOinpuWPkeS4iuaLieWKoOi9vSAqL1xyXG5NZVNjcm9sbC5wcm90b3R5cGUudHJpZ2dlclVwU2Nyb2xsID0gZnVuY3Rpb24oaXNDaGVjaykge1xyXG5cdGlmICghdGhpcy5pc1VwU2Nyb2xsaW5nICYmIHRoaXMub3B0VXAudXNlICYmIHRoaXMub3B0VXAuY2FsbGJhY2spIHtcclxuXHRcdC8vIOaYr+WQpuagoemqjOWcqOW6lemDqDsg6buY6K6k5LiN5qCh6aqMXHJcblx0XHRpZiAoaXNDaGVjayA9PT0gdHJ1ZSkge1xyXG5cdFx0XHRsZXQgY2FuVXAgPSBmYWxzZTtcclxuXHRcdFx0Ly8g6L+Y5pyJ5LiL5LiA6aG1ICYmIOayoeaciemUgeWumiAmJiDkuI3lnKjkuIvmi4nkuK1cclxuXHRcdFx0aWYgKHRoaXMub3B0VXAuaGFzTmV4dCAmJiAhdGhpcy5vcHRVcC5pc0xvY2sgJiYgIXRoaXMuaXNEb3duU2Nyb2xsaW5nKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMuZ2V0U2Nyb2xsQm90dG9tKCkgPD0gdGhpcy5vcHRVcC5vZmZzZXQpIHsgLy8g5Yiw5bqV6YOoXHJcblx0XHRcdFx0XHRjYW5VcCA9IHRydWU7IC8vIOagh+iusOWPr+S4iuaLiVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoY2FuVXAgPT09IGZhbHNlKSByZXR1cm47XHJcblx0XHR9XHJcblx0XHR0aGlzLnNob3dVcFNjcm9sbCgpOyAvLyDkuIrmi4nliqDovb3kuK0uLi5cclxuXHRcdC8vIHRoaXMub3B0VXAucGFnZS5udW0rKzsgLy8g6aKE5YWI5Yqg5LiA6aG1LOWmguaenOWksei0peWImeWHj+WbnlxyXG5cdFx0dGhpcy5pc1VwQXV0b0xvYWQgPSB0cnVlOyAvLyDmoIforrDkuIrmi4nlt7Lnu4/oh6rliqjmiafooYzov4cs6YG/5YWN5Yid5aeL5YyW5pe25aSa5qyh6Kem5Y+R5LiK5ouJ5Zue6LCDXHJcblx0XHR0aGlzLm51bSA9IHRoaXMub3B0VXAucGFnZS5udW07IC8vIOaKiuacgOaWsOeahOmhteaVsOi1i+WAvOWcqG1lc2Nyb2xs5LiKLOmBv+WFjeWvuXBhZ2XnmoTlvbHlk41cclxuXHRcdHRoaXMuc2l6ZSA9IHRoaXMub3B0VXAucGFnZS5zaXplOyAvLyDmiormnIDmlrDnmoTpobXnoIHotYvlgLzlnKhtZXNjcm9sbOS4iizpgb/lhY3lr7lwYWdl55qE5b2x5ZONXHJcblx0XHR0aGlzLnRpbWUgPSB0aGlzLm9wdFVwLnBhZ2UudGltZTsgLy8g5oqK5pyA5paw55qE6aG156CB6LWL5YC85ZyobWVzY3JvbGzkuIos6YG/5YWN5a+5cGFnZeeahOW9seWTjVxyXG5cdFx0dGhpcy5vcHRVcC5jYWxsYmFjayh0aGlzKTsgLy8g5omn6KGM5Zue6LCDLOiBlOe9keWKoOi9veaVsOaNrlxyXG5cdH1cclxufVxyXG5cclxuLyog5pi+56S65LiK5ouJ5Yqg6L295LitICovXHJcbk1lU2Nyb2xsLnByb3RvdHlwZS5zaG93VXBTY3JvbGwgPSBmdW5jdGlvbigpIHtcclxuXHR0aGlzLmlzVXBTY3JvbGxpbmcgPSB0cnVlOyAvLyDmoIforrDkuIrmi4nliqDovb3kuK1cclxuXHR0aGlzLm9wdFVwLnNob3dMb2FkaW5nICYmIHRoaXMub3B0VXAuc2hvd0xvYWRpbmcodGhpcyk7IC8vIOWbnuiwg1xyXG59XHJcblxyXG4vKiDmmL7npLrkuIrmi4nml6Dmm7TlpJrmlbDmja4gKi9cclxuTWVTY3JvbGwucHJvdG90eXBlLnNob3dOb01vcmUgPSBmdW5jdGlvbigpIHtcclxuXHR0aGlzLm9wdFVwLmhhc05leHQgPSBmYWxzZTsgLy8g5qCH6K6w5peg5pu05aSa5pWw5o2uXHJcblx0dGhpcy5vcHRVcC5zaG93Tm9Nb3JlICYmIHRoaXMub3B0VXAuc2hvd05vTW9yZSh0aGlzKTsgLy8g5Zue6LCDXHJcbn1cclxuXHJcbi8qIOmakOiXj+S4iuaLieWMuuWfnyoqL1xyXG5NZVNjcm9sbC5wcm90b3R5cGUuaGlkZVVwU2Nyb2xsID0gZnVuY3Rpb24oKSB7XHJcblx0dGhpcy5vcHRVcC5oaWRlVXBTY3JvbGwgJiYgdGhpcy5vcHRVcC5oaWRlVXBTY3JvbGwodGhpcyk7IC8vIOWbnuiwg1xyXG59XHJcblxyXG4vKiDnu5PmnZ/kuIrmi4nliqDovb0gKi9cclxuTWVTY3JvbGwucHJvdG90eXBlLmVuZFVwU2Nyb2xsID0gZnVuY3Rpb24oaXNTaG93Tm9Nb3JlKSB7XHJcblx0aWYgKGlzU2hvd05vTW9yZSAhPSBudWxsKSB7IC8vIGlzU2hvd05vTW9yZT1udWxsLOS4jeWkhOeQhuS4i+aLieeKtuaAgSzkuIvmi4nliLfmlrDnmoTml7blgJnosIPnlKhcclxuXHRcdGlmIChpc1Nob3dOb01vcmUpIHtcclxuXHRcdFx0dGhpcy5zaG93Tm9Nb3JlKCk7IC8vIGlzU2hvd05vTW9yZT10cnVlLOaYvuekuuaXoOabtOWkmuaVsOaNrlxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5oaWRlVXBTY3JvbGwoKTsgLy8gaXNTaG93Tm9Nb3JlPWZhbHNlLOmakOiXj+S4iuaLieWKoOi9vVxyXG5cdFx0fVxyXG5cdH1cclxuXHR0aGlzLmlzVXBTY3JvbGxpbmcgPSBmYWxzZTsgLy8g5qCH6K6w57uT5p2f5LiK5ouJ5Yqg6L29XHJcbn1cclxuXHJcbi8qIOmHjee9ruS4iuaLieWKoOi9veWIl+ihqOS4uuesrOS4gOmhtVxyXG4gKmlzU2hvd0xvYWRpbmcg5piv5ZCm5pi+56S66L+b5bqm5biD5bGAO1xyXG4gKiAxLum7mOiupG51bGws5LiN5Lyg5Y+CLOWImeaYvuekuuS4iuaLieWKoOi9veeahOi/m+W6puW4g+WxgFxyXG4gKiAyLuS8oOWPgnRydWUsIOWImeaYvuekuuS4i+aLieWIt+aWsOeahOi/m+W6puW4g+WxgFxyXG4gKiAzLuS8oOWPgmZhbHNlLOWImeS4jeaYvuekuuS4iuaLieWSjOS4i+aLieeahOi/m+W6piAo5bi455So5LqO6Z2Z6buY5pu05paw5YiX6KGo5pWw5o2uKVxyXG4gKi9cclxuTWVTY3JvbGwucHJvdG90eXBlLnJlc2V0VXBTY3JvbGwgPSBmdW5jdGlvbihpc1Nob3dMb2FkaW5nKSB7XHJcblx0aWYgKHRoaXMub3B0VXAgJiYgdGhpcy5vcHRVcC51c2UpIHtcclxuXHRcdGxldCBwYWdlID0gdGhpcy5vcHRVcC5wYWdlO1xyXG5cdFx0dGhpcy5wcmVQYWdlTnVtID0gcGFnZS5udW07IC8vIOe8k+WtmOmHjee9ruWJjeeahOmhteeggSzliqDovb3lpLHotKXlj6/pgIDlm55cclxuXHRcdHRoaXMucHJlUGFnZVRpbWUgPSBwYWdlLnRpbWU7IC8vIOe8k+WtmOmHjee9ruWJjeeahOaXtumXtCzliqDovb3lpLHotKXlj6/pgIDlm55cclxuXHRcdHBhZ2UubnVtID0gdGhpcy5zdGFydE51bTsgLy8g6YeN572u5Li656ys5LiA6aG1XHJcblx0XHRwYWdlLnRpbWUgPSBudWxsOyAvLyDph43nva7ml7bpl7TkuLrnqbpcclxuXHRcdGlmICghdGhpcy5pc0Rvd25TY3JvbGxpbmcgJiYgaXNTaG93TG9hZGluZyAhPT0gZmFsc2UpIHsgLy8g5aaC5p6c5LiN5piv5LiL5ouJ5Yi35paw6Kem5Y+R55qEcmVzZXRVcFNjcm9sbOW5tuS4lOS4jemFjee9ruWIl+ihqOmdmem7mOabtOaWsCzliJnmmL7npLrov5vluqY7XHJcblx0XHRcdGlmIChpc1Nob3dMb2FkaW5nID09IG51bGwpIHtcclxuXHRcdFx0XHR0aGlzLnJlbW92ZUVtcHR5KCk7IC8vIOenu+mZpOepuuW4g+WxgFxyXG5cdFx0XHRcdHRoaXMuc2hvd1VwU2Nyb2xsKCk7IC8vIOS4jeS8oOWPgizpu5jorqTmmL7npLrkuIrmi4nliqDovb3nmoTov5vluqbluIPlsYBcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLnNob3dEb3duU2Nyb2xsKCk7IC8vIOS8oHRydWUs5pi+56S65LiL5ouJ5Yi35paw55qE6L+b5bqm5biD5bGALOS4jea4heepuuWIl+ihqFxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHR0aGlzLmlzVXBBdXRvTG9hZCA9IHRydWU7IC8vIOagh+iusOS4iuaLieW3sue7j+iHquWKqOaJp+ihjOi/hyzpgb/lhY3liJ3lp4vljJbml7blpJrmrKHop6blj5HkuIrmi4nlm57osINcclxuXHRcdHRoaXMubnVtID0gcGFnZS5udW07IC8vIOaKiuacgOaWsOeahOmhteaVsOi1i+WAvOWcqG1lc2Nyb2xs5LiKLOmBv+WFjeWvuXBhZ2XnmoTlvbHlk41cclxuXHRcdHRoaXMuc2l6ZSA9IHBhZ2Uuc2l6ZTsgLy8g5oqK5pyA5paw55qE6aG156CB6LWL5YC85ZyobWVzY3JvbGzkuIos6YG/5YWN5a+5cGFnZeeahOW9seWTjVxyXG5cdFx0dGhpcy50aW1lID0gcGFnZS50aW1lOyAvLyDmiormnIDmlrDnmoTpobXnoIHotYvlgLzlnKhtZXNjcm9sbOS4iizpgb/lhY3lr7lwYWdl55qE5b2x5ZONXHJcblx0XHR0aGlzLm9wdFVwLmNhbGxiYWNrICYmIHRoaXMub3B0VXAuY2FsbGJhY2sodGhpcyk7IC8vIOaJp+ihjOS4iuaLieWbnuiwg1xyXG5cdH1cclxufVxyXG5cclxuLyog6K6+572ucGFnZS5udW3nmoTlgLwgKi9cclxuTWVTY3JvbGwucHJvdG90eXBlLnNldFBhZ2VOdW0gPSBmdW5jdGlvbihudW0pIHtcclxuXHR0aGlzLm9wdFVwLnBhZ2UubnVtID0gbnVtO1xyXG59XHJcblxyXG4vKiDorr7nva5wYWdlLnNpemXnmoTlgLwgKi9cclxuTWVTY3JvbGwucHJvdG90eXBlLnNldFBhZ2VTaXplID0gZnVuY3Rpb24oc2l6ZSkge1xyXG5cdHRoaXMub3B0VXAucGFnZS5zaXplID0gc2l6ZTtcclxufVxyXG5cclxuLyog6IGU572R5Zue6LCD5oiQ5YqfLOe7k+adn+S4i+aLieWIt+aWsOWSjOS4iuaLieWKoOi9vVxyXG4gKiBkYXRhU2l6ZTog5b2T5YmN6aG155qE5pWw5o2u6YePKOW/heS8oClcclxuICogdG90YWxQYWdlOiDmgLvpobXmlbAo5b+F5LygKVxyXG4gKiBzeXN0aW1lOiDmnI3liqHlmajml7bpl7QgKOWPr+epuilcclxuICovXHJcbk1lU2Nyb2xsLnByb3RvdHlwZS5lbmRCeVBhZ2UgPSBmdW5jdGlvbihkYXRhU2l6ZSwgdG90YWxQYWdlLCBzeXN0aW1lKSB7XHJcblx0bGV0IGhhc05leHQ7XHJcblx0aWYgKHRoaXMub3B0VXAudXNlICYmIHRvdGFsUGFnZSAhPSBudWxsKSBoYXNOZXh0ID0gdGhpcy5vcHRVcC5wYWdlLm51bSA8IHRvdGFsUGFnZTsgLy8g5piv5ZCm6L+Y5pyJ5LiL5LiA6aG1XHJcblx0dGhpcy5lbmRTdWNjZXNzKGRhdGFTaXplLCBoYXNOZXh0LCBzeXN0aW1lKTtcclxufVxyXG5cclxuLyog6IGU572R5Zue6LCD5oiQ5YqfLOe7k+adn+S4i+aLieWIt+aWsOWSjOS4iuaLieWKoOi9vVxyXG4gKiBkYXRhU2l6ZTog5b2T5YmN6aG155qE5pWw5o2u6YePKOW/heS8oClcclxuICogdG90YWxTaXplOiDliJfooajmiYDmnInmlbDmja7mgLvmlbDph48o5b+F5LygKVxyXG4gKiBzeXN0aW1lOiDmnI3liqHlmajml7bpl7QgKOWPr+epuilcclxuICovXHJcbk1lU2Nyb2xsLnByb3RvdHlwZS5lbmRCeVNpemUgPSBmdW5jdGlvbihkYXRhU2l6ZSwgdG90YWxTaXplLCBzeXN0aW1lKSB7XHJcblx0bGV0IGhhc05leHQ7XHJcblx0aWYgKHRoaXMub3B0VXAudXNlICYmIHRvdGFsU2l6ZSAhPSBudWxsKSB7XHJcblx0XHRsZXQgbG9hZFNpemUgPSAodGhpcy5vcHRVcC5wYWdlLm51bSAtIDEpICogdGhpcy5vcHRVcC5wYWdlLnNpemUgKyBkYXRhU2l6ZTsgLy8g5bey5Yqg6L2955qE5pWw5o2u5oC75pWwXHJcblx0XHRoYXNOZXh0ID0gbG9hZFNpemUgPCB0b3RhbFNpemU7IC8vIOaYr+WQpui/mOacieS4i+S4gOmhtVxyXG5cdH1cclxuXHR0aGlzLmVuZFN1Y2Nlc3MoZGF0YVNpemUsIGhhc05leHQsIHN5c3RpbWUpO1xyXG59XHJcblxyXG4vKiDogZTnvZHlm57osIPmiJDlip8s57uT5p2f5LiL5ouJ5Yi35paw5ZKM5LiK5ouJ5Yqg6L29XHJcbiAqIGRhdGFTaXplOiDlvZPliY3pobXnmoTmlbDmja7kuKrmlbAo5LiN5piv5omA5pyJ6aG155qE5pWw5o2u5oC75ZKMKSznlKjkuo7kuIrmi4nliqDovb3liKTmlq3mmK/lkKbov5jmnInkuIvkuIDpobUu5aaC5p6c5LiN5LygLOWImeS8muWIpOaWrei/mOacieS4i+S4gOmhtVxyXG4gKiBoYXNOZXh0OiDmmK/lkKbov5jmnInkuIvkuIDpobUs5biD5bCU57G75Z6LO+eUqOadpeino+WGs+i/meS4quWwj+mXrumimDrmr5TlpoLliJfooajlhbHmnIkyMOadoeaVsOaNrizmr4/pobXliqDovb0xMOadoSzlhbEy6aG1LuWmguaenOWPquagueaNrmRhdGFTaXpl5Yik5patLOWImemcgOe/u+WIsOesrOS4iemhteaJjeS8muefpemBk+aXoOabtOWkmuaVsOaNrizlpoLmnpzkvKDkuoZoYXNOZXh0LOWImee/u+WIsOesrOS6jOmhteWNs+WPr+aYvuekuuaXoOabtOWkmuaVsOaNri5cclxuICogc3lzdGltZTog5pyN5Yqh5Zmo5pe26Ze0KOWPr+epuik755So5p2l6Kej5Yaz6L+Z5Liq5bCP6Zeu6aKYOuW9k+WHhuWkh+e/u+S4i+S4gOmhteaXtizmlbDmja7lupPmlrDlop7kuoblh6DmnaHorrDlvZUs5q2k5pe257+75LiL5LiA6aG1LOWJjemdoueahOWHoOadoeaVsOaNruS8muWSjOS4iuS4gOmhteeahOmHjeWkjTvov5nph4zkvKDlhaXkuoZzeXN0aW1lLOmCo+S5iHVwQ2FsbGJhY2vnmoRwYWdlLnRpbWXlsLHkvJrmnInlgLws5oqKcGFnZS50aW1l5Lyg57uZ5pyN5Yqh5ZmoLOiuqeWQjuWPsOi/h+a7pOaWsOWKoOWFpeeahOmCo+WHoOadoeiusOW9lVxyXG4gKi9cclxuTWVTY3JvbGwucHJvdG90eXBlLmVuZFN1Y2Nlc3MgPSBmdW5jdGlvbihkYXRhU2l6ZSwgaGFzTmV4dCwgc3lzdGltZSkge1xyXG5cdGxldCBtZSA9IHRoaXM7XHJcblx0Ly8g57uT5p2f5LiL5ouJ5Yi35pawXHJcblx0aWYgKG1lLmlzRG93blNjcm9sbGluZykgbWUuZW5kRG93blNjcm9sbCgpO1xyXG5cclxuXHQvLyDnu5PmnZ/kuIrmi4nliqDovb1cclxuXHRpZiAobWUub3B0VXAudXNlKSB7XHJcblx0XHRsZXQgaXNTaG93Tm9Nb3JlOyAvLyDmmK/lkKblt7Lml6Dmm7TlpJrmlbDmja5cclxuXHRcdGlmIChkYXRhU2l6ZSAhPSBudWxsKSB7XHJcblx0XHRcdGxldCBwYWdlTnVtID0gbWUub3B0VXAucGFnZS5udW07IC8vIOW9k+WJjemhteeggVxyXG5cdFx0XHRsZXQgcGFnZVNpemUgPSBtZS5vcHRVcC5wYWdlLnNpemU7IC8vIOavj+mhtemVv+W6plxyXG5cdFx0XHRcclxuXHRcdFx0Ly8g5aaC5p6c5piv56ys5LiA6aG1XHJcblx0XHRcdGlmIChwYWdlTnVtID09PSAxKSB7XHJcblx0XHRcdFx0aWYgKHN5c3RpbWUpIG1lLm9wdFVwLnBhZ2UudGltZSA9IHN5c3RpbWU7IC8vIOiuvue9ruWKoOi9veWIl+ihqOaVsOaNruesrOS4gOmhteeahOaXtumXtFxyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChkYXRhU2l6ZSA8IHBhZ2VTaXplIHx8IGhhc05leHQgPT09IGZhbHNlKSB7XHJcblx0XHRcdFx0Ly8g6L+U5Zue55qE5pWw5o2u5LiN5ruh5LiA6aG15pe2LOWImeivtOaYjuW3suaXoOabtOWkmuaVsOaNrlxyXG5cdFx0XHRcdG1lLm9wdFVwLmhhc05leHQgPSBmYWxzZTtcclxuXHRcdFx0XHRpZiAoZGF0YVNpemUgPT09IDAgJiYgcGFnZU51bSA9PT0gMSkge1xyXG5cdFx0XHRcdFx0Ly8g5aaC5p6c56ys5LiA6aG15peg5Lu75L2V5pWw5o2u5LiU6YWN572u5LqG56m65biD5bGAXHJcblx0XHRcdFx0XHRpc1Nob3dOb01vcmUgPSBmYWxzZTtcclxuXHRcdFx0XHRcdG1lLnNob3dFbXB0eSgpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQvLyDmgLvliJfooajmlbDlsJHkuo7phY3nva7nmoTmlbDph48s5YiZ5LiN5pi+56S65peg5pu05aSa5pWw5o2uXHJcblx0XHRcdFx0XHRsZXQgYWxsRGF0YVNpemUgPSAocGFnZU51bSAtIDEpICogcGFnZVNpemUgKyBkYXRhU2l6ZTtcclxuXHRcdFx0XHRcdGlmIChhbGxEYXRhU2l6ZSA8IG1lLm9wdFVwLm5vTW9yZVNpemUpIHtcclxuXHRcdFx0XHRcdFx0aXNTaG93Tm9Nb3JlID0gZmFsc2U7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRpc1Nob3dOb01vcmUgPSB0cnVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0bWUucmVtb3ZlRW1wdHkoKTsgLy8g56e76Zmk56m65biD5bGAXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMub3B0VXAucGFnZS5udW0gKz0gMTtcclxuXHRcdFx0XHQvLyDov5jmnInkuIvkuIDpobVcclxuXHRcdFx0XHRpc1Nob3dOb01vcmUgPSBmYWxzZTtcclxuXHRcdFx0XHRtZS5vcHRVcC5oYXNOZXh0ID0gdHJ1ZTtcclxuXHRcdFx0XHRtZS5yZW1vdmVFbXB0eSgpOyAvLyDnp7vpmaTnqbrluIPlsYBcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIOmakOiXj+S4iuaLiVxyXG5cdFx0bWUuZW5kVXBTY3JvbGwoaXNTaG93Tm9Nb3JlKTtcclxuXHR9XHJcbn1cclxuXHJcbi8qIOWbnuiwg+Wksei0pSznu5PmnZ/kuIvmi4nliLfmlrDlkozkuIrmi4nliqDovb0gKi9cclxuTWVTY3JvbGwucHJvdG90eXBlLmVuZEVyciA9IGZ1bmN0aW9uKGVyckRpc3RhbmNlKSB7XHJcblx0Ly8g57uT5p2f5LiL5ouJLOWbnuiwg+Wksei0pemHjee9ruWbnuWOn+adpeeahOmhteeggeWSjOaXtumXtFxyXG5cdGlmICh0aGlzLmlzRG93blNjcm9sbGluZykge1xyXG5cdFx0bGV0IHBhZ2UgPSB0aGlzLm9wdFVwLnBhZ2U7XHJcblx0XHRpZiAocGFnZSAmJiB0aGlzLnByZVBhZ2VOdW0pIHtcclxuXHRcdFx0cGFnZS5udW0gPSB0aGlzLnByZVBhZ2VOdW07XHJcblx0XHRcdHBhZ2UudGltZSA9IHRoaXMucHJlUGFnZVRpbWU7XHJcblx0XHR9XHJcblx0XHR0aGlzLmVuZERvd25TY3JvbGwoKTtcclxuXHR9XHJcblx0Ly8g57uT5p2f5LiK5ouJLOWbnuiwg+Wksei0pemHjee9ruWbnuWOn+adpeeahOmhteeggVxyXG5cdGlmICh0aGlzLmlzVXBTY3JvbGxpbmcpIHtcclxuXHRcdC8vIHRoaXMub3B0VXAucGFnZS5udW0tLTtcclxuXHRcdHRoaXMuZW5kVXBTY3JvbGwoZmFsc2UpO1xyXG5cdFx0Ly8g5aaC5p6c5pivbWVzY3JvbGwtYm9keSzliJnpnIDlvoDlm57mu5rkuIDlrprot53nprtcclxuXHRcdGlmKHRoaXMuaXNTY3JvbGxCb2R5ICYmIGVyckRpc3RhbmNlICE9PSAwKXsgLy8g5LiN5aSE55CGMFxyXG5cdFx0XHRpZighZXJyRGlzdGFuY2UpIGVyckRpc3RhbmNlID0gdGhpcy5vcHRVcC5lcnJEaXN0YW5jZTsgLy8g5LiN5LygLOWImeWPlum7mOiupFxyXG5cdFx0XHR0aGlzLnNjcm9sbFRvKHRoaXMuZ2V0U2Nyb2xsVG9wKCkgLSBlcnJEaXN0YW5jZSwgMCkgLy8g5b6A5LiK5Zue5rua55qE6Led56a7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4vKiDmmL7npLrnqbrluIPlsYAgKi9cclxuTWVTY3JvbGwucHJvdG90eXBlLnNob3dFbXB0eSA9IGZ1bmN0aW9uKCkge1xyXG5cdHRoaXMub3B0VXAuZW1wdHkudXNlICYmIHRoaXMub3B0VXAuZW1wdHkub25TaG93ICYmIHRoaXMub3B0VXAuZW1wdHkub25TaG93KHRydWUpXHJcbn1cclxuXHJcbi8qIOenu+mZpOepuuW4g+WxgCAqL1xyXG5NZVNjcm9sbC5wcm90b3R5cGUucmVtb3ZlRW1wdHkgPSBmdW5jdGlvbigpIHtcclxuXHR0aGlzLm9wdFVwLmVtcHR5LnVzZSAmJiB0aGlzLm9wdFVwLmVtcHR5Lm9uU2hvdyAmJiB0aGlzLm9wdFVwLmVtcHR5Lm9uU2hvdyhmYWxzZSlcclxufVxyXG5cclxuLyog5pi+56S65Zue5Yiw6aG26YOo55qE5oyJ6ZKuICovXHJcbk1lU2Nyb2xsLnByb3RvdHlwZS5zaG93VG9wQnRuID0gZnVuY3Rpb24oKSB7XHJcblx0aWYgKCF0aGlzLnRvcEJ0blNob3cpIHtcclxuXHRcdHRoaXMudG9wQnRuU2hvdyA9IHRydWU7XHJcblx0XHR0aGlzLm9wdFVwLnRvVG9wLm9uU2hvdyAmJiB0aGlzLm9wdFVwLnRvVG9wLm9uU2hvdyh0cnVlKTtcclxuXHR9XHJcbn1cclxuXHJcbi8qIOmakOiXj+WbnuWIsOmhtumDqOeahOaMiemSriAqL1xyXG5NZVNjcm9sbC5wcm90b3R5cGUuaGlkZVRvcEJ0biA9IGZ1bmN0aW9uKCkge1xyXG5cdGlmICh0aGlzLnRvcEJ0blNob3cpIHtcclxuXHRcdHRoaXMudG9wQnRuU2hvdyA9IGZhbHNlO1xyXG5cdFx0dGhpcy5vcHRVcC50b1RvcC5vblNob3cgJiYgdGhpcy5vcHRVcC50b1RvcC5vblNob3coZmFsc2UpO1xyXG5cdH1cclxufVxyXG5cclxuLyog6I635Y+W5rua5Yqo5p2h55qE5L2N572uICovXHJcbk1lU2Nyb2xsLnByb3RvdHlwZS5nZXRTY3JvbGxUb3AgPSBmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gdGhpcy5zY3JvbGxUb3AgfHwgMFxyXG59XHJcblxyXG4vKiDorrDlvZXmu5rliqjmnaHnmoTkvY3nva4gKi9cclxuTWVTY3JvbGwucHJvdG90eXBlLnNldFNjcm9sbFRvcCA9IGZ1bmN0aW9uKHkpIHtcclxuXHR0aGlzLnNjcm9sbFRvcCA9IHk7XHJcbn1cclxuXHJcbi8qIOa7muWKqOWIsOaMh+WumuS9jee9riAqL1xyXG5NZVNjcm9sbC5wcm90b3R5cGUuc2Nyb2xsVG8gPSBmdW5jdGlvbih5LCB0KSB7XHJcblx0dGhpcy5teVNjcm9sbFRvICYmIHRoaXMubXlTY3JvbGxUbyh5LCB0KSAvLyBzY3JvbGx2aWV36ZyA6Ieq5a6a5LmJ5Zue5Yiw6aG26YOo5pa55rOVXHJcbn1cclxuXHJcbi8qIOiHquWumuS5iXNjcm9sbFRvICovXHJcbk1lU2Nyb2xsLnByb3RvdHlwZS5yZXNldFNjcm9sbFRvID0gZnVuY3Rpb24obXlTY3JvbGxUbykge1xyXG5cdHRoaXMubXlTY3JvbGxUbyA9IG15U2Nyb2xsVG9cclxufVxyXG5cclxuLyog5rua5Yqo5p2h5Yiw5bqV6YOo55qE6Led56a7ICovXHJcbk1lU2Nyb2xsLnByb3RvdHlwZS5nZXRTY3JvbGxCb3R0b20gPSBmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gdGhpcy5nZXRTY3JvbGxIZWlnaHQoKSAtIHRoaXMuZ2V0Q2xpZW50SGVpZ2h0KCkgLSB0aGlzLmdldFNjcm9sbFRvcCgpXHJcbn1cclxuXHJcbi8qIOiuoeatpeWZqFxyXG4gc3Rhcjog5byA5aeL5YC8XHJcbiBlbmQ6IOe7k+adn+WAvFxyXG4gY2FsbGJhY2soc3RlcCx0aW1lcik6IOWbnuiwg3N0ZXDlgLws6K6h5q2l5ZmodGltZXIs5Y+v6Ieq6KGM6YCa6L+Hd2luZG93LmNsZWFySW50ZXJ2YWwodGltZXIp57uT5p2f6K6h5q2l5ZmoO1xyXG4gdDog6K6h5q2l5pe26ZW/LOS8oDDliJnnm7TmjqXlm57osINlbmTlgLw75LiN5Lyg5YiZ6buY6K6kMzAwbXNcclxuIHJhdGU6IOWRqOacnzvkuI3kvKDliJnpu5jorqQzMG1z6K6h5q2l5LiA5qyhXHJcbiAqICovXHJcbk1lU2Nyb2xsLnByb3RvdHlwZS5nZXRTdGVwID0gZnVuY3Rpb24oc3RhciwgZW5kLCBjYWxsYmFjaywgdCwgcmF0ZSkge1xyXG5cdGxldCBkaWZmID0gZW5kIC0gc3RhcjsgLy8g5beu5YC8XHJcblx0aWYgKHQgPT09IDAgfHwgZGlmZiA9PT0gMCkge1xyXG5cdFx0Y2FsbGJhY2sgJiYgY2FsbGJhY2soZW5kKTtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblx0dCA9IHQgfHwgMzAwOyAvLyDml7bplb8gMzAwbXNcclxuXHRyYXRlID0gcmF0ZSB8fCAzMDsgLy8g5ZGo5pyfIDMwbXNcclxuXHRsZXQgY291bnQgPSB0IC8gcmF0ZTsgLy8g5qyh5pWwXHJcblx0bGV0IHN0ZXAgPSBkaWZmIC8gY291bnQ7IC8vIOatpemVv1xyXG5cdGxldCBpID0gMDsgLy8g6K6h5pWwXHJcblx0bGV0IHRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAoaSA8IGNvdW50IC0gMSkge1xyXG5cdFx0XHRzdGFyICs9IHN0ZXA7XHJcblx0XHRcdGNhbGxiYWNrICYmIGNhbGxiYWNrKHN0YXIsIHRpbWVyKTtcclxuXHRcdFx0aSsrO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y2FsbGJhY2sgJiYgY2FsbGJhY2soZW5kLCB0aW1lcik7IC8vIOacgOWQjuS4gOasoeebtOaOpeiuvue9rmVuZCzpgb/lhY3orqHnrpfor6/lt65cclxuXHRcdFx0Y2xlYXJJbnRlcnZhbCh0aW1lcik7XHJcblx0XHR9XHJcblx0fSwgcmF0ZSk7XHJcbn1cclxuXHJcbi8qIOa7muWKqOWuueWZqOeahOmrmOW6piAqL1xyXG5NZVNjcm9sbC5wcm90b3R5cGUuZ2V0Q2xpZW50SGVpZ2h0ID0gZnVuY3Rpb24oaXNSZWFsKSB7XHJcblx0bGV0IGggPSB0aGlzLmNsaWVudEhlaWdodCB8fCAwXHJcblx0aWYgKGggPT09IDAgJiYgaXNSZWFsICE9PSB0cnVlKSB7IC8vIOacquiOt+WPluWIsOWuueWZqOeahOmrmOW6pizlj6/kuLTml7blj5Zib2R555qE6auY5bqmICjlj6/og73kvJrmnInor6/lt64pXHJcblx0XHRoID0gdGhpcy5nZXRCb2R5SGVpZ2h0KClcclxuXHR9XHJcblx0cmV0dXJuIGhcclxufVxyXG5NZVNjcm9sbC5wcm90b3R5cGUuc2V0Q2xpZW50SGVpZ2h0ID0gZnVuY3Rpb24oaCkge1xyXG5cdHRoaXMuY2xpZW50SGVpZ2h0ID0gaDtcclxufVxyXG5cclxuLyog5rua5Yqo5YaF5a6555qE6auY5bqmICovXHJcbk1lU2Nyb2xsLnByb3RvdHlwZS5nZXRTY3JvbGxIZWlnaHQgPSBmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gdGhpcy5zY3JvbGxIZWlnaHQgfHwgMDtcclxufVxyXG5NZVNjcm9sbC5wcm90b3R5cGUuc2V0U2Nyb2xsSGVpZ2h0ID0gZnVuY3Rpb24oaCkge1xyXG5cdHRoaXMuc2Nyb2xsSGVpZ2h0ID0gaDtcclxufVxyXG5cclxuLyogYm9keeeahOmrmOW6piAqL1xyXG5NZVNjcm9sbC5wcm90b3R5cGUuZ2V0Qm9keUhlaWdodCA9IGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzLmJvZHlIZWlnaHQgfHwgMDtcclxufVxyXG5NZVNjcm9sbC5wcm90b3R5cGUuc2V0Qm9keUhlaWdodCA9IGZ1bmN0aW9uKGgpIHtcclxuXHR0aGlzLmJvZHlIZWlnaHQgPSBoO1xyXG59XHJcblxyXG4vKiDpmLvmraLmtY/op4jlmajpu5jorqTmu5rliqjkuovku7YgKi9cclxuTWVTY3JvbGwucHJvdG90eXBlLnByZXZlbnREZWZhdWx0ID0gZnVuY3Rpb24oZSkge1xyXG5cdC8vIOWwj+eoi+W6j+S4jeaUr+aMgWUucHJldmVudERlZmF1bHRcclxuXHQvLyBhcHDnmoRib3VuY2Xlj6rog73pgJrov4fphY3nva5wYWdlcy5qc29u55qEc3R5bGUuYXBwLXBsdXMuYm91bmNl5Li6XCJub25lXCLmnaXnpoHmraJcclxuXHQvLyBjYW5jZWxhYmxlOuaYr+WQpuWPr+S7peiiq+emgeeUqDsgZGVmYXVsdFByZXZlbnRlZDrmmK/lkKblt7Lnu4/ooqvnpoHnlKhcclxuXHRpZiAoZSAmJiBlLmNhbmNlbGFibGUgJiYgIWUuZGVmYXVsdFByZXZlbnRlZCkgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbn1cclxuXHJcbi8qIOaYr+WQpuWFgeiuuOS4i+aLieWbnuW8uSjmqaHnmq7nrYvmlYjmnpwpOyB0cnVl5oiWbnVsbOS4uuWFgeiuuDsgZmFsc2XnpoHmraJib3VuY2UgKi9cclxuTWVTY3JvbGwucHJvdG90eXBlLnNldEJvdW5jZSA9IGZ1bmN0aW9uKGlzQm91bmNlKSB7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///70\n");

/***/ }),
/* 71 */
/*!*************************************************************************************!*\
  !*** D:/uniapp/uniapp-simple/components/common/mescroll-uni/mescroll-uni-option.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; // 全局配置\n// mescroll-body 和 mescroll-uni 通用\nvar GlobalOption = {\n  down: {\n    // 其他down的配置参数也可以写,这里只展示了常用的配置:\n    textInOffset: '下拉刷新', // 下拉的距离在offset范围内的提示文本\n    textOutOffset: '释放更新', // 下拉的距离大于offset范围的提示文本\n    textLoading: '加载中 ...', // 加载中的提示文本\n    offset: 80, // 在列表顶部,下拉大于80px,松手即可触发下拉刷新的回调\n    native: false // 是否使用系统自带的下拉刷新; 默认false; 仅在mescroll-body生效 (值为true时,还需在pages配置enablePullDownRefresh:true;详请参考mescroll-native的案例)\n  },\n  up: {\n    // 其他up的配置参数也可以写,这里只展示了常用的配置:\n    textLoading: '加载中 ...', // 加载中的提示文本\n    textNoMore: '没有更多了', // 没有更多数据的提示文本\n    offset: 80, // 距底部多远时,触发upCallback\n    isBounce: false, // 默认禁止橡皮筋的回弹效果, 必读事项: http://www.mescroll.com/qa.html?v=190725#q25\n    toTop: {\n      // 回到顶部按钮,需配置src才显示\n      src: \"http://www.mescroll.com/img/mescroll-totop.png?v=1\", // 图片路径 (建议放入static目录, 如 /static/img/mescroll-totop.png )\n      offset: 1000, // 列表滚动多少距离才显示回到顶部按钮,默认1000px\n      right: 20, // 到右边的距离, 默认20 (支持\"20rpx\", \"20px\", \"20%\"格式的值, 纯数字则默认单位rpx)\n      bottom: 120, // 到底部的距离, 默认120 (支持\"20rpx\", \"20px\", \"20%\"格式的值, 纯数字则默认单位rpx)\n      width: 72 // 回到顶部图标的宽度, 默认72 (支持\"20rpx\", \"20px\", \"20%\"格式的值, 纯数字则默认单位rpx)\n    },\n    empty: {\n      use: true, // 是否显示空布局\n      icon: \"http://www.mescroll.com/img/mescroll-empty.png?v=1\", // 图标路径 (建议放入static目录, 如 /static/img/mescroll-empty.png )\n      tip: '~ 空空如也 ~' // 提示\n    } } };var _default =\n\n\n\nGlobalOption;exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9jb21tb24vbWVzY3JvbGwtdW5pL21lc2Nyb2xsLXVuaS1vcHRpb24uanMiXSwibmFtZXMiOlsiR2xvYmFsT3B0aW9uIiwiZG93biIsInRleHRJbk9mZnNldCIsInRleHRPdXRPZmZzZXQiLCJ0ZXh0TG9hZGluZyIsIm9mZnNldCIsIm5hdGl2ZSIsInVwIiwidGV4dE5vTW9yZSIsImlzQm91bmNlIiwidG9Ub3AiLCJzcmMiLCJyaWdodCIsImJvdHRvbSIsIndpZHRoIiwiZW1wdHkiLCJ1c2UiLCJpY29uIiwidGlwIl0sIm1hcHBpbmdzIjoid0ZBQUE7QUFDQTtBQUNBLElBQU1BLFlBQVksR0FBRztBQUNwQkMsTUFBSSxFQUFFO0FBQ0w7QUFDQUMsZ0JBQVksRUFBRSxNQUZULEVBRWlCO0FBQ3RCQyxpQkFBYSxFQUFFLE1BSFYsRUFHa0I7QUFDdkJDLGVBQVcsRUFBRSxTQUpSLEVBSW1CO0FBQ3hCQyxVQUFNLEVBQUUsRUFMSCxFQUtPO0FBQ1pDLFVBQU0sRUFBRSxLQU5ILENBTVM7QUFOVCxHQURjO0FBU3BCQyxJQUFFLEVBQUU7QUFDSDtBQUNBSCxlQUFXLEVBQUUsU0FGVixFQUVxQjtBQUN4QkksY0FBVSxFQUFFLE9BSFQsRUFHa0I7QUFDckJILFVBQU0sRUFBRSxFQUpMLEVBSVM7QUFDWkksWUFBUSxFQUFFLEtBTFAsRUFLYztBQUNqQkMsU0FBSyxFQUFFO0FBQ047QUFDQUMsU0FBRyxFQUFFLG9EQUZDLEVBRXFEO0FBQzNETixZQUFNLEVBQUUsSUFIRixFQUdRO0FBQ2RPLFdBQUssRUFBRSxFQUpELEVBSUs7QUFDWEMsWUFBTSxFQUFFLEdBTEYsRUFLTztBQUNiQyxXQUFLLEVBQUUsRUFORCxDQU1JO0FBTkosS0FOSjtBQWNIQyxTQUFLLEVBQUU7QUFDTkMsU0FBRyxFQUFFLElBREMsRUFDSztBQUNYQyxVQUFJLEVBQUUsb0RBRkEsRUFFc0Q7QUFDNURDLFNBQUcsRUFBRSxVQUhDLENBR1U7QUFIVixLQWRKLEVBVGdCLEVBQXJCLEM7Ozs7QUErQmVsQixZIiwiZmlsZSI6IjcxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8g5YWo5bGA6YWN572uXHJcbi8vIG1lc2Nyb2xsLWJvZHkg5ZKMIG1lc2Nyb2xsLXVuaSDpgJrnlKhcclxuY29uc3QgR2xvYmFsT3B0aW9uID0ge1xyXG5cdGRvd246IHtcclxuXHRcdC8vIOWFtuS7lmRvd27nmoTphY3nva7lj4LmlbDkuZ/lj6/ku6Xlhpks6L+Z6YeM5Y+q5bGV56S65LqG5bi455So55qE6YWN572uOlxyXG5cdFx0dGV4dEluT2Zmc2V0OiAn5LiL5ouJ5Yi35pawJywgLy8g5LiL5ouJ55qE6Led56a75Zyob2Zmc2V06IyD5Zu05YaF55qE5o+Q56S65paH5pysXHJcblx0XHR0ZXh0T3V0T2Zmc2V0OiAn6YeK5pS+5pu05pawJywgLy8g5LiL5ouJ55qE6Led56a75aSn5LqOb2Zmc2V06IyD5Zu055qE5o+Q56S65paH5pysXHJcblx0XHR0ZXh0TG9hZGluZzogJ+WKoOi9veS4rSAuLi4nLCAvLyDliqDovb3kuK3nmoTmj5DnpLrmlofmnKxcclxuXHRcdG9mZnNldDogODAsIC8vIOWcqOWIl+ihqOmhtumDqCzkuIvmi4nlpKfkuo44MHB4LOadvuaJi+WNs+WPr+inpuWPkeS4i+aLieWIt+aWsOeahOWbnuiwg1xyXG5cdFx0bmF0aXZlOiBmYWxzZSAvLyDmmK/lkKbkvb/nlKjns7vnu5/oh6rluKbnmoTkuIvmi4nliLfmlrA7IOm7mOiupGZhbHNlOyDku4XlnKhtZXNjcm9sbC1ib2R555Sf5pWIICjlgLzkuLp0cnVl5pe2LOi/mOmcgOWcqHBhZ2Vz6YWN572uZW5hYmxlUHVsbERvd25SZWZyZXNoOnRydWU76K+m6K+35Y+C6ICDbWVzY3JvbGwtbmF0aXZl55qE5qGI5L6LKVxyXG5cdH0sXHJcblx0dXA6IHtcclxuXHRcdC8vIOWFtuS7lnVw55qE6YWN572u5Y+C5pWw5Lmf5Y+v5Lul5YaZLOi/memHjOWPquWxleekuuS6huW4uOeUqOeahOmFjee9rjpcclxuXHRcdHRleHRMb2FkaW5nOiAn5Yqg6L295LitIC4uLicsIC8vIOWKoOi9veS4reeahOaPkOekuuaWh+acrFxyXG5cdFx0dGV4dE5vTW9yZTogJ+ayoeacieabtOWkmuS6hicsIC8vIOayoeacieabtOWkmuaVsOaNrueahOaPkOekuuaWh+acrFxyXG5cdFx0b2Zmc2V0OiA4MCwgLy8g6Led5bqV6YOo5aSa6L+c5pe2LOinpuWPkXVwQ2FsbGJhY2tcclxuXHRcdGlzQm91bmNlOiBmYWxzZSwgLy8g6buY6K6k56aB5q2i5qmh55qu562L55qE5Zue5by55pWI5p6cLCDlv4Xor7vkuovpobk6IGh0dHA6Ly93d3cubWVzY3JvbGwuY29tL3FhLmh0bWw/dj0xOTA3MjUjcTI1XHJcblx0XHR0b1RvcDoge1xyXG5cdFx0XHQvLyDlm57liLDpobbpg6jmjInpkq4s6ZyA6YWN572uc3Jj5omN5pi+56S6XHJcblx0XHRcdHNyYzogXCJodHRwOi8vd3d3Lm1lc2Nyb2xsLmNvbS9pbWcvbWVzY3JvbGwtdG90b3AucG5nP3Y9MVwiLCAvLyDlm77niYfot6/lvoQgKOW7uuiuruaUvuWFpXN0YXRpY+ebruW9lSwg5aaCIC9zdGF0aWMvaW1nL21lc2Nyb2xsLXRvdG9wLnBuZyApXHJcblx0XHRcdG9mZnNldDogMTAwMCwgLy8g5YiX6KGo5rua5Yqo5aSa5bCR6Led56a75omN5pi+56S65Zue5Yiw6aG26YOo5oyJ6ZKuLOm7mOiupDEwMDBweFxyXG5cdFx0XHRyaWdodDogMjAsIC8vIOWIsOWPs+i+ueeahOi3neemuywg6buY6K6kMjAgKOaUr+aMgVwiMjBycHhcIiwgXCIyMHB4XCIsIFwiMjAlXCLmoLzlvI/nmoTlgLwsIOe6r+aVsOWtl+WImem7mOiupOWNleS9jXJweClcclxuXHRcdFx0Ym90dG9tOiAxMjAsIC8vIOWIsOW6lemDqOeahOi3neemuywg6buY6K6kMTIwICjmlK/mjIFcIjIwcnB4XCIsIFwiMjBweFwiLCBcIjIwJVwi5qC85byP55qE5YC8LCDnuq/mlbDlrZfliJnpu5jorqTljZXkvY1ycHgpXHJcblx0XHRcdHdpZHRoOiA3MiAvLyDlm57liLDpobbpg6jlm77moIfnmoTlrr3luqYsIOm7mOiupDcyICjmlK/mjIFcIjIwcnB4XCIsIFwiMjBweFwiLCBcIjIwJVwi5qC85byP55qE5YC8LCDnuq/mlbDlrZfliJnpu5jorqTljZXkvY1ycHgpXHJcblx0XHR9LFxyXG5cdFx0ZW1wdHk6IHtcclxuXHRcdFx0dXNlOiB0cnVlLCAvLyDmmK/lkKbmmL7npLrnqbrluIPlsYBcclxuXHRcdFx0aWNvbjogXCJodHRwOi8vd3d3Lm1lc2Nyb2xsLmNvbS9pbWcvbWVzY3JvbGwtZW1wdHkucG5nP3Y9MVwiLCAvLyDlm77moIfot6/lvoQgKOW7uuiuruaUvuWFpXN0YXRpY+ebruW9lSwg5aaCIC9zdGF0aWMvaW1nL21lc2Nyb2xsLWVtcHR5LnBuZyApXHJcblx0XHRcdHRpcDogJ34g56m656m65aaC5LmfIH4nIC8vIOaPkOekulxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2xvYmFsT3B0aW9uXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///71\n");

/***/ }),
/* 72 */
/*!********************************************************************************************!*\
  !*** D:/uniapp/uniapp-simple/components/common/mescroll-uni/components/mescroll-empty.vue ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mescroll_empty_vue_vue_type_template_id_366a7430___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mescroll-empty.vue?vue&type=template&id=366a7430& */ 73);\n/* harmony import */ var _mescroll_empty_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mescroll-empty.vue?vue&type=script&lang=js& */ 75);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _mescroll_empty_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _mescroll_empty_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 17);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _mescroll_empty_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _mescroll_empty_vue_vue_type_template_id_366a7430___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _mescroll_empty_vue_vue_type_template_id_366a7430___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _mescroll_empty_vue_vue_type_template_id_366a7430___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"components/common/mescroll-uni/components/mescroll-empty.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkg7QUFDM0g7QUFDa0U7QUFDTDs7O0FBRzdEO0FBQzZLO0FBQzdLLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLG9GQUFNO0FBQ1IsRUFBRSx5RkFBTTtBQUNSLEVBQUUsa0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNkZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiNzIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL21lc2Nyb2xsLWVtcHR5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNjZhNzQzMCZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL21lc2Nyb2xsLWVtcHR5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vbWVzY3JvbGwtZW1wdHkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi/lronoo4XljIUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL2NvbW1vbi9tZXNjcm9sbC11bmkvY29tcG9uZW50cy9tZXNjcm9sbC1lbXB0eS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///72\n");

/***/ }),
/* 73 */
/*!***************************************************************************************************************************!*\
  !*** D:/uniapp/uniapp-simple/components/common/mescroll-uni/components/mescroll-empty.vue?vue&type=template&id=366a7430& ***!
  \***************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_empty_vue_vue_type_template_id_366a7430___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./mescroll-empty.vue?vue&type=template&id=366a7430& */ 74);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_empty_vue_vue_type_template_id_366a7430___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_empty_vue_vue_type_template_id_366a7430___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_empty_vue_vue_type_template_id_366a7430___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_empty_vue_vue_type_template_id_366a7430___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 74 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/uniapp/uniapp-simple/components/common/mescroll-uni/components/mescroll-empty.vue?vue&type=template&id=366a7430& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    {
      staticClass: _vm._$s(0, "sc", "mescroll-empty"),
      class: _vm._$s(0, "c", { "empty-fixed": _vm.option.fixed }),
      style: _vm._$s(0, "s", {
        "z-index": _vm.option.zIndex,
        top: _vm.option.top
      }),
      attrs: { _i: 0 }
    },
    [
      _c("view", [
        _vm._$s(2, "i", _vm.icon)
          ? _c("image", {
              staticClass: _vm._$s(2, "sc", "empty-icon"),
              attrs: { src: _vm._$s(2, "a-src", _vm.icon), _i: 2 }
            })
          : _vm._e()
      ]),
      _vm._$s(3, "i", _vm.tip)
        ? _c(
            "view",
            { staticClass: _vm._$s(3, "sc", "empty-tip"), attrs: { _i: 3 } },
            [_vm._v(_vm._$s(3, "t0-0", _vm._s(_vm.tip)))]
          )
        : _vm._e(),
      _vm._$s(4, "i", _vm.option.btnText)
        ? _c(
            "view",
            {
              staticClass: _vm._$s(4, "sc", "empty-btn"),
              attrs: { _i: 4 },
              on: { click: _vm.emptyClick }
            },
            [_vm._v(_vm._$s(4, "t0-0", _vm._s(_vm.option.btnText)))]
          )
        : _vm._e()
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 75 */
/*!*********************************************************************************************************************!*\
  !*** D:/uniapp/uniapp-simple/components/common/mescroll-uni/components/mescroll-empty.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_empty_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./mescroll-empty.vue?vue&type=script&lang=js& */ 76);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_empty_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_empty_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_empty_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_empty_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_empty_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtsQixDQUFnQixva0JBQUcsRUFBQyIsImZpbGUiOiI3NS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL+WuieijheWMhS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tZXNjcm9sbC1lbXB0eS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL+WuieijheWMhS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tZXNjcm9sbC1lbXB0eS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///75\n");

/***/ }),
/* 76 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/uniapp/uniapp-simple/components/common/mescroll-uni/components/mescroll-empty.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _mescrollUniOption = _interopRequireDefault(__webpack_require__(/*! ./../mescroll-uni-option.js */ 71));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n// 引入全局配置\nvar _default2 = { props: { // empty的配置项: 默认为GlobalOption.up.empty\n    option: { type: Object, default: function _default() {return {};} } }, // 使用computed获取配置,用于支持option的动态配置\n  computed: { // 图标\n    icon: function icon() {return this.option.icon == null ? _mescrollUniOption.default.up.empty.icon : this.option.icon; // 此处不使用短路求值, 用于支持传空串不显示图标\n    }, // 文本提示\n    tip: function tip() {return this.option.tip == null ? _mescrollUniOption.default.up.empty.tip : this.option.tip; // 此处不使用短路求值, 用于支持传空串不显示文本提示\n    } }, methods: {\n    // 点击按钮\n    emptyClick: function emptyClick() {\n      this.$emit('emptyclick');\n    } } };exports.default = _default2;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9jb21tb24vbWVzY3JvbGwtdW5pL2NvbXBvbmVudHMvbWVzY3JvbGwtZW1wdHkudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBLDRHOzs7Ozs7Ozs7Ozs7Ozs7QUFEQTtnQkFFQSxFQUNBLFNBQ0E7QUFDQSxjQUNBLFlBREEsRUFFQSxPQUZBLHNCQUVBLENBQ0EsVUFDQSxDQUpBLEVBRkEsRUFEQSxFQVVBO0FBQ0EsY0FDQTtBQUNBLFFBRkEsa0JBRUEsQ0FDQSw4RkFEQSxDQUNBO0FBQ0EsS0FKQSxFQUtBO0FBQ0EsT0FOQSxpQkFNQSxDQUNBLDJGQURBLENBQ0E7QUFDQSxLQVJBLEVBWEEsRUFxQkE7QUFDQTtBQUNBLGNBRkEsd0JBRUE7QUFDQTtBQUNBLEtBSkEsRUFyQkEsRSIsImZpbGUiOiI3Ni5qcyIsInNvdXJjZXNDb250ZW50IjpbIjwhLS3nqbrluIPlsYBcclxuXHJcbuWPr+S9nOS4uueLrOeri+eahOe7hOS7tiwg5LiN5L2/55SobWVzY3JvbGznmoTpobXpnaLkuZ/og73ljZXni6zlvJXlhaUsIOS7peS+v0FQUOWFqOWxgOe7n+S4gOeuoeeQhjpcclxuaW1wb3J0IE1lc2Nyb2xsRW1wdHkgZnJvbSAnQC9jb21wb25lbnRzL21lc2Nyb2xsLXVuaS9jb21wb25lbnRzL21lc2Nyb2xsLWVtcHR5LnZ1ZSc7XHJcbjxtZXNjcm9sbC1lbXB0eSB2LWlmPVwiaXNTaG93RW1wdHlcIiA6b3B0aW9uPVwib3B0RW1wdHlcIiBAZW1wdHljbGljaz1cImVtcHR5Q2xpY2tcIj48L21lc2Nyb2xsLWVtcHR5PlxyXG5cclxuLS0+XHJcbjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cIm1lc2Nyb2xsLWVtcHR5XCIgOmNsYXNzPVwieyAnZW1wdHktZml4ZWQnOiBvcHRpb24uZml4ZWQgfVwiIDpzdHlsZT1cInsgJ3otaW5kZXgnOiBvcHRpb24uekluZGV4LCB0b3A6IG9wdGlvbi50b3AgfVwiPlxyXG5cdFx0PHZpZXc+IDxpbWFnZSB2LWlmPVwiaWNvblwiIGNsYXNzPVwiZW1wdHktaWNvblwiIDpzcmM9XCJpY29uXCIgbW9kZT1cIndpZHRoRml4XCIgLz4gPC92aWV3PlxyXG5cdFx0PHZpZXcgdi1pZj1cInRpcFwiIGNsYXNzPVwiZW1wdHktdGlwXCI+e3sgdGlwIH19PC92aWV3PlxyXG5cdFx0PHZpZXcgdi1pZj1cIm9wdGlvbi5idG5UZXh0XCIgY2xhc3M9XCJlbXB0eS1idG5cIiBAY2xpY2s9XCJlbXB0eUNsaWNrXCI+e3sgb3B0aW9uLmJ0blRleHQgfX08L3ZpZXc+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuLy8g5byV5YWl5YWo5bGA6YWN572uXHJcbmltcG9ydCBHbG9iYWxPcHRpb24gZnJvbSAnLi8uLi9tZXNjcm9sbC11bmktb3B0aW9uLmpzJztcclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdHByb3BzOiB7XHJcblx0XHQvLyBlbXB0eeeahOmFjee9rumhuTog6buY6K6k5Li6R2xvYmFsT3B0aW9uLnVwLmVtcHR5XHJcblx0XHRvcHRpb246IHtcclxuXHRcdFx0dHlwZTogT2JqZWN0LFxyXG5cdFx0XHRkZWZhdWx0KCkge1xyXG5cdFx0XHRcdHJldHVybiB7fTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0sXHJcblx0Ly8g5L2/55SoY29tcHV0ZWTojrflj5bphY3nva4s55So5LqO5pSv5oyBb3B0aW9u55qE5Yqo5oCB6YWN572uXHJcblx0Y29tcHV0ZWQ6IHtcclxuXHRcdC8vIOWbvuagh1xyXG5cdFx0aWNvbigpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMub3B0aW9uLmljb24gPT0gbnVsbCA/IEdsb2JhbE9wdGlvbi51cC5lbXB0eS5pY29uIDogdGhpcy5vcHRpb24uaWNvbjsgLy8g5q2k5aSE5LiN5L2/55So55+t6Lev5rGC5YC8LCDnlKjkuo7mlK/mjIHkvKDnqbrkuLLkuI3mmL7npLrlm77moIdcclxuXHRcdH0sXHJcblx0XHQvLyDmlofmnKzmj5DnpLpcclxuXHRcdHRpcCgpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMub3B0aW9uLnRpcCA9PSBudWxsID8gR2xvYmFsT3B0aW9uLnVwLmVtcHR5LnRpcCA6IHRoaXMub3B0aW9uLnRpcDsgLy8g5q2k5aSE5LiN5L2/55So55+t6Lev5rGC5YC8LCDnlKjkuo7mlK/mjIHkvKDnqbrkuLLkuI3mmL7npLrmlofmnKzmj5DnpLpcclxuXHRcdH1cclxuXHR9LFxyXG5cdG1ldGhvZHM6IHtcclxuXHRcdC8vIOeCueWHu+aMiemSrlxyXG5cdFx0ZW1wdHlDbGljaygpIHtcclxuXHRcdFx0dGhpcy4kZW1pdCgnZW1wdHljbGljaycpO1xyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cclxuQGltcG9ydCAnQC9zdHlsZS9taXhpbi5zY3NzJztcclxuLyog5peg5Lu75L2V5pWw5o2u55qE56m65biD5bGAICovXHJcbi5tZXNjcm9sbC1lbXB0eSB7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRwYWRkaW5nOiAxMDBycHggNTBycHg7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdC8qICNlbmRpZiAqL1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm1lc2Nyb2xsLWVtcHR5LmVtcHR5LWZpeGVkIHtcclxuXHR6LWluZGV4OiA5OTtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7IC8qdHJhbnNmb3Jt5Lya5L2/Zml4ZWTlpLHmlYgs5pyA57uI5Lya6ZmN57qn5Li6YWJzb2x1dGUgKi9cclxuXHR0b3A6IDEwMHJweDtcclxuXHRsZWZ0OiAwO1xyXG59XHJcblxyXG4ubWVzY3JvbGwtZW1wdHkgLmVtcHR5LWljb24ge1xyXG5cdHdpZHRoOiAyODBycHg7XHJcblx0aGVpZ2h0OiAyODBycHg7XHJcbn1cclxuXHJcbi5tZXNjcm9sbC1lbXB0eSAuZW1wdHktdGlwIHtcclxuXHRtYXJnaW4tdG9wOiAyMHJweDtcclxuXHRmb250LXNpemU6IDI0cnB4O1xyXG5cdGNvbG9yOiBncmF5O1xyXG59XHJcblxyXG4ubWVzY3JvbGwtZW1wdHkgLmVtcHR5LWJ0biB7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdG1hcmdpbi10b3A6IDQwcnB4O1xyXG5cdG1pbi13aWR0aDogMjAwcnB4O1xyXG5cdHBhZGRpbmc6IDE4cnB4O1xyXG5cdGZvbnQtc2l6ZTogMjhycHg7XHJcblx0Ym9yZGVyOiAxcnB4IHNvbGlkICNlMDRiMjg7XHJcblx0Ym9yZGVyLXJhZGl1czogNjBycHg7XHJcblx0Y29sb3I6ICNlMDRiMjg7XHJcbn1cclxuXHJcbi5tZXNjcm9sbC1lbXB0eSAuZW1wdHktYnRuOmFjdGl2ZSB7XHJcblx0b3BhY2l0eTogMC43NTtcclxufVxyXG48L3N0eWxlPlxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///76\n");

/***/ }),
/* 77 */
/*!******************************************************************************************!*\
  !*** D:/uniapp/uniapp-simple/components/common/mescroll-uni/components/mescroll-top.vue ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mescroll_top_vue_vue_type_template_id_1062ba10___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mescroll-top.vue?vue&type=template&id=1062ba10& */ 78);\n/* harmony import */ var _mescroll_top_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mescroll-top.vue?vue&type=script&lang=js& */ 80);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _mescroll_top_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _mescroll_top_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 17);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _mescroll_top_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _mescroll_top_vue_vue_type_template_id_1062ba10___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _mescroll_top_vue_vue_type_template_id_1062ba10___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _mescroll_top_vue_vue_type_template_id_1062ba10___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"components/common/mescroll-uni/components/mescroll-top.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUg7QUFDekg7QUFDZ0U7QUFDTDs7O0FBRzNEO0FBQzZLO0FBQzdLLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLGtGQUFNO0FBQ1IsRUFBRSx1RkFBTTtBQUNSLEVBQUUsZ0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMkZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiNzcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL21lc2Nyb2xsLXRvcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTA2MmJhMTAmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9tZXNjcm9sbC10b3AudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9tZXNjcm9sbC10b3AudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi/lronoo4XljIUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL2NvbW1vbi9tZXNjcm9sbC11bmkvY29tcG9uZW50cy9tZXNjcm9sbC10b3AudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///77\n");

/***/ }),
/* 78 */
/*!*************************************************************************************************************************!*\
  !*** D:/uniapp/uniapp-simple/components/common/mescroll-uni/components/mescroll-top.vue?vue&type=template&id=1062ba10& ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_top_vue_vue_type_template_id_1062ba10___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./mescroll-top.vue?vue&type=template&id=1062ba10& */ 79);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_top_vue_vue_type_template_id_1062ba10___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_top_vue_vue_type_template_id_1062ba10___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_top_vue_vue_type_template_id_1062ba10___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_top_vue_vue_type_template_id_1062ba10___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 79 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/uniapp/uniapp-simple/components/common/mescroll-uni/components/mescroll-top.vue?vue&type=template&id=1062ba10& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._$s(0, "i", _vm.mOption.src)
    ? _c("image", {
        staticClass: _vm._$s(0, "sc", "mescroll-totop"),
        class: _vm._$s(0, "c", [
          _vm.value ? "mescroll-totop-in" : "mescroll-totop-out",
          { "mescroll-totop-safearea": _vm.mOption.safearea }
        ]),
        style: _vm._$s(0, "s", {
          "z-index": _vm.mOption.zIndex,
          left: _vm.left,
          right: _vm.right,
          bottom: _vm.addUnit(_vm.mOption.bottom),
          width: _vm.addUnit(_vm.mOption.width),
          "border-radius": _vm.addUnit(_vm.mOption.radius)
        }),
        attrs: { src: _vm._$s(0, "a-src", _vm.mOption.src), _i: 0 },
        on: { click: _vm.toTopClick }
      })
    : _vm._e()
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 80 */
/*!*******************************************************************************************************************!*\
  !*** D:/uniapp/uniapp-simple/components/common/mescroll-uni/components/mescroll-top.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_top_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./mescroll-top.vue?vue&type=script&lang=js& */ 81);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_top_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_top_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_top_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_top_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_top_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdsQixDQUFnQixra0JBQUcsRUFBQyIsImZpbGUiOiI4MC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL+WuieijheWMhS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tZXNjcm9sbC10b3AudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL+WuieijheWMhS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL+WuieijheWMhS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uLy4uL+WuieijheWMhS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi8uLi8uLi8uLi/lronoo4XljIUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbWVzY3JvbGwtdG9wLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///80\n");

/***/ }),
/* 81 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/uniapp/uniapp-simple/components/common/mescroll-uni/components/mescroll-top.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  props: {\n    // up.toTop的配置项\n    option: Object,\n    // 是否显示\n    value: false },\n\n  computed: {\n    // 支付宝小程序需写成计算属性,prop定义default仍报错\n    mOption: function mOption() {\n      return this.option || {};\n    },\n    // 优先显示左边\n    left: function left() {\n      return this.mOption.left ? this.addUnit(this.mOption.left) : 'auto';\n    },\n    // 右边距离 (优先显示左边)\n    right: function right() {\n      return this.mOption.left ? 'auto' : this.addUnit(this.mOption.right);\n    } },\n\n  methods: {\n    addUnit: function addUnit(num) {\n      if (!num) return 0;\n      if (typeof num === 'number') return num + 'rpx';\n      return num;\n    },\n    toTopClick: function toTopClick() {\n      this.$emit('input', false); // 使v-model生效\n      this.$emit('click'); // 派发点击事件\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9jb21tb24vbWVzY3JvbGwtdW5pL2NvbXBvbmVudHMvbWVzY3JvbGwtdG9wLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQWNBO0FBQ0E7QUFDQTtBQUNBLGtCQUZBO0FBR0E7QUFDQSxnQkFKQSxFQURBOztBQU9BO0FBQ0E7QUFDQSxXQUZBLHFCQUVBO0FBQ0E7QUFDQSxLQUpBO0FBS0E7QUFDQSxRQU5BLGtCQU1BO0FBQ0E7QUFDQSxLQVJBO0FBU0E7QUFDQSxTQVZBLG1CQVVBO0FBQ0E7QUFDQSxLQVpBLEVBUEE7O0FBcUJBO0FBQ0EsV0FEQSxtQkFDQSxHQURBLEVBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUxBO0FBTUEsY0FOQSx3QkFNQTtBQUNBLGlDQURBLENBQ0E7QUFDQSwwQkFGQSxDQUVBO0FBQ0EsS0FUQSxFQXJCQSxFIiwiZmlsZSI6IjgxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPCEtLSDlm57liLDpobbpg6jnmoTmjInpkq4gLS0+XHJcbjx0ZW1wbGF0ZT5cclxuXHQ8aW1hZ2VcclxuXHRcdHYtaWY9XCJtT3B0aW9uLnNyY1wiXHJcblx0XHRjbGFzcz1cIm1lc2Nyb2xsLXRvdG9wXCJcclxuXHRcdDpjbGFzcz1cIlt2YWx1ZSA/ICdtZXNjcm9sbC10b3RvcC1pbicgOiAnbWVzY3JvbGwtdG90b3Atb3V0JywgeydtZXNjcm9sbC10b3RvcC1zYWZlYXJlYSc6IG1PcHRpb24uc2FmZWFyZWF9XVwiXHJcblx0XHQ6c3R5bGU9XCJ7J3otaW5kZXgnOm1PcHRpb24uekluZGV4LCAnbGVmdCc6IGxlZnQsICdyaWdodCc6IHJpZ2h0LCAnYm90dG9tJzphZGRVbml0KG1PcHRpb24uYm90dG9tKSwgJ3dpZHRoJzphZGRVbml0KG1PcHRpb24ud2lkdGgpLCAnYm9yZGVyLXJhZGl1cyc6YWRkVW5pdChtT3B0aW9uLnJhZGl1cyl9XCJcclxuXHRcdDpzcmM9XCJtT3B0aW9uLnNyY1wiXHJcblx0XHRtb2RlPVwid2lkdGhGaXhcIlxyXG5cdFx0QGNsaWNrPVwidG9Ub3BDbGlja1wiXHJcblx0Lz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRwcm9wczoge1xyXG5cdFx0Ly8gdXAudG9Ub3DnmoTphY3nva7poblcclxuXHRcdG9wdGlvbjogT2JqZWN0LFxyXG5cdFx0Ly8g5piv5ZCm5pi+56S6XHJcblx0XHR2YWx1ZTogZmFsc2VcclxuXHR9LFxyXG5cdGNvbXB1dGVkOiB7XHJcblx0XHQvLyDmlK/ku5jlrp3lsI/nqIvluo/pnIDlhpnmiJDorqHnrpflsZ7mgKcscHJvcOWumuS5iWRlZmF1bHTku43miqXplJlcclxuXHRcdG1PcHRpb24oKXtcclxuXHRcdFx0cmV0dXJuIHRoaXMub3B0aW9uIHx8IHt9XHJcblx0XHR9LFxyXG5cdFx0Ly8g5LyY5YWI5pi+56S65bem6L65XHJcblx0XHRsZWZ0KCl7XHJcblx0XHRcdHJldHVybiB0aGlzLm1PcHRpb24ubGVmdCA/IHRoaXMuYWRkVW5pdCh0aGlzLm1PcHRpb24ubGVmdCkgOiAnYXV0byc7XHJcblx0XHR9LFxyXG5cdFx0Ly8g5Y+z6L656Led56a7ICjkvJjlhYjmmL7npLrlt6bovrkpXHJcblx0XHRyaWdodCgpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMubU9wdGlvbi5sZWZ0ID8gJ2F1dG8nIDogdGhpcy5hZGRVbml0KHRoaXMubU9wdGlvbi5yaWdodCk7XHJcblx0XHR9XHJcblx0fSxcclxuXHRtZXRob2RzOiB7XHJcblx0XHRhZGRVbml0KG51bSl7XHJcblx0XHRcdGlmKCFudW0pIHJldHVybiAwO1xyXG5cdFx0XHRpZih0eXBlb2YgbnVtID09PSAnbnVtYmVyJykgcmV0dXJuIG51bSArICdycHgnO1xyXG5cdFx0XHRyZXR1cm4gbnVtXHJcblx0XHR9LFxyXG5cdFx0dG9Ub3BDbGljaygpIHtcclxuXHRcdFx0dGhpcy4kZW1pdCgnaW5wdXQnLCBmYWxzZSk7IC8vIOS9v3YtbW9kZWznlJ/mlYhcclxuXHRcdFx0dGhpcy4kZW1pdCgnY2xpY2snKTsgLy8g5rS+5Y+R54K55Ye75LqL5Lu2XHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuLyog5Zue5Yiw6aG26YOo55qE5oyJ6ZKuICovXHJcbi5tZXNjcm9sbC10b3RvcCB7XHJcblx0ei1pbmRleDogOTk5MDtcclxuXHRwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDsgLyog5Yqg5LiKaW1wb3J0YW506YG/5YWN57yW6K+R5YiwSDUs5Zyo5aSabWVzY3JvbGzkuK3lrprkvY3lpLHmlYggKi9cclxuXHRyaWdodDogMjBycHg7XHJcblx0Ym90dG9tOiAxMjBycHg7XHJcblx0d2lkdGg6IDcycnB4O1xyXG5cdGhlaWdodDogYXV0bztcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0b3BhY2l0eTogMDtcclxuXHR0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXM7IC8qIOi/h+a4oSAqL1xyXG5cdG1hcmdpbi1ib3R0b206IHZhcigtLXdpbmRvdy1ib3R0b20pOyAvKiBjc3Plj5jph48gKi9cclxufVxyXG5cclxuLyog6YCC6YWNIGlQaG9uZVggKi9cclxuQHN1cHBvcnRzIChib3R0b206IGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pKSBvciAoYm90dG9tOiBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSkpIHtcclxuXHQubWVzY3JvbGwtdG90b3Atc2FmZWFyZWEge1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS13aW5kb3ctYm90dG9tKSArIGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pKTsgLyogd2luZG93LWJvdHRvbSArIOmAgumFjSBpUGhvbmVYICovXHJcblx0XHRtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXdpbmRvdy1ib3R0b20pICsgZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pKTtcclxuXHR9XHJcbn1cclxuXHJcbi8qIOaYvuekuiAtLSDmt6HlhaUgKi9cclxuLm1lc2Nyb2xsLXRvdG9wLWluIHtcclxuXHRvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiDpmpDol48gLS0g5reh5Ye65LiU5LiN5o6l5pS25LqL5Lu2Ki9cclxuLm1lc2Nyb2xsLXRvdG9wLW91dCB7XHJcblx0b3BhY2l0eTogMDtcclxuXHRwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG48L3N0eWxlPlxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///81\n");

/***/ }),
/* 82 */
/*!*******************************************************!*\
  !*** D:/uniapp/uniapp-simple/colorui/basics/home.vue ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_vue_vue_type_template_id_1d83f99a_name_basics___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.vue?vue&type=template&id=1d83f99a&name=basics& */ 83);\n/* harmony import */ var _home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.vue?vue&type=script&lang=js& */ 85);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 17);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _home_vue_vue_type_template_id_1d83f99a_name_basics___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _home_vue_vue_type_template_id_1d83f99a_name_basics___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _home_vue_vue_type_template_id_1d83f99a_name_basics___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"colorui/basics/home.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDd0Q7QUFDTDs7O0FBR25EO0FBQ3VLO0FBQ3ZLLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLDBFQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiODIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2hvbWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFkODNmOTlhJm5hbWU9YmFzaWNzJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaG9tZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi/lronoo4XljIUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb2xvcnVpL2Jhc2ljcy9ob21lLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///82\n");

/***/ }),
/* 83 */
/*!**************************************************************************************************!*\
  !*** D:/uniapp/uniapp-simple/colorui/basics/home.vue?vue&type=template&id=1d83f99a&name=basics& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_1d83f99a_name_basics___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./home.vue?vue&type=template&id=1d83f99a&name=basics& */ 84);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_1d83f99a_name_basics___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_1d83f99a_name_basics___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_1d83f99a_name_basics___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_1d83f99a_name_basics___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 84 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/uniapp/uniapp-simple/colorui/basics/home.vue?vue&type=template&id=1d83f99a&name=basics& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", [
    _c(
      "scroll-view",
      { staticClass: _vm._$s(1, "sc", "page"), attrs: { _i: 1 } },
      [
        _c(
          "view",
          { staticClass: _vm._$s(2, "sc", "nav-list"), attrs: { _i: 2 } },
          _vm._l(_vm._$s(3, "f", { forItems: _vm.elements }), function(
            item,
            index,
            $20,
            $30
          ) {
            return _c(
              "navigator",
              {
                key: _vm._$s(3, "f", { forIndex: $20, key: index }),
                staticClass: _vm._$s("3-" + $30, "sc", "nav-li"),
                class: _vm._$s("3-" + $30, "c", "bg-" + item.color),
                style: _vm._$s("3-" + $30, "s", [
                  { animation: "show " + ((index + 1) * 0.2 + 1) + "s 1" }
                ]),
                attrs: {
                  url: _vm._$s(
                    "3-" + $30,
                    "a-url",
                    "/pages/basics/" + item.name
                  ),
                  _i: "3-" + $30
                }
              },
              [
                _c(
                  "view",
                  {
                    staticClass: _vm._$s("4-" + $30, "sc", "nav-title"),
                    attrs: { _i: "4-" + $30 }
                  },
                  [_vm._v(_vm._$s("4-" + $30, "t0-0", _vm._s(item.title)))]
                ),
                _c(
                  "view",
                  {
                    staticClass: _vm._$s("5-" + $30, "sc", "nav-name"),
                    attrs: { _i: "5-" + $30 }
                  },
                  [_vm._v(_vm._$s("5-" + $30, "t0-0", _vm._s(item.name)))]
                ),
                _c("text", {
                  class: _vm._$s("6-" + $30, "c", "cuIcon-" + item.cuIcon),
                  attrs: { _i: "6-" + $30 }
                })
              ]
            )
          }),
          0
        ),
        _c("view", {
          staticClass: _vm._$s(7, "sc", "cu-tabbar-height"),
          attrs: { _i: 7 }
        })
      ]
    )
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 85 */
/*!********************************************************************************!*\
  !*** D:/uniapp/uniapp-simple/colorui/basics/home.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./home.vue?vue&type=script&lang=js& */ 86);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdqQixDQUFnQiwwakJBQUcsRUFBQyIsImZpbGUiOiI4NS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uL+WuieijheWMhS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ob21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi/lronoo4XljIUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi/lronoo4XljIUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi/lronoo4XljIUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///85\n");

/***/ }),
/* 86 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/uniapp/uniapp-simple/colorui/basics/home.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  name: \"basics\",\n  data: function data() {\n    return {\n      elements: [{\n        title: '布局',\n        name: 'layout',\n        color: 'cyan',\n        cuIcon: 'newsfill' },\n\n      {\n        title: '背景',\n        name: 'background',\n        color: 'blue',\n        cuIcon: 'colorlens' },\n\n      {\n        title: '文本',\n        name: 'text',\n        color: 'purple',\n        cuIcon: 'font' },\n\n      {\n        title: '图标 ',\n        name: 'icon',\n        color: 'mauve',\n        cuIcon: 'cuIcon' },\n\n      {\n        title: '按钮',\n        name: 'button',\n        color: 'pink',\n        cuIcon: 'btn' },\n\n      {\n        title: '标签',\n        name: 'tag',\n        color: 'brown',\n        cuIcon: 'tagfill' },\n\n      {\n        title: '头像',\n        name: 'avatar',\n        color: 'red',\n        cuIcon: 'myfill' },\n\n      {\n        title: '进度条',\n        name: 'progress',\n        color: 'orange',\n        cuIcon: 'icloading' },\n\n      {\n        title: '边框阴影',\n        name: 'shadow',\n        color: 'olive',\n        cuIcon: 'copy' },\n\n      {\n        title: '加载',\n        name: 'loading',\n        color: 'green',\n        cuIcon: 'loading2' }] };\n\n\n\n  },\n  onShow: function onShow() {\n    __f__(\"log\", \"success\", \" at colorui/basics/home.vue:86\");\n  } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 30)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29sb3J1aS9iYXNpY3MvaG9tZS52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7QUFDQSxnQkFEQTtBQUVBLE1BRkEsa0JBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBREE7QUFFQSxzQkFGQTtBQUdBLHFCQUhBO0FBSUEsMEJBSkE7O0FBTUE7QUFDQSxtQkFEQTtBQUVBLDBCQUZBO0FBR0EscUJBSEE7QUFJQSwyQkFKQSxFQU5BOztBQVlBO0FBQ0EsbUJBREE7QUFFQSxvQkFGQTtBQUdBLHVCQUhBO0FBSUEsc0JBSkEsRUFaQTs7QUFrQkE7QUFDQSxvQkFEQTtBQUVBLG9CQUZBO0FBR0Esc0JBSEE7QUFJQSx3QkFKQSxFQWxCQTs7QUF3QkE7QUFDQSxtQkFEQTtBQUVBLHNCQUZBO0FBR0EscUJBSEE7QUFJQSxxQkFKQSxFQXhCQTs7QUE4QkE7QUFDQSxtQkFEQTtBQUVBLG1CQUZBO0FBR0Esc0JBSEE7QUFJQSx5QkFKQSxFQTlCQTs7QUFvQ0E7QUFDQSxtQkFEQTtBQUVBLHNCQUZBO0FBR0Esb0JBSEE7QUFJQSx3QkFKQSxFQXBDQTs7QUEwQ0E7QUFDQSxvQkFEQTtBQUVBLHdCQUZBO0FBR0EsdUJBSEE7QUFJQSwyQkFKQSxFQTFDQTs7QUFnREE7QUFDQSxxQkFEQTtBQUVBLHNCQUZBO0FBR0Esc0JBSEE7QUFJQSxzQkFKQSxFQWhEQTs7QUFzREE7QUFDQSxtQkFEQTtBQUVBLHVCQUZBO0FBR0Esc0JBSEE7QUFJQSwwQkFKQSxFQXREQSxDQURBOzs7O0FBK0RBLEdBbEVBO0FBbUVBLFFBbkVBLG9CQW1FQTtBQUNBO0FBQ0EsR0FyRUEsRSIsImZpbGUiOiI4Ni5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZSBuYW1lPVwiYmFzaWNzXCI+XG5cdDx2aWV3PlxuXHRcdDxzY3JvbGwtdmlldyBzY3JvbGwteSBjbGFzcz1cInBhZ2VcIj5cblx0XHRcdDx2aWV3IGNsYXNzPVwibmF2LWxpc3RcIj5cblx0XHRcdFx0PG5hdmlnYXRvciBob3Zlci1jbGFzcz1cIm5vbmVcIiA6dXJsPVwiJy9wYWdlcy9iYXNpY3MvJyArIGl0ZW0ubmFtZVwiIGNsYXNzPVwibmF2LWxpXCIgbmF2aWdhdGVUbyA6Y2xhc3M9XCInYmctJytpdGVtLmNvbG9yXCJcblx0XHRcdFx0IDpzdHlsZT1cIlt7YW5pbWF0aW9uOiAnc2hvdyAnICsgKChpbmRleCsxKSowLjIrMSkgKyAncyAxJ31dXCIgdi1mb3I9XCIoaXRlbSxpbmRleCkgaW4gZWxlbWVudHNcIiA6a2V5PVwiaW5kZXhcIj5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm5hdi10aXRsZVwiPnt7aXRlbS50aXRsZX19PC92aWV3PlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibmF2LW5hbWVcIj57e2l0ZW0ubmFtZX19PC92aWV3PlxuXHRcdFx0XHRcdDx0ZXh0IDpjbGFzcz1cIidjdUljb24tJyArIGl0ZW0uY3VJY29uXCI+PC90ZXh0PlxuXHRcdFx0XHQ8L25hdmlnYXRvcj5cblx0XHRcdDwvdmlldz5cblx0XHRcdDx2aWV3IGNsYXNzPVwiY3UtdGFiYmFyLWhlaWdodFwiPjwvdmlldz5cblx0XHQ8L3Njcm9sbC12aWV3PlxuXHQ8L3ZpZXc+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0bmFtZTogXCJiYXNpY3NcIixcblx0XHRkYXRhKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0ZWxlbWVudHM6IFt7XG5cdFx0XHRcdFx0XHR0aXRsZTogJ+W4g+WxgCcsXG5cdFx0XHRcdFx0XHRuYW1lOiAnbGF5b3V0Jyxcblx0XHRcdFx0XHRcdGNvbG9yOiAnY3lhbicsXG5cdFx0XHRcdFx0XHRjdUljb246ICduZXdzZmlsbCdcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRpdGxlOiAn6IOM5pmvJyxcblx0XHRcdFx0XHRcdG5hbWU6ICdiYWNrZ3JvdW5kJyxcblx0XHRcdFx0XHRcdGNvbG9yOiAnYmx1ZScsXG5cdFx0XHRcdFx0XHRjdUljb246ICdjb2xvcmxlbnMnXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aXRsZTogJ+aWh+acrCcsXG5cdFx0XHRcdFx0XHRuYW1lOiAndGV4dCcsXG5cdFx0XHRcdFx0XHRjb2xvcjogJ3B1cnBsZScsXG5cdFx0XHRcdFx0XHRjdUljb246ICdmb250J1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGl0bGU6ICflm77moIcgJyxcblx0XHRcdFx0XHRcdG5hbWU6ICdpY29uJyxcblx0XHRcdFx0XHRcdGNvbG9yOiAnbWF1dmUnLFxuXHRcdFx0XHRcdFx0Y3VJY29uOiAnY3VJY29uJ1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGl0bGU6ICfmjInpkq4nLFxuXHRcdFx0XHRcdFx0bmFtZTogJ2J1dHRvbicsXG5cdFx0XHRcdFx0XHRjb2xvcjogJ3BpbmsnLFxuXHRcdFx0XHRcdFx0Y3VJY29uOiAnYnRuJ1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGl0bGU6ICfmoIfnrb4nLFxuXHRcdFx0XHRcdFx0bmFtZTogJ3RhZycsXG5cdFx0XHRcdFx0XHRjb2xvcjogJ2Jyb3duJyxcblx0XHRcdFx0XHRcdGN1SWNvbjogJ3RhZ2ZpbGwnXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aXRsZTogJ+WktOWDjycsXG5cdFx0XHRcdFx0XHRuYW1lOiAnYXZhdGFyJyxcblx0XHRcdFx0XHRcdGNvbG9yOiAncmVkJyxcblx0XHRcdFx0XHRcdGN1SWNvbjogJ215ZmlsbCdcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRpdGxlOiAn6L+b5bqm5p2hJyxcblx0XHRcdFx0XHRcdG5hbWU6ICdwcm9ncmVzcycsXG5cdFx0XHRcdFx0XHRjb2xvcjogJ29yYW5nZScsXG5cdFx0XHRcdFx0XHRjdUljb246ICdpY2xvYWRpbmcnXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aXRsZTogJ+i+ueahhumYtOW9sScsXG5cdFx0XHRcdFx0XHRuYW1lOiAnc2hhZG93Jyxcblx0XHRcdFx0XHRcdGNvbG9yOiAnb2xpdmUnLFxuXHRcdFx0XHRcdFx0Y3VJY29uOiAnY29weSdcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRpdGxlOiAn5Yqg6L29Jyxcblx0XHRcdFx0XHRcdG5hbWU6ICdsb2FkaW5nJyxcblx0XHRcdFx0XHRcdGNvbG9yOiAnZ3JlZW4nLFxuXHRcdFx0XHRcdFx0Y3VJY29uOiAnbG9hZGluZzInXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRdLFxuXHRcdFx0fTtcblx0XHR9LFxuXHRcdG9uU2hvdygpIHtcblx0XHRcdGNvbnNvbGUubG9nKFwic3VjY2Vzc1wiKVxuXHRcdH1cblx0fVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblx0LnBhZ2Uge1xuXHRcdGhlaWdodDogMTAwdmg7XG5cdH1cbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///86\n");

/***/ }),
/* 87 */
/*!****************************************************************!*\
  !*** D:/uniapp/uniapp-simple/colorui/components/cu-custom.vue ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cu_custom_vue_vue_type_template_id_213e6c59___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cu-custom.vue?vue&type=template&id=213e6c59& */ 88);\n/* harmony import */ var _cu_custom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cu-custom.vue?vue&type=script&lang=js& */ 90);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _cu_custom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _cu_custom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 17);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _cu_custom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _cu_custom_vue_vue_type_template_id_213e6c59___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _cu_custom_vue_vue_type_template_id_213e6c59___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _cu_custom_vue_vue_type_template_id_213e6c59___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"colorui/components/cu-custom.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBc0g7QUFDdEg7QUFDNkQ7QUFDTDs7O0FBR3hEO0FBQ3VLO0FBQ3ZLLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLCtFQUFNO0FBQ1IsRUFBRSxvRkFBTTtBQUNSLEVBQUUsNkZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsd0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiODcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2N1LWN1c3RvbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjEzZTZjNTkmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9jdS1jdXN0b20udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9jdS1jdXN0b20udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi/lronoo4XljIUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb2xvcnVpL2NvbXBvbmVudHMvY3UtY3VzdG9tLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///87\n");

/***/ }),
/* 88 */
/*!***********************************************************************************************!*\
  !*** D:/uniapp/uniapp-simple/colorui/components/cu-custom.vue?vue&type=template&id=213e6c59& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_cu_custom_vue_vue_type_template_id_213e6c59___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./cu-custom.vue?vue&type=template&id=213e6c59& */ 89);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_cu_custom_vue_vue_type_template_id_213e6c59___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_cu_custom_vue_vue_type_template_id_213e6c59___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_cu_custom_vue_vue_type_template_id_213e6c59___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_cu_custom_vue_vue_type_template_id_213e6c59___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 89 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/uniapp/uniapp-simple/colorui/components/cu-custom.vue?vue&type=template&id=213e6c59& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", [
    _c(
      "view",
      {
        staticClass: _vm._$s(1, "sc", "cu-custom"),
        style: _vm._$s(1, "s", [{ height: _vm.CustomBar + "px" }]),
        attrs: { _i: 1 }
      },
      [
        _c(
          "view",
          {
            staticClass: _vm._$s(2, "sc", "cu-bar fixed"),
            class: _vm._$s(2, "c", [
              _vm.bgImage != "" ? "none-bg text-white bg-img" : "",
              _vm.bgColor
            ]),
            style: _vm._$s(2, "s", _vm.style),
            attrs: { _i: 2 }
          },
          [
            _vm._$s(3, "i", _vm.isBack)
              ? _c(
                  "view",
                  {
                    staticClass: _vm._$s(3, "sc", "action"),
                    attrs: { _i: 3 },
                    on: { click: _vm.BackPage }
                  },
                  [
                    _c("text", {
                      staticClass: _vm._$s(4, "sc", "cuIcon-back"),
                      attrs: { _i: 4 }
                    }),
                    _vm._t("backText", null, { _i: 5 })
                  ],
                  2
                )
              : _vm._e(),
            _c(
              "view",
              {
                staticClass: _vm._$s(6, "sc", "content"),
                style: _vm._$s(6, "s", [{ top: _vm.StatusBar + "px" }]),
                attrs: { _i: 6 }
              },
              [_vm._t("content", null, { _i: 7 })],
              2
            ),
            _vm._t("right", null, { _i: 8 })
          ],
          2
        )
      ]
    )
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 90 */
/*!*****************************************************************************************!*\
  !*** D:/uniapp/uniapp-simple/colorui/components/cu-custom.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_cu_custom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./cu-custom.vue?vue&type=script&lang=js& */ 91);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_cu_custom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_cu_custom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_cu_custom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_cu_custom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_cu_custom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFqQixDQUFnQiwrakJBQUcsRUFBQyIsImZpbGUiOiI5MC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uL+WuieijheWMhS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jdS1jdXN0b20udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL+WuieijheWMhS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL+WuieijheWMhS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uL+WuieijheWMhS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi8uLi/lronoo4XljIUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY3UtY3VzdG9tLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///90\n");

/***/ }),
/* 91 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/uniapp/uniapp-simple/colorui/components/cu-custom.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {\n      StatusBar: this.StatusBar,\n      CustomBar: this.CustomBar };\n\n  },\n  name: 'cu-custom',\n  computed: {\n    style: function style() {\n      var StatusBar = this.StatusBar;\n      var CustomBar = this.CustomBar;\n      var bgImage = this.bgImage;\n      var style = \"height:\".concat(CustomBar, \"px;padding-top:\").concat(StatusBar, \"px;\");\n      if (this.bgImage) {\n        style = \"\".concat(style, \"background-image:url(\").concat(bgImage, \");\");\n      }\n      return style;\n    } },\n\n  props: {\n    bgColor: {\n      type: String,\n      default: '' },\n\n    isBack: {\n      type: [Boolean, String],\n      default: false },\n\n    bgImage: {\n      type: String,\n      default: '' } },\n\n\n  methods: {\n    BackPage: function BackPage() {\n      if (getCurrentPages().length < 2 && 'undefined' !== typeof __wxConfig) {\n        var url = '/' + __wxConfig.pages[0];\n        return uni.redirectTo({ url: url });\n      }\n      uni.navigateBack({\n        delta: 1 });\n\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29sb3J1aS9jb21wb25lbnRzL2N1LWN1c3RvbS52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBO0FBQ0EsTUFEQSxrQkFDQTtBQUNBO0FBQ0EsK0JBREE7QUFFQSwrQkFGQTs7QUFJQSxHQU5BO0FBT0EsbUJBUEE7QUFRQTtBQUNBLFNBREEsbUJBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FWQSxFQVJBOztBQW9CQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSxpQkFGQSxFQURBOztBQUtBO0FBQ0EsNkJBREE7QUFFQSxvQkFGQSxFQUxBOztBQVNBO0FBQ0Esa0JBREE7QUFFQSxpQkFGQSxFQVRBLEVBcEJBOzs7QUFrQ0E7QUFDQSxZQURBLHNCQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQURBOztBQUdBLEtBVEEsRUFsQ0EsRSIsImZpbGUiOiI5MS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PHZpZXc+XG5cdFx0PHZpZXcgY2xhc3M9XCJjdS1jdXN0b21cIiA6c3R5bGU9XCJbe2hlaWdodDpDdXN0b21CYXIgKyAncHgnfV1cIj5cblx0XHRcdDx2aWV3IGNsYXNzPVwiY3UtYmFyIGZpeGVkXCIgOnN0eWxlPVwic3R5bGVcIiA6Y2xhc3M9XCJbYmdJbWFnZSE9Jyc/J25vbmUtYmcgdGV4dC13aGl0ZSBiZy1pbWcnOicnLGJnQ29sb3JdXCI+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiYWN0aW9uXCIgQHRhcD1cIkJhY2tQYWdlXCIgdi1pZj1cImlzQmFja1wiPlxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiY3VJY29uLWJhY2tcIj48L3RleHQ+XG5cdFx0XHRcdFx0PHNsb3QgbmFtZT1cImJhY2tUZXh0XCI+PC9zbG90PlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiY29udGVudFwiIDpzdHlsZT1cIlt7dG9wOlN0YXR1c0JhciArICdweCd9XVwiPlxuXHRcdFx0XHRcdDxzbG90IG5hbWU9XCJjb250ZW50XCI+PC9zbG90PlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdDxzbG90IG5hbWU9XCJyaWdodFwiPjwvc2xvdD5cblx0XHRcdDwvdmlldz5cblx0XHQ8L3ZpZXc+XG5cdDwvdmlldz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRkYXRhKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0U3RhdHVzQmFyOiB0aGlzLlN0YXR1c0Jhcixcblx0XHRcdFx0Q3VzdG9tQmFyOiB0aGlzLkN1c3RvbUJhclxuXHRcdFx0fTtcblx0XHR9LFxuXHRcdG5hbWU6ICdjdS1jdXN0b20nLFxuXHRcdGNvbXB1dGVkOiB7XG5cdFx0XHRzdHlsZSgpIHtcblx0XHRcdFx0dmFyIFN0YXR1c0Jhcj0gdGhpcy5TdGF0dXNCYXI7XG5cdFx0XHRcdHZhciBDdXN0b21CYXI9IHRoaXMuQ3VzdG9tQmFyO1xuXHRcdFx0XHR2YXIgYmdJbWFnZSA9IHRoaXMuYmdJbWFnZTtcblx0XHRcdFx0dmFyIHN0eWxlID0gYGhlaWdodDoke0N1c3RvbUJhcn1weDtwYWRkaW5nLXRvcDoke1N0YXR1c0Jhcn1weDtgO1xuXHRcdFx0XHRpZiAodGhpcy5iZ0ltYWdlKSB7XG5cdFx0XHRcdFx0c3R5bGUgPSBgJHtzdHlsZX1iYWNrZ3JvdW5kLWltYWdlOnVybCgke2JnSW1hZ2V9KTtgO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBzdHlsZVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0cHJvcHM6IHtcblx0XHRcdGJnQ29sb3I6IHtcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0XHRkZWZhdWx0OiAnJ1xuXHRcdFx0fSxcblx0XHRcdGlzQmFjazoge1xuXHRcdFx0XHR0eXBlOiBbQm9vbGVhbiwgU3RyaW5nXSxcblx0XHRcdFx0ZGVmYXVsdDogZmFsc2Vcblx0XHRcdH0sXG5cdFx0XHRiZ0ltYWdlOiB7XG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcblx0XHRcdFx0ZGVmYXVsdDogJydcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRtZXRob2RzOiB7XG5cdFx0XHRCYWNrUGFnZSgpIHtcblx0XHRcdFx0aWYgKGdldEN1cnJlbnRQYWdlcygpLmxlbmd0aCA8IDIgJiYgJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiBfX3d4Q29uZmlnKSB7XG5cdFx0XHRcdFx0bGV0IHVybCA9ICcvJyArIF9fd3hDb25maWcucGFnZXNbMF1cblx0XHRcdFx0XHRyZXR1cm4gdW5pLnJlZGlyZWN0VG8oe3VybH0pXG5cdFx0XHRcdH1cblx0XHRcdFx0dW5pLm5hdmlnYXRlQmFjayh7XG5cdFx0XHRcdFx0ZGVsdGE6IDFcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///91\n");

/***/ })
],[[0,"app-config"]]]);