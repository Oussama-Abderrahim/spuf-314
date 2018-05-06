<template>
  <v-toolbar class="header toolbar" tag="navbar" color='primary' :fixed='true' height="52vh">
    <v-toolbar-title>
      <a href="/#mainPage"><img src="../assets/img/spuf_logo.jpg" class="logo"></a>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down topbar-items">
      <v-btn flat class="subheading">Se connecter</v-btn>
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
@import '../assets/css/variables';

  .toolbar {
    opacity: 0.9;
    color: white;
    * {
      color: white;
    }

    font-family: $font3;
  }

  .logo{
    margin: 1.5rem 1.5rem 1rem 0.7rem;
    height:2em;
  }

  .title{
    font-size: 10px;
  }

  .topbar-items{
    text-transform: inherit;
  }
</style>
