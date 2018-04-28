<template>
  <v-container id="add" align-center>

    <v-container display-2 class="form-title">Ajout d'une nouvelle ligne</v-container>

    <v-form ref="form" align-center>
      <v-layout row>
        <v-flex xs6 md5 mx-auto>
          <v-card>
            <v-toolbar color="primary" dark>
              <v-container headline class="text-xs-center">Bus informations</v-container>
            </v-toolbar>
            <v-container class="form-bus">
              <v-text-field label="Nom du bus" v-model="bus.name"></v-text-field>
              <v-text-field label="Fréquence de bus" v-model="bus.frequence" mask="##" required></v-text-field>
              <v-text-field label="Prix du ticket" v-model="bus.price" suffix="DA" required></v-text-field>
            </v-container>
          </v-card>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex xs6 md5 mx-auto>
          <v-card>
            <v-toolbar color="primary" dark>
              <v-container headline class="text-xs-center">Schedule informations</v-container>
            </v-toolbar>
            <v-container class="form-bus">
              <v-text-field label="Temps d'attente moyen dans chaque arrêt" v-model="bus.avgWaitTime" suffix="MN:SS" mask="time" required></v-text-field>
              <v-text-field label="Temps d'attente moyen durant les heures de pointe" v-model="bus.avgStopTime" suffix="MN:SS" mask="time" required></v-text-field>
              <v-text-field label="Temps d'attente maximal" v-model="bus.maxStopTime" suffix="MN:SS" mask="time" required></v-text-field>
            </v-container>
          </v-card>

        </v-flex>
      </v-layout>


      <!-- Line data table -->
      <v-layout row wrap class="form-line">
        <v-flex xs12>
          <v-data-table :headers="tableStations.headers" :items="tableStations.items" hide-actions class="elevation-1" :class='"scroll-y"'
            style="max-height: 400px">
            <template slot="headerCell" slot-scope="props" color="primary">
              {{ props.header.text }}
            </template>
            <template slot="items" slot-scope="props">
              <!-- Data Columns  -->
              <td>{{ props.item.name }}</td>
              <td class="text-xs-left">{{ props.item.address }}</td>
              <td class="text-xs-left">{{ props.item.dist }}</td>
              <td class="text-xs-left">{{ props.item.time }}</td>

              <!-- Edit & Delete item column -->
              <td class="justify-center layout px-0">
                <v-btn icon class="mx-0" @click="editItem(props.item)">
                  <v-icon color="teal">edit</v-icon>
                </v-btn>
                <v-btn icon class="mx-0" @click="deleteItem(props.item)">
                  <v-icon color="pink">delete</v-icon>
                </v-btn>
              </td>
            </template>

            <template slot="no-data" class="align-center justify-center">
              <!-- What to show when empty -->
            </template>
          </v-data-table>
        </v-flex>

        <!-- Add new Station Dialog  -->
        <insert-station-dialog @insertItem='insertItem'></insert-station-dialog>

        <v-container class="form-btns">
          <v-btn color="primary" flat :loading='loading' @click="submit">Submit</v-btn>
          <v-btn flat>Cancel</v-btn>
        </v-container>
      </v-layout>
    </v-form>

    <!-- Edit Table line Dialog  -->
    <v-dialog v-model="editStationDialog" max-width="500px" class="dialog-editstation">
      <v-card>
        <v-card-title>
          <span class="headline">Edit Item</span>
        </v-card-title>
        <v-card-text>
          <v-layout wrap>
            <v-flex xs12 sm6 md4>
              <v-text-field label="Nom de l'arrêt" v-model="tableStations.editedItem.item.name" disabled></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md8>
              <v-text-field label="L'adresse" v-model="tableStations.editedItem.item.address" disabled></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md4>
              <v-text-field label="La longueur" v-model="tableStations.editedItem.item.dist"></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md4>
              <v-text-field label="Durée (mn)" v-model="tableStations.editedItem.item.time"></v-text-field>
            </v-flex>
          </v-layout>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.stop="saveEditedItem">Enregistrer</v-btn>
          <v-btn color="blue darken-1" flat @click.stop="closeEditDialog">Annuler</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>


