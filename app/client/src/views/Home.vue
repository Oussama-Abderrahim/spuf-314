<template>
  <v-content align-center justify-center fill-height>
    <landing-page class="section"/>
    <request-page class="section"/>
    <info-transport-page class="section"/>
  </v-content>

</template>

<script>
import LandingPage from './Landing'
import RequestPage from './Request'
import InfoTransportPage from './InfoTransport'

export default {
  name: 'home',
  components: {
    LandingPage,
    RequestPage,
    InfoTransportPage
  }
}
</script>

<style lang="scss">
@import '../assets/scss/variables';

#app {
  position: relative;
  margin: 0;
  border: 0;
  height: 100%;
  width: 100%;
}

.section {
  position: relative;
  height: 100vh;
  max-height: 100vh;
  width: 100%;
  max-width: 100%;
  padding: 0;
  background: $welcome-page-bg-img no-repeat;
  background-size: cover;
  background-repeat: no-repeat;
  // background-attachment: fixed;
}
</style>
