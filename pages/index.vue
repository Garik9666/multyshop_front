<template>
      <div>
        <v-container fluid>
        <Brands></Brands>
        </v-container>
        <HeadSlider></HeadSlider>
        <v-container fluid>
<!--          <MiddleBanner></MiddleBanner>-->
          <h1  class="text-center mb-5">New Products</h1>
          <PromoProducts :count="7" type="new" ></PromoProducts>
          <h1  class="text-center mb-5">Best selling</h1>
          <PromoProducts :count="7" type="best" ></PromoProducts>
          <h1  class="text-center mb-5">Sales</h1>
          <PromoProducts :count="7" type="sales" ></PromoProducts>
          <Subscribe></Subscribe>

        </v-container>
      </div>
</template>

<script>
import HeadSlider from '~/components/HeadSlider.vue'
import Brands from '~/components/Brands.vue'
import ProductsSlider from '~/components/ProductsSlider.vue'
import PromoProducts from '~/components/PromoProducts.vue'
import Subscribe from '~/components/Subscribe.vue'
import MiddleBanner from "../components/MiddleBanner";

export default {
  async fetch({store}){
    await store.dispatch('brands/fetch');
    await store.dispatch('products/filterAsType', ['new']);
    await store.dispatch('products/filterAsType', ['best']);
    await store.dispatch('products/filterAsType', ['sales']);
  },
  components: {
    HeadSlider,
    Brands,
    ProductsSlider,
    PromoProducts,
    Subscribe,
    MiddleBanner,
  },
  data () {
    return {
      justifyCenter: 'center',
    }
  },

}
</script>
