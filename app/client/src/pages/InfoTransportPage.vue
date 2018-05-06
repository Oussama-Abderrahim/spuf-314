<template>
  <v-container id="info">
    <v-container grid-list-xs fluid fill-height align-center justify-center>
      <v-container class="info blurred-bg tinted">
        <v-layout row wrap fill-height>

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
              <v-flex xs12 row wrap class="bus-part">
                <v-btn fab class="bus_btn">
                  <v-container class="title">4G</v-container>
                </v-btn>
                <v-btn fab class="bus_btn">
                  <v-container class="title">H</v-container>
                </v-btn>
                <v-btn fab class="bus_btn">
                  <v-container class="title">11</v-container>
                </v-btn>
                <v-btn fab class="bus_btn">
                  <v-container class="title">K3</v-container>
                </v-btn>
                <v-btn fab class="bus_btn">
                  <v-container class="title">B</v-container>
                </v-btn>
                <v-btn fab class="bus_btn">
                  <v-container class="title">51</v-container>
                </v-btn>
                <v-btn fab class="bus_btn">
                  <v-container class="title">69</v-container>
                </v-btn>
              </v-flex>

              <v-flex class="info-part">
                <v-container>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                  Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus
                  sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu
                  ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed
                  dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor.
                  Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus
                  risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris
                  ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum
                  velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam
                  nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis
                  turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet.
                  Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus.
                  Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem,
                  at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
                  cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue
                  congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit
                  vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices enim. Curabitur sit
                  amet mauris. Morbi in dui quis est pulvinar ullamcorper. Nulla facilisi. Integer lacinia sollicitudin massa.
                  Cras metus. Sed aliquet risus a tortor.
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

  #info {
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

  .info {
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
    .info {
      margin-top: 35px;
      height: $form-height-min-screen;
    }
  }

  @media screen and (max-width: 400px) {
    .info {
      margin-top: 35px;
      height: $form-height-min-screen;
      width: $form-width-min-screen;
    }
  }

  .buttons_part {
    background-color: #f5f5f5;
    margin: 5px 0px 4px 0px;
  }

  .info-part{
    background-color: #f5f5f5;
    margin: 10px 0px 10px 30px;
  }

  .btn {
    height: 30%;
    width: 95%;
    margin-top: 10px;
  }

  .bus_btn {
    height: 83px;
    width: 85px;
  }

  .bus-part {
    margin-left: 65px;
    margin-top: 10px;
  }

  .icon {
    font-size: 80px;
  }

</style>
