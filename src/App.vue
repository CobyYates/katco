<template>
  <v-app>
    <v-row class="nav">
      <v-col class="mx-auto" xl="10" lg="10" md="12" sm="12" cols="12">
        <v-row>
          <v-col
            class="d-flex align-center justify-space-between py-0"
            xl="6"
            lg="6"
            md="6"
            sm="11"
            cols="12"
          >
            <v-img
              height="100"
              width="100"
              class="mb-3 logo"
              contain
              @click="home"
              src="./assets/Katco Logo.png"
            />
            <p class="my-auto">UTAH COUNTY CONSTRUCTION CONTRACTOR</p>
          </v-col>
          <!-- <v-col
            xl="4"
            lg="10"
            md="12"
            sm="12"
            cols="12"></v-col> -->
            <v-spacer />
          <v-col
            class="d-flex align-center justify-space-around py-0 px-0"
            xl="6"
            lg="6"
            md="6"
            sm="10"
            cols="12"
          >
            <router-link class="links" to="/our_work">Our Work</router-link>
            <router-link class="links" to="/">lorem ipsum</router-link>
            <router-link class="links" to="/contact">Contact</router-link>
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
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({}),

  methods: {
    home(){
      this.$router.push("/");
    }
  }
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
  max-height: 30px!important;
}

.logo {
  cursor: pointer;
}
</style>