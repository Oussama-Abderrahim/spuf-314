<template>
  <v-layout row wrap>
    <v-flex xs12 row wrap class="bus-part" justify-content-space-around>
      <v-btn color="secondary" fab class="bus_btn" v-for="bus in ['H','11','4G','B','P1','51','K3']" :key=bus>
        <v-container class="title">{{bus}}</v-container>
      </v-btn>
    </v-flex>

    <v-flex xs12 class="info_trafic-part">
      <v-container class="title">
        <v-container class="display-1">ETO</v-container>
        <v-container>
          TAXIIIIIIIIII
        </v-container>

        <v-container class="display-1">Bus privés</v-container>
        <v-container>
          TAXIIIIIIIIII </v-container>

        <v-container class="display-1">Horraires</v-container>
        <v-container>
          TAXIIIIIIIIII </v-container>
      </v-container>
    </v-flex>

  </v-layout>

</template>

<script>
  /*  eslint-disable */
  export default {


  }

</script>


<style lang="scss" scoped>
  @import "../assets/css/variables";

  .info_trafic-part {
    background-color: #f5f5f5;
    margin: 30px 30px 50px 50px;
    height: 77%;
  }

  .bus_btn {
    height: 63px;
    width: 65px;
  }

  .bus-part {
    margin-top: 10px;
    margin-left: 10rem;
  }

</style>
