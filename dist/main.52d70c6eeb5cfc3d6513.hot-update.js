webpackHotUpdate("main",{

/***/ "./src/tools/get-proMon-data.js":
/*!**************************************!*\
  !*** ./src/tools/get-proMon-data.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.removeToken = exports.getCr = exports.adminLogIn = exports.adminLogOut = exports.getLogin = exports.getCourses = exports.getCourse = exports.updateCourseCodes = exports.testData = undefined;\n\nvar _axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar url = 'http://localhost:5000/';\n\nvar testData = exports.testData = async function testData() {\n    try {\n        var i = await _axios2.default.get(url + 'get');\n        console.log(i);\n        return i.data;\n    } catch (err) {\n        console.log(err);\n    }\n};\n\nvar updateCourseCodes = exports.updateCourseCodes = async function updateCourseCodes(data) {\n    try {\n        var i = await _axios2.default.post(url + 'getCourse', data);\n        // console.log(i.data.d)\n        return i.data.d;\n    } catch (err) {\n        console.log(err);\n    }\n};\n\nvar getCourse = exports.getCourse = async function getCourse(data) {\n    try {\n        var i = await _axios2.default.post(url + 'getCourse', data);\n        console.log(i.data.d);\n        return i.data.d;\n    } catch (err) {\n        console.log(err);\n    }\n};\n\nvar getCourses = exports.getCourses = async function getCourses(data) {\n    try {\n        var i = await _axios2.default.post(url + 'login', data);\n        console.log(i.data.d);\n        return i.data.d;\n    } catch (err) {\n        console.log(err);\n    }\n};\n\nvar getLogin = exports.getLogin = async function getLogin(data) {\n    try {\n        var i = await _axios2.default.post(url + 'promonitor/login', data);\n        // will return course codes\n        console.log(i.data);\n        return i.data;\n    } catch (err) {\n        console.log(err);\n    }\n};\n\nvar adminLogOut = exports.adminLogOut = async function adminLogOut() {\n    try {\n        var i = await _axios2.default.delete(url + 'admin/');\n        // will return course codes\n        console.log(i.data);\n        return i.data;\n    } catch (err) {\n        console.log(err);\n    }\n};\n\nvar adminLogIn = exports.adminLogIn = async function adminLogIn(data) {\n    try {\n        var i = await _axios2.default.post(url + 'admin/', data);\n        // will return token codes\n        console.log(i.data);\n        _axios2.default.defaults.headers.common['Admin_token'] = i.data.token;\n        return i.data;\n    } catch (err) {\n        console.log(err);\n    }\n};\n\nvar getCr = exports.getCr = async function getCr(data) {\n    var resp = {};\n    try {\n        var i = await _axios2.default.post(url + 'getCurric', data);\n        // will return course codes\n        console.log(i.data);\n        resp['success'] = true;\n        resp['resp'] = i.data;\n        // return i.data.courses\n    } catch (err) {\n        resp['success'] = false;\n        resp['err'] = err;\n        console.log(err);\n        // return(err)\n    }\n    return resp;\n};\n\nvar removeToken = exports.removeToken = function removeToken() {\n    delete _axios2.default.defaults.headers.common['Authorization'];\n};\n\n//# sourceURL=webpack:///./src/tools/get-proMon-data.js?");

/***/ })

})