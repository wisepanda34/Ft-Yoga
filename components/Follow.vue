<!-- Foloow.vue -->
<script setup lang='ts'>
 
</script>
 
<template>
  <section class="follow">
    <div class="follow__block">
      <NuxtImg id="girl4" order="1" src="/images/girl4.png" alt="img"/>
      <div class="follow__content" order="2">
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

  </section>
</template>
 
<style scoped lang='scss'>
.follow {
  margin: 100px 0 180px;

  &__block {
    display: flex;
    justify-content: space-between; 
    margin: 80px auto;
  }

  &__content {
    width: 600px;
    // margin: 0 auto;
    // padding: 100px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    margin: 80px auto;

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

    &__block {
      flex-wrap: wrap;
    }

    &__content {
    }

    &__title {
      // font-size: 5vw;
    }

     #girl4 {
      margin: 20px auto;
        // width: 100%;
        // height: auto;
      }

      #girl5 {
      margin: 20px auto;

        // width: 100%;
        // height: auto;
      }
  }
}
@media (max-width: 991px) {
  .follow {
    margin: 30px 0 100px;

    &__block{
      margin: 50px auto;
    }

    &__img {
      flex-direction: column;
      gap: 76px;
      margin: 30px auto;
    }
    #girl6 {
      // width: 100%;
      max-width: 100%;
      align-self: start;
    }
    #boy2 {
      // width: 100%;
      max-width: 100%;
      align-self: end;
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
    &__img {
      flex-direction: column;
      gap: 76px;
    }
    #girl6 {
      // width: 100%;
      max-width: 100%;
      align-self: start;
    }
    #boy2 {
      // width: 100%;
      max-width: 100%;
      align-self: end;
    }
  }
}
// .follow {
//   position: relative;
//   position: relative;
//   min-height: 920px;
//   margin-top: 100px;

//   &__content {
//     grid-area: content;
//     width: 600px;
//     margin: 0 auto;
//     padding: 100px 10px;

//     display: flex;
//     flex-direction: column;

//   }
//   &__title {
//     font-family: "Adamina-Regular", serif;
//     font-size: 80px;
//     line-height: 120%;
//     color: $purple-nav;
//     margin-bottom: 40px;
//     text-align: center;
//     span {
//       background: $linear-purple; 
//       -webkit-background-clip: text; 
//       -webkit-text-fill-color: transparent; 
//       background-clip: text; 
//       color: transparent; 
//       }
//   }
//   &__btn {
//     margin: 0 auto;
//     display: flex;
//     flex-direction: column;
//     gap: 12px;
//     line-height: 12px;

//     &-text {
//       font-family: "Poppins-SemiBold", sans-serif;
//       font-size: 20px;
//     }
//   }
//   &__pictures {
//       position: absolute;
//       top: 0;
//       bottom: 0;
//       left: 0;
//       right: 0;
//       display: grid;
//       grid-template-areas: 
//       "img1  img2"
//       "img3  img4";
//       grid-template-columns: 1fr 1fr;
//       grid-template-rows: 450px 400px;

//       pointer-events: none;

//     #girl4 {
//       width: 310px;
//       // height: 450px;
//       grid-area: img1;
//       align-self: start;
//       justify-self: start;
//     }
    
//     #girl5 {
//       width: 310px;
//       // height: 450px;
//       grid-area: img2;
//       align-self: start;
//       justify-self: end;
//     }
    
//     #girl6 {
//       width: 588px;
//       // height: 310px;
//       grid-area: img3;
//       align-self: end;
//       justify-self: start;
//       transform: rotate(15deg);
//     }
    
//     #boy2 {
//       width: 588px;
//       // height: 310px;
//       grid-area: img4;
//       align-self: end;
//       justify-self: end;
//       transform: rotate(-15deg);

//     }
//   }
// }
// @media (max-width: 1179px) {
//   .follow {
//     // flex-direction: column;
//     &__content{
//       // width: 100%;
//     }
//     &__title {
//       // width: 100%;
//       // font-size: 12vw;
//     }
//     &__btn {
//       // margin: 32px auto;
//     }
//     &__picutres {

//       grid-template-areas: 
//       "img1  img2"
//       "img3"
//       "img4";
//       grid-template-columns: 1fr 1fr;
//       grid-template-rows: 450px 400px 400px;
//     }
//   }
// }
</style>