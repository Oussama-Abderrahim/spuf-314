<template>
  <v-content id="response" fill-height>
    <v-container grid-list-xs fluid fill-height align-center justify-center>
      <form class="request-form blurred-bg tinted">
        <v-layout row wrap>
          <!-- Left Form -->

          <v-flex xs12 md6 class="push-down">
            <v-container display-2 class="text-steps">
              <v-icon x-large>forward</v-icon>Itinéraire à suivre:
              <v-container subheading class="text-steps-subheading">
                Veuillez suivre ces étapes pour arriver à votre destination
              </v-container>
            </v-container>


            <scrollbar>
              <v-expansion-panel>
                <v-expansion-panel-content class="step" v-for='(step,i) in paths[0].steps' :key='i' expand-icon="mdi-menu-down">
                  <!-- STEP -->
                  <div slot="header">
                    <div class="content step-content push-down">
                      <v-icon large>{{step.type}}</v-icon>
                      <div class="step-text">
                        <div class="title">{{step.name}}</div>
                        <div class="description">{{step.dist}}m , {{step.price}}Da, {{step.time}} minutes
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- INFO ABOUT STEP -->
                  <v-card>
                    <v-card-text>Lost — Yesterday, somewhere between sunrise and sunset, two golden hours, each set with sixty diamond
                      minutes. No reward is offered, for they are gone forever.
                    </v-card-text>
                  </v-card>
                </v-expansion-panel-content>
              </v-expansion-panel>

            </scrollbar>
          </v-flex>


          <!-- RIGHT FORM -->
          <v-flex xs12 md6>
            <v-layout row wrap>
              <v-flex x12 class="map">
                  <google-map name="response" class="google-map"></google-map>
              </v-flex>

              <v-flex xs12 class="suggestions">
                <v-layout row wrap>
                  <v-flex xs6>
                    <v-card white>
                      <v-card-text>
                        <div class="title">2ème suggestion</div>
                        Grand terre
                        <v-icon>arrow_forward</v-icon> USTO université
                        <br>
                        <v-icon>directions_walk</v-icon>(8mns)
                        <v-icon>arrow_forward</v-icon>
                        <v-icon>directions_bus</v-icon>4G
                        <br>
                        <v-icon>attach_money</v-icon>20 DA
                        <br>
                        <v-icon>av_timer</v-icon>23 mn
                        <br>
                        <v-icon>space_bar</v-icon> 5010 m
                      </v-card-text>
                    </v-card>
                  </v-flex>

                  <v-flex xs6>
                    <v-card white>
                      <v-card-text>
                        <div class="title">3ème suggestion</div>
                        Grand terre
                        <v-icon>arrow_forward</v-icon> USTO université
                        <br>
                        <v-icon>directions_walk</v-icon>(8mns)
                        <v-icon>arrow_forward</v-icon>
                        <v-icon>directions_subway</v-icon>Tram
                        <br>
                        <v-icon>attach_money</v-icon>40 DA
                        <br>
                        <v-icon>av_timer</v-icon>18 mn
                        <br>
                        <v-icon>space_bar</v-icon> 5000 m
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
import MapSection from '../components/MapSection'
import ScrollBar from '../components/scrollbar'

export default {
  name: 'response',
  components: {
    'google-map': MapSection,
    scrollbar: ScrollBar
    // put custom components here
  },
  data() {
    return {
      show: false,
      paths: [
        // First Path
        {
          totalDist: 10,
          totalPrice: 50,
          totalTime: 20,
          steps: [
            {
              name: 'Prendre Bus 11 pour 3 arrets',
              type: 'directions_bus',
              time: 5,
              price: 20,
              dist: 500
            },
            {
              name: "Marcher jusqu'à arret12",
              type: 'directions_walk',
              time: 5,
              price: 0,
              dist: 200
            },
            {
              name: 'Tramway pour 6 arrets',
              type: 'directions_subway',
              time: 15,
              price: 40,
              dist: 850
            },
            {
              name: 'Prendre Bus B pour 2 arrets',
              type: 'directions_bus',
              time: 5,
              price: 20,
              dist: 200
            },
            {
              name: "Marcher jusqu'a votre destination",
              type: 'directions_walk',
              time: 5,
              price: 0,
              dist: 200
            }
          ]
        },
        // Second Path
        {
          totalDist: 0,
          totalPrice: 0,
          totalTime: 0,
          steps: [
            {
              name: 'Prendre Bus 11 pour 3 arrets',
              type: 'directions_bus',
              time: 5,
              price: 20,
              dist: 500
            },
            {
              name: "Marcher jusqu'à arret12",
              type: 'directions_walk',
              time: 5,
              price: 0,
              dist: 200
            },
            {
              name: 'Tramway pour 6 arrets',
              type: 'directions_subway',
              time: 15,
              price: 40,
              dist: 850
            },
            {
              name: 'Prendre Bus B pour 2 arrets',
              type: 'directions_bus',
              time: 5,
              price: 20,
              dist: 200
            },
            {
              name: "Marcher jusqu'a votre destination",
              type: 'directions_walk',
              time: 5,
              price: 0,
              dist: 200
            }
          ]
        },
        // Third Path
        {
          totalDist: 50,
          totalPrice: 30,
          totalTime: 40,
          steps: [
            {
              name: 'Prendre Bus 11 pour 3 arrets',
              type: 'directions_bus',
              time: 5,
              price: 20,
              dist: 500
            },
            {
              name: "Marcher jusqu'à arret12",
              type: 'directions_walk',
              time: 5,
              price: 0,
              dist: 200
            },
            {
              name: 'Tramway pour 6 arrets',
              type: 'directions_subway',
              time: 15,
              price: 40,
              dist: 850
            },
            {
              name: 'Prendre Bus B pour 2 arrets',
              type: 'directions_bus',
              time: 5,
              price: 20,
              dist: 200
            },
            {
              name: "Marcher jusqu'a votre destination",
              type: 'directions_walk',
              time: 5,
              price: 0,
              dist: 200
            }
          ]
        },
      ]
    }
  },
  methods: {
    loadPaths() {
      // whoosh
    }
  },
  mounted() {
    console.log(this.$route.query)
  }
}
</script>

<style lang="scss" scoped>
$background: url('../assets/img/Chapelle de Santa Cruz.jpg'); // $blurred-img: url("https://lh3.googleusercontent.com/-m8TxQMObg6c/U474EWu7Y9I/AAAAAAAAI2k/xkRGoIEC1iU/s1600/blur.jpg");
$blurred-img: url('../assets/img/blur_bg.jpg');

@import '../assets/css/form-layout.scss';

#response {
  overflow: hidden;
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
    background: $blurred-img,
      -webkit-linear-gradient(
          0deg,
          rgba(255, 255, 255, 0.2),
          rgba(255, 255, 255, 0.2)
        ) fixed center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
  }
}

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

.text-steps {
  padding-top: 15px;
}

.text-steps-subheading {
  padding-top: 0px;
  padding-bottom: 20px;
}

.steps {
  width: 100%;
  padding: 0;
}

.step {
  display: block;
  padding: 10px 10px 0px 10px;
  height: 100%;

  &:hover {
    background-color: #eee;
  }
}

.suggestions {
  margin-right: 30px;
  margin-bottom: 10px;

  .title {
    margin-bottom: 30px;
  }

  .card:hover  {
    background-color: #dedede;
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
</style>
