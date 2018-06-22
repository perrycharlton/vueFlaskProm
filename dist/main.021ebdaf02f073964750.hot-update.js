webpackHotUpdate("main",{

/***/ "./node_modules/babel-loader/lib/index.js??ref--1-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/pages/Home.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Home.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _SideNavBar = __webpack_require__(/*! ../components/SideNavBar.vue */ \"./src/components/SideNavBar.vue\");\n\nvar _SideNavBar2 = _interopRequireDefault(_SideNavBar);\n\nvar _SideNavBar3 = __webpack_require__(/*! ../promonitor/components/SideNavBar.vue */ \"./src/promonitor/components/SideNavBar.vue\");\n\nvar _SideNavBar4 = _interopRequireDefault(_SideNavBar3);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\nexports.default = {\n  props: {\n    page: false\n  },\n  components: { navMenu: _SideNavBar2.default, proMenu: _SideNavBar4.default },\n  // data: () => {\n  //   return {\n  //   page: false\n  //   }\n  // },\n  methods: {\n    titleChange: function titleChange(v) {\n      console.log(v, 'this title');\n      this.$emit('title-change', v);\n      this.page = true;\n    }\n  }\n};\n\n//# sourceURL=webpack:///./src/pages/Home.vue?./node_modules/babel-loader/lib??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/pages/Home.vue?vue&type=template&id=5a90ec03&scoped=true&lang=pug":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Home.vue?vue&type=template&id=5a90ec03&scoped=true&lang=pug ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"page\" },\n    [\n      _c(\n        \"div\",\n        { staticClass: \"menuTop\" },\n        [_vm.page ? [_c(\"proMenu\")] : [_c(\"navMenu\")]],\n        2\n      ),\n      _c(\"transition\", { attrs: { name: \"router-anim\" } }),\n      _c(\"keep-alive\", { attrs: { courses: \"\" } }),\n      _c(\"router-view\", {\n        staticClass: \"veiws\",\n        on: { \"on-page-title-change\": _vm.titleChange }\n      })\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/pages/Home.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

})