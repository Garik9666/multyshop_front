<template>
  <v-hover >
    <v-card
      color="grey lighten-4"
      class="ma-4"
      width="270"
      height="350"
    >
      <nuxt-link :to="`/product/${id}`">
      <v-img
        :aspect-ratio="16/9"
        :src="image"
        cover
        height="100%"
      >
      </v-img>
      </nuxt-link>
      <v-slide-y-reverse-transition>
        <v-card-text
          class="pt-6"
          style="position: absolute; bottom: 0; background-color: #f39513; height: 80px"
        >
          <v-btn
            absolute
            color="#ea5a21"
            class="white--text"
            fab
            right
            top
            @click="addToCart($event, product.id)"
          >
            <v-icon>mdi-cart</v-icon>
          </v-btn>
          <v-btn
            absolute
            color="#ea5a21"
            class="white--text"
            fab
            top
            style="right: 90px"
            @click="addToWishlist($event, product.id)"
          >
            <v-icon>mdi-heart</v-icon>
          </v-btn>
          <nuxt-link to="/product/jinsGray">
          <h3 class=" font-weight-light font-weight-bold white--text mb-2">{{title}}</h3>
          <p class="price white--text"><span class="font-weight-bold">Price</span> {{price}} AMD</p>
          </nuxt-link>
        </v-card-text>
      </v-slide-y-reverse-transition>
    </v-card>
  </v-hover>
</template>

<script>
    export default {
        props: ['image', 'id', 'title', 'price'],
        name: "productCard",

      methods: {
        addToWishlist(e, id) {
          this.$store.dispatch('wishListAndCart/setWishList', [id])
        },
        addToCart(e, id) {
          this.$store.dispatch('wishListAndCart/setCArt', [id])
        }
      },
    }
</script>

<style scoped>

</style>
