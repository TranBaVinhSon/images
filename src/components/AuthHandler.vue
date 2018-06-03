<template lang="html">
  <h1>21312321321</h1>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AuthHandler",
  methods: mapActions(["finalizeLogin"]),
  created() {
    this.finalizeLogin(window.location.hash);
  }
}
</script>

<style lang="css">
</style>
