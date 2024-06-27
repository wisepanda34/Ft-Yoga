<!-- Nishe.vue -->
<script setup >
const  slides = [
  {
    number: '#01',
    link: '/images/girl2.png',
    text: 'Get Targeted Influencers List In Your Niche At Your Fingertips So You Can Focus On Running Your.'
  },
  {
    number: '#02',
    link: '/images/girl6.png',
    text: 'Next Your Trane Will Be The Best In Your Life. So You Can Focus On Running Your.'
  },
  {
    number: '#03',
    link: '/images/boy2.png',
    text: 'Future Our Have Must Enjoy Beatiful Calm The Best Sea Effect. Try To Higl Level Of Succes In Our Place.'
  },
]

</script>
 
<template>
  <section class="nishe">
    <div class="container">
      
      <Swiper
        class="nishe__swiper"
        :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperNavigation]"
        :slides-per-view="1"
        :loop="true"
        :navigation="false"
        :effect="'creative'"
        :autoplay="{
          delay: 10000,
          disableOnInteraction: true,
          duration: 1600
        }"
        :creative-effect="{
          prev: {
            shadow: false,
            translate: ['-20%', 0, 0],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }"
      >
        <SwiperSlide v-for="slide in slides" :key="slide.number" class="nishe__slide">
          <div class="nishe__number">{{ slide.number }}</div>
          <div class="nishe__picture">
            <NuxtImg class="nishe__picture-img" :src="`${slide.link}`" alt="img"/>
          </div>
          <div class="nishe__content">
            <div class="nishe__text">
              {{ slide.text }}
              <div class="nishe__text-stars"></div>
            </div>
          </div>
          <div class="nishe__empty"></div>
        </SwiperSlide >
        <SwiperControl class="nishe__next"/>
      </Swiper>
      
    </div>
  </section>
</template>
 
<style scoped lang='scss'>
.nishe {
  padding: 20px 0;

  &__swiper {
    position: relative;
    width: 100%;
    min-height: 420px;
    display: flex;
  }
  
  &__slide {
    background: $white;

    display: flex;
    gap: 10px;
    justify-content: space-between;
    align-items: start;
  }
  &__empty {
    width: 180px;
    height: 240px;
  }
  &__next {
    position: absolute;
    bottom: -40px;
    right: 0px;
    width: 180px;
    height: 240px;
    z-index: 100;

    transform: translateY(-220px);
  }
  &__number {
    width: 120px;
    height: 240px;
    font-family: "Adamina-Regular", serif;
    font-size: 80px;
    line-height: 120%;
    font-weight: 900;
    color: $purple-nav;
    text-shadow: 1px 2.5px 3px rgb(26, 22, 22);

    display: flex;
    align-items: center;
  }
  &__picture {
    width: 425px;
    height: 240px;
    display: flex;
    justify-content: center;
    align-items: center;

    &-img {
      max-width: 100%;
      max-height: 100%;
    }
  }
  &__content {
    width: 300px;
    height: 240px;
    color: $purple-nav;
    padding: 0 10px 0 30px;

    display: flex;
    align-items: center;
  }
  &__text {
    position: relative;
    
    &-stars {
      position: absolute;
      top: -46px;
      left: -30px;
      width: 64px;
      height: 73px;
      background-image: url(/images/stars.png);
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
}
@media (max-width: 1179px) {
  .nishe {
    &__empty {
      display: none;
    }
    &__next {
      bottom: 0;
      height: 170px;
      transform: translateY(0);

    }
  }
}
@media (max-width: 900px) {
  .nishe {
    &__slide {
      flex-wrap: wrap;
    }
    &__content {
      width: 70%;
      height: 150px;
      padding-left: 40px;
    }
  }
}
@media (max-width: 650px) {
  .nishe {
    &__number {
      height: 80px;
    }
    &__picture {
      width: 100%;
      flex-basis: 100%;
      margin-top: 0;
    }
    &__content {
      width: 100%;
      height: auto;
      align-items: start;
      padding: 50px 20px 100px 40px;
    }
    &__next {
      width: 90px;
      height: 85px;
      bottom: 15px;
      right: 40px;
    }
  }
}
</style>
