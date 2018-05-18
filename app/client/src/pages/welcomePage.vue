<template>
  <v-container id="welcome">
    <v-container grid-list-xl fill-height>
      <v-layout row wrap fill-height align-end justify-center text-xs-center>
  
        <v-flex xs12 text-xs-center class="welcome-message display-3">
              <v-container>SPUF, when no one else is around</v-container>
              <blockquote class="subheading">SPUF est votre guide transport pour vous deplacer à Oran</blockquote>
        </v-flex>

        <v-flex xs3 text-xs-center>
          <!-- here circle aesthetic-->
          <v-btn round color="primary" class="subheading way-btn" href='#requestPage'>
            Avoir Le chemin
          </v-btn>
        </v-flex>

      </v-layout>
    </v-container>

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
  background-image: url('https://i.imgur.com/1eJ1q0V.jpg');
  background-size: cover;
  color: black;
  word-wrap: break-word;
  height: 30vmin;
  width: 30vmin;
  font-size: 2em;
  font-style: Black;
}

.welcome-message{
  color: white;

  .subheading{
    color: #E0E0E0;
  }
}

.way-btn{
  margin-bottom: 40%;
  padding: 25px 30px;
}


</style>
