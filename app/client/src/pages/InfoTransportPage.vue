<template>
  <v-container id="info">
  </v-container>
</template>

<script>
  export default {
    name: 'info'
  }
</script>

<style lang="scss" scoped>
@import "../assets/css/variables";

  #info {
    background-image: $info-page-bg-img;
    width: 100%;
    max-width: 100%;
    display: flex;
    color: black;
  }

</style>
