<!-- Healthy.vue -->
<script setup lang='ts'>
 
 const handleStart = () => {
  console.log('handleStart');
  
 }
</script>
 
<template>
  <section class="healthy">
    <div class="healthy__picture">
      <NuxtImg class="healthy__img" src="/images/boy1.png" alt="image"/>
    </div>
    <div class="healthy__content">
      <h2 class="healthy__title">Get Happiness To <br> Good Healthy!</h2>
      <p class="healthy__text">
        There Are Many Variations Of Passages of Lorem Ipsum Available, 
        But The Majority Have
      </p>
      <Button class="healthy__button" @click="handleStart">
        Let's Start &nbsp;&nbsp;<NuxtImg src="/images/arrow-white.png" width="30"/>
      </Button>
    </div>
  </section>
</template>
 
<style scoped lang='scss'>
.healthy {
  display: flex;
  gap: 2%;
  flex-wrap: nowrap;
  margin-top: 8vw;

  &__picture {
    max-width: 48%;
  }
  &__img {
    width: 100%;
    object-fit: cover;
  }
  &__content {
    padding-top: 10%;
  }
  &__title {
    font-family: "Adamina-Regular", serif;
    font-size: 80px;
    line-height: 120%;
    color: $purple-nav;
    margin-bottom: 40px;
    white-space: nowrap;
  }
  &__text {
    font-size: 18px;
  }
  &__button {
    margin-top: 32px;
  }
}

@media (max-width: 1179px) {
  .healthy {
    flex-direction: column;

    &__picture {
      max-width: 70%;
      height: auto;
      margin: 0 auto;
    }
  }
}
@media (max-width: 740px) {
  .healthy {
    flex-direction: column;

    &__picture {
      max-width: 100%;
    }
    &__title {
      width: 100%;
      font-size: 12vw;
    }
  }
}
</style>