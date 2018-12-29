<template>
  <div>
    <div class="box cta random-title">
      <div class="columns is-mobile is-centered">
        <div id="app" class="random-text">
        </div>
      </div>
    </div>
    <section class="container random-body-section">
      <div class="level-item">
        <div class="columns is-multiline is-centered cards-container" id="sectioncontainer">
          <div class="column is-narrow">
            <article class="message is-link">
              <div class="message-header">
                <img :src="randomGif" height="200px"/>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
    <section>




    </section>
    <div class="columns is-mobile is-centered">
      <div class="column is-half is-narrow"></div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        search: "",
        title: "Random gif",
        randomGif: ''
      }
    },

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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #35495E;
  }
</style>
