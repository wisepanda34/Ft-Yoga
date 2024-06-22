<!-- layouts/default.vue -->
<script setup>

const isLoading = ref(false)

</script>

<template>
  <div class="page">
    <Header/>
    <slot/>

    <Footer/>
    <div v-if="isLoading" class="spinner">
      <span class="spinner-round"></span>
    </div>

  </div>
</template>
 