<template lang="html">
  <section class="hero-body">
      <div class="container">
          <h2 class="title is-1 has-text-centered">{{ title }}</h2>
          <h3 class="subtitle is-3 has-text-centered">A TrendinGif Presentation, Surprise !</h3>
          <br />
          <div class="columns is-multiline is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">
              <div v-for="gif in gifs" class="column is-one-fifth">
                  <article>
                      <img :src="gif.images.original.url"  height="150px" alt="trending">
                  </article>
              </div>
          </div>
      </div>
  </section>
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
  img {
    margin-top: 50px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: auto;
    height: auto;
    max-height: 150px;
  }

  .random-title {
    background-color: #0e0202;
    height: 70px;
  }

  .title {
    color: white;
  }
</style>
