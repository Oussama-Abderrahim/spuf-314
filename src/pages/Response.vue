<template>
  <div id="request">

    <section class="request-form">
      <div class="blur"></div>
      <div class="ui grid">
        <!-- Left Form -->
        <div class="eight wide column">

          
          <h1 class="ui header">
            
            <i class="massive arrow right icon"></i>
            <div class="content">
             Itinéraire à suivre:
             <div class="sub header">Veuillez suivre ces étpaes pour 
             arriver à votre destination</div>
           </div>
          </h1>
           
        <div class ="scrollbar">
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

        </div>
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

  .scrollbar
{
    margin-left: 30px;
    float: left;
    height: 70%;
    width: 80%;
    background: #F5F5F5;
    overflow-y: scroll;
    margin-bottom: 25px;
}

.force-overflow
{
    min-height: 450px;
}



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
    
    height: 65%;
    width: 70%;
    margin: auto;
    top: 8%;
    bottom: 0;
    left: 0;
    right: 0;
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

  .steps{
    width:100%;
  }

  .map {
    position: relative;
    padding: 0;
    margin: 20px;
    width: 100%;
    height: 500px;
    border: 1px solid black;

    .google-map {
      position: relative;
      width: 100%;
      height: 100%;
    }
  }

</style>
