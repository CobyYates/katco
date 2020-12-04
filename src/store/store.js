import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    blue: "#3f78af",
    work: [
      {
        img: "http://images.coberapps.com/mangus1.JPG",
        job: "Mangus",
        title: "Mangus Home",
        location: "Pleasant Grove, UT",
        size: "20,000 cubic feet of dirt",
        subtitle: "Excavation of sloped lot for a home in Pleasant Grove.",
        description:
          "Katco excavated the basement for the home to be built. Katco also excavated and installed sewer and water up to the house, backfilled after the walls were completed and prepped the garage and driveway.",
        type: "Basement Excavation",
        images: [
          { img: "http://images.coberapps.com/mangus2.JPG" },
          { img: "http://images.coberapps.com/mangus3.JPG" },
          { img: "http://images.coberapps.com/mangus4.JPG" },
          { img: "http://images.coberapps.com/mangus7.JPG" },
          { img: "http://images.coberapps.com/mangus8.JPG" },
          { img: "http://images.coberapps.com/mangus9.JPG" },
          { img: "http://images.coberapps.com/mangus10.JPG" },
          { img: "http://images.coberapps.com/mangus5.JPG" },
          { img: "http://images.coberapps.com/mangus6.JPG" },
        ],
      },
      {
        img: "http://images.coberapps.com/mangus1.JPG",
        job: "Gunthers",
        title: "Gunthers",
        location: "Lehi, UT",
        size: "",
        subtitle: "lorem ipsum subtitle information about job",
        description:
          "lorem ipsum description of job and what it was the job accomplished",
        type: "Sewer Line Trench",
        images: [{ img: "http://images.coberapps.com/mangus1.JPG" }],
      },
      {
        img: "http://images.coberapps.com/mangus1.JPG",
        job: "Sun Belt",
        title: "Sun Belt",
        location: "Provo, UT",
        size: "",
        subtitle: "lorem ipsum subtitle information about job",
        description:
          "lorem ipsum description of job and what it was the job accomplished",
        type: "Excavation for Pipe & Electrical",
        images: [{ img: "http://images.coberapps.com/mangus1.JPG" }],
      },
      {
        img: "http://images.coberapps.com/woodlandhills4.jpg",
        job: "Belliston",
        title: "Belliston",
        location: "Woodland Hills",
        size: "",
        subtitle: "lorem ipsum subtitle information about job",
        description:
          "lorem ipsum description of job and what it was the job accomplished",
        type: "Rock Wall Landscaping",
        images: [
          { img: "http://images.coberapps.com/woodlandhills1.JPG" },
          { img: "http://images.coberapps.com/woodlandhills2.JPG" },
          { img: "http://images.coberapps.com/woodlandhills3.JPG" },
        ],
      },
      {
        img: "http://images.coberapps.com/americanfork1.jpg",
        job: "American Fork",
        title: "American Fork",
        location: "American Fork",
        size: "",
        subtitle: "lorem ipsum subtitle information about job",
        description:
          "lorem ipsum description of job and what it was the job accomplished",
        type: "Landscaping & Retaining Wall",
        images: [
          { img: "http://images.coberapps.com/americanfork1.jpg" },
          { img: "http://images.coberapps.com/americanfork3.jpg" },
          { img: "http://images.coberapps.com/americanfork4.jpg" },
          { img: "http://images.coberapps.com/americanfork5.jpg" },
        ],
      },
      {
        img: "http://images.coberapps.com/avenues1.JPG",
        job: "Avenues",
        title: "Avenues",
        location: "Salt Lake City, UT",
        size: "",
        subtitle: "lorem ipsum subtitle information about job",
        description:
          "lorem ipsum description of job and what it was the job accomplished",
        type: "Engineered Concrete Wall",
        images: [{ img: "http://images.coberapps.com/avenues1.JPG" }],
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
