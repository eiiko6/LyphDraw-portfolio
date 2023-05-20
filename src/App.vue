<script setup>
import Navbar from './components/Navbar.vue'
</script>

<template>

  <div class="content">

    <Navbar></Navbar>

    <div id="page">
      <router-view></router-view>
    </div>

  </div>

</template>

<style>

  #app {
    z-index: 1;
    margin: 0 auto;
    margin-left: 120px;
  }

  @media screen and (max-width: 730px) {
    #app {
      margin-left: 0;
      margin-top: 120px;
    }
  }

</style>
