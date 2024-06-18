<!-- Newsletter.vue -->
<script setup>

const email = ref('')
const sendEmail = () => {
  console.log('sendEmail');
  email.value = ''
}

const imgRef = ref(null);
const isVisible = ref(false)
const options = {
  threshold: 0.8,
  rootMargin: "0px"
}

const handleIntersection = (entry) => {
  entry.forEach((entry) => {
    if (entry.isIntersecting) {
      isVisible.value = true
      console.log('isVisible', isVisible);
    }
  })
}

onMounted (() => {
  const observer = new IntersectionObserver(handleIntersection, options)
  observer.observe(imgRef.value)
})
</script>
 
<template>
  <section class="newsletter">
    
    <div class="newsletter__wrapper">
      <h3 class="newsletter__title">Join Our Newsletter</h3>
      <p class="newsletter__text">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It 
         has roots in a piece of classical Latin literature from 45 BC, making.
      </p>
      <div ref="imgRef" class="newsletter__input">
        <input class="newsletter__field" 
          v-model="email"
          type="text" 
          placeholder="For latest update send mail"
        >
        <Button class="newsletter__button" @click.stop="sendEmail">
          Subscribe
        </Button>
      </div>
    </div>
  </section>
</template>
 
<style scoped lang='scss'>
.newsletter {
  padding: 20px;

  &__wrapper {
    max-width: 962px;
    min-height: 358px;
    margin: 100px auto;
    padding: 10px;
  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  
    background: $linear-purple;
    border-radius: 32px;
  
    color: $white;
  }

  &__title {
    font-family: "Adamina-Regular", serif;
    font-size: 48px;
    margin: 20px auto;
    line-height: 48px;
  }
  &__text {
    max-width: 570px;
    font-size: 18px;
    text-align: center;
    line-height: 165%;
    margin-bottom: 32px;

  }
  &__input {
    position: relative;
    width: 100%;
    max-width: 526px;
  }
  &__field {
    width: 100%;
    height: 70px;

    background: $white;
    color: $text-main;
    border-radius: 35px;
    padding: 0 140px 0 25px;
    
  }
  &__button{
    position: absolute;
    top: 5px;
    right: 5px;
  }
}
@media (max-width: 1179px) {
  .newsletter {
    &__wrapper {
      width: 100%;
      margin: 50px auto;
      padding-bottom: 20px;
    }
  }
}
@media (max-width: 650px) {
  .newsletter {
    padding: 10px;
    &__wrapper {
      width: 100%;
      margin: 50px auto;
      padding-bottom: 20px;

    }
    &__input {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    &__field {
      padding: 0 20px;
    }
    &__button {
      position: static;
      margin: 0 auto;
      border: 1.5px solid $white;
    }
  }
}
</style>