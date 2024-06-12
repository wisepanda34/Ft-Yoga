<!-- Newsletter.vue -->
<script setup lang='ts'>

const email = ref('')
const sendEmail = () => {
  console.log('sendEmail');
  email.value = ''
}
</script>
 
<template>
  <section class="pl-12 pr-12 sm:pl-0 sm:pr-0">
    <div class="newsletter">
      <h3 class="newsletter__title">Join Our Newsletter</h3>
      <p class="newsletter__text">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It 
         has roots in a piece of classical Latin literature from 45 BC, making.
      </p>
      <div class="newsletter__input">
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
  max-width: 962px;
  height: 358px;
  margin: 100px auto;
  padding: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: $linear-purple;
  border-radius: 32px;

  color: $white;

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
@media (max-width: 650px) {
  .newsletter {
    padding: 0;
  }
}
</style>