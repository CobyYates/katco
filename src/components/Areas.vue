<template>
  <v-container fluid>
      <v-row>
          <v-col>
              <p class="text-center text-h4">Areas We Serve</p>
          </v-col>
      </v-row>
    <v-row >
      <v-col cols="10" sm="12" md="10" lg="11" xl="11" class="mx-auto" v-for="item in areas" :key="item.i">
        <p class="headline text-center">{{ item.county }} County</p>
        <div class="d-flex justify-center flex-wrap mx-10">
          <p v-for="area in item.areas" :key="area.i" class="d-flex text-no-wrap">
            <v-icon color="orange">mdi-map-marker</v-icon>{{ area.city }}
          </p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      areas: [
        {
          county: "Utah",
          areas: [
            { city: "Alpine" },
            { city: "American Fork" },
            { city: "Cedar Hills" },
            { city: "Eagle Mountain" },
            { city: "Highland" },
            { city: "Lehi" },
            { city: "Lindon" },
            { city: "Mapleton" },
            { city: "Orem" },
            { city: "Pleasant Grove" },
            { city: "Provo" },
            { city: "Saratoga Springs" },
            { city: "Spanish Fork" },
            { city: "Springville" },
          ],
        },
        {
          county: "Salt Lake",
          areas: [
            { city: "Bluffdale" },
            { city: "Cottonwood Heights" },
            { city: "Draper" },
            { city: "Herriman" },
            { city: "Holladay" },
            { city: "Midvale" },
            { city: "Millcreek" },
            { city: "Murray" },
            { city: "Riverton" },
            { city: "Salt Lake City" },
            { city: "Sandy" },
            { city: "South Jordan" },
            { city: "South Salt Lake" },
            { city: "Taylorsville" },
            { city: "West Jordan" },
          ],
        },
      ],
    };
  },
};
</script>

<style></style>
