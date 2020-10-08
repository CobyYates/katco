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
                  <div class="subtitle font-weight-light">{{ item.subtitle }}</div>
                </v-col>
                <v-col class="d-flex justify-end">
                  <v-btn large class="mr-7" :color="$store.state.blue">View Project</v-btn>
                </v-col>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
    <!-- <v-row class="justify-space-between">
      <v-col> -->
      <div
        class="d-flex flex-row justify-space-between flex-wrap"
        v-for="item in $store.state.work.filter((e, i) => i === model)[0].images"
        :key="item.i"
      >
        <v-img max-height="200" contain :src="`${item.img}`" />
      </div>
      <!-- </v-col>
    </v-row> -->
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      model: 0,
    };
  },
  methods: {
    
  }
};
</script>

<style scoped>
.overlay {
  margin-top: 500px;
  background-color: rgba(29, 29, 29, 0.87);
}
</style>
