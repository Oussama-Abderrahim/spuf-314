<template>
  <v-navigation-drawer temporary floating fixed v-model="drawer" app dark>
    <v-list dense>
      <v-list-tile >
        <v-list-tile-action>
          <v-icon>dashboard</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Dashboard</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile >
        <v-list-tile-action>
          <v-icon>settings</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Settings</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>



<script>
  export default {
    data () {
      return {
        drawer: false
      }
    }
  }
</script>


<style lang="scss" scoped>


</style>
