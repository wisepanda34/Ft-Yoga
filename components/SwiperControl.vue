<!--  -->
<script setup lang='ts'>
 const swiper = useSwiper()
</script>
 
<template>

  <div class="next" @click="swiper.slideNext()">
    <NuxtImg class="next__img" src="/images/next.png" alt="next"/>
  </div>
  
</template>
 
<style scoped lang='scss'>
 .next {
  width: 180px;
  height: 240px;
  background: $white;

  cursor: pointer;
  z-index: 101;

  display: flex;
  justify-content: center;
  align-items: center;

  &__img {
    width: 180px;
    height: 170px;

    &:hover {
      transform: scale(1.02);
    }
  }

  @media (min-width: 1179px) {
    .next {
      width: 180px;
      height: 240px;
    }
  }
 }

 @media (max-width: 650px) {
    .next {
      width: 90px;
      height: 85px;

      &__img {
        width: 90px;
        height: 85px;
    }
  }
}
</style>