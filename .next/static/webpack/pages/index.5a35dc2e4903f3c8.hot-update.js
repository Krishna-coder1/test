"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/FilterMenu.js":
/*!**********************************!*\
  !*** ./components/FilterMenu.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Amma_Desktop_mock_ecommerce_main_mock_ecommerce_main_client_clientchild_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Amma_Desktop_mock_ecommerce_main_mock_ecommerce_main_client_clientchild_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Amma_Desktop_mock_ecommerce_main_mock_ecommerce_main_client_clientchild_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../axios */ \"./axios.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction FilterMenu() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}), items = ref[0], setItems = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        getFilters();\n    }, []);\n    function getFilters() {\n        return _getFilters.apply(this, arguments);\n    }\n    function _getFilters() {\n        _getFilters = _asyncToGenerator(C_Users_Amma_Desktop_mock_ecommerce_main_mock_ecommerce_main_client_clientchild_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var data;\n            return C_Users_Amma_Desktop_mock_ecommerce_main_mock_ecommerce_main_client_clientchild_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return _axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/filters\");\n                    case 3:\n                        data = _ctx.sent.data;\n                        console.log(data);\n                        _ctx.next = 10;\n                        break;\n                    case 7:\n                        _ctx.prev = 7;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0);\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    7\n                ]\n            ]);\n        }));\n        return _getFilters.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: \"FilterMenu\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Amma\\\\Desktop\\\\mock-ecommerce-main\\\\mock-ecommerce-main\\\\client\\\\clientchild\\\\components\\\\FilterMenu.js\",\n        lineNumber: 19,\n        columnNumber: 10\n    }, this);\n}\n_s(FilterMenu, \"bZvTV4UWTy+ePeavylPDvbKzupU=\");\n_c = FilterMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilterMenu);\nvar _c;\n$RefreshReg$(_c, \"FilterMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZpbHRlck1lbnUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ25CO0FBQ1E7O0FBRXhDLFNBQVNLLFVBQVUsR0FBRzs7SUFDcEIsSUFBMEJILEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFMeEMsS0FLYyxHQUFjQSxHQUFZLEdBQTFCLEVBTGQsUUFLd0IsR0FBSUEsR0FBWSxHQUFoQjtJQUN0QkQsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2RPLFVBQVUsRUFBRSxDQUFDO0tBQ2QsRUFBRSxFQUFFLENBQUMsQ0FBQzthQUNRQSxVQUFVO2VBQVZBLFdBQVU7O2FBQVZBLFdBQVU7UUFBVkEsV0FBVSxHQUF6QixnT0FBNEI7Z0JBRWhCQyxJQUFJOzs7Ozs7K0JBQVdOLGtEQUFZLENBQUMsVUFBVSxDQUFDOzt3QkFBekMsSUFBTSxhQUFKTSxJQUFJLENBQW1DO3dCQUMvQ0UsT0FBTyxDQUFDQyxHQUFHLENBQUNILElBQUksQ0FBQyxDQUFDOzs7Ozs7d0JBRWxCRSxPQUFPLENBQUNDLEdBQUcsU0FBTyxDQUFDOzs7Ozs7Ozs7OztTQUV0QjtlQVBjSixXQUFVOztJQVN6QixxQkFBTyw4REFBQ0ssS0FBRztrQkFBQyxZQUFVOzs7OztZQUFNLENBQUM7Q0FDOUI7R0FmUVIsVUFBVTtBQUFWQSxLQUFBQSxVQUFVO0FBaUJuQiwrREFBZUEsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRmlsdGVyTWVudS5qcz9mYzRiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBpbnN0YW5jZSBmcm9tIFwiLi4vYXhpb3NcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5mdW5jdGlvbiBGaWx0ZXJNZW51KCkge1xyXG4gIGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGUoe30pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRGaWx0ZXJzKCk7XHJcbiAgfSwgW10pO1xyXG4gIGFzeW5jIGZ1bmN0aW9uIGdldEZpbHRlcnMoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGluc3RhbmNlLmdldChcIi9maWx0ZXJzXCIpO1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiA8ZGl2PkZpbHRlck1lbnU8L2Rpdj47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbHRlck1lbnU7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiaW5zdGFuY2UiLCJ1c2VSb3V0ZXIiLCJGaWx0ZXJNZW51IiwiaXRlbXMiLCJzZXRJdGVtcyIsImdldEZpbHRlcnMiLCJkYXRhIiwiZ2V0IiwiY29uc29sZSIsImxvZyIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/FilterMenu.js\n");

/***/ })

});