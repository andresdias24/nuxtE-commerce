export { default as Ads } from '../..\\components\\Ads.vue'
export { default as Featured } from '../..\\components\\Featured.vue'
export { default as Footer } from '../..\\components\\Footer.vue'
export { default as HeroSection } from '../..\\components\\HeroSection.vue'
export { default as Logo } from '../..\\components\\Logo.vue'
export { default as Nav } from '../..\\components\\Nav.vue'
export { default as NewsLetter } from '../..\\components\\NewsLetter.vue'
export { default as Products } from '../..\\components\\Products.vue'

export const LazyAds = import('../..\\components\\Ads.vue' /* webpackChunkName: "components/ads" */).then(c => c.default || c)
export const LazyFeatured = import('../..\\components\\Featured.vue' /* webpackChunkName: "components/featured" */).then(c => c.default || c)
export const LazyFooter = import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => c.default || c)
export const LazyHeroSection = import('../..\\components\\HeroSection.vue' /* webpackChunkName: "components/hero-section" */).then(c => c.default || c)
export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c)
export const LazyNav = import('../..\\components\\Nav.vue' /* webpackChunkName: "components/nav" */).then(c => c.default || c)
export const LazyNewsLetter = import('../..\\components\\NewsLetter.vue' /* webpackChunkName: "components/news-letter" */).then(c => c.default || c)
export const LazyProducts = import('../..\\components\\Products.vue' /* webpackChunkName: "components/products" */).then(c => c.default || c)
