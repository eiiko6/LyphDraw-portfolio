<script setup>
import Navbar from './components/Navbar.vue'
import Warning_banner from './components/Warning_banner.vue'
</script>

<template>

  <div class="content">

    <Navbar></Navbar>

    <Warning_banner class="banner"></Warning_banner>

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

  .banner {
    z-index: 5;
  }

</style>
