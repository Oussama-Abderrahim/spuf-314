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
                 :placeholder='placeholder' 
                 :loading="isLoading"
                 :clear-on-select="true" 
                 :options-limit='optionsLimit'
                 :max-height='maxHeight'
                 :show-no-results="false">
      <template slot="tag" slot-scope="props">
        {{ props.option.name }}
      </template>
    </multiselect>
  </v-container>
</template>

<script>
import Multiselect from 'vue-multiselect'

export default {
  props: {
    value: '',
    optionsLimit: {type: Number, default: 20},
    maxHeight: {type: Number, default: 600},
    label: { type: String, default: 'Select with search' },
    placeholder: { type: String, default: 'Select One' }
  },
  watch: {
    selectedOption() {
      this.$emit('input', this.selectedOption.name)
    }
  },
  components: {
    Multiselect
  },
  data() {
    return {
      defaultObject: {
        ID: '0',
        name: 'ExampleStation',
        address: 'Example Address'
      },
      selectedOption: this.defaultObject,
      options: [],
      isLoading: false
    }
  },
  methods: {
    asyncFind(query) {
      this.isLoading = true
      this.$http
        .get(`https://project314.herokuapp.com/api/station/`)
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

.multiselect-container .multiselect__tags {
  border-radius: 1px;
}
</style>
