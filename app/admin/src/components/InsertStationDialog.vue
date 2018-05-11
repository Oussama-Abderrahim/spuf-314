<template>
  <!-- Add new Station Dialog  -->
  <v-dialog v-model="addStationDialog" scrollable max-width="30%" class="insert-dialog">
    <v-btn color="primary" dark slot="activator" @click="loadStations">Ajouter un nouvel arrêt</v-btn>
    <v-card class="insert-dialog-card">
      <v-card-title><h3>Selectionnez un arrêt</h3><v-spacer></v-spacer>
        <create-station-dialog></create-station-dialog>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text class='card-content' v-if="loading">
        <v-progress-circular indeterminate color="primary"></v-progress-circular>
      </v-card-text>
      <v-card-text class='card-content' v-if='!loading'>
        <v-text-field prepend-icon="search" label="Search" solo class="mx-3 stations-search" flat></v-text-field>
        <v-radio-group v-model="selectedNewStation" column>
          <v-radio v-for="(station, i) in stationList" 
                   :key=i :label='station.name' 
                   :value='station.id' 
                   class="stations-item">
          </v-radio>
        </v-radio-group>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="blue darken-1" flat :disabled="loading" @click.native.prevent="insert">Ajouter</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" flat @click.native="addStationDialog = false">Fermer</v-btn>
      </v-card-actions>
    </v-card>

    <!-- CREATE new Station Dialog  -->

  </v-dialog>
</template>

<script>
import CreateStationDialog from './CreateStationDialog'
export default {
  components: {
    'create-station-dialog': CreateStationDialog
  },
  props: {},
  data() {
    return {
      loading: true,
      addStationDialog: false,
      selectedNewStation: '',
      stationList: []
    }
  },
  watch: {
    addStationDialog(val) {
      val || this.closeDialog()
    }
  },
  mounted() {
    this.$station = this.$resource(
      'station{/id}',
      {},
      {},
      {
        before: () => (this.loading = true),
        after: () => (this.loading = false)
      }
    )
  },
  methods: {
    loadStations() {
      this.stationList = []
      this.$station.query().then(
        response => {
          response.body.forEach((station, i) => {
            this.stationList.push({
              id: station.ID,
              name: station.name,
              address: station.address
            })
          })
        },
        error => console.log(error)
      )
    },
    insert() {
      // If nothing selected, close and return
      if (!this.selectedNewStation && this.selectedNewStation !== 0) {
        this.closeDialog()
        return
      }

      // Fetch station's promise data
      this.$emit(
        'insertItem',
        this.$station.query({ id: this.selectedNewStation })
      )
      this.closeDialog()
    },
    closeDialog() {
      this.addStationDialog = false
    }
  }
}
</script>

<style lang="scss" scoped>
.insert-dialog {
  width: 300px;

}

.card-content {
  height: 300px;
  width: 100%;
  text-align: center;
}

.stations {
  &-search {
    width: 90%;
  }
  &-item {
    // border: 1px solid grey;
  }
}
</style>
