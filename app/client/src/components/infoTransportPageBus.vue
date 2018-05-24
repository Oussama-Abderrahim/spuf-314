<template>
  <v-layout row wrap>
      <v-flex xs12 row wrap class="bus-part" justify-content-space-around>
        <v-btn color="secondary" fab class="bus_btn" v-for="(bus, i) in ['H','11','4G','B','P1','51','K3']" :key=i>
          <v-container class="title" @click = 'bus_index=i'>{{bus}}</v-container>
        </v-btn>
      </v-flex>

      <v-flex xs12 class="info_trafic-part">
        <v-container class="title">
          <v-container class="display-1">ETO</v-container>
          <v-container>
            <v-icon>phone</v-icon> 041 58 11 11
            <br><v-icon>location_on</v-icon> insert_address
          </v-container>

          <v-container class="display-1">Transport urbain privé</v-container>
          <v-container>
            <v-icon>phone</v-icon> insert_number
            <br><v-icon>location_on</v-icon>Boulevard Colonel Lotfi, Oran
          </v-container>

          <v-container class="display-1">Horraires</v-container>
          <v-container>
            6:00h - 18:00h
          </v-container>
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
    margin: 2em 4em 2em 4em;
    height: 77%;
  }
  
  .bus_btn {
    height: 63px;
    width: 65px;
  }

  .bus-part {
    margin-top: 10px;
    margin-left: 4.5rem;
  }

</style>
