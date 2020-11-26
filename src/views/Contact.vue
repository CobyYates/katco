<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="" sm="" lg="" xl="12">
        <v-form v-model="valid" @submit.prevent="sendEmail">
          <v-row class="d-flex flex-column justify-center mt-12">
          <p class="mx-auto">Please fill out the form and we will contact you soon.</p>
            <v-col cols="12" sm="8" md="6" lg="5" xl="4" class="mx-auto">

              <v-text-field
                v-model="name"
                :rules="nameRules"
                name="name"
                label="Name"
                id="name"
                solo
                hide-details
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="8" md="6" lg="5" xl="4" class="mx-auto">
              <v-text-field
                v-model="email"
                :rules="emailRules"
                name="email"
                label="E-mail"
                id="email"
                solo
                hide-details
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="8" md="6" lg="5" xl="4" class="mx-auto">
              <v-textarea
                v-model="message"
                :rules="messageRules"
                name="message"
                label="Message"
                itemid="message"
                solo
                hide-details
                required
              ></v-textarea>
            </v-col>
            <v-btn type="submit" color="blue" dark width="250" class="mx-auto"
              >Submit</v-btn
            >
          </v-row>
        </v-form>
      </v-col>
    </v-row>
      {{screenWidth}}
  </v-container>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  computed: {
    screenWidth: () => {
      var x = window.matchMedia("(max-width: 700px)")
      console.log(x)
      // return width
    }
  },
  data: () => ({
    valid: false,
    title: process.env.VUE_APP_TITLE,
    name: "",
    message: "",
    nameRules: [(v) => !!v || "Name is required"],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
    messageRules: [(v) => !!v || "Message is required"],
  }),
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm('service_jdge3me', 'template_t7tlvka', e.target, 'user_1irsmfJtdu2XdLNebOuqt')
      } catch(error) {
          console.log({error})
      }
      // Reset form field
    //   this.name = ''
    //   this.email = ''
    //   this.message = ''
    },
  }
};
</script>

<style scoped></style>
