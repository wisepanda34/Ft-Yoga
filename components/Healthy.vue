<!-- Healthy.vue -->
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import 'animate.css';

const handleStart = () => {
  console.log('handleStart');
}

const imgHealthyRef = ref(null);
const options = {
  threshold: 0.8,
  rootMargin: "0px"
}




const handleIntersection1 = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log('imgHealthyRef');
      entry.target.classList.add("animate__animated", "animate__slideInLeft");
    }
  });
    
}

onMounted (() => {
  const observer = new IntersectionObserver(handleIntersection1, options)
  if (imgHealthyRef.value)  observer.observe(imgHealthyRef.value)
})
 
onUnmounted (() => {
  observer.unobserveobserve(imgHealthyRef.value)
})


</script>

<template>
  <section class="healthy">
    <div class="container">
      <div class="healthy__wrapper">
        <div ref="imgHealthyRef" class="healthy__picture">
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
    flex-wrap: nowrap;
  }
  &__picture {
    width: 47%;
  }
  &__img {
    width: 100%;
    object-fit: cover;
  }
  &__content {
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
  }
}
</style>
