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
      await store.dispatch('products/getProductByCategoryId', [route.params.id, route.query.page]);
      await store.dispatch('brands/fetch');
      await store.dispatch('wishListAndCart/fetch');
      await store.dispatch('menus/fetch');
      await store.dispatch('products/getCategoryFilters', [route.params.id]);

    },
    layout: 'category',
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
        return this.$store.getters['products/productByCategory'];
      },
    },
    beforeRouteLeave (to, from, next) {
      this.$cookies.set('armmall_filter', [], {
        path: '/',
        maxAge: 10 * 365 * 24 * 60 * 60
      });
      next();
    },
    methods:{
      next() {
        let cookieRes = this.$cookies.get('armmall_filter');
        if(cookieRes[2] === this.$route.params.id){
          cookieRes.push(this.page);
          this.$store.dispatch('products/FilterByCategory', cookieRes).then(r => {
          })
        }else{
          this.$router.push({ query: { page: this.page } });
        }
      }
    },
  }
</script>

<style scoped>

</style>
