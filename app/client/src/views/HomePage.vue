<template>
    <v-content align-center justify-center fill-height>
        <full-page :options='fullPageOptions'>
          <landing-page  :class='"section"'/>
          <request-page  :class='"section"'/>
          <info-page :class='"section"'/>
        </full-page>
    </v-content>
</template>

<script>
/* eslint-disable */
import WelcomePage from './Landing'
import RequestPage from './RequestPage'
import InfoPage from './InfoTransportPage'
import FullPage from 'vue-fullpage.js/src/FullPage'

export default {
  name: 'app',
  components: {
    'landing-page': WelcomePage,
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
        sectionsColor: [],
        lockAnchors: false, // Determines whether anchors in the URL will have any effect at all in the library
        anchors: ['mainPage', 'requestPage', 'infoPage'],
        navigationPosition: 'right',
        navigationTooltips: ['Acceuil', 'Trouver Chemin', 'Informations'],
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
</style>
