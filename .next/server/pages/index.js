"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Index),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ \"./utils.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/private/tmp/testing123/pages/index.tsx\";\n\n\n\n\nfunction Index({\n  posts\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h1\", {\n      children: \"Posts\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"ul\", {\n      children: posts.map(post => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"li\", {\n        children: post.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 13\n      }, this))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true);\n}\nasync function getStaticProps() {\n  const data = await (0,_utils__WEBPACK_IMPORTED_MODULE_1__.fetchGraphQL)(_utils__WEBPACK_IMPORTED_MODULE_1__.gql`\n      query {\n        posts {\n          id\n          title\n        }\n      }\n    `);\n  return {\n    props: {\n      posts: data.posts\n    },\n    revalidate: 60\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUdBOzs7QUFFZSxTQUFTRyxLQUFULENBQWU7QUFBQ0MsRUFBQUE7QUFBRCxDQUFmLEVBQTZCO0FBQ3hDLHNCQUNJO0FBQUEsNEJBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEQSxlQUVBO0FBQUEsZ0JBQ0NBLEtBQUssQ0FBQ0MsR0FBTixDQUFVQyxJQUFJLGlCQUNYO0FBQUEsa0JBQUtBLElBQUksQ0FBQ0M7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREg7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkE7QUFBQSxrQkFESjtBQVdIO0FBRU0sZUFBZUMsY0FBZixHQUFnQztBQUNyQyxRQUFNQyxJQUFJLEdBQUcsTUFBTVIsb0RBQVksQ0FDN0JDLHVDQUFJO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FSaUMsQ0FBL0I7QUFXQSxTQUFPO0FBQUVRLElBQUFBLEtBQUssRUFBRTtBQUFFTixNQUFBQSxLQUFLLEVBQUVLLElBQUksQ0FBQ0w7QUFBZCxLQUFUO0FBQWdDTyxJQUFBQSxVQUFVLEVBQUU7QUFBNUMsR0FBUDtBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va2V5c3RvbmUtYXBwLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgR2V0U3RhdGljUHJvcHNDb250ZXh0IH0gZnJvbSAnbmV4dCc7XG5cbmltcG9ydCB7IGZldGNoR3JhcGhRTCwgZ3FsfSBmcm9tICcuLi91dGlscydcbiAgXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCh7cG9zdHN9OiBhbnkpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICA8aDE+UG9zdHM8L2gxPlxuICAgICAgICA8dWw+XG4gICAgICAgIHtwb3N0cy5tYXAocG9zdCA9PiAoXG4gICAgICAgICAgICA8bGk+e3Bvc3QudGl0bGV9PC9saT5cbiAgICAgICAgKSlcbiAgICAgICAgfVxuICAgICAgICA8L3VsPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoR3JhcGhRTChcbiAgICBncWxgXG4gICAgICBxdWVyeSB7XG4gICAgICAgIHBvc3RzIHtcbiAgICAgICAgICBpZFxuICAgICAgICAgIHRpdGxlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgLFxuICApO1xuXG4gIHJldHVybiB7IHByb3BzOiB7IHBvc3RzOiBkYXRhLnBvc3RzIH0sIHJldmFsaWRhdGU6IDYwIH07XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiZmV0Y2hHcmFwaFFMIiwiZ3FsIiwiSW5kZXgiLCJwb3N0cyIsIm1hcCIsInBvc3QiLCJ0aXRsZSIsImdldFN0YXRpY1Byb3BzIiwiZGF0YSIsInByb3BzIiwicmV2YWxpZGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./utils.tsx":
/*!*******************!*\
  !*** ./utils.tsx ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gql\": () => (/* binding */ gql),\n/* harmony export */   \"fetchGraphQL\": () => (/* binding */ fetchGraphQL)\n/* harmony export */ });\nconst gql = ([content]) => content;\nasync function fetchGraphQL(query, variables) {\n  return fetch(`http://localhost:3000/api/graphql`, {\n    method: 'POST',\n    body: JSON.stringify({\n      query,\n      variables\n    }),\n    headers: {\n      'Content-Type': 'application/json'\n    }\n  }).then(x => x.json()).then(({\n    data,\n    errors\n  }) => {\n    if (errors) {\n      throw new Error(`GraphQL errors occurred:\\n${errors.map(x => x.message).join('\\n')}`);\n    }\n\n    return data;\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxNQUFNQSxHQUFHLEdBQUcsQ0FBQyxDQUFDQyxPQUFELENBQUQsS0FBcUNBLE9BQWpEO0FBRUEsZUFBZUMsWUFBZixDQUE0QkMsS0FBNUIsRUFBMkNDLFNBQTNDLEVBQTRFO0FBQ2pGLFNBQU9DLEtBQUssQ0FBRSxtQ0FBRixFQUFzQztBQUNoREMsSUFBQUEsTUFBTSxFQUFFLE1BRHdDO0FBRWhEQyxJQUFBQSxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQUVOLE1BQUFBLEtBQUY7QUFBU0MsTUFBQUE7QUFBVCxLQUFmLENBRjBDO0FBR2hETSxJQUFBQSxPQUFPLEVBQUU7QUFBRSxzQkFBZ0I7QUFBbEI7QUFIdUMsR0FBdEMsQ0FBTCxDQUtKQyxJQUxJLENBS0NDLENBQUMsSUFBSUEsQ0FBQyxDQUFDQyxJQUFGLEVBTE4sRUFNSkYsSUFOSSxDQU1DLENBQUM7QUFBRUcsSUFBQUEsSUFBRjtBQUFRQyxJQUFBQTtBQUFSLEdBQUQsS0FBc0I7QUFDMUIsUUFBSUEsTUFBSixFQUFZO0FBQ1YsWUFBTSxJQUFJQyxLQUFKLENBQ0gsNkJBQTRCRCxNQUFNLENBQUNFLEdBQVAsQ0FBWUwsQ0FBRCxJQUFZQSxDQUFDLENBQUNNLE9BQXpCLEVBQWtDQyxJQUFsQyxDQUF1QyxJQUF2QyxDQUE2QyxFQUR0RSxDQUFOO0FBR0Q7O0FBQ0QsV0FBT0wsSUFBUDtBQUNELEdBYkksQ0FBUDtBQWNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va2V5c3RvbmUtYXBwLy4vdXRpbHMudHN4PzgwNGMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGdxbCA9IChbY29udGVudF06IFRlbXBsYXRlU3RyaW5nc0FycmF5KSA9PiBjb250ZW50O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hHcmFwaFFMKHF1ZXJ5OiBzdHJpbmcsIHZhcmlhYmxlcz86IFJlY29yZDxzdHJpbmcsIGFueT4pIHtcbiAgcmV0dXJuIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2dyYXBocWxgLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBxdWVyeSwgdmFyaWFibGVzIH0pLFxuICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICB9KVxuICAgIC50aGVuKHggPT4geC5qc29uKCkpXG4gICAgLnRoZW4oKHsgZGF0YSwgZXJyb3JzIH0pID0+IHtcbiAgICAgIGlmIChlcnJvcnMpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBHcmFwaFFMIGVycm9ycyBvY2N1cnJlZDpcXG4ke2Vycm9ycy5tYXAoKHg6IGFueSkgPT4geC5tZXNzYWdlKS5qb2luKCdcXG4nKX1gXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9KTtcbn0iXSwibmFtZXMiOlsiZ3FsIiwiY29udGVudCIsImZldGNoR3JhcGhRTCIsInF1ZXJ5IiwidmFyaWFibGVzIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJ0aGVuIiwieCIsImpzb24iLCJkYXRhIiwiZXJyb3JzIiwiRXJyb3IiLCJtYXAiLCJtZXNzYWdlIiwiam9pbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();