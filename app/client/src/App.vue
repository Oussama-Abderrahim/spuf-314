<template>
  <v-app>
    <top-bar id="topbar"></top-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
// @ is an alias to /src
import TopBar from '@/components/TopBar'
import MultiSelect from '@/components/MultiSelect'

export default {
  components: {
    'top-bar': TopBar,
    MultiSelect
  }
}
</script>

<style lang="scss">
#app {
  // overflow: hidden;
  font-family: 'Work Sans';
}
</style>
