<template>
  <v-toolbar class="header toolbar" tag="navbar" color='primary' :fixed='true' height="60vh">
    <v-toolbar-title><img src="../assets/img/spuf_logo.jpg" height="50" width="160" class="logo"></v-toolbar-title>
    <!---->
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat class="title">Se connecter</v-btn>
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

    font-family: $font2;
  }

  .logo{
    margin-top:15px;
    margin-bottom: 5px;
  }
</style>
