<template>
  <v-container fluid class="px-0">
    <v-row class="px-0">
      <v-col
        cols="12"
        sm="6"
        md="6"
        lg="3"
        xl="3"
        v-for="item in cards"
        :key="item.i"
      >
        <v-img
          height="500"
          class="cta"
          :src="`${item.image}`"
          @mouseenter="item.hover = true"
          @mouseleave="item.hover = false"
        >
          <v-overlay
            absolute
            :opacity="0.7"
            :color="`${item.color} darken-4`"
            v-if="item.hover === true"
          >
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
          color: "orange",
          text:
            "From digging for your new homes foundation to a new pool to complete your yard, we do it all.",
          image:
            "https://images.pexels.com/photos/2058729/pexels-photo-2058729.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
        {
          title: "Commercial / Residential Builder",
          hover: false,
          color: "blue",
          text:
            "Building a new office or home and need a contractor? We have the crew and expertise to build the home of your dreams.",
          image:
            "https://images.pexels.com/photos/209266/pexels-photo-209266.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
        {
          title: "Retaining / Landscaping Walls",
          hover: false,
          color: "orange",
          text:
            "Whether your backyard is too steep or you just want a better looking backyard, we can create a solution that will suit you and your yards needs. Let us help you get some started.",
          image:
            "https://marketingplatform.vivial.net/sites/default/files/inline_images/Matthews-North-Carolina-landscaping-rock.jpg",
        },
        {
          title: "Concrete Polishing",
          hover: false,
          color: "blue",
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
.cta {
  cursor: pointer;
}
</style>
