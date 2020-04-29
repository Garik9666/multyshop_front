<template>
  <div>
    <productDetail></productDetail>
    <h2 class="text-center">Related Products</h2>
    <PromoProducts :count="7"></PromoProducts>
    <deliveryBaner></deliveryBaner>
  </div>
</template>
<script>
import productDetail from "../../components/productDetail";
import PromoProducts from "../../components/PromoProducts";
import deliveryBaner from "../../components/deliveryBaner";
export default {
    layout: 'product',
  components: {
    productDetail,
    PromoProducts,
    deliveryBaner
  },
  data () {
    return {

    }
  },
  }
</script>
