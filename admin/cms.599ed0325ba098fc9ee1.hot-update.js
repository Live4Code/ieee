webpackHotUpdate("cms",{

/***/ "./node_modules/core-js/modules/_string-html.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_string-html.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
var quot = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function (string, tag, attribute, value) {
  var S = String(defined(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
module.exports = function (NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.link.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.link.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.10 String.prototype.link(url)
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('link', function (createHTML) {
  return function link(url) {
    return createHTML(this, 'a', 'href', url);
  };
});


/***/ }),

/***/ "./src/components/Offerings/index.js":
/*!*******************************************!*\
  !*** ./src/components/Offerings/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es6_string_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.string.link */ "./node_modules/core-js/modules/es6.string.link.js");
/* harmony import */ var core_js_modules_es6_string_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
var _jsxFileName="/Users/edwardtan/git/ieee/web/src/components/Offerings/index.js";(function(){var enterModule=typeof reactHotLoaderGlobal!=='undefined'?reactHotLoaderGlobal.enterModule:undefined;enterModule&&enterModule(module);})();var __signature__=typeof reactHotLoaderGlobal!=='undefined'?reactHotLoaderGlobal.default.signature:function(a){return a;};var Offerings=function Offerings(_ref){var gridItems=_ref.gridItems;return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"columns is-multiline",__source:{fileName:_jsxFileName,lineNumber:6},__self:this},gridItems.map(function(item){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{key:item.image,className:"column is-6",style:{borderRadius:'5px'},__source:{fileName:_jsxFileName,lineNumber:8},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section",{className:"section",__source:{fileName:_jsxFileName,lineNumber:9},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p",{className:"has-text-centered",__source:{fileName:_jsxFileName,lineNumber:10},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img",{alt:"",src:Object(gatsby__WEBPACK_IMPORTED_MODULE_3__["withPrefix"])(item.image),__source:{fileName:_jsxFileName,lineNumber:11},__self:this})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__["Link"],{className:"",to:item.link,__source:{fileName:_jsxFileName,lineNumber:13},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p",{__source:{fileName:_jsxFileName,lineNumber:14},__self:this},item.text))));}));};Offerings.propTypes={gridItems:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({image:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,text:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string}))};var _default=Offerings;/* harmony default export */ __webpack_exports__["default"] = (_default);;(function(){var reactHotLoader=typeof reactHotLoaderGlobal!=='undefined'?reactHotLoaderGlobal.default:undefined;if(!reactHotLoader){return;}reactHotLoader.register(Offerings,"Offerings","/Users/edwardtan/git/ieee/web/src/components/Offerings/index.js");reactHotLoader.register(_default,"default","/Users/edwardtan/git/ieee/web/src/components/Offerings/index.js");})();;(function(){var leaveModule=typeof reactHotLoaderGlobal!=='undefined'?reactHotLoaderGlobal.leaveModule:undefined;leaveModule&&leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.599ed0325ba098fc9ee1.hot-update.js.map