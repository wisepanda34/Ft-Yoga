<!-- Teacher.vue -->
<script setup lang='ts'>
 
</script>
 
<template>
  <section class="teacher">
    <div class="teacher__left">
      <h1 class="teacher__title">
        Choose Your <br>
        Best <span class="teacher__yoga">Yoga</span> <br>
        Teacher
      </h1>
      <NuxtImg class="teacher__round" width="24" src="/images/rounds.png" alt="icon"/> 
      <p class="teacher__text text-lg">
        There are many variations of passages of <br> 
        Lorem Ipsum Available, but the Majority Have
      </p>
      <Button class="teacher__btn">
        Get Started Free &nbsp;&nbsp;<NuxtImg  src="/images/arrow-white.png" width="30"/>
      </Button>
      <div class="teacher__participent">
        <div class="teacher__nums">300<span class="teacher__nums-plus">+</span></div>
        <div class="teacher__nums">40k<span class="teacher__nums-plus">+</span></div>
        <div class="text-xl">Yoga Class</div>
        <div class="text-xl">Participent</div>
      </div>
    </div>
    <div class="teacher__img">
      <NuxtImg  src="/images/girl1.png" />
    </div>
  </section>
</template>
 
<style scoped lang='scss'>
 .teacher {
  width: 100%;
  position: relative;
  &__left {
    max-width: 600px;
  }
  &__title {
    width: 600px;
    font-family: "Mollie-Glaston", serif;
    font-size: 120px;
    line-height: 120%;
    letter-spacing: -3px;
  }
  &__yoga {
    display: inline-block;
    max-width: 270px;
    padding: 0 15px 10px;
    background: $linear-purple;
    color: $white;
    border-radius: 16px;
    transform: rotate(10deg) translateY(17px);
  }
  &__round {
    transform: translate(-18px, -20px);
  }
  &__btn {
    margin: 32px 0;
  }
  &__participent {
    display: grid;
    grid-template-columns: 130px 130px;
    column-gap: 76px;
  }
  &__nums {
    font-family: "Mollie-Glaston", serif;
    line-height: 120%;
    font-size: 64px;
    letter-spacing: -1px;
    &-plus {
      display: inline-block;
      font-size: 40px;
      font-weight: 700;
      margin-left: 8px;
      transform: translateY(-3px);
    }
  }
  &__img {
    position: absolute;
    top: 0;
    right: -60px;
    width: 822px;
    z-index: 10;
  }
 }
 @media (max-width: 1179px) {
  .teacher {
    &__img {
      max-width: 60vw;
      padding-top: 70px;
    }
  }
 }
 @media (max-width: 991px) {
  .teacher {
    &__round {
      transform: translate(0, -10px);
    }
    &__img {
      right: -20px;
      max-width: 60vw;
      padding-top: 220px;
    }
  }
 }
 @media (max-width: 740px) {
  .teacher {
    &__title {
      width: 100%;
      font-size: 15vw;
    }
    &__img {
      top: auto;
      bottom: 70px;
      width: 50vw;
      padding-top: 230px;
    }
  }
 }
 @media (max-width: 600px) {
  .teacher {
    display: flex;
    flex-direction: column;
    gap: 20px;

    &__title {
      width: 100%;
      font-size: 18vw;
    }
    &__img {
      position: static;
      width: 600px;
      max-width: 100vw;
      padding-top: 0;
    }
    &__nums {
      font-size: 40px;
    }
    &__btn {
      margin: 32px auto;
    }
    &__participent {
      grid-template-columns: 1fr 1fr;
      column-gap: 50px;
    }
  }
}
</style>