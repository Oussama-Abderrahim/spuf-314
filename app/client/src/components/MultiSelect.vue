<template>
  <v-container class="multiselect-container">
    <label class="typo__label" for='ajax'>{{ label }}</label>

    <multiselect v-model="selectedOption" 
                 id='ajax'
                 label ='name' 
                 track-by="ID" 
                 :searchable="true"
                 @search-change="asyncFind"
                 :options="options" 
                 :placeholder='currentPlaceholder' 
                 :loading="isLoading"
                 :clear-on-select="false" 
                 :preserveSearch='true'
                 :close-on-select="true"
                 :options-limit='optionsLimit'
                 :max-height='maxHeight'
                 :show-no-results="false">
      <template slot="tag" slot-scope="props">
        {{ props.option.name }}
        <!-- <span>{{ props.option.address }}</span> -->
      </template>
    </multiselect>
  </v-container>
</template>

<script>
import Multiselect from 'vue-multiselect'

export default {
  props: {
    value: '',
    optionsLimit: { type: Number, default: 20 },
    maxHeight: { type: Number, default: 600 },
    label: { type: String, default: 'Select with search' },
    placeholder: { type: String, default: 'Select One' }
  },
  watch: {
    currentSearch() {
      if (this.currentSearch) this.currentPlaceholder = this.currentSearch
      else this.currentPlaceholder = this.placeholder
    },
    selectedOption() {
      if (this.selectedOption) {
        this.currentSearch = this.selectedOption.name
        this.$emit('input', this.selectedOption.name)
        this.$emit('stationSelected', this.selectedOption)
      } else {
        this.currentSearch = ''
      }
    }
  },
  components: {
    Multiselect
  },
  data() {
    return {
      currentPlaceholder: this.placeholder,
      currentSearch: '',
      defaultObject: {
        ID: '0',
        name: 'ExampleStation',
        address: 'Example Address',
        coords: { lat: 35.69111, lon: -0.64167 }
      },
      selectedOption: null,
      options: [],
      isLoading: false
    }
  },
  mounted() {},
  methods: {
    keepText() {
      this.search = this.selectedOption.name
    },
    asyncFind(query) {
      this.currentSearch = query
      this.isLoading = true
      this.$http
        .get(`station/`)
        .then(response => {
          console.log('query', query)
          this.options = response.body
          this.isLoading = false
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css">
</style>


<style lang="scss">
.typo__label {
  font-weight: 800;
  font-size: 1.4;
}

.multiselect-container {
  padding-left: 0;
  padding-right: 0;
  padding-bottom: 0;
  .multiselect__tags {
    border-radius: 1px;
  }
}
</style>
