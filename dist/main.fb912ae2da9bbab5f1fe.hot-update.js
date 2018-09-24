webpackHotUpdate("main",{

/***/ "./node_modules/babel-loader/lib/index.js??ref--0-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/promonitor/slots/studentsHeader.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/promonitor/slots/studentsHeader.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _getProMonData = __webpack_require__(/*! ../external/get-proMon-data */ \"./src/promonitor/external/get-proMon-data.js\");\n\nexports.default = {\n  props: [\"title\", \"\"],\n  methods: {\n    imagesToggle: function imagesToggle() {\n      // get student information - one action the data will identify which info\n      this.$store.dispatch(\"promonitor/student_img\");\n    },\n    student_info: function student_info() {\n      this.$store.dispatch(\"promonitor/student_info\");\n    }\n  }\n}; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n//# sourceURL=webpack:///./src/promonitor/slots/studentsHeader.vue?./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

})