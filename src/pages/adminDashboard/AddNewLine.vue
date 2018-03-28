<template>
  <v-container id="add">

    <v-form ref="form">

      <v-layout row >
        <v-flex xs12 md6 mx-auto>
          <v-container  class="form-bus">
            <v-text-field label="Nom du bus" v-model="bus.name"></v-text-field>
            <v-text-field label="Fréquence de bus" v-model="bus.frequence" mask="##" required></v-text-field>
            <v-text-field label="Temps d'attente moyen dans chaque arrêt" v-model="bus.avgWaitTime" suffix="MN:SS" mask="time" required></v-text-field>
            <v-text-field label="Temps d'attente moyen durant les heures de pointe" suffix="MN:SS" mask="time" required></v-text-field>
            <v-text-field label="Temps d'attente maximal" v-model="bus.maxWaitTime" suffix="MN:SS" mask="time" required></v-text-field>
            <v-text-field label="Prix du ticket" v-model="bus.price" suffix="DA" required></v-text-field>
          </v-container>
        </v-flex>
      </v-layout>


      <!-- Line data table -->
      <v-layout row wrap>
        <v-flex xs12>
          <v-data-table :headers="tableStations.headers" :items="tableStations.items" hide-actions class="elevation-1">

            <template slot="items" slot-scope="props">
              <!-- Data Columns  -->
              <td>{{ props.item.name }}</td>
              <td class="text-xs-left">{{ props.item.address }}</td>
              <td class="text-xs-left">{{ props.item.coords }}</td>
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
              <v-btn color="primary" dark>Ajouter un nouvel arrêt</v-btn>
            </template>
          </v-data-table>
        </v-flex>

      <!-- Add new Station Dialog  -->
      <v-dialog v-model="addStationDialog" scrollable max-width="300px" class="dialog-addstation">
        <v-btn color="primary" dark slot="activator" @click="loadStations">Ajouter un nouvel arrêt</v-btn>
        <v-card>
          <v-card-title>Selectionnez une station</v-card-title>
          <v-divider></v-divider>
          <v-card-text style="height: 300px;">
            <v-radio-group v-model="selectedNewStation" column>
              <v-radio v-for="(station, i) in tableStations.stationList" :key=i :label='station.name' :value='station.id'></v-radio>
            </v-radio-group>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn color="blue darken-1" flat @click.native="save">Ajouter</v-btn>
            <v-btn color="blue darken-1" flat @click.native="addStationDialog = false">Fermer</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-container class="form-btns">
        <v-btn color="primary" flat @click="submit">Submit</v-btn>
        <v-btn flat>Cancel</v-btn>
      </v-container>
      </v-layout>
    </v-form>

    <!-- Edit Table line Dialog  -->
      <v-dialog v-model="editStationDialog" max-width="500px" class="dialog-editstation">
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>
          <v-card-text>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Nom de l'arrêt" v-model="tableStations.editedItem.name" disabled></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="L'adresse" v-model="tableStations.editedItem.address" disabled></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Les coordonnées" v-model="tableStations.editedItem.coords" disabled></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="La longueur" v-model="tableStations.editedItem.dist"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Durée (mn)" v-model="tableStations.editedItem.time"></v-text-field>
              </v-flex>
            </v-layout>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click.prevent="save">Enregistrer</v-btn>
            <v-btn color="blue darken-1" flat @click.prevent="close">Annuler</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      

  </v-container>
</template>


<script>
  export default {
    data () {
      return {
        editStationDialog: false,
        selectedNewStation: '',
        addStationDialog: false,
        bus: {
          name: '',
          frequence: 0,
          avgWaitTime: '00:00',
          maxWaitTime: '00:00',
          price: 0
        },
        tableStations: {
          headers: [
            {
              text: 'Nom de l\'arrêt',
              align: 'left',
              sortable: false,
              value: 'name'
            },
            {
              text: 'L\'adresse',
              align: 'left',
              sortable: false,
              value: 'adresse'
            },
            {
              text: 'Les coordonnées',
              align: 'left',
              sortable: false,
              value: 'coordonnées'
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
          stationList: [],
          items: [],
          editedIndex: -1,
          editedItem: {
            name: 'arrêt',
            address: 'adresse',
            coords: 0,
            dist: 0,
            time: 0
          },
          defaultItem: {
            name: 'arrêt',
            address: 'adresse',
            coordinates: 0,
            dest: 0,
            time: 0
          }
        }
      }
    },
    computed: {
      formTitle () {
        return this.tableStations.editedIndex === -1 ? 'New Item' : 'Edit Item'
      }
    },
    watch: {
      editStationDialog (val) {
        val || this.close()
      }
    },
    created () {
      this.initialize()
    },
    methods: {
      initialize () {
        // TODO : Fetch stations here
        this.tableStations.items = []
      },
      loadStations () {
        this.tableStations.stationList = []
        this.$http
          .get('https://project314.herokuapp.com/api/station')
          .then(response => {
          // success callback
            console.log(response.body)
            response.body.forEach((station, i) => {
              this.tableStations.stationList.push({
                id: station.id,
                name: station.name
              })
            })
          }, error => console.log(error))
      },
      editItem (item) {
        this.tableStations.editedIndex = this.tableStations.items.indexOf(item)
        this.tableStations.editedItem = Object.assign({}, item)
        this.editStationDialog = true
      },
      deleteItem (item) {
        const index = this.tableStations.items.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.tableStations.items.splice(index, 1)
      },
      close () {
        this.editStationDialog = false
        setTimeout(() => {
          this.tableStations.editedItem = Object.assign({}, this.tableStations.defaultItem)
          this.tableStations.editedIndex = -1
        }, 300)
      },
      save () {
        this.$http
          .get(`https://project314.herokuapp.com/api/station/${this.selectedNewStation}`)
          .then(response => {
            var station = response.body
            this.tableStations.items.push({
              id: station.id,
              name: station.name,
              coords: '(' + station.coord.lat + ';' + station.coord.lon + ')',
              address: station.address,
              time: 0,
              dist: 0
            })
          }, error => {
            console.log(error)
            alert('Error')
          })
        this.close()
      },
      submit () {
        console.log(this.tableStations)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .form-bus .v-text-field {
    font-size: 1em
  }

  .form-btns {
    text-align: center;
  }
</style>