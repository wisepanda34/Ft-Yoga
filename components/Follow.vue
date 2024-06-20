<!-- Foloow.vue -->
<script setup>
import { useAnimationObserver } from '~/composables/useAnimation';

const { animationRef } = useAnimationObserver(addAnimation, removeAnimation);

</script>
 
<template>
  <section class="follow">
    <div class="container">
      <div ref="animationRef" class="follow__block">
        <NuxtImg id="girl4" order="1" src="/images/girl4.png" alt="img"/>
        <div  class="follow__content" order="2">
          <h2 class="follow__title">
            Follow Us On Instagram <span>#FTYOGA</span>
          </h2>
          <Button class="follow__btn" :is-rounded="true">
            <p class="follow__btn-text">Follow</p>
            <NuxtImg  src="/images/arrow-long.png" width="50" height="25"/>
          </Button>
        </div>
        <NuxtImg id="girl5" order="3" src="/images/girl5.png" alt="img"/>
      </div>
      <div class="follow__img">
        <NuxtImg id="girl6" src="/images/girl6.png" alt="img"/>
        <NuxtImg id="boy2" src="/images/boy2.png" alt="img"/>
      </div>
    </div>
  </section>
</template>
 
<style scoped lang='scss'>

.follow {
  margin: 100px 0;

  &__block {
    display: flex;
    justify-content: space-between; 
    margin: 80px auto;
  }

  &__content {
    width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: translateY(10px);
    opacity: 0;
  }
  .animate &__content {
    animation: slideInFromUp 0.5s linear forwards;
  }

  &__title {
    font-family: "Adamina-Regular", serif;
    font-size: 80px;
    line-height: 120%;
    color: $purple-nav;
    margin-bottom: 40px;
    text-align: center;

    span {
      background: $linear-purple;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      color: transparent;
    }
  }

  &__btn {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 12px;
    line-height: 12px;

    &-text {
      font-family: "Poppins-SemiBold", sans-serif;
      font-size: 20px;
    }
  }

  &__img {
    margin: 30px auto 80px;

    display: flex;
    justify-content: space-between; 
    gap: 20px;
  }

  #girl4 {
      width: 310px;
      max-width: 310px;
      height: 450px;
    }

    #girl5 {
      width: 310px;
      max-width: 310px;
      height: 450px;
    }

    #girl6 {
      width: 588px;
      max-width: 50%;
      transform: rotate(15deg);
    }

    #boy2 {
      width: 588px;
      max-width: 50%;
      transform: rotate(-15deg);
    }
}

@media (max-width: 1179px) {
  .follow {
    margin: 20px 0;
    &__block {
      flex-wrap: wrap;
      margin: 0;
    }

    &__content {
      transform: translateY(0);
    }

    #girl4 {
      margin: 20px auto;
      width: 100%;
      height: auto;
    }

    #girl5 {
      margin: 20px auto;

      width: 100%;
      height: auto;
    }
    &__img {
      display: none;
    }
  }
}
@media (max-width: 991px) {
  .follow {
    margin: 0;

    &__block{
      margin: 0 auto;
    }
    &__content {
      padding-bottom: 50px;
    }
  }
}

@media (max-width: 740px) {
  .follow {
    &__content {
      width: 100%;
    }

    &__title {
      width: 100%;
      font-size: 12vw;
    }
  }
}
</style>