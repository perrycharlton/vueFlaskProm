webpackHotUpdate("main",{

/***/ "./node_modules/babel-loader/lib/index.js??ref--1-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/pages/Home.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Home.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _SideNavBar = __webpack_require__(/*! ../components/SideNavBar.vue */ \"./src/components/SideNavBar.vue\");\n\nvar _SideNavBar2 = _interopRequireDefault(_SideNavBar);\n\nvar _SideNavBar3 = __webpack_require__(/*! ../promonitor/components/SideNavBar.vue */ \"./src/promonitor/components/SideNavBar.vue\");\n\nvar _SideNavBar4 = _interopRequireDefault(_SideNavBar3);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\nexports.default = {\n  components: { navMenu: _SideNavBar2.default, proMenu: _SideNavBar4.default },\n  data: {\n    page: 'promonitor'\n  },\n  methods: {\n    titleChange: function titleChange(v) {\n      console.log(v, 'this title');\n      this.$emit('title-change', v);\n    },\n    pageSelect: function pageSelect(v) {\n      console.log(v, 'This Page');\n    }\n  }\n};\n\n//# sourceURL=webpack:///./src/pages/Home.vue?./node_modules/babel-loader/lib??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/pages/Home.vue?vue&type=template&id=5a90ec03&scoped=true&lang=pug":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Home.vue?vue&type=template&id=5a90ec03&scoped=true&lang=pug ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"page\" },\n    [\n      _c(\n        \"div\",\n        { staticClass: \"menuTop\" },\n        [_vm.page === \"promonitor\" ? [_c(\"proMenu\")] : [_c(\"navMenu\")]],\n        2\n      ),\n      _c(\"transition\", { attrs: { name: \"router-anim\" } }),\n      _c(\"keep-alive\", { attrs: { courses: \"\" } }),\n      _c(\"router-view\", {\n        staticClass: \"veiws\",\n        on: {\n          \"on-page-title-change\": _vm.titleChange,\n          \"on-page-select\": _vm.pageSelect\n        }\n      })\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/pages/Home.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/pages/Home.vue?vue&type=template&id=5a90ec03&scoped=true&v-if=page%20%3D%3D%3D%20'promonitor'&lang=pug":
false,

/***/ "./src/pages/Home.vue":
/*!****************************!*\
  !*** ./src/pages/Home.vue ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Home_vue_vue_type_template_id_5a90ec03_scoped_true_lang_pug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=5a90ec03&scoped=true&lang=pug */ \"./src/pages/Home.vue?vue&type=template&id=5a90ec03&scoped=true&lang=pug\");\n/* harmony import */ var _Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js */ \"./src/pages/Home.vue?vue&type=script&lang=js\");\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Home_vue_vue_type_style_index_0_id_5a90ec03_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.vue?vue&type=style&index=0&id=5a90ec03&lang=scss&scoped=true */ \"./src/pages/Home.vue?vue&type=style&index=0&id=5a90ec03&lang=scss&scoped=true\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Home_vue_vue_type_template_id_5a90ec03_scoped_true_lang_pug__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Home_vue_vue_type_template_id_5a90ec03_scoped_true_lang_pug__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"5a90ec03\",\n  null\n  \n)\n\n/* hot reload */\nif (true) {\n  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ \"./node_modules/vue-hot-reload-api/dist/index.js\")\n  api.install(__webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\"))\n  if (api.compatible) {\n    module.hot.accept()\n    if (!module.hot.data) {\n      api.createRecord('5a90ec03', component.options)\n    } else {\n      api.reload('5a90ec03', component.options)\n    }\n    module.hot.accept(/*! ./Home.vue?vue&type=template&id=5a90ec03&scoped=true&lang=pug */ \"./src/pages/Home.vue?vue&type=template&id=5a90ec03&scoped=true&lang=pug\", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Home_vue_vue_type_template_id_5a90ec03_scoped_true_lang_pug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=5a90ec03&scoped=true&lang=pug */ \"./src/pages/Home.vue?vue&type=template&id=5a90ec03&scoped=true&lang=pug\");\n(function () {\n      api.rerender('5a90ec03', {\n        render: _Home_vue_vue_type_template_id_5a90ec03_scoped_true_lang_pug__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n        staticRenderFns: _Home_vue_vue_type_template_id_5a90ec03_scoped_true_lang_pug__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]\n      })\n    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })\n  }\n}\ncomponent.options.__file = \"src/pages/Home.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/pages/Home.vue?");

/***/ }),

/***/ "./src/pages/Home.vue?vue&type=template&id=5a90ec03&scoped=true&lang=pug":
/*!*******************************************************************************!*\
  !*** ./src/pages/Home.vue?vue&type=template&id=5a90ec03&scoped=true&lang=pug ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_5a90ec03_scoped_true_lang_pug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/pug-plain-loader!../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=5a90ec03&scoped=true&lang=pug */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/pages/Home.vue?vue&type=template&id=5a90ec03&scoped=true&lang=pug\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_5a90ec03_scoped_true_lang_pug__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_5a90ec03_scoped_true_lang_pug__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/pages/Home.vue?");

/***/ }),

/***/ "./src/pages/Home.vue?vue&type=template&id=5a90ec03&scoped=true&v-if=page%20%3D%3D%3D%20'promonitor'&lang=pug":
false

})