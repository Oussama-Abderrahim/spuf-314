<template>
  <v-container id="info_trafic">
    <v-container grid-list-xs fluid fill-height align-center justify-center>
      <div class="info_trafic blurred-bg">
        <v-layout row>

          <v-flex xs3 fill-height>
            <v-layout row wrap fill-height class="buttons_part">

                <v-flex xs12>
                  <v-btn @click="index=1">
                    <v-container class="headline">
                      <v-icon class="icon">directions_bus</v-icon>Bus
                    </v-container>
                  </v-btn>
                </v-flex>

                <v-flex xs12>
                  <v-btn @click="index=2">
                    <v-container class="headline">
                      <v-icon class="icon">directions_subway</v-icon>Tram
                    </v-container>
                  </v-btn>
                </v-flex>

                <v-flex xs12>
                  <v-btn @click="index=3">
                    <v-container class="headline">
                      <v-icon class="icon">local_taxi</v-icon>Taxi
                    </v-container>
                  </v-btn>
                </v-flex>

                <v-flex xs12>
                  <v-btn @click="index=4">
                    <v-container class="headline">
                      <v-icon class="icon">subway</v-icon>Metro
                    </v-container>
                  </v-btn>
                </v-flex>
            </v-layout>
          </v-flex>

          <v-flex xs9 class="infos_part">
            <!-- <info-transport-page-bus v-if="index===1"></info-transport-page-bus>
            <info-transport-page-tram v-if="index===2"></info-transport-page-tram>
            <info-transport-page-taxi v-if="index===3"></info-transport-page-taxi>
            <info-transport-page-metro v-if="index===4"></info-transport-page-metro> -->
          </v-flex>

        </v-layout>
      </div>
    </v-container>
  </v-container>
</template>

<script>
// import infoTransportPageBus from '../components/infoTransportPageBus'
// import infoTransportPageTram from '../components/infoTransportPageTram'
// import infoTransportPageTaxi from '../components/infoTransportPageTaxi'
// import infoTransportPageMetro from '../components/infoTransportPageMetro'

export default {
  data() {
    return {
      index: 1
    };
  },
  components: {
    // 'infoTransportPageBus': infoTransportPageBus,
    // 'infoTransportPageTram': infoTransportPageTram,
    // 'infoTransportPageTaxi': infoTransportPageTaxi,
    // 'infoTransportPageMetro': infoTransportPageMetro
    // put custom components here
  }
};
</script>



<style lang="scss" scoped>
@import '../assets/scss/variables';

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
    -webkit-linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.2),
        rgba(255, 255, 255, 0.2)
      ) fixed center;
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
  margin: 0.5rem 0.5rem 1rem 0.5rem;
  padding: 0;
}

.icon {
  font-size: 50px;
}

.btn {
  height: 95%;
  width: 95%;
}
</style>
