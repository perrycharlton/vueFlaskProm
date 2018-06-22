webpackHotUpdate("main",{

/***/ "./node_modules/babel-loader/lib/index.js??ref--1-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/pages/Home.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Home.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _SideNavBar = __webpack_require__(/*! ../components/SideNavBar.vue */ \"./src/components/SideNavBar.vue\");\n\nvar _SideNavBar2 = _interopRequireDefault(_SideNavBar);\n\nvar _SideNavBar3 = __webpack_require__(/*! ../promonitor/components/SideNavBar.vue */ \"./src/promonitor/components/SideNavBar.vue\");\n\nvar _SideNavBar4 = _interopRequireDefault(_SideNavBar3);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\nexports.default = {\n  props: [page],\n  components: { navMenu: _SideNavBar2.default, proMenu: _SideNavBar4.default },\n  // data: () => {\n  //   return {\n  //   page: false\n  //   }\n  // },\n  methods: {\n    titleChange: function titleChange(v) {\n      console.log(v, 'this title');\n      this.$emit('title-change', v);\n    },\n    pageSelect: function pageSelect(v) {\n      console.log(v, 'This Page');\n      page == true;\n    }\n  }\n};\n\n//# sourceURL=webpack:///./src/pages/Home.vue?./node_modules/babel-loader/lib??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

})