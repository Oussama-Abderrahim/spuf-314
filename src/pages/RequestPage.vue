<template>
  <v-container id="request">

    <v-container grid-list-xs fluid  fill-height align-center justify-center>
      <form class="request-form blurred-bg tinted" @submit.prevent="getPath" action='#' method="GET">
        <!-- <div class="blur"></div> -->
        <!-- Left Form -->
        <v-layout row wrap>
          <v-flex xs12 md6>
            <section class="request-form-left">
              <v-layout row wrap>
                <v-flex xs11 class="field">
                  <v-form>
                    <!-- CHAMP DEPART -->
                    <multi-select :label='"Arret départ"' :placeholder='"Adresse de départ"' v-model="query.depart"/>
                    <!-- <v-text-field box name="depart" label="Départ" placeholder="Adresse de départ" v-model="query.depart"></v-text-field> -->
                    <!-- CHAMP ARRIVEE -->
                    <!-- <v-text-field box name="arrivee" label="Arrivée" placeholder="Adresse d'arrivée" v-model="query.arrivee"></v-text-field> -->
                    <multi-select :label='"Arret arrivée"' :placeholder="'Adresse d\'arrivée'" v-model="query.arrivee"/>
                    <!-- CHAMP OPTIONS -->
                    <v-layout row wrap class="options">
                      <v-flex xs6 class="options-moyens">
                        <v-container class="options-moyens-container">
                          <h3>Moyen de transport</h3>
                          <v-container class="options-moyens-container-buttons">
                            <v-btn fab class="moyens-btn-active">
                              <v-icon large>directions_bus</v-icon>
                            </v-btn>
                            <label for="">Bus</label>
                            <br>
                            <v-btn fab class="moyens-btn-active">
                              <v-icon large>directions_railway</v-icon>
                            </v-btn>Tramway
                            <br>
                            <v-btn fab class="moyens-btn-active">
                              <v-icon large>directions_walk</v-icon>
                            </v-btn>Marche
                          </v-container>
                        </v-container>
                      </v-flex>

                      <v-flex xs6 class="options-facteurs">
                        <v-container>
                          <h3>Facteur choisi</h3><br>
                            <v-switch class="options-facteurs-switch" :label="`- de temps`" v-model="switch1" color="grey lighten-4"></v-switch>
                            <v-switch class="options-facteurs-switch" :label="`- de dépense`" v-model="switch2" color="grey lighten-4"></v-switch>
                            <v-switch class="options-facteurs-switch" :label="`- de correspondence`" v-model="switch3" color="grey lighten-4"></v-switch>
                        </v-container>
                      </v-flex>

                    </v-layout>
                  </v-form>
                </v-flex>

              </v-layout>
            </section>
          </v-flex>

          <!-- RIGHT FORM -->
          <v-flex xs6>
            <section class="request-form-right">
              <!-- TODO : add a dimmer while map is loading brown darken-1-->
              <!-- <div class="ui inverted dimmer">
              <div class="ui text loader">Loading</div>
            </div> -->
              <div class="map container">
                <google-map name="request" class="google-map"></google-map>
              </div>
              <v-container class="center-button">
                <v-btn type="submit" color="black" dark large>Avoir le Chemin</v-btn>
              </v-container>
            </section>
          </v-flex>

        </v-layout>
      </form>
    </v-container>

  </v-container>
</template>



<script>
/*  eslint-disable */
import MapSection from '../components/MapSection'
import MultiSelect from '../components/MultiSelect'

export default {
  name: 'request',
  components: {
    'google-map': MapSection,
    'multi-select': MultiSelect
    // put custom components here
  },
  data() {
    return {
      // put variables here
      toggle_multiple: [0, 1], //options
      switch1: false, //min temps
      switch2: false, //dépense
      switch3: false, //correspondence
      query: {
        depart: '',
        arrivee: '',
        options: {},
        facteurs: {}
      }
    }
  },
  mounted() {},
  methods: {
    getPath(event) {
      this.$router.push('/response')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/css/variables";

#request {
  position: relative;
  background-image: $request-page-bg-img;
  width: 100%;
  max-width: 100%;
  display: flex;
  color: black;
}

.blurred-bg {
  background: $request-page-bg-blurred-img,
    -webkit-linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.2),
        rgba(255, 255, 255, 0.2)
      ) fixed center;
  background-repeat: no-repeat;
  background-size: cover;
  // NOTE: This is a hack to make the background fixed in SECOND section (FullPageJs)
  background-position-y: 100vh;
  background-attachment: fixed;
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
  width: auto;
  height: 60%;
  border: 1px solid black;

  .google-map {
    position: relative;
    width: 100%;
    height: 100%;
  }
}

.options {
  margin-top: 30px;
  border: 3px solid rgba(255, 255, 255, 0.2);

  .options-facteurs-switch {
    margin-top: 15px;
    margin-right: 10px;
  }

  .options-moyens-container-buttons {
    color: rgb(56, 56, 56);
  }
}


</style>
