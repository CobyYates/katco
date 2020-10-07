<template>
  <v-container fluid>
    <v-row class="px-0">
      <v-col
        cols="12"
        sm="6"
        md="6"
        lg="3"
        xl="3"
        v-for="item in cards"
        :key="item.i"
        @mouseenter="item.hover = true"
        @mouseleave="item.hover = false"
      >
        <v-img height="500" :src="`${item.image}`">
          <v-overlay absolute :opacity="0.7" :color="`${item.color} darken-4`" v-if="item.hover === true" >
              <div>
                <p class="text-h5 text-center">{{ item.title }}</p>
                <p class="text-center mx-5">{{ item.text }}</p>
              </div>
          </v-overlay>
        </v-img>
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
          hover: false,
          color: 'orange',
          text: 'From digging for your new homes foundation to a new pool to complete your yard, we do it all.',
          image:
            "https://images.pexels.com/photos/2058729/pexels-photo-2058729.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
        {
          title: "Construction",
          hover: false,
          color: 'blue',
          text: 'Building a new home and need a contractor? We have the crew and expertise to build the home of your dreams.',
          image:
            "https://images.pexels.com/photos/209266/pexels-photo-209266.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
        {
          title: "Rock Walls",
          hover: false,
          color: 'orange',
          text: 'Whether your backyard is too steep or you just want a better looking backyard, we can create a solution that will suit you and your yards needs. Let us help you get some started.',
          image:
            "https://marketingplatform.vivial.net/sites/default/files/inline_images/Matthews-North-Carolina-landscaping-rock.jpg",
        },
        {
          title: "Problem Solving",
          hover: false,
          color: 'blue',
          text: 'Yards are not always easy to work with and they all come with different challenges. We specialize in ideating ideas to maximize your yard space to work for you.',
          image:
            "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
      ],
    };
  },
};
</script>

<style></style>
