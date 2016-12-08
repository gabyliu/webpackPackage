/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(20);


/***/ },

/***/ 20:
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.Inner = exports.Title = undefined;\n\n__webpack_require__(21);\n\nvar Title = React.createClass({\n    displayName: \"Title\",\n\n    render: function render() {\n        return React.createElement(\n            \"div\",\n            { className: \"titleBanner\" },\n            React.createElement(\"div\", { className: \"logo\", title: \"\\u5FAE\\u4FE1\\u8868\\u60C5\\u5F00\\u653E\\u5E73\\u53F0\" }),\n            React.createElement(\n                \"span\",\n                null,\n                \"\\u653E\\u5E73\\u53F0\\u5FAE\\u4FE1\\u8868\\u60C5\\u5F00\\u653E\\u5E73\\u53F0\\u5FAE\\u4FE1\\u8868\\u60C5\\u5F00\\u653E\\u5E73\\u53F0\\u5FAE\\u4FE1\\u8868\\u60C5\\u5F00\\u653E\\u5E73\\u53F0\\u5FAE\\u4FE1\\u8868\\u60C5\\u5F00\\u653E\\u5E73\\u53F0\\u5FAE\\u4FE1\\u8868\\u60C5\\u5F00\\u653E\\u5E73\\u53F0\\u5FAE\\u4FE1\\u8868\\u60C5\\u5F00\\u653E\\u5E73\\u53F0\"\n            )\n        );\n    }\n});\n\nvar Inner = React.createClass({\n    displayName: \"Inner\",\n\n\n    render: function render() {\n        return React.createElement(\n            \"div\",\n            null,\n            React.createElement(Title, null)\n        );\n    }\n});\n\nReact.render(React.createElement(Inner, null), document.getElementById('inner'));\n\nexports.Title = Title;\nexports.Inner = Inner;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvd2lkZ2V0cy9UaXRsZS9pbmRleC5qcz81M2Q1Il0sIm5hbWVzIjpbIlRpdGxlIiwiUmVhY3QiLCJjcmVhdGVDbGFzcyIsInJlbmRlciIsIklubmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBLElBQUlBLFFBQVFDLE1BQU1DLFdBQU4sQ0FBa0I7QUFBQTs7QUFDMUJDLFlBQVEsa0JBQVU7QUFDZCxlQUNJO0FBQUE7QUFBQSxjQUFLLFdBQVUsYUFBZjtBQUNJLHlDQUFLLFdBQVUsTUFBZixFQUFzQixPQUFNLGtEQUE1QixHQURKO0FBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKLFNBREo7QUFNSDtBQVJ5QixDQUFsQixDQUFaOztBQVdBLElBQUlDLFFBQVFILE1BQU1DLFdBQU4sQ0FBa0I7QUFBQTs7O0FBRTFCQyxZQUFRLGtCQUFVO0FBQ2QsZUFBUTtBQUFBO0FBQUE7QUFDSixnQ0FBQyxLQUFEO0FBREksU0FBUjtBQUdIO0FBTnlCLENBQWxCLENBQVo7O0FBU0FGLE1BQU1FLE1BQU4sQ0FDSSxvQkFBQyxLQUFELE9BREosRUFFSUUsU0FBU0MsY0FBVCxDQUF3QixPQUF4QixDQUZKOztRQUtRTixLLEdBQUFBLEs7UUFBT0ksSyxHQUFBQSxLIiwiZmlsZSI6IjIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL2luZGV4Lmxlc3MnO1xyXG5cclxudmFyIFRpdGxlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVCYW5uZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiIHRpdGxlPVwi5b6u5L+h6KGo5oOF5byA5pS+5bmz5Y+wXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj7mlL7lubPlj7Dlvq7kv6Hooajmg4XlvIDmlL7lubPlj7Dlvq7kv6Hooajmg4XlvIDmlL7lubPlj7Dlvq7kv6Hooajmg4XlvIDmlL7lubPlj7Dlvq7kv6Hooajmg4XlvIDmlL7lubPlj7Dlvq7kv6Hooajmg4XlvIDmlL7lubPlj7Dlvq7kv6Hooajmg4XlvIDmlL7lubPlj7A8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufSk7XHJcblxyXG52YXIgSW5uZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgICBcclxuICAgIHJlbmRlcjogZnVuY3Rpb24oKXtcclxuICAgICAgICByZXR1cm4gKDxkaXY+XHJcbiAgICAgICAgICAgIDxUaXRsZSAvPlxyXG4gICAgICAgIDwvZGl2PilcclxuICAgIH1cclxufSk7XHJcblxyXG5SZWFjdC5yZW5kZXIoXHJcbiAgICA8SW5uZXIgLz4sXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5uZXInKVxyXG4pO1xyXG5cclxuZXhwb3J0IHtUaXRsZSwgSW5uZXJ9O1xyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3dpZGdldHMvVGl0bGUvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ },

/***/ 21:
/***/ function(module, exports) {

	eval("// removed by extract-text-webpack-plugin//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvd2lkZ2V0cy9UaXRsZS9pbmRleC5sZXNzP2Q2M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiMjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3dpZGdldHMvVGl0bGUvaW5kZXgubGVzc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDYiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }

/******/ });