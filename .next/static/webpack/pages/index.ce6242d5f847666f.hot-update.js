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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Amma_Desktop_mock_ecommerce_main_mock_ecommerce_main_client_clientchild_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Amma_Desktop_mock_ecommerce_main_mock_ecommerce_main_client_clientchild_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Amma_Desktop_mock_ecommerce_main_mock_ecommerce_main_client_clientchild_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../axios */ \"./axios.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction FilterMenu() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}), items = ref[0], setItems = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), subCategory = ref1[0], isSubcategory = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        getFilters();\n    }, []);\n    function getFilters() {\n        return _getFilters.apply(this, arguments);\n    }\n    function _getFilters() {\n        _getFilters = _asyncToGenerator(C_Users_Amma_Desktop_mock_ecommerce_main_mock_ecommerce_main_client_clientchild_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var data;\n            return C_Users_Amma_Desktop_mock_ecommerce_main_mock_ecommerce_main_client_clientchild_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return _axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/filters\");\n                    case 3:\n                        data = _ctx.sent.data;\n                        setItems(_objectSpread({}, data));\n                        console.log(\"from items\", items);\n                        _ctx.next = 11;\n                        break;\n                    case 8:\n                        _ctx.prev = 8;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0);\n                    case 11:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    8\n                ]\n            ]);\n        }));\n        return _getFilters.apply(this, arguments);\n    }\n    //   const { searchFilter } = items;\n    //   const { categories, brands } = searchFilter;\n    //   const barands = items?.brands;\n    //   const categories = items?.categories;\n    //   console.log(categories);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                children: \"Categories\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Amma\\\\Desktop\\\\mock-ecommerce-main\\\\mock-ecommerce-main\\\\client\\\\clientchild\\\\components\\\\FilterMenu.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            categories.map(function(val) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                    onClick: function(e) {\n                        console.log(\"Clicked\");\n                    },\n                    children: val === null || val === void 0 ? void 0 : val.name\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Amma\\\\Desktop\\\\mock-ecommerce-main\\\\mock-ecommerce-main\\\\client\\\\clientchild\\\\components\\\\FilterMenu.js\",\n                    lineNumber: 31,\n                    columnNumber: 11\n                }, _this);\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                children: \"Brands\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Amma\\\\Desktop\\\\mock-ecommerce-main\\\\mock-ecommerce-main\\\\client\\\\clientchild\\\\components\\\\FilterMenu.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            brands.map(function(val) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                    children: val === null || val === void 0 ? void 0 : val.name\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Amma\\\\Desktop\\\\mock-ecommerce-main\\\\mock-ecommerce-main\\\\client\\\\clientchild\\\\components\\\\FilterMenu.js\",\n                    lineNumber: 42,\n                    columnNumber: 16\n                }, _this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Amma\\\\Desktop\\\\mock-ecommerce-main\\\\mock-ecommerce-main\\\\client\\\\clientchild\\\\components\\\\FilterMenu.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_s(FilterMenu, \"37Yare1rXtLq/4+g1TbihUCGpqE=\");\n_c = FilterMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilterMenu);\nvar _c;\n$RefreshReg$(_c, \"FilterMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZpbHRlck1lbnUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNuQjtBQUNROztBQUV4QyxTQUFTSyxVQUFVLEdBQUc7OztJQUNwQixJQUEwQkgsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUx4QyxLQUtjLEdBQWNBLEdBQVksR0FBMUIsRUFMZCxRQUt3QixHQUFJQSxHQUFZLEdBQWhCO0lBQ3RCLElBQXFDQSxJQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBTnRELFdBTW9CLEdBQW1CQSxJQUFlLEdBQWxDLEVBTnBCLGFBTW1DLEdBQUlBLElBQWUsR0FBbkI7SUFDakNELGdEQUFTLENBQUMsV0FBTTtRQUNkUyxVQUFVLEVBQUUsQ0FBQztLQUNkLEVBQUUsRUFBRSxDQUFDLENBQUM7YUFDUUEsVUFBVTtlQUFWQSxXQUFVOzthQUFWQSxXQUFVO1FBQVZBLFdBQVUsR0FBekIsZ09BQTRCO2dCQUVoQkMsSUFBSTs7Ozs7OytCQUFXUixrREFBWSxDQUFDLFVBQVUsQ0FBQzs7d0JBQXpDLElBQU0sYUFBSlEsSUFBSSxDQUFtQzt3QkFDL0NKLFFBQVEsQ0FBQyxrQkFBS0ksSUFBSSxDQUFFLENBQUMsQ0FBQzt3QkFDdEJFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFlBQVksRUFBRVIsS0FBSyxDQUFDLENBQUM7Ozs7Ozt3QkFFakNPLE9BQU8sQ0FBQ0MsR0FBRyxTQUFPLENBQUM7Ozs7Ozs7Ozs7O1NBRXRCO2VBUmNKLFdBQVU7O0lBVTNCLG9DQUFvQztJQUNwQyxpREFBaUQ7SUFDL0MsbUNBQW1DO0lBQ25DLDBDQUEwQztJQUMxQyw2QkFBNkI7SUFDN0IscUJBQ0UsOERBQUNLLEtBQUc7OzBCQUNGLDhEQUFDQyxJQUFFOzBCQUFDLFlBQVU7Ozs7O29CQUFLO1lBQ2xCQyxVQUFVLENBQUNDLEdBQUcsQ0FBQyxTQUFDQyxHQUFHLEVBQUs7Z0JBQ3ZCLHFCQUNFLDhEQUFDQyxHQUFDO29CQUNBQyxPQUFPLEVBQUUsU0FBQ0MsQ0FBQyxFQUFLO3dCQUNkVCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztxQkFDeEI7OEJBRUFLLEdBQUcsYUFBSEEsR0FBRyxXQUFNLEdBQVRBLEtBQUFBLENBQVMsR0FBVEEsR0FBRyxDQUFFSSxJQUFJOzs7Ozt5QkFDUixDQUNKO2FBQ0gsQ0FBQzswQkFDRiw4REFBQ1AsSUFBRTswQkFBQyxRQUFNOzs7OztvQkFBSztZQUNkUSxNQUFNLENBQUNOLEdBQUcsQ0FBQyxTQUFDQyxHQUFHLEVBQUs7Z0JBQ25CLHFCQUFPLDhEQUFDQyxHQUFDOzhCQUFFRCxHQUFHLGFBQUhBLEdBQUcsV0FBTSxHQUFUQSxLQUFBQSxDQUFTLEdBQVRBLEdBQUcsQ0FBRUksSUFBSTs7Ozs7eUJBQUssQ0FBQzthQUMzQixDQUFDOzs7Ozs7WUFDRSxDQUNOO0NBQ0g7R0F6Q1FsQixVQUFVO0FBQVZBLEtBQUFBLFVBQVU7QUEyQ25CLCtEQUFlQSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaWx0ZXJNZW51LmpzP2ZjNGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGluc3RhbmNlIGZyb20gXCIuLi9heGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmZ1bmN0aW9uIEZpbHRlck1lbnUoKSB7XHJcbiAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgW3N1YkNhdGVnb3J5LCBpc1N1YmNhdGVnb3J5XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0RmlsdGVycygpO1xyXG4gIH0sIFtdKTtcclxuICBhc3luYyBmdW5jdGlvbiBnZXRGaWx0ZXJzKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBpbnN0YW5jZS5nZXQoXCIvZmlsdGVyc1wiKTtcclxuICAgICAgc2V0SXRlbXMoeyAuLi5kYXRhIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZyhcImZyb20gaXRlbXNcIiwgaXRlbXMpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuLy8gICBjb25zdCB7IHNlYXJjaEZpbHRlciB9ID0gaXRlbXM7XHJcbi8vICAgY29uc3QgeyBjYXRlZ29yaWVzLCBicmFuZHMgfSA9IHNlYXJjaEZpbHRlcjtcclxuICAvLyAgIGNvbnN0IGJhcmFuZHMgPSBpdGVtcz8uYnJhbmRzO1xyXG4gIC8vICAgY29uc3QgY2F0ZWdvcmllcyA9IGl0ZW1zPy5jYXRlZ29yaWVzO1xyXG4gIC8vICAgY29uc29sZS5sb2coY2F0ZWdvcmllcyk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMj5DYXRlZ29yaWVzPC9oMj5cclxuICAgICAge2NhdGVnb3JpZXMubWFwKCh2YWwpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPHBcclxuICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNsaWNrZWRcIik7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHt2YWw/Lm5hbWV9XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcbiAgICAgIDxoMj5CcmFuZHM8L2gyPlxyXG4gICAgICB7YnJhbmRzLm1hcCgodmFsKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIDxwPnt2YWw/Lm5hbWV9PC9wPjtcclxuICAgICAgfSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJNZW51O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImluc3RhbmNlIiwidXNlUm91dGVyIiwiRmlsdGVyTWVudSIsIml0ZW1zIiwic2V0SXRlbXMiLCJzdWJDYXRlZ29yeSIsImlzU3ViY2F0ZWdvcnkiLCJnZXRGaWx0ZXJzIiwiZGF0YSIsImdldCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJoMiIsImNhdGVnb3JpZXMiLCJtYXAiLCJ2YWwiLCJwIiwib25DbGljayIsImUiLCJuYW1lIiwiYnJhbmRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/FilterMenu.js\n");

/***/ })

});