<template>
  <div>
    <productDetail></productDetail>
    <h2 class="text-center">Related Products</h2>
    <PromoProducts :count="7" type="best"></PromoProducts>
    <div style="width:400px">
    </div>
    <Subscribe></Subscribe>
  </div>
</template>
<script>
import productDetail from "../../components/productDetail";
import PromoProducts from "../../components/PromoProducts";
import deliveryBaner from "../../components/deliveryBaner";
import Subscribe from '~/components/Subscribe.vue'

export default {
    layout: 'product',
  async fetch({route, store}) {
    await store.dispatch('brands/fetch');
    await store.dispatch('wishListAndCart/fetch');
    await store.dispatch('menus/fetch');
    await store.dispatch('products/filterAsType', ['best']);
    await store.dispatch('products/getProduct', [route.params.name]);
  },
  components: {
    productDetail,
    PromoProducts,
    deliveryBaner,
    Subscribe
  },
  data () {
    return {

    }
  },
  }
</script>
