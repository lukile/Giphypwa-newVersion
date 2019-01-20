<template>
  <div id="app">
    <nav class="navbar has-shadow head-bar ">
      <div class="container columns is-multiline is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">
        <div class="navbar-menu" id="navMenu">
          <p class="title-header">GIPHY PWA</p>
        </div>
      </div>
    </nav>

    <router-view></router-view>

    <footer>
      <div id="footer">
      </div>
    </footer>
  </div>
</template>

<script>
    export default {
        name: 'app',
    }
</script>

<style>
  @import '../node_modules/bulma/css/bulma.css';

  body {
    margin: 0;
  }

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
    background-color: #E32551;
    height: 70px;
    margin-bottom: 30px;
  }

  .title-header {
    margin-top: 11px;
    margin-left: 40px;
    font-size: 30px;
    color: white;
    font-weight: bold;
    align-self: center;
  }

</style>
