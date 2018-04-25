<template>
  <v-app id="app">

    <v-content>
          <router-view></router-view>
    </v-content>

    <v-footer app>
      <span>&copy; SPUF 2018</span>
    </v-footer>

  </v-app>
</template>

<script>
  export default {
    data () {
      return {

      }
    }
  }
</script>

<style lang="scss">
  #app {
      overflow: hidden;
  }
</style>
