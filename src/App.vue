<script setup>
import Home from './components/Home.vue'
</script>

<template>

  <div class="content">

    <div class="navbar">
      <nav>
        <ul>
          <li><a href="#"><img src="./assets/pfp.png" alt="Home"></a></li>
          <div class="separator"></div>
          <li><a href="#"><img src="./assets/icons8_home_1.ico" alt="Home"></a></li>
          <li><a href="#"><img src="./assets/icons8_large_icons.ico" alt="Artworks"></a></li>
          <li><a href="#"><img src="./assets/icons8_linking_1.ico" alt="Links"></a></li>
          <li><a href="#"><img src="./assets/icons8_categorize_5.ico" alt="Misc"></a></li>
        </ul>
      </nav>
    </div>

    <router-view v-slot="{Component}">
      
    </router-view>

  </div>

</template>

<style scoped>
.navbar {
  user-select: none;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100px;
  background-color: #333;
  color: #fff;
  padding: 10px;
  display: flex;
  flex-direction: column;
  /*justify-content: center;*/
}

.navbar nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}

.navbar nav li {
  margin: 30px;
}

.navbar nav a {
  color: #fff;
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 2px;
  margin: 5px;
  transform: translateZ(0);
}

.navbar img {
  width: 45px;
  transition: 0.2s ease-out;
}

.navbar a:hover img {
  color: #333;
  transform: scale(1.3) translateZ(0);
}

.separator {
  background-color: #ffffffab;
  width: 30px;
  height: 3px;
  border-radius: 2px;
  margin-bottom: 20px;
}
</style>
