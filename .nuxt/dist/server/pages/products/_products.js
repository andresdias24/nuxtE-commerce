exports.ids = [13,1,3,6,8];
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

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Products.vue?vue&type=template&id=932c4962&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"sm:grid grid-cols-2 justify-center shadow-lg items-center gap-3 m-5 md:m-5\" data-v-932c4962><div data-v-932c4962><img"+(_vm._ssrAttr("src",("" + (_vm.data.Image[0].url))))+" class=\"max-h-screen\" data-v-932c4962></div> <div class=\"sm:m-3 md:m-5 p-3 sm:p-0\" data-v-932c4962><p class=\"my-2\" data-v-932c4962><span data-v-932c4962>Price: </span>"+_vm._ssrEscape(_vm._s(_vm._f("formatPrice")(_vm.data.price)))+"</p> <span class=\"my-2\" data-v-932c4962>Quantity: </span><input type=\"number\""+(_vm._ssrAttr("value",(_vm.cartItem.quantity)))+" class=\"p-3 border border-solid border-t-0 border-l-0 border-r-0 border-b-1\" data-v-932c4962> <p class=\"my-2 text-sm\" data-v-932c4962>"+_vm._ssrEscape(_vm._s(_vm.data.description))+"</p> <button class=\"button--green my-2\" data-v-932c4962>\n        Add to Cart\n      </button></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Products.vue?vue&type=template&id=932c4962&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Products.vue?vue&type=script&lang=js&
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

/* harmony default export */ var Productsvue_type_script_lang_js_ = ({
  name: 'Products',
  props: ['data'],

  data() {
    return {
      cartItem: {
        id: this.data.id,
        nombre: this.data.name,
        url: this.data.foto[0].name,
        precio: this.data.price,
        quantity: 1
      }
    };
  },

  methods: { ...Object(external_vuex_["mapActions"])(['addItemToCart']),

    displayMessage() {
      this.$swal({
        title: 'Cart Updated!',
        text: `${this.data.name} was added to your cart!`,
        icon: 'success',
        button: 'Ok'
      });
    }

  },
  filters: {
    formatPrice(price) {
      return `$${price}`;
    }

  }
});
// CONCATENATED MODULE: ./components/Products.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Productsvue_type_script_lang_js_ = (Productsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Products.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Productsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "932c4962",
  "2db4a175"
  
)

/* harmony default export */ var Products = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/products/_products.vue?vue&type=template&id=61cccfea&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.currentProduct.nombre)?_c('div',[_c('Nav',{staticClass:"sticky top-0"}),_vm._ssrNode(" <h1 class=\"font-bold m-5 md:mx-10\" data-v-61cccfea>"+_vm._ssrEscape("\n    "+_vm._s(_vm.currentProduct.nombre)+"\n  ")+"</h1> "),_c('Products',{attrs:{"data":_vm.currentProduct}}),_vm._ssrNode(" "),_c('Ads',{staticClass:"mx-auto sm:m-10"}),_vm._ssrNode(" "),_c('Footer')],2):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/products/_products.vue?vue&type=template&id=61cccfea&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/products/_products.vue?vue&type=script&lang=js&
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
/* harmony default export */ var _productsvue_type_script_lang_js_ = ({
  async asyncData({
    $strapi,
    route
  }) {
    const id = route.params.products;
    debugger;
    const currentProduct = await $strapi.$productos.findOne(id);
    debugger;
    return {
      currentProduct
    };
  },

  data() {
    return {
      currentProduct: {}
    };
  }

});
// CONCATENATED MODULE: ./pages/products/_products.vue?vue&type=script&lang=js&
 /* harmony default export */ var products_productsvue_type_script_lang_js_ = (_productsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/products/_products.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  products_productsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "61cccfea",
  "80261bf0"
  
)

/* harmony default export */ var _products = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Nav: __webpack_require__(45).default,Products: __webpack_require__(56).default,Ads: __webpack_require__(46).default,Footer: __webpack_require__(47).default})


/***/ })

};;
//# sourceMappingURL=_products.js.map