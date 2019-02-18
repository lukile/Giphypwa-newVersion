<template lang="html">
  <div>

    <div id="navbar-brand">
      <p class="title" align="center">{{ title }}</p>
    </div>

    <nav class="navbar" role="navigation" aria-label="dropdown navigation">
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
    </nav>


      <section>
          <div id="gifs">
              <div class="columns is-multiline is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">
                  <div v-for="gif in gifs" class="column is-one-fifth">
                      <article>
                          <img :src="gif.images.original.url"  height="150px" alt="trending">
                      </article>
                  </div>
              </div>
          </div>
      </section>
</div>
</template>

<script lang="js">
  import axios from 'axios';

  export default  {
    data() {
      return {
        title: "Trending Gif",
        gifs: null
      }
    },
    created() {
      axios.get("http://api.giphy.com/v1/gifs/trending?&api_key=XrA7LAMCijdvX3iUk9cu7uO1uxB83IWO&limit=25")
        .then(response => {
          this.gifs = response.data.data;
        })
        .catch(error => {
          console.log("Error : " + error);
        })
    }
}
</script>

<style scoped>

  #gifs {
    margin-left: 300px;
    margin-top: 60px;
    margin-right: 60px;
  }

  #navbar-brand{
    align-self: center;
  }

  nav {
    background: #0e0202;
  }
  nav div {
    background: #d31b46;
  }

  nav a {
    color: #ffffff;
  }

</style>
