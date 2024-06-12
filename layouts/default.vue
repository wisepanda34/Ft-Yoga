<!-- layouts/default.vue -->
<script setup lang='ts'>
 
</script>
 
<template>
  <div class="page">
    <Header/>
    <slot class="page__slot"/>
    </div>
  <Footer class="page__footer"/>
</template>
 
<style scoped lang='scss'>
.page {
  max-width: 1240px;
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