<script>
import InsertStationDialog from '../components/InsertStationDialog'
import MapSection from '../components/MapSection'
import ScrollBar from '../components/scrollBar'

export default {
  components: {
    'insert-station-dialog': InsertStationDialog,
    'google-map': MapSection,
    scrollbar: ScrollBar
  },
  data() {
    return {
      loading: false,
      editStationDialog: false,
      bus: {
        name: '',
        frequence: 0,
        avgWaitTime: '00:00',
        avgStopTime: '00:00',
        maxStopTime: '00:00',
        price: 0
      },
      tableStations: {
        headers: [
          {
            text: "Nom de l'arrêt",
            align: 'left',
            sortable: false,
            value: 'name'
          },
          {
            text: "L'adresse",
            align: 'left',
            sortable: false,
            value: 'adresse'
          },
          {
            text: 'La longueur (m)',
            align: 'left',
            sortable: false,
            value: 'longueur'
          },
          {
            text: 'Durée moyenne (mn)',
            align: 'left',
            sortable: false,
            value: 'durée'
          },
          {
            text: 'Actions',
            align: 'left',
            sortable: false,
            value: 'name'
          }
        ],
        items: [],
        editedItem: {
          index: -1,
          item: {
            ID: -1,
            name: 'arrêt',
            address: 'adresse',
            dist: 0,
            time: 0
          },
          default: {
            ID: -1,
            name: 'arrêt',
            address: 'adresse',
            dest: 0,
            time: 0
          }
        }
      }
    }
  },
  computed: {},
  watch: {
    editStationDialog(val) {
      val || this.closeEditDialog()
    }
  },
  created() {
    this.initialize()
    this.$line = this.$resource(
      'line{/id}',
      {},
      {},
      {
        before: () => (this.loading = true),
        after: () => (this.loading = false)
      }
    )
  },
  methods: {
    initialize() {
      this.tableStations.items = []
    },
    editItem(item) {
      this.tableStations.editedItem.index = this.tableStations.items.indexOf(
        item
      )
      this.tableStations.editedItem.item = Object.assign({}, item)
      this.editStationDialog = true
    },
    deleteItem(item) {
      const index = this.tableStations.items.indexOf(item)
      confirm('Etes vous sûr de vouloir supprimer cette station ?') &&
        this.tableStations.items.splice(index, 1)
    },
    closeEditDialog() {
      this.editStationDialog = false
      setTimeout(() => {
        this.tableStations.editedItem.item = Object.assign(
          {},
          this.tableStations.editedItem.default
        )
        this.tableStations.editedItem.index = -1
      }, 300)
    },
    saveEditedItem() {
      Object.assign(
        this.tableStations.items[this.tableStations.editedItem.index],
        this.tableStations.editedItem.item
      )
      this.closeEditDialog()
    },
    insertItem(itemPromise) {
      this.loading = true
      itemPromise.then(
        response => {
          let station = response.body
          let item = {
            ID: station.ID,
            name: station.name,
            address: station.address,
            time: 0,
            dist: 0
          }
          this.tableStations.items.push(item)
          this.loading = false
        },
        error => {
          console.log(error)
          alert('Error')
        }
      )
    },
    submit() {
      let line = {
        name: this.bus.name,
        bus: {
          name: this.bus.name,
          price: this.bus.price,
          frequence: this.bus.frequence,
          avgWaitTime: this.bus.avgWaitTime
        },
        lineStations: []
      }
      this.tableStations.items.forEach(station => {
        line.lineStations.push({
          stationID: station.ID,
          distFromPrev: station.dist,
          timeFromPrev: station.time
        })
      })

      this.$line.save({}, line).then(
        response => {
          console.log(response)
          this.initialize()
          alert('Line ', response.body.name, ' added')
        },
        responseError => {
          console.log(responseError)
          alert('error')
        }
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.form-title {
  text-align: center;
  margin-bottom: 40px;
}
.form-bus .v-text-field {
  font-size: 1em;
}

.form-line {
  margin-top: 50px;
}

.form-btns {
  text-align: center;
}
</style>
