<template lang="html">
  <div v-if="isLoggedIn" class="dropper">
    <input
      type="file"
      @change="uploadImages($event.target.files)"
      multiple
      accept="image/*" />
    <span>Drag files here!</span>
  </div>
  <h2 v-else>Login to get start!</h2>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "UploadForm",
  methods: mapActions(["uploadImages"]),
  computed: mapGetters(["isLoggedIn"])
}
</script>

<style lang="css" scoped>
.dropper {
  height: 30vh;
  border: 1px dashed black;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.dropper:hover {
  background-color: #eee;
}

input {
  width: 100%;
  height: 30vh;
  position: absolute;
  opacity: 0;
}
</style>
