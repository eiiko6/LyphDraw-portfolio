<script setup>
  import Navbar from './components/Navbar.vue'
  import Warning_banner from './components/Warning_banner.vue'
  import Language_switch from './components/Language_switch.vue'
</script>

<template>

  <div class="content">

    <Navbar />

    <div class="settings">
      <Language_switch :lang="lang" class="languageSwitch"/>
    </div>

    <Warning_banner class="banner"></Warning_banner>

    <div id="page">
      <router-view :lang="lang"></router-view>
    </div>

  </div>

</template>

<script>
  const lang = "eng"
</script>

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

    .settings {
      margin-top: 91px;
    }
  }

  .banner {
    z-index: 5;
  }

  .settings {
    position: absolute;
    right:0;
    top:0;
    position: fixed;
    z-index: 4;
  }

</style>
