<template>



  <v-sheet
    class="mx-auto"
  >
    <v-slide-group
      v-model="model"
    >
      <v-slide-item
        v-for="(slide, i) in slides"
        :key="i"
      >
          <v-card
            :color="slide.color"
            class="ma-4"
            width="33%"
            min-width="500"
            to="/brand/polo"
          >
            <v-img
              :aspect-ratio="16/9"
              :src="slide.src"
            >
            </v-img>
          </v-card>

      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
  export default {
    data: () => ({
      model: null,
      slides: [
        {text: 'US Polo', src: '/uspolo.jpg', color: '#ffffff'},
        {text: 'Second', src: '/giordano.jpg', color: '#000000'},
        {text: 'US Polo', src: '/uspolo.jpg', color: '#ffffff'},
        {text: 'Second', src: '/giordano.jpg', color: '#000000'},
      ],
    }),
  }
</script>
