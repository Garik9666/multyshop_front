<template>
  <div>
    <productDetail></productDetail>
    <h2 class="text-center">Related Products</h2>
    <PromoProducts :count="7"></PromoProducts>
  </div>
</template>
<script>
import productDetail from "../../components/productDetail";
import PromoProducts from "../../components/PromoProducts";
export default {
    layout: 'product',
  components: {
    productDetail,
    PromoProducts
  },
  data () {
    return {

    }
  },
  }
</script>
