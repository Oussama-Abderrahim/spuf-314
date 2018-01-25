<template>
  <div id="request">
  <div class="center">
    <div class="blur row"></div>


  <div class="col-sm-6">
    <form class="ui massive form">

      <div class="ten wide field push_up">
       <label>Départ</label><br>
       <input type="text" name="depart" placeholder="Adresse de départ">
     </div>
    
      <div class="ten wide field">
       <label>Arrivée</label><br>
       <input type="text" name="arrivee" placeholder="Adresse d'arrivée">
      </div>

      <div><label class="push_down">Options:</label><br>
        <i class="big bus icon"></i>
        <i class="big subway icon push_down"></i>
      </div>
    
      <div><label class="push_down push_up">Facteurs:</label><br>
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
  </div>

    <div class="ui vertical divider"></div>

    <div class="col-sm-6">
      <google-map name="example"></google-map>
      <div class="My_Button">
        <button class="ui massive brown button" type="submit">Avoir le chemin</button>
      </div>
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

.blur{
  background: url('http://lorempicsum.com/up/800/600/2') no-repeat center center fixed;
  background-size: cover;
  overflow: hidden;
  filter: blur(20px);
  position: absolute;
  top: -50px;
  left: -50px;
  right: -50px;
  bottom: -50px;
}

.center{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  width: 65%;
  margin : 200px auto;
  
}

.push_down{
  margin-bottom:30px;
}

.push_up{
  margin-top:30px;
}

.Center_Button{
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
