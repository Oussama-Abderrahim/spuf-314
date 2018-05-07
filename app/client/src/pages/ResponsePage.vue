<template>
  <v-content id="response" fill-height>
    <v-container grid-list-xs fluid fill-height align-center justify-center>
      <form class="request-form blurred-bg tinted">
        <v-layout row wrap>
          <!-- Left Form -->

          <v-flex xs12 md6 class="push-down">
            <v-container dark class="text-steps">
              <v-icon x-large dark>chevron_right</v-icon>Itinéraire à suivre:
              <v-container class="subheading" text-xs-center>Veuillez suivre les étapes suivants</v-container>
            </v-container>


            <scrollbar>
              <v-expansion-panel class='steps' v-if='paths[0]'>
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
                    <v-stepper value="1" vertical class="step-details">
                      <v-stepper-step class="step-details-item" 
                                      v-for='(station, j) in step.intermediate' 
                                      :key='`${i*j}-step`' 
                                      :step='j'>
                                      {{station.name}}</v-stepper-step>
                      <v-divider></v-divider>
                  </v-stepper>
                </v-expansion-panel-content>
              </v-expansion-panel>

            </scrollbar>
          </v-flex>


          <!-- RIGHT FORM -->
          <!-- MAP -->
          <v-flex xs12 md6>
            <v-layout row wrap>
              <v-flex x12 class="map">
                <google-map name="response" class="google-map"></google-map>
              </v-flex>
          
          <!-- SUGGESTIONS -->
              <v-flex xs12 class="suggestions">
                <v-layout row wrap>
                  <v-flex xs6 v-for='i in [1,2]' :key='i'>
                    <!-- <v-card white v-if="paths[i]">
                      <v-card-text>
                        <div class="title" v-if="paths[i].steps">2ème suggestion</div>
                        {{paths[i].steps[0].from.name}}
                        <v-icon>arrow_forward</v-icon> {{paths[i].steps[paths[i].steps.length-1].to.name}}
                        <br>
                        <v-icon>directions_walk</v-icon>(8mns)
                        <v-icon>arrow_forward</v-icon>
                        <v-icon>directions_bus</v-icon>{{paths[i].transportTypes}}
                        <br>
                        <v-icon>attach_money</v-icon>{{paths[i].totalPrice}}
                        <br>
                        <v-icon>av_timer</v-icon>{{paths[i].totalTime}}mn
                        <br>
                        <v-icon>space_bar</v-icon>{{paths[i].totalDist}}m
                       
                      </v-card-text>
                    </v-card> -->
                  </v-flex>
                </v-layout>
              </v-flex>

              <v-btn href='/#requestPage' fab class="back_btn"><v-icon large>keyboard_arrow_left</v-icon></v-btn>

              


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
    'scrollbar': ScrollBar
    // put custom components here
  },
  data() {
    return {
      typeIcons: {
        bus: 'directions_bus',
        tramway: 'directions_subway',
        marche: 'directions_walk'
      },
      show: false,
      defaultPathObject: {
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
      paths: []
    }
  },
  methods: {
    showPath(index) {
      console.log(index)
      let tempPath = this.paths[0]
      this.$set(this.paths, 0, this.paths[index])
      this.$set(this.paths, index, tempPath)
    },
    loadPaths(queryParams) {
      this.$http
        .get('https://project314.herokuapp.com/api/direction', {
          params: queryParams
        })
        .then(
          function(response) {
            // HERE happens the magic
            this.paths = []
            response.body.forEach(path => {
              // create new path
              let newPath = {
                totalDist: path.totalDist,
                totalTime: path.totalTime,
                totalPrice: path.totalPrice,
                steps: []
              }
              // fill steps
              path.steps.forEach(step => {
                let name = ''
                switch (step.type.toLowerCase()) {
                  case 'bus':
                    name =
                      step.name +
                      ' pour ' +
                      step.intermediate.length +
                      ' arrets de ' +
                      step.from.name +
                      ' vers ' +
                      step.to.name
                    break
                  case 'tramway':
                    name =
                      'Prendre le tramway pour ' +
                      step.intermediate.length +
                      ' arrets'
                    break
                  case 'walk':
                    name = "Marcher jusqu'à arret" + step.to.name
                    break
                  default:
                    break
                }

                newPath.steps.push({
                  name: name,
                  from: step.from,
                  to: step.to,
                  intermediate: step.intermediate,
                  type: this.typeIcons[step.type.toLowerCase()],
                  price: step.price,
                  time: step.time,
                  dist: step.time
                })
              })
              // add to data
              this.paths.push(newPath)
            })

            this.paths.push(this.defaultPathObject)
            this.paths.push(this.defaultPathObject)
            this.paths.push(this.defaultPathObject)
            console.log('paths', this.paths)
          },
          errorResponse => {
            console.log(errorResponse)
          }
        )
        .catch(err => {
          console.log('error fetching paths', err)
        })
    }
  },
  created() {
    this.paths = []
    this.paths.push(this.defaultPathObject)
    this.paths.push(this.defaultPathObject)
    this.paths.push(this.defaultPathObject)
  },
  mounted() {
    if(this.$route.query ) {
      this.loadPaths(this.$route.query)
    }
  }
}
</script>

<style lang="scss" scoped>
$background: url('../assets/img/Rue Khemisti.jpg'); // $blurred-img: url("https://lh3.googleusercontent.com/-m8TxQMObg6c/U474EWu7Y9I/AAAAAAAAI2k/xkRGoIEC1iU/s1600/blur.jpg");
$blurred-img: url('../assets/img/blur_RueKhemisti.jpg');

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
  color: white;
  font-size: 40px;
}

.text-steps-subheading {
  padding-top: 0px;
  padding-bottom: 20px;
}

.steps {
  width: 100%;
  padding: 0;

  .step {
    display: block;
    padding: 10px 10px 0px 10px;
    height: 100%;

    &:hover {
      background-color: #eee;
    }

    &:hover.expansion-panel__container--active {
      background: #fff;
    }
  }

  .step-details-item {
    &:hover {
      background-color: #eee;
    }

  }
  
}

.suggestions {
  margin-right: 30px;
  margin-bottom: 10px;

  .title {
    margin-bottom: 30px;
  }

  .card:hover {
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
  margin-top: 3rem;
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

.back_btn{
  margin-left: 26rem;
  margin-top: 6rem;
}
</style>
