<template>
  <v-app id="app">

    <v-content>
      <v-toolbar color="primary" dark style='width : 100%' v-if="$route.name != 'home'">
        <v-btn icon href='/#AdminPage'>
          <v-icon>arrow_back</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-toolbar-title>{{$route.name}}</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <router-view></router-view>
    </v-content>

    <v-footer app dark>
      <span>&copy; SPUF 2018</span>
    </v-footer>

  </v-app>
</template>

<script>
  export default {
    data() {
      return {
      }
    }
  }
</script>