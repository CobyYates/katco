<template>
  <v-container fluid class="px-0 mt-12 contain">
    <v-row>
      <v-col class="text-center mb-12">
        <h2 class="display-1">WHAT WE DO</h2>
      </v-col>
    </v-row>
    <v-row class="px-0">
      <v-col
        cols="12"
        sm="6"
        md="6"
        lg="3"
        xl="3"
        class="d-flex justify-center"
        v-for="item in cards"
        :key="item.i"
      >
      <v-card
        height="400"
        elevation="0"
        width="350"
        tile
      >
        <v-img height="200" :src="`${item.image}`"/>
        <v-card-text>
          <p class="text-h4 text-center black--text cardTitle">{{ item.title }}</p>
          <p class="body-1 text-center mx-5 font-weight-medium">{{ item.text }}</p>
        </v-card-text>
      </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          title: "Excavation",
          text:
            "From digging for your new homes foundation to a new pool to complete your yard, we do it all.",
          image:
            "https://images.pexels.com/photos/2058729/pexels-photo-2058729.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
        {
          title: "Construction",
          text:
            "Building a new office or home and need a contractor? We have the crew and expertise to build the home of your dreams.",
          image:
            "https://images.pexels.com/photos/209266/pexels-photo-209266.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
        {
          title: "Landscaping",
          text:
            "Whether your backyard is too steep or you just want a better looking backyard, we can create a solution that will suit you and your yards needs. Let us help you get some started.",
          image:
            "http://images.coberapps.com/avenues1.JPG",
        },
        {
          title: "Concrete Polishing",
          text:
            "From basements to commercial projects, we can make your concrete floors shine to your liking.",
          image:
            "https://images.unsplash.com/photo-1563724718319-78dc40028132?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        },
      ],
    };
  },
};
</script>

<style scoped>
.cardTitle {
  color: #0094B7!important;
}
</style>
