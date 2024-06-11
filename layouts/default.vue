<!-- layouts/default.vue -->
<script setup lang='ts'>
 
</script>
 
<template>
  <div class="page">
    <Header/>
    <slot class="page__slot"/>
    <Footer class="page__footer"/>
  </div>
</template>
 
<style scoped lang='scss'>
.page {
  max-width: 1440px;
  min-height: 100vh;
  padding: 20px;
  margin: 0 auto;
  user-select: none;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

}

@media (max-width: 900px){
  .page{
    padding: 5px;
  }
}
</style>