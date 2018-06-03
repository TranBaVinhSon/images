<template lang="html">
  <h1>1221</h1>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AuthHandler",
  methods: mapActions(["finalizeLogin"]),
  created() {
    console.log("123");
    this.finalizeLogin(window.location.hash);
  }
}
</script>

<style lang="css">
</style>
