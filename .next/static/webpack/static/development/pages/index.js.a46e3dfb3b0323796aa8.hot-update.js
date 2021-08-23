webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/SectionHero/index.tsx":
/*!**********************************************!*\
  !*** ./src/components/SectionHero/index.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var components_Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Logo */ \"./src/components/Logo/index.tsx\");\n/* harmony import */ var components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Button */ \"./src/components/Button/index.tsx\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ \"./src/components/SectionHero/styles.ts\");\n/* harmony import */ var utils_ga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils/ga */ \"./src/utils/ga.ts\");\n/* harmony import */ var components_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Container */ \"./src/components/Container/index.tsx\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/vini/Documents/landing-page/src/components/SectionHero/index.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\nvar onClick = function onClick() {\n  return Object(utils_ga__WEBPACK_IMPORTED_MODULE_5__[\"gaEvent\"])({\n    action: 'click',\n    category: 'cta',\n    label: 'hero button'\n  });\n};\n\nvar SectionHero = function SectionHero(_ref) {\n  var logo = _ref.logo;\n  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__[\"Wrapper\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 3\n    }\n  }, __jsx(components_Container__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 5\n    }\n  }, __jsx(components_Logo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, logo, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__[\"Content\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__[\"TextBlock\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__[\"Title\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 11\n    }\n  }, \"React Avan\\xE7ado\"), __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__[\"Description\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 11\n    }\n  }, \"Crie aplica\\xE7\\xF5es reais com NextJS, Strapi, GraphQL e mais!\"), __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__[\"ButtonWrapper\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 11\n    }\n  }, __jsx(components_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    href: \"https://www.udemy.com/course/react-avancado/?couponCode=PROMOAGO21\",\n    onClick: onClick,\n    wide: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }\n  }, \"Comprar\"))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__[\"Image\"], {\n    src: \"/img/hero-illustration.svg\",\n    alt: \"Ilustra\\xE7\\xE3o de um desenvolvedor em frente a um computador com v\\xE1rias linhas de c\\xF3digo.\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }\n  }))));\n};\n\n_c = SectionHero;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SectionHero);\n\nvar _c;\n\n$RefreshReg$(_c, \"SectionHero\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uSGVyby9pbmRleC50c3g/YzU3NiJdLCJuYW1lcyI6WyJvbkNsaWNrIiwiZ2FFdmVudCIsImFjdGlvbiIsImNhdGVnb3J5IiwibGFiZWwiLCJTZWN0aW9uSGVybyIsImxvZ28iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFHQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLFNBQ2RDLHdEQUFPLENBQUM7QUFBRUMsVUFBTSxFQUFFLE9BQVY7QUFBbUJDLFlBQVEsRUFBRSxLQUE3QjtBQUFvQ0MsU0FBSyxFQUFFO0FBQTNDLEdBQUQsQ0FETztBQUFBLENBQWhCOztBQU9BLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsTUFBR0MsSUFBSCxRQUFHQSxJQUFIO0FBQUEsU0FDbEIsTUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx1REFBRCx5RkFBVUEsSUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREYsRUFHRSxNQUFDLCtDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDZDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsRUFFRSxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUVBRkYsRUFLRSxNQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHlEQUFEO0FBQ0UsUUFBSSxFQUFDLG9FQURQO0FBRUUsV0FBTyxFQUFFTixPQUZYO0FBR0UsUUFBSSxNQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixDQUxGLENBREYsRUFpQkUsTUFBQyw2Q0FBRDtBQUNFLE9BQUcsRUFBQyw0QkFETjtBQUVFLE9BQUcsRUFBQyxtR0FGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBakJGLENBSEYsQ0FERixDQURrQjtBQUFBLENBQXBCOztLQUFNSyxXO0FBK0JTQSwwRUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1NlY3Rpb25IZXJvL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IExvZ28gZnJvbSAnY29tcG9uZW50cy9Mb2dvJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdjb21wb25lbnRzL0J1dHRvbidcbmltcG9ydCAqIGFzIFMgZnJvbSAnLi9zdHlsZXMnXG5cbmltcG9ydCB7IGdhRXZlbnQgfSBmcm9tICd1dGlscy9nYSdcbmltcG9ydCBDb250YWluZXIgZnJvbSAnY29tcG9uZW50cy9Db250YWluZXInXG5pbXBvcnQgeyBMb2dvUHJvcHMgfSBmcm9tICd0eXBlcy9hcGknXG5cbmNvbnN0IG9uQ2xpY2sgPSAoKSA9PlxuICBnYUV2ZW50KHsgYWN0aW9uOiAnY2xpY2snLCBjYXRlZ29yeTogJ2N0YScsIGxhYmVsOiAnaGVybyBidXR0b24nIH0pXG5cbnR5cGUgUHJvcHMgPSB7XG4gIGxvZ286IExvZ29Qcm9wc1xufVxuXG5jb25zdCBTZWN0aW9uSGVybyA9ICh7IGxvZ28gfTogUHJvcHMpID0+IChcbiAgPFMuV3JhcHBlcj5cbiAgICA8Q29udGFpbmVyPlxuICAgICAgPExvZ28gey4uLmxvZ299IC8+XG5cbiAgICAgIDxTLkNvbnRlbnQ+XG4gICAgICAgIDxTLlRleHRCbG9jaz5cbiAgICAgICAgICA8Uy5UaXRsZT5SZWFjdCBBdmFuw6dhZG88L1MuVGl0bGU+XG4gICAgICAgICAgPFMuRGVzY3JpcHRpb24+XG4gICAgICAgICAgICBDcmllIGFwbGljYcOnw7VlcyByZWFpcyBjb20gTmV4dEpTLCBTdHJhcGksIEdyYXBoUUwgZSBtYWlzIVxuICAgICAgICAgIDwvUy5EZXNjcmlwdGlvbj5cbiAgICAgICAgICA8Uy5CdXR0b25XcmFwcGVyPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cudWRlbXkuY29tL2NvdXJzZS9yZWFjdC1hdmFuY2Fkby8/Y291cG9uQ29kZT1QUk9NT0FHTzIxXCJcbiAgICAgICAgICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgICAgICAgICAgd2lkZVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBDb21wcmFyXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L1MuQnV0dG9uV3JhcHBlcj5cbiAgICAgICAgPC9TLlRleHRCbG9jaz5cblxuICAgICAgICA8Uy5JbWFnZVxuICAgICAgICAgIHNyYz1cIi9pbWcvaGVyby1pbGx1c3RyYXRpb24uc3ZnXCJcbiAgICAgICAgICBhbHQ9XCJJbHVzdHJhw6fDo28gZGUgdW0gZGVzZW52b2x2ZWRvciBlbSBmcmVudGUgYSB1bSBjb21wdXRhZG9yIGNvbSB2w6FyaWFzIGxpbmhhcyBkZSBjw7NkaWdvLlwiXG4gICAgICAgIC8+XG4gICAgICA8L1MuQ29udGVudD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgPC9TLldyYXBwZXI+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb25IZXJvXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/SectionHero/index.tsx\n");

/***/ })

})