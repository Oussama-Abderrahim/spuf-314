<template>
  <div class="google-map" :id="mapName"></div>
</template>

<script>
/*  eslint-disable */

export default {
  name: 'google-map',
  props: ['name', 'startCoord', 'endCoord'],
  data: function() {
    return {
      mapName: this.name + '-map',
      startMarker: null,
      endMarker: null,
      geoCoder: null,
      infowindow: null,
      map: null
    }
  },
  mounted: function() {
    const intialCoord = { lat: 35.69111, lng: -0.64167 }

    const element = document.getElementById(this.mapName)
    const options = {
      zoom: 14,
      center: intialCoord
    }
    this.map = new google.maps.Map(element, options)
    this.geoCoder = new google.maps.Geocoder()
    this.infowindow = new google.maps.InfoWindow()

    // Create a marker and set its position.
    this.startMarker = new google.maps.Marker({
      map: this.map,
      draggable: false,
      position: intialCoord,
      title: 'Station de départ'
    })

    this.endMarker = new google.maps.Marker({
      map: this.map,
      draggable: false,
      position: intialCoord,
      title: 'Station d\'arrivée'
    })

    // this.map.addListener('dblclick', e => {
    //   this.placeMarkerAndPanTo(e.latLng, this.map)
    // })

    // this.marker.addListener('dragend', () => {
    // })

  },
  watch: {
    startCoord(value) {
      console.log("start changed")
      this.startMarker.setPosition(value)
      this.placeMarkerAndPanTo(this.startMarker, this.map)
    },
    endCoord(value) {
      this.endMarker.setPosition(value)
      this.placeMarkerAndPanTo(this.endMarker, this.map)
    }
  },
  methods: {
    placeMarkerAndPanTo(marker, map) {
      map.panTo(marker.getPosition())
    },
    geocodeLatLng(map, geoCoder, latLng, infowindow) {
      geoCoder.geocode({ location: latLng }, (results, status) => {
        if (status == 'OK') {
          // infowindow.setContent(results[0].formatted_address)
          // infowindow.open(map, this.marker)
          // // Emit to parent
          // this.$emit('makerDragged', {
          //   formattedAddress: results[0].formatted_address,
          //   lat: latLng.lat,
          //   lng: latLng.lng
          // })
        } else {
          alert('Geocoder failed due to: ' + status)
        }
      })
    }
  }
}
</script>

<style scoped>
.google-map {
  background: gray;
}
</style>