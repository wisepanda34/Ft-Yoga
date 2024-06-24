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

const swiperRef = ref(null);

const goToNextSlide = () => {
  if (swiperRef.value) {
    // swiperRef.value.swiper.slideNext();
  }
  // console.log('swiperRef.value ', swiperRef.value);
  // console.log('swiperRef.value.swiper ', swiperRef.value.swiper);
};

onMounted(()=>{
  // console.log('swiperRef.value :', swiperRef.value );
  
})
</script>
 
<template>
  <section class="nishe">
    <div class="container">
      <div class="nishe__wrapper">
      
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
              translate: ['-20%', 0, -1],
            },
            next: {
              translate: ['100%', 0, 0],
            },
            
          }"
        >
        
          <SwiperSlide v-for="slide in slides" :key="slide" class="nishe__slide">
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
          </SwiperSlide>

        </Swiper>
        <div class="nishe__next" >
          <div class="nishe__next-img" @click="goToNextSlide">
            <div id="arrow"></div>
            <div id="ellipse-1"></div>
            <div id="ellipse-2"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
 
<style scoped lang='scss'>
.swiper-button-next::after {
  content: url(/images/next.png);
  top:50px;
}
.nishe {
  padding: 20px 0 70px;

  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }

  &__swiper {
    max-width: calc(100% - 180px) ;
  }
  
  &__slide {
    background: white;

    display: flex;
    gap: 10px;
    justify-content: space-between;
    align-items: start;
  }
  &__next {
    width: 180px;
    height: 132px;

    &-img {
    position: relative;
    width: 180px;
    height: 132px;

    display: flex;
    justify-content: center;
    align-items: center;
    order: 4;
    cursor: pointer;

    #arrow {
      width: 68px;
      height: 30px;
      background-image: url(/images/next.png);
      background-repeat: no-repeat;
      background-size: cover;
    }
    #ellipse-1 {
      position: absolute;
      top: -16px;
      left: 50px;
      width: 80px;
      height: 160px;
      background-image: url(/images/ellipse.png);
      background-size: cover;
      transform: rotate(60deg);
    }
    #ellipse-2 {
      position: absolute;
      top: -16px;
      left: 50px;
      width: 80px;
      height: 160px;
      background-image: url(/images/ellipse.png);
      background-size: cover;
      transform: rotate(45deg);
    }
  }
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
    padding: 20px 0;
    &__wrapper {
      flex-direction: column;
      margin-top: 2vw;
    }
    &__swiper {
      max-width: 100%;
    }
    &__next {
      width: 100%;

      &-img {
        margin: 0 30px 0 auto;
      }
    }
  }
}
@media (max-width: 900px) {
  .nishe {
    &__slide {
      flex-wrap: wrap;
    }
    &__content {
      height: 140px;
    }
  }
}
@media (max-width: 600px) {
  .nishe {
    &__wrapper {
      row-gap: 0;
    }
    &__number {
      height: 80px;
    }
    &__picture {
      width: 100%;
      flex-basis: 100%;
      margin-top: 0;
    }
  }
}
</style>
