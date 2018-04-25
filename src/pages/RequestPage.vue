<template>
  <v-container id="request">
    <v-container grid-list-xs fluid fill-height align-center justify-center>
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
                    <multi-select class="subheading" :label='"Arret départ"' :maxHeight='500' :placeholder='"Adresse de départ"' v-model="query.depart" />
                    <!-- CHAMP ARRIVEE -->
                    <multi-select class="subheading" :label='"Arret arrivée"' :maxHeight='500' :placeholder="'Adresse d\'arrivée'" v-model="query.arrivee" />
                    <!-- CHAMP OPTIONS -->
                    <v-expansion-panel inset white value='1'>
                      <v-expansion-panel-content class="push_up">
                        <div class="subheading" slot="header" >Options</div>
                        <v-card white>
                          <v-card-text>
                            <v-layout row wrap class="options-container">
                              <!--<v-layout xs6 class="options-moyens">-->
                              <v-container class="options-moyens" white>
                                <v-select color="black" label="Moyens" :items="moyens_items" v-model="moyens_model" multiple max-height="400" hint="Choisir vos moyens de transport"
                                  persistent-hint></v-select>
                              </v-container>
                              <!--</v-layout>-->
                              <br>
                              <!--<v-layout xs6 class="options-facteurs">-->
                              <v-container class="options-facteurs" white>
                                <v-select color="black" label="Facteur" :items="facteurs_items" v-model="facteurs_model" hint="Choisir votre facteur" persistent-hint single-line></v-select>
                              </v-container>
                              <!--</v-layout>-->
                            </v-layout>
                          </v-card-text>
                        </v-card>
                      </v-expansion-panel-content>
                    </v-expansion-panel>

                  </v-form>
                </v-flex>

              </v-layout>
            </section>
          </v-flex>

          <!-- RIGHT FORM -->
          <v-flex xs6>
            <v-layout row wrap>
              <v-flex x12 class="map">
                  <google-map name="request-map" class="google-map"></google-map>
              </v-flex>
              <v-flex x12 class="center-button">
                <v-btn type="submit" color="black" dark large>Avoir le Chemin</v-btn>
              </v-flex>
            </v-layout>
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
      show: true, //drop down options
      moyens_model: [0, 1, 2], // multiple select
      facteurs_model: [], // one select
      moyens_items: ['Bus', 'Tramway', 'Marche'],
      facteurs_items: [
        'Min de temps',
        'Min de correspondance',
        'Min de marche'
      ],
      query: {
        // Requete à envoyer à Response
        depart: '',
        arrivee: '',
        bus: true,
        tram: true,
        marche: true,
        facteurs: 0
      }
    }
  },
  mounted() {},
  methods: {
    getPath(event) {
      this.$router.push({
        name: 'response',
        query: this.query
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/variables';

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
  background-size: cover; // NOTE: This is a hack to make the background fixed in SECOND section (FullPageJs)
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
  margin-top: 20px;
  margin-right: 30px;
  width: 100%;
  height: 300px;
  border: 1px solid black;

  .google-map {
    position: relative;
    width: 100%;
    height: 100%;
  }
}

.options-container {
  margin-top: 30px;
  border: 3px solid rgba(255, 255, 255, 0.2);
}
</style>
