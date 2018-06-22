webpackHotUpdate("main",{

/***/ "./node_modules/babel-loader/lib/index.js??ref--1-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/pages/Home.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Home.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _SideNavBar = __webpack_require__(/*! ../components/SideNavBar.vue */ \"./src/components/SideNavBar.vue\");\n\nvar _SideNavBar2 = _interopRequireDefault(_SideNavBar);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = {\n  components: { sideNavBar: _SideNavBar2.default },\n  methods: {\n    titleChange: function titleChange(v) {\n      console.log(v, 'this title');\n      this.$emit('title-change', v);\n    }\n  }\n}; //\n//\n//\n//\n//\n//\n//\n//\n\n//# sourceURL=webpack:///./src/pages/Home.vue?./node_modules/babel-loader/lib??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??ref--1-0!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/promonitor/components/loginForm.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/promonitor/components/loginForm.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _getProMonData = __webpack_require__(/*! ../../tools/get-proMon-data */ \"./src/tools/get-proMon-data.js\");\n\nvar _BasicLogin = __webpack_require__(/*! ../../slots/BasicLogin */ \"./src/slots/BasicLogin.vue\");\n\nvar _BasicLogin2 = _interopRequireDefault(_BasicLogin);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//\n//\n//\n//\n//\n//\n//\n//\n\nexports.default = {\n  props: [\n    // 'courses'\n  ],\n\n  data: function data() {\n    return {\n      credentials: {\n        username: '',\n        password: ''\n      },\n      loggingIn: false,\n      error: '',\n      courses: '',\n      text: ''\n    };\n  },\n\n  components: {\n    // DisplayCourses,\n    basicLogin: _BasicLogin2.default\n  },\n  methods: {\n    login: async function login() {\n      var credentials = {\n        username: this.credentials.username,\n        password: this.credentials.password\n      };\n      this.courses = await (0, _getProMonData.getLogin)(credentials);\n      this.text = 'Courses';\n      console.log(this.courses);\n    },\n    authLoginOut: async function authLoginOut() {\n      this.cr = await (0, _getProMonData.AuthLogout)();\n      console.log(this.cr);\n    }\n  },\n  mounted: function mounted() {\n    this.$emit(\"on-page-title-change\", \"Welcome to Promonitor, Please log in\");\n  }\n};\n// import  DisplayCourses  from \"../components/DisplayCourses.vue\";\n\n//# sourceURL=webpack:///./src/promonitor/components/loginForm.vue?./node_modules/babel-loader/lib??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js??ref--4-2!./node_modules/sass-loader/lib/loader.js??ref--4-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/promonitor/components/SideNavBar.vue?vue&type=style&index=0&lang=scss":
false,

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/promonitor/components/SideNavBar.vue?vue&type=template&id=1218e137&lang=pug":
false,

/***/ "./src/promonitor/components/SideNavBar.vue":
false,

/***/ "./src/promonitor/components/SideNavBar.vue?vue&type=style&index=0&lang=scss":
false,

/***/ "./src/promonitor/components/SideNavBar.vue?vue&type=template&id=1218e137&lang=pug":
false,

/***/ 10:
false

})