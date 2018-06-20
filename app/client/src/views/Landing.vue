<template>
  <v-container id="landing">
    <v-layout row wrap fill-height align-end justify-center text-xs-center>
      <v-flex xs12 text-xs-center class="landing-message display-3">
        <v-container>SPUF, when no one else is around</v-container>
        <blockquote class="subheading">SPUF est votre guide transport pour vous deplacer à Oran</blockquote>
      </v-flex>
      <v-flex xs3 text-xs-center>
        <v-btn round color="primary" class="subheading way-btn" href='#requestPage'>
          Avoir Le chemin
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
export default {
  name: 'landing',
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables';

#landing {
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

.landing-message {
  color: white;

  .subheading {
    color: #e0e0e0;
  }
}

.way-btn {
  margin-bottom: 40%;
  padding: 25px 30px;
}
</style>
