<template>
  <div class="google-map" :id="mapName"></div>
</template>

<script>
/*  eslint-disable */

export default {
  name: 'google-map',
  props: ['name', 'coords'],
  data: function() {
    return {
      mapName: this.name + '-map',
      markers: [],
      bounds: null,
      geoCoder: null,
      infowindow: null,
      map: null
    }
  },
  mounted: function() {
    const initialCoord = { lat: 35.69111, lng: -0.64167 }

    const element = document.getElementById(this.mapName)
    const options = {
      zoom: 14,
      center: initialCoord
    }
    this.map = new google.maps.Map(element, options)
    this.geoCoder = new google.maps.Geocoder()
    this.infowindow = new google.maps.InfoWindow()
    this.bounds = new google.maps.LatLngBounds()

    // Create a marker and set its position.

    // this.map.addListener('dblclick', e => {
    //   this.placeMarkerAndPanTo(e.latLng, this.map)
    // })

    // this.marker.addListener('dragend', () => {
    // })
  },
  watch: {
    coords(arr) {
      // fill markers array if new coords added
      while (this.markers.length < arr.length) this.markers.push(null)
      // update all elements
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] && this.markers[i]) {
          this.markers[i].setPosition(arr[i])
          this.updateBounds()
        } else if (arr[i] && !this.markers[i]) {
          this.$set(this.markers,i, new google.maps.Marker({
              map: this.map,
              draggable: false,
              position: arr[i],
              title: ''
            })
          )
          this.bounds.extend(this.markers[i].getPosition())
        } else {
          continue
        }
        // finally, update on map
        this.map.fitBounds(this.bounds)
        this.map.setCenter(this.bounds.getCenter());
      }
    }
  },
  methods: {
    updateBounds() {
      this.bounds = new google.maps.LatLngBounds()
      this.markers.forEach(marker => {
        if(marker) this.bounds.extend(marker.getPosition())
      })
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
