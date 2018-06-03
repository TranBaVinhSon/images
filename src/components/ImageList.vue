<template lang="html">
  <div v-if="isLoggedIn" class="image-container">
    <img v-for="image in allImages" v-bind:src="image.link"  />
  </div>
  <h2 v-else>Login to get start!</h2>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ImageList",
  computed: mapGetters(["allImages", "isLoggedIn"]),
  methods: mapActions(["fetchImages"]),
  created() {
    this.fetchImages();
  }
}
</script>

<style lang="css" scoped>
.image-container {
  column-count: 3;
  column-gap: 0;
}
img {
  width: 100%;
  padding: 5px;
}
</style>
