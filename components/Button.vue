<!-- Button.vue -->
<script setup lang='ts'>

</script>
 
<template>
  <button class="btn">
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

  &:hover{
    background: $linear-purple-hover;
  }

  &:active{
    animation: flashButton 0.5s;
  }
}


</style>