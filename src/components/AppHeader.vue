<template lang="html">
  <div class="ui secondary pointing menu">
    <a class="active item">
      Home
    </a>

    <div class="right menu">
      <a href="#" class="ui item" @click="login">
        Login
      </a>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AppHeader",
  // login is name of action
  methods: mapActions(["login"])
};
</script>

<style lang="css">
</style>
