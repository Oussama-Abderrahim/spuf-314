<template>
  <v-content fluid fill-height>
    <v-container grid-list-xs align-center justify-center>

      <v-layout row>
        <v-flex d-flex xs5 class="bus">

            <v-card dark color="primary" class="bus-content">
              <v-card-text>BUS</v-card-text>
              <v-btn color="purple" dark>Ajouter une nouvelle ligne
                <v-icon dark right>arrow_left</v-icon>
              </v-btn>
              <br>
              <v-btn dark color="purple">
                Modifier une ligne
                <v-icon dark>/</v-icon>
              </v-btn>
              <br>
              <v-btn dark color="purple">
                Le catalogue des bus
                <v-icon dark>/</v-icon>
              </v-btn>
            </v-card>

        </v-flex>
  
        <v-flex d-flex xs7>
          <v-layout row wrap>
            <v-flex d-flex class="tram">

              <v-card dark color="tram-content">
                <v-card-text>TRAM</v-card-text>
                <v-btn fab dark large color="purple">
                  <v-icon dark>/</v-icon>
                </v-btn>Gestion de Tram
              </v-card>

            </v-flex>
  
            <v-flex xs12 class="taxi">
              <v-card dark color="taxi-content">
                <v-card-text>TAXI</v-card-text>
                <v-btn fab dark large color="purple">
                  <v-icon dark>/</v-icon>
                </v-btn>Modifier la liste des taxis
              </v-card>
            </v-flex>
  
          </v-layout>
        </v-flex>
      </v-layout>
      
    </v-container>
  </v-content>
</template>

<script>
  /* eslint-disable */
  
  export default {
  
    data() {
  
      return {
  
  
  
      }
  
    }
  
  }
  
  /*Name
  
  icon
  
  Default
  
  false
  
  Type*/
</script>

<style lang="sass" scoped>


</style>
