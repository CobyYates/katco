<template>
  <v-container fluid class="home py-0 px-0">
    <v-row class="mt-0">
      <v-col class="mx-auto px-0 mx-0 pt-0" sm="12">
        <v-carousel
          continuous
          cycle
          class="pt-0 mt-0"
          height="90vh"
          v-model="model"
        >
          <v-carousel-item v-for="item in images" :key="item">
            <v-img
              :src="`${item.image}`"
              :style="`opacity: ${item.opacity}`"
              class="text-center"
              height="90vh"
            >
              <v-overlay
                absolute
                :opacity="item.overlay"
                value="true"
                color="white"
              >
                <v-row
                  class="fill-height flex-column justify-center align-center"
                >
                  <h2 class="display-4 font-weight-bold carouselHeader">
                    {{ item.title }}
                  </h2>
                  <h3
                    :class="
                      `display-2 font-weight-bold carouselSubheader ${item.subcolor}--text`
                    "
                  >
                    {{ item.subtitle }}
                  </h3>
                  <v-btn
                    :color="$store.state.blue"
                    class="mt-12"
                    to="/work"
                    elevation="8"
                    x-large
                    >View Projects</v-btn
                  >
                </v-row>
              </v-overlay>
            </v-img>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>


    <v-row>
      <v-col cols="10" class="mx-auto px-0">
        <WorkCards />
      </v-col>
    </v-row>

    <div class="blueprint">
      <v-row class="contain mx-auto py-12">
        <v-col cols="12" sm="" md="" lg="6" class="">
          <v-img
            class=""
            src="http://images.coberapps.com/woodlandhills4.jpg"
            :aspect-ratio="8 / 7"
          />
        </v-col>
        <v-col
          cols="12"
          sm=""
          md=""
          lg="6"
          class="pa-0 d-flex align-space-between"
        >
          <v-row>
            <v-col cols="6" v-for="item in blueprintImages" :key="item.i">
              <v-img
                :aspect-ratio="4 / 3"
                width="100%"
                height="100%"
                :src="item.img"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>

    <v-row class="grey lighten-2 pa-10">
      <v-col cols="9" class="mx-auto px-0">
        <h2 class="display-1 text-center">ABOUT US</h2>
        <p class="title font-weight-light mt-5">{{about}}</p>
      </v-col>
    </v-row>

    <v-row class="px-0 justify-center">
      <v-col class="contain mx-0 px-0">
        <Reviews />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import WorkCards from "../components/WorkCards";
import Reviews from "../components/Reviews";

export default {
  name: "Home",
  components: {
    WorkCards,
    Reviews,
  },
  data() {
    return {
      mobile: false,
      about: `We have 40+ years of experience from all walks of life, including simple remodels to large multi 
      million dollar projects, manufacturing to large industrial plants. We come with outside the box thinking if needed with fresh 
      ideas and design when needed to solve small problems or complex problems. With each of our projects we have come up with unique 
      ideas to save time, money and design that make our clients go from frustrated with typical design to excited about change.`,
      images: [
        {
          image:
            "https://images.pexels.com/photos/534228/pexels-photo-534228.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          title: "Construction Services",
          subtitle: "Residential and Commercial",
          opacity: 0.9,
          overlay: 0.3,
        },
        {
          image: "http://images.coberapps.com/Carousel/excavation.jpg",
          title: "Excavation",
          subtitle: "Residential and Commercial",
          opacity: 1,
          overlay: 0.1,
        },
        {
          image: "http://images.coberapps.com/woodlandhills7.jpg",
          title: "Landscaping",
          subtitle: "Concrete and Rock Walls",
          subcolor: "white",
          opacity: 1,
          overlay: 0.2,
        },
        {
          image:
            "https://www.questmarkflooring.com/media/promos/solutions/shipping_area_polish.jpg",
          title: "Concrete Polishing",
          subtitle: "Commercial and Residencial",
          subcolor: "white",
          opacity: 0.9,
          overlay: 0.1,
        },
      ],
      blueprintImages: [
        { img: "http://images.coberapps.com/mangus7.JPG" },
        { img: "http://images.coberapps.com/GallerySmall/mangus11.jpg" },
        { img: "http://images.coberapps.com/GallerySmall/avenues1.jpg" },
        { img: "http://images.coberapps.com/GallerySmall/woodlandhills8.jpg" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.tel a {
  text-decoration: none;
  color: white;
}

.carouselHeader {
  color: #0094b7;
  text-shadow: 3px 3px 3px #0000004d;
}

.carouselSubheader {
  color: #3a3a3a;
  text-shadow: 3px 3px 3px #0000004d;
}

.blueprint {
  background-image: url("http://images.coberapps.com/Blueprints@2x.jpg");
}

.contain:first-child {
  max-width: 1500px;
}
</style>
