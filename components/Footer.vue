<!-- Footer.vue -->
<script setup lang='ts'>
 
</script>
 
<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__head">
        <div class="footer__head-about">
          <Logo class="mb-3"/>
          <p>About pages are perfect spaces to talk about where you started, 
            how you've grown, and the ideals that have helped your 
            organization mature</p>
        </div>
        <div class="footer__head-info">
          <div>
            <h4>Address</h4>
            <p>1090  A/01 Richmond Avenue,<br> Houston, NY 7704, USA</p>
          </div>
          <div>
            <h4>Contact</h4>
            <p>+123 456 789 147 <br> example@gmail.com </p>
          </div>
          <div>
            <h4>Office</h4>
            <p>Monday - Saturday <br> 9AM - 10PM</p>
          </div>
        </div>
      </div>
      <div class="footer__line"></div>
      <div class="footer__low flex justify-between ">
        <div class="footer__society flex gap-8">
          <NuxtImg src="/svg/insta.svg" width="24" to="/" alt="icon"/>
          <NuxtImg src="/svg/telegram.svg" width="24" to="/" alt="icon"/>
          <NuxtImg src="/svg/in.svg" to="/" width="24" alt="icon"/>
          <NuxtImg src="/svg/twitter.svg" to="/" width="24" alt="icon"/>
        </div>
        <div class="footer__copy flex gap-1.5 items-center">
          <NuxtImg src="/svg/copy.svg" width="15" to="/" alt="icon"/>
          <p class="text-white">2024 Copyright, <span class="text-linear-purple">Falcon Throught</span></p>
        </div>
      </div>
    </div>
  </footer>
</template>
 
<style scoped lang='scss'>
.footer{

  background: $footer;
  color: $footer-color;



  &__container{
    max-width: 1240px;
    margin: 0 auto;
    padding: 60px 20px;
  }
  &__head{
    display: grid;
    grid-template-columns: 1.2fr 2fr;
   
    &-about{
      width: 293px;
    }
    &-info{
      display: flex;
      justify-content: space-between;
      h4 {
        color: $white;
        font-size: 28px;
        margin-bottom: 40px;
      }
    }
  }
  &__line {
    width: 100%;
    height: 2px;
    background: $line-grey;
    margin: 20px 0;
  }
  &__low{
  
  }
  &__society{
    
  }
  &__copy {
   
  }
}
@media (max-width: 900px) {
  .footer{
    &__container{
      padding: 40px 30px;
    }
    &__head{
      grid-template-columns: auto;

      &-about {
        width: 100%;
        margin: 0 auto;
      }

      &-info{
        gap: 30px;
        margin-top: 30px;
        h4{
          margin-bottom: 15px;
        }
      }
    }
  }
}
@media (max-width: 650px) {
  .footer{
    &__container{
      padding: 30px;
    }
    &__head{

      &-info{
        flex-direction: column;
        gap: 30px;
        margin-top: 30px;
        h4{
          margin-bottom: 15px;
        }
      }
    }
    &__low{
      flex-direction: column;
      gap: 30px;
    }
  }
}
</style>