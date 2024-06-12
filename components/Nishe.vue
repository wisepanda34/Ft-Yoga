<!-- Nishe.vue -->
<script setup lang='ts'>
 
</script>
 
<template>
  <section class="nishe">
    <div class="nishe__number">#01</div>
    <div class="nishe__picture">
      <NuxtImg class="nishe__picture-img" src="/images/girl2.png" alt="img"/>
    </div>
    <div class="nishe__content">
      Get Targeted Influencers List In Your Niche At Your Fingertips So You Can Focus On Running Your.
      <NuxtImg class="nishe__content-stars" src="/images/stars.png"/>
    </div>
    <div class="nishe__next">
      <NuxtImg class="nishe__next-arrow" src="/images/next.png"/>
      <NuxtImg id="ellipse-1" src="/images/ellipse.png"/>
      <NuxtImg id="ellipse-2" src="/images/ellipse.png"/>
    </div>
  </section>
</template>
 
<style scoped lang='scss'>
.nishe {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-top: 260px;
  flex-wrap: nowrap;

  &__number {
    font-family: "Adamina-Regular", serif;
    font-size: 80px;
    line-height: 120%;
    font-weight: 900;
    color: $purple-nav;

    text-shadow: 1px 2.5px 3px rgb(26, 22, 22);

    order: 1;
  }
  &__picture {
    position: relative;
    width: 425px;

    order: 2;
    &-img {
      position: absolute;
      bottom: -90px;
      left: 0;
      max-width: 100%;
    }
  }
  &__content {
    position: relative;
    max-width: 300px;
    color: $purple-nav;
    padding: 0 10px 0 30px;

    order: 3;

    &-stars {
      position: absolute;
      top: -55px;
      left: 5px;
      width: 64px;
    }
  }
  &__next {
    position: relative;
    min-width: 180px;
    height: 132px;
    display: flex;
    justify-content: center;
    align-items: center;

    order: 4;
    cursor: pointer;

    &-arrow {
      width: 68px;
    }
    #ellipse-1 {
      position: absolute;
      top: -12px;
      left: 50px;
      width: 80px;
      height: 160px;
      transform: rotate(60deg);
    }
    #ellipse-2 {
      position: absolute;
      top: -12px;
      left: 50px;
      width: 80px;
      height: 160px;
      transform: rotate(45deg);
    }
  }
}
@media (max-width: 1179px) {
  .nishe {
    flex-wrap: wrap;
    column-gap: 3vw;
    row-gap: 80px;
    margin-top: 20vw;


    &__number {

    }
    &__picture {
      flex-basis: 60%;
    }
    &__content {

    } 
    &__next {
    }
    
  }
}
@media (max-width: 600px) {
  .nishe {
    column-gap: 0;
    margin-top: 10vw;

    &__picture {
      flex-basis: 100%;
      margin-top: 12vw;
    }
    &__content {
      flex-basis: 100%;
      margin-top: 20vw;
    } 
    &__next {
      margin-top: -50px;
    }
    
  }
}
</style>