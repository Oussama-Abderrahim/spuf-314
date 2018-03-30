<template>
  <v-app id="app">
    <v-content align-center justify-center>
        <full-page :options='fullPageOptions'>
          <div class="section">
            <welcome-page/>
          </div>
          <div class="section">
            <request-page/>
          </div>
          <div class="section">
            <info-page/>
          </div>
        </full-page>
    </v-content>

    <v-footer app>
      <span>&copy; SPUF 2018</span>
    </v-footer>

  </v-app>
</template>

<script>
  import WelcomePage from './welcomePage'
  import RequestPage from './RequestPage'
  import InfoPage from './InfoTransportPage'
  import FullPage from 'vue-fullpage.js/src/FullPage'

  export default {
    name: 'app',
    components: {
      'welcome-page': WelcomePage,
      'request-page': RequestPage,
      'info-page': InfoPage,
      'full-page': FullPage
    },
    data () {
      return {
        fullPageOptions: {
          // scrollBar: true,
          navigation: true,
          sectionsColor: ['#41b883', '#41b883', '#41b883']
        }
      }
    },
    computed: {
    },
    methods: {
    },
    mounted () {
    }
  }
</script>

<style lang="scss">
  #app {
    margin: 0;
    border: 0;
    height: 100%;
    width: 100%;
  }

  .main-content {
    height: 100%;
    max-height: 100%;
    padding: 0;
  }
</style>
