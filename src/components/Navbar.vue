<template>
    <div class="navbar">
    <nav>
      <ul>
        <li class="pfp"><a href="#"><img src="https://github.com/eiiko6/LyphDraw-portfolio/blob/assets/pfp-icon.png?raw=true" alt="Pfp"></a></li>
        <div class="separator"></div>
        <li><router-link class="lk" to="/LyphDraw-portfolio/"><img src="https://github.com/eiiko6/LyphDraw-portfolio/blob/assets/icons8_home_1.ico?raw=true" alt="Home"></router-link></li>
        <li class="b"><router-link class="lk" to="/LyphDraw-portfolio/Artworks"><img src="https://github.com/eiiko6/LyphDraw-portfolio/blob/assets/icons8_large_icons.ico?raw=true" alt="Artworks"></router-link></li>
        <li class="b"><router-link class="lk" to="/LyphDraw-portfolio/Links"><img src="https://github.com/eiiko6/LyphDraw-portfolio/blob/assets/icons8_linking_1.ico?raw=true" alt="Links"></router-link></li>
        <li class="b"><router-link class="lk" to="/LyphDraw-portfolio/Misc"><img src="https://github.com/eiiko6/LyphDraw-portfolio/blob/assets/icons8_categorize_5.ico?raw=true" alt="Misc"></router-link></li>
      </ul>
    </nav>
</div>
</template>

<style scoped>
  .navbar {
    z-index: 2;
    user-select: none;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100px;
    background-color: #00000023;
    color: #fff;
    padding: 10px;
    display: flex;
    flex-direction: column;
    border-right: 2px solid #ffffff80;
    /*justify-content: center;*/
  }

  .lk.router-link-active img {
    opacity: .6;
    transform: scale(1.3);
  }

  .navbar::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    backdrop-filter: blur(15px);
    opacity: 0.8;
    z-index: -1;
    background-color: #00000023;
  }

  .navbar nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    left: 0;
  }

  .navbar nav ul li {
    margin-top: 25px;
    margin-bottom: 25px;
  }

  .navbar nav a {
    color: #fff;
    text-decoration: none;
    padding: 10px 10px;
    border-radius: 2px;
    margin: 5px;
    transform: translateZ(0);
    -webkit-tap-highlight-color: transparent;
    left: 0;
  }

  .navbar img {
    width: 45px;
    transition: 0.1s ease-out;
    left: 0;
  }

  .navbar a:hover img {
    color: #333;
    transform: scale(1.3) translateZ(0);
  }

  .navbar a:active img {
    transform: scale(1.15) translateZ(0);
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
      border-right: none;
      border-bottom: 2px solid #ffffff80;
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
