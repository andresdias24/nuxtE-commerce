exports.ids = [4];
exports.modules = {

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(53);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("b946a8f6", content, true, context)
};

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroSection_vue_vue_type_style_index_0_id_4b4e7082_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroSection_vue_vue_type_style_index_0_id_4b4e7082_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroSection_vue_vue_type_style_index_0_id_4b4e7082_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroSection_vue_vue_type_style_index_0_id_4b4e7082_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroSection_vue_vue_type_style_index_0_id_4b4e7082_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".hero[data-v-4b4e7082]{background-color:rgba(156,116,116,.86275)}.circle[data-v-4b4e7082]{width:10em;height:10em;border-radius:5em;background:#b8738d}.title[data-v-4b4e7082]{font-family:\"Nunito\";display:block;font-weight:700;font-size:50px;letter-spacing:1px;line-height:1em}.subtitle[data-v-4b4e7082]{font-weight:100;word-spacing:2px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HeroSection.vue?vue&type=template&id=4b4e7082&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hero relative max-h-screen flex flex-col justify-center items-center text-center mx-auto bg-cover"},[_vm._ssrNode("<div class=\"relative m-10 md:m-20\" data-v-4b4e7082>","</div>",[_vm._ssrNode("<div class=\"relative\" data-v-4b4e7082><img src=\"Repeat_Grid_2.png\" alt class=\"absolute left-0 top-0\" data-v-4b4e7082></div> <div class=\"z-10 relative\" data-v-4b4e7082><h1 class=\"text-5xl text-white m-3 font-bold md:text-6xl\" data-v-4b4e7082>\n        Tienda bien chimbita....\n      </h1> <p class=\"text-white subtitle\" data-v-4b4e7082>...your one stop shop for all</p></div> <div class=\"circle absolute z-0 right-0 top-0\" data-v-4b4e7082></div> "),_vm._ssrNode("<div class=\"links mt-10\" data-v-4b4e7082>","</div>",[_c('NuxtLink',{staticClass:"button--hero bg-button relative z-10",attrs:{"to":"/"}},[_vm._v("\n        View Collections\n      ")])],1)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/HeroSection.vue?vue&type=template&id=4b4e7082&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HeroSection.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var HeroSectionvue_type_script_lang_js_ = ({
  name: 'HeroSection'
});
// CONCATENATED MODULE: ./components/HeroSection.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_HeroSectionvue_type_script_lang_js_ = (HeroSectionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/HeroSection.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(52)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_HeroSectionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4b4e7082",
  "7e6a608a"
  
)

/* harmony default export */ var HeroSection = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=hero-section.js.map