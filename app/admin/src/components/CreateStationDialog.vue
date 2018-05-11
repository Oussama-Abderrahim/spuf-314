<template>
  <v-dialog v-model="dialogCreate" fullscreen  :overlay="false">
    <v-btn color="primary" dark slot="activator" @click.stop="dialogCreate = true">Créer</v-btn>

    <v-card>
      <v-toolbar dark color="primary">
        <v-toolbar-title>Créer un nouvel arrêt</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn dark flat @click.native="dialogCreate = false">
          <v-icon>close</v-icon>
        </v-btn>
      </v-toolbar>

      <v-container tag='form' @submit.prevent='submit' id="create-station" fill-height>
        <v-layout row wrap>
          <v-flex xs6>
            <v-layout row wrap align-center>

              <!-- CHAMP NOM STATION -->
              <v-flex xs8>
                <v-container title>Informations générales:</v-container>
                <v-text-field label="Nom de la station" v-model="station.name" required></v-text-field>
                <v-text-field label="Adresse de la station" v-model="station.address" required></v-text-field>
                <v-text-field name="input-1-3" label="Informations sur la station" class="coordonnees-info"></v-text-field>
                <br>

                <v-container title prepend-icon="place">Les coordonnées:</v-container>
                <v-text-field name="input-1-3" label="Longitude" v-model="station.coordLon" required></v-text-field>
                <v-text-field name="input-1-3" label="Latitude" v-model="station.coordLat" required></v-text-field>

                <v-btn small fab dark color="black">
                  <v-icon dark>add</v-icon>
                </v-btn>

              </v-flex>
            </v-layout>

          </v-flex>



          <v-flex xs6>
            <v-layout row wrap align-center>
              <!-- CHAMP MAP -->
              <v-flex xs12 class="map">
                <google-map name="creatStation" @makerDragged='updateFromMap' class="google-map"></google-map>
              </v-flex>

              <!-- CHAMP BUTTONS -->
              <v-flex xs12 align-center>
                <v-container class="buttons" align-center>
                  <v-btn type="submit" :loading='loading'>Ajouter</v-btn>
                  <v-btn type="cancel" @click.native="dialogCreate = false">Annuler</v-btn>
                </v-container>
              </v-flex>
            </v-layout>
            <v-layout>
            </v-layout>
          </v-flex>

        </v-layout>

      </v-container>

    </v-card>
  </v-dialog>
</template>



<script>
/*  eslint-disable */
import MapSection from '../components/MapSection'

export default {
  name: 'creatStation',
  components: {
    'google-map': MapSection
  },
  data() {
    return {
      dialogCreate: false,
      loading: false,
      station: {
        name: '',
        address: '',
        coordLat: '',
        coordLon: ''
      }
    }
  },
  mounted() {
    this.$station = this.$resource(
      'station{/id}',
      {},
      {},
      {
        before: () => {
          this.loading = true
        },
        after: () => {
          this.loading = false
        }
      }
    )
  },
  methods: {
    clear() {
      this.station.name = ''
      this.station.address = ''
      this.station.coordLat = ''
      this.station.coordLon = ''
    },
    updateFromMap(position) {
      this.station.address = position.formattedAddress
      this.station.coordLat = position.lat()
      this.station.coordLon = position.lng()
    },
    submit() {
      if (this.station.name && this.station.coordLat && this.station.coordLon) {
        confirm('Etes vous sûr de vouloir ajouter cette station ?') &&
          this.$station.save({}, { ...this.station }).then(
            response => {
              alert('Station added successfully')
              this.clear()
            },
            error => {
              console.log(err)
              alert('An error occured')
            }
          )
      } else {
        alert("Please fill the required fields")
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#create-station {
  position: relative;
  overflow: hidden;
  margin: auto;
  width: 80%;
  max-width: 100%;
  display: flex;
  color: black;
}

.push_down {
  margin-bottom: 30px;
}

.push_up {
  margin-top: 30px;
}

.map {
  overflow: hidden;
  position: relative;
  padding: 0;
  margin: 20px;
  width: 200px;
  height: 500px;
  border: 1px solid black;
  margin-top: 60px;

  .google-map {
    position: relative;
    width: 100%;
    height: 100%;
  }
}

.buttons {
  text-align: center;
}

.coordonnees-info {
  margin-top: 0px;
}
</style>
