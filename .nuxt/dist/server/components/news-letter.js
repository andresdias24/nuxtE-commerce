exports.ids = [7];
exports.modules = {

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/NewsLetter.vue?vue&type=template&id=4a84fc3a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sm:flex mx-auto items-center m-10 justify-center space-x-6 sm:space-x-20 m-3 sm:m-6 mx-6"},[_vm._ssrNode("<div><h1 class=\"text-lg m-7\">Sign Up For NewsLetter</h1></div> <div><form><input id type=\"email\" name placeholder=\"email\""+(_vm._ssrAttr("value",(_vm.email)))+" class=\"p-2 m-3 sm:m-0 border border-solid border-t-0 border-l-0 border-r-0 border-b-1 outline-none border-black\"> <button type=\"submit\" class=\"button--grey\">Subscribe</button></form></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/NewsLetter.vue?vue&type=template&id=4a84fc3a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/NewsLetter.vue?vue&type=script&lang=js&
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
/* harmony default export */ var NewsLettervue_type_script_lang_js_ = ({
  name: 'NewsLetter',

  data() {
    return {
      email: ''
    };
  },

  methods: {
    async handleSuscribe(e) {
      e.preventDefault();
      this.$swal({
        title: 'Successful!',
        text: 'Thanks for Subscribing',
        icon: 'success',
        button: 'Ok'
      });
      await this.$strapi.$subscribers.create({
        Email: this.email
      }); // clear email input

      this.email = '';
    }

  }
});
// CONCATENATED MODULE: ./components/NewsLetter.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_NewsLettervue_type_script_lang_js_ = (NewsLettervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/NewsLetter.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_NewsLettervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "44d1042a"
  
)

/* harmony default export */ var NewsLetter = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=news-letter.js.map