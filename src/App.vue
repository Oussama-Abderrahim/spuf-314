<template>
  <div id="app">
    <transition name="slide">
      <router-view></router-view>
    </transition>

    <ul class="timeline-nav">
      <li class="timeline-nav-link" v-for="(page,i) in pages" :key="i" @click.prevent="goto(i)">
        <router-link tag="a" :class="{active : i === index}" :to='"/"+page'></router-link>
      </li>
    </ul>

    <button class="menu-trigger">
      <i>///</i>
    </button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      index: 0,
      pages: ['welcome', 'about', 'welcome', 'about']
    }
  },
  methods: {
    goto (i) {
      this.index = i
      console.log(this.index)
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
  overflow: hidden;
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
  appearance: none;
  border: none;
  background-color: #000;
  color: #FFF;
  border-radius: 100%;
}

.slide-enter-active {
  background-color: rgba(0,0,0,0);
  animation: slide-in .5s;
}
.slide-leave-active {
  position: absolute;
}

@keyframes slide-in {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
}
</style>
