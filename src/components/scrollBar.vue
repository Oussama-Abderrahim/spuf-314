<template>
  <div class ="scrollbar">
      <slot :class="force-overflow"></slot>
  </div>
</template>



<script>
export default {

}
</script>


<style lang="scss" scoped>
 .scrollbar
  {
      margin-left: 30px;
      float: left;
      height: 70%;
      width: 80%;
      background: #F5F5F5;
      overflow-y: scroll;
      margin-bottom: 25px;
  }

  .force-overflow
  {
      min-height: 450px;
  }

</style>
