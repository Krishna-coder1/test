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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Amma_Desktop_mock_ecommerce_main_mock_ecommerce_main_client_clientchild_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Amma_Desktop_mock_ecommerce_main_mock_ecommerce_main_client_clientchild_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Amma_Desktop_mock_ecommerce_main_mock_ecommerce_main_client_clientchild_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../axios */ \"./axios.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction FilterMenu() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}), items = ref[0], setItems = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), subCategory = ref1[0], isSubcategory = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), subcateitems = ref2[0], setsubcatitems = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        getFilters();\n    }, []);\n    function getFilters() {\n        return _getFilters.apply(this, arguments);\n    }\n    function _getFilters() {\n        _getFilters = _asyncToGenerator(C_Users_Amma_Desktop_mock_ecommerce_main_mock_ecommerce_main_client_clientchild_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var data;\n            return C_Users_Amma_Desktop_mock_ecommerce_main_mock_ecommerce_main_client_clientchild_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return _axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/filters\");\n                    case 3:\n                        data = _ctx.sent.data;\n                        console.log(\"from items\", items);\n                        setItems(function() {\n                            return data;\n                        });\n                        _ctx.next = 11;\n                        break;\n                    case 8:\n                        _ctx.prev = 8;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0);\n                    case 11:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    8\n                ]\n            ]);\n        }));\n        return _getFilters.apply(this, arguments);\n    }\n    console.log(\"fromStorage\", items);\n    var searchFilter = items.searchFilter;\n    var categories = searchFilter === null || searchFilter === void 0 ? void 0 : searchFilter.categories;\n    var brands = searchFilter === null || searchFilter === void 0 ? void 0 : searchFilter.brands;\n    console.log(\"Cat\", categories);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                children: \"Categories\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Amma\\\\Desktop\\\\mock-ecommerce-main\\\\mock-ecommerce-main\\\\client\\\\clientchild\\\\components\\\\FilterMenu.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            categories && categories.map(function(val) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                    onClick: function(e) {\n                        if (val === null || val === void 0 ? void 0 : val.subCategories) {\n                            isSubcategory(true);\n                            set;\n                        }\n                    },\n                    children: val === null || val === void 0 ? void 0 : val.name\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Amma\\\\Desktop\\\\mock-ecommerce-main\\\\mock-ecommerce-main\\\\client\\\\clientchild\\\\components\\\\FilterMenu.js\",\n                    lineNumber: 35,\n                    columnNumber: 13\n                }, _this);\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                children: \"Brands\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Amma\\\\Desktop\\\\mock-ecommerce-main\\\\mock-ecommerce-main\\\\client\\\\clientchild\\\\components\\\\FilterMenu.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            brands.map(function(val) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                    children: val === null || val === void 0 ? void 0 : val.name\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Amma\\\\Desktop\\\\mock-ecommerce-main\\\\mock-ecommerce-main\\\\client\\\\clientchild\\\\components\\\\FilterMenu.js\",\n                    lineNumber: 49,\n                    columnNumber: 16\n                }, _this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Amma\\\\Desktop\\\\mock-ecommerce-main\\\\mock-ecommerce-main\\\\client\\\\clientchild\\\\components\\\\FilterMenu.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(FilterMenu, \"Ceqr66IELhDMjM9RvjN9hx0oKAQ=\");\n_c = FilterMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilterMenu);\nvar _c;\n$RefreshReg$(_c, \"FilterMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBLFVBQVU7QUFrRG5CLCtEQUFlQSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaWx0ZXJNZW51LmpzP2ZjNGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGluc3RhbmNlIGZyb20gXCIuLi9heGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmZ1bmN0aW9uIEZpbHRlck1lbnUoKSB7XHJcbiAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgW3N1YkNhdGVnb3J5LCBpc1N1YmNhdGVnb3J5XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc3ViY2F0ZWl0ZW1zLCBzZXRzdWJjYXRpdGVtc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldEZpbHRlcnMoKTtcclxuICB9LCBbXSk7XHJcbiAgYXN5bmMgZnVuY3Rpb24gZ2V0RmlsdGVycygpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgaW5zdGFuY2UuZ2V0KFwiL2ZpbHRlcnNcIik7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZnJvbSBpdGVtc1wiLCBpdGVtcyk7XHJcbiAgICAgIHNldEl0ZW1zKCgpID0+IGRhdGEpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25zb2xlLmxvZyhcImZyb21TdG9yYWdlXCIsIGl0ZW1zKTtcclxuXHJcbiAgY29uc3QgeyBzZWFyY2hGaWx0ZXIgfSA9IGl0ZW1zO1xyXG4gIGxldCBjYXRlZ29yaWVzID0gc2VhcmNoRmlsdGVyPy5jYXRlZ29yaWVzO1xyXG4gIGxldCBicmFuZHMgPSBzZWFyY2hGaWx0ZXI/LmJyYW5kcztcclxuXHJcbiAgY29uc29sZS5sb2coXCJDYXRcIiwgY2F0ZWdvcmllcyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDI+Q2F0ZWdvcmllczwvaDI+XHJcbiAgICAgIHtjYXRlZ29yaWVzICYmXHJcbiAgICAgICAgY2F0ZWdvcmllcy5tYXAoKHZhbCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbD8uc3ViQ2F0ZWdvcmllcykge1xyXG4gICAgICAgICAgICAgICAgICBpc1N1YmNhdGVnb3J5KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3ZhbD8ubmFtZX1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPGgyPkJyYW5kczwvaDI+XHJcbiAgICAgIHticmFuZHMubWFwKCh2YWwpID0+IHtcclxuICAgICAgICByZXR1cm4gPHA+e3ZhbD8ubmFtZX08L3A+O1xyXG4gICAgICB9KX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbHRlck1lbnU7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiaW5zdGFuY2UiLCJ1c2VSb3V0ZXIiLCJGaWx0ZXJNZW51IiwiaXRlbXMiLCJzZXRJdGVtcyIsInN1YkNhdGVnb3J5IiwiaXNTdWJjYXRlZ29yeSIsInN1YmNhdGVpdGVtcyIsInNldHN1YmNhdGl0ZW1zIiwiZ2V0RmlsdGVycyIsImRhdGEiLCJnZXQiLCJjb25zb2xlIiwibG9nIiwic2VhcmNoRmlsdGVyIiwiY2F0ZWdvcmllcyIsImJyYW5kcyIsImRpdiIsImgyIiwibWFwIiwidmFsIiwicCIsIm9uQ2xpY2siLCJlIiwic3ViQ2F0ZWdvcmllcyIsInNldCIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/FilterMenu.js\n");

/***/ })

});