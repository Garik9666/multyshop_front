<template>
    <div>
      <v-container>
        <v-row justify="center">
          <v-col md="8" sm="12">
            <v-row>
              <v-col cols="8">
                <v-row>
                  <v-col cols="6">
                    <v-img
                      src="/men.jpg"
                      max-height="280"
                    >
                    </v-img>
                  </v-col>
                  <v-col cols="6">
                    <v-img
                      src="/women.jpg"
                      position="top"
                      max-height="280"
                    >
                    </v-img>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-img
                      src="/shouse_red.jpg"
                      :contain="true"
                    >
                    </v-img>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="4" class="longImage">
                    <v-img
                      src="/accessories.jpg"
                      height="100%"

                    >
                    </v-img>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

      </v-container>
    </div>
</template>

<script>
    export default {
        name: "MiddleBanner"
    }
</script>

<style scoped>
  .longImage{
    padding-top: 25px;
    padding-bottom: 25px;
  }
</style>
