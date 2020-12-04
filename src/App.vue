<template>
  <v-app>
    <template>
      <v-app-bar-nav-icon
        class="ham"
        v-if="mobile == true"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>

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
    </template>
    <v-row class="nav">
      <v-col class="mx-auto" xl="10" lg="10" md="12" sm="12" cols="12">
        <v-row>
          <v-col
            class="d-flex align-center justify-start py-0"
            xl="6"
            lg="6"
            md="6"
            sm="10"
            cols="12"
          >
            <!-- height="100" -->
            <v-img
              max-width="150"
              class="logo pl-0"
              contain
              @click="home"
              src="./assets/Katco Logo.png"
            />
            <p v-if="mobile == false" class="my-auto">
              UTAH COUNTY CONSTRUCTION CONTRACTOR
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
            <router-link
              v-if="mobile === false"
              class="links mx-5"
              to="/work"
              >Our Work</router-link
            >
            <router-link
              v-if="mobile === false"
              class="links mx-5"
              to="/contact"
              >Contact</router-link
            >
            <a v-if="mobile === false" href="tel:801-647-1003" class="tel mx-5"
              ><v-btn color="blue" dark>(801) 647-1003</v-btn></a
            >
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex pb-0">
        <v-main>
          <router-view />
        </v-main>
      </v-col>
    </v-row>

    <Footer  />
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
    window.addEventListener("resize", this.myEventHandler);
  },
  mounted() {
    window.innerWidth < 960 ? (this.mobile = true) : (this.mobile = false);
  },
  destroyed() {
    window.removeEventListener("resize", this.myEventHandler);
  },
};
</script>

<style scoped>
.links {
  list-style: none;
  text-decoration: none;
}

.nav {
  max-height: 80px;
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

.ham {
  position: absolute;
  right: 25px;
  top: 30px;
}
</style>
