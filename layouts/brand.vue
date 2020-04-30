<template>
  <v-app dark>
    <v-navigation-drawer
      v-resize="onResize"
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      :right="right"
      fixed
      app
    >
      <v-list>

        <v-list-item

          v-for="(item, i) in rightSide"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-content >
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>

        <v-list-item

          v-for="(item, i) in leftSide"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-system-bar height="64" color="#01235E" fixed app dark >
      <v-row justify="end" class="hidden-sm-and-down" no-gutters >
        <v-menu :open-on-hover="true" bottom offset-y v-for="(item, i) in leftSide" dark :key="i">
          <template v-slot:activator="{ on }">
            <v-btn :to="item.to" router exact color="#fff" text class="my-2 nav_button" v-on="on" bottom >
              {{item.title}}
            </v-btn>
          </template>
          <v-list style="background-color: #01235E">
            <v-list-item v-for="(item, index) in items" :key="index" @click="" >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>


      </v-row>
      <v-spacer />
      <nuxt-link to="/" style="text-decoration: none;">
        <v-toolbar-title class="font-weight-bold" style="color: #b20839; font-size: 35px" to="/" v-text="title" />
      </nuxt-link>
      <v-spacer />
      <v-row justify="start" class="hidden-sm-and-down" no-gutters >

        <v-menu :open-on-hover="true" bottom offset-y v-for="(item, i) in rightSide" dark :key="i">
          <template v-slot:activator="{ on }">
            <v-btn :to="item.to" router exact color="#fff" text class="my-2 nav_button" v-on="on" bottom >
              {{item.title}}
            </v-btn>
          </template>
          <v-list style="background-color: #01235E">
            <v-list-item v-for="(item, index) in items" :key="index" @click="" >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-row>
      <v-row justify="end" class="hidden-sm-and-down" no-gutters style="position: absolute; right: 0" >
        <v-badge color="error" content="6" >
          <v-btn color="#fff" text class="my-2 nav_button" width="50px" to="/wishlist" >
            <v-icon>mdi-heart-outline</v-icon>
          </v-btn>
        </v-badge>
        <v-badge color="error" content="6" >
          <v-btn color="#fff" text class="my-2 nav_button" width="50px" to="/cart" >
            <v-icon >mdi-cart-outline</v-icon>
          </v-btn>
        </v-badge>
        <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="200" offset-x >
          <template v-slot:activator="{ on }">
            <v-btn color="#fff" text class="my-2 nav_button" v-on="on" >
              <v-icon >mdi-account-outline</v-icon>
            </v-btn>
          </template>
          <v-card>
            <v-tabs background-color="deep-purple accent-4" class="elevation-2" dark :centered="true" :prev-icon="'mdi-arrow-left-bold-box-outline'" :next-icon="'mdi-arrow-right-bold-box-outline'" :icons-and-text="true" >
              <v-tabs-slider></v-tabs-slider>

              <v-tab :href="`#tab-1`" >
                Login
              </v-tab>

              <v-tab-item :value="'tab-1'">
                <v-card flat tile >
                  <v-card-text>
                    <v-form ref="form" v-model="valid" :lazy-validation="true" >

                      <v-text-field v-model="email" :rules="emailRules" label="E-mail" required ></v-text-field>
                      <v-text-field v-model="password" :rules="passwordRules" label="Password" required ></v-text-field>

                      <v-checkbox v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']" label="Do you agree?" required ></v-checkbox>
                    </v-form>
                  </v-card-text>
                </v-card>
              </v-tab-item>

              <v-tab :href="`#tab-2`" >
                Register
              </v-tab>

              <v-tab-item :value="'tab-2'">
                <v-card flat tile >
                  <v-card-text>
                    <v-form ref="form" v-model="valid" :lazy-validation="true" >
                      <v-text-field v-model="name" :rules="nameRules" label="Name" required ></v-text-field>

                      <v-text-field v-model="email" :rules="emailRules" label="E-mail" required ></v-text-field>
                      <v-text-field v-model="password" :rules="passwordRules" label="Password" required ></v-text-field>
                      <v-checkbox v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']" label="Do you agree?" required ></v-checkbox>
                    </v-form>
                  </v-card-text>
                </v-card>
              </v-tab-item>

            </v-tabs>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="menu = false">Submit</v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>

      </v-row>
      <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="drawer = !drawer" />

    </v-system-bar>
    <v-app-bar :clipped-left="clipped"  color="#b20839" app dark >
          <v-row justify="center" class="hidden-sm-and-down" no-gutters >
            <v-menu :open-on-hover="true" bottom offset-y v-for="(item, i) in leftSide" dark :key="i">
              <template v-slot:activator="{ on }">
                <v-btn :to="item.to" router exact color="#fff" text class="my-2 nav_button" v-on="on" bottom >
                  {{item.title}}
                </v-btn>
              </template>
              <v-list style="background-color: #b20839">
                <v-list-item v-for="(item, index) in items" :key="index" @click="" >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
            <v-menu :open-on-hover="true" bottom offset-y v-for="(item, i) in rightSide" dark :key="i">
              <template v-slot:activator="{ on }">
                <v-btn :to="item.to" router exact color="#fff" text class="my-2 nav_button" v-on="on" bottom >
                  {{item.title}}
                </v-btn>
              </template>
              <v-list style="background-color: #b20839">
                <v-list-item v-for="(item, index) in items" :key="index" @click="" >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-row>
        </v-app-bar>
    <Filters></Filters>
    <v-content>
      <nuxt />
    </v-content>

    <MainDividers></MainDividers>
    <v-footer app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
  import MainDividers from "../components/MainDividers";
  import Filters from "../components/Filters";
  export default {
    components: {
      MainDividers,
      Filters
    },
    data () {
      return {
        valid: true,
        password: '',
        passwordRules: [
          v => !!v || 'Password is required',
        ],
        name: '',
        nameRules: [
          v => !!v || 'Name is required',
        ],
        email: '',
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        checkbox: false,
        clipped: true,
        drawer: false,
        fixed: false,
        fav: true,
        menu: false,
        message: false,
        hints: true,
        leftSide: [
          { title: 'For Man',
            to: '/'
          },
          { title: 'For Woman',
            to: '/'
          }
        ],
        rightSide: [
          {
            title: 'Shoos',
            to: '/'
          },
          {
            title: 'Accessories',
            to: '/'
          }
        ],
        items: [
          { title: 'Click Me' },
          { title: 'Click Me' },
          { title: 'Click Me' },
          { title: 'Click Me 2' },
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Dalmar',
        windowSize: {
          x: 0,
          y: 0,
        },
      }
    },
    mounted () {
      this.onResize()
    },

    methods: {
      onResize () {
        if(window.innerWidth >= 960){
          this.drawer = false;
        }
        this.windowSize = { x: window.innerWidth, y: window.innerHeight }
      },
    },
  }
</script>
<style>
  a{
    text-decoration: none;
  }
  .theme--dark.v-system-bar .v-icon {
    color: rgb(255, 255, 255);
    font-size: 24px;
  }
  body{
    overflow-x: hidden;
  }
  .nav_button{
    /*background-color: #ccc;*/
    color: #b20839;
  }
  .theme--dark.v-btn--active:hover::before, .theme--dark.v-btn--active::before {
    opacity: 0;
  }
  .v-badge__wrapper{
    left: -25px;
    top: 25px;
  }
</style>
