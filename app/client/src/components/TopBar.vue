<template>
  <v-toolbar class="header toolbar" tag="navbar" absolute=true name="header" height="50vh">
    <v-toolbar-title><v-icon dark>directions_bus</v-icon> SPUF</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>Se connecter</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
  .toolbar {
    color: white;
    background-color: #1F4260;
    * {
      color: white;
    }
  }
</style>
