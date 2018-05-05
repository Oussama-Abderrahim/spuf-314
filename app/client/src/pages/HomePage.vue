<template>
    <v-content align-center justify-center fill-height>
        <full-page :options='fullPageOptions'>
          <welcome-page  :class='"section"'/>
          <request-page  :class='"section"'/>
          <info-page :class='"section"'/>
        </full-page>

        <!-- <v-footer height="auto" class="footer">
          <v-card
            flat
            tile
            class="indigo lighten-1 white--text text-xs-center"
          >
            <v-card-text>
              <v-btn
                v-for="icon in icons"
                :key="icon"
                icon
                class="mx-3 white--text"
              >
                <v-icon size="24px">{{ icon }}</v-icon>
              </v-btn>
            </v-card-text>
            <v-card-text class="white--text pt-0">
              Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </v-card-text>
            <v-card-text class="white--text">
              &copy;2018 — <strong>Vuetify</strong>
            </v-card-text>
          </v-card>
        </v-footer> -->
    </v-content>

    <!-- <v-footer app>
      <span>&copy; SPUF 2018</span>
    </v-footer> -->
</template>

<script>
/* eslint-disable */
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
  data() {
    return {
      icons: ['fab fa-facebook', 'fab fa-twitter', 'fab fa-google-plus', 'fab fa-linkedin', 'fab fa-instagram'],
      fullPageOptions: {
        // scrollBar: true,
        navigation: true,
        sectionsColor: ['#41b883', '#41b883', '#41b883'],
        lockAnchors: false, // Determines whether anchors in the URL will have any effect at all in the library
        anchors: ['mainPage', 'requestPage', 'infoPage'],
        navigationPosition: 'right',
        navigationTooltips: ['About', 'Trouver Chemin', 'Informations'],
        showActiveTooltip: true,
        slidesNavigation: false,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 100,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        // dragAndMove: 'fingersonly',
        offsetSections: false, // Provides a way to use non full screen sections based on percentage
        resetSliders: false, // Defines whether or not to reset every slider after leaving its section
        fadingEffect: false,
        normalScrollElements: '.prevent-scroll, .footer', // If you want to avoid the auto scroll when scrolling over some elements
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: false,
        sectionsColor: ['#ccc', '#fff'],
        paddingTop: '3em',
        paddingBottom: '10px',
        fixedElements: '#topbar',

        lazyLoading: true
      }
    }
  },
  computed: {},
  methods: {},
  beforeMount() {
    // Destory FullPage to instanciate it again
    if ($('html').hasClass('fp-enabled')) {
      $.fn.fullpage.destroy('all')
    }
  },
  mounted() {
    console.log('home page mounted')
  },
  beforeDestroy() {
    if ($('html').hasClass('fp-enabled')) {
      $.fn.fullpage.destroy('all')
    }
  }
}
</script>

<style lang="scss">
$background: url('../assets/img/Rue Khemisti.jpg');
#app {
  margin: 0;
  border: 0;
  height: 100%;
  width: 100%;
}

.section {
  position: relative;
  // height: 100%;
  // max-height: 100%;
  width: 100%;
  max-width: 100%;
  padding: 0;
  background: $background no-repeat;
  background-size: cover;
  background-repeat: no-repeat;
  // background-attachment: fixed;
}

// #fp-nav {

// }
</style>
