<template>
  <v-container id="add">
    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">{{ formTitle }}</span>
        </v-card-title>
        <v-card-text>
          <v-layout wrap>
            <v-flex xs12 sm6 md4>
              <v-text-field label="Nom de l'arrêt" v-model="editedItem.name" disabled></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md4>
              <v-text-field label="L'adresse" v-model="editedItem.address" disabled></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md4>
              <v-text-field label="Les coordonnées" v-model="editedItem.coordinates" disabled></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md4>
              <v-text-field label="La longueur" v-model="editedItem.dest"></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md4>
              <v-text-field label="Durée (mn)" v-model="editedItem.time"></v-text-field>
            </v-flex>
          </v-layout>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="save">Ajouter2</v-btn>
          <v-btn color="blue darken-1" flat @click.native="close">Fermer</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogAdd" scrollable max-width="300px">
      <v-btn color="primary" dark slot="activator">Ajouter un nouvel arrêt</v-btn>
      <v-card>
        <v-card-title>Select Country</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 300px;">
          <v-radio-group v-model="dialogm1" column>
            <v-radio label="Les castords" value="lescastords"></v-radio>
            <v-radio label="Palais de justice" value="Palaisdejustice"></v-radio>
          </v-radio-group>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="blue darken-1" flat @click.native="save">Ajouter</v-btn>
          <v-btn color="blue darken-1" flat @click.native="dialogAdd = false">Fermer</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-data-table :headers="headers" :items="items" hide-actions class="elevation-1">
      <template slot="items" slot-scope="props">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.address }}</td>
        <td class="text-xs-right">{{ props.item.coordinates }}</td>
        <td class="text-xs-right">{{ props.item.dest }}</td>
        <td class="text-xs-right">{{ props.item.time }}</td>
        <td class="justify-center layout px-0">
          <v-btn icon class="mx-0" @click="editItem(props.item)">
            <v-icon color="teal">edit</v-icon>
          </v-btn>
          <v-btn icon class="mx-0" @click="deleteItem(props.item)">
            <v-icon color="pink">delete</v-icon>
          </v-btn>
        </td>
      </template>
      <template slot="no-data">
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>




  </v-container>
</template>


<script>
  export default {
    data: () => ({
      dialog: false,
      dialogm1: '',
      dialogAdd: false,
      headers: [{
          text: 'Nom de l\'arrêt',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        {
          text: 'L\'adresse',
          value: 'adresse'
        },
        {
          text: 'Les coordonnées',
          value: 'coordonnées'
        },
        {
          text: 'La longueur (m)',
          value: 'longueur'
        },
        {
          text: 'Durée moyenne (mn)',
          value: 'durée'
        },
        {
          text: 'Actions',
          value: 'name',
          sortable: false
        }
      ],
      items: [],
      editedIndex: -1,
      editedItem: {
        name: 'arrêt',
        address: 'adresse',
        coordinates: 0,
        dest: 0,
        time: 0
      },
      defaultItem: {
        name: 'arrêt',
        address: 'adresse',
        coordinates: 0,
        dest: 0,
        time: 0
      }
    }),

    computed: {
      formTitle() {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      }
    },

    watch: {
      dialog(val) {
        val || this.close()
      }
    },

    created() {
      this.initialize()
    },

    methods: {
      initialize() {
        this.items = [{
          name: 'USTO',
          address: 'USTO',
          coordinates: 0,
          dest: 50,
          time: 2
        }]
      },

      editItem(item) {
        this.editedIndex = this.items.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem(item) {
        const index = this.items.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.items.splice(index, 1)
      },

      close() {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save() {
        if (this.editedIndex > -1) {
          Object.assign(this.items[this.editedIndex], this.editedItem)
        } else {
          this.items.push(this.editedItem)
        }
        this.close()
      }
    }
  }

</script>

<style lang="scss" scoped>


</style>
