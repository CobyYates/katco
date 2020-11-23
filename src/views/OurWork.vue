<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" sm="12" md="10" class="mx-auto">
        <v-carousel hide-delimiters continuous height="600" v-model="model">
          <v-carousel-item
            v-for="(item, i) in $store.state.work"
            :key="i"
            :src="`${item.img}`"
            reverse-transition="slide-x-reverse-transition"
            transition="slide-x-transition"
          >
            <v-sheet height="100" class="overlay" tile>
              <p></p>
              <v-row class="fill-height justify-space-between align-center">
                <v-col class="pl-7">
                  <div class="display-1 font-weight-light">{{ item.job }}</div>
                  <div class="subtitle font-weight-light">
                    {{ item.subtitle }}
                  </div>
                </v-col>
                <v-col class="d-flex justify-end">
                  <v-btn large class="mr-7" :color="$store.state.blue"
                    >View Project</v-btn
                  >
                </v-col>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
    <div>
      <v-row class="d-flex flex-row my-12">
        <v-col
          class="mx-auto"
          cols="10"
          sm="8"
          md="6"
          lg="3"
          xl="3"
          v-for="(item, i) in $store.state.work.filter((e, i) => i === model)[0]
            .images"
          :key="item.i"
        >
          <v-img
            @click="
              selectedImage = item.img;
              selectedIndex = i
              gallery = true;
            "
            class="images"
            contain
            :src="`${item.img}`"
          />
        </v-col>
      </v-row>
    </div>
    <v-dialog v-model="gallery" width="90vw">
      <v-card max-height="100%" max-width="100%">
        <v-carousel hide-delimiters continuous height="90vh" v-model="selectedIndex" value="selectedIndex">
          <v-carousel-item
            v-for="(item, i) in $store.state.work.filter((e, i) => i === model)[0]
            .images"
            class="carouselImg"
            :key="i"
            reverse-transition="slide-x-reverse-transition"
            transition="slide-x-transition"
          >
          <v-img :src="`${item.img}`" contain height="90%" class="ma-10"/>
          </v-carousel-item>
        </v-carousel>
        <!-- <v-img contain :src="`${selectedImage}`" max-height="90vh" /> -->
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      model: 0,
      gallery: false,
      selectedImage: null,
      selectedIndex: null,
      galleryModel: 0
    };
  },
  methods: {},
};
</script>

<style scoped>
.overlay {
  margin-top: 500px;
  background-color: rgba(29, 29, 29, 0.87);
}

.images {
  cursor: pointer;
}

.carouselImg {
  
}
</style>
