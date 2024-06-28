<!-- components/Header.vue -->
<script setup>

const isOpenMenu = ref(false)

const toggleMenu = () => {
  if (window.innerWidth <= 900) {
    isOpenMenu.value = !isOpenMenu.value
    console.log('isOpenMenu.value ', isOpenMenu.value)
    if (isOpenMenu.value) {
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }
  }
}

</script>
 
<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
         <Logo class="header__logo"/>
        <nav class="header__menu" :class="{ open: isOpenMenu }">
          <ul class="header__list">
            <NuxtLink to="/" @click="toggleMenu">Pricing</NuxtLink>
            <NuxtLink to="/" @click="toggleMenu">About</NuxtLink>
            <NuxtLink to="/" @click="toggleMenu">Contacts</NuxtLink>
          </ul>
          <div class="header__log">
            <div class="header__in" @click="toggleMenu">Log In</div>
            <Button class="header__login btn--mobile-menu" @click="toggleMenu">Log In</Button>
          </div>
          <div class="header__menu-close" @click="toggleMenu">X</div>
        </nav>
        <div class="burger" @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </header>
  
</template>
 
<style scoped lang='scss'>
.header{
  width: 100%;
  height: 106px;
  padding: 20px 0;
  
  &__wrapper{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    color: $purple-nav;
  }
  &__menu{
    position: relative;
    width: 644px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 120px;

    &-close{
      display: none;
    }
  }
  &__list{
    width: 324px;
    display: flex;
    justify-content: space-between;

    *{
      cursor: pointer;
      &:hover{
        color: $purple-nav-hover;
      }
    }
  }
  &__log{
    width: 260px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
.burger{
  width: 40px;
  height: 30px;

  display: none;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  span{
    height: 4px;
    width: 100%;

    background: $linear-purple;
    border-radius: 2px;
  }

  &:hover{
    span{
      background: $linear-purple-hover;
    }
  }
}

@media (max-width: 900px) {
  .header{

    &__menu{
      display: flex;
      gap: 60px;
      flex-direction: column;
      justify-content: center;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100vw;
      height: 100vh;

      z-index: 100;
      opacity: 0;
      visibility: hidden;
      background: $linear-purple;
      transform: translateX(-110%);
      transition: transform 0.8s ease-in-out, opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;

      &-close {
        display: block;
        position: absolute;
        top: 26px;
        right: 24px;
        font-size: 40px;
        color: $white;
        transform: scaleX(1.4);
      }
    }
    &__list{
      width: auto;
      flex-direction: column;
      gap: 40px;
      font-size: 30px;
      text-align: center;
    }
    &__log {
      font-size: 30px;
      flex-direction: column;
      gap: 30px;
    }
    &__menu.open{
      transform: translateX(0);
      opacity: 1;
      visibility: visible;
    }
  }
  .burger{
    display: flex;
    position: absolute;
    top: 20px;
    right: 20px;
  }
}
</style>