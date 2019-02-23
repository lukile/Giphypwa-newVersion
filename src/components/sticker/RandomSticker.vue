<template lang="html">
  <section class="hero-body">
    <div class="container">
      <h2 class="title is-1 has-text-centered">{{ title }}</h2>
      <h3 class="subtitle is-3 has-text-centered">A RandomSticker Presentation, Amazing !</h3>
      <br />

      <nav class="navbar is-transparent" role="navigation" aria-label="dropdown navigation">
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link is-arrowless">
            GIF THEMES
          </a>

          <div class="navbar-dropdown is-boxed">
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

      <div class="navbar-end">
          <div class="navbar-item">
            <div class="control">
              <input class="input" type="text" v-model="keyword" placeholder="ex: cheeseburgers">
            </div>
            <div class="control">
              <button class="button is-info" v-on:click="navigate(keyword)">Search</button>
            </div>
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
  </section>
</template>

<script>
  import axios from 'axios';

  export default  {
    data() {
      return {
        title: "Random Sticker Gif",
        gifs: null,
        keyword:'cheeseburgers',
        transitionName: 'slide-left'
      }
    },
    created() {
      axios.get("http://api.giphy.com/v1/stickers/search?&q=cheeseburgers?&api_key=XrA7LAMCijdvX3iUk9cu7uO1uxB83IWO&limit=25")
        .then(response => {
          this.gifs = response.data.data;
        })
        .catch(error => {
          console.log("Error : " + error);
        })
    },
    methods: {
      navigate: function (keyword) {
        axios.get("http://api.giphy.com/v1/stickers/search?&q="+ keyword +"?&api_key=XrA7LAMCijdvX3iUk9cu7uO1uxB83IWO&limit=25")
          .then(response => {
            this.gifs = response.data.data;
          })
          .catch(error => {
            console.log("Error : " + error);
          })
      }
    }
  }
</script>

<style scoped>
  #gifs {
    margin-top: 60px;
  }

  .title {
    color: white;
  }

  nav {
    background: #00d1b2;
  }

  nav div {
    background: #00d1b2;
    font-family: 'Arial Nova', sans-serif;
    text-decoration-style: solid;
  }

  nav a {
    color: #ffffff;

    -webkit-transition: all 250ms cubic-bezier(0.230, 1.000, 0.320, 1.000);
    -moz-transition: all 250ms cubic-bezier(0.230, 1.000, 0.320, 1.000);
    -ms-transition: all 250ms cubic-bezier(0.230, 1.000, 0.320, 1.000);
    -o-transition: all 250ms cubic-bezier(0.230, 1.000, 0.320, 1.000);
    transition: all 250ms cubic-bezier(0.230, 1.000, 0.320, 1.000);
  }

  nav div .navbar-link:hover{

  }

  .navbar-dropdown .navbar-item:hover {
    text-indent: 20px;
    background-color: #00c0a7 ;
    font-size: larger;
  }
</style>
