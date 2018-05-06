<template>
  <v-toolbar class="header toolbar" tag="navbar" color='primary' :fixed='true' height="52vh">
    <v-toolbar-title>
      <a href="/#mainPage"><img src="../assets/img/spuf_logo.jpg" height="38" width="115" class="logo"></a>
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
    color: white;
    * {
      color: white;
    }

    font-family: $font3;
  }

  .logo{
    margin-top:10px;
  }

  .title{
    font-size: 10px;
  }

  .topbar-items{
    text-transform: inherit;
  }
</style>
