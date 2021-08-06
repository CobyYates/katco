<template>
  <v-container fluid class="pt-0">
    <v-row>
      <v-col class="pt-0 mb-12 px-0">
        <v-img
          class="parralax mx-0 px-0"
          height="50vh"
          min-width="100vw"
          src="https://images.pexels.com/photos/912124/pexels-photo-912124.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        >
          <v-overlay absolute color="grey">
            <v-row
              class="fill-height flex-column justify-center align-center"
            >
              <h2 class="display-4 font-weight-bold carouselHeader">
                Our Work
              </h2>
            </v-row>
          </v-overlay>
        </v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex justify-center">
        <h2 class="display-1 mb-12">SELECT PROJECT TO VIEW</h2>
      </v-col>
    </v-row>
    <v-row class="mx-auto img-gallery">
      <v-col
        v-for="n in $store.state.work"
        :key="n.i"
        class="d-flex justify-center"
        cols="12"
        sm="6"
        md="4"
        lg="3"
        xl="3"
      >
        <v-hover>
          <template v-slot:default="{ hover }">
            <v-img
              :src="`${n.img}`"
              :lazy-src="`${n.img}`"
              aspect-ratio="1"
              max-width="300"
              class="grey lighten-2 img"
              @click="openProject(n.job)"
            >
              <v-fade-transition>
                <v-overlay
                  v-if="hover"
                  absolute
                  opacity=".3"
                  class="d-flex justify-start align-end"
                >
                  <div id="overlay">
                    <h1 class="white--text pl-4 font-weight-light">
                      {{ n.job }}
                    </h1>
                    <h3 class="blue--text pl-4">
                      {{ n.location }}
                    </h3>
                  </div>
                </v-overlay>
              </v-fade-transition>
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </template>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    openProject(project) {
      this.$router.push(`/project/${project}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.img {
  position: relative;
  cursor: pointer;
}

.img-gallery {
  max-width: 1400px;
}

#overlay {
  min-width: 300px;
  height: 90px;
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0),
    rgb(39, 39, 39)
  );
}

.parralax {
  max-width: 1600px;
}

.hero {
  height: 600px !important;
  padding-top: 200px !important;
}

.carouselHeader {
  color: #0094b7;
  text-shadow: 3px 3px 3px #0000004d;
}

.carouselSubheader {
  color: #3a3a3a;
  text-shadow: 3px 3px 3px #0000004d;
}
</style>
