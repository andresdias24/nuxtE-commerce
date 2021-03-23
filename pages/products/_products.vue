<template>
  <div v-if="currentProduct.nombre">
    <Nav class="sticky top-0" />
    <h1 class="font-bold m-5 md:mx-10">
      {{ currentProduct.nombre }}
    </h1>
    <Products :data="currentProduct" />
    <Ads class="mx-auto sm:m-10" />
    <Footer />
  </div>
</template>

<script>
export default {
  async asyncData({ $strapi, route }) {
    const id = route.params.products
    debugger;
    const currentProduct = await $strapi.$productos.findOne(id)
    debugger;
    return { currentProduct }
  },
  data() {
    return {
      currentProduct: {},
    }
  },
}
</script>

<style scoped></style>
