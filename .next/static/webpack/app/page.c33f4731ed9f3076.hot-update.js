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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Navbar\": function() { return /* binding */ Navbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/bs */ \"(app-client)/./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var _AppContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppContainer */ \"(app-client)/./components/AppContainer.tsx\");\n/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ThemeProvider */ \"(app-client)/./components/ThemeProvider.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Navbar = ()=>{\n    _s();\n    const [toggle, setToggle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [mobile, setMobile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [navbarblur, setNavbarBlur] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { theme , toggleTheme  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__.ThemeContext);\n    const { setIsBlur  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_AppContainer__WEBPACK_IMPORTED_MODULE_2__.AppContext);\n    const handleTheme = (pickedTheme)=>{\n        setToggle((prev)=>!prev);\n        toggleTheme(pickedTheme);\n    };\n    const handleMobileMenu = ()=>{\n        setIsBlur((prev)=>!prev);\n        setMobile((prev)=>!prev);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (theme === \"dark-theme\") {\n            setToggle(false);\n        } else {\n            setToggle(true);\n        }\n    }, [\n        theme\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleBlurOnScroll = ()=>{\n            setNavbarBlur(window.scrollY >= 30);\n        };\n        window.addEventListener(\"scroll\", handleBlurOnScroll);\n        handleBlurOnScroll();\n        return ()=>window.removeEventListener(\"scroll\", handleBlurOnScroll);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: \"fixed top-0 left-0 flex items-center justify-between w-full px-10 py-4 bg-transparent text-white z-40 \".concat(navbarblur ? \"backdrop-blur-md\" : \"\"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"#hero\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"logo-gradient font-bold text-[1.5rem] font-poppins\",\n                            children: \"DANDEV\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USUARIO\\\\Desktop\\\\Proyectos\\\\portfolio-nextjs\\\\components\\\\Navbar.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USUARIO\\\\Desktop\\\\Proyectos\\\\portfolio-nextjs\\\\components\\\\Navbar.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\USUARIO\\\\Desktop\\\\Proyectos\\\\portfolio-nextjs\\\\components\\\\Navbar.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex cursor-pointer space-y-1 mobile-icon-rotation z-50 relative md:hidden\",\n                    onClick: ()=>handleMobileMenu(),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"bg-theme-switch w-7 h-0.5 block transition-all \".concat(mobile ? \"rotate-45\" : \"rotate-0\")\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USUARIO\\\\Desktop\\\\Proyectos\\\\portfolio-nextjs\\\\components\\\\Navbar.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"bg-theme-switch w-5 h-0.5 block transition-all \".concat(mobile ? \"-rotate-45 w-7 absolute -top-[3.6px]\" : \"rotate-0\")\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USUARIO\\\\Desktop\\\\Proyectos\\\\portfolio-nextjs\\\\components\\\\Navbar.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"bg-theme-switch w-3 h-0.5 block transition-all \".concat(mobile ? \"opacity-0\" : \"opacity-1\")\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USUARIO\\\\Desktop\\\\Proyectos\\\\portfolio-nextjs\\\\components\\\\Navbar.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\USUARIO\\\\Desktop\\\\Proyectos\\\\portfolio-nextjs\\\\components\\\\Navbar.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat(mobile ? \"right-0\" : \"right-[-1000px]\", \" absolute top-0 flex flex-col bg-mobile w-[300px] \\n          shadow-2xl h-screen py-5 items-center justify-center gap-10 transition-all md:static md:flex-row md:h-fit md:w-fit md:bg-inherit md:shadow-none\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"flex flex-col md:flex-row items-center gap-10 text-primary text-sm font-semibold\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    onClick: ()=>handleMobileMenu(),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"#about\",\n                                        children: \"About\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USUARIO\\\\Desktop\\\\Proyectos\\\\portfolio-nextjs\\\\components\\\\Navbar.tsx\",\n                                        lineNumber: 87,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\USUARIO\\\\Desktop\\\\Proyectos\\\\portfolio-nextjs\\\\components\\\\Navbar.tsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    onClick: ()=>handleMobileMenu(),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"#work\",\n                                        children: \"Work\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USUARIO\\\\Desktop\\\\Proyectos\\\\portfolio-nextjs\\\\components\\\\Navbar.tsx\",\n                                        lineNumber: 90,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\USUARIO\\\\Desktop\\\\Proyectos\\\\portfolio-nextjs\\\\components\\\\Navbar.tsx\",\n                                    lineNumber: 89,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    onClick: ()=>handleMobileMenu(),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"#contact\",\n                                        children: \"Contact\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USUARIO\\\\Desktop\\\\Proyectos\\\\portfolio-nextjs\\\\components\\\\Navbar.tsx\",\n                                        lineNumber: 93,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\USUARIO\\\\Desktop\\\\Proyectos\\\\portfolio-nextjs\\\\components\\\\Navbar.tsx\",\n                                    lineNumber: 92,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    onClick: ()=>handleMobileMenu(),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"/cv.pdf\",\n                                        target: \"_blank\",\n                                        children: \"Resume\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USUARIO\\\\Desktop\\\\Proyectos\\\\portfolio-nextjs\\\\components\\\\Navbar.tsx\",\n                                        lineNumber: 96,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\USUARIO\\\\Desktop\\\\Proyectos\\\\portfolio-nextjs\\\\components\\\\Navbar.tsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\USUARIO\\\\Desktop\\\\Proyectos\\\\portfolio-nextjs\\\\components\\\\Navbar.tsx\",\n                            lineNumber: 85,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"border-primary border-2 flex items-center justify-between gap-3 cursor-pointer relative p-1 rounded-[18px] w-[55px]\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_4__.BsFillMoonFill, {\n                                    className: \"text-moon\",\n                                    onClick: ()=>handleTheme(\"dark-theme\")\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\USUARIO\\\\Desktop\\\\Proyectos\\\\portfolio-nextjs\\\\components\\\\Navbar.tsx\",\n                                    lineNumber: 102,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_4__.BsFillSunFill, {\n                                    className: \"text-yellow-400\",\n                                    onClick: ()=>handleTheme(\"light-theme\")\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\USUARIO\\\\Desktop\\\\Proyectos\\\\portfolio-nextjs\\\\components\\\\Navbar.tsx\",\n                                    lineNumber: 106,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"bg-theme-switch w-5 h-5 rounded-full absolute left-[3px] transition-all \".concat(toggle ? \"translate-x-[26px]\" : \"\")\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\USUARIO\\\\Desktop\\\\Proyectos\\\\portfolio-nextjs\\\\components\\\\Navbar.tsx\",\n                                    lineNumber: 110,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\USUARIO\\\\Desktop\\\\Proyectos\\\\portfolio-nextjs\\\\components\\\\Navbar.tsx\",\n                            lineNumber: 101,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\USUARIO\\\\Desktop\\\\Proyectos\\\\portfolio-nextjs\\\\components\\\\Navbar.tsx\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\USUARIO\\\\Desktop\\\\Proyectos\\\\portfolio-nextjs\\\\components\\\\Navbar.tsx\",\n            lineNumber: 45,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\USUARIO\\\\Desktop\\\\Proyectos\\\\portfolio-nextjs\\\\components\\\\Navbar.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"YrI15+T9RIkuDyDFAT/KgQUmpHs=\");\n_c = Navbar;\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TWYsWUFBWTs7Ozs7OzhDQUU3Qiw4REFBQ1c7b0NBQ0NELFdBQVcsMkVBRVYsT0FEQ25CLFNBQVMsdUJBQXVCLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUWxELEVBQUU7R0FqSFdEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2YmFyLnRzeD8xYjgzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0LCBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCc0ZpbGxNb29uRmlsbCwgQnNGaWxsU3VuRmlsbCB9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiO1xyXG5pbXBvcnQgeyBBcHBDb250ZXh0IH0gZnJvbSBcIi4vQXBwQ29udGFpbmVyXCI7XHJcbmltcG9ydCB7IFRoZW1lQ29udGV4dCB9IGZyb20gXCIuL1RoZW1lUHJvdmlkZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBOYXZiYXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3RvZ2dsZSwgc2V0VG9nZ2xlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICBjb25zdCBbbW9iaWxlLCBzZXRNb2JpbGVdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIGNvbnN0IFtuYXZiYXJibHVyLCBzZXROYXZiYXJCbHVyXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgY29uc3QgeyB0aGVtZSwgdG9nZ2xlVGhlbWUgfSA9IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcclxuICBjb25zdCB7IHNldElzQmx1ciB9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVGhlbWUgPSAocGlja2VkVGhlbWU6IHN0cmluZykgPT4ge1xyXG4gICAgc2V0VG9nZ2xlKChwcmV2KSA9PiAhcHJldik7XHJcbiAgICB0b2dnbGVUaGVtZShwaWNrZWRUaGVtZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTW9iaWxlTWVudSA9ICgpID0+IHtcclxuICAgIHNldElzQmx1cigocHJldikgPT4gIXByZXYpO1xyXG4gICAgc2V0TW9iaWxlKChwcmV2KSA9PiAhcHJldik7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh0aGVtZSA9PT0gXCJkYXJrLXRoZW1lXCIpIHtcclxuICAgICAgc2V0VG9nZ2xlKGZhbHNlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFRvZ2dsZSh0cnVlKTtcclxuICAgIH1cclxuICB9LCBbdGhlbWVdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZUJsdXJPblNjcm9sbCA9ICgpID0+IHtcclxuICAgICAgc2V0TmF2YmFyQmx1cih3aW5kb3cuc2Nyb2xsWSA+PSAzMCk7XHJcbiAgICB9O1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlQmx1ck9uU2Nyb2xsKTtcclxuICAgIGhhbmRsZUJsdXJPblNjcm9sbCgpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVCbHVyT25TY3JvbGwpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPG5hdlxyXG4gICAgICAgIGNsYXNzTmFtZT17YGZpeGVkIHRvcC0wIGxlZnQtMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gdy1mdWxsIHB4LTEwIHB5LTQgYmctdHJhbnNwYXJlbnQgdGV4dC13aGl0ZSB6LTQwICR7XHJcbiAgICAgICAgICBuYXZiYXJibHVyID8gXCJiYWNrZHJvcC1ibHVyLW1kXCIgOiBcIlwiXHJcbiAgICAgICAgfWB9XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGEgaHJlZj1cIiNoZXJvXCI+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJsb2dvLWdyYWRpZW50IGZvbnQtYm9sZCB0ZXh0LVsxLjVyZW1dIGZvbnQtcG9wcGluc1wiPlxyXG4gICAgICAgICAgICAgIERBTkRFVlxyXG4gICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4IGN1cnNvci1wb2ludGVyIHNwYWNlLXktMSBtb2JpbGUtaWNvbi1yb3RhdGlvbiB6LTUwIHJlbGF0aXZlIG1kOmhpZGRlbmB9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVNb2JpbGVNZW51KCl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgYmctdGhlbWUtc3dpdGNoIHctNyBoLTAuNSBibG9jayB0cmFuc2l0aW9uLWFsbCAke1xyXG4gICAgICAgICAgICAgIG1vYmlsZSA/IFwicm90YXRlLTQ1XCIgOiBcInJvdGF0ZS0wXCJcclxuICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICA+PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgYmctdGhlbWUtc3dpdGNoIHctNSBoLTAuNSBibG9jayB0cmFuc2l0aW9uLWFsbCAke1xyXG4gICAgICAgICAgICAgIG1vYmlsZSA/IFwiLXJvdGF0ZS00NSB3LTcgYWJzb2x1dGUgLXRvcC1bMy42cHhdXCIgOiBcInJvdGF0ZS0wXCJcclxuICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICA+PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgYmctdGhlbWUtc3dpdGNoIHctMyBoLTAuNSBibG9jayB0cmFuc2l0aW9uLWFsbCAke1xyXG4gICAgICAgICAgICAgIG1vYmlsZSA/IFwib3BhY2l0eS0wXCIgOiBcIm9wYWNpdHktMVwiXHJcbiAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgPjwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtcclxuICAgICAgICAgICAgbW9iaWxlID8gXCJyaWdodC0wXCIgOiBcInJpZ2h0LVstMTAwMHB4XVwiXHJcbiAgICAgICAgICB9IGFic29sdXRlIHRvcC0wIGZsZXggZmxleC1jb2wgYmctbW9iaWxlIHctWzMwMHB4XSBcclxuICAgICAgICAgIHNoYWRvdy0yeGwgaC1zY3JlZW4gcHktNSBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTEwIHRyYW5zaXRpb24tYWxsIG1kOnN0YXRpYyBtZDpmbGV4LXJvdyBtZDpoLWZpdCBtZDp3LWZpdCBtZDpiZy1pbmhlcml0IG1kOnNoYWRvdy1ub25lYH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBpdGVtcy1jZW50ZXIgZ2FwLTEwIHRleHQtcHJpbWFyeSB0ZXh0LXNtIGZvbnQtc2VtaWJvbGRcIj5cclxuICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IGhhbmRsZU1vYmlsZU1lbnUoKX0+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNhYm91dFwiPkFib3V0PC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4gaGFuZGxlTW9iaWxlTWVudSgpfT5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiI3dvcmtcIj5Xb3JrPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4gaGFuZGxlTW9iaWxlTWVudSgpfT5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiI2NvbnRhY3RcIj5Db250YWN0PC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4gaGFuZGxlTW9iaWxlTWVudSgpfT5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiL2N2LnBkZlwiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgUmVzdW1lXHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLXByaW1hcnkgYm9yZGVyLTIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC0zIGN1cnNvci1wb2ludGVyIHJlbGF0aXZlIHAtMSByb3VuZGVkLVsxOHB4XSB3LVs1NXB4XVwiPlxyXG4gICAgICAgICAgICA8QnNGaWxsTW9vbkZpbGxcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LW1vb25cIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVRoZW1lKFwiZGFyay10aGVtZVwiKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEJzRmlsbFN1bkZpbGxcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXllbGxvdy00MDBcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVRoZW1lKFwibGlnaHQtdGhlbWVcIil9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BiZy10aGVtZS1zd2l0Y2ggdy01IGgtNSByb3VuZGVkLWZ1bGwgYWJzb2x1dGUgbGVmdC1bM3B4XSB0cmFuc2l0aW9uLWFsbCAke1xyXG4gICAgICAgICAgICAgICAgdG9nZ2xlID8gXCJ0cmFuc2xhdGUteC1bMjZweF1cIiA6IFwiXCJcclxuICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L25hdj5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ29udGV4dCIsIkZyYWdtZW50IiwiQnNGaWxsTW9vbkZpbGwiLCJCc0ZpbGxTdW5GaWxsIiwiQXBwQ29udGV4dCIsIlRoZW1lQ29udGV4dCIsIk5hdmJhciIsInRvZ2dsZSIsInNldFRvZ2dsZSIsIm1vYmlsZSIsInNldE1vYmlsZSIsIm5hdmJhcmJsdXIiLCJzZXROYXZiYXJCbHVyIiwidGhlbWUiLCJ0b2dnbGVUaGVtZSIsInNldElzQmx1ciIsImhhbmRsZVRoZW1lIiwicGlja2VkVGhlbWUiLCJwcmV2IiwiaGFuZGxlTW9iaWxlTWVudSIsImhhbmRsZUJsdXJPblNjcm9sbCIsIndpbmRvdyIsInNjcm9sbFkiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm5hdiIsImNsYXNzTmFtZSIsImRpdiIsImEiLCJocmVmIiwiaDMiLCJvbkNsaWNrIiwic3BhbiIsInVsIiwibGkiLCJ0YXJnZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./components/Navbar.tsx\n"));

/***/ })

});