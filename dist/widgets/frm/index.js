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

	module.exports = __webpack_require__(14);


/***/ },

/***/ 14:
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.Title = undefined;\n\n__webpack_require__(15);\n\nvar Title = React.createClass({\n    displayName: \"Title\",\n\n    render: function render() {\n        var onlineStatus;\n        if (this.props.data.state == 2 || this.props.data.state == 3) {\n            onlineStatus = React.createElement(\n                \"p\",\n                { className: \"emotion_status waiting\" },\n                this.props.data.msg.onlineMsg\n            );\n        } else {\n            onlineStatus = null;\n        }\n        return React.createElement(\n            \"div\",\n            { className: \"emotion_detail_msg_title group\" },\n            this.props.data.msg.title,\n            React.createElement(\n                \"p\",\n                { className: \"emotion_status suc\" },\n                this.props.data.msg.subTitle\n            ),\n            onlineStatus\n        );\n    }\n});\nexports.Title = Title;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvd2lkZ2V0cy9mcm0vaW5kZXguanM/MzUxZCJdLCJuYW1lcyI6WyJUaXRsZSIsIlJlYWN0IiwiY3JlYXRlQ2xhc3MiLCJyZW5kZXIiLCJvbmxpbmVTdGF0dXMiLCJwcm9wcyIsImRhdGEiLCJzdGF0ZSIsIm1zZyIsIm9ubGluZU1zZyIsInRpdGxlIiwic3ViVGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFJQSxRQUFRQyxNQUFNQyxXQUFOLENBQWtCO0FBQUE7O0FBQzFCQyxZQUFRLGtCQUFVO0FBQ2QsWUFBSUMsWUFBSjtBQUNBLFlBQUcsS0FBS0MsS0FBTCxDQUFXQyxJQUFYLENBQWdCQyxLQUFoQixJQUF5QixDQUF6QixJQUE4QixLQUFLRixLQUFMLENBQVdDLElBQVgsQ0FBZ0JDLEtBQWhCLElBQXlCLENBQTFELEVBQTREO0FBQ3hESCwyQkFBZTtBQUFBO0FBQUEsa0JBQUcsV0FBVSx3QkFBYjtBQUF1QyxxQkFBS0MsS0FBTCxDQUFXQyxJQUFYLENBQWdCRSxHQUFoQixDQUFvQkM7QUFBM0QsYUFBZjtBQUNILFNBRkQsTUFFSztBQUNETCwyQkFBZSxJQUFmO0FBQ0g7QUFDRCxlQUNJO0FBQUE7QUFBQSxjQUFLLFdBQVUsZ0NBQWY7QUFBaUQsaUJBQUtDLEtBQUwsQ0FBV0MsSUFBWCxDQUFnQkUsR0FBaEIsQ0FBb0JFLEtBQXJFO0FBQ0k7QUFBQTtBQUFBLGtCQUFHLFdBQVUsb0JBQWI7QUFBbUMscUJBQUtMLEtBQUwsQ0FBV0MsSUFBWCxDQUFnQkUsR0FBaEIsQ0FBb0JHO0FBQXZELGFBREo7QUFFS1A7QUFGTCxTQURKO0FBTUg7QUFkeUIsQ0FBbEIsQ0FBWjtRQWdCUUosSyxHQUFBQSxLIiwiZmlsZSI6IjE0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL2luZGV4Lmxlc3MnO1xyXG5cclxudmFyIFRpdGxlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBvbmxpbmVTdGF0dXM7XHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5kYXRhLnN0YXRlID09IDIgfHwgdGhpcy5wcm9wcy5kYXRhLnN0YXRlID09IDMpe1xyXG4gICAgICAgICAgICBvbmxpbmVTdGF0dXMgPSA8cCBjbGFzc05hbWU9XCJlbW90aW9uX3N0YXR1cyB3YWl0aW5nXCI+e3RoaXMucHJvcHMuZGF0YS5tc2cub25saW5lTXNnfTwvcD47XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIG9ubGluZVN0YXR1cyA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW1vdGlvbl9kZXRhaWxfbXNnX3RpdGxlIGdyb3VwXCI+e3RoaXMucHJvcHMuZGF0YS5tc2cudGl0bGV9XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlbW90aW9uX3N0YXR1cyBzdWNcIj57dGhpcy5wcm9wcy5kYXRhLm1zZy5zdWJUaXRsZX08L3A+XHJcbiAgICAgICAgICAgICAgICB7b25saW5lU3RhdHVzfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0pO1xyXG5leHBvcnQge1RpdGxlfTtcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy93aWRnZXRzL2ZybS9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ },

/***/ 15:
/***/ function(module, exports) {

	eval("// removed by extract-text-webpack-plugin//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvd2lkZ2V0cy9mcm0vaW5kZXgubGVzcz9lNTNiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjE1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy93aWRnZXRzL2ZybS9pbmRleC5sZXNzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgOCJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

/******/ });