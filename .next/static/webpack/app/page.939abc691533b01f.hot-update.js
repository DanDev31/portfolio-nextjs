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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Navbar\": function() { return /* binding */ Navbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/bs */ \"(app-client)/./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var _AppContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AppContainer */ \"(app-client)/./components/AppContainer.tsx\");\n/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ThemeProvider */ \"(app-client)/./components/ThemeProvider.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Navbar = ()=>{\n    _s();\n    const [toggle, setToggle] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [mobile, setMobile] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const { theme , toggleTheme  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__.ThemeContext);\n    const { setIsBlur  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_AppContainer__WEBPACK_IMPORTED_MODULE_3__.AppContext);\n    const handleTheme = (pickedTheme)=>{\n        setToggle((prev)=>!prev);\n        toggleTheme(pickedTheme);\n    };\n    const handleMobileMenu = ()=>{\n        setIsBlur((prev)=>!prev);\n        setMobile((prev)=>!prev);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (theme === \"dark-theme\") {\n            setToggle(false);\n        } else {\n            setToggle(true);\n        }\n    }, [\n        theme\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: \"fixed top-0 left-0 flex items-center justify-between w-full px-10 py-5 bg-transparent text-white z-40\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"logo-gradient font-extrabold text-[1.5rem] font-monserrat\",\n                        children: \"DANDEV\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USUARIO\\\\Desktop\\\\Proyectos\\\\portfolio-nextjs\\\\components\\\\Navbar.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\USUARIO\\\\Desktop\\\\Proyectos\\\\portfolio-nextjs\\\\components\\\\Navbar.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"block cursor-pointer space-y-2 mobile-icon-rotation z-50 md:hidden\",\n                    onClick: ()=>handleMobileMenu(),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"bg-theme-switch w-7 h-0.5 block\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USUARIO\\\\Desktop\\\\Proyectos\\\\portfolio-nextjs\\\\components\\\\Navbar.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"bg-theme-switch w-5 h-0.5 block\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USUARIO\\\\Desktop\\\\Proyectos\\\\portfolio-nextjs\\\\components\\\\Navbar.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"bg-theme-switch w-3 h-0.5 block\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USUARIO\\\\Desktop\\\\Proyectos\\\\portfolio-nextjs\\\\components\\\\Navbar.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\USUARIO\\\\Desktop\\\\Proyectos\\\\portfolio-nextjs\\\\components\\\\Navbar.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat(mobile ? \"translate-x-[100%]\" : \"translate-x-[-10000%]\", \" absolute top-0 flex flex-col bg-slate-800 w-[300px] \\n          shadow-sm h-screen py-5 items-center justify-center gap-10 transition-all md:hidden\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"flex flex-col items-center gap-10 text-primary text-sm font-semibold\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: \"/\",\n                                        children: \"About\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USUARIO\\\\Desktop\\\\Proyectos\\\\portfolio-nextjs\\\\components\\\\Navbar.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\USUARIO\\\\Desktop\\\\Proyectos\\\\portfolio-nextjs\\\\components\\\\Navbar.tsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: \"/\",\n                                        children: \"Work\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USUARIO\\\\Desktop\\\\Proyectos\\\\portfolio-nextjs\\\\components\\\\Navbar.tsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\USUARIO\\\\Desktop\\\\Proyectos\\\\portfolio-nextjs\\\\components\\\\Navbar.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: \"/\",\n                                        children: \"Contact\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USUARIO\\\\Desktop\\\\Proyectos\\\\portfolio-nextjs\\\\components\\\\Navbar.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\USUARIO\\\\Desktop\\\\Proyectos\\\\portfolio-nextjs\\\\components\\\\Navbar.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\USUARIO\\\\Desktop\\\\Proyectos\\\\portfolio-nextjs\\\\components\\\\Navbar.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"border-primary border-2 flex items-center justify-between gap-3 cursor-pointer relative p-1 rounded-[18px] w-[55px]\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__.BsFillMoonFill, {\n                                    className: \"text-moon\",\n                                    onClick: ()=>handleTheme(\"dark-theme\")\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\USUARIO\\\\Desktop\\\\Proyectos\\\\portfolio-nextjs\\\\components\\\\Navbar.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__.BsFillSunFill, {\n                                    className: \"text-yellow-400\",\n                                    onClick: ()=>handleTheme(\"light-theme\")\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\USUARIO\\\\Desktop\\\\Proyectos\\\\portfolio-nextjs\\\\components\\\\Navbar.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"bg-theme-switch w-5 h-5 rounded-full absolute left-[3px] transition-all \".concat(toggle ? \"translate-x-[26px]\" : \"\")\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\USUARIO\\\\Desktop\\\\Proyectos\\\\portfolio-nextjs\\\\components\\\\Navbar.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\USUARIO\\\\Desktop\\\\Proyectos\\\\portfolio-nextjs\\\\components\\\\Navbar.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\USUARIO\\\\Desktop\\\\Proyectos\\\\portfolio-nextjs\\\\components\\\\Navbar.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\USUARIO\\\\Desktop\\\\Proyectos\\\\portfolio-nextjs\\\\components\\\\Navbar.tsx\",\n            lineNumber: 36,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\USUARIO\\\\Desktop\\\\Proyectos\\\\portfolio-nextjs\\\\components\\\\Navbar.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"+wa8gfubp60EbErlxQWVuQuLSx4=\");\n_c = Navbar;\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9OYXZiYXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQzZCO0FBQ3FDO0FBQ0g7QUFDbkI7QUFDRztBQUd4QyxNQUFNUyxTQUFTLElBQU07O0lBQzFCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHViwrQ0FBUUEsQ0FBVSxLQUFLO0lBQ25ELE1BQU0sQ0FBQ1csUUFBUUMsVUFBVSxHQUFHWiwrQ0FBUUEsQ0FBVSxLQUFLO0lBRW5ELE1BQU0sRUFBQ2EsTUFBSyxFQUFFQyxZQUFXLEVBQUMsR0FBR1osaURBQVVBLENBQUNLLHdEQUFZQTtJQUNwRCxNQUFNLEVBQUVRLFVBQVMsRUFBRSxHQUFHYixpREFBVUEsQ0FBQ0kscURBQVVBO0lBRTNDLE1BQU1VLGNBQWMsQ0FBQ0MsY0FBdUI7UUFDMUNQLFVBQVVRLENBQUFBLE9BQVEsQ0FBQ0E7UUFDbkJKLFlBQVlHO0lBQ2Q7SUFFQSxNQUFNRSxtQkFBbUIsSUFBTTtRQUM3QkosVUFBVUcsQ0FBQUEsT0FBUSxDQUFDQTtRQUNuQk4sVUFBVU0sQ0FBQUEsT0FBUSxDQUFDQTtJQUNyQjtJQUVBakIsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUdZLFVBQVUsY0FBYTtZQUN4QkgsVUFBVSxLQUFLO1FBQ2pCLE9BQUs7WUFDSEEsVUFBVSxJQUFJO1FBQ2hCLENBQUM7SUFDSCxHQUFFO1FBQUNHO0tBQU07SUFFVCxxQkFDRSw4REFBQ1YsMkNBQVFBO2tCQUNQLDRFQUFDaUI7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNDOzhCQUNHLDRFQUFDQzt3QkFBR0YsV0FBVTtrQ0FBNEQ7Ozs7Ozs7Ozs7OzhCQUc5RSw4REFBQ0M7b0JBQUlELFdBQVk7b0JBQXFFRyxTQUFTLElBQU1MOztzQ0FDbkcsOERBQUNNOzRCQUFLSixXQUFVOzs7Ozs7c0NBQ2hCLDhEQUFDSTs0QkFBS0osV0FBVTs7Ozs7O3NDQUNoQiw4REFBQ0k7NEJBQUtKLFdBQVU7Ozs7Ozs7Ozs7Ozs4QkFHbEIsOERBQUNDO29CQUNDRCxXQUFXLEdBQTJELE9BQXhEVixTQUFTLHVCQUF1Qix1QkFBdUIsRUFBQzs7c0NBSXRFLDhEQUFDZTs0QkFBR0wsV0FBVTs7OENBQ1osOERBQUNNOzhDQUFHLDRFQUFDNUIsa0RBQUlBO3dDQUFDNkIsTUFBSztrREFBSTs7Ozs7Ozs7Ozs7OENBQ25CLDhEQUFDRDs4Q0FBRyw0RUFBQzVCLGtEQUFJQTt3Q0FBQzZCLE1BQUs7a0RBQUk7Ozs7Ozs7Ozs7OzhDQUNuQiw4REFBQ0Q7OENBQUcsNEVBQUM1QixrREFBSUE7d0NBQUM2QixNQUFLO2tEQUFJOzs7Ozs7Ozs7Ozs7Ozs7OztzQ0FHckIsOERBQUNOOzRCQUFJRCxXQUFVOzs4Q0FDYiw4REFBQ2pCLDBEQUFjQTtvQ0FBQ2lCLFdBQVU7b0NBQVlHLFNBQVMsSUFBTVIsWUFBWTs7Ozs7OzhDQUNqRSw4REFBQ1gseURBQWFBO29DQUFDZ0IsV0FBVTtvQ0FBa0JHLFNBQVMsSUFBTVIsWUFBWTs7Ozs7OzhDQUN0RSw4REFBQ007b0NBQUlELFdBQVcsMkVBQThHLE9BQW5DWixTQUFTLHVCQUF1QixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU96SSxFQUFDO0dBM0RZRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hdmJhci50c3g/MWI4MyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJzRmlsbE1vb25GaWxsLCBCc0ZpbGxTdW5GaWxsIH0gZnJvbSAncmVhY3QtaWNvbnMvYnMnO1xyXG5pbXBvcnQgeyBBcHBDb250ZXh0IH0gZnJvbSAnLi9BcHBDb250YWluZXInO1xyXG5pbXBvcnQgeyBUaGVtZUNvbnRleHQgfSBmcm9tICcuL1RoZW1lUHJvdmlkZXInO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBOYXZiYXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3RvZ2dsZSwgc2V0VG9nZ2xlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICBjb25zdCBbbW9iaWxlLCBzZXRNb2JpbGVdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICBjb25zdCB7dGhlbWUsIHRvZ2dsZVRoZW1lfSA9IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcclxuICBjb25zdCB7IHNldElzQmx1ciB9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVGhlbWUgPSAocGlja2VkVGhlbWU6c3RyaW5nKSA9PiB7XHJcbiAgICBzZXRUb2dnbGUocHJldiA9PiAhcHJldilcclxuICAgIHRvZ2dsZVRoZW1lKHBpY2tlZFRoZW1lKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVNb2JpbGVNZW51ID0gKCkgPT4ge1xyXG4gICAgc2V0SXNCbHVyKHByZXYgPT4gIXByZXYpO1xyXG4gICAgc2V0TW9iaWxlKHByZXYgPT4gIXByZXYpO1xyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmKHRoZW1lID09PSAnZGFyay10aGVtZScpe1xyXG4gICAgICBzZXRUb2dnbGUoZmFsc2UpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIHNldFRvZ2dsZSh0cnVlKTtcclxuICAgIH1cclxuICB9LFt0aGVtZV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8bmF2IGNsYXNzTmFtZT0nZml4ZWQgdG9wLTAgbGVmdC0wIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB3LWZ1bGwgcHgtMTAgcHktNSBiZy10cmFuc3BhcmVudCB0ZXh0LXdoaXRlIHotNDAnPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J2xvZ28tZ3JhZGllbnQgZm9udC1leHRyYWJvbGQgdGV4dC1bMS41cmVtXSBmb250LW1vbnNlcnJhdCc+REFOREVWPC9oMz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYmxvY2sgY3Vyc29yLXBvaW50ZXIgc3BhY2UteS0yIG1vYmlsZS1pY29uLXJvdGF0aW9uIHotNTAgbWQ6aGlkZGVuYH0gb25DbGljaz17KCkgPT4gaGFuZGxlTW9iaWxlTWVudSgpfT5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nYmctdGhlbWUtc3dpdGNoIHctNyBoLTAuNSBibG9jayc+PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdiZy10aGVtZS1zd2l0Y2ggdy01IGgtMC41IGJsb2NrJz48L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2JnLXRoZW1lLXN3aXRjaCB3LTMgaC0wLjUgYmxvY2snPjwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj4gIFxyXG5cclxuICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHttb2JpbGUgPyAndHJhbnNsYXRlLXgtWzEwMCVdJyA6ICd0cmFuc2xhdGUteC1bLTEwMDAwJV0nfSBhYnNvbHV0ZSB0b3AtMCBmbGV4IGZsZXgtY29sIGJnLXNsYXRlLTgwMCB3LVszMDBweF0gXHJcbiAgICAgICAgICBzaGFkb3ctc20gaC1zY3JlZW4gcHktNSBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTEwIHRyYW5zaXRpb24tYWxsIG1kOmhpZGRlbmB9XHJcbiAgICAgICAgPlxyXG5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGdhcC0xMCB0ZXh0LXByaW1hcnkgdGV4dC1zbSBmb250LXNlbWlib2xkJz5cclxuICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9Jy8nPkFib3V0PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48TGluayBocmVmPScvJz5Xb3JrPC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48TGluayBocmVmPScvJz5Db250YWN0PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdib3JkZXItcHJpbWFyeSBib3JkZXItMiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ2FwLTMgY3Vyc29yLXBvaW50ZXIgcmVsYXRpdmUgcC0xIHJvdW5kZWQtWzE4cHhdIHctWzU1cHhdJz5cclxuICAgICAgICAgICAgPEJzRmlsbE1vb25GaWxsIGNsYXNzTmFtZT0ndGV4dC1tb29uJyBvbkNsaWNrPXsoKSA9PiBoYW5kbGVUaGVtZSgnZGFyay10aGVtZScpfS8+XHJcbiAgICAgICAgICAgIDxCc0ZpbGxTdW5GaWxsIGNsYXNzTmFtZT0ndGV4dC15ZWxsb3ctNDAwJyBvbkNsaWNrPXsoKSA9PiBoYW5kbGVUaGVtZSgnbGlnaHQtdGhlbWUnKX0vPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGJnLXRoZW1lLXN3aXRjaCB3LTUgaC01IHJvdW5kZWQtZnVsbCBhYnNvbHV0ZSBsZWZ0LVszcHhdIHRyYW5zaXRpb24tYWxsICR7dG9nZ2xlID8gJ3RyYW5zbGF0ZS14LVsyNnB4XScgOiAnJ31gfS8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9uYXY+XHJcbiAgICAgIFxyXG4gICAgPC9GcmFnbWVudD5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNvbnRleHQiLCJGcmFnbWVudCIsIkJzRmlsbE1vb25GaWxsIiwiQnNGaWxsU3VuRmlsbCIsIkFwcENvbnRleHQiLCJUaGVtZUNvbnRleHQiLCJOYXZiYXIiLCJ0b2dnbGUiLCJzZXRUb2dnbGUiLCJtb2JpbGUiLCJzZXRNb2JpbGUiLCJ0aGVtZSIsInRvZ2dsZVRoZW1lIiwic2V0SXNCbHVyIiwiaGFuZGxlVGhlbWUiLCJwaWNrZWRUaGVtZSIsInByZXYiLCJoYW5kbGVNb2JpbGVNZW51IiwibmF2IiwiY2xhc3NOYW1lIiwiZGl2IiwiaDMiLCJvbkNsaWNrIiwic3BhbiIsInVsIiwibGkiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./components/Navbar.tsx\n"));

/***/ })

});