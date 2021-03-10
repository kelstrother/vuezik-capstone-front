<template>
  <div class="main">
    <div v-if="error" class="error">
      Could not find the playlists.
    </div>
    <div v-if="documents">
      <div v-for="doc in documents" :key="doc.id">{{ doc.title }}</div>
    </div>
  </div>
</template>

<script>
import getCollection from "../composables/getCollection";

export default {
  name: "Main",
  components: {},
  setup() {
    const { error, documents } = getCollection("playlists");

    return { error, documents };
  },
};
</script>
