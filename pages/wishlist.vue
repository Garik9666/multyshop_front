<template>
    <v-container>
      <v-row>
        <v-col cols="12">
                  <v-data-table :headers="headers" :items="desserts" hide-default-footer class="elevation-1" >
                    <template v-slot:item.image="{ item }">
                      <v-img :src="item.image" :contain="true" width="100" height="100" ></v-img>
                    </template>
                    <template v-slot:item.count="{ item }">
                      <v-text-field type="number" placeholder="0" @change="cahngeCount(item)" v-model="item.count" style="max-width: 60px; margin: 0 auto !important; text-align: center" min="1" ></v-text-field>
                    </template>
                    <template v-slot:item.color="{ item }">
                      <v-card :color="item.color.toLowerCase()" class="d-flex text-center align-center mx-3" dark height="30" width="30" style="margin: 0 auto !important;" >
                      </v-card>
                    </template>
                    <template v-slot:item.addToCart="{ item }">
                      <v-icon  @click.stop="addTocart(item)">mdi-cart-outline</v-icon>
                    </template>
                    <template v-slot:item.remove="{ item }">
                      <v-icon  @click="deleteItem(item)">mdi-delete</v-icon>
                    </template>
                  </v-data-table>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
  var PhoneNumber = require( 'awesome-phonenumber' );
    export default {
      async fetch({store}){
        await store.dispatch('brands/fetch');
        await store.dispatch('wishListAndCart/fetch');
        if(this.user){
          await store.dispatch('wishListAndCart/getWishListAndCartData', [this.user.id]);
        }else{
          await store.dispatch('wishListAndCart/getWishListAndCartData', [0]);
        }
        await store.dispatch('menus/fetch');
      },
        name: "Wishlist",
      data () {
          return {
            headers: [
              { text: 'Image', value: 'image',  sortable: false,  align: 'start', },
              { text: 'Name',value: 'name',  sortable: false,  align: 'center', },
              { text: 'Size', value: 'size',  sortable: false,  align: 'center', },
              { text: 'Color', value: 'color',  sortable: false,  align: 'center', },
              { text: 'Count', value: 'count',  sortable: false,  align: 'center', },
              { text: 'Price', value: 'price',  sortable: false,  align: 'center', },
              { text: 'Add to cart', value: 'addToCart',  sortable: false,  align: 'center', },
              { text: 'Remove', value: 'remove',  sortable: false,  align: 'center', },
            ],
            desserts: [

            ],
          }
      },
      mounted() {
        this.wishListData.forEach(elem => {
          this.desserts.push({
            image: JSON.parse(elem.product.images)[0],
            name: elem.product.name,
            size: elem.size[0] !== undefined ? elem.size[0] : '',
            color: elem.color[0] !== undefined ? elem.color[0] : '',
            count: elem.count,
            price: elem.product.price,
            addToCart: elem.product.id,
            remove: 'mdi-delete',
          })
        });
      },
      methods: {
        async addTocart(item){
          console.log(item);
          let user_id = 0;
          if(this.user){
            user_id = this.user.id
          }
          await this.$store.dispatch('wishListAndCart/setCArt', [item.addToCart, user_id, item.color, item.size, item.count])
        },
        async cahngeCount(item) {
          const index = this.desserts.indexOf(item);
          let user_id = 0;
          if(this.user){
            user_id = this.user.id;
          }
          this.$store.dispatch('wishListAndCart/updateFromWhishList', [index, user_id, item.count]).then(() => {

          });
        },
        async deleteItem (item) {
          const index = this.desserts.indexOf(item);
          let user_id = 0;
          if(this.user){
            user_id = this.user.id;
          }
            this.desserts.splice(index, 1);
            await this.$store.dispatch('wishListAndCart/removeFromWhishList', [index, user_id]).then(() => {
            });
        },

      },
      computed: {
        wishListData() {
          return this.$store.getters['wishListAndCart/wishListData'];
        }
      }
    }
</script>

<style scoped>

</style>
