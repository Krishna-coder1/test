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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Amma_Desktop_mock_ecommerce_main_mock_ecommerce_main_client_clientchild_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Amma_Desktop_mock_ecommerce_main_mock_ecommerce_main_client_clientchild_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Amma_Desktop_mock_ecommerce_main_mock_ecommerce_main_client_clientchild_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../axios */ \"./axios.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction FilterMenu() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}), items = ref[0], setItems = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), subCategory = ref1[0], isSubcategory = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        getFilters();\n    }, []);\n    function getFilters() {\n        return _getFilters.apply(this, arguments);\n    }\n    function _getFilters() {\n        _getFilters = _asyncToGenerator(C_Users_Amma_Desktop_mock_ecommerce_main_mock_ecommerce_main_client_clientchild_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var data;\n            return C_Users_Amma_Desktop_mock_ecommerce_main_mock_ecommerce_main_client_clientchild_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return _axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/filters\");\n                    case 3:\n                        data = _ctx.sent.data;\n                        setItems(_objectSpread({}, data));\n                        console.log(\"from items\", items);\n                        _ctx.next = 11;\n                        break;\n                    case 8:\n                        _ctx.prev = 8;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0);\n                    case 11:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    8\n                ]\n            ]);\n        }));\n        return _getFilters.apply(this, arguments);\n    }\n    console.log(items);\n    var searchFilter = items.searchFilter;\n    var categories = searchFilter === null || searchFilter === void 0 ? void 0 : searchFilter.categories;\n    console.log(\"Cat\");\n    //   const barands = items?.brands;\n    //   const categories = items?.categories;\n    //   console.log(categories);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {}, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Amma\\\\Desktop\\\\mock-ecommerce-main\\\\mock-ecommerce-main\\\\client\\\\clientchild\\\\components\\\\FilterMenu.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_s(FilterMenu, \"37Yare1rXtLq/4+g1TbihUCGpqE=\");\n_c = FilterMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilterMenu);\nvar _c;\n$RefreshReg$(_c, \"FilterMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZpbHRlck1lbnUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNuQjtBQUNROztBQUV4QyxTQUFTSyxVQUFVLEdBQUc7O0lBQ3BCLElBQTBCSCxHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBTHhDLEtBS2MsR0FBY0EsR0FBWSxHQUExQixFQUxkLFFBS3dCLEdBQUlBLEdBQVksR0FBaEI7SUFDdEIsSUFBcUNBLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFOdEQsV0FNb0IsR0FBbUJBLElBQWUsR0FBbEMsRUFOcEIsYUFNbUMsR0FBSUEsSUFBZSxHQUFuQjtJQUNqQ0QsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2RTLFVBQVUsRUFBRSxDQUFDO0tBQ2QsRUFBRSxFQUFFLENBQUMsQ0FBQzthQUNRQSxVQUFVO2VBQVZBLFdBQVU7O2FBQVZBLFdBQVU7UUFBVkEsV0FBVSxHQUF6QixnT0FBNEI7Z0JBRWhCQyxJQUFJOzs7Ozs7K0JBQVdSLGtEQUFZLENBQUMsVUFBVSxDQUFDOzt3QkFBekMsSUFBTSxhQUFKUSxJQUFJLENBQW1DO3dCQUMvQ0osUUFBUSxDQUFDLGtCQUFLSSxJQUFJLENBQUUsQ0FBQyxDQUFDO3dCQUN0QkUsT0FBTyxDQUFDQyxHQUFHLENBQUMsWUFBWSxFQUFFUixLQUFLLENBQUMsQ0FBQzs7Ozs7O3dCQUVqQ08sT0FBTyxDQUFDQyxHQUFHLFNBQU8sQ0FBQzs7Ozs7Ozs7Ozs7U0FFdEI7ZUFSY0osV0FBVTs7SUFTekJHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUixLQUFLLENBQUMsQ0FBQztJQUVuQixJQUFNLFlBQWMsR0FBS0EsS0FBSyxDQUF0QlMsWUFBWTtJQUNwQixJQUFNQyxVQUFVLEdBQUdELFlBQVksYUFBWkEsWUFBWSxXQUFZLEdBQXhCQSxLQUFBQSxDQUF3QixHQUF4QkEsWUFBWSxDQUFFQyxVQUFVO0lBQzNDSCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxLQUFLLENBQUcsQ0FBQztJQUNyQixtQ0FBbUM7SUFDbkMsMENBQTBDO0lBQzFDLDZCQUE2QjtJQUM3QixxQkFDRSw4REFBQ0csS0FBRzs7OztZQWlCRSxDQUNOO0NBQ0g7R0EzQ1FaLFVBQVU7QUFBVkEsS0FBQUEsVUFBVTtBQTZDbkIsK0RBQWVBLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0ZpbHRlck1lbnUuanM/ZmM0YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgaW5zdGFuY2UgZnJvbSBcIi4uL2F4aW9zXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuZnVuY3Rpb24gRmlsdGVyTWVudSgpIHtcclxuICBjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBbc3ViQ2F0ZWdvcnksIGlzU3ViY2F0ZWdvcnldID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRGaWx0ZXJzKCk7XHJcbiAgfSwgW10pO1xyXG4gIGFzeW5jIGZ1bmN0aW9uIGdldEZpbHRlcnMoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGluc3RhbmNlLmdldChcIi9maWx0ZXJzXCIpO1xyXG4gICAgICBzZXRJdGVtcyh7IC4uLmRhdGEgfSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZnJvbSBpdGVtc1wiLCBpdGVtcyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnNvbGUubG9nKGl0ZW1zKTtcclxuXHJcbiAgY29uc3QgeyBzZWFyY2hGaWx0ZXIgfSA9IGl0ZW1zO1xyXG4gIGNvbnN0IGNhdGVnb3JpZXMgPSBzZWFyY2hGaWx0ZXI/LmNhdGVnb3JpZXM7XHJcbiAgY29uc29sZS5sb2coXCJDYXRcIiwgKTtcclxuICAvLyAgIGNvbnN0IGJhcmFuZHMgPSBpdGVtcz8uYnJhbmRzO1xyXG4gIC8vICAgY29uc3QgY2F0ZWdvcmllcyA9IGl0ZW1zPy5jYXRlZ29yaWVzO1xyXG4gIC8vICAgY29uc29sZS5sb2coY2F0ZWdvcmllcyk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHsvKiA8aDI+Q2F0ZWdvcmllczwvaDI+XHJcbiAgICAgIHtjYXRlZ29yaWVzLm1hcCgodmFsKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDbGlja2VkXCIpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7dmFsPy5uYW1lfVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pfVxyXG4gICAgICA8aDI+QnJhbmRzPC9oMj5cclxuICAgICAge2JyYW5kcy5tYXAoKHZhbCkgPT4ge1xyXG4gICAgICAgIHJldHVybiA8cD57dmFsPy5uYW1lfTwvcD47XHJcbiAgICAgIH0pfSAqL31cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbHRlck1lbnU7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiaW5zdGFuY2UiLCJ1c2VSb3V0ZXIiLCJGaWx0ZXJNZW51IiwiaXRlbXMiLCJzZXRJdGVtcyIsInN1YkNhdGVnb3J5IiwiaXNTdWJjYXRlZ29yeSIsImdldEZpbHRlcnMiLCJkYXRhIiwiZ2V0IiwiY29uc29sZSIsImxvZyIsInNlYXJjaEZpbHRlciIsImNhdGVnb3JpZXMiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/FilterMenu.js\n");

/***/ })

});