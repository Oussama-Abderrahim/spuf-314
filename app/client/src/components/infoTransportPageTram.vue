<template>
  <v-layout row wrap>
    <v-flex xs12 class="display-3 tram_title" text-xs-center>Tramway d'Oran</v-flex>

    <v-flex xs12 class="info_trafic-part" text-xs-center>
      <v-layout row wrap align-content-end>
        <v-flex xs6>
          <v-container class="headline">Horaires Départs</v-container>
          <v-container class="body-2">
            Premier départ de SIDI MAAROUF: 05h00
            <br> Premier départ de SENIA: 05h00
            <br> Dernier départ de SIDI MAAROUF: 21h50
            <br> Dernier départ de SENIA: 21h56
            <br>
          </v-container>
          
          <v-container class="headline">Temps d'attente</v-container>
          <v-container class="body-2">
            05h30 - 09h00: 8min
            <br> 09h00 - 21h10: 6min
            <br> 21h10 - 23h10: 8min
          </v-container>
        </v-flex>

        <v-flex xs6>
          <v-container class="headline">Le Vendredi</v-container>
          <v-container class="body-2">
            Premier départ de SIDI MAAROUF: 05h00
            <br> Premier départ de SENIA: 05h00
            <br> Dernier départ de SIDI MAAROUF: 21h50
            <br> Dernier départ de SENIA: 21h50
          </v-container>
          
          <v-container class="headline">Temps d'attente</v-container>
          <v-container class="body-2">
            05h00 - 09h00: 9min
            <br> 09h00 - 21h10: 8min
            <br> 21h10 - 23h10: 9min
          </v-container>

        </v-flex>
        <a href="https://www.setram.dz/" target="_blank"><img src="../assets/img/setram_logo.jpg" class="logo"></a>
      </v-layout>

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
    padding: 5em 5em 5em 5em;
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

  .logo{
    margin-left: 39rem;
    margin-top:2rem;
    margin-bottom:1rem;
  }


</style>
