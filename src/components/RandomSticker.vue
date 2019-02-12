<template lang="html">
  <div>
      <div class="box cta random-title">
        <p class="title" align="center">{{ title }}</p>
      </div>

      <section>
        <div class="sc">
          <div class="columns is-multiline is-half-mobile is-half-tablet is-half-desktop is-half-widescreen is-half-fullhd">
            <div class="column is-half is-offset-4">
              <img class="se" :src="randomSticker" height="200px" alt="randomSticker">
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
        search: "",
        title: "Random Sticker",
        randomSticker: ''
      }
    },
    created() {
      axios.get("http://api.giphy.com/v1/stickers/random?&api_key=XrA7LAMCijdvX3iUk9cu7uO1uxB83IWO")
        .then(response => {
          this.randomSticker = response.data.data.images.original.url;
        })
    }
}
</script>

<style scoped>
  .random-title {
    background-color: #0e0202;
    height: 70px;
  }

  .title {
    color: white;
  }
</style>
