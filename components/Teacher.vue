<!-- Teacher.vue -->
<script setup>
import { useAnimationObserver } from '~/composables/useAnimation';

const teacherRef = useAnimationObserver(addAnimation);

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
          <div class="teacher__decor">
            <Decor/>
          </div>
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
          <NuxtImg src="/images/girl1.png" alt="img"/>
        </div>
      </div>

    </div>
  </section>
</template>
 
<style scoped lang='scss'>

.teacher {
  padding: 20px 0 90px;
  
  &__wrapper {
    position: relative;
    display: flex;
  }
  
  &__content {
    width: 640px;
    padding-top: 2%;
  }
  
  &__title {
    width: 100%;
    font-family: "Mollie-Glaston", serif;
    font-size: 120px;
    line-height: 120%;
    letter-spacing: 0px;
  }
  
  &__yoga {
    display: inline-block;
    padding: 0 15px 10px;
    background: $linear-purple;
    color: $white;
    border-radius: 16px;
    transform: rotate(12deg);
    animation: small-rotate 4s 2s infinite linear;
  }
  
  &__decor {
    display: inline-block;
    margin-bottom: 30px;
    transform: translateX(-15px);
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
    position: relative;
    width: calc(100% - 630px);

    img {
      position: absolute;
      bottom: 0; 
      right: 0;
      width: 680px;
    }
    
    @media (min-width: 1420px) {
      position: absolute;
      top: 0;
      right: -80px;
      width: 822px;
      height: 960px;
      img {
        position: static;
        width: 100%;
        height: 100%;
      }
    }
  }
  .animate &__img {
    animation: slideInFromRight 0.5s linear forwards;
  }
}
 @media (max-width: 1179px) {
  .teacher {
    padding: 20px 0;
    &__wrapper {
      flex-direction: column;
    }
    &__content {
      width: 100%;
      padding-top: 0;
    }
    &__title {
      font-size: 15vw;
    }
    &__decor {
      transform: translateX(70vw);
    }
    &__picture{
      width: 70%;
      margin: 0 auto;
      img {
        position: static;
        width: 100%;
      }
    }
  }
 }
 @media (max-width: 740px) {
  .teacher {
    &__participent {
    display: grid;
    grid-template-columns: 130px 130px;
    column-gap: 30px;
  }
    &__picture {
      width: 90%;
      padding-top: 2%;
    }
  }
 }
</style>