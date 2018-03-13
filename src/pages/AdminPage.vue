<template>
  <v-app>
    <v-content>
      <v-container grid-list-md>
        <v-layout row>
          <v-flex xs6 class="bus">
            <v-card dark color="primary" class="bus-content">
              <v-card-text>BUS</v-card-text>
              <v-btn fab dark large color="purple">
                <v-icon dark>arrow_left</v-icon>
              </v-btn>Ajouter une nouvelle ligne
              <br>
              <v-btn fab dark large color="purple">
                <v-icon dark>/</v-icon>
              </v-btn>Modifier une ligne
              <br>
              <v-btn fab dark large color="purple">
                <v-icon dark>/</v-icon>
              </v-btn>Le catalogue des bus
            </v-card>
          </v-flex>

          <v-flex xs12 fill-height>
            <v-layout row fill-height>
              <v-flex xs12 class="tram">
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

    <v-footer app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
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
