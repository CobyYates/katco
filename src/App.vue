<template>
  <v-app>
    <v-app-bar fixed elevation="0" class="appBar">
      <v-row class="nav mx-auto">
        <v-col
          class="d-flex align-center justify-start py-0"
          xl="6"
          lg="6"
          md="6"
          sm="10"
          cols="12"
        >
          <v-app-bar-nav-icon
            class="ham"
            v-if="mobile == true"
            @click.stop="drawer = !drawer"
          ></v-app-bar-nav-icon>
          <svg xmlns="http://www.w3.org/2000/svg" width="80" viewBox="0 0 355.108 213.036" class="mr-2" @click="home">
            <g id="Group_6" data-name="Group 6" transform="translate(-939.381 -422.611)">
              <g id="Group_5" data-name="Group 5" transform="translate(998.032 422.611)">
                <g id="Group_3" data-name="Group 3" transform="translate(0 0)">
                  <g id="Group_1" data-name="Group 1" transform="translate(109.264)">
                    <path id="Path_1" data-name="Path 1" d="M4207.881,1729.2a43.58,43.58,0,0,0-15.2-10.69,48.062,48.062,0,0,0-11.854-3.249l21.359,18.912Z" transform="translate(-4106.67 -1618.723)" fill="#009bbf"/>
                    <path id="Path_2" data-name="Path 2" d="M3259.282,485.915V459.29h-1.775V457.36h1.775v-1.931h-23.452v1.931h1.775v1.931h-1.775v5.85q-24-21.265-48.011-42.529V453.5q36.188,32.017,72.36,64.056a49.206,49.206,0,0,1,14.178,3.577,45.083,45.083,0,0,1,16.159,11.55l.468.517-6.613,5.776,5.686,5.034a45.04,45.04,0,0,1,14.038-18.4Z" transform="translate(-3187.818 -422.611)" fill="#009bbf"/>
                  </g>
                  <g id="Group_2" data-name="Group 2">
                    <path id="Path_3" data-name="Path 3" d="M1761.312,1697.965l-1.578,1.4a.487.487,0,0,0-.138.111h-34.858l1.7-1.508Z" transform="translate(-1724.738 -1602.721)" fill="none"/>
                    <path id="Path_4" data-name="Path 4" d="M1855.122,422.611v30.877q-36.365,32.184-72.7,64.367h-34.871Q1801.35,470.26,1855.122,422.611Z" transform="translate(-1745.847 -422.611)" fill="#009bbf"/>
                  </g>
                  <rect id="Rectangle_1" data-name="Rectangle 1" width="0.453" height="30.566" transform="translate(109.139 0.315)" fill="#009bbf"/>
                </g>
                <g id="Group_4" data-name="Group 4" transform="translate(78.083 95.207)">
                  <path id="Path_5" data-name="Path 5" d="M3575.219,1765.38a8.725,8.725,0,0,1-1.621,1.564,17.134,17.134,0,0,1-6.023,3.59,20.481,20.481,0,0,1-6.719,1.159,19.471,19.471,0,0,1-7.643-1.564,18.34,18.34,0,0,1-6.6-4.806,17.127,17.127,0,0,1-3.767-5.966,19.131,19.131,0,0,1-1.214-6.66,18.357,18.357,0,0,1,1.621-7.414,18.056,18.056,0,0,1,4.632-6.37,19.648,19.648,0,0,1,12.742-4.749,20.335,20.335,0,0,1,7.76,1.564,19.209,19.209,0,0,1,6.834,4.807l18.3-15.984a42.306,42.306,0,0,0-15.231-10.888,45.881,45.881,0,0,0-17.78-3.59,44.642,44.642,0,0,0-29.187,11,42.356,42.356,0,0,0-10.772,14.537,41.077,41.077,0,0,0-.811,32.2,43.572,43.572,0,0,0,8.454,13.609,45.9,45.9,0,0,0,15.174,10.424,44.2,44.2,0,0,0,17.49,3.706,45.532,45.532,0,0,0,29.653-11,18.465,18.465,0,0,0,1.448-1.332q.868-.87,1.736-1.8c.581-.617,1.139-1.255,1.682-1.911s.965-1.216,1.274-1.679l-20.27-14.016A14.41,14.41,0,0,1,3575.219,1765.38Z" transform="translate(-3461.09 -1709.13)" fill="#3a3a3a"/>
                  <path id="Path_6" data-name="Path 6" d="M4611.74,1724.044a43.575,43.575,0,0,0-23.166-23.166,43.838,43.838,0,0,0-33.936,0,43.574,43.574,0,0,0-23.166,23.166,43.829,43.829,0,0,0,0,33.937,43.573,43.573,0,0,0,23.166,23.166,43.838,43.838,0,0,0,33.936,0,43.575,43.575,0,0,0,23.166-23.166,43.829,43.829,0,0,0,0-33.937Zm-22.934,24.034a19.079,19.079,0,0,1-3.88,5.85,18.385,18.385,0,0,1-20.153,3.938,18.379,18.379,0,0,1-9.788-9.788,18.265,18.265,0,0,1,3.937-20.154,19.108,19.108,0,0,1,5.852-3.88,18.53,18.53,0,0,1,14.362,0,17.975,17.975,0,0,1,9.671,9.671,18.529,18.529,0,0,1,0,14.363Z" transform="translate(-4396.784 -1697.461)" fill="#3a3a3a"/>
                  <path id="Path_7" data-name="Path 7" d="M2770.3,1740.9h16.794v59.651h24.323V1740.9h16.681v-24.324h-57.8Z" transform="translate(-2770.297 -1715.15)" fill="#3a3a3a"/>
                </g>
              </g>
              <text id="Construction" transform="translate(939.381 634.647)" fill="#3a3a3a" font-size="36" font-family="Yeysk-Regular, Yeysk"><tspan x="0" y="0">Construction</tspan></text>
              <path id="Path_8" data-name="Path 8" d="M1050.612,1717.468h-34.857q-16.7,14.795-33.408,29.589c-.024.048-.06.06-.072.084v-29.854h-24.3v83.87h24.3v-29.39l.259-.155h0l-.26.155,29.42,29.421h34.36l-.032-.032-17.778-17.778-24.491-24.491-.006,0-.069.044h-.005l.08-.048q13.167-11.66,26.343-23.322l.021-.018,17.764-15.722-.021.071Z" transform="translate(-17.21 -1197.989)" fill="#3a3a3a"/>
              <path id="Path_9" data-name="Path 9" d="M2008.763,1718.156h-27.289l-21.1,68.3,15.537,15.537h3.948l2.544-9.944h25.324l2.659,9.944h24.283Zm-18.5,50.418,4.858-19.311,4.741,19.311Z" transform="translate(-944.741 -1198.793)" fill="#3a3a3a"/>
              <line id="Line_1" data-name="Line 1" x1="3.83" transform="translate(1028.845 603.2)" fill="none"/>
            </g>
          </svg>

          <p v-if="mobile == false" class="my-auto">
            UTAH CONSTRUCTION CONTRACTOR
          </p>
        </v-col>
        <v-spacer />
        <v-col
          class="d-flex align-center justify-end py-0 px-0"
          xl="6"
          lg="6"
          md="6"
          sm="2"
          cols="12"
        >
          <router-link v-if="mobile === false" class="links mx-5" to="/work"
            >Our Work</router-link
          >
          <!-- <router-link v-if="mobile === false" class="links mx-5" to="/contact"
            >Contact</router-link
          > -->
          <a v-if="mobile === false" href="tel:801-647-1003" class="tel mx-5"
            ><v-btn :color="$store.state.blue" dark>(801) 647-1003</v-btn></a
          >
        </v-col>
      </v-row>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary color="blue">
      <v-list dark nav dense>
        <v-list-item-group
          v-model="group"
          active-class="white--text text--accent-4"
        >
          <v-list-item dark to="/work">
            <v-list-item-title>Our Work</v-list-item-title>
          </v-list-item>

          <v-divider />

          <v-list-item dark to="/contact">
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item>

          <v-divider />
          <v-spacer />

          <a href="tel:801-647-1003" class="tel mx-5"
            ><v-btn dark width="80%">(801) 647-1003</v-btn></a
          >
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-row>
      <v-col class="d-flex pb-0 pt-0">
        <v-main>
          <router-view />
        </v-main>
      </v-col>
    </v-row>

    <Footer />
  </v-app>
</template>

<script>
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Footer,
  },
  methods: {
    myEventHandler(e) {
      e.currentTarget.innerWidth < "960"
        ? (this.mobile = true)
        : (this.mobile = false);
    },
    home() {
      this.$router.push("/");
    },
  },
  data: () => ({
    mobile: false,
    drawer: false,
    group: null,
  }),
  watch: {
    group() {
      this.drawer = false;
    },
  },
  created() {
    // window.addEventListener("resize", this.myEventHandler);
  },
  mounted() {
    // window.innerWidth < 960 ? (this.mobile = true) : (this.mobile = false);
  },
  destroyed() {
    // window.removeEventListener("resize", this.myEventHandler);
  },
};
</script>

<style scoped>
.links {
  list-style: none;
  text-decoration: none;
  color: #2883b6;
}

.nav {
  max-width: 1500px;
}

::v-deep .divider {
  max-height: 30px !important;
}

.logo {
  cursor: pointer;
}

.tel {
  list-style: none;
  text-decoration: none;
}

/* .ham {
  position: absolute;
  right: 25px;
  top: 30px;
} */

.appBar {
  background: rgba(255, 255, 255, 0.651) !important;
}

svg {
  cursor: pointer;
}
</style>
