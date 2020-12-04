<template>
  <v-container
    v-if="project !== null"
    class="d-flex flex-column justify-center"
    fluid
  >
    <v-row class="justify-center container mx-auto pt-0">
      <v-col cols="12" sm="12" md="7" lg="8" xl="9">
        <v-img max-width="100%" max-height="100%" class="pb-0" :src="`${project[0].img}`" />
      </v-col>
      <v-col
        cols="12"
        sm="12"
        md="5"
        lg="4"
        xl="3"
        class="d-flex flex-column justify-space-between"
      >
        <h1>{{ project[0].title.toUpperCase() }}</h1>
        <p>{{ project[0].subtitle }}</p>
        <p class="blue--text">SIZE</p>
        <p>{{ project[0].size }}</p>
        <p class="blue--text">TYPE</p>
        <p>{{ project[0].type }}</p>
        <p class="blue--text">LOCATION</p>
        <p>{{ project[0].location }}</p>
        <p class="blue--text">DETAILS</p>
        <p>{{ project[0].description }}</p>
      </v-col>
    </v-row>
    <v-divider class="py-2" />
    <v-row class="flex-row mx-auto pt-0">
      <v-col
        v-for="(image, i) in project[0].images"
        :key="image.i"
        cols="6"
        sm="6"
        md="4"
        lg="3"
        xl="3"
      >
        <v-img
          :src="`${image.img}`"
          :key="image.key"
          width="400"
          @click="
            display(image)
            selectedImage = image.img;
            selectedIndex = i;
            gallery = true;
          "
        />
      </v-col>
    </v-row>

    <v-dialog v-model="gallery" width="auto">
      <v-card height="auto" width="auto">
        <v-carousel
          hide-delimiters
          continuous
          height="70vh"
          v-model="selectedIndex"
          value="selectedIndex"
        >
          <v-carousel-item
            v-for="(item, i) in project[0].images"
            class="carouselImg"
            :key="i"
            reverse-transition="slide-x-reverse-transition"
            transition="slide-x-transition"
          >
            <v-img :src="`${item.img}`" contain height="90%" class="ma-10" />
          </v-carousel-item>
        </v-carousel>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      project: null,
      model: 0,
      gallery: false,
      selectedImage: null,
      selectedIndex: null,
    };
  },
  methods: {
    display(image) {
      console.log('image',image.img)
    }
  },
  mounted() {
    this.project = this.$store.state.work.filter(
      (e) => e.job == this.$route.params.project
    );
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1600px;
}
</style>
