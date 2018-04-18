<template>
  <v-content id="response">
    <v-container grid-list-xs fluid fill-height align-center justify-center>
      <form class="request-form blurred-bg tinted" @submit.prevent="getPath" action='#' method="GET">
        <v-layout row wrap>
          <!-- Left Form -->

          <v-flex xs12 md6>
            <v-container class="title">
              Itinéraire à suivre:
              <v-container class="subheading">
                Veuillez suivre ces étpaes pour arriver à votre destination
              </v-container>
            </v-container>


            <scrollbar>
              <ul class="ui steps vertical force-overflow">

                <li class="step" v-for='(step,i) in steps' :key='i'>
                  <div class="content step-content push-down">
                    <i class="big icon left floated" :class="step.type"></i>
                    <div class="step-text">
                      <div class="title">{{step.name}}</div>
                      <div class="description">{{step.dist}}m , {{step.price}}Da, {{step.time}} minutes</div>
                      <br>
                      <v-expansion-panel popout white>
                        <v-expansion-panel-content class="push-up">
                          <div class="subheading" slot="header">Plus d'informations</div>
                          <v-card white>
                            <v-card-text>Lost — Yesterday, somewhere between sunrise and sunset, two golden hours, each set with sixty diamond minutes.
                               No reward is offered, for they are gone forever. 
                            </v-card-text>
                          </v-card>
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                    </div>
                  </div>
                  <br>
                  <hr>
                </li>

              </ul>
            </scrollbar>
          </v-flex>


          <!-- RIGHT FORM -->
          <v-flex xs12 md6>
            <v-layout row wrap>
              <v-flex x12 mx-4>
                <div class="map">
                  <google-map name="response" class="google-map"></google-map>
                </div>
              </v-flex>
              <v-flex xs12>
                <v-layout row wrap>
                  <v-flex xs6>
                    <v-card white class="suggestions">
                      <v-card-text>
                        <div class="title">2ème suggestion</div>
                        Point de départ - Point d'arrivée<br> (marche/Nom bus/Tram) ->  (marche/Nom bus/Tram)<br>Prix: X DA, Temps: X mn                     
                      </v-card-text>
                    </v-card>
                  </v-flex>

                  <v-flex xs6>
                    <v-card white class="suggestions">
                      <v-card-text>
                        <div class="title">3ème suggestion</div>
                        Point de départ - Point d'arrivée<br> (marche/Nom bus/Tram) ->  (marche/Nom bus/Tram)<br>Prix: X DA, Temps: X mn 
                      </v-card-text>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>

          </v-flex>
        </v-layout>
      </form>
    </v-container>
  </v-content>
</template>






<script>
  /*  eslint-disable */
  import MapSection from "../components/MapSection"
  import ScrollBar from "../components/scrollbar"

  export default {
    name: 'response',
    components: {
      "google-map": MapSection,
      "scrollbar": ScrollBar
      // put custom components here
    },
    data() {
      return {
        steps: [{
            name: "Prendre Bus 11 pour 3 arrets",
            type: "bus",
            time: 5,
            price: 20,
            dist: 200
          },
          {
            name: "Marcher jusqu'à arret12",
            type: "male",
            time: 5,
            price: 0,
            dist: 200
          },
          {
            name: "Tramway pour 6 arrets",
            type: "train",
            time: 15,
            price: 40,
            dist: 850
          },
          {
            name: "Take a break",
            type: "male",
            time: 5,
            price: 0,
            dist: 0
          },
          {
            name: "Marcher jusqu'a votre destination",
            type: "male",
            time: 5,
            price: 0,
            dist: 200
          }
        ]
      }
    },
    methods: {
      beFancy() {
        // whoosh
      }
    }
  }

</script>

<style lang="scss" scoped>
  $background: url("../assets/img/Chapelle de Santa Cruz.jpg"); // $blurred-img: url("https://lh3.googleusercontent.com/-m8TxQMObg6c/U474EWu7Y9I/AAAAAAAAI2k/xkRGoIEC1iU/s1600/blur.jpg");
  $blurred-img: url("../assets/img/blur_bg.jpg");


  #response {
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background: $background no-repeat;
    background-size: cover;

    height: 100%;
    width: 100%;
    margin: auto;

    color: black;
  }


  .blurred-bg {
    background-image: $blurred-img;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;

    background-position-y: 100vh;

    &.tinted {
      // background-image: $blurred-img
      background: $blurred-img, -webkit-linear-gradient(0deg, rgba(255, 255, 255, .2), rgba(255, 255, 255, .2)) fixed center;
      background-repeat: no-repeat;
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

  .steps {
    width: 100%;
    padding: 0;
  }

  .step {
    display: block;
    padding: 10px 0;
    height: 100%;

    &:hover {
      background-color: #eee;
    }
  }

  .step-content {
    display: flex;

    .step-text {
      display: flex;
      flex-direction: column;
      margin-left: 20px;
    }

    i.icon {
      display: inline-block;
      height: 100%;
      vertical-align: middle;
    }
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

  .v-card .suggestions{
    margin-top: 100px;
  }
</style>
