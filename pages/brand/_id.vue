<template>
  <div>
    <v-container>
      <v-row justify="center">
        <productCard
          v-for="(product, i) in products.products"
          :key="i"
          :image="JSON.parse(product.images)[0]"
          :id="product.id"
          :title="product.name"
          :price="product.price"
        ></productCard>

      </v-row>
      <div v-if="products.count > 1" class="text-center">
        <v-pagination
          v-model="page"
          :length="products.count"
          :total-visible="7"
          @input="next"
        ></v-pagination>
      </div>

    </v-container>
  </div>
<!--  {{$route.params.name}}-->

</template>

<script>
  import productCard from "../../components/productCard";
    export default {
      watchQuery: ["page"],
      async fetch({route, store}) {
        await store.dispatch('brands/getBrand', [route.params.id]);
        await store.dispatch('products/getProductByBrandId', [route.params.id, route.query.page]);
      },
      layout: 'brand',
      components: {
        productCard
      },
      data () {
        return {
          page: 1,
        }
      },
      computed: {
        products() {
          return this.$store.getters['products/productByBrand'];
        },
      },
      methods:{
        next() {
          this.$router.push({ query: { page: this.page } });
        }
      }
    }
</script>

<style scoped>

</style>
