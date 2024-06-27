<!-- Healthy.vue -->
<script setup>
import { useAnimationObserver } from '~/composables/useAnimation';

const healthyRef = useAnimationObserver(addAnimation, removeAnimation);

const handleStart = () => {
  console.log('handleStart');
}
</script>

<template>
  <section class="healthy">
    <div class="container">
      <div class="healthy__wrapper">
        <div ref="healthyRef" class="healthy__picture">
          <NuxtImg class="healthy__img" src="/images/boy1.png" alt="image"/>
        </div>
        <div class="healthy__content">
          <h2 class="healthy__title">Get Happiness To <br> Good Healthy!</h2>
          <div class="healthy__decor">
            <Decor/>
          </div>
          <p class="healthy__text">
            There Are Many Variations Of Passages of Lorem Ipsum Available, 
            But The Majority Have
          </p>
          <Button class="healthy__button" @click="handleStart">
            Let's Start &nbsp;&nbsp;<NuxtImg src="/images/arrow-white.png" width="30"/>
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang='scss'>

.healthy {
  padding: 20px 0;

  &__wrapper {
    display: flex;
    gap: 3%;
  }
  &__picture {
    width: 47%;
  }
  &__img {
    width: 100%;
    object-fit: cover;
    transform: translateX(-20px);
    opacity: 0;
  }
  .animate &__img {
    animation: slideInFromLeft 0.5s linear forwards;
  }
  &__content {
    position: relative;
    width: 50%;
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
  &__decor {
    position: absolute;
    display: inline-block;
    top: 45%;
    right: 0;
  }
}

@media (max-width: 1179px) {
  .healthy {
    &__wrapper {
      flex-direction: column;
    }
    &__content {
      width: 100%;
      padding-top: 10px;
    }
    &__picture {
      width: 70%;
      height: auto;
      margin: 0 auto;
    }
  }
}
@media (max-width: 740px) {
  .healthy {
    &__picture {
      width: 100%;
    }
    &__title {
      width: 100%;
      font-size: 12vw;
    }
    &__button {
      margin: 32px auto;
    }
    &__decor {
      top: 30%;
    }
  }
}
</style>
