<template>
  <v-container>
    <label class="typo__label">{{ label }}</label>
    <multiselect v-model="value" :options="options" :placeholder='placeholder' label="name" track-by="name">
      <template slot="tag" slot-scope="props">
        <span class="custom__tag">
          <span>{{ props.option.language  }}</span>
          <span class="custom__remove" @click="props.remove(props.option)">❌</span>
        </span>
      </template>
    </multiselect>
  </v-container>
</template>

<script>
import Multiselect from 'vue-multiselect'

export default {
  props: {
    label: {type: String, default: 'Select with search'},
    placeholder: {type: String, default: 'Select One'}
  },
  components: {
    Multiselect
  },
  data() {
    return {
      value: '',
      options: [
        {
          name: 'Vue.js',
          language: 'JavaScript'
        }
      ]
    }
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style lang="scss" scoped>

</style>
