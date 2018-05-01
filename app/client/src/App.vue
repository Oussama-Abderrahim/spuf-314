<template>
  <v-app id="app">
    

    <v-content>
      <header name="header"></header>

      <router-view></router-view>
    </v-content>

    <!-- <v-footer app>
      <span>&copy; SPUF 2018</span>
    </v-footer> -->

  </v-app>
</template>

<script>
/*  eslint-disable */
  import header from './components/header'

  export default {
    data() {
      return {

      }
    },
    components: {
      'header': header
      // put custom components here
    }
  }

</script>

<style lang="scss">
  #app {
    overflow: hidden;
  }

</style>
