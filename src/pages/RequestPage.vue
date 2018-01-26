<template>
  <div id="request">

    <section class="request-form">
      <div class="ui grid">
        <!-- Left Form -->
        <div class="eight wide column">

          <form class="request-form-left ui massive form">
            <!-- CHAMP DEPART -->
            <div class="ten wide field push_up">
              <label for="depart">Départ</label>
              <br>
              <input type="text" name="depart" placeholder="Adresse de départ">
            </div>

            <!-- CHAMP ARRIVEE -->
            <div class="ten wide field">
              <label for="arrivee">Arrivée</label>
              <br>
              <input type="text" name="arrivee" placeholder="Adresse d'arrivée">
            </div>

            <!-- CHAMP OPTIONS -->
            <div class="request-form-options">
              <label class="push_down">Options:</label>
              <br>
              <i class="big bus icon"></i>
              <i class="big subway icon"></i>
            </div>

            <!-- CHAMP FACTEURS  -->
            <div class="request-form-factors grouped fields">
              <br>
              <label class="push_down push_up">Facteurs:</label>
              <br>
              <div class="field">
                <div class="ui slider huge checkbox">
                  <input type="radio" name="time">
                  <label for="time">Minimum de temps</label>
                </div>
              </div>

              <div class="field">
                <div class="ui slider huge checkbox">
                  <input type="radio" name="walk">
                  <label form="walk">Minimum de changement</label>
                </div>
              </div>

              <div class="field">
                <div class="ui slider huge checkbox">
                  <input type="radio" name="cost">
                  <label for="cost">Minimum de dépense</label>
                </div>
              </div>
            </div>
          </form>
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
    </section>

  </div>
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
  #request {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background: url("../assets/img/blue-blur.jpg") no-repeat center center fixed;
    background-size: cover;

    height: 100%;
    width: 100%;
    margin: auto;

    color: black;
  }

  .blur {
    background: url('http://saxony-blue.com/data/out/72/5784265-wallpaper-blur.jpg') no-repeat center center fixed;
    background-size: cover;
    overflow: hidden;
    filter: blur(20px);
    position: absolute;
    top: -50px;
    left: -50px;
    right: -50px;
    bottom: -50px;
  }

  .request-form {
    display: block;
    width: 65%;
    height: 600px;
    margin: 200px auto;

    &-left {
      height: 100%;
    }
    &-right {
      height: 100%;
    }
    &-factors {
      margin-top: 30px;
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

  .map {
    position: relative;
    padding: 0;
    margin: 20px;
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
