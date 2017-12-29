<template>
  <nav class="navbar navbar-inverse">
    <div class="container-fluid">
        <div class="navbar-header">
        <a class="navbar-brand" href="#">WebSiteName</a>
        </div>
        <ul class="nav navbar-nav">
        <li class="active"><a href="#">Home</a></li>
        <li><a href="#">Page 1</a></li>
        <li><a href="#">Page 2</a></li>
        <li><a href="#">Page 3</a></li>
        </ul>
    </div>
  </nav>
</template>



<script>
export default {

}
</script>


<style lang="scss" scoped>
nav {
    position: absolute;
    top: 0;
    left: -200px;
    bottom: 0;
    height: 100%;
    width: 200px;
    background-color: #323e44;
    transform: translateX(0px);
    transition: transform .6s;
}

</style>
