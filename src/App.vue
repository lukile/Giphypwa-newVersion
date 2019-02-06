<template  lang="html">
  <div id="app">
    <nav class="navbar has-shadow head-bar ">
      <div class="container columns is-multiline is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">
        <div>
          <img class="logo-header" src="@/assets/logo_pwa.png"/>
          <p class="title-header" id="title">{{ titleProject }}</p>
          <div class="navbar-burger burger" data-target="navMenu"><span></span><span></span><span></span></div>
        </div>
      </div>
    </nav>

    <router-view></router-view>

    <footer>
      <div id="footer"></div>
    </footer>
  </div>
</template>

<script src="/static/script/upup.min.js"></script>
<script>
    //import UpUp from "upup";
    /*UpUp.start({
        'content-url': 'index.html', // show this when the user is offline
        'assets': [                 // define additional assets needed while offline:
            'android-chrome-192x192.png',           // such as images,
            'android-chrome-512x512.png',           // such as images,
            'apple-touch-icon.png'           // such as images
        ]
    });*/

    export default {
        name: 'app',
        data (){
          return{
            titleProject: 'GiffyCrazy'
          }
        }
    }
</script>

<style>
  @import '../node_modules/bulma/css/bulma.css';

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    background-color: #0e0202;
  }

  main {
    text-align: center;
    margin-top: 40px;
  }

  header {
    margin: 0;
    height: 56px;
    padding: 0 16px 0 24px;
    background-color: #35495E;
    color: #ffffff;
  }

  .head-bar {
    background-color: #0e0202;
    height: 70px;
    margin-bottom: 30px;
  }

  .logo-header {
    width: 5%;
    margin-top: 1.8%;
    margin-left: 2%;
  }

  .title-header {
    font-size: 30px;
    color: white;
    font-weight: bold;
    margin-top: -5.2%;
    margin-left: 8%;
  }

  @media screen and (max-width: 400px) {
    .logo-header {
      width: 5%;
    }

    .title-header {
      margin-top: -5.2%;
      margin-left: 8%;
      text-align: center;
    }
  }

  .burger {
    background-color: #0e0202;
  }
</style>
