/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"react\"\n// module id = 0\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/**\n* actionTypes.js\n* Define global action strings for redux reducers\n**/\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n\tsetDummy: 'setDummy',\n\tsetRentalList: 'setRentalList',\n\tsetUser: 'setUser',\n\tsetTitle: 'setTitle'\n});\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/redux/actionTypes.js\n// module id = 1\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/redux/actionTypes.js?");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"react-router\"\n// module id = 2\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22react-router%22?");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"react-redux\"\n// module id = 3\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reducers_RootReducer__ = __webpack_require__(13);\n/**\n* store.js\n* Redux store definiation\n**/\n\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (Object(__WEBPACK_IMPORTED_MODULE_0_redux__[\"createStore\"])(__WEBPACK_IMPORTED_MODULE_1__reducers_RootReducer__[\"a\" /* default */]));\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/redux/store.js\n// module id = 4\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/redux/store.js?");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"redux\"\n// module id = 5\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"prop-types\"\n// module id = 6\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(8);\nmodule.exports = __webpack_require__(9);\n\n\n//////////////////\n// WEBPACK FOOTER\n// multi babel-polyfill ./src/server.js\n// module id = 7\n// module chunks = 0\n\n//# sourceURL=webpack:///multi_babel-polyfill_./src/server.js?");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-polyfill\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"babel-polyfill\"\n// module id = 8\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22babel-polyfill%22?");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path__ = __webpack_require__(10);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_path__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(11);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom_server__ = __webpack_require__(12);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_dom_server__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router__ = __webpack_require__(2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_router__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux__ = __webpack_require__(3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_redux__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__redux_store__ = __webpack_require__(4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__views_index_pug__ = __webpack_require__(18);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__views_index_pug___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__views_index_pug__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__routes__ = __webpack_require__(21);\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\n\n\n\n\n\n\n\n\n\n\nconst status = {\n\terror: 500,\n\tredirect: 302,\n\tsuccess: 200,\n\tnotFound: 404\n};\n\n// Data to send to jade template\nconst config = {\n\tscripts: ['/app.js']\n};\n\nconst app = __WEBPACK_IMPORTED_MODULE_1_express___default()();\nconst port = process.env.PORT || 5000;\n\napp.use(__WEBPACK_IMPORTED_MODULE_1_express___default.a.static(__WEBPACK_IMPORTED_MODULE_0_path___default.a.join(__dirname, 'public')));\n\napp.use('*', (() => {\n\tvar _ref = _asyncToGenerator(function* (req, res) {\n\t\t// res.render doesn't seem to work with webkit so we use webkit to load the jade template and render it here\n\t\tObject(__WEBPACK_IMPORTED_MODULE_4_react_router__[\"match\"])({ routes: __WEBPACK_IMPORTED_MODULE_8__routes__[\"a\" /* default */], location: req.baseUrl || req.url }, function (error, redirectLocation, renderProps) {\n\t\t\tif (error) {\n\t\t\t\tres.status(status.error).send(error.message);\n\t\t\t} else if (redirectLocation) {\n\t\t\t\tres.redirect(status.redirect, redirectLocation.pathname + redirectLocation.search);\n\t\t\t} else if (renderProps) {\n\n\t\t\t\tconst routerContext = __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(\n\t\t\t\t\t__WEBPACK_IMPORTED_MODULE_5_react_redux__[\"Provider\"],\n\t\t\t\t\t{ store: __WEBPACK_IMPORTED_MODULE_6__redux_store__[\"a\" /* default */] },\n\t\t\t\t\t__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_router__[\"RouterContext\"], renderProps)\n\t\t\t\t);\n\n\t\t\t\tconst contentHtml = __WEBPACK_IMPORTED_MODULE_3_react_dom_server___default.a.renderToString(routerContext);\n\n\t\t\t\tconst variables = _extends({}, config, { content: contentHtml });\n\t\t\t\tconst html = __WEBPACK_IMPORTED_MODULE_7__views_index_pug___default()(variables);\n\t\t\t\tres.status(status.success).send(html);\n\t\t\t} else {\n\t\t\t\tres.status(status.notFound).send('Not Found');\n\t\t\t}\n\t\t});\n\t});\n\n\treturn function (_x, _x2) {\n\t\treturn _ref.apply(this, arguments);\n\t};\n})());\n\napp.listen(port, () => {\n\t/*eslint-disable no-console*/\n\tconsole.log(`Listening on ${port}`);\n});\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/server.js\n// module id = 9\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/server.js?");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"path\"\n// module id = 10\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"express\"\n// module id = 11\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"react-dom/server\"\n// module id = 12\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__GeneralReducer__ = __webpack_require__(14);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__RentalsReducer__ = __webpack_require__(15);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__UserReducer__ = __webpack_require__(16);\n/**\n* RootReducer.js\n* The root reducer to combine all other reducers used in the application\n**/\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (Object(__WEBPACK_IMPORTED_MODULE_0_redux__[\"combineReducers\"])({\n\tgeneral: __WEBPACK_IMPORTED_MODULE_1__GeneralReducer__[\"a\" /* default */],\n\trentals: __WEBPACK_IMPORTED_MODULE_2__RentalsReducer__[\"a\" /* default */],\n\tuser: __WEBPACK_IMPORTED_MODULE_3__UserReducer__[\"a\" /* default */]\n}));\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/redux/reducers/RootReducer.js\n// module id = 13\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/redux/reducers/RootReducer.js?");

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (immutable) */ __webpack_exports__[\"a\"] = setgeneralReducer;\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actionTypes__ = __webpack_require__(1);\n/**\n* GeneralReducer.js\n* Redux Reducer for general\n**/\n\n\n\nfunction handleSetTitle(state, data) {\n\treturn Object.assign({}, state, { setTitle: data });\n}\n\nfunction setgeneralReducer(state, action) {\n\tswitch (action.type) {\n\t\tcase __WEBPACK_IMPORTED_MODULE_0__actionTypes__[\"a\" /* default */].setTitle:\n\t\t\treturn handleSetTitle(state, action.payload);\n\t\tdefault:\n\t\t\treturn state || {};\n\t}\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/redux/reducers/GeneralReducer.js\n// module id = 14\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/redux/reducers/GeneralReducer.js?");

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (immutable) */ __webpack_exports__[\"a\"] = setrentalsReducer;\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actionTypes__ = __webpack_require__(1);\n/**\n* RentalsReducer.js\n* Redux Reducer for rentals\n**/\n\n\n\nfunction handleSetRentalList(state, data) {\n\treturn Object.assign({}, state, { setRentalList: data });\n}\n\nfunction setrentalsReducer(state, action) {\n\tswitch (action.type) {\n\t\tcase __WEBPACK_IMPORTED_MODULE_0__actionTypes__[\"a\" /* default */].setRentalList:\n\t\t\treturn handleSetRentalList(state, action.payload);\n\t\tdefault:\n\t\t\treturn state || {};\n\t}\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/redux/reducers/RentalsReducer.js\n// module id = 15\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/redux/reducers/RentalsReducer.js?");

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (immutable) */ __webpack_exports__[\"a\"] = setuserReducer;\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__(17);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actionTypes__ = __webpack_require__(1);\n/**\n* UserReducer.js\n* Redux Reducer for user\n**/\n\n\n\n\nfunction handleSetUser(state, data) {\n\treturn __WEBPACK_IMPORTED_MODULE_0_immutable__[\"Map\"].isMap(data) ? data : __WEBPACK_IMPORTED_MODULE_0_immutable___default.a.fromJS(data);\n}\n\nfunction setuserReducer(state, action) {\n\tswitch (action.type) {\n\t\tcase __WEBPACK_IMPORTED_MODULE_1__actionTypes__[\"a\" /* default */].setUser:\n\t\t\treturn handleSetUser(state, action.payload);\n\t\tdefault:\n\t\t\treturn state || new __WEBPACK_IMPORTED_MODULE_0_immutable__[\"Map\"]();\n\t}\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/redux/reducers/UserReducer.js\n// module id = 16\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/redux/reducers/UserReducer.js?");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

eval("module.exports = require(\"immutable\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"immutable\"\n// module id = 17\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22immutable%22?");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(19);\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (content, scripts) {pug_html = pug_html + \"\\u003C!DOCTYPE html\\u003E\\u003Chtml lang=\\\"en\\\"\\u003E\\u003Chead\\u003E\\u003Ctitle\\u003Enesting-place\\u003C\\u002Ftitle\\u003E\\u003Cmeta charset=\\\"utf-8\\\"\\u003E\\u003Cmeta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\"\\u003E\\u003Cmeta name=\\\"description\\\" content=\\\"#{An application to link students looking for homes with &amp;#34;empty nesters&amp;#34;}\\\"\\u003E\\u003Cmeta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1\\\"\\u003E\\u003C\\u002Fhead\\u003E\\u003Cbody\\u003E\\u003Cdiv id=\\\"app\\\"\\u003E\" + (null == (pug_interp = content) ? \"\" : pug_interp) + \"\\u003C\\u002Fdiv\\u003E\";\n// iterate scripts\n;(function(){\n  var $$obj = scripts;\n  if ('number' == typeof $$obj.length) {\n      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {\n        var script = $$obj[pug_index0];\npug_html = pug_html + \"\\u003Cscript\" + (pug.attr(\"src\", script, true, true)+\" defer\") + \"\\u003E\\u003C\\u002Fscript\\u003E\";\n      }\n  } else {\n    var $$l = 0;\n    for (var pug_index0 in $$obj) {\n      $$l++;\n      var script = $$obj[pug_index0];\npug_html = pug_html + \"\\u003Cscript\" + (pug.attr(\"src\", script, true, true)+\" defer\") + \"\\u003E\\u003C\\u002Fscript\\u003E\";\n    }\n  }\n}).call(this);\n\npug_html = pug_html + \"\\u003C\\u002Fbody\\u003E\\u003C\\u002Fhtml\\u003E\";}.call(this,\"content\" in locals_for_with?locals_for_with.content:typeof content!==\"undefined\"?content:undefined,\"scripts\" in locals_for_with?locals_for_with.scripts:typeof scripts!==\"undefined\"?scripts:undefined));;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/views/index.pug\n// module id = 18\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/views/index.pug?");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar pug_has_own_property = Object.prototype.hasOwnProperty;\n\n/**\n * Merge two attribute objects giving precedence\n * to values in object `b`. Classes are special-cased\n * allowing for arrays and merging/joining appropriately\n * resulting in a string.\n *\n * @param {Object} a\n * @param {Object} b\n * @return {Object} a\n * @api private\n */\n\nexports.merge = pug_merge;\nfunction pug_merge(a, b) {\n  if (arguments.length === 1) {\n    var attrs = a[0];\n    for (var i = 1; i < a.length; i++) {\n      attrs = pug_merge(attrs, a[i]);\n    }\n    return attrs;\n  }\n\n  for (var key in b) {\n    if (key === 'class') {\n      var valA = a[key] || [];\n      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);\n    } else if (key === 'style') {\n      var valA = pug_style(a[key]);\n      var valB = pug_style(b[key]);\n      a[key] = valA + valB;\n    } else {\n      a[key] = b[key];\n    }\n  }\n\n  return a;\n};\n\n/**\n * Process array, object, or string as a string of classes delimited by a space.\n *\n * If `val` is an array, all members of it and its subarrays are counted as\n * classes. If `escaping` is an array, then whether or not the item in `val` is\n * escaped depends on the corresponding item in `escaping`. If `escaping` is\n * not an array, no escaping is done.\n *\n * If `val` is an object, all the keys whose value is truthy are counted as\n * classes. No escaping is done.\n *\n * If `val` is a string, it is counted as a class. No escaping is done.\n *\n * @param {(Array.<string>|Object.<string, boolean>|string)} val\n * @param {?Array.<string>} escaping\n * @return {String}\n */\nexports.classes = pug_classes;\nfunction pug_classes_array(val, escaping) {\n  var classString = '', className, padding = '', escapeEnabled = Array.isArray(escaping);\n  for (var i = 0; i < val.length; i++) {\n    className = pug_classes(val[i]);\n    if (!className) continue;\n    escapeEnabled && escaping[i] && (className = pug_escape(className));\n    classString = classString + padding + className;\n    padding = ' ';\n  }\n  return classString;\n}\nfunction pug_classes_object(val) {\n  var classString = '', padding = '';\n  for (var key in val) {\n    if (key && val[key] && pug_has_own_property.call(val, key)) {\n      classString = classString + padding + key;\n      padding = ' ';\n    }\n  }\n  return classString;\n}\nfunction pug_classes(val, escaping) {\n  if (Array.isArray(val)) {\n    return pug_classes_array(val, escaping);\n  } else if (val && typeof val === 'object') {\n    return pug_classes_object(val);\n  } else {\n    return val || '';\n  }\n}\n\n/**\n * Convert object or string to a string of CSS styles delimited by a semicolon.\n *\n * @param {(Object.<string, string>|string)} val\n * @return {String}\n */\n\nexports.style = pug_style;\nfunction pug_style(val) {\n  if (!val) return '';\n  if (typeof val === 'object') {\n    var out = '';\n    for (var style in val) {\n      /* istanbul ignore else */\n      if (pug_has_own_property.call(val, style)) {\n        out = out + style + ':' + val[style] + ';';\n      }\n    }\n    return out;\n  } else {\n    val += '';\n    if (val[val.length - 1] !== ';') \n      return val + ';';\n    return val;\n  }\n};\n\n/**\n * Render the given attribute.\n *\n * @param {String} key\n * @param {String} val\n * @param {Boolean} escaped\n * @param {Boolean} terse\n * @return {String}\n */\nexports.attr = pug_attr;\nfunction pug_attr(key, val, escaped, terse) {\n  if (val === false || val == null || !val && (key === 'class' || key === 'style')) {\n    return '';\n  }\n  if (val === true) {\n    return ' ' + (terse ? key : key + '=\"' + key + '\"');\n  }\n  if (typeof val.toJSON === 'function') {\n    val = val.toJSON();\n  }\n  if (typeof val !== 'string') {\n    val = JSON.stringify(val);\n    if (!escaped && val.indexOf('\"') !== -1) {\n      return ' ' + key + '=\\'' + val.replace(/'/g, '&#39;') + '\\'';\n    }\n  }\n  if (escaped) val = pug_escape(val);\n  return ' ' + key + '=\"' + val + '\"';\n};\n\n/**\n * Render the given attributes object.\n *\n * @param {Object} obj\n * @param {Object} terse whether to use HTML5 terse boolean attributes\n * @return {String}\n */\nexports.attrs = pug_attrs;\nfunction pug_attrs(obj, terse){\n  var attrs = '';\n\n  for (var key in obj) {\n    if (pug_has_own_property.call(obj, key)) {\n      var val = obj[key];\n\n      if ('class' === key) {\n        val = pug_classes(val);\n        attrs = pug_attr(key, val, false, terse) + attrs;\n        continue;\n      }\n      if ('style' === key) {\n        val = pug_style(val);\n      }\n      attrs += pug_attr(key, val, false, terse);\n    }\n  }\n\n  return attrs;\n};\n\n/**\n * Escape the given string of `html`.\n *\n * @param {String} html\n * @return {String}\n * @api private\n */\n\nvar pug_match_html = /[\"&<>]/;\nexports.escape = pug_escape;\nfunction pug_escape(_html){\n  var html = '' + _html;\n  var regexResult = pug_match_html.exec(html);\n  if (!regexResult) return _html;\n\n  var result = '';\n  var i, lastIndex, escape;\n  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {\n    switch (html.charCodeAt(i)) {\n      case 34: escape = '&quot;'; break;\n      case 38: escape = '&amp;'; break;\n      case 60: escape = '&lt;'; break;\n      case 62: escape = '&gt;'; break;\n      default: continue;\n    }\n    if (lastIndex !== i) result += html.substring(lastIndex, i);\n    lastIndex = i + 1;\n    result += escape;\n  }\n  if (lastIndex !== i) return result + html.substring(lastIndex, i);\n  else return result;\n};\n\n/**\n * Re-throw the given `err` in context to the\n * the pug in `filename` at the given `lineno`.\n *\n * @param {Error} err\n * @param {String} filename\n * @param {String} lineno\n * @param {String} str original source\n * @api private\n */\n\nexports.rethrow = pug_rethrow;\nfunction pug_rethrow(err, filename, lineno, str){\n  if (!(err instanceof Error)) throw err;\n  if ((typeof window != 'undefined' || !filename) && !str) {\n    err.message += ' on line ' + lineno;\n    throw err;\n  }\n  try {\n    str = str || __webpack_require__(20).readFileSync(filename, 'utf8')\n  } catch (ex) {\n    pug_rethrow(err, null, lineno)\n  }\n  var context = 3\n    , lines = str.split('\\n')\n    , start = Math.max(lineno - context, 0)\n    , end = Math.min(lines.length, lineno + context);\n\n  // Error context\n  var context = lines.slice(start, end).map(function(line, i){\n    var curr = i + start + 1;\n    return (curr == lineno ? '  > ' : '    ')\n      + curr\n      + '| '\n      + line;\n  }).join('\\n');\n\n  // Alter exception message\n  err.path = filename;\n  err.message = (filename || 'Pug') + ':' + lineno\n    + '\\n' + context + '\\n\\n' + err.message;\n  throw err;\n};\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/pug-runtime/index.js\n// module id = 19\n// module chunks = 0\n\n//# sourceURL=webpack:///./node_modules/pug-runtime/index.js?");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"fs\"\n// module id = 20\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_App__ = __webpack_require__(22);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Index__ = __webpack_require__(28);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_About__ = __webpack_require__(30);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_ListHomes__ = __webpack_require__(32);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__containers_RenterProfileContainer__ = __webpack_require__(34);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_HostProfile__ = __webpack_require__(38);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_NotFound__ = __webpack_require__(40);\n\n\n\n\n\n\n\n\n\n\nconst router = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t__WEBPACK_IMPORTED_MODULE_1_react_router__[\"Route\"],\n\t{ path: '/', component: __WEBPACK_IMPORTED_MODULE_2__components_App__[\"a\" /* default */] },\n\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__[\"IndexRoute\"], { component: __WEBPACK_IMPORTED_MODULE_3__components_Index__[\"a\" /* default */] }),\n\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__[\"Route\"], { path: 'about', component: __WEBPACK_IMPORTED_MODULE_4__components_About__[\"a\" /* default */] }),\n\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__[\"Route\"], { path: 'nests', component: __WEBPACK_IMPORTED_MODULE_5__components_ListHomes__[\"a\" /* default */] }),\n\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__[\"Route\"], { path: 'renter-profile', component: __WEBPACK_IMPORTED_MODULE_6__containers_RenterProfileContainer__[\"a\" /* default */] }),\n\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__[\"Route\"], { path: 'host-home', component: __WEBPACK_IMPORTED_MODULE_7__components_HostProfile__[\"a\" /* default */] }),\n\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__[\"Route\"], { path: '*', component: __WEBPACK_IMPORTED_MODULE_8__components_NotFound__[\"a\" /* default */] })\n);\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (router);\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/routes.js\n// module id = 21\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/routes.js?");

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__containers_HeaderContainer__ = __webpack_require__(23);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App_scss__ = __webpack_require__(27);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__App_scss__);\n\n\n\n\nclass App extends __WEBPACK_IMPORTED_MODULE_0_react__[\"Component\"] {\n\n\tconstructor() {\n\t\tsuper();\n\t}\n\n\trender() {\n\t\treturn __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t\t'div',\n\t\t\tnull,\n\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__containers_HeaderContainer__[\"a\" /* default */], null),\n\t\t\tthis.props.children\n\t\t);\n\t}\n\n}\n\nApp.propTypes = {};\n/* harmony default export */ __webpack_exports__[\"a\"] = (App);\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/components/App/App.js\n// module id = 22\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/components/App/App.js?");

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_redux__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Header__ = __webpack_require__(24);\n\n\n\nconst mapStateToProps = state => ({\n\ttitle: 'Page title',\n\tnewMessageCount: 0,\n\tuser: 'Elvey'\n});\n\nconst ReduxContainer = Object(__WEBPACK_IMPORTED_MODULE_0_react_redux__[\"connect\"])(mapStateToProps)(__WEBPACK_IMPORTED_MODULE_1__components_Header__[\"a\" /* default */]);\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (ReduxContainer);\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/containers/HeaderContainer.js\n// module id = 23\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/containers/HeaderContainer.js?");

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(6);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Header_scss__ = __webpack_require__(25);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Header_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Header_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router__ = __webpack_require__(2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_general__ = __webpack_require__(26);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_general___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__config_general__);\n\n\n\n\n\n\nclass Header extends __WEBPACK_IMPORTED_MODULE_0_react__[\"Component\"] {\n\n\tconstructor(props) {\n\t\tsuper();\n\n\t\tthis.props = props;\n\t}\n\n\trender() {\n\t\tlet userControls = null;\n\t\tconsole.log(this.props);\n\t\tif (this.props.user) {\n\t\t\tuserControls = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: __WEBPACK_IMPORTED_MODULE_2__Header_scss___default.a.userControls },\n\t\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t\t\t\t__WEBPACK_IMPORTED_MODULE_3_react_router__[\"Link\"],\n\t\t\t\t\t{ className: __WEBPACK_IMPORTED_MODULE_2__Header_scss___default.a.messageBtn, to: `${__WEBPACK_IMPORTED_MODULE_4__config_general___default.a.basePath}messages` },\n\t\t\t\t\t'Messages'\n\t\t\t\t),\n\t\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t\t\t\t__WEBPACK_IMPORTED_MODULE_3_react_router__[\"Link\"],\n\t\t\t\t\t{ className: __WEBPACK_IMPORTED_MODULE_2__Header_scss___default.a.profileBtn, to: `${__WEBPACK_IMPORTED_MODULE_4__config_general___default.a.basePath}profile` },\n\t\t\t\t\t'Profile'\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t\tconsole.log(userControls);\n\n\t\treturn __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t\t'div',\n\t\t\t{ className: __WEBPACK_IMPORTED_MODULE_2__Header_scss___default.a.root },\n\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: __WEBPACK_IMPORTED_MODULE_2__Header_scss___default.a.container },\n\t\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t\t\t\t'button',\n\t\t\t\t\t{ className: __WEBPACK_IMPORTED_MODULE_2__Header_scss___default.a.backBtn },\n\t\t\t\t\t'Back'\n\t\t\t\t),\n\t\t\t\tthis.props.title ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t\t\t\t'h1',\n\t\t\t\t\t{ className: __WEBPACK_IMPORTED_MODULE_2__Header_scss___default.a.mainTitle },\n\t\t\t\t\tthis.props.title\n\t\t\t\t) : null,\n\t\t\t\tuserControls\n\t\t\t)\n\t\t);\n\t}\n\n}\n\nHeader.propTypes = {\n\ttitle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,\n\tnewMessageCount: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,\n\tuser: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string\n};\n/* harmony default export */ __webpack_exports__[\"a\"] = (Header);\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/components/Header/Header.js\n// module id = 24\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/components/Header/Header.js?");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\nmodule.exports = {\"root\":\"Header__root--14IZ-\",\"container\":\"Header__container--izfMl\",\"back_btn\":\"Header__back_btn--1j5jn\",\"backBtn\":\"Header__back_btn--1j5jn\",\"message_btn\":\"Header__message_btn--FJMg_\",\"messageBtn\":\"Header__message_btn--FJMg_\",\"profile_btn\":\"Header__profile_btn--27Z94\",\"profileBtn\":\"Header__profile_btn--27Z94\"};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/components/Header/Header.scss\n// module id = 25\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/components/Header/Header.scss?");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

eval("\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/config/general.js\n// module id = 26\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/config/general.js?");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\nmodule.exports = {\"browserupgrade\":\"App__browserupgrade--1t44r\"};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/components/App/App.scss\n// module id = 27\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/components/App/App.scss?");

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Index_scss__ = __webpack_require__(29);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Index_scss__);\n\n\n\nclass Index extends __WEBPACK_IMPORTED_MODULE_0_react__[\"Component\"] {\n\n\trender() {\n\t\treturn __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t\t'div',\n\t\t\t{ className: __WEBPACK_IMPORTED_MODULE_1__Index_scss___default.a.root },\n\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: __WEBPACK_IMPORTED_MODULE_1__Index_scss___default.a.container },\n\t\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: __WEBPACK_IMPORTED_MODULE_1__Index_scss___default.a.heading },\n\t\t\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t\t\t\t\t'h2',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\t'Sample Page'\n\t\t\t\t\t)\n\t\t\t\t),\n\t\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: __WEBPACK_IMPORTED_MODULE_1__Index_scss___default.a.content },\n\t\t\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t\t\t\t\t'p',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\t'Lorem ipsum dolor sit amet, ex eum utinam consectetuer. Veniam quaeque facilisi eam ex, at mel labitur repudiare, id erat euismod vis. Has debet inimicus no, has ne eripuit mediocrem aliquando, ei sint delenit pri. Choro convenire deterruisset nec id, evertitur reprehendunt ea nec.'\n\t\t\t\t\t),\n\t\t\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t\t\t\t\t'p',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\t'Volumus eligendi consequat mei in, elitr voluptua assueverit per ad, mucius philosophia vix ei. Eum ne labore gubergren reformidans, te vim verear legimus inimicus. At nec perpetua cotidieque. Ex everti aliquam mel. Est no deleniti tractatos adipiscing, at mei detraxit dissentiet. Eu audire quaeque eos, ei feugiat facilis sit, at duo mentitum offendit appareat.'\n\t\t\t\t\t),\n\t\t\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t\t\t\t\t'p',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\t'Eu assum eruditi consequuntur usu. Nec eu tollit labore facilisis, dicunt iudicabit philosophia eam eu. Omnesque deleniti urbanitas ad pro, congue urbanitas intellegam id nam. No exerci expetenda sea. Ex dicam verterem gubergren qui.'\n\t\t\t\t\t),\n\t\t\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t\t\t\t\t'p',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\t'Audire salutandi pro ne, veritus albucius ne per. Ea his simul omnes ocurreret, eu delectus partiendo persecuti eum. Case exerci utroque no per, eu vel delenit perpetua repudiare. Vim ex legere habemus, vix ne tempor detracto, ad sit veritus rationibus. Nec no regione convenire tractatos, an vide etiam voluptaria sea. Cu petentium complectitur eum.'\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t)\n\t\t);\n\t}\n\n}\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (Index);\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/components/Index/Index.js\n// module id = 28\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/components/Index/Index.js?");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\nmodule.exports = {\"root\":\"Index__root--xHz9Y\",\"container\":\"Index__container--9lkSI\",\"heading\":\"Index__heading--36oOI\"};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/components/Index/Index.scss\n// module id = 29\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/components/Index/Index.scss?");

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__About_scss__ = __webpack_require__(31);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__About_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__About_scss__);\n\n\n\nclass About extends __WEBPACK_IMPORTED_MODULE_0_react__[\"Component\"] {\n\n\trender() {\n\t\treturn __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t\t'div',\n\t\t\t{ className: __WEBPACK_IMPORTED_MODULE_1__About_scss___default.a.root },\n\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: __WEBPACK_IMPORTED_MODULE_1__About_scss___default.a.container },\n\t\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: __WEBPACK_IMPORTED_MODULE_1__About_scss___default.a.heading },\n\t\t\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t\t\t\t\t'h2',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\t'About'\n\t\t\t\t\t)\n\t\t\t\t),\n\t\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: __WEBPACK_IMPORTED_MODULE_1__About_scss___default.a.content },\n\t\t\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t\t\t\t\t'p',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\t'This template is build using React, Webpack, SASS and ReactRouter. It is intended as a starting point for isometric react projects and generates a server side script from src/server.js and client side using src/app.js. React router configuration is in src/routes.js.'\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t)\n\t\t);\n\t}\n\n}\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (About);\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/components/About/About.js\n// module id = 30\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/components/About/About.js?");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\nmodule.exports = {\"root\":\"About__root--2Pc3I\",\"container\":\"About__container--14LRN\",\"heading\":\"About__heading--3qDXC\"};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/components/About/About.scss\n// module id = 31\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/components/About/About.scss?");

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ListHomes_scss__ = __webpack_require__(33);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ListHomes_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__ListHomes_scss__);\n\n\n\nclass ListHomes extends __WEBPACK_IMPORTED_MODULE_0_react__[\"Component\"] {\n\n\tconstructor(props) {\n\t\tsuper();\n\n\t\tthis.props = props;\n\t\tthis.state = {};\n\t}\n\n\trender() {\n\t\tconst className = this.props.className ? `${__WEBPACK_IMPORTED_MODULE_1__ListHomes_scss___default.a.content} ${this.props.className}` : __WEBPACK_IMPORTED_MODULE_1__ListHomes_scss___default.a.content;\n\t\treturn __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t\t'div',\n\t\t\t{ className: className },\n\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: __WEBPACK_IMPORTED_MODULE_1__ListHomes_scss___default.a.list },\n\t\t\t\tthis.props.nests.map(nest => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: __WEBPACK_IMPORTED_MODULE_1__ListHomes_scss___default.a.houseItem },\n\t\t\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: nest.photo, className: __WEBPACK_IMPORTED_MODULE_1__ListHomes_scss___default.a.nestPhoto }),\n\t\t\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\t{ className: __WEBPACK_IMPORTED_MODULE_1__ListHomes_scss___default.a.nestDetails },\n\t\t\t\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t{ className: __WEBPACK_IMPORTED_MODULE_1__ListHomes_scss___default.a.price },\n\t\t\t\t\t\t\t`\\$${nest.price}}/week`\n\t\t\t\t\t\t),\n\t\t\t\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t{ className: __WEBPACK_IMPORTED_MODULE_1__ListHomes_scss___default.a.host },\n\t\t\t\t\t\t\tnest.hostName\n\t\t\t\t\t\t),\n\t\t\t\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t{ className: __WEBPACK_IMPORTED_MODULE_1__ListHomes_scss___default.a.address },\n\t\t\t\t\t\t\tnest.address\n\t\t\t\t\t\t),\n\t\t\t\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t{ className: __WEBPACK_IMPORTED_MODULE_1__ListHomes_scss___default.a.campusDist },\n\t\t\t\t\t\t\tnest.campusDist\n\t\t\t\t\t\t)\n\t\t\t\t\t)\n\t\t\t\t)),\n\t\t\t\t';'\n\t\t\t)\n\t\t);\n\t}\n\n}\n\nListHomes.propTypes = {\n\tnests: __WEBPACK_IMPORTED_MODULE_0_react__[\"PropTypes\"].arrayOf(__WEBPACK_IMPORTED_MODULE_0_react__[\"PropTypes\"].shape({\n\t\thostId: __WEBPACK_IMPORTED_MODULE_0_react__[\"PropTypes\"].number,\n\t\thostName: __WEBPACK_IMPORTED_MODULE_0_react__[\"PropTypes\"].string,\n\t\taddress: __WEBPACK_IMPORTED_MODULE_0_react__[\"PropTypes\"].string,\n\t\tcampusDist: __WEBPACK_IMPORTED_MODULE_0_react__[\"PropTypes\"].string,\n\t\tprice: __WEBPACK_IMPORTED_MODULE_0_react__[\"PropTypes\"].number,\n\t\tminStay: __WEBPACK_IMPORTED_MODULE_0_react__[\"PropTypes\"].number,\n\t\tphoto: __WEBPACK_IMPORTED_MODULE_0_react__[\"PropTypes\"].string\n\t}))\n};\n/* harmony default export */ __webpack_exports__[\"a\"] = (ListHomes);\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/components/ListHomes/ListHomes.jsx\n// module id = 32\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/components/ListHomes/ListHomes.jsx?");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/components/ListHomes/ListHomes.scss\n// module id = 33\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/components/ListHomes/ListHomes.scss?");

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_redux__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_RenterProfile__ = __webpack_require__(35);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__redux_store__ = __webpack_require__(4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__redux_actions_SetUserAction__ = __webpack_require__(37);\n\n\n\n\n\nconst baseUser = {\n\tname: '',\n\timage: null,\n\taboutMe: ''\n};\n\nconst campuses = [{\n\tid: 1,\n\tname: 'Casuarina'\n}, {\n\tid: 2,\n\tname: 'Waterfront'\n}, {\n\tid: 3,\n\tname: 'Plamerston'\n}];\n\nconst setName = name => {\n\tconst currUser = __WEBPACK_IMPORTED_MODULE_2__redux_store__[\"a\" /* default */].getState().user;\n\t__WEBPACK_IMPORTED_MODULE_2__redux_store__[\"a\" /* default */].dispatch(Object(__WEBPACK_IMPORTED_MODULE_3__redux_actions_SetUserAction__[\"a\" /* default */])(currUser.set('name', name)));\n};\n\nconst setCampus = campus => {\n\tconst currUser = __WEBPACK_IMPORTED_MODULE_2__redux_store__[\"a\" /* default */].getState().user;\n\t__WEBPACK_IMPORTED_MODULE_2__redux_store__[\"a\" /* default */].dispatch(Object(__WEBPACK_IMPORTED_MODULE_3__redux_actions_SetUserAction__[\"a\" /* default */])(currUser.set('campus', campus)));\n};\n\nconst setAbout = about => {\n\tconst currUser = __WEBPACK_IMPORTED_MODULE_2__redux_store__[\"a\" /* default */].getState().user;\n\t__WEBPACK_IMPORTED_MODULE_2__redux_store__[\"a\" /* default */].dispatch(Object(__WEBPACK_IMPORTED_MODULE_3__redux_actions_SetUserAction__[\"a\" /* default */])(currUser.set('aboutMe', about)));\n};\n\nconst mapStateToProps = state => ({\n\tuser: state.user.toJS(),\n\tcampuses,\n\tsetName,\n\tsetAbout,\n\tsetCampus\n});\n\nconst ReduxContainer = Object(__WEBPACK_IMPORTED_MODULE_0_react_redux__[\"connect\"])(mapStateToProps)(__WEBPACK_IMPORTED_MODULE_1__components_RenterProfile__[\"a\" /* default */]);\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (ReduxContainer);\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/containers/RenterProfileContainer.js\n// module id = 34\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/containers/RenterProfileContainer.js?");

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(6);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__RenterProfile_scss__ = __webpack_require__(36);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__RenterProfile_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__RenterProfile_scss__);\n\n\n\n\nclass RenterProfile extends __WEBPACK_IMPORTED_MODULE_0_react__[\"Component\"] {\n\n\tconstructor(props) {\n\t\tsuper();\n\n\t\tthis.setName = evt => {\n\t\t\tthis.props.setName(evt.target.value);\n\t\t};\n\n\t\tthis.setAbout = evt => {\n\t\t\tthis.props.setAbout(evt.target.value);\n\t\t};\n\n\t\tthis.setCampus = evt => {\n\t\t\tthis.props.setCampus(evt.target.value);\n\t\t};\n\n\t\tthis.props = props;\n\t}\n\n\trender() {\n\t\tconst ids = {\n\t\t\tname: 'renter-profile-name',\n\t\t\tabout: 'renter-profile-about'\n\t\t};\n\n\t\tconst image = this.props.user.image || 'http://via.placeholder.com/400x400';\n\n\t\treturn __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t\t'div',\n\t\t\t{ className: __WEBPACK_IMPORTED_MODULE_2__RenterProfile_scss___default.a.content },\n\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t\t\t'form',\n\t\t\t\tnull,\n\t\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: __WEBPACK_IMPORTED_MODULE_2__RenterProfile_scss___default.a.inputGroupName },\n\t\t\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t\t\t\t\t'label',\n\t\t\t\t\t\t{ htmlFor: ids.name },\n\t\t\t\t\t\t'Name'\n\t\t\t\t\t),\n\t\t\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', id: ids.name, value: this.props.user.name, placeholder: 'Jane Doe', onChange: this.setName })\n\t\t\t\t),\n\t\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: __WEBPACK_IMPORTED_MODULE_2__RenterProfile_scss___default.a.inputGroupImage },\n\t\t\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: image }),\n\t\t\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t\t\t\t\t'button',\n\t\t\t\t\t\t{ className: __WEBPACK_IMPORTED_MODULE_2__RenterProfile_scss___default.a.uploadPhotoBtn },\n\t\t\t\t\t\t'Upload photo'\n\t\t\t\t\t)\n\t\t\t\t),\n\t\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: __WEBPACK_IMPORTED_MODULE_2__RenterProfile_scss___default.a.inputGroupAbout },\n\t\t\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t\t\t\t\t'label',\n\t\t\t\t\t\t{ htmlFor: ids.about },\n\t\t\t\t\t\t'Describe myself'\n\t\t\t\t\t),\n\t\t\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('textarea', { id: ids.about, value: this.props.user.aboutMe, onChange: this.setAbout })\n\t\t\t\t),\n\t\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: __WEBPACK_IMPORTED_MODULE_2__RenterProfile_scss___default.a.inputGroupCampus },\n\t\t\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t\t\t\t\t'label',\n\t\t\t\t\t\t{ htmlFor: ids.about },\n\t\t\t\t\t\t'My Campus'\n\t\t\t\t\t),\n\t\t\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t\t\t\t\t'select',\n\t\t\t\t\t\t{ value: this.props.user.campus, onChange: this.setCampus },\n\t\t\t\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t\t\t\t\t\t'option',\n\t\t\t\t\t\t\t{ value: '' },\n\t\t\t\t\t\t\t'Select campus'\n\t\t\t\t\t\t),\n\t\t\t\t\t\tthis.props.campuses.map(campus => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t\t\t\t\t\t'option',\n\t\t\t\t\t\t\t{ value: campus.value },\n\t\t\t\t\t\t\tcampus.name\n\t\t\t\t\t\t))\n\t\t\t\t\t)\n\t\t\t\t),\n\t\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: __WEBPACK_IMPORTED_MODULE_2__RenterProfile_scss___default.a.nextBtn },\n\t\t\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t\t\t\t\t'button',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\t'Next'\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t)\n\t\t);\n\t}\n\n}\n\nRenterProfile.propTypes = {\n\tuser: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({\n\t\tname: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,\n\t\timage: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,\n\t\taboutMe: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,\n\t\tcampus: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number\n\t}).isRequired,\n\tcampuses: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({\n\t\tid: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,\n\t\tname: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string\n\t})).isRequired,\n\tsetName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,\n\tsetAbout: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,\n\tsetCampus: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"a\"] = (RenterProfile);\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/components/RenterProfile/RenterProfile.jsx\n// module id = 35\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/components/RenterProfile/RenterProfile.jsx?");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\nmodule.exports = {\"content\":\"RenterProfile__content--NUKZa\",\"input-group__name\":\"RenterProfile__input-group__name--2U3jY\",\"inputGroupName\":\"RenterProfile__input-group__name--2U3jY\",\"input-group__image\":\"RenterProfile__input-group__image--1-99A\",\"inputGroupImage\":\"RenterProfile__input-group__image--1-99A\",\"input-group__about\":\"RenterProfile__input-group__about--2oZ6k\",\"inputGroupAbout\":\"RenterProfile__input-group__about--2oZ6k\",\"input-group__campus\":\"RenterProfile__input-group__campus--__VQQ\",\"inputGroupCampus\":\"RenterProfile__input-group__campus--__VQQ\",\"next-btn\":\"RenterProfile__next-btn--2vi8c\",\"nextBtn\":\"RenterProfile__next-btn--2vi8c\"};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/components/RenterProfile/RenterProfile.scss\n// module id = 36\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/components/RenterProfile/RenterProfile.scss?");

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (immutable) */ __webpack_exports__[\"a\"] = setUserAction;\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actionTypes__ = __webpack_require__(1);\n/** \n* SetUserAction.js.js\n* A sample action definition to call a redux reducer\n**/\n\n\n\n/**\n * @param {Object} dummy data to be saved to the store\n **/\nfunction setUserAction(data) {\n\treturn {\n\t\ttype: __WEBPACK_IMPORTED_MODULE_0__actionTypes__[\"a\" /* default */].setUser,\n\t\tpayload: data\n\t};\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/redux/actions/SetUserAction.js\n// module id = 37\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/redux/actions/SetUserAction.js?");

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__HostProfile_scss__ = __webpack_require__(39);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__HostProfile_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__HostProfile_scss__);\n\n\n\nconst ids = {\n\taboutMe: 'host-profile-about-host',\n\taboutNest: 'host-profile-about-nest'\n};\n\nclass HostProfile extends __WEBPACK_IMPORTED_MODULE_0_react__[\"Component\"] {\n\n\tconstructor(props) {\n\t\tsuper();\n\n\t\tthis.getAboutMe = () => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t\t'div',\n\t\t\t{ className: __WEBPACK_IMPORTED_MODULE_1__HostProfile_scss___default.a.aboutMe },\n\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t\t\t'label',\n\t\t\t\t{ htmlFor: ids.aboutMe },\n\t\t\t\t'About Me'\n\t\t\t),\n\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('textarea', { id: ids.aboutMe }),\n\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t\t\t'button',\n\t\t\t\tnull,\n\t\t\t\t'Next'\n\t\t\t)\n\t\t);\n\n\t\tthis.getAboutNest = () => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t\t'div',\n\t\t\t{ className: __WEBPACK_IMPORTED_MODULE_1__HostProfile_scss___default.a.aboutNest },\n\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: __WEBPACK_IMPORTED_MODULE_1__HostProfile_scss___default.a.inputGroupAddress },\n\t\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t\t\t\t'label',\n\t\t\t\t\t{ htmlFor: ids.inputGroupAddress },\n\t\t\t\t\t'Address'\n\t\t\t\t),\n\t\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', id: ids.inputGroupAddress })\n\t\t\t),\n\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: __WEBPACK_IMPORTED_MODULE_1__HostProfile_scss___default.a.inputGroupAmenities },\n\t\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t\t\t\t'label',\n\t\t\t\t\t{ htmlFor: ids.amenities },\n\t\t\t\t\t'Amenities'\n\t\t\t\t),\n\t\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('textarea', { id: ids.amenities })\n\t\t\t),\n\t\t\t'// mininum stay',\n\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: __WEBPACK_IMPORTED_MODULE_1__HostProfile_scss___default.a.inputGroupMinStay },\n\t\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t\t\t\t'label',\n\t\t\t\t\t{ htmlFor: ids.minStay },\n\t\t\t\t\t'Minimum Stay'\n\t\t\t\t),\n\t\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('textarea', { id: ids.minStay })\n\t\t\t),\n\t\t\t'// preferred gender'\n\t\t);\n\n\t\tthis.props = props;\n\t\tthis.state = {\n\t\t\tpage: 1\n\t\t};\n\t}\n\n\trender() {\n\t\tlet page = null;\n\t\tswitch (page) {\n\t\t\tcase 1:\n\t\t\t\tpage = this.getAboutMe();\n\t\t\t\tbreak;\n\t\t\tcase 2:\n\t\t\t\tpage = this.getAboutNest();\n\t\t\t\tbreak;\n\t\t};\n\n\t\treturn __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t\t'div',\n\t\t\t{ className: __WEBPACK_IMPORTED_MODULE_1__HostProfile_scss___default.a.content },\n\t\t\tpage\n\t\t);\n\t}\n\n}\n\nHostProfile.propTypes = {\n\tclassName: __WEBPACK_IMPORTED_MODULE_0_react__[\"PropTypes\"].string,\n\tuserId: __WEBPACK_IMPORTED_MODULE_0_react__[\"PropTypes\"].number,\n\taboutMe: __WEBPACK_IMPORTED_MODULE_0_react__[\"PropTypes\"].string,\n\tprice: __WEBPACK_IMPORTED_MODULE_0_react__[\"PropTypes\"].number,\n\taddress: __WEBPACK_IMPORTED_MODULE_0_react__[\"PropTypes\"].string,\n\taboutNest: __WEBPACK_IMPORTED_MODULE_0_react__[\"PropTypes\"].string,\n\tminStay: __WEBPACK_IMPORTED_MODULE_0_react__[\"PropTypes\"].string\n};\n/* harmony default export */ __webpack_exports__[\"a\"] = (HostProfile);\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/components/HostProfile/HostProfile.jsx\n// module id = 38\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/components/HostProfile/HostProfile.jsx?");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/components/HostProfile/HostProfile.scss\n// module id = 39\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/components/HostProfile/HostProfile.scss?");

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__NotFound_scss__ = __webpack_require__(41);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__NotFound_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__NotFound_scss__);\n\n\n\nclass NotFound extends __WEBPACK_IMPORTED_MODULE_0_react__[\"Component\"] {\n\n\tconstructor(props) {\n\t\tsuper();\n\t\tthis.props = props;\n\t}\n\n\trender() {\n\t\treturn __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t\t'div',\n\t\t\t{ className: __WEBPACK_IMPORTED_MODULE_1__NotFound_scss___default.a.container },\n\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: __WEBPACK_IMPORTED_MODULE_1__NotFound_scss___default.a.heading },\n\t\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t\t\t\t'h2',\n\t\t\t\t\tnull,\n\t\t\t\t\t'Error 404'\n\t\t\t\t)\n\t\t\t),\n\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: __WEBPACK_IMPORTED_MODULE_1__NotFound_scss___default.a.content },\n\t\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t\t\t\t'p',\n\t\t\t\t\tnull,\n\t\t\t\t\t'Oh dear! It looks like the page ',\n\t\t\t\t\tthis.props.location.pathname,\n\t\t\t\t\t' could not be found.'\n\t\t\t\t)\n\t\t\t)\n\t\t);\n\t}\n\n}\n\nNotFound.propTypes = {\n\tlocation: __WEBPACK_IMPORTED_MODULE_0_react__[\"PropTypes\"].shape({\n\t\tpathname: __WEBPACK_IMPORTED_MODULE_0_react__[\"PropTypes\"].string\n\t})\n};\n/* harmony default export */ __webpack_exports__[\"a\"] = (NotFound);\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/components/NotFound/NotFound.js\n// module id = 40\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/components/NotFound/NotFound.js?");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\nmodule.exports = {\"container\":\"NotFound__container--2PbzV\",\"heading\":\"NotFound__heading--n6nFk\",\"content\":\"NotFound__content--1N67Q\"};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/components/NotFound/NotFound.scss\n// module id = 41\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/components/NotFound/NotFound.scss?");

/***/ })
/******/ ]);