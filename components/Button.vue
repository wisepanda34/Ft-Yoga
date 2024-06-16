<!-- Button.vue -->
<script setup lang='ts'>
const props = defineProps<{
  isRounded?: true
}>()
</script>
 
<template>
  <button class="btn" :class="isRounded ? 'btn-rounded': ''">
    <slot/>
  </button>
</template>
 
<style scoped lang='scss'>
.btn{
  min-width: 160px;
  height: 60px;
  padding: 0 25px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 18px;
  color: $white;
  background: $linear-purple;
  border-radius: 40px;
  transition: background-color 0.5s;

  &-rounded {
    width: 120px!important;
    min-width: auto;
    height: 120px!important;
    border-radius: 50%!important;
  }

  &:hover{
    background: $linear-purple-hover;
  }

  &:active{
    animation: flashButton 0.5s;
  }
}
</style>