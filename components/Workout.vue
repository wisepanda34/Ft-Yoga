<!-- Workout.vue -->
<script setup lang='ts'>

 const handleStarted = () => {
  console.log('handleStarted');
 }
</script>
 
<template>
  <section class="workout">
    <div class="workout__content">
      <h2 class="workout__title">Anytime, Any<br> Place, Any <br> Workuot</h2>
      <p class="workout__text">
        There Are Many Variations Of Passages of Lorem Ipsum Available, 
        But The Majority Have
      </p>
      <Button class="workout__button" @click="handleStarted">
        Get Started Free &nbsp;&nbsp;<NuxtImg src="/images/arrow-white.png" width="30"/>
      </Button>
    </div>
    <div class="workout__picture">
      <div class="workout__img">
        <NuxtImg src="/images/girls3.png" alt="img"/>
      </div>
    </div>
  </section>
</template>
 
<style scoped lang='scss'>
 .workout {
  display: flex;
  gap: 2%;
  flex-wrap: nowrap;
  margin-top: 8vw;

  &__picture {
    max-width: 60%;
  }
  &__img {
    width: 100%;
    object-fit: cover;
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
}

@media (max-width: 1179px) {
  .workout {
    flex-direction: column-reverse;

    &__picture {
      max-width: 70%;
      height: auto;
      margin: 0 auto;
    }
  }
}
@media (max-width: 740px) {
  .workout {
    &__picture {
      max-width: 100%;
    }
    &__title {
      width: 100%;
      font-size: 12vw;
    }
    &__button {
      margin: 32px auto;
    }
  }
}
</style>