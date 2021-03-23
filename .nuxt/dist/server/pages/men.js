exports.ids = [12,1,2,3,6];
exports.modules = {

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(44);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("d46829d0", content, true, context)
};

/***/ }),

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

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Nav_vue_vue_type_style_index_0_id_a6c176e2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Nav_vue_vue_type_style_index_0_id_a6c176e2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Nav_vue_vue_type_style_index_0_id_a6c176e2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Nav_vue_vue_type_style_index_0_id_a6c176e2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Nav_vue_vue_type_style_index_0_id_a6c176e2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".ham-menu[data-v-a6c176e2]{background-color:#000}.cart[data-v-a6c176e2],.ham-menu[data-v-a6c176e2]{width:3em;height:3em;border-radius:1.5em}.cart[data-v-a6c176e2]{background-color:#a35781}.navbar[data-v-a6c176e2]{background-color:#181416}.cartCount[data-v-a6c176e2]{background:#000;border-radius:30%}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Nav.vue?vue&type=template&id=a6c176e2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"navbar flex text-white relative"},[_vm._ssrNode("<div class=\"nav-item-center flex space-x-6 sm:space-x-20 p-5 mx-auto\" data-v-a6c176e2>","</div>",[_c('NuxtLink',{attrs:{"to":"/"}},[_vm._v("Home")]),_vm._ssrNode(" "),_c('NuxtLink',{attrs:{"to":"/all"}},[_vm._v("All")]),_vm._ssrNode(" "),_c('NuxtLink',{attrs:{"to":"/men"}},[_vm._v("Men")]),_vm._ssrNode(" "),_c('NuxtLink',{attrs:{"to":"/women"}},[_vm._v("Women")])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"cart fixed bottom-0 right-0 shadow-md m-3\" data-v-a6c176e2>","</div>",[_vm._ssrNode("<p class=\"p-1 cartCount text-xs absolute top-0 right-0\" data-v-a6c176e2>"+_vm._ssrEscape("\n      "+_vm._s(_vm.getCart.length)+"\n    ")+"</p> "),_c('NuxtLink',{attrs:{"to":"/cart"}},[_c('p',{staticClass:"pt-3 px-2"},[_vm._v("Cart")])])],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Nav.vue?vue&type=template&id=a6c176e2&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Nav.vue?vue&type=script&lang=js&
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

/* harmony default export */ var Navvue_type_script_lang_js_ = ({
  name: 'Nav',
  computed: { ...Object(external_vuex_["mapGetters"])(['getCart'])
  }
});
// CONCATENATED MODULE: ./components/Nav.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Navvue_type_script_lang_js_ = (Navvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Nav.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(43)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Navvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "a6c176e2",
  "e8c7c9bc"
  
)

/* harmony default export */ var Nav = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Ads.vue?vue&type=template&id=cb0e90fe&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bg-primary ads flex justify-center items-center"},[_vm._ssrNode("<h3 class=\"text-white text-lg ml-6 sm:text-2xl font-bold\">\n    50% off on all Purchases Above $300, Hurry Now!!!!\n  </h3> <img"+(_vm._ssrAttr("src","uriel-soberanes-MxVkWPiJALs-unsplash-removebg-preview.png"))+" alt class=\"h-48 sm:pl-20\">")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Ads.vue?vue&type=template&id=cb0e90fe&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Ads.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Adsvue_type_script_lang_js_ = ({
  name: 'Ads'
});
// CONCATENATED MODULE: ./components/Ads.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Adsvue_type_script_lang_js_ = (Adsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Ads.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Adsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "3e4147a2"
  
)

/* harmony default export */ var Ads = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=template&id=9a6fec72&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flex flex-col mt-10 sm:mt-0 sm:flex-row sm:items-center bg-primary text-white space-x-5 p-5 py-8 md:space-x-20 md:p-20 font-light text-sm"},[_vm._ssrNode("<p class=\"ml-5 font-bold\" data-v-9a6fec72>Unique Essense Store</p> "),_vm._ssrNode("<div class=\"m-2 mb-3\" data-v-9a6fec72>","</div>",[_c('NuxtLink',{staticClass:"m-2",attrs:{"to":"/"}},[_c('p',[_vm._v("Home")])]),_vm._ssrNode(" "),_c('NuxtLink',{staticClass:"m-2",attrs:{"to":"/all"}},[_c('p',[_vm._v("All")])]),_vm._ssrNode(" "),_c('NuxtLink',{staticClass:"m-2",attrs:{"to":"men"}},[_c('p',[_vm._v("Men")])]),_vm._ssrNode(" "),_c('NuxtLink',{staticClass:"m-2",attrs:{"to":"women"}},[_c('p',[_vm._v("Women")])])],2),_vm._ssrNode(" <div data-v-9a6fec72>"+_vm._ssrEscape("\n    "+_vm._s(_vm.back)+"\n  ")+"</div> <p data-v-9a6fec72>\n    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium\n    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo\n  </p>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Footer.vue?vue&type=template&id=9a6fec72&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Footervue_type_script_lang_js_ = ({
  name: 'Footer',
  back: "hola desde el back"
});
// CONCATENATED MODULE: ./components/Footer.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Footervue_type_script_lang_js_ = (Footervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Footer.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Footervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "9a6fec72",
  "f197c728"
  
)

/* harmony default export */ var Footer = __webpack_exports__["default"] = (component.exports);

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

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/men.vue?vue&type=template&id=4cabf1b7&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Nav',{staticClass:"sticky top-0"}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"md:w-4/5 sm:w-11/12 mx-auto\" data-v-4cabf1b7>","</div>",[_vm._ssrNode("<h1 class=\"m-5 font-bold text-lg\" data-v-4cabf1b7>Men's Collection</h1> "),_vm._ssrNode("<div class=\"flex justify-center text-center mx-auto\" data-v-4cabf1b7>","</div>",[_c('Featured',{attrs:{"data":_vm.menProducts}})],1)],2),_vm._ssrNode(" "),_c('Ads',{staticClass:"mx-auto sm:m-10"}),_vm._ssrNode(" "),_c('Footer')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/men.vue?vue&type=template&id=4cabf1b7&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/men.vue?vue&type=script&lang=js&
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

/* harmony default export */ var menvue_type_script_lang_js_ = ({
  async asyncData({
    $strapi,
    store,
    error
  }) {
    try {
      const response = await $strapi.$productos.find([['category.name', 'men']]);
      store.commit('setMenProducts', response);
    } catch (e) {
      error(e);
    }
  },

  data() {
    return {
      menProds: []
    };
  },

  computed: { ...Object(external_vuex_["mapGetters"])(['menProducts'])
  }
});
// CONCATENATED MODULE: ./pages/men.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_menvue_type_script_lang_js_ = (menvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/men.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_menvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4cabf1b7",
  "33db4d2e"
  
)

/* harmony default export */ var men = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Nav: __webpack_require__(45).default,Featured: __webpack_require__(50).default,Ads: __webpack_require__(46).default,Footer: __webpack_require__(47).default})


/***/ })

};;
//# sourceMappingURL=men.js.map