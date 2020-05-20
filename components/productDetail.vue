<template>
  <div class="mt-3">
    <v-row>
      <v-col md="6" sm="12">
        <v-carousel
          :continuous="false"
          :cycle="cycle"
          hide-delimiter-background
          delimiter-icon="mdi-minus"
          show-arrows-on-hover
          height="100%"
          style="max-height: 600px;"
        >
          <v-carousel-item
            v-for="(slide, i) in JSON.parse(product.images)"
            :key="i"
            :src="slide"
            top
          >
          </v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col md="6" sm="12">
        <h2 class="text-center">{{product.name}}</h2>
        <v-col md="12" lg="12">
          <p>
            {{product.description}}
          </p>
          <div class="mt-5">
            <p class="ma-0">Colors</p>
            <v-item-group
              :multiple="true"
            >
              <v-row>
                <v-item  v-for="(color, n) in productColors" :key="n" v-slot:default="{ active, toggle }">
                  <v-card
                    :color="color.toLowerCase()"
                    class="d-flex text-center align-center mx-3"
                    dark
                    height="30"
                    width="30"
                    @click="toggle"
                  >
                    <v-scroll-y-transition>
                      <v-icon
                        v-if="active"
                        color="white"
                        size="20"
                        v-text="'mdi-close-circle-outline'"
                        class="mx-auto"
                      ></v-icon>
                    </v-scroll-y-transition>
                  </v-card>
                </v-item>
              </v-row>
            </v-item-group>
          </div>
          <div class="mt-5">
            <p class="ma-0">Sizes</p>
            <v-item-group
              :multiple="true"
            >
              <v-row>
                <v-item  v-for="(size, n) in productSizes" :key="n" v-slot:default="{ active, toggle }">
                  <v-card
                    class="d-flex text-center align-center mx-3 justify-center"
                    :color="active? 'green' : '#fff'"
                    height="30"
                    width="30"
                    @click="toggle"
                  >
                    {{size}}
                  </v-card>
                </v-item>
              </v-row>
            </v-item-group>
          </div>

          <div class="mt-5 pl-0">
            <p class="ma-0">Count</p>
            <v-col cols="2" class="pl-0">
              <v-text-field
                type="number"
                placeholder="0"
              ></v-text-field>
            </v-col>
          </div>
          <div class="pl-0">
            <p class="ma-0">
              <span>
                Price: {{product.price}} AMD
              </span>
            </p>
          </div>
          <div class="mt-5 pl-0">
            <div class="text-left">
              <v-btn  color="#e60000" rounded dark>Buy</v-btn>
              <v-btn
                color="#ea5a21"
                class="white--text"
                rounded
              >
                <v-icon left>mdi-cart</v-icon> Cart
              </v-btn>
              <v-btn
                color="#ff0057"
                class="white--text"
                rounded
              >
                <v-icon left>mdi-heart</v-icon> Wish list
              </v-btn>
            </div>
          </div>
        </v-col>

      </v-col>
    </v-row>
  </div>
</template>
<script>

  export default {
    data () {
      return {
        productColors: [],
        productSizes: [],
        cycle: false,
      }
    },
    mounted() {
      this.product.product_color.forEach(elem => {
        this.productColors.push(elem.color)
      });
      this.product.product_size.forEach(elem => {
        this.productSizes.push(elem.name)
      });
    },
    computed: {
      product() {
        return this.$store.getters['products/product'];
      }
    },
  }
</script>
