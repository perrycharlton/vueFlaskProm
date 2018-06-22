webpackHotUpdate("main",{

/***/ "./node_modules/babel-loader/lib/index.js??ref--1-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/SideNavBar.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SideNavBar.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nexports.default = {\n    // let messege = 'Start',\n    props: {\n        page: String,\n        currentPage: String\n    },\n    data: function data() {\n        return {\n            currentPage: this.page\n        };\n    }\n};\n\n//# sourceURL=webpack:///./src/components/SideNavBar.vue?./node_modules/babel-loader/lib??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/SideNavBar.vue?vue&type=template&id=e6db0252&lang=pug":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SideNavBar.vue?vue&type=template&id=e6db0252&lang=pug ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"navbar navbar-dark bg-dark flex-column\" },\n    [\n      _c(\"div\", { staticClass: \"nav\" }),\n      _c(\"router-link\", { staticClass: \"nav-link\", attrs: { to: \"/\" } }, [\n        _vm._v(\"Home\")\n      ]),\n      _vm.currentPage === \"promonitor\"\n        ? [\n            _c(\n              \"router-link\",\n              { staticClass: \"nav-link\", attrs: { to: \"/courses\" } },\n              [_vm._v(\"Courses\")]\n            ),\n            _c(\n              \"router-link\",\n              { staticClass: \"nav-link\", attrs: { to: \"/faq\" } },\n              [_vm._v(\"Students\")]\n            ),\n            _c(\n              \"router-link\",\n              { staticClass: \"nav-link\", attrs: { to: \"/about\" } },\n              [_vm._v(\"Help   \")]\n            )\n          ]\n        : [\n            _c(\n              \"router-link\",\n              { staticClass: \"nav-link\", attrs: { to: \"/promonitor\" } },\n              [_vm._v(\"Promonitor\")]\n            ),\n            _c(\n              \"router-link\",\n              { staticClass: \"nav-link\", attrs: { to: \"/faq\" } },\n              [_vm._v(\"Faq              \")]\n            ),\n            _c(\n              \"router-link\",\n              { staticClass: \"nav-link\", attrs: { to: \"/admin\" } },\n              [_vm._v(\"Admin\")]\n            )\n          ],\n      _c(\"router-link\", { staticClass: \"nav-link\", attrs: { to: \"/about\" } }, [\n        _vm._v(\"About \")\n      ])\n    ],\n    2\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/SideNavBar.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

})