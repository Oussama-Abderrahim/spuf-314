<template>
  <v-container id="info_trafic">
    <v-container grid-list-xs fluid fill-height align-center justify-center>
      <v-container class="info_trafic blurred-bg">
        <v-layout row wrap>

          <v-flex xs3 class="buttons_part">
            <v-btn>
              <v-container class="display-1">
                <v-icon class="icon">directions_bus</v-icon>Bus
              </v-container>
            </v-btn>

            <v-btn>
              <v-container class="display-1">
                <v-icon class="icon">directions_subway</v-icon>Tram
              </v-container>
            </v-btn>

            <v-btn>
              <v-container class="display-1">
                <v-icon class="icon">local_taxi</v-icon>Taxi
              </v-container>
            </v-btn>
          </v-flex>


          <v-flex xs9 class="infos_part">
            <v-layout row wrap>
              <v-flex xs12 row wrap class="bus-part" justify-content-space-around >
                <v-btn color="secondary" fab class="bus_btn" v-for="bus in ['H','11','4G','B','P1','51','K3']" :key=bus>
                  <v-container class="title">{{bus}}</v-container>
                </v-btn>
              </v-flex>

              <v-flex xs12 class="info_trafic-part">
                <v-container class="title">
                  <v-container class="display-1">ETO</v-container>
                  <v-container>
                  Numero: 0000000
                  Adresse: aaaaaa
                  </v-container>

                  <v-container class="display-1">Bus privés</v-container>
                  <v-container>
                  Numero:   0000000
                  Adresse: aaaaaa
                  </v-container>

                  <v-container class="display-1">Horraires</v-container>
                  <v-container>
                    6:00h - 18:00h
                  </v-container>
                </v-container>
              </v-flex>

            </v-layout>
          </v-flex>

        </v-layout>
      </v-container>
    </v-container>
  </v-container>
</template>



<style lang="scss" scoped>
  @import "../assets/css/variables";

  #info_trafic {
    background-image: $info-page-bg-img;
    width: 100%;
    max-width: 100%;
    display: flex;
    color: black;

    position: relative;

  }

  .blurred-bg {
    background: $info-page-bg-blurred-img,
    -webkit-linear-gradient( 0deg,
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0.2)) fixed center;
    background-repeat: no-repeat;
    background-size: cover; // NOTE: This is a hack to make the background fixed in SECOND section (FullPageJs)
    background-position-y: 200vh;
    background-attachment: fixed;
  }

  .info_trafic {
    display: block;
    padding: 10px;
    width: $form-width;
    height: $form-height;
    margin-left: auto;
    margin-right: auto;
    border: 5px solid rgba(255, 255, 255, 0.5);
    overflow: hidden;
  }

  @media screen and (max-height: 800px) {
    .info_trafic {
      margin-top: 35px;
      height: $form-height-min-screen;
    }
  }

  @media screen and (max-width: 400px) {
    .info_trafic {
      margin-top: 35px;
      height: $form-height-min-screen;
      width: $form-width-min-screen;
    }
  }

  .buttons_part {
    background-color: #f5f5f5;
    margin: 0px 0px 4px 0px;
    padding:0;
  }

  .info_trafic-part{
    background-color: #f5f5f5;
    margin: 30px 30px 50px 50px;
    height: 77%;
  }

  .btn {
    height: 30%;
    width: 95%;
    margin-top: 10px;
  }

  .bus_btn {
    height: 63px;
    width: 65px;
  }

  .bus-part {
    margin-top: 10px;
    margin-left: 10rem;
  }

  .icon {
    font-size: 80px;
  }

</style>
