<template>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      fixed
      app
      :clipped="true"
    >
      <v-list-item class="px-2 mt-3">

        <v-list-item-title class="display-1 font-weight-bold">ArmMall</v-list-item-title>
        <v-btn icon @click.stop="mini = !mini" >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list>

        <v-list-item class="px-2 mt-3" v-for="(item, i) in items" :key="i" :to="item.url">

          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>
<script>
  export default {
    data () {
      return {
        drawer: true,
        items: [
          {text: 'Brands', icon: 'mdi-tag-multiple', url: '/dashboard/brands'},
          {text: 'Categories', icon: 'mdi-view-module', url: '/dashboard/categories'},
          {text: 'Menu', icon: 'mdi-wrap', url: '/dashboard/menu'},
          {text: 'Products', icon: 'mdi-webpack', url: '/dashboard/products'},
          {text: 'Components', icon: 'mdi-shape-plus', url: '/dashboard/components'},
          {text: 'Settings', icon: 'mdi-cog', url: '/dashboard/settings'},
        ],
        select: [],
        mini: false,
      }
    },
  }
</script>
