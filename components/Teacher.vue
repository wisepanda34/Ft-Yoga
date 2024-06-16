<!-- Teacher.vue -->
<script setup>
 
</script>
 
<template>
  <section class="teacher">
    <div class="container">
      <div class="teacher__wrapper">
        <div class="teacher__content">
          <h1 class="teacher__title">
            Choose Your <br>
            Best <span class="teacher__yoga">Yoga</span> <br>
            Teacher
          </h1>
          <NuxtImg class="teacher__round" width="24" src="/images/rounds.png" alt="icon"/> 
          <p class="teacher__text">
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
        <div class="teacher__picture">
          <NuxtImg  src="/images/girl1.png" />
        </div>
      </div>
    </div>
    
  </section>
</template>
 
<style scoped lang='scss'>
 .teacher {
  padding: 20px 0 100px;
  &__wrapper {
    width: 100%;
    position: relative;
  }
  
  &__content {
    width: 600px;
    padding-top: 5%;
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
  &__text {
    font-size: 20px;
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
  &__picture {
    position: absolute;
    top: 0;
    right: -60px;
    width: 822px;
    height: 960px;
    overflow: hidden;
    z-index: 10;

    img {
      max-width: 100%;
    }
  }
 }
 @media (max-width: 1179px) {
  .teacher {
    padding: 20px 0;
    &__content {
      padding-top: 0;
    }
    &__picture{
      width: 50vw;
      height: auto;
      padding-top: 10%;
    }
  }
 }
 @media (max-width: 991px) {
  .teacher {
    &__wrapper {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    &__content {
      width: 100%;
    }
    &__round {
      transform: translate(0, -10px);
    }
    &__picture {
      position: static;
      width: 100%;
      padding-top: 0;
    }
  }
 }
 @media (max-width: 740px) {
  .teacher {
    &__title {
      width: 100%;
      font-size: 18vw;
    }
  }
 }
 @media (max-width: 600px) {
  .teacher {
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