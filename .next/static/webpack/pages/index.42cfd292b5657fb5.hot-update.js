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

/***/ "./components/Articles.jsx":
/*!*********************************!*\
  !*** ./components/Articles.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticProps\": function() { return /* binding */ getStaticProps; }\n/* harmony export */ });\n/* harmony import */ var C_Users_taissa_Desktop_projetos_learning_js_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_taissa_Desktop_projetos_learning_js_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_taissa_Desktop_projetos_learning_js_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _scripts_blog_getAllPosts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scripts/blog/getAllPosts */ \"./scripts/blog/getAllPosts.js\");\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction Articles(param) {\n    var props = param.props;\n    var _this = this;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n        className: \"articles-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                children: \"Artigos e Publica\\xe7\\xf5es\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\taissa\\\\Desktop\\\\projetos\\\\learning-js\\\\components\\\\Articles.jsx\",\n                lineNumber: 7,\n                columnNumber: 13\n            }, this),\n            props.post.map(function(post) {\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"article\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                            href: \"/\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                    className: \"article-title hyper-text\",\n                                    children: post.metadata.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\taissa\\\\Desktop\\\\projetos\\\\learning-js\\\\components\\\\Articles.jsx\",\n                                    lineNumber: 11,\n                                    columnNumber: 21\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                    className: \"article-date\",\n                                    children: post.metadata.date\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\taissa\\\\Desktop\\\\projetos\\\\learning-js\\\\components\\\\Articles.jsx\",\n                                    lineNumber: 14,\n                                    columnNumber: 21\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\taissa\\\\Desktop\\\\projetos\\\\learning-js\\\\components\\\\Articles.jsx\",\n                            lineNumber: 10,\n                            columnNumber: 17\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: post.metadata.description\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\taissa\\\\Desktop\\\\projetos\\\\learning-js\\\\components\\\\Articles.jsx\",\n                            lineNumber: 16,\n                            columnNumber: 17\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\taissa\\\\Desktop\\\\projetos\\\\learning-js\\\\components\\\\Articles.jsx\",\n                    lineNumber: 9,\n                    columnNumber: 13\n                }, _this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\taissa\\\\Desktop\\\\projetos\\\\learning-js\\\\components\\\\Articles.jsx\",\n        lineNumber: 6,\n        columnNumber: 9\n    }, this));\n}\n_c = Articles;\nfunction getStaticProps() {\n    return _getStaticProps.apply(this, arguments);\n}\nfunction _getStaticProps() {\n    _getStaticProps = _asyncToGenerator(C_Users_taissa_Desktop_projetos_learning_js_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var posts;\n        return C_Users_taissa_Desktop_projetos_learning_js_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return (0,_scripts_blog_getAllPosts__WEBPACK_IMPORTED_MODULE_3__.getAllPosts)();\n                case 2:\n                    posts = _ctx.sent;\n                    return _ctx.abrupt(\"return\", {\n                        props: {\n                            posts: posts\n                        }\n                    });\n                case 4:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return _getStaticProps.apply(this, arguments);\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Articles);\nvar _c;\n$RefreshReg$(_c, \"Articles\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FydGljbGVzLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ2dDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FFaERFLFFBQVEsQ0FBQyxLQUFTLEVBQUUsQ0FBQztRQUFWQyxLQUFLLEdBQVAsS0FBUyxDQUFQQSxLQUFLOztJQUNyQixNQUFNLDZFQUNEQyxDQUFPO1FBQUNDLFNBQVMsRUFBQyxDQUFvQjs7d0ZBQ2xDQyxDQUFFOzBCQUFDLENBQXFCOzs7Ozs7WUFDeEJILEtBQUssQ0FBQ0ksSUFBSSxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFQRCxJQUFJLEVBQUssQ0FBQzs0RkFDMUJFLENBQU87O29HQUNIQyxDQUFDOzRCQUFDQyxJQUFJLEVBQUMsQ0FBRzs7NEdBQ05MLENBQUU7b0NBQUNELFNBQVMsRUFBQyxDQUEwQjs4Q0FDbkNFLElBQUksQ0FBQ0ssUUFBUSxDQUFDQyxLQUFLOzs7Ozs7NEdBRXZCQyxDQUFDO29DQUFDVCxTQUFTLEVBQUMsQ0FBYzs4Q0FBRUUsSUFBSSxDQUFDSyxRQUFRLENBQUNHLElBQUk7Ozs7Ozs7Ozs7OztvR0FFbERELENBQUM7c0NBQ0dQLElBQUksQ0FBQ0ssUUFBUSxDQUFDSSxXQUFXOzs7Ozs7Ozs7Ozs7WUFHbEMsQ0FBQzs7Ozs7OztBQUdiLENBQUM7S0FuQlFkLFFBQVE7QUFxQlYsU0FBZWUsY0FBYztXQUFkQSxlQUFjOztTQUFkQSxlQUFjO0lBQWRBLGVBQWMsNEtBQTdCLFFBQVEsV0FBd0IsQ0FBQztZQUM5QkMsS0FBSzs7Ozs7MkJBQVNqQixzRUFBVzs7b0JBQXpCaUIsS0FBSztpREFFSixDQUFDO3dCQUNKZixLQUFLLEVBQUUsQ0FBQzs0QkFDSmUsS0FBSyxFQUFMQSxLQUFLO3dCQUNULENBQUM7b0JBQ0wsQ0FBQzs7Ozs7O0lBQ0gsQ0FBQztXQVJtQkQsZUFBYzs7QUFVcEMsK0RBQWVmLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcnRpY2xlcy5qc3g/YWIzMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGdldEFsbFBvc3RzIH0gZnJvbSBcIi4uL3NjcmlwdHMvYmxvZy9nZXRBbGxQb3N0c1wiO1xyXG5cclxuZnVuY3Rpb24gQXJ0aWNsZXMoeyBwcm9wcyB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImFydGljbGVzLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8aDI+QXJ0aWdvcyBlIFB1YmxpY2HDp8O1ZXM8L2gyPlxyXG4gICAgICAgICAgICB7cHJvcHMucG9zdC5tYXAoKHBvc3QpID0+IHtcclxuICAgICAgICAgICAgPGFydGljbGU+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJhcnRpY2xlLXRpdGxlIGh5cGVyLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Bvc3QubWV0YWRhdGEudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhcnRpY2xlLWRhdGVcIj57cG9zdC5tZXRhZGF0YS5kYXRlfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwb3N0Lm1ldGFkYXRhLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gICAgY29uc3QgcG9zdHMgPSBhd2FpdCBnZXRBbGxQb3N0cygpXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBwb3N0c1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlcyJdLCJuYW1lcyI6WyJyZWFjdCIsImdldEFsbFBvc3RzIiwiQXJ0aWNsZXMiLCJwcm9wcyIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJoMiIsInBvc3QiLCJtYXAiLCJhcnRpY2xlIiwiYSIsImhyZWYiLCJtZXRhZGF0YSIsInRpdGxlIiwicCIsImRhdGUiLCJkZXNjcmlwdGlvbiIsImdldFN0YXRpY1Byb3BzIiwicG9zdHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Articles.jsx\n");

/***/ })

});