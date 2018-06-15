webpackHotUpdate("main",{

/***/ "./src/router/index.js":
/*!*****************************!*\
  !*** ./src/router/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.routes = undefined;\n\nvar _Home = __webpack_require__(/*! ../pages/Home.vue */ \"./src/pages/Home.vue\");\n\nvar _Home2 = _interopRequireDefault(_Home);\n\nvar _loginForm = __webpack_require__(/*! ../components/loginForm.vue */ \"./src/components/loginForm.vue\");\n\nvar _loginForm2 = _interopRequireDefault(_loginForm);\n\nvar _Faq = __webpack_require__(/*! ../pages/Faq.vue */ \"./src/pages/Faq.vue\");\n\nvar _Faq2 = _interopRequireDefault(_Faq);\n\nvar _Courses = __webpack_require__(/*! ../pages/Courses.vue */ \"./src/pages/Courses.vue\");\n\nvar _Courses2 = _interopRequireDefault(_Courses);\n\nvar _About = __webpack_require__(/*! ../pages/About.vue */ \"./src/pages/About.vue\");\n\nvar _About2 = _interopRequireDefault(_About);\n\nvar _Admin = __webpack_require__(/*! ../pages/Admin.vue */ \"./src/pages/Admin.vue\");\n\nvar _Admin2 = _interopRequireDefault(_Admin);\n\nvar _SideNavBar = __webpack_require__(/*! ../components/SideNavBar.vue */ \"./src/components/SideNavBar.vue\");\n\nvar _SideNavBar2 = _interopRequireDefault(_SideNavBar);\n\nvar _Store = __webpack_require__(/*! ../store/Store */ \"./src/store/Store.js\");\n\nvar _Store2 = _interopRequireDefault(_Store);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar ifNotAuthenticated = function ifNotAuthenticated(to, from, next) {\n    if (!_Store2.default.getters.isAuthenticated) {\n        next();\n        return;\n    }\n    next('/faq');\n};\n\nvar ifAuthenticated = function ifAuthenticated(to, from, next) {\n    if (_Store2.default.getters.isAuthenticated) {\n        next();\n        return;\n    }\n    next('/');\n};\n\nvar routes = exports.routes = [{\n    path: '/',\n    name: 'home',\n    component: _loginForm2.default\n\n}, {\n    path: '/faq',\n    name: 'faq',\n    component: _Faq2.default\n}, {\n    path: '/courses',\n    name: 'courses',\n    component: _Courses2.default,\n    beforeEnter: ifNotAuthenticated\n}, {\n    path: '/about',\n    name: 'about',\n    component: _About2.default,\n    beforeEnter: ifNotAuthenticated\n}, {\n    path: '/admin',\n    name: 'admin',\n    component: _Admin2.default\n    // beforeEnter: ifNotAuthenticated,\n}];\n\n//# sourceURL=webpack:///./src/router/index.js?");

/***/ })

})