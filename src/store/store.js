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
        subtitle: "lorem ipsum subtitle information about job",
        description:
          "lorem ipsum description of job and what it was the job accomplished",
        type: "Basement Excavation",
        images: [
          { img: "http://images.coberapps.com/mangus2.JPG" },
          { img: "http://images.coberapps.com/mangus3.JPG" },
          { img: "http://images.coberapps.com/mangus4.JPG" },
          { img: "http://images.coberapps.com/mangus5.JPG" },
          { img: "http://images.coberapps.com/mangus6.JPG" },
          { img: "http://images.coberapps.com/mangus7.JPG" },
          { img: "http://images.coberapps.com/mangus8.JPG" },
          { img: "http://images.coberapps.com/mangus9.JPG" },
          { img: "http://images.coberapps.com/mangus10.JPG" },
        ],
      },
      {
        img: "http://images.coberapps.com/mangus1.JPG",
        job: "Gunthers",
        subtitle: "lorem ipsum subtitle information about job",
        description:
          "lorem ipsum description of job and what it was the job accomplished",
        type: "Sewer Line Trench",
        images: [{ img: "" }],
      },
      {
        img: "http://images.coberapps.com/mangus1.JPG",
        job: "Sun Belt",
        subtitle: "lorem ipsum subtitle information about job",
        description:
          "lorem ipsum description of job and what it was the job accomplished",
        type: "Excavation for Pipe & Electrical",
        images: [{ img: "" }],
      },
      {
        img: "http://images.coberapps.com/woodlandhills2.JPG",
        job: "Woodland Hills",
        subtitle: "lorem ipsum subtitle information about job",
        description:
          "lorem ipsum description of job and what it was the job accomplished",
        type: "Rock Wall Landscaping",
        images: [{ img: "" }],
      },
      {
        img: "http://images.coberapps.com/americanfork1.jpg",
        job: "American Fork",
        subtitle: "lorem ipsum subtitle information about job",
        description:
          "lorem ipsum description of job and what it was the job accomplished",
        type: "Landscaping & Retaining Wall",
        images: [
          { img: "" },
          { img: "http://images.coberapps.com/americanfork1.jpg" },
          { img: "http://images.coberapps.com/americanfork3.jpg" },
          { img: "http://images.coberapps.com/americanfork4.jpg" },
          { img: "http://images.coberapps.com/americanfork5.jpg" },
        ],
      },
      {
        img: "http://images.coberapps.com/avenues1.JPG",
        job: "Avenues",
        subtitle: "lorem ipsum subtitle information about job",
        description:
          "lorem ipsum description of job and what it was the job accomplished",
        type: "Engineered Concrete Wall",
        images: [{ img: "" }],
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
