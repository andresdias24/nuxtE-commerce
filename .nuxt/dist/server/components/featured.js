exports.ids = [2];
exports.modules = {

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(49);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("035d0815", content, true, context)
};

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Featured_vue_vue_type_style_index_0_id_09967e6f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Featured_vue_vue_type_style_index_0_id_09967e6f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Featured_vue_vue_type_style_index_0_id_09967e6f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Featured_vue_vue_type_style_index_0_id_09967e6f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Featured_vue_vue_type_style_index_0_id_09967e6f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Featured.vue?vue&type=template&id=09967e6f&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"sm:grid sm:grid-cols-3 md:grid-cols-3 gap-6 justify-center items-center\" data-v-09967e6f>","</div>",_vm._l((_vm.data),function(product,i){return _vm._ssrNode("<div class=\"flex flex-col max-h-screen shadow-xl m-8 sm:m-2 md:m-4 justify-center items-center\" data-v-09967e6f>","</div>",[_vm._ssrNode("<div class=\"img-wrapper h-3/4 mx-auto max-h-screen\" data-v-09967e6f><img"+(_vm._ssrAttr("src",("" + (product.foto[0].name))))+" alt class=\"flex-shrink h-1/2\" data-v-09967e6f></div> "),_vm._ssrNode("<div data-v-09967e6f>","</div>",[_vm._ssrNode("<p class=\"text-center m-3\" data-v-09967e6f>"+_vm._ssrEscape("\n          "+_vm._s(product.name)+"\n        ")+"</p> "),_c('NuxtLink',{attrs:{"to":("/products/" + (product._id))}},[_c('button',{staticClass:"button--green mb-4"},[_vm._v("View Product")])])],2)],2)}),0)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Featured.vue?vue&type=template&id=09967e6f&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Featured.vue?vue&type=script&lang=js&
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
//
//
//
//
//
//
//
//
// import axios from '@nuxtjs/axios'
/* harmony default export */ var Featuredvue_type_script_lang_js_ = ({
  name: 'Featured',
  props: ['data']
});
// CONCATENATED MODULE: ./components/Featured.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Featuredvue_type_script_lang_js_ = (Featuredvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Featured.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(48)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Featuredvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "09967e6f",
  "387b3f3f"
  
)

/* harmony default export */ var Featured = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=featured.js.map