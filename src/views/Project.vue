<template>
  <v-container
    v-if="project !== null"
    class="d-flex flex-column justify-center"
    fluid
  >
    <v-row class="justify-center container px-0 mx-auto pt-12 mt-6">
      <v-col cols="12" sm="12" md="7" lg="8" xl="9" class="px-0">
        <v-img
          max-width="100%"
          height="100%"
          max-height="50vh"
          class="pb-0"
          :src="`${project[0].img}`"
        />
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
        <p class="mb-0" :style="`color: ${$store.state.blue}`">TYPE</p>
        <div>
          <v-chip :class="i == 0 ? 'my-1 mr-1' : 'mx-1 my-1'" v-for="(item,i) in project[0].type" :key="item.i" label>
            {{ item }}
          </v-chip>
        </div>
        <p class="mb-0" :style="`color: ${$store.state.blue}`">LOCATION</p>
        <p>{{ project[0].location }}</p>
        <p class="mb-0" :style="`color: ${$store.state.blue}`">DETAILS</p>
        <p>{{ project[0].description }}</p>
      </v-col>
    </v-row>
    <v-divider class="py-2" />
    <v-row class="flex-row pt-0 mb-12">
      <v-col
        v-for="(image, i) in project[0].images"
        :key="image.i"
        cols="12"
        :sm="image.pano ? '12' : '6'"
        :md="image.pano ? '12' : '4'"
        :lg="image.pano ? '12' : '3'"
        :xl="image.pano ? '12' : '3'"
      >
        <!-- :class="image.pano ? '' : 'px-2'" -->
        <v-img
          :src="`${image.img}`"
          :key="image.key"
          :width="image.pano ? '100%' : '400'"
          height="400"
          @click="
            display(image);
            selectedImage = image.img;
            selectedIndex = i;
            gallery = true;
          "
          class="mx-auto image"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
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
            <v-img
              :src="`${item.alt ? item.alt : item.img}`"
              contain
              height="90%"
              class="ma-10"
            />
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
      console.log("image", image.img);
    },
  },
  mounted() {
    this.project = this.$store.state.work.filter(
      (e) => e.job == this.$route.params.project
    );
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1600px;
}
.image {
  cursor: pointer;
}
</style>
