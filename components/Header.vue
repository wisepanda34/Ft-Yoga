<!-- components/Header.vue -->
<script setup lang='ts'>

const isOpenMenu = ref(false)
const toggleMenu = () => {
  isOpenMenu.value = !isOpenMenu.value
  console.log('isOpenMenu.value ', isOpenMenu.value);
  
}
</script>
 
<template>
  <header class="header">
    <Logo class="header__logo"/>
    <nav class="header__menu" :class="isOpenMenu ? 'open'  : ''">
      <ul class="header__list">
        <NuxtLink to="/" @click="toggleMenu">Pricing</NuxtLink>
        <NuxtLink to="/" @click="toggleMenu">About</NuxtLink>
        <NuxtLink to="/" @click="toggleMenu">Contacts</NuxtLink>
      </ul>
      <div class="header__log">
        <div class="header__in">Log In</div>
        <Button class="header__login btn--mobile-menu">Log In</Button>
      </div>
      <div class="header__menu-close" @click="toggleMenu">X</div>
    </nav>
    <div class="burger" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </header>
</template>
 
<style scoped lang='scss'>
.header{
  width: 100%;
  height: 66px;
  align-items: center;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  font-size: 18px;
  color: $purple-nav;
  // background: yellow;

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
      width: 100vw;
      height: 100vh;

      opacity: 0;
      visibility: hidden;
      background: $linear-purple;
      transform: translateX(-110%);
      transition: transform 0.8s ease-in-out, opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;

      &-close {
        display: block;
        position: absolute;
        top: 12px;
        right: 18px;
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
  }
}
</style>