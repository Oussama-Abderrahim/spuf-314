<template>
  <div id="about">
  <div class="blur"></div>
    <div class="ui message error">
      This is the about page
    </div>
  </div>
</template>



<script>
export default {

}
</script>

<style>
#about {
  background: url("../assets/img/bg2.jpg");
  background-size: cover;
  background-repeat: no-repeat;

  height: 100%;
  width: 100%;
  margin: auto;
  text-align: center;
}

.blur {
    background: url('../assets/img/bg4.jpg') no-repeat center center fixed;
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
