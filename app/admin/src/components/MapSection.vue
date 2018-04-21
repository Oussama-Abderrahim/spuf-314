<template>
  <div class="google-map" :id="mapName"></div>
</template>

<script>
/*  eslint-disable */

export default {
  name: 'google-map',
  props: ['name'],
  data: function () {
    return {
      mapName: this.name + "-map",
    }
  },
  mounted: function () {
    const element = document.getElementById(this.mapName)
    const options = {
      zoom: 14,
      center: new google.maps.LatLng(35.69111, -0.64167)
    }
    const map = new google.maps.Map(element, options)
  }
}
</script>

<style scoped>
.google-map {
    background: gray;
}
</style>