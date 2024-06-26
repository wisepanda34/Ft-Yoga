<!--  -->
<script setup lang='ts'>
 const swiper = useSwiper()
</script>
 
<template>

  <div class="next" @click="swiper.slideNext()"></div>
  
</template>
 
<style scoped lang='scss'>
 .next {
  width: 180px;
  height: 170px;
  background: $white;
  background-image: url(/images/next.png);
  background-size: cover;
  cursor: pointer;
 }

</style>