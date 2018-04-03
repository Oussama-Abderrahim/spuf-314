<template>
  <div id="info">
  </div>
</template>

<script>
  export default {
    name: 'info'
  }

</script>

<style lang="scss" scoped>
  $background: url("../assets/img/Chapelle de Santa Cruz.jpg"); // $blurred-img: url("https://lh3.googleusercontent.com/-m8TxQMObg6c/U474EWu7Y9I/AAAAAAAAI2k/xkRGoIEC1iU/s1600/blur.jpg");
  $blurred-img: url("../assets/img/blur_bg.jpg");

  #info {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    max-width: 100%;
    display: flex;
    color: black;
    background: $background no-repeat;
    background-size: cover;
    background-attachment: fixed;
  }

  .blurred-bg {
    background: url($blurred-img) fixed center;
    background-repeat: no-repeat;
    background-size: 100vw auto;
    background-position: fixed;
    background-attachment: fixed;

    &.tinted {
      // background-image: $blurred-img;
      background: $blurred-img, -webkit-linear-gradient(0deg, rgba(255, 255, 255, .2), rgba(255, 255, 255, .2)) fixed center;
      background-repeat: no-repeat;
      background-position: fixed;
      background-size: cover;
      background-attachment: fixed;
    }
  }

</style>
