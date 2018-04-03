<template>
  <v-layout id="welcome" fill-height align-end>
      <v-flex xs12 sm6 offset-sm3 class="welcome-message">
        <v-card color="grey lighten-4">
          <v-card-title primary-title>
            <v-container><h3>SPUF est un moyen très simple et éfficace pour se déplasser à Oran.
              Habitant ou un visiteur, notre outil vous sera de grande aide.
              Use our webapp please *loudcrying*</h3></v-container>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
</template>


<script>
  export default {
    name: 'home',
    data () {
      return {
        card_text: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.'
      }
    }
  }

</script>

<style lang="scss" scoped>
  $background: url("../assets/img/Quartier historique Sidi El Houari.jpg"); // $blurred-img: url("https://lh3.googleusercontent.com/-m8TxQMObg6c/U474EWu7Y9I/AAAAAAAAI2k/xkRGoIEC1iU/s1600/blur.jpg");
  #welcome {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    max-width: 100%;
    display: flex;
    color: black;
    background: $background no-repeat;
    background-size: cover;
    background-attachment: fixed;
  }
  .welcome-message{
    margin-bottom: 5%;
  }

</style>