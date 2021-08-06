<template>
  <v-container fluid class="px-0 mt-12">
    <v-row class="px-0">
      <v-col cols="4" class="mx-auto" v-for="review in reviews" :key="review.i">
        <v-card rounded elevation="8" :color="$store.state.blue" height="auto">
          <p class="white--text body-1 pa-10">"{{ review.review }}"</p>
        </v-card>
        <div class="text-center">
          <!-- <v-avatar class="mx-auto" size="70">
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" />
          </v-avatar> -->
          <v-rating
            v-model="review.rating"
            color="yellow darken-3"
            background-color="grey darken-1"
            empty-icon="$ratingFull"
            disabled
          ></v-rating>
          <p class="title font-weight-bold">{{ review.name }}</p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      reviews: [
        {
          name: 'Picaro',
          rating: 5,
          review: 'Kary did some complex excavation for us and brought down a hundred year old tree for us...It was amazing to see how much he could accomplish in such little time. Kary has been doing this kind of thing practically his whole life and it shows. He also understands design concepts and was able to give us some great ideas. This company is very busy because they are good. They are worth waiting for if you want a fantastic job done.'
        },
        // {
        //   image: "",
        //   name: "John Smith",
        //   review:
        //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel suscipit est. Fusce hendrerit, urna et lacinia molestie, dolor ipsum suscipit neque, at rutrum est dui non leo. Donec sagittis consectetur euismod. Proin sit amet augue id enim finibus finibus ut a lectus. Duis suscipit lectus ac interdum rhoncus. Vivamus mollis felis enim, nec facilisis neque rhoncus lacinia.",
        // },
        // {
        //   image: "",
        //   name: "John Smith",
        //   review:
        //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel suscipit est. Fusce hendrerit, urna et lacinia molestie, dolor ipsum suscipit neque, at rutrum est dui non leo. Donec sagittis consectetur euismod. Proin sit amet augue id enim finibus finibus ut a lectus. Duis suscipit lectus ac interdum rhoncus. Vivamus mollis felis enim, nec facilisis neque rhoncus lacinia.",
        // },
      ],
    };
  },
};
</script>

<style scoped>
.cls-1 {
  fill: red;
  /* fill: #6acfe6; */
}

.cls-2 {
  filter: url(#Subtraction_1);
}
</style>
