"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./components/Navbar.tsx":
/*!*******************************!*\
  !*** ./components/Navbar.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Navbar\": function() { return /* binding */ Navbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/bs */ \"(app-client)/./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ThemeProvider */ \"(app-client)/./components/ThemeProvider.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Navbar = ()=>{\n    _s();\n    const [toggle, setToggle] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [mobile, setMobile] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const { theme , toggleTheme  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__.ThemeContext);\n    const handleTheme = (pickedTheme)=>{\n        setToggle((prev)=>!prev);\n        toggleTheme(pickedTheme);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (theme === \"dark-theme\") {\n            setToggle(false);\n        } else {\n            setToggle(true);\n        }\n    }, [\n        theme\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"fixed top-0 left-0 flex items-center justify-between w-full px-10 py-5 bg-transparent text-white z-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"logo-gradient font-extrabold text-[1.5rem] font-monserrat\",\n                            children: \"DANDEV\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USUARIO\\\\Desktop\\\\Proyectos\\\\portfolio-nextjs\\\\components\\\\Navbar.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USUARIO\\\\Desktop\\\\Proyectos\\\\portfolio-nextjs\\\\components\\\\Navbar.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"block cursor-pointer space-y-2 mobile-icon-rotation z-20 md:hidden\",\n                        onClick: ()=>setMobile((prev)=>!prev),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"bg-theme-switch w-7 h-0.5 block\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\USUARIO\\\\Desktop\\\\Proyectos\\\\portfolio-nextjs\\\\components\\\\Navbar.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"bg-theme-switch w-5 h-0.5 block\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\USUARIO\\\\Desktop\\\\Proyectos\\\\portfolio-nextjs\\\\components\\\\Navbar.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"bg-theme-switch w-3 h-0.5 block\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\USUARIO\\\\Desktop\\\\Proyectos\\\\portfolio-nextjs\\\\components\\\\Navbar.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\USUARIO\\\\Desktop\\\\Proyectos\\\\portfolio-nextjs\\\\components\\\\Navbar.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat(mobile ? \"translate-x-[1000%]\" : \"translate-x-0\", \" absolute top-0 right-0 flex flex-col bg-slate-800 w-[300px] \\n          shadow-sm h-screen py-5 items-center justify-center gap-10 transition-all md:hidden\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"flex flex-col items-center gap-10 text-primary text-sm font-semibold\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                            href: \"/\",\n                                            children: \"About\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\USUARIO\\\\Desktop\\\\Proyectos\\\\portfolio-nextjs\\\\components\\\\Navbar.tsx\",\n                                            lineNumber: 46,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USUARIO\\\\Desktop\\\\Proyectos\\\\portfolio-nextjs\\\\components\\\\Navbar.tsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                            href: \"/\",\n                                            children: \"Work\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\USUARIO\\\\Desktop\\\\Proyectos\\\\portfolio-nextjs\\\\components\\\\Navbar.tsx\",\n                                            lineNumber: 47,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USUARIO\\\\Desktop\\\\Proyectos\\\\portfolio-nextjs\\\\components\\\\Navbar.tsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                            href: \"/\",\n                                            children: \"Contact\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\USUARIO\\\\Desktop\\\\Proyectos\\\\portfolio-nextjs\\\\components\\\\Navbar.tsx\",\n                                            lineNumber: 48,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USUARIO\\\\Desktop\\\\Proyectos\\\\portfolio-nextjs\\\\components\\\\Navbar.tsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\USUARIO\\\\Desktop\\\\Proyectos\\\\portfolio-nextjs\\\\components\\\\Navbar.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"border-primary border-2 flex items-center justify-between gap-3 cursor-pointer relative p-1 rounded-[18px] w-[55px]\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_4__.BsFillMoonFill, {\n                                        className: \"text-moon\",\n                                        onClick: ()=>handleTheme(\"dark-theme\")\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USUARIO\\\\Desktop\\\\Proyectos\\\\portfolio-nextjs\\\\components\\\\Navbar.tsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_4__.BsFillSunFill, {\n                                        className: \"text-yellow-400\",\n                                        onClick: ()=>handleTheme(\"light-theme\")\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USUARIO\\\\Desktop\\\\Proyectos\\\\portfolio-nextjs\\\\components\\\\Navbar.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"bg-theme-switch w-5 h-5 rounded-full absolute left-[3px] transition-all \".concat(toggle ? \"translate-x-[26px]\" : \"\")\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USUARIO\\\\Desktop\\\\Proyectos\\\\portfolio-nextjs\\\\components\\\\Navbar.tsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\USUARIO\\\\Desktop\\\\Proyectos\\\\portfolio-nextjs\\\\components\\\\Navbar.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\USUARIO\\\\Desktop\\\\Proyectos\\\\portfolio-nextjs\\\\components\\\\Navbar.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\USUARIO\\\\Desktop\\\\Proyectos\\\\portfolio-nextjs\\\\components\\\\Navbar.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"blur-sm absolute top-0 right-0 left-0 bottom-0 bg-slate-300 z-20\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USUARIO\\\\Desktop\\\\Proyectos\\\\portfolio-nextjs\\\\components\\\\Navbar.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\USUARIO\\\\Desktop\\\\Proyectos\\\\portfolio-nextjs\\\\components\\\\Navbar.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"B/If1rI4AlafZOh/0t/4tf2AG7Q=\");\n_c = Navbar;\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9OYXZiYXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDNkI7QUFDcUM7QUFDSDtBQUNoQjtBQUd4QyxNQUFNUSxTQUFTLElBQU07O0lBQzFCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHVCwrQ0FBUUEsQ0FBVSxLQUFLO0lBQ25ELE1BQU0sQ0FBQ1UsUUFBUUMsVUFBVSxHQUFHWCwrQ0FBUUEsQ0FBVSxLQUFLO0lBRW5ELE1BQU0sRUFBQ1ksTUFBSyxFQUFFQyxZQUFXLEVBQUMsR0FBR1gsaURBQVVBLENBQUNJLHdEQUFZQTtJQUVwRCxNQUFNUSxjQUFjLENBQUNDLGNBQXVCO1FBQzFDTixVQUFVTyxDQUFBQSxPQUFRLENBQUNBO1FBQ25CSCxZQUFZRTtJQUNkO0lBRUFkLGdEQUFTQSxDQUFDLElBQU07UUFDZCxJQUFHVyxVQUFVLGNBQWE7WUFDeEJILFVBQVUsS0FBSztRQUNqQixPQUFLO1lBQ0hBLFVBQVUsSUFBSTtRQUNoQixDQUFDO0lBQ0gsR0FBRTtRQUFDRztLQUFNO0lBRVQscUJBQ0UsOERBQUNULDJDQUFRQTs7MEJBQ1AsOERBQUNjO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7a0NBQ0csNEVBQUNDOzRCQUFHRixXQUFVO3NDQUE0RDs7Ozs7Ozs7Ozs7a0NBRzlFLDhEQUFDQzt3QkFBSUQsV0FBWTt3QkFBcUVHLFNBQVMsSUFBTVYsVUFBVUssQ0FBQUEsT0FBUSxDQUFDQTs7MENBQ3RILDhEQUFDTTtnQ0FBS0osV0FBVTs7Ozs7OzBDQUNoQiw4REFBQ0k7Z0NBQUtKLFdBQVU7Ozs7OzswQ0FDaEIsOERBQUNJO2dDQUFLSixXQUFVOzs7Ozs7Ozs7Ozs7a0NBR2xCLDhEQUFDQzt3QkFDQ0QsV0FBVyxHQUFvRCxPQUFqRFIsU0FBUyx3QkFBd0IsZUFBZSxFQUFDOzswQ0FJL0QsOERBQUNhO2dDQUFHTCxXQUFVOztrREFDWiw4REFBQ007a0RBQUcsNEVBQUN6QixrREFBSUE7NENBQUMwQixNQUFLO3NEQUFJOzs7Ozs7Ozs7OztrREFDbkIsOERBQUNEO2tEQUFHLDRFQUFDekIsa0RBQUlBOzRDQUFDMEIsTUFBSztzREFBSTs7Ozs7Ozs7Ozs7a0RBQ25CLDhEQUFDRDtrREFBRyw0RUFBQ3pCLGtEQUFJQTs0Q0FBQzBCLE1BQUs7c0RBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUdyQiw4REFBQ047Z0NBQUlELFdBQVU7O2tEQUNiLDhEQUFDZCwwREFBY0E7d0NBQUNjLFdBQVU7d0NBQVlHLFNBQVMsSUFBTVAsWUFBWTs7Ozs7O2tEQUNqRSw4REFBQ1QseURBQWFBO3dDQUFDYSxXQUFVO3dDQUFrQkcsU0FBUyxJQUFNUCxZQUFZOzs7Ozs7a0RBQ3RFLDhEQUFDSzt3Q0FBSUQsV0FBVywyRUFBOEcsT0FBbkNWLFNBQVMsdUJBQXVCLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFJbkksOERBQUNXO2dCQUFJRCxXQUFVOzs7Ozs7Ozs7Ozs7QUFHckIsRUFBQztHQXJEWVg7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIudHN4PzFiODMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCc0ZpbGxNb29uRmlsbCwgQnNGaWxsU3VuRmlsbCB9IGZyb20gJ3JlYWN0LWljb25zL2JzJztcclxuaW1wb3J0IHsgVGhlbWVDb250ZXh0IH0gZnJvbSAnLi9UaGVtZVByb3ZpZGVyJztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgTmF2YmFyID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt0b2dnbGUsIHNldFRvZ2dsZV0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgY29uc3QgW21vYmlsZSwgc2V0TW9iaWxlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgY29uc3Qge3RoZW1lLCB0b2dnbGVUaGVtZX0gPSB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVRoZW1lID0gKHBpY2tlZFRoZW1lOnN0cmluZykgPT4ge1xyXG4gICAgc2V0VG9nZ2xlKHByZXYgPT4gIXByZXYpXHJcbiAgICB0b2dnbGVUaGVtZShwaWNrZWRUaGVtZSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmKHRoZW1lID09PSAnZGFyay10aGVtZScpe1xyXG4gICAgICBzZXRUb2dnbGUoZmFsc2UpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIHNldFRvZ2dsZSh0cnVlKTtcclxuICAgIH1cclxuICB9LFt0aGVtZV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8bmF2IGNsYXNzTmFtZT0nZml4ZWQgdG9wLTAgbGVmdC0wIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB3LWZ1bGwgcHgtMTAgcHktNSBiZy10cmFuc3BhcmVudCB0ZXh0LXdoaXRlIHotMTAnPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J2xvZ28tZ3JhZGllbnQgZm9udC1leHRyYWJvbGQgdGV4dC1bMS41cmVtXSBmb250LW1vbnNlcnJhdCc+REFOREVWPC9oMz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYmxvY2sgY3Vyc29yLXBvaW50ZXIgc3BhY2UteS0yIG1vYmlsZS1pY29uLXJvdGF0aW9uIHotMjAgbWQ6aGlkZGVuYH0gb25DbGljaz17KCkgPT4gc2V0TW9iaWxlKHByZXYgPT4gIXByZXYpfT5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nYmctdGhlbWUtc3dpdGNoIHctNyBoLTAuNSBibG9jayc+PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdiZy10aGVtZS1zd2l0Y2ggdy01IGgtMC41IGJsb2NrJz48L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2JnLXRoZW1lLXN3aXRjaCB3LTMgaC0wLjUgYmxvY2snPjwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj4gIFxyXG5cclxuICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHttb2JpbGUgPyAndHJhbnNsYXRlLXgtWzEwMDAlXScgOiAndHJhbnNsYXRlLXgtMCd9IGFic29sdXRlIHRvcC0wIHJpZ2h0LTAgZmxleCBmbGV4LWNvbCBiZy1zbGF0ZS04MDAgdy1bMzAwcHhdIFxyXG4gICAgICAgICAgc2hhZG93LXNtIGgtc2NyZWVuIHB5LTUgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0xMCB0cmFuc2l0aW9uLWFsbCBtZDpoaWRkZW5gfVxyXG4gICAgICAgID5cclxuXHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBnYXAtMTAgdGV4dC1wcmltYXJ5IHRleHQtc20gZm9udC1zZW1pYm9sZCc+XHJcbiAgICAgICAgICAgIDxsaT48TGluayBocmVmPScvJz5BYm91dDwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PExpbmsgaHJlZj0nLyc+V29yazwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PExpbmsgaHJlZj0nLyc+Q29udGFjdDwvTGluaz48L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm9yZGVyLXByaW1hcnkgYm9yZGVyLTIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC0zIGN1cnNvci1wb2ludGVyIHJlbGF0aXZlIHAtMSByb3VuZGVkLVsxOHB4XSB3LVs1NXB4XSc+XHJcbiAgICAgICAgICAgIDxCc0ZpbGxNb29uRmlsbCBjbGFzc05hbWU9J3RleHQtbW9vbicgb25DbGljaz17KCkgPT4gaGFuZGxlVGhlbWUoJ2RhcmstdGhlbWUnKX0vPlxyXG4gICAgICAgICAgICA8QnNGaWxsU3VuRmlsbCBjbGFzc05hbWU9J3RleHQteWVsbG93LTQwMCcgb25DbGljaz17KCkgPT4gaGFuZGxlVGhlbWUoJ2xpZ2h0LXRoZW1lJyl9Lz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BiZy10aGVtZS1zd2l0Y2ggdy01IGgtNSByb3VuZGVkLWZ1bGwgYWJzb2x1dGUgbGVmdC1bM3B4XSB0cmFuc2l0aW9uLWFsbCAke3RvZ2dsZSA/ICd0cmFuc2xhdGUteC1bMjZweF0nIDogJyd9YH0vPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYmx1ci1zbSBhYnNvbHV0ZSB0b3AtMCByaWdodC0wIGxlZnQtMCBib3R0b20tMCBiZy1zbGF0ZS0zMDAgei0yMCc+PC9kaXY+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsiTGluayIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ29udGV4dCIsIkZyYWdtZW50IiwiQnNGaWxsTW9vbkZpbGwiLCJCc0ZpbGxTdW5GaWxsIiwiVGhlbWVDb250ZXh0IiwiTmF2YmFyIiwidG9nZ2xlIiwic2V0VG9nZ2xlIiwibW9iaWxlIiwic2V0TW9iaWxlIiwidGhlbWUiLCJ0b2dnbGVUaGVtZSIsImhhbmRsZVRoZW1lIiwicGlja2VkVGhlbWUiLCJwcmV2IiwibmF2IiwiY2xhc3NOYW1lIiwiZGl2IiwiaDMiLCJvbkNsaWNrIiwic3BhbiIsInVsIiwibGkiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./components/Navbar.tsx\n"));

/***/ })

});