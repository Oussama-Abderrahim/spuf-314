<template>
  <div id="info">
  <div class="blur"></div>
    

  </div>
</template>



<script>
  
</script>

<style lang="scss" scoped>
  #info {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background: url("../assets/img/bg3.jpg") no-repeat center center fixed;
    background-size: cover;

    height: 100%;
    width: 100%;
    margin: auto;

    color: black;
  }

  .blur {
    background: url('../assets/img/bg3.jpg') no-repeat center center fixed;
    background-size: cover;
    overflow: hidden;
    filter: blur(10px);
    position: absolute;
    
   height: 750px;
   width: 70%;
   margin: auto;
   top: 10%;
   bottom: 0;
   left: 0;
   right: 0;
  }
  
</style>
