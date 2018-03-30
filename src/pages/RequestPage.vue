<template>
  <v-container id="request">

    <v-container grid-list-xs fluid align-center justify-center>
      <form class="request-form blurred-bg tinted" @submit.prevent="getPath" action='#' method="GET">
        <!-- <div class="blur"></div> -->
        <!-- Left Form -->
        <v-layout row wrap>
          <v-flex xs12 md6>
            <section class="request-form-left ui massive form push_up">
              <v-layout row wrap>
                <!-- CHAMP DEPART -->
                <v-flex xs11 class="field">
                  <v-form>
                    <v-text-field box name="depart" label="Départ" placeholder="Adresse de départ" v-model="query.depart"></v-text-field>
                    <!-- CHAMP ARRIVEE -->
                    <v-text-field box name="arrivee" label="Arrivée" placeholder="Adresse d'arrivée" v-model="query.arrivee"></v-text-field>
                    <!-- CHAMP OPTIONS -->
                    <v-layout row wrap class="options">
                      <v-flex xs6 class="options-moyens">
                        <v-container>
                        
                          <v-btn fab class="moyens-btn-active">
                            <v-icon large>directions_bus</v-icon>
                          </v-btn>
                          <br>
                          <v-btn fab class="moyens-btn-active">
                            <v-icon large>directions_railway</v-icon>
                          </v-btn>
                          <br>
                          <v-btn fab class="moyens-btn-active">
                            <v-icon large>directions_walk</v-icon>
                          </v-btn>
                        </v-container>
                      </v-flex>

                      <v-flex xs6 class="options-facteurs">

                      </v-flex>

                    </v-layout>
                  </v-form>
                </v-flex>

              </v-layout>



              <!-- CHAMP FACTEURS  -->
              <!-- <div class="request-form-factors grouped fields">
                  <label class="push_down push_up">Facteurs:</label>
                  <br>
                  <select name="factors" class="ui fluid dropdown">
                    <option value="min_temps">Minimum de temps</option>
                    <option value="min_changement">Minimum de correspondance</option>
                    <option value="min_depense">Minimum de dépense</option>
                    <option value="min_marche">Minimum de marche</option>
                  </select>
                </div> -->
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
              <container class="center-button">
                <v-btn type="submit" color="brown darken-1" dark large>Avoir le Chemin</v-btn>
              </container>
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
    name: 'request',
    components: {
      "google-map": MapSection
      // put custom components here
    },
    data() {
      return {
        // put variables here
        toggle_multiple: [0, 1], //options
        query: {
          depart: "",
          arrivee: "",
          options: {},
          facteurs: {}
        }
      }
    },
    mounted() {
    },
    methods: {
      testClick(e) {
        console.log("click")
      },
      getPath(event) {
        console.log("Push")
        this.$router.push("/response")
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
