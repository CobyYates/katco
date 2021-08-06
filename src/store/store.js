import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    blue: "#0094B7",
    work: [
      {
        img: "http://images.coberapps.com/GalleryLarge/mangus1.jpg",
        job: "Mangus Residence",
        title: "Mangus Residence",
        location: "Pleasant Grove, UT",
        subtitle:
          "New residence for the Mangus Family. Dealt with a difficult lot.",
        description:
          "Katco excavated for the 4,500 sq ft home and installed block walls due to the height of the lot. Also hooked up sewer and water to the home.",
        type: ["Excavation", "Concrete Block Walls", "Retaining Wall"],
        images: [
          {
            img: "http://images.coberapps.com/GalleryLarge/mangus5.jpg",
            pano: true,
          },
          {
            img: "http://images.coberapps.com/GalleryLarge/mangus6.jpg",
            pano: true,
          },
          {
            img: "http://images.coberapps.com/GallerySmall/mangus2.jpg",
            alt: "http://images.coberapps.com/GalleryLarge/mangus2.jpg",
          },
          {
            img: "http://images.coberapps.com/GallerySmall/mangus3.jpg",
            alt: "http://images.coberapps.com/GalleryLarge/mangus3.jpg",
          },
          {
            img: "http://images.coberapps.com/GallerySmall/mangus4.jpg",
            alt: "http://images.coberapps.com/GalleryLarge/mangus4.jpg",
          },
          {
            img: "http://images.coberapps.com/GallerySmall/mangus7.jpg",
            alt: "http://images.coberapps.com/GalleryLarge/mangus7.jpg",
          },
          {
            img: "http://images.coberapps.com/GallerySmall/mangus8.jpg",
            alt: "http://images.coberapps.com/GalleryLarge/mangus8.jpg",
          },
          // { img: "http://images.coberapps.com/GallerySmall/mangus9.jpg" },
          {
            img: "http://images.coberapps.com/GallerySmall/mangus10.jpg",
            alt: "http://images.coberapps.com/GalleryLarge/mangus10.jpg",
          },
        ],
      },
      {
        img: "http://images.coberapps.com/GallerySmall/Gunthers_1.jpg",
        job: "Amazon Building",
        title: "Amazon Building",
        location: "West Valley, UT",
        subtitle: "Excavation of plumbing lines.",
        description: "Excavation of plumbing lines.",
        type: "Sewer Line Trench",
        images: [
          {
            img: "http://images.coberapps.com/GallerySmall/Gunthers_1.jpg",
            alt: "http://images.coberapps.com/GalleryLarge/Gunthers_1.jpg",
          },
          {
            img: "http://images.coberapps.com/GallerySmall/Gunthers_2.jpg",
            alt: "http://images.coberapps.com/GalleryLarge/Gunthers_2.jpg",
          },
          {
            img: "http://images.coberapps.com/GallerySmall/Gunthers_3.jpg",
            alt: "http://images.coberapps.com/GalleryLarge/Gunthers_3.jpg",
          },
          {
            img: "http://images.coberapps.com/GallerySmall/Gunthers_4.jpg",
            alt: "http://images.coberapps.com/GalleryLarge/Gunthers_4.jpg",
          },
          {
            img: "http://images.coberapps.com/GallerySmall/Gunthers_5.jpg",
            alt: "http://images.coberapps.com/GalleryLarge/Gunthers_5.jpg",
          },
        ],
      },
      // {
      //   img: "http://images.coberapps.com/GalleryLarge/mangus1.jpg",
      //   job: "Sun Belt",
      //   title: "Sun Belt",
      //   location: "Provo, UT",
      //   subtitle: "lorem ipsum subtitle information about job",
      //   description:
      //     "lorem ipsum description of job and what it was the job accomplished",
      //   type: "Excavation for Pipe & Electrical",
      //   images: [{ img: "http://images.coberapps.com/mangus1.JPG" }],
      // },
      {
        img: "http://images.coberapps.com/woodlandhills4.jpg",
        job: "Thompson Residence",
        title: "Thompson Residence",
        location: "Woodland Hills, UT",
        subtitle: "Designed and placed rock walls and paths.",
        description: `We esigned and placed rock walls and paths to make the yard a place for the family instead of a large vertical wall. 
          The Thompsons were frustrated with the previous design and we proposed the current design which they quickly approved.
          Katco also made the driveway work better for backing up trailers.`,
        type: ["Retaining Wall", "Design", "Pathways", "Patios", "Driveway"],
        images: [
          {
            img: "http://images.coberapps.com/GalleryLarge/woodlandhills1.jpg",
            pano: true,
          },
          {
            img: "http://images.coberapps.com/GallerySmall/woodlandhills2.jpg",
            alt: "http://images.coberapps.com/GalleryLarge/woodlandhills2.jpg",
          },
          {
            img: "http://images.coberapps.com/GallerySmall/woodlandhills3.jpg",
            alt: "http://images.coberapps.com/GalleryLarge/woodlandhills3.jpg",
          },
          {
            img: "http://images.coberapps.com/GallerySmall/woodlandhills4.jpg",
            alt: "http://images.coberapps.com/GalleryLarge/woodlandhills4.jpg",
          },
          {
            img: "http://images.coberapps.com/GallerySmall/woodlandhills5.jpg",
            alt: "http://images.coberapps.com/GalleryLarge/woodlandhills5.jpg",
          },
          {
            img: "http://images.coberapps.com/GalleryLarge/woodlandhills6.jpg",
          },
          {
            img: "http://images.coberapps.com/GallerySmall/woodlandhills7.jpg",
          },
          {
            img: "http://images.coberapps.com/GallerySmall/woodlandhills8.jpg",
            alt: "http://images.coberapps.com/GalleryLarge/woodlandhills8.jpg",
          },
        ],
      },
      {
        img: "http://images.coberapps.com/americanfork1.jpg",
        job: "Metal Wall Redesign",
        title: "Metal Wall Redesign",
        location: "Pleasant Grove, UT",
        subtitle: "Redesign of back yard with a metal wall to hold back the dirt for fence.",
        description:
          "We added a retaining wall accross their entire back yard built from metal. They requested we burry their trampline and landscape their side yard as well as the back yard to be ready for grass.",
        type: ["Landscaping","Retaining Wall","Addition Excavation"],
        images: [
          { img: "http://images.coberapps.com/americanfork1.jpg" },
          { img: "http://images.coberapps.com/americanfork3.jpg" },
          { img: "http://images.coberapps.com/americanfork4.jpg" },
          { img: "http://images.coberapps.com/americanfork5.jpg" },
        ],
      },
      {
        img: "http://images.coberapps.com/GallerySmall/avenues1.jpg",
        job: "Avenues",
        title: "Avenues",
        location: "Salt Lake City, UT",
        subtitle: "Excavation for new addition and construction of block walls.",
        description:
          "We excavated for a new addition to the rear of the residence. We redesigned and placed a concrete block wall to make the addition fit with a pathway for access to the back yard.",
        type: "Engineered Concrete Wall",
        images: [
          { img: "http://images.coberapps.com/GallerySmall/avenues1.jpg" },
        ],
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
