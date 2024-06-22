<!-- components/UI/Decor.vue -->
<script setup lang='ts'>
 
</script>
 
<template>
  <div class="decor float-x">
    <span class="decor__image float-y"></span>
  </div>
</template>
 
<style scoped lang='scss'>
 .decor {

  &__image {
      display: inline-block;
      width: 50px; 
      height: 50px; 
      background-image: url(/images/rounds.png); 
      background-size: cover; 
      background-position: center; 
      background-repeat: no-repeat;
    }
 }

 @media (max-width: 600px) {
  .decor {
    &__image {
      width: 30px;
      height: 30px;
    }
  }
 }
</style>