<template>
  <div class="home">
    <v-row>
      <v-col class="mx-auto px-0 mx-0" xl="10" lg="10" md="12">
        <v-img
          src="https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          height="700"
          class="px-0 mx-0"
        />
        <v-row>
          <v-col class="mx-auto" cols="12" sm="10" md="8" lg="7" xl="6">
            <v-card
              elevation="10"
              width="100%"
              class="pa-5 cta mx-auto text-center"
              tile
              :color="$store.state.blue"
              dark
            >
              <p class="mb-1 subtitle-1 font-weight-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut
              </p>
              <v-card-actions class="my-auto">
                <v-btn class="mx-auto">contact us</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="10" class="mx-auto px-0">
        <WorkCards />
      </v-col>
    </v-row>

    <v-row class="mt-12 align-center">
      <v-col>
        <v-card
          height="300"
          class="mx-0 ex d-flex"
          tile
          flat
          :color="$store.state.blue"
        >
          <v-overlay absolute :opacity="0.3">
            <v-row>
              <v-col cols="5" xl="5" class="d-flex justify-center align-center">
                <p class="text-h1 white--text text-center">
                  <span class="font-weight-black">30</span>+ Years Experience
                </p>
              </v-col>
              <v-col cols="6" class="mx-auto d-flex align-center">
                <p class="mb-1 title white--text font-weight-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut
                </p>
              </v-col>
            </v-row>
          </v-overlay>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <Areas />
      </v-col>
    </v-row>

    <v-row class="mt-12">
      <v-col cols="12" sm="12" md="6" class="px-0 pb-0">
        <Location />
      </v-col>
      <v-col cols="12" sm="12" md="6" class="px-0 pb-0">
        <v-card
          flat
          :color="$store.state.blue"
          tile
          dark
          width="100%"
          height="100%"
          class="d-flex flex-column justify-center align-center mb-0"
        >
          <p class="headline">Phone: (801)-647-1003</p>
          <p class="headline">Email: contact@katco.com</p>
          <p class="headline">
            Address: 2624 N 1550 W Pleasant Grove, UT 84003
          </p>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src
import WorkCards from "../components/WorkCards";
import Location from "../components/Location";
import Areas from "../components/Areas";

export default {
  name: "Home",
  components: {
    WorkCards,
    Location,
    Areas,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.cta {
  margin-top: -60px;
}

.ex {
  $grid: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NUY1RjdCNkVFOTkyMTFFMjhGMDdFMEEyQjQ0NDQ1RjYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NUY1RjdCNkZFOTkyMTFFMjhGMDdFMEEyQjQ0NDQ1RjYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1RjVGN0I2Q0U5OTIxMUUyOEYwN0UwQTJCNDQ0NDVGNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1RjVGN0I2REU5OTIxMUUyOEYwN0UwQTJCNDQ0NDVGNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgQ7RJEAAABkSURBVHjaYvj//z8DEDtDaRAWpwebEWQpAwODIBC/Z4AA+rAHysdMDAMEWIBYHOp9caiYKJI8zdggi19Cw/8lkiTN2aNBPRrUo0E9GtSjQT0a1KNBPRrUo0E9GtSjQU05GyDAAD0qLnnflqfDAAAAAElFTkSuQmCC");

  $lightBlue: rgba(40, 131, 182, 1);
  $darkBlue: rgba(8, 70, 136, 1);

  color: white;

  background-color: #2883b6;
  background-image: $grid;

  background-image: $grid,
    -webkit-radial-gradient(center, ellipse cover, $lightBlue 0%, $darkBlue 100%);
  background-image: $grid,
    -moz-radial-gradient(center, ellipse cover, $lightBlue 0%, $darkBlue 100%);
  background-image: $grid,
    -o-radial-gradient(center, ellipse cover, $lightBlue 0%, $darkBlue 100%);
  background-image: $grid,
    -ms-radial-gradient(center, ellipse cover, $lightBlue 0%, $darkBlue 100%);
  background-image: $grid,
    radial-gradient(ellipse at center, $lightBlue 0%, $darkBlue 100%);

  background-repeat: repeat;
  background-repeat: repeat, no-repeat;

  min-height: 100%;
  min-width: 100%;
}
</style>
