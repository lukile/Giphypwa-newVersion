<template lang="html">
  <div>
    <div class="box cta random-title">
      <p class="title" align="center">{{ title }}</p>
    </div>

    <section>
      <div>
        <div class="columns is-multiline is-centered is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd cards-container">
          <div>
            <article class="message is-link">
              <div class="message-header">
                <img :src="randomGif" height="200px" alt="randomGif"/>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="js">
  import axios from 'axios';

  export default {
    data() {
      return {
        title: "Random gif",
        randomGif: ''
      }
    },
    //Fetches when component is created
    created() {
      axios.get("http://api.giphy.com/v1/gifs/random?&api_key=XrA7LAMCijdvX3iUk9cu7uO1uxB83IWO&limit=1")
        .then(response => {
          //JSON parsed
          this.randomGif = response.data.data.images.original.url;
        })
        .catch(error => {
          console.log("Error : " + error)
        })
    },
  }
</script>

<style>
  .random-title {
    background-color: #0e0202;
    height: 70px;
  }

  .title {
    color: white;
  }
</style>
