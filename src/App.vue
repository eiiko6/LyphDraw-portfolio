<script setup>
import Home from './components/Home.vue'
</script>

<template>

  <div class="content">

    <div class="header">
      <h1>HEADER</h1>
    </div>

    <router-view v-slot="{Component}">
      
    </router-view>

  </div>

</template>

<style scoped>
.header {
  
}
</style>
