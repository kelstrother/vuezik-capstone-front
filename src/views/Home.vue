<template>
  <div class="home">
    <div v-if="error" class="error">
      Could not find the playlists.
    </div>
    <div class="home-pl" v-if="documents">
      <PlaylistView :playlists="documents" />
    </div>
  </div>
</template>

<script>
import PlaylistView from "../components/PlaylistView";
import getCollection from "../composables/getCollection";


export default {
  name: "Home",
  components: { PlaylistView },
  setup() {
    const { error, documents } = getCollection("playlists");

    return { error, documents };
  },
};
</script>

<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #f4f4f4;

  a {
    color: #f4f4f4;
  }
}
</style>
