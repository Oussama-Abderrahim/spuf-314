<template>
  <div id="request">

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
            <div class="ui steps vertical force-overflow">

              <div class="completed step">
                <i class="icon"></i>
                <div class="content">
                  <i class="big bus icon right floated"></i>
                  <div class="title">Prendre ce chemin</div>
                  <div class="description">400m , 20DA , 5minutes</div>
                </div>
              </div>

              <div class="completed step">
                <i class="icon"></i>
                <div class="content">
                  <i class="ui floated right big bus icon"></i>
                  <div class="title">Prendre ce chemin</div>
                  <div class="description">400m , 20DA , 5minutes</div>
                </div>
              </div>

              <div class="step">
                <i class="icon"></i>
                <div class="content">
                  <i class="big subway icon On_Right"></i>
                  <div class="title">Prendre ce chemin</div>
                  <div class="description">400m , 40DA , 2minutes</div>
                </div>
              </div>

              <div class="step">
                <i class="icon"></i>
                <div class="content">
                  <i class="big bus icon On_Right"></i>
                  <div class="title">Prendre ce chemin</div>
                  <div class="description">400m , 20DA , 5minutes</div>
                </div>
              </div>

              <div class="step">
                <i class="icon"></i>
                <div class="content">
                  <i class="big male icon On_Right"></i>
                  <div class="title">Prendre ce chemin</div>
                  <div class="description">400m , 10minutes</div>
                </div>
              </div>

              <div class="step">
                <i class="icon"></i>
                <div class="content">
                  <i class="big bus icon"></i>
                  <div class="title">Prendre ce chemin</div>
                  <div class="description">400m , 20DA , 5minutes</div>
                </div>
              </div>


            </div>

          </scrollbar>
        </div>

        <!-- RIGHT FORM -->
        <div class="eight wide column">
          <div class="request-form-right">
            <div class="map">
              <google-map name="example" class="google-map"></google-map>
            </div>
            <div class="center-button">
              <button class="ui huge brown button" type="submit">Avoir le chemin</button>
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
        // put variables here
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


  #request {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background: $background no-repeat center center fixed;
    background-size: cover;

    height: 100%;
    width: 100%;
    margin: auto;

    color: black;
  }


  .blurred-bg {
    background-image: url($blurred-img);
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;

    &.tinted {
      // background-image: $blurred-img;
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
