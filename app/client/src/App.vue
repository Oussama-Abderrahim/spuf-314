<template>
  <v-app>
    <top-bar id="topbar"></top-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
/*  eslint-disable */
import TopBar from './components/TopBar'

export default {
  components: {
    'top-bar': TopBar
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss">

#app {
  // overflow: hidden;
font-family: 'Work Sans';
}
</style>
