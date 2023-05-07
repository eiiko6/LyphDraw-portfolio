<script setup>
import Home from './components/Home.vue'
</script>

<template>

  <div class="content">

    <div class="navbar">
      <nav>
        <ul>
          <li class="pfp"><a href="#"><img src="https://github.com/mxstoto6/LyphDraw-portfolio/blob/assets/pfp-icon.png?raw=true" alt="Pfp"></a></li>
          <div class="separator"></div>
          <li><a href="#"><img src="https://github.com/mxstoto6/LyphDraw-portfolio/blob/assets/icons8_home_1.ico?raw=true" alt="Home"></a></li>
          <li><a href="#"><img src="https://github.com/mxstoto6/LyphDraw-portfolio/blob/assets/icons8_large_icons.ico?raw=true" alt="Artworks"></a></li>
          <li><a href="#"><img src="https://github.com/mxstoto6/LyphDraw-portfolio/blob/assets/icons8_linking_1.ico?raw=true" alt="Links"></a></li>
          <li><a href="#"><img src="https://github.com/mxstoto6/LyphDraw-portfolio/blob/assets/icons8_categorize_5.ico?raw=true" alt="Misc"></a></li>
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
  margin: 25px;
}

.navbar nav a {
  color: #fff;
  text-decoration: none;
  padding: 10px 10px;
  border-radius: 2px;
  margin: 5px;
  transform: translateZ(0);
  -webkit-tap-highlight-color: transparent;
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
  margin: 20px;
}

@media screen and (max-width: 730px) {
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    flex-direction: row;
    justify-content: space-around;
    padding: 10px 0;
  }
  
  .navbar nav ul {
    flex-direction: row;
  }
  
  .navbar nav li {
    margin: 0;
  }
  
  .separator {
    width: 3px;
    height: 30px;
    border-radius: 2px;
    margin: 10px;
  }
}

@media screen and (max-width: 400px) {
  .pfp {
    display: none;
  }

  .separator {
    display: none;
  }
}

.navbar * {
  transition: .1s ease-out;
}
</style>
