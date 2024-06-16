<!-- Footer.vue -->
<script setup lang='ts'>
 
</script>
 
<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__head">
        <div class="footer__head-about">
          <h3 class="footer__head-logo">FT Yoga</h3>
          <p>About pages are perfect spaces to talk about where you started, 
            how you've grown, and the ideals that have helped your 
            organization mature</p>
        </div>
        <div class="footer__head-info">
          <div class="footer__head-item">
            <h4 class="footer__head-title">Address</h4>
            <p>1090  A/01 Richmond Avenue,<br> Houston, NY 7704, USA</p>
          </div>
          <div class="footer__head-item">
            <h4 class="footer__head-title">Contact</h4>
            <p>+123 456 789 147 <br> example@gmail.com </p>
          </div>
          <div class="footer__head-item">
            <h4 class="footer__head-title">Office</h4>
            <p>Monday - Saturday <br> 9AM - 10PM</p>
          </div>
        </div>
      </div>
      <div class="footer__line"></div>
      <div class="footer__low">
        <div class="footer__society">
          <NuxtLink to="https://instagram.com">
            <NuxtImg src="/svg/insta.svg" width="24" alt="Instagram icon"/>
          </NuxtLink>
          <NuxtLink to="https://telegram.org">
            <NuxtImg src="/svg/telegram.svg" width="24" alt="Telegram icon"/>
          </NuxtLink>
          <NuxtLink to="https://linkedin.com">
            <NuxtImg src="/svg/in.svg" width="24" alt="LinkedIn icon"/>
          </NuxtLink>
          <NuxtLink to="https://twitter.com">
            <NuxtImg src="/svg/twitter.svg" width="24" alt="Twitter icon"/>
          </NuxtLink>
        </div>
        <div class="footer__copy">
          <NuxtImg src="/svg/copy.svg" width="15" alt="icon"/>
          <p class="footer__copy-white">2024 Copyright, <span class="text-linear-purple">Falcon Throught</span></p>
        </div>
      </div>
    </div>
  </footer>
</template>
 
<style scoped lang='scss'>
.footer {

  background: $footer;
  color: $footer-color;
  font-family: "Roboto-Regular", sans-serif;


  &__container {
    max-width: 1240px;
    margin: 0 auto;
    padding: 60px 20px;
  }
  &__head {
    display: grid;
    grid-template-columns: 1.2fr 2fr;
   
    &-about {
      width: 293px;
    }
    &-logo {
      font-family: "Adamina-Regular", serif;
      font-size: 35px;
      line-height: 120%;
      background: $linear-purple;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      color: transparent;
      margin-bottom: 16px;
      margin-top: -8px;

    }
    &-info {
      display: flex;
      justify-content: space-between;
      
    }
    &-items {
      padding: 10px;
    }
    &-title {
      font-family: "Adamina-Regular", serif;
      color: $white;
      font-size: 28px;
      margin-bottom: 40px;
    }
  }
  &__line {
    width: 100%;
    height: 2px;
    background: $line-grey;
    margin: 20px 0;
  }
  &__low{
    display: flex;
    justify-content: space-between;
  }
  &__society {
    display: flex;
    gap: 32px;
  }
  &__copy {
    display: flex;
    gap: 5px;

    &-white {
      color: $white;
    }
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
      }
      &-items {
       padding: 0;
      }
      &-title {
        margin-bottom: 15px;
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