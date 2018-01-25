<template>
  <div id="request">
  <div class="center">
    <div class="blur"></div>
    <form class="ui massive form left">

      <div class="four wide field">
       <label>Départ</label>
       <input type="text" name="depart" placeholder="Adresse de départ">
     </div>
    
      <div class="four wide field">
       <label>Arrivée</label>
       <input type="text" name="arrivee" placeholder="Adresse d'arrivée">
      </div>

      <div class="options"><label>Options:</label><br>
        <i class="big bus icon"></i>
        <i class="big subway icon"></i><br>
      </div>
    
      <div class="facteurs"><label>Facteurs:</label><br>
        <div class="ui slider huge checkbox">
          <input type="checkbox" name="walk">
         <label>Minimum de temps</label>
        </div>

        <div class="ui slider huge checkbox">
         <input type="checkbox" name="walk">
         <label>Minimum de changement</label>
        </div>

        <div class="ui slider huge checkbox">
         <input type="checkbox" name="walk">
         <label>Minimum de dépense</label>
        </div>
        

      </div>

    </form>

    <div class="right">
      <google-map name="example"></google-map>

      <button class="ui massive brown button" type="submit">Avoir le chemin</button>
    </div>

  </div>
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
  data () {
    return {
      // put variables here
    }
  },
  methods: {
    beFancy (){
      // whoosh
    }
  }
}
</script>

<style lang="scss">
#request{
  background: url("http://lorempicsum.com/up/800/600/2") no-repeat center center fixed;
  background-size: cover;

  height: 100%;
  width: 100%;
  margin: auto;
}

.center{
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.blur{
  background: url('http://lorempicsum.com/up/800/600/2') no-repeat center center fixed;
  background-size: cover;
  overflow: hidden;
  filter: blur(13px);
  position: absolute;
  height: 50%;
  top: -50px;
  left: -50px;
  right: -50px;
  bottom: -50px;
}

</style>
