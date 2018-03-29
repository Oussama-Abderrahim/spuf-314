<template>
  <v-app id="app">
    <sidebar></sidebar>

    <v-content>
      <v-container class="main-content" fluid fill-height>
        <transition :name="slideDirection">
          <router-view></router-view>
        </transition>
      </v-container>

      <ul class="timeline-nav">
        <li class="timeline-nav-link" v-for="(page,i) in pages" :key="i" @click.prevent="goto(i)">
          <router-link tag="a" :class="{active : i == index}" :to='"/"+page'></router-link>
        </li>
      </ul>
      <button class="menu-trigger" v-if="!sideBarOn" @click.prevent='showSideBar'>
        <i class="fa fa-bars"></i>
      </button>
    </v-content>

    <v-footer app>
      <span>&copy; SPUF 2018</span>
    </v-footer>

  </v-app>
</template>

<script>
  /* eslint-disable */
  import SideBar from './components/sideBar'

  export default {

    name: 'app',
    components: {
      'sidebar': SideBar
    },
    data() {
      return {
        prev: 0,
        pages: ['/', 'request', 'response', 'info', 'about'],
        slideDirection: 'slide-down', // The slide transition name we'll use ( up/down )
      }
    },
    computed: {
      sideBarOn() {
        return false
      },
      index: {
        set(value) {
          if (this.index !== value) {
            this.goto(value)
          }
        },
        get() {
          var i = this.pages.indexOf(this.$route.path.substring(1))
          return (i > 0) ? i : 0
        }
      }
    },
    methods: {
      showSideBar() {
        this.sidebar.drawer = true
      },
      goto(i) {
        // rotate index
        i = (i + this.pages.length) % this.pages.length
        // update direction
        if (i > this.prev) this.slideDirection = 'slide-down'
        else this.slideDirection = 'slide-up'
        // change page
        setTimeout(() => {
          this.index = i
          this.prev = this.index
        }, 250)
      },
      slideUp() {
        this.goto(this.index - 1)
      },
      slideDown() {
        this.goto(this.index + 1)
      }
    },
    mounted() {
    }
  }

</script>

<style lang="scss">
  // Buttons 
  $timeline-link-size: 8px;
  $timeline-link-size-active: 10px;

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

  .timeline-nav {
    position: absolute;
    right: 50px;
    top: 50%;
    list-style-type: none;
    transform: translateY(-50%);

    &-link {
      margin: 5px 0;
      text-align: center;

      a {
        display: inline-block;
        width: $timeline-link-size;
        height: $timeline-link-size;
        background-color: #000;
        border: 1px solid #000;
        border-radius: 100%;
        opacity: 0.7;
      }
      a:hover,
      a.active {
        background-color: #FFF;
        opacity: 1;
        width: $timeline-link-size-active;
        height: $timeline-link-size-active;
      }
    }
  }

  .menu-trigger {
    position: absolute;
    top: 50%;
    left: 40px;
    height: 35px;
    width: 35px;
    transform: rotate(-20deg);
    transform: translateY(-50%);
    outline: none;
    border: none;
    border-radius: 100%;
    background-color: #000;
    color: #FFF;

  } // SLIDE ANIMATION
  @import "assets/css/slide-animation";

</style>
