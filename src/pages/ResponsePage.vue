<template>
  <div id="response">

    <form class="request-form blurred-bg tinted" @submit.prevent="getPath" action='#' method="GET">
      <div class="ui grid fluid container">
        <!-- Left Form -->
        <div class="eight wide column">
          <h1 class="ui header">
            <i class="massive arrow right icon"></i>
            <div class="content">
              Itinéraire à suivre:
              <div class="sub header">Veuillez suivre ces étpaes pour arriver à votre destination</div>
            </div>
          </h1>

          <scrollbar>
            <ul class="ui steps vertical force-overflow">

              <li class="step" v-for='(step,i) in steps' :key='i'>
                <div class="content step-content">
                  <i class="big icon left floated" :class="step.type"></i>
                  <div class="step-text">
                    <div class="title">{{step.name}}</div>
                    <div class="description">{{step.dist}}m , {{step.price}}Da, {{step.time}} minutes</div>
                  </div>
                </div>
                <!-- <i class="icon right floated"></i> -->
              </li>

            </ul>

          </scrollbar>
        </div>

        <!-- RIGHT FORM -->
        <div class="eight wide column">
          <div class="request-form-right">
            <div class="map">
              <google-map name="response" class="google-map"></google-map>
            </div>
           
          </div>

        </div>
      </div>
    </form>

  </div>
</template>



<script>
  /*  eslint-disable */
  import MapSection from "../components/MapSection"
  import ScrollBar from "../components/scrollbar"

  export default {
    name: 'about',
    components: {
      "google-map": MapSection,
      "scrollbar": ScrollBar
      // put custom components here
    },
    data() {
      return {
        steps : [
          {
            name : "Prendre Bus 11 pour 3 arrets",
            type: "bus",
            time: 5,
            price: 20,
            dist: 200
          },
          {
            name : "Marcher jusqu'à arret12",
            type: "male",
            time: 5,
            price: 0,
            dist: 200
          },
          {
            name : "Tramway pour 6 arrets",
            type: "train",
            time: 15,
            price: 40,
            dist: 850
          },
          {
            name : "Take a break",
            type: "male",
            time: 5,
            price: 0,
            dist: 0
          },
          {
            name : "Marcher jusqu'a votre destination",
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

  $background: url("../assets/img/bg4.jpg");
  // $blurred-img: url("https://lh3.googleusercontent.com/-m8TxQMObg6c/U474EWu7Y9I/AAAAAAAAI2k/xkRGoIEC1iU/s1600/blur.jpg");
  $blurred-img: url("../assets/img/blur_bg.jpg");


  #response {
    position: absolute;
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

    &.tinted {
      // background-image: $blurred-img
      background: $blurred-img, -webkit-linear-gradient(0deg, rgba(255, 255, 255, .2), rgba(255, 255, 255, .2));
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
</style>
