<!-- Workout.vue -->
<script setup>
import { useAnimationObserver } from '~/composables/useAnimation';

const workoutRef = useAnimationObserver(addAnimation, removeAnimation);

const handleStarted = () => {
  console.log('handleStarted');
 }

</script>
 
<template>
  <section class="workout">
    <div class="container">
      <div class="workout__wrapper">
        <div class="workout__content">
          <h2 class="workout__title">Anytime, Any<br> Place, Any <br> Workout</h2>
          <p class="workout__text">
            There Are Many Variations Of Passages of Lorem Ipsum Available, 
            But The Majority Have
          </p>
          <Button class="workout__button" @click="handleStarted">
            Get Started Free &nbsp;&nbsp;<NuxtImg src="/images/arrow-white.png" width="30"/>
          </Button>
        </div>
        <div ref="workoutRef" class="workout__picture">
          <NuxtImg class="workout__img" src="/images/girls3.png" alt="img"/>
        </div>
      </div>
    </div>
  </section>
</template>
 
<style scoped lang='scss'>
 .workout {
  padding: 30px 0;

  &__wrapper {
    display: flex;
    gap: 2%;
  }
  &__content {
    padding-top: 8%;
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

  &__picture {
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__img {
    width: 100%;
    object-fit: cover;
    transform: translateX(20px);
    opacity: 0;
  }
  .animate &__img {
    animation: slideInFromRight 0.5s linear forwards;
  }
}

@media (max-width: 1179px) {
  .workout {
    &__wrapper {
      flex-direction: column-reverse;
    }

    &__picture {
      width: 70%;
      height: auto;
      margin: 0 auto;
    }
  }
}
@media (max-width: 740px) {
  .workout {
    &__picture {
      width: 100%;
    }
    &__title {
      width: 100%;
      font-size: 12vw;
      white-space: normal;
    }
    &__button {
      margin: 32px auto;
    }
  }
}
</style>