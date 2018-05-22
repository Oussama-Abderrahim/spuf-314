<template>
  <v-layout row wrap>
    <v-flex xs12 class="display-3 tram_title" text-xs-center>Metro d'Oran</v-flex>
    <v-flex xs12 class="info_trafic-part">
      <v-container class="title"> 
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
