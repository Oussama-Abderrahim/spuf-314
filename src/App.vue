<template>
  <div id="app">
    <transition name="slide" mode="in-out">
      <router-view></router-view>
    </transition>

    <ul class="timeline-nav">
      <li class="timeline-nav-link" v-for="(page,i) in pages" :key="i" @click.prevent="goto(i)">
        <router-link tag="a" :class="{active : i === index}" :to='"/"+page'></router-link>
      </li>
    </ul>

    <button class="menu-trigger">
      <i class="fa fa-bars"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      index: 0,
      pages: ['welcome', 'about']
    }
  },
  methods: {
    goto (i) {
      i = (i + this.pages.length) % this.pages.length
      setTimeout(() => {
        this.index = i
        this.$router.push({ path: '/' + this.pages[i] })
      }, 250)
    },
    slideUp () {
      this.goto(this.index - 1)
      console.log('scrolled')
    },
    slideDown () {
      this.goto(this.index + 1)
    }
  }
}
</script>

<style lang="scss">

// Buttons 
$timeline-link-size : 8px;
$timeline-link-size-active : 10px;

#app {
  margin : 0;
  border : 0;
  height: 100%;
  width: 100%;
}


.timeline-nav {
  position: absolute;
  right : 50px;
  top: 50%;
  list-style-type: none;
  transform: translateY(-50%);

  &-link {
    margin: 5px 0;
    text-align: center;

    &:hover {}
    a {
      display: inline-block;

      width: $timeline-link-size;
      height: $timeline-link-size;
      background-color: #000;
      border: 1px solid #000;
      border-radius: 100%;

      opacity: 0.7;
    }

    a:hover, a.active {
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
  left: 25px;
  height: 25px;
  width: 25px;
  transform: translateY(-50%);
  
  border: none;
  border-radius: 100%;
  background-color: #000;
  color: #FFF;
}

.slide-enter-active {
  animation: slide-in 1s;
  position: absolute;
  top:0;
  left: 0;
}

.slide-leave-active {
  position: absolute;
  z-index: -1;
  top:0;
  left: 0;
}


@keyframes slide-in {
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
}

@keyframes slide-out {
  from { transform: translateY(0); }
  to { transform: translateY(-100%); }
}
</style>
