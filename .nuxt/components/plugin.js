import Vue from 'vue'

const components = {
  Ads: () => import('../..\\components\\Ads.vue' /* webpackChunkName: "components/ads" */).then(c => c.default || c),
  Featured: () => import('../..\\components\\Featured.vue' /* webpackChunkName: "components/featured" */).then(c => c.default || c),
  Footer: () => import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => c.default || c),
  HeroSection: () => import('../..\\components\\HeroSection.vue' /* webpackChunkName: "components/hero-section" */).then(c => c.default || c),
  Logo: () => import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c),
  Nav: () => import('../..\\components\\Nav.vue' /* webpackChunkName: "components/nav" */).then(c => c.default || c),
  NewsLetter: () => import('../..\\components\\NewsLetter.vue' /* webpackChunkName: "components/news-letter" */).then(c => c.default || c),
  Products: () => import('../..\\components\\Products.vue' /* webpackChunkName: "components/products" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
