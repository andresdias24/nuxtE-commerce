exports.ids = [8];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=products.js.map