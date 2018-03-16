<template>
  <v-container id="request">

    <v-container grid-list-xs fluid align-center justify-center>
      <form class="request-form blurred-bg tinted" @submit.prevent="getPath" action='#' method="GET">
        <!-- <div class="blur"></div> -->
        <!-- Left Form -->
        <v-layout row>
          <v-flex xs6>
            <section class="request-form-left ui massive form push_up">
              <v-layout row wrap>
                <!-- CHAMP DEPART -->
                <v-flex xs11 class="field push_up">
                  <label for="depart">Départ</label>
                  <input type="text" name="depart" v-model="query.depart" placeholder="Adresse de départ">
                </v-flex>

                <!-- CHAMP ARRIVEE -->
                <v-flex xs11 class="field push_up">
                  <label for="arrivee">Arrivée</label>
                  <input type="text" name="arrivee" v-model="query.arrivee" placeholder="Adresse d'arrivée">
                </v-flex>

                <!-- CHAMP OPTIONS -->
                <div class="request-form-options">
                  <label> Options:</label>
                  <br>
                  <div class="ui icon buttons">
                    <div class="ui toggle big active button">
                      <i class="big bus icon"></i>
                    </div>
                    <div class="ui toggle big active button">
                      <i class="big subway icon"></i>
                    </div>
                    <div class="ui toggle big active button">
                      <i class="big male icon"></i>
                    </div>
                    <div class="ui toggle big button">
                      <i class="big child icon"></i>
                    </div>
                    <div class="ui toggle big button">
                      <i class="big handicap icon"></i>
                    </div>
                  </div>
                </div>

                <!-- CHAMP FACTEURS  -->
                <div class="request-form-factors grouped fields">
                  <label class="push_down push_up">Facteurs:</label>
                  <br>
                  <select name="factors" class="ui fluid dropdown">
                    <option value="min_temps">Minimum de temps</option>
                    <option value="min_changement">Minimum de correspondance</option>
                    <option value="min_depense">Minimum de dépense</option>
                    <option value="min_marche">Minimum de marche</option>
                  </select>
                </div>
              </v-layout>
            </section>
          </v-flex>

          <!-- RIGHT FORM -->
          <v-flex xs6>
            <section class="request-form-right">
              <!-- TODO : add a dimmer while map is loading -->
              <!-- <div class="ui inverted dimmer">
              <div class="ui text loader">Loading</div>
            </div> -->
              <div class="map container">
                <google-map name="request" class="google-map"></google-map>
              </div>
              <div class="center-button">
                <button type="submit" class="ui huge brown button">Avoir le Chemin</button>
              </div>
            </section>
          </v-flex>

        </v-layout>
      </form>
    </v-container>

  </v-container>
</template>



<script>
  /*  eslint-disable */
  import MapSection from "../components/MapSection"

  export default {
    name: 'about',
    components: {
      "google-map": MapSection
      // put custom components here
    },
    data() {
      return {
        // put variables here
        query: {
          depart: "",
          arrivee: "",
          options: {},
          facteurs: {}
        }
      }
    },
    mounted() {
      $("#sidebar").sidebar('setting', 'dimPage', 'false')
      $('.ui.checkbox').checkbox();
      $('.ui.dropdown').dropdown();
      $('.ui.button.toggle').state();
    },
    methods: {
      testClick(e) {
        console.log("click")
      },
      getPath(event) {
        console.log("Push")
        // this.router.push("response")
      }
    }
  }

</script>

<style lang="scss" scoped>
  $background: url("../assets/img/bg4.jpg"); // $blurred-img: url("https://lh3.googleusercontent.com/-m8TxQMObg6c/U474EWu7Y9I/AAAAAAAAI2k/xkRGoIEC1iU/s1600/blur.jpg");
  $blurred-img: url("../assets/img/blur_bg.jpg");

  #request {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    max-width: 100%;
    display: flex;
    color: black;
    background: $background no-repeat;
    background-size: cover;
    background-attachment: fixed;
  }

  .blurred-bg {
    background: url($blurred-img) fixed center;
    background-repeat: no-repeat;
    background-size: 100vw auto;
    background-position: fixed;
    background-attachment: fixed;

    &.tinted {
      // background-image: $blurred-img;
      background: $blurred-img, -webkit-linear-gradient(0deg, rgba(255, 255, 255, .2), rgba(255, 255, 255, .2)) fixed center;
      background-repeat: no-repeat;
      background-position: fixed;
      background-size: cover;
      background-attachment: fixed;
    }
  }

  @import '../assets/css/form-layout.scss';

  .push_down {
    margin-bottom: 30px;
  }

  .push_up {
    margin-top: 30px;
  }

  .center-button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .map {
    overflow: hidden;
    position: relative;
    padding: 0;
    margin: 20px;
    width: 100%;
    height: 60%;
    border: 1px solid black;

    .google-map {
      position: relative;
      width: 100%;
      height: 100%;
    }
  }

</style>
