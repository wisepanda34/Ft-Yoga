<!-- pages/index.vue -->
<script setup>
 
</script>
 
<template>
  <div>
    <!-- <div class="spinner"></div> -->
    <Teacher/>
    <Nishe/>
    <Healthy/>
    <Workout/>
    <Follow/>
    <Newsletter/>
  </div>
</template>
 
<style scoped lang='scss'>
 .spinner {
  width: 50px;
  height: 50px;
  border: 5px solid rgba(150,150,150,0.2); 
  border-radius: 50%;
  border-top-color: rgba(150,150,150);
  animation: spinner-rotate 1s 0.3s infinite linear;
 }

</style>