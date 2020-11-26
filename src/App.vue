<template>
  <v-app>
    <v-row class="nav">
      <v-col class="mx-auto" xl="10" lg="10" md="12" sm="12" cols="12">
        <v-row>
          <v-col
            class="d-flex align-center justify-start py-0"
            xl="6"
            lg="6"
            md="6"
            sm="11"
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
            <p class="my-auto">UTAH COUNTY CONSTRUCTION CONTRACTOR</p>
          </v-col>
          <v-spacer />
          <v-col
            class="d-flex align-center justify-end py-0 px-0"
            xl="6"
            lg="6"
            md="6"
            sm="10"
            cols="12"
          >
            <router-link class="links mx-5" to="/our_work">Our Work</router-link>
            <router-link class="links mx-5" to="/contact">Contact</router-link>
            <a href="tel:801-647-1003" class="tel mx-5"><v-btn color="blue" dark>(801) 647-1003</v-btn></a>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="pb-0">
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

  data: () => ({}),

  methods: {
    home() {
      this.$router.push("/");
    },
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
</style>
