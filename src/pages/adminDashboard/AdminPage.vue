<template>
  <v-container fluid id="admin" fill-height>
    <v-container grid-list-xs align-center justify-center>

      <v-layout row>
        <v-flex d-flex xs5 class="bus">

            <v-card dark color="cyan darken-4" class="bus-content">
              <v-card-text><h1 class="ui header">BUS</h1></v-card-text>
                <v-container mr-5>
                  <v-btn fab dark large color="grey darken-4">
                    <v-icon dark large>add</v-icon>
                  </v-btn>Ajouter une ligne
                <br>
                  <v-btn fab dark large color="grey darken-4">
                    <v-icon dark large>edit</v-icon>
                  </v-btn>Modifier une ligne
                <br>
                  <v-btn fab dark large color="grey darken-4">
                    <v-icon dark large>directions_bus</v-icon>
                  </v-btn>Catalogue de bus
                </v-container>
            </v-card>

        </v-flex>
  
        <v-flex d-flex xs7>
          <v-layout row wrap>
            <v-flex d-flex class="tram">
              <v-card dark color="red accent-2" class="tram-content">
                <v-card-text><h1 class="ui header">TRAM</h1></v-card-text>
                <v-container mr-5>
                <v-btn fab dark large color="grey darken-4">
                  <v-icon dark large>tram</v-icon>
                </v-btn>Gestion de Tram
                </v-container>
              </v-card>
            </v-flex>
  
            <v-flex xs12 class="taxi">
              <v-card dark color="yellow darken-3" class="taxi-content">
                <v-card-text><h1 class="ui header">TAXI</h1></v-card-text>
                <v-container mr-5>
                <v-btn fab dark large color="grey darken-4">
                  <v-icon dark large>local_taxi</v-icon>
                </v-btn>Modifier la liste des taxis
                </v-container>
              </v-card>
            </v-flex>
  
          </v-layout>
        </v-flex>
      </v-layout>
      
    </v-container>
  </v-container>
</template>

<script>
  /* eslint-disable */
  
  export default {
    data() {
      return {
      }
    }
  }
</script>

<style lang="scss" scoped>
  $background: url("../../assets/img/bg4.jpg"); 
  $blurred-img: url("../../assets/img/blur_bg.jpg");

  #admin {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    max-width: 100%;
    color: black;
    background: $background no-repeat;
    background-size: cover;
    background-attachment: fixed;
  }


</style>
