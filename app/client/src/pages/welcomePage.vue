<template>
  <v-container id="welcome">
    <v-container grid-list-xl fill-height>
      <v-layout row wrap fill-height align-end>
        <v-flex xs12 text-xs-center>
          <!-- here circle aesthetic-->
          <v-btn fab color="primary" class="circle-button">
            Show <br>
            Me <br>
            The <br>
            WAAAY <br>
          </v-btn>
        </v-flex>

        <v-flex xs12 class="welcome-message">
          <v-card color="grey lighten-4">
            <v-card-title primary-title>
              <v-container><h3>SPUF est un moyen très simple et éfficace pour se déplacer à Oran.
                Habitant ou un visiteur, notre outil vous sera de grande aide.
                Use our webapp please *loudcrying*</h3></v-container>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <!--
    <v-layout class="main-content" fill-height align-end>
      <v-flex xs12 sm6 offset-sm3 class="welcome-message">
        <v-card color="grey lighten-4">
          <v-card-title primary-title>
            <v-container><h3>SPUF est un moyen très simple et éfficace pour se déplacer à Oran.
              Habitant ou un visiteur, notre outil vous sera de grande aide.
              Use our webapp please *loudcrying*</h3></v-container>
          </v-card-title>
        </v-card>
      </v-flex>
      </v-layout>-->
    </v-container>
</template>


<script>
export default {
  name: 'home',
  data() {
    return {
      card_text:
        'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/variables';

#welcome {
  background-image: $welcome-page-bg-img;
  width: 100%;
  max-width: 100%;
  color: black;
}

.main-content {
  width: 100%;
  max-width: 100%;
}

.circle-button {
  // background-image: url('https://i.imgur.com/1eJ1q0V.jpg');
  // background-size: cover;
  // color: black;
  word-wrap: break-word;
  height: 30vmin;
  width: 30vmin;
  font-size: 2em;
}

</style>
