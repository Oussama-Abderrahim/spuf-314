<template>
  <div class="google-map" :id="mapName"></div>
</template>

<script>
/*  eslint-disable */

export default {
  name: 'google-map',
  props: ['name'],
  data: function() {
    return {
      mapName: this.name + '-map',
      marker: null,
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
    this.marker = new google.maps.Marker({
      map: this.map,
      draggable: true,
      position: intialCoord,
      title: 'Marquer la station'
    })

    this.map.addListener('dblclick', e => {
      this.placeMarkerAndPanTo(e.latLng, this.map)
    })

    this.marker.addListener('dragend', () => {
      this.map.setZoom(this.map.getZoom() + 1)
      this.map.setCenter(this.marker.getPosition())
      this.geocodeLatLng(
        this.map,
        this.geoCoder,
        this.marker.getPosition(),
        this.infowindow
      )
    })

  },
  methods: {
    placeMarkerAndPanTo(latLng, map) {
      this.marker.setPosition(latLng)
      map.panTo(latLng)
    },
    geocodeLatLng(map, geoCoder, latLng, infowindow) {
      geoCoder.geocode({ location: latLng }, (results, status) => {
        if (status == 'OK') {
          infowindow.setContent(results[0].formatted_address)
          infowindow.open(map, this.marker)
          // Emit to parent
          this.$emit('makerDragged', {
            formattedAddress: results[0].formatted_address,
            lat: latLng.lat,
            lng: latLng.lng
          })
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
