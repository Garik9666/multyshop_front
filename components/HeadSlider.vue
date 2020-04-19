<template>
  <v-carousel
    cycle
    height="750"
    :hide-delimiters="true"
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
      :src="slide.src"
    >

        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="display-3" :style="{color: slide.color}">{{ slide.text }} Slide</div>
        </v-row>

    </v-carousel-item>
  </v-carousel>
</template>


<script>
  export default {
    data () {
      return {
        slides: [
          {text: 'First', src: '/slider_1.jpg', color: '#ffffff'},
          {text: 'Second', src: '/slider_2.jpg', color: '#ffffff'},
          {text: 'Third', src: '/slider_3.jpg', color: '#ffffff'},
          {text: 'Fourth', src: '/slider_4.jpg', color: '#ffffff'},
        ],
      }
    },
  }
</script>
