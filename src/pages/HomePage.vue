<template>
  <v-app id="app">
    <v-content align-center justify-center fill-heigh>
        <full-page :options='fullPageOptions' fill-heigh>
          <welcome-page  :class='"section"'/>
          <request-page  :class='"section"'/>
          <info-page :class='"section"'/>
        </full-page>
    </v-content>

    <!-- <v-footer app>
      <span>&copy; SPUF 2018</span>
    </v-footer> -->

  </v-app>
</template>

<script>
/* eslint-disable */
import WelcomePage from "./welcomePage";
import RequestPage from "./RequestPage";
import InfoPage from "./InfoTransportPage";
import FullPage from "vue-fullpage.js/src/FullPage";

export default {
  name: "app",
  components: {
    "welcome-page": WelcomePage,
    "request-page": RequestPage,
    "info-page": InfoPage,
    "full-page": FullPage
  },
  data() {
    return {
      fullPageOptions: {
        // scrollBar: true,
        navigation: true,
        sectionsColor: ["#41b883", "#41b883", "#41b883"]
      }
    };
  },
  computed: {},
  methods: {},
  beforeMount() {
    // Destory FullPage to instanciate it again
    if ($("html").hasClass("fp-enabled")) {
      $.fn.fullpage.destroy("all");
    }
  },
  mounted() {
    console.log("home page mounted");
  },
  beforeDestroy() {
    if ($("html").hasClass("fp-enabled")) {
      $.fn.fullpage.destroy("all");
    }
  }
};
</script>

<style lang="scss">
$background: url("../assets/img/bg2.jpg");
#app {
  margin: 0;
  border: 0;
  height: 100%;
  width: 100%;
}

.section {
  position: relative;
  height: 100%;
  max-height: 100%;
  width: 100%;
  max-width: 100%;
  padding: 0;
  background: $background no-repeat;
  background-size: cover;
  background-repeat: no-repeat;
  // background-attachment: fixed;
}

</style>
