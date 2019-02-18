<template>
  <section class="demo">

    <nav class="navbar" role="navigation" aria-label="dropdown navigation">
      <div class="navbar-start">
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            Choose a theme
          </a>

          <div class="navbar-dropdown">
            <a class="navbar-item">
              <router-link to="/sticker">Stickers GIFs</router-link>
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item">
              <router-link to="/trending">Trending GIFs</router-link>
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item">
              <router-link to="/random">Random GIFs</router-link>
            </a>
          </div>
        </div>
      </div>


    </nav>


    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>

  </section>
</template>

<script>
    export default {
        name: "Main",
    }
</script>

<style scoped>

  nav {
    background: #1b1b1b;
  }
  nav div {
    background: #d31b46;
  }

  nav a {
    color: #ffffff;
  }

</style>
