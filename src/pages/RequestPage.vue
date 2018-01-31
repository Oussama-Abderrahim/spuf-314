<template>
  <div id="request">

    <section class="request-form">
      <div class="ui grid fluid container">
        <div class="blur"></div>
        <!-- Left Form -->
        <div class="eight wide column">

          <form class="request-form-left ui massive form push_up">
            <!-- CHAMP DEPART -->
            <div class="fifteen wide field push_up">
              <label for="depart">Départ</label>
              <br>
              <input type="text" name="depart" placeholder="Adresse de départ">
            </div>

            <!-- CHAMP ARRIVEE -->
            <div class="fifteen wide field">
              <label for="arrivee">Arrivée</label>
              <br>
              <input type="text" name="arrivee" placeholder="Adresse d'arrivée">
            </div>

            <!-- CHAMP OPTIONS -->
            <div class="request-form-options">
              <label class="push_down">Options:</label>
              <br><br>
              <div class="ui icon buttons">
               <div class="ui big button"><i class="big bus icon"></i></div>
               <div class="ui big button"><i class="big subway icon"></i></div>
               <div class="ui big button"><i class="big male icon"></i></div>
               <div class="ui big button"><i class="big child icon"></i></div>
               <div class="ui big button"><i class="big handicap icon"></i></div>
              </div>
            </div>

            <!-- CHAMP FACTEURS  -->
            <div class="request-form-factors grouped fields">
              <br>
              <label class="push_down push_up">Facteurs:</label>
              <br>
              <div class="field">
                <div class="ui huge slider checkbox">
                  <input type="checkbox" name="time">
                  <label for="time">Minimum de temps</label>
                </div>
              </div>

              <div class="field">
                <div class="ui huge slider checkbox">
                  <input type="checkbox" name="walk" @click="nb += 1">
                  <label for="walk">Minimum de changement</label>
                </div>
              </div>

              <div class="field">
                <div class="ui huge slider checkbox">
                  <input type="checkbox" name="walk">
                  <label for="walk">Minimum de marche</label>
                </div>
              </div>

              <div class="field">
                <div class="ui huge slider checkbox">
                  <input type="checkbox" name="cost">
                  <label for="cost">Minimum de dépense</label>
                </div>
              </div>

            </div>
          </form>
        </div>

        <!-- RIGHT FORM -->
        <div class="eight wide column">
          <div class="request-form-right">
            <div class="ui inverted dimmer">
              <div class="ui text loader">Loading</div>
            </div>
            <div class="map container">
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
        nb: 0
      }
    },
    mounted () {
      $('.ui.checkbox').checkbox();
    },
    methods: {
      beFancy() {
        // whoosh
      }
    }
  }

</script>

<style lang="scss" scoped>

$form-width: 65%;
$form-height: 600px;

  #request {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("../assets/img/bg4.jpg") no-repeat center center fixed;
    background-size: cover;

    height: 100%;
    width: 100%;
    margin: auto;

    color: black;
  }

  .blur {
    background: url('../assets/img/bg4.jpg') no-repeat center center fixed;
    background-size: cover;
    overflow: hidden;
    filter: blur(10px);
    position: absolute;
    height: $form-height;
    width: $form-width;
    margin: auto;
    top: -15px;
    left: -50px;
    right: -50px;
    bottom: -50px;
  }

  .request-form {
    display: block;
    padding: 10px;
    width: 65%;
    height: $form-height;
    margin: 15vh auto;
    border: 5px solid rgba(255, 255, 255, .5);

    &-left {
      overflow: hidden;
      height: $form-height;
    }
    &-right {
      overflow: hidden;
      position: relative;
      height: $form-height;
      margin: auto;
    }
    &-factors {
      margin-top: 30px;
    }
    &-options {
      .buttons {
        // could add some 100% width or center .-.
      }
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
    height: 100%;
    border: 1px solid black;

    .google-map {
      position: relative;
      width: 100%;
      height: 100%;
    }
  }

</style>